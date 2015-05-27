// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4422__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4422__auto__)){
var ns = temp__4422__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20440_20452 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20441_20453 = null;
var count__20442_20454 = (0);
var i__20443_20455 = (0);
while(true){
if((i__20443_20455 < count__20442_20454)){
var f_20456 = cljs.core._nth.call(null,chunk__20441_20453,i__20443_20455);
cljs.core.println.call(null,"  ",f_20456);

var G__20457 = seq__20440_20452;
var G__20458 = chunk__20441_20453;
var G__20459 = count__20442_20454;
var G__20460 = (i__20443_20455 + (1));
seq__20440_20452 = G__20457;
chunk__20441_20453 = G__20458;
count__20442_20454 = G__20459;
i__20443_20455 = G__20460;
continue;
} else {
var temp__4422__auto___20461 = cljs.core.seq.call(null,seq__20440_20452);
if(temp__4422__auto___20461){
var seq__20440_20462__$1 = temp__4422__auto___20461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20440_20462__$1)){
var c__5735__auto___20463 = cljs.core.chunk_first.call(null,seq__20440_20462__$1);
var G__20464 = cljs.core.chunk_rest.call(null,seq__20440_20462__$1);
var G__20465 = c__5735__auto___20463;
var G__20466 = cljs.core.count.call(null,c__5735__auto___20463);
var G__20467 = (0);
seq__20440_20452 = G__20464;
chunk__20441_20453 = G__20465;
count__20442_20454 = G__20466;
i__20443_20455 = G__20467;
continue;
} else {
var f_20468 = cljs.core.first.call(null,seq__20440_20462__$1);
cljs.core.println.call(null,"  ",f_20468);

var G__20469 = cljs.core.next.call(null,seq__20440_20462__$1);
var G__20470 = null;
var G__20471 = (0);
var G__20472 = (0);
seq__20440_20452 = G__20469;
chunk__20441_20453 = G__20470;
count__20442_20454 = G__20471;
i__20443_20455 = G__20472;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20473 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4950__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20473);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20473)))?cljs.core.second.call(null,arglists_20473):arglists_20473));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20444 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20445 = null;
var count__20446 = (0);
var i__20447 = (0);
while(true){
if((i__20447 < count__20446)){
var vec__20448 = cljs.core._nth.call(null,chunk__20445,i__20447);
var name = cljs.core.nth.call(null,vec__20448,(0),null);
var map__20449 = cljs.core.nth.call(null,vec__20448,(1),null);
var map__20449__$1 = ((cljs.core.seq_QMARK_.call(null,map__20449))?cljs.core.apply.call(null,cljs.core.hash_map,map__20449):map__20449);
var doc = cljs.core.get.call(null,map__20449__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20449__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20474 = seq__20444;
var G__20475 = chunk__20445;
var G__20476 = count__20446;
var G__20477 = (i__20447 + (1));
seq__20444 = G__20474;
chunk__20445 = G__20475;
count__20446 = G__20476;
i__20447 = G__20477;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__20444);
if(temp__4422__auto__){
var seq__20444__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20444__$1)){
var c__5735__auto__ = cljs.core.chunk_first.call(null,seq__20444__$1);
var G__20478 = cljs.core.chunk_rest.call(null,seq__20444__$1);
var G__20479 = c__5735__auto__;
var G__20480 = cljs.core.count.call(null,c__5735__auto__);
var G__20481 = (0);
seq__20444 = G__20478;
chunk__20445 = G__20479;
count__20446 = G__20480;
i__20447 = G__20481;
continue;
} else {
var vec__20450 = cljs.core.first.call(null,seq__20444__$1);
var name = cljs.core.nth.call(null,vec__20450,(0),null);
var map__20451 = cljs.core.nth.call(null,vec__20450,(1),null);
var map__20451__$1 = ((cljs.core.seq_QMARK_.call(null,map__20451))?cljs.core.apply.call(null,cljs.core.hash_map,map__20451):map__20451);
var doc = cljs.core.get.call(null,map__20451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20451__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20482 = cljs.core.next.call(null,seq__20444__$1);
var G__20483 = null;
var G__20484 = (0);
var G__20485 = (0);
seq__20444 = G__20482;
chunk__20445 = G__20483;
count__20446 = G__20484;
i__20447 = G__20485;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map