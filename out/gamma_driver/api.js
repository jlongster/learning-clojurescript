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
if((function (){var G__19925 = this$;
if(G__19925){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19925.gamma_driver$protocols$IContext$;
}
})())){
return true;
} else {
if((!G__19925.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__19925);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__19925);
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
if((function (){var G__19927 = this$;
if(G__19927){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19927.gamma_driver$protocols$IContext$;
}
})())){
return true;
} else {
if((!G__19927.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__19927);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IContext,G__19927);
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
if((function (){var G__19929 = this$;
if(G__19929){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19929.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19929.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19929);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19929);
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
if((function (){var G__19931 = this$;
if(G__19931){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19931.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19931.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19931);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19931);
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
if((function (){var G__19933 = this$;
if(G__19933){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19933.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19933.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19933);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19933);
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
if((function (){var G__19935 = this$;
if(G__19935){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19935.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19935.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19935);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19935);
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
if((function (){var G__19937 = this$;
if(G__19937){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19937.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19937.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19937);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19937);
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
if((function (){var G__19939 = this$;
if(G__19939){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19939.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19939.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19939);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19939);
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
if((function (){var G__19941 = this$;
if(G__19941){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19941.gamma_driver$protocols$IResource$;
}
})())){
return true;
} else {
if((!G__19941.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19941);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IResource,G__19941);
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
if((function (){var G__19943 = this$;
if(G__19943){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19943.gamma_driver$protocols$IBindVariable$;
}
})())){
return true;
} else {
if((!G__19943.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19943);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19943);
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
if((function (){var G__19945 = this$;
if(G__19945){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19945.gamma_driver$protocols$IBindVariable$;
}
})())){
return true;
} else {
if((!G__19945.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19945);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19945);
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
if((function (){var G__19947 = this$;
if(G__19947){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19947.gamma_driver$protocols$IBindVariable$;
}
})())){
return true;
} else {
if((!G__19947.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19947);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBindVariable,G__19947);
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
if((function (){var G__19949 = this$;
if(G__19949){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19949.gamma_driver$protocols$IBind$;
}
})())){
return true;
} else {
if((!G__19949.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBind,G__19949);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IBind,G__19949);
}
})()){
return gamma_driver.protocols.bind.call(null,this$,gamma_driver.api.program,spec);
} else {
return gamma_driver.impl.bind.bind.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"program","program",781564284),gamma_driver.api.program,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),gamma_driver.api.array_buffer,new cljs.core.Keyword(null,"element-array-buffer","element-array-buffer",-2099854251),gamma_driver.api.element_array_buffer,new cljs.core.Keyword(null,"texture","texture",-266291651),gamma_driver.api.texture,new cljs.core.Keyword(null,"bind-attribute","bind-attribute",-708293124),gamma_driver.api.bind_attribute,new cljs.core.Keyword(null,"bind-texture-uniform","bind-texture-uniform",-288650696),gamma_driver.api.bind_texture_uniform,new cljs.core.Keyword(null,"bind-uniform","bind-uniform",-1297789726),gamma_driver.api.bind_uniform], null),this$,prog,spec);
}
});
gamma_driver.api.draw_arrays = (function gamma_driver$api$draw_arrays(){
var G__19951 = arguments.length;
switch (G__19951) {
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
if((function (){var G__19952 = this$;
if(G__19952){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19952.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__19952.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19952);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19952);
}
})()){
return gamma_driver.protocols.draw_arrays.call(null,this$,program,spec);
} else {
return gamma_driver.impl.draw.draw_arrays.call(null,this$,program,spec);
}
});

gamma_driver.api.draw_arrays.cljs$core$IFn$_invoke$arity$4 = (function (this$,program,spec,target){
if((function (){var G__19953 = this$;
if(G__19953){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19953.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__19953.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19953);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19953);
}
})()){
return gamma_driver.protocols.draw_arrays.call(null,this$,program,spec,target);
} else {
return gamma_driver.impl.draw.draw_arrays.call(null,this$,program,spec,target);
}
});

gamma_driver.api.draw_arrays.cljs$lang$maxFixedArity = 4;
gamma_driver.api.draw_elements = (function gamma_driver$api$draw_elements(){
var G__19956 = arguments.length;
switch (G__19956) {
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
if((function (){var G__19957 = this$;
if(G__19957){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19957.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__19957.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19957);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19957);
}
})()){
return gamma_driver.protocols.draw_elements.call(null,this$,program,spec);
} else {
return gamma_driver.impl.draw.draw_elements.call(null,this$,program,spec);
}
});

gamma_driver.api.draw_elements.cljs$core$IFn$_invoke$arity$4 = (function (this$,program,spec,target){
if((function (){var G__19958 = this$;
if(G__19958){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__19958.gamma_driver$protocols$IDraw$;
}
})())){
return true;
} else {
if((!G__19958.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19958);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,gamma_driver.protocols.IDraw,G__19958);
}
})()){
return gamma_driver.protocols.draw_elements.call(null,this$,program,spec);
} else {
return gamma_driver.impl.draw.draw_elements.call(null,this$,program,spec);
}
});

gamma_driver.api.draw_elements.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=api.js.map