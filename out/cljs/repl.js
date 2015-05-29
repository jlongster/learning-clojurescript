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
var seq__20667_20679 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20668_20680 = null;
var count__20669_20681 = (0);
var i__20670_20682 = (0);
while(true){
if((i__20670_20682 < count__20669_20681)){
var f_20683 = cljs.core._nth.call(null,chunk__20668_20680,i__20670_20682);
cljs.core.println.call(null,"  ",f_20683);

var G__20684 = seq__20667_20679;
var G__20685 = chunk__20668_20680;
var G__20686 = count__20669_20681;
var G__20687 = (i__20670_20682 + (1));
seq__20667_20679 = G__20684;
chunk__20668_20680 = G__20685;
count__20669_20681 = G__20686;
i__20670_20682 = G__20687;
continue;
} else {
var temp__4422__auto___20688 = cljs.core.seq.call(null,seq__20667_20679);
if(temp__4422__auto___20688){
var seq__20667_20689__$1 = temp__4422__auto___20688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20667_20689__$1)){
var c__5735__auto___20690 = cljs.core.chunk_first.call(null,seq__20667_20689__$1);
var G__20691 = cljs.core.chunk_rest.call(null,seq__20667_20689__$1);
var G__20692 = c__5735__auto___20690;
var G__20693 = cljs.core.count.call(null,c__5735__auto___20690);
var G__20694 = (0);
seq__20667_20679 = G__20691;
chunk__20668_20680 = G__20692;
count__20669_20681 = G__20693;
i__20670_20682 = G__20694;
continue;
} else {
var f_20695 = cljs.core.first.call(null,seq__20667_20689__$1);
cljs.core.println.call(null,"  ",f_20695);

var G__20696 = cljs.core.next.call(null,seq__20667_20689__$1);
var G__20697 = null;
var G__20698 = (0);
var G__20699 = (0);
seq__20667_20679 = G__20696;
chunk__20668_20680 = G__20697;
count__20669_20681 = G__20698;
i__20670_20682 = G__20699;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20700 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4950__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20700);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20700)))?cljs.core.second.call(null,arglists_20700):arglists_20700));
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
var seq__20671 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20672 = null;
var count__20673 = (0);
var i__20674 = (0);
while(true){
if((i__20674 < count__20673)){
var vec__20675 = cljs.core._nth.call(null,chunk__20672,i__20674);
var name = cljs.core.nth.call(null,vec__20675,(0),null);
var map__20676 = cljs.core.nth.call(null,vec__20675,(1),null);
var map__20676__$1 = ((cljs.core.seq_QMARK_.call(null,map__20676))?cljs.core.apply.call(null,cljs.core.hash_map,map__20676):map__20676);
var doc = cljs.core.get.call(null,map__20676__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20676__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20701 = seq__20671;
var G__20702 = chunk__20672;
var G__20703 = count__20673;
var G__20704 = (i__20674 + (1));
seq__20671 = G__20701;
chunk__20672 = G__20702;
count__20673 = G__20703;
i__20674 = G__20704;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__20671);
if(temp__4422__auto__){
var seq__20671__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20671__$1)){
var c__5735__auto__ = cljs.core.chunk_first.call(null,seq__20671__$1);
var G__20705 = cljs.core.chunk_rest.call(null,seq__20671__$1);
var G__20706 = c__5735__auto__;
var G__20707 = cljs.core.count.call(null,c__5735__auto__);
var G__20708 = (0);
seq__20671 = G__20705;
chunk__20672 = G__20706;
count__20673 = G__20707;
i__20674 = G__20708;
continue;
} else {
var vec__20677 = cljs.core.first.call(null,seq__20671__$1);
var name = cljs.core.nth.call(null,vec__20677,(0),null);
var map__20678 = cljs.core.nth.call(null,vec__20677,(1),null);
var map__20678__$1 = ((cljs.core.seq_QMARK_.call(null,map__20678))?cljs.core.apply.call(null,cljs.core.hash_map,map__20678):map__20678);
var doc = cljs.core.get.call(null,map__20678__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20678__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20709 = cljs.core.next.call(null,seq__20671__$1);
var G__20710 = null;
var G__20711 = (0);
var G__20712 = (0);
seq__20671 = G__20709;
chunk__20672 = G__20710;
count__20673 = G__20711;
i__20674 = G__20712;
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