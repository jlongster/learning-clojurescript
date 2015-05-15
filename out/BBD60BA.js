goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48__i = 0, G__48__a = new Array(arguments.length -  0);
while (G__48__i < G__48__a.length) {G__48__a[G__48__i] = arguments[G__48__i + 0]; ++G__48__i;}
  args = new cljs.core.IndexedSeq(G__48__a,0);
} 
return G__47__delegate.call(this,args);};
G__47.cljs$lang$maxFixedArity = 0;
G__47.cljs$lang$applyTo = (function (arglist__49){
var args = cljs.core.seq(arglist__49);
return G__47__delegate(args);
});
G__47.cljs$core$IFn$_invoke$arity$variadic = G__47__delegate;
return G__47;
})()
;
});
