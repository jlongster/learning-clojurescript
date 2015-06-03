(ns cljs_draw.core
  (:require [clojure.browser.repl :as repl]
            [cljs.core.async :as async
             :refer [<! >! chan dropping-buffer timeout put! close!
                     alts!]]
            [cljs_draw.util :refer [listen get-from-storage]]
            [om.core :as om]
            [om.dom :as dom]
            [goog.color :as color]
            [gamma.api :as g]
            [gamma.program :as p]
            [gamma-driver.drivers.basic :as driver]
            [gamma-driver.protocols :as dp]
            [gamma-driver.api :as gd]
            [thi.ng.math.core :as math :refer [PI]]
            [thi.ng.geom.core :as geom]
            [thi.ng.geom.core.vector :as v]
            [thi.ng.geom.core.matrix :as mat :refer [M44]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;;(defonce conn (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

;; app state

(defonce app-state
  (atom {:colors ["#000000"]
         :current-color "#000000"
         :background-color "#1b1b1b"
         :listening-for-color false
         :paint-meshes []
         :current-mesh nil
         :stroke-history []
         :current-brush :transparent
         :brushes {}
         :render-ctx {:dimen [1200 1200]
                      :boundary 50}}))

;; util

(defn load-texture [url]
  (let [out (chan)
        image (js/Image.)]
    (aset image "onload" (fn [] (put! out image)))
    (aset image "src" url)
    out))

(defn take-into [coll chans]
  (go-loop [coll coll
            chans chans]
    (if (empty? chans)
      coll
      (recur (conj coll (<! (first chans)))
             (rest chans)))))

(defn merge-in! [data key m]
  (swap! data #(assoc % key (merge m (or (get % key) {})))))

(defn chan-handler [chan]
  (fn [e] (put! chan e) e))

(defn signal-after-inactivity [ms]
  (let [in (chan) out (chan)]
    (go-loop []
      (<! in)
      (loop []
        (let [[e sc] (alts! [in (timeout ms)])]
          (if (= sc in)
            (recur)
            (>! out true))))
      (recur))
    {:input in :output out}))

;; brushes (shaders)

(def u-p-matrix
  (g/uniform "uPMatrix" :mat4))

(def u-mv-matrix
  (g/uniform "uMVMatrix" :mat4))

(def u-color
  (g/uniform "uColor" :vec3))

(def u-sampler
  (g/uniform "uSampler" :sampler2D))

(def a-value
  (g/attribute "aValue" :float))

(def a-position
  (g/attribute "aVertexPosition" :vec2))

(def a-texcoord
  (g/attribute "aTexCoord" :vec2))

(def v-value
  (g/varying "vValue" :float :mediump))

(def v-texcoord
  (g/varying "vTexCoord" :vec2 :mediump))

(defn shader-rand [v]
  (g/fract (g/* (g/sin (g/dot (g/vec2 v) (g/vec2 12.9898 78.233)))
                43758.5453)))

(defn shader-lerp [a b s]
  (g/+ a (g/* s (g/- b a))))

(def default-vertex-position
  (-> u-p-matrix
      (g/* u-mv-matrix)
      (g/* (g/vec4 a-position 0 1))))

(defn compile-brush [driver props]
  (dp/program driver (p/program
                      (assoc props :precision {:float :mediump}))))

(defn get-brush [state name]
  (get (:brushes @state) name))

(defn add-brush [name type brush]
  (let [brush (assoc brush :brush-type type :name name)]
    (swap! app-state update-in [:brushes] assoc name brush))

  ;; compile and install in the registry if we have a driver
  (if-let [driver (get-in @app-state [:render-ctx :driver])]
    (swap! app-state
           (fn [data]
             (assoc-in
              data
              [:render-ctx :compiled-programs name]
              (compile-brush
               driver
               {:vertex-shader (:vertex-shader brush)
                :fragment-shader (:fragment-shader brush)})))))
  nil)

(defn add-linear-brush [name brush]
  (add-brush name :linear brush))

(defn add-radial-brush [name brush]
  (add-brush name :radial brush))

(add-linear-brush
 :solid-linear
 {:vertex-shader {(g/gl-position) default-vertex-position
                  v-value a-value}
  :fragment-shader
  {(g/gl-frag-color) (g/vec4 u-color 1)}})

(add-linear-brush
 :transparent
 {:blend {:from "SRC_ALPHA" :to "ONE_MINUS_SRC_ALPHA"}
  :vertex-shader {(g/gl-position) default-vertex-position
                  v-value a-value}
  :fragment-shader
  {(g/gl-frag-color) (g/vec4 u-color .5)}})

(add-linear-brush
 :transparent2
 {:blend {:from "SRC_COLOR" :to "ONE"}
  :vertex-shader {(g/gl-position) default-vertex-position
                  v-value a-value}
  :fragment-shader
  {(g/gl-frag-color) (g/vec4 u-color .5)}})

(add-linear-brush
 :spray
 {:vertex-shader {(g/gl-position) default-vertex-position
                  v-value a-value}
  :fragment-shader
  {(g/gl-frag-color)
   (let [seed (g/vec2 32.2 3.5)]
     (g/vec4 u-color
             (g/if (g/< (g/+ (g/pow v-value 3)
                             (g/* (shader-rand (g/gl-frag-coord)) .5))
                        .5)
               0 1)))
   }})

(add-radial-brush
 :solid-radial
 {:texture "01-pressure-draw/cljs_draw/radial.png"
  :vertex-shader {(g/gl-position) default-vertex-position
                  v-texcoord a-texcoord}
  :fragment-shader (let [tex-color (g/texture2D u-sampler v-texcoord)
                         tex-alpha (g/swizzle tex-color :a)
                         alpha (g/pow (.-E js/Math) (g/- 1 (g/div 1 tex-alpha)))]
                     {(g/gl-frag-color) (g/vec4 u-color alpha)})})

;; saving and loading

(defn save-state []
  (.setItem js/localforage "meshes"
            (apply array (map (fn [m] (.serialize m))
                              (:paint-meshes @app-state))))
  (.setItem js/localforage "current-mesh"
            (.serialize (:current-mesh @app-state)))
  (.setItem js/localforage "app-state"
            (clj->js (select-keys @app-state [:colors :current-color]))))

(defn load-state []
  (go
    (let [get-class (fn [data] (if (= (first data) "linear")
                                 js/LinearStroke
                                 js/RadialStroke))
          current (<! (get-from-storage "current-mesh"))]
      (swap! app-state
             merge
             {:paint-meshes
              (mapv (fn [data] (.unserialize (get-class data) data))
                    (<! (get-from-storage "meshes")))
              :current-mesh
              (.unserialize (get-class current) current)}))
    
    (let [state (<! (get-from-storage "app-state"))]
      (swap! app-state (fn [data]
                         (merge data (js->clj state
                                              :keywordize-keys true)))))))

;; clearing & undo

(defn clear-canvas []
  (if (js/confirm "Are you sure you want to clear the canvas?")
    (swap! app-state merge {:paint-meshes []
                            :current-mesh nil
                            :stroke-history []})))

(defn undo []
  (let [stroke-history (:stroke-history @app-state)
        num-verts (last stroke-history)
        history (vec (drop-last 1 stroke-history))]
    (if-let [current-mesh (:current-mesh @app-state)]
      (do
        (.setNumVertices current-mesh num-verts)
        (swap! app-state assoc :stroke-history history)
        (if (= num-verts 0)
          (swap! app-state
                 (fn [data]
                   (merge
                    data
                    {:paint-meshes
                     (vec (drop-last 1 (:paint-meshes data)))
                     :current-mesh (last (:paint-meshes data))}))))))))

;; stroke management (generating meshes)

(defn make-mesh [color brush]
  (let [class
        (case (:brush-type brush)
          :linear js/LinearStroke
          :radial js/RadialStroke)]
    (new class color (name (:name brush)))))

(defn stroke-started [point] nil)

(defn start-stroke [point color brush]
  (let [[x y] point
        current-mesh (or (:current-mesh @app-state)
                         (make-mesh color brush))]
    (swap! app-state update-in [:stroke-history]
           conj (.getNumVertices current-mesh))

    (stroke-started point)
    
    (if (= (type current-mesh) js/LinearStroke)
      (.setCurrentPos current-mesh x y x y)
      (.setCurrentPos current-mesh x y))

    (if (not (:current-mesh @app-state))
      (swap! app-state assoc :current-mesh current-mesh))))

(defn finalize-stroke []
  (swap! app-state
         (fn [data]
           (assoc
            data
            :paint-meshes (conj (:paint-meshes data)
                                (:current-mesh data))
            :current-mesh nil))))

(defn vec-equals [v1 v2]
  (and (math/delta= (nth v1 0) (nth v2 0))
       (math/delta= (nth v1 1) (nth v2 1))))

;; this function can be overriden at the REPL to dynamically change
;; the behavior of the current stroke
(defn constrain-stroke [point dir]
  (geom/+ point dir))

(defn add-linear-face [mesh p1 p2 p3 v1 v2 v3]
  (.addVertex mesh (nth p1 0) (nth p1 1) v1)
  (.addVertex mesh (nth p2 0) (nth p2 1) v2)
  (.addVertex mesh (nth p3 0) (nth p3 1) v3))

(defn add-to-linear-stroke [point pressure mesh]
  (let [width (* (.pow js/Math pressure 2) 55)
        current-pos (.getCurrentPos mesh)
        last-point1 (v/vec2 (nth current-pos 0) (nth current-pos 1))
        last-point2 (v/vec2 (nth current-pos 2) (nth current-pos 3))
        last-edge (geom/div (geom/- last-point2 last-point1) 2)
        last-middle (geom/+ last-point1 last-edge)
        
        pos (constrain-stroke last-middle (geom/- point last-middle))
        diff (geom/- pos last-middle)]
    (if (> (geom/mag diff) 5)
      (let [normalized (geom/* (geom/normalize diff) width)
            r1 (geom/rotate normalized (/ PI 2))
            r2 (geom/rotate normalized (/ PI -2))
            c1 (geom/+ pos r1)
            c2 (geom/+ pos r2)
            c3 last-point1
            c4 last-point2]

        (if (vec-equals last-point1 last-point2)
          (do
            (add-linear-face mesh last-point1 c1 pos 1 0 1)
            (add-linear-face mesh last-point1 pos c2 1 1 0))
          (do
            (add-linear-face mesh c1 pos c3 0 1 0)
            (add-linear-face mesh c3 pos last-middle 0 1 1)
            (add-linear-face mesh pos c2 last-middle 1 0 1)
            (add-linear-face mesh last-middle c2 c4 1 0 0)))
        (.setCurrentPos
         mesh
         (nth c1 0) (nth c1 1) (nth c2 0) (nth c2 1))))))

(defn add-radial-face [mesh p1 p2 p3 t1 t2 t3]
  (.addVertex mesh (nth p1 0) (nth p1 1) (nth t1 0) (nth t1 1))
  (.addVertex mesh (nth p2 0) (nth p2 1) (nth t2 0) (nth t2 1))
  (.addVertex mesh (nth p3 0) (nth p3 1) (nth t3 0) (nth t3 1)))

(defn add-to-radial-stroke [point pressure mesh]
  (let [radius (/ (* (.pow js/Math pressure 2) 30) 2)
        current-pos (.getCurrentPos mesh)
        last-point (v/vec2 (nth current-pos 0) (nth current-pos 1))
        pos (constrain-stroke last-point (geom/- point last-point))

        c1 (geom/+ pos (v/vec2 (- radius) (- radius)))
        c2 (geom/+ pos (v/vec2 (- radius) radius))
        c3 (geom/+ pos (v/vec2 radius (- radius)))
        c4 (geom/+ pos (v/vec2 radius radius))]
    (add-radial-face mesh c1 c2 c3 [0 0] [0 1] [1 0])
    (add-radial-face mesh c3 c2 c4 [1 0] [0 1] [1 1])))

(defn add-to-stroke [point pressure mesh brush]
  (case (:brush-type brush)
    :linear (add-to-linear-stroke point pressure mesh)
    :radial (add-to-radial-stroke point pressure mesh)))

(defn validate-brush [brush mesh]
  (case (:brush-type brush)
    :linear (assert (= (type mesh) js/LinearStroke))
    :radial (assert (= (type mesh) js/RadialStroke))))

;; rendering

(defn get-perspective-matrix [width height]
  (mat/ortho 0 0 width height 0.1 1000))

(defn init-renderer [node brushes]
  (let [gl (.getContext node "webgl")
        rect (.getBoundingClientRect node)
        w (.-width rect)
        h (.-height rect)
        driver (driver/basic-driver gl)
        programs
        (into {}
              (map (fn [[name brush]]
                     [name (compile-brush driver brush)])
                   brushes))
        pers (get-perspective-matrix w h)]
    (.viewport gl 0 0 (* w 2) (* h 2))
    (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
    (.enable gl (.-BLEND gl))
    (.disable gl (.-DEPTH_TEST gl))

    (go
      (let [get-texs (comp (map (fn [[name brush]] (:texture brush)))
                           (filter identity))
            urls (distinct (sequence get-texs brushes))
            chans (map (fn [url] (load-texture url)) urls)
            textures (into {} (apply map vector
                                     [urls (<! (take-into [] chans))]))]

        {:gl gl
         :driver driver
         :compiled-programs programs
         :pers pers
         :textures textures}))))

(defn render-mesh [gl mesh driver brush program textures pers mv]
  (let [brush-type (:brush-type brush)
        blend (:blend brush)]
    (validate-brush brush mesh)
    (if blend
      (.blendFunc gl (aget gl (:from blend)) (aget gl (:to blend)))
      (.blendFunc gl (.-SRC_ALPHA gl) (.-ONE_MINUS_SRC_ALPHA gl)))
    
    (gd/draw-arrays
     driver
     (gd/bind
      driver
      program
      (case brush-type
        :linear
        {u-p-matrix pers
         u-mv-matrix mv
         u-color (vec (.getColor mesh))
         a-value (.getValues mesh)
         a-position {:data (.getVertices mesh)
                     :count (.getNumVertices mesh)}}
        :radial
        {u-p-matrix pers
         u-mv-matrix mv
         u-color (vec (.getColor mesh))
         u-sampler {:data (get textures (:texture brush))
                    :filter {:min :linear
                             :mag :nearest}
                    :id (:texture brush)
                    :immutable? true}
         a-texcoord (.getTexCoords mesh)
         a-position {:data (.getVertices mesh)
                     :count (.getNumVertices mesh)}}))
     {:draw-mode :triangles})))

(defn render []
  (let [ctx (:render-ctx @app-state)
        bg-color (color/hexToRgb (:background-color @app-state))
        {:keys [gl driver compiled-programs pers textures]} ctx
        mv (geom/translate (mat/matrix44) [0 0 -1])]
    (.clearColor
     gl
     (/ (nth bg-color 0) 255)
     (/ (nth bg-color 1) 255)
     (/ (nth bg-color 2) 255)
     1)
    (.clear gl (.-COLOR_BUFFER_BIT gl))
    
    (doseq [mesh (:paint-meshes @app-state)]
      (let [brush-name (keyword (.getBrush mesh))]
        (render-mesh gl mesh driver
                     (get-brush app-state brush-name)
                     (get compiled-programs brush-name)
                     textures
                     pers mv)))

    (if-let [current-mesh (:current-mesh @app-state)]
      (let [brush-name (keyword (.getBrush current-mesh))]
        (render-mesh
         gl current-mesh driver
         (get-brush app-state brush-name)
         (get compiled-programs brush-name)
         textures
         pers mv)))))

;; this extra function is here so I can re-eval `render` at the REPL
;; (it captures the function otherwise and I can't redefine it)
(defn render-loop []
  (render)
  (js/requestAnimationFrame render-loop))

;; interface

(defn color-input [data owner]
  (reify
    om/IDidMount
    (did-mount [this]
      (let [node (om.core/get-node owner)]
        (.addEventListener
         node "input"
         (fn [e]
           (om/transact! data :pending-color
                         (fn [xs] (.-value (.-target e))))))
        (.addEventListener
         node "change"
         (fn [e]
           (om/transact!
            data
            (fn [xs]
              (assoc xs
                     :colors (conj (:colors xs) (.-value (.-target e)))
                     :current-color (.-value (.-target e)))))))))
    om/IRender
    (render [this]
      (dom/input
       #js {:type "color"
            :value (:pending-color data)
            :style #js
            {:width 50
             :height 50
             :border 0 }}))))

(defn color-item [props owner]
  (reify
    om/IInitState
    (init-state [_]
      {:mousedown (chan)
       :mouseup (chan)
       :mouseout (chan)
       :hide-controls (signal-after-inactivity 3000)
       :expanded false})

    om/IDidMount
    (did-mount [_]
      (let [{:keys [mouseup mousedown mouseout hide-controls]}
            (om/get-state owner)]
        (go-loop []
          (<! mousedown)
          (let [[e sc] (alts! [mouseup (timeout 500)])]
            (if (= sc mouseup)
              (do
                (om/set-state! owner :expanded false)
                ((:onSelect props) (:color props)))
              (do
                (om/set-state! owner :expanded true)
                (>! (:input hide-controls) true)
                (<! mouseup))))
          (recur))

        (go-loop []
          (<! (:output hide-controls))
          (om/set-state! owner :expanded false)
          (recur))))

    om/IWillUnmount
    (will-unmount [_]
      (put! (:output (:hide-controls (om/get-state owner))) true))

    om/IRender
    (render [_]
      (let [{:keys [mouseup mousedown mouseout]} (om/get-state owner)]
        (dom/div
         #js {:style
              #js {:position "relative"
                   :width 50
                   :height 50}}
         (dom/div
          #js {:style
               #js {:height 30
                    :width 60
                    :position "absolute"
                    :padding 5
                    :top 0
                    :bottom 0
                    :margin "auto"
                    :left (if (om/get-state owner :expanded) -60 0)
                    :backgroundColor "#333333"
                    :transition "left .2s"}}
          (dom/a #js {:href "#" :onClick (fn [e] ((:onRemove props) (:color props)))}
                 "remove"))
         (dom/div
          #js {:onMouseDown (chan-handler mousedown)
               :onMouseUp (chan-handler mouseup)
               :onMouseOut (chan-handler mouseout)
               :style
               #js {:position "absolute"
                    :width 50
                    :height 50
                    :cursor "pointer"
                    :backgroundColor (:color props)
                    :border (if (:selected props) "3px solid white" "")}}))))))

(defn color-chooser [data]
  (apply dom/div
   #js {:className "color-chooser"
        :style #js {:position "absolute"
                    :top 0
                    :right 0}}
   (conj
    (mapv (fn [color] (om/build
                       color-item
                       {:color color
                        :selected (= (:current-color data) color)
                        :onSelect
                        (fn [color]
                          (om/transact!
                           data
                           (fn [xs]
                             (assoc xs
                                    :current-color color
                                    :pending-color color))))
                        :onRemove
                        (fn [color]
                          (om/transact!
                           data
                           :colors
                           (fn [xs]
                             (into [] (filter (fn [x] (not= x color)) xs)))))
                        }
                       {:react-key color}))
          (:colors data))
    (dom/div #js {:style #js {:flex 0
                              :textAlign "center"}}
             (om/build color-input data)))))

(defn app [data owner]
  (reify
    om/IDidMount
    (did-mount [this]
      (let [node (om.core/get-node owner)
            container (.querySelector node ".canvas-container")
            canvas (.querySelector node "canvas")]

        (go
          (merge-in! app-state :render-ctx
                     (<! (init-renderer canvas (:brushes @app-state))))
          (load-state)
          (render-loop))

        (let [moved (listen container "pointermove")]
          (go-loop [last-pressure 0]
            (if-let [e (<! moved)]
              (let [boundary (get-in @app-state [:render-ctx :boundary])
                    point (v/vec2 (- (.-layerX e) boundary)
                                  (- (.-layerY e) boundary))
                    pressure (.-mozPressure e)]
                (cond
                  (not (:current-color @app-state))
                  nil
                  
                  (= pressure 0)
                  (if-let [current-mesh (:current-mesh @app-state)]
                    (if (or (not (.isColor current-mesh (:current-color @app-state)))
                            (not (= (keyword (.getBrush current-mesh))
                                    (:current-brush @app-state))))
                      (finalize-stroke)))

                  (= last-pressure 0)
                  (start-stroke point
                                (:current-color @app-state)
                                (get-brush app-state (:current-brush @app-state)))

                  :else
                  (add-to-stroke point pressure
                                 (:current-mesh @app-state)
                                 (get-brush app-state (:current-brush @app-state))))
                (recur pressure)))))

        (let [keydown (listen js/window "keydown"
                              (fn [e]
                                (let [kc (.-keyCode e)]
                                  (if (or (= kc 83) (= kc 90))
                                    (.preventDefault e)))))]
          (go-loop []
            (let [e (<! keydown)]
              (if (.-metaKey e)
                (case (.-keyCode e)
                  83 (save-state)
                  90 (undo)
                  67 (clear-canvas)
                  :else)))
            (recur)))
        ))

    om/IRender
    (render [this]
      (let [[width height] (get-in @app-state [:render-ctx :dimen])
            boundary (get-in @app-state [:render-ctx :boundary])]
        (dom/div
         #js {:id "app"
              :style #js {:height "100%"
                          :backgroundColor "#222222"}}
         (dom/div
          #js {:className "canvas-container"
               :style #js
               {:overflow "hidden"
                :position "absolute"
                :top 0
                :left 0
                :right 0
                :bottom 0
                :margin "auto"
                :border "1px solid #2f2f2f"
                :width (+ (/ width 2) (* boundary 2))
                :height (+ (/ height 2) (* boundary 2))
                :padding 50
                :cursor "crosshair"}}
          (dom/canvas
           #js {:width width
                :height height
                :style #js
                {:width (/ width 2)
                 :height (/ height 2)}}))
         (color-chooser data))))))

(om/root app app-state
         {:target (.getElementById js/document "mount")})


(defn repl-swap! [name val]
  (swap! app-state assoc name val)
  nil)

(comment
  ;; save where the stroke started (needed for sin wave)
  (set! stroke-started
        (fn [point]
          (swap! app-state assoc :start-point point)))

  ;; make a sin wave
  (set! constrain-stroke
        (fn [point dir]
          (let [p (geom/+ point (v/vec2 (nth dir 0) 0))]
            (v/vec2 (nth p 0)
                    (+ (nth (:start-point @app-state) 1)
                       (* (.sin js/Math (/ (nth p 0) 50)) 30))
                    ))))

  ;; lock to the x-axis
  (set! constrain-stroke
        (fn [point dir]
          (geom/+ point (v/vec2 (nth dir 0) 0))))

  ;; add a brush that blends by lightening the color
  (add-linear-brush
   :transparent2
   {:blend {:from "ONE" :to "ONE"}
    :vertex-shader {(g/gl-position) default-vertex-position
                    v-value a-value}
    :fragment-shader
    {(g/gl-frag-color) (g/vec4 u-color 1)}})

  (repl-swap! :current-brush :transparent2)
  (repl-swap! :background-color "#b0ccbb"))
