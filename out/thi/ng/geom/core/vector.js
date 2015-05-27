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
var G__15002 = self__.buf;
var G__15003 = (G__15002[(0)]);
var G__15004 = (G__15002[(1)]);
(b[(0)] = ((G__15003 * c) - (G__15004 * s)));

(b[(1)] = ((G__15003 * s) + (G__15004 * c)));

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
var G__15005 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15006 = v.buf;
return (((G__15005[(0)]) * (G__15006[(0)])) + ((G__15005[(1)]) * (G__15006[(1)])));
} else {
return (((G__15005[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__15005[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15007 = self__.buf;
var G__15008 = (G__15007[(0)]);
var G__15009 = (G__15007[(1)]);
var l = Math.sqrt(((G__15008 * G__15008) + (G__15009 * G__15009)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__15008 / l));

(b[(1)] = (G__15009 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__15010 = self__.buf;
var G__15011 = (G__15010[(0)]);
var G__15012 = (G__15010[(1)]);
var l = Math.sqrt(((G__15011 * G__15011) + (G__15012 * G__15012)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__15011 * l__$1));

(b[(1)] = (G__15012 * l__$1));

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
var G__15013 = self__.buf;
var G__15015 = (G__15013[(0)]);
var G__15016 = (G__15013[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15014 = v.buf;
var G__15017 = (G__15014[(0)]);
var G__15018 = (G__15014[(1)]);
var d = (((G__15015 * G__15017) + (G__15016 * G__15018)) + (2));
(b[(0)] = ((G__15017 * d) - G__15015));

(b[(1)] = ((G__15018 * d) - G__15016));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__15017 = cljs.core.nth.call(null,v,(0),0.0);
var G__15018 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__15015 * G__15017) + (G__15016 * G__15018)) + (2));
(b[(0)] = ((G__15017 * d) - G__15015));

(b[(1)] = ((G__15018 * d) - G__15016));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15019 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15020 = v.buf;
return (((G__15019[(0)]) * (G__15020[(1)])) - ((G__15019[(1)]) * (G__15020[(0)])));
} else {
return (((G__15019[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__15019[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
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
var G__15024_15351 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15025_15352 = v.buf;
(self__.buf[(0)] = ((G__15024_15351[(0)]) - (G__15025_15352[(0)])));

(self__.buf[(1)] = ((G__15024_15351[(1)]) - (G__15025_15352[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15024_15351[(0)]) - v));

(self__.buf[(1)] = ((G__15024_15351[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15024_15351[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15024_15351[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15033_15353 = typeof v1 === 'number';
var G__15034_15354 = typeof v2 === 'number';
if(((G__15033_15353)?G__15034_15354:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__15035_15355 = ((!(G__15033_15353))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15036_15356 = ((!(G__15034_15354))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15027_15357 = (cljs.core.truth_(G__15035_15355)?v1.buf:null);
var G__15028_15358 = (cljs.core.truth_(G__15036_15356)?v2.buf:null);
var G__15029_15359 = (cljs.core.truth_(G__15035_15355)?(G__15027_15357[(0)]):((G__15033_15353)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15030_15360 = (cljs.core.truth_(G__15035_15355)?(G__15027_15357[(1)]):((G__15033_15353)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15031_15361 = (cljs.core.truth_(G__15036_15356)?(G__15028_15358[(0)]):((G__15034_15354)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15032_15362 = (cljs.core.truth_(G__15036_15356)?(G__15028_15358[(1)]):((G__15034_15354)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__15029_15359) - G__15031_15361));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__15030_15360) - G__15032_15362));
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
var G__15037_15363 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15038_15364 = v.buf;
(self__.buf[(0)] = ((G__15037_15363[(0)]) * (G__15038_15364[(0)])));

(self__.buf[(1)] = ((G__15037_15363[(1)]) * (G__15038_15364[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15037_15363[(0)]) * v));

(self__.buf[(1)] = ((G__15037_15363[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15037_15363[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15037_15363[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15046_15365 = typeof v1 === 'number';
var G__15047_15366 = typeof v2 === 'number';
if(((G__15046_15365)?G__15047_15366:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__15048_15367 = ((!(G__15046_15365))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15049_15368 = ((!(G__15047_15366))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15040_15369 = (cljs.core.truth_(G__15048_15367)?v1.buf:null);
var G__15041_15370 = (cljs.core.truth_(G__15049_15368)?v2.buf:null);
var G__15042_15371 = (cljs.core.truth_(G__15048_15367)?(G__15040_15369[(0)]):((G__15046_15365)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15043_15372 = (cljs.core.truth_(G__15048_15367)?(G__15040_15369[(1)]):((G__15046_15365)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15044_15373 = (cljs.core.truth_(G__15049_15368)?(G__15041_15370[(0)]):((G__15047_15366)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15045_15374 = (cljs.core.truth_(G__15049_15368)?(G__15041_15370[(1)]):((G__15047_15366)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__15042_15371) * G__15044_15373));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__15043_15372) * G__15045_15374));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15059_15375 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15060_15376 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15061_15377 = ((!(G__15059_15375))?typeof a === 'number':null);
var G__15062_15378 = ((!(G__15060_15376))?typeof b === 'number':null);
var G__15050_15379 = self__.buf;
var G__15051_15380 = ((G__15059_15375)?a.buf:null);
var G__15052_15381 = ((G__15060_15376)?b.buf:null);
var G__15053_15382 = (G__15050_15379[(0)]);
var G__15054_15383 = (G__15050_15379[(1)]);
var G__15055_15384 = ((G__15059_15375)?(G__15051_15380[(0)]):(cljs.core.truth_(G__15061_15377)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15056_15385 = ((G__15059_15375)?(G__15051_15380[(1)]):(cljs.core.truth_(G__15061_15377)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15057_15386 = ((G__15060_15376)?(G__15052_15381[(0)]):(cljs.core.truth_(G__15062_15378)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15058_15387 = ((G__15060_15376)?(G__15052_15381[(1)]):(cljs.core.truth_(G__15062_15378)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__15053_15382 - G__15055_15384) * G__15057_15386));

(self__.buf[(1)] = ((G__15054_15383 - G__15056_15385) * G__15058_15387));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15072_15388 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15073_15389 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15074_15390 = ((!(G__15072_15388))?typeof a === 'number':null);
var G__15075_15391 = ((!(G__15073_15389))?typeof b === 'number':null);
var G__15063_15392 = self__.buf;
var G__15064_15393 = ((G__15072_15388)?a.buf:null);
var G__15065_15394 = ((G__15073_15389)?b.buf:null);
var G__15066_15395 = (G__15063_15392[(0)]);
var G__15067_15396 = (G__15063_15392[(1)]);
var G__15068_15397 = ((G__15072_15388)?(G__15064_15393[(0)]):(cljs.core.truth_(G__15074_15390)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15069_15398 = ((G__15072_15388)?(G__15064_15393[(1)]):(cljs.core.truth_(G__15074_15390)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15070_15399 = ((G__15073_15389)?(G__15065_15394[(0)]):(cljs.core.truth_(G__15075_15391)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15071_15400 = ((G__15073_15389)?(G__15065_15394[(1)]):(cljs.core.truth_(G__15075_15391)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__15066_15395 * G__15068_15397) - G__15070_15399));

(self__.buf[(1)] = ((G__15067_15396 * G__15069_15398) - G__15071_15400));

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
var G__15085_15401 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15086_15402 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15087_15403 = ((!(G__15085_15401))?typeof a === 'number':null);
var G__15088_15404 = ((!(G__15086_15402))?typeof b === 'number':null);
var G__15076_15405 = self__.buf;
var G__15077_15406 = ((G__15085_15401)?a.buf:null);
var G__15078_15407 = ((G__15086_15402)?b.buf:null);
var G__15079_15408 = (G__15076_15405[(0)]);
var G__15080_15409 = (G__15076_15405[(1)]);
var G__15081_15410 = ((G__15085_15401)?(G__15077_15406[(0)]):(cljs.core.truth_(G__15087_15403)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15082_15411 = ((G__15085_15401)?(G__15077_15406[(1)]):(cljs.core.truth_(G__15087_15403)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15083_15412 = ((G__15086_15402)?(G__15078_15407[(0)]):(cljs.core.truth_(G__15088_15404)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15084_15413 = ((G__15086_15402)?(G__15078_15407[(1)]):(cljs.core.truth_(G__15088_15404)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__15079_15408 * G__15081_15410) + G__15083_15412));

(self__.buf[(1)] = ((G__15080_15409 * G__15082_15411) + G__15084_15413));

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
var G__15089_15414 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15090_15415 = v.buf;
(self__.buf[(0)] = ((G__15089_15414[(0)]) / (G__15090_15415[(0)])));

(self__.buf[(1)] = ((G__15089_15414[(1)]) / (G__15090_15415[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15089_15414[(0)]) / v));

(self__.buf[(1)] = ((G__15089_15414[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15089_15414[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15089_15414[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15098_15416 = typeof v1 === 'number';
var G__15099_15417 = typeof v2 === 'number';
if(((G__15098_15416)?G__15099_15417:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__15100_15418 = ((!(G__15098_15416))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15101_15419 = ((!(G__15099_15417))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15092_15420 = (cljs.core.truth_(G__15100_15418)?v1.buf:null);
var G__15093_15421 = (cljs.core.truth_(G__15101_15419)?v2.buf:null);
var G__15094_15422 = (cljs.core.truth_(G__15100_15418)?(G__15092_15420[(0)]):((G__15098_15416)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15095_15423 = (cljs.core.truth_(G__15100_15418)?(G__15092_15420[(1)]):((G__15098_15416)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15096_15424 = (cljs.core.truth_(G__15101_15419)?(G__15093_15421[(0)]):((G__15099_15417)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15097_15425 = (cljs.core.truth_(G__15101_15419)?(G__15093_15421[(1)]):((G__15099_15417)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__15094_15422) / G__15096_15424));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__15095_15423) / G__15097_15425));
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
var G__15102_15426 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15103_15427 = v.buf;
(self__.buf[(0)] = ((G__15102_15426[(0)]) + (G__15103_15427[(0)])));

(self__.buf[(1)] = ((G__15102_15426[(1)]) + (G__15103_15427[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15102_15426[(0)]) + v));

(self__.buf[(1)] = ((G__15102_15426[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15102_15426[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15102_15426[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15111_15428 = typeof v1 === 'number';
var G__15112_15429 = typeof v2 === 'number';
if(((G__15111_15428)?G__15112_15429:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__15113_15430 = ((!(G__15111_15428))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15114_15431 = ((!(G__15112_15429))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15105_15432 = (cljs.core.truth_(G__15113_15430)?v1.buf:null);
var G__15106_15433 = (cljs.core.truth_(G__15114_15431)?v2.buf:null);
var G__15107_15434 = (cljs.core.truth_(G__15113_15430)?(G__15105_15432[(0)]):((G__15111_15428)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15108_15435 = (cljs.core.truth_(G__15113_15430)?(G__15105_15432[(1)]):((G__15111_15428)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15109_15436 = (cljs.core.truth_(G__15114_15431)?(G__15106_15433[(0)]):((G__15112_15429)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15110_15437 = (cljs.core.truth_(G__15114_15431)?(G__15106_15433[(1)]):((G__15112_15429)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__15107_15434) + G__15109_15436));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__15108_15435) + G__15110_15437));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15124_15438 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15125_15439 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15126_15440 = ((!(G__15124_15438))?typeof a === 'number':null);
var G__15127_15441 = ((!(G__15125_15439))?typeof b === 'number':null);
var G__15115_15442 = self__.buf;
var G__15116_15443 = ((G__15124_15438)?a.buf:null);
var G__15117_15444 = ((G__15125_15439)?b.buf:null);
var G__15118_15445 = (G__15115_15442[(0)]);
var G__15119_15446 = (G__15115_15442[(1)]);
var G__15120_15447 = ((G__15124_15438)?(G__15116_15443[(0)]):(cljs.core.truth_(G__15126_15440)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15121_15448 = ((G__15124_15438)?(G__15116_15443[(1)]):(cljs.core.truth_(G__15126_15440)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15122_15449 = ((G__15125_15439)?(G__15117_15444[(0)]):(cljs.core.truth_(G__15127_15441)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15123_15450 = ((G__15125_15439)?(G__15117_15444[(1)]):(cljs.core.truth_(G__15127_15441)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__15118_15445 + G__15120_15447) * G__15122_15449));

(self__.buf[(1)] = ((G__15119_15446 + G__15121_15448) * G__15123_15450));

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
var G__15128 = self__.buf;
var G__15130 = (G__15128[(0)]);
var G__15131 = (G__15128[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15129 = v.buf;
var G__15132 = (G__15129[(0)]);
var G__15133 = (G__15129[(1)]);
var dx = (G__15130 - G__15132);
var dy = (G__15131 - G__15133);
return ((dx * dx) + (dy * dy));
} else {
var G__15132 = cljs.core.nth.call(null,v,(0),0.0);
var G__15133 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__15130 - G__15132);
var dy = (G__15131 - G__15133);
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
var G__15143_15451 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15144_15452 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15145_15453 = ((!(G__15143_15451))?typeof a === 'number':null);
var G__15146_15454 = ((!(G__15144_15452))?typeof b === 'number':null);
var G__15134_15455 = self__.buf;
var G__15135_15456 = ((G__15143_15451)?a.buf:null);
var G__15136_15457 = ((G__15144_15452)?b.buf:null);
var G__15137_15458 = (G__15134_15455[(0)]);
var G__15138_15459 = (G__15134_15455[(1)]);
var G__15139_15460 = ((G__15143_15451)?(G__15135_15456[(0)]):(cljs.core.truth_(G__15145_15453)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15140_15461 = ((G__15143_15451)?(G__15135_15456[(1)]):(cljs.core.truth_(G__15145_15453)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15141_15462 = ((G__15144_15452)?(G__15136_15457[(0)]):(cljs.core.truth_(G__15146_15454)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15142_15463 = ((G__15144_15452)?(G__15136_15457[(1)]):(cljs.core.truth_(G__15146_15454)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__11126__auto__[(0)] = ((G__15137_15458 * G__15139_15460) - G__15141_15462));

(dest__11126__auto__[(1)] = ((G__15138_15459 * G__15140_15461) - G__15142_15463));

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
var G__15147_15464 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15148_15465 = v.buf;
(dest__11115__auto__[(0)] = ((G__15147_15464[(0)]) * (G__15148_15465[(0)])));

(dest__11115__auto__[(1)] = ((G__15147_15464[(1)]) * (G__15148_15465[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15147_15464[(0)]) * v));

(dest__11115__auto__[(1)] = ((G__15147_15464[(1)]) * v));
} else {
(dest__11115__auto__[(0)] = ((G__15147_15464[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15147_15464[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15149 = self__.buf;
var G__15152 = (new Float32Array((2)));
var G__15153 = (G__15149[(0)]);
var G__15154 = (G__15149[(1)]);
var G__15159 = typeof v1 === 'number';
var G__15160 = typeof v2 === 'number';
if(((G__15159)?G__15160:false)){
(G__15152[(0)] = (G__15153 * v1));

(G__15152[(1)] = (G__15154 * v2));
} else {
var G__15161_15466 = ((!(G__15159))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15162_15467 = ((!(G__15160))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15150_15468 = (cljs.core.truth_(G__15161_15466)?v1.buf:null);
var G__15151_15469 = (cljs.core.truth_(G__15162_15467)?v2.buf:null);
var G__15155_15470 = (cljs.core.truth_(G__15161_15466)?(G__15150_15468[(0)]):((G__15159)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__15156_15471 = (cljs.core.truth_(G__15161_15466)?(G__15150_15468[(1)]):((G__15159)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__15157_15472 = (cljs.core.truth_(G__15162_15467)?(G__15151_15469[(0)]):((G__15160)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__15158_15473 = (cljs.core.truth_(G__15162_15467)?(G__15151_15469[(1)]):((G__15160)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__15152[(0)] = ((G__15153 * G__15155_15470) * G__15157_15472));

(G__15152[(1)] = ((G__15154 * G__15156_15471) * G__15158_15473));
}

return (new thi.ng.geom.core.vector.Vec2(G__15152,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11089__auto__ = (new Float32Array((2)));
var G__15163_15474 = self__.buf;
(dest__11089__auto__[(0)] = (- (G__15163_15474[(0)])));

(dest__11089__auto__[(1)] = (- (G__15163_15474[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__11089__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11115__auto__ = (new Float32Array((2)));
var G__15164_15475 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15165_15476 = v.buf;
(dest__11115__auto__[(0)] = ((G__15164_15475[(0)]) - (G__15165_15476[(0)])));

(dest__11115__auto__[(1)] = ((G__15164_15475[(1)]) - (G__15165_15476[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15164_15475[(0)]) - v));

(dest__11115__auto__[(1)] = ((G__15164_15475[(1)]) - v));
} else {
(dest__11115__auto__[(0)] = ((G__15164_15475[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15164_15475[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15166 = self__.buf;
var G__15169 = (new Float32Array((2)));
var G__15170 = (G__15166[(0)]);
var G__15171 = (G__15166[(1)]);
var G__15176 = typeof v1 === 'number';
var G__15177 = typeof v2 === 'number';
if(((G__15176)?G__15177:false)){
(G__15169[(0)] = (G__15170 - v1));

(G__15169[(1)] = (G__15171 - v2));
} else {
var G__15178_15477 = ((!(G__15176))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15179_15478 = ((!(G__15177))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15167_15479 = (cljs.core.truth_(G__15178_15477)?v1.buf:null);
var G__15168_15480 = (cljs.core.truth_(G__15179_15478)?v2.buf:null);
var G__15172_15481 = (cljs.core.truth_(G__15178_15477)?(G__15167_15479[(0)]):((G__15176)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15173_15482 = (cljs.core.truth_(G__15178_15477)?(G__15167_15479[(1)]):((G__15176)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15174_15483 = (cljs.core.truth_(G__15179_15478)?(G__15168_15480[(0)]):((G__15177)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15175_15484 = (cljs.core.truth_(G__15179_15478)?(G__15168_15480[(1)]):((G__15177)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15169[(0)] = ((G__15170 - G__15172_15481) - G__15174_15483));

(G__15169[(1)] = ((G__15171 - G__15173_15482) - G__15175_15484));
}

return (new thi.ng.geom.core.vector.Vec2(G__15169,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11126__auto__ = (new Float32Array((2)));
var G__15189_15485 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15190_15486 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15191_15487 = ((!(G__15189_15485))?typeof a === 'number':null);
var G__15192_15488 = ((!(G__15190_15486))?typeof b === 'number':null);
var G__15180_15489 = self__.buf;
var G__15181_15490 = ((G__15189_15485)?a.buf:null);
var G__15182_15491 = ((G__15190_15486)?b.buf:null);
var G__15183_15492 = (G__15180_15489[(0)]);
var G__15184_15493 = (G__15180_15489[(1)]);
var G__15185_15494 = ((G__15189_15485)?(G__15181_15490[(0)]):(cljs.core.truth_(G__15191_15487)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15186_15495 = ((G__15189_15485)?(G__15181_15490[(1)]):(cljs.core.truth_(G__15191_15487)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15187_15496 = ((G__15190_15486)?(G__15182_15491[(0)]):(cljs.core.truth_(G__15192_15488)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15188_15497 = ((G__15190_15486)?(G__15182_15491[(1)]):(cljs.core.truth_(G__15192_15488)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__11126__auto__[(0)] = ((G__15183_15492 * G__15185_15494) + G__15187_15496));

(dest__11126__auto__[(1)] = ((G__15184_15493 * G__15186_15495) + G__15188_15497));

return (new thi.ng.geom.core.vector.Vec2(dest__11126__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11126__auto__ = (new Float32Array((2)));
var G__15202_15498 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15203_15499 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15204_15500 = ((!(G__15202_15498))?typeof a === 'number':null);
var G__15205_15501 = ((!(G__15203_15499))?typeof b === 'number':null);
var G__15193_15502 = self__.buf;
var G__15194_15503 = ((G__15202_15498)?a.buf:null);
var G__15195_15504 = ((G__15203_15499)?b.buf:null);
var G__15196_15505 = (G__15193_15502[(0)]);
var G__15197_15506 = (G__15193_15502[(1)]);
var G__15198_15507 = ((G__15202_15498)?(G__15194_15503[(0)]):(cljs.core.truth_(G__15204_15500)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15199_15508 = ((G__15202_15498)?(G__15194_15503[(1)]):(cljs.core.truth_(G__15204_15500)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15200_15509 = ((G__15203_15499)?(G__15195_15504[(0)]):(cljs.core.truth_(G__15205_15501)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15201_15510 = ((G__15203_15499)?(G__15195_15504[(1)]):(cljs.core.truth_(G__15205_15501)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__11126__auto__[(0)] = ((G__15196_15505 + G__15198_15507) * G__15200_15509));

(dest__11126__auto__[(1)] = ((G__15197_15506 + G__15199_15508) * G__15201_15510));

return (new thi.ng.geom.core.vector.Vec2(dest__11126__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11089__auto__ = (new Float32Array((2)));
var G__15206_15511 = self__.buf;
(dest__11089__auto__[(0)] = ((1) / (G__15206_15511[(0)])));

(dest__11089__auto__[(1)] = ((1) / (G__15206_15511[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__11089__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11115__auto__ = (new Float32Array((2)));
var G__15207_15512 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15208_15513 = v.buf;
(dest__11115__auto__[(0)] = ((G__15207_15512[(0)]) / (G__15208_15513[(0)])));

(dest__11115__auto__[(1)] = ((G__15207_15512[(1)]) / (G__15208_15513[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15207_15512[(0)]) / v));

(dest__11115__auto__[(1)] = ((G__15207_15512[(1)]) / v));
} else {
(dest__11115__auto__[(0)] = ((G__15207_15512[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15207_15512[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15209 = self__.buf;
var G__15212 = (new Float32Array((2)));
var G__15213 = (G__15209[(0)]);
var G__15214 = (G__15209[(1)]);
var G__15219 = typeof v1 === 'number';
var G__15220 = typeof v2 === 'number';
if(((G__15219)?G__15220:false)){
(G__15212[(0)] = (G__15213 / v1));

(G__15212[(1)] = (G__15214 / v2));
} else {
var G__15221_15514 = ((!(G__15219))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15222_15515 = ((!(G__15220))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15210_15516 = (cljs.core.truth_(G__15221_15514)?v1.buf:null);
var G__15211_15517 = (cljs.core.truth_(G__15222_15515)?v2.buf:null);
var G__15215_15518 = (cljs.core.truth_(G__15221_15514)?(G__15210_15516[(0)]):((G__15219)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15216_15519 = (cljs.core.truth_(G__15221_15514)?(G__15210_15516[(1)]):((G__15219)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15217_15520 = (cljs.core.truth_(G__15222_15515)?(G__15211_15517[(0)]):((G__15220)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15218_15521 = (cljs.core.truth_(G__15222_15515)?(G__15211_15517[(1)]):((G__15220)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15212[(0)] = ((G__15213 / G__15215_15518) / G__15217_15520));

(G__15212[(1)] = ((G__15214 / G__15216_15519) / G__15218_15521));
}

return (new thi.ng.geom.core.vector.Vec2(G__15212,null,self__._meta));
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
var G__15223_15522 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15224_15523 = v.buf;
(dest__11115__auto__[(0)] = ((G__15223_15522[(0)]) + (G__15224_15523[(0)])));

(dest__11115__auto__[(1)] = ((G__15223_15522[(1)]) + (G__15224_15523[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15223_15522[(0)]) + v));

(dest__11115__auto__[(1)] = ((G__15223_15522[(1)]) + v));
} else {
(dest__11115__auto__[(0)] = ((G__15223_15522[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15223_15522[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15225 = self__.buf;
var G__15228 = (new Float32Array((2)));
var G__15229 = (G__15225[(0)]);
var G__15230 = (G__15225[(1)]);
var G__15235 = typeof v1 === 'number';
var G__15236 = typeof v2 === 'number';
if(((G__15235)?G__15236:false)){
(G__15228[(0)] = (G__15229 + v1));

(G__15228[(1)] = (G__15230 + v2));
} else {
var G__15237_15524 = ((!(G__15235))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15238_15525 = ((!(G__15236))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15226_15526 = (cljs.core.truth_(G__15237_15524)?v1.buf:null);
var G__15227_15527 = (cljs.core.truth_(G__15238_15525)?v2.buf:null);
var G__15231_15528 = (cljs.core.truth_(G__15237_15524)?(G__15226_15526[(0)]):((G__15235)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15232_15529 = (cljs.core.truth_(G__15237_15524)?(G__15226_15526[(1)]):((G__15235)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15233_15530 = (cljs.core.truth_(G__15238_15525)?(G__15227_15527[(0)]):((G__15236)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15234_15531 = (cljs.core.truth_(G__15238_15525)?(G__15227_15527[(1)]):((G__15236)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15228[(0)] = ((G__15229 + G__15231_15528) + G__15233_15530));

(G__15228[(1)] = ((G__15230 + G__15232_15529) + G__15234_15531));
}

return (new thi.ng.geom.core.vector.Vec2(G__15228,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11089__auto__ = (new Float32Array((2)));
var G__15239_15532 = self__.buf;
(dest__11089__auto__[(0)] = thi.ng.common.math.core.abs.call(null,(G__15239_15532[(0)])));

(dest__11089__auto__[(1)] = thi.ng.common.math.core.abs.call(null,(G__15239_15532[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__11089__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11126__auto__ = (new Float32Array((2)));
var G__15249_15533 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__15250_15534 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15251_15535 = ((!(G__15249_15533))?typeof a === 'number':null);
var G__15252_15536 = ((!(G__15250_15534))?typeof b === 'number':null);
var G__15240_15537 = self__.buf;
var G__15241_15538 = ((G__15249_15533)?a.buf:null);
var G__15242_15539 = ((G__15250_15534)?b.buf:null);
var G__15243_15540 = (G__15240_15537[(0)]);
var G__15244_15541 = (G__15240_15537[(1)]);
var G__15245_15542 = ((G__15249_15533)?(G__15241_15538[(0)]):(cljs.core.truth_(G__15251_15535)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15246_15543 = ((G__15249_15533)?(G__15241_15538[(1)]):(cljs.core.truth_(G__15251_15535)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15247_15544 = ((G__15250_15534)?(G__15242_15539[(0)]):(cljs.core.truth_(G__15252_15536)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15248_15545 = ((G__15250_15534)?(G__15242_15539[(1)]):(cljs.core.truth_(G__15252_15536)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__11126__auto__[(0)] = ((G__15243_15540 - G__15245_15542) * G__15247_15544));

(dest__11126__auto__[(1)] = ((G__15244_15541 - G__15246_15543) * G__15248_15545));

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
var G__15253_15546 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15254_15547 = v.buf;
(dest__11115__auto__[(0)] = ((G__15253_15546[(0)]) + (G__15254_15547[(0)])));

(dest__11115__auto__[(1)] = ((G__15253_15546[(1)]) + (G__15254_15547[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15253_15546[(0)]) + v));

(dest__11115__auto__[(1)] = ((G__15253_15546[(1)]) + v));
} else {
(dest__11115__auto__[(0)] = ((G__15253_15546[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15253_15546[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15255 = self__.buf;
var G__15258 = (new Float32Array((2)));
var G__15259 = (G__15255[(0)]);
var G__15260 = (G__15255[(1)]);
var G__15265 = typeof v1 === 'number';
var G__15266 = typeof v2 === 'number';
if(((G__15265)?G__15266:false)){
(G__15258[(0)] = (G__15259 + v1));

(G__15258[(1)] = (G__15260 + v2));
} else {
var G__15267_15548 = ((!(G__15265))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15268_15549 = ((!(G__15266))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15256_15550 = (cljs.core.truth_(G__15267_15548)?v1.buf:null);
var G__15257_15551 = (cljs.core.truth_(G__15268_15549)?v2.buf:null);
var G__15261_15552 = (cljs.core.truth_(G__15267_15548)?(G__15256_15550[(0)]):((G__15265)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15262_15553 = (cljs.core.truth_(G__15267_15548)?(G__15256_15550[(1)]):((G__15265)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15263_15554 = (cljs.core.truth_(G__15268_15549)?(G__15257_15551[(0)]):((G__15266)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15264_15555 = (cljs.core.truth_(G__15268_15549)?(G__15257_15551[(1)]):((G__15266)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__15258[(0)] = ((G__15259 + G__15261_15552) + G__15263_15554));

(G__15258[(1)] = ((G__15260 + G__15262_15553) + G__15264_15555));
}

return (new thi.ng.geom.core.vector.Vec2(G__15258,null,self__._meta));
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
var G__15269_15556 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15270_15557 = v.buf;
(dest__11115__auto__[(0)] = ((G__15269_15556[(0)]) * (G__15270_15557[(0)])));

(dest__11115__auto__[(1)] = ((G__15269_15556[(1)]) * (G__15270_15557[(1)])));
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = ((G__15269_15556[(0)]) * v));

(dest__11115__auto__[(1)] = ((G__15269_15556[(1)]) * v));
} else {
(dest__11115__auto__[(0)] = ((G__15269_15556[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11115__auto__[(1)] = ((G__15269_15556[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__11115__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15271 = self__.buf;
var G__15274 = (new Float32Array((2)));
var G__15275 = (G__15271[(0)]);
var G__15276 = (G__15271[(1)]);
var G__15281 = typeof v1 === 'number';
var G__15282 = typeof v2 === 'number';
if(((G__15281)?G__15282:false)){
(G__15274[(0)] = (G__15275 * v1));

(G__15274[(1)] = (G__15276 * v2));
} else {
var G__15283_15558 = ((!(G__15281))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15284_15559 = ((!(G__15282))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__15272_15560 = (cljs.core.truth_(G__15283_15558)?v1.buf:null);
var G__15273_15561 = (cljs.core.truth_(G__15284_15559)?v2.buf:null);
var G__15277_15562 = (cljs.core.truth_(G__15283_15558)?(G__15272_15560[(0)]):((G__15281)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__15278_15563 = (cljs.core.truth_(G__15283_15558)?(G__15272_15560[(1)]):((G__15281)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__15279_15564 = (cljs.core.truth_(G__15284_15559)?(G__15273_15561[(0)]):((G__15282)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__15280_15565 = (cljs.core.truth_(G__15284_15559)?(G__15273_15561[(1)]):((G__15282)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__15274[(0)] = ((G__15275 * G__15277_15562) * G__15279_15564));

(G__15274[(1)] = ((G__15276 * G__15278_15563) * G__15280_15565));
}

return (new thi.ng.geom.core.vector.Vec2(G__15274,null,self__._meta));
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
var G__15566 = null;
var G__15566__2 = (function (self__,k){
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
var G__15566__3 = (function (self__,k,nf){
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
G__15566 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__15566__2.call(this,self__,k);
case 3:
return G__15566__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15566.cljs$core$IFn$_invoke$arity$2 = G__15566__2;
G__15566.cljs$core$IFn$_invoke$arity$3 = G__15566__3;
return G__15566;
})()
;

thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args15001){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15001)));
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
var G__15285_15567 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15286_15568 = v.buf;
(dest__11115__auto__[(0)] = (function (){var a__10846__auto__ = (G__15285_15567[(0)]);
var b__10847__auto__ = (G__15286_15568[(0)]);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10846__auto__ = (G__15285_15567[(1)]);
var b__10847__auto__ = (G__15286_15568[(1)]);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = (function (){var a__10846__auto__ = (G__15285_15567[(0)]);
var b__10847__auto__ = v;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10846__auto__ = (G__15285_15567[(1)]);
var b__10847__auto__ = v;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());
} else {
(dest__11115__auto__[(0)] = (function (){var a__10846__auto__ = (G__15285_15567[(0)]);
var b__10847__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10846__auto__ = (G__15285_15567[(1)]);
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
var G__15296_15569 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__15297_15570 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__15298_15571 = ((!(G__15296_15569))?typeof v === 'number':null);
var G__15299_15572 = ((!(G__15297_15570))?typeof v2 === 'number':null);
var G__15287_15573 = self__.buf;
var G__15288_15574 = ((G__15296_15569)?v.buf:null);
var G__15289_15575 = ((G__15297_15570)?v2.buf:null);
var G__15290_15576 = (G__15287_15573[(0)]);
var G__15291_15577 = (G__15287_15573[(1)]);
var G__15292_15578 = ((G__15296_15569)?(G__15288_15574[(0)]):(cljs.core.truth_(G__15298_15571)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__15293_15579 = ((G__15296_15569)?(G__15288_15574[(1)]):(cljs.core.truth_(G__15298_15571)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__15294_15580 = ((G__15297_15570)?(G__15289_15575[(0)]):(cljs.core.truth_(G__15299_15572)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15295_15581 = ((G__15297_15570)?(G__15289_15575[(1)]):(cljs.core.truth_(G__15299_15572)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__11126__auto__[(0)] = (function (){var a__10846__auto__ = (function (){var a__10846__auto__ = G__15290_15576;
var b__10847__auto__ = G__15292_15578;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})();
var b__10847__auto__ = G__15294_15580;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11126__auto__[(1)] = (function (){var a__10846__auto__ = (function (){var a__10846__auto__ = G__15291_15577;
var b__10847__auto__ = G__15293_15579;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})();
var b__10847__auto__ = G__15295_15581;
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
var G__15300_15582 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15301_15583 = v.buf;
(dest__11115__auto__[(0)] = (function (){var a__10853__auto__ = (G__15300_15582[(0)]);
var b__10854__auto__ = (G__15301_15583[(0)]);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10853__auto__ = (G__15300_15582[(1)]);
var b__10854__auto__ = (G__15301_15583[(1)]);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11115__auto__[(0)] = (function (){var a__10853__auto__ = (G__15300_15582[(0)]);
var b__10854__auto__ = v;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10853__auto__ = (G__15300_15582[(1)]);
var b__10854__auto__ = v;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());
} else {
(dest__11115__auto__[(0)] = (function (){var a__10853__auto__ = (G__15300_15582[(0)]);
var b__10854__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11115__auto__[(1)] = (function (){var a__10853__auto__ = (G__15300_15582[(1)]);
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
var G__15311_15584 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__15312_15585 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__15313_15586 = ((!(G__15311_15584))?typeof v === 'number':null);
var G__15314_15587 = ((!(G__15312_15585))?typeof v2 === 'number':null);
var G__15302_15588 = self__.buf;
var G__15303_15589 = ((G__15311_15584)?v.buf:null);
var G__15304_15590 = ((G__15312_15585)?v2.buf:null);
var G__15305_15591 = (G__15302_15588[(0)]);
var G__15306_15592 = (G__15302_15588[(1)]);
var G__15307_15593 = ((G__15311_15584)?(G__15303_15589[(0)]):(cljs.core.truth_(G__15313_15586)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__15308_15594 = ((G__15311_15584)?(G__15303_15589[(1)]):(cljs.core.truth_(G__15313_15586)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__15309_15595 = ((G__15312_15585)?(G__15304_15590[(0)]):(cljs.core.truth_(G__15314_15587)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15310_15596 = ((G__15312_15585)?(G__15304_15590[(1)]):(cljs.core.truth_(G__15314_15587)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__11126__auto__[(0)] = (function (){var a__10853__auto__ = (function (){var a__10853__auto__ = G__15305_15591;
var b__10854__auto__ = G__15307_15593;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})();
var b__10854__auto__ = G__15309_15595;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11126__auto__[(1)] = (function (){var a__10853__auto__ = (function (){var a__10853__auto__ = G__15306_15592;
var b__10854__auto__ = G__15308_15594;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})();
var b__10854__auto__ = G__15310_15596;
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
var G__15315 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15316 = v.buf;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__15315[(0)]),(G__15316[(0)]),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__15315[(1)]),(G__15316[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__15315[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__15315[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
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
var G__15317 = self__.buf;
var G__15318 = (G__15317[(0)]);
var G__15319 = (G__15317[(1)]);
return Math.sqrt(((G__15318 * G__15318) + (G__15319 * G__15319)));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15320 = self__.buf;
var G__15321 = (G__15320[(0)]);
var G__15322 = (G__15320[(1)]);
return ((G__15321 * G__15321) + (G__15322 * G__15322));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15323_15597 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__15324_15598 = v.buf;
(b[(0)] = (((G__15323_15597[(0)]) + (G__15324_15598[(0)])) * 0.5));

(b[(1)] = (((G__15323_15597[(1)]) + (G__15324_15598[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__15323_15597[(0)]) + v) * 0.5));

(b[(1)] = (((G__15323_15597[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__15323_15597[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__15323_15597[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15334_15599 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__15335_15600 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__15336_15601 = ((!(G__15334_15599))?typeof v === 'number':null);
var G__15337_15602 = ((!(G__15335_15600))?typeof v2 === 'number':null);
var G__15325_15603 = self__.buf;
var G__15326_15604 = ((G__15334_15599)?v.buf:null);
var G__15327_15605 = ((G__15335_15600)?v2.buf:null);
var G__15328_15606 = (G__15325_15603[(0)]);
var G__15329_15607 = (G__15325_15603[(1)]);
var G__15330_15608 = ((G__15334_15599)?(G__15326_15604[(0)]):(cljs.core.truth_(G__15336_15601)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__15331_15609 = ((G__15334_15599)?(G__15326_15604[(1)]):(cljs.core.truth_(G__15336_15601)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__15332_15610 = ((G__15335_15600)?(G__15327_15605[(0)]):(cljs.core.truth_(G__15337_15602)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15333_15611 = ((G__15335_15600)?(G__15327_15605[(1)]):(cljs.core.truth_(G__15337_15602)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(b[(0)] = (((G__15330_15608 - G__15328_15606) * G__15332_15610) + G__15328_15606));

(b[(1)] = (((G__15331_15609 - G__15329_15607) * G__15333_15611) + G__15329_15607));

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
var G__15347_15612 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__15348_15613 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__15349_15614 = ((!(G__15347_15612))?typeof b === 'number':null);
var G__15350_15615 = ((!(G__15348_15613))?typeof c === 'number':null);
var G__15338_15616 = self__.buf;
var G__15339_15617 = ((G__15347_15612)?b.buf:null);
var G__15340_15618 = ((G__15348_15613)?c.buf:null);
var G__15341_15619 = (G__15338_15616[(0)]);
var G__15342_15620 = (G__15338_15616[(1)]);
var G__15343_15621 = ((G__15347_15612)?(G__15339_15617[(0)]):(cljs.core.truth_(G__15349_15614)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15344_15622 = ((G__15347_15612)?(G__15339_15617[(1)]):(cljs.core.truth_(G__15349_15614)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__15345_15623 = ((G__15348_15613)?(G__15340_15618[(0)]):(cljs.core.truth_(G__15350_15615)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__15346_15624 = ((G__15348_15613)?(G__15340_15618[(1)]):(cljs.core.truth_(G__15350_15615)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_15625 = (((G__15343_15621 - G__15341_15619) * u) + G__15341_15619);
var y1_15626 = (((G__15344_15622 - G__15342_15620) * u) + G__15342_15620);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__15345_15623) * u) + G__15345_15623) - x1_15625) * v) + x1_15625));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__15346_15624) * u) + G__15346_15624) - y1_15626) * v) + y1_15626));

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
var G__15021 = self__.buf;
var G__15022 = (G__15021[(0)]);
var G__15023 = (G__15021[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__15022 * Math.cos(G__15023)));

(b[(1)] = (G__15022 * Math.sin(G__15023)));

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
var G__15628 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15629 = v.buf;
return ((((G__15628[(0)]) * (G__15629[(0)])) + ((G__15628[(1)]) * (G__15629[(1)]))) + ((G__15628[(2)]) * (G__15629[(2)])));
} else {
return ((((G__15628[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__15628[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__15628[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15630 = self__.buf;
var G__15631 = (G__15630[(0)]);
var G__15632 = (G__15630[(1)]);
var G__15633 = (G__15630[(2)]);
var l = Math.sqrt((((G__15631 * G__15631) + (G__15632 * G__15632)) + (G__15633 * G__15633)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__15631 / l));

(b[(1)] = (G__15632 / l));

(b[(2)] = (G__15633 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__15634 = self__.buf;
var G__15635 = (G__15634[(0)]);
var G__15636 = (G__15634[(1)]);
var G__15637 = (G__15634[(2)]);
var l = Math.sqrt((((G__15635 * G__15635) + (G__15636 * G__15636)) + (G__15637 * G__15637)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__15635 * l__$1));

(b[(1)] = (G__15636 * l__$1));

(b[(2)] = (G__15637 * l__$1));

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
var G__15638 = self__.buf;
var G__15639 = (G__15638[(0)]);
var G__15640 = (G__15638[(1)]);
var G__15641 = (G__15638[(2)]);
(b[(0)] = G__15639);

(b[(1)] = ((G__15640 * c) - (G__15641 * s)));

(b[(2)] = ((G__15640 * s) + (G__15641 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__15642 = self__.buf;
var G__15643 = (G__15642[(0)]);
var G__15644 = (G__15642[(1)]);
var G__15645 = (G__15642[(2)]);
(b[(0)] = ((G__15643 * c) + (G__15645 * s)));

(b[(1)] = G__15644);

(b[(2)] = ((G__15645 * c) - (G__15643 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__15646 = self__.buf;
var G__15647 = (G__15646[(0)]);
var G__15648 = (G__15646[(1)]);
var G__15649 = (G__15646[(2)]);
(b[(0)] = ((G__15647 * c) - (G__15648 * s)));

(b[(1)] = ((G__15647 * s) + (G__15648 * c)));

(b[(2)] = G__15649);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__15650 = self__.buf;
var G__15652 = (G__15650[(0)]);
var G__15653 = (G__15650[(1)]);
var G__15654 = (G__15650[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15651 = v.buf;
var G__15655 = (G__15651[(0)]);
var G__15656 = (G__15651[(1)]);
var G__15657 = (G__15651[(2)]);
var ux_SINGLEQUOTE_ = (G__15655 * G__15652);
var uy_SINGLEQUOTE_ = (G__15655 * G__15653);
var uz_SINGLEQUOTE_ = (G__15655 * G__15654);
var vx_SINGLEQUOTE_ = (G__15656 * G__15652);
var vy_SINGLEQUOTE_ = (G__15656 * G__15653);
var vz_SINGLEQUOTE_ = (G__15656 * G__15654);
var wx_SINGLEQUOTE_ = (G__15657 * G__15652);
var wy_SINGLEQUOTE_ = (G__15657 * G__15653);
var wz_SINGLEQUOTE_ = (G__15657 * G__15654);
var vx2 = (G__15655 * G__15655);
var vy2 = (G__15656 * G__15656);
var vz2 = (G__15657 * G__15657);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__15655) + ((((vy2 + vz2) * G__15652) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15655)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__15656) + ((((vx2 + vz2) * G__15653) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15656)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__15657) + ((((vx2 + vy2) * G__15654) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__15657)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__15655 = cljs.core.nth.call(null,v,(0),0.0);
var G__15656 = cljs.core.nth.call(null,v,(1),0.0);
var G__15657 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__15655 * G__15652);
var uy_SINGLEQUOTE_ = (G__15655 * G__15653);
var uz_SINGLEQUOTE_ = (G__15655 * G__15654);
var vx_SINGLEQUOTE_ = (G__15656 * G__15652);
var vy_SINGLEQUOTE_ = (G__15656 * G__15653);
var vz_SINGLEQUOTE_ = (G__15656 * G__15654);
var wx_SINGLEQUOTE_ = (G__15657 * G__15652);
var wy_SINGLEQUOTE_ = (G__15657 * G__15653);
var wz_SINGLEQUOTE_ = (G__15657 * G__15654);
var vx2 = (G__15655 * G__15655);
var vy2 = (G__15656 * G__15656);
var vz2 = (G__15657 * G__15657);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__15655) + ((((vy2 + vz2) * G__15652) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15655)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__15656) + ((((vx2 + vz2) * G__15653) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15656)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__15657) + ((((vx2 + vy2) * G__15654) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__15657)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

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
var G__15658 = self__.buf;
var G__15660 = (G__15658[(0)]);
var G__15661 = (G__15658[(1)]);
var G__15662 = (G__15658[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15659 = v.buf;
var G__15663 = (G__15659[(0)]);
var G__15664 = (G__15659[(1)]);
var G__15665 = (G__15659[(2)]);
var d = ((((G__15660 * G__15663) + (G__15661 * G__15664)) + (G__15662 * G__15665)) * 2.0);
(b[(0)] = ((G__15663 * d) - G__15660));

(b[(1)] = ((G__15664 * d) - G__15661));

(b[(2)] = ((G__15665 * d) - G__15662));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__15663 = cljs.core.nth.call(null,v,(0),0.0);
var G__15664 = cljs.core.nth.call(null,v,(1),0.0);
var G__15665 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__15660 * G__15663) + (G__15661 * G__15664)) + (G__15662 * G__15665)) * 2.0);
(b[(0)] = ((G__15663 * d) - G__15660));

(b[(1)] = ((G__15664 * d) - G__15661));

(b[(2)] = ((G__15665 * d) - G__15662));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__15666_16079 = self__.buf;
var G__15668_16080 = (G__15666_16079[(0)]);
var G__15669_16081 = (G__15666_16079[(1)]);
var G__15670_16082 = (G__15666_16079[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15667_16083 = v.buf;
var G__15671_16084 = (G__15667_16083[(0)]);
var G__15672_16085 = (G__15667_16083[(1)]);
var G__15673_16086 = (G__15667_16083[(2)]);
(b[(0)] = ((G__15669_16081 * G__15673_16086) - (G__15672_16085 * G__15670_16082)));

(b[(1)] = ((G__15670_16082 * G__15671_16084) - (G__15673_16086 * G__15668_16080)));

(b[(2)] = ((G__15668_16080 * G__15672_16085) - (G__15671_16084 * G__15669_16081)));
} else {
var G__15671_16087 = cljs.core.nth.call(null,v,(0),0.0);
var G__15672_16088 = cljs.core.nth.call(null,v,(1),0.0);
var G__15673_16089 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__15669_16081 * G__15673_16089) - (G__15672_16088 * G__15670_16082)));

(b[(1)] = ((G__15670_16082 * G__15671_16087) - (G__15673_16089 * G__15668_16080)));

(b[(2)] = ((G__15668_16080 * G__15672_16088) - (G__15671_16087 * G__15669_16081)));
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
var G__15674_16090 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15675_16091 = v.buf;
(self__.buf[(0)] = ((G__15674_16090[(0)]) - (G__15675_16091[(0)])));

(self__.buf[(1)] = ((G__15674_16090[(1)]) - (G__15675_16091[(1)])));

(self__.buf[(2)] = ((G__15674_16090[(2)]) - (G__15675_16091[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15674_16090[(0)]) - v));

(self__.buf[(1)] = ((G__15674_16090[(1)]) - v));

(self__.buf[(2)] = ((G__15674_16090[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15674_16090[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15674_16090[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__15674_16090[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15688_16092 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15689_16093 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15690_16094 = ((!(G__15688_16092))?typeof v1 === 'number':null);
var G__15691_16095 = ((!(G__15689_16093))?typeof v2 === 'number':null);
var G__15676_16096 = self__.buf;
var G__15677_16097 = ((G__15688_16092)?v1.buf:null);
var G__15678_16098 = ((G__15689_16093)?v2.buf:null);
var G__15679_16099 = (G__15676_16096[(0)]);
var G__15680_16100 = (G__15676_16096[(1)]);
var G__15681_16101 = (G__15676_16096[(2)]);
var G__15682_16102 = ((G__15688_16092)?(G__15677_16097[(0)]):(cljs.core.truth_(G__15690_16094)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15683_16103 = ((G__15688_16092)?(G__15677_16097[(1)]):(cljs.core.truth_(G__15690_16094)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15684_16104 = ((G__15688_16092)?(G__15677_16097[(2)]):(cljs.core.truth_(G__15690_16094)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15685_16105 = ((G__15689_16093)?(G__15678_16098[(0)]):(cljs.core.truth_(G__15691_16095)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15686_16106 = ((G__15689_16093)?(G__15678_16098[(1)]):(cljs.core.truth_(G__15691_16095)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15687_16107 = ((G__15689_16093)?(G__15678_16098[(2)]):(cljs.core.truth_(G__15691_16095)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__15679_16099 - G__15682_16102) - G__15685_16105));

(self__.buf[(1)] = ((G__15680_16100 - G__15683_16103) - G__15686_16106));

(self__.buf[(2)] = ((G__15681_16101 - G__15684_16104) - G__15687_16107));

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
var G__15692_16108 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15693_16109 = v.buf;
(self__.buf[(0)] = ((G__15692_16108[(0)]) * (G__15693_16109[(0)])));

(self__.buf[(1)] = ((G__15692_16108[(1)]) * (G__15693_16109[(1)])));

(self__.buf[(2)] = ((G__15692_16108[(2)]) * (G__15693_16109[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15692_16108[(0)]) * v));

(self__.buf[(1)] = ((G__15692_16108[(1)]) * v));

(self__.buf[(2)] = ((G__15692_16108[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15692_16108[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15692_16108[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__15692_16108[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15706_16110 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15707_16111 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15708_16112 = ((!(G__15706_16110))?typeof v1 === 'number':null);
var G__15709_16113 = ((!(G__15707_16111))?typeof v2 === 'number':null);
var G__15694_16114 = self__.buf;
var G__15695_16115 = ((G__15706_16110)?v1.buf:null);
var G__15696_16116 = ((G__15707_16111)?v2.buf:null);
var G__15697_16117 = (G__15694_16114[(0)]);
var G__15698_16118 = (G__15694_16114[(1)]);
var G__15699_16119 = (G__15694_16114[(2)]);
var G__15700_16120 = ((G__15706_16110)?(G__15695_16115[(0)]):(cljs.core.truth_(G__15708_16112)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15701_16121 = ((G__15706_16110)?(G__15695_16115[(1)]):(cljs.core.truth_(G__15708_16112)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15702_16122 = ((G__15706_16110)?(G__15695_16115[(2)]):(cljs.core.truth_(G__15708_16112)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15703_16123 = ((G__15707_16111)?(G__15696_16116[(0)]):(cljs.core.truth_(G__15709_16113)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15704_16124 = ((G__15707_16111)?(G__15696_16116[(1)]):(cljs.core.truth_(G__15709_16113)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15705_16125 = ((G__15707_16111)?(G__15696_16116[(2)]):(cljs.core.truth_(G__15709_16113)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__15697_16117 * G__15700_16120) * G__15703_16123));

(self__.buf[(1)] = ((G__15698_16118 * G__15701_16121) * G__15704_16124));

(self__.buf[(2)] = ((G__15699_16119 * G__15702_16122) * G__15705_16125));

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
var G__15722_16126 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15723_16127 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15724_16128 = ((!(G__15722_16126))?typeof a === 'number':null);
var G__15725_16129 = ((!(G__15723_16127))?typeof b === 'number':null);
var G__15710_16130 = self__.buf;
var G__15711_16131 = ((G__15722_16126)?a.buf:null);
var G__15712_16132 = ((G__15723_16127)?b.buf:null);
var G__15713_16133 = (G__15710_16130[(0)]);
var G__15714_16134 = (G__15710_16130[(1)]);
var G__15715_16135 = (G__15710_16130[(2)]);
var G__15716_16136 = ((G__15722_16126)?(G__15711_16131[(0)]):(cljs.core.truth_(G__15724_16128)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15717_16137 = ((G__15722_16126)?(G__15711_16131[(1)]):(cljs.core.truth_(G__15724_16128)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15718_16138 = ((G__15722_16126)?(G__15711_16131[(2)]):(cljs.core.truth_(G__15724_16128)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__15719_16139 = ((G__15723_16127)?(G__15712_16132[(0)]):(cljs.core.truth_(G__15725_16129)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15720_16140 = ((G__15723_16127)?(G__15712_16132[(1)]):(cljs.core.truth_(G__15725_16129)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__15721_16141 = ((G__15723_16127)?(G__15712_16132[(2)]):(cljs.core.truth_(G__15725_16129)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__15713_16133 - G__15716_16136) * G__15719_16139));

(self__.buf[(1)] = ((G__15714_16134 - G__15717_16137) * G__15720_16140));

(self__.buf[(2)] = ((G__15715_16135 - G__15718_16138) * G__15721_16141));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15738_16142 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15739_16143 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15740_16144 = ((!(G__15738_16142))?typeof a === 'number':null);
var G__15741_16145 = ((!(G__15739_16143))?typeof b === 'number':null);
var G__15726_16146 = self__.buf;
var G__15727_16147 = ((G__15738_16142)?a.buf:null);
var G__15728_16148 = ((G__15739_16143)?b.buf:null);
var G__15729_16149 = (G__15726_16146[(0)]);
var G__15730_16150 = (G__15726_16146[(1)]);
var G__15731_16151 = (G__15726_16146[(2)]);
var G__15732_16152 = ((G__15738_16142)?(G__15727_16147[(0)]):(cljs.core.truth_(G__15740_16144)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15733_16153 = ((G__15738_16142)?(G__15727_16147[(1)]):(cljs.core.truth_(G__15740_16144)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15734_16154 = ((G__15738_16142)?(G__15727_16147[(2)]):(cljs.core.truth_(G__15740_16144)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__15735_16155 = ((G__15739_16143)?(G__15728_16148[(0)]):(cljs.core.truth_(G__15741_16145)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15736_16156 = ((G__15739_16143)?(G__15728_16148[(1)]):(cljs.core.truth_(G__15741_16145)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__15737_16157 = ((G__15739_16143)?(G__15728_16148[(2)]):(cljs.core.truth_(G__15741_16145)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__15729_16149 * G__15732_16152) - G__15735_16155));

(self__.buf[(1)] = ((G__15730_16150 * G__15733_16153) - G__15736_16156));

(self__.buf[(2)] = ((G__15731_16151 * G__15734_16154) - G__15737_16157));

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
var G__15754_16158 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15755_16159 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15756_16160 = ((!(G__15754_16158))?typeof a === 'number':null);
var G__15757_16161 = ((!(G__15755_16159))?typeof b === 'number':null);
var G__15742_16162 = self__.buf;
var G__15743_16163 = ((G__15754_16158)?a.buf:null);
var G__15744_16164 = ((G__15755_16159)?b.buf:null);
var G__15745_16165 = (G__15742_16162[(0)]);
var G__15746_16166 = (G__15742_16162[(1)]);
var G__15747_16167 = (G__15742_16162[(2)]);
var G__15748_16168 = ((G__15754_16158)?(G__15743_16163[(0)]):(cljs.core.truth_(G__15756_16160)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15749_16169 = ((G__15754_16158)?(G__15743_16163[(1)]):(cljs.core.truth_(G__15756_16160)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15750_16170 = ((G__15754_16158)?(G__15743_16163[(2)]):(cljs.core.truth_(G__15756_16160)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__15751_16171 = ((G__15755_16159)?(G__15744_16164[(0)]):(cljs.core.truth_(G__15757_16161)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15752_16172 = ((G__15755_16159)?(G__15744_16164[(1)]):(cljs.core.truth_(G__15757_16161)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__15753_16173 = ((G__15755_16159)?(G__15744_16164[(2)]):(cljs.core.truth_(G__15757_16161)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__15745_16165 * G__15748_16168) + G__15751_16171));

(self__.buf[(1)] = ((G__15746_16166 * G__15749_16169) + G__15752_16172));

(self__.buf[(2)] = ((G__15747_16167 * G__15750_16170) + G__15753_16173));

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
var G__15758_16174 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15759_16175 = v.buf;
(self__.buf[(0)] = ((G__15758_16174[(0)]) / (G__15759_16175[(0)])));

(self__.buf[(1)] = ((G__15758_16174[(1)]) / (G__15759_16175[(1)])));

(self__.buf[(2)] = ((G__15758_16174[(2)]) / (G__15759_16175[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15758_16174[(0)]) / v));

(self__.buf[(1)] = ((G__15758_16174[(1)]) / v));

(self__.buf[(2)] = ((G__15758_16174[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15758_16174[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15758_16174[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__15758_16174[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15772_16176 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15773_16177 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15774_16178 = ((!(G__15772_16176))?typeof v1 === 'number':null);
var G__15775_16179 = ((!(G__15773_16177))?typeof v2 === 'number':null);
var G__15760_16180 = self__.buf;
var G__15761_16181 = ((G__15772_16176)?v1.buf:null);
var G__15762_16182 = ((G__15773_16177)?v2.buf:null);
var G__15763_16183 = (G__15760_16180[(0)]);
var G__15764_16184 = (G__15760_16180[(1)]);
var G__15765_16185 = (G__15760_16180[(2)]);
var G__15766_16186 = ((G__15772_16176)?(G__15761_16181[(0)]):(cljs.core.truth_(G__15774_16178)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15767_16187 = ((G__15772_16176)?(G__15761_16181[(1)]):(cljs.core.truth_(G__15774_16178)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15768_16188 = ((G__15772_16176)?(G__15761_16181[(2)]):(cljs.core.truth_(G__15774_16178)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15769_16189 = ((G__15773_16177)?(G__15762_16182[(0)]):(cljs.core.truth_(G__15775_16179)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15770_16190 = ((G__15773_16177)?(G__15762_16182[(1)]):(cljs.core.truth_(G__15775_16179)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15771_16191 = ((G__15773_16177)?(G__15762_16182[(2)]):(cljs.core.truth_(G__15775_16179)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__15763_16183 / G__15766_16186) / G__15769_16189));

(self__.buf[(1)] = ((G__15764_16184 / G__15767_16187) / G__15770_16190));

(self__.buf[(2)] = ((G__15765_16185 / G__15768_16188) / G__15771_16191));

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
var G__15776_16192 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15777_16193 = v.buf;
(self__.buf[(0)] = ((G__15776_16192[(0)]) + (G__15777_16193[(0)])));

(self__.buf[(1)] = ((G__15776_16192[(1)]) + (G__15777_16193[(1)])));

(self__.buf[(2)] = ((G__15776_16192[(2)]) + (G__15777_16193[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15776_16192[(0)]) + v));

(self__.buf[(1)] = ((G__15776_16192[(1)]) + v));

(self__.buf[(2)] = ((G__15776_16192[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15776_16192[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__15776_16192[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__15776_16192[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15790_16194 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15791_16195 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15792_16196 = ((!(G__15790_16194))?typeof v1 === 'number':null);
var G__15793_16197 = ((!(G__15791_16195))?typeof v2 === 'number':null);
var G__15778_16198 = self__.buf;
var G__15779_16199 = ((G__15790_16194)?v1.buf:null);
var G__15780_16200 = ((G__15791_16195)?v2.buf:null);
var G__15781_16201 = (G__15778_16198[(0)]);
var G__15782_16202 = (G__15778_16198[(1)]);
var G__15783_16203 = (G__15778_16198[(2)]);
var G__15784_16204 = ((G__15790_16194)?(G__15779_16199[(0)]):(cljs.core.truth_(G__15792_16196)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15785_16205 = ((G__15790_16194)?(G__15779_16199[(1)]):(cljs.core.truth_(G__15792_16196)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15786_16206 = ((G__15790_16194)?(G__15779_16199[(2)]):(cljs.core.truth_(G__15792_16196)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15787_16207 = ((G__15791_16195)?(G__15780_16200[(0)]):(cljs.core.truth_(G__15793_16197)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15788_16208 = ((G__15791_16195)?(G__15780_16200[(1)]):(cljs.core.truth_(G__15793_16197)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15789_16209 = ((G__15791_16195)?(G__15780_16200[(2)]):(cljs.core.truth_(G__15793_16197)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__15781_16201 + G__15784_16204) + G__15787_16207));

(self__.buf[(1)] = ((G__15782_16202 + G__15785_16205) + G__15788_16208));

(self__.buf[(2)] = ((G__15783_16203 + G__15786_16206) + G__15789_16209));

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
var G__15806_16210 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15807_16211 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15808_16212 = ((!(G__15806_16210))?typeof a === 'number':null);
var G__15809_16213 = ((!(G__15807_16211))?typeof b === 'number':null);
var G__15794_16214 = self__.buf;
var G__15795_16215 = ((G__15806_16210)?a.buf:null);
var G__15796_16216 = ((G__15807_16211)?b.buf:null);
var G__15797_16217 = (G__15794_16214[(0)]);
var G__15798_16218 = (G__15794_16214[(1)]);
var G__15799_16219 = (G__15794_16214[(2)]);
var G__15800_16220 = ((G__15806_16210)?(G__15795_16215[(0)]):(cljs.core.truth_(G__15808_16212)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15801_16221 = ((G__15806_16210)?(G__15795_16215[(1)]):(cljs.core.truth_(G__15808_16212)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15802_16222 = ((G__15806_16210)?(G__15795_16215[(2)]):(cljs.core.truth_(G__15808_16212)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__15803_16223 = ((G__15807_16211)?(G__15796_16216[(0)]):(cljs.core.truth_(G__15809_16213)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15804_16224 = ((G__15807_16211)?(G__15796_16216[(1)]):(cljs.core.truth_(G__15809_16213)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__15805_16225 = ((G__15807_16211)?(G__15796_16216[(2)]):(cljs.core.truth_(G__15809_16213)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__15797_16217 + G__15800_16220) * G__15803_16223));

(self__.buf[(1)] = ((G__15798_16218 + G__15801_16221) * G__15804_16224));

(self__.buf[(2)] = ((G__15799_16219 + G__15802_16222) * G__15805_16225));

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
var G__15810 = self__.buf;
var G__15812 = (G__15810[(0)]);
var G__15813 = (G__15810[(1)]);
var G__15814 = (G__15810[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15811 = v.buf;
var G__15815 = (G__15811[(0)]);
var G__15816 = (G__15811[(1)]);
var G__15817 = (G__15811[(2)]);
var dx = (G__15812 - G__15815);
var dy = (G__15813 - G__15816);
var dz = (G__15814 - G__15817);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__15815 = cljs.core.nth.call(null,v,(0),0.0);
var G__15816 = cljs.core.nth.call(null,v,(1),0.0);
var G__15817 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__15812 - G__15815);
var dy = (G__15813 - G__15816);
var dz = (G__15814 - G__15817);
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
var G__15830_16226 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15831_16227 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15832_16228 = ((!(G__15830_16226))?typeof a === 'number':null);
var G__15833_16229 = ((!(G__15831_16227))?typeof b === 'number':null);
var G__15818_16230 = self__.buf;
var G__15819_16231 = ((G__15830_16226)?a.buf:null);
var G__15820_16232 = ((G__15831_16227)?b.buf:null);
var G__15821_16233 = (G__15818_16230[(0)]);
var G__15822_16234 = (G__15818_16230[(1)]);
var G__15823_16235 = (G__15818_16230[(2)]);
var G__15824_16236 = ((G__15830_16226)?(G__15819_16231[(0)]):(cljs.core.truth_(G__15832_16228)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15825_16237 = ((G__15830_16226)?(G__15819_16231[(1)]):(cljs.core.truth_(G__15832_16228)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15826_16238 = ((G__15830_16226)?(G__15819_16231[(2)]):(cljs.core.truth_(G__15832_16228)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__15827_16239 = ((G__15831_16227)?(G__15820_16232[(0)]):(cljs.core.truth_(G__15833_16229)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15828_16240 = ((G__15831_16227)?(G__15820_16232[(1)]):(cljs.core.truth_(G__15833_16229)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__15829_16241 = ((G__15831_16227)?(G__15820_16232[(2)]):(cljs.core.truth_(G__15833_16229)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__15821_16233 * G__15824_16236) - G__15827_16239));

(dest__11221__auto__[(1)] = ((G__15822_16234 * G__15825_16237) - G__15828_16240));

(dest__11221__auto__[(2)] = ((G__15823_16235 * G__15826_16238) - G__15829_16241));

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
var G__15834_16242 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15835_16243 = v.buf;
(dest__11210__auto__[(0)] = ((G__15834_16242[(0)]) * (G__15835_16243[(0)])));

(dest__11210__auto__[(1)] = ((G__15834_16242[(1)]) * (G__15835_16243[(1)])));

(dest__11210__auto__[(2)] = ((G__15834_16242[(2)]) * (G__15835_16243[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__15834_16242[(0)]) * v));

(dest__11210__auto__[(1)] = ((G__15834_16242[(1)]) * v));

(dest__11210__auto__[(2)] = ((G__15834_16242[(2)]) * v));
} else {
(dest__11210__auto__[(0)] = ((G__15834_16242[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__15834_16242[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__15834_16242[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__15848_16244 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15849_16245 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15850_16246 = ((!(G__15848_16244))?typeof v1 === 'number':null);
var G__15851_16247 = ((!(G__15849_16245))?typeof v2 === 'number':null);
var G__15836_16248 = self__.buf;
var G__15837_16249 = ((G__15848_16244)?v1.buf:null);
var G__15838_16250 = ((G__15849_16245)?v2.buf:null);
var G__15839_16251 = (G__15836_16248[(0)]);
var G__15840_16252 = (G__15836_16248[(1)]);
var G__15841_16253 = (G__15836_16248[(2)]);
var G__15842_16254 = ((G__15848_16244)?(G__15837_16249[(0)]):(cljs.core.truth_(G__15850_16246)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15843_16255 = ((G__15848_16244)?(G__15837_16249[(1)]):(cljs.core.truth_(G__15850_16246)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15844_16256 = ((G__15848_16244)?(G__15837_16249[(2)]):(cljs.core.truth_(G__15850_16246)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15845_16257 = ((G__15849_16245)?(G__15838_16250[(0)]):(cljs.core.truth_(G__15851_16247)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15846_16258 = ((G__15849_16245)?(G__15838_16250[(1)]):(cljs.core.truth_(G__15851_16247)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15847_16259 = ((G__15849_16245)?(G__15838_16250[(2)]):(cljs.core.truth_(G__15851_16247)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__15839_16251 * G__15842_16254) * G__15845_16257));

(dest__11221__auto__[(1)] = ((G__15840_16252 * G__15843_16255) * G__15846_16258));

(dest__11221__auto__[(2)] = ((G__15841_16253 * G__15844_16256) * G__15847_16259));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__15852 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__15852[(0)]) * x));

(dest__11199__auto__[(1)] = ((G__15852[(1)]) * y));

(dest__11199__auto__[(2)] = ((G__15852[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__11199__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11193__auto__ = (new Float32Array((3)));
var G__15853_16260 = self__.buf;
(dest__11193__auto__[(0)] = (- (G__15853_16260[(0)])));

(dest__11193__auto__[(1)] = (- (G__15853_16260[(1)])));

(dest__11193__auto__[(2)] = (- (G__15853_16260[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__11193__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11210__auto__ = (new Float32Array((3)));
var G__15854_16261 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15855_16262 = v.buf;
(dest__11210__auto__[(0)] = ((G__15854_16261[(0)]) - (G__15855_16262[(0)])));

(dest__11210__auto__[(1)] = ((G__15854_16261[(1)]) - (G__15855_16262[(1)])));

(dest__11210__auto__[(2)] = ((G__15854_16261[(2)]) - (G__15855_16262[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__15854_16261[(0)]) - v));

(dest__11210__auto__[(1)] = ((G__15854_16261[(1)]) - v));

(dest__11210__auto__[(2)] = ((G__15854_16261[(2)]) - v));
} else {
(dest__11210__auto__[(0)] = ((G__15854_16261[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__15854_16261[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__15854_16261[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__15868_16263 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15869_16264 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15870_16265 = ((!(G__15868_16263))?typeof v1 === 'number':null);
var G__15871_16266 = ((!(G__15869_16264))?typeof v2 === 'number':null);
var G__15856_16267 = self__.buf;
var G__15857_16268 = ((G__15868_16263)?v1.buf:null);
var G__15858_16269 = ((G__15869_16264)?v2.buf:null);
var G__15859_16270 = (G__15856_16267[(0)]);
var G__15860_16271 = (G__15856_16267[(1)]);
var G__15861_16272 = (G__15856_16267[(2)]);
var G__15862_16273 = ((G__15868_16263)?(G__15857_16268[(0)]):(cljs.core.truth_(G__15870_16265)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15863_16274 = ((G__15868_16263)?(G__15857_16268[(1)]):(cljs.core.truth_(G__15870_16265)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15864_16275 = ((G__15868_16263)?(G__15857_16268[(2)]):(cljs.core.truth_(G__15870_16265)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15865_16276 = ((G__15869_16264)?(G__15858_16269[(0)]):(cljs.core.truth_(G__15871_16266)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15866_16277 = ((G__15869_16264)?(G__15858_16269[(1)]):(cljs.core.truth_(G__15871_16266)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15867_16278 = ((G__15869_16264)?(G__15858_16269[(2)]):(cljs.core.truth_(G__15871_16266)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__15859_16270 - G__15862_16273) - G__15865_16276));

(dest__11221__auto__[(1)] = ((G__15860_16271 - G__15863_16274) - G__15866_16277));

(dest__11221__auto__[(2)] = ((G__15861_16272 - G__15864_16275) - G__15867_16278));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__15872 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__15872[(0)]) - x));

(dest__11199__auto__[(1)] = ((G__15872[(1)]) - y));

(dest__11199__auto__[(2)] = ((G__15872[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__11199__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__15885_16279 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15886_16280 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15887_16281 = ((!(G__15885_16279))?typeof a === 'number':null);
var G__15888_16282 = ((!(G__15886_16280))?typeof b === 'number':null);
var G__15873_16283 = self__.buf;
var G__15874_16284 = ((G__15885_16279)?a.buf:null);
var G__15875_16285 = ((G__15886_16280)?b.buf:null);
var G__15876_16286 = (G__15873_16283[(0)]);
var G__15877_16287 = (G__15873_16283[(1)]);
var G__15878_16288 = (G__15873_16283[(2)]);
var G__15879_16289 = ((G__15885_16279)?(G__15874_16284[(0)]):(cljs.core.truth_(G__15887_16281)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__15880_16290 = ((G__15885_16279)?(G__15874_16284[(1)]):(cljs.core.truth_(G__15887_16281)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__15881_16291 = ((G__15885_16279)?(G__15874_16284[(2)]):(cljs.core.truth_(G__15887_16281)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__15882_16292 = ((G__15886_16280)?(G__15875_16285[(0)]):(cljs.core.truth_(G__15888_16282)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__15883_16293 = ((G__15886_16280)?(G__15875_16285[(1)]):(cljs.core.truth_(G__15888_16282)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__15884_16294 = ((G__15886_16280)?(G__15875_16285[(2)]):(cljs.core.truth_(G__15888_16282)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__15876_16286 * G__15879_16289) + G__15882_16292));

(dest__11221__auto__[(1)] = ((G__15877_16287 * G__15880_16290) + G__15883_16293));

(dest__11221__auto__[(2)] = ((G__15878_16288 * G__15881_16291) + G__15884_16294));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__15901_16295 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15902_16296 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15903_16297 = ((!(G__15901_16295))?typeof a === 'number':null);
var G__15904_16298 = ((!(G__15902_16296))?typeof b === 'number':null);
var G__15889_16299 = self__.buf;
var G__15890_16300 = ((G__15901_16295)?a.buf:null);
var G__15891_16301 = ((G__15902_16296)?b.buf:null);
var G__15892_16302 = (G__15889_16299[(0)]);
var G__15893_16303 = (G__15889_16299[(1)]);
var G__15894_16304 = (G__15889_16299[(2)]);
var G__15895_16305 = ((G__15901_16295)?(G__15890_16300[(0)]):(cljs.core.truth_(G__15903_16297)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15896_16306 = ((G__15901_16295)?(G__15890_16300[(1)]):(cljs.core.truth_(G__15903_16297)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15897_16307 = ((G__15901_16295)?(G__15890_16300[(2)]):(cljs.core.truth_(G__15903_16297)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__15898_16308 = ((G__15902_16296)?(G__15891_16301[(0)]):(cljs.core.truth_(G__15904_16298)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15899_16309 = ((G__15902_16296)?(G__15891_16301[(1)]):(cljs.core.truth_(G__15904_16298)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__15900_16310 = ((G__15902_16296)?(G__15891_16301[(2)]):(cljs.core.truth_(G__15904_16298)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__11221__auto__[(0)] = ((G__15892_16302 + G__15895_16305) * G__15898_16308));

(dest__11221__auto__[(1)] = ((G__15893_16303 + G__15896_16306) * G__15899_16309));

(dest__11221__auto__[(2)] = ((G__15894_16304 + G__15897_16307) * G__15900_16310));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11193__auto__ = (new Float32Array((3)));
var G__15905_16311 = self__.buf;
(dest__11193__auto__[(0)] = ((1) / (G__15905_16311[(0)])));

(dest__11193__auto__[(1)] = ((1) / (G__15905_16311[(1)])));

(dest__11193__auto__[(2)] = ((1) / (G__15905_16311[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__11193__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__11210__auto__ = (new Float32Array((3)));
var G__15906_16312 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15907_16313 = v.buf;
(dest__11210__auto__[(0)] = ((G__15906_16312[(0)]) / (G__15907_16313[(0)])));

(dest__11210__auto__[(1)] = ((G__15906_16312[(1)]) / (G__15907_16313[(1)])));

(dest__11210__auto__[(2)] = ((G__15906_16312[(2)]) / (G__15907_16313[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__15906_16312[(0)]) / v));

(dest__11210__auto__[(1)] = ((G__15906_16312[(1)]) / v));

(dest__11210__auto__[(2)] = ((G__15906_16312[(2)]) / v));
} else {
(dest__11210__auto__[(0)] = ((G__15906_16312[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__15906_16312[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__15906_16312[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__15920_16314 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15921_16315 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15922_16316 = ((!(G__15920_16314))?typeof v1 === 'number':null);
var G__15923_16317 = ((!(G__15921_16315))?typeof v2 === 'number':null);
var G__15908_16318 = self__.buf;
var G__15909_16319 = ((G__15920_16314)?v1.buf:null);
var G__15910_16320 = ((G__15921_16315)?v2.buf:null);
var G__15911_16321 = (G__15908_16318[(0)]);
var G__15912_16322 = (G__15908_16318[(1)]);
var G__15913_16323 = (G__15908_16318[(2)]);
var G__15914_16324 = ((G__15920_16314)?(G__15909_16319[(0)]):(cljs.core.truth_(G__15922_16316)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15915_16325 = ((G__15920_16314)?(G__15909_16319[(1)]):(cljs.core.truth_(G__15922_16316)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15916_16326 = ((G__15920_16314)?(G__15909_16319[(2)]):(cljs.core.truth_(G__15922_16316)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15917_16327 = ((G__15921_16315)?(G__15910_16320[(0)]):(cljs.core.truth_(G__15923_16317)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15918_16328 = ((G__15921_16315)?(G__15910_16320[(1)]):(cljs.core.truth_(G__15923_16317)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15919_16329 = ((G__15921_16315)?(G__15910_16320[(2)]):(cljs.core.truth_(G__15923_16317)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__15911_16321 / G__15914_16324) / G__15917_16327));

(dest__11221__auto__[(1)] = ((G__15912_16322 / G__15915_16325) / G__15918_16328));

(dest__11221__auto__[(2)] = ((G__15913_16323 / G__15916_16326) / G__15919_16329));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__15924 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__15924[(0)]) / x));

(dest__11199__auto__[(1)] = ((G__15924[(1)]) / y));

(dest__11199__auto__[(2)] = ((G__15924[(2)]) / z));

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
var G__15925_16330 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15926_16331 = v.buf;
(dest__11210__auto__[(0)] = ((G__15925_16330[(0)]) + (G__15926_16331[(0)])));

(dest__11210__auto__[(1)] = ((G__15925_16330[(1)]) + (G__15926_16331[(1)])));

(dest__11210__auto__[(2)] = ((G__15925_16330[(2)]) + (G__15926_16331[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__15925_16330[(0)]) + v));

(dest__11210__auto__[(1)] = ((G__15925_16330[(1)]) + v));

(dest__11210__auto__[(2)] = ((G__15925_16330[(2)]) + v));
} else {
(dest__11210__auto__[(0)] = ((G__15925_16330[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__15925_16330[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__15925_16330[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__15939_16332 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15940_16333 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15941_16334 = ((!(G__15939_16332))?typeof v1 === 'number':null);
var G__15942_16335 = ((!(G__15940_16333))?typeof v2 === 'number':null);
var G__15927_16336 = self__.buf;
var G__15928_16337 = ((G__15939_16332)?v1.buf:null);
var G__15929_16338 = ((G__15940_16333)?v2.buf:null);
var G__15930_16339 = (G__15927_16336[(0)]);
var G__15931_16340 = (G__15927_16336[(1)]);
var G__15932_16341 = (G__15927_16336[(2)]);
var G__15933_16342 = ((G__15939_16332)?(G__15928_16337[(0)]):(cljs.core.truth_(G__15941_16334)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15934_16343 = ((G__15939_16332)?(G__15928_16337[(1)]):(cljs.core.truth_(G__15941_16334)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15935_16344 = ((G__15939_16332)?(G__15928_16337[(2)]):(cljs.core.truth_(G__15941_16334)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15936_16345 = ((G__15940_16333)?(G__15929_16338[(0)]):(cljs.core.truth_(G__15942_16335)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15937_16346 = ((G__15940_16333)?(G__15929_16338[(1)]):(cljs.core.truth_(G__15942_16335)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15938_16347 = ((G__15940_16333)?(G__15929_16338[(2)]):(cljs.core.truth_(G__15942_16335)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__15930_16339 + G__15933_16342) + G__15936_16345));

(dest__11221__auto__[(1)] = ((G__15931_16340 + G__15934_16343) + G__15937_16346));

(dest__11221__auto__[(2)] = ((G__15932_16341 + G__15935_16344) + G__15938_16347));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__15943 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__15943[(0)]) + x));

(dest__11199__auto__[(1)] = ((G__15943[(1)]) + y));

(dest__11199__auto__[(2)] = ((G__15943[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__11199__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__11193__auto__ = (new Float32Array((3)));
var G__15944_16348 = self__.buf;
(dest__11193__auto__[(0)] = thi.ng.common.math.core.abs.call(null,(G__15944_16348[(0)])));

(dest__11193__auto__[(1)] = thi.ng.common.math.core.abs.call(null,(G__15944_16348[(1)])));

(dest__11193__auto__[(2)] = thi.ng.common.math.core.abs.call(null,(G__15944_16348[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__11193__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__15957_16349 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__15958_16350 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__15959_16351 = ((!(G__15957_16349))?typeof a === 'number':null);
var G__15960_16352 = ((!(G__15958_16350))?typeof b === 'number':null);
var G__15945_16353 = self__.buf;
var G__15946_16354 = ((G__15957_16349)?a.buf:null);
var G__15947_16355 = ((G__15958_16350)?b.buf:null);
var G__15948_16356 = (G__15945_16353[(0)]);
var G__15949_16357 = (G__15945_16353[(1)]);
var G__15950_16358 = (G__15945_16353[(2)]);
var G__15951_16359 = ((G__15957_16349)?(G__15946_16354[(0)]):(cljs.core.truth_(G__15959_16351)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__15952_16360 = ((G__15957_16349)?(G__15946_16354[(1)]):(cljs.core.truth_(G__15959_16351)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__15953_16361 = ((G__15957_16349)?(G__15946_16354[(2)]):(cljs.core.truth_(G__15959_16351)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__15954_16362 = ((G__15958_16350)?(G__15947_16355[(0)]):(cljs.core.truth_(G__15960_16352)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__15955_16363 = ((G__15958_16350)?(G__15947_16355[(1)]):(cljs.core.truth_(G__15960_16352)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__15956_16364 = ((G__15958_16350)?(G__15947_16355[(2)]):(cljs.core.truth_(G__15960_16352)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__11221__auto__[(0)] = ((G__15948_16356 - G__15951_16359) * G__15954_16362));

(dest__11221__auto__[(1)] = ((G__15949_16357 - G__15952_16360) * G__15955_16363));

(dest__11221__auto__[(2)] = ((G__15950_16358 - G__15953_16361) * G__15956_16364));

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
var G__15961_16365 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15962_16366 = v.buf;
(dest__11210__auto__[(0)] = ((G__15961_16365[(0)]) + (G__15962_16366[(0)])));

(dest__11210__auto__[(1)] = ((G__15961_16365[(1)]) + (G__15962_16366[(1)])));

(dest__11210__auto__[(2)] = ((G__15961_16365[(2)]) + (G__15962_16366[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__15961_16365[(0)]) + v));

(dest__11210__auto__[(1)] = ((G__15961_16365[(1)]) + v));

(dest__11210__auto__[(2)] = ((G__15961_16365[(2)]) + v));
} else {
(dest__11210__auto__[(0)] = ((G__15961_16365[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__15961_16365[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__15961_16365[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__15975_16367 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15976_16368 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15977_16369 = ((!(G__15975_16367))?typeof v1 === 'number':null);
var G__15978_16370 = ((!(G__15976_16368))?typeof v2 === 'number':null);
var G__15963_16371 = self__.buf;
var G__15964_16372 = ((G__15975_16367)?v1.buf:null);
var G__15965_16373 = ((G__15976_16368)?v2.buf:null);
var G__15966_16374 = (G__15963_16371[(0)]);
var G__15967_16375 = (G__15963_16371[(1)]);
var G__15968_16376 = (G__15963_16371[(2)]);
var G__15969_16377 = ((G__15975_16367)?(G__15964_16372[(0)]):(cljs.core.truth_(G__15977_16369)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__15970_16378 = ((G__15975_16367)?(G__15964_16372[(1)]):(cljs.core.truth_(G__15977_16369)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__15971_16379 = ((G__15975_16367)?(G__15964_16372[(2)]):(cljs.core.truth_(G__15977_16369)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__15972_16380 = ((G__15976_16368)?(G__15965_16373[(0)]):(cljs.core.truth_(G__15978_16370)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__15973_16381 = ((G__15976_16368)?(G__15965_16373[(1)]):(cljs.core.truth_(G__15978_16370)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__15974_16382 = ((G__15976_16368)?(G__15965_16373[(2)]):(cljs.core.truth_(G__15978_16370)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = ((G__15966_16374 + G__15969_16377) + G__15972_16380));

(dest__11221__auto__[(1)] = ((G__15967_16375 + G__15970_16378) + G__15973_16381));

(dest__11221__auto__[(2)] = ((G__15968_16376 + G__15971_16379) + G__15974_16382));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__15979 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__15979[(0)]) + x));

(dest__11199__auto__[(1)] = ((G__15979[(1)]) + y));

(dest__11199__auto__[(2)] = ((G__15979[(2)]) + z));

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
var G__15980_16383 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__15981_16384 = v.buf;
(dest__11210__auto__[(0)] = ((G__15980_16383[(0)]) * (G__15981_16384[(0)])));

(dest__11210__auto__[(1)] = ((G__15980_16383[(1)]) * (G__15981_16384[(1)])));

(dest__11210__auto__[(2)] = ((G__15980_16383[(2)]) * (G__15981_16384[(2)])));
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = ((G__15980_16383[(0)]) * v));

(dest__11210__auto__[(1)] = ((G__15980_16383[(1)]) * v));

(dest__11210__auto__[(2)] = ((G__15980_16383[(2)]) * v));
} else {
(dest__11210__auto__[(0)] = ((G__15980_16383[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__11210__auto__[(1)] = ((G__15980_16383[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__11210__auto__[(2)] = ((G__15980_16383[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__11210__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__11221__auto__ = (new Float32Array((3)));
var G__15994_16385 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__15995_16386 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__15996_16387 = ((!(G__15994_16385))?typeof v1 === 'number':null);
var G__15997_16388 = ((!(G__15995_16386))?typeof v2 === 'number':null);
var G__15982_16389 = self__.buf;
var G__15983_16390 = ((G__15994_16385)?v1.buf:null);
var G__15984_16391 = ((G__15995_16386)?v2.buf:null);
var G__15985_16392 = (G__15982_16389[(0)]);
var G__15986_16393 = (G__15982_16389[(1)]);
var G__15987_16394 = (G__15982_16389[(2)]);
var G__15988_16395 = ((G__15994_16385)?(G__15983_16390[(0)]):(cljs.core.truth_(G__15996_16387)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__15989_16396 = ((G__15994_16385)?(G__15983_16390[(1)]):(cljs.core.truth_(G__15996_16387)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__15990_16397 = ((G__15994_16385)?(G__15983_16390[(2)]):(cljs.core.truth_(G__15996_16387)?v1:cljs.core.nth.call(null,v1,(2),1.0)));
var G__15991_16398 = ((G__15995_16386)?(G__15984_16391[(0)]):(cljs.core.truth_(G__15997_16388)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__15992_16399 = ((G__15995_16386)?(G__15984_16391[(1)]):(cljs.core.truth_(G__15997_16388)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
var G__15993_16400 = ((G__15995_16386)?(G__15984_16391[(2)]):(cljs.core.truth_(G__15997_16388)?v2:cljs.core.nth.call(null,v2,(2),1.0)));
(dest__11221__auto__[(0)] = ((G__15985_16392 * G__15988_16395) * G__15991_16398));

(dest__11221__auto__[(1)] = ((G__15986_16393 * G__15989_16396) * G__15992_16399));

(dest__11221__auto__[(2)] = ((G__15987_16394 * G__15990_16397) * G__15993_16400));

return (new thi.ng.geom.core.vector.Vec3(dest__11221__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__15998 = self__.buf;
var dest__11199__auto__ = (new Float32Array((3)));
(dest__11199__auto__[(0)] = ((G__15998[(0)]) * x));

(dest__11199__auto__[(1)] = ((G__15998[(1)]) * y));

(dest__11199__auto__[(2)] = ((G__15998[(2)]) * z));

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
var G__16401 = null;
var G__16401__2 = (function (self__,k){
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
var G__16401__3 = (function (self__,k,nf){
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
G__16401 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__16401__2.call(this,self__,k);
case 3:
return G__16401__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16401.cljs$core$IFn$_invoke$arity$2 = G__16401__2;
G__16401.cljs$core$IFn$_invoke$arity$3 = G__16401__3;
return G__16401;
})()
;

thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args15627){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15627)));
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
var G__15999_16402 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16000_16403 = v.buf;
(dest__11210__auto__[(0)] = (function (){var a__10846__auto__ = (G__15999_16402[(0)]);
var b__10847__auto__ = (G__16000_16403[(0)]);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10846__auto__ = (G__15999_16402[(1)]);
var b__10847__auto__ = (G__16000_16403[(1)]);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10846__auto__ = (G__15999_16402[(2)]);
var b__10847__auto__ = (G__16000_16403[(2)]);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = (function (){var a__10846__auto__ = (G__15999_16402[(0)]);
var b__10847__auto__ = v;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10846__auto__ = (G__15999_16402[(1)]);
var b__10847__auto__ = v;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10846__auto__ = (G__15999_16402[(2)]);
var b__10847__auto__ = v;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());
} else {
(dest__11210__auto__[(0)] = (function (){var a__10846__auto__ = (G__15999_16402[(0)]);
var b__10847__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10846__auto__ = (G__15999_16402[(1)]);
var b__10847__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10846__auto__ = (G__15999_16402[(2)]);
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
var G__16013_16404 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__16014_16405 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16015_16406 = ((!(G__16013_16404))?typeof v === 'number':null);
var G__16016_16407 = ((!(G__16014_16405))?typeof v2 === 'number':null);
var G__16001_16408 = self__.buf;
var G__16002_16409 = ((G__16013_16404)?v.buf:null);
var G__16003_16410 = ((G__16014_16405)?v2.buf:null);
var G__16004_16411 = (G__16001_16408[(0)]);
var G__16005_16412 = (G__16001_16408[(1)]);
var G__16006_16413 = (G__16001_16408[(2)]);
var G__16007_16414 = ((G__16013_16404)?(G__16002_16409[(0)]):(cljs.core.truth_(G__16015_16406)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__16008_16415 = ((G__16013_16404)?(G__16002_16409[(1)]):(cljs.core.truth_(G__16015_16406)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__16009_16416 = ((G__16013_16404)?(G__16002_16409[(2)]):(cljs.core.truth_(G__16015_16406)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__16010_16417 = ((G__16014_16405)?(G__16003_16410[(0)]):(cljs.core.truth_(G__16016_16407)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16011_16418 = ((G__16014_16405)?(G__16003_16410[(1)]):(cljs.core.truth_(G__16016_16407)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16012_16419 = ((G__16014_16405)?(G__16003_16410[(2)]):(cljs.core.truth_(G__16016_16407)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = (function (){var a__10846__auto__ = (function (){var a__10846__auto__ = G__16004_16411;
var b__10847__auto__ = G__16007_16414;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})();
var b__10847__auto__ = G__16010_16417;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11221__auto__[(1)] = (function (){var a__10846__auto__ = (function (){var a__10846__auto__ = G__16005_16412;
var b__10847__auto__ = G__16008_16415;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})();
var b__10847__auto__ = G__16011_16418;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})());

(dest__11221__auto__[(2)] = (function (){var a__10846__auto__ = (function (){var a__10846__auto__ = G__16006_16413;
var b__10847__auto__ = G__16009_16416;
if((a__10846__auto__ <= b__10847__auto__)){
return a__10846__auto__;
} else {
return b__10847__auto__;
}
})();
var b__10847__auto__ = G__16012_16419;
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
var G__16017_16420 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16018_16421 = v.buf;
(dest__11210__auto__[(0)] = (function (){var a__10853__auto__ = (G__16017_16420[(0)]);
var b__10854__auto__ = (G__16018_16421[(0)]);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10853__auto__ = (G__16017_16420[(1)]);
var b__10854__auto__ = (G__16018_16421[(1)]);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10853__auto__ = (G__16017_16420[(2)]);
var b__10854__auto__ = (G__16018_16421[(2)]);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__11210__auto__[(0)] = (function (){var a__10853__auto__ = (G__16017_16420[(0)]);
var b__10854__auto__ = v;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10853__auto__ = (G__16017_16420[(1)]);
var b__10854__auto__ = v;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10853__auto__ = (G__16017_16420[(2)]);
var b__10854__auto__ = v;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());
} else {
(dest__11210__auto__[(0)] = (function (){var a__10853__auto__ = (G__16017_16420[(0)]);
var b__10854__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(1)] = (function (){var a__10853__auto__ = (G__16017_16420[(1)]);
var b__10854__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11210__auto__[(2)] = (function (){var a__10853__auto__ = (G__16017_16420[(2)]);
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
var G__16031_16422 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__16032_16423 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16033_16424 = ((!(G__16031_16422))?typeof v === 'number':null);
var G__16034_16425 = ((!(G__16032_16423))?typeof v2 === 'number':null);
var G__16019_16426 = self__.buf;
var G__16020_16427 = ((G__16031_16422)?v.buf:null);
var G__16021_16428 = ((G__16032_16423)?v2.buf:null);
var G__16022_16429 = (G__16019_16426[(0)]);
var G__16023_16430 = (G__16019_16426[(1)]);
var G__16024_16431 = (G__16019_16426[(2)]);
var G__16025_16432 = ((G__16031_16422)?(G__16020_16427[(0)]):(cljs.core.truth_(G__16033_16424)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__16026_16433 = ((G__16031_16422)?(G__16020_16427[(1)]):(cljs.core.truth_(G__16033_16424)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__16027_16434 = ((G__16031_16422)?(G__16020_16427[(2)]):(cljs.core.truth_(G__16033_16424)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__16028_16435 = ((G__16032_16423)?(G__16021_16428[(0)]):(cljs.core.truth_(G__16034_16425)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16029_16436 = ((G__16032_16423)?(G__16021_16428[(1)]):(cljs.core.truth_(G__16034_16425)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16030_16437 = ((G__16032_16423)?(G__16021_16428[(2)]):(cljs.core.truth_(G__16034_16425)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__11221__auto__[(0)] = (function (){var a__10853__auto__ = (function (){var a__10853__auto__ = G__16022_16429;
var b__10854__auto__ = G__16025_16432;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})();
var b__10854__auto__ = G__16028_16435;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11221__auto__[(1)] = (function (){var a__10853__auto__ = (function (){var a__10853__auto__ = G__16023_16430;
var b__10854__auto__ = G__16026_16433;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})();
var b__10854__auto__ = G__16029_16436;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})());

(dest__11221__auto__[(2)] = (function (){var a__10853__auto__ = (function (){var a__10853__auto__ = G__16024_16431;
var b__10854__auto__ = G__16027_16434;
if((a__10853__auto__ >= b__10854__auto__)){
return a__10853__auto__;
} else {
return b__10854__auto__;
}
})();
var b__10854__auto__ = G__16030_16437;
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
var G__16035 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16036 = v.buf;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16035[(0)]),(G__16036[(0)]),eps))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16035[(1)]),(G__16036[(1)]),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__16035[(2)]),(G__16036[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16035[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,(G__16035[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.common.math.core.delta_EQ_.call(null,(G__16035[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
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
var G__16037 = self__.buf;
var G__16038 = (G__16037[(0)]);
var G__16039 = (G__16037[(1)]);
var G__16040 = (G__16037[(2)]);
return Math.sqrt((((G__16038 * G__16038) + (G__16039 * G__16039)) + (G__16040 * G__16040)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__16041 = self__.buf;
var G__16042 = (G__16041[(0)]);
var G__16043 = (G__16041[(1)]);
var G__16044 = (G__16041[(2)]);
return (((G__16042 * G__16042) + (G__16043 * G__16043)) + (G__16044 * G__16044));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__16045_16438 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__16046_16439 = v.buf;
(b[(0)] = (((G__16045_16438[(0)]) + (G__16046_16439[(0)])) * 0.5));

(b[(1)] = (((G__16045_16438[(1)]) + (G__16046_16439[(1)])) * 0.5));

(b[(2)] = (((G__16045_16438[(2)]) + (G__16046_16439[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__16045_16438[(0)]) + v) * 0.5));

(b[(1)] = (((G__16045_16438[(1)]) + v) * 0.5));

(b[(2)] = (((G__16045_16438[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__16045_16438[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__16045_16438[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__16045_16438[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__16059_16440 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__16060_16441 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__16061_16442 = ((!(G__16059_16440))?typeof v === 'number':null);
var G__16062_16443 = ((!(G__16060_16441))?typeof v2 === 'number':null);
var G__16047_16444 = self__.buf;
var G__16048_16445 = ((G__16059_16440)?v.buf:null);
var G__16049_16446 = ((G__16060_16441)?v2.buf:null);
var G__16050_16447 = (G__16047_16444[(0)]);
var G__16051_16448 = (G__16047_16444[(1)]);
var G__16052_16449 = (G__16047_16444[(2)]);
var G__16053_16450 = ((G__16059_16440)?(G__16048_16445[(0)]):(cljs.core.truth_(G__16061_16442)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__16054_16451 = ((G__16059_16440)?(G__16048_16445[(1)]):(cljs.core.truth_(G__16061_16442)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__16055_16452 = ((G__16059_16440)?(G__16048_16445[(2)]):(cljs.core.truth_(G__16061_16442)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__16056_16453 = ((G__16060_16441)?(G__16049_16446[(0)]):(cljs.core.truth_(G__16062_16443)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__16057_16454 = ((G__16060_16441)?(G__16049_16446[(1)]):(cljs.core.truth_(G__16062_16443)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__16058_16455 = ((G__16060_16441)?(G__16049_16446[(2)]):(cljs.core.truth_(G__16062_16443)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(b[(0)] = (((G__16053_16450 - G__16050_16447) * G__16056_16453) + G__16050_16447));

(b[(1)] = (((G__16054_16451 - G__16051_16448) * G__16057_16454) + G__16051_16448));

(b[(2)] = (((G__16055_16452 - G__16052_16449) * G__16058_16455) + G__16052_16449));

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
var G__16075_16456 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__16076_16457 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__16077_16458 = ((!(G__16075_16456))?typeof b === 'number':null);
var G__16078_16459 = ((!(G__16076_16457))?typeof c === 'number':null);
var G__16063_16460 = self__.buf;
var G__16064_16461 = ((G__16075_16456)?b.buf:null);
var G__16065_16462 = ((G__16076_16457)?c.buf:null);
var G__16066_16463 = (G__16063_16460[(0)]);
var G__16067_16464 = (G__16063_16460[(1)]);
var G__16068_16465 = (G__16063_16460[(2)]);
var G__16069_16466 = ((G__16075_16456)?(G__16064_16461[(0)]):(cljs.core.truth_(G__16077_16458)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__16070_16467 = ((G__16075_16456)?(G__16064_16461[(1)]):(cljs.core.truth_(G__16077_16458)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__16071_16468 = ((G__16075_16456)?(G__16064_16461[(2)]):(cljs.core.truth_(G__16077_16458)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__16072_16469 = ((G__16076_16457)?(G__16065_16462[(0)]):(cljs.core.truth_(G__16078_16459)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__16073_16470 = ((G__16076_16457)?(G__16065_16462[(1)]):(cljs.core.truth_(G__16078_16459)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__16074_16471 = ((G__16076_16457)?(G__16065_16462[(2)]):(cljs.core.truth_(G__16078_16459)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_16472 = (((G__16069_16466 - G__16066_16463) * u) + G__16066_16463);
var y1_16473 = (((G__16070_16467 - G__16067_16464) * u) + G__16067_16464);
var z1_16474 = (((G__16071_16468 - G__16068_16465) * u) + G__16068_16465);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__16072_16469) * u) + G__16072_16469) - x1_16472) * v) + x1_16472));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__16073_16470) * u) + G__16073_16470) - y1_16473) * v) + y1_16473));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__16074_16471) * u) + G__16074_16471) - z1_16474) * v) + z1_16474));

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

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__16477){
var G__16475 = (((G__16477 instanceof thi.ng.geom.core.vector.Vec2))?G__16477.buf:G__16477.buf);
return (G__16475[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__16480){
var G__16478 = (((G__16480 instanceof thi.ng.geom.core.vector.Vec2))?G__16480.buf:G__16480.buf);
var G__16479 = (new Float32Array(2));
(G__16479[(0)] = (G__16478[(0)]));

(G__16479[(1)] = (G__16478[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__16479,null,cljs.core.meta.call(null,G__16480)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__16483){
var G__16481 = (((G__16483 instanceof thi.ng.geom.core.vector.Vec2))?G__16483.buf:G__16483.buf);
var G__16482 = (new Float32Array(3));
(G__16482[(0)] = (G__16481[(0)]));

(G__16482[(1)] = (G__16481[(0)]));

(G__16482[(2)] = (G__16481[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16482,null,cljs.core.meta.call(null,G__16483)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__16486){
var G__16484 = (((G__16486 instanceof thi.ng.geom.core.vector.Vec2))?G__16486.buf:G__16486.buf);
var G__16485 = (new Float32Array(3));
(G__16485[(0)] = (G__16484[(0)]));

(G__16485[(1)] = (G__16484[(0)]));

(G__16485[(2)] = (G__16484[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16485,null,cljs.core.meta.call(null,G__16486)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__16489){
if((G__16489 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16489","G__16489",-1683625057,null))))].join('')));
}

var G__16487 = (((G__16489 instanceof thi.ng.geom.core.vector.Vec2))?G__16489.buf:G__16489.buf);
var G__16488 = (new Float32Array(3));
(G__16488[(0)] = (G__16487[(0)]));

(G__16488[(1)] = (G__16487[(0)]));

(G__16488[(2)] = (G__16487[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16488,null,cljs.core.meta.call(null,G__16489)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__16492){
var G__16490 = (((G__16492 instanceof thi.ng.geom.core.vector.Vec2))?G__16492.buf:G__16492.buf);
var G__16491 = (new Float32Array(2));
(G__16491[(0)] = (G__16490[(0)]));

(G__16491[(1)] = (G__16490[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__16491,null,cljs.core.meta.call(null,G__16492)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__16495){
var G__16493 = (((G__16495 instanceof thi.ng.geom.core.vector.Vec2))?G__16495.buf:G__16495.buf);
var G__16494 = (new Float32Array(3));
(G__16494[(0)] = (G__16493[(0)]));

(G__16494[(1)] = (G__16493[(1)]));

(G__16494[(2)] = (G__16493[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16494,null,cljs.core.meta.call(null,G__16495)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__16498){
var G__16496 = (((G__16498 instanceof thi.ng.geom.core.vector.Vec2))?G__16498.buf:G__16498.buf);
var G__16497 = (new Float32Array(3));
(G__16497[(0)] = (G__16496[(0)]));

(G__16497[(1)] = (G__16496[(1)]));

(G__16497[(2)] = (G__16496[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16497,null,cljs.core.meta.call(null,G__16498)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__16501){
if((G__16501 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16501","G__16501",2139688160,null))))].join('')));
}

var G__16499 = (((G__16501 instanceof thi.ng.geom.core.vector.Vec2))?G__16501.buf:G__16501.buf);
var G__16500 = (new Float32Array(3));
(G__16500[(0)] = (G__16499[(0)]));

(G__16500[(1)] = (G__16499[(1)]));

(G__16500[(2)] = (G__16499[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16500,null,cljs.core.meta.call(null,G__16501)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__16504){
if((G__16504 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16504","G__16504",130406867,null))))].join('')));
}

var G__16502 = (((G__16504 instanceof thi.ng.geom.core.vector.Vec2))?G__16504.buf:G__16504.buf);
var G__16503 = (new Float32Array(2));
(G__16503[(0)] = (G__16502[(0)]));

(G__16503[(1)] = (G__16502[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__16503,null,cljs.core.meta.call(null,G__16504)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__16507){
if((G__16507 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16507","G__16507",1008950728,null))))].join('')));
}

var G__16505 = (((G__16507 instanceof thi.ng.geom.core.vector.Vec2))?G__16507.buf:G__16507.buf);
var G__16506 = (new Float32Array(3));
(G__16506[(0)] = (G__16505[(0)]));

(G__16506[(1)] = (G__16505[(2)]));

(G__16506[(2)] = (G__16505[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16506,null,cljs.core.meta.call(null,G__16507)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__16510){
if((G__16510 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16510","G__16510",152795639,null))))].join('')));
}

var G__16508 = (((G__16510 instanceof thi.ng.geom.core.vector.Vec2))?G__16510.buf:G__16510.buf);
var G__16509 = (new Float32Array(3));
(G__16509[(0)] = (G__16508[(0)]));

(G__16509[(1)] = (G__16508[(2)]));

(G__16509[(2)] = (G__16508[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16509,null,cljs.core.meta.call(null,G__16510)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__16513){
if((G__16513 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16513","G__16513",2082599741,null))))].join('')));
}

var G__16511 = (((G__16513 instanceof thi.ng.geom.core.vector.Vec2))?G__16513.buf:G__16513.buf);
var G__16512 = (new Float32Array(3));
(G__16512[(0)] = (G__16511[(0)]));

(G__16512[(1)] = (G__16511[(2)]));

(G__16512[(2)] = (G__16511[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16512,null,cljs.core.meta.call(null,G__16513)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__16516){
var G__16514 = (((G__16516 instanceof thi.ng.geom.core.vector.Vec2))?G__16516.buf:G__16516.buf);
return (G__16514[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__16519){
var G__16517 = (((G__16519 instanceof thi.ng.geom.core.vector.Vec2))?G__16519.buf:G__16519.buf);
var G__16518 = (new Float32Array(2));
(G__16518[(0)] = (G__16517[(1)]));

(G__16518[(1)] = (G__16517[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__16518,null,cljs.core.meta.call(null,G__16519)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__16522){
var G__16520 = (((G__16522 instanceof thi.ng.geom.core.vector.Vec2))?G__16522.buf:G__16522.buf);
var G__16521 = (new Float32Array(3));
(G__16521[(0)] = (G__16520[(1)]));

(G__16521[(1)] = (G__16520[(0)]));

(G__16521[(2)] = (G__16520[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16521,null,cljs.core.meta.call(null,G__16522)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__16525){
var G__16523 = (((G__16525 instanceof thi.ng.geom.core.vector.Vec2))?G__16525.buf:G__16525.buf);
var G__16524 = (new Float32Array(3));
(G__16524[(0)] = (G__16523[(1)]));

(G__16524[(1)] = (G__16523[(0)]));

(G__16524[(2)] = (G__16523[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16524,null,cljs.core.meta.call(null,G__16525)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__16528){
if((G__16528 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16528","G__16528",-142847069,null))))].join('')));
}

var G__16526 = (((G__16528 instanceof thi.ng.geom.core.vector.Vec2))?G__16528.buf:G__16528.buf);
var G__16527 = (new Float32Array(3));
(G__16527[(0)] = (G__16526[(1)]));

(G__16527[(1)] = (G__16526[(0)]));

(G__16527[(2)] = (G__16526[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16527,null,cljs.core.meta.call(null,G__16528)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__16531){
var G__16529 = (((G__16531 instanceof thi.ng.geom.core.vector.Vec2))?G__16531.buf:G__16531.buf);
var G__16530 = (new Float32Array(2));
(G__16530[(0)] = (G__16529[(1)]));

(G__16530[(1)] = (G__16529[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__16530,null,cljs.core.meta.call(null,G__16531)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__16534){
var G__16532 = (((G__16534 instanceof thi.ng.geom.core.vector.Vec2))?G__16534.buf:G__16534.buf);
var G__16533 = (new Float32Array(3));
(G__16533[(0)] = (G__16532[(1)]));

(G__16533[(1)] = (G__16532[(1)]));

(G__16533[(2)] = (G__16532[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16533,null,cljs.core.meta.call(null,G__16534)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__16537){
var G__16535 = (((G__16537 instanceof thi.ng.geom.core.vector.Vec2))?G__16537.buf:G__16537.buf);
var G__16536 = (new Float32Array(3));
(G__16536[(0)] = (G__16535[(1)]));

(G__16536[(1)] = (G__16535[(1)]));

(G__16536[(2)] = (G__16535[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16536,null,cljs.core.meta.call(null,G__16537)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__16540){
if((G__16540 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16540","G__16540",1218793133,null))))].join('')));
}

var G__16538 = (((G__16540 instanceof thi.ng.geom.core.vector.Vec2))?G__16540.buf:G__16540.buf);
var G__16539 = (new Float32Array(3));
(G__16539[(0)] = (G__16538[(1)]));

(G__16539[(1)] = (G__16538[(1)]));

(G__16539[(2)] = (G__16538[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16539,null,cljs.core.meta.call(null,G__16540)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__16543){
if((G__16543 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16543","G__16543",1741449189,null))))].join('')));
}

var G__16541 = (((G__16543 instanceof thi.ng.geom.core.vector.Vec2))?G__16543.buf:G__16543.buf);
var G__16542 = (new Float32Array(2));
(G__16542[(0)] = (G__16541[(1)]));

(G__16542[(1)] = (G__16541[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__16542,null,cljs.core.meta.call(null,G__16543)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__16546){
if((G__16546 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16546","G__16546",1125041224,null))))].join('')));
}

var G__16544 = (((G__16546 instanceof thi.ng.geom.core.vector.Vec2))?G__16546.buf:G__16546.buf);
var G__16545 = (new Float32Array(3));
(G__16545[(0)] = (G__16544[(1)]));

(G__16545[(1)] = (G__16544[(2)]));

(G__16545[(2)] = (G__16544[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16545,null,cljs.core.meta.call(null,G__16546)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__16549){
if((G__16549 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16549","G__16549",-1348830743,null))))].join('')));
}

var G__16547 = (((G__16549 instanceof thi.ng.geom.core.vector.Vec2))?G__16549.buf:G__16549.buf);
var G__16548 = (new Float32Array(3));
(G__16548[(0)] = (G__16547[(1)]));

(G__16548[(1)] = (G__16547[(2)]));

(G__16548[(2)] = (G__16547[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16548,null,cljs.core.meta.call(null,G__16549)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__16552){
if((G__16552 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16552","G__16552",-938557590,null))))].join('')));
}

var G__16550 = (((G__16552 instanceof thi.ng.geom.core.vector.Vec2))?G__16552.buf:G__16552.buf);
var G__16551 = (new Float32Array(3));
(G__16551[(0)] = (G__16550[(1)]));

(G__16551[(1)] = (G__16550[(2)]));

(G__16551[(2)] = (G__16550[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16551,null,cljs.core.meta.call(null,G__16552)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__16555){
if((G__16555 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16555","G__16555",1718421962,null))))].join('')));
}

var G__16553 = (((G__16555 instanceof thi.ng.geom.core.vector.Vec2))?G__16555.buf:G__16555.buf);
return (G__16553[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__16558){
if((G__16558 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16558","G__16558",1357150355,null))))].join('')));
}

var G__16556 = (((G__16558 instanceof thi.ng.geom.core.vector.Vec2))?G__16558.buf:G__16558.buf);
var G__16557 = (new Float32Array(2));
(G__16557[(0)] = (G__16556[(2)]));

(G__16557[(1)] = (G__16556[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__16557,null,cljs.core.meta.call(null,G__16558)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__16561){
if((G__16561 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16561","G__16561",1249804922,null))))].join('')));
}

var G__16559 = (((G__16561 instanceof thi.ng.geom.core.vector.Vec2))?G__16561.buf:G__16561.buf);
var G__16560 = (new Float32Array(3));
(G__16560[(0)] = (G__16559[(2)]));

(G__16560[(1)] = (G__16559[(0)]));

(G__16560[(2)] = (G__16559[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16560,null,cljs.core.meta.call(null,G__16561)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__16564){
if((G__16564 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16564","G__16564",1360484658,null))))].join('')));
}

var G__16562 = (((G__16564 instanceof thi.ng.geom.core.vector.Vec2))?G__16564.buf:G__16564.buf);
var G__16563 = (new Float32Array(3));
(G__16563[(0)] = (G__16562[(2)]));

(G__16563[(1)] = (G__16562[(0)]));

(G__16563[(2)] = (G__16562[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16563,null,cljs.core.meta.call(null,G__16564)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__16567){
if((G__16567 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16567","G__16567",-789978130,null))))].join('')));
}

var G__16565 = (((G__16567 instanceof thi.ng.geom.core.vector.Vec2))?G__16567.buf:G__16567.buf);
var G__16566 = (new Float32Array(3));
(G__16566[(0)] = (G__16565[(2)]));

(G__16566[(1)] = (G__16565[(0)]));

(G__16566[(2)] = (G__16565[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16566,null,cljs.core.meta.call(null,G__16567)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__16570){
if((G__16570 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16570","G__16570",738083455,null))))].join('')));
}

var G__16568 = (((G__16570 instanceof thi.ng.geom.core.vector.Vec2))?G__16570.buf:G__16570.buf);
var G__16569 = (new Float32Array(2));
(G__16569[(0)] = (G__16568[(2)]));

(G__16569[(1)] = (G__16568[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__16569,null,cljs.core.meta.call(null,G__16570)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__16573){
if((G__16573 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16573","G__16573",1380936728,null))))].join('')));
}

var G__16571 = (((G__16573 instanceof thi.ng.geom.core.vector.Vec2))?G__16573.buf:G__16573.buf);
var G__16572 = (new Float32Array(3));
(G__16572[(0)] = (G__16571[(2)]));

(G__16572[(1)] = (G__16571[(1)]));

(G__16572[(2)] = (G__16571[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16572,null,cljs.core.meta.call(null,G__16573)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__16576){
if((G__16576 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16576","G__16576",1956024657,null))))].join('')));
}

var G__16574 = (((G__16576 instanceof thi.ng.geom.core.vector.Vec2))?G__16576.buf:G__16576.buf);
var G__16575 = (new Float32Array(3));
(G__16575[(0)] = (G__16574[(2)]));

(G__16575[(1)] = (G__16574[(1)]));

(G__16575[(2)] = (G__16574[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16575,null,cljs.core.meta.call(null,G__16576)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__16579){
if((G__16579 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16579","G__16579",-1264484787,null))))].join('')));
}

var G__16577 = (((G__16579 instanceof thi.ng.geom.core.vector.Vec2))?G__16579.buf:G__16579.buf);
var G__16578 = (new Float32Array(3));
(G__16578[(0)] = (G__16577[(2)]));

(G__16578[(1)] = (G__16577[(1)]));

(G__16578[(2)] = (G__16577[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16578,null,cljs.core.meta.call(null,G__16579)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__16582){
if((G__16582 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16582","G__16582",46308073,null))))].join('')));
}

var G__16580 = (((G__16582 instanceof thi.ng.geom.core.vector.Vec2))?G__16582.buf:G__16582.buf);
var G__16581 = (new Float32Array(2));
(G__16581[(0)] = (G__16580[(2)]));

(G__16581[(1)] = (G__16580[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__16581,null,cljs.core.meta.call(null,G__16582)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__16585){
if((G__16585 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16585","G__16585",-1569557027,null))))].join('')));
}

var G__16583 = (((G__16585 instanceof thi.ng.geom.core.vector.Vec2))?G__16585.buf:G__16585.buf);
var G__16584 = (new Float32Array(3));
(G__16584[(0)] = (G__16583[(2)]));

(G__16584[(1)] = (G__16583[(2)]));

(G__16584[(2)] = (G__16583[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__16584,null,cljs.core.meta.call(null,G__16585)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__16588){
if((G__16588 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16588","G__16588",2133123235,null))))].join('')));
}

var G__16586 = (((G__16588 instanceof thi.ng.geom.core.vector.Vec2))?G__16588.buf:G__16588.buf);
var G__16587 = (new Float32Array(3));
(G__16587[(0)] = (G__16586[(2)]));

(G__16587[(1)] = (G__16586[(2)]));

(G__16587[(2)] = (G__16586[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__16587,null,cljs.core.meta.call(null,G__16588)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__16591){
if((G__16591 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__16591","G__16591",1761651494,null))))].join('')));
}

var G__16589 = (((G__16591 instanceof thi.ng.geom.core.vector.Vec2))?G__16591.buf:G__16591.buf);
var G__16590 = (new Float32Array(3));
(G__16590[(0)] = (G__16589[(2)]));

(G__16590[(1)] = (G__16589[(2)]));

(G__16590[(2)] = (G__16589[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__16590,null,cljs.core.meta.call(null,G__16591)));
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

var G__16592 = (i + (1));
var G__16593 = cljs.core.next.call(null,n__$1);
i = G__16592;
n__$1 = G__16593;
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
var G__16594 = null;
var G__16594__1 = (function (a){
return a;
});
var G__16594__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__16594 = function(a,b){
switch(arguments.length){
case 1:
return G__16594__1.call(this,a);
case 2:
return G__16594__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16594.cljs$core$IFn$_invoke$arity$1 = G__16594__1;
G__16594.cljs$core$IFn$_invoke$arity$2 = G__16594__2;
return G__16594;
})()
,acc,xs);
});
thi.ng.geom.core.vector.vec3_reduce_STAR_ = (function thi$ng$geom$core$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__16595 = null;
var G__16595__1 = (function (a){
return a;
});
var G__16595__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__16595 = function(a,b){
switch(arguments.length){
case 1:
return G__16595__1.call(this,a);
case 2:
return G__16595__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16595.cljs$core$IFn$_invoke$arity$1 = G__16595__1;
G__16595.cljs$core$IFn$_invoke$arity$2 = G__16595__2;
return G__16595;
})()
,acc,xs);
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.core.vector.vec2 = (function thi$ng$geom$core$vector$vec2(){
var G__16597 = arguments.length;
switch (G__16597) {
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
var G__16600 = arguments.length;
switch (G__16600) {
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
var G__16603 = arguments.length;
switch (G__16603) {
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
var G__16606 = arguments.length;
switch (G__16606) {
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
var G__16609 = arguments.length;
switch (G__16609) {
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
var G__16612 = arguments.length;
switch (G__16612) {
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