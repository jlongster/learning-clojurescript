// Compiled by ClojureScript 0.0-3291 {}
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
var G__15229 = self__.buf;
var G__15230 = (G__15229[(0)]);
var G__15231 = (G__15229[(1)]);
(b[(0)] = ((G__15230 * c) - (G__15231 * s)));

(b[(1)] = ((G__15230 * s) + (G__15231 * c)));

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
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
var G__15232 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15233 = v.buf;
return (((G__15232[(0)]) * (G__15233[(0)])) + ((G__15232[(1)]) * (G__15233[(1)])));
} else {
return (((G__15232[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__15232[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15234 = self__.buf;
var G__15235 = (G__15234[(0)]);
var G__15236 = (G__15234[(1)]);
var l = Math.sqrt(((G__15235 * G__15235) + (G__15236 * G__15236)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__15235 / l));

(b[(1)] = (G__15236 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__15237 = self__.buf;
var G__15238 = (G__15237[(0)]);
var G__15239 = (G__15237[(1)]);
var l = Math.sqrt(((G__15238 * G__15238) + (G__15239 * G__15239)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__15238 * l__$1));

(b[(1)] = (G__15239 * l__$1));

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
var G__15240 = self__.buf;
var G__15242 = (G__15240[(0)]);
var G__15243 = (G__15240[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15241 = v.buf;
var G__15244 = (G__15241[(0)]);
var G__15245 = (G__15241[(1)]);
var d = (((G__15242 * G__15244) + (G__15243 * G__15245)) + (2));
(b[(0)] = ((G__15244 * d) - G__15242));

(b[(1)] = ((G__15245 * d) - G__15243));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__15244 = cljs.core.nth.call(null,v,(0),0.0);
var G__15245 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__15242 * G__15244) + (G__15243 * G__15245)) + (2));
(b[(0)] = ((G__15244 * d) - G__15242));

(b[(1)] = ((G__15245 * d) - G__15243));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15246 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15247 = v.buf;
return (((G__15246[(0)]) * (G__15247[(1)])) - ((G__15246[(1)]) * (G__15247[(0)])));
} else {
return (((G__15246[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__15246[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
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
var G__15251_15578 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15252_15579 = v.buf;
(self__.buf[(0)] = ((G__15251_15578[(0)]) - (G__15252_15579[(0)])));

(self__.buf[(1)] = ((G__15251_15578[(1)]) - (G__15252_15579[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15251_15578[(0)]) - v));

(self__.buf[(1)] = ((G__15251_15578[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15251_15578[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15251_15578[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15260_15580 = typeof v1 === 'number';
var G__15261_15581 = typeof v2 === 'number';
if(((G__15260_15580)?G__15261_15581:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__15262_15582 = ((!(G__15260_15580))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15263_15583 = ((!(G__15261_15581))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15254_15584 = (cljs.core.truth_(G__15262_15582)?v1.buf:null);
var G__15255_15585 = (cljs.core.truth_(G__15263_15583)?v2.buf:null);
var G__15256_15586 = (cljs.core.truth_(G__15262_15582)?(G__15254_15584[(0)]):((G__15260_15580)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15257_15587 = (cljs.core.truth_(G__15262_15582)?(G__15254_15584[(1)]):((G__15260_15580)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15258_15588 = (cljs.core.truth_(G__15263_15583)?(G__15255_15585[(0)]):((G__15261_15581)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15259_15589 = (cljs.core.truth_(G__15263_15583)?(G__15255_15585[(1)]):((G__15261_15581)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__15256_15586) - G__15258_15588));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__15257_15587) - G__15259_15589));
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
var G__15264_15590 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15265_15591 = v.buf;
(self__.buf[(0)] = ((G__15264_15590[(0)]) * (G__15265_15591[(0)])));

(self__.buf[(1)] = ((G__15264_15590[(1)]) * (G__15265_15591[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15264_15590[(0)]) * v));

(self__.buf[(1)] = ((G__15264_15590[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15264_15590[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15264_15590[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15273_15592 = typeof v1 === 'number';
var G__15274_15593 = typeof v2 === 'number';
if(((G__15273_15592)?G__15274_15593:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__15275_15594 = ((!(G__15273_15592))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15276_15595 = ((!(G__15274_15593))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15267_15596 = (cljs.core.truth_(G__15275_15594)?v1.buf:null);
var G__15268_15597 = (cljs.core.truth_(G__15276_15595)?v2.buf:null);
var G__15269_15598 = (cljs.core.truth_(G__15275_15594)?(G__15267_15596[(0)]):((G__15273_15592)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15270_15599 = (cljs.core.truth_(G__15275_15594)?(G__15267_15596[(1)]):((G__15273_15592)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15271_15600 = (cljs.core.truth_(G__15276_15595)?(G__15268_15597[(0)]):((G__15274_15593)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15272_15601 = (cljs.core.truth_(G__15276_15595)?(G__15268_15597[(1)]):((G__15274_15593)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__15269_15598) * G__15271_15600));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__15270_15599) * G__15272_15601));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15286_15602 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15287_15603 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15288_15604 = ((!(G__15286_15602))?typeof a === 'number':null);
var G__15289_15605 = ((!(G__15287_15603))?typeof b === 'number':null);
var G__15277_15606 = self__.buf;
var G__15278_15607 = ((G__15286_15602)?a.buf:null);
var G__15279_15608 = ((G__15287_15603)?b.buf:null);
var G__15280_15609 = (G__15277_15606[(0)]);
var G__15281_15610 = (G__15277_15606[(1)]);
var G__15282_15611 = ((G__15286_15602)?(G__15278_15607[(0)]):(cljs.core.truth_(G__15288_15604)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15283_15612 = ((G__15286_15602)?(G__15278_15607[(1)]):(cljs.core.truth_(G__15288_15604)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15284_15613 = ((G__15287_15603)?(G__15279_15608[(0)]):(cljs.core.truth_(G__15289_15605)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15285_15614 = ((G__15287_15603)?(G__15279_15608[(1)]):(cljs.core.truth_(G__15289_15605)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__15280_15609 - G__15282_15611) * G__15284_15613));

(self__.buf[(1)] = ((G__15281_15610 - G__15283_15612) * G__15285_15614));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15299_15615 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15300_15616 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15301_15617 = ((!(G__15299_15615))?typeof a === 'number':null);
var G__15302_15618 = ((!(G__15300_15616))?typeof b === 'number':null);
var G__15290_15619 = self__.buf;
var G__15291_15620 = ((G__15299_15615)?a.buf:null);
var G__15292_15621 = ((G__15300_15616)?b.buf:null);
var G__15293_15622 = (G__15290_15619[(0)]);
var G__15294_15623 = (G__15290_15619[(1)]);
var G__15295_15624 = ((G__15299_15615)?(G__15291_15620[(0)]):(cljs.core.truth_(G__15301_15617)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15296_15625 = ((G__15299_15615)?(G__15291_15620[(1)]):(cljs.core.truth_(G__15301_15617)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15297_15626 = ((G__15300_15616)?(G__15292_15621[(0)]):(cljs.core.truth_(G__15302_15618)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15298_15627 = ((G__15300_15616)?(G__15292_15621[(1)]):(cljs.core.truth_(G__15302_15618)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__15293_15622 * G__15295_15624) - G__15297_15626));

(self__.buf[(1)] = ((G__15294_15623 * G__15296_15625) - G__15298_15627));

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
var G__15312_15628 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15313_15629 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15314_15630 = ((!(G__15312_15628))?typeof a === 'number':null);
var G__15315_15631 = ((!(G__15313_15629))?typeof b === 'number':null);
var G__15303_15632 = self__.buf;
var G__15304_15633 = ((G__15312_15628)?a.buf:null);
var G__15305_15634 = ((G__15313_15629)?b.buf:null);
var G__15306_15635 = (G__15303_15632[(0)]);
var G__15307_15636 = (G__15303_15632[(1)]);
var G__15308_15637 = ((G__15312_15628)?(G__15304_15633[(0)]):(cljs.core.truth_(G__15314_15630)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15309_15638 = ((G__15312_15628)?(G__15304_15633[(1)]):(cljs.core.truth_(G__15314_15630)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15310_15639 = ((G__15313_15629)?(G__15305_15634[(0)]):(cljs.core.truth_(G__15315_15631)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15311_15640 = ((G__15313_15629)?(G__15305_15634[(1)]):(cljs.core.truth_(G__15315_15631)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__15306_15635 * G__15308_15637) + G__15310_15639));

(self__.buf[(1)] = ((G__15307_15636 * G__15309_15638) + G__15311_15640));

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
var G__15316_15641 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15317_15642 = v.buf;
(self__.buf[(0)] = ((G__15316_15641[(0)]) / (G__15317_15642[(0)])));

(self__.buf[(1)] = ((G__15316_15641[(1)]) / (G__15317_15642[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15316_15641[(0)]) / v));

(self__.buf[(1)] = ((G__15316_15641[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15316_15641[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15316_15641[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15325_15643 = typeof v1 === 'number';
var G__15326_15644 = typeof v2 === 'number';
if(((G__15325_15643)?G__15326_15644:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__15327_15645 = ((!(G__15325_15643))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15328_15646 = ((!(G__15326_15644))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15319_15647 = (cljs.core.truth_(G__15327_15645)?v1.buf:null);
var G__15320_15648 = (cljs.core.truth_(G__15328_15646)?v2.buf:null);
var G__15321_15649 = (cljs.core.truth_(G__15327_15645)?(G__15319_15647[(0)]):((G__15325_15643)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15322_15650 = (cljs.core.truth_(G__15327_15645)?(G__15319_15647[(1)]):((G__15325_15643)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15323_15651 = (cljs.core.truth_(G__15328_15646)?(G__15320_15648[(0)]):((G__15326_15644)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15324_15652 = (cljs.core.truth_(G__15328_15646)?(G__15320_15648[(1)]):((G__15326_15644)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__15321_15649) / G__15323_15651));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__15322_15650) / G__15324_15652));
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
var G__15329_15653 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15330_15654 = v.buf;
(self__.buf[(0)] = ((G__15329_15653[(0)]) + (G__15330_15654[(0)])));

(self__.buf[(1)] = ((G__15329_15653[(1)]) + (G__15330_15654[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15329_15653[(0)]) + v));

(self__.buf[(1)] = ((G__15329_15653[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15329_15653[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15329_15653[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15338_15655 = typeof v1 === 'number';
var G__15339_15656 = typeof v2 === 'number';
if(((G__15338_15655)?G__15339_15656:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__15340_15657 = ((!(G__15338_15655))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15341_15658 = ((!(G__15339_15656))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15332_15659 = (cljs.core.truth_(G__15340_15657)?v1.buf:null);
var G__15333_15660 = (cljs.core.truth_(G__15341_15658)?v2.buf:null);
var G__15334_15661 = (cljs.core.truth_(G__15340_15657)?(G__15332_15659[(0)]):((G__15338_15655)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15335_15662 = (cljs.core.truth_(G__15340_15657)?(G__15332_15659[(1)]):((G__15338_15655)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15336_15663 = (cljs.core.truth_(G__15341_15658)?(G__15333_15660[(0)]):((G__15339_15656)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15337_15664 = (cljs.core.truth_(G__15341_15658)?(G__15333_15660[(1)]):((G__15339_15656)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__15334_15661) + G__15336_15663));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__15335_15662) + G__15337_15664));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15351_15665 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15352_15666 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15353_15667 = ((!(G__15351_15665))?typeof a === 'number':null);
var G__15354_15668 = ((!(G__15352_15666))?typeof b === 'number':null);
var G__15342_15669 = self__.buf;
var G__15343_15670 = ((G__15351_15665)?a.buf:null);
var G__15344_15671 = ((G__15352_15666)?b.buf:null);
var G__15345_15672 = (G__15342_15669[(0)]);
var G__15346_15673 = (G__15342_15669[(1)]);
var G__15347_15674 = ((G__15351_15665)?(G__15343_15670[(0)]):(cljs.core.truth_(G__15353_15667)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15348_15675 = ((G__15351_15665)?(G__15343_15670[(1)]):(cljs.core.truth_(G__15353_15667)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15349_15676 = ((G__15352_15666)?(G__15344_15671[(0)]):(cljs.core.truth_(G__15354_15668)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15350_15677 = ((G__15352_15666)?(G__15344_15671[(1)]):(cljs.core.truth_(G__15354_15668)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__15345_15672 + G__15347_15674) * G__15349_15676));

(self__.buf[(1)] = ((G__15346_15673 + G__15348_15675) * G__15350_15677));

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
var or__4950__auto__ = self__._hash;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
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
var G__15355 = self__.buf;
var G__15357 = (G__15355[(0)]);
var G__15358 = (G__15355[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15356 = v.buf;
var G__15359 = (G__15356[(0)]);
var G__15360 = (G__15356[(1)]);
var dx = (G__15357 - G__15359);
var dy = (G__15358 - G__15360);
return ((dx * dx) + (dy * dy));
} else {
var G__15359 = cljs.core.nth.call(null,v,(0),0.0);
var G__15360 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__15357 - G__15359);
var dy = (G__15358 - G__15360);
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
var dest__11126__auto__ = (new Float32Array((2)));
var G__15370_15678 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15371_15679 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15372_15680 = ((!(G__15370_15678))?typeof a === 'number':null);
var G__15373_15681 = ((!(G__15371_15679))?typeof b === 'number':null);
var G__15361_15682 = self__.buf;
var G__15362_15683 = ((G__15370_15678)?a.buf:null);
var G__15363_15684 = ((G__15371_15679)?b.buf:null);
var G__15364_15685 = (G__15361_15682[(0)]);
var G__15365_15686 = (G__15361_15682[(1)]);
var G__15366_15687 = ((G__15370_15678)?(G__15362_15683[(0)]):(cljs.core.truth_(G__15372_15680)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15367_15688 = ((G__15370_15678)?(G__15362_15683[(1)]):(cljs.core.truth_(G__15372_15680)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15368_15689 = ((G__15371_15679)?(G__15363_15684[(0)]):(cljs.core.truth_(G__15373_15681)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15369_15690 = ((G__15371_15679)?(G__15363_15684[(1)]):(cljs.core.truth_(G__15373_15681)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__11126__auto__[(0)] = ((G__15364_15685 * G__15366_15687) - G__15368_15689));

(dest__11126__auto__[(1)] = ((G__15365_15686 * G__15367_15688) - G__15369_15690));

return (new thi.ng.geom.core.vector.Vec2(dest__11126__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11115__auto__ = (new Float32Array((2)));
var G__15374_15691 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15375_15692 = v.buf;
(dest__11115__auto__[(0)] = ((G__15374_15691[(0)]) * (G__15375_15692[(0)])));

(dest__11115__auto__[(1)] = ((G__15374_15691[(1)]) * (G__15375_15692[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15374_15691[(0)]) * v));

(dest__11115__auto__[(1)] = ((G__15374_15691[(1)]) * v));
} else {
(dest__11115__auto__[(0)] = ((G__15374_15691[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15374_15691[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15376 = self__.buf;
var G__15379 = (new Float32Array((2)));
var G__15380 = (G__15376[(0)]);
var G__15381 = (G__15376[(1)]);
var G__15386 = typeof v1 === 'number';
var G__15387 = typeof v2 === 'number';
if(((G__15386)?G__15387:false)){
(G__15379[(0)] = (G__15380 * v1));

(G__15379[(1)] = (G__15381 * v2));
} else {
var G__15388_15693 = ((!(G__15386))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15389_15694 = ((!(G__15387))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15377_15695 = (cljs.core.truth_(G__15388_15693)?v1.buf:null);
var G__15378_15696 = (cljs.core.truth_(G__15389_15694)?v2.buf:null);
var G__15382_15697 = (cljs.core.truth_(G__15388_15693)?(G__15377_15695[(0)]):((G__15386)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__15383_15698 = (cljs.core.truth_(G__15388_15693)?(G__15377_15695[(1)]):((G__15386)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__15384_15699 = (cljs.core.truth_(G__15389_15694)?(G__15378_15696[(0)]):((G__15387)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__15385_15700 = (cljs.core.truth_(G__15389_15694)?(G__15378_15696[(1)]):((G__15387)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__15379[(0)] = ((G__15380 * G__15382_15697) * G__15384_15699));

(G__15379[(1)] = ((G__15381 * G__15383_15698) * G__15385_15700));
}

return (new thi.ng.geom.core.vector.Vec2(G__15379,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11089__auto__ = (new Float32Array((2)));
var G__15390_15701 = self__.buf;
(dest__11089__auto__[(0)] = (- (G__15390_15701[(0)])));

(dest__11089__auto__[(1)] = (- (G__15390_15701[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__11089__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11115__auto__ = (new Float32Array((2)));
var G__15391_15702 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15392_15703 = v.buf;
(dest__11115__auto__[(0)] = ((G__15391_15702[(0)]) - (G__15392_15703[(0)])));

(dest__11115__auto__[(1)] = ((G__15391_15702[(1)]) - (G__15392_15703[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15391_15702[(0)]) - v));

(dest__11115__auto__[(1)] = ((G__15391_15702[(1)]) - v));
} else {
(dest__11115__auto__[(0)] = ((G__15391_15702[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15391_15702[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15393 = self__.buf;
var G__15396 = (new Float32Array((2)));
var G__15397 = (G__15393[(0)]);
var G__15398 = (G__15393[(1)]);
var G__15403 = typeof v1 === 'number';
var G__15404 = typeof v2 === 'number';
if(((G__15403)?G__15404:false)){
(G__15396[(0)] = (G__15397 - v1));

(G__15396[(1)] = (G__15398 - v2));
} else {
var G__15405_15704 = ((!(G__15403))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15406_15705 = ((!(G__15404))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15394_15706 = (cljs.core.truth_(G__15405_15704)?v1.buf:null);
var G__15395_15707 = (cljs.core.truth_(G__15406_15705)?v2.buf:null);
var G__15399_15708 = (cljs.core.truth_(G__15405_15704)?(G__15394_15706[(0)]):((G__15403)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15400_15709 = (cljs.core.truth_(G__15405_15704)?(G__15394_15706[(1)]):((G__15403)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15401_15710 = (cljs.core.truth_(G__15406_15705)?(G__15395_15707[(0)]):((G__15404)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15402_15711 = (cljs.core.truth_(G__15406_15705)?(G__15395_15707[(1)]):((G__15404)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15396[(0)] = ((G__15397 - G__15399_15708) - G__15401_15710));

(G__15396[(1)] = ((G__15398 - G__15400_15709) - G__15402_15711));
}

return (new thi.ng.geom.core.vector.Vec2(G__15396,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11126__auto__ = (new Float32Array((2)));
var G__15416_15712 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15417_15713 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15418_15714 = ((!(G__15416_15712))?typeof a === 'number':null);
var G__15419_15715 = ((!(G__15417_15713))?typeof b === 'number':null);
var G__15407_15716 = self__.buf;
var G__15408_15717 = ((G__15416_15712)?a.buf:null);
var G__15409_15718 = ((G__15417_15713)?b.buf:null);
var G__15410_15719 = (G__15407_15716[(0)]);
var G__15411_15720 = (G__15407_15716[(1)]);
var G__15412_15721 = ((G__15416_15712)?(G__15408_15717[(0)]):(cljs.core.truth_(G__15418_15714)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15413_15722 = ((G__15416_15712)?(G__15408_15717[(1)]):(cljs.core.truth_(G__15418_15714)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15414_15723 = ((G__15417_15713)?(G__15409_15718[(0)]):(cljs.core.truth_(G__15419_15715)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15415_15724 = ((G__15417_15713)?(G__15409_15718[(1)]):(cljs.core.truth_(G__15419_15715)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__11126__auto__[(0)] = ((G__15410_15719 * G__15412_15721) + G__15414_15723));

(dest__11126__auto__[(1)] = ((G__15411_15720 * G__15413_15722) + G__15415_15724));

return (new thi.ng.geom.core.vector.Vec2(dest__11126__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11126__auto__ = (new Float32Array((2)));
var G__15429_15725 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15430_15726 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15431_15727 = ((!(G__15429_15725))?typeof a === 'number':null);
var G__15432_15728 = ((!(G__15430_15726))?typeof b === 'number':null);
var G__15420_15729 = self__.buf;
var G__15421_15730 = ((G__15429_15725)?a.buf:null);
var G__15422_15731 = ((G__15430_15726)?b.buf:null);
var G__15423_15732 = (G__15420_15729[(0)]);
var G__15424_15733 = (G__15420_15729[(1)]);
var G__15425_15734 = ((G__15429_15725)?(G__15421_15730[(0)]):(cljs.core.truth_(G__15431_15727)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15426_15735 = ((G__15429_15725)?(G__15421_15730[(1)]):(cljs.core.truth_(G__15431_15727)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15427_15736 = ((G__15430_15726)?(G__15422_15731[(0)]):(cljs.core.truth_(G__15432_15728)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15428_15737 = ((G__15430_15726)?(G__15422_15731[(1)]):(cljs.core.truth_(G__15432_15728)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__11126__auto__[(0)] = ((G__15423_15732 + G__15425_15734) * G__15427_15736));

(dest__11126__auto__[(1)] = ((G__15424_15733 + G__15426_15735) * G__15428_15737));

return (new thi.ng.geom.core.vector.Vec2(dest__11126__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11089__auto__ = (new Float32Array((2)));
var G__15433_15738 = self__.buf;
(dest__11089__auto__[(0)] = ((1) / (G__15433_15738[(0)])));

(dest__11089__auto__[(1)] = ((1) / (G__15433_15738[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__11089__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11115__auto__ = (new Float32Array((2)));
var G__15434_15739 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15435_15740 = v.buf;
(dest__11115__auto__[(0)] = ((G__15434_15739[(0)]) / (G__15435_15740[(0)])));

(dest__11115__auto__[(1)] = ((G__15434_15739[(1)]) / (G__15435_15740[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15434_15739[(0)]) / v));

(dest__11115__auto__[(1)] = ((G__15434_15739[(1)]) / v));
} else {
(dest__11115__auto__[(0)] = ((G__15434_15739[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15434_15739[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15436 = self__.buf;
var G__15439 = (new Float32Array((2)));
var G__15440 = (G__15436[(0)]);
var G__15441 = (G__15436[(1)]);
var G__15446 = typeof v1 === 'number';
var G__15447 = typeof v2 === 'number';
if(((G__15446)?G__15447:false)){
(G__15439[(0)] = (G__15440 / v1));

(G__15439[(1)] = (G__15441 / v2));
} else {
var G__15448_15741 = ((!(G__15446))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15449_15742 = ((!(G__15447))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15437_15743 = (cljs.core.truth_(G__15448_15741)?v1.buf:null);
var G__15438_15744 = (cljs.core.truth_(G__15449_15742)?v2.buf:null);
var G__15442_15745 = (cljs.core.truth_(G__15448_15741)?(G__15437_15743[(0)]):((G__15446)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15443_15746 = (cljs.core.truth_(G__15448_15741)?(G__15437_15743[(1)]):((G__15446)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15444_15747 = (cljs.core.truth_(G__15449_15742)?(G__15438_15744[(0)]):((G__15447)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15445_15748 = (cljs.core.truth_(G__15449_15742)?(G__15438_15744[(1)]):((G__15447)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15439[(0)] = ((G__15440 / G__15442_15745) / G__15444_15747));

(G__15439[(1)] = ((G__15441 / G__15443_15746) / G__15445_15748));
}

return (new thi.ng.geom.core.vector.Vec2(G__15439,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11115__auto__ = (new Float32Array((2)));
var G__15450_15749 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15451_15750 = v.buf;
(dest__11115__auto__[(0)] = ((G__15450_15749[(0)]) + (G__15451_15750[(0)])));

(dest__11115__auto__[(1)] = ((G__15450_15749[(1)]) + (G__15451_15750[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15450_15749[(0)]) + v));

(dest__11115__auto__[(1)] = ((G__15450_15749[(1)]) + v));
} else {
(dest__11115__auto__[(0)] = ((G__15450_15749[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15450_15749[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15452 = self__.buf;
var G__15455 = (new Float32Array((2)));
var G__15456 = (G__15452[(0)]);
var G__15457 = (G__15452[(1)]);
var G__15462 = typeof v1 === 'number';
var G__15463 = typeof v2 === 'number';
if(((G__15462)?G__15463:false)){
(G__15455[(0)] = (G__15456 + v1));

(G__15455[(1)] = (G__15457 + v2));
} else {
var G__15464_15751 = ((!(G__15462))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15465_15752 = ((!(G__15463))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15453_15753 = (cljs.core.truth_(G__15464_15751)?v1.buf:null);
var G__15454_15754 = (cljs.core.truth_(G__15465_15752)?v2.buf:null);
var G__15458_15755 = (cljs.core.truth_(G__15464_15751)?(G__15453_15753[(0)]):((G__15462)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15459_15756 = (cljs.core.truth_(G__15464_15751)?(G__15453_15753[(1)]):((G__15462)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15460_15757 = (cljs.core.truth_(G__15465_15752)?(G__15454_15754[(0)]):((G__15463)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15461_15758 = (cljs.core.truth_(G__15465_15752)?(G__15454_15754[(1)]):((G__15463)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15455[(0)] = ((G__15456 + G__15458_15755) + G__15460_15757));

(G__15455[(1)] = ((G__15457 + G__15459_15756) + G__15461_15758));
}

return (new thi.ng.geom.core.vector.Vec2(G__15455,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11089__auto__ = (new Float32Array((2)));
var G__15466_15759 = self__.buf;
(dest__11089__auto__[(0)] = thi.ng.common.math.core.abs.call(null,(G__15466_15759[(0)])));

(dest__11089__auto__[(1)] = thi.ng.common.math.core.abs.call(null,(G__15466_15759[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__11089__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11126__auto__ = (new Float32Array((2)));
var G__15476_15760 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15477_15761 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15478_15762 = ((!(G__15476_15760))?typeof a === 'number':null);
var G__15479_15763 = ((!(G__15477_15761))?typeof b === 'number':null);
var G__15467_15764 = self__.buf;
var G__15468_15765 = ((G__15476_15760)?a.buf:null);
var G__15469_15766 = ((G__15477_15761)?b.buf:null);
var G__15470_15767 = (G__15467_15764[(0)]);
var G__15471_15768 = (G__15467_15764[(1)]);
var G__15472_15769 = ((G__15476_15760)?(G__15468_15765[(0)]):(cljs.core.truth_(G__15478_15762)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15473_15770 = ((G__15476_15760)?(G__15468_15765[(1)]):(cljs.core.truth_(G__15478_15762)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15474_15771 = ((G__15477_15761)?(G__15469_15766[(0)]):(cljs.core.truth_(G__15479_15763)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15475_15772 = ((G__15477_15761)?(G__15469_15766[(1)]):(cljs.core.truth_(G__15479_15763)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__11126__auto__[(0)] = ((G__15470_15767 - G__15472_15769) * G__15474_15771));

(dest__11126__auto__[(1)] = ((G__15471_15768 - G__15473_15770) * G__15475_15772));

return (new thi.ng.geom.core.vector.Vec2(dest__11126__auto__,null,self__._meta));
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
var dest__11115__auto__ = (new Float32Array((2)));
var G__15480_15773 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15481_15774 = v.buf;
(dest__11115__auto__[(0)] = ((G__15480_15773[(0)]) + (G__15481_15774[(0)])));

(dest__11115__auto__[(1)] = ((G__15480_15773[(1)]) + (G__15481_15774[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15480_15773[(0)]) + v));

(dest__11115__auto__[(1)] = ((G__15480_15773[(1)]) + v));
} else {
(dest__11115__auto__[(0)] = ((G__15480_15773[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15480_15773[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15482 = self__.buf;
var G__15485 = (new Float32Array((2)));
var G__15486 = (G__15482[(0)]);
var G__15487 = (G__15482[(1)]);
var G__15492 = typeof v1 === 'number';
var G__15493 = typeof v2 === 'number';
if(((G__15492)?G__15493:false)){
(G__15485[(0)] = (G__15486 + v1));

(G__15485[(1)] = (G__15487 + v2));
} else {
var G__15494_15775 = ((!(G__15492))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15495_15776 = ((!(G__15493))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15483_15777 = (cljs.core.truth_(G__15494_15775)?v1.buf:null);
var G__15484_15778 = (cljs.core.truth_(G__15495_15776)?v2.buf:null);
var G__15488_15779 = (cljs.core.truth_(G__15494_15775)?(G__15483_15777[(0)]):((G__15492)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15489_15780 = (cljs.core.truth_(G__15494_15775)?(G__15483_15777[(1)]):((G__15492)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15490_15781 = (cljs.core.truth_(G__15495_15776)?(G__15484_15778[(0)]):((G__15493)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15491_15782 = (cljs.core.truth_(G__15495_15776)?(G__15484_15778[(1)]):((G__15493)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15485[(0)] = ((G__15486 + G__15488_15779) + G__15490_15781));

(G__15485[(1)] = ((G__15487 + G__15489_15780) + G__15491_15782));
}

return (new thi.ng.geom.core.vector.Vec2(G__15485,null,self__._meta));
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
var dest__11115__auto__ = (new Float32Array((2)));
var G__15496_15783 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15497_15784 = v.buf;
(dest__11115__auto__[(0)] = ((G__15496_15783[(0)]) * (G__15497_15784[(0)])));

(dest__11115__auto__[(1)] = ((G__15496_15783[(1)]) * (G__15497_15784[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15496_15783[(0)]) * v));

(dest__11115__auto__[(1)] = ((G__15496_15783[(1)]) * v));
} else {
(dest__11115__auto__[(0)] = ((G__15496_15783[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15496_15783[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15498 = self__.buf;
var G__15501 = (new Float32Array((2)));
var G__15502 = (G__15498[(0)]);
var G__15503 = (G__15498[(1)]);
var G__15508 = typeof v1 === 'number';
var G__15509 = typeof v2 === 'number';
if(((G__15508)?G__15509:false)){
(G__15501[(0)] = (G__15502 * v1));

(G__15501[(1)] = (G__15503 * v2));
} else {
var G__15510_15785 = ((!(G__15508))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15511_15786 = ((!(G__15509))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15499_15787 = (cljs.core.truth_(G__15510_15785)?v1.buf:null);
var G__15500_15788 = (cljs.core.truth_(G__15511_15786)?v2.buf:null);
var G__15504_15789 = (cljs.core.truth_(G__15510_15785)?(G__15499_15787[(0)]):((G__15508)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__15505_15790 = (cljs.core.truth_(G__15510_15785)?(G__15499_15787[(1)]):((G__15508)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__15506_15791 = (cljs.core.truth_(G__15511_15786)?(G__15500_15788[(0)]):((G__15509)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__15507_15792 = (cljs.core.truth_(G__15511_15786)?(G__15500_15788[(1)]):((G__15509)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__15501[(0)] = ((G__15502 * G__15504_15789) * G__15506_15791));

(G__15501[(1)] = ((G__15503 * G__15505_15790) * G__15507_15792));
}

return (new thi.ng.geom.core.vector.Vec2(G__15501,null,self__._meta));
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
var G__15793 = null;
var G__15793__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
var G__15793__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
G__15793 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__15793__2.call(this,self__,k);
case 3:
return G__15793__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15793.cljs$core$IFn$_invoke$arity$2 = G__15793__2;
G__15793.cljs$core$IFn$_invoke$arity$3 = G__15793__3;
return G__15793;
})()
;

thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args15228){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15228)));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
var dest__11115__auto__ = (new Float32Array((2)));
var G__15512_15794 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15513_15795 = v.buf;
(dest__11115__auto__[(0)] = (function (){var a__10846__auto__ = (G__15512_15794[(0)]);
var b__10847__auto__ = (G__15513_15795[(0)]);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10846__auto__ = (G__15512_15794[(1)]);
var b__10847__auto__ = (G__15513_15795[(1)]);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = (function (){var a__10846__auto__ = (G__15512_15794[(0)]);
var b__10847__auto__ = v;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10846__auto__ = (G__15512_15794[(1)]);
var b__10847__auto__ = v;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());
} else {
(dest__11115__auto__[(0)] = (function (){var a__10846__auto__ = (G__15512_15794[(0)]);
var b__10847__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10846__auto__ = (G__15512_15794[(1)]);
var b__10847__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__11126__auto__ = (new Float32Array((2)));
var G__15523_15796 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__15524_15797 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__15525_15798 = ((!(G__15523_15796))?typeof v === 'number':null);
var G__15526_15799 = ((!(G__15524_15797))?typeof v2 === 'number':null);
var G__15514_15800 = self__.buf;
var G__15515_15801 = ((G__15523_15796)?v.buf:null);
var G__15516_15802 = ((G__15524_15797)?v2.buf:null);
var G__15517_15803 = (G__15514_15800[(0)]);
var G__15518_15804 = (G__15514_15800[(1)]);
var G__15519_15805 = ((G__15523_15796)?(G__15515_15801[(0)]):(cljs.core.truth_(G__15525_15798)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__15520_15806 = ((G__15523_15796)?(G__15515_15801[(1)]):(cljs.core.truth_(G__15525_15798)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__15521_15807 = ((G__15524_15797)?(G__15516_15802[(0)]):(cljs.core.truth_(G__15526_15799)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15522_15808 = ((G__15524_15797)?(G__15516_15802[(1)]):(cljs.core.truth_(G__15526_15799)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__11126__auto__[(0)] = (function (){var a__10846__auto__ = (function (){var a__10846__auto__ = G__15517_15803;
var b__10847__auto__ = G__15519_15805;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})();
var b__10847__auto__ = G__15521_15807;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11126__auto__[(1)] = (function (){var a__10846__auto__ = (function (){var a__10846__auto__ = G__15518_15804;
var b__10847__auto__ = G__15520_15806;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})();
var b__10847__auto__ = G__15522_15808;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__11126__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11115__auto__ = (new Float32Array((2)));
var G__15527_15809 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15528_15810 = v.buf;
(dest__11115__auto__[(0)] = (function (){var a__10853__auto__ = (G__15527_15809[(0)]);
var b__10854__auto__ = (G__15528_15810[(0)]);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10853__auto__ = (G__15527_15809[(1)]);
var b__10854__auto__ = (G__15528_15810[(1)]);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = (function (){var a__10853__auto__ = (G__15527_15809[(0)]);
var b__10854__auto__ = v;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10853__auto__ = (G__15527_15809[(1)]);
var b__10854__auto__ = v;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());
} else {
(dest__11115__auto__[(0)] = (function (){var a__10853__auto__ = (G__15527_15809[(0)]);
var b__10854__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10853__auto__ = (G__15527_15809[(1)]);
var b__10854__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__11126__auto__ = (new Float32Array((2)));
var G__15538_15811 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__15539_15812 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__15540_15813 = ((!(G__15538_15811))?typeof v === 'number':null);
var G__15541_15814 = ((!(G__15539_15812))?typeof v2 === 'number':null);
var G__15529_15815 = self__.buf;
var G__15530_15816 = ((G__15538_15811)?v.buf:null);
var G__15531_15817 = ((G__15539_15812)?v2.buf:null);
var G__15532_15818 = (G__15529_15815[(0)]);
var G__15533_15819 = (G__15529_15815[(1)]);
var G__15534_15820 = ((G__15538_15811)?(G__15530_15816[(0)]):(cljs.core.truth_(G__15540_15813)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__15535_15821 = ((G__15538_15811)?(G__15530_15816[(1)]):(cljs.core.truth_(G__15540_15813)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__15536_15822 = ((G__15539_15812)?(G__15531_15817[(0)]):(cljs.core.truth_(G__15541_15814)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15537_15823 = ((G__15539_15812)?(G__15531_15817[(1)]):(cljs.core.truth_(G__15541_15814)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__11126__auto__[(0)] = (function (){var a__10853__auto__ = (function (){var a__10853__auto__ = G__15532_15818;
var b__10854__auto__ = G__15534_15820;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})();
var b__10854__auto__ = G__15536_15822;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11126__auto__[(1)] = (function (){var a__10853__auto__ = (function (){var a__10853__auto__ = G__15533_15819;
var b__10854__auto__ = G__15535_15821;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})();
var b__10854__auto__ = G__15537_15823;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__11126__auto__,null,self__._meta));
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
var G__15542 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15543 = v.buf;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__15542[(0)]),(G__15543[(0)]),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__15542[(1)]),(G__15543[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__15542[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__15542[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
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
var G__15544 = self__.buf;
var G__15545 = (G__15544[(0)]);
var G__15546 = (G__15544[(1)]);
return Math.sqrt(((G__15545 * G__15545) + (G__15546 * G__15546)));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15547 = self__.buf;
var G__15548 = (G__15547[(0)]);
var G__15549 = (G__15547[(1)]);
return ((G__15548 * G__15548) + (G__15549 * G__15549));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15550_15824 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15551_15825 = v.buf;
(b[(0)] = (((G__15550_15824[(0)]) + (G__15551_15825[(0)])) * 0.5));

(b[(1)] = (((G__15550_15824[(1)]) + (G__15551_15825[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__15550_15824[(0)]) + v) * 0.5));

(b[(1)] = (((G__15550_15824[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__15550_15824[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__15550_15824[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15561_15826 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__15562_15827 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__15563_15828 = ((!(G__15561_15826))?typeof v === 'number':null);
var G__15564_15829 = ((!(G__15562_15827))?typeof v2 === 'number':null);
var G__15552_15830 = self__.buf;
var G__15553_15831 = ((G__15561_15826)?v.buf:null);
var G__15554_15832 = ((G__15562_15827)?v2.buf:null);
var G__15555_15833 = (G__15552_15830[(0)]);
var G__15556_15834 = (G__15552_15830[(1)]);
var G__15557_15835 = ((G__15561_15826)?(G__15553_15831[(0)]):(cljs.core.truth_(G__15563_15828)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__15558_15836 = ((G__15561_15826)?(G__15553_15831[(1)]):(cljs.core.truth_(G__15563_15828)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__15559_15837 = ((G__15562_15827)?(G__15554_15832[(0)]):(cljs.core.truth_(G__15564_15829)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15560_15838 = ((G__15562_15827)?(G__15554_15832[(1)]):(cljs.core.truth_(G__15564_15829)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(b[(0)] = (((G__15557_15835 - G__15555_15833) * G__15559_15837) + G__15555_15833));

(b[(1)] = (((G__15558_15836 - G__15556_15834) * G__15560_15838) + G__15556_15834));

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
var G__15574_15839 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15575_15840 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__15576_15841 = ((!(G__15574_15839))?typeof b === 'number':null);
var G__15577_15842 = ((!(G__15575_15840))?typeof c === 'number':null);
var G__15565_15843 = self__.buf;
var G__15566_15844 = ((G__15574_15839)?b.buf:null);
var G__15567_15845 = ((G__15575_15840)?c.buf:null);
var G__15568_15846 = (G__15565_15843[(0)]);
var G__15569_15847 = (G__15565_15843[(1)]);
var G__15570_15848 = ((G__15574_15839)?(G__15566_15844[(0)]):(cljs.core.truth_(G__15576_15841)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15571_15849 = ((G__15574_15839)?(G__15566_15844[(1)]):(cljs.core.truth_(G__15576_15841)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__15572_15850 = ((G__15575_15840)?(G__15567_15845[(0)]):(cljs.core.truth_(G__15577_15842)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__15573_15851 = ((G__15575_15840)?(G__15567_15845[(1)]):(cljs.core.truth_(G__15577_15842)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_15852 = (((G__15570_15848 - G__15568_15846) * u) + G__15568_15846);
var y1_15853 = (((G__15571_15849 - G__15569_15847) * u) + G__15569_15847);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__15572_15850) * u) + G__15572_15850) - x1_15852) * v) + x1_15852));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__15573_15851) * u) + G__15573_15851) - y1_15853) * v) + y1_15853));

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
var G__15248 = self__.buf;
var G__15249 = (G__15248[(0)]);
var G__15250 = (G__15248[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__15249 * Math.cos(G__15250)));

(b[(1)] = (G__15249 * Math.sin(G__15250)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2";

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"thi.ng.geom.core.vector/Vec2");
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
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
var G__15855 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15856 = v.buf;
return ((((G__15855[(0)]) * (G__15856[(0)])) + ((G__15855[(1)]) * (G__15856[(1)]))) + ((G__15855[(2)]) * (G__15856[(2)])));
} else {
return ((((G__15855[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__15855[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__15855[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15857 = self__.buf;
var G__15858 = (G__15857[(0)]);
var G__15859 = (G__15857[(1)]);
var G__15860 = (G__15857[(2)]);
var l = Math.sqrt((((G__15858 * G__15858) + (G__15859 * G__15859)) + (G__15860 * G__15860)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__15858 / l));

(b[(1)] = (G__15859 / l));

(b[(2)] = (G__15860 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__15861 = self__.buf;
var G__15862 = (G__15861[(0)]);
var G__15863 = (G__15861[(1)]);
var G__15864 = (G__15861[(2)]);
var l = Math.sqrt((((G__15862 * G__15862) + (G__15863 * G__15863)) + (G__15864 * G__15864)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__15862 * l__$1));

(b[(1)] = (G__15863 * l__$1));

(b[(2)] = (G__15864 * l__$1));

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
var G__15865 = self__.buf;
var G__15866 = (G__15865[(0)]);
var G__15867 = (G__15865[(1)]);
var G__15868 = (G__15865[(2)]);
(b[(0)] = G__15866);

(b[(1)] = ((G__15867 * c) - (G__15868 * s)));

(b[(2)] = ((G__15867 * s) + (G__15868 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__15869 = self__.buf;
var G__15870 = (G__15869[(0)]);
var G__15871 = (G__15869[(1)]);
var G__15872 = (G__15869[(2)]);
(b[(0)] = ((G__15870 * c) + (G__15872 * s)));

(b[(1)] = G__15871);

(b[(2)] = ((G__15872 * c) - (G__15870 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__15873 = self__.buf;
var G__15874 = (G__15873[(0)]);
var G__15875 = (G__15873[(1)]);
var G__15876 = (G__15873[(2)]);
(b[(0)] = ((G__15874 * c) - (G__15875 * s)));

(b[(1)] = ((G__15874 * s) + (G__15875 * c)));

(b[(2)] = G__15876);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__15877 = self__.buf;
var G__15879 = (G__15877[(0)]);
var G__15880 = (G__15877[(1)]);
var G__15881 = (G__15877[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15878 = v.buf;
var G__15882 = (G__15878[(0)]);
var G__15883 = (G__15878[(1)]);
var G__15884 = (G__15878[(2)]);
var ux_SINGLEQUOTE_ = (G__15882 * G__15879);
var uy_SINGLEQUOTE_ = (G__15882 * G__15880);
var uz_SINGLEQUOTE_ = (G__15882 * G__15881);
var vx_SINGLEQUOTE_ = (G__15883 * G__15879);
var vy_SINGLEQUOTE_ = (G__15883 * G__15880);
var vz_SINGLEQUOTE_ = (G__15883 * G__15881);
var wx_SINGLEQUOTE_ = (G__15884 * G__15879);
var wy_SINGLEQUOTE_ = (G__15884 * G__15880);
var wz_SINGLEQUOTE_ = (G__15884 * G__15881);
var vx2 = (G__15882 * G__15882);
var vy2 = (G__15883 * G__15883);
var vz2 = (G__15884 * G__15884);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__15882) + ((((vy2 + vz2) * G__15879) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15882)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__15883) + ((((vx2 + vz2) * G__15880) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15883)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__15884) + ((((vx2 + vy2) * G__15881) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__15884)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__15882 = cljs.core.nth.call(null,v,(0),0.0);
var G__15883 = cljs.core.nth.call(null,v,(1),0.0);
var G__15884 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__15882 * G__15879);
var uy_SINGLEQUOTE_ = (G__15882 * G__15880);
var uz_SINGLEQUOTE_ = (G__15882 * G__15881);
var vx_SINGLEQUOTE_ = (G__15883 * G__15879);
var vy_SINGLEQUOTE_ = (G__15883 * G__15880);
var vz_SINGLEQUOTE_ = (G__15883 * G__15881);
var wx_SINGLEQUOTE_ = (G__15884 * G__15879);
var wy_SINGLEQUOTE_ = (G__15884 * G__15880);
var wz_SINGLEQUOTE_ = (G__15884 * G__15881);
var vx2 = (G__15882 * G__15882);
var vy2 = (G__15883 * G__15883);
var vz2 = (G__15884 * G__15884);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__15882) + ((((vy2 + vz2) * G__15879) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15882)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__15883) + ((((vx2 + vz2) * G__15880) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15883)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__15884) + ((((vx2 + vy2) * G__15881) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__15884)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

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
var G__15885 = self__.buf;
var G__15887 = (G__15885[(0)]);
var G__15888 = (G__15885[(1)]);
var G__15889 = (G__15885[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15886 = v.buf;
var G__15890 = (G__15886[(0)]);
var G__15891 = (G__15886[(1)]);
var G__15892 = (G__15886[(2)]);
var d = ((((G__15887 * G__15890) + (G__15888 * G__15891)) + (G__15889 * G__15892)) * 2.0);
(b[(0)] = ((G__15890 * d) - G__15887));

(b[(1)] = ((G__15891 * d) - G__15888));

(b[(2)] = ((G__15892 * d) - G__15889));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__15890 = cljs.core.nth.call(null,v,(0),0.0);
var G__15891 = cljs.core.nth.call(null,v,(1),0.0);
var G__15892 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__15887 * G__15890) + (G__15888 * G__15891)) + (G__15889 * G__15892)) * 2.0);
(b[(0)] = ((G__15890 * d) - G__15887));

(b[(1)] = ((G__15891 * d) - G__15888));

(b[(2)] = ((G__15892 * d) - G__15889));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__15893_16306 = self__.buf;
var G__15895_16307 = (G__15893_16306[(0)]);
var G__15896_16308 = (G__15893_16306[(1)]);
var G__15897_16309 = (G__15893_16306[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15894_16310 = v.buf;
var G__15898_16311 = (G__15894_16310[(0)]);
var G__15899_16312 = (G__15894_16310[(1)]);
var G__15900_16313 = (G__15894_16310[(2)]);
(b[(0)] = ((G__15896_16308 * G__15900_16313) - (G__15899_16312 * G__15897_16309)));

(b[(1)] = ((G__15897_16309 * G__15898_16311) - (G__15900_16313 * G__15895_16307)));

(b[(2)] = ((G__15895_16307 * G__15899_16312) - (G__15898_16311 * G__15896_16308)));
} else {
var G__15898_16314 = cljs.core.nth.call(null,v,(0),0.0);
var G__15899_16315 = cljs.core.nth.call(null,v,(1),0.0);
var G__15900_16316 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__15896_16308 * G__15900_16316) - (G__15899_16315 * G__15897_16309)));

(b[(1)] = ((G__15897_16309 * G__15898_16314) - (G__15900_16316 * G__15895_16307)));

(b[(2)] = ((G__15895_16307 * G__15899_16315) - (G__15898_16314 * G__15896_16308)));
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
var G__15901_16317 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15902_16318 = v.buf;
(self__.buf[(0)] = ((G__15901_16317[(0)]) - (G__15902_16318[(0)])));

(self__.buf[(1)] = ((G__15901_16317[(1)]) - (G__15902_16318[(1)])));

(self__.buf[(2)] = ((G__15901_16317[(2)]) - (G__15902_16318[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15901_16317[(0)]) - v));

(self__.buf[(1)] = ((G__15901_16317[(1)]) - v));

(self__.buf[(2)] = ((G__15901_16317[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15901_16317[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15901_16317[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__15901_16317[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15915_16319 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15916_16320 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15917_16321 = ((!(G__15915_16319))?typeof v1 === 'number':null);
var G__15918_16322 = ((!(G__15916_16320))?typeof v2 === 'number':null);
var G__15903_16323 = self__.buf;
var G__15904_16324 = ((G__15915_16319)?v1.buf:null);
var G__15905_16325 = ((G__15916_16320)?v2.buf:null);
var G__15906_16326 = (G__15903_16323[(0)]);
var G__15907_16327 = (G__15903_16323[(1)]);
var G__15908_16328 = (G__15903_16323[(2)]);
var G__15909_16329 = ((G__15915_16319)?(G__15904_16324[(0)]):(cljs.core.truth_(G__15917_16321)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15910_16330 = ((G__15915_16319)?(G__15904_16324[(1)]):(cljs.core.truth_(G__15917_16321)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15911_16331 = ((G__15915_16319)?(G__15904_16324[(2)]):(cljs.core.truth_(G__15917_16321)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15912_16332 = ((G__15916_16320)?(G__15905_16325[(0)]):(cljs.core.truth_(G__15918_16322)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15913_16333 = ((G__15916_16320)?(G__15905_16325[(1)]):(cljs.core.truth_(G__15918_16322)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15914_16334 = ((G__15916_16320)?(G__15905_16325[(2)]):(cljs.core.truth_(G__15918_16322)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__15906_16326 - G__15909_16329) - G__15912_16332));

(self__.buf[(1)] = ((G__15907_16327 - G__15910_16330) - G__15913_16333));

(self__.buf[(2)] = ((G__15908_16328 - G__15911_16331) - G__15914_16334));

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
var G__15919_16335 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15920_16336 = v.buf;
(self__.buf[(0)] = ((G__15919_16335[(0)]) * (G__15920_16336[(0)])));

(self__.buf[(1)] = ((G__15919_16335[(1)]) * (G__15920_16336[(1)])));

(self__.buf[(2)] = ((G__15919_16335[(2)]) * (G__15920_16336[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15919_16335[(0)]) * v));

(self__.buf[(1)] = ((G__15919_16335[(1)]) * v));

(self__.buf[(2)] = ((G__15919_16335[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15919_16335[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15919_16335[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__15919_16335[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15933_16337 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15934_16338 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15935_16339 = ((!(G__15933_16337))?typeof v1 === 'number':null);
var G__15936_16340 = ((!(G__15934_16338))?typeof v2 === 'number':null);
var G__15921_16341 = self__.buf;
var G__15922_16342 = ((G__15933_16337)?v1.buf:null);
var G__15923_16343 = ((G__15934_16338)?v2.buf:null);
var G__15924_16344 = (G__15921_16341[(0)]);
var G__15925_16345 = (G__15921_16341[(1)]);
var G__15926_16346 = (G__15921_16341[(2)]);
var G__15927_16347 = ((G__15933_16337)?(G__15922_16342[(0)]):(cljs.core.truth_(G__15935_16339)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15928_16348 = ((G__15933_16337)?(G__15922_16342[(1)]):(cljs.core.truth_(G__15935_16339)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15929_16349 = ((G__15933_16337)?(G__15922_16342[(2)]):(cljs.core.truth_(G__15935_16339)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15930_16350 = ((G__15934_16338)?(G__15923_16343[(0)]):(cljs.core.truth_(G__15936_16340)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15931_16351 = ((G__15934_16338)?(G__15923_16343[(1)]):(cljs.core.truth_(G__15936_16340)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15932_16352 = ((G__15934_16338)?(G__15923_16343[(2)]):(cljs.core.truth_(G__15936_16340)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__15924_16344 * G__15927_16347) * G__15930_16350));

(self__.buf[(1)] = ((G__15925_16345 * G__15928_16348) * G__15931_16351));

(self__.buf[(2)] = ((G__15926_16346 * G__15929_16349) * G__15932_16352));

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
var G__15949_16353 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15950_16354 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15951_16355 = ((!(G__15949_16353))?typeof a === 'number':null);
var G__15952_16356 = ((!(G__15950_16354))?typeof b === 'number':null);
var G__15937_16357 = self__.buf;
var G__15938_16358 = ((G__15949_16353)?a.buf:null);
var G__15939_16359 = ((G__15950_16354)?b.buf:null);
var G__15940_16360 = (G__15937_16357[(0)]);
var G__15941_16361 = (G__15937_16357[(1)]);
var G__15942_16362 = (G__15937_16357[(2)]);
var G__15943_16363 = ((G__15949_16353)?(G__15938_16358[(0)]):(cljs.core.truth_(G__15951_16355)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15944_16364 = ((G__15949_16353)?(G__15938_16358[(1)]):(cljs.core.truth_(G__15951_16355)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15945_16365 = ((G__15949_16353)?(G__15938_16358[(2)]):(cljs.core.truth_(G__15951_16355)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__15946_16366 = ((G__15950_16354)?(G__15939_16359[(0)]):(cljs.core.truth_(G__15952_16356)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15947_16367 = ((G__15950_16354)?(G__15939_16359[(1)]):(cljs.core.truth_(G__15952_16356)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__15948_16368 = ((G__15950_16354)?(G__15939_16359[(2)]):(cljs.core.truth_(G__15952_16356)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__15940_16360 - G__15943_16363) * G__15946_16366));

(self__.buf[(1)] = ((G__15941_16361 - G__15944_16364) * G__15947_16367));

(self__.buf[(2)] = ((G__15942_16362 - G__15945_16365) * G__15948_16368));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15965_16369 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15966_16370 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15967_16371 = ((!(G__15965_16369))?typeof a === 'number':null);
var G__15968_16372 = ((!(G__15966_16370))?typeof b === 'number':null);
var G__15953_16373 = self__.buf;
var G__15954_16374 = ((G__15965_16369)?a.buf:null);
var G__15955_16375 = ((G__15966_16370)?b.buf:null);
var G__15956_16376 = (G__15953_16373[(0)]);
var G__15957_16377 = (G__15953_16373[(1)]);
var G__15958_16378 = (G__15953_16373[(2)]);
var G__15959_16379 = ((G__15965_16369)?(G__15954_16374[(0)]):(cljs.core.truth_(G__15967_16371)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15960_16380 = ((G__15965_16369)?(G__15954_16374[(1)]):(cljs.core.truth_(G__15967_16371)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15961_16381 = ((G__15965_16369)?(G__15954_16374[(2)]):(cljs.core.truth_(G__15967_16371)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__15962_16382 = ((G__15966_16370)?(G__15955_16375[(0)]):(cljs.core.truth_(G__15968_16372)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15963_16383 = ((G__15966_16370)?(G__15955_16375[(1)]):(cljs.core.truth_(G__15968_16372)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__15964_16384 = ((G__15966_16370)?(G__15955_16375[(2)]):(cljs.core.truth_(G__15968_16372)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__15956_16376 * G__15959_16379) - G__15962_16382));

(self__.buf[(1)] = ((G__15957_16377 * G__15960_16380) - G__15963_16383));

(self__.buf[(2)] = ((G__15958_16378 * G__15961_16381) - G__15964_16384));

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
var G__15981_16385 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15982_16386 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15983_16387 = ((!(G__15981_16385))?typeof a === 'number':null);
var G__15984_16388 = ((!(G__15982_16386))?typeof b === 'number':null);
var G__15969_16389 = self__.buf;
var G__15970_16390 = ((G__15981_16385)?a.buf:null);
var G__15971_16391 = ((G__15982_16386)?b.buf:null);
var G__15972_16392 = (G__15969_16389[(0)]);
var G__15973_16393 = (G__15969_16389[(1)]);
var G__15974_16394 = (G__15969_16389[(2)]);
var G__15975_16395 = ((G__15981_16385)?(G__15970_16390[(0)]):(cljs.core.truth_(G__15983_16387)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15976_16396 = ((G__15981_16385)?(G__15970_16390[(1)]):(cljs.core.truth_(G__15983_16387)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15977_16397 = ((G__15981_16385)?(G__15970_16390[(2)]):(cljs.core.truth_(G__15983_16387)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__15978_16398 = ((G__15982_16386)?(G__15971_16391[(0)]):(cljs.core.truth_(G__15984_16388)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15979_16399 = ((G__15982_16386)?(G__15971_16391[(1)]):(cljs.core.truth_(G__15984_16388)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__15980_16400 = ((G__15982_16386)?(G__15971_16391[(2)]):(cljs.core.truth_(G__15984_16388)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__15972_16392 * G__15975_16395) + G__15978_16398));

(self__.buf[(1)] = ((G__15973_16393 * G__15976_16396) + G__15979_16399));

(self__.buf[(2)] = ((G__15974_16394 * G__15977_16397) + G__15980_16400));

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
var G__15985_16401 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15986_16402 = v.buf;
(self__.buf[(0)] = ((G__15985_16401[(0)]) / (G__15986_16402[(0)])));

(self__.buf[(1)] = ((G__15985_16401[(1)]) / (G__15986_16402[(1)])));

(self__.buf[(2)] = ((G__15985_16401[(2)]) / (G__15986_16402[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15985_16401[(0)]) / v));

(self__.buf[(1)] = ((G__15985_16401[(1)]) / v));

(self__.buf[(2)] = ((G__15985_16401[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15985_16401[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15985_16401[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__15985_16401[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15999_16403 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16000_16404 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16001_16405 = ((!(G__15999_16403))?typeof v1 === 'number':null);
var G__16002_16406 = ((!(G__16000_16404))?typeof v2 === 'number':null);
var G__15987_16407 = self__.buf;
var G__15988_16408 = ((G__15999_16403)?v1.buf:null);
var G__15989_16409 = ((G__16000_16404)?v2.buf:null);
var G__15990_16410 = (G__15987_16407[(0)]);
var G__15991_16411 = (G__15987_16407[(1)]);
var G__15992_16412 = (G__15987_16407[(2)]);
var G__15993_16413 = ((G__15999_16403)?(G__15988_16408[(0)]):(cljs.core.truth_(G__16001_16405)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15994_16414 = ((G__15999_16403)?(G__15988_16408[(1)]):(cljs.core.truth_(G__16001_16405)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15995_16415 = ((G__15999_16403)?(G__15988_16408[(2)]):(cljs.core.truth_(G__16001_16405)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15996_16416 = ((G__16000_16404)?(G__15989_16409[(0)]):(cljs.core.truth_(G__16002_16406)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15997_16417 = ((G__16000_16404)?(G__15989_16409[(1)]):(cljs.core.truth_(G__16002_16406)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15998_16418 = ((G__16000_16404)?(G__15989_16409[(2)]):(cljs.core.truth_(G__16002_16406)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__15990_16410 / G__15993_16413) / G__15996_16416));

(self__.buf[(1)] = ((G__15991_16411 / G__15994_16414) / G__15997_16417));

(self__.buf[(2)] = ((G__15992_16412 / G__15995_16415) / G__15998_16418));

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
var G__16003_16419 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16004_16420 = v.buf;
(self__.buf[(0)] = ((G__16003_16419[(0)]) + (G__16004_16420[(0)])));

(self__.buf[(1)] = ((G__16003_16419[(1)]) + (G__16004_16420[(1)])));

(self__.buf[(2)] = ((G__16003_16419[(2)]) + (G__16004_16420[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__16003_16419[(0)]) + v));

(self__.buf[(1)] = ((G__16003_16419[(1)]) + v));

(self__.buf[(2)] = ((G__16003_16419[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__16003_16419[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__16003_16419[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__16003_16419[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__16017_16421 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16018_16422 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16019_16423 = ((!(G__16017_16421))?typeof v1 === 'number':null);
var G__16020_16424 = ((!(G__16018_16422))?typeof v2 === 'number':null);
var G__16005_16425 = self__.buf;
var G__16006_16426 = ((G__16017_16421)?v1.buf:null);
var G__16007_16427 = ((G__16018_16422)?v2.buf:null);
var G__16008_16428 = (G__16005_16425[(0)]);
var G__16009_16429 = (G__16005_16425[(1)]);
var G__16010_16430 = (G__16005_16425[(2)]);
var G__16011_16431 = ((G__16017_16421)?(G__16006_16426[(0)]):(cljs.core.truth_(G__16019_16423)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16012_16432 = ((G__16017_16421)?(G__16006_16426[(1)]):(cljs.core.truth_(G__16019_16423)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16013_16433 = ((G__16017_16421)?(G__16006_16426[(2)]):(cljs.core.truth_(G__16019_16423)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16014_16434 = ((G__16018_16422)?(G__16007_16427[(0)]):(cljs.core.truth_(G__16020_16424)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16015_16435 = ((G__16018_16422)?(G__16007_16427[(1)]):(cljs.core.truth_(G__16020_16424)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16016_16436 = ((G__16018_16422)?(G__16007_16427[(2)]):(cljs.core.truth_(G__16020_16424)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__16008_16428 + G__16011_16431) + G__16014_16434));

(self__.buf[(1)] = ((G__16009_16429 + G__16012_16432) + G__16015_16435));

(self__.buf[(2)] = ((G__16010_16430 + G__16013_16433) + G__16016_16436));

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
var G__16033_16437 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16034_16438 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16035_16439 = ((!(G__16033_16437))?typeof a === 'number':null);
var G__16036_16440 = ((!(G__16034_16438))?typeof b === 'number':null);
var G__16021_16441 = self__.buf;
var G__16022_16442 = ((G__16033_16437)?a.buf:null);
var G__16023_16443 = ((G__16034_16438)?b.buf:null);
var G__16024_16444 = (G__16021_16441[(0)]);
var G__16025_16445 = (G__16021_16441[(1)]);
var G__16026_16446 = (G__16021_16441[(2)]);
var G__16027_16447 = ((G__16033_16437)?(G__16022_16442[(0)]):(cljs.core.truth_(G__16035_16439)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__16028_16448 = ((G__16033_16437)?(G__16022_16442[(1)]):(cljs.core.truth_(G__16035_16439)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__16029_16449 = ((G__16033_16437)?(G__16022_16442[(2)]):(cljs.core.truth_(G__16035_16439)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__16030_16450 = ((G__16034_16438)?(G__16023_16443[(0)]):(cljs.core.truth_(G__16036_16440)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__16031_16451 = ((G__16034_16438)?(G__16023_16443[(1)]):(cljs.core.truth_(G__16036_16440)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__16032_16452 = ((G__16034_16438)?(G__16023_16443[(2)]):(cljs.core.truth_(G__16036_16440)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__16024_16444 + G__16027_16447) * G__16030_16450));

(self__.buf[(1)] = ((G__16025_16445 + G__16028_16448) * G__16031_16451));

(self__.buf[(2)] = ((G__16026_16446 + G__16029_16449) * G__16032_16452));

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
var or__4950__auto__ = self__._hash;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
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
var G__16037 = self__.buf;
var G__16039 = (G__16037[(0)]);
var G__16040 = (G__16037[(1)]);
var G__16041 = (G__16037[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16038 = v.buf;
var G__16042 = (G__16038[(0)]);
var G__16043 = (G__16038[(1)]);
var G__16044 = (G__16038[(2)]);
var dx = (G__16039 - G__16042);
var dy = (G__16040 - G__16043);
var dz = (G__16041 - G__16044);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__16042 = cljs.core.nth.call(null,v,(0),0.0);
var G__16043 = cljs.core.nth.call(null,v,(1),0.0);
var G__16044 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__16039 - G__16042);
var dy = (G__16040 - G__16043);
var dz = (G__16041 - G__16044);
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
var dest__11221__auto__ = (new Float32Array((3)));
var G__16057_16453 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16058_16454 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16059_16455 = ((!(G__16057_16453))?typeof a === 'number':null);
var G__16060_16456 = ((!(G__16058_16454))?typeof b === 'number':null);
var G__16045_16457 = self__.buf;
var G__16046_16458 = ((G__16057_16453)?a.buf:null);
var G__16047_16459 = ((G__16058_16454)?b.buf:null);
var G__16048_16460 = (G__16045_16457[(0)]);
var G__16049_16461 = (G__16045_16457[(1)]);
var G__16050_16462 = (G__16045_16457[(2)]);
var G__16051_16463 = ((G__16057_16453)?(G__16046_16458[(0)]):(cljs.core.truth_(G__16059_16455)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__16052_16464 = ((G__16057_16453)?(G__16046_16458[(1)]):(cljs.core.truth_(G__16059_16455)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__16053_16465 = ((G__16057_16453)?(G__16046_16458[(2)]):(cljs.core.truth_(G__16059_16455)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__16054_16466 = ((G__16058_16454)?(G__16047_16459[(0)]):(cljs.core.truth_(G__16060_16456)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__16055_16467 = ((G__16058_16454)?(G__16047_16459[(1)]):(cljs.core.truth_(G__16060_16456)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__16056_16468 = ((G__16058_16454)?(G__16047_16459[(2)]):(cljs.core.truth_(G__16060_16456)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__16048_16460 * G__16051_16463) - G__16054_16466));

(dest__11221__auto__[(1)] = ((G__16049_16461 * G__16052_16464) - G__16055_16467));

(dest__11221__auto__[(2)] = ((G__16050_16462 * G__16053_16465) - G__16056_16468));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11210__auto__ = (new Float32Array((3)));
var G__16061_16469 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16062_16470 = v.buf;
(dest__11210__auto__[(0)] = ((G__16061_16469[(0)]) * (G__16062_16470[(0)])));

(dest__11210__auto__[(1)] = ((G__16061_16469[(1)]) * (G__16062_16470[(1)])));

(dest__11210__auto__[(2)] = ((G__16061_16469[(2)]) * (G__16062_16470[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__16061_16469[(0)]) * v));

(dest__11210__auto__[(1)] = ((G__16061_16469[(1)]) * v));

(dest__11210__auto__[(2)] = ((G__16061_16469[(2)]) * v));
} else {
(dest__11210__auto__[(0)] = ((G__16061_16469[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__16061_16469[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__16061_16469[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16075_16471 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16076_16472 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16077_16473 = ((!(G__16075_16471))?typeof v1 === 'number':null);
var G__16078_16474 = ((!(G__16076_16472))?typeof v2 === 'number':null);
var G__16063_16475 = self__.buf;
var G__16064_16476 = ((G__16075_16471)?v1.buf:null);
var G__16065_16477 = ((G__16076_16472)?v2.buf:null);
var G__16066_16478 = (G__16063_16475[(0)]);
var G__16067_16479 = (G__16063_16475[(1)]);
var G__16068_16480 = (G__16063_16475[(2)]);
var G__16069_16481 = ((G__16075_16471)?(G__16064_16476[(0)]):(cljs.core.truth_(G__16077_16473)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16070_16482 = ((G__16075_16471)?(G__16064_16476[(1)]):(cljs.core.truth_(G__16077_16473)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16071_16483 = ((G__16075_16471)?(G__16064_16476[(2)]):(cljs.core.truth_(G__16077_16473)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16072_16484 = ((G__16076_16472)?(G__16065_16477[(0)]):(cljs.core.truth_(G__16078_16474)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16073_16485 = ((G__16076_16472)?(G__16065_16477[(1)]):(cljs.core.truth_(G__16078_16474)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16074_16486 = ((G__16076_16472)?(G__16065_16477[(2)]):(cljs.core.truth_(G__16078_16474)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__16066_16478 * G__16069_16481) * G__16072_16484));

(dest__11221__auto__[(1)] = ((G__16067_16479 * G__16070_16482) * G__16073_16485));

(dest__11221__auto__[(2)] = ((G__16068_16480 * G__16071_16483) * G__16074_16486));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16079 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__16079[(0)]) * x));

(dest__11199__auto__[(1)] = ((G__16079[(1)]) * y));

(dest__11199__auto__[(2)] = ((G__16079[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__11199__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11193__auto__ = (new Float32Array((3)));
var G__16080_16487 = self__.buf;
(dest__11193__auto__[(0)] = (- (G__16080_16487[(0)])));

(dest__11193__auto__[(1)] = (- (G__16080_16487[(1)])));

(dest__11193__auto__[(2)] = (- (G__16080_16487[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__11193__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11210__auto__ = (new Float32Array((3)));
var G__16081_16488 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16082_16489 = v.buf;
(dest__11210__auto__[(0)] = ((G__16081_16488[(0)]) - (G__16082_16489[(0)])));

(dest__11210__auto__[(1)] = ((G__16081_16488[(1)]) - (G__16082_16489[(1)])));

(dest__11210__auto__[(2)] = ((G__16081_16488[(2)]) - (G__16082_16489[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__16081_16488[(0)]) - v));

(dest__11210__auto__[(1)] = ((G__16081_16488[(1)]) - v));

(dest__11210__auto__[(2)] = ((G__16081_16488[(2)]) - v));
} else {
(dest__11210__auto__[(0)] = ((G__16081_16488[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__16081_16488[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__16081_16488[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16095_16490 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16096_16491 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16097_16492 = ((!(G__16095_16490))?typeof v1 === 'number':null);
var G__16098_16493 = ((!(G__16096_16491))?typeof v2 === 'number':null);
var G__16083_16494 = self__.buf;
var G__16084_16495 = ((G__16095_16490)?v1.buf:null);
var G__16085_16496 = ((G__16096_16491)?v2.buf:null);
var G__16086_16497 = (G__16083_16494[(0)]);
var G__16087_16498 = (G__16083_16494[(1)]);
var G__16088_16499 = (G__16083_16494[(2)]);
var G__16089_16500 = ((G__16095_16490)?(G__16084_16495[(0)]):(cljs.core.truth_(G__16097_16492)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16090_16501 = ((G__16095_16490)?(G__16084_16495[(1)]):(cljs.core.truth_(G__16097_16492)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16091_16502 = ((G__16095_16490)?(G__16084_16495[(2)]):(cljs.core.truth_(G__16097_16492)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16092_16503 = ((G__16096_16491)?(G__16085_16496[(0)]):(cljs.core.truth_(G__16098_16493)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16093_16504 = ((G__16096_16491)?(G__16085_16496[(1)]):(cljs.core.truth_(G__16098_16493)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16094_16505 = ((G__16096_16491)?(G__16085_16496[(2)]):(cljs.core.truth_(G__16098_16493)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__16086_16497 - G__16089_16500) - G__16092_16503));

(dest__11221__auto__[(1)] = ((G__16087_16498 - G__16090_16501) - G__16093_16504));

(dest__11221__auto__[(2)] = ((G__16088_16499 - G__16091_16502) - G__16094_16505));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16099 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__16099[(0)]) - x));

(dest__11199__auto__[(1)] = ((G__16099[(1)]) - y));

(dest__11199__auto__[(2)] = ((G__16099[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__11199__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16112_16506 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16113_16507 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16114_16508 = ((!(G__16112_16506))?typeof a === 'number':null);
var G__16115_16509 = ((!(G__16113_16507))?typeof b === 'number':null);
var G__16100_16510 = self__.buf;
var G__16101_16511 = ((G__16112_16506)?a.buf:null);
var G__16102_16512 = ((G__16113_16507)?b.buf:null);
var G__16103_16513 = (G__16100_16510[(0)]);
var G__16104_16514 = (G__16100_16510[(1)]);
var G__16105_16515 = (G__16100_16510[(2)]);
var G__16106_16516 = ((G__16112_16506)?(G__16101_16511[(0)]):(cljs.core.truth_(G__16114_16508)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__16107_16517 = ((G__16112_16506)?(G__16101_16511[(1)]):(cljs.core.truth_(G__16114_16508)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__16108_16518 = ((G__16112_16506)?(G__16101_16511[(2)]):(cljs.core.truth_(G__16114_16508)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__16109_16519 = ((G__16113_16507)?(G__16102_16512[(0)]):(cljs.core.truth_(G__16115_16509)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__16110_16520 = ((G__16113_16507)?(G__16102_16512[(1)]):(cljs.core.truth_(G__16115_16509)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__16111_16521 = ((G__16113_16507)?(G__16102_16512[(2)]):(cljs.core.truth_(G__16115_16509)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__16103_16513 * G__16106_16516) + G__16109_16519));

(dest__11221__auto__[(1)] = ((G__16104_16514 * G__16107_16517) + G__16110_16520));

(dest__11221__auto__[(2)] = ((G__16105_16515 * G__16108_16518) + G__16111_16521));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16128_16522 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16129_16523 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16130_16524 = ((!(G__16128_16522))?typeof a === 'number':null);
var G__16131_16525 = ((!(G__16129_16523))?typeof b === 'number':null);
var G__16116_16526 = self__.buf;
var G__16117_16527 = ((G__16128_16522)?a.buf:null);
var G__16118_16528 = ((G__16129_16523)?b.buf:null);
var G__16119_16529 = (G__16116_16526[(0)]);
var G__16120_16530 = (G__16116_16526[(1)]);
var G__16121_16531 = (G__16116_16526[(2)]);
var G__16122_16532 = ((G__16128_16522)?(G__16117_16527[(0)]):(cljs.core.truth_(G__16130_16524)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__16123_16533 = ((G__16128_16522)?(G__16117_16527[(1)]):(cljs.core.truth_(G__16130_16524)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__16124_16534 = ((G__16128_16522)?(G__16117_16527[(2)]):(cljs.core.truth_(G__16130_16524)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__16125_16535 = ((G__16129_16523)?(G__16118_16528[(0)]):(cljs.core.truth_(G__16131_16525)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__16126_16536 = ((G__16129_16523)?(G__16118_16528[(1)]):(cljs.core.truth_(G__16131_16525)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__16127_16537 = ((G__16129_16523)?(G__16118_16528[(2)]):(cljs.core.truth_(G__16131_16525)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__11221__auto__[(0)] = ((G__16119_16529 + G__16122_16532) * G__16125_16535));

(dest__11221__auto__[(1)] = ((G__16120_16530 + G__16123_16533) * G__16126_16536));

(dest__11221__auto__[(2)] = ((G__16121_16531 + G__16124_16534) * G__16127_16537));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11193__auto__ = (new Float32Array((3)));
var G__16132_16538 = self__.buf;
(dest__11193__auto__[(0)] = ((1) / (G__16132_16538[(0)])));

(dest__11193__auto__[(1)] = ((1) / (G__16132_16538[(1)])));

(dest__11193__auto__[(2)] = ((1) / (G__16132_16538[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__11193__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11210__auto__ = (new Float32Array((3)));
var G__16133_16539 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16134_16540 = v.buf;
(dest__11210__auto__[(0)] = ((G__16133_16539[(0)]) / (G__16134_16540[(0)])));

(dest__11210__auto__[(1)] = ((G__16133_16539[(1)]) / (G__16134_16540[(1)])));

(dest__11210__auto__[(2)] = ((G__16133_16539[(2)]) / (G__16134_16540[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__16133_16539[(0)]) / v));

(dest__11210__auto__[(1)] = ((G__16133_16539[(1)]) / v));

(dest__11210__auto__[(2)] = ((G__16133_16539[(2)]) / v));
} else {
(dest__11210__auto__[(0)] = ((G__16133_16539[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__16133_16539[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__16133_16539[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16147_16541 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16148_16542 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16149_16543 = ((!(G__16147_16541))?typeof v1 === 'number':null);
var G__16150_16544 = ((!(G__16148_16542))?typeof v2 === 'number':null);
var G__16135_16545 = self__.buf;
var G__16136_16546 = ((G__16147_16541)?v1.buf:null);
var G__16137_16547 = ((G__16148_16542)?v2.buf:null);
var G__16138_16548 = (G__16135_16545[(0)]);
var G__16139_16549 = (G__16135_16545[(1)]);
var G__16140_16550 = (G__16135_16545[(2)]);
var G__16141_16551 = ((G__16147_16541)?(G__16136_16546[(0)]):(cljs.core.truth_(G__16149_16543)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16142_16552 = ((G__16147_16541)?(G__16136_16546[(1)]):(cljs.core.truth_(G__16149_16543)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16143_16553 = ((G__16147_16541)?(G__16136_16546[(2)]):(cljs.core.truth_(G__16149_16543)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16144_16554 = ((G__16148_16542)?(G__16137_16547[(0)]):(cljs.core.truth_(G__16150_16544)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16145_16555 = ((G__16148_16542)?(G__16137_16547[(1)]):(cljs.core.truth_(G__16150_16544)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16146_16556 = ((G__16148_16542)?(G__16137_16547[(2)]):(cljs.core.truth_(G__16150_16544)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__16138_16548 / G__16141_16551) / G__16144_16554));

(dest__11221__auto__[(1)] = ((G__16139_16549 / G__16142_16552) / G__16145_16555));

(dest__11221__auto__[(2)] = ((G__16140_16550 / G__16143_16553) / G__16146_16556));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16151 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__16151[(0)]) / x));

(dest__11199__auto__[(1)] = ((G__16151[(1)]) / y));

(dest__11199__auto__[(2)] = ((G__16151[(2)]) / z));

return (new thi.ng.geom.core.vector.Vec3(dest__11199__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11210__auto__ = (new Float32Array((3)));
var G__16152_16557 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16153_16558 = v.buf;
(dest__11210__auto__[(0)] = ((G__16152_16557[(0)]) + (G__16153_16558[(0)])));

(dest__11210__auto__[(1)] = ((G__16152_16557[(1)]) + (G__16153_16558[(1)])));

(dest__11210__auto__[(2)] = ((G__16152_16557[(2)]) + (G__16153_16558[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__16152_16557[(0)]) + v));

(dest__11210__auto__[(1)] = ((G__16152_16557[(1)]) + v));

(dest__11210__auto__[(2)] = ((G__16152_16557[(2)]) + v));
} else {
(dest__11210__auto__[(0)] = ((G__16152_16557[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__16152_16557[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__16152_16557[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16166_16559 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16167_16560 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16168_16561 = ((!(G__16166_16559))?typeof v1 === 'number':null);
var G__16169_16562 = ((!(G__16167_16560))?typeof v2 === 'number':null);
var G__16154_16563 = self__.buf;
var G__16155_16564 = ((G__16166_16559)?v1.buf:null);
var G__16156_16565 = ((G__16167_16560)?v2.buf:null);
var G__16157_16566 = (G__16154_16563[(0)]);
var G__16158_16567 = (G__16154_16563[(1)]);
var G__16159_16568 = (G__16154_16563[(2)]);
var G__16160_16569 = ((G__16166_16559)?(G__16155_16564[(0)]):(cljs.core.truth_(G__16168_16561)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16161_16570 = ((G__16166_16559)?(G__16155_16564[(1)]):(cljs.core.truth_(G__16168_16561)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16162_16571 = ((G__16166_16559)?(G__16155_16564[(2)]):(cljs.core.truth_(G__16168_16561)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16163_16572 = ((G__16167_16560)?(G__16156_16565[(0)]):(cljs.core.truth_(G__16169_16562)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16164_16573 = ((G__16167_16560)?(G__16156_16565[(1)]):(cljs.core.truth_(G__16169_16562)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16165_16574 = ((G__16167_16560)?(G__16156_16565[(2)]):(cljs.core.truth_(G__16169_16562)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__16157_16566 + G__16160_16569) + G__16163_16572));

(dest__11221__auto__[(1)] = ((G__16158_16567 + G__16161_16570) + G__16164_16573));

(dest__11221__auto__[(2)] = ((G__16159_16568 + G__16162_16571) + G__16165_16574));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16170 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__16170[(0)]) + x));

(dest__11199__auto__[(1)] = ((G__16170[(1)]) + y));

(dest__11199__auto__[(2)] = ((G__16170[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__11199__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11193__auto__ = (new Float32Array((3)));
var G__16171_16575 = self__.buf;
(dest__11193__auto__[(0)] = thi.ng.common.math.core.abs.call(null,(G__16171_16575[(0)])));

(dest__11193__auto__[(1)] = thi.ng.common.math.core.abs.call(null,(G__16171_16575[(1)])));

(dest__11193__auto__[(2)] = thi.ng.common.math.core.abs.call(null,(G__16171_16575[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__11193__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16184_16576 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__16185_16577 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16186_16578 = ((!(G__16184_16576))?typeof a === 'number':null);
var G__16187_16579 = ((!(G__16185_16577))?typeof b === 'number':null);
var G__16172_16580 = self__.buf;
var G__16173_16581 = ((G__16184_16576)?a.buf:null);
var G__16174_16582 = ((G__16185_16577)?b.buf:null);
var G__16175_16583 = (G__16172_16580[(0)]);
var G__16176_16584 = (G__16172_16580[(1)]);
var G__16177_16585 = (G__16172_16580[(2)]);
var G__16178_16586 = ((G__16184_16576)?(G__16173_16581[(0)]):(cljs.core.truth_(G__16186_16578)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__16179_16587 = ((G__16184_16576)?(G__16173_16581[(1)]):(cljs.core.truth_(G__16186_16578)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__16180_16588 = ((G__16184_16576)?(G__16173_16581[(2)]):(cljs.core.truth_(G__16186_16578)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__16181_16589 = ((G__16185_16577)?(G__16174_16582[(0)]):(cljs.core.truth_(G__16187_16579)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__16182_16590 = ((G__16185_16577)?(G__16174_16582[(1)]):(cljs.core.truth_(G__16187_16579)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__16183_16591 = ((G__16185_16577)?(G__16174_16582[(2)]):(cljs.core.truth_(G__16187_16579)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__11221__auto__[(0)] = ((G__16175_16583 - G__16178_16586) * G__16181_16589));

(dest__11221__auto__[(1)] = ((G__16176_16584 - G__16179_16587) * G__16182_16590));

(dest__11221__auto__[(2)] = ((G__16177_16585 - G__16180_16588) * G__16183_16591));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
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
var dest__11210__auto__ = (new Float32Array((3)));
var G__16188_16592 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16189_16593 = v.buf;
(dest__11210__auto__[(0)] = ((G__16188_16592[(0)]) + (G__16189_16593[(0)])));

(dest__11210__auto__[(1)] = ((G__16188_16592[(1)]) + (G__16189_16593[(1)])));

(dest__11210__auto__[(2)] = ((G__16188_16592[(2)]) + (G__16189_16593[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__16188_16592[(0)]) + v));

(dest__11210__auto__[(1)] = ((G__16188_16592[(1)]) + v));

(dest__11210__auto__[(2)] = ((G__16188_16592[(2)]) + v));
} else {
(dest__11210__auto__[(0)] = ((G__16188_16592[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__16188_16592[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__16188_16592[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16202_16594 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16203_16595 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16204_16596 = ((!(G__16202_16594))?typeof v1 === 'number':null);
var G__16205_16597 = ((!(G__16203_16595))?typeof v2 === 'number':null);
var G__16190_16598 = self__.buf;
var G__16191_16599 = ((G__16202_16594)?v1.buf:null);
var G__16192_16600 = ((G__16203_16595)?v2.buf:null);
var G__16193_16601 = (G__16190_16598[(0)]);
var G__16194_16602 = (G__16190_16598[(1)]);
var G__16195_16603 = (G__16190_16598[(2)]);
var G__16196_16604 = ((G__16202_16594)?(G__16191_16599[(0)]):(cljs.core.truth_(G__16204_16596)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__16197_16605 = ((G__16202_16594)?(G__16191_16599[(1)]):(cljs.core.truth_(G__16204_16596)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__16198_16606 = ((G__16202_16594)?(G__16191_16599[(2)]):(cljs.core.truth_(G__16204_16596)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__16199_16607 = ((G__16203_16595)?(G__16192_16600[(0)]):(cljs.core.truth_(G__16205_16597)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16200_16608 = ((G__16203_16595)?(G__16192_16600[(1)]):(cljs.core.truth_(G__16205_16597)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16201_16609 = ((G__16203_16595)?(G__16192_16600[(2)]):(cljs.core.truth_(G__16205_16597)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__16193_16601 + G__16196_16604) + G__16199_16607));

(dest__11221__auto__[(1)] = ((G__16194_16602 + G__16197_16605) + G__16200_16608));

(dest__11221__auto__[(2)] = ((G__16195_16603 + G__16198_16606) + G__16201_16609));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16206 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__16206[(0)]) + x));

(dest__11199__auto__[(1)] = ((G__16206[(1)]) + y));

(dest__11199__auto__[(2)] = ((G__16206[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__11199__auto__,null,self__._meta));
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
var dest__11210__auto__ = (new Float32Array((3)));
var G__16207_16610 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16208_16611 = v.buf;
(dest__11210__auto__[(0)] = ((G__16207_16610[(0)]) * (G__16208_16611[(0)])));

(dest__11210__auto__[(1)] = ((G__16207_16610[(1)]) * (G__16208_16611[(1)])));

(dest__11210__auto__[(2)] = ((G__16207_16610[(2)]) * (G__16208_16611[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__16207_16610[(0)]) * v));

(dest__11210__auto__[(1)] = ((G__16207_16610[(1)]) * v));

(dest__11210__auto__[(2)] = ((G__16207_16610[(2)]) * v));
} else {
(dest__11210__auto__[(0)] = ((G__16207_16610[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__16207_16610[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__16207_16610[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16221_16612 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__16222_16613 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16223_16614 = ((!(G__16221_16612))?typeof v1 === 'number':null);
var G__16224_16615 = ((!(G__16222_16613))?typeof v2 === 'number':null);
var G__16209_16616 = self__.buf;
var G__16210_16617 = ((G__16221_16612)?v1.buf:null);
var G__16211_16618 = ((G__16222_16613)?v2.buf:null);
var G__16212_16619 = (G__16209_16616[(0)]);
var G__16213_16620 = (G__16209_16616[(1)]);
var G__16214_16621 = (G__16209_16616[(2)]);
var G__16215_16622 = ((G__16221_16612)?(G__16210_16617[(0)]):(cljs.core.truth_(G__16223_16614)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__16216_16623 = ((G__16221_16612)?(G__16210_16617[(1)]):(cljs.core.truth_(G__16223_16614)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__16217_16624 = ((G__16221_16612)?(G__16210_16617[(2)]):(cljs.core.truth_(G__16223_16614)?v1:cljs.core.nth.call(null,v1,(2),1.0)));
var G__16218_16625 = ((G__16222_16613)?(G__16211_16618[(0)]):(cljs.core.truth_(G__16224_16615)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__16219_16626 = ((G__16222_16613)?(G__16211_16618[(1)]):(cljs.core.truth_(G__16224_16615)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
var G__16220_16627 = ((G__16222_16613)?(G__16211_16618[(2)]):(cljs.core.truth_(G__16224_16615)?v2:cljs.core.nth.call(null,v2,(2),1.0)));
(dest__11221__auto__[(0)] = ((G__16212_16619 * G__16215_16622) * G__16218_16625));

(dest__11221__auto__[(1)] = ((G__16213_16620 * G__16216_16623) * G__16219_16626));

(dest__11221__auto__[(2)] = ((G__16214_16621 * G__16217_16624) * G__16220_16627));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16225 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__16225[(0)]) * x));

(dest__11199__auto__[(1)] = ((G__16225[(1)]) * y));

(dest__11199__auto__[(2)] = ((G__16225[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__11199__auto__,null,self__._meta));
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
var G__16628 = null;
var G__16628__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
var G__16628__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
G__16628 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__16628__2.call(this,self__,k);
case 3:
return G__16628__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16628.cljs$core$IFn$_invoke$arity$2 = G__16628__2;
G__16628.cljs$core$IFn$_invoke$arity$3 = G__16628__3;
return G__16628;
})()
;

thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args15854){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15854)));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
var temp__4420__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
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
var dest__11210__auto__ = (new Float32Array((3)));
var G__16226_16629 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16227_16630 = v.buf;
(dest__11210__auto__[(0)] = (function (){var a__10846__auto__ = (G__16226_16629[(0)]);
var b__10847__auto__ = (G__16227_16630[(0)]);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10846__auto__ = (G__16226_16629[(1)]);
var b__10847__auto__ = (G__16227_16630[(1)]);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10846__auto__ = (G__16226_16629[(2)]);
var b__10847__auto__ = (G__16227_16630[(2)]);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = (function (){var a__10846__auto__ = (G__16226_16629[(0)]);
var b__10847__auto__ = v;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10846__auto__ = (G__16226_16629[(1)]);
var b__10847__auto__ = v;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10846__auto__ = (G__16226_16629[(2)]);
var b__10847__auto__ = v;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());
} else {
(dest__11210__auto__[(0)] = (function (){var a__10846__auto__ = (G__16226_16629[(0)]);
var b__10847__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10846__auto__ = (G__16226_16629[(1)]);
var b__10847__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10846__auto__ = (G__16226_16629[(2)]);
var b__10847__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16240_16631 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__16241_16632 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16242_16633 = ((!(G__16240_16631))?typeof v === 'number':null);
var G__16243_16634 = ((!(G__16241_16632))?typeof v2 === 'number':null);
var G__16228_16635 = self__.buf;
var G__16229_16636 = ((G__16240_16631)?v.buf:null);
var G__16230_16637 = ((G__16241_16632)?v2.buf:null);
var G__16231_16638 = (G__16228_16635[(0)]);
var G__16232_16639 = (G__16228_16635[(1)]);
var G__16233_16640 = (G__16228_16635[(2)]);
var G__16234_16641 = ((G__16240_16631)?(G__16229_16636[(0)]):(cljs.core.truth_(G__16242_16633)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__16235_16642 = ((G__16240_16631)?(G__16229_16636[(1)]):(cljs.core.truth_(G__16242_16633)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__16236_16643 = ((G__16240_16631)?(G__16229_16636[(2)]):(cljs.core.truth_(G__16242_16633)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__16237_16644 = ((G__16241_16632)?(G__16230_16637[(0)]):(cljs.core.truth_(G__16243_16634)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16238_16645 = ((G__16241_16632)?(G__16230_16637[(1)]):(cljs.core.truth_(G__16243_16634)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16239_16646 = ((G__16241_16632)?(G__16230_16637[(2)]):(cljs.core.truth_(G__16243_16634)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = (function (){var a__10846__auto__ = (function (){var a__10846__auto__ = G__16231_16638;
var b__10847__auto__ = G__16234_16641;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})();
var b__10847__auto__ = G__16237_16644;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11221__auto__[(1)] = (function (){var a__10846__auto__ = (function (){var a__10846__auto__ = G__16232_16639;
var b__10847__auto__ = G__16235_16642;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})();
var b__10847__auto__ = G__16238_16645;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11221__auto__[(2)] = (function (){var a__10846__auto__ = (function (){var a__10846__auto__ = G__16233_16640;
var b__10847__auto__ = G__16236_16643;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})();
var b__10847__auto__ = G__16239_16646;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11210__auto__ = (new Float32Array((3)));
var G__16244_16647 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16245_16648 = v.buf;
(dest__11210__auto__[(0)] = (function (){var a__10853__auto__ = (G__16244_16647[(0)]);
var b__10854__auto__ = (G__16245_16648[(0)]);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10853__auto__ = (G__16244_16647[(1)]);
var b__10854__auto__ = (G__16245_16648[(1)]);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10853__auto__ = (G__16244_16647[(2)]);
var b__10854__auto__ = (G__16245_16648[(2)]);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = (function (){var a__10853__auto__ = (G__16244_16647[(0)]);
var b__10854__auto__ = v;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10853__auto__ = (G__16244_16647[(1)]);
var b__10854__auto__ = v;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10853__auto__ = (G__16244_16647[(2)]);
var b__10854__auto__ = v;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());
} else {
(dest__11210__auto__[(0)] = (function (){var a__10853__auto__ = (G__16244_16647[(0)]);
var b__10854__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10853__auto__ = (G__16244_16647[(1)]);
var b__10854__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10853__auto__ = (G__16244_16647[(2)]);
var b__10854__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__16258_16649 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__16259_16650 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16260_16651 = ((!(G__16258_16649))?typeof v === 'number':null);
var G__16261_16652 = ((!(G__16259_16650))?typeof v2 === 'number':null);
var G__16246_16653 = self__.buf;
var G__16247_16654 = ((G__16258_16649)?v.buf:null);
var G__16248_16655 = ((G__16259_16650)?v2.buf:null);
var G__16249_16656 = (G__16246_16653[(0)]);
var G__16250_16657 = (G__16246_16653[(1)]);
var G__16251_16658 = (G__16246_16653[(2)]);
var G__16252_16659 = ((G__16258_16649)?(G__16247_16654[(0)]):(cljs.core.truth_(G__16260_16651)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__16253_16660 = ((G__16258_16649)?(G__16247_16654[(1)]):(cljs.core.truth_(G__16260_16651)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__16254_16661 = ((G__16258_16649)?(G__16247_16654[(2)]):(cljs.core.truth_(G__16260_16651)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__16255_16662 = ((G__16259_16650)?(G__16248_16655[(0)]):(cljs.core.truth_(G__16261_16652)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16256_16663 = ((G__16259_16650)?(G__16248_16655[(1)]):(cljs.core.truth_(G__16261_16652)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16257_16664 = ((G__16259_16650)?(G__16248_16655[(2)]):(cljs.core.truth_(G__16261_16652)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = (function (){var a__10853__auto__ = (function (){var a__10853__auto__ = G__16249_16656;
var b__10854__auto__ = G__16252_16659;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})();
var b__10854__auto__ = G__16255_16662;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11221__auto__[(1)] = (function (){var a__10853__auto__ = (function (){var a__10853__auto__ = G__16250_16657;
var b__10854__auto__ = G__16253_16660;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})();
var b__10854__auto__ = G__16256_16663;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11221__auto__[(2)] = (function (){var a__10853__auto__ = (function (){var a__10853__auto__ = G__16251_16658;
var b__10854__auto__ = G__16254_16661;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})();
var b__10854__auto__ = G__16257_16664;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
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
var G__16262 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16263 = v.buf;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16262[(0)]),(G__16263[(0)]),eps))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16262[(1)]),(G__16263[(1)]),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__16262[(2)]),(G__16263[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16262[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16262[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__16262[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
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
var G__16264 = self__.buf;
var G__16265 = (G__16264[(0)]);
var G__16266 = (G__16264[(1)]);
var G__16267 = (G__16264[(2)]);
return Math.sqrt((((G__16265 * G__16265) + (G__16266 * G__16266)) + (G__16267 * G__16267)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__16268 = self__.buf;
var G__16269 = (G__16268[(0)]);
var G__16270 = (G__16268[(1)]);
var G__16271 = (G__16268[(2)]);
return (((G__16269 * G__16269) + (G__16270 * G__16270)) + (G__16271 * G__16271));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__16272_16665 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16273_16666 = v.buf;
(b[(0)] = (((G__16272_16665[(0)]) + (G__16273_16666[(0)])) * 0.5));

(b[(1)] = (((G__16272_16665[(1)]) + (G__16273_16666[(1)])) * 0.5));

(b[(2)] = (((G__16272_16665[(2)]) + (G__16273_16666[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__16272_16665[(0)]) + v) * 0.5));

(b[(1)] = (((G__16272_16665[(1)]) + v) * 0.5));

(b[(2)] = (((G__16272_16665[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__16272_16665[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__16272_16665[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__16272_16665[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__16286_16667 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__16287_16668 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16288_16669 = ((!(G__16286_16667))?typeof v === 'number':null);
var G__16289_16670 = ((!(G__16287_16668))?typeof v2 === 'number':null);
var G__16274_16671 = self__.buf;
var G__16275_16672 = ((G__16286_16667)?v.buf:null);
var G__16276_16673 = ((G__16287_16668)?v2.buf:null);
var G__16277_16674 = (G__16274_16671[(0)]);
var G__16278_16675 = (G__16274_16671[(1)]);
var G__16279_16676 = (G__16274_16671[(2)]);
var G__16280_16677 = ((G__16286_16667)?(G__16275_16672[(0)]):(cljs.core.truth_(G__16288_16669)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__16281_16678 = ((G__16286_16667)?(G__16275_16672[(1)]):(cljs.core.truth_(G__16288_16669)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__16282_16679 = ((G__16286_16667)?(G__16275_16672[(2)]):(cljs.core.truth_(G__16288_16669)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__16283_16680 = ((G__16287_16668)?(G__16276_16673[(0)]):(cljs.core.truth_(G__16289_16670)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16284_16681 = ((G__16287_16668)?(G__16276_16673[(1)]):(cljs.core.truth_(G__16289_16670)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16285_16682 = ((G__16287_16668)?(G__16276_16673[(2)]):(cljs.core.truth_(G__16289_16670)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(b[(0)] = (((G__16280_16677 - G__16277_16674) * G__16283_16680) + G__16277_16674));

(b[(1)] = (((G__16281_16678 - G__16278_16675) * G__16284_16681) + G__16278_16675));

(b[(2)] = (((G__16282_16679 - G__16279_16676) * G__16285_16682) + G__16279_16676));

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
var G__16302_16683 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16303_16684 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__16304_16685 = ((!(G__16302_16683))?typeof b === 'number':null);
var G__16305_16686 = ((!(G__16303_16684))?typeof c === 'number':null);
var G__16290_16687 = self__.buf;
var G__16291_16688 = ((G__16302_16683)?b.buf:null);
var G__16292_16689 = ((G__16303_16684)?c.buf:null);
var G__16293_16690 = (G__16290_16687[(0)]);
var G__16294_16691 = (G__16290_16687[(1)]);
var G__16295_16692 = (G__16290_16687[(2)]);
var G__16296_16693 = ((G__16302_16683)?(G__16291_16688[(0)]):(cljs.core.truth_(G__16304_16685)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__16297_16694 = ((G__16302_16683)?(G__16291_16688[(1)]):(cljs.core.truth_(G__16304_16685)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__16298_16695 = ((G__16302_16683)?(G__16291_16688[(2)]):(cljs.core.truth_(G__16304_16685)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__16299_16696 = ((G__16303_16684)?(G__16292_16689[(0)]):(cljs.core.truth_(G__16305_16686)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__16300_16697 = ((G__16303_16684)?(G__16292_16689[(1)]):(cljs.core.truth_(G__16305_16686)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__16301_16698 = ((G__16303_16684)?(G__16292_16689[(2)]):(cljs.core.truth_(G__16305_16686)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_16699 = (((G__16296_16693 - G__16293_16690) * u) + G__16293_16690);
var y1_16700 = (((G__16297_16694 - G__16294_16691) * u) + G__16294_16691);
var z1_16701 = (((G__16298_16695 - G__16295_16692) * u) + G__16295_16692);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__16299_16696) * u) + G__16299_16696) - x1_16699) * v) + x1_16699));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__16300_16697) * u) + G__16300_16697) - y1_16700) * v) + y1_16700));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__16301_16698) * u) + G__16301_16698) - z1_16701) * v) + z1_16701));

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

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"thi.ng.geom.core.vector/Vec3");
});

thi.ng.geom.core.vector.__GT_Vec3 = (function thi$ng$geom$core$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__16704){
var G__16702 = (((G__16704 instanceof thi.ng.geom.core.vector.Vec2))?G__16704.buf:G__16704.buf);
return (G__16702[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__16707){
var G__16705 = (((G__16707 instanceof thi.ng.geom.core.vector.Vec2))?G__16707.buf:G__16707.buf);
var G__16706 = (new Float32Array(2));
(G__16706[(0)] = (G__16705[(0)]));

(G__16706[(1)] = (G__16705[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__16706,null,cljs.core.meta.call(null,G__16707)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__16710){
var G__16708 = (((G__16710 instanceof thi.ng.geom.core.vector.Vec2))?G__16710.buf:G__16710.buf);
var G__16709 = (new Float32Array(3));
(G__16709[(0)] = (G__16708[(0)]));

(G__16709[(1)] = (G__16708[(0)]));

(G__16709[(2)] = (G__16708[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16709,null,cljs.core.meta.call(null,G__16710)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__16713){
var G__16711 = (((G__16713 instanceof thi.ng.geom.core.vector.Vec2))?G__16713.buf:G__16713.buf);
var G__16712 = (new Float32Array(3));
(G__16712[(0)] = (G__16711[(0)]));

(G__16712[(1)] = (G__16711[(0)]));

(G__16712[(2)] = (G__16711[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16712,null,cljs.core.meta.call(null,G__16713)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__16716){
if((G__16716 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16716","G__16716",550777874,null))))].join('')));
}

var G__16714 = (((G__16716 instanceof thi.ng.geom.core.vector.Vec2))?G__16716.buf:G__16716.buf);
var G__16715 = (new Float32Array(3));
(G__16715[(0)] = (G__16714[(0)]));

(G__16715[(1)] = (G__16714[(0)]));

(G__16715[(2)] = (G__16714[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16715,null,cljs.core.meta.call(null,G__16716)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__16719){
var G__16717 = (((G__16719 instanceof thi.ng.geom.core.vector.Vec2))?G__16719.buf:G__16719.buf);
var G__16718 = (new Float32Array(2));
(G__16718[(0)] = (G__16717[(0)]));

(G__16718[(1)] = (G__16717[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__16718,null,cljs.core.meta.call(null,G__16719)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__16722){
var G__16720 = (((G__16722 instanceof thi.ng.geom.core.vector.Vec2))?G__16722.buf:G__16722.buf);
var G__16721 = (new Float32Array(3));
(G__16721[(0)] = (G__16720[(0)]));

(G__16721[(1)] = (G__16720[(1)]));

(G__16721[(2)] = (G__16720[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16721,null,cljs.core.meta.call(null,G__16722)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__16725){
var G__16723 = (((G__16725 instanceof thi.ng.geom.core.vector.Vec2))?G__16725.buf:G__16725.buf);
var G__16724 = (new Float32Array(3));
(G__16724[(0)] = (G__16723[(0)]));

(G__16724[(1)] = (G__16723[(1)]));

(G__16724[(2)] = (G__16723[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16724,null,cljs.core.meta.call(null,G__16725)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__16728){
if((G__16728 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16728","G__16728",1180468485,null))))].join('')));
}

var G__16726 = (((G__16728 instanceof thi.ng.geom.core.vector.Vec2))?G__16728.buf:G__16728.buf);
var G__16727 = (new Float32Array(3));
(G__16727[(0)] = (G__16726[(0)]));

(G__16727[(1)] = (G__16726[(1)]));

(G__16727[(2)] = (G__16726[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16727,null,cljs.core.meta.call(null,G__16728)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__16731){
if((G__16731 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16731","G__16731",-512565664,null))))].join('')));
}

var G__16729 = (((G__16731 instanceof thi.ng.geom.core.vector.Vec2))?G__16731.buf:G__16731.buf);
var G__16730 = (new Float32Array(2));
(G__16730[(0)] = (G__16729[(0)]));

(G__16730[(1)] = (G__16729[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__16730,null,cljs.core.meta.call(null,G__16731)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__16734){
if((G__16734 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16734","G__16734",406922854,null))))].join('')));
}

var G__16732 = (((G__16734 instanceof thi.ng.geom.core.vector.Vec2))?G__16734.buf:G__16734.buf);
var G__16733 = (new Float32Array(3));
(G__16733[(0)] = (G__16732[(0)]));

(G__16733[(1)] = (G__16732[(2)]));

(G__16733[(2)] = (G__16732[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16733,null,cljs.core.meta.call(null,G__16734)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__16737){
if((G__16737 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16737","G__16737",378177029,null))))].join('')));
}

var G__16735 = (((G__16737 instanceof thi.ng.geom.core.vector.Vec2))?G__16737.buf:G__16737.buf);
var G__16736 = (new Float32Array(3));
(G__16736[(0)] = (G__16735[(0)]));

(G__16736[(1)] = (G__16735[(2)]));

(G__16736[(2)] = (G__16735[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16736,null,cljs.core.meta.call(null,G__16737)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__16740){
if((G__16740 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16740","G__16740",-1679631376,null))))].join('')));
}

var G__16738 = (((G__16740 instanceof thi.ng.geom.core.vector.Vec2))?G__16740.buf:G__16740.buf);
var G__16739 = (new Float32Array(3));
(G__16739[(0)] = (G__16738[(0)]));

(G__16739[(1)] = (G__16738[(2)]));

(G__16739[(2)] = (G__16738[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16739,null,cljs.core.meta.call(null,G__16740)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__16743){
var G__16741 = (((G__16743 instanceof thi.ng.geom.core.vector.Vec2))?G__16743.buf:G__16743.buf);
return (G__16741[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__16746){
var G__16744 = (((G__16746 instanceof thi.ng.geom.core.vector.Vec2))?G__16746.buf:G__16746.buf);
var G__16745 = (new Float32Array(2));
(G__16745[(0)] = (G__16744[(1)]));

(G__16745[(1)] = (G__16744[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__16745,null,cljs.core.meta.call(null,G__16746)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__16749){
var G__16747 = (((G__16749 instanceof thi.ng.geom.core.vector.Vec2))?G__16749.buf:G__16749.buf);
var G__16748 = (new Float32Array(3));
(G__16748[(0)] = (G__16747[(1)]));

(G__16748[(1)] = (G__16747[(0)]));

(G__16748[(2)] = (G__16747[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16748,null,cljs.core.meta.call(null,G__16749)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__16752){
var G__16750 = (((G__16752 instanceof thi.ng.geom.core.vector.Vec2))?G__16752.buf:G__16752.buf);
var G__16751 = (new Float32Array(3));
(G__16751[(0)] = (G__16750[(1)]));

(G__16751[(1)] = (G__16750[(0)]));

(G__16751[(2)] = (G__16750[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16751,null,cljs.core.meta.call(null,G__16752)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__16755){
if((G__16755 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16755","G__16755",248455117,null))))].join('')));
}

var G__16753 = (((G__16755 instanceof thi.ng.geom.core.vector.Vec2))?G__16755.buf:G__16755.buf);
var G__16754 = (new Float32Array(3));
(G__16754[(0)] = (G__16753[(1)]));

(G__16754[(1)] = (G__16753[(0)]));

(G__16754[(2)] = (G__16753[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16754,null,cljs.core.meta.call(null,G__16755)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__16758){
var G__16756 = (((G__16758 instanceof thi.ng.geom.core.vector.Vec2))?G__16758.buf:G__16758.buf);
var G__16757 = (new Float32Array(2));
(G__16757[(0)] = (G__16756[(1)]));

(G__16757[(1)] = (G__16756[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__16757,null,cljs.core.meta.call(null,G__16758)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__16761){
var G__16759 = (((G__16761 instanceof thi.ng.geom.core.vector.Vec2))?G__16761.buf:G__16761.buf);
var G__16760 = (new Float32Array(3));
(G__16760[(0)] = (G__16759[(1)]));

(G__16760[(1)] = (G__16759[(1)]));

(G__16760[(2)] = (G__16759[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16760,null,cljs.core.meta.call(null,G__16761)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__16764){
var G__16762 = (((G__16764 instanceof thi.ng.geom.core.vector.Vec2))?G__16764.buf:G__16764.buf);
var G__16763 = (new Float32Array(3));
(G__16763[(0)] = (G__16762[(1)]));

(G__16763[(1)] = (G__16762[(1)]));

(G__16763[(2)] = (G__16762[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16763,null,cljs.core.meta.call(null,G__16764)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__16767){
if((G__16767 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16767","G__16767",-1279102406,null))))].join('')));
}

var G__16765 = (((G__16767 instanceof thi.ng.geom.core.vector.Vec2))?G__16767.buf:G__16767.buf);
var G__16766 = (new Float32Array(3));
(G__16766[(0)] = (G__16765[(1)]));

(G__16766[(1)] = (G__16765[(1)]));

(G__16766[(2)] = (G__16765[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16766,null,cljs.core.meta.call(null,G__16767)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__16770){
if((G__16770 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16770","G__16770",-987794523,null))))].join('')));
}

var G__16768 = (((G__16770 instanceof thi.ng.geom.core.vector.Vec2))?G__16770.buf:G__16770.buf);
var G__16769 = (new Float32Array(2));
(G__16769[(0)] = (G__16768[(1)]));

(G__16769[(1)] = (G__16768[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__16769,null,cljs.core.meta.call(null,G__16770)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__16773){
if((G__16773 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16773","G__16773",-457804512,null))))].join('')));
}

var G__16771 = (((G__16773 instanceof thi.ng.geom.core.vector.Vec2))?G__16773.buf:G__16773.buf);
var G__16772 = (new Float32Array(3));
(G__16772[(0)] = (G__16771[(1)]));

(G__16772[(1)] = (G__16771[(2)]));

(G__16772[(2)] = (G__16771[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16772,null,cljs.core.meta.call(null,G__16773)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__16776){
if((G__16776 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16776","G__16776",-888379118,null))))].join('')));
}

var G__16774 = (((G__16776 instanceof thi.ng.geom.core.vector.Vec2))?G__16776.buf:G__16776.buf);
var G__16775 = (new Float32Array(3));
(G__16775[(0)] = (G__16774[(1)]));

(G__16775[(1)] = (G__16774[(2)]));

(G__16775[(2)] = (G__16774[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16775,null,cljs.core.meta.call(null,G__16776)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__16779){
if((G__16779 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16779","G__16779",-662918617,null))))].join('')));
}

var G__16777 = (((G__16779 instanceof thi.ng.geom.core.vector.Vec2))?G__16779.buf:G__16779.buf);
var G__16778 = (new Float32Array(3));
(G__16778[(0)] = (G__16777[(1)]));

(G__16778[(1)] = (G__16777[(2)]));

(G__16778[(2)] = (G__16777[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16778,null,cljs.core.meta.call(null,G__16779)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__16782){
if((G__16782 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16782","G__16782",1236577555,null))))].join('')));
}

var G__16780 = (((G__16782 instanceof thi.ng.geom.core.vector.Vec2))?G__16782.buf:G__16782.buf);
return (G__16780[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__16785){
if((G__16785 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16785","G__16785",378412530,null))))].join('')));
}

var G__16783 = (((G__16785 instanceof thi.ng.geom.core.vector.Vec2))?G__16785.buf:G__16785.buf);
var G__16784 = (new Float32Array(2));
(G__16784[(0)] = (G__16783[(2)]));

(G__16784[(1)] = (G__16783[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__16784,null,cljs.core.meta.call(null,G__16785)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__16788){
if((G__16788 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16788","G__16788",-80262641,null))))].join('')));
}

var G__16786 = (((G__16788 instanceof thi.ng.geom.core.vector.Vec2))?G__16788.buf:G__16788.buf);
var G__16787 = (new Float32Array(3));
(G__16787[(0)] = (G__16786[(2)]));

(G__16787[(1)] = (G__16786[(0)]));

(G__16787[(2)] = (G__16786[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16787,null,cljs.core.meta.call(null,G__16788)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__16791){
if((G__16791 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16791","G__16791",-427433793,null))))].join('')));
}

var G__16789 = (((G__16791 instanceof thi.ng.geom.core.vector.Vec2))?G__16791.buf:G__16791.buf);
var G__16790 = (new Float32Array(3));
(G__16790[(0)] = (G__16789[(2)]));

(G__16790[(1)] = (G__16789[(0)]));

(G__16790[(2)] = (G__16789[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16790,null,cljs.core.meta.call(null,G__16791)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__16794){
if((G__16794 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16794","G__16794",83346794,null))))].join('')));
}

var G__16792 = (((G__16794 instanceof thi.ng.geom.core.vector.Vec2))?G__16794.buf:G__16794.buf);
var G__16793 = (new Float32Array(3));
(G__16793[(0)] = (G__16792[(2)]));

(G__16793[(1)] = (G__16792[(0)]));

(G__16793[(2)] = (G__16792[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16793,null,cljs.core.meta.call(null,G__16794)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__16797){
if((G__16797 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16797","G__16797",263991551,null))))].join('')));
}

var G__16795 = (((G__16797 instanceof thi.ng.geom.core.vector.Vec2))?G__16797.buf:G__16797.buf);
var G__16796 = (new Float32Array(2));
(G__16796[(0)] = (G__16795[(2)]));

(G__16796[(1)] = (G__16795[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__16796,null,cljs.core.meta.call(null,G__16797)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__16800){
if((G__16800 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16800","G__16800",1385527872,null))))].join('')));
}

var G__16798 = (((G__16800 instanceof thi.ng.geom.core.vector.Vec2))?G__16800.buf:G__16800.buf);
var G__16799 = (new Float32Array(3));
(G__16799[(0)] = (G__16798[(2)]));

(G__16799[(1)] = (G__16798[(1)]));

(G__16799[(2)] = (G__16798[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16799,null,cljs.core.meta.call(null,G__16800)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__16803){
if((G__16803 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16803","G__16803",1043948193,null))))].join('')));
}

var G__16801 = (((G__16803 instanceof thi.ng.geom.core.vector.Vec2))?G__16803.buf:G__16803.buf);
var G__16802 = (new Float32Array(3));
(G__16802[(0)] = (G__16801[(2)]));

(G__16802[(1)] = (G__16801[(1)]));

(G__16802[(2)] = (G__16801[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16802,null,cljs.core.meta.call(null,G__16803)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__16806){
if((G__16806 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16806","G__16806",-1171791988,null))))].join('')));
}

var G__16804 = (((G__16806 instanceof thi.ng.geom.core.vector.Vec2))?G__16806.buf:G__16806.buf);
var G__16805 = (new Float32Array(3));
(G__16805[(0)] = (G__16804[(2)]));

(G__16805[(1)] = (G__16804[(1)]));

(G__16805[(2)] = (G__16804[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16805,null,cljs.core.meta.call(null,G__16806)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__16809){
if((G__16809 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16809","G__16809",112935796,null))))].join('')));
}

var G__16807 = (((G__16809 instanceof thi.ng.geom.core.vector.Vec2))?G__16809.buf:G__16809.buf);
var G__16808 = (new Float32Array(2));
(G__16808[(0)] = (G__16807[(2)]));

(G__16808[(1)] = (G__16807[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__16808,null,cljs.core.meta.call(null,G__16809)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__16812){
if((G__16812 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16812","G__16812",-262419958,null))))].join('')));
}

var G__16810 = (((G__16812 instanceof thi.ng.geom.core.vector.Vec2))?G__16812.buf:G__16812.buf);
var G__16811 = (new Float32Array(3));
(G__16811[(0)] = (G__16810[(2)]));

(G__16811[(1)] = (G__16810[(2)]));

(G__16811[(2)] = (G__16810[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16811,null,cljs.core.meta.call(null,G__16812)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__16815){
if((G__16815 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16815","G__16815",1820607141,null))))].join('')));
}

var G__16813 = (((G__16815 instanceof thi.ng.geom.core.vector.Vec2))?G__16815.buf:G__16815.buf);
var G__16814 = (new Float32Array(3));
(G__16814[(0)] = (G__16813[(2)]));

(G__16814[(1)] = (G__16813[(2)]));

(G__16814[(2)] = (G__16813[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16814,null,cljs.core.meta.call(null,G__16815)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__16818){
if((G__16818 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16818","G__16818",-1784203544,null))))].join('')));
}

var G__16816 = (((G__16818 instanceof thi.ng.geom.core.vector.Vec2))?G__16818.buf:G__16818.buf);
var G__16817 = (new Float32Array(3));
(G__16817[(0)] = (G__16816[(2)]));

(G__16817[(1)] = (G__16816[(2)]));

(G__16817[(2)] = (G__16816[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16817,null,cljs.core.meta.call(null,G__16818)));
});
thi.ng.geom.core.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.core.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.core.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.core.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.core.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.core.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.core.vector.yy], null);
thi.ng.geom.core.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.core.vector.y,thi.ng.geom.core.vector.xzx,thi.ng.geom.core.vector.xyz,thi.ng.geom.core.vector.zzy,thi.ng.geom.core.vector.yx,thi.ng.geom.core.vector.xy,thi.ng.geom.core.vector.yyz,thi.ng.geom.core.vector.zxy,thi.ng.geom.core.vector.xzy,thi.ng.geom.core.vector.zxz,thi.ng.geom.core.vector.zx,thi.ng.geom.core.vector.xx,thi.ng.geom.core.vector.xxx,thi.ng.geom.core.vector.zy,thi.ng.geom.core.vector.zzx,thi.ng.geom.core.vector.zyx,thi.ng.geom.core.vector.yzx,thi.ng.geom.core.vector.z,thi.ng.geom.core.vector.yyx,thi.ng.geom.core.vector.xz,thi.ng.geom.core.vector.zyz,thi.ng.geom.core.vector.yy,thi.ng.geom.core.vector.xxz,thi.ng.geom.core.vector.yzy,thi.ng.geom.core.vector.yz,thi.ng.geom.core.vector.yxx,thi.ng.geom.core.vector.xyy,thi.ng.geom.core.vector.xxy,thi.ng.geom.core.vector.zz,thi.ng.geom.core.vector.zzz,thi.ng.geom.core.vector.x,thi.ng.geom.core.vector.xzz,thi.ng.geom.core.vector.yxz,thi.ng.geom.core.vector.zxx,thi.ng.geom.core.vector.yzz,thi.ng.geom.core.vector.xyx,thi.ng.geom.core.vector.yxy,thi.ng.geom.core.vector.yyy,thi.ng.geom.core.vector.zyy]);
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$core$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__4420__auto__ = (function (){var and__4938__auto__ = ((1) === c);
if(and__4938__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__4938__auto__;
}
})();
if(cljs.core.truth_(temp__4420__auto__)){
var idx = temp__4420__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__4420__auto____$1 = keymap.call(null,cljs.core.first.call(null,n__$1));
if(cljs.core.truth_(temp__4420__auto____$1)){
var idx = temp__4420__auto____$1;
(dest[(idx | (0))] = v.call(null,i));

var G__16819 = (i + (1));
var G__16820 = cljs.core.next.call(null,n__$1);
i = G__16819;
n__$1 = G__16820;
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
var G__16821 = null;
var G__16821__1 = (function (a){
return a;
});
var G__16821__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__16821 = function(a,b){
switch(arguments.length){
case 1:
return G__16821__1.call(this,a);
case 2:
return G__16821__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16821.cljs$core$IFn$_invoke$arity$1 = G__16821__1;
G__16821.cljs$core$IFn$_invoke$arity$2 = G__16821__2;
return G__16821;
})()
,acc,xs);
});
thi.ng.geom.core.vector.vec3_reduce_STAR_ = (function thi$ng$geom$core$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__16822 = null;
var G__16822__1 = (function (a){
return a;
});
var G__16822__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__16822 = function(a,b){
switch(arguments.length){
case 1:
return G__16822__1.call(this,a);
case 2:
return G__16822__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16822.cljs$core$IFn$_invoke$arity$1 = G__16822__1;
G__16822.cljs$core$IFn$_invoke$arity$2 = G__16822__2;
return G__16822;
})()
,acc,xs);
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.core.vector.vec2 = (function thi$ng$geom$core$vector$vec2(){
var G__16824 = arguments.length;
switch (G__16824) {
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
var G__16827 = arguments.length;
switch (G__16827) {
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
var G__16830 = arguments.length;
switch (G__16830) {
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
var G__16833 = arguments.length;
switch (G__16833) {
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
var G__16836 = arguments.length;
switch (G__16836) {
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
var G__16839 = arguments.length;
switch (G__16839) {
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