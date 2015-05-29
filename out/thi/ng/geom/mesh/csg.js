// Compiled by ClojureScript 0.0-3291 {}
goog.provide('thi.ng.geom.mesh.csg');
goog.require('cljs.core');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.plane');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.data.core');

/**
* @constructor
* @param {*} plane
* @param {*} polygons
* @param {*} front
* @param {*} back
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.mesh.csg.CSGNode = (function (plane,polygons,front,back,__meta,__extmap,__hash){
this.plane = plane;
this.polygons = polygons;
this.front = front;
this.back = back;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9804,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9806 = (((k9804 instanceof cljs.core.Keyword))?k9804.fqn:null);
switch (G__9806) {
case "plane":
return self__.plane;

break;
case "polygons":
return self__.polygons;

break;
case "front":
return self__.front;

break;
case "back":
return self__.back;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9804,else__5548__auto__);

}
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.mesh.csg.CSGNode{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"plane","plane",-223595224),self__.plane],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"polygons","polygons",-266433925),self__.polygons],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"front","front",-1523508988),self__.front],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"back","back",-417520012),self__.back],null))], null),self__.__extmap));
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,self__.front,self__.back,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
var self__ = this;
var this__5540__auto____$1 = this;
var h__5366__auto__ = self__.__hash;
if(!((h__5366__auto__ == null))){
return h__5366__auto__;
} else {
var h__5366__auto____$1 = cljs.core.hash_imap.call(null,this__5540__auto____$1);
self__.__hash = h__5366__auto____$1;

return h__5366__auto____$1;
}
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
var self__ = this;
var this__5541__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4938__auto__ = other__5542__auto__;
if(cljs.core.truth_(and__4938__auto__)){
var and__4938__auto____$1 = (this__5541__auto____$1.constructor === other__5542__auto__.constructor);
if(and__4938__auto____$1){
return cljs.core.equiv_map.call(null,this__5541__auto____$1,other__5542__auto__);
} else {
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"front","front",-1523508988),null,new cljs.core.Keyword(null,"plane","plane",-223595224),null,new cljs.core.Keyword(null,"back","back",-417520012),null,new cljs.core.Keyword(null,"polygons","polygons",-266433925),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,self__.front,self__.back,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9803){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9807 = cljs.core.keyword_identical_QMARK_;
var expr__9808 = k__5553__auto__;
if(cljs.core.truth_(pred__9807.call(null,new cljs.core.Keyword(null,"plane","plane",-223595224),expr__9808))){
return (new thi.ng.geom.mesh.csg.CSGNode(G__9803,self__.polygons,self__.front,self__.back,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9807.call(null,new cljs.core.Keyword(null,"polygons","polygons",-266433925),expr__9808))){
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,G__9803,self__.front,self__.back,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9807.call(null,new cljs.core.Keyword(null,"front","front",-1523508988),expr__9808))){
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,G__9803,self__.back,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9807.call(null,new cljs.core.Keyword(null,"back","back",-417520012),expr__9808))){
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,self__.front,G__9803,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,self__.front,self__.back,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9803),null));
}
}
}
}
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"plane","plane",-223595224),self__.plane],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"polygons","polygons",-266433925),self__.polygons],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"front","front",-1523508988),self__.front],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"back","back",-417520012),self__.back],null))], null),self__.__extmap));
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9803){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,self__.front,self__.back,G__9803,self__.__extmap,self__.__hash));
});

thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.mesh.csg.CSGNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"plane","plane",1416936303,null),new cljs.core.Symbol(null,"polygons","polygons",1374097602,null),new cljs.core.Symbol(null,"front","front",117022539,null),new cljs.core.Symbol(null,"back","back",1223011515,null)], null);
});

thi.ng.geom.mesh.csg.CSGNode.cljs$lang$type = true;

thi.ng.geom.mesh.csg.CSGNode.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.mesh.csg/CSGNode");
});

thi.ng.geom.mesh.csg.CSGNode.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.mesh.csg/CSGNode");
});

thi.ng.geom.mesh.csg.__GT_CSGNode = (function thi$ng$geom$mesh$csg$__GT_CSGNode(plane,polygons,front,back){
return (new thi.ng.geom.mesh.csg.CSGNode(plane,polygons,front,back,null,null,null));
});

thi.ng.geom.mesh.csg.map__GT_CSGNode = (function thi$ng$geom$mesh$csg$map__GT_CSGNode(G__9805){
return (new thi.ng.geom.mesh.csg.CSGNode(new cljs.core.Keyword(null,"plane","plane",-223595224).cljs$core$IFn$_invoke$arity$1(G__9805),new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(G__9805),new cljs.core.Keyword(null,"front","front",-1523508988).cljs$core$IFn$_invoke$arity$1(G__9805),new cljs.core.Keyword(null,"back","back",-417520012).cljs$core$IFn$_invoke$arity$1(G__9805),null,cljs.core.dissoc.call(null,G__9805,new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.Keyword(null,"polygons","polygons",-266433925),new cljs.core.Keyword(null,"front","front",-1523508988),new cljs.core.Keyword(null,"back","back",-417520012)),null));
});


/**
* @constructor
*/
thi.ng.geom.mesh.csg.CSGPolygon = (function (plane,vertices,shared,bsphere){
this.plane = plane;
this.vertices = vertices;
this.shared = shared;
this.bsphere = bsphere;
})
thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.bsphere)){
return self__.bsphere;
} else {
self__.bsphere = thi.ng.geom.types.utils.bounding_sphere.call(null,self__.vertices);

return self__.bsphere;
}
});

thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.mesh.csg.CSGPolygon(thi.ng.geom.core.flip.call(null,self__.plane),cljs.core.reverse.call(null,self__.vertices),self__.shared,self__.bsphere));
});

thi.ng.geom.mesh.csg.CSGPolygon.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"plane","plane",1416936303,null),new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"shared","shared",1256385534,null),new cljs.core.Symbol(null,"bsphere","bsphere",940397515,null)], null);
});

thi.ng.geom.mesh.csg.CSGPolygon.cljs$lang$type = true;

thi.ng.geom.mesh.csg.CSGPolygon.cljs$lang$ctorStr = "thi.ng.geom.mesh.csg/CSGPolygon";

thi.ng.geom.mesh.csg.CSGPolygon.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"thi.ng.geom.mesh.csg/CSGPolygon");
});

thi.ng.geom.mesh.csg.__GT_CSGPolygon = (function thi$ng$geom$mesh$csg$__GT_CSGPolygon(plane,vertices,shared,bsphere){
return (new thi.ng.geom.mesh.csg.CSGPolygon(plane,vertices,shared,bsphere));
});

thi.ng.geom.mesh.csg.compute_split_types = (function thi$ng$geom$mesh$csg$compute_split_types(n,w,vertices){
var ieps = (- thi.ng.common.math.core._STAR_eps_STAR_);
var ptype = (0);
var types = cljs.core.PersistentVector.EMPTY;
var vertices__$1 = vertices;
while(true){
if(cljs.core.truth_(vertices__$1)){
var t = (thi.ng.geom.core.dot.call(null,n,cljs.core.first.call(null,vertices__$1)) + w);
var pt = (((t < ieps))?(2):(((t > thi.ng.common.math.core._STAR_eps_STAR_))?(1):(0)));
var G__9811 = (ptype | pt);
var G__9812 = cljs.core.conj.call(null,types,pt);
var G__9813 = cljs.core.next.call(null,vertices__$1);
ptype = G__9811;
types = G__9812;
vertices__$1 = G__9813;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ptype,types], null);
}
break;
}
});
thi.ng.geom.mesh.csg.split_poly_STAR_ = (function thi$ng$geom$mesh$csg$split_poly_STAR_(n,w,vertices,types){
var nv = cljs.core.count.call(null,vertices);
var f = cljs.core.PersistentVector.EMPTY;
var b = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i < nv)){
var j = cljs.core.rem.call(null,(i + (1)),nv);
var vi = cljs.core.nth.call(null,vertices,i);
var ti = types.call(null,i);
var f__$1 = (((ti === (2)))?f:cljs.core.conj.call(null,f,vi));
var b__$1 = (((ti === (1)))?b:cljs.core.conj.call(null,b,vi));
if(((3) === (ti | types.call(null,j)))){
var vj = cljs.core.nth.call(null,vertices,j);
var v = thi.ng.geom.core.mix.call(null,vi,vj,(((- w) - thi.ng.geom.core.dot.call(null,n,vi)) / thi.ng.geom.core.dot.call(null,n,thi.ng.geom.core._.call(null,vj,vi))));
var G__9814 = cljs.core.conj.call(null,f__$1,v);
var G__9815 = cljs.core.conj.call(null,b__$1,v);
var G__9816 = (i + (1));
f = G__9814;
b = G__9815;
i = G__9816;
continue;
} else {
var G__9817 = f__$1;
var G__9818 = b__$1;
var G__9819 = (i + (1));
f = G__9817;
b = G__9818;
i = G__9819;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,b], null);
}
break;
}
});
/**
 * Takes a plane and splits the given polygon with it. Returns a 4-element vector
 * of classified sub-shapes: [coplanar-front coplanar-back front back].
 */
thi.ng.geom.mesh.csg.split_poly = (function thi$ng$geom$mesh$csg$split_poly(p__9820,poly,state){
var map__9825 = p__9820;
var map__9825__$1 = ((cljs.core.seq_QMARK_.call(null,map__9825))?cljs.core.apply.call(null,cljs.core.hash_map,map__9825):map__9825);
var n = cljs.core.get.call(null,map__9825__$1,new cljs.core.Keyword(null,"n","n",562130025));
var w = cljs.core.get.call(null,map__9825__$1,new cljs.core.Keyword(null,"w","w",354169001));
var s = thi.ng.geom.core.bounding_sphere.call(null,poly);
var r = (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(s) + thi.ng.common.math.core._STAR_eps_STAR_);
var d = (thi.ng.geom.core.dot.call(null,n,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(s)) + w);
if((d > r)){
return cljs.core.assoc.call(null,state,(2),cljs.core.conj.call(null,state.call(null,(2)),poly));
} else {
if((d < (- r))){
return cljs.core.assoc.call(null,state,(3),cljs.core.conj.call(null,state.call(null,(3)),poly));
} else {
var vec__9826 = thi.ng.geom.mesh.csg.compute_split_types.call(null,n,w,poly.vertices);
var ptype = cljs.core.nth.call(null,vec__9826,(0),null);
var types = cljs.core.nth.call(null,vec__9826,(1),null);
var G__9827 = ptype;
switch (G__9827) {
case (0):
if((thi.ng.geom.core.dot.call(null,n,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(poly.plane)) > (0))){
return cljs.core.assoc.call(null,state,(0),cljs.core.conj.call(null,state.call(null,(0)),poly));
} else {
return cljs.core.assoc.call(null,state,(1),cljs.core.conj.call(null,state.call(null,(1)),poly));
}

break;
case (1):
return cljs.core.assoc.call(null,state,(2),cljs.core.conj.call(null,state.call(null,(2)),poly));

break;
case (2):
return cljs.core.assoc.call(null,state,(3),cljs.core.conj.call(null,state.call(null,(3)),poly));

break;
case (3):
var vec__9828 = thi.ng.geom.mesh.csg.split_poly_STAR_.call(null,n,w,poly.vertices,types);
var f = cljs.core.nth.call(null,vec__9828,(0),null);
var b = cljs.core.nth.call(null,vec__9828,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [state.call(null,(0)),state.call(null,(1)),(((cljs.core.count.call(null,f) >= (3)))?cljs.core.conj.call(null,state.call(null,(2)),thi.ng.geom.mesh.csg.csg_polygon.call(null,f,poly.shared)):f),(((cljs.core.count.call(null,b) >= (3)))?cljs.core.conj.call(null,state.call(null,(3)),thi.ng.geom.mesh.csg.csg_polygon.call(null,b,poly.shared)):b)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(ptype)].join('')));

}

}
}
});
/**
 * Uses a CSG node's plane to recursively clip the given seq of polygons.
 * Returns a flat seq of polygons classified as in-front of the plane
 * or the original seq if no clipping plane is available.
 */
thi.ng.geom.mesh.csg.clip_polygons = (function thi$ng$geom$mesh$csg$clip_polygons(p__9830,ps){
var map__9833 = p__9830;
var map__9833__$1 = ((cljs.core.seq_QMARK_.call(null,map__9833))?cljs.core.apply.call(null,cljs.core.hash_map,map__9833):map__9833);
var node = map__9833__$1;
var plane = cljs.core.get.call(null,map__9833__$1,new cljs.core.Keyword(null,"plane","plane",-223595224));
var front = cljs.core.get.call(null,map__9833__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.call(null,map__9833__$1,new cljs.core.Keyword(null,"back","back",-417520012));
if(cljs.core.not.call(null,plane)){
return ps;
} else {
var vec__9834 = cljs.core.reduce.call(null,((function (map__9833,map__9833__$1,node,plane,front,back){
return (function (state,poly){
return thi.ng.geom.mesh.csg.split_poly.call(null,plane,poly,state);
});})(map__9833,map__9833__$1,node,plane,front,back))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),ps);
var cp_front = cljs.core.nth.call(null,vec__9834,(0),null);
var cp_back = cljs.core.nth.call(null,vec__9834,(1),null);
var new_front = cljs.core.nth.call(null,vec__9834,(2),null);
var new_back = cljs.core.nth.call(null,vec__9834,(3),null);
var new_front__$1 = cljs.core.concat.call(null,new_front,cp_front);
var new_front__$2 = (cljs.core.truth_(front)?thi$ng$geom$mesh$csg$clip_polygons.call(null,front,new_front__$1):new_front__$1);
var new_back__$1 = (cljs.core.truth_(back)?thi$ng$geom$mesh$csg$clip_polygons.call(null,back,cljs.core.concat.call(null,new_back,cp_back)):cljs.core.PersistentVector.EMPTY);
return cljs.core.concat.call(null,new_front__$2,new_back__$1);
}
});
/**
 * Returns a lazy seq of all polygons of the given CSG node and its children.
 */
thi.ng.geom.mesh.csg.all_polygons = (function thi$ng$geom$mesh$csg$all_polygons(p__9835){
var map__9837 = p__9835;
var map__9837__$1 = ((cljs.core.seq_QMARK_.call(null,map__9837))?cljs.core.apply.call(null,cljs.core.hash_map,map__9837):map__9837);
var node = map__9837__$1;
var front = cljs.core.get.call(null,map__9837__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.call(null,map__9837__$1,new cljs.core.Keyword(null,"back","back",-417520012));
return cljs.core.concat.call(null,new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(node),(cljs.core.truth_(front)?thi$ng$geom$mesh$csg$all_polygons.call(null,front):null),(cljs.core.truth_(back)?thi$ng$geom$mesh$csg$all_polygons.call(null,back):null));
});
thi.ng.geom.mesh.csg.invert = (function thi$ng$geom$mesh$csg$invert(p__9838){
var map__9840 = p__9838;
var map__9840__$1 = ((cljs.core.seq_QMARK_.call(null,map__9840))?cljs.core.apply.call(null,cljs.core.hash_map,map__9840):map__9840);
var node = map__9840__$1;
var front = cljs.core.get.call(null,map__9840__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.call(null,map__9840__$1,new cljs.core.Keyword(null,"back","back",-417520012));
var plane = cljs.core.get.call(null,map__9840__$1,new cljs.core.Keyword(null,"plane","plane",-223595224));
return (new thi.ng.geom.mesh.csg.CSGNode((cljs.core.truth_(plane)?thi.ng.geom.core.flip.call(null,plane):null),cljs.core.mapv.call(null,thi.ng.geom.core.flip,new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(node)),(cljs.core.truth_(back)?thi$ng$geom$mesh$csg$invert.call(null,back):null),(cljs.core.truth_(front)?thi$ng$geom$mesh$csg$invert.call(null,front):null),null,null,null));
});
/**
 * Clips the polygons of the first node with the ones from the second.
 * Returns the updated node.
 */
thi.ng.geom.mesh.csg.clip = (function thi$ng$geom$mesh$csg$clip(p__9841,b){
var map__9843 = p__9841;
var map__9843__$1 = ((cljs.core.seq_QMARK_.call(null,map__9843))?cljs.core.apply.call(null,cljs.core.hash_map,map__9843):map__9843);
var a = map__9843__$1;
var front = cljs.core.get.call(null,map__9843__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.call(null,map__9843__$1,new cljs.core.Keyword(null,"back","back",-417520012));
return (new thi.ng.geom.mesh.csg.CSGNode(new cljs.core.Keyword(null,"plane","plane",-223595224).cljs$core$IFn$_invoke$arity$1(a),thi.ng.geom.mesh.csg.clip_polygons.call(null,b,new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(a)),(cljs.core.truth_(front)?thi$ng$geom$mesh$csg$clip.call(null,front,b):null),(cljs.core.truth_(back)?thi$ng$geom$mesh$csg$clip.call(null,back,b):null),null,null,null));
});
/**
 * Creates a CSG polygon map from the given vertices and
 * computes a plane definition using the first 3 vertices.
 */
thi.ng.geom.mesh.csg.csg_polygon = (function thi$ng$geom$mesh$csg$csg_polygon(){
var G__9845 = arguments.length;
switch (G__9845) {
case 1:
return thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$1 = (function (vertices){
return thi.ng.geom.mesh.csg.csg_polygon.call(null,vertices,null);
});

thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$2 = (function (vertices,shared){
return (new thi.ng.geom.mesh.csg.CSGPolygon(thi.ng.geom.plane.plane_from_points.call(null,vertices),cljs.core.vec.call(null,vertices),shared,null));
});

thi.ng.geom.mesh.csg.csg_polygon.cljs$lang$maxFixedArity = 2;
/**
 * Creates a new or refines a CSG tree node and recursively
 * adds the given polygons to it.
 */
thi.ng.geom.mesh.csg.csg_node = (function thi$ng$geom$mesh$csg$csg_node(){
var G__9848 = arguments.length;
switch (G__9848) {
case 1:
return thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$1 = (function (polygons){
return thi.ng.geom.mesh.csg.csg_node.call(null,null,polygons);
});

thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2 = (function (p__9849,ps){
var map__9850 = p__9849;
var map__9850__$1 = ((cljs.core.seq_QMARK_.call(null,map__9850))?cljs.core.apply.call(null,cljs.core.hash_map,map__9850):map__9850);
var node = map__9850__$1;
var polygons = cljs.core.get.call(null,map__9850__$1,new cljs.core.Keyword(null,"polygons","polygons",-266433925));
var plane = cljs.core.get.call(null,map__9850__$1,new cljs.core.Keyword(null,"plane","plane",-223595224));
var front = cljs.core.get.call(null,map__9850__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.call(null,map__9850__$1,new cljs.core.Keyword(null,"back","back",-417520012));
if(cljs.core.seq.call(null,ps)){
var plane__$1 = (function (){var or__4950__auto__ = plane;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return cljs.core.first.call(null,ps).plane;
}
})();
var vec__9851 = cljs.core.reduce.call(null,((function (plane__$1,map__9850,map__9850__$1,node,polygons,plane,front,back){
return (function (state,poly){
return thi.ng.geom.mesh.csg.split_poly.call(null,plane__$1,poly,state);
});})(plane__$1,map__9850,map__9850__$1,node,polygons,plane,front,back))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),ps);
var cp_front = cljs.core.nth.call(null,vec__9851,(0),null);
var cp_back = cljs.core.nth.call(null,vec__9851,(1),null);
var new_front = cljs.core.nth.call(null,vec__9851,(2),null);
var new_back = cljs.core.nth.call(null,vec__9851,(3),null);
return (new thi.ng.geom.mesh.csg.CSGNode(plane__$1,cljs.core.into.call(null,cljs.core.into.call(null,polygons,cp_front),cp_back),((cljs.core.seq.call(null,new_front))?thi.ng.geom.mesh.csg.csg_node.call(null,front,new_front):front),((cljs.core.seq.call(null,new_back))?thi.ng.geom.mesh.csg.csg_node.call(null,back,new_back):back),null,null,null));
} else {
return node;
}
});

thi.ng.geom.mesh.csg.csg_node.cljs$lang$maxFixedArity = 2;
thi.ng.geom.mesh.csg.union = (function thi$ng$geom$mesh$csg$union(a,b){
var a__$1 = thi.ng.geom.mesh.csg.clip.call(null,a,b);
var b__$1 = thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.clip.call(null,thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.clip.call(null,b,a__$1)),a__$1));
return thi.ng.geom.mesh.csg.csg_node.call(null,a__$1,thi.ng.geom.mesh.csg.all_polygons.call(null,b__$1));
});
thi.ng.geom.mesh.csg.subtract = (function thi$ng$geom$mesh$csg$subtract(a,b){
var a__$1 = thi.ng.geom.mesh.csg.clip.call(null,thi.ng.geom.mesh.csg.invert.call(null,a),b);
var b__$1 = thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.clip.call(null,thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.clip.call(null,b,a__$1)),a__$1));
return thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.csg_node.call(null,a__$1,thi.ng.geom.mesh.csg.all_polygons.call(null,b__$1)));
});
thi.ng.geom.mesh.csg.intersect = (function thi$ng$geom$mesh$csg$intersect(a,b){
var a__$1 = thi.ng.geom.mesh.csg.invert.call(null,a);
var b__$1 = thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.clip.call(null,b,a__$1));
var a__$2 = thi.ng.geom.mesh.csg.clip.call(null,a__$1,b__$1);
var b__$2 = thi.ng.geom.mesh.csg.clip.call(null,b__$1,a__$2);
return thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.csg_node.call(null,a__$2,thi.ng.geom.mesh.csg.all_polygons.call(null,b__$2)));
});
thi.ng.geom.mesh.csg.mesh__GT_csg = (function thi$ng$geom$mesh$csg$mesh__GT_csg(m){
return thi.ng.geom.mesh.csg.csg_node.call(null,null,cljs.core.map.call(null,(function (f){
return thi.ng.geom.mesh.csg.csg_polygon.call(null,f,null);
}),thi.ng.geom.core.faces.call(null,m)));
});
thi.ng.geom.mesh.csg.csg__GT_mesh = (function thi$ng$geom$mesh$csg$csg__GT_mesh(node){
return thi.ng.geom.core.into.call(null,thi.ng.geom.basicmesh.basic_mesh.call(null),cljs.core.map.call(null,(function (poly){
return poly.vertices;
}),thi.ng.geom.mesh.csg.all_polygons.call(null,node)));
});
thi.ng.geom.mesh.csg.csg_cone = (function thi$ng$geom$mesh$csg$csg_cone(){
var G__9854 = arguments.length;
switch (G__9854) {
case 4:
return thi.ng.geom.mesh.csg.csg_cone.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.mesh.csg.csg_cone.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.mesh.csg.csg_cone.cljs$core$IFn$_invoke$arity$4 = (function (s,e,radius,res){
return thi.ng.geom.mesh.csg.csg_cone.call(null,s,e,radius,radius,res);
});

thi.ng.geom.mesh.csg.csg_cone.cljs$core$IFn$_invoke$arity$5 = (function (s,e,r_south,r_north,res){
var dir = thi.ng.geom.core._.call(null,e,s);
var az = thi.ng.geom.core.normalize.call(null,dir);
var ax = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,(((thi.ng.common.math.core.abs.call(null,az.call(null,(1))) > 0.5))?thi.ng.geom.core.vector.V3X:thi.ng.geom.core.vector.V3Y),az));
var ay = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,ax,az));
var f = ((function (dir,az,ax,ay){
return (function (stack,i,r){
var theta = (thi.ng.common.math.core.TWO_PI * i);
var out = thi.ng.geom.core.madd.call(null,ax,Math.cos(theta),thi.ng.geom.core._STAR_.call(null,ay,Math.sin(theta)));
var pos = thi.ng.geom.core._PLUS_.call(null,s,thi.ng.geom.core._STAR_.call(null,dir,stack),thi.ng.geom.core._STAR_.call(null,out,r));
return pos;
});})(dir,az,ax,ay))
;
var res__$1 = (1.0 / res);
return cljs.core.mapcat.call(null,((function (dir,az,ax,ay,f,res__$1){
return (function (i){
var t0 = (i * res__$1);
var t1 = ((i + (1)) * res__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.mesh.csg.csg_polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f.call(null,(0),t0,r_south),f.call(null,(0),t1,r_south)], null)),thi.ng.geom.mesh.csg.csg_polygon.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,(0),t1,r_south),f.call(null,(0),t0,r_south),f.call(null,(1),t0,r_north),f.call(null,(1),t1,r_north)], null)),thi.ng.geom.mesh.csg.csg_polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f.call(null,(1),t1,r_north),f.call(null,(1),t0,r_north)], null))], null);
});})(dir,az,ax,ay,f,res__$1))
,cljs.core.range.call(null,res__$1));
});

thi.ng.geom.mesh.csg.csg_cone.cljs$lang$maxFixedArity = 5;

//# sourceMappingURL=csg.js.map