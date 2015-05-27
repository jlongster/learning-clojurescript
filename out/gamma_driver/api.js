// Compiled by ClojureScript 0.0-3291 {}
goog.provide('gamma_driver.api');
goog.require('cljs.core');
goog.require('gamma_driver.impl.draw');
goog.require('gamma_driver.impl.context');
goog.require('gamma_driver.impl.bind');
goog.require('gamma_driver.impl.variable');
goog.require('gamma_driver.protocols');
goog.require('gamma_driver.impl.resource');
gamma_driver.api.configure = (function gamma_driver$api$configure(this$,spec){
if((function (){var G__19364 = this$;
if(G__19364){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19364.gamma_driver$protocols$IContext$;
}
})())){
return true;
} else {
if((!G__19364.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__19364);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__19364);
}
})()){
return gamma_driver.protocols.configure.call(null,this$,spec);
} else {
return gamma_driver.impl.context.configure.call(null,this$,spec);
}
});
/**
 * Returns WebGL context object.
 */
gamma_driver.api.gl = (function gamma_driver$api$gl(this$){
if((function (){var G__19366 = this$;
if(G__19366){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19366.gamma_driver$protocols$IContext$;
}
})())){
return true;
} else {
if((!G__19366.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__19366);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__19366);
}
})()){
return gamma_driver.protocols.gl.call(null,this$);
} else {
return gamma_driver$api$gl;
}
});
/**
 * Sets the gl context's current program to spec, compiling spec if it does not contain a webgl program object at :program. Returns spec with webgl program object at :program.
 */
gamma_driver.api.program = (function gamma_driver$api$program(this$,spec){
if((function (){var G__19368 = this$;
if(G__19368){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19368.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19368.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19368);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19368);
}
})()){
return gamma_driver.protocols.program.call(null,this$,spec);
} else {
return gamma_driver.impl.resource.program.call(null,this$,spec);
}
});
/**
 * Populates and returns an array-buffer model suitable as input to attribute-input. Resuses webgl array buffer object supplied at :array-buffer, otherwise creates new object.
 */
gamma_driver.api.array_buffer = (function gamma_driver$api$array_buffer(this$,spec){
if((function (){var G__19370 = this$;
if(G__19370){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19370.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19370.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19370);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19370);
}
})()){
return gamma_driver.protocols.array_buffer.call(null,this$,spec);
} else {
return gamma_driver.impl.resource.array_buffer.call(null,this$,spec);
}
});
/**
 * Populates and returns an element-array-buffer model. Resuses webgl element array buffer object supplied at :element-array-buffer, otherwise creates new object.
 */
gamma_driver.api.element_array_buffer = (function gamma_driver$api$element_array_buffer(this$,spec){
if((function (){var G__19372 = this$;
if(G__19372){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19372.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19372.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19372);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19372);
}
})()){
return gamma_driver.protocols.element_array_buffer.call(null,this$,spec);
} else {
return gamma_driver.impl.resource.element_array_buffer.call(null,this$,spec);
}
});
/**
 * Populates and returns a texture model suitable as input to texture-uniform-input.
 */
gamma_driver.api.texture = (function gamma_driver$api$texture(this$,spec){
if((function (){var G__19374 = this$;
if(G__19374){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19374.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19374.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19374);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19374);
}
})()){
return gamma_driver.protocols.texture.call(null,this$,spec);
} else {
return gamma_driver.impl.resource.texture.call(null,this$,spec);
}
});
/**
 * Populates and returns a frame-buffer model
 */
gamma_driver.api.frame_buffer = (function gamma_driver$api$frame_buffer(this$,spec){
if((function (){var G__19376 = this$;
if(G__19376){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19376.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19376.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19376);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19376);
}
})()){
return gamma_driver.protocols.frame_buffer.call(null,this$,spec);
} else {
return gamma_driver.impl.resource.frame_buffer.call(null,this$,spec);
}
});
/**
 * Populates and returns a render-buffer model.
 */
gamma_driver.api.render_buffer = (function gamma_driver$api$render_buffer(this$,spec){
if((function (){var G__19378 = this$;
if(G__19378){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19378.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19378.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19378);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19378);
}
})()){
return gamma_driver.protocols.render_buffer.call(null,this$,spec);
} else {
return gamma_driver.impl.resource.render_buffer.call(null,this$,spec);
}
});
/**
 * Releases webgl objects associated with model.
 */
gamma_driver.api.release = (function gamma_driver$api$release(this$,resource){
if((function (){var G__19380 = this$;
if(G__19380){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19380.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19380.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19380);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19380);
}
})()){
return gamma_driver.protocols.release.call(null,this$,resource);
} else {
return gamma_driver.impl.resource.release.call(null,this$,resource);
}
});
/**
 * Binds attribute variable to data in array-buffer-model.
 */
gamma_driver.api.bind_attribute = (function gamma_driver$api$bind_attribute(this$,program,attribute,array_buffer_model){
if((function (){var G__19382 = this$;
if(G__19382){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19382.gamma_driver$protocols$IBindVariable$;
}
})())){
return true;
} else {
if((!G__19382.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19382);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19382);
}
})()){
return gamma_driver.protocols.bind_attribute.call(null,this$,program,attribute,array_buffer_model);
} else {
return gamma_driver.impl.variable.bind_attribute.call(null,this$,program,attribute,array_buffer_model);
}
});
/**
 * Binds texture uniform variable (sampler2D) to data in texture-model.
 */
gamma_driver.api.bind_texture_uniform = (function gamma_driver$api$bind_texture_uniform(this$,program,uniform,texture_model){
if((function (){var G__19384 = this$;
if(G__19384){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19384.gamma_driver$protocols$IBindVariable$;
}
})())){
return true;
} else {
if((!G__19384.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19384);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19384);
}
})()){
return gamma_driver.protocols.bind_texture_uniform.call(null,this$,program,uniform,texture_model);
} else {
return gamma_driver.impl.variable.bind_texture_uniform.call(null,this$,program,uniform,texture_model);
}
});
/**
 * Binds uniform variable to data.
 */
gamma_driver.api.bind_uniform = (function gamma_driver$api$bind_uniform(this$,program,uniform,data){
if((function (){var G__19386 = this$;
if(G__19386){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19386.gamma_driver$protocols$IBindVariable$;
}
})())){
return true;
} else {
if((!G__19386.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19386);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19386);
}
})()){
return gamma_driver.protocols.bind_uniform.call(null,this$,program,uniform,data);
} else {
return gamma_driver.impl.variable.bind_uniform.call(null,this$,program,uniform,data);
}
});
/**
 * Binds the program's variables as specified in spec.
 */
gamma_driver.api.bind = (function gamma_driver$api$bind(this$,prog,spec){
if((function (){var G__19388 = this$;
if(G__19388){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19388.gamma_driver$protocols$IBind$;
}
})())){
return true;
} else {
if((!G__19388.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBind,G__19388);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBind,G__19388);
}
})()){
return gamma_driver.protocols.bind.call(null,this$,gamma_driver.api.program,spec);
} else {
return gamma_driver.impl.bind.bind.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"program","program",781564284),gamma_driver.api.program,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),gamma_driver.api.array_buffer,new cljs.core.Keyword(null,"element-array-buffer","element-array-buffer",-2099854251),gamma_driver.api.element_array_buffer,new cljs.core.Keyword(null,"texture","texture",-266291651),gamma_driver.api.texture,new cljs.core.Keyword(null,"bind-attribute","bind-attribute",-708293124),gamma_driver.api.bind_attribute,new cljs.core.Keyword(null,"bind-texture-uniform","bind-texture-uniform",-288650696),gamma_driver.api.bind_texture_uniform,new cljs.core.Keyword(null,"bind-uniform","bind-uniform",-1297789726),gamma_driver.api.bind_uniform], null),this$,prog,spec);
}
});
gamma_driver.api.draw_arrays = (function gamma_driver$api$draw_arrays(){
var G__19390 = arguments.length;
switch (G__19390) {
case 3:
return gamma_driver.api.draw_arrays.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gamma_driver.api.draw_arrays.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gamma_driver.api.draw_arrays.cljs$core$IFn$_invoke$arity$3 = (function (this$,program,spec){
if((function (){var G__19391 = this$;
if(G__19391){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19391.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__19391.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19391);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19391);
}
})()){
return gamma_driver.protocols.draw_arrays.call(null,this$,program,spec);
} else {
return gamma_driver.impl.draw.draw_arrays.call(null,this$,program,spec);
}
});

gamma_driver.api.draw_arrays.cljs$core$IFn$_invoke$arity$4 = (function (this$,program,spec,target){
if((function (){var G__19392 = this$;
if(G__19392){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19392.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__19392.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19392);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19392);
}
})()){
return gamma_driver.protocols.draw_arrays.call(null,this$,program,spec,target);
} else {
return gamma_driver.impl.draw.draw_arrays.call(null,this$,program,spec,target);
}
});

gamma_driver.api.draw_arrays.cljs$lang$maxFixedArity = 4;
gamma_driver.api.draw_elements = (function gamma_driver$api$draw_elements(){
var G__19395 = arguments.length;
switch (G__19395) {
case 3:
return gamma_driver.api.draw_elements.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gamma_driver.api.draw_elements.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gamma_driver.api.draw_elements.cljs$core$IFn$_invoke$arity$3 = (function (this$,program,spec){
if((function (){var G__19396 = this$;
if(G__19396){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19396.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__19396.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19396);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19396);
}
})()){
return gamma_driver.protocols.draw_elements.call(null,this$,program,spec);
} else {
return gamma_driver.impl.draw.draw_elements.call(null,this$,program,spec);
}
});

gamma_driver.api.draw_elements.cljs$core$IFn$_invoke$arity$4 = (function (this$,program,spec,target){
if((function (){var G__19397 = this$;
if(G__19397){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19397.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__19397.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19397);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19397);
}
})()){
return gamma_driver.protocols.draw_elements.call(null,this$,program,spec);
} else {
return gamma_driver.impl.draw.draw_elements.call(null,this$,program,spec);
}
});

gamma_driver.api.draw_elements.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=api.js.map