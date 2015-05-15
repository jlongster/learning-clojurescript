(ns cljs_draw.util
  (:require [goog.events :as events]
            [cljs.core.async :refer [<! chan timeout put!]]))

(defn listen [el type]
  (let [out (chan)]
    (.addEventListener el type (fn [e] (put! out e)))
    out))
