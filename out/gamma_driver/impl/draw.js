// Compiled by ClojureScript 0.0-3291 {}
goog.provide('gamma_driver.impl.draw');
goog.require('cljs.core');
goog.require('goog.webgl');
gamma_driver.impl.draw.clear = (function gamma_driver$impl$draw$clear(gl,spec){
return null;
});
gamma_driver.impl.draw.mask = (function gamma_driver$impl$draw$mask(gl,spec){
return null;
});
gamma_driver.impl.draw.draw_modes = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"lines","lines",-700165781),goog.webgl.LINES,new cljs.core.Keyword(null,"line-strip","line-strip",55648008),goog.webgl.LINE_STRIP,new cljs.core.Keyword(null,"line-loop","line-loop",1904870934),goog.webgl.LINE_LOOP,new cljs.core.Keyword(null,"points","points",-1486596883),goog.webgl.POINTS,new cljs.core.Keyword(null,"triangle-strip","triangle-strip",221845500),goog.webgl.TRIANGLE_STRIP,new cljs.core.Keyword(null,"triangle-fan","triangle-fan",1743150739),goog.webgl.TRIANGLE_FAN,new cljs.core.Keyword(null,"triangles","triangles",-1525417058),goog.webgl.TRIANGLES], null);
gamma_driver.impl.draw.draw_arrays = (function gamma_driver$impl$draw$draw_arrays(){
var G__20048 = arguments.length;
switch (G__20048) {
case 3:
return gamma_driver.impl.draw.draw_arrays.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gamma_driver.impl.draw.draw_arrays.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gamma_driver.impl.draw.draw_arrays.cljs$core$IFn$_invoke$arity$3 = (function (gl,program,opts){
gl.useProgram(new cljs.core.Keyword(null,"program","program",781564284).cljs$core$IFn$_invoke$arity$1(program));

return gl.drawArrays(gamma_driver.impl.draw.draw_modes.call(null,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(opts));
});

gamma_driver.impl.draw.draw_arrays.cljs$core$IFn$_invoke$arity$4 = (function (gl,program,opts,target){
if(cljs.core.truth_(target)){
gl.bindFramebuffer(goog.webgl.FRAMEBUFFER,new cljs.core.Keyword(null,"frame-buffer","frame-buffer",339847354).cljs$core$IFn$_invoke$arity$1(target));

gamma_driver.impl.draw.draw_arrays.call(null,gl,program,opts);

gl.bindFramebuffer(goog.webgl.FRAMEBUFFER,null);

return target;
} else {
return gamma_driver.impl.draw.draw_arrays.call(null,gl,program,opts);
}
});

gamma_driver.impl.draw.draw_arrays.cljs$lang$maxFixedArity = 4;
gamma_driver.impl.draw.element_types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsigned-byte","unsigned-byte",541188667),goog.webgl.UNSIGNED_BYTE,new cljs.core.Keyword(null,"unsigned-short","unsigned-short",-1572039401),goog.webgl.UNSIGNED_SHORT], null);
gamma_driver.impl.draw.draw_elements = (function gamma_driver$impl$draw$draw_elements(){
var G__20051 = arguments.length;
switch (G__20051) {
case 3:
return gamma_driver.impl.draw.draw_elements.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gamma_driver.impl.draw.draw_elements.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gamma_driver.impl.draw.draw_elements.cljs$core$IFn$_invoke$arity$3 = (function (gl,program,opts){
var draw_mode = (function (){var dm = new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.integer_QMARK_.call(null,dm)){
return dm;
} else {
return gamma_driver.impl.draw.draw_modes.call(null,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794).cljs$core$IFn$_invoke$arity$1(opts));
}
})();
var cnt = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(opts);
var data_type = gamma_driver.impl.draw.element_types.call(null,new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(opts),goog.webgl.UNSIGNED_SHORT);
var offset = (cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsigned-byte","unsigned-byte",541188667),(1),new cljs.core.Keyword(null,"unsigned-short","unsigned-short",-1572039401),(2)], null),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(opts)) * new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(opts));
gl.useProgram(new cljs.core.Keyword(null,"program","program",781564284).cljs$core$IFn$_invoke$arity$1(program));

return gl.drawElements(draw_mode,cnt,data_type,offset);
});

gamma_driver.impl.draw.draw_elements.cljs$core$IFn$_invoke$arity$4 = (function (gl,program,opts,target){
if(cljs.core.truth_(target)){
gl.bindFramebuffer(goog.webgl.FRAMEBUFFER,new cljs.core.Keyword(null,"frame-buffer","frame-buffer",339847354).cljs$core$IFn$_invoke$arity$1(target));

gamma_driver.impl.draw.draw_elements.call(null,gl,program,opts);

return gl.bindFramebuffer(goog.webgl.FRAMEBUFFER,null);
} else {
return gamma_driver.impl.draw.draw_elements.call(null,gl,program,opts);
}
});

gamma_driver.impl.draw.draw_elements.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=draw.js.map