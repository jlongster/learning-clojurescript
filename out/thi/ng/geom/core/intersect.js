// Compiled by ClojureScript 0.0-3291 {}
goog.provide('thi.ng.geom.core.intersect');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
thi.ng.geom.core.intersect.sq = (function thi$ng$geom$core$intersect$sq(x){
return (x * x);
});
thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_ = (function thi$ng$geom$core$intersect$intersect_circle_circle_QMARK_(){
var G__9871 = arguments.length;
switch (G__9871) {
case 2:
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__9872,p__9873){
var map__9874 = p__9872;
var map__9874__$1 = ((cljs.core.seq_QMARK_.call(null,map__9874))?cljs.core.apply.call(null,cljs.core.hash_map,map__9874):map__9874);
var p = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__9875 = p__9873;
var map__9875__$1 = ((cljs.core.seq_QMARK_.call(null,map__9875))?cljs.core.apply.call(null,cljs.core.hash_map,map__9875):map__9875);
var q = cljs.core.get.call(null,map__9875__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.call(null,map__9875__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.call(null,p,r1,q,r2);
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,r1,q,r2){
var delta = thi.ng.geom.core._.call(null,q,p);
var d = thi.ng.geom.core.mag.call(null,delta);
if(((d <= (r1 + r2))) && ((d >= thi.ng.common.math.core.abs.call(null,(r1 - r2))))){
var a = ((((r1 * r1) - (r2 * r2)) + (d * d)) / (2.0 * d));
var invd = (1.0 / d);
var p__$1 = thi.ng.geom.core.madd.call(null,delta,(a * invd),p);
var h = Math.sqrt(((r1 * r1) - (a * a)));
var perp = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normal.call(null,delta),(h * invd));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1,perp),thi.ng.geom.core._.call(null,p__$1,perp)], null);
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_ = (function thi$ng$geom$core$intersect$intersect_rect_rect_QMARK_(){
var G__9878 = arguments.length;
switch (G__9878) {
case 2:
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__9879,p__9880){
var map__9881 = p__9879;
var map__9881__$1 = ((cljs.core.seq_QMARK_.call(null,map__9881))?cljs.core.apply.call(null,cljs.core.hash_map,map__9881):map__9881);
var vec__9882 = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__9882,(0),null);
var py = cljs.core.nth.call(null,vec__9882,(1),null);
var vec__9883 = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__9883,(0),null);
var h = cljs.core.nth.call(null,vec__9883,(1),null);
var map__9884 = p__9880;
var map__9884__$1 = ((cljs.core.seq_QMARK_.call(null,map__9884))?cljs.core.apply.call(null,cljs.core.hash_map,map__9884):map__9884);
var vec__9885 = cljs.core.get.call(null,map__9884__$1,new cljs.core.Keyword(null,"p","p",151049309));
var qx = cljs.core.nth.call(null,vec__9885,(0),null);
var qy = cljs.core.nth.call(null,vec__9885,(1),null);
var vec__9886 = cljs.core.get.call(null,map__9884__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.call(null,vec__9886,(0),null);
var qh = cljs.core.nth.call(null,vec__9886,(1),null);
return !(((px > (qx + qw))) || ((qx > (px + w))) || ((py > (qy + qh))) || ((qy > (py + h))));
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__9887,p__9888,p__9889,p__9890){
var vec__9891 = p__9887;
var px1 = cljs.core.nth.call(null,vec__9891,(0),null);
var py1 = cljs.core.nth.call(null,vec__9891,(1),null);
var vec__9892 = p__9888;
var qx1 = cljs.core.nth.call(null,vec__9892,(0),null);
var qy1 = cljs.core.nth.call(null,vec__9892,(1),null);
var vec__9893 = p__9889;
var px2 = cljs.core.nth.call(null,vec__9893,(0),null);
var py2 = cljs.core.nth.call(null,vec__9893,(1),null);
var vec__9894 = p__9890;
var qx2 = cljs.core.nth.call(null,vec__9894,(0),null);
var qy2 = cljs.core.nth.call(null,vec__9894,(1),null);
return !(((px1 > qx2)) || ((px2 > qx1)) || ((py1 > qy2)) || ((py2 > qy1)));
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_ = (function thi$ng$geom$core$intersect$intersect_rect_circle_QMARK_(){
var G__9897 = arguments.length;
switch (G__9897) {
case 2:
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__9898,p__9899){
var map__9900 = p__9898;
var map__9900__$1 = ((cljs.core.seq_QMARK_.call(null,map__9900))?cljs.core.apply.call(null,cljs.core.hash_map,map__9900):map__9900);
var p = cljs.core.get.call(null,map__9900__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.call(null,map__9900__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__9901 = p__9899;
var map__9901__$1 = ((cljs.core.seq_QMARK_.call(null,map__9901))?cljs.core.apply.call(null,cljs.core.hash_map,map__9901):map__9901);
var s = cljs.core.get.call(null,map__9901__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__9901__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,sz),s,r);
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__9902,p__9903,p__9904,r){
var vec__9905 = p__9902;
var px = cljs.core.nth.call(null,vec__9905,(0),null);
var py = cljs.core.nth.call(null,vec__9905,(1),null);
var vec__9906 = p__9903;
var qx = cljs.core.nth.call(null,vec__9906,(0),null);
var qy = cljs.core.nth.call(null,vec__9906,(1),null);
var vec__9907 = p__9904;
var cx = cljs.core.nth.call(null,vec__9907,(0),null);
var cy = cljs.core.nth.call(null,vec__9907,(1),null);
var ds = (((cx < px))?thi.ng.geom.core.intersect.sq.call(null,(cx - px)):(((cx > qx))?thi.ng.geom.core.intersect.sq.call(null,(cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.core.intersect.sq.call(null,(cy - py)):(((cy > qy))?thi.ng.geom.core.intersect.sq.call(null,(cy - qy)):0.0)));
return (ds__$1 <= (r * r));
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_aabb_QMARK_(){
var G__9910 = arguments.length;
switch (G__9910) {
case 2:
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__9911,p__9912){
var map__9913 = p__9911;
var map__9913__$1 = ((cljs.core.seq_QMARK_.call(null,map__9913))?cljs.core.apply.call(null,cljs.core.hash_map,map__9913):map__9913);
var pa = cljs.core.get.call(null,map__9913__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.call(null,map__9913__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__9914 = p__9912;
var map__9914__$1 = ((cljs.core.seq_QMARK_.call(null,map__9914))?cljs.core.apply.call(null,cljs.core.hash_map,map__9914):map__9914);
var pb = cljs.core.get.call(null,map__9914__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.call(null,map__9914__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.call(null,pa,pb,thi.ng.geom.core._PLUS_.call(null,pa,sa),thi.ng.geom.core._PLUS_.call(null,pb,sb));
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (pa,pb,qa,qb){
if(((pa.call(null,(0)) <= qb.call(null,(0)))) && ((pb.call(null,(0)) <= qa.call(null,(0))))){
if(((pa.call(null,(1)) <= qb.call(null,(1)))) && ((pb.call(null,(1)) <= qa.call(null,(1))))){
return ((pa.call(null,(2)) <= qb.call(null,(2)))) && ((pb.call(null,(2)) <= qa.call(null,(2))));
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_sphere_QMARK_(){
var G__9917 = arguments.length;
switch (G__9917) {
case 2:
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__9918,p__9919){
var map__9920 = p__9918;
var map__9920__$1 = ((cljs.core.seq_QMARK_.call(null,map__9920))?cljs.core.apply.call(null,cljs.core.hash_map,map__9920):map__9920);
var p = cljs.core.get.call(null,map__9920__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.call(null,map__9920__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__9921 = p__9919;
var map__9921__$1 = ((cljs.core.seq_QMARK_.call(null,map__9921))?cljs.core.apply.call(null,cljs.core.hash_map,map__9921):map__9921);
var s = cljs.core.get.call(null,map__9921__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__9921__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,sz),s,r);
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__9922,p__9923,p__9924,r){
var vec__9925 = p__9922;
var px = cljs.core.nth.call(null,vec__9925,(0),null);
var py = cljs.core.nth.call(null,vec__9925,(1),null);
var pz = cljs.core.nth.call(null,vec__9925,(2),null);
var vec__9926 = p__9923;
var qx = cljs.core.nth.call(null,vec__9926,(0),null);
var qy = cljs.core.nth.call(null,vec__9926,(1),null);
var qz = cljs.core.nth.call(null,vec__9926,(2),null);
var vec__9927 = p__9924;
var cx = cljs.core.nth.call(null,vec__9927,(0),null);
var cy = cljs.core.nth.call(null,vec__9927,(1),null);
var cz = cljs.core.nth.call(null,vec__9927,(2),null);
var ds = (((cx < px))?thi.ng.geom.core.intersect.sq.call(null,(cx - px)):(((cx > qx))?thi.ng.geom.core.intersect.sq.call(null,(cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.core.intersect.sq.call(null,(cy - py)):(((cy > qy))?thi.ng.geom.core.intersect.sq.call(null,(cy - qy)):0.0)));
var ds__$2 = (ds__$1 + (((cz < pz))?thi.ng.geom.core.intersect.sq.call(null,(cz - pz)):(((cz > qz))?thi.ng.geom.core.intersect.sq.call(null,(cz - qz)):0.0)));
return (ds__$2 <= (r * r));
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_sphere_sphere_QMARK_(){
var G__9930 = arguments.length;
switch (G__9930) {
case 2:
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__9931,p__9932){
var map__9933 = p__9931;
var map__9933__$1 = ((cljs.core.seq_QMARK_.call(null,map__9933))?cljs.core.apply.call(null,cljs.core.hash_map,map__9933):map__9933);
var p1 = cljs.core.get.call(null,map__9933__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.call(null,map__9933__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__9934 = p__9932;
var map__9934__$1 = ((cljs.core.seq_QMARK_.call(null,map__9934))?cljs.core.apply.call(null,cljs.core.hash_map,map__9934):map__9934);
var p2 = cljs.core.get.call(null,map__9934__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.call(null,map__9934__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.call(null,p1,r1,p2,r2);
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p1,r1,p2,r2){
return (thi.ng.geom.core.dist_squared.call(null,p1,p2) <= ((r1 + r2) * (r1 + r2)));
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_sphere_QMARK_(){
var G__9937 = arguments.length;
switch (G__9937) {
case 2:
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__9938,p__9939){
var map__9940 = p__9938;
var map__9940__$1 = ((cljs.core.seq_QMARK_.call(null,map__9940))?cljs.core.apply.call(null,cljs.core.hash_map,map__9940):map__9940);
var rp = cljs.core.get.call(null,map__9940__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.call(null,map__9940__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var map__9941 = p__9939;
var map__9941__$1 = ((cljs.core.seq_QMARK_.call(null,map__9941))?cljs.core.apply.call(null,cljs.core.hash_map,map__9941):map__9941);
var p = cljs.core.get.call(null,map__9941__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__9941__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.call(null,rp,dir,p,r);
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (rp,dir,p,r){
var q = thi.ng.geom.core._.call(null,p,rp);
var ds = thi.ng.geom.core.mag_squared.call(null,q);
var v = (- thi.ng.geom.core.dot.call(null,q,dir));
var d = ((r * r) - (ds - (v * v)));
if((d >= 0.0)){
var d__$1 = Math.sqrt(d);
var a = (v + d__$1);
var b = (v - d__$1);
if(!(((a < (0))) && ((b < (0))))){
if(((a > (0))) && ((b > (0)))){
if((a > b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
if((b > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_ray_triangle3_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_triangle3_QMARK_(p,d,a,b,c){
var u = thi.ng.geom.core._.call(null,b,a);
var v = thi.ng.geom.core._.call(null,c,a);
var n = thi.ng.geom.core.cross.call(null,u,v);
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,n))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"degenerate","degenerate",186148125)], null);
} else {
var w0 = thi.ng.geom.core._.call(null,p,a);
var a_SINGLEQUOTE_ = (- thi.ng.geom.core.dot.call(null,n,w0));
var b_SINGLEQUOTE_ = thi.ng.geom.core.dot.call(null,n,d);
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,0.0,b_SINGLEQUOTE_))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,0.0,a_SINGLEQUOTE_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"same-plane","same-plane",-2008485673)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
}
} else {
var r = (a_SINGLEQUOTE_ / b_SINGLEQUOTE_);
if((r < 0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
} else {
var i = thi.ng.geom.core.madd.call(null,d,r,p);
var vec__9944 = thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,i,u,v);
var u__$1 = cljs.core.nth.call(null,vec__9944,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__9944,(1),null);
var w = cljs.core.nth.call(null,vec__9944,(2),null);
if(cljs.core.truth_((function (){var and__4938__auto__ = (u__$1 >= 0.0);
if(and__4938__auto__){
var and__4938__auto____$1 = (w >= 0.0);
if(and__4938__auto____$1){
return thi.ng.common.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1);
} else {
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
}
}
});
thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_ = (function thi$ng$geom$core$intersect$intersect_line2_line2_QMARK_(p__9945,p__9946,p__9947,p__9948){
var vec__9953 = p__9945;
var px1 = cljs.core.nth.call(null,vec__9953,(0),null);
var py1 = cljs.core.nth.call(null,vec__9953,(1),null);
var p = vec__9953;
var vec__9954 = p__9946;
var qx1 = cljs.core.nth.call(null,vec__9954,(0),null);
var qy1 = cljs.core.nth.call(null,vec__9954,(1),null);
var q = vec__9954;
var vec__9955 = p__9947;
var px2 = cljs.core.nth.call(null,vec__9955,(0),null);
var py2 = cljs.core.nth.call(null,vec__9955,(1),null);
var lp = vec__9955;
var vec__9956 = p__9948;
var qx2 = cljs.core.nth.call(null,vec__9956,(0),null);
var qy2 = cljs.core.nth.call(null,vec__9956,(1),null);
var lq = vec__9956;
var dx1 = (qx1 - px1);
var dy1 = (qy1 - py1);
var dx2 = (qx2 - px2);
var dy2 = (qy2 - py2);
var dx12 = (px1 - px2);
var dy12 = (py1 - py2);
var denom = ((dy2 * dx1) - (dx2 * dy1));
var na = ((dx2 * dy12) - (dy2 * dx12));
var nb = ((dx1 * dy12) - (dy1 * dx12));
if((denom === (0))){
if(((na === (0))) && ((nb === (0)))){
var ip = thi.ng.geom.core.utils.closest_point_on_segment.call(null,lp,p,q);
var iq = thi.ng.geom.core.utils.closest_point_on_segment.call(null,lq,p,q);
if(cljs.core.truth_((function (){var or__4950__auto__ = thi.ng.common.math.core.delta_EQ_.call(null,ip,lp);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return thi.ng.common.math.core.delta_EQ_.call(null,iq,lq);
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident-no-intersect","coincident-no-intersect",1935247952),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
}
} else {
var ua = (na / denom);
var ub = (nb / denom);
var i = thi.ng.geom.core.mix.call(null,p,q,ua);
if(((ua >= 0.0)) && ((ua <= 1.0)) && ((ub >= 0.0)) && ((ub <= 1.0))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
}
});
thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_ = (function thi$ng$geom$core$intersect$intersect_line2_edges_QMARK_(rp,rq,edges){
return cljs.core.first.call(null,cljs.core.transduce.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,(function (p__9960){
var vec__9961 = p__9960;
var p = cljs.core.nth.call(null,vec__9961,(0),null);
var q = cljs.core.nth.call(null,vec__9961,(1),null);
return thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_.call(null,rp,rq,p,q);
})),cljs.core.filter.call(null,(function (p1__9957_SHARP_){
var and__4938__auto__ = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p1__9957_SHARP_);
if(cljs.core.truth_(and__4938__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intersect","intersect",-2039792392),null,new cljs.core.Keyword(null,"coincident","coincident",-473799301),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__9957_SHARP_));
} else {
return and__4938__auto__;
}
}))),cljs.core.completing.call(null,(function (closest,isec){
var p = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(isec);
var d = thi.ng.geom.core.dist_squared.call(null,rp,p);
if((d < closest.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
} else {
return closest;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.common.math.core.INF_PLUS_], null),edges));
});
thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray2_edges_QMARK_(rp,rd,edges){
return thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_.call(null,rp,thi.ng.geom.core.madd.call(null,rd,1.0E29,rp),edges);
});
thi.ng.geom.core.intersect.intersect_plane_plane_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_plane_QMARK_(an,aw,bn,bw){
if(cljs.core.truth_((function (){var or__4950__auto__ = thi.ng.common.math.core.delta_EQ_.call(null,aw,bw,thi.ng.common.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return thi.ng.common.math.core.delta_EQ_.call(null,an,bn,thi.ng.common.math.core._STAR_eps_STAR_);
}
})())){
return null;
} else {
var od = thi.ng.geom.core.dot.call(null,an,bn);
var det = ((1) / ((od * od) + (-1)));
var u = (((bw * od) + aw) * det);
var v = (((aw * od) + bw) * det);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),thi.ng.geom.core.madd.call(null,an,u,thi.ng.geom.core._STAR_.call(null,bn,v)),new cljs.core.Keyword(null,"dir","dir",1734754661),thi.ng.geom.core.utils.ortho_normal.call(null,an,bn)], null);
}
});
thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_plane_QMARK_(rp,dir,n,w){
var dp = thi.ng.geom.core.dot.call(null,n,dir);
var dn = (thi.ng.geom.core.dot.call(null,n,rp) + w);
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,0.0,dp,thi.ng.common.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((dn === (0)))?new cljs.core.Keyword(null,"on-plane","on-plane",-1177899984):new cljs.core.Keyword(null,"parallel","parallel",-1863607128))], null);
} else {
var du = (- (dn / dp));
var i = thi.ng.geom.core.madd.call(null,dir,du,rp);
if(cljs.core.truth_(thi.ng.common.math.core.in_range_QMARK_.call(null,0.0,1.0,du))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
});
thi.ng.geom.core.intersect.intersect_plane_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_sphere_QMARK_(n,w,p,r){
var r__$1 = (r + thi.ng.common.math.core._STAR_eps_STAR_);
return thi.ng.common.math.core.in_range_QMARK_.call(null,(- r__$1),r__$1,(thi.ng.geom.core.dot.call(null,n,p) + w));
});
/**
 * Computes sum((a-b)*c), where a, b, c are 3D vectors.
 */
thi.ng.geom.core.intersect.subdot = (function thi$ng$geom$core$intersect$subdot(a,b,c){
var d = thi.ng.geom.core.subm.call(null,a,b,c);
return ((d.call(null,(0)) + d.call(null,(1))) + d.call(null,(2)));
});
/**
 * Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
 * Returns 2-elem vec of [bitmask affine-coords].
 */
thi.ng.geom.core.intersect.face_a = (function thi$ng$geom$core$intersect$face_a(f,deltas){
var aff = cljs.core.mapv.call(null,f,deltas);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((((aff.call(null,(0)) > (0)))?(1):(0)) | (((aff.call(null,(1)) > (0)))?(2):(0))) | (((aff.call(null,(2)) > (0)))?(4):(0))) | (((aff.call(null,(3)) > (0)))?(8):(0))),aff], null);
});
/**
 * Takes the 4 delta vectors between tetra2/tetra1 and a normal.
 * Returns true if all dot products are positive.
 */
thi.ng.geom.core.intersect.face_b1_QMARK_ = (function thi$ng$geom$core$intersect$face_b1_QMARK_(deltas,n){
return cljs.core.every_QMARK_.call(null,(function (p1__9962_SHARP_){
return (thi.ng.geom.core.dot.call(null,p1__9962_SHARP_,n) > (0));
}),deltas);
});
/**
 * Like face-b1?, but optimized for last face of tetrahedron.
 */
thi.ng.geom.core.intersect.face_b2_QMARK_ = (function thi$ng$geom$core$intersect$face_b2_QMARK_(verts,refv,n){
return cljs.core.every_QMARK_.call(null,(function (p1__9963_SHARP_){
return (thi.ng.geom.core.intersect.subdot.call(null,p1__9963_SHARP_,refv,n) > (0));
}),verts);
});
/**
 * Takes 2 bitmasks and edge flags, returns true if there's a
 * separating plane between the faces shared by that edge.
 */
thi.ng.geom.core.intersect.edge_a = (function thi$ng$geom$core$intersect$edge_a(ma,mb,ea,eb){
var xa = (ma & (ma ^ mb));
var xb = (mb & (xa ^ mb));
var edge = ((function (xa,xb){
return (function (a,b,i,j){
var cp = ((ea.call(null,i) * eb.call(null,j)) - (ea.call(null,j) * eb.call(null,i)));
return (((cp > (0))) && (((xa | a) > (0))) && (((xb | b) > (0)))) || (((cp < (0))) && (((xa | b) > (0))) && (((xb | a) > (0))));
});})(xa,xb))
;
return cljs.core.not.call(null,(function (){var or__4950__auto__ = cljs.core.not_EQ_.call(null,(15),(ma | mb));
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = edge.call(null,(1),(2),(1),(0));
if(cljs.core.truth_(or__4950__auto____$1)){
return or__4950__auto____$1;
} else {
var or__4950__auto____$2 = edge.call(null,(1),(4),(2),(0));
if(cljs.core.truth_(or__4950__auto____$2)){
return or__4950__auto____$2;
} else {
var or__4950__auto____$3 = edge.call(null,(1),(8),(3),(0));
if(cljs.core.truth_(or__4950__auto____$3)){
return or__4950__auto____$3;
} else {
var or__4950__auto____$4 = edge.call(null,(2),(4),(2),(1));
if(cljs.core.truth_(or__4950__auto____$4)){
return or__4950__auto____$4;
} else {
var or__4950__auto____$5 = edge.call(null,(2),(8),(3),(1));
if(cljs.core.truth_(or__4950__auto____$5)){
return or__4950__auto____$5;
} else {
return edge.call(null,(4),(8),(3),(2));
}
}
}
}
}
}
})());
});
/**
 * Lazy edge evaluation. Takes a vector of edges, vector of edge
 * points and an edge id. Looks up edge for given id and if not yet
 * present constructs it. Returns 2-elem vector of [edges edge].
 */
thi.ng.geom.core.intersect.get_edge = (function thi$ng$geom$core$intersect$get_edge(edges,epoints,id){
var e = edges.call(null,id);
if(cljs.core.truth_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,e], null);
} else {
var ep = epoints.call(null,id);
var e__$1 = thi.ng.geom.core._.call(null,ep.call(null,(0)),ep.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,edges,id,e__$1),e__$1], null);
}
});
/**
 * Takes the 4 delta vectors between the two tetras, edge definitions
 * of the 1st tetra, vertices of the 2nd, a reference point of the 1st
 * and a seq of specs, each encoding a specific check (either calls to
 * face-a* or edge-a). Returns vector of bitmasks or nil if fail early.
 */
thi.ng.geom.core.intersect.check_faces_a = (function thi$ng$geom$core$intersect$check_faces_a(deltas,epoints,verts,p,specs){
var masks = cljs.core.PersistentVector.EMPTY;
var affine = cljs.core.PersistentVector.EMPTY;
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__9970 = cljs.core.first.call(null,s);
var f = cljs.core.nth.call(null,vec__9970,(0),null);
var a = cljs.core.nth.call(null,vec__9970,(1),null);
var b = cljs.core.nth.call(null,vec__9970,(2),null);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f*","f*",-689873734),f))){
var vec__9971 = thi.ng.geom.core.intersect.get_edge.call(null,edges,epoints,a);
var edges__$1 = cljs.core.nth.call(null,vec__9971,(0),null);
var ea = cljs.core.nth.call(null,vec__9971,(1),null);
var vec__9972 = thi.ng.geom.core.intersect.get_edge.call(null,edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.call(null,vec__9972,(0),null);
var eb = cljs.core.nth.call(null,vec__9972,(1),null);
var n = thi.ng.geom.core.cross.call(null,ea,eb);
var vec__9973 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.core.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__9971,edges__$1,ea,vec__9972,edges__$2,eb,n,vec__9970,f,a,b){
return (function (p1__9964_SHARP_){
return thi.ng.geom.core.dot.call(null,p1__9964_SHARP_,n);
});})(masks,affine,edges,s,vec__9971,edges__$1,ea,vec__9972,edges__$2,eb,n,vec__9970,f,a,b))
,deltas):thi.ng.geom.core.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__9971,edges__$1,ea,vec__9972,edges__$2,eb,n,vec__9970,f,a,b){
return (function (p1__9965_SHARP_){
return thi.ng.geom.core.intersect.subdot.call(null,p1__9965_SHARP_,p,n);
});})(masks,affine,edges,s,vec__9971,edges__$1,ea,vec__9972,edges__$2,eb,n,vec__9970,f,a,b))
,verts));
var m = cljs.core.nth.call(null,vec__9973,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__9973,(1),null);
if((m < (15))){
var G__9974 = cljs.core.conj.call(null,masks,m);
var G__9975 = cljs.core.conj.call(null,affine,a__$1);
var G__9976 = edges__$2;
var G__9977 = cljs.core.next.call(null,s);
masks = G__9974;
affine = G__9975;
edges = G__9976;
s = G__9977;
continue;
} else {
return null;
}
} else {
if(cljs.core.not.call(null,thi.ng.geom.core.intersect.edge_a.call(null,masks.call(null,a),masks.call(null,b),affine.call(null,a),affine.call(null,b)))){
var G__9978 = masks;
var G__9979 = affine;
var G__9980 = edges;
var G__9981 = cljs.core.next.call(null,s);
masks = G__9978;
affine = G__9979;
edges = G__9980;
s = G__9981;
continue;
} else {
return null;
}
}
} else {
return masks;
}
break;
}
});
/**
 * Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
 * Returns true if tetras do intersect.
 */
thi.ng.geom.core.intersect.check_faces_b = (function thi$ng$geom$core$intersect$check_faces_b(deltas,epoints,verts,p,specs){
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__9985 = cljs.core.first.call(null,s);
var f = cljs.core.nth.call(null,vec__9985,(0),null);
var a = cljs.core.nth.call(null,vec__9985,(1),null);
var b = cljs.core.nth.call(null,vec__9985,(2),null);
var vec__9986 = thi.ng.geom.core.intersect.get_edge.call(null,edges,epoints,a);
var edges__$1 = cljs.core.nth.call(null,vec__9986,(0),null);
var ea = cljs.core.nth.call(null,vec__9986,(1),null);
var vec__9987 = thi.ng.geom.core.intersect.get_edge.call(null,edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.call(null,vec__9987,(0),null);
var eb = cljs.core.nth.call(null,vec__9987,(1),null);
if(cljs.core.not.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.core.intersect.face_b1_QMARK_.call(null,deltas,thi.ng.geom.core.cross.call(null,ea,eb)):thi.ng.geom.core.intersect.face_b2_QMARK_.call(null,verts,p,thi.ng.geom.core.cross.call(null,ea,eb))))){
var G__9988 = edges__$2;
var G__9989 = cljs.core.next.call(null,s);
edges = G__9988;
s = G__9989;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
});
/**
 * Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
 * true if they intersect. Orientation of points is irrelevant (unlike
 * in the original algorithm this implementation is based on).
 */
thi.ng.geom.core.intersect.intersect_tetrahedra_QMARK_ = (function thi$ng$geom$core$intersect$intersect_tetrahedra_QMARK_(p__9992,p__9993){
var vec__9996 = p__9992;
var pa = cljs.core.nth.call(null,vec__9996,(0),null);
var pb = cljs.core.nth.call(null,vec__9996,(1),null);
var pc = cljs.core.nth.call(null,vec__9996,(2),null);
var pd = cljs.core.nth.call(null,vec__9996,(3),null);
var p = vec__9996;
var vec__9997 = p__9993;
var qa = cljs.core.nth.call(null,vec__9997,(0),null);
var qb = cljs.core.nth.call(null,vec__9997,(1),null);
var qc = cljs.core.nth.call(null,vec__9997,(2),null);
var qd = cljs.core.nth.call(null,vec__9997,(3),null);
var q = vec__9997;
var masks = thi.ng.geom.core.intersect.check_faces_a.call(null,cljs.core.map.call(null,((function (vec__9996,pa,pb,pc,pd,p,vec__9997,qa,qb,qc,qd,q){
return (function (p1__9990_SHARP_){
return thi.ng.geom.core._.call(null,p1__9990_SHARP_,pa);
});})(vec__9996,pa,pb,pc,pd,p,vec__9997,qa,qb,qc,qd,q))
,q),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pb], null)], null),q,pb,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2),(3)], null)], null));
if(cljs.core.truth_(masks)){
var or__4950__auto__ = cljs.core.not_EQ_.call(null,(15),cljs.core.reduce.call(null,cljs.core.bit_or,masks));
if(or__4950__auto__){
return or__4950__auto__;
} else {
return thi.ng.geom.core.intersect.check_faces_b.call(null,cljs.core.map.call(null,((function (or__4950__auto__,masks,vec__9996,pa,pb,pc,pd,p,vec__9997,qa,qb,qc,qd,q){
return (function (p1__9991_SHARP_){
return thi.ng.geom.core._.call(null,p1__9991_SHARP_,qa);
});})(or__4950__auto__,masks,vec__9996,pa,pb,pc,pd,p,vec__9997,qa,qb,qc,qd,q))
,p),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qb,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qb], null)], null),p,qb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null)], null));
}
} else {
return null;
}
});

//# sourceMappingURL=intersect.js.map