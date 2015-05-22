(ns cljs_draw.core
  (:require [clojure.browser.repl :as repl]
            [cljs.core.async :refer [<! >! chan dropping-buffer timeout put! close!
                                     alts!]]
            [cljs_draw.util :refer [listen get-from-storage]]
            [om.core :as om]
            [om.dom :as dom])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defonce conn (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

(defonce app-state
  (atom {:colors ["#bbffbb"]
         :current-color "#bbffbb"
         :listening-for-color false}))

(def lines [])
(def cursor [])

(def baked-cvs nil)
(def baked-ctx nil)
(def baked-dimen nil)
(def recent-ctx nil)
(def recent-dimen nil)

(defn save-image []
  (let [data (.getImageData baked-ctx 0 0
                            (first baked-dimen) (second baked-dimen))]
    (.setItem js/localforage "image" (.toDataURL baked-cvs))))

(defn load-image []
  (go
    (let [value (<! (get-from-storage "image"))]
      (if value
        (let [img (js/Image.)]
          (.addEventListener img "load"
                             (fn [e]
                               (.drawImage baked-ctx img 0 0)))
          (set! (.-src img) value))))))

(defn save-state []
  (save-image)
  (.setItem js/localforage "lines" (clj->js lines))
  (.setItem js/localforage "app-state" (clj->js @app-state)))

(defn load-state []
  (load-image)
  (go
    (set! lines (js->clj (<! (get-from-storage "lines"))
                         :keywordize-keys true))
    (let [state (<! (get-from-storage "app-state"))]
      (swap! app-state (fn [x] (js->clj state
                                        :keywordize-keys true))))))

(defn clear-canvas []
  (if (js/confirm "Are you sure you want to clear the canvas?")
    (do
      (reset-canvas baked-ctx baked-dimen)
      (set! lines []))))

(defn set-cursor [x y]
  (set! cursor [x y]))

(defn finalize-stroke []
  (set! lines (conj lines [])))

(defn vec2-length [x y]
  (.sqrt js/Math (+ (* x x) (* y y))))

(defn render-line [ctx line]
  (if (> (count line) 1)
    (doseq [i (range (- (count line) 1))]
      (let [p1 (nth line i)
            p2 (nth line (+ i 1))
            width (* (+ (:pressure p1)
                        (:pressure p2))
                     (* 20 2))]
        (set! (.-lineWidth ctx) (* width 2))
        (set! (.-strokeStyle ctx) (:color p1))
        (.beginPath ctx)
        (.moveTo ctx (* (:x p1) 2) (* (:y p1) 2))
        (.lineTo ctx (* (:x p2) 2) (* (:y p2) 2))
        (.stroke ctx)))))

(defn reset-canvas [ctx dimen]
  (.clearRect ctx 0 0 (first dimen) (second dimen)))

(defn render [baked-ctx recent-ctx]
  (reset-canvas recent-ctx recent-dimen)

  (doseq [line (drop-last 10 lines)]
    (render-line baked-ctx line))
  (doseq [line (take-last 10 lines)]
    (render-line recent-ctx line))


  (let [[x y] cursor
        ctx recent-ctx]
    (set! (.-strokeStyle ctx) "white")
    (set! (.-lineWidth ctx) 1)
    (.beginPath ctx)
    (.moveTo ctx (* (- x 5) 2) (* y 2))
    (.lineTo ctx (* (+ x 5) 2) (* y 2))
    
    (.moveTo ctx (* x 2) (* (- y 5) 2))
    (.lineTo ctx (* x 2) (* (+ y 5) 2))
    (.stroke ctx))
    
  (set! lines (vec (take-last 10 lines))))

(defn render-loop []
  (render baked-ctx recent-ctx)
  (js/requestAnimationFrame render-loop))

(defn undo []
  (set! lines (vec
               (if (= (count (last lines)) 0)
                 (drop-last 2 lines)
                 (drop-last 1 lines)))))

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

(defn app [data owner]
  (reify
    om/IDidMount
    (did-mount [this]
      (let [node (om.core/get-node owner)
            container (.querySelector node ".canvas-container")
            canvases (array-seq (.querySelectorAll node "canvas"))
            baked-canvas (first canvases)
            recent-canvas (second canvases)]
        (set! baked-cvs baked-canvas)
        (set! baked-ctx (.getContext baked-canvas "2d"))
        (set! baked-dimen [(.-width baked-canvas) (.-height baked-canvas)])
        (set! recent-ctx (.getContext recent-canvas "2d"))
        (set! recent-dimen [(.-width recent-canvas) (.-height recent-canvas)])
        (load-state)
        (render-loop)

        (let [moved (listen recent-canvas "pointermove")]
          (go-loop []
            (if-let [e (<! moved)]
              (do
                (set-cursor (.-layerX e) (.-layerY e))
                (cond
                  (not (:current-color @app-state)) nil

                  (= (.-mozPressure e) 0)
                  (do
                    (if (> (count (last lines)) 0)
                      (finalize-stroke)))

                  ;; There seem to be random events with .5, just take 'em out
                  (not= (.-mozPressure e) .5)
                  (set!
                   lines
                   (conj (vec (drop-last 1 lines))
                         (conj (last lines)
                               {:x (.-layerX e)
                                :y (.-layerY e)
                                :pressure (.pow js/Math (.-mozPressure e) 2)
                                :color (:current-color @app-state)}))))
                (recur)))))

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
            (recur)))))

    om/IRender
    (render [this]
      (dom/div
       #js {:id "app"
            :style #js {:height "100%"
                        :backgroundColor "#222222"}}
       (dom/div
        #js {:className "canvas-container"
             :style
             #js {:overflow "hidden"}}
        (let [dimen 1300
              style #js {:position "absolute"
                         :top 0
                         :left 0
                         :right 0
                         :bottom 0
                         :margin "auto"
                         :border "1px solid #333333"
                         :width (/ dimen 2)
                         :height (/ dimen 2)
                         :transformOrigin "0 0"
                         :cursor "none" }]
          #js [(dom/canvas #js {:width dimen
                                :height dimen
                                :style style})
               (dom/canvas #js {:width dimen
                                :height dimen
                                :style style})]))
       (color-chooser data)))))

(om/root app app-state
         {:target (.getElementById js/document "mount")})
 
