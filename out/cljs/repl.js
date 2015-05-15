// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
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
var seq__74_86 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75_87 = null;
var count__76_88 = (0);
var i__77_89 = (0);
while(true){
if((i__77_89 < count__76_88)){
var f_90 = cljs.core._nth.call(null,chunk__75_87,i__77_89);
cljs.core.println.call(null,"  ",f_90);

var G__91 = seq__74_86;
var G__92 = chunk__75_87;
var G__93 = count__76_88;
var G__94 = (i__77_89 + (1));
seq__74_86 = G__91;
chunk__75_87 = G__92;
count__76_88 = G__93;
i__77_89 = G__94;
continue;
} else {
var temp__4126__auto___95 = cljs.core.seq.call(null,seq__74_86);
if(temp__4126__auto___95){
var seq__74_96__$1 = temp__4126__auto___95;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74_96__$1)){
var c__3511__auto___97 = cljs.core.chunk_first.call(null,seq__74_96__$1);
var G__98 = cljs.core.chunk_rest.call(null,seq__74_96__$1);
var G__99 = c__3511__auto___97;
var G__100 = cljs.core.count.call(null,c__3511__auto___97);
var G__101 = (0);
seq__74_86 = G__98;
chunk__75_87 = G__99;
count__76_88 = G__100;
i__77_89 = G__101;
continue;
} else {
var f_102 = cljs.core.first.call(null,seq__74_96__$1);
cljs.core.println.call(null,"  ",f_102);

var G__103 = cljs.core.next.call(null,seq__74_96__$1);
var G__104 = null;
var G__105 = (0);
var G__106 = (0);
seq__74_86 = G__103;
chunk__75_87 = G__104;
count__76_88 = G__105;
i__77_89 = G__106;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__3142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3142__auto__)){
return or__3142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
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
var seq__78 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__79 = null;
var count__80 = (0);
var i__81 = (0);
while(true){
if((i__81 < count__80)){
var vec__82 = cljs.core._nth.call(null,chunk__79,i__81);
var name = cljs.core.nth.call(null,vec__82,(0),null);
var map__83 = cljs.core.nth.call(null,vec__82,(1),null);
var map__83__$1 = ((cljs.core.seq_QMARK_.call(null,map__83))?cljs.core.apply.call(null,cljs.core.hash_map,map__83):map__83);
var arglists = cljs.core.get.call(null,map__83__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__83__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__107 = seq__78;
var G__108 = chunk__79;
var G__109 = count__80;
var G__110 = (i__81 + (1));
seq__78 = G__107;
chunk__79 = G__108;
count__80 = G__109;
i__81 = G__110;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__78);
if(temp__4126__auto__){
var seq__78__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78__$1)){
var c__3511__auto__ = cljs.core.chunk_first.call(null,seq__78__$1);
var G__111 = cljs.core.chunk_rest.call(null,seq__78__$1);
var G__112 = c__3511__auto__;
var G__113 = cljs.core.count.call(null,c__3511__auto__);
var G__114 = (0);
seq__78 = G__111;
chunk__79 = G__112;
count__80 = G__113;
i__81 = G__114;
continue;
} else {
var vec__84 = cljs.core.first.call(null,seq__78__$1);
var name = cljs.core.nth.call(null,vec__84,(0),null);
var map__85 = cljs.core.nth.call(null,vec__84,(1),null);
var map__85__$1 = ((cljs.core.seq_QMARK_.call(null,map__85))?cljs.core.apply.call(null,cljs.core.hash_map,map__85):map__85);
var arglists = cljs.core.get.call(null,map__85__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__85__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__115 = cljs.core.next.call(null,seq__78__$1);
var G__116 = null;
var G__117 = (0);
var G__118 = (0);
seq__78 = G__115;
chunk__79 = G__116;
count__80 = G__117;
i__81 = G__118;
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