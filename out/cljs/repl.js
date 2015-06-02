// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
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
var seq__20811_20823 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20812_20824 = null;
var count__20813_20825 = (0);
var i__20814_20826 = (0);
while(true){
if((i__20814_20826 < count__20813_20825)){
var f_20827 = cljs.core._nth.call(null,chunk__20812_20824,i__20814_20826);
cljs.core.println.call(null,"  ",f_20827);

var G__20828 = seq__20811_20823;
var G__20829 = chunk__20812_20824;
var G__20830 = count__20813_20825;
var G__20831 = (i__20814_20826 + (1));
seq__20811_20823 = G__20828;
chunk__20812_20824 = G__20829;
count__20813_20825 = G__20830;
i__20814_20826 = G__20831;
continue;
} else {
var temp__4423__auto___20832 = cljs.core.seq.call(null,seq__20811_20823);
if(temp__4423__auto___20832){
var seq__20811_20833__$1 = temp__4423__auto___20832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20811_20833__$1)){
var c__5738__auto___20834 = cljs.core.chunk_first.call(null,seq__20811_20833__$1);
var G__20835 = cljs.core.chunk_rest.call(null,seq__20811_20833__$1);
var G__20836 = c__5738__auto___20834;
var G__20837 = cljs.core.count.call(null,c__5738__auto___20834);
var G__20838 = (0);
seq__20811_20823 = G__20835;
chunk__20812_20824 = G__20836;
count__20813_20825 = G__20837;
i__20814_20826 = G__20838;
continue;
} else {
var f_20839 = cljs.core.first.call(null,seq__20811_20833__$1);
cljs.core.println.call(null,"  ",f_20839);

var G__20840 = cljs.core.next.call(null,seq__20811_20833__$1);
var G__20841 = null;
var G__20842 = (0);
var G__20843 = (0);
seq__20811_20823 = G__20840;
chunk__20812_20824 = G__20841;
count__20813_20825 = G__20842;
i__20814_20826 = G__20843;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20844 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4953__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20844);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20844)))?cljs.core.second.call(null,arglists_20844):arglists_20844));
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
var seq__20815 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20816 = null;
var count__20817 = (0);
var i__20818 = (0);
while(true){
if((i__20818 < count__20817)){
var vec__20819 = cljs.core._nth.call(null,chunk__20816,i__20818);
var name = cljs.core.nth.call(null,vec__20819,(0),null);
var map__20820 = cljs.core.nth.call(null,vec__20819,(1),null);
var map__20820__$1 = ((cljs.core.seq_QMARK_.call(null,map__20820))?cljs.core.apply.call(null,cljs.core.hash_map,map__20820):map__20820);
var doc = cljs.core.get.call(null,map__20820__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20820__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20845 = seq__20815;
var G__20846 = chunk__20816;
var G__20847 = count__20817;
var G__20848 = (i__20818 + (1));
seq__20815 = G__20845;
chunk__20816 = G__20846;
count__20817 = G__20847;
i__20818 = G__20848;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__20815);
if(temp__4423__auto__){
var seq__20815__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20815__$1)){
var c__5738__auto__ = cljs.core.chunk_first.call(null,seq__20815__$1);
var G__20849 = cljs.core.chunk_rest.call(null,seq__20815__$1);
var G__20850 = c__5738__auto__;
var G__20851 = cljs.core.count.call(null,c__5738__auto__);
var G__20852 = (0);
seq__20815 = G__20849;
chunk__20816 = G__20850;
count__20817 = G__20851;
i__20818 = G__20852;
continue;
} else {
var vec__20821 = cljs.core.first.call(null,seq__20815__$1);
var name = cljs.core.nth.call(null,vec__20821,(0),null);
var map__20822 = cljs.core.nth.call(null,vec__20821,(1),null);
var map__20822__$1 = ((cljs.core.seq_QMARK_.call(null,map__20822))?cljs.core.apply.call(null,cljs.core.hash_map,map__20822):map__20822);
var doc = cljs.core.get.call(null,map__20822__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20822__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20853 = cljs.core.next.call(null,seq__20815__$1);
var G__20854 = null;
var G__20855 = (0);
var G__20856 = (0);
seq__20815 = G__20853;
chunk__20816 = G__20854;
count__20817 = G__20855;
i__20818 = G__20856;
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