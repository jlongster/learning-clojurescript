// Compiled by ClojureScript 0.0-3291 {}
goog.provide('clojure.core.rrb_vector.rrbt');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
goog.require('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.rrbt.rrbt_concat_threshold = (33);
clojure.core.rrb_vector.rrbt.max_extra_search_steps = (2);

clojure.core.rrb_vector.rrbt.AsRRBT = (function (){var obj20332 = {};
return obj20332;
})();

clojure.core.rrb_vector.rrbt._as_rrbt = (function clojure$core$rrb_vector$rrbt$_as_rrbt(v){
if((function (){var and__4938__auto__ = v;
if(and__4938__auto__){
return v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1;
} else {
return and__4938__auto__;
}
})()){
return v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1(v);
} else {
var x__5586__auto__ = (((v == null))?null:v);
return (function (){var or__4950__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (clojure.core.rrb_vector.rrbt._as_rrbt["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AsRRBT.-as-rrbt",v);
}
}
})().call(null,v);
}
});


/**
* @constructor
*/
clojure.core.rrb_vector.rrbt.RRBChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179858668;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next.call(null,coll__$1);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__5366__auto__ = self__.__hash;
if(!((h__5366__auto__ == null))){
return h__5366__auto__;
} else {
var h__5366__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);
self__.__hash = h__5366__auto____$1;

return h__5366__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f,start);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest.call(null,coll__$1);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.call(null,self__.node,self__.off);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),(0)):null);
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),(0)):null);
if((s == null)){
return null;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/RRBChunkedSeq";

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"clojure.core.rrb-vector.rrbt/RRBChunkedSeq");
});

clojure.core.rrb_vector.rrbt.__GT_RRBChunkedSeq = (function clojure$core$rrb_vector$rrbt$__GT_RRBChunkedSeq(vec,node,i,off,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,__hash));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq = (function clojure$core$rrb_vector$rrbt$rrb_chunked_seq(){
var G__20334 = arguments.length;
switch (G__20334) {
case 3:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 = (function (vec,i,off){
var cnt = vec.cnt;
var shift = vec.shift;
var root = vec.root;
var tail = vec.tail;
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,clojure.core.rrb_vector.trees.array_for.call(null,cnt,shift,root,tail,i),i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 = (function (vec,node,i,off){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 = (function (vec,node,i,off,meta){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$lang$maxFixedArity = 5;
clojure.core.rrb_vector.rrbt.slice_right = (function clojure$core$rrb_vector$rrbt$slice_right(node,shift,end){
if((shift === (0))){
var arr = node.arr;
var new_arr = (new Array(end));
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),end);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node);
var rngs = ((cljs.core.not.call(null,reg_QMARK_))?clojure.core.rrb_vector.nodes.ranges.call(null,node):null);
var i = (((end - (1)) >> shift) & (31));
var i__$1 = (cljs.core.truth_(reg_QMARK_)?i:(function (){var j = i;
while(true){
if((end <= (rngs[j]))){
return j;
} else {
var G__20336 = (j + (1));
j = G__20336;
continue;
}
break;
}
})());
var child_end = (cljs.core.truth_(reg_QMARK_)?(function (){var ce = cljs.core.mod.call(null,end,((1) << shift));
if((ce === (0))){
return ((1) << shift);
} else {
return ce;
}
})():(((i__$1 > (0)))?(end - (rngs[(i__$1 - (1))])):end));
var arr = node.arr;
var new_child = clojure$core$rrb_vector$rrbt$slice_right.call(null,(arr[i__$1]),(shift - (5)),child_end);
var regular_child_QMARK_ = (((shift === (5)))?((32) === new_child.arr.length):clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,new_child));
var new_arr = (new Array((cljs.core.truth_((function (){var and__4938__auto__ = reg_QMARK_;
if(cljs.core.truth_(and__4938__auto__)){
return regular_child_QMARK_;
} else {
return and__4938__auto__;
}
})())?(32):(33))));
var new_child_rng = (cljs.core.truth_(regular_child_QMARK_)?(function (){var m = cljs.core.mod.call(null,child_end,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(((shift === (5)))?new_child.arr.length:clojure.core.rrb_vector.nodes.last_range.call(null,new_child)));
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),i__$1);

(new_arr[i__$1] = new_child);

if(cljs.core.not.call(null,(function (){var and__4938__auto__ = reg_QMARK_;
if(cljs.core.truth_(and__4938__auto__)){
return regular_child_QMARK_;
} else {
return and__4938__auto__;
}
})())){
var new_rngs_20337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step_20338 = ((1) << shift);
if(cljs.core.truth_(reg_QMARK_)){
var n__5835__auto___20339 = i__$1;
var j_20340 = (0);
while(true){
if((j_20340 < n__5835__auto___20339)){
(new_rngs_20337[j_20340] = ((j_20340 + (1)) * step_20338));

var G__20341 = (j_20340 + (1));
j_20340 = G__20341;
continue;
} else {
}
break;
}
} else {
var n__5835__auto___20342 = i__$1;
var j_20343 = (0);
while(true){
if((j_20343 < n__5835__auto___20342)){
(new_rngs_20337[j_20343] = (rngs[j_20343]));

var G__20344 = (j_20343 + (1));
j_20343 = G__20344;
continue;
} else {
}
break;
}
}

(new_rngs_20337[i__$1] = ((((i__$1 > (0)))?(new_rngs_20337[(i__$1 - (1))]):(0)) + new_child_rng));

(new_rngs_20337[(32)] = (i__$1 + (1)));

(new_arr[(32)] = new_rngs_20337);
} else {
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.rrbt.slice_left = (function clojure$core$rrb_vector$rrbt$slice_left(node,shift,start,end){
if((shift === (0))){
var arr = node.arr;
var new_len = (arr.length - start);
var new_arr = (new Array(new_len));
cljs.core.array_copy.call(null,arr,start,new_arr,(0),new_len);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node);
var arr = node.arr;
var rngs = ((cljs.core.not.call(null,reg_QMARK_))?clojure.core.rrb_vector.nodes.ranges.call(null,node):null);
var i = ((start >> shift) & (31));
var i__$1 = (cljs.core.truth_(reg_QMARK_)?i:(function (){var j = i;
while(true){
if((start < (rngs[j]))){
return j;
} else {
var G__20345 = (j + (1));
j = G__20345;
continue;
}
break;
}
})());
var len = (cljs.core.truth_(reg_QMARK_)?(function (){var i__$2 = i__$1;
while(true){
if(((i__$2 === (32))) || (((arr[i__$2]) == null))){
return i__$2;
} else {
var G__20346 = (i__$2 + (1));
i__$2 = G__20346;
continue;
}
break;
}
})():(rngs[(32)]));
var child_start = (((i__$1 > (0)))?(start - (cljs.core.truth_(reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):start);
var child_end = (function (){var x__5269__auto__ = ((1) << shift);
var y__5270__auto__ = (((i__$1 > (0)))?(end - (cljs.core.truth_(reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):end);
return ((x__5269__auto__ < y__5270__auto__) ? x__5269__auto__ : y__5270__auto__);
})();
var new_child = clojure$core$rrb_vector$rrbt$slice_left.call(null,(arr[i__$1]),(shift - (5)),child_start,child_end);
var new_len = (len - i__$1);
var new_len__$1 = (((new_child == null))?(new_len - (1)):new_len);
if((new_len__$1 === (0))){
return null;
} else {
if(cljs.core.truth_(reg_QMARK_)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rng0 = (cljs.core.truth_((function (){var or__4950__auto__ = (new_child == null);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (shift === (5));
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
return clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,new_child);
}
}
})())?(((1) << shift) - ((start >> (shift - (5))) & (31))):clojure.core.rrb_vector.nodes.last_range.call(null,new_child));
var step = ((1) << shift);
var j_20347 = (0);
var r_20348 = rng0;
while(true){
if((j_20347 < new_len__$1)){
(rngs__$1[j_20347] = r_20348);

var G__20349 = (j_20347 + (1));
var G__20350 = (r_20348 + step);
j_20347 = G__20349;
r_20348 = G__20350;
continue;
} else {
}
break;
}

(rngs__$1[(new_len__$1 - (1))] = (end - start));

(rngs__$1[(32)] = new_len__$1);

cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if(!((new_child == null))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = rngs__$1);

return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var j_20351 = (0);
var i_20352__$2 = i__$1;
while(true){
if((j_20351 < new_len__$1)){
(new_rngs[j_20351] = ((rngs[i_20352__$2]) - start));

var G__20353 = (j_20351 + (1));
var G__20354 = (i_20352__$2 + (1));
j_20351 = G__20353;
i_20352__$2 = G__20354;
continue;
} else {
}
break;
}

(new_rngs[(32)] = new_len__$1);

cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if(!((new_child == null))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = new_rngs);

return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);

}
}
}
});


/**
* @constructor
*/
clojure.core.rrb_vector.rrbt.Vector = (function (cnt,shift,root,tail,meta,__hash){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2315152159;
this.cljs$lang$protocol_mask$partition1$ = 2052;
})
clojure.core.rrb_vector.rrbt.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,null);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
var i = (0);
var j = (0);
var init__$1 = init;
var arr = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i);
var lim = (arr.length - (1));
var step = (lim + (1));
while(true){
var init__$2 = f.call(null,init__$1,(i + j),(arr[j]));
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
if((j < lim)){
var G__20359 = i;
var G__20360 = (j + (1));
var G__20361 = init__$2;
var G__20362 = arr;
var G__20363 = lim;
var G__20364 = step;
i = G__20359;
j = G__20360;
init__$1 = G__20361;
arr = G__20362;
lim = G__20363;
step = G__20364;
continue;
} else {
var i__$1 = (i + step);
if((i__$1 < self__.cnt)){
var arr__$1 = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i__$1);
var len = arr__$1.length;
var lim__$1 = (len - (1));
var G__20365 = i__$1;
var G__20366 = (0);
var G__20367 = init__$2;
var G__20368 = arr__$1;
var G__20369 = lim__$1;
var G__20370 = len;
i = G__20365;
j = G__20366;
init__$1 = G__20367;
arr = G__20368;
lim = G__20369;
step = G__20370;
continue;
} else {
return init__$2;
}
}
}
break;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = (self__.cnt - self__.tail.length);
if((tail_off <= i)){
return (self__.tail[(i - tail_off)]);
} else {
var i__$1 = i;
var node = self__.root;
var shift__$1 = self__.shift;
while(true){
if((shift__$1 === (0))){
var arr = node.arr;
return (arr[((i__$1 >> shift__$1) & (31))]);
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
var arr = node.arr;
var idx = ((i__$1 >> shift__$1) & (31));
var i__$2 = i__$1;
var node__$1 = (arr[idx]);
var shift__$2 = (shift__$1 - (5));
while(true){
var arr__$1 = node__$1.arr;
var idx__$1 = ((i__$2 >> shift__$2) & (31));
if((shift__$2 === (0))){
return (arr__$1[idx__$1]);
} else {
var G__20371 = i__$2;
var G__20372 = (arr__$1[idx__$1]);
var G__20373 = (shift__$2 - (5));
i__$2 = G__20371;
node__$1 = G__20372;
shift__$2 = G__20373;
continue;
}
break;
}
} else {
var arr = node.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
var idx = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__20374 = (j + (1));
j = G__20374;
continue;
}
break;
}
})();
var i__$2 = (((idx === (0)))?i__$1:(i__$1 - (rngs[(idx - (1))])));
var G__20375 = i__$2;
var G__20376 = (arr[idx]);
var G__20377 = (shift__$1 - (5));
i__$1 = G__20375;
node = G__20376;
shift__$1 = G__20377;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if(((i >= (0))) && ((i < self__.cnt))){
return cljs.core._nth.call(null,this$__$1,i);
} else {
return not_found;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
if((i >= tail_off)){
var new_tail = (new Array(self__.tail.length));
var idx = (i - tail_off);
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),self__.tail.length);

(new_tail[idx] = val);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,clojure.core.rrb_vector.trees.do_assoc.call(null,self__.shift,self__.root,i,val),self__.tail,self__.meta,null));
}
} else {
if((i === self__.cnt)){
return cljs.core._conj.call(null,this$__$1,val);
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = true;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,(0));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,(1));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.call(null,this$__$1,(self__.cnt - (1)));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if((self__.tail.length > (1))){
var new_tail = (new Array((self__.tail.length - (1))));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),new_tail.length);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var new_tail = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var root_cnt = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
var new_root = clojure.core.rrb_vector.trees.pop_tail.call(null,self__.shift,root_cnt,self__.root.edit,self__.root);
if((new_root == null)){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
if(((self__.shift > (5))) && (((new_root.arr[(1)]) == null))){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),(self__.shift - (5)),(new_root.arr[(0)]),new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,new_root,new_tail,self__.meta,null));

}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(this$__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5366__auto__ = self__.__hash;
if(!((h__5366__auto__ == null))){
return h__5366__auto__;
} else {
var h__5366__auto____$1 = cljs.core.hash_coll.call(null,this$__$1);
self__.__hash = h__5366__auto____$1;

return h__5366__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential.call(null,this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clojure.core.rrb_vector.rrbt.__GT_Transient.call(null,self__.cnt,self__.shift,clojure.core.rrb_vector.transients.editable_root.call(null,self__.root),clojure.core.rrb_vector.transients.editable_tail.call(null,self__.tail),self__.tail.length);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$ = true;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (this$,start,end){
var self__ = this;
var this$__$1 = this;
var new_cnt = (end - start);
if(((start < (0))) || ((end > self__.cnt))){
throw (new Error("vector index out of bounds"));
} else {
if((start === end)){
return cljs.core.empty.call(null,this$__$1);
} else {
if((start > end)){
throw (new Error("start index greater than end index"));
} else {
var tail_off = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
if((start >= tail_off)){
var new_tail = (new Array(new_cnt));
cljs.core.array_copy.call(null,self__.tail,(start - tail_off),new_tail,(0),new_cnt);

return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var tail_cut_QMARK_ = (end > tail_off);
var new_root = ((tail_cut_QMARK_)?self__.root:clojure.core.rrb_vector.rrbt.slice_right.call(null,self__.root,self__.shift,end));
var new_root__$1 = (((start === (0)))?new_root:clojure.core.rrb_vector.rrbt.slice_left.call(null,new_root,self__.shift,start,(function (){var x__5269__auto__ = end;
var y__5270__auto__ = tail_off;
return ((x__5269__auto__ < y__5270__auto__) ? x__5269__auto__ : y__5270__auto__);
})()));
var new_tail = ((tail_cut_QMARK_)?(function (){var new_len = (end - tail_off);
var new_tail = (new Array(new_len));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),new_len);

return new_tail;
})():clojure.core.rrb_vector.trees.array_for.call(null,new_cnt,self__.shift,new_root__$1,[],(new_cnt - (1))));
var new_root__$2 = ((tail_cut_QMARK_)?new_root__$1:clojure.core.rrb_vector.trees.pop_tail.call(null,self__.shift,new_cnt,new_root__$1.edit,new_root__$1));
if((new_root__$2 == null)){
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var r = new_root__$2;
var s = self__.shift;
while(true){
if(((s > (5))) && (((r.arr[(1)]) == null))){
var G__20378 = (r.arr[(0)]);
var G__20379 = (s - (5));
r = G__20378;
s = G__20379;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,s,r,new_tail,self__.meta,null));
}
break;
}
}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return cljs.core._assoc_n.call(null,this$__$1,k,v);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail) === (0))){
return cljs.core.array_seq.call(null,self__.tail);
} else {
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,this$__$1,(0),(0));

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,self__.tail,meta__$1,self__.__hash));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
if((self__.tail.length < (32))){
var tail_len = self__.tail.length;
var new_tail = (new Array((tail_len + (1))));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),tail_len);

(new_tail[tail_len] = val);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);
var new_tail = (function (){var new_arr = [null];
(new_arr[(0)] = val);

return new_arr;
})();
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt))){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,self__.root))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var G__20356_20380 = new_arr;
(G__20356_20380[(0)] = self__.root);

(G__20356_20380[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.ranges.call(null,self__.root)[(31)]);
var G__20357_20381 = new_arr;
(G__20357_20381[(0)] = self__.root);

(G__20357_20381[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));

(G__20357_20381[(32)] = new_rngs);


var G__20358_20382 = new_rngs;
(G__20358_20382[(0)] = root_total_range);

(G__20358_20382[(1)] = (root_total_range + (32)));

(G__20358_20382[(32)] = (2));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
}
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,clojure.core.rrb_vector.trees.push_tail.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node),new_tail,self__.meta,null));
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.call = (function() {
var G__20383 = null;
var G__20383__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._nth.call(null,this$,k);
});
var G__20383__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._nth.call(null,this$,k,not_found);
});
G__20383 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20383__2.call(this,self__,k);
case 3:
return G__20383__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20383.cljs$core$IFn$_invoke$arity$2 = G__20383__2;
G__20383.cljs$core$IFn$_invoke$arity$3 = G__20383__3;
return G__20383;
})()
;

clojure.core.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args20355){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20355)));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._nth.call(null,this$,k);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._nth.call(null,this$,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_indexed.call(null,this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$ = true;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return clojure.core.rrb_vector.rrbt.splice_rrbts.call(null,this$__$1,clojure.core.rrb_vector.rrbt._as_rrbt.call(null,that));
});

clojure.core.rrb_vector.rrbt.Vector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null);
});

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Vector";

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"clojure.core.rrb-vector.rrbt/Vector");
});

clojure.core.rrb_vector.rrbt.__GT_Vector = (function clojure$core$rrb_vector$rrbt$__GT_Vector(cnt,shift,root,tail,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.Vector(cnt,shift,root,tail,meta,__hash));
});

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = true;

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(cljs.core.count.call(null,this$__$1),this$__$1.shift,this$__$1.root,this$__$1.tail,cljs.core.meta.call(null,this$__$1),null));
});

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = true;

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
var v = this$__$1.v;
var start = this$__$1.start;
var end = this$__$1.end;
return clojure.core.rrb_vector.protocols._slicev.call(null,clojure.core.rrb_vector.rrbt._as_rrbt.call(null,v),start,end);
});
clojure.core.rrb_vector.rrbt.shift_from_to = (function clojure$core$rrb_vector$rrbt$shift_from_to(node,from,to){
while(true){
if((from === to)){
return node;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
var G__20390 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__20387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__20387[(0)] = node);

return G__20387;
})());
var G__20391 = ((5) + from);
var G__20392 = to;
node = G__20390;
from = G__20391;
to = G__20392;
continue;
} else {
var G__20393 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__20388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__20388[(0)] = node);

(G__20388[(32)] = (function (){var G__20389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__20389[(0)] = clojure.core.rrb_vector.nodes.last_range.call(null,node));

(G__20389[(32)] = (1));

return G__20389;
})());

return G__20388;
})());
var G__20394 = ((5) + from);
var G__20395 = to;
node = G__20393;
from = G__20394;
to = G__20395;
continue;

}
}
break;
}
});
clojure.core.rrb_vector.rrbt.slot_count = (function clojure$core$rrb_vector$rrbt$slot_count(node,shift){
var arr = node.arr;
if((shift === (0))){
return arr.length;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
return clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr);
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
return (rngs[(32)]);
}
}
});
clojure.core.rrb_vector.rrbt.subtree_branch_count = (function clojure$core$rrb_vector$rrbt$subtree_branch_count(node,shift){
var arr = node.arr;
var cs = (shift - (5));
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
var i = (0);
var sbc = (0);
while(true){
if((i === (32))){
return sbc;
} else {
var temp__4420__auto__ = (arr[i]);
if(cljs.core.truth_(temp__4420__auto__)){
var child = temp__4420__auto__;
var G__20396 = (i + (1));
var G__20397 = (sbc + clojure.core.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__20396;
sbc = G__20397;
continue;
} else {
return sbc;
}
}
break;
}
} else {
var lim = (clojure.core.rrb_vector.nodes.ranges.call(null,node)[(32)]);
var i = (0);
var sbc = (0);
while(true){
if((i === lim)){
return sbc;
} else {
var child = (arr[i]);
var G__20398 = (i + (1));
var G__20399 = (sbc + clojure.core.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__20398;
sbc = G__20399;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.rrbt.leaf_seq = (function clojure$core$rrb_vector$rrbt$leaf_seq(arr){
return cljs.core.mapcat.call(null,(function (p1__20400_SHARP_){
return p1__20400_SHARP_.arr;
}),cljs.core.take.call(null,clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr),arr));
});
clojure.core.rrb_vector.rrbt.rebalance_leaves = (function clojure$core$rrb_vector$rrbt$rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves){
var slc1 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n1,(5));
var slc2 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n2,(5));
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n1,(5));
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n2,(5));
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot.call(null,(p - (1)),(32)) + (1)));
if((e <= clojure.core.rrb_vector.rrbt.max_extra_search_steps)){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var reg_QMARK_ = (cljs.core.mod.call(null,p,(32)) === (0));
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);
var i_20401 = (0);
var bs_20402 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n2.arr)));
while(true){
var temp__4422__auto___20403 = cljs.core.seq.call(null,bs_20402);
if(temp__4422__auto___20403){
var xs__4974__auto___20404 = temp__4422__auto___20403;
var block_20405 = cljs.core.first.call(null,xs__4974__auto___20404);
var a_20406__$1 = (new Array(cljs.core.count.call(null,block_20405)));
var i_20407__$1 = (0);
var xs_20408 = cljs.core.seq.call(null,block_20405);
while(true){
if(xs_20408){
(a_20406__$1[i_20407__$1] = cljs.core.first.call(null,xs_20408));

var G__20409 = (i_20407__$1 + (1));
var G__20410 = cljs.core.next.call(null,xs_20408);
i_20407__$1 = G__20409;
xs_20408 = G__20410;
continue;
} else {
}
break;
}

(new_arr[i_20401] = cljs.core.__GT_VectorNode.call(null,null,a_20406__$1));

var G__20411 = (i_20401 + (1));
var G__20412 = cljs.core.next.call(null,bs_20402);
i_20401 = G__20411;
bs_20402 = G__20412;
continue;
} else {
}
break;
}

if(!(reg_QMARK_)){
(new_arr[(32)] = clojure.core.rrb_vector.nodes.regular_ranges.call(null,(5),p));
} else {
}

transferred_leaves.val = sbc2;

return [new_n1,null];
} else {
var reg_QMARK_ = (cljs.core.mod.call(null,p,(32)) === (0));
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);
var i_20413 = (0);
var bs_20414 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.leaf_seq.call(null,(new Array(n1))),clojure.core.rrb_vector.rrbt.leaf_seq.call(null,(new Array(n2)))));
while(true){
var temp__4422__auto___20415 = cljs.core.seq.call(null,bs_20414);
if(temp__4422__auto___20415){
var xs__4974__auto___20416 = temp__4422__auto___20415;
var block_20417 = cljs.core.first.call(null,xs__4974__auto___20416);
var a_20418__$1 = (new Array(cljs.core.count.call(null,block_20417)));
var i_20419__$1 = (0);
var xs_20420 = cljs.core.seq.call(null,block_20417);
while(true){
if(xs_20420){
(a_20418__$1[i_20419__$1] = cljs.core.first.call(null,xs_20420));

var G__20421 = (i_20419__$1 + (1));
var G__20422 = cljs.core.next.call(null,xs_20420);
i_20419__$1 = G__20421;
xs_20420 = G__20422;
continue;
} else {
}
break;
}

if((i_20413 < (32))){
(new_arr1[i_20413] = cljs.core.__GT_VectorNode.call(null,null,a_20418__$1));
} else {
(new_arr2[(i_20413 - (32))] = cljs.core.__GT_VectorNode.call(null,null,a_20418__$1));
}

var G__20423 = (i_20413 + (1));
var G__20424 = cljs.core.next.call(null,bs_20414);
i_20413 = G__20423;
bs_20414 = G__20424;
continue;
} else {
}
break;
}

if(!(reg_QMARK_)){
(new_arr2[(32)] = clojure.core.rrb_vector.nodes.regular_ranges.call(null,(5),(p - (1024))));
} else {
}

transferred_leaves.val = ((1024) - sbc1);

return [new_n1,new_n2];

}
}
});
clojure.core.rrb_vector.rrbt.child_seq = (function clojure$core$rrb_vector$rrbt$child_seq(node,shift,cnt){
var arr = node.arr;
var rngs = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt):clojure.core.rrb_vector.nodes.ranges.call(null,node));
var cs = (cljs.core.truth_(rngs)?(rngs[(32)]):clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr));
var cseq = ((function (arr,rngs,cs){
return (function clojure$core$rrb_vector$rrbt$child_seq_$_cseq(c,r){
var arr__$1 = c.arr;
var rngs__$1 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,c))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,(shift - (5)),r):clojure.core.rrb_vector.nodes.ranges.call(null,c));
var gcs = (cljs.core.truth_(rngs__$1)?(rngs__$1[(32)]):clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr__$1));
return cljs.core.map.call(null,cljs.core.list,cljs.core.take.call(null,gcs,arr__$1),cljs.core.take.call(null,gcs,cljs.core.map.call(null,cljs.core._,rngs__$1,cljs.core.cons.call(null,(0),rngs__$1))));
});})(arr,rngs,cs))
;
return cljs.core.mapcat.call(null,cseq,cljs.core.take.call(null,cs,arr),cljs.core.take.call(null,cs,cljs.core.map.call(null,cljs.core._,rngs,cljs.core.cons.call(null,(0),rngs))));
});
clojure.core.rrb_vector.rrbt.rebalance = (function clojure$core$rrb_vector$rrbt$rebalance(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((n2 == null)){
return [n1,null];
} else {
var slc1 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n1,shift);
var slc2 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n2,shift);
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n1,shift);
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n2,shift);
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot.call(null,(p - (1)),(32)) + (1)));
if((e <= clojure.core.rrb_vector.rrbt.max_extra_search_steps)){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);
var i_20429 = (0);
var bs_20430 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));
while(true){
var temp__4422__auto___20431 = cljs.core.seq.call(null,bs_20430);
if(temp__4422__auto___20431){
var xs__4974__auto___20432 = temp__4422__auto___20431;
var block_20433 = cljs.core.first.call(null,xs__4974__auto___20432);
var a_20434__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_20435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_20434__$1[(32)] = r_20435);

(r_20435[(32)] = cljs.core.count.call(null,block_20433));

var i_20436__$1 = (0);
var o_20437 = (0);
var gcs_20438 = cljs.core.seq.call(null,block_20433);
while(true){
var temp__4422__auto___20439__$1 = cljs.core.seq.call(null,gcs_20438);
if(temp__4422__auto___20439__$1){
var xs__4974__auto___20440__$1 = temp__4422__auto___20439__$1;
var vec__20427_20441 = cljs.core.first.call(null,xs__4974__auto___20440__$1);
var gc_20442 = cljs.core.nth.call(null,vec__20427_20441,(0),null);
var gcr_20443 = cljs.core.nth.call(null,vec__20427_20441,(1),null);
(a_20434__$1[i_20436__$1] = gc_20442);

(r_20435[i_20436__$1] = (o_20437 + gcr_20443));

var G__20444 = (i_20436__$1 + (1));
var G__20445 = (o_20437 + gcr_20443);
var G__20446 = cljs.core.next.call(null,gcs_20438);
i_20436__$1 = G__20444;
o_20437 = G__20445;
gcs_20438 = G__20446;
continue;
} else {
}
break;
}

(new_arr[i_20429] = cljs.core.__GT_VectorNode.call(null,null,a_20434__$1));

(new_rngs[i_20429] = ((r_20435[((r_20435[(32)]) - (1))]) + (((i_20429 > (0)))?(new_rngs[(i_20429 - (1))]):(0))));

(new_rngs[(32)] = (i_20429 + (1)));

var G__20447 = (i_20429 + (1));
var G__20448 = cljs.core.next.call(null,bs_20430);
i_20429 = G__20447;
bs_20430 = G__20448;
continue;
} else {
}
break;
}

(new_arr[(32)] = new_rngs);

transferred_leaves.val = cnt2;

return [new_n1,null];
} else {
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);
var i_20449 = (0);
var bs_20450 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));
while(true){
var temp__4422__auto___20451 = cljs.core.seq.call(null,bs_20450);
if(temp__4422__auto___20451){
var xs__4974__auto___20452 = temp__4422__auto___20451;
var block_20453 = cljs.core.first.call(null,xs__4974__auto___20452);
var a_20454__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_20455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_20454__$1[(32)] = r_20455);

(r_20455[(32)] = cljs.core.count.call(null,block_20453));

var i_20456__$1 = (0);
var o_20457 = (0);
var gcs_20458 = cljs.core.seq.call(null,block_20453);
while(true){
var temp__4422__auto___20459__$1 = cljs.core.seq.call(null,gcs_20458);
if(temp__4422__auto___20459__$1){
var xs__4974__auto___20460__$1 = temp__4422__auto___20459__$1;
var vec__20428_20461 = cljs.core.first.call(null,xs__4974__auto___20460__$1);
var gc_20462 = cljs.core.nth.call(null,vec__20428_20461,(0),null);
var gcr_20463 = cljs.core.nth.call(null,vec__20428_20461,(1),null);
(a_20454__$1[i_20456__$1] = gc_20462);

(r_20455[i_20456__$1] = (o_20457 + gcr_20463));

var G__20464 = (i_20456__$1 + (1));
var G__20465 = (o_20457 + gcr_20463);
var G__20466 = cljs.core.next.call(null,gcs_20458);
i_20456__$1 = G__20464;
o_20457 = G__20465;
gcs_20458 = G__20466;
continue;
} else {
}
break;
}

if(((i_20449 < (32))) && ((((i_20449 * (32)) + cljs.core.count.call(null,block_20453)) > sbc1))){
var tbs_20467 = (((i_20449 * (32)) + cljs.core.count.call(null,block_20453)) - sbc1);
var li_20468 = ((r_20455[(32)]) - (1));
var d_20469 = (((tbs_20467 >= (32)))?(r_20455[li_20468]):((r_20455[li_20468]) - (r_20455[(li_20468 - tbs_20467)])));
transferred_leaves.val = (transferred_leaves.val + d_20469);
} else {
}

var new_arr_20470 = (((i_20449 < (32)))?new_arr1:new_arr2);
var new_rngs_20471 = (((i_20449 < (32)))?new_rngs1:new_rngs2);
var i_20472__$1 = cljs.core.mod.call(null,i_20449,(32));
(new_arr_20470[i_20472__$1] = cljs.core.__GT_VectorNode.call(null,null,a_20454__$1));

(new_rngs_20471[i_20472__$1] = ((r_20455[((r_20455[(32)]) - (1))]) + (((i_20472__$1 > (0)))?(new_rngs_20471[(i_20472__$1 - (1))]):(0))));

(new_rngs_20471[(32)] = (i_20472__$1 + (1)));

var G__20473 = (i_20449 + (1));
var G__20474 = cljs.core.next.call(null,bs_20450);
i_20449 = G__20473;
bs_20450 = G__20474;
continue;
} else {
}
break;
}

(new_arr1[(32)] = new_rngs1);

(new_arr2[(32)] = new_rngs2);

return [new_n1,new_n2];

}
}
}
});
clojure.core.rrb_vector.rrbt.zippath = (function clojure$core$rrb_vector$rrbt$zippath(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((shift === (5))){
return clojure.core.rrb_vector.rrbt.rebalance_leaves.call(null,n1,cnt1,n2,cnt2,transferred_leaves);
} else {
var c1 = clojure.core.rrb_vector.nodes.last_child.call(null,n1);
var c2 = clojure.core.rrb_vector.nodes.first_child.call(null,n2);
var ccnt1 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n1))?(function (){var m = cljs.core.mod.call(null,cnt1,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(function (){var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,n1);
var i = ((rngs[(32)]) - (1));
if((i === (0))){
return (rngs[(0)]);
} else {
return ((rngs[i]) - (rngs[(i - (1))]));
}
})());
var ccnt2 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n2))?(function (){var m = cljs.core.mod.call(null,cnt2,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(clojure.core.rrb_vector.nodes.ranges.call(null,n2)[(0)]));
var next_transferred_leaves = (new cljs.core.Box((0)));
var vec__20476 = clojure$core$rrb_vector$rrbt$zippath.call(null,(shift - (5)),c1,ccnt1,c2,ccnt2,next_transferred_leaves);
var new_c1 = cljs.core.nth.call(null,vec__20476,(0),null);
var new_c2 = cljs.core.nth.call(null,vec__20476,(1),null);
var d = next_transferred_leaves.val;
transferred_leaves.val = (transferred_leaves.val + d);

return clojure.core.rrb_vector.rrbt.rebalance.call(null,shift,(((c1 === new_c1))?n1:clojure.core.rrb_vector.nodes.replace_rightmost_child.call(null,shift,n1,new_c1,d)),(cnt1 + d),(cljs.core.truth_(new_c2)?(((c2 === new_c2))?n2:clojure.core.rrb_vector.nodes.replace_leftmost_child.call(null,shift,n2,cnt2,new_c2,d)):clojure.core.rrb_vector.nodes.remove_leftmost_child.call(null,shift,n2)),(cnt2 - d),transferred_leaves);
}
});
clojure.core.rrb_vector.rrbt.squash_nodes = (function clojure$core$rrb_vector$rrbt$squash_nodes(shift,n1,cnt1,n2,cnt2){
var arr1 = n1.arr;
var arr2 = n2.arr;
var li1 = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr1);
var li2 = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr2);
var slots = cljs.core.concat.call(null,cljs.core.take.call(null,li1,arr1),cljs.core.take.call(null,li2,arr2));
if((cljs.core.count.call(null,slots) > (32))){
return [n1,n2];
} else {
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs1 = cljs.core.take.call(null,li1,(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n1))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt1):clojure.core.rrb_vector.nodes.ranges.call(null,n1)));
var rngs2 = cljs.core.take.call(null,li2,(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n2))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt2):clojure.core.rrb_vector.nodes.ranges.call(null,n2)));
var rngs2__$1 = (function (){var r = cljs.core.last.call(null,rngs1);
return cljs.core.map.call(null,((function (r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots){
return (function (p1__20477_SHARP_){
return (p1__20477_SHARP_ + r);
});})(r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots))
,rngs2);
})();
var rngs = cljs.core.concat.call(null,rngs1,rngs2__$1);
(new_arr[(32)] = new_rngs);

var i_20478 = (0);
var cs_20479 = cljs.core.seq.call(null,slots);
while(true){
if(cs_20479){
(new_arr[i_20478] = cljs.core.first.call(null,cs_20479));

var G__20480 = (i_20478 + (1));
var G__20481 = cljs.core.next.call(null,cs_20479);
i_20478 = G__20480;
cs_20479 = G__20481;
continue;
} else {
}
break;
}

var i_20482 = (0);
var rngs_20483__$1 = cljs.core.seq.call(null,rngs);
while(true){
if(rngs_20483__$1){
(new_rngs[i_20482] = cljs.core.first.call(null,rngs_20483__$1));

var G__20484 = (i_20482 + (1));
var G__20485 = cljs.core.next.call(null,rngs_20483__$1);
i_20482 = G__20484;
rngs_20483__$1 = G__20485;
continue;
} else {
(new_rngs[(32)] = i_20482);
}
break;
}

return [cljs.core.__GT_VectorNode.call(null,null,new_arr),null];
}
});
clojure.core.rrb_vector.rrbt.splice_rrbts = (function clojure$core$rrb_vector$rrbt$splice_rrbts(v1,v2){
if((cljs.core.count.call(null,v1) === (0))){
return v2;
} else {
if((cljs.core.count.call(null,v2) < clojure.core.rrb_vector.rrbt.rrbt_concat_threshold)){
return cljs.core.into.call(null,v1,v2);
} else {
var s1 = v1.shift;
var s2 = v2.shift;
var r1 = v1.root;
var o_QMARK_ = clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,r1,s1,(cljs.core.count.call(null,v1) + ((32) - v1.tail.length)));
var r1__$1 = (cljs.core.truth_(o_QMARK_)?(function (){var tail = v1.tail;
var tail_node = cljs.core.__GT_VectorNode.call(null,null,tail);
var reg_QMARK_ = (function (){var and__4938__auto__ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,r1);
if(cljs.core.truth_(and__4938__auto__)){
return (tail.length === (32));
} else {
return and__4938__auto__;
}
})();
var arr = (new Array((cljs.core.truth_(reg_QMARK_)?(32):(33))));
(arr[(0)] = r1);

(arr[(1)] = clojure.core.rrb_vector.nodes.new_path_STAR_.call(null,s1,tail_node));

if(cljs.core.not.call(null,reg_QMARK_)){
var rngs_20492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs_20492[(32)] = (2));

(rngs_20492[(0)] = (cljs.core.count.call(null,v1) - tail.length));

(rngs_20492[(1)] = cljs.core.count.call(null,v1));

(arr[(32)] = rngs_20492);
} else {
}

return cljs.core.__GT_VectorNode.call(null,null,arr);
})():clojure.core.rrb_vector.nodes.fold_tail.call(null,r1,s1,clojure.core.rrb_vector.trees.tail_offset.call(null,v1.cnt,v1.tail),v1.tail));
var s1__$1 = (cljs.core.truth_(o_QMARK_)?(s1 + (5)):s1);
var r2 = v2.root;
var s = (function (){var x__5262__auto__ = s1__$1;
var y__5263__auto__ = s2;
return ((x__5262__auto__ > y__5263__auto__) ? x__5262__auto__ : y__5263__auto__);
})();
var r1__$2 = clojure.core.rrb_vector.rrbt.shift_from_to.call(null,r1__$1,s1__$1,s);
var r2__$1 = clojure.core.rrb_vector.rrbt.shift_from_to.call(null,r2,s2,s);
var transferred_leaves = (new cljs.core.Box((0)));
var vec__20489 = clojure.core.rrb_vector.rrbt.zippath.call(null,s,r1__$2,cljs.core.count.call(null,v1),r2__$1,(cljs.core.count.call(null,v2) - v2.tail.length),transferred_leaves);
var n1 = cljs.core.nth.call(null,vec__20489,(0),null);
var n2 = cljs.core.nth.call(null,vec__20489,(1),null);
var d = transferred_leaves.val;
var ncnt1 = (cljs.core.count.call(null,v1) + d);
var ncnt2 = ((cljs.core.count.call(null,v2) - v2.tail.length) - d);
var vec__20490 = (((n2 === r2__$1))?clojure.core.rrb_vector.rrbt.squash_nodes.call(null,s,n1,ncnt1,n2,ncnt2):[n1,n2]);
var n1__$1 = cljs.core.nth.call(null,vec__20490,(0),null);
var n2__$1 = cljs.core.nth.call(null,vec__20490,(1),null);
var ncnt1__$1 = (cljs.core.truth_(n2__$1)?ncnt1:(ncnt1 + ncnt2));
var ncnt2__$1 = (cljs.core.truth_(n2__$1)?ncnt2:(0));
if(cljs.core.truth_(n2__$1)){
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,null,arr);
(arr[(0)] = n1__$1);

(arr[(1)] = n2__$1);

(arr[(32)] = (function (){var G__20491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__20491[(0)] = ncnt1__$1);

(G__20491[(1)] = (ncnt1__$1 + ncnt2__$1));

(G__20491[(32)] = (2));

return G__20491;
})());

return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),(s + (5)),new_root,v2.tail,null,null));
} else {
var r = n1__$1;
var s__$1 = s;
while(true){
if(((s__$1 > (5))) && (((r.arr[(1)]) == null))){
var G__20493 = (r.arr[(0)]);
var G__20494 = (s__$1 - (5));
r = G__20493;
s__$1 = G__20494;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),s__$1,r,v2.tail,null,null));
}
break;
}
}

}
}
});

/**
* @constructor
*/
clojure.core.rrb_vector.rrbt.Transient = (function (cnt,shift,root,tail,tidx){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.tidx = tidx;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.tidx < (32))){
(self__.tail[self__.tidx] = o);

self__.cnt = (self__.cnt + (1));

self__.tidx = (self__.tidx + (1));

return this$__$1;
} else {
var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

self__.tidx = (1);

if(cljs.core.truth_(clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt))){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,self__.root))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var G__20495_20498 = new_arr;
(G__20495_20498[(0)] = self__.root);

(G__20495_20498[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));


self__.root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.ranges.call(null,self__.root)[(31)]);
var G__20496_20499 = new_arr;
(G__20496_20499[(0)] = self__.root);

(G__20496_20499[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));

(G__20496_20499[(32)] = new_rngs);


var G__20497_20500 = new_rngs;
(G__20497_20500[(0)] = root_total_range);

(G__20497_20500[(1)] = (root_total_range + (32)));

(G__20497_20500[(32)] = (2));


self__.root = new_root;

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
} else {
var new_root = clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var trimmed_tail = (new Array(self__.tidx));
cljs.core.array_copy.call(null,self__.tail,(0),trimmed_tail,(0),self__.tidx);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,trimmed_tail,null,null));
} else {
throw (new Error("persistent! called twice"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){
var self__ = this;
var this$__$1 = this;
return cljs.core._assoc_n_BANG_.call(null,this$__$1,key,val);
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = (self__.cnt - self__.tidx);
if((tail_off <= i)){
(self__.tail[(i - tail_off)] = val);
} else {
self__.root = clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,self__.shift,self__.root.edit,self__.root,i,val);
}

return this$__$1;
} else {
if((i === self__.cnt)){
return cljs.core._conj_BANG_.call(null,this$__$1,val);
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

self__.tidx = (0);

(self__.tail[(0)] = null);

return this$__$1;
} else {
if((self__.tidx > (1))){
self__.cnt = (self__.cnt - (1));

self__.tidx = (self__.tidx - (1));

(self__.tail[self__.tidx] = null);

return this$__$1;
} else {
var new_tail_base = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var new_tail = cljs.core.aclone.call(null,new_tail_base);
var new_tidx = new_tail_base.length;
var new_root = clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root);
if((new_root == null)){
self__.cnt = (self__.cnt - (1));

self__.root = clojure.core.rrb_vector.transients.ensure_editable.call(null,self__.root.edit,clojure.core.rrb_vector.nodes.empty_node);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
if(((self__.shift > (5))) && (((new_root.arr[(1)]) == null))){
self__.cnt = (self__.cnt - (1));

self__.shift = (self__.shift - (5));

self__.root = (new_root.arr[(0)]);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
self__.cnt = (self__.cnt - (1));

self__.root = new_root;

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;

}
}

}
}
}
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.Symbol(null,"tidx","tidx",1939123455,null)], null);
});

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Transient";

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"clojure.core.rrb-vector.rrbt/Transient");
});

clojure.core.rrb_vector.rrbt.__GT_Transient = (function clojure$core$rrb_vector$rrbt$__GT_Transient(cnt,shift,root,tail,tidx){
return (new clojure.core.rrb_vector.rrbt.Transient(cnt,shift,root,tail,tidx));
});


//# sourceMappingURL=rrbt.js.map