// Compiled by ClojureScript 0.0-3308 {}
goog.provide('gamma_driver.api');
goog.require('cljs.core');
goog.require('gamma_driver.impl.draw');
goog.require('gamma_driver.impl.context');
goog.require('gamma_driver.impl.bind');
goog.require('gamma_driver.impl.variable');
goog.require('gamma_driver.protocols');
goog.require('gamma_driver.impl.resource');
gamma_driver.api.configure = (function gamma_driver$api$configure(this$,spec){
if((function (){var G__20069 = this$;
if(G__20069){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20069.gamma_driver$protocols$IContext$;
}
})())){
return true;
} else {
if((!G__20069.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__20069);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__20069);
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
if((function (){var G__20071 = this$;
if(G__20071){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20071.gamma_driver$protocols$IContext$;
}
})())){
return true;
} else {
if((!G__20071.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__20071);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__20071);
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
if((function (){var G__20073 = this$;
if(G__20073){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20073.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__20073.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20073);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20073);
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
if((function (){var G__20075 = this$;
if(G__20075){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20075.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__20075.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20075);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20075);
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
if((function (){var G__20077 = this$;
if(G__20077){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20077.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__20077.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20077);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20077);
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
if((function (){var G__20079 = this$;
if(G__20079){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20079.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__20079.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20079);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20079);
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
if((function (){var G__20081 = this$;
if(G__20081){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20081.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__20081.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20081);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20081);
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
if((function (){var G__20083 = this$;
if(G__20083){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20083.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__20083.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20083);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20083);
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
if((function (){var G__20085 = this$;
if(G__20085){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20085.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__20085.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20085);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__20085);
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
if((function (){var G__20087 = this$;
if(G__20087){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20087.gamma_driver$protocols$IBindVariable$;
}
})())){
return true;
} else {
if((!G__20087.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__20087);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__20087);
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
if((function (){var G__20089 = this$;
if(G__20089){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20089.gamma_driver$protocols$IBindVariable$;
}
})())){
return true;
} else {
if((!G__20089.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__20089);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__20089);
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
if((function (){var G__20091 = this$;
if(G__20091){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20091.gamma_driver$protocols$IBindVariable$;
}
})())){
return true;
} else {
if((!G__20091.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__20091);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__20091);
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
if((function (){var G__20093 = this$;
if(G__20093){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20093.gamma_driver$protocols$IBind$;
}
})())){
return true;
} else {
if((!G__20093.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBind,G__20093);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBind,G__20093);
}
})()){
return gamma_driver.protocols.bind.call(null,this$,gamma_driver.api.program,spec);
} else {
return gamma_driver.impl.bind.bind.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"program","program",781564284),gamma_driver.api.program,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),gamma_driver.api.array_buffer,new cljs.core.Keyword(null,"element-array-buffer","element-array-buffer",-2099854251),gamma_driver.api.element_array_buffer,new cljs.core.Keyword(null,"texture","texture",-266291651),gamma_driver.api.texture,new cljs.core.Keyword(null,"bind-attribute","bind-attribute",-708293124),gamma_driver.api.bind_attribute,new cljs.core.Keyword(null,"bind-texture-uniform","bind-texture-uniform",-288650696),gamma_driver.api.bind_texture_uniform,new cljs.core.Keyword(null,"bind-uniform","bind-uniform",-1297789726),gamma_driver.api.bind_uniform], null),this$,prog,spec);
}
});
gamma_driver.api.draw_arrays = (function gamma_driver$api$draw_arrays(){
var G__20095 = arguments.length;
switch (G__20095) {
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
if((function (){var G__20096 = this$;
if(G__20096){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20096.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__20096.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__20096);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__20096);
}
})()){
return gamma_driver.protocols.draw_arrays.call(null,this$,program,spec);
} else {
return gamma_driver.impl.draw.draw_arrays.call(null,this$,program,spec);
}
});

gamma_driver.api.draw_arrays.cljs$core$IFn$_invoke$arity$4 = (function (this$,program,spec,target){
if((function (){var G__20097 = this$;
if(G__20097){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20097.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__20097.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__20097);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__20097);
}
})()){
return gamma_driver.protocols.draw_arrays.call(null,this$,program,spec,target);
} else {
return gamma_driver.impl.draw.draw_arrays.call(null,this$,program,spec,target);
}
});

gamma_driver.api.draw_arrays.cljs$lang$maxFixedArity = 4;
gamma_driver.api.draw_elements = (function gamma_driver$api$draw_elements(){
var G__20100 = arguments.length;
switch (G__20100) {
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
if((function (){var G__20101 = this$;
if(G__20101){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20101.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__20101.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__20101);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__20101);
}
})()){
return gamma_driver.protocols.draw_elements.call(null,this$,program,spec);
} else {
return gamma_driver.impl.draw.draw_elements.call(null,this$,program,spec);
}
});

gamma_driver.api.draw_elements.cljs$core$IFn$_invoke$arity$4 = (function (this$,program,spec,target){
if((function (){var G__20102 = this$;
if(G__20102){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__20102.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__20102.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__20102);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__20102);
}
})()){
return gamma_driver.protocols.draw_elements.call(null,this$,program,spec);
} else {
return gamma_driver.impl.draw.draw_elements.call(null,this$,program,spec);
}
});

gamma_driver.api.draw_elements.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=api.js.map