goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__528__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__529__i = 0, G__529__a = new Array(arguments.length -  0);
while (G__529__i < G__529__a.length) {G__529__a[G__529__i] = arguments[G__529__i + 0]; ++G__529__i;}
  args = new cljs.core.IndexedSeq(G__529__a,0);
} 
return G__528__delegate.call(this,args);};
G__528.cljs$lang$maxFixedArity = 0;
G__528.cljs$lang$applyTo = (function (arglist__530){
var args = cljs.core.seq(arglist__530);
return G__528__delegate(args);
});
G__528.cljs$core$IFn$_invoke$arity$variadic = G__528__delegate;
return G__528;
})()
;
});
