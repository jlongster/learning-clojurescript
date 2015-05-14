(ns cljs-draw.core
  (:require [clojure.browser.repl :as repl]
            [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [<! chan timeout put!]]
            [cljs-draw.util :refer [listen]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defonce conn (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

(def canvas (dom/createElement "canvas"))
(def ctx (.getContext canvas "2d"))

(.appendChild js/document.body canvas)

(set! (.-width canvas) (.-innerWidth js/window))
(set! (.-height canvas) (.-innerHeight js/window))

(set! (.-backgroundColor (.-style canvas)) "black")

(defn vec2-sub [v1 v2]
  [(- (nth v1 0) (nth v2 0))
   (- (nth v1 1) (nth v2 1))])

(defn vec2-length [v]
  (Math/sqrt (+ (* (nth v 0) (nth v 0))
                (* (nth v 1) (nth v 1)))))

(defn render [last-point point]
  (let [len (vec2-length (vec2-sub point last-point))
        width (* (Math/pow .9 len) 30)]
    (set! (.-lineWidth ctx) width))
  (set! (.-strokeStyle ctx) "pink")
  (.beginPath ctx)
  (.moveTo ctx (nth last-point 0) (nth last-point 1))
  (.lineTo ctx (nth point 0) (nth point 1))
  (.stroke ctx))


(let [moved (listen js/window "mousemove")]
  (go
    (loop [last-point nil]
      (let [e (<! moved)
            point [(.-clientX e) (.-clientY e)]]
        (render last-point point)
        (recur point)))))
