(ns cljs_draw.core
  (:require [clojure.browser.repl :as repl]
            [cljs.core.async :refer [<! >! chan dropping-buffer timeout put! close!
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

(defonce conn (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

(defonce app-state
  (atom {:colors ["#000000"]
         :current-color "#000000"
         :listening-for-color false}))

(def dimen 1200)
(def boundary 50)
(def paint-meshes [])
(def current-mesh nil)
(def stroke-history [])
(def renderer nil)

(def u-p-matrix
  (g/uniform "uPMatrix" :mat4))

(def u-mv-matrix
  (g/uniform "uMVMatrix" :mat4))

(def u-color
  (g/uniform "uColor" :vec3))

(def a-value
  (g/attribute "aValue" :float))

(def a-position
  (g/attribute "aVertexPosition" :vec2))

(def v-value
  (g/varying "vValue" :float :mediump))

(defn shader-rand [v]
  (g/fract (g/* (g/sin (g/dot (g/vec2 v) (g/vec2 12.9898 78.233)))
                43758.5453)))

(defn shader-lerp [a b s]
  (g/+ a (g/* s (g/- b a))))

(def current-brush :transparent)
(def default-vertex-shader
  {(g/gl-position) (-> u-p-matrix
                       (g/* u-mv-matrix)
                       (g/* (g/vec4 a-position 0 1)))
   v-value a-value})

(def brushes {})
(defn add-brush [name brush]
  (let [program (p/program
                 (assoc brush :precision {:float :mediump}))]
    (set! brushes (assoc brushes name program))
    ;; compile and install in the registry if the renderer exists
    (if renderer
      (set! renderer
            (assoc renderer :programs
                   (assoc (:programs renderer)
                          name
                          (dp/program (:driver renderer) program)))))
    nil))

(add-brush
 :solid
 {:vertex-shader default-vertex-shader
  :fragment-shader
  {(g/gl-frag-color) (g/vec4 u-color 1)}})

(add-brush
 :transparent
 {:vertex-shader default-vertex-shader
  :fragment-shader
  {(g/gl-frag-color) (g/vec4 u-color .4)}})

(add-brush
 :spray
 {:vertex-shader default-vertex-shader
  :fragment-shader
  {(g/gl-frag-color)
   (let [seed (g/vec2 32.2 3.5)]
     (g/vec4 u-color
             (g/if (g/< (g/+ (g/pow v-value 3)
                             (g/* (shader-rand (g/gl-frag-coord)) .5))
                        .5)
               0 1)))
   }})

(defn renderable [p mv color vertices values vertex-count]
  {u-p-matrix p
   u-mv-matrix mv
   u-color (vec color)
   a-value values
   a-position {:data vertices :count vertex-count}})

(defn get-perspective-matrix [width height]
  (mat/ortho 0 0 width height 0.1 1000))

(defn save-state []
  (.setItem js/localforage "meshes" (apply array (map (fn [m] (.serialize m)) paint-meshes)))
  (.setItem js/localforage "current-mesh" (.serialize current-mesh))
  (.setItem js/localforage "app-state" (clj->js @app-state)))

(defn load-state []
  (go
    (set! paint-meshes (mapv (fn [data] (.unserialize js/Mesh2d data))
                             (<! (get-from-storage "meshes"))))
    (set! current-mesh (.unserialize js/Mesh2d
                                     (<! (get-from-storage "current-mesh"))))
    (let [state (<! (get-from-storage "app-state"))]
      (swap! app-state (fn [x] (js->clj state
                                        :keywordize-keys true))))))

(defn clear-canvas []
  (if (js/confirm "Are you sure you want to clear the canvas?")
    (do
      (set! paint-meshes [])
      (set! stroke-history [])
      (set! current-mesh nil))))

(defn finalize-stroke []
  (set! paint-meshes (conj paint-meshes current-mesh))
  (set! current-mesh nil))

(defn start-stroke [point]
  (let [[x y] point]
    (set! stroke-history (conj stroke-history (.getNumVertices current-mesh)))
    (.setCurrentPos current-mesh x y x y)))

;; meshes

(defprotocol IRenderable
  (add-vertex [this x y tracking]))

(deftype LinearStroke [color brush vertices trackings
                       ^:volatile-mutable num-vertices]

  IRenderable
  (add-vertex [_ x y tracking]
    (.maybeResize vertices (+ (* num-vertices 2) 6))
    (.maybeResize trackings (+ num-vertices 3))

    (let [ptr (* num-vertices 2)]
      (.set vertices ptr x)
      (.set vertices (+ ptr 1) y))

    (let [ptr num-vertices]
      (.set trackings ptr tracking))

    (set! num-vertices (+ num-vertices 1))))

(defn make-linear-stroke [color brush]
  (LinearStroke. color brush
                 (js/ResizableFloatArray.) (js/ResizableFloatArray.) 0))

(def x (make-linear-stroke "blue" :blue))
(add-vertex x 3 4 10)
(add-vertex x 3 4 10)
(add-vertex x 3 4 10)
(.log js/console x.vertices)
(.log js/console x.num-vertices)

(defn add-face [mesh p1 p2 p3 v1 v2 v3]
  (.addVertex mesh (nth p1 0) (nth p1 1) v1)
  (.addVertex mesh (nth p2 0) (nth p2 1) v2)
  (.addVertex mesh (nth p3 0) (nth p3 1) v3))

(defn vec-equals [v1 v2]
  (and (math/delta= (nth v1 0) (nth v2 0))
       (math/delta= (nth v1 1) (nth v2 1))))

(defn angle-of-vectors [v1 v2]
  (.acos js/Math
         (/ (geom/dot v1 v2)
            (* (geom/mag v1) (geom/mag v2)))))

(defn add-to-stroke [point pressure]
  (let [width (* (.pow js/Math pressure 2) 60)
        current-pos (.getCurrentPos current-mesh)
        last-point1 (v/vec2 (nth current-pos 0) (nth current-pos 1))
        last-point2 (v/vec2 (nth current-pos 2) (nth current-pos 3))
        last-edge (geom/div (geom/- last-point2 last-point1) 2)
        last-middle (geom/+ last-point1 last-edge)
        
        vec (geom/- (v/vec2 point) last-middle)]
    (if (> (geom/mag vec) 5)
      (let [normalized (geom/* (geom/normalize vec) width)
            r1 (geom/rotate normalized (/ PI 2))
            r2 (geom/rotate normalized (/ PI -2))
            c1-cross (geom/cross last-edge r1)
            c2-cross (geom/cross last-edge r2)
            c1 (geom/+ point r1)
            c2 (geom/+ point r2)
            c3 last-point1
            c4 last-point2]

        (if (vec-equals last-point1 last-point2)
          (do
            (add-face current-mesh last-point1 c1 point 1 0 1)
            (add-face current-mesh last-point1 point c2 1 1 0))
          (do
            (add-face current-mesh c1 point c3 0 1 0)
            (add-face current-mesh c3 point last-middle 0 1 1)
            (add-face current-mesh point c2 last-middle 1 0 1)
            (add-face current-mesh last-middle c2 c4 1 0 0)))
        (.setCurrentPos
         current-mesh
         (nth c1 0) (nth c1 1) (nth c2 0) (nth c2 1))))))

(defn render-mesh [mesh driver program pers mv]
  (gd/draw-arrays driver
                  (gd/bind driver program
                           (renderable pers mv
                                       (.getColor mesh)
                                       (.getVertices mesh)
                                       (.getValues mesh)
                                       (.getNumVertices mesh)))
                  {:draw-mode :triangles}))

(defn render []
  (let [{:keys [gl driver programs pers]} renderer
        mv (geom/translate (mat/matrix44) [0 0 -1])]
    (.clear gl (.-COLOR_BUFFER_BIT gl))

    (doseq [mesh paint-meshes]
      (render-mesh mesh driver ((.getBrush mesh) programs) pers mv))
    (if current-mesh
      (render-mesh
       current-mesh driver
       ((.getBrush current-mesh) programs) pers mv))))

(defn render-loop []
  (render)
  (js/requestAnimationFrame render-loop))

(defn undo []
  (let [num-verts (last stroke-history)
        history (vec (drop-last 1 stroke-history))]
    (if current-mesh
      (do
        (.setNumVertices current-mesh num-verts)
        (set! stroke-history history)
        (if (= num-verts 0)
          (do
            (set! current-mesh (last paint-meshes))
            (set! paint-meshes (vec (drop-last 1 paint-meshes)))))))))

;; interface

(defn debug [x]
  (.log js/console (type x) x)
  x)

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

(defn init [node]
  (let [gl (.getContext node "webgl")
        rect (.getBoundingClientRect node)
        w (.-width rect)
        h (.-height rect)
        driver (driver/basic-driver gl)
        programs
        (into
         {}
         (map (fn [[name brush]]
                [name (dp/program driver brush)])
              brushes))
        pers (get-perspective-matrix w h)]
    (.viewport gl 0 0 (* w 2) (* h 2))
    (.clearColor gl 1 1 1 1)
    (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
    (.blendFunc gl (.-SRC_ALPHA gl) (.-ONE_MINUS_SRC_ALPHA gl))
    (.enable gl (.-BLEND gl))
    (.disable gl (.-DEPTH_TEST gl))

    {:gl gl :driver driver :programs programs :pers pers}))

(defn app [data owner]
  (reify
    om/IDidMount
    (did-mount [this]
      (let [node (om.core/get-node owner)
            container (.querySelector node ".canvas-container")
            canvas (.querySelector node "canvas")]
        
        (set! renderer (init canvas))
        ;;(load-state)
        (render-loop)

        (let [moved (listen container "pointermove")]
          (go-loop [last-pressure 0]
            (if-let [e (<! moved)]
              (let [point (v/vec2 (- (.-layerX e) boundary)
                                    (- (.-layerY e) boundary))
                    pressure (.-mozPressure e)]
                (cond
                  (not (:current-color @app-state))
                  nil
                  
                  (= pressure 0)
                  (if (and
                       current-mesh
                       (or (not (.isColor current-mesh (:current-color @app-state)))
                           (not (= (.getBrush current-mesh) current-brush))))
                    (finalize-stroke))

                  (= last-pressure 0)
                  (do
                    (if (not current-mesh)
                      (set! current-mesh (js/Mesh2d. (:current-color @app-state)
                                                     current-brush)))
                    (start-stroke point))

                  :else
                  (add-to-stroke point pressure))
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
              :width (+ (/ dimen 2) (* boundary 2))
              :height (+ (/ dimen 2) (* boundary 2))
              :padding 50
              :cursor "crosshair"}}
        (dom/canvas
         #js {:width dimen
              :height dimen
              :style #js
              {:width (/ dimen 2)
               :height (/ dimen 2)}}))
       (color-chooser data)))))

(om/root app app-state
         {:target (.getElementById js/document "mount")})


