(ns cljs_draw.core
  (:require [clojure.browser.repl :as repl]
            [cljs.core.async :refer [<! chan timeout put! close!]]
            [cljs_draw.util :refer [listen]]
            [om.core :as om]
            [om.dom :as dom])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;; (defonce conn (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

(defonce app-state
  (atom {:colors []
         :current-color nil
         :listening-for-color false}))

(defn set-canvas-sizes! [el canvases]
  (let [rect (.getBoundingClientRect el)]
    (doseq [canvas canvases]
      (set! (.-width canvas) (* (.-width rect) 2))
      (set! (.-height canvas) (* (.-height rect) 2)))))

(def lines (atom []))
(def moved (listen js/window "pointermove"))

(defn finalize-stroke []
  (swap! lines conj []))

(let [pressed (listen js/window "gotpointercapture")]
  (go-loop []
    (if-let [e (<! pressed)]
      (.log js/console "down"))))

(let [pressed (listen js/window "lostpointercapture")]
  (go-loop []
    (if-let [e (<! pressed)]
      (.log js/console "up"))))

(do
  (close! moved)
  (set! moved (listen js/window "pointermove"))
  (go-loop []
    (if-let [e (<! moved)]
      (do
        (cond
          (not (:current-color @app-state)) nil

          (= (.-mozPressure e) 0)
          (if (> (count (first @lines)) 0)
            (finalize-stroke))

          ;; There seem to be random events with .5, just take 'em out
          (not= (.-mozPressure e) .5)
          (swap! lines
                 (fn [d x]
                   (conj (vec (drop-last 1 @lines))
                         (conj (last @lines) x)))
                 {:x (.-clientX e)
                  :y (.-clientY e)
                  :pressure (.pow js/Math (.-mozPressure e) 2)
                  :color (:current-color @app-state)}))
        (recur)))))

(defn vec2-length [x y]
  (.sqrt js/Math (+ (* x x) (* y y))))

(defn render [ctx]
  ;;(set! (.-fillStyle ctx) "black")

  (doseq [line @lines]
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
          (.stroke ctx))))))

(def ctx nil)
(defn render-loop []
  (render ctx)
  (js/requestAnimationFrame render-loop))

;; interface

(defn debug [x]
  (.log js/console (type x) x)
  x)

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
                     :current-color (.-value (.-target e)))))))
        ))
    om/IRender
    (render [this]
      (dom/input
       #js {:type "color"
            :value (:pending-color data)
            :style #js
            {:width 50
             :height 50
             :border 0 }}))))

(defn color-chooser [data]
  (apply dom/div
   #js {:className "color-chooser"
        :style #js {:width 50
                    :display "flex"
                    :flexDirection "column"}}
   (conj
    (mapv (fn [color]
            (dom/div
             #js {:onClick (fn []
                             (om/transact!
                              data
                              (fn [xs]
                                (assoc xs
                                  :current-color color
                                  :pending-color color))))
                  :style
                  #js {:flex "0 0 50px"
                       :cursor "pointer"
                       :backgroundColor color
                       :border (if (= (:current-color data) color)
                                 "3px solid white" "")}}))
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
            canvases (array-seq (.querySelectorAll node "canvas"))]
        (set-canvas-sizes! container canvases)
        (set! ctx (.getContext (first canvases) "2d"))
        ;;(render-loop (first canvases) (second canvases))
        (render-loop)

        (let [resized (listen js/window "resize")]
          (go-loop []
            (let [e (<! resized)]
              (set-canvas-sizes! container canvases))
            (recur)))))
    om/IRender
    (render [this]
      (dom/div
       #js {:id "app"
            :style #js {:display "flex" :height "100%"}}
       (dom/div
        #js {:className "canvas-container"
             :style
             #js {:flex 1
                  :backgroundColor "black"
                  :display "flex"
                  :overflow "hidden"}}
        (let [style #js {:position "absolute"
                         :top 0
                         :left 0
                         :transform "scale(.5)"
                         :transformOrigin "0 0"
                         :cursor "crosshair" }]
          #js [(dom/canvas #js {:style style})
               (dom/canvas #js {:style style})]))
       (color-chooser data)))))

(om/root app app-state
         {:target (.getElementById js/document "mount")})
