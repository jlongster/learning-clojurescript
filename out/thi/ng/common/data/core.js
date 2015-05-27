// Compiled by ClojureScript 0.0-3291 {}
goog.provide('thi.ng.common.data.core');
goog.require('cljs.core');
thi.ng.common.data.core.index = (function thi$ng$common$data$core$index(i,t){
var temp__4420__auto__ = cljs.core.get.call(null,i,t);
if(cljs.core.truth_(temp__4420__auto__)){
var tt = temp__4420__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,i,t),t], null);
}
});
thi.ng.common.data.core.index_BANG_ = (function thi$ng$common$data$core$index_BANG_(i,t){
var temp__4420__auto__ = cljs.core.get.call(null,i,t);
if(cljs.core.truth_(temp__4420__auto__)){
var tt = temp__4420__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,i,t),t], null);
}
});
thi.ng.common.data.core.index_kv = (function thi$ng$common$data$core$index_kv(m,k,v){
var temp__4420__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4420__auto__)){
var vec__19653 = temp__4420__auto__;
var k__$1 = cljs.core.nth.call(null,vec__19653,(0),null);
var vv = cljs.core.nth.call(null,vec__19653,(1),null);
return cljs.core.assoc.call(null,m,k__$1,cljs.core.conj.call(null,vv,v));
} else {
return cljs.core.assoc.call(null,m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.common.data.core.index_kv_BANG_ = (function thi$ng$common$data$core$index_kv_BANG_(m,k,v){
var temp__4420__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4420__auto__)){
var vv = temp__4420__auto__;
return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.conj.call(null,vv,v));
} else {
return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.common.data.core.value_set = (function thi$ng$common$data$core$value_set(){
var G__19657 = arguments.length;
switch (G__19657) {
case 2:
return thi.ng.common.data.core.value_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.data.core.value_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.data.core.value_set.cljs$core$IFn$_invoke$arity$2 = (function (idx,v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.get.call(null,idx,v));
});

thi.ng.common.data.core.value_set.cljs$core$IFn$_invoke$arity$3 = (function (f,idx,v){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (p1__19654_SHARP_,p2__19655_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__19654_SHARP_,f.call(null,p2__19655_SHARP_));
}),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.get.call(null,idx,v)));
});

thi.ng.common.data.core.value_set.cljs$lang$maxFixedArity = 3;
thi.ng.common.data.core.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
thi.ng.common.data.core.vec_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
thi.ng.common.data.core.set_conj2_STAR_ = (function thi$ng$common$data$core$set_conj2_STAR_(p1__19659_SHARP_,p2__19660_SHARP_){
if((p1__19659_SHARP_ == null)){
return p2__19660_SHARP_;
} else {
if(cljs.core.set_QMARK_.call(null,p1__19659_SHARP_)){
return cljs.core.conj.call(null,p1__19659_SHARP_,p2__19660_SHARP_);
} else {
return cljs.core.PersistentHashSet.fromArray([p1__19659_SHARP_,p2__19660_SHARP_], true);
}
}
});
thi.ng.common.data.core.vec_conj2_STAR_ = (function thi$ng$common$data$core$vec_conj2_STAR_(p1__19661_SHARP_,p2__19662_SHARP_){
if((p1__19661_SHARP_ == null)){
return p2__19662_SHARP_;
} else {
if(cljs.core.vector_QMARK_.call(null,p1__19661_SHARP_)){
return cljs.core.conj.call(null,p1__19661_SHARP_,p2__19662_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19661_SHARP_,p2__19662_SHARP_], null);
}
}
});
thi.ng.common.data.core.collect_set = (function thi$ng$common$data$core$collect_set(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,f,coll));
});
thi.ng.common.data.core.collect_indexed = (function thi$ng$common$data$core$collect_indexed(f,f2,coll){
var keys = thi.ng.common.data.core.collect_set.call(null,f,coll);
return cljs.core.zipmap.call(null,keys,((cljs.core._EQ_.call(null,f2,cljs.core.identity))?keys:cljs.core.map.call(null,f2,keys)));
});
thi.ng.common.data.core.interval_set = (function thi$ng$common$data$core$interval_set(){
var argseq__5990__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return thi.ng.common.data.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(argseq__5990__auto__);
});

thi.ng.common.data.core.interval_set.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
return cljs.core.into.call(null,cljs.core.sorted_set.call(null),cljs.core.mapcat.call(null,(function (v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.range.call(null,v.call(null,(0)),(v.call(null,(1)) + (1)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}),ivals));
});

thi.ng.common.data.core.interval_set.cljs$lang$maxFixedArity = (0);

thi.ng.common.data.core.interval_set.cljs$lang$applyTo = (function (seq19663){
return thi.ng.common.data.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19663));
});
thi.ng.common.data.core.check_intervals = (function thi$ng$common$data$core$check_intervals(){
var argseq__5990__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return thi.ng.common.data.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(argseq__5990__auto__);
});

thi.ng.common.data.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
var vec__19665 = cljs.core.reduce.call(null,(function (p__19666,v){
var vec__19667 = p__19666;
var i = cljs.core.nth.call(null,vec__19667,(0),null);
var c = cljs.core.nth.call(null,vec__19667,(1),null);
if(cljs.core.sequential_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,i,v),c], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.conj.call(null,c,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),ivals);
var ivals__$1 = cljs.core.nth.call(null,vec__19665,(0),null);
var const$ = cljs.core.nth.call(null,vec__19665,(1),null);
return ((function (vec__19665,ivals__$1,const$){
return (function (x){
if(cljs.core.truth_(const$.call(null,x))){
return x;
} else {
return cljs.core.some.call(null,((function (vec__19665,ivals__$1,const$){
return (function (p__19668){
var vec__19669 = p__19668;
var a = cljs.core.nth.call(null,vec__19669,(0),null);
var b = cljs.core.nth.call(null,vec__19669,(1),null);
return ((a <= x)) && ((x <= b));
});})(vec__19665,ivals__$1,const$))
,ivals__$1);
}
});
;})(vec__19665,ivals__$1,const$))
});

thi.ng.common.data.core.check_intervals.cljs$lang$maxFixedArity = (0);

thi.ng.common.data.core.check_intervals.cljs$lang$applyTo = (function (seq19664){
return thi.ng.common.data.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19664));
});
/**
 * All the ways to take one item from each sequence
 * (taken from clojure.contrib.combinatorics)
 */
thi.ng.common.data.core.cartesian_product = (function thi$ng$common$data$core$cartesian_product(){
var argseq__5990__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return thi.ng.common.data.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__5990__auto__);
});

thi.ng.common.data.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function thi$ng$common$data$core$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if((i < (0))){
return null;
} else {
var temp__4420__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4420__auto__){
var rst = temp__4420__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__19671 = (i - (1));
var G__19672 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__19671;
v_seqs__$2 = G__19672;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return thi$ng$common$data$core$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

thi.ng.common.data.core.cartesian_product.cljs$lang$maxFixedArity = (0);

thi.ng.common.data.core.cartesian_product.cljs$lang$applyTo = (function (seq19670){
return thi.ng.common.data.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19670));
});
/**
 * Applies `f` to root coll and every of its (nested) elements. Returns
 * a vector of items for which `f` returned a truthy value.
 */
thi.ng.common.data.core.filter_tree = (function thi$ng$common$data$core$filter_tree(f,root){
var walk = (function thi$ng$common$data$core$filter_tree_$_walk(acc,node){
if(cljs.core.truth_(f.call(null,node))){
return cljs.core.conj.call(null,acc,node);
} else {
if(cljs.core.coll_QMARK_.call(null,node)){
return cljs.core.reduce.call(null,thi$ng$common$data$core$filter_tree_$_walk,acc,node);
} else {
return acc;

}
}
});
return cljs.core.reduce.call(null,walk,cljs.core.PersistentVector.EMPTY,root);
});
thi.ng.common.data.core.bisect = (function thi$ng$common$data$core$bisect(){
var G__19674 = arguments.length;
switch (G__19674) {
case 2:
return thi.ng.common.data.core.bisect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.data.core.bisect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.data.core.bisect.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var vec__19675 = cljs.core.reduce.call(null,(function (p__19676,v){
var vec__19677 = p__19676;
var m = cljs.core.nth.call(null,vec__19677,(0),null);
var n = cljs.core.nth.call(null,vec__19677,(1),null);
if(cljs.core.truth_(f.call(null,v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,m,v),n], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj_BANG_.call(null,n,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null),coll);
var m = cljs.core.nth.call(null,vec__19675,(0),null);
var n = cljs.core.nth.call(null,vec__19675,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,m),cljs.core.persistent_BANG_.call(null,n)], null);
});

thi.ng.common.data.core.bisect.cljs$core$IFn$_invoke$arity$3 = (function (f,f2,coll){
var vec__19678 = thi.ng.common.data.core.bisect.call(null,f,coll);
var m = cljs.core.nth.call(null,vec__19678,(0),null);
var n = cljs.core.nth.call(null,vec__19678,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f2.call(null,m),f2.call(null,n)], null);
});

thi.ng.common.data.core.bisect.cljs$lang$maxFixedArity = 3;
thi.ng.common.data.core.neighbors = (function thi$ng$common$data$core$neighbors(x,coll){
var n = (cljs.core.count.call(null,coll) - (1));
var i = n;
while(true){
if((i >= (0))){
if(cljs.core._EQ_.call(null,x,coll.call(null,i))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll.call(null,(((i > (0)))?(i - (1)):n)),coll.call(null,(((i < n))?(i + (1)):(0)))], null);
} else {
var G__19680 = (i - (1));
i = G__19680;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazyseq of `n`-element vectors, each one containing
 * a successive elements of the original collection.
 * 
 * (successive-nth 3 [1 2 3 4])
 * => ([1 2 3] [2 3 4] [3 4 5])
 */
thi.ng.common.data.core.successive_nth = (function thi$ng$common$data$core$successive_nth(){
var G__19682 = arguments.length;
switch (G__19682) {
case 2:
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,cljs.core.vec.call(null,s),thi.ng.common.data.core.successive_nth.call(null,n,cljs.core.rest.call(null,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,cljs.core.vec.call(null,s),thi.ng.common.data.core.successive_nth.call(null,n,step,cljs.core.drop.call(null,step,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.common.data.core.successive_nth.cljs$lang$maxFixedArity = 3;
/**
 * Returns a lazyseq of nested 2-element vectors, each one containing
 * a vector of `n` successive elements of the original collection and
 * an sequence index.
 * 
 * (successive-nth-indexed 2 [10 20 30 40])
 * => ([[10 20] 0] [[20 30] 1] [[30 40] 2])
 */
thi.ng.common.data.core.successive_nth_indexed = (function thi$ng$common$data$core$successive_nth_indexed(){
var G__19685 = arguments.length;
switch (G__19685) {
case 2:
return thi.ng.common.data.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.data.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.data.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return thi.ng.common.data.core.successive_nth_indexed.call(null,n,(0),coll);
});

thi.ng.common.data.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3 = (function (n,idx,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,s),idx], null),thi.ng.common.data.core.successive_nth_indexed.call(null,n,(idx + (1)),cljs.core.rest.call(null,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.common.data.core.successive_nth_indexed.cljs$lang$maxFixedArity = 3;
/**
 * Applies `f` with `args` to all given `keys` in `type`.
 */
thi.ng.common.data.core.apply_to_keys = (function thi$ng$common$data$core$apply_to_keys(){
var argseq__5990__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return thi.ng.common.data.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5990__auto__);
});

thi.ng.common.data.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic = (function (type,keys,f,args){
return cljs.core.reduce.call(null,(function (acc,k){
return cljs.core.assoc.call(null,acc,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,type,k),args));
}),type,keys);
});

thi.ng.common.data.core.apply_to_keys.cljs$lang$maxFixedArity = (3);

thi.ng.common.data.core.apply_to_keys.cljs$lang$applyTo = (function (seq19687){
var G__19688 = cljs.core.first.call(null,seq19687);
var seq19687__$1 = cljs.core.next.call(null,seq19687);
var G__19689 = cljs.core.first.call(null,seq19687__$1);
var seq19687__$2 = cljs.core.next.call(null,seq19687__$1);
var G__19690 = cljs.core.first.call(null,seq19687__$2);
var seq19687__$3 = cljs.core.next.call(null,seq19687__$2);
return thi.ng.common.data.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic(G__19688,G__19689,G__19690,seq19687__$3);
});
thi.ng.common.data.core.reduce_pairs = (function thi$ng$common$data$core$reduce_pairs(){
var G__19692 = arguments.length;
switch (G__19692) {
case 3:
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3 = (function (f1,f2,coll){
return thi.ng.common.data.core.reduce_pairs.call(null,f1,f2,null,coll);
});

thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4 = (function (f1,f2,acc,coll){
if((cljs.core.count.call(null,coll) > (1))){
var pairs = cljs.core.map.call(null,(function (p__19693){
var vec__19694 = p__19693;
var a = cljs.core.nth.call(null,vec__19694,(0),null);
var b = cljs.core.nth.call(null,vec__19694,(1),null);
return f2.call(null,a,b);
}),thi.ng.common.data.core.successive_nth.call(null,(2),coll));
if(cljs.core.truth_(acc)){
return cljs.core.reduce.call(null,f1,acc,pairs);
} else {
return cljs.core.reduce.call(null,f1,pairs);
}
} else {
return null;
}
});

thi.ng.common.data.core.reduce_pairs.cljs$lang$maxFixedArity = 4;
thi.ng.common.data.core.wrap_seq = (function thi$ng$common$data$core$wrap_seq(s,head,tail){
return cljs.core.concat.call(null,((cljs.core.sequential_QMARK_.call(null,head))?cljs.core.concat.call(null,head,s):cljs.core.cons.call(null,head,s)),((cljs.core.sequential_QMARK_.call(null,tail))?tail:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail], null)));
});
thi.ng.common.data.core.append_first = (function thi$ng$common$data$core$append_first(xs){
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs)], null));
});
thi.ng.common.data.core.rotate_left = (function thi$ng$common$data$core$rotate_left(n,xs){
if(cljs.core.vector_QMARK_.call(null,xs)){
return cljs.core.into.call(null,cljs.core.subvec.call(null,xs,n),cljs.core.subvec.call(null,xs,(0),n));
} else {
return cljs.core.concat.call(null,cljs.core.drop.call(null,n,xs),cljs.core.take.call(null,n,xs));
}
});
thi.ng.common.data.core.index_of = (function thi$ng$common$data$core$index_of(coll,item){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,coll__$1))){
return i;
} else {
var G__19696 = (i + (1));
var G__19697 = cljs.core.next.call(null,coll__$1);
i = G__19696;
coll__$1 = G__19697;
continue;
}
} else {
return (-1);
}
break;
}
});
/**
 * Returns a new collection of all items after `item` in original `coll`.
 * If `coll` is a vector, the new collection is created with `subvec`.
 * Returns original coll if item isn't found.
 */
thi.ng.common.data.core.all_after = (function thi$ng$common$data$core$all_after(item,coll){
var idx = (thi.ng.common.data.core.index_of.call(null,coll,item) + (1));
if((idx > (0))){
if(cljs.core.vector_QMARK_.call(null,coll)){
return cljs.core.subvec.call(null,coll,idx);
} else {
return cljs.core.drop.call(null,idx,coll);
}
} else {
return coll;
}
});
thi.ng.common.data.core.iterate_while = (function thi$ng$common$data$core$iterate_while(pred,f,x){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.cons.call(null,x,thi$ng$common$data$core$iterate_while.call(null,pred,f,f.call(null,x)));
} else {
return null;
}
}),null,null));
});
thi.ng.common.data.core.iterate_n = (function thi$ng$common$data$core$iterate_n(n,f,x){
return cljs.core.last.call(null,cljs.core.take.call(null,n,cljs.core.iterate.call(null,f,x)));
});
thi.ng.common.data.core.unwrap_string = (function thi$ng$common$data$core$unwrap_string(s,n){
return cljs.core.subs.call(null,s,n,(cljs.core.count.call(null,s) - n));
});
thi.ng.common.data.core.wrap = (function thi$ng$common$data$core$wrap(a,b,s){
return [cljs.core.str(a),cljs.core.str(s),cljs.core.str(b)].join('');
});
thi.ng.common.data.core.stringify_keys = (function thi$ng$common$data$core$stringify_keys(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19700){
var vec__19701 = p__19700;
var k = cljs.core.nth.call(null,vec__19701,(0),null);
var v = cljs.core.nth.call(null,vec__19701,(1),null);
var e = vec__19701;
if((k instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else {
return e;
}
}),m));
});
/**
 * Takes a keyword or string and string/seq of items, returns map with
 * items as keys and boolean values indicating if an item has been
 * found in the string representation of the kw. If `kw` is nil, returns
 * nil.
 * 
 * (demunge-flags :cad "abcd")
 * #_=> {:a true :b false :c true :d true}
 */
thi.ng.common.data.core.demunge_flags = (function thi$ng$common$data$core$demunge_flags(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name.call(null,kw);
return cljs.core.reduce.call(null,((function (flags){
return (function (acc,x){
var x__$1 = [cljs.core.str(x)].join('');
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,x__$1),((0) <= flags.indexOf(x__$1)));
});})(flags))
,cljs.core.PersistentArrayMap.EMPTY,xs);
} else {
return null;
}
});
/**
 * Like `demunge-flags` but returns lazyseq of booleans in same order as xs.
 * 
 * (demunge-flags-seq :cad "abcd")
 * #_=> [true false true true]
 */
thi.ng.common.data.core.demunge_flags_seq = (function thi$ng$common$data$core$demunge_flags_seq(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name.call(null,kw);
return cljs.core.map.call(null,((function (flags){
return (function (p1__19702_SHARP_){
return ((0) <= flags.indexOf([cljs.core.str(p1__19702_SHARP_)].join('')));
});})(flags))
,xs);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map