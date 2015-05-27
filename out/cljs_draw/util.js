// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs_draw.util');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('cljs.core.async');
cljs_draw.util.listen = (function cljs_draw$util$listen(){
var G__9452 = arguments.length;
switch (G__9452) {
case 2:
return cljs_draw.util.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_draw.util.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_draw.util.listen.cljs$core$IFn$_invoke$arity$2 = (function (el,type){
return cljs_draw.util.listen.call(null,el,type,null);
});

cljs_draw.util.listen.cljs$core$IFn$_invoke$arity$3 = (function (el,type,hook){
var out = cljs.core.async.chan.call(null);
el.addEventListener(type,((function (out){
return (function (e){
if(cljs.core.truth_(hook)){
hook.call(null,e);
} else {
}

return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});

cljs_draw.util.listen.cljs$lang$maxFixedArity = 3;
cljs_draw.util.get_from_storage = (function cljs_draw$util$get_from_storage(name){
var out = cljs.core.async.chan.call(null);
localforage.getItem(name,((function (out){
return (function (err,value){
return cljs.core.async.put_BANG_.call(null,out,value);
});})(out))
);

return out;
});

//# sourceMappingURL=util.js.map