(ns cljs_draw.core
  (:require [clojure.browser.repl :as repl]
            [goog.dom :as dom]
            [cljs.core.async :refer [<! chan timeout put!]]
            [ cljs_draw.util :refer [listen]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defonce conn (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

(def canvas (dom/createElement "canvas"))
(def ctx (.getContext canvas "2d"))
(.appendChild js/document.body canvas)

(set! (.-width canvas) (.-innerWidth js/window))
(set! (.-height canvas) (.-innerHeight js/window))
(set! (.-backgroundColor (.-style canvas)) "black")

(def points (atom []))

(defn render []
  (set! (.-fillStyle ctx) "pink")
  (doseq [p @points]
    (let [width (* (:pressure p) 20)]
      (.fillRect ctx (:x p) (:y p) width width)))
  (js/requestAnimationFrame render))

(let [clicked (listen js/window "pointermove")]
  (go
    (while true
      (let [e (<! clicked)]
        ;; There seem to be random events with .5, just take 'em out
        (if (not= (.-mozPressure e) .5)
          (swap! points conj {:x (.-clientX e)
                              :y (.-clientY e)
                              :pressure (.-mozPressure e)}))))))

(render)
