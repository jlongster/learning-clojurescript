(ns cljs_draw.core
  (:require [clojure.browser.repl :as repl]
            [cljs.core.async :refer [<! chan timeout put!]]
            [cljs_draw.util :refer [listen]]
            [om.core :as om]
            [om.dom :as dom])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;; (defonce conn (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

(defn set-canvas-size! [canvas]
  (let [rect (.getBoundingClientRect canvas)]
    (set! (.-width canvas) (.-width rect))
    (set! (.-height canvas) (.-height rect))))

(def points (atom []))

(let [moved (listen js/window "pointermove")]
  (go-loop []
    (let [e (<! moved)]
      (if (or (= (.-pointerType e) "mouse")
              ;; There seem to be random events with .5, just take 'em out
              (not= (.-mozPressure e) .5))
        (swap! points conj {:x (.-clientX e)
                            :y (.-clientY e)
                            :pressure (if (= (.-pointerType e) "mouse")
                                        1
                                        (.-mozPressure e))})))
    (recur)))

(defn render [ctx]
  (set! (.-fillStyle ctx) "pink")
  (doseq [p @points]
    (let [width (* (:pressure p) 20)]
      (.fillRect ctx (:x p) (:y p) width width))))

(defn render-loop [canvas]
  (let [ctx (.getContext canvas "2d")]
    ((fn pump []
       (render ctx)
       (js/requestAnimationFrame pump)))))

;; interface

(defn app [data owner]
  (reify
    om/IDidMount
    (did-mount [this]
      (let [canvas (om.core/get-node owner)]
        (set-canvas-size! canvas)
        (render-loop canvas)

        (let [resized (listen js/window "resize")]
          (go-loop []
            (let [e (<! resized)]
              (set-canvas-size! canvas))
            (recur)))))
    om/IRender
    (render [this]
      (dom/canvas nil))))

(defonce app-state (atom {:text "Hello!"}))

(om/root app app-state
         {:target (.getElementById js/document "mount")})
