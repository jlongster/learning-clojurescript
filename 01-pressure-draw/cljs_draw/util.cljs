(ns cljs_draw.util
  (:require [goog.events :as events]
            [cljs.core.async :refer [<! chan timeout put!]]))

(defn listen
  ([el type]
   (listen el type nil))
  ([el type hook]
   (let [out (chan)]
     (.addEventListener el type (fn [e]
                                  (if hook (hook e))
                                  (put! out e)))
     out)))

(defn get-from-storage [name]
  (let [out (chan)]
    (.getItem js/localforage name
              (fn [err value] (put! out value)))
    out))
