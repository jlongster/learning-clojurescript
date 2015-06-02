// Compiled by ClojureScript 0.0-3308 {}
goog.provide('thi.ng.geom.core.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.error');









/**
* @constructor
*/
thi.ng.geom.core.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__15373 = self__.buf;
var G__15374 = (G__15373[(0)]);
var G__15375 = (G__15373[(1)]);
(b[(0)] = ((G__15374 * c) - (G__15375 * s)));

(b[(1)] = ((G__15374 * s) + (G__15375 * c)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,___$1);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,___$1);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15376 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15377 = v.buf;
return (((G__15376[(0)]) * (G__15377[(0)])) + ((G__15376[(1)]) * (G__15377[(1)])));
} else {
return (((G__15376[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__15376[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15378 = self__.buf;
var G__15379 = (G__15378[(0)]);
var G__15380 = (G__15378[(1)]);
var l = Math.sqrt(((G__15379 * G__15379) + (G__15380 * G__15380)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__15379 / l));

(b[(1)] = (G__15380 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__15381 = self__.buf;
var G__15382 = (G__15381[(0)]);
var G__15383 = (G__15381[(1)]);
var l = Math.sqrt(((G__15382 * G__15382) + (G__15383 * G__15383)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__15382 * l__$1));

(b[(1)] = (G__15383 * l__$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15384 = self__.buf;
var G__15386 = (G__15384[(0)]);
var G__15387 = (G__15384[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15385 = v.buf;
var G__15388 = (G__15385[(0)]);
var G__15389 = (G__15385[(1)]);
var d = (((G__15386 * G__15388) + (G__15387 * G__15389)) + (2));
(b[(0)] = ((G__15388 * d) - G__15386));

(b[(1)] = ((G__15389 * d) - G__15387));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__15388 = cljs.core.nth.call(null,v,(0),0.0);
var G__15389 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__15386 * G__15388) + (G__15387 * G__15389)) + (2));
(b[(0)] = ((G__15388 * d) - G__15386));

(b[(1)] = ((G__15389 * d) - G__15387));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15390 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15391 = v.buf;
return (((G__15390[(0)]) * (G__15391[(1)])) - ((G__15390[(1)]) * (G__15391[(0)])));
} else {
return (((G__15390[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__15390[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15395_15722 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15396_15723 = v.buf;
(self__.buf[(0)] = ((G__15395_15722[(0)]) - (G__15396_15723[(0)])));

(self__.buf[(1)] = ((G__15395_15722[(1)]) - (G__15396_15723[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15395_15722[(0)]) - v));

(self__.buf[(1)] = ((G__15395_15722[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15395_15722[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15395_15722[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15404_15724 = typeof v1 === 'number';
var G__15405_15725 = typeof v2 === 'number';
if(((G__15404_15724)?G__15405_15725:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__15406_15726 = ((!(G__15404_15724))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15407_15727 = ((!(G__15405_15725))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15398_15728 = (cljs.core.truth_(G__15406_15726)?v1.buf:null);
var G__15399_15729 = (cljs.core.truth_(G__15407_15727)?v2.buf:null);
var G__15400_15730 = (cljs.core.truth_(G__15406_15726)?(G__15398_15728[(0)]):((G__15404_15724)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15401_15731 = (cljs.core.truth_(G__15406_15726)?(G__15398_15728[(1)]):((G__15404_15724)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15402_15732 = (cljs.core.truth_(G__15407_15727)?(G__15399_15729[(0)]):((G__15405_15725)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15403_15733 = (cljs.core.truth_(G__15407_15727)?(G__15399_15729[(1)]):((G__15405_15725)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__15400_15730) - G__15402_15732));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__15401_15731) - G__15403_15733));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15408_15734 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15409_15735 = v.buf;
(self__.buf[(0)] = ((G__15408_15734[(0)]) * (G__15409_15735[(0)])));

(self__.buf[(1)] = ((G__15408_15734[(1)]) * (G__15409_15735[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15408_15734[(0)]) * v));

(self__.buf[(1)] = ((G__15408_15734[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15408_15734[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15408_15734[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15417_15736 = typeof v1 === 'number';
var G__15418_15737 = typeof v2 === 'number';
if(((G__15417_15736)?G__15418_15737:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__15419_15738 = ((!(G__15417_15736))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15420_15739 = ((!(G__15418_15737))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15411_15740 = (cljs.core.truth_(G__15419_15738)?v1.buf:null);
var G__15412_15741 = (cljs.core.truth_(G__15420_15739)?v2.buf:null);
var G__15413_15742 = (cljs.core.truth_(G__15419_15738)?(G__15411_15740[(0)]):((G__15417_15736)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15414_15743 = (cljs.core.truth_(G__15419_15738)?(G__15411_15740[(1)]):((G__15417_15736)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15415_15744 = (cljs.core.truth_(G__15420_15739)?(G__15412_15741[(0)]):((G__15418_15737)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15416_15745 = (cljs.core.truth_(G__15420_15739)?(G__15412_15741[(1)]):((G__15418_15737)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__15413_15742) * G__15415_15744));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__15414_15743) * G__15416_15745));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15430_15746 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15431_15747 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15432_15748 = ((!(G__15430_15746))?typeof a === 'number':null);
var G__15433_15749 = ((!(G__15431_15747))?typeof b === 'number':null);
var G__15421_15750 = self__.buf;
var G__15422_15751 = ((G__15430_15746)?a.buf:null);
var G__15423_15752 = ((G__15431_15747)?b.buf:null);
var G__15424_15753 = (G__15421_15750[(0)]);
var G__15425_15754 = (G__15421_15750[(1)]);
var G__15426_15755 = ((G__15430_15746)?(G__15422_15751[(0)]):(cljs.core.truth_(G__15432_15748)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15427_15756 = ((G__15430_15746)?(G__15422_15751[(1)]):(cljs.core.truth_(G__15432_15748)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15428_15757 = ((G__15431_15747)?(G__15423_15752[(0)]):(cljs.core.truth_(G__15433_15749)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15429_15758 = ((G__15431_15747)?(G__15423_15752[(1)]):(cljs.core.truth_(G__15433_15749)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__15424_15753 - G__15426_15755) * G__15428_15757));

(self__.buf[(1)] = ((G__15425_15754 - G__15427_15756) * G__15429_15758));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15443_15759 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15444_15760 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15445_15761 = ((!(G__15443_15759))?typeof a === 'number':null);
var G__15446_15762 = ((!(G__15444_15760))?typeof b === 'number':null);
var G__15434_15763 = self__.buf;
var G__15435_15764 = ((G__15443_15759)?a.buf:null);
var G__15436_15765 = ((G__15444_15760)?b.buf:null);
var G__15437_15766 = (G__15434_15763[(0)]);
var G__15438_15767 = (G__15434_15763[(1)]);
var G__15439_15768 = ((G__15443_15759)?(G__15435_15764[(0)]):(cljs.core.truth_(G__15445_15761)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15440_15769 = ((G__15443_15759)?(G__15435_15764[(1)]):(cljs.core.truth_(G__15445_15761)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15441_15770 = ((G__15444_15760)?(G__15436_15765[(0)]):(cljs.core.truth_(G__15446_15762)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15442_15771 = ((G__15444_15760)?(G__15436_15765[(1)]):(cljs.core.truth_(G__15446_15762)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__15437_15766 * G__15439_15768) - G__15441_15770));

(self__.buf[(1)] = ((G__15438_15767 * G__15440_15769) - G__15442_15771));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.common.math.core.abs.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.common.math.core.abs.call(null,(self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15456_15772 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15457_15773 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15458_15774 = ((!(G__15456_15772))?typeof a === 'number':null);
var G__15459_15775 = ((!(G__15457_15773))?typeof b === 'number':null);
var G__15447_15776 = self__.buf;
var G__15448_15777 = ((G__15456_15772)?a.buf:null);
var G__15449_15778 = ((G__15457_15773)?b.buf:null);
var G__15450_15779 = (G__15447_15776[(0)]);
var G__15451_15780 = (G__15447_15776[(1)]);
var G__15452_15781 = ((G__15456_15772)?(G__15448_15777[(0)]):(cljs.core.truth_(G__15458_15774)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15453_15782 = ((G__15456_15772)?(G__15448_15777[(1)]):(cljs.core.truth_(G__15458_15774)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15454_15783 = ((G__15457_15773)?(G__15449_15778[(0)]):(cljs.core.truth_(G__15459_15775)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15455_15784 = ((G__15457_15773)?(G__15449_15778[(1)]):(cljs.core.truth_(G__15459_15775)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__15450_15779 * G__15452_15781) + G__15454_15783));

(self__.buf[(1)] = ((G__15451_15780 * G__15453_15782) + G__15455_15784));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15460_15785 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15461_15786 = v.buf;
(self__.buf[(0)] = ((G__15460_15785[(0)]) / (G__15461_15786[(0)])));

(self__.buf[(1)] = ((G__15460_15785[(1)]) / (G__15461_15786[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15460_15785[(0)]) / v));

(self__.buf[(1)] = ((G__15460_15785[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15460_15785[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15460_15785[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15469_15787 = typeof v1 === 'number';
var G__15470_15788 = typeof v2 === 'number';
if(((G__15469_15787)?G__15470_15788:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__15471_15789 = ((!(G__15469_15787))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15472_15790 = ((!(G__15470_15788))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15463_15791 = (cljs.core.truth_(G__15471_15789)?v1.buf:null);
var G__15464_15792 = (cljs.core.truth_(G__15472_15790)?v2.buf:null);
var G__15465_15793 = (cljs.core.truth_(G__15471_15789)?(G__15463_15791[(0)]):((G__15469_15787)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15466_15794 = (cljs.core.truth_(G__15471_15789)?(G__15463_15791[(1)]):((G__15469_15787)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15467_15795 = (cljs.core.truth_(G__15472_15790)?(G__15464_15792[(0)]):((G__15470_15788)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15468_15796 = (cljs.core.truth_(G__15472_15790)?(G__15464_15792[(1)]):((G__15470_15788)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__15465_15793) / G__15467_15795));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__15466_15794) / G__15468_15796));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15473_15797 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15474_15798 = v.buf;
(self__.buf[(0)] = ((G__15473_15797[(0)]) + (G__15474_15798[(0)])));

(self__.buf[(1)] = ((G__15473_15797[(1)]) + (G__15474_15798[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15473_15797[(0)]) + v));

(self__.buf[(1)] = ((G__15473_15797[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15473_15797[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15473_15797[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15482_15799 = typeof v1 === 'number';
var G__15483_15800 = typeof v2 === 'number';
if(((G__15482_15799)?G__15483_15800:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__15484_15801 = ((!(G__15482_15799))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15485_15802 = ((!(G__15483_15800))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15476_15803 = (cljs.core.truth_(G__15484_15801)?v1.buf:null);
var G__15477_15804 = (cljs.core.truth_(G__15485_15802)?v2.buf:null);
var G__15478_15805 = (cljs.core.truth_(G__15484_15801)?(G__15476_15803[(0)]):((G__15482_15799)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15479_15806 = (cljs.core.truth_(G__15484_15801)?(G__15476_15803[(1)]):((G__15482_15799)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15480_15807 = (cljs.core.truth_(G__15485_15802)?(G__15477_15804[(0)]):((G__15483_15800)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15481_15808 = (cljs.core.truth_(G__15485_15802)?(G__15477_15804[(1)]):((G__15483_15800)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__15478_15805) + G__15480_15807));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__15479_15806) + G__15481_15808));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15495_15809 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15496_15810 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15497_15811 = ((!(G__15495_15809))?typeof a === 'number':null);
var G__15498_15812 = ((!(G__15496_15810))?typeof b === 'number':null);
var G__15486_15813 = self__.buf;
var G__15487_15814 = ((G__15495_15809)?a.buf:null);
var G__15488_15815 = ((G__15496_15810)?b.buf:null);
var G__15489_15816 = (G__15486_15813[(0)]);
var G__15490_15817 = (G__15486_15813[(1)]);
var G__15491_15818 = ((G__15495_15809)?(G__15487_15814[(0)]):(cljs.core.truth_(G__15497_15811)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15492_15819 = ((G__15495_15809)?(G__15487_15814[(1)]):(cljs.core.truth_(G__15497_15811)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15493_15820 = ((G__15496_15810)?(G__15488_15815[(0)]):(cljs.core.truth_(G__15498_15812)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15494_15821 = ((G__15496_15810)?(G__15488_15815[(1)]):(cljs.core.truth_(G__15498_15812)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__15489_15816 + G__15491_15818) * G__15493_15820));

(self__.buf[(1)] = ((G__15490_15817 + G__15492_15819) * G__15494_15821));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)).call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4953__auto__ = self__._hash;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((2) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1))));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.common.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading.call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading.call(null,a) - thi.ng.geom.core.heading.call(null,___$1));
if((t < (0))){
return (t + thi.ng.common.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15499 = self__.buf;
var G__15501 = (G__15499[(0)]);
var G__15502 = (G__15499[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15500 = v.buf;
var G__15503 = (G__15500[(0)]);
var G__15504 = (G__15500[(1)]);
var dx = (G__15501 - G__15503);
var dy = (G__15502 - G__15504);
return ((dx * dx) + (dy * dy));
} else {
var G__15503 = cljs.core.nth.call(null,v,(0),0.0);
var G__15504 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__15501 - G__15503);
var dy = (G__15502 - G__15504);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
return acc;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11129__auto__ = (new Float32Array((2)));
var G__15514_15822 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15515_15823 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15516_15824 = ((!(G__15514_15822))?typeof a === 'number':null);
var G__15517_15825 = ((!(G__15515_15823))?typeof b === 'number':null);
var G__15505_15826 = self__.buf;
var G__15506_15827 = ((G__15514_15822)?a.buf:null);
var G__15507_15828 = ((G__15515_15823)?b.buf:null);
var G__15508_15829 = (G__15505_15826[(0)]);
var G__15509_15830 = (G__15505_15826[(1)]);
var G__15510_15831 = ((G__15514_15822)?(G__15506_15827[(0)]):(cljs.core.truth_(G__15516_15824)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15511_15832 = ((G__15514_15822)?(G__15506_15827[(1)]):(cljs.core.truth_(G__15516_15824)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15512_15833 = ((G__15515_15823)?(G__15507_15828[(0)]):(cljs.core.truth_(G__15517_15825)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15513_15834 = ((G__15515_15823)?(G__15507_15828[(1)]):(cljs.core.truth_(G__15517_15825)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__11129__auto__[(0)] = ((G__15508_15829 * G__15510_15831) - G__15512_15833));

(dest__11129__auto__[(1)] = ((G__15509_15830 * G__15511_15832) - G__15513_15834));

return (new thi.ng.geom.core.vector.Vec2(dest__11129__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11118__auto__ = (new Float32Array((2)));
var G__15518_15835 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15519_15836 = v.buf;
(dest__11118__auto__[(0)] = ((G__15518_15835[(0)]) * (G__15519_15836[(0)])));

(dest__11118__auto__[(1)] = ((G__15518_15835[(1)]) * (G__15519_15836[(1)])));
} else {
if(typeof v === 'number'){
(dest__11118__auto__[(0)] = ((G__15518_15835[(0)]) * v));

(dest__11118__auto__[(1)] = ((G__15518_15835[(1)]) * v));
} else {
(dest__11118__auto__[(0)] = ((G__15518_15835[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11118__auto__[(1)] = ((G__15518_15835[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11118__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15520 = self__.buf;
var G__15523 = (new Float32Array((2)));
var G__15524 = (G__15520[(0)]);
var G__15525 = (G__15520[(1)]);
var G__15530 = typeof v1 === 'number';
var G__15531 = typeof v2 === 'number';
if(((G__15530)?G__15531:false)){
(G__15523[(0)] = (G__15524 * v1));

(G__15523[(1)] = (G__15525 * v2));
} else {
var G__15532_15837 = ((!(G__15530))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15533_15838 = ((!(G__15531))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15521_15839 = (cljs.core.truth_(G__15532_15837)?v1.buf:null);
var G__15522_15840 = (cljs.core.truth_(G__15533_15838)?v2.buf:null);
var G__15526_15841 = (cljs.core.truth_(G__15532_15837)?(G__15521_15839[(0)]):((G__15530)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__15527_15842 = (cljs.core.truth_(G__15532_15837)?(G__15521_15839[(1)]):((G__15530)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__15528_15843 = (cljs.core.truth_(G__15533_15838)?(G__15522_15840[(0)]):((G__15531)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__15529_15844 = (cljs.core.truth_(G__15533_15838)?(G__15522_15840[(1)]):((G__15531)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__15523[(0)] = ((G__15524 * G__15526_15841) * G__15528_15843));

(G__15523[(1)] = ((G__15525 * G__15527_15842) * G__15529_15844));
}

return (new thi.ng.geom.core.vector.Vec2(G__15523,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11092__auto__ = (new Float32Array((2)));
var G__15534_15845 = self__.buf;
(dest__11092__auto__[(0)] = (- (G__15534_15845[(0)])));

(dest__11092__auto__[(1)] = (- (G__15534_15845[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__11092__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11118__auto__ = (new Float32Array((2)));
var G__15535_15846 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15536_15847 = v.buf;
(dest__11118__auto__[(0)] = ((G__15535_15846[(0)]) - (G__15536_15847[(0)])));

(dest__11118__auto__[(1)] = ((G__15535_15846[(1)]) - (G__15536_15847[(1)])));
} else {
if(typeof v === 'number'){
(dest__11118__auto__[(0)] = ((G__15535_15846[(0)]) - v));

(dest__11118__auto__[(1)] = ((G__15535_15846[(1)]) - v));
} else {
(dest__11118__auto__[(0)] = ((G__15535_15846[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__11118__auto__[(1)] = ((G__15535_15846[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11118__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15537 = self__.buf;
var G__15540 = (new Float32Array((2)));
var G__15541 = (G__15537[(0)]);
var G__15542 = (G__15537[(1)]);
var G__15547 = typeof v1 === 'number';
var G__15548 = typeof v2 === 'number';
if(((G__15547)?G__15548:false)){
(G__15540[(0)] = (G__15541 - v1));

(G__15540[(1)] = (G__15542 - v2));
} else {
var G__15549_15848 = ((!(G__15547))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15550_15849 = ((!(G__15548))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15538_15850 = (cljs.core.truth_(G__15549_15848)?v1.buf:null);
var G__15539_15851 = (cljs.core.truth_(G__15550_15849)?v2.buf:null);
var G__15543_15852 = (cljs.core.truth_(G__15549_15848)?(G__15538_15850[(0)]):((G__15547)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15544_15853 = (cljs.core.truth_(G__15549_15848)?(G__15538_15850[(1)]):((G__15547)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15545_15854 = (cljs.core.truth_(G__15550_15849)?(G__15539_15851[(0)]):((G__15548)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15546_15855 = (cljs.core.truth_(G__15550_15849)?(G__15539_15851[(1)]):((G__15548)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15540[(0)] = ((G__15541 - G__15543_15852) - G__15545_15854));

(G__15540[(1)] = ((G__15542 - G__15544_15853) - G__15546_15855));
}

return (new thi.ng.geom.core.vector.Vec2(G__15540,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11129__auto__ = (new Float32Array((2)));
var G__15560_15856 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15561_15857 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15562_15858 = ((!(G__15560_15856))?typeof a === 'number':null);
var G__15563_15859 = ((!(G__15561_15857))?typeof b === 'number':null);
var G__15551_15860 = self__.buf;
var G__15552_15861 = ((G__15560_15856)?a.buf:null);
var G__15553_15862 = ((G__15561_15857)?b.buf:null);
var G__15554_15863 = (G__15551_15860[(0)]);
var G__15555_15864 = (G__15551_15860[(1)]);
var G__15556_15865 = ((G__15560_15856)?(G__15552_15861[(0)]):(cljs.core.truth_(G__15562_15858)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15557_15866 = ((G__15560_15856)?(G__15552_15861[(1)]):(cljs.core.truth_(G__15562_15858)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15558_15867 = ((G__15561_15857)?(G__15553_15862[(0)]):(cljs.core.truth_(G__15563_15859)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15559_15868 = ((G__15561_15857)?(G__15553_15862[(1)]):(cljs.core.truth_(G__15563_15859)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__11129__auto__[(0)] = ((G__15554_15863 * G__15556_15865) + G__15558_15867));

(dest__11129__auto__[(1)] = ((G__15555_15864 * G__15557_15866) + G__15559_15868));

return (new thi.ng.geom.core.vector.Vec2(dest__11129__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11129__auto__ = (new Float32Array((2)));
var G__15573_15869 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15574_15870 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15575_15871 = ((!(G__15573_15869))?typeof a === 'number':null);
var G__15576_15872 = ((!(G__15574_15870))?typeof b === 'number':null);
var G__15564_15873 = self__.buf;
var G__15565_15874 = ((G__15573_15869)?a.buf:null);
var G__15566_15875 = ((G__15574_15870)?b.buf:null);
var G__15567_15876 = (G__15564_15873[(0)]);
var G__15568_15877 = (G__15564_15873[(1)]);
var G__15569_15878 = ((G__15573_15869)?(G__15565_15874[(0)]):(cljs.core.truth_(G__15575_15871)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15570_15879 = ((G__15573_15869)?(G__15565_15874[(1)]):(cljs.core.truth_(G__15575_15871)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15571_15880 = ((G__15574_15870)?(G__15566_15875[(0)]):(cljs.core.truth_(G__15576_15872)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15572_15881 = ((G__15574_15870)?(G__15566_15875[(1)]):(cljs.core.truth_(G__15576_15872)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__11129__auto__[(0)] = ((G__15567_15876 + G__15569_15878) * G__15571_15880));

(dest__11129__auto__[(1)] = ((G__15568_15877 + G__15570_15879) * G__15572_15881));

return (new thi.ng.geom.core.vector.Vec2(dest__11129__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11092__auto__ = (new Float32Array((2)));
var G__15577_15882 = self__.buf;
(dest__11092__auto__[(0)] = ((1) / (G__15577_15882[(0)])));

(dest__11092__auto__[(1)] = ((1) / (G__15577_15882[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__11092__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11118__auto__ = (new Float32Array((2)));
var G__15578_15883 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15579_15884 = v.buf;
(dest__11118__auto__[(0)] = ((G__15578_15883[(0)]) / (G__15579_15884[(0)])));

(dest__11118__auto__[(1)] = ((G__15578_15883[(1)]) / (G__15579_15884[(1)])));
} else {
if(typeof v === 'number'){
(dest__11118__auto__[(0)] = ((G__15578_15883[(0)]) / v));

(dest__11118__auto__[(1)] = ((G__15578_15883[(1)]) / v));
} else {
(dest__11118__auto__[(0)] = ((G__15578_15883[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__11118__auto__[(1)] = ((G__15578_15883[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11118__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15580 = self__.buf;
var G__15583 = (new Float32Array((2)));
var G__15584 = (G__15580[(0)]);
var G__15585 = (G__15580[(1)]);
var G__15590 = typeof v1 === 'number';
var G__15591 = typeof v2 === 'number';
if(((G__15590)?G__15591:false)){
(G__15583[(0)] = (G__15584 / v1));

(G__15583[(1)] = (G__15585 / v2));
} else {
var G__15592_15885 = ((!(G__15590))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15593_15886 = ((!(G__15591))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15581_15887 = (cljs.core.truth_(G__15592_15885)?v1.buf:null);
var G__15582_15888 = (cljs.core.truth_(G__15593_15886)?v2.buf:null);
var G__15586_15889 = (cljs.core.truth_(G__15592_15885)?(G__15581_15887[(0)]):((G__15590)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15587_15890 = (cljs.core.truth_(G__15592_15885)?(G__15581_15887[(1)]):((G__15590)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15588_15891 = (cljs.core.truth_(G__15593_15886)?(G__15582_15888[(0)]):((G__15591)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15589_15892 = (cljs.core.truth_(G__15593_15886)?(G__15582_15888[(1)]):((G__15591)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15583[(0)] = ((G__15584 / G__15586_15889) / G__15588_15891));

(G__15583[(1)] = ((G__15585 / G__15587_15890) / G__15589_15892));
}

return (new thi.ng.geom.core.vector.Vec2(G__15583,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11118__auto__ = (new Float32Array((2)));
var G__15594_15893 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15595_15894 = v.buf;
(dest__11118__auto__[(0)] = ((G__15594_15893[(0)]) + (G__15595_15894[(0)])));

(dest__11118__auto__[(1)] = ((G__15594_15893[(1)]) + (G__15595_15894[(1)])));
} else {
if(typeof v === 'number'){
(dest__11118__auto__[(0)] = ((G__15594_15893[(0)]) + v));

(dest__11118__auto__[(1)] = ((G__15594_15893[(1)]) + v));
} else {
(dest__11118__auto__[(0)] = ((G__15594_15893[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11118__auto__[(1)] = ((G__15594_15893[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11118__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15596 = self__.buf;
var G__15599 = (new Float32Array((2)));
var G__15600 = (G__15596[(0)]);
var G__15601 = (G__15596[(1)]);
var G__15606 = typeof v1 === 'number';
var G__15607 = typeof v2 === 'number';
if(((G__15606)?G__15607:false)){
(G__15599[(0)] = (G__15600 + v1));

(G__15599[(1)] = (G__15601 + v2));
} else {
var G__15608_15895 = ((!(G__15606))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15609_15896 = ((!(G__15607))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15597_15897 = (cljs.core.truth_(G__15608_15895)?v1.buf:null);
var G__15598_15898 = (cljs.core.truth_(G__15609_15896)?v2.buf:null);
var G__15602_15899 = (cljs.core.truth_(G__15608_15895)?(G__15597_15897[(0)]):((G__15606)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15603_15900 = (cljs.core.truth_(G__15608_15895)?(G__15597_15897[(1)]):((G__15606)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15604_15901 = (cljs.core.truth_(G__15609_15896)?(G__15598_15898[(0)]):((G__15607)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15605_15902 = (cljs.core.truth_(G__15609_15896)?(G__15598_15898[(1)]):((G__15607)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15599[(0)] = ((G__15600 + G__15602_15899) + G__15604_15901));

(G__15599[(1)] = ((G__15601 + G__15603_15900) + G__15605_15902));
}

return (new thi.ng.geom.core.vector.Vec2(G__15599,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11092__auto__ = (new Float32Array((2)));
var G__15610_15903 = self__.buf;
(dest__11092__auto__[(0)] = thi.ng.common.math.core.abs.call(null,(G__15610_15903[(0)])));

(dest__11092__auto__[(1)] = thi.ng.common.math.core.abs.call(null,(G__15610_15903[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__11092__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11129__auto__ = (new Float32Array((2)));
var G__15620_15904 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15621_15905 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15622_15906 = ((!(G__15620_15904))?typeof a === 'number':null);
var G__15623_15907 = ((!(G__15621_15905))?typeof b === 'number':null);
var G__15611_15908 = self__.buf;
var G__15612_15909 = ((G__15620_15904)?a.buf:null);
var G__15613_15910 = ((G__15621_15905)?b.buf:null);
var G__15614_15911 = (G__15611_15908[(0)]);
var G__15615_15912 = (G__15611_15908[(1)]);
var G__15616_15913 = ((G__15620_15904)?(G__15612_15909[(0)]):(cljs.core.truth_(G__15622_15906)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15617_15914 = ((G__15620_15904)?(G__15612_15909[(1)]):(cljs.core.truth_(G__15622_15906)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15618_15915 = ((G__15621_15905)?(G__15613_15910[(0)]):(cljs.core.truth_(G__15623_15907)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15619_15916 = ((G__15621_15905)?(G__15613_15910[(1)]):(cljs.core.truth_(G__15623_15907)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__11129__auto__[(0)] = ((G__15614_15911 - G__15616_15913) * G__15618_15915));

(dest__11129__auto__[(1)] = ((G__15615_15912 - G__15617_15914) * G__15619_15916));

return (new thi.ng.geom.core.vector.Vec2(dest__11129__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11118__auto__ = (new Float32Array((2)));
var G__15624_15917 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15625_15918 = v.buf;
(dest__11118__auto__[(0)] = ((G__15624_15917[(0)]) + (G__15625_15918[(0)])));

(dest__11118__auto__[(1)] = ((G__15624_15917[(1)]) + (G__15625_15918[(1)])));
} else {
if(typeof v === 'number'){
(dest__11118__auto__[(0)] = ((G__15624_15917[(0)]) + v));

(dest__11118__auto__[(1)] = ((G__15624_15917[(1)]) + v));
} else {
(dest__11118__auto__[(0)] = ((G__15624_15917[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11118__auto__[(1)] = ((G__15624_15917[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11118__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15626 = self__.buf;
var G__15629 = (new Float32Array((2)));
var G__15630 = (G__15626[(0)]);
var G__15631 = (G__15626[(1)]);
var G__15636 = typeof v1 === 'number';
var G__15637 = typeof v2 === 'number';
if(((G__15636)?G__15637:false)){
(G__15629[(0)] = (G__15630 + v1));

(G__15629[(1)] = (G__15631 + v2));
} else {
var G__15638_15919 = ((!(G__15636))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15639_15920 = ((!(G__15637))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15627_15921 = (cljs.core.truth_(G__15638_15919)?v1.buf:null);
var G__15628_15922 = (cljs.core.truth_(G__15639_15920)?v2.buf:null);
var G__15632_15923 = (cljs.core.truth_(G__15638_15919)?(G__15627_15921[(0)]):((G__15636)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15633_15924 = (cljs.core.truth_(G__15638_15919)?(G__15627_15921[(1)]):((G__15636)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15634_15925 = (cljs.core.truth_(G__15639_15920)?(G__15628_15922[(0)]):((G__15637)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15635_15926 = (cljs.core.truth_(G__15639_15920)?(G__15628_15922[(1)]):((G__15637)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15629[(0)] = ((G__15630 + G__15632_15923) + G__15634_15925));

(G__15629[(1)] = ((G__15631 + G__15633_15924) + G__15635_15926));
}

return (new thi.ng.geom.core.vector.Vec2(G__15629,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.core.vector.swizzle2_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k === (0))) || ((k === (1)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11118__auto__ = (new Float32Array((2)));
var G__15640_15927 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15641_15928 = v.buf;
(dest__11118__auto__[(0)] = ((G__15640_15927[(0)]) * (G__15641_15928[(0)])));

(dest__11118__auto__[(1)] = ((G__15640_15927[(1)]) * (G__15641_15928[(1)])));
} else {
if(typeof v === 'number'){
(dest__11118__auto__[(0)] = ((G__15640_15927[(0)]) * v));

(dest__11118__auto__[(1)] = ((G__15640_15927[(1)]) * v));
} else {
(dest__11118__auto__[(0)] = ((G__15640_15927[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11118__auto__[(1)] = ((G__15640_15927[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11118__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15642 = self__.buf;
var G__15645 = (new Float32Array((2)));
var G__15646 = (G__15642[(0)]);
var G__15647 = (G__15642[(1)]);
var G__15652 = typeof v1 === 'number';
var G__15653 = typeof v2 === 'number';
if(((G__15652)?G__15653:false)){
(G__15645[(0)] = (G__15646 * v1));

(G__15645[(1)] = (G__15647 * v2));
} else {
var G__15654_15929 = ((!(G__15652))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15655_15930 = ((!(G__15653))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15643_15931 = (cljs.core.truth_(G__15654_15929)?v1.buf:null);
var G__15644_15932 = (cljs.core.truth_(G__15655_15930)?v2.buf:null);
var G__15648_15933 = (cljs.core.truth_(G__15654_15929)?(G__15643_15931[(0)]):((G__15652)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__15649_15934 = (cljs.core.truth_(G__15654_15929)?(G__15643_15931[(1)]):((G__15652)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__15650_15935 = (cljs.core.truth_(G__15655_15930)?(G__15644_15932[(0)]):((G__15653)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__15651_15936 = (cljs.core.truth_(G__15655_15930)?(G__15644_15932[(1)]):((G__15653)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__15645[(0)] = ((G__15646 * G__15648_15933) * G__15650_15935));

(G__15645[(1)] = ((G__15647 * G__15649_15934) * G__15651_15936));
}

return (new thi.ng.geom.core.vector.Vec2(G__15645,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,thi.ng.geom.core.vector.vec3.call(null,(self__.buf[(0)]),(self__.buf[(1)]),x),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.call = (function() {
var G__15937 = null;
var G__15937__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,_);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
}
});
var G__15937__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__15937 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__15937__2.call(this,self__,k);
case 3:
return G__15937__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15937.cljs$core$IFn$_invoke$arity$2 = G__15937__2;
G__15937.cljs$core$IFn$_invoke$arity$3 = G__15937__3;
return G__15937;
})()
;

thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args15372){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15372)));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,_);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11118__auto__ = (new Float32Array((2)));
var G__15656_15938 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15657_15939 = v.buf;
(dest__11118__auto__[(0)] = (function (){var a__10849__auto__ = (G__15656_15938[(0)]);
var b__10850__auto__ = (G__15657_15939[(0)]);
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11118__auto__[(1)] = (function (){var a__10849__auto__ = (G__15656_15938[(1)]);
var b__10850__auto__ = (G__15657_15939[(1)]);
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11118__auto__[(0)] = (function (){var a__10849__auto__ = (G__15656_15938[(0)]);
var b__10850__auto__ = v;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11118__auto__[(1)] = (function (){var a__10849__auto__ = (G__15656_15938[(1)]);
var b__10850__auto__ = v;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());
} else {
(dest__11118__auto__[(0)] = (function (){var a__10849__auto__ = (G__15656_15938[(0)]);
var b__10850__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11118__auto__[(1)] = (function (){var a__10849__auto__ = (G__15656_15938[(1)]);
var b__10850__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11118__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__11129__auto__ = (new Float32Array((2)));
var G__15667_15940 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__15668_15941 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__15669_15942 = ((!(G__15667_15940))?typeof v === 'number':null);
var G__15670_15943 = ((!(G__15668_15941))?typeof v2 === 'number':null);
var G__15658_15944 = self__.buf;
var G__15659_15945 = ((G__15667_15940)?v.buf:null);
var G__15660_15946 = ((G__15668_15941)?v2.buf:null);
var G__15661_15947 = (G__15658_15944[(0)]);
var G__15662_15948 = (G__15658_15944[(1)]);
var G__15663_15949 = ((G__15667_15940)?(G__15659_15945[(0)]):(cljs.core.truth_(G__15669_15942)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__15664_15950 = ((G__15667_15940)?(G__15659_15945[(1)]):(cljs.core.truth_(G__15669_15942)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__15665_15951 = ((G__15668_15941)?(G__15660_15946[(0)]):(cljs.core.truth_(G__15670_15943)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15666_15952 = ((G__15668_15941)?(G__15660_15946[(1)]):(cljs.core.truth_(G__15670_15943)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__11129__auto__[(0)] = (function (){var a__10849__auto__ = (function (){var a__10849__auto__ = G__15661_15947;
var b__10850__auto__ = G__15663_15949;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})();
var b__10850__auto__ = G__15665_15951;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11129__auto__[(1)] = (function (){var a__10849__auto__ = (function (){var a__10849__auto__ = G__15662_15948;
var b__10850__auto__ = G__15664_15950;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})();
var b__10850__auto__ = G__15666_15952;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__11129__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11118__auto__ = (new Float32Array((2)));
var G__15671_15953 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15672_15954 = v.buf;
(dest__11118__auto__[(0)] = (function (){var a__10856__auto__ = (G__15671_15953[(0)]);
var b__10857__auto__ = (G__15672_15954[(0)]);
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11118__auto__[(1)] = (function (){var a__10856__auto__ = (G__15671_15953[(1)]);
var b__10857__auto__ = (G__15672_15954[(1)]);
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11118__auto__[(0)] = (function (){var a__10856__auto__ = (G__15671_15953[(0)]);
var b__10857__auto__ = v;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11118__auto__[(1)] = (function (){var a__10856__auto__ = (G__15671_15953[(1)]);
var b__10857__auto__ = v;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());
} else {
(dest__11118__auto__[(0)] = (function (){var a__10856__auto__ = (G__15671_15953[(0)]);
var b__10857__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11118__auto__[(1)] = (function (){var a__10856__auto__ = (G__15671_15953[(1)]);
var b__10857__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11118__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__11129__auto__ = (new Float32Array((2)));
var G__15682_15955 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__15683_15956 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__15684_15957 = ((!(G__15682_15955))?typeof v === 'number':null);
var G__15685_15958 = ((!(G__15683_15956))?typeof v2 === 'number':null);
var G__15673_15959 = self__.buf;
var G__15674_15960 = ((G__15682_15955)?v.buf:null);
var G__15675_15961 = ((G__15683_15956)?v2.buf:null);
var G__15676_15962 = (G__15673_15959[(0)]);
var G__15677_15963 = (G__15673_15959[(1)]);
var G__15678_15964 = ((G__15682_15955)?(G__15674_15960[(0)]):(cljs.core.truth_(G__15684_15957)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__15679_15965 = ((G__15682_15955)?(G__15674_15960[(1)]):(cljs.core.truth_(G__15684_15957)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__15680_15966 = ((G__15683_15956)?(G__15675_15961[(0)]):(cljs.core.truth_(G__15685_15958)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15681_15967 = ((G__15683_15956)?(G__15675_15961[(1)]):(cljs.core.truth_(G__15685_15958)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__11129__auto__[(0)] = (function (){var a__10856__auto__ = (function (){var a__10856__auto__ = G__15676_15962;
var b__10857__auto__ = G__15678_15964;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})();
var b__10857__auto__ = G__15680_15966;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11129__auto__[(1)] = (function (){var a__10856__auto__ = (function (){var a__10856__auto__ = G__15677_15963;
var b__10857__auto__ = G__15679_15965;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})();
var b__10857__auto__ = G__15681_15967;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__11129__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((2) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

return (new thi.ng.geom.core.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.call(null,___$1,v,thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((2) === cljs.core.count.call(null,v))){
var G__15686 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15687 = v.buf;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__15686[(0)]),(G__15687[(0)]),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__15686[(1)]),(G__15687[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__15686[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__15686[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15688 = self__.buf;
var G__15689 = (G__15688[(0)]);
var G__15690 = (G__15688[(1)]);
return Math.sqrt(((G__15689 * G__15689) + (G__15690 * G__15690)));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15691 = self__.buf;
var G__15692 = (G__15691[(0)]);
var G__15693 = (G__15691[(1)]);
return ((G__15692 * G__15692) + (G__15693 * G__15693));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15694_15968 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15695_15969 = v.buf;
(b[(0)] = (((G__15694_15968[(0)]) + (G__15695_15969[(0)])) * 0.5));

(b[(1)] = (((G__15694_15968[(1)]) + (G__15695_15969[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__15694_15968[(0)]) + v) * 0.5));

(b[(1)] = (((G__15694_15968[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__15694_15968[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__15694_15968[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15705_15970 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__15706_15971 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__15707_15972 = ((!(G__15705_15970))?typeof v === 'number':null);
var G__15708_15973 = ((!(G__15706_15971))?typeof v2 === 'number':null);
var G__15696_15974 = self__.buf;
var G__15697_15975 = ((G__15705_15970)?v.buf:null);
var G__15698_15976 = ((G__15706_15971)?v2.buf:null);
var G__15699_15977 = (G__15696_15974[(0)]);
var G__15700_15978 = (G__15696_15974[(1)]);
var G__15701_15979 = ((G__15705_15970)?(G__15697_15975[(0)]):(cljs.core.truth_(G__15707_15972)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__15702_15980 = ((G__15705_15970)?(G__15697_15975[(1)]):(cljs.core.truth_(G__15707_15972)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__15703_15981 = ((G__15706_15971)?(G__15698_15976[(0)]):(cljs.core.truth_(G__15708_15973)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15704_15982 = ((G__15706_15971)?(G__15698_15976[(1)]):(cljs.core.truth_(G__15708_15973)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(b[(0)] = (((G__15701_15979 - G__15699_15977) * G__15703_15981) + G__15699_15977));

(b[(1)] = (((G__15702_15980 - G__15700_15978) * G__15704_15982) + G__15700_15978));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var G__15718_15983 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15719_15984 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__15720_15985 = ((!(G__15718_15983))?typeof b === 'number':null);
var G__15721_15986 = ((!(G__15719_15984))?typeof c === 'number':null);
var G__15709_15987 = self__.buf;
var G__15710_15988 = ((G__15718_15983)?b.buf:null);
var G__15711_15989 = ((G__15719_15984)?c.buf:null);
var G__15712_15990 = (G__15709_15987[(0)]);
var G__15713_15991 = (G__15709_15987[(1)]);
var G__15714_15992 = ((G__15718_15983)?(G__15710_15988[(0)]):(cljs.core.truth_(G__15720_15985)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15715_15993 = ((G__15718_15983)?(G__15710_15988[(1)]):(cljs.core.truth_(G__15720_15985)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__15716_15994 = ((G__15719_15984)?(G__15711_15989[(0)]):(cljs.core.truth_(G__15721_15986)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__15717_15995 = ((G__15719_15984)?(G__15711_15989[(1)]):(cljs.core.truth_(G__15721_15986)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_15996 = (((G__15714_15992 - G__15712_15990) * u) + G__15712_15990);
var y1_15997 = (((G__15715_15993 - G__15713_15991) * u) + G__15713_15991);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__15716_15994) * u) + G__15716_15994) - x1_15996) * v) + x1_15996));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__15717_15995) * u) + G__15717_15995) - y1_15997) * v) + y1_15997));

return (new thi.ng.geom.core.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.geom.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = thi.ng.geom.core.mag.call(null,___$1));

(b[(1)] = thi.ng.geom.core.heading.call(null,___$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15392 = self__.buf;
var G__15393 = (G__15392[(0)]);
var G__15394 = (G__15392[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__15393 * Math.cos(G__15394)));

(b[(1)] = (G__15393 * Math.sin(G__15394)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2";

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"thi.ng.geom.core.vector/Vec2");
});

thi.ng.geom.core.vector.__GT_Vec2 = (function thi$ng$geom$core$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
*/
thi.ng.geom.core.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.core.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str(" "),cljs.core.str((self__.buf[(2)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,___$1);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,___$1);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15999 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16000 = v.buf;
return ((((G__15999[(0)]) * (G__16000[(0)])) + ((G__15999[(1)]) * (G__16000[(1)]))) + ((G__15999[(2)]) * (G__16000[(2)])));
} else {
return ((((G__15999[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__15999[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__15999[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__16001 = self__.buf;
var G__16002 = (G__16001[(0)]);
var G__16003 = (G__16001[(1)]);
var G__16004 = (G__16001[(2)]);
var l = Math.sqrt((((G__16002 * G__16002) + (G__16003 * G__16003)) + (G__16004 * G__16004)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__16002 / l));

(b[(1)] = (G__16003 / l));

(b[(2)] = (G__16004 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__16005 = self__.buf;
var G__16006 = (G__16005[(0)]);
var G__16007 = (G__16005[(1)]);
var G__16008 = (G__16005[(2)]);
var l = Math.sqrt((((G__16006 * G__16006) + (G__16007 * G__16007)) + (G__16008 * G__16008)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__16006 * l__$1));

(b[(1)] = (G__16007 * l__$1));

(b[(2)] = (G__16008 * l__$1));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__16009 = self__.buf;
var G__16010 = (G__16009[(0)]);
var G__16011 = (G__16009[(1)]);
var G__16012 = (G__16009[(2)]);
(b[(0)] = G__16010);

(b[(1)] = ((G__16011 * c) - (G__16012 * s)));

(b[(2)] = ((G__16011 * s) + (G__16012 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__16013 = self__.buf;
var G__16014 = (G__16013[(0)]);
var G__16015 = (G__16013[(1)]);
var G__16016 = (G__16013[(2)]);
(b[(0)] = ((G__16014 * c) + (G__16016 * s)));

(b[(1)] = G__16015);

(b[(2)] = ((G__16016 * c) - (G__16014 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__16017 = self__.buf;
var G__16018 = (G__16017[(0)]);
var G__16019 = (G__16017[(1)]);
var G__16020 = (G__16017[(2)]);
(b[(0)] = ((G__16018 * c) - (G__16019 * s)));

(b[(1)] = ((G__16018 * s) + (G__16019 * c)));

(b[(2)] = G__16020);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__16021 = self__.buf;
var G__16023 = (G__16021[(0)]);
var G__16024 = (G__16021[(1)]);
var G__16025 = (G__16021[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16022 = v.buf;
var G__16026 = (G__16022[(0)]);
var G__16027 = (G__16022[(1)]);
var G__16028 = (G__16022[(2)]);
var ux_SINGLEQUOTE_ = (G__16026 * G__16023);
var uy_SINGLEQUOTE_ = (G__16026 * G__16024);
var uz_SINGLEQUOTE_ = (G__16026 * G__16025);
var vx_SINGLEQUOTE_ = (G__16027 * G__16023);
var vy_SINGLEQUOTE_ = (G__16027 * G__16024);
var vz_SINGLEQUOTE_ = (G__16027 * G__16025);
var wx_SINGLEQUOTE_ = (G__16028 * G__16023);
var wy_SINGLEQUOTE_ = (G__16028 * G__16024);
var wz_SINGLEQUOTE_ = (G__16028 * G__16025);
var vx2 = (G__16026 * G__16026);
var vy2 = (G__16027 * G__16027);
var vz2 = (G__16028 * G__16028);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__16026) + ((((vy2 + vz2) * G__16023) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__16026)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__16027) + ((((vx2 + vz2) * G__16024) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__16027)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__16028) + ((((vx2 + vy2) * G__16025) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__16028)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__16026 = cljs.core.nth.call(null,v,(0),0.0);
var G__16027 = cljs.core.nth.call(null,v,(1),0.0);
var G__16028 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__16026 * G__16023);
var uy_SINGLEQUOTE_ = (G__16026 * G__16024);
var uz_SINGLEQUOTE_ = (G__16026 * G__16025);
var vx_SINGLEQUOTE_ = (G__16027 * G__16023);
var vy_SINGLEQUOTE_ = (G__16027 * G__16024);
var vz_SINGLEQUOTE_ = (G__16027 * G__16025);
var wx_SINGLEQUOTE_ = (G__16028 * G__16023);
var wy_SINGLEQUOTE_ = (G__16028 * G__16024);
var wz_SINGLEQUOTE_ = (G__16028 * G__16025);
var vx2 = (G__16026 * G__16026);
var vy2 = (G__16027 * G__16027);
var vz2 = (G__16028 * G__16028);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__16026) + ((((vy2 + vz2) * G__16023) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__16026)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__16027) + ((((vx2 + vz2) * G__16024) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__16027)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__16028) + ((((vx2 + vy2) * G__16025) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__16028)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__16029 = self__.buf;
var G__16031 = (G__16029[(0)]);
var G__16032 = (G__16029[(1)]);
var G__16033 = (G__16029[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16030 = v.buf;
var G__16034 = (G__16030[(0)]);
var G__16035 = (G__16030[(1)]);
var G__16036 = (G__16030[(2)]);
var d = ((((G__16031 * G__16034) + (G__16032 * G__16035)) + (G__16033 * G__16036)) * 2.0);
(b[(0)] = ((G__16034 * d) - G__16031));

(b[(1)] = ((G__16035 * d) - G__16032));

(b[(2)] = ((G__16036 * d) - G__16033));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__16034 = cljs.core.nth.call(null,v,(0),0.0);
var G__16035 = cljs.core.nth.call(null,v,(1),0.0);
var G__16036 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__16031 * G__16034) + (G__16032 * G__16035)) + (G__16033 * G__16036)) * 2.0);
(b[(0)] = ((G__16034 * d) - G__16031));

(b[(1)] = ((G__16035 * d) - G__16032));

(b[(2)] = ((G__16036 * d) - G__16033));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__16037_16450 = self__.buf;
var G__16039_16451 = (G__16037_16450[(0)]);
var G__16040_16452 = (G__16037_16450[(1)]);
var G__16041_16453 = (G__16037_16450[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16038_16454 = v.buf;
var G__16042_16455 = (G__16038_16454[(0)]);
var G__16043_16456 = (G__16038_16454[(1)]);
var G__16044_16457 = (G__16038_16454[(2)]);
(b[(0)] = ((G__16040_16452 * G__16044_16457) - (G__16043_16456 * G__16041_16453)));

(b[(1)] = ((G__16041_16453 * G__16042_16455) - (G__16044_16457 * G__16039_16451)));

(b[(2)] = ((G__16039_16451 * G__16043_16456) - (G__16042_16455 * G__16040_16452)));
} else {
var G__16042_16458 = cljs.core.nth.call(null,v,(0),0.0);
var G__16043_16459 = cljs.core.nth.call(null,v,(1),0.0);
var G__16044_16460 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__16040_16452 * G__16044_16460) - (G__16043_16459 * G__16041_16453)));

(b[(1)] = ((G__16041_16453 * G__16042_16458) - (G__16044_16460 * G__16039_16451)));

(b[(2)] = ((G__16039_16451 * G__16043_16459) - (G__16042_16458 * G__16040_16452)));
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__16045_16461 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16046_16462 = v.buf;
(self__.buf[(0)] = ((G__16045_16461[(0)]) - (G__16046_16462[(0)])));

(self__.buf[(1)] = ((G__16045_16461[(1)]) - (G__16046_16462[(1)])));

(self__.buf[(2)] = ((G__16045_16461[(2)]) - (G__16046_16462[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__16045_16461[(0)]) - v));

(self__.buf[(1)] = ((G__16045_16461[(1)]) - v));

(self__.buf[(2)] = ((G__16045_16461[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__16045_16461[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__16045_16461[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__16045_16461[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__16059_16463 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16060_16464 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16061_16465 = ((!(G__16059_16463))?typeof v1 === 'number':null);
var G__16062_16466 = ((!(G__16060_16464))?typeof v2 === 'number':null);
var G__16047_16467 = self__.buf;
var G__16048_16468 = ((G__16059_16463)?v1.buf:null);
var G__16049_16469 = ((G__16060_16464)?v2.buf:null);
var G__16050_16470 = (G__16047_16467[(0)]);
var G__16051_16471 = (G__16047_16467[(1)]);
var G__16052_16472 = (G__16047_16467[(2)]);
var G__16053_16473 = ((G__16059_16463)?(G__16048_16468[(0)]):(cljs.core.truth_(G__16061_16465)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16054_16474 = ((G__16059_16463)?(G__16048_16468[(1)]):(cljs.core.truth_(G__16061_16465)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16055_16475 = ((G__16059_16463)?(G__16048_16468[(2)]):(cljs.core.truth_(G__16061_16465)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16056_16476 = ((G__16060_16464)?(G__16049_16469[(0)]):(cljs.core.truth_(G__16062_16466)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16057_16477 = ((G__16060_16464)?(G__16049_16469[(1)]):(cljs.core.truth_(G__16062_16466)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16058_16478 = ((G__16060_16464)?(G__16049_16469[(2)]):(cljs.core.truth_(G__16062_16466)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__16050_16470 - G__16053_16473) - G__16056_16476));

(self__.buf[(1)] = ((G__16051_16471 - G__16054_16474) - G__16057_16477));

(self__.buf[(2)] = ((G__16052_16472 - G__16055_16475) - G__16058_16478));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__16063_16479 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16064_16480 = v.buf;
(self__.buf[(0)] = ((G__16063_16479[(0)]) * (G__16064_16480[(0)])));

(self__.buf[(1)] = ((G__16063_16479[(1)]) * (G__16064_16480[(1)])));

(self__.buf[(2)] = ((G__16063_16479[(2)]) * (G__16064_16480[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__16063_16479[(0)]) * v));

(self__.buf[(1)] = ((G__16063_16479[(1)]) * v));

(self__.buf[(2)] = ((G__16063_16479[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__16063_16479[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__16063_16479[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__16063_16479[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__16077_16481 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16078_16482 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16079_16483 = ((!(G__16077_16481))?typeof v1 === 'number':null);
var G__16080_16484 = ((!(G__16078_16482))?typeof v2 === 'number':null);
var G__16065_16485 = self__.buf;
var G__16066_16486 = ((G__16077_16481)?v1.buf:null);
var G__16067_16487 = ((G__16078_16482)?v2.buf:null);
var G__16068_16488 = (G__16065_16485[(0)]);
var G__16069_16489 = (G__16065_16485[(1)]);
var G__16070_16490 = (G__16065_16485[(2)]);
var G__16071_16491 = ((G__16077_16481)?(G__16066_16486[(0)]):(cljs.core.truth_(G__16079_16483)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16072_16492 = ((G__16077_16481)?(G__16066_16486[(1)]):(cljs.core.truth_(G__16079_16483)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16073_16493 = ((G__16077_16481)?(G__16066_16486[(2)]):(cljs.core.truth_(G__16079_16483)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16074_16494 = ((G__16078_16482)?(G__16067_16487[(0)]):(cljs.core.truth_(G__16080_16484)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16075_16495 = ((G__16078_16482)?(G__16067_16487[(1)]):(cljs.core.truth_(G__16080_16484)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16076_16496 = ((G__16078_16482)?(G__16067_16487[(2)]):(cljs.core.truth_(G__16080_16484)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__16068_16488 * G__16071_16491) * G__16074_16494));

(self__.buf[(1)] = ((G__16069_16489 * G__16072_16492) * G__16075_16495));

(self__.buf[(2)] = ((G__16070_16490 * G__16073_16493) * G__16076_16496));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__16093_16497 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16094_16498 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16095_16499 = ((!(G__16093_16497))?typeof a === 'number':null);
var G__16096_16500 = ((!(G__16094_16498))?typeof b === 'number':null);
var G__16081_16501 = self__.buf;
var G__16082_16502 = ((G__16093_16497)?a.buf:null);
var G__16083_16503 = ((G__16094_16498)?b.buf:null);
var G__16084_16504 = (G__16081_16501[(0)]);
var G__16085_16505 = (G__16081_16501[(1)]);
var G__16086_16506 = (G__16081_16501[(2)]);
var G__16087_16507 = ((G__16093_16497)?(G__16082_16502[(0)]):(cljs.core.truth_(G__16095_16499)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__16088_16508 = ((G__16093_16497)?(G__16082_16502[(1)]):(cljs.core.truth_(G__16095_16499)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__16089_16509 = ((G__16093_16497)?(G__16082_16502[(2)]):(cljs.core.truth_(G__16095_16499)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__16090_16510 = ((G__16094_16498)?(G__16083_16503[(0)]):(cljs.core.truth_(G__16096_16500)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__16091_16511 = ((G__16094_16498)?(G__16083_16503[(1)]):(cljs.core.truth_(G__16096_16500)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__16092_16512 = ((G__16094_16498)?(G__16083_16503[(2)]):(cljs.core.truth_(G__16096_16500)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__16084_16504 - G__16087_16507) * G__16090_16510));

(self__.buf[(1)] = ((G__16085_16505 - G__16088_16508) * G__16091_16511));

(self__.buf[(2)] = ((G__16086_16506 - G__16089_16509) * G__16092_16512));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__16109_16513 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16110_16514 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16111_16515 = ((!(G__16109_16513))?typeof a === 'number':null);
var G__16112_16516 = ((!(G__16110_16514))?typeof b === 'number':null);
var G__16097_16517 = self__.buf;
var G__16098_16518 = ((G__16109_16513)?a.buf:null);
var G__16099_16519 = ((G__16110_16514)?b.buf:null);
var G__16100_16520 = (G__16097_16517[(0)]);
var G__16101_16521 = (G__16097_16517[(1)]);
var G__16102_16522 = (G__16097_16517[(2)]);
var G__16103_16523 = ((G__16109_16513)?(G__16098_16518[(0)]):(cljs.core.truth_(G__16111_16515)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__16104_16524 = ((G__16109_16513)?(G__16098_16518[(1)]):(cljs.core.truth_(G__16111_16515)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__16105_16525 = ((G__16109_16513)?(G__16098_16518[(2)]):(cljs.core.truth_(G__16111_16515)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__16106_16526 = ((G__16110_16514)?(G__16099_16519[(0)]):(cljs.core.truth_(G__16112_16516)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__16107_16527 = ((G__16110_16514)?(G__16099_16519[(1)]):(cljs.core.truth_(G__16112_16516)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__16108_16528 = ((G__16110_16514)?(G__16099_16519[(2)]):(cljs.core.truth_(G__16112_16516)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__16100_16520 * G__16103_16523) - G__16106_16526));

(self__.buf[(1)] = ((G__16101_16521 * G__16104_16524) - G__16107_16527));

(self__.buf[(2)] = ((G__16102_16522 * G__16105_16525) - G__16108_16528));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.common.math.core.abs.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.common.math.core.abs.call(null,(self__.buf[(1)])));

(self__.buf[(2)] = thi.ng.common.math.core.abs.call(null,(self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__16125_16529 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16126_16530 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16127_16531 = ((!(G__16125_16529))?typeof a === 'number':null);
var G__16128_16532 = ((!(G__16126_16530))?typeof b === 'number':null);
var G__16113_16533 = self__.buf;
var G__16114_16534 = ((G__16125_16529)?a.buf:null);
var G__16115_16535 = ((G__16126_16530)?b.buf:null);
var G__16116_16536 = (G__16113_16533[(0)]);
var G__16117_16537 = (G__16113_16533[(1)]);
var G__16118_16538 = (G__16113_16533[(2)]);
var G__16119_16539 = ((G__16125_16529)?(G__16114_16534[(0)]):(cljs.core.truth_(G__16127_16531)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__16120_16540 = ((G__16125_16529)?(G__16114_16534[(1)]):(cljs.core.truth_(G__16127_16531)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__16121_16541 = ((G__16125_16529)?(G__16114_16534[(2)]):(cljs.core.truth_(G__16127_16531)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__16122_16542 = ((G__16126_16530)?(G__16115_16535[(0)]):(cljs.core.truth_(G__16128_16532)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__16123_16543 = ((G__16126_16530)?(G__16115_16535[(1)]):(cljs.core.truth_(G__16128_16532)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__16124_16544 = ((G__16126_16530)?(G__16115_16535[(2)]):(cljs.core.truth_(G__16128_16532)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__16116_16536 * G__16119_16539) + G__16122_16542));

(self__.buf[(1)] = ((G__16117_16537 * G__16120_16540) + G__16123_16543));

(self__.buf[(2)] = ((G__16118_16538 * G__16121_16541) + G__16124_16544));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__16129_16545 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16130_16546 = v.buf;
(self__.buf[(0)] = ((G__16129_16545[(0)]) / (G__16130_16546[(0)])));

(self__.buf[(1)] = ((G__16129_16545[(1)]) / (G__16130_16546[(1)])));

(self__.buf[(2)] = ((G__16129_16545[(2)]) / (G__16130_16546[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__16129_16545[(0)]) / v));

(self__.buf[(1)] = ((G__16129_16545[(1)]) / v));

(self__.buf[(2)] = ((G__16129_16545[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__16129_16545[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__16129_16545[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__16129_16545[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__16143_16547 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16144_16548 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16145_16549 = ((!(G__16143_16547))?typeof v1 === 'number':null);
var G__16146_16550 = ((!(G__16144_16548))?typeof v2 === 'number':null);
var G__16131_16551 = self__.buf;
var G__16132_16552 = ((G__16143_16547)?v1.buf:null);
var G__16133_16553 = ((G__16144_16548)?v2.buf:null);
var G__16134_16554 = (G__16131_16551[(0)]);
var G__16135_16555 = (G__16131_16551[(1)]);
var G__16136_16556 = (G__16131_16551[(2)]);
var G__16137_16557 = ((G__16143_16547)?(G__16132_16552[(0)]):(cljs.core.truth_(G__16145_16549)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16138_16558 = ((G__16143_16547)?(G__16132_16552[(1)]):(cljs.core.truth_(G__16145_16549)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16139_16559 = ((G__16143_16547)?(G__16132_16552[(2)]):(cljs.core.truth_(G__16145_16549)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16140_16560 = ((G__16144_16548)?(G__16133_16553[(0)]):(cljs.core.truth_(G__16146_16550)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16141_16561 = ((G__16144_16548)?(G__16133_16553[(1)]):(cljs.core.truth_(G__16146_16550)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16142_16562 = ((G__16144_16548)?(G__16133_16553[(2)]):(cljs.core.truth_(G__16146_16550)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__16134_16554 / G__16137_16557) / G__16140_16560));

(self__.buf[(1)] = ((G__16135_16555 / G__16138_16558) / G__16141_16561));

(self__.buf[(2)] = ((G__16136_16556 / G__16139_16559) / G__16142_16562));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__16147_16563 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16148_16564 = v.buf;
(self__.buf[(0)] = ((G__16147_16563[(0)]) + (G__16148_16564[(0)])));

(self__.buf[(1)] = ((G__16147_16563[(1)]) + (G__16148_16564[(1)])));

(self__.buf[(2)] = ((G__16147_16563[(2)]) + (G__16148_16564[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__16147_16563[(0)]) + v));

(self__.buf[(1)] = ((G__16147_16563[(1)]) + v));

(self__.buf[(2)] = ((G__16147_16563[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__16147_16563[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__16147_16563[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__16147_16563[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__16161_16565 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16162_16566 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16163_16567 = ((!(G__16161_16565))?typeof v1 === 'number':null);
var G__16164_16568 = ((!(G__16162_16566))?typeof v2 === 'number':null);
var G__16149_16569 = self__.buf;
var G__16150_16570 = ((G__16161_16565)?v1.buf:null);
var G__16151_16571 = ((G__16162_16566)?v2.buf:null);
var G__16152_16572 = (G__16149_16569[(0)]);
var G__16153_16573 = (G__16149_16569[(1)]);
var G__16154_16574 = (G__16149_16569[(2)]);
var G__16155_16575 = ((G__16161_16565)?(G__16150_16570[(0)]):(cljs.core.truth_(G__16163_16567)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16156_16576 = ((G__16161_16565)?(G__16150_16570[(1)]):(cljs.core.truth_(G__16163_16567)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16157_16577 = ((G__16161_16565)?(G__16150_16570[(2)]):(cljs.core.truth_(G__16163_16567)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16158_16578 = ((G__16162_16566)?(G__16151_16571[(0)]):(cljs.core.truth_(G__16164_16568)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16159_16579 = ((G__16162_16566)?(G__16151_16571[(1)]):(cljs.core.truth_(G__16164_16568)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16160_16580 = ((G__16162_16566)?(G__16151_16571[(2)]):(cljs.core.truth_(G__16164_16568)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__16152_16572 + G__16155_16575) + G__16158_16578));

(self__.buf[(1)] = ((G__16153_16573 + G__16156_16576) + G__16159_16579));

(self__.buf[(2)] = ((G__16154_16574 + G__16157_16577) + G__16160_16580));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__16177_16581 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16178_16582 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16179_16583 = ((!(G__16177_16581))?typeof a === 'number':null);
var G__16180_16584 = ((!(G__16178_16582))?typeof b === 'number':null);
var G__16165_16585 = self__.buf;
var G__16166_16586 = ((G__16177_16581)?a.buf:null);
var G__16167_16587 = ((G__16178_16582)?b.buf:null);
var G__16168_16588 = (G__16165_16585[(0)]);
var G__16169_16589 = (G__16165_16585[(1)]);
var G__16170_16590 = (G__16165_16585[(2)]);
var G__16171_16591 = ((G__16177_16581)?(G__16166_16586[(0)]):(cljs.core.truth_(G__16179_16583)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__16172_16592 = ((G__16177_16581)?(G__16166_16586[(1)]):(cljs.core.truth_(G__16179_16583)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__16173_16593 = ((G__16177_16581)?(G__16166_16586[(2)]):(cljs.core.truth_(G__16179_16583)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__16174_16594 = ((G__16178_16582)?(G__16167_16587[(0)]):(cljs.core.truth_(G__16180_16584)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__16175_16595 = ((G__16178_16582)?(G__16167_16587[(1)]):(cljs.core.truth_(G__16180_16584)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__16176_16596 = ((G__16178_16582)?(G__16167_16587[(2)]):(cljs.core.truth_(G__16180_16584)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__16168_16588 + G__16171_16591) * G__16174_16594));

(self__.buf[(1)] = ((G__16169_16589 + G__16172_16592) * G__16175_16595));

(self__.buf[(2)] = ((G__16170_16590 + G__16173_16593) * G__16176_16596));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)).call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4953__auto__ = self__._hash;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((3) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1)))) && (cljs.core._EQ_.call(null,(self__.buf[(2)]),cljs.core.nth.call(null,o,(2))));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy.call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.common.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.common.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.common.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.core.vector.Vec3))?v:thi.ng.geom.core.vector.vec3.call(null,v));
return Math.acos(thi.ng.geom.core.dot.call(null,thi.ng.geom.core.normalize.call(null,___$1),thi.ng.geom.core.normalize.call(null,v__$1)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__16181 = self__.buf;
var G__16183 = (G__16181[(0)]);
var G__16184 = (G__16181[(1)]);
var G__16185 = (G__16181[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16182 = v.buf;
var G__16186 = (G__16182[(0)]);
var G__16187 = (G__16182[(1)]);
var G__16188 = (G__16182[(2)]);
var dx = (G__16183 - G__16186);
var dy = (G__16184 - G__16187);
var dz = (G__16185 - G__16188);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__16186 = cljs.core.nth.call(null,v,(0),0.0);
var G__16187 = cljs.core.nth.call(null,v,(1),0.0);
var G__16188 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__16183 - G__16186);
var dy = (G__16184 - G__16187);
var dz = (G__16185 - G__16188);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
var acc__$2 = f.call(null,acc__$1,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$2)){
return cljs.core.deref.call(null,acc__$2);
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16201_16597 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16202_16598 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16203_16599 = ((!(G__16201_16597))?typeof a === 'number':null);
var G__16204_16600 = ((!(G__16202_16598))?typeof b === 'number':null);
var G__16189_16601 = self__.buf;
var G__16190_16602 = ((G__16201_16597)?a.buf:null);
var G__16191_16603 = ((G__16202_16598)?b.buf:null);
var G__16192_16604 = (G__16189_16601[(0)]);
var G__16193_16605 = (G__16189_16601[(1)]);
var G__16194_16606 = (G__16189_16601[(2)]);
var G__16195_16607 = ((G__16201_16597)?(G__16190_16602[(0)]):(cljs.core.truth_(G__16203_16599)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__16196_16608 = ((G__16201_16597)?(G__16190_16602[(1)]):(cljs.core.truth_(G__16203_16599)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__16197_16609 = ((G__16201_16597)?(G__16190_16602[(2)]):(cljs.core.truth_(G__16203_16599)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__16198_16610 = ((G__16202_16598)?(G__16191_16603[(0)]):(cljs.core.truth_(G__16204_16600)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__16199_16611 = ((G__16202_16598)?(G__16191_16603[(1)]):(cljs.core.truth_(G__16204_16600)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__16200_16612 = ((G__16202_16598)?(G__16191_16603[(2)]):(cljs.core.truth_(G__16204_16600)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__11224__auto__[(0)] = ((G__16192_16604 * G__16195_16607) - G__16198_16610));

(dest__11224__auto__[(1)] = ((G__16193_16605 * G__16196_16608) - G__16199_16611));

(dest__11224__auto__[(2)] = ((G__16194_16606 * G__16197_16609) - G__16200_16612));

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11213__auto__ = (new Float32Array((3)));
var G__16205_16613 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16206_16614 = v.buf;
(dest__11213__auto__[(0)] = ((G__16205_16613[(0)]) * (G__16206_16614[(0)])));

(dest__11213__auto__[(1)] = ((G__16205_16613[(1)]) * (G__16206_16614[(1)])));

(dest__11213__auto__[(2)] = ((G__16205_16613[(2)]) * (G__16206_16614[(2)])));
} else {
if(typeof v === 'number'){
(dest__11213__auto__[(0)] = ((G__16205_16613[(0)]) * v));

(dest__11213__auto__[(1)] = ((G__16205_16613[(1)]) * v));

(dest__11213__auto__[(2)] = ((G__16205_16613[(2)]) * v));
} else {
(dest__11213__auto__[(0)] = ((G__16205_16613[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11213__auto__[(1)] = ((G__16205_16613[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__11213__auto__[(2)] = ((G__16205_16613[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11213__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16219_16615 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16220_16616 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16221_16617 = ((!(G__16219_16615))?typeof v1 === 'number':null);
var G__16222_16618 = ((!(G__16220_16616))?typeof v2 === 'number':null);
var G__16207_16619 = self__.buf;
var G__16208_16620 = ((G__16219_16615)?v1.buf:null);
var G__16209_16621 = ((G__16220_16616)?v2.buf:null);
var G__16210_16622 = (G__16207_16619[(0)]);
var G__16211_16623 = (G__16207_16619[(1)]);
var G__16212_16624 = (G__16207_16619[(2)]);
var G__16213_16625 = ((G__16219_16615)?(G__16208_16620[(0)]):(cljs.core.truth_(G__16221_16617)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16214_16626 = ((G__16219_16615)?(G__16208_16620[(1)]):(cljs.core.truth_(G__16221_16617)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16215_16627 = ((G__16219_16615)?(G__16208_16620[(2)]):(cljs.core.truth_(G__16221_16617)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16216_16628 = ((G__16220_16616)?(G__16209_16621[(0)]):(cljs.core.truth_(G__16222_16618)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16217_16629 = ((G__16220_16616)?(G__16209_16621[(1)]):(cljs.core.truth_(G__16222_16618)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16218_16630 = ((G__16220_16616)?(G__16209_16621[(2)]):(cljs.core.truth_(G__16222_16618)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11224__auto__[(0)] = ((G__16210_16622 * G__16213_16625) * G__16216_16628));

(dest__11224__auto__[(1)] = ((G__16211_16623 * G__16214_16626) * G__16217_16629));

(dest__11224__auto__[(2)] = ((G__16212_16624 * G__16215_16627) * G__16218_16630));

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16223 = self__.buf;
var dest__11202__auto__ = (new Float32Array((3)));
(dest__11202__auto__[(0)] = ((G__16223[(0)]) * x));

(dest__11202__auto__[(1)] = ((G__16223[(1)]) * y));

(dest__11202__auto__[(2)] = ((G__16223[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__11202__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11196__auto__ = (new Float32Array((3)));
var G__16224_16631 = self__.buf;
(dest__11196__auto__[(0)] = (- (G__16224_16631[(0)])));

(dest__11196__auto__[(1)] = (- (G__16224_16631[(1)])));

(dest__11196__auto__[(2)] = (- (G__16224_16631[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__11196__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11213__auto__ = (new Float32Array((3)));
var G__16225_16632 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16226_16633 = v.buf;
(dest__11213__auto__[(0)] = ((G__16225_16632[(0)]) - (G__16226_16633[(0)])));

(dest__11213__auto__[(1)] = ((G__16225_16632[(1)]) - (G__16226_16633[(1)])));

(dest__11213__auto__[(2)] = ((G__16225_16632[(2)]) - (G__16226_16633[(2)])));
} else {
if(typeof v === 'number'){
(dest__11213__auto__[(0)] = ((G__16225_16632[(0)]) - v));

(dest__11213__auto__[(1)] = ((G__16225_16632[(1)]) - v));

(dest__11213__auto__[(2)] = ((G__16225_16632[(2)]) - v));
} else {
(dest__11213__auto__[(0)] = ((G__16225_16632[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__11213__auto__[(1)] = ((G__16225_16632[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__11213__auto__[(2)] = ((G__16225_16632[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11213__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16239_16634 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16240_16635 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16241_16636 = ((!(G__16239_16634))?typeof v1 === 'number':null);
var G__16242_16637 = ((!(G__16240_16635))?typeof v2 === 'number':null);
var G__16227_16638 = self__.buf;
var G__16228_16639 = ((G__16239_16634)?v1.buf:null);
var G__16229_16640 = ((G__16240_16635)?v2.buf:null);
var G__16230_16641 = (G__16227_16638[(0)]);
var G__16231_16642 = (G__16227_16638[(1)]);
var G__16232_16643 = (G__16227_16638[(2)]);
var G__16233_16644 = ((G__16239_16634)?(G__16228_16639[(0)]):(cljs.core.truth_(G__16241_16636)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16234_16645 = ((G__16239_16634)?(G__16228_16639[(1)]):(cljs.core.truth_(G__16241_16636)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16235_16646 = ((G__16239_16634)?(G__16228_16639[(2)]):(cljs.core.truth_(G__16241_16636)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16236_16647 = ((G__16240_16635)?(G__16229_16640[(0)]):(cljs.core.truth_(G__16242_16637)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16237_16648 = ((G__16240_16635)?(G__16229_16640[(1)]):(cljs.core.truth_(G__16242_16637)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16238_16649 = ((G__16240_16635)?(G__16229_16640[(2)]):(cljs.core.truth_(G__16242_16637)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11224__auto__[(0)] = ((G__16230_16641 - G__16233_16644) - G__16236_16647));

(dest__11224__auto__[(1)] = ((G__16231_16642 - G__16234_16645) - G__16237_16648));

(dest__11224__auto__[(2)] = ((G__16232_16643 - G__16235_16646) - G__16238_16649));

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16243 = self__.buf;
var dest__11202__auto__ = (new Float32Array((3)));
(dest__11202__auto__[(0)] = ((G__16243[(0)]) - x));

(dest__11202__auto__[(1)] = ((G__16243[(1)]) - y));

(dest__11202__auto__[(2)] = ((G__16243[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__11202__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16256_16650 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16257_16651 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16258_16652 = ((!(G__16256_16650))?typeof a === 'number':null);
var G__16259_16653 = ((!(G__16257_16651))?typeof b === 'number':null);
var G__16244_16654 = self__.buf;
var G__16245_16655 = ((G__16256_16650)?a.buf:null);
var G__16246_16656 = ((G__16257_16651)?b.buf:null);
var G__16247_16657 = (G__16244_16654[(0)]);
var G__16248_16658 = (G__16244_16654[(1)]);
var G__16249_16659 = (G__16244_16654[(2)]);
var G__16250_16660 = ((G__16256_16650)?(G__16245_16655[(0)]):(cljs.core.truth_(G__16258_16652)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__16251_16661 = ((G__16256_16650)?(G__16245_16655[(1)]):(cljs.core.truth_(G__16258_16652)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__16252_16662 = ((G__16256_16650)?(G__16245_16655[(2)]):(cljs.core.truth_(G__16258_16652)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__16253_16663 = ((G__16257_16651)?(G__16246_16656[(0)]):(cljs.core.truth_(G__16259_16653)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__16254_16664 = ((G__16257_16651)?(G__16246_16656[(1)]):(cljs.core.truth_(G__16259_16653)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__16255_16665 = ((G__16257_16651)?(G__16246_16656[(2)]):(cljs.core.truth_(G__16259_16653)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__11224__auto__[(0)] = ((G__16247_16657 * G__16250_16660) + G__16253_16663));

(dest__11224__auto__[(1)] = ((G__16248_16658 * G__16251_16661) + G__16254_16664));

(dest__11224__auto__[(2)] = ((G__16249_16659 * G__16252_16662) + G__16255_16665));

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16272_16666 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16273_16667 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16274_16668 = ((!(G__16272_16666))?typeof a === 'number':null);
var G__16275_16669 = ((!(G__16273_16667))?typeof b === 'number':null);
var G__16260_16670 = self__.buf;
var G__16261_16671 = ((G__16272_16666)?a.buf:null);
var G__16262_16672 = ((G__16273_16667)?b.buf:null);
var G__16263_16673 = (G__16260_16670[(0)]);
var G__16264_16674 = (G__16260_16670[(1)]);
var G__16265_16675 = (G__16260_16670[(2)]);
var G__16266_16676 = ((G__16272_16666)?(G__16261_16671[(0)]):(cljs.core.truth_(G__16274_16668)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__16267_16677 = ((G__16272_16666)?(G__16261_16671[(1)]):(cljs.core.truth_(G__16274_16668)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__16268_16678 = ((G__16272_16666)?(G__16261_16671[(2)]):(cljs.core.truth_(G__16274_16668)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__16269_16679 = ((G__16273_16667)?(G__16262_16672[(0)]):(cljs.core.truth_(G__16275_16669)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__16270_16680 = ((G__16273_16667)?(G__16262_16672[(1)]):(cljs.core.truth_(G__16275_16669)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__16271_16681 = ((G__16273_16667)?(G__16262_16672[(2)]):(cljs.core.truth_(G__16275_16669)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__11224__auto__[(0)] = ((G__16263_16673 + G__16266_16676) * G__16269_16679));

(dest__11224__auto__[(1)] = ((G__16264_16674 + G__16267_16677) * G__16270_16680));

(dest__11224__auto__[(2)] = ((G__16265_16675 + G__16268_16678) * G__16271_16681));

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11196__auto__ = (new Float32Array((3)));
var G__16276_16682 = self__.buf;
(dest__11196__auto__[(0)] = ((1) / (G__16276_16682[(0)])));

(dest__11196__auto__[(1)] = ((1) / (G__16276_16682[(1)])));

(dest__11196__auto__[(2)] = ((1) / (G__16276_16682[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__11196__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11213__auto__ = (new Float32Array((3)));
var G__16277_16683 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16278_16684 = v.buf;
(dest__11213__auto__[(0)] = ((G__16277_16683[(0)]) / (G__16278_16684[(0)])));

(dest__11213__auto__[(1)] = ((G__16277_16683[(1)]) / (G__16278_16684[(1)])));

(dest__11213__auto__[(2)] = ((G__16277_16683[(2)]) / (G__16278_16684[(2)])));
} else {
if(typeof v === 'number'){
(dest__11213__auto__[(0)] = ((G__16277_16683[(0)]) / v));

(dest__11213__auto__[(1)] = ((G__16277_16683[(1)]) / v));

(dest__11213__auto__[(2)] = ((G__16277_16683[(2)]) / v));
} else {
(dest__11213__auto__[(0)] = ((G__16277_16683[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__11213__auto__[(1)] = ((G__16277_16683[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__11213__auto__[(2)] = ((G__16277_16683[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11213__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16291_16685 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16292_16686 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16293_16687 = ((!(G__16291_16685))?typeof v1 === 'number':null);
var G__16294_16688 = ((!(G__16292_16686))?typeof v2 === 'number':null);
var G__16279_16689 = self__.buf;
var G__16280_16690 = ((G__16291_16685)?v1.buf:null);
var G__16281_16691 = ((G__16292_16686)?v2.buf:null);
var G__16282_16692 = (G__16279_16689[(0)]);
var G__16283_16693 = (G__16279_16689[(1)]);
var G__16284_16694 = (G__16279_16689[(2)]);
var G__16285_16695 = ((G__16291_16685)?(G__16280_16690[(0)]):(cljs.core.truth_(G__16293_16687)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16286_16696 = ((G__16291_16685)?(G__16280_16690[(1)]):(cljs.core.truth_(G__16293_16687)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16287_16697 = ((G__16291_16685)?(G__16280_16690[(2)]):(cljs.core.truth_(G__16293_16687)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16288_16698 = ((G__16292_16686)?(G__16281_16691[(0)]):(cljs.core.truth_(G__16294_16688)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16289_16699 = ((G__16292_16686)?(G__16281_16691[(1)]):(cljs.core.truth_(G__16294_16688)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16290_16700 = ((G__16292_16686)?(G__16281_16691[(2)]):(cljs.core.truth_(G__16294_16688)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11224__auto__[(0)] = ((G__16282_16692 / G__16285_16695) / G__16288_16698));

(dest__11224__auto__[(1)] = ((G__16283_16693 / G__16286_16696) / G__16289_16699));

(dest__11224__auto__[(2)] = ((G__16284_16694 / G__16287_16697) / G__16290_16700));

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16295 = self__.buf;
var dest__11202__auto__ = (new Float32Array((3)));
(dest__11202__auto__[(0)] = ((G__16295[(0)]) / x));

(dest__11202__auto__[(1)] = ((G__16295[(1)]) / y));

(dest__11202__auto__[(2)] = ((G__16295[(2)]) / z));

return (new thi.ng.geom.core.vector.Vec3(dest__11202__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11213__auto__ = (new Float32Array((3)));
var G__16296_16701 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16297_16702 = v.buf;
(dest__11213__auto__[(0)] = ((G__16296_16701[(0)]) + (G__16297_16702[(0)])));

(dest__11213__auto__[(1)] = ((G__16296_16701[(1)]) + (G__16297_16702[(1)])));

(dest__11213__auto__[(2)] = ((G__16296_16701[(2)]) + (G__16297_16702[(2)])));
} else {
if(typeof v === 'number'){
(dest__11213__auto__[(0)] = ((G__16296_16701[(0)]) + v));

(dest__11213__auto__[(1)] = ((G__16296_16701[(1)]) + v));

(dest__11213__auto__[(2)] = ((G__16296_16701[(2)]) + v));
} else {
(dest__11213__auto__[(0)] = ((G__16296_16701[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11213__auto__[(1)] = ((G__16296_16701[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__11213__auto__[(2)] = ((G__16296_16701[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11213__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16310_16703 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16311_16704 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16312_16705 = ((!(G__16310_16703))?typeof v1 === 'number':null);
var G__16313_16706 = ((!(G__16311_16704))?typeof v2 === 'number':null);
var G__16298_16707 = self__.buf;
var G__16299_16708 = ((G__16310_16703)?v1.buf:null);
var G__16300_16709 = ((G__16311_16704)?v2.buf:null);
var G__16301_16710 = (G__16298_16707[(0)]);
var G__16302_16711 = (G__16298_16707[(1)]);
var G__16303_16712 = (G__16298_16707[(2)]);
var G__16304_16713 = ((G__16310_16703)?(G__16299_16708[(0)]):(cljs.core.truth_(G__16312_16705)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16305_16714 = ((G__16310_16703)?(G__16299_16708[(1)]):(cljs.core.truth_(G__16312_16705)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16306_16715 = ((G__16310_16703)?(G__16299_16708[(2)]):(cljs.core.truth_(G__16312_16705)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16307_16716 = ((G__16311_16704)?(G__16300_16709[(0)]):(cljs.core.truth_(G__16313_16706)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16308_16717 = ((G__16311_16704)?(G__16300_16709[(1)]):(cljs.core.truth_(G__16313_16706)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16309_16718 = ((G__16311_16704)?(G__16300_16709[(2)]):(cljs.core.truth_(G__16313_16706)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11224__auto__[(0)] = ((G__16301_16710 + G__16304_16713) + G__16307_16716));

(dest__11224__auto__[(1)] = ((G__16302_16711 + G__16305_16714) + G__16308_16717));

(dest__11224__auto__[(2)] = ((G__16303_16712 + G__16306_16715) + G__16309_16718));

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16314 = self__.buf;
var dest__11202__auto__ = (new Float32Array((3)));
(dest__11202__auto__[(0)] = ((G__16314[(0)]) + x));

(dest__11202__auto__[(1)] = ((G__16314[(1)]) + y));

(dest__11202__auto__[(2)] = ((G__16314[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__11202__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11196__auto__ = (new Float32Array((3)));
var G__16315_16719 = self__.buf;
(dest__11196__auto__[(0)] = thi.ng.common.math.core.abs.call(null,(G__16315_16719[(0)])));

(dest__11196__auto__[(1)] = thi.ng.common.math.core.abs.call(null,(G__16315_16719[(1)])));

(dest__11196__auto__[(2)] = thi.ng.common.math.core.abs.call(null,(G__16315_16719[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__11196__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16328_16720 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16329_16721 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16330_16722 = ((!(G__16328_16720))?typeof a === 'number':null);
var G__16331_16723 = ((!(G__16329_16721))?typeof b === 'number':null);
var G__16316_16724 = self__.buf;
var G__16317_16725 = ((G__16328_16720)?a.buf:null);
var G__16318_16726 = ((G__16329_16721)?b.buf:null);
var G__16319_16727 = (G__16316_16724[(0)]);
var G__16320_16728 = (G__16316_16724[(1)]);
var G__16321_16729 = (G__16316_16724[(2)]);
var G__16322_16730 = ((G__16328_16720)?(G__16317_16725[(0)]):(cljs.core.truth_(G__16330_16722)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__16323_16731 = ((G__16328_16720)?(G__16317_16725[(1)]):(cljs.core.truth_(G__16330_16722)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__16324_16732 = ((G__16328_16720)?(G__16317_16725[(2)]):(cljs.core.truth_(G__16330_16722)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__16325_16733 = ((G__16329_16721)?(G__16318_16726[(0)]):(cljs.core.truth_(G__16331_16723)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__16326_16734 = ((G__16329_16721)?(G__16318_16726[(1)]):(cljs.core.truth_(G__16331_16723)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__16327_16735 = ((G__16329_16721)?(G__16318_16726[(2)]):(cljs.core.truth_(G__16331_16723)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__11224__auto__[(0)] = ((G__16319_16727 - G__16322_16730) * G__16325_16733));

(dest__11224__auto__[(1)] = ((G__16320_16728 - G__16323_16731) * G__16326_16734));

(dest__11224__auto__[(2)] = ((G__16321_16729 - G__16324_16732) * G__16327_16735));

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11213__auto__ = (new Float32Array((3)));
var G__16332_16736 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16333_16737 = v.buf;
(dest__11213__auto__[(0)] = ((G__16332_16736[(0)]) + (G__16333_16737[(0)])));

(dest__11213__auto__[(1)] = ((G__16332_16736[(1)]) + (G__16333_16737[(1)])));

(dest__11213__auto__[(2)] = ((G__16332_16736[(2)]) + (G__16333_16737[(2)])));
} else {
if(typeof v === 'number'){
(dest__11213__auto__[(0)] = ((G__16332_16736[(0)]) + v));

(dest__11213__auto__[(1)] = ((G__16332_16736[(1)]) + v));

(dest__11213__auto__[(2)] = ((G__16332_16736[(2)]) + v));
} else {
(dest__11213__auto__[(0)] = ((G__16332_16736[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11213__auto__[(1)] = ((G__16332_16736[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__11213__auto__[(2)] = ((G__16332_16736[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11213__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16346_16738 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16347_16739 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16348_16740 = ((!(G__16346_16738))?typeof v1 === 'number':null);
var G__16349_16741 = ((!(G__16347_16739))?typeof v2 === 'number':null);
var G__16334_16742 = self__.buf;
var G__16335_16743 = ((G__16346_16738)?v1.buf:null);
var G__16336_16744 = ((G__16347_16739)?v2.buf:null);
var G__16337_16745 = (G__16334_16742[(0)]);
var G__16338_16746 = (G__16334_16742[(1)]);
var G__16339_16747 = (G__16334_16742[(2)]);
var G__16340_16748 = ((G__16346_16738)?(G__16335_16743[(0)]):(cljs.core.truth_(G__16348_16740)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16341_16749 = ((G__16346_16738)?(G__16335_16743[(1)]):(cljs.core.truth_(G__16348_16740)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16342_16750 = ((G__16346_16738)?(G__16335_16743[(2)]):(cljs.core.truth_(G__16348_16740)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16343_16751 = ((G__16347_16739)?(G__16336_16744[(0)]):(cljs.core.truth_(G__16349_16741)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16344_16752 = ((G__16347_16739)?(G__16336_16744[(1)]):(cljs.core.truth_(G__16349_16741)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16345_16753 = ((G__16347_16739)?(G__16336_16744[(2)]):(cljs.core.truth_(G__16349_16741)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11224__auto__[(0)] = ((G__16337_16745 + G__16340_16748) + G__16343_16751));

(dest__11224__auto__[(1)] = ((G__16338_16746 + G__16341_16749) + G__16344_16752));

(dest__11224__auto__[(2)] = ((G__16339_16747 + G__16342_16750) + G__16345_16753));

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16350 = self__.buf;
var dest__11202__auto__ = (new Float32Array((3)));
(dest__11202__auto__[(0)] = ((G__16350[(0)]) + x));

(dest__11202__auto__[(1)] = ((G__16350[(1)]) + y));

(dest__11202__auto__[(2)] = ((G__16350[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__11202__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.core.vector.swizzle3_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k >= (0))) && ((k <= (2)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11213__auto__ = (new Float32Array((3)));
var G__16351_16754 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16352_16755 = v.buf;
(dest__11213__auto__[(0)] = ((G__16351_16754[(0)]) * (G__16352_16755[(0)])));

(dest__11213__auto__[(1)] = ((G__16351_16754[(1)]) * (G__16352_16755[(1)])));

(dest__11213__auto__[(2)] = ((G__16351_16754[(2)]) * (G__16352_16755[(2)])));
} else {
if(typeof v === 'number'){
(dest__11213__auto__[(0)] = ((G__16351_16754[(0)]) * v));

(dest__11213__auto__[(1)] = ((G__16351_16754[(1)]) * v));

(dest__11213__auto__[(2)] = ((G__16351_16754[(2)]) * v));
} else {
(dest__11213__auto__[(0)] = ((G__16351_16754[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11213__auto__[(1)] = ((G__16351_16754[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__11213__auto__[(2)] = ((G__16351_16754[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11213__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16365_16756 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16366_16757 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16367_16758 = ((!(G__16365_16756))?typeof v1 === 'number':null);
var G__16368_16759 = ((!(G__16366_16757))?typeof v2 === 'number':null);
var G__16353_16760 = self__.buf;
var G__16354_16761 = ((G__16365_16756)?v1.buf:null);
var G__16355_16762 = ((G__16366_16757)?v2.buf:null);
var G__16356_16763 = (G__16353_16760[(0)]);
var G__16357_16764 = (G__16353_16760[(1)]);
var G__16358_16765 = (G__16353_16760[(2)]);
var G__16359_16766 = ((G__16365_16756)?(G__16354_16761[(0)]):(cljs.core.truth_(G__16367_16758)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__16360_16767 = ((G__16365_16756)?(G__16354_16761[(1)]):(cljs.core.truth_(G__16367_16758)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__16361_16768 = ((G__16365_16756)?(G__16354_16761[(2)]):(cljs.core.truth_(G__16367_16758)?v1:cljs.core.nth.call(null,v1,(2),1.0)));
var G__16362_16769 = ((G__16366_16757)?(G__16355_16762[(0)]):(cljs.core.truth_(G__16368_16759)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__16363_16770 = ((G__16366_16757)?(G__16355_16762[(1)]):(cljs.core.truth_(G__16368_16759)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
var G__16364_16771 = ((G__16366_16757)?(G__16355_16762[(2)]):(cljs.core.truth_(G__16368_16759)?v2:cljs.core.nth.call(null,v2,(2),1.0)));
(dest__11224__auto__[(0)] = ((G__16356_16763 * G__16359_16766) * G__16362_16769));

(dest__11224__auto__[(1)] = ((G__16357_16764 * G__16360_16767) * G__16363_16770));

(dest__11224__auto__[(2)] = ((G__16358_16765 * G__16361_16768) * G__16364_16771));

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16369 = self__.buf;
var dest__11202__auto__ = (new Float32Array((3)));
(dest__11202__auto__[(0)] = ((G__16369[(0)]) * x));

(dest__11202__auto__[(1)] = ((G__16369[(1)]) * y));

(dest__11202__auto__[(2)] = ((G__16369[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__11202__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.core.vector.Vec3.prototype.call = (function() {
var G__16772 = null;
var G__16772__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,_);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
}
});
var G__16772__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__16772 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__16772__2.call(this,self__,k);
case 3:
return G__16772__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16772.cljs$core$IFn$_invoke$arity$2 = G__16772__2;
G__16772.cljs$core$IFn$_invoke$arity$3 = G__16772__3;
return G__16772;
})()
;

thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args15998){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15998)));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,_);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4421__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11213__auto__ = (new Float32Array((3)));
var G__16370_16773 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16371_16774 = v.buf;
(dest__11213__auto__[(0)] = (function (){var a__10849__auto__ = (G__16370_16773[(0)]);
var b__10850__auto__ = (G__16371_16774[(0)]);
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11213__auto__[(1)] = (function (){var a__10849__auto__ = (G__16370_16773[(1)]);
var b__10850__auto__ = (G__16371_16774[(1)]);
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11213__auto__[(2)] = (function (){var a__10849__auto__ = (G__16370_16773[(2)]);
var b__10850__auto__ = (G__16371_16774[(2)]);
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11213__auto__[(0)] = (function (){var a__10849__auto__ = (G__16370_16773[(0)]);
var b__10850__auto__ = v;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11213__auto__[(1)] = (function (){var a__10849__auto__ = (G__16370_16773[(1)]);
var b__10850__auto__ = v;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11213__auto__[(2)] = (function (){var a__10849__auto__ = (G__16370_16773[(2)]);
var b__10850__auto__ = v;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());
} else {
(dest__11213__auto__[(0)] = (function (){var a__10849__auto__ = (G__16370_16773[(0)]);
var b__10850__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11213__auto__[(1)] = (function (){var a__10849__auto__ = (G__16370_16773[(1)]);
var b__10850__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11213__auto__[(2)] = (function (){var a__10849__auto__ = (G__16370_16773[(2)]);
var b__10850__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11213__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16384_16775 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__16385_16776 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16386_16777 = ((!(G__16384_16775))?typeof v === 'number':null);
var G__16387_16778 = ((!(G__16385_16776))?typeof v2 === 'number':null);
var G__16372_16779 = self__.buf;
var G__16373_16780 = ((G__16384_16775)?v.buf:null);
var G__16374_16781 = ((G__16385_16776)?v2.buf:null);
var G__16375_16782 = (G__16372_16779[(0)]);
var G__16376_16783 = (G__16372_16779[(1)]);
var G__16377_16784 = (G__16372_16779[(2)]);
var G__16378_16785 = ((G__16384_16775)?(G__16373_16780[(0)]):(cljs.core.truth_(G__16386_16777)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__16379_16786 = ((G__16384_16775)?(G__16373_16780[(1)]):(cljs.core.truth_(G__16386_16777)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__16380_16787 = ((G__16384_16775)?(G__16373_16780[(2)]):(cljs.core.truth_(G__16386_16777)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__16381_16788 = ((G__16385_16776)?(G__16374_16781[(0)]):(cljs.core.truth_(G__16387_16778)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16382_16789 = ((G__16385_16776)?(G__16374_16781[(1)]):(cljs.core.truth_(G__16387_16778)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16383_16790 = ((G__16385_16776)?(G__16374_16781[(2)]):(cljs.core.truth_(G__16387_16778)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11224__auto__[(0)] = (function (){var a__10849__auto__ = (function (){var a__10849__auto__ = G__16375_16782;
var b__10850__auto__ = G__16378_16785;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})();
var b__10850__auto__ = G__16381_16788;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11224__auto__[(1)] = (function (){var a__10849__auto__ = (function (){var a__10849__auto__ = G__16376_16783;
var b__10850__auto__ = G__16379_16786;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})();
var b__10850__auto__ = G__16382_16789;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

(dest__11224__auto__[(2)] = (function (){var a__10849__auto__ = (function (){var a__10849__auto__ = G__16377_16784;
var b__10850__auto__ = G__16380_16787;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})();
var b__10850__auto__ = G__16383_16790;
if((a__10849__auto__ <= b__10850__auto__)){
return a__10849__auto__;
} else {
return b__10850__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11213__auto__ = (new Float32Array((3)));
var G__16388_16791 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16389_16792 = v.buf;
(dest__11213__auto__[(0)] = (function (){var a__10856__auto__ = (G__16388_16791[(0)]);
var b__10857__auto__ = (G__16389_16792[(0)]);
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11213__auto__[(1)] = (function (){var a__10856__auto__ = (G__16388_16791[(1)]);
var b__10857__auto__ = (G__16389_16792[(1)]);
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11213__auto__[(2)] = (function (){var a__10856__auto__ = (G__16388_16791[(2)]);
var b__10857__auto__ = (G__16389_16792[(2)]);
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11213__auto__[(0)] = (function (){var a__10856__auto__ = (G__16388_16791[(0)]);
var b__10857__auto__ = v;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11213__auto__[(1)] = (function (){var a__10856__auto__ = (G__16388_16791[(1)]);
var b__10857__auto__ = v;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11213__auto__[(2)] = (function (){var a__10856__auto__ = (G__16388_16791[(2)]);
var b__10857__auto__ = v;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());
} else {
(dest__11213__auto__[(0)] = (function (){var a__10856__auto__ = (G__16388_16791[(0)]);
var b__10857__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11213__auto__[(1)] = (function (){var a__10856__auto__ = (G__16388_16791[(1)]);
var b__10857__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11213__auto__[(2)] = (function (){var a__10856__auto__ = (G__16388_16791[(2)]);
var b__10857__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11213__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__11224__auto__ = (new Float32Array((3)));
var G__16402_16793 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__16403_16794 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16404_16795 = ((!(G__16402_16793))?typeof v === 'number':null);
var G__16405_16796 = ((!(G__16403_16794))?typeof v2 === 'number':null);
var G__16390_16797 = self__.buf;
var G__16391_16798 = ((G__16402_16793)?v.buf:null);
var G__16392_16799 = ((G__16403_16794)?v2.buf:null);
var G__16393_16800 = (G__16390_16797[(0)]);
var G__16394_16801 = (G__16390_16797[(1)]);
var G__16395_16802 = (G__16390_16797[(2)]);
var G__16396_16803 = ((G__16402_16793)?(G__16391_16798[(0)]):(cljs.core.truth_(G__16404_16795)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__16397_16804 = ((G__16402_16793)?(G__16391_16798[(1)]):(cljs.core.truth_(G__16404_16795)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__16398_16805 = ((G__16402_16793)?(G__16391_16798[(2)]):(cljs.core.truth_(G__16404_16795)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__16399_16806 = ((G__16403_16794)?(G__16392_16799[(0)]):(cljs.core.truth_(G__16405_16796)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16400_16807 = ((G__16403_16794)?(G__16392_16799[(1)]):(cljs.core.truth_(G__16405_16796)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16401_16808 = ((G__16403_16794)?(G__16392_16799[(2)]):(cljs.core.truth_(G__16405_16796)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11224__auto__[(0)] = (function (){var a__10856__auto__ = (function (){var a__10856__auto__ = G__16393_16800;
var b__10857__auto__ = G__16396_16803;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})();
var b__10857__auto__ = G__16399_16806;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11224__auto__[(1)] = (function (){var a__10856__auto__ = (function (){var a__10856__auto__ = G__16394_16801;
var b__10857__auto__ = G__16397_16804;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})();
var b__10857__auto__ = G__16400_16807;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

(dest__11224__auto__[(2)] = (function (){var a__10856__auto__ = (function (){var a__10856__auto__ = G__16395_16802;
var b__10857__auto__ = G__16398_16805;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})();
var b__10857__auto__ = G__16401_16808;
if((a__10856__auto__ >= b__10857__auto__)){
return a__10856__auto__;
} else {
return b__10857__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__11224__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare.call(null,(self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((3) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

(buf_SINGLEQUOTE_[(2)] = f2.call(null,(buf_SINGLEQUOTE_[(2)]),(2)));

return (new thi.ng.geom.core.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.call(null,___$1,v,thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((3) === cljs.core.count.call(null,v))){
var G__16406 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16407 = v.buf;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16406[(0)]),(G__16407[(0)]),eps))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16406[(1)]),(G__16407[(1)]),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__16406[(2)]),(G__16407[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16406[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16406[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__16406[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__16408 = self__.buf;
var G__16409 = (G__16408[(0)]);
var G__16410 = (G__16408[(1)]);
var G__16411 = (G__16408[(2)]);
return Math.sqrt((((G__16409 * G__16409) + (G__16410 * G__16410)) + (G__16411 * G__16411)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__16412 = self__.buf;
var G__16413 = (G__16412[(0)]);
var G__16414 = (G__16412[(1)]);
var G__16415 = (G__16412[(2)]);
return (((G__16413 * G__16413) + (G__16414 * G__16414)) + (G__16415 * G__16415));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__16416_16809 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16417_16810 = v.buf;
(b[(0)] = (((G__16416_16809[(0)]) + (G__16417_16810[(0)])) * 0.5));

(b[(1)] = (((G__16416_16809[(1)]) + (G__16417_16810[(1)])) * 0.5));

(b[(2)] = (((G__16416_16809[(2)]) + (G__16417_16810[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__16416_16809[(0)]) + v) * 0.5));

(b[(1)] = (((G__16416_16809[(1)]) + v) * 0.5));

(b[(2)] = (((G__16416_16809[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__16416_16809[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__16416_16809[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__16416_16809[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__16430_16811 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__16431_16812 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16432_16813 = ((!(G__16430_16811))?typeof v === 'number':null);
var G__16433_16814 = ((!(G__16431_16812))?typeof v2 === 'number':null);
var G__16418_16815 = self__.buf;
var G__16419_16816 = ((G__16430_16811)?v.buf:null);
var G__16420_16817 = ((G__16431_16812)?v2.buf:null);
var G__16421_16818 = (G__16418_16815[(0)]);
var G__16422_16819 = (G__16418_16815[(1)]);
var G__16423_16820 = (G__16418_16815[(2)]);
var G__16424_16821 = ((G__16430_16811)?(G__16419_16816[(0)]):(cljs.core.truth_(G__16432_16813)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__16425_16822 = ((G__16430_16811)?(G__16419_16816[(1)]):(cljs.core.truth_(G__16432_16813)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__16426_16823 = ((G__16430_16811)?(G__16419_16816[(2)]):(cljs.core.truth_(G__16432_16813)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__16427_16824 = ((G__16431_16812)?(G__16420_16817[(0)]):(cljs.core.truth_(G__16433_16814)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16428_16825 = ((G__16431_16812)?(G__16420_16817[(1)]):(cljs.core.truth_(G__16433_16814)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16429_16826 = ((G__16431_16812)?(G__16420_16817[(2)]):(cljs.core.truth_(G__16433_16814)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(b[(0)] = (((G__16424_16821 - G__16421_16818) * G__16427_16824) + G__16421_16818));

(b[(1)] = (((G__16425_16822 - G__16422_16819) * G__16428_16825) + G__16422_16819));

(b[(2)] = (((G__16426_16823 - G__16423_16820) * G__16429_16826) + G__16423_16820));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(2),0.0)));
var G__16446_16827 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16447_16828 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__16448_16829 = ((!(G__16446_16827))?typeof b === 'number':null);
var G__16449_16830 = ((!(G__16447_16828))?typeof c === 'number':null);
var G__16434_16831 = self__.buf;
var G__16435_16832 = ((G__16446_16827)?b.buf:null);
var G__16436_16833 = ((G__16447_16828)?c.buf:null);
var G__16437_16834 = (G__16434_16831[(0)]);
var G__16438_16835 = (G__16434_16831[(1)]);
var G__16439_16836 = (G__16434_16831[(2)]);
var G__16440_16837 = ((G__16446_16827)?(G__16435_16832[(0)]):(cljs.core.truth_(G__16448_16829)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__16441_16838 = ((G__16446_16827)?(G__16435_16832[(1)]):(cljs.core.truth_(G__16448_16829)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__16442_16839 = ((G__16446_16827)?(G__16435_16832[(2)]):(cljs.core.truth_(G__16448_16829)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__16443_16840 = ((G__16447_16828)?(G__16436_16833[(0)]):(cljs.core.truth_(G__16449_16830)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__16444_16841 = ((G__16447_16828)?(G__16436_16833[(1)]):(cljs.core.truth_(G__16449_16830)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__16445_16842 = ((G__16447_16828)?(G__16436_16833[(2)]):(cljs.core.truth_(G__16449_16830)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_16843 = (((G__16440_16837 - G__16437_16834) * u) + G__16437_16834);
var y1_16844 = (((G__16441_16838 - G__16438_16835) * u) + G__16438_16835);
var z1_16845 = (((G__16442_16839 - G__16439_16836) * u) + G__16439_16836);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__16443_16840) * u) + G__16443_16840) - x1_16843) * v) + x1_16843));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__16444_16841) * u) + G__16444_16841) - y1_16844) * v) + y1_16844));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__16445_16842) * u) + G__16445_16842) - z1_16845) * v) + z1_16845));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.geom.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = thi.ng.geom.core.mag.call(null,___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec3";

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"thi.ng.geom.core.vector/Vec3");
});

thi.ng.geom.core.vector.__GT_Vec3 = (function thi$ng$geom$core$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__16848){
var G__16846 = (((G__16848 instanceof thi.ng.geom.core.vector.Vec2))?G__16848.buf:G__16848.buf);
return (G__16846[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__16851){
var G__16849 = (((G__16851 instanceof thi.ng.geom.core.vector.Vec2))?G__16851.buf:G__16851.buf);
var G__16850 = (new Float32Array(2));
(G__16850[(0)] = (G__16849[(0)]));

(G__16850[(1)] = (G__16849[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__16850,null,cljs.core.meta.call(null,G__16851)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__16854){
var G__16852 = (((G__16854 instanceof thi.ng.geom.core.vector.Vec2))?G__16854.buf:G__16854.buf);
var G__16853 = (new Float32Array(3));
(G__16853[(0)] = (G__16852[(0)]));

(G__16853[(1)] = (G__16852[(0)]));

(G__16853[(2)] = (G__16852[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16853,null,cljs.core.meta.call(null,G__16854)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__16857){
var G__16855 = (((G__16857 instanceof thi.ng.geom.core.vector.Vec2))?G__16857.buf:G__16857.buf);
var G__16856 = (new Float32Array(3));
(G__16856[(0)] = (G__16855[(0)]));

(G__16856[(1)] = (G__16855[(0)]));

(G__16856[(2)] = (G__16855[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16856,null,cljs.core.meta.call(null,G__16857)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__16860){
if((G__16860 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16860","G__16860",-946764597,null))))].join('')));
}

var G__16858 = (((G__16860 instanceof thi.ng.geom.core.vector.Vec2))?G__16860.buf:G__16860.buf);
var G__16859 = (new Float32Array(3));
(G__16859[(0)] = (G__16858[(0)]));

(G__16859[(1)] = (G__16858[(0)]));

(G__16859[(2)] = (G__16858[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16859,null,cljs.core.meta.call(null,G__16860)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__16863){
var G__16861 = (((G__16863 instanceof thi.ng.geom.core.vector.Vec2))?G__16863.buf:G__16863.buf);
var G__16862 = (new Float32Array(2));
(G__16862[(0)] = (G__16861[(0)]));

(G__16862[(1)] = (G__16861[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__16862,null,cljs.core.meta.call(null,G__16863)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__16866){
var G__16864 = (((G__16866 instanceof thi.ng.geom.core.vector.Vec2))?G__16866.buf:G__16866.buf);
var G__16865 = (new Float32Array(3));
(G__16865[(0)] = (G__16864[(0)]));

(G__16865[(1)] = (G__16864[(1)]));

(G__16865[(2)] = (G__16864[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16865,null,cljs.core.meta.call(null,G__16866)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__16869){
var G__16867 = (((G__16869 instanceof thi.ng.geom.core.vector.Vec2))?G__16869.buf:G__16869.buf);
var G__16868 = (new Float32Array(3));
(G__16868[(0)] = (G__16867[(0)]));

(G__16868[(1)] = (G__16867[(1)]));

(G__16868[(2)] = (G__16867[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16868,null,cljs.core.meta.call(null,G__16869)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__16872){
if((G__16872 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16872","G__16872",-1121592656,null))))].join('')));
}

var G__16870 = (((G__16872 instanceof thi.ng.geom.core.vector.Vec2))?G__16872.buf:G__16872.buf);
var G__16871 = (new Float32Array(3));
(G__16871[(0)] = (G__16870[(0)]));

(G__16871[(1)] = (G__16870[(1)]));

(G__16871[(2)] = (G__16870[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16871,null,cljs.core.meta.call(null,G__16872)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__16875){
if((G__16875 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16875","G__16875",1725223317,null))))].join('')));
}

var G__16873 = (((G__16875 instanceof thi.ng.geom.core.vector.Vec2))?G__16875.buf:G__16875.buf);
var G__16874 = (new Float32Array(2));
(G__16874[(0)] = (G__16873[(0)]));

(G__16874[(1)] = (G__16873[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__16874,null,cljs.core.meta.call(null,G__16875)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__16878){
if((G__16878 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16878","G__16878",-452650558,null))))].join('')));
}

var G__16876 = (((G__16878 instanceof thi.ng.geom.core.vector.Vec2))?G__16878.buf:G__16878.buf);
var G__16877 = (new Float32Array(3));
(G__16877[(0)] = (G__16876[(0)]));

(G__16877[(1)] = (G__16876[(2)]));

(G__16877[(2)] = (G__16876[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16877,null,cljs.core.meta.call(null,G__16878)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__16881){
if((G__16881 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16881","G__16881",-2053438067,null))))].join('')));
}

var G__16879 = (((G__16881 instanceof thi.ng.geom.core.vector.Vec2))?G__16881.buf:G__16881.buf);
var G__16880 = (new Float32Array(3));
(G__16880[(0)] = (G__16879[(0)]));

(G__16880[(1)] = (G__16879[(2)]));

(G__16880[(2)] = (G__16879[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16880,null,cljs.core.meta.call(null,G__16881)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__16884){
if((G__16884 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16884","G__16884",520260411,null))))].join('')));
}

var G__16882 = (((G__16884 instanceof thi.ng.geom.core.vector.Vec2))?G__16884.buf:G__16884.buf);
var G__16883 = (new Float32Array(3));
(G__16883[(0)] = (G__16882[(0)]));

(G__16883[(1)] = (G__16882[(2)]));

(G__16883[(2)] = (G__16882[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16883,null,cljs.core.meta.call(null,G__16884)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__16887){
var G__16885 = (((G__16887 instanceof thi.ng.geom.core.vector.Vec2))?G__16887.buf:G__16887.buf);
return (G__16885[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__16890){
var G__16888 = (((G__16890 instanceof thi.ng.geom.core.vector.Vec2))?G__16890.buf:G__16890.buf);
var G__16889 = (new Float32Array(2));
(G__16889[(0)] = (G__16888[(1)]));

(G__16889[(1)] = (G__16888[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__16889,null,cljs.core.meta.call(null,G__16890)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__16893){
var G__16891 = (((G__16893 instanceof thi.ng.geom.core.vector.Vec2))?G__16893.buf:G__16893.buf);
var G__16892 = (new Float32Array(3));
(G__16892[(0)] = (G__16891[(1)]));

(G__16892[(1)] = (G__16891[(0)]));

(G__16892[(2)] = (G__16891[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16892,null,cljs.core.meta.call(null,G__16893)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__16896){
var G__16894 = (((G__16896 instanceof thi.ng.geom.core.vector.Vec2))?G__16896.buf:G__16896.buf);
var G__16895 = (new Float32Array(3));
(G__16895[(0)] = (G__16894[(1)]));

(G__16895[(1)] = (G__16894[(0)]));

(G__16895[(2)] = (G__16894[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16895,null,cljs.core.meta.call(null,G__16896)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__16899){
if((G__16899 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16899","G__16899",2057521786,null))))].join('')));
}

var G__16897 = (((G__16899 instanceof thi.ng.geom.core.vector.Vec2))?G__16899.buf:G__16899.buf);
var G__16898 = (new Float32Array(3));
(G__16898[(0)] = (G__16897[(1)]));

(G__16898[(1)] = (G__16897[(0)]));

(G__16898[(2)] = (G__16897[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16898,null,cljs.core.meta.call(null,G__16899)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__16902){
var G__16900 = (((G__16902 instanceof thi.ng.geom.core.vector.Vec2))?G__16902.buf:G__16902.buf);
var G__16901 = (new Float32Array(2));
(G__16901[(0)] = (G__16900[(1)]));

(G__16901[(1)] = (G__16900[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__16901,null,cljs.core.meta.call(null,G__16902)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__16905){
var G__16903 = (((G__16905 instanceof thi.ng.geom.core.vector.Vec2))?G__16905.buf:G__16905.buf);
var G__16904 = (new Float32Array(3));
(G__16904[(0)] = (G__16903[(1)]));

(G__16904[(1)] = (G__16903[(1)]));

(G__16904[(2)] = (G__16903[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16904,null,cljs.core.meta.call(null,G__16905)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__16908){
var G__16906 = (((G__16908 instanceof thi.ng.geom.core.vector.Vec2))?G__16908.buf:G__16908.buf);
var G__16907 = (new Float32Array(3));
(G__16907[(0)] = (G__16906[(1)]));

(G__16907[(1)] = (G__16906[(1)]));

(G__16907[(2)] = (G__16906[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16907,null,cljs.core.meta.call(null,G__16908)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__16911){
if((G__16911 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16911","G__16911",-818939286,null))))].join('')));
}

var G__16909 = (((G__16911 instanceof thi.ng.geom.core.vector.Vec2))?G__16911.buf:G__16911.buf);
var G__16910 = (new Float32Array(3));
(G__16910[(0)] = (G__16909[(1)]));

(G__16910[(1)] = (G__16909[(1)]));

(G__16910[(2)] = (G__16909[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16910,null,cljs.core.meta.call(null,G__16911)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__16914){
if((G__16914 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16914","G__16914",1237752483,null))))].join('')));
}

var G__16912 = (((G__16914 instanceof thi.ng.geom.core.vector.Vec2))?G__16914.buf:G__16914.buf);
var G__16913 = (new Float32Array(2));
(G__16913[(0)] = (G__16912[(1)]));

(G__16913[(1)] = (G__16912[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__16913,null,cljs.core.meta.call(null,G__16914)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__16917){
if((G__16917 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16917","G__16917",-1125468782,null))))].join('')));
}

var G__16915 = (((G__16917 instanceof thi.ng.geom.core.vector.Vec2))?G__16917.buf:G__16917.buf);
var G__16916 = (new Float32Array(3));
(G__16916[(0)] = (G__16915[(1)]));

(G__16916[(1)] = (G__16915[(2)]));

(G__16916[(2)] = (G__16915[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16916,null,cljs.core.meta.call(null,G__16917)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__16920){
if((G__16920 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16920","G__16920",-1189111850,null))))].join('')));
}

var G__16918 = (((G__16920 instanceof thi.ng.geom.core.vector.Vec2))?G__16920.buf:G__16920.buf);
var G__16919 = (new Float32Array(3));
(G__16919[(0)] = (G__16918[(1)]));

(G__16919[(1)] = (G__16918[(2)]));

(G__16919[(2)] = (G__16918[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16919,null,cljs.core.meta.call(null,G__16920)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__16923){
if((G__16923 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16923","G__16923",1816903954,null))))].join('')));
}

var G__16921 = (((G__16923 instanceof thi.ng.geom.core.vector.Vec2))?G__16923.buf:G__16923.buf);
var G__16922 = (new Float32Array(3));
(G__16922[(0)] = (G__16921[(1)]));

(G__16922[(1)] = (G__16921[(2)]));

(G__16922[(2)] = (G__16921[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16922,null,cljs.core.meta.call(null,G__16923)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__16926){
if((G__16926 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16926","G__16926",-818683825,null))))].join('')));
}

var G__16924 = (((G__16926 instanceof thi.ng.geom.core.vector.Vec2))?G__16926.buf:G__16926.buf);
return (G__16924[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__16929){
if((G__16929 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16929","G__16929",-1016493130,null))))].join('')));
}

var G__16927 = (((G__16929 instanceof thi.ng.geom.core.vector.Vec2))?G__16929.buf:G__16929.buf);
var G__16928 = (new Float32Array(2));
(G__16928[(0)] = (G__16927[(2)]));

(G__16928[(1)] = (G__16927[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__16928,null,cljs.core.meta.call(null,G__16929)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__16932){
if((G__16932 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16932","G__16932",-1924761197,null))))].join('')));
}

var G__16930 = (((G__16932 instanceof thi.ng.geom.core.vector.Vec2))?G__16932.buf:G__16932.buf);
var G__16931 = (new Float32Array(3));
(G__16931[(0)] = (G__16930[(2)]));

(G__16931[(1)] = (G__16930[(0)]));

(G__16931[(2)] = (G__16930[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16931,null,cljs.core.meta.call(null,G__16932)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__16935){
if((G__16935 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16935","G__16935",-1413019294,null))))].join('')));
}

var G__16933 = (((G__16935 instanceof thi.ng.geom.core.vector.Vec2))?G__16935.buf:G__16935.buf);
var G__16934 = (new Float32Array(3));
(G__16934[(0)] = (G__16933[(2)]));

(G__16934[(1)] = (G__16933[(0)]));

(G__16934[(2)] = (G__16933[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16934,null,cljs.core.meta.call(null,G__16935)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__16938){
if((G__16938 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16938","G__16938",-1033546948,null))))].join('')));
}

var G__16936 = (((G__16938 instanceof thi.ng.geom.core.vector.Vec2))?G__16938.buf:G__16938.buf);
var G__16937 = (new Float32Array(3));
(G__16937[(0)] = (G__16936[(2)]));

(G__16937[(1)] = (G__16936[(0)]));

(G__16937[(2)] = (G__16936[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16937,null,cljs.core.meta.call(null,G__16938)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__16941){
if((G__16941 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16941","G__16941",1503600392,null))))].join('')));
}

var G__16939 = (((G__16941 instanceof thi.ng.geom.core.vector.Vec2))?G__16941.buf:G__16941.buf);
var G__16940 = (new Float32Array(2));
(G__16940[(0)] = (G__16939[(2)]));

(G__16940[(1)] = (G__16939[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__16940,null,cljs.core.meta.call(null,G__16941)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__16944){
if((G__16944 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16944","G__16944",2141232664,null))))].join('')));
}

var G__16942 = (((G__16944 instanceof thi.ng.geom.core.vector.Vec2))?G__16944.buf:G__16944.buf);
var G__16943 = (new Float32Array(3));
(G__16943[(0)] = (G__16942[(2)]));

(G__16943[(1)] = (G__16942[(1)]));

(G__16943[(2)] = (G__16942[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16943,null,cljs.core.meta.call(null,G__16944)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__16947){
if((G__16947 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16947","G__16947",675370137,null))))].join('')));
}

var G__16945 = (((G__16947 instanceof thi.ng.geom.core.vector.Vec2))?G__16947.buf:G__16947.buf);
var G__16946 = (new Float32Array(3));
(G__16946[(0)] = (G__16945[(2)]));

(G__16946[(1)] = (G__16945[(1)]));

(G__16946[(2)] = (G__16945[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16946,null,cljs.core.meta.call(null,G__16947)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__16950){
if((G__16950 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16950","G__16950",-740095199,null))))].join('')));
}

var G__16948 = (((G__16950 instanceof thi.ng.geom.core.vector.Vec2))?G__16950.buf:G__16950.buf);
var G__16949 = (new Float32Array(3));
(G__16949[(0)] = (G__16948[(2)]));

(G__16949[(1)] = (G__16948[(1)]));

(G__16949[(2)] = (G__16948[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16949,null,cljs.core.meta.call(null,G__16950)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__16953){
if((G__16953 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16953","G__16953",949190845,null))))].join('')));
}

var G__16951 = (((G__16953 instanceof thi.ng.geom.core.vector.Vec2))?G__16953.buf:G__16953.buf);
var G__16952 = (new Float32Array(2));
(G__16952[(0)] = (G__16951[(2)]));

(G__16952[(1)] = (G__16951[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__16952,null,cljs.core.meta.call(null,G__16953)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__16956){
if((G__16956 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16956","G__16956",-562040267,null))))].join('')));
}

var G__16954 = (((G__16956 instanceof thi.ng.geom.core.vector.Vec2))?G__16956.buf:G__16956.buf);
var G__16955 = (new Float32Array(3));
(G__16955[(0)] = (G__16954[(2)]));

(G__16955[(1)] = (G__16954[(2)]));

(G__16955[(2)] = (G__16954[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16955,null,cljs.core.meta.call(null,G__16956)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__16959){
if((G__16959 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16959","G__16959",1052189438,null))))].join('')));
}

var G__16957 = (((G__16959 instanceof thi.ng.geom.core.vector.Vec2))?G__16959.buf:G__16959.buf);
var G__16958 = (new Float32Array(3));
(G__16958[(0)] = (G__16957[(2)]));

(G__16958[(1)] = (G__16957[(2)]));

(G__16958[(2)] = (G__16957[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16958,null,cljs.core.meta.call(null,G__16959)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__16962){
if((G__16962 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16962","G__16962",209736854,null))))].join('')));
}

var G__16960 = (((G__16962 instanceof thi.ng.geom.core.vector.Vec2))?G__16962.buf:G__16962.buf);
var G__16961 = (new Float32Array(3));
(G__16961[(0)] = (G__16960[(2)]));

(G__16961[(1)] = (G__16960[(2)]));

(G__16961[(2)] = (G__16960[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16961,null,cljs.core.meta.call(null,G__16962)));
});
thi.ng.geom.core.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.core.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.core.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.core.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.core.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.core.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.core.vector.yy], null);
thi.ng.geom.core.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.core.vector.y,thi.ng.geom.core.vector.xzx,thi.ng.geom.core.vector.xyz,thi.ng.geom.core.vector.zzy,thi.ng.geom.core.vector.yx,thi.ng.geom.core.vector.xy,thi.ng.geom.core.vector.yyz,thi.ng.geom.core.vector.zxy,thi.ng.geom.core.vector.xzy,thi.ng.geom.core.vector.zxz,thi.ng.geom.core.vector.zx,thi.ng.geom.core.vector.xx,thi.ng.geom.core.vector.xxx,thi.ng.geom.core.vector.zy,thi.ng.geom.core.vector.zzx,thi.ng.geom.core.vector.zyx,thi.ng.geom.core.vector.yzx,thi.ng.geom.core.vector.z,thi.ng.geom.core.vector.yyx,thi.ng.geom.core.vector.xz,thi.ng.geom.core.vector.zyz,thi.ng.geom.core.vector.yy,thi.ng.geom.core.vector.xxz,thi.ng.geom.core.vector.yzy,thi.ng.geom.core.vector.yz,thi.ng.geom.core.vector.yxx,thi.ng.geom.core.vector.xyy,thi.ng.geom.core.vector.xxy,thi.ng.geom.core.vector.zz,thi.ng.geom.core.vector.zzz,thi.ng.geom.core.vector.x,thi.ng.geom.core.vector.xzz,thi.ng.geom.core.vector.yxz,thi.ng.geom.core.vector.zxx,thi.ng.geom.core.vector.yzz,thi.ng.geom.core.vector.xyx,thi.ng.geom.core.vector.yxy,thi.ng.geom.core.vector.yyy,thi.ng.geom.core.vector.zyy]);
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$core$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__4421__auto__ = (function (){var and__4941__auto__ = ((1) === c);
if(and__4941__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__4941__auto__;
}
})();
if(cljs.core.truth_(temp__4421__auto__)){
var idx = temp__4421__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__4421__auto____$1 = keymap.call(null,cljs.core.first.call(null,n__$1));
if(cljs.core.truth_(temp__4421__auto____$1)){
var idx = temp__4421__auto____$1;
(dest[(idx | (0))] = v.call(null,i));

var G__16963 = (i + (1));
var G__16964 = cljs.core.next.call(null,n__$1);
i = G__16963;
n__$1 = G__16964;
continue;
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
}
});
thi.ng.geom.core.vector.vec2_reduce_STAR_ = (function thi$ng$geom$core$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__16965 = null;
var G__16965__1 = (function (a){
return a;
});
var G__16965__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__16965 = function(a,b){
switch(arguments.length){
case 1:
return G__16965__1.call(this,a);
case 2:
return G__16965__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16965.cljs$core$IFn$_invoke$arity$1 = G__16965__1;
G__16965.cljs$core$IFn$_invoke$arity$2 = G__16965__2;
return G__16965;
})()
,acc,xs);
});
thi.ng.geom.core.vector.vec3_reduce_STAR_ = (function thi$ng$geom$core$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__16966 = null;
var G__16966__1 = (function (a){
return a;
});
var G__16966__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__16966 = function(a,b){
switch(arguments.length){
case 1:
return G__16966__1.call(this,a);
case 2:
return G__16966__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16966.cljs$core$IFn$_invoke$arity$1 = G__16966__1;
G__16966.cljs$core$IFn$_invoke$arity$2 = G__16966__2;
return G__16966;
})()
,acc,xs);
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.core.vector.vec2 = (function thi$ng$geom$core$vector$vec2(){
var G__16968 = arguments.length;
switch (G__16968) {
case 0:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V2;
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2.call(null,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.common.error.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,null));
});

thi.ng.geom.core.vector.vec2.cljs$lang$maxFixedArity = 2;
thi.ng.geom.core.vector.vec3 = (function thi$ng$geom$core$vector$vec3(){
var G__16971 = arguments.length;
switch (G__16971) {
case 0:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V3;
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.call(null,v,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.common.error.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.call(null,v,z,(0));
} else {
return thi.ng.common.error.type_error_BANG_.call(null,"Vec3",v);

}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,null));
});

thi.ng.geom.core.vector.vec3.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.vector.vec2_with_meta = (function thi$ng$geom$core$vector$vec2_with_meta(){
var G__16974 = arguments.length;
switch (G__16974) {
case 2:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.common.error.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,meta));
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.vector.vec3_with_meta = (function thi$ng$geom$core$vector$vec3_with_meta(){
var G__16977 = arguments.length;
switch (G__16977) {
case 2:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.common.error.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,meta));
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.vector.vec2_QMARK_ = (function thi$ng$geom$core$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec2);
});
thi.ng.geom.core.vector.vec3_QMARK_ = (function thi$ng$geom$core$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec3);
});
thi.ng.geom.core.vector.V2X = thi.ng.geom.core.vector.vec2.call(null,(1),(0));
thi.ng.geom.core.vector.V2Y = thi.ng.geom.core.vector.vec2.call(null,(0),(1));
thi.ng.geom.core.vector.V3X = thi.ng.geom.core.vector.vec3.call(null,(1),(0),(0));
thi.ng.geom.core.vector.V3Y = thi.ng.geom.core.vector.vec3.call(null,(0),(1),(0));
thi.ng.geom.core.vector.V3Z = thi.ng.geom.core.vector.vec3.call(null,(0),(0),(1));
thi.ng.geom.core.vector.V2INF_ = thi.ng.geom.core.vector.vec2.call(null,thi.ng.common.math.core.INF_);
thi.ng.geom.core.vector.V2INF_PLUS_ = thi.ng.geom.core.vector.vec2.call(null,thi.ng.common.math.core.INF_PLUS_);
thi.ng.geom.core.vector.V3INF_ = thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.INF_);
thi.ng.geom.core.vector.V3INF_PLUS_ = thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.INF_PLUS_);
thi.ng.geom.core.vector.randvec2 = (function thi$ng$geom$core$vector$randvec2(){
var G__16980 = arguments.length;
switch (G__16980) {
case 0:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null)));
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null)),n);
});

thi.ng.geom.core.vector.randvec2.cljs$lang$maxFixedArity = 1;
thi.ng.geom.core.vector.randvec3 = (function thi$ng$geom$core$vector$randvec3(){
var G__16983 = arguments.length;
switch (G__16983) {
case 0:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null)));
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null)),n);
});

thi.ng.geom.core.vector.randvec3.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=vector.js.map