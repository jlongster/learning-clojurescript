// Compiled by ClojureScript 0.0-3291 {}
goog.provide('gamma_driver.impl.bind');
goog.require('cljs.core');
gamma_driver.impl.bind.bind_dispatch_fn = (function gamma_driver$impl$bind$bind_dispatch_fn(element,data){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"storage","storage",1867247511).cljs$core$IFn$_invoke$arity$1(element))){
return new cljs.core.Keyword(null,"attribute","attribute",-2074029119);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uniform","uniform",496503348),new cljs.core.Keyword(null,"storage","storage",1867247511).cljs$core$IFn$_invoke$arity$1(element))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element)))){
return new cljs.core.Keyword(null,"texture-uniform","texture-uniform",-1282420766);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uniform","uniform",496503348),new cljs.core.Keyword(null,"storage","storage",1867247511).cljs$core$IFn$_invoke$arity$1(element))){
return new cljs.core.Keyword(null,"uniform","uniform",496503348);
} else {
return null;
}
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"element-index","element-index",-1604414953),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element))){
return new cljs.core.Keyword(null,"element-index","element-index",-1604414953);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"variable-array","variable-array",1497776924),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element))){
return new cljs.core.Keyword(null,"variable-array","variable-array",1497776924);
} else {
return null;
}
}
}
});
if(typeof gamma_driver.impl.bind.bind_STAR_ !== 'undefined'){
} else {
gamma_driver.impl.bind.bind_STAR_ = (function (){var method_table__5845__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5846__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5847__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5848__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5849__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamma-driver.impl.bind","bind*"),((function (method_table__5845__auto__,prefer_table__5846__auto__,method_cache__5847__auto__,cached_hierarchy__5848__auto__,hierarchy__5849__auto__){
return (function (fns,driver,program,element,data){
return gamma_driver.impl.bind.bind_dispatch_fn.call(null,element,data);
});})(method_table__5845__auto__,prefer_table__5846__auto__,method_cache__5847__auto__,cached_hierarchy__5848__auto__,hierarchy__5849__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5849__auto__,method_table__5845__auto__,prefer_table__5846__auto__,method_cache__5847__auto__,cached_hierarchy__5848__auto__));
})();
}
cljs.core._add_method.call(null,gamma_driver.impl.bind.bind_STAR_,new cljs.core.Keyword(null,"attribute","attribute",-2074029119),(function (fns,driver,program,element,input){
var map__20002 = fns;
var map__20002__$1 = ((cljs.core.seq_QMARK_.call(null,map__20002))?cljs.core.apply.call(null,cljs.core.hash_map,map__20002):map__20002);
var bind_attribute = cljs.core.get.call(null,map__20002__$1,new cljs.core.Keyword(null,"bind-attribute","bind-attribute",-708293124));
var array_buffer = cljs.core.get.call(null,map__20002__$1,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380));
return bind_attribute.call(null,driver,program,element,array_buffer.call(null,driver,(function (){var input__$1 = ((cljs.core.map_QMARK_.call(null,input))?input:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),input], null));
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(input__$1);
return cljs.core.assoc.call(null,input__$1,new cljs.core.Keyword(null,"data","data",-232669377),(cljs.core.truth_(data.length)?data:(new Float32Array(cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,data))))),new cljs.core.Keyword(null,"usage","usage",-1583752910),new cljs.core.Keyword(null,"static-draw","static-draw",1191962050),new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"count","count",2139924085),(function (){var temp__4420__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(input__$1);
if(cljs.core.truth_(temp__4420__auto__)){
var c = temp__4420__auto__;
return c;
} else {
if(cljs.core.seqable_QMARK_.call(null,data)){
return cljs.core.count.call(null,data);
} else {
return null;
}
}
})());
})()));
}));
cljs.core._add_method.call(null,gamma_driver.impl.bind.bind_STAR_,new cljs.core.Keyword(null,"uniform","uniform",496503348),(function (fns,driver,program,element,input){
var map__20003 = fns;
var map__20003__$1 = ((cljs.core.seq_QMARK_.call(null,map__20003))?cljs.core.apply.call(null,cljs.core.hash_map,map__20003):map__20003);
var bind_uniform = cljs.core.get.call(null,map__20003__$1,new cljs.core.Keyword(null,"bind-uniform","bind-uniform",-1297789726));
return bind_uniform.call(null,driver,program,element,(function (){var input__$1 = ((cljs.core.map_QMARK_.call(null,input))?input:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),input], null));
return cljs.core.assoc.call(null,input__$1,new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(input__$1)], null))));
})());
}));
cljs.core._add_method.call(null,gamma_driver.impl.bind.bind_STAR_,new cljs.core.Keyword(null,"element-index","element-index",-1604414953),(function (fns,driver,program,element,input){
var map__20004 = fns;
var map__20004__$1 = ((cljs.core.seq_QMARK_.call(null,map__20004))?cljs.core.apply.call(null,cljs.core.hash_map,map__20004):map__20004);
var element_array_buffer = cljs.core.get.call(null,map__20004__$1,new cljs.core.Keyword(null,"element-array-buffer","element-array-buffer",-2099854251));
var spec = (function (){var input__$1 = ((cljs.core.map_QMARK_.call(null,input))?input:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),input], null));
return cljs.core.assoc.call(null,input__$1,new cljs.core.Keyword(null,"data","data",-232669377),(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(input__$1).buffer)?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(input__$1):(new Uint16Array(cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(input__$1)))))),new cljs.core.Keyword(null,"usage","usage",-1583752910),new cljs.core.Keyword(null,"static-draw","static-draw",1191962050),new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"count","count",2139924085),(function (){var temp__4420__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(input__$1);
if(cljs.core.truth_(temp__4420__auto__)){
var c = temp__4420__auto__;
return c;
} else {
return cljs.core.count.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(input__$1));
}
})());
})();
return element_array_buffer.call(null,driver,spec);
}));
cljs.core._add_method.call(null,gamma_driver.impl.bind.bind_STAR_,new cljs.core.Keyword(null,"texture-uniform","texture-uniform",-1282420766),(function (fns,driver,program,variable,input){
var map__20005 = fns;
var map__20005__$1 = ((cljs.core.seq_QMARK_.call(null,map__20005))?cljs.core.apply.call(null,cljs.core.hash_map,map__20005):map__20005);
var bind_texture_uniform = cljs.core.get.call(null,map__20005__$1,new cljs.core.Keyword(null,"bind-texture-uniform","bind-texture-uniform",-288650696));
var texture = cljs.core.get.call(null,map__20005__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
return bind_texture_uniform.call(null,driver,program,variable,texture.call(null,driver,input));
}));
gamma_driver.impl.bind.bind = (function gamma_driver$impl$bind$bind(fns,driver,program,data){
var p = new cljs.core.Keyword(null,"program","program",781564284).cljs$core$IFn$_invoke$arity$1(fns).call(null,driver,program);
var seq__20012_20018 = cljs.core.seq.call(null,data);
var chunk__20013_20019 = null;
var count__20014_20020 = (0);
var i__20015_20021 = (0);
while(true){
if((i__20015_20021 < count__20014_20020)){
var vec__20016_20022 = cljs.core._nth.call(null,chunk__20013_20019,i__20015_20021);
var k_20023 = cljs.core.nth.call(null,vec__20016_20022,(0),null);
var v_20024 = cljs.core.nth.call(null,vec__20016_20022,(1),null);
gamma_driver.impl.bind.bind_STAR_.call(null,fns,driver,p,k_20023,v_20024);

var G__20025 = seq__20012_20018;
var G__20026 = chunk__20013_20019;
var G__20027 = count__20014_20020;
var G__20028 = (i__20015_20021 + (1));
seq__20012_20018 = G__20025;
chunk__20013_20019 = G__20026;
count__20014_20020 = G__20027;
i__20015_20021 = G__20028;
continue;
} else {
var temp__4422__auto___20029 = cljs.core.seq.call(null,seq__20012_20018);
if(temp__4422__auto___20029){
var seq__20012_20030__$1 = temp__4422__auto___20029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20012_20030__$1)){
var c__5735__auto___20031 = cljs.core.chunk_first.call(null,seq__20012_20030__$1);
var G__20032 = cljs.core.chunk_rest.call(null,seq__20012_20030__$1);
var G__20033 = c__5735__auto___20031;
var G__20034 = cljs.core.count.call(null,c__5735__auto___20031);
var G__20035 = (0);
seq__20012_20018 = G__20032;
chunk__20013_20019 = G__20033;
count__20014_20020 = G__20034;
i__20015_20021 = G__20035;
continue;
} else {
var vec__20017_20036 = cljs.core.first.call(null,seq__20012_20030__$1);
var k_20037 = cljs.core.nth.call(null,vec__20017_20036,(0),null);
var v_20038 = cljs.core.nth.call(null,vec__20017_20036,(1),null);
gamma_driver.impl.bind.bind_STAR_.call(null,fns,driver,p,k_20037,v_20038);

var G__20039 = cljs.core.next.call(null,seq__20012_20030__$1);
var G__20040 = null;
var G__20041 = (0);
var G__20042 = (0);
seq__20012_20018 = G__20039;
chunk__20013_20019 = G__20040;
count__20014_20020 = G__20041;
i__20015_20021 = G__20042;
continue;
}
} else {
}
}
break;
}

return p;
});

//# sourceMappingURL=bind.js.map