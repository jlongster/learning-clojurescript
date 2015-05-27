(ns thi.ng.common.math.core
         (:refer-clojure :exclude [bit-count])
                                                 
         (:require-macros [thi.ng.macromath.core :as mm]))

(def ^:const PI Math/PI)
(def ^:const TWO_PI (* PI 2.0))
(def ^:const HALF_PI (/ PI 2.0))
(def ^:const THIRD_PI (/ PI 3.0))
(def ^:const QUARTER_PI (/ PI 4.0))
(def ^:const SIXTH_PI (/ PI 6.0))
(def ^:const THREE_HALVES_PI (* PI 1.5))

(def ^:const MAX 1.7976931348623157E308)
(def ^:const MIN 4.9E-324)

(def ^:const SQRT2 (Math/sqrt 2))
(def ^:const SQRT3 (Math/sqrt 3))
(def ^:const PHI (/ (inc (Math/sqrt 5.0)) 2))

(def ^:const THIRD (/ 1.0 3.0))

(def ^:const LOG2 (Math/log 2.0))

(def ^:const INF+                                       (.-POSITIVE_INFINITY js/Number))
(def ^:const INF-                                       (.-NEGATIVE_INFINITY js/Number))

(def ^:const DEG (/ 180.0 PI))
(def ^:const RAD (/ PI 180.0))
(def ^:dynamic *eps* 1e-6)
(def ^:dynamic *rnd*                                  Math/random)

                                           
       (def abs Math/abs)

(defn abs-diff
  [x y] (abs (- x y)))

(defprotocol PDeltaEquals
  (delta= [a b] [a b eps]))

(extend-protocol PDeltaEquals
                
                                                                                                                         
             
                                                                                                                         
              
                                                                                                                         
               
         number
  (delta= ([a b] (and (number? b) (<= (abs (- a b)) *eps*))) ([a b eps] (and (number? b) (<= (abs (- a b)) eps))))

                                      
         PersistentVector
  (delta=
   ([a b]
      (and (sequential? b)
           (== (count a) (count b))
           (loop [a a, b b]
             (if a
               (if (delta= (first a) (first b))
                 (recur (next a) (next b))
                 false)
               true))))
   ([a b eps]
      (and (sequential? b)
           (== (count a) (count b))
           (loop [a a, b b]
             (if a
               (if (delta= (first a) (first b) eps)
                 (recur (next a) (next b))
                 false)
               true)))))
                                    
         List
  (delta=
   ([a b]
      (and (sequential? b)
           (== (count a) (count b))
           (loop [a a, b b]
             (if a
               (if (delta= (first a) (first b))
                 (recur (next a) (next b))
                 false)
               true))))
   ([a b eps]
      (and (sequential? b)
           (== (count a) (count b))
           (loop [a a, b b]
             (if a
               (if (delta= (first a) (first b) eps)
                 (recur (next a) (next b))
                 false)
               true)))))
                             
         LazySeq
  (delta=
   ([a b]
      (and (sequential? b)
           (== (count a) (count b))
           (loop [a a, b b]
             (if a
               (if (delta= (first a) (first b))
                 (recur (next a) (next b))
                 false)
               true))))
   ([a b eps]
      (and (sequential? b)
           (== (count a) (count b))
           (loop [a a, b b]
             (if a
               (if (delta= (first a) (first b) eps)
                 (recur (next a) (next b))
                 false)
               true)))))
                                                 
         IndexedSeq
  (delta=
   ([a b]
      (and (sequential? b)
           (== (count a) (count b))
           (loop [a a, b b]
             (if a
               (if (delta= (first a) (first b))
                 (recur (next a) (next b))
                 false)
               true))))
   ([a b eps]
      (and (sequential? b)
           (== (count a) (count b))
           (loop [a a, b b]
             (if a
               (if (delta= (first a) (first b) eps)
                 (recur (next a) (next b))
                 false)
               true)))))

  nil
  (delta= ([_ b] (nil? b)) ([_ b _] (nil? b)))
  )

(defn ensure-even
  "Returns x if even or `x+1` if `x` is odd."
  [x] (if (even? x) x (inc x)))

(defn ensure-odd
  "Returns x if odd or `x+1` if `x` is even."
  [x] (if (even? x) (inc x) x))

(defn signum
  ([x] (if (neg? x) -1 (if (zero? x) 0 1)))
  ([x delta]
     (if (delta= 0.0 x delta) 0
         (if (neg? x) -1 1))))
(defn clamp
  [x min max] (if (< x min) min (if (> x max) max x)))

(defn clamp-normalized
  [x] (if (< x -1.0) -1.0 (if (> x 1.0) 1.0 x)))

(defn map-interval
  "Maps x from one interval into another. Intervals can be defined as vectors."
  ([x [in1 in2] [out1 out2]]
     (mm/madd (- out2 out1) (mm/subdiv x in1 in2 in1) out1))
  ([x in1 in2 out1 out2]
     (mm/madd (- out2 out1) (mm/subdiv x in1 in2 in1) out1)))

(defn map-interval-clamped
  ([x [in1 in2] [out1 out2]]
     (map-interval-clamped x in1 in2 out1 out2))
  ([x in1 in2 out1 out2]
     (if (<= x in1)
       out1
       (if (>= x in2)
         out2
         (map-interval x in1 in2 out1 out2))))
  ([x [in1 in2] [out1 out2] [c1 c2]]
     (clamp (map-interval x in1 in2 out1 out2) c1 c2))
  ([x in1 in2 out1 out2 c1 c2]
     (clamp (map-interval x in1 in2 out1 out2) c1 c2)))

(defn in-range?
  "Returns true if x >= min and x <= max."
  ([[min max] x]
     (and (>= x min) (<= x max)))
  ([min max x]
     (and (>= x min) (<= x max))))

(defn wrap-range
  ([x y] (let [x (rem x y)] (if (neg? x) (+ x y) x))))

(defn norm-range
  "Returns lazy-seq of values in the closed interval [0.0, 1.0] at
  resolution 1/x."
  [x] (map #(/ % (double x)) (range (inc x))))
(defn mix
  [a b t] (mm/submadd b a t a))

(defn step
  [edge x] (if (< x edge) 0.0 1.0))

(defn smoothstep
  [e0 e1 x]
  (let [t (clamp (mm/subdiv x e0 e1 e0) 0.0 1.0)]
    (* t (* t (mm/madd t -2.0 3.0)))))
                  
                                   
       (defn floor
         [x] (Math/floor x))

                 
                                  
       (defn ceil
         [x] (Math/ceil x))

(defn roundto
  [x prec] (* (floor (+ (/ x prec) 0.5)) prec))

(defn ceil-pow2
  [x]
  (loop [pow2 1]
    (if (>= pow2 x) pow2 (recur (* pow2 2)))))

                       
                                                              

       (defn floor-pow2
         [x] (Math/pow 2 (int (/ (Math/log x) LOG2))))

(defn bit-count
  [x] (ceil (/ (Math/log x) LOG2)))

(defn trunc
  [x] (if (neg? x) (ceil x) (floor x)))

(defn fract
  [x] (- x (Math/floor x)))

(defn fdim
  [x y] (if (> x y) (- x y) 0))
(defn radians [x] (* x RAD))

(defn degrees [x] (* x DEG))
(defn maxmag
  [x y]
  (let [ax (abs x) ay (abs y)]
    (cond
     (> ax ay) x
     (> ay ax) y
     :default x)))

(defn minmag
  [x y]
  (let [ax (abs x) ay (abs y)]
    (cond
     (< ax ay) x
     (< ay ax) y
     :default x)))

(defn ldexp
  [x k] (* x (Math/pow 2 (int k))))

(defn remquo
  [x y]
  (let [k (/ x y)
        f (fract k)
        k (cond
           (= f 0.5) (if (even? (int k)) (int k) (ceil k))
           (< f 0.5) (floor k)
           :default (ceil k))]
    (- x (* k y))))

(defn hypot
  [x y] (Math/sqrt (mm/madd x x y y)))

(defn rootn
  [x y] (Math/pow x (/ 1.0 y)))

(defn rsqrt
  [x] (let [r (Math/sqrt x)] (if (pos? r) (/ 1.0 r) 0)))

(defn impulse
  [k t]
  (let [h (* k t)] (* h (Math/exp (- 1.0 h)))))
                   
                                                   
                                                              
                                                                                    
       (defn random
         ([] (*rnd*))
         ([max] (* (*rnd*) max))
         ([min max] (mm/submadd max min (*rnd*) min)))

                     
                                                                
       (defn randnorm
         [] (dec (* (*rnd*) 2.0)))
(defn percentile-index
  [n num]
  (dec
   (if (< n 100)
     (int (Math/round (mm/madd (/ n 100.0) num 0.5)))
     num)))

(defn percentile
  [n sorted]
  (->> sorted
       (count)
       (percentile-index n)
       (nth sorted)))

(defn quartile-index
  [n num] (percentile-index (* n 25) num))

(defn quartile-range
  [n num]
  (let [a (quartile-index (dec n) num)
        b (quartile-index n num)]
    [a (if (= n 4) (inc b) b)]))

(defn quartile
  "Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile."
  [n sorted]
  (let [[a b] (quartile-range n (count sorted))]
    (->> sorted (drop a) (take (- b a)))))
(defn normdist-weights
  ([n] (normdist-weights n 1.0))
  ([n scale]
     (let [ws (repeatedly n random)
           s (/ scale (reduce + ws))]
       (map #(* s %) ws))))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/common/math/core.cljx
