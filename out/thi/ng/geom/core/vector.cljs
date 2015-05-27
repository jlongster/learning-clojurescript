(ns thi.ng.geom.core.vector
        
  (:require-macros
   [thi.ng.geom.core.macros.vector :as vm :refer [defswizzle]]
   [thi.ng.macromath.core :as mm])
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.common.math.core :as m :refer [*eps* PI TWO_PI INF- INF+]]
   [thi.ng.common.error :as err]
                                                                    
                                       
                                        ))

(declare V2 V3 vec2 vec3 vec2-reduce* vec3-reduce* swizzle-assoc* swizzle2-fns swizzle3-fns)

(deftype Vec2
                                                            
         [buf ^:mutable _hash _meta]
                       
                      
                                                         

               
            
          
                                            
                                   
                                   
                                   

                          
            
            
                       
                                     
                
                              
                                   
                       
                                
            
               
                       
                                               
                                                      

                                   
                                              
                        
                                             

                      
             
            
                       
                                     
                
                              
                                   
                       
                                
             
               
                       
                                               
                                                      
              
               
                         
                                                     
                                                                  
                                                                             

                              
                                    
                   
                    
                  
            
                      
                               
                                           
              
                                                     
            
              
            
                                                  
                                                              
                                                                      
                                                                      
                                    
                                    
                                                                                                      
             
              
                                                                              

                          
                         
                                                                                       
                                    
                  

                                        
                          
                             
                          
                             
                    
                         
                                    
                                                                       
                             
                                                
                                             
                              
                              
                                                               
            
            
                             
                                             
                                                                               
                                                
                                                                
                                                                   
             
            
                             
                                             
                                                                               
                                                
                                                                 
                                                                    

                
                
            
                             
                                          
                                                    
                                                              
                           
                                                     
               
          
             
                                                  
                                      
                                                    

                          
             
          
                
                      
                                     
                        
                                                             
                                                 
                                                              
                       

                       
                      
                  
                                        
                           
               
                                          
                               
                   
                       

                   
                  
            
                                                                              
                  
                  
                                        
                           
               
                                          
                               
                   
                       
       IMeta
       (-meta [_] _meta)
       IWithMeta
       (-with-meta [_ m] (Vec2. (js/Float32Array. buf) _hash m))

       ICloneable
       (-clone
        [_] (Vec2. (js/Float32Array. buf) _hash _meta))

       ILookup
       (-lookup
        [_ k]
        (if (keyword? k)
          (if-let [f (swizzle2-fns k)]
            (f _)
            (err/key-error! k))
          (if (and (>= k 0) (< k 2))
            (aget buf k)
            (err/key-error! k))))
       (-lookup
        [_ k nf]
        (if (keyword? k)
          (if-let [f (swizzle2-fns k)] (f _) nf)
          (if (and (>= k 0) (< k 2)) (aget buf k) nf)))

       IFn
       (-invoke
        [_ k]
        (if (keyword? k)
          (if-let [f (swizzle2-fns k)]
            (f _)
            (err/key-error! k))
          (if (and (>= k 0) (< k 2))
            (aget buf k)
            (err/key-error! k))))
       (-invoke
        [_ k nf]
        (if (keyword? k)
          (if-let [f (swizzle2-fns k)] (f _) nf)
          (if (and (>= k 0) (< k 2)) (aget buf k) nf)))

       ICounted
       (-count [_] 2)

       IAssociative
       (-contains-key?
        [_ k]
        (if (number? k)
          (and (>= k 0) (< k 2))
          (if (swizzle2-fns k) true false)))
       (-assoc
        [_ k v]
        (cond
            (number? k)  (if (or (== k 0) (== k 1))
                           (let [^doubles b (js/Float32Array. buf)]
                             (aset b k (double v)) (Vec2. b nil _meta))
                           (if (== k 2) (conj _ v) (err/key-error! k)))
            (keyword? k) (if (= :z k)
                           (conj _ v)
                           (Vec2. (swizzle-assoc* buf (js/Float32Array. buf) {\x 0 \y 1} k v) nil _meta))))

       IVector
       (-assoc-n
        [_ n v]
        (let [b (js/Float32Array. buf)] (aset b n v) (Vec2. b nil _meta)))

       ISequential
       ISeq
       (-first
        [_] (aget buf 0))
       (-rest
        [_] (cons (aget buf 1) nil))

       INext
       (-next
        [_] (cons (aget buf 1) nil))

       ISeqable
       (-seq [_] _)

       IReversible
       (-rseq [_] ((swizzle2-fns :yx) _))

       IIndexed
       (-nth [_ n] (if (>= n 0) (if (< n 2) (aget buf n) (err/key-error! n))))
       (-nth [_ n nf] (if (>= n 0) (if (< n 2) (aget buf n) nf)))

       ICollection
       (-conj [_ x] (with-meta (vec3 (aget buf 0) (aget buf 1) x) _meta))

       IStack
       (-peek [_] (aget buf 1))
       (-pop [_] (with-meta [(aget buf 0)] _meta))

       IComparable
       (-compare
        [_ o]
        (if (instance? Vec2 o)
          (let [^doubles b' (.-buf ^Vec2 o)
                c (compare (aget buf 0) (aget b' 0))]
            (if (== 0 c) (compare (aget buf 1) (aget b' 1)) c))
          (let [c (count o)]
            (if (== 2 c) (- (compare o _)) (- 2 c)))))

       IHash
       (-hash
        [_]
        (or _hash
            (set! (.-_hash _)
                  (mix-collection-hash
                   (-> 31 (+ (hash (aget buf 0)))
                       (bit-or 0)
                       (imul 31) (+ (hash (aget buf 1)))
                       (bit-or 0))
                   2))))

       IEquiv
       (-equiv
        [_ o]
        (if (instance? Vec2 o)
            (let [^doubles b' (.-buf ^Vec2 o)]
              (and (== (aget buf 0) (aget b' 0)) (== (aget buf 1) (aget b' 1))))
            (and (sequential? o) (== 2 (count o))
                 (= (aget buf 0) (first o))
                 (= (aget buf 1) (nth o 1)))))

       IReduce
       (-reduce
        [coll f]
        (let [acc (f (aget buf 0) (aget buf 1))] (if (reduced? acc) @acc acc)))
       (-reduce
        [coll f start]
        (let [acc (f start (aget buf 0))]
          (if (reduced? acc)
            @acc
            (let [acc (f acc (aget buf 1))]
              (if (reduced? acc)
                @acc
                acc)))))
Object
(toString [_] (str "[" (aget buf 0) " " (aget buf 1) "]"))
g/PBuffered
(get-buffer [_] buf)
(copy-to-buffer
 [_ dest stride idx]
                                             
                                                   
        (.set dest buf idx)
 (+ idx stride))
g/PMathOps
(+ [_] _)
(+ [_ v]       (vm/v2-op1                             (new js/Float32Array) + buf v _meta))
(+ [_ v1 v2]   (vm/v2-op1-xy                             (new js/Float32Array) + buf v1 v2 0.0 _meta))
(- [_]         (vm/v2-op0                             (new js/Float32Array) - buf _meta))
(- [_ v]       (vm/v2-op1                             (new js/Float32Array) - buf v _meta))
(- [_ v1 v2]   (vm/v2-op1-xy                             (new js/Float32Array) - buf v1 v2 0.0 _meta))
(* [_] _)
(* [_ v]       (vm/v2-op1                             (new js/Float32Array) * buf v _meta))
(* [_ v1 v2]   (vm/v2-op1-xy                             (new js/Float32Array) * buf v1 v2 1.0 _meta))
(div [_]       (vm/v2-op0                             (new js/Float32Array) / buf _meta))
(div [_ v]     (vm/v2-op1                             (new js/Float32Array) / buf v _meta))
(div [_ v1 v2] (vm/v2-op1-xy                             (new js/Float32Array) / buf v1 v2 0.0 _meta))
(madd [_ a b]  (vm/v2-op2                             (new js/Float32Array) * + buf a b 1.0 0.0 _meta))
(addm [_ a b]  (vm/v2-op2                             (new js/Float32Array) + * buf a b 0.0 1.0 _meta))
(msub [_ a b]  (vm/v2-op2                             (new js/Float32Array) * - buf a b 1.0 0.0 _meta))
(subm [_ a b]  (vm/v2-op2                             (new js/Float32Array) - * buf a b 0.0 1.0 _meta))
(abs [_]       (vm/v2-op0                             (new js/Float32Array) m/abs buf _meta))

g/PMutableMathOps
(+! [_]         _)
(+! [_ v]       (vm/v2-op1! + buf v) _)
(+! [_ v1 v2]   (vm/v2-op1-xy! + buf v1 v2 0.0) _)
(-! [_]         (vm/vec-op0! - buf 2) _)
(-! [_ v]       (vm/v2-op1! - buf v) _)
(-! [_ v1 v2]   (vm/v2-op1-xy! - buf v1 v2 0.0) _)
(*! [_]         _)
(*! [_ v]       (vm/v2-op1! * buf v) _)
(*! [_ v1 v2]   (vm/v2-op1-xy! * buf v1 v2 0.0) _)
(div! [_]       (vm/vec-op0! / buf 2) _)
(div! [_ v]     (vm/v2-op1! / buf v) _)
(div! [_ v1 v2] (vm/v2-op1-xy! / buf v1 v2 0.0) _)
(madd! [_ a b]  (vm/v2-op2! * + buf a b 1.0 0.0) _)
(addm! [_ a b]  (vm/v2-op2! + * buf a b 0.0 1.0) _)
(msub! [_ a b]  (vm/v2-op2! * - buf a b 1.0 0.0) _)
(subm! [_ a b]  (vm/v2-op2! - * buf a b 0.0 1.0) _)
(abs! [_]       (vm/vec-op0! m/abs buf 2) _)
g/PClear
(clear* [_] (Vec2.                               (js/Float32Array. 2) nil nil))
(clear! [_] (aset buf 0 0.0) (aset buf 1 0.0) (set! _hash nil) _)
g/PCrossProduct
(cross [_ v] (vm/rewrite-v2-v-no-let buf v 0.0 (mm/msub x vy y vx)))
m/PDeltaEquals
(delta=
 [_ v] (m/delta= _ v *eps*))
(delta=
 [_ v eps]
 (if (sequential? v)
   (if (== 2 (count v))
     (vm/rewrite-v2-v-no-let
      buf v 0.0 (if (m/delta= x vx eps) (m/delta= y vy eps))))))
g/PDistance
(dist
 [_ v] (Math/sqrt (g/dist-squared _ v)))
(dist-squared
 [_ v]
 (vm/rewrite-v2-v buf v 0.0
   (let [dx (- x vx)
         dy (- y vy)]
     (mm/madd dx dx dy dy))))
g/PDotProduct
(dot [_ v] (vm/rewrite-v2-v-no-let buf v 0.0 (mm/madd x vx y vy)))
g/PHeading
(heading
 [_]
 (let [t (Math/atan2 (aget buf 1) (aget buf 0))]
   (if (neg? t) (+ t TWO_PI) t)))
(heading-xy [_] (g/heading _))
(angle-between
 [_ a]
 (let [t (- (g/heading a) (g/heading _))]
   (if (neg? t) (+ t TWO_PI) t)))
(slope-xy [_] (/ (aget buf 1) (aget buf 0)))
g/PInterpolate
(mix
 [_ v]
 (let [^doubles b                               (js/Float32Array. 2)]
   (vm/rewrite-v2-nv-no-let
    buf v 0.0
    (aset b 0 (double (* (+ x vx) 0.5)))
    (aset b 1 (double (* (+ y vy) 0.5))))
   (Vec2. b nil _meta)))
(mix
 [_ v v2]
 (let [^doubles b                               (js/Float32Array. 2)]
   (vm/rewrite-v2-nv-nv
    buf v v2 0.0 0.0
    (aset b 0 (double (+ (* (- bx x) cx) x)))
    (aset b 1 (double (+ (* (- by y) cy) y))))
   (Vec2. b nil _meta)))
(mix
 [_ b c d u v]
 (let [^doubles b'                               (js/Float32Array. 2)
       dv? (instance? Vec2 d)
       dn? (number? d)
       ^doubles dv (if dv? (.-buf ^Vec2 d))
       dx (if dv? (aget dv 0) (if dn? d (nth d 0 0.0)))
       dy (if dv? (aget dv 1) (if dn? d (nth d 1 0.0)))]
   (vm/rewrite-v2-nv-nv
    buf b c 0.0 0.0
    (let [x1 (+ (* (- bx x) u) x)
          y1 (+ (* (- by y) u) y)]
      (aset b' 0 (double (+ (* (- (+ (* (- dx cx) u) cx) x1) v) x1)))
      (aset b' 1 (double (+ (* (- (+ (* (- dy cy) u) cy) y1) v) y1)))))
   (Vec2. b' nil _meta)))
g/PInvert
(invert [_] (g/- _))
g/PLimit
(limit
 [_ len]
 (if (> (g/mag-squared _) (* len len))
   (g/normalize _ len)
   _))
g/PMagnitude
(mag
 [_] (vm/rewrite-v2 buf (Math/sqrt (mm/madd x x y y))))
(mag-squared
 [_] (vm/rewrite-v2 buf (mm/madd x x y y)))
g/PMinMax
(min
 [_ v] (vm/v2-op1                             (new js/Float32Array) mm/min buf v _meta))
(min
 [_ v v2] (vm/v2-op2                             (new js/Float32Array) mm/min mm/min buf v v2 0.0 0.0 _meta))
(max
 [_ v] (vm/v2-op1                             (new js/Float32Array) mm/max buf v _meta))
(max
 [_ v v2] (vm/v2-op2                             (new js/Float32Array) mm/max mm/max buf v v2 0.0 0.0 _meta))
g/PNormal
(normal
 [_]
 (let [^doubles b                               (js/Float32Array. 2)]
   (aset b 0 (double (- (aget buf 1))))
   (aset b 1 (double (aget buf 0)))
   (Vec2. b nil _meta)))
g/PNormalize
(normalize
 [_]
 (vm/rewrite-v2
  buf
  (let [l (Math/sqrt (mm/madd x x y y))]
    (if (pos? l)
      (let [^doubles b                               (js/Float32Array. 2)]
        (aset b 0 (double (/ x l)))
        (aset b 1 (double (/ y l)))
        (Vec2. b nil _meta))
      _))))
(normalize
 [_ len]
 (vm/rewrite-v2
  buf
  (let [l (Math/sqrt (mm/madd x x y y))]
    (if (pos? l)
      (let [l (/ len l)
            ^doubles b                               (js/Float32Array. 2)]
        (aset b 0 (double (* x l)))
        (aset b 1 (double (* y l)))
        (Vec2. b nil _meta))
      _))))
(normalized?
 [_] (m/delta= 1.0 (g/mag-squared _)))
g/PPolar
(as-polar
 [_]
 (let [^doubles b                               (js/Float32Array. 2)]
   (aset b 0 (double (g/mag _)))
   (aset b 1 (double (g/heading _)))
   (Vec2. b nil _meta)))
(as-cartesian
 [_]
 (vm/rewrite-v2
  buf
  (let [^doubles b                               (js/Float32Array. 2)]
    (aset b 0 (double (* x (Math/cos y))))
    (aset b 1 (double (* x (Math/sin y))))
    (Vec2. b nil _meta))))
g/PReflect
(reflect
 [_ v]
 (let [^doubles b                               (js/Float32Array. 2)]
   (vm/rewrite-v2-v buf v 0.0
     (let [d (mm/madd x vx y vy 2)]
       (aset b 0 (double (mm/msub vx d x)))
       (aset b 1 (double (mm/msub vy d y)))
       (Vec2. b nil _meta)))))
g/PScale
(scale
 [_ v]
 (vm/v2-op1                             (new js/Float32Array) * buf v _meta))
(scale
 [_ v1 v2]
 (vm/v2-op1-xy                             (new js/Float32Array) * buf v1 v2 1.0 _meta))

g/PTranslate
(translate
 [_ v]
 (vm/v2-op1                             (new js/Float32Array) + buf v _meta))
(translate
 [_ v1 v2]
 (vm/v2-op1-xy                             (new js/Float32Array) + buf v1 v2 0.0 _meta))

g/PRotate
(rotate
 [_ theta]
 (let [s (Math/sin theta) c (Math/cos theta)
       ^doubles b                               (js/Float32Array. 2)]
   (vm/rewrite-v2
    buf
    (aset b 0 (double (mm/msub x c y s)))
    (aset b 1 (double (mm/madd x s y c)))
    (Vec2. b nil _meta))))

g/PTransform
(transform
 [_ m] (g/transform-vector m _))
g/PVectorReduce
(reduce-vector
 [_ f xs]
 (let [^doubles buf'                               (js/Float32Array. buf)]
                                   
                                   
   (Vec2. (vec2-reduce* f buf' xs) nil _meta)))
(reduce-vector
 [_ f f2 xs]
 (let [^doubles buf'                               (js/Float32Array. buf)]
                                   
                                   
   (vec2-reduce* f buf' xs)
   (aset buf' 0 (double (f2 (aget buf' 0) 0)))
   (aset buf' 1 (double (f2 (aget buf' 1) 1)))
   (Vec2. buf' nil _meta)))
)

(deftype Vec3
                                                            
         [buf ^:mutable _hash _meta]
                       
                      
                                                         

               
            
          
                                            
                                   
                                   
                                   
                                   

                          
            
            
                       
                                     
                
                              
                                    
                       
                                
            
               
                       
                                               
                                                       

                                   
                                              
                        
                                             

                      
             
            
                       
                                     
                
                              
                                    
                       
                                
             
               
                       
                                               
                                                       
              
               
                         
                                                     
                                                                  
                                                                             

                              
                                    
                   
                    
                  
            
                      
                                
                                           
              
                                                     
            
                 
               
                                                      
                                                                 
                                                                         
                                                                         
                                       
                                       
                                                                                                              
             
              
                                                                              

                          
                         
                                                                                                    
                                    
                  

                                        
                          
                             
                          
                    
                         
                                    
                                                                               
                             
          
          
                                         
                                
                                
                              
                                              
                              
                              
                                                               
            
            
                             
                                             
                                                                                                             
                                                
                                                                
                                                                
                                                                   
             
            
                             
                                             
                                                                                                             
                                                
                                                                 
                                                                 
                                                                    

                
                
            
                             
                                          
                                                    
                       
                                                        
                           
                                                    
                    
                
                           
                                                     
               
          
             
                                                  
                                      
                                                  
                                      
                                                    

                          
             
          
                
                      
                                     
                        
                                                             
                                                 
                                                             
                                                 
                                                              
                       

                       
                      
                  
                                        
                           
               
                                          
                               
                   
                                              
                                   
                       
                             

                   
                  
            
                                               
                           
               
                                          
                               
                   
                       
                  
                  
                                        
                           
               
                                          
                               
                   
                                              
                                   
                       
                             
       IMeta
       (-meta [_] _meta)
       IWithMeta
       (-with-meta [_ m] (Vec3. (js/Float32Array. buf) _hash m))

       ICloneable
       (-clone
        [_] (Vec3. (js/Float32Array. buf) _hash _meta))

       ILookup
       (-lookup
        [_ k]
        (if (keyword? k)
          (if-let [f (swizzle3-fns k)]
            (f _)
            (err/key-error! k))
          (if (and (>= k 0) (<= k 2))
            (aget buf k)
            (err/key-error! k))))
       (-lookup
        [_ k nf]
        (if (keyword? k)
          (if-let [f (swizzle3-fns k)]
            (f _)
            (err/key-error! k))
          (if (and (>= k 0) (<= k 2))
            (aget buf k)
            (err/key-error! k))))

       IFn
       (-invoke
        [_ k]
        (if (keyword? k)
          (if-let [f (swizzle3-fns k)]
            (f _)
            (err/key-error! k))
          (if (and (>= k 0) (<= k 2))
            (aget buf k)
            (err/key-error! k))))
       (-invoke
        [_ k nf]
        (if (keyword? k)
          (if-let [f (swizzle3-fns k)] (f _) nf)
          (if (and (>= k 0) (<= k 2)) (aget buf k) nf)))

       ICounted
       (-count [_] 3)

       IAssociative
       (-contains-key?
        [_ k]
        (if (number? k)
          (and (>= k 0) (<= k 2))
          (if (swizzle3-fns k) true false)))
       (-assoc
        [_ k v]
        (cond
            (number? k)  (if (and (>= k 0) (<= k 2))
                           (let [^doubles b (js/Float32Array. buf)]
                             (aset b k (double v)) (Vec3. b nil _meta))
                           (if (== k 3) (conj _ v) (err/key-error! k)))
            (keyword? k) (if (= :w k)
                           (conj _ v)
                           (Vec3. (swizzle-assoc* buf (js/Float32Array. buf) {\x 0 \y 1 \z 2} k v) nil _meta))))

       IVector
       (-assoc-n
        [_ n v]
        (let [b (js/Float32Array. buf)] (aset b n v) (Vec3. b nil _meta)))

       ISequential
       ISeq
       (-first
        [_] (aget buf 0))
       (-rest
        [_] (cons (aget buf 1) (cons (aget buf 2) nil)))

       INext
       (-next
        [_] (cons (aget buf 1) (cons (aget buf 2) nil)))

       ISeqable
       (-seq [_] _)

       IReversible
       (-rseq [_] ((swizzle3-fns :zyx) _))

       IIndexed
       (-nth [_ n] (if (>= n 0) (if (< n 3) (aget buf n) (err/key-error! n))))
       (-nth [_ n nf] (if (>= n 0) (if (< n 3) (aget buf n) nf)))

       ICollection
       (-conj [_ x] (with-meta [(aget buf 0) (aget buf 1) (aget buf 2) x] _meta))

       IStack
       (-peek [_] (aget buf 2))
       (-pop
        [_]
        (let [b (js/Float32Array. 2)]
         (aset b 0 (aget buf 0))
         (aset b 1 (aget buf 1))
         (Vec2. b nil _meta)))

       IComparable
       (-compare
        [_ o]
        (if (instance? Vec3 o)
          (let [^doubles b' (.-buf ^Vec3 o)
                c (compare (aget buf 0) (aget b' 0))]
            (if (== 0 c)
              (let [c (compare (aget buf 1) (aget b' 1))]
                (if (== 0 c)
                  (compare  (aget buf 2) (aget b' 2))
                  c))
              c))
          (let [c (count o)]
            (if (== 3 c) (- (compare o _)) (- 3 c)))))

       IHash
       (-hash
        [_]
        (or _hash
            (set! (.-_hash _)
                  (mix-collection-hash
                   (-> 31 (+ (hash (aget buf 0)))
                       (bit-or 0)
                       (imul 31) (+ (hash (aget buf 1)))
                       (bit-or 0)
                       (imul 31) (+ (hash (aget buf 2)))
                       (bit-or 0))
                   3))))

       IEquiv
       (-equiv
        [_ o]
        (if (instance? Vec3 o)
            (let [^doubles b' (.-buf ^Vec3 o)]
              (and (== (aget buf 0) (aget b' 0)) (== (aget buf 1) (aget b' 1)) (== (aget buf 2) (aget b' 2))))
            (and (sequential? o) (== 3 (count o))
                 (= (aget buf 0) (first o))
                 (= (aget buf 1) (nth o 1))
                 (= (aget buf 2) (nth o 2)))))

       IReduce
       (-reduce
        [coll f]
        (let [acc (f (aget buf 0) (aget buf 1))]
          (if (reduced? acc)
            @acc
            (let [acc (f acc (aget buf 2))]
              (if (reduced? acc)
                @acc
                acc)))))
       (-reduce
        [coll f start]
        (let [acc (f start (aget buf 0))]
          (if (reduced? acc)
            @acc
            (let [acc (f acc (aget buf 1))]
              (if (reduced? acc)
                @acc
                (let [acc (f acc (aget buf 2))]
                  (if (reduced? acc)
                    @acc
                    acc)))))))
Object
(toString [_] (str "[" (aget buf 0) " " (aget buf 1) " " (aget buf 2) "]"))
g/PBuffered
(get-buffer [_] buf)
(copy-to-buffer
 [_ dest stride idx]
                                             
                                                   
                                                   
        (.set dest buf idx)
 (+ idx stride))
g/PMathOps
(+ [_] _)
(+ [_ v]       (vm/v3-op1                             (new js/Float32Array) + buf v _meta))
(+ [_ v1 v2]   (vm/v3-op2                             (new js/Float32Array) + + buf v1 v2 0.0 0.0 _meta))
(+ [_ x y z]   (vm/v3-op1-xyz                             (new js/Float32Array) + buf x y z _meta))
(- [_]         (vm/v3-op0                             (new js/Float32Array) - buf _meta))
(- [_ v]       (vm/v3-op1                             (new js/Float32Array) - buf v _meta))
(- [_ v1 v2]   (vm/v3-op2                             (new js/Float32Array) - - buf v1 v2 0.0 0.0 _meta))
(- [_ x y z]   (vm/v3-op1-xyz                             (new js/Float32Array) - buf x y z _meta))
(* [_] _)
(* [_ v]       (vm/v3-op1                             (new js/Float32Array) * buf v _meta))
(* [_ v1 v2]   (vm/v3-op2                             (new js/Float32Array) * * buf v1 v2 0.0 0.0 _meta))
(* [_ x y z]   (vm/v3-op1-xyz                             (new js/Float32Array) * buf x y z _meta))
(div [_]       (vm/v3-op0                             (new js/Float32Array) / buf _meta))
(div [_ v]     (vm/v3-op1                             (new js/Float32Array) / buf v _meta))
(div [_ v1 v2] (vm/v3-op2                             (new js/Float32Array) / / buf v1 v2 0.0 0.0 _meta))
(div [_ x y z] (vm/v3-op1-xyz                             (new js/Float32Array) / buf x y z _meta))
(madd [_ a b]  (vm/v3-op2                             (new js/Float32Array) * + buf a b 1.0 0.0 _meta))
(addm [_ a b]  (vm/v3-op2                             (new js/Float32Array) + * buf a b 0.0 1.0 _meta))
(msub [_ a b]  (vm/v3-op2                             (new js/Float32Array) * - buf a b 1.0 0.0 _meta))
(subm [_ a b]  (vm/v3-op2                             (new js/Float32Array) - * buf a b 0.0 1.0 _meta))
(abs [_]       (vm/v3-op0                             (new js/Float32Array) m/abs buf _meta))

g/PMutableMathOps
(+! [_]         _)
(+! [_ v]       (vm/v3-op1! + buf v) _)
(+! [_ v1 v2]   (vm/v3-op2! + + buf v1 v2 0.0 0.0) _)
(+! [_ x y z]   (vm/v3-op1-xyz! + buf x y z) _)
(-! [_]         (vm/vec-op0! - buf 3) _)
(-! [_ v]       (vm/v3-op1! - buf v) _)
(-! [_ v1 v2]   (vm/v3-op2! - - buf v1 v2 0.0 0.0) _)
(-! [_ x y z]   (vm/v3-op1-xyz! - buf x y z) _)
(*! [_]         _)
(*! [_ v]       (vm/v3-op1! * buf v) _)
(*! [_ v1 v2]   (vm/v3-op2! * * buf v1 v2 0.0 0.0) _)
(*! [_ x y z]   (vm/v3-op1-xyz! * buf x y z) _)
(div! [_]       (vm/vec-op0! / buf 3) _)
(div! [_ v]     (vm/v3-op1! / buf v) _)
(div! [_ v1 v2] (vm/v3-op2! / / buf v1 v2 0.0 0.0) _)
(div! [_ x y z] (vm/v3-op1-xyz! / buf x y z) _)
(madd! [_ a b]  (vm/v3-op2! * + buf a b 1.0 0.0) _)
(addm! [_ a b]  (vm/v3-op2! + * buf a b 0.0 1.0) _)
(msub! [_ a b]  (vm/v3-op2! * - buf a b 1.0 0.0) _)
(subm! [_ a b]  (vm/v3-op2! - * buf a b 0.0 1.0) _)
(abs! [_]       (vm/vec-op0! m/abs buf 3) _)
g/PClear
(clear* [_] (Vec3.                               (js/Float32Array. 3) nil nil))
(clear! [_] (aset buf 0 0.0) (aset buf 1 0.0) (aset buf 2 0.0) (set! _hash nil) _)
g/PCrossProduct
(cross
 [_ v]
 (let [^doubles b                               (js/Float32Array. 3)]
   (vm/rewrite-v3-v buf v 0.0
     (aset b 0 (double (mm/msub y vz vy z)))
     (aset b 1 (double (mm/msub z vx vz x)))
     (aset b 2 (double (mm/msub x vy vx y))))
   (Vec3. b nil _meta)))
m/PDeltaEquals
(delta=
 [_ v] (m/delta= _ v *eps*))
(delta=
 [_ v eps]
 (if (sequential? v)
   (if (== 3 (count v))
     (vm/rewrite-v3-v-no-let
      buf v 0.0
      (if (m/delta= x vx eps)
        (if (m/delta= y vy eps)
          (m/delta= z vz eps)))))))
g/PDistance
(dist
 [_ v] (Math/sqrt (g/dist-squared _ v)))
(dist-squared
 [_ v]
 (vm/rewrite-v3-v buf v 0.0
   (let [dx (- x vx)
         dy (- y vy)
         dz (- z vz)]
     (mm/madd dx dx dy dy dz dz))))
g/PDotProduct
(dot [_ v] (vm/rewrite-v3-v-no-let buf v 0.0 (+ (+ (* x vx) (* y vy)) (* z vz))))
g/PHeading
(heading [_] (g/heading-xy _))
(heading-xy
 [_]
 (let [t (Math/atan2 (aget buf 1) (aget buf 0))]
   (if (neg? t) (+ t TWO_PI) t)))
(heading-xz
 [_]
 (let [t (Math/atan2 (aget buf 2) (aget buf 0))]
   (if (neg? t) (+ t TWO_PI) t)))
(heading-yz
 [_]
 (let [t (Math/atan2 (aget buf 2) (aget buf 1))]
   (if (neg? t) (+ t TWO_PI) t)))
(angle-between
 [_ v]
 (let [v (if (instance? Vec3 v) v (vec3 v))]
   (Math/acos (g/dot (g/normalize _) (g/normalize v)))))
(slope-xy [_] (/ (aget buf 1) (aget buf 0)))
(slope-xz [_] (/ (aget buf 2) (aget buf 0)))
(slope-yz [_] (/ (aget buf 2) (aget buf 1)))
g/PInterpolate
(mix
 [_ v]
 (let [^doubles b                               (js/Float32Array. 3)]
   (vm/rewrite-v3-nv-no-let
    buf v 0.0
    (aset b 0 (double (* (+ x vx) 0.5)))
    (aset b 1 (double (* (+ y vy) 0.5)))
    (aset b 2 (double (* (+ z vz) 0.5))))
   (Vec3. b nil _meta)))
(mix
 [_ v v2]
 (let [^doubles b                               (js/Float32Array. 3)]
   (vm/rewrite-v3-nv-nv
    buf v v2 0.0 0.0
    (aset b 0 (double (+ (* (- bx x) cx) x)))
    (aset b 1 (double (+ (* (- by y) cy) y)))
    (aset b 2 (double (+ (* (- bz z) cz) z))))
   (Vec3. b nil _meta)))
(mix
 [_ b c d u v]
 (let [^doubles b'                               (js/Float32Array. 3)
       dv? (instance? Vec3 d)
       dn? (number? d)
       ^doubles dv (if dv? (.-buf ^Vec3 d))
       dx (if dv? (aget dv 0) (if dn? d (nth d 0 0.0)))
       dy (if dv? (aget dv 1) (if dn? d (nth d 1 0.0)))
       dz (if dv? (aget dv 2) (if dn? d (nth d 2 0.0)))]
   (vm/rewrite-v3-nv-nv
    buf b c 0.0 0.0
    (let [x1 (+ (* (- bx x) u) x)
          y1 (+ (* (- by y) u) y)
          z1 (+ (* (- bz z) u) z)]
      (aset b' 0 (double (+ (* (- (+ (* (- dx cx) u) cx) x1) v) x1)))
      (aset b' 1 (double (+ (* (- (+ (* (- dy cy) u) cy) y1) v) y1)))
      (aset b' 2 (double (+ (* (- (+ (* (- dz cz) u) cz) z1) v) z1)))))
   (Vec3. b' nil _meta)))
g/PInvert
(invert [_] (g/- _))
g/PLimit
(limit
 [_ len]
 (if (> (g/mag-squared _) (* len len))
   (g/normalize _ len)
   _))
g/PMagnitude
(mag
 [_] (vm/rewrite-v3 buf (Math/sqrt (mm/madd x x y y z z))))
(mag-squared
 [_] (vm/rewrite-v3 buf (mm/madd x x y y z z)))
g/PMinMax
(min
 [_ v] (vm/v3-op1                             (new js/Float32Array) mm/min buf v _meta))
(min
 [_ v v2] (vm/v3-op2                             (new js/Float32Array) mm/min mm/min buf v v2 0.0 0.0 _meta))
(max
 [_ v] (vm/v3-op1                             (new js/Float32Array) mm/max buf v _meta))
(max
 [_ v v2] (vm/v3-op2                             (new js/Float32Array) mm/max mm/max buf v v2 0.0 0.0 _meta))
g/PNormalize
(normalize
 [_]
 (vm/rewrite-v3
  buf
  (let [l (Math/sqrt (mm/madd x x y y z z))]
    (if (pos? l)
      (let [^doubles b                               (js/Float32Array. 3)]
        (aset b 0 (double (/ x l)))
        (aset b 1 (double (/ y l)))
        (aset b 2 (double (/ z l)))
        (Vec3. b nil _meta))
      _))))
(normalize
 [_ len]
 (vm/rewrite-v3
  buf
  (let [l (Math/sqrt (mm/madd x x y y z z))]
    (if (pos? l)
      (let [l (/ len l)
            ^doubles b                               (js/Float32Array. 3)]
        (aset b 0 (double (* x l)))
        (aset b 1 (double (* y l)))
        (aset b 2 (double (* z l)))
        (Vec3. b nil _meta))
      _))))
(normalized?
 [_] (m/delta= 1.0 (g/mag-squared _)))
g/PPolar
(as-polar
 [_]
 (let [r (g/mag _)
       ^doubles b                               (js/Float32Array. 3)]
   (aset b 0 (double r))
   (aset b 1 (double (Math/asin (/ (aget buf 2) r))))
   (aset b 2 (double (Math/atan2 (aget buf 1) (aget buf 0))))
   (Vec3. b nil _meta)))
(as-cartesian
 [_]
 (let [b buf
       x (aget b 0)
       y (aget b 1)
       z (aget b 2)
       rcos (* x (Math/cos y))
       ^doubles b'                               (js/Float32Array. 3)]
   (aset b' 0 (double (* rcos (Math/cos z))))
   (aset b' 1 (double (* rcos (Math/sin z))))
   (aset b' 2 (double (* x    (Math/sin y))))
   (Vec3. b' nil _meta)))
g/PReflect
(reflect
 [_ v]
 (let [^doubles b                               (js/Float32Array. 3)]
   (vm/rewrite-v3-v buf v 0.0
     (let [d (* (+ (+ (* x vx) (* y vy)) (* z vz)) 2.0)]
       (aset b 0 (double (mm/msub vx d x)))
       (aset b 1 (double (mm/msub vy d y)))
       (aset b 2 (double (mm/msub vz d z)))
       (Vec3. b nil _meta)))))
g/PScale
(scale
 [_ v]
 (vm/v3-op1                             (new js/Float32Array) * buf v _meta))
(scale
 [_ v1 v2]
 (vm/v3-op2                             (new js/Float32Array) * * buf v1 v2 1.0 1.0 _meta))
(scale
 [_ x y z]
 (vm/v3-op1-xyz                             (new js/Float32Array) * buf x y z _meta))

g/PTranslate
(translate
 [_ v]
 (vm/v3-op1                             (new js/Float32Array) + buf v _meta))
(translate
 [_ v1 v2]
 (vm/v3-op2                             (new js/Float32Array) + + buf v1 v2 0.0 0.0 _meta))
(translate
 [_ x y z]
 (vm/v3-op1-xyz                             (new js/Float32Array) + buf x y z _meta))

g/PRotate
(rotate [_ theta] (g/rotate-z _ theta))

g/PRotate3D
(rotate-x
 [_ theta]
 (let [s (Math/sin theta) c (Math/cos theta)
       ^doubles b                               (js/Float32Array. 3)]
   (vm/rewrite-v3
    buf
    (aset b 0 (double x))
    (aset b 1 (double (mm/msub y c z s)))
    (aset b 2 (double (mm/madd y s z c)))
    (Vec3. b nil _meta))))
(rotate-y
 [_ theta]
 (let [s (Math/sin theta) c (Math/cos theta)
       ^doubles b                               (js/Float32Array. 3)]
   (vm/rewrite-v3
    buf
    (aset b 0 (double (mm/madd x c z s)))
    (aset b 1 (double y))
    (aset b 2 (double (mm/msub z c x s)))
    (Vec3. b nil _meta))))
(rotate-z
 [_ theta]
 (let [s (Math/sin theta) c (Math/cos theta)
       ^doubles b                               (js/Float32Array. 3)]
   (vm/rewrite-v3
    buf
    (aset b 0 (double (mm/msub x c y s)))
    (aset b 1 (double (mm/madd x s y c)))
    (aset b 2 (double z))
    (Vec3. b nil _meta))))
(rotate-around-axis
 [_ v theta]
 (vm/rewrite-v3-v
  buf v 0.0
  (let [ux' (* vx x), uy' (* vx y), uz' (* vx z)
        vx' (* vy x), vy' (* vy y), vz' (* vy z)
        wx' (* vz x), wy' (* vz y), wz' (* vz z)
        vx2 (* vx vx), vy2 (* vy vy), vz2 (* vz vz)
        s (Math/sin theta), c (Math/cos theta)
        uvw (mm/add ux' vy' wz')
        ^doubles b                               (js/Float32Array. 3)]
    (aset b 0 (double (mm/madd uvw vx
                               (mm/msub (+ vy2 vz2) x (+ vy' wz') vx) c
                               (mm/subm vz' wy' s))))

    (aset b 1 (double (mm/madd uvw vy
                               (mm/msub (+ vx2 vz2) y (+ ux' wz') vy) c
                               (mm/subm wx' uz' s))))

    (aset b 2 (double (mm/madd uvw vz
                               (mm/msub (+ vx2 vy2) z (+ ux' vy') vz) c
                               (mm/subm uy' vx' s))))
    (Vec3. b nil _meta))))

g/PTransform
(transform
 [_ m] (g/transform-vector m _))
g/PVectorReduce
(reduce-vector
 [_ f xs]
 (let [^doubles buf'                               (js/Float32Array. buf)]
                                   
                                   
                                   
   (Vec3. (vec3-reduce* f buf' xs) nil _meta)))
(reduce-vector
 [_ f f2 xs]
 (let [^doubles buf'                               (js/Float32Array. buf)]
                                   
                                   
                                   
   (vec3-reduce* f buf' xs)
   (aset buf' 0 (double (f2 (aget buf' 0) 0)))
   (aset buf' 1 (double (f2 (aget buf' 1) 1)))
   (aset buf' 2 (double (f2 (aget buf' 2) 2)))
   (Vec3. buf' nil _meta)))
)

(defswizzle                             (new js/Float32Array) x)
(defswizzle                             (new js/Float32Array) xx)
(defswizzle                             (new js/Float32Array) xxx)
(defswizzle                             (new js/Float32Array) xxy)
(defswizzle                             (new js/Float32Array) xxz)
(defswizzle                             (new js/Float32Array) xy)
(defswizzle                             (new js/Float32Array) xyx)
(defswizzle                             (new js/Float32Array) xyy)
(defswizzle                             (new js/Float32Array) xyz)
(defswizzle                             (new js/Float32Array) xz)
(defswizzle                             (new js/Float32Array) xzx)
(defswizzle                             (new js/Float32Array) xzy)
(defswizzle                             (new js/Float32Array) xzz)
(defswizzle                             (new js/Float32Array) y)
(defswizzle                             (new js/Float32Array) yx)
(defswizzle                             (new js/Float32Array) yxx)
(defswizzle                             (new js/Float32Array) yxy)
(defswizzle                             (new js/Float32Array) yxz)
(defswizzle                             (new js/Float32Array) yy)
(defswizzle                             (new js/Float32Array) yyx)
(defswizzle                             (new js/Float32Array) yyy)
(defswizzle                             (new js/Float32Array) yyz)
(defswizzle                             (new js/Float32Array) yz)
(defswizzle                             (new js/Float32Array) yzx)
(defswizzle                             (new js/Float32Array) yzy)
(defswizzle                             (new js/Float32Array) yzz)
(defswizzle                             (new js/Float32Array) z)
(defswizzle                             (new js/Float32Array) zx)
(defswizzle                             (new js/Float32Array) zxx)
(defswizzle                             (new js/Float32Array) zxy)
(defswizzle                             (new js/Float32Array) zxz)
(defswizzle                             (new js/Float32Array) zy)
(defswizzle                             (new js/Float32Array) zyx)
(defswizzle                             (new js/Float32Array) zyy)
(defswizzle                             (new js/Float32Array) zyz)
(defswizzle                             (new js/Float32Array) zz)
(defswizzle                             (new js/Float32Array) zzx)
(defswizzle                             (new js/Float32Array) zzy)
(defswizzle                             (new js/Float32Array) zzz)

(def swizzle2-fns
  {:x x :xx xx :xy xy :y y :yx yx :yy yy})

(def swizzle3-fns
  {:x x, :xx xx, :xxx xxx, :xxy xxy, :xxz xxz, :xy xy, :xyx xyx,
   :xyy xyy, :xyz xyz, :xz xz, :xzx xzx, :xzy xzy, :xzz xzz,
   :y y, :yx yx, :yxx yxx, :yxy yxy, :yxz yxz, :yy yy, :yyx yyx,
   :yyy yyy, :yyz yyz, :yz yz, :yzx yzx, :yzy yzy, :yzz yzz,
   :z z, :zx zx, :zxx zxx, :zxy zxy, :zxz zxz, :zy zy, :zyx zyx,
   :zyy zyy, :zyz zyz, :zz zz, :zzx zzx, :zzy zzy, :zzz zzz})

(defn swizzle-assoc*
                                               
         [src dest keymap k v]
  (let [n (name k)
        c (count n)]
    (if-let [idx (and (== 1 c) (keymap (first n)))]
      (do (aset dest (int idx) (double v)) dest)
      (if (and (<= c (count keymap)) (== c (count v) (count (into #{} n))))
        (loop [i 0, n n]
          (if n
            (if-let [idx (keymap (first n))]
              (do (aset dest (int idx) (double (v i)))
                  (recur (inc i) (next n)))
              (err/key-error! k))
            dest))
        (err/key-error! k)))))

(defn vec2-reduce*
  [op ^doubles acc xs]
  (transduce
   (map (fn [^Vec2 x] (.-buf x)))
   (fn
     ([a] a)
     ([^doubles a ^doubles b]
      (aset a 0 (double (op (aget a 0) (aget b 0))))
      (aset a 1 (double (op (aget a 1) (aget b 1))))
      a))
   acc xs))

(defn vec3-reduce*
  [op ^doubles acc xs]
  (transduce
   (map (fn [^Vec3 x] (.-buf x)))
   (fn
     ([a] a)
     ([^doubles a ^doubles b]
      (aset a 0 (double (op (aget a 0) (aget b 0))))
      (aset a 1 (double (op (aget a 1) (aget b 1))))
      (aset a 2 (double (op (aget a 2) (aget b 2))))
      a))
   acc xs))

(def V2 (Vec2.                               (js/Float32Array. 2) nil nil))
(def V3 (Vec3.                               (js/Float32Array. 3) nil nil))

(defn vec2
  ([] V2)
  ([v]
     (cond
      (instance? Vec2 v) v
      (number? v)        (vec2 v v)
      (sequential? v)    (vec2 (nth v 0 0.0) (nth v 1 0.0))
      (map? v)           (vec2 (:x v 0) (:y v 0))
      :else              (err/type-error! "Vec2" v)))
  ([x y]
     (let [^doubles b                               (js/Float32Array. 2)]
       (aset b 0 (double x))
       (aset b 1 (double y))
       (Vec2. b nil nil))))

(defn vec3
  ([] V3)
  ([v]
     (cond
      (instance? Vec3 v) v
      (number? v)        (vec3 v v v)
      (sequential? v)    (vec3 (nth v 0 0.0) (nth v 1 0.0) (nth v 2 0.0))
      (map? v)           (vec3 (:x v 0) (:y v 0) (:z v 0))
      :else              (err/type-error! "Vec3" v)))
  ([v z]
     (cond
      (sequential? v) (vec3 (nth v 0 0.0) (nth v 1 0.0) z)
      (map? v)        (vec3 (:x v 0) (:y v 0) z)
      (number? v)     (vec3 v z 0)
      :else           (err/type-error! "Vec3" v)))
  ([x y z]
     (let [^doubles b                               (js/Float32Array. 3)]
       (aset b 0 (double x))
       (aset b 1 (double y))
       (aset b 2 (double z))
       (Vec3. b nil nil))))

(defn vec2-with-meta
  ([v meta]
     (cond
      (instance? Vec2 v) (with-meta v meta)
      (number? v)        (vec2-with-meta v v meta)
      (sequential? v)    (vec2-with-meta (nth v 0 0.0) (nth v 1 0.0) meta)
      (map? v)           (vec2-with-meta (:x v 0.0) (:y v 0.0) meta)
      :else              (err/type-error! "Vec2" v)))
  ([x y meta]
     (let [^doubles b                               (js/Float32Array. 2)]
       (aset b 0 (double x))
       (aset b 1 (double y))
       (Vec2. b nil meta))))

(defn vec3-with-meta
  ([v meta]
     (cond
      (instance? Vec3 v) (with-meta v meta)
      (number? v)        (vec3-with-meta v v v meta)
      (sequential? v)    (vec3-with-meta (nth v 0 0.0) (nth v 1 0.0) (nth v 2 0.0) meta)
      (map? v)           (vec3-with-meta (:x v 0.0) (:y v 0.0) (:z v 0.0) meta)
      :else              (err/type-error! "Vec3" v)))
  ([x y z meta]
     (let [^doubles b                               (js/Float32Array. 3)]
       (aset b 0 (double x))
       (aset b 1 (double y))
       (aset b 2 (double z))
       (Vec3. b nil meta))))

(defn vec2? [x] (instance? Vec2 x))
(defn vec3? [x] (instance? Vec3 x))

(def V2X (vec2 1 0))
(def V2Y (vec2 0 1))

(def V3X (vec3 1 0 0))
(def V3Y (vec3 0 1 0))
(def V3Z (vec3 0 0 1))

(def V2INF- (vec2 INF-))
(def V2INF+ (vec2 INF+))

(def V3INF- (vec3 INF-))
(def V3INF+ (vec3 INF+))
(defn randvec2
  ([] (g/normalize (vec2 (m/randnorm) (m/randnorm))))
  ([n] (g/normalize (vec2 (m/randnorm) (m/randnorm)) n)))

(defn randvec3
  ([] (g/normalize (vec3 (m/randnorm) (m/randnorm) (m/randnorm))))
  ([n] (g/normalize (vec3 (m/randnorm) (m/randnorm) (m/randnorm)) n)))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/core/vector.cljx
