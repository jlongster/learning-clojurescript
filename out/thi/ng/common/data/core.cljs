(ns thi.ng.common.data.core)

(defn index
  [i t]
  (if-let [tt (get i t)] [i tt] [(conj i t) t]))

(defn index!
  [i t]
  (if-let [tt (get i t)] [i tt] [(conj! i t) t]))

(defn index-kv
  [m k v]
  (if-let [[k vv] (find m k)]
    (assoc m k (conj vv v))
    (assoc m k #{v})))

(defn index-kv!
  [m k v]
  (if-let [vv (get m k)]
    (assoc! m k (conj vv v))
    (assoc! m k #{v})))

(defn value-set
  ([idx v] (into #{} (get idx v)))
  ([f idx v] (persistent! (reduce #(conj! %1 (f %2)) (transient #{}) (get idx v)))))

(def set-conj (fnil conj #{}))

(def vec-conj (fnil conj []))

(def set-conj2* #(if (nil? %) %2 (if (set? %) (conj % %2) #{% %2})))

(def vec-conj2* #(if (nil? %) %2 (if (vector? %) (conj % %2) [% %2])))

(defn collect-set
  [f coll] (->> coll (map f) (into #{})))

(defn collect-indexed
  [f f2 coll]
  (let [keys (collect-set f coll)]
    (zipmap keys (if (= f2 identity) keys (map f2 keys)))))

(defn interval-set
  [& ivals]
  (->> ivals
       (mapcat (fn [v] (if (sequential? v) (range (v 0) (inc (v 1))) [v])))
       (into (sorted-set))))

(defn check-intervals
  [& ivals]
  (let [[ivals const] (reduce
                       (fn [[i c] v]
                         (if (sequential? v) [(conj i v) c] [i (conj c v)]))
                       [[] #{}] ivals)]
    (fn [x]
      (if (const x) x
          (some (fn [[a b]] (and (<= a x) (<= x b))) ivals)))))

(defn cartesian-product
  "All the ways to take one item from each sequence
  (taken from clojure.contrib.combinatorics)"
  [& seqs]
  (let [v-original-seqs (vec seqs)
        step
        (fn step [v-seqs]
          (let [increment
                (fn [v-seqs]
                  (loop [i (dec (count v-seqs)), v-seqs v-seqs]
                    (if (neg? i) nil
                        (if-let [rst (next (v-seqs i))]
                          (assoc v-seqs i rst)
                          (recur (dec i) (assoc v-seqs i (v-original-seqs i)))))))]
            (when v-seqs
              (cons (map first v-seqs)
                    (lazy-seq (step (increment v-seqs)))))))]
    (when (every? seq seqs)
      (lazy-seq (step v-original-seqs)))))

(defn filter-tree
  "Applies `f` to root coll and every of its (nested) elements. Returns
  a vector of items for which `f` returned a truthy value."
  [f root]
  (let [walk (fn walk [acc node]
               (cond
                (f node) (conj acc node)
                (coll? node) (reduce walk acc node)
                :default acc))]
    (reduce walk [] root)))

(defn bisect
  ([f coll]
     (let [[m n] (reduce
                  (fn [[m n] v] (if (f v) [(conj! m v) n] [m (conj! n v)]))
                  [(transient []) (transient [])] coll)]
       [(persistent! m) (persistent! n)]))
  ([f f2 coll]
     (let [[m n] (bisect f coll)]
       [(f2 m) (f2 n)])))

(defn neighbors
  [x coll]
  (let [n (dec (count coll))]
    (loop [i n]
      (when (>= i 0)
        (if (= x (coll i))
          [(coll (if (pos? i) (dec i) n))
           (coll (if (< i n) (inc i) 0))]
          (recur (dec i)))))))

(defn successive-nth
  "Returns a lazyseq of `n`-element vectors, each one containing
  a successive elements of the original collection.

      (successive-nth 3 [1 2 3 4])
      => ([1 2 3] [2 3 4] [3 4 5])"
  ([n coll]
     (lazy-seq
      (let [s (take n coll)]
        (if (= n (count s))
          (cons (vec s) (successive-nth n (rest coll)))))))
  ([n step coll]
     (lazy-seq
      (let [s (take n coll)]
        (if (= n (count s))
          (cons (vec s) (successive-nth n step (drop step coll))))))))

(defn successive-nth-indexed
  "Returns a lazyseq of nested 2-element vectors, each one containing
  a vector of `n` successive elements of the original collection and
  an sequence index.

      (successive-nth-indexed 2 [10 20 30 40])
      => ([[10 20] 0] [[20 30] 1] [[30 40] 2])"
  ([n coll] (successive-nth-indexed n 0 coll))
  ([n idx coll]
     (lazy-seq
      (let [s (take n coll)]
        (if (= n (count s))
          (cons [(vec s) idx]
                (successive-nth-indexed n (inc idx) (rest coll))))))))

(defn apply-to-keys
  "Applies `f` with `args` to all given `keys` in `type`."
  [type keys f & args]
  (reduce (fn [acc k] (assoc acc k (apply f (get type k) args))) type keys))

(defn reduce-pairs
  ([f1 f2 coll] (reduce-pairs f1 f2 nil coll))
  ([f1 f2 acc coll]
     (when (> (count coll) 1)
       (let [pairs (map (fn [[a b]] (f2 a b)) (successive-nth 2 coll))]
         (if acc
           (reduce f1 acc pairs)
           (reduce f1 pairs))))))

(defn wrap-seq
  [s head tail]
  (concat
   (if (sequential? head) (concat head s) (cons head s))
   (if (sequential? tail) tail [tail])))

(defn append-first
  [xs] (concat xs [(first xs)]))

(defn rotate-left
  [n xs]
  (if (vector? xs)
    (into (subvec xs n) (subvec xs 0 n))
    (concat (drop n xs) (take n xs))))

(defn index-of
  [coll item]
  (loop [i 0, coll coll]
    (if coll
      (if (= item (first coll))
        i (recur (inc i) (next coll)))
      -1)))

(defn all-after
  "Returns a new collection of all items after `item` in original `coll`.
  If `coll` is a vector, the new collection is created with `subvec`.
  Returns original coll if item isn't found."
  [item coll]
  (let [idx (inc (index-of coll item))]
    (if (pos? idx)
      (if (vector? coll) (subvec coll idx) (drop idx coll))
      coll)))

(defn iterate-while
  [pred f x]
  (lazy-seq
   (when (pred x)
     (cons x (iterate-while pred f (f x))))))

(defn iterate-n
  [n f x] (->> x (iterate f) (take n) (last)))

(defn unwrap-string [s n] (subs s n (- (count s) n)))

(defn wrap [a b s] (str a s b))

(defn stringify-keys
  [m]
  (into {} (map (fn [[k v :as e]] (if (keyword? k) [(name k) v] e)) m)))

(defn demunge-flags
  "Takes a keyword or string and string/seq of items, returns map with
  items as keys and boolean values indicating if an item has been
  found in the string representation of the kw. If `kw` is nil, returns
  nil.

      (demunge-flags :cad \"abcd\")
      #_=> {:a true :b false :c true :d true}"
  [kw xs]
  (when kw
    (let [flags (name kw)]
      (reduce
       (fn [acc x]
         (let [x (str x)]
           (assoc acc (keyword x) (<= 0 (.indexOf flags x)))))
       {} xs))))

(defn demunge-flags-seq
  "Like `demunge-flags` but returns lazyseq of booleans in same order as xs.

      (demunge-flags-seq :cad \"abcd\")
      #_=> [true false true true]"
  [kw xs]
  (when kw
    (let [flags (name kw)]
      (map #(<= 0 (.indexOf flags (str %))) xs))))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/common/data/core.cljx
