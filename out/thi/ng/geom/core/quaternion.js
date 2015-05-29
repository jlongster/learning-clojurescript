// Compiled by ClojureScript 0.0-3291 {}
goog.provide('thi.ng.geom.core.quaternion');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.error');


/**
* @constructor
*/
thi.ng.geom.core.quaternion.Quat4 = (function (x,y,z,w,_hasheq){
this.x = x;
this.y = y;
this.z = z;
this.w = w;
this._hasheq = _hasheq;
this.cljs$lang$protocol_mask$partition0$ = 165700571;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PVectorTransform$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2 = (function (_,p__10001){
var self__ = this;
var vec__10002 = p__10001;
var vx = cljs.core.nth.call(null,vec__10002,(0),null);
var vy = cljs.core.nth.call(null,vec__10002,(1),null);
var vz = cljs.core.nth.call(null,vec__10002,(2),null);
var v = vec__10002;
var ___$1 = this;
var ix = (((self__.w * vx) + (self__.y * vz)) - (self__.z * vy));
var iy = (((self__.w * vy) + (self__.z * vx)) - (self__.x * vz));
var iz = (((self__.w * vz) + (self__.x * vy)) - (self__.y * vx));
var nx = (- self__.x);
var ny = (- self__.y);
var nz = (- self__.z);
var iw = (((nx * vx) - (self__.y * vy)) - (self__.z * vz));
var b = (new Float32Array((3)));
(b[(0)] = ((((ix * self__.w) + (iw * nx)) + (iy * nz)) - (iz * ny)));

(b[(1)] = ((((iy * self__.w) + (iw * ny)) + (iz * nx)) - (ix * nz)));

(b[(2)] = ((((iz * self__.w) + (iw * nz)) + (ix * ny)) - (iy * nx)));

return (new thi.ng.geom.core.vector.Vec3(b,null,cljs.core.meta.call(null,v)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str(self__.x),cljs.core.str(" "),cljs.core.str(self__.y),cljs.core.str(" "),cljs.core.str(self__.z),cljs.core.str(" "),cljs.core.str(self__.w),cljs.core.str("]")].join('');
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.quaternion.swizzle4.call(null,___$1,k,null);
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.quaternion.swizzle4.call(null,___$1,k,nf);
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
return ((((self__.x * q__$1.x) + (self__.y * q__$1.y)) + (self__.z * q__$1.z)) + (self__.w * q__$1.w));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var m = Math.sqrt(((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w)));
if((m > thi.ng.common.math.core._STAR_eps_STAR_)){
return (new thi.ng.geom.core.quaternion.Quat4((self__.x / m),(self__.y / m),(self__.z / m),(self__.w / m),(-1)));
} else {
return ___$1;
}
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var t = (theta / 2.0);
var s = Math.sin(t);
var c = Math.cos(t);
return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * c) + (self__.w * s)),((self__.y * c) + (self__.z * s)),((self__.z * c) - (self__.y * s)),((self__.w * c) - (self__.x * s)),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var t = (theta / 2.0);
var s = Math.sin(t);
var c = Math.cos(t);
return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * c) - (self__.z * s)),((self__.y * c) + (self__.w * s)),((self__.z * c) + (self__.x * s)),((self__.w * c) - (self__.y * s)),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var t = (theta / 2.0);
var s = Math.sin(t);
var c = Math.cos(t);
return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * c) + (self__.y * s)),((self__.y * c) - (self__.x * s)),((self__.z * c) + (self__.w * s)),((self__.w * c) - (self__.z * s)),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PConjugate$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PConjugate$conjugate$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.quaternion.Quat4((- self__.x),(- self__.y),(- self__.z),self__.w,(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__10003 = (k | (0));
switch (G__10003) {
case (0):
return self__.x;

break;
case (1):
return self__.y;

break;
case (2):
return self__.z;

break;
case (3):
return self__.w;

break;
default:
return thi.ng.common.error.key_error_BANG_.call(null,k);

}
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
var G__10004 = (k | (0));
switch (G__10004) {
case (0):
return self__.x;

break;
case (1):
return self__.y;

break;
case (2):
return self__.z;

break;
case (3):
return self__.w;

break;
default:
return nf;

}
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
var G__10005 = (k | (0));
switch (G__10005) {
case (0):
return (new thi.ng.geom.core.quaternion.Quat4(v,self__.y,self__.z,self__.w,(-1)));

break;
case (1):
return (new thi.ng.geom.core.quaternion.Quat4(self__.x,v,self__.z,self__.w,(-1)));

break;
case (2):
return (new thi.ng.geom.core.quaternion.Quat4(self__.x,self__.y,v,self__.w,(-1)));

break;
case (3):
return (new thi.ng.geom.core.quaternion.Quat4(self__.x,self__.y,self__.z,v,(-1)));

break;
default:
return thi.ng.common.error.key_error_BANG_.call(null,k);

}
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.quaternion.Quat4(self__.x,self__.y,self__.z,self__.w,(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,self__.y,cljs.core.cons.call(null,self__.z,cljs.core.cons.call(null,self__.w,null)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (4);
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.w;
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.vec3.call(null,self__.x,self__.y,self__.z);
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.quaternion.Quat4(self__.w,self__.z,self__.y,self__.x,(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((-1) === self__._hasheq)){
return self__._hasheq = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,self__.x)) | (0)),(31)) + cljs.core.hash.call(null,self__.y)) | (0)),(31)) + cljs.core.hash.call(null,self__.z)) | (0)),(31)) + cljs.core.hash.call(null,self__.w)) | (0)),(4));
} else {
return self__._hasheq;
}
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.quaternion.Quat4)){
return ((self__.x === o.x)) && ((self__.y === o.y)) && ((self__.z === o.z)) && ((self__.w === o.w));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((4) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,self__.x,cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,self__.y,cljs.core.nth.call(null,o,(1)))) && (cljs.core._EQ_.call(null,self__.z,cljs.core.nth.call(null,o,(2)))) && (cljs.core._EQ_.call(null,self__.w,cljs.core.nth.call(null,o,(3))));
}
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var d = thi.ng.geom.core.mag_squared.call(null,___$1);
var d__$1 = (((d === (0)))?0.0:((1) / d));
var id = (- d__$1);
return (new thi.ng.geom.core.quaternion.Quat4((self__.x * id),(self__.y * id),(self__.z * id),(self__.w * d__$1),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
return (new thi.ng.geom.core.quaternion.Quat4((self__.x + q__$1.x),(self__.y + q__$1.y),(self__.z + q__$1.z),(self__.w + q__$1.w),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
return (new thi.ng.geom.core.quaternion.Quat4((self__.x - q__$1.x),(self__.y - q__$1.y),(self__.z - q__$1.z),(self__.w - q__$1.w),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
var qx = q__$1.x;
var qy = q__$1.y;
var qz = q__$1.z;
var qw = q__$1.w;
return (new thi.ng.geom.core.quaternion.Quat4(((((self__.x * qw) + (self__.w * qx)) + (self__.y * qz)) - (self__.z * qy)),((((self__.y * qw) + (self__.w * qy)) + (self__.z * qx)) - (self__.x * qz)),((((self__.z * qw) + (self__.w * qz)) + (self__.x * qy)) - (self__.y * qx)),((((self__.w * qw) - (self__.x * qx)) - (self__.y * qy)) - (self__.z * qz)),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,q,r){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
var r__$1 = r;
var qx = q__$1.x;
var qy = q__$1.y;
var qz = q__$1.z;
var qw = q__$1.w;
var rx = r__$1.x;
var ry = r__$1.y;
var rz = r__$1.z;
var rw = r__$1.w;
var x_SINGLEQUOTE_ = ((((self__.x * qw) + (self__.w * qx)) + (self__.y * qz)) - (self__.z * qy));
var y_SINGLEQUOTE_ = ((((self__.y * qw) + (self__.w * qy)) + (self__.z * qx)) - (self__.x * qz));
var z_SINGLEQUOTE_ = ((((self__.z * qw) + (self__.w * qz)) + (self__.x * qy)) - (self__.y * qx));
var w_SINGLEQUOTE_ = ((((self__.w * qw) - (self__.x * qx)) - (self__.y * qy)) - (self__.z * qz));
return (new thi.ng.geom.core.quaternion.Quat4(((((x_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * rx)) + (y_SINGLEQUOTE_ * rz)) - (z_SINGLEQUOTE_ * ry)),((((y_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * ry)) + (z_SINGLEQUOTE_ * rx)) - (x_SINGLEQUOTE_ * rz)),((((z_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * rz)) + (x_SINGLEQUOTE_ * ry)) - (y_SINGLEQUOTE_ * rx)),((((w_SINGLEQUOTE_ * rw) - (x_SINGLEQUOTE_ * rx)) - (y_SINGLEQUOTE_ * ry)) - (z_SINGLEQUOTE_ * rz)),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,self__.y,cljs.core.cons.call(null,self__.z,cljs.core.cons.call(null,self__.w,null)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return !((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [(0),null,new cljs.core.Keyword(null,"y","y",-1757859776),null,(1),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"z","z",-789527183),null,(3),null,(2),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null).call(null,k) == null));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.quaternion.swizzle4_assoc.call(null,___$1,k,v);
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.quaternion.Quat4((self__.x * s),(self__.y * s),(self__.z * s),(self__.w * s),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMatrixConvert$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.as_matrix.call(null,___$1,null);
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
var vec__10007 = new cljs.core.Keyword(null,"translate","translate",1336199447).cljs$core$IFn$_invoke$arity$1(opts);
var tx = cljs.core.nth.call(null,vec__10007,(0),null);
var ty = cljs.core.nth.call(null,vec__10007,(1),null);
var tz = cljs.core.nth.call(null,vec__10007,(2),null);
var x2 = (self__.x + self__.x);
var y2 = (self__.y + self__.y);
var z2 = (self__.z + self__.z);
var xx = (self__.x * x2);
var xy = (self__.x * y2);
var xz = (self__.x * z2);
var yy = (self__.y * y2);
var yz = (self__.y * z2);
var zz = (self__.z * z2);
var wx = (self__.w * x2);
var wy = (self__.w * y2);
var wz = (self__.w * z2);
return (new thi.ng.geom.core.matrix.Matrix44((1.0 - (yy + zz)),(xy + wz),(xz - wy),0.0,(xy - wz),(1.0 - (xx + zz)),(yz + wx),0.0,(xz + wy),(yz - wx),(1.0 - (xx + yy)),0.0,(function (){var or__4950__auto__ = tx;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return 0.0;
}
})(),(function (){var or__4950__auto__ = ty;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return 0.0;
}
})(),(function (){var or__4950__auto__ = tz;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return 0.0;
}
})(),1.0,null,null));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x,self__.y,self__.z,self__.w,v], null);
});

thi.ng.geom.core.quaternion.Quat4.prototype.call = (function() {
var G__10011 = null;
var G__10011__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return thi.ng.geom.core.quaternion.swizzle4.call(null,_,k,null);
});
var G__10011__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return thi.ng.geom.core.quaternion.swizzle4.call(null,_,k,nf);
});
G__10011 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__10011__2.call(this,self__,k);
case 3:
return G__10011__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10011.cljs$core$IFn$_invoke$arity$2 = G__10011__2;
G__10011.cljs$core$IFn$_invoke$arity$3 = G__10011__3;
return G__10011;
})()
;

thi.ng.geom.core.quaternion.Quat4.prototype.apply = (function (self__,args10000){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10000)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
return thi.ng.geom.core.quaternion.swizzle4.call(null,_,k,null);
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
return thi.ng.geom.core.quaternion.swizzle4.call(null,_,k,nf);
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.quaternion.Quat4)){
var c = cljs.core.compare.call(null,self__.x,o.x);
if(((0) === c)){
var c__$1 = cljs.core.compare.call(null,self__.y,o.y);
if(((0) === c__$1)){
var c__$2 = cljs.core.compare.call(null,self__.z,o.z);
if(((0) === c__$2)){
return cljs.core.compare.call(null,self__.w,o.w);
} else {
return c__$2;
}
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((4) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((4) - c);
}
}
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.call(null,___$1,q,thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,q,eps){
var self__ = this;
var ___$1 = this;
var and__4938__auto__ = cljs.core.sequential_QMARK_.call(null,q);
if(and__4938__auto__){
var and__4938__auto____$1 = ((4) === cljs.core.count.call(null,q));
if(and__4938__auto____$1){
var and__4938__auto____$2 = thi.ng.common.math.core.delta_EQ_.call(null,self__.x,cljs.core.first.call(null,q),eps);
if(cljs.core.truth_(and__4938__auto____$2)){
var and__4938__auto____$3 = thi.ng.common.math.core.delta_EQ_.call(null,self__.y,cljs.core.nth.call(null,q,(1)),eps);
if(cljs.core.truth_(and__4938__auto____$3)){
var and__4938__auto____$4 = thi.ng.common.math.core.delta_EQ_.call(null,self__.z,cljs.core.nth.call(null,q,(2)),eps);
if(cljs.core.truth_(and__4938__auto____$4)){
return thi.ng.common.math.core.delta_EQ_.call(null,self__.w,cljs.core.nth.call(null,q,(3)),eps);
} else {
return and__4938__auto____$4;
}
} else {
return and__4938__auto____$3;
}
} else {
return and__4938__auto____$2;
}
} else {
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return Math.sqrt(((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.mix.call(null,___$1,q,0.5);
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,q,t){
var self__ = this;
var ___$1 = this;
var d = thi.ng.geom.core.dot.call(null,___$1,q);
if((thi.ng.common.math.core.abs.call(null,d) < 1.0)){
var theta = Math.acos(d);
var stheta = Math.sqrt(((d * (- d)) + 1.0));
var vec__10006 = (((thi.ng.common.math.core.abs.call(null,stheta) < 0.001))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.sin(((1.0 - t) * theta)) / stheta),(Math.sin((t * theta)) / stheta)], null));
var a = cljs.core.nth.call(null,vec__10006,(0),null);
var b = cljs.core.nth.call(null,vec__10006,(1),null);
var q__$1 = q;
return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * a) + (q__$1.x * b)),((self__.y * a) + (q__$1.y * b)),((self__.z * a) + (q__$1.z * b)),((self__.w * a) + (q__$1.w * b)),(-1)));
} else {
return ___$1;
}
});

thi.ng.geom.core.quaternion.Quat4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"_hasheq","_hasheq",-1509801429,null)], null);
});

thi.ng.geom.core.quaternion.Quat4.cljs$lang$type = true;

thi.ng.geom.core.quaternion.Quat4.cljs$lang$ctorStr = "thi.ng.geom.core.quaternion/Quat4";

thi.ng.geom.core.quaternion.Quat4.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"thi.ng.geom.core.quaternion/Quat4");
});

thi.ng.geom.core.quaternion.__GT_Quat4 = (function thi$ng$geom$core$quaternion$__GT_Quat4(x,y,z,w,_hasheq){
return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w,_hasheq));
});

thi.ng.geom.core.quaternion.Q = (new thi.ng.geom.core.quaternion.Quat4(0.0,0.0,0.0,1.0,(-1)));
thi.ng.geom.core.quaternion.quat = (function thi$ng$geom$core$quaternion$quat(){
var G__10013 = arguments.length;
switch (G__10013) {
case 0:
return thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.quaternion.Q;
});

thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$2 = (function (p__10014,w){
var vec__10015 = p__10014;
var x = cljs.core.nth.call(null,vec__10015,(0),null);
var y = cljs.core.nth.call(null,vec__10015,(1),null);
var z = cljs.core.nth.call(null,vec__10015,(2),null);
return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w,(-1)));
});

thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$1 = (function (p__10016){
var vec__10017 = p__10016;
var x = cljs.core.nth.call(null,vec__10017,(0),null);
var y = cljs.core.nth.call(null,vec__10017,(1),null);
var z = cljs.core.nth.call(null,vec__10017,(2),null);
var w = cljs.core.nth.call(null,vec__10017,(3),null);
return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w,(-1)));
});

thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,w){
return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w,(-1)));
});

thi.ng.geom.core.quaternion.quat.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.quaternion.quat_from_axis_angle = (function thi$ng$geom$core$quaternion$quat_from_axis_angle(axis,theta){
var theta__$1 = (theta / 2.0);
return thi.ng.geom.core.quaternion.quat.call(null,thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,axis),Math.sin(theta__$1)),Math.cos(theta__$1));
});
thi.ng.geom.core.quaternion.as_axis_angle = (function thi$ng$geom$core$quaternion$as_axis_angle(q){
var vec__10020 = thi.ng.geom.core.normalize.call(null,q);
var x = cljs.core.nth.call(null,vec__10020,(0),null);
var y = cljs.core.nth.call(null,vec__10020,(1),null);
var z = cljs.core.nth.call(null,vec__10020,(2),null);
var w = cljs.core.nth.call(null,vec__10020,(3),null);
var theta = (2.0 * Math.acos(w));
var mag = Math.sqrt((1.0 - (w * w)));
if((mag < 5.0E-4)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,x,y,z),theta], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,(x / mag),(y / mag),(z / mag)),theta], null);
}
});
thi.ng.geom.core.quaternion.quat_from_euler = (function thi$ng$geom$core$quaternion$quat_from_euler(order,alpha,beta,gamma__$1){
var vec__10023 = (function (){var G__10024 = (((order instanceof cljs.core.Keyword))?order.fqn:null);
switch (G__10024) {
case "xyz":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3Z], null);

break;
case "yxz":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Z], null);

break;
case "xzy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3Y], null);

break;
case "zxy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Y], null);

break;
case "yzx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3X], null);

break;
case "zyx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3X], null);

break;
default:
return thi.ng.common.error.illegal_arg_BANG_.call(null,order);

}
})();
var a = cljs.core.nth.call(null,vec__10023,(0),null);
var b = cljs.core.nth.call(null,vec__10023,(1),null);
var c = cljs.core.nth.call(null,vec__10023,(2),null);
return thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.quaternion.quat_from_axis_angle.call(null,a,alpha),thi.ng.geom.core.quaternion.quat_from_axis_angle.call(null,b,beta),thi.ng.geom.core.quaternion.quat_from_axis_angle.call(null,c,gamma__$1));
});
thi.ng.geom.core.quaternion.quat_from_matrix = (function thi$ng$geom$core$quaternion$quat_from_matrix(m){
var trace = ((m.m00 + m.m11) + m.m22);
if((trace > (0))){
var s = (0.5 / Math.sqrt((trace + (1))));
return (new thi.ng.geom.core.quaternion.Quat4(((m.m12 - m.m21) * s),((m.m20 - m.m02) * s),((m.m01 - m.m10) * s),(0.25 / s),(-1)));
} else {
if(((m.m00 > m.m11)) && ((m.m00 > m.m22))){
var s = (2.0 * Math.sqrt((((m.m00 - m.m11) - m.m22) + (1))));
var s_SINGLEQUOTE_ = ((1) / s);
return (new thi.ng.geom.core.quaternion.Quat4((0.25 * s),((m.m10 + m.m01) * s_SINGLEQUOTE_),((m.m20 + m.m02) * s_SINGLEQUOTE_),((m.m12 - m.m21) * s_SINGLEQUOTE_),(-1)));
} else {
if((m.m11 > m.m22)){
var s = (2.0 * Math.sqrt((((m.m11 - m.m22) - m.m00) + (1))));
var s_SINGLEQUOTE_ = ((1) / s);
return (new thi.ng.geom.core.quaternion.Quat4(((m.m10 + m.m01) * s_SINGLEQUOTE_),(0.25 * s),((m.m21 + m.m12) * s_SINGLEQUOTE_),((m.m20 - m.m02) * s_SINGLEQUOTE_),(-1)));
} else {
var s = (2.0 * Math.sqrt((((m.m22 - m.m00) - m.m11) + (1))));
var s_SINGLEQUOTE_ = ((1) / s);
return (new thi.ng.geom.core.quaternion.Quat4(((m.m20 + m.m02) * s_SINGLEQUOTE_),((m.m21 + m.m12) * s_SINGLEQUOTE_),(0.25 * s),((m.m01 - m.m10) * s_SINGLEQUOTE_),(-1)));
}
}
}
});
thi.ng.geom.core.quaternion.alignment_quat = (function thi$ng$geom$core$quaternion$alignment_quat(from,to){
var from__$1 = thi.ng.geom.core.normalize.call(null,from);
var to__$1 = thi.ng.geom.core.normalize.call(null,to);
var axis = thi.ng.geom.core.cross.call(null,from__$1,to__$1);
var theta = Math.atan2(thi.ng.geom.core.mag.call(null,axis),thi.ng.geom.core.dot.call(null,from__$1,to__$1));
return thi.ng.geom.core.quaternion.quat_from_axis_angle.call(null,axis,theta);
});
thi.ng.geom.core.quaternion.lookup4 = (function thi$ng$geom$core$quaternion$lookup4(_,k,nf){
var G__10027 = k;
switch (G__10027) {
case "x":
return _.x;

break;
case "y":
return _.y;

break;
case "z":
return _.z;

break;
case "w":
return _.w;

break;
default:
var or__4950__auto__ = nf;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}

}
});
thi.ng.geom.core.quaternion.swizzle4 = (function thi$ng$geom$core$quaternion$swizzle4(_,k,default$){
if(typeof k === 'number'){
var G__10032 = (k | (0));
switch (G__10032) {
case (0):
return _.x;

break;
case (1):
return _.y;

break;
case (2):
return _.z;

break;
case (3):
return _.w;

break;
default:
var or__4950__auto__ = default$;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}

}
} else {
var G__10033 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__10033) {
case "x":
return _.x;

break;
case "y":
return _.y;

break;
case "z":
return _.z;

break;
case "w":
return _.w;

break;
default:
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var G__10034 = c;
switch (G__10034) {
case (2):
return thi.ng.geom.core.vector.vec2.call(null,thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.first.call(null,n),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,(1)),default$));

break;
case (3):
return thi.ng.geom.core.vector.vec3.call(null,thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.first.call(null,n),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,(1)),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,(2)),default$));

break;
case (4):
return (new thi.ng.geom.core.quaternion.Quat4(thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.first.call(null,n),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,(1)),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,(2)),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,(3)),default$),(-1)));

break;
default:
var or__4950__auto__ = default$;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}

}

}
}
});
thi.ng.geom.core.quaternion.swizzle_assoc_STAR_ = (function thi$ng$geom$core$quaternion$swizzle_assoc_STAR_(_,ctor,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))){
var acc = cljs.core.vec.call(null,cljs.core.seq.call(null,_));
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var G__10038 = cljs.core.assoc.call(null,acc,keymap.call(null,cljs.core.first.call(null,n__$1)),v.call(null,i));
var G__10039 = (i + (1));
var G__10040 = cljs.core.next.call(null,n__$1);
acc = G__10038;
i = G__10039;
n__$1 = G__10040;
continue;
} else {
return ctor.call(null,acc);
}
break;
}
} else {
return thi.ng.common.error.key_error_BANG_.call(null,k);
}
});
thi.ng.geom.core.quaternion.swizzle4_assoc = (function thi$ng$geom$core$quaternion$swizzle4_assoc(_,k,v){
if(typeof k === 'number'){
var G__10043 = (k | (0));
switch (G__10043) {
case (0):
return (new thi.ng.geom.core.quaternion.Quat4(v,_.y,_.z,_.w,(-1)));

break;
case (1):
return (new thi.ng.geom.core.quaternion.Quat4(_.x,v,_.z,_.w,(-1)));

break;
case (2):
return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,v,_.w,(-1)));

break;
case (3):
return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,_.z,v,(-1)));

break;
default:
return thi.ng.common.error.key_error_BANG_.call(null,k);

}
} else {
var G__10044 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__10044) {
case "x":
return (new thi.ng.geom.core.quaternion.Quat4(v,_.y,_.z,_.w,(-1)));

break;
case "y":
return (new thi.ng.geom.core.quaternion.Quat4(_.x,v,_.z,_.w,(-1)));

break;
case "z":
return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,v,_.w,(-1)));

break;
case "w":
return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,_.z,v,(-1)));

break;
default:
return thi.ng.geom.core.quaternion.swizzle_assoc_STAR_.call(null,_,thi.ng.geom.core.quaternion.quat,new cljs.core.PersistentArrayMap(null, 4, ["x",(0),"y",(1),"z",(2),"w",(3)], null),k,v);

}
}
});

//# sourceMappingURL=quaternion.js.map