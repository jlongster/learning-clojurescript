(ns cljs_draw.core2
  (:require [clojure.browser.repl :as repl]
            [cljs.core.async :refer [<! >! chan dropping-buffer timeout put! close!
                                     alts!]]
            [cljs_draw.util :refer [listen get-from-storage]]
            [om.core :as om]
            [om.dom :as dom]
            [gamma.api :as g]
            [gamma.program :as p]
            [gamma-driver.drivers.basic :as driver]
            [gamma-driver.protocols :as dp]
            [thi.ng.geom.core :as geom]
            [thi.ng.geom.core.matrix :as mat :refer [M44]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defonce conn (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

(defonce app-state
  (atom {:colors ["#bbffbb"]
         :current-color "#bbffbb"
         :listening-for-color false}))

(def u-p-matrix
  (g/uniform "uPMatrix" :mat4))

(def u-mv-matrix
  (g/uniform "uMVMatrix" :mat4))

(def a-position
  (g/attribute "aVertexPosition" :vec3))

(def program-source
  (p/program
   {:vertex-shader   {(g/gl-position)   (-> u-p-matrix
                                            (g/* u-mv-matrix)
                                            (g/* (g/vec4 a-position 1)))}
    :fragment-shader {(g/gl-frag-color) (g/vec4 1 1 1 1)}}))

(defn renderable [p mv vertices]
  {u-p-matrix p
   u-mv-matrix mv
   a-position vertices})

(defn get-perspective-matrix [width height]
  (mat/ortho 0 0 width height 0.1 1000))

(defn ->Float32Array [vec]
  (let [arr (js/Float32Array. (count vec))]
    (doseq [[index f] (map vector (iterate inc 0) vec)]
      (aset arr index f))
    arr))

(defn init [node]
  (let [gl (.getContext node "webgl")
        w (.-clientWidth node)
        h (.-clientHeight node)
        driver (driver/basic-driver gl)
        program (dp/program driver program-source)
        pers (get-perspective-matrix w h)
        mv (mat/matrix44)
        triangle-vertices (->Float32Array [[0 100 0]
                                           [100 -100 0]
                                           [-100 -100 0]])]
    (.viewport gl 0 0 w h)
    (.clearColor gl 0 0 0 1)
    (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
    (let [mv (geom/translate mv [200 200 -1])]
      (driver/draw-arrays driver program
                          (renderable pers mv triangle-vertices)
                          {:draw-mode :triangles}))))

(defn app [data owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (let [node (om.core/get-node owner)
            canvas (.querySelector node "canvas")]
        (set! (.-width canvas) 500)
        (set! (.-height canvas) 500)
        (init canvas)))
    om/IRender
    (render [_]
      (dom/div nil
               (dom/canvas nil)))))

(om/root app app-state
         {:target (.getElementById js/document "mount")})
