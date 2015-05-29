// Compiled by ClojureScript 0.0-3291 {}
goog.provide('thi.ng.geom.types.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.types');
goog.require('clojure.core.reducers');
thi.ng.geom.types.utils.bounding_rect = (function thi$ng$geom$types$utils$bounding_rect(points){
var vec__9553 = thi.ng.geom.core.utils.bounding_rect.call(null,points);
var p = cljs.core.nth.call(null,vec__9553,(0),null);
var size = cljs.core.nth.call(null,vec__9553,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.Rect2(p,size));
} else {
return null;
}
});
thi.ng.geom.types.utils.bounding_box = (function thi$ng$geom$types$utils$bounding_box(points){
var vec__9555 = thi.ng.geom.core.utils.bounding_box.call(null,points);
var p = cljs.core.nth.call(null,vec__9555,(0),null);
var size = cljs.core.nth.call(null,vec__9555,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.AABB(p,size));
} else {
return null;
}
});
thi.ng.geom.types.utils.bounding_circle = (function thi$ng$geom$types$utils$bounding_circle(){
var G__9557 = arguments.length;
switch (G__9557) {
case 1:
return thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.types.utils.bounding_circle.call(null,thi.ng.geom.core.utils.centroid.call(null,points),points);
});

thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__9558 = thi.ng.geom.core.utils.radial_bounds.call(null,thi.ng.geom.core.vector.vec2,c,r_or_points);
var c__$1 = cljs.core.nth.call(null,vec__9558,(0),null);
var r = cljs.core.nth.call(null,vec__9558,(1),null);
return (new thi.ng.geom.types.Circle2(c__$1,r));
});

thi.ng.geom.types.utils.bounding_circle.cljs$lang$maxFixedArity = 2;
thi.ng.geom.types.utils.bounding_sphere = (function thi$ng$geom$types$utils$bounding_sphere(){
var G__9561 = arguments.length;
switch (G__9561) {
case 1:
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.utils.centroid.call(null,points),points);
});

thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__9562 = thi.ng.geom.core.utils.radial_bounds.call(null,thi.ng.geom.core.vector.vec3,c,r_or_points);
var c__$1 = cljs.core.nth.call(null,vec__9562,(0),null);
var r = cljs.core.nth.call(null,vec__9562,(1),null);
return (new thi.ng.geom.types.Sphere(c__$1,r));
});

thi.ng.geom.types.utils.bounding_sphere.cljs$lang$maxFixedArity = 2;
/**
 * Takes a seq of shape entities, calls g/bounds on each and returns
 * union bounds. Does not support collections of mixed 2d/3d entities.
 */
thi.ng.geom.types.utils.coll_bounds = (function thi$ng$geom$types$utils$coll_bounds(coll){
return cljs.core.reduce.call(null,thi.ng.geom.core.union,cljs.core.mapv.call(null,thi.ng.geom.core.bounds,coll));
});
/**
 * Takes an AABB or rect and seq of shapes, proportionally scales and
 * repositions all items to fit into given bounds. Returns lazyseq of
 * transformed entities. Does not support collections of mixed 2D/3D
 * entities. Use rects as target bounds for 2D colls.
 */
thi.ng.geom.types.utils.fit_all_into_bounds = (function thi$ng$geom$types$utils$fit_all_into_bounds(bounds,coll){
var b = thi.ng.geom.types.utils.coll_bounds.call(null,coll);
var s = cljs.core.reduce.call(null,cljs.core.min,thi.ng.geom.core.div.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(b)));
var b_SINGLEQUOTE_ = thi.ng.geom.core.center.call(null,thi.ng.geom.core.scale.call(null,b,s),thi.ng.geom.core.centroid.call(null,bounds));
return cljs.core.map.call(null,((function (b,s,b_SINGLEQUOTE_){
return (function (p1__9564_SHARP_){
return thi.ng.geom.core.scale_size.call(null,thi.ng.geom.core.center.call(null,p1__9564_SHARP_,thi.ng.geom.core.unmap_point.call(null,b_SINGLEQUOTE_,thi.ng.geom.core.map_point.call(null,b,thi.ng.geom.core.centroid.call(null,p1__9564_SHARP_)))),s);
});})(b,s,b_SINGLEQUOTE_))
,coll);
});
thi.ng.geom.types.utils.into_mesh = (function thi$ng$geom$types$utils$into_mesh(mesh,add_face,mesh_or_faces){
return cljs.core.reduce.call(null,add_face,mesh,(((function (){var G__9566 = mesh_or_faces;
if(G__9566){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__9566.thi$ng$geom$core$PFaceAccess$;
}
})())){
return true;
} else {
if((!G__9566.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.PFaceAccess,G__9566);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.PFaceAccess,G__9566);
}
})())?thi.ng.geom.core.faces.call(null,mesh_or_faces):mesh_or_faces));
});
/**
 * Applies f to all faces of given mesh and adds resulting faces to
 * new mesh. Thus f should return a seq of faces. Returns new mesh.
 */
thi.ng.geom.types.utils.map_mesh = (function thi$ng$geom$types$utils$map_mesh(f,mesh){
return thi.ng.geom.core.into.call(null,thi.ng.geom.core.clear_STAR_.call(null,mesh),cljs.core.mapcat.call(null,f,thi.ng.geom.core.faces.call(null,mesh)));
});
thi.ng.geom.types.utils.transform_mesh = (function thi$ng$geom$types$utils$transform_mesh(mesh,add_face,tx){
var tx__$1 = (((function (){var G__9568 = tx;
if(G__9568){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__9568.thi$ng$geom$core$PVectorTransform$;
}
})())){
return true;
} else {
if((!G__9568.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.PVectorTransform,G__9568);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.PVectorTransform,G__9568);
}
})())?(function (v){
return thi.ng.geom.core.transform_vector.call(null,tx,v);
}):tx);
var verts_SINGLEQUOTE_ = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tx__$1){
return (function (acc,v){
return cljs.core.assoc_BANG_.call(null,acc,v,tx__$1.call(null,v));
});})(tx__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),thi.ng.geom.core.vertices.call(null,mesh)));
return cljs.core.reduce.call(null,((function (tx__$1,verts_SINGLEQUOTE_){
return (function (mesh__$1,f){
return add_face.call(null,mesh__$1,cljs.core.mapv.call(null,verts_SINGLEQUOTE_,f));
});})(tx__$1,verts_SINGLEQUOTE_))
,thi.ng.geom.core.clear_STAR_.call(null,mesh),thi.ng.geom.core.faces.call(null,mesh));
});

//# sourceMappingURL=utils.js.map