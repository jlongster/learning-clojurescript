goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46__i = 0, G__46__a = new Array(arguments.length -  0);
while (G__46__i < G__46__a.length) {G__46__a[G__46__i] = arguments[G__46__i + 0]; ++G__46__i;}
  args = new cljs.core.IndexedSeq(G__46__a,0);
} 
return G__45__delegate.call(this,args);};
G__45.cljs$lang$maxFixedArity = 0;
G__45.cljs$lang$applyTo = (function (arglist__47){
var args = cljs.core.seq(arglist__47);
return G__45__delegate(args);
});
G__45.cljs$core$IFn$_invoke$arity$variadic = G__45__delegate;
return G__45;
})()
;
});
