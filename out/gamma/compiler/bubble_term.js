// Compiled by ClojureScript 0.0-3291 {}
goog.provide('gamma.compiler.bubble_term');
goog.require('cljs.core');
goog.require('gamma.ast');
gamma.compiler.bubble_term.parent_bubbles = (function gamma$compiler$bubble_term$parent_bubbles(db,bubble){
return cljs.core.map.call(null,(function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(db.call(null,x)))){
return cljs.core.assoc.call(null,bubble,new cljs.core.Keyword(null,"current","current",-1088038603),x,new cljs.core.Keyword(null,"conditional","conditional",1441892799),true);
} else {
return cljs.core.assoc.call(null,bubble,new cljs.core.Keyword(null,"current","current",-1088038603),x);
}
}),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(bubble),new cljs.core.Keyword(null,"parents","parents",-2027538891)], null)));
});
gamma.compiler.bubble_term.bubble_term = (function gamma$compiler$bubble_term$bubble_term(db,queue){
while(true){
var bubble = cljs.core.first.call(null,queue);
if((bubble == null)){
return db;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(bubble))){
var G__19961 = db;
var G__19962 = cljs.core.rest.call(null,queue);
db = G__19961;
queue = G__19962;
continue;
} else {
var info_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(bubble),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(bubble)], null);
var node_info = cljs.core.get_in.call(null,db,info_path);
if(cljs.core.truth_(new cljs.core.Keyword(null,"conditional","conditional",1441892799).cljs$core$IFn$_invoke$arity$1(bubble))){
if((node_info == null)){
var parent_bubbles = gamma.compiler.bubble_term.parent_bubbles.call(null,db,bubble);
var G__19963 = cljs.core.assoc_in.call(null,db,info_path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conditional","conditional",1441892799),true], null));
var G__19964 = cljs.core.concat.call(null,cljs.core.rest.call(null,queue),parent_bubbles);
db = G__19963;
queue = G__19964;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"unconditional","unconditional",1829191128).cljs$core$IFn$_invoke$arity$1(node_info))){
var G__19965 = cljs.core.assoc_in.call(null,db,cljs.core.conj.call(null,info_path,new cljs.core.Keyword(null,"conditional","conditional",1441892799)),true);
var G__19966 = cljs.core.rest.call(null,queue);
db = G__19965;
queue = G__19966;
continue;
} else {
var G__19967 = db;
var G__19968 = cljs.core.rest.call(null,queue);
db = G__19967;
queue = G__19968;
continue;
}
}
} else {
if(((node_info == null)) || ((new cljs.core.Keyword(null,"unconditional","unconditional",1829191128).cljs$core$IFn$_invoke$arity$1(node_info) == null))){
var parent_bubbles = gamma.compiler.bubble_term.parent_bubbles.call(null,db,bubble);
var G__19969 = cljs.core.assoc_in.call(null,db,info_path,cljs.core.assoc.call(null,node_info,new cljs.core.Keyword(null,"unconditional","unconditional",1829191128),(1)));
var G__19970 = cljs.core.concat.call(null,cljs.core.rest.call(null,queue),parent_bubbles);
db = G__19969;
queue = G__19970;
continue;
} else {
var G__19971 = cljs.core.assoc_in.call(null,db,info_path,cljs.core.assoc.call(null,node_info,new cljs.core.Keyword(null,"unconditional","unconditional",1829191128),((1) + new cljs.core.Keyword(null,"unconditional","unconditional",1829191128).cljs$core$IFn$_invoke$arity$1(node_info))));
var G__19972 = cljs.core.rest.call(null,queue);
db = G__19971;
queue = G__19972;
continue;
}
}
}
}
break;
}
});
gamma.compiler.bubble_term.bubble_terms = (function gamma$compiler$bubble_term$bubble_terms(db){
return cljs.core.reduce.call(null,gamma.compiler.bubble_term.bubble_term,db,cljs.core.map.call(null,(function (x){
return cljs.core.map.call(null,(function (y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"current","current",-1088038603),y], null);
}),new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(x));
}),cljs.core.filter.call(null,(function (p1__19973_SHARP_){
return ((1) < cljs.core.count.call(null,new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(p1__19973_SHARP_)));
}),cljs.core.map.call(null,cljs.core.last,db))));
});

//# sourceMappingURL=bubble_term.js.map