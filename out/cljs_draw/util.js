// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_draw.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs_draw.util.listen = (function() {
var cljs_draw$util$listen = null;
var cljs_draw$util$listen__2 = (function (el,type){
return cljs_draw$util$listen.call(null,el,type,null);
});
var cljs_draw$util$listen__3 = (function (el,type,hook){
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
cljs_draw$util$listen = function(el,type,hook){
switch(arguments.length){
case 2:
return cljs_draw$util$listen__2.call(this,el,type);
case 3:
return cljs_draw$util$listen__3.call(this,el,type,hook);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$util$listen.cljs$core$IFn$_invoke$arity$2 = cljs_draw$util$listen__2;
cljs_draw$util$listen.cljs$core$IFn$_invoke$arity$3 = cljs_draw$util$listen__3;
return cljs_draw$util$listen;
})()
;
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