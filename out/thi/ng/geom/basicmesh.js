// Compiled by ClojureScript 0.0-3291 {}
goog.provide('thi.ng.geom.basicmesh');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('clojure.core.reducers');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.geom.core.matrix');
thi.ng.geom.basicmesh.add_face = (function thi$ng$geom$basicmesh$add_face(mesh,f){
return (new thi.ng.geom.types.BasicMesh(cljs.core.into.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(mesh),f),cljs.core.conj.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(mesh),f),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(mesh),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(mesh)));
});
/**
 * Builds a new 3d mesh data structure and (optionally) populates it with
 * the given items (a seq of existing meshes and/or faces). Faces are defined
 * as vectors of their vertices.
 */
thi.ng.geom.basicmesh.basic_mesh = (function thi$ng$geom$basicmesh$basic_mesh(){
return (new thi.ng.geom.types.BasicMesh(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
});
thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face,m);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.basicmesh.basic_mesh.call(null);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.center.call(null,___$1,thi.ng.geom.core.vector.vec3.call(null));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.core.transform.call(null,___$1,thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.M44,thi.ng.geom.core._.call(null,o,thi.ng.geom.core.centroid.call(null,___$1))));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.map_mesh.call(null,((function (___$1){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.rseq.call(null,f))], null);
});})(___$1))
,___$1);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__9542_SHARP_){
return thi.ng.common.data.core.successive_nth.call(null,(2),cljs.core.conj.call(null,p1__9542_SHARP_,cljs.core.first.call(null,p1__9542_SHARP_)));
});})(___$1))
),cljs.core.map.call(null,cljs.core.set)),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$face_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(___$1))){
return new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(___$1);
} else {
if(cljs.core.truth_(force_QMARK_)){
return new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.compute_face_normals.call(null,___$1));
} else {
return null;
}
}
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$vertex_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.truth_(force_QMARK_)){
return thi.ng.common.error.unsupported_BANG_.call(null);
} else {
return null;
}
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$compute_face_normals$arity$1 = (function (_){
var ___$1 = this;
var fnorms = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var faces = new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(___$1);
while(true){
if(cljs.core.truth_(faces)){
var f = cljs.core.first.call(null,faces);
var G__9548 = cljs.core.assoc_BANG_.call(null,fnorms,f,thi.ng.geom.core.utils.ortho_normal.call(null,f));
var G__9549 = cljs.core.next.call(null,faces);
fnorms = G__9548;
faces = G__9549;
continue;
} else {
return cljs.core.assoc.call(null,___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),cljs.core.persistent_BANG_.call(null,fnorms));
}
break;
}
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$compute_vertex_normals$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.error.unsupported_BANG_.call(null);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.total_volume.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$add_face$arity$2 = (function (_,f){
var ___$1 = this;
return thi.ng.geom.basicmesh.add_face.call(null,___$1,f);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$vertex_faces$arity$2 = (function (_,v){
var ___$1 = this;
return cljs.core.filter.call(null,((function (___$1){
return (function (p1__9543_SHARP_){
return (thi.ng.common.data.core.index_of.call(null,p1__9543_SHARP_,v) >= (0));
});})(___$1))
,new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$remove_face$arity$2 = (function (_,f){
var ___$1 = this;
return thi.ng.common.error.unsupported_BANG_.call(null);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face,((function (___$1){
return (function (p1__9547_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__9547_SHARP_,t);
});})(___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face,((function (___$1){
return (function (p1__9544_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__9544_SHARP_,s);
});})(___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face,((function (___$1){
return (function (p1__9545_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__9545_SHARP_,sx,sy,sz);
});})(___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var c = thi.ng.geom.core.centroid.call(null,___$1);
return thi.ng.geom.types.utils.transform_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face,((function (c,___$1){
return (function (p1__9546_SHARP_){
return thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,p1__9546_SHARP_,c),s,c);
});})(c,___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.types.utils.map_mesh.call(null,(function (){var or__4950__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return thi.ng.geom.core.utils.tessellate_with_first;
}
})(),___$1);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PGeomContainer$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PGeomContainer$into$arity$2 = (function (_,faces){
var ___$1 = this;
return thi.ng.geom.types.utils.into_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face,faces);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(2),new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.into.call(null,new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.total_area_3d.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(___$1));
});

//# sourceMappingURL=basicmesh.js.map