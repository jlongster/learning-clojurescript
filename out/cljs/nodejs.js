// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50__i = 0, G__50__a = new Array(arguments.length -  0);
while (G__50__i < G__50__a.length) {G__50__a[G__50__i] = arguments[G__50__i + 0]; ++G__50__i;}
  args = new cljs.core.IndexedSeq(G__50__a,0);
} 
return G__49__delegate.call(this,args);};
G__49.cljs$lang$maxFixedArity = 0;
G__49.cljs$lang$applyTo = (function (arglist__51){
var args = cljs.core.seq(arglist__51);
return G__49__delegate(args);
});
G__49.cljs$core$IFn$_invoke$arity$variadic = G__49__delegate;
return G__49;
})()
;
});

//# sourceMappingURL=nodejs.js.map