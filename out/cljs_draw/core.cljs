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
  (atom {:colors ["green" "blue" "pink"]
         :current-color "green"}))

(defn set-canvas-size! [el canvas]
  (let [rect (.getBoundingClientRect el)]
    (set! (.-width canvas) (.-width rect))
    (set! (.-height canvas) (.-height rect))))

(def points (atom []))
(def moved (listen js/window "pointermove"))

(do
  (close! moved)
  (set! moved (listen js/window "pointermove"))
  (go-loop []
    (if-let [e (<! moved)]
      (do
        (if (or (= (.-pointerType e) "mouse")
                ;; There seem to be random events with .5, just take 'em out
                (not= (.-mozPressure e) .5))
          (swap! points conj {:x (.-clientX e)
                              :y (.-clientY e)
                              :pressure (if (= (.-pointerType e) "mouse")
                                          1
                                          (.-mozPressure e))
                              :color (:current-color @app-state)}))
        (recur)))))

(defn render [ctx]
  (doseq [p @points]
    (let [width (* (:pressure p) 20)]
      (set! (.-fillStyle ctx) (:color p))
      (.fillRect ctx (:x p) (:y p) width width))))

(defn render-loop [canvas]
  (let [ctx (.getContext canvas "2d")]
    ((fn pump []
       (render ctx)
       (js/requestAnimationFrame pump)))))

;; interface

(defn color-chooser [data]
  (apply
   dom/div
   #js {:className "color-chooser"
        :style #js {:width 300
                    :display "flex"
                    :flexDirection "column"}}
   (map (fn [color]
          (dom/div
           #js {:onClick (fn []
                           (om/transact! data :current-color
                                         (fn [xs] color)))
                :style
                #js {:flex 1
                     :width "100%"
                     :cursor "pointer"
                     :backgroundColor color}}))
        (:colors data))))

(defn app [data owner]
  (reify
    om/IDidMount
    (did-mount [this]
      (let [node (om.core/get-node owner)
            container (.querySelector node ".canvas-container")
            canvas (.querySelector node "canvas")]
        (set-canvas-size! container canvas)
        (render-loop canvas)

        (let [resized (listen js/window "resize")]
          (go-loop []
            (let [e (<! resized)]
              (set-canvas-size! container canvas))
            (recur)))))
    om/IRender
    (render [this]
      (dom/div
       #js {:id "app"
            :style #js {:display "flex" :height "100%"}}
       (dom/div #js {:className "canvas-container"
                     :style
                     #js {:flex 1
                          :backgroundColor "black"
                          :display "flex"
                          :overflow "hidden"}}
                (dom/canvas nil))
       (color-chooser data)))))

(om/root app app-state
         {:target (.getElementById js/document "mount")})
