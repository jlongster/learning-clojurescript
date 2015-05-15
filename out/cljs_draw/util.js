// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_draw.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs_draw.util.listen = (function cljs_draw$util$listen(el,type){
var out = cljs.core.async.chan.call(null);
el.addEventListener(type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});

//# sourceMappingURL=util.js.map