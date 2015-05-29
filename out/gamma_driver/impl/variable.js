// Compiled by ClojureScript 0.0-3291 {}
goog.provide('gamma_driver.impl.variable');
goog.require('cljs.core');
goog.require('goog.webgl');
gamma_driver.impl.variable.attribute_location = (function gamma_driver$impl$variable$attribute_location(gl,program,attribute){
return gl.getAttribLocation(new cljs.core.Keyword(null,"program","program",781564284).cljs$core$IFn$_invoke$arity$1(program),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(attribute));
});
gamma_driver.impl.variable.default_layout = (function gamma_driver$impl$variable$default_layout(attribute){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"normalized?","normalized?",1246099953),false,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"float","float",-1732389368),(1),new cljs.core.Keyword(null,"vec2","vec2",-762258640),(2),new cljs.core.Keyword(null,"vec3","vec3",1116680488),(3),new cljs.core.Keyword(null,"vec4","vec4",631182126),(4)], null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attribute)),new cljs.core.Keyword(null,"type","type",1174270348),goog.webgl.FLOAT,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"stride","stride",-1172818435),(0)], null);
});
gamma_driver.impl.variable.bind_attribute = (function gamma_driver$impl$variable$bind_attribute(gl,program,attribute,input){
var location = gamma_driver.impl.variable.attribute_location.call(null,gl,program,attribute);
var map__19993 = (function (){var or__4950__auto__ = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(input);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return gamma_driver.impl.variable.default_layout;
}
})().call(null,attribute);
var map__19993__$1 = ((cljs.core.seq_QMARK_.call(null,map__19993))?cljs.core.apply.call(null,cljs.core.hash_map,map__19993):map__19993);
var size = cljs.core.get.call(null,map__19993__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var type = cljs.core.get.call(null,map__19993__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized_QMARK_ = cljs.core.get.call(null,map__19993__$1,new cljs.core.Keyword(null,"normalized?","normalized?",1246099953));
var stride = cljs.core.get.call(null,map__19993__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.call(null,map__19993__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
gl.bindBuffer(goog.webgl.ARRAY_BUFFER,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380).cljs$core$IFn$_invoke$arity$1(input));

gl.vertexAttribPointer(location,size,type,normalized_QMARK_,stride,offset);

gl.enableVertexAttribArray(location);

return input;
});
gamma_driver.impl.variable.element_index_input = (function gamma_driver$impl$variable$element_index_input(gl,program,indices,input){
gl.bindBuffer(goog.webgl.ELEMENT_ARRAY_BUFFER,new cljs.core.Keyword(null,"element-array-buffer","element-array-buffer",-2099854251).cljs$core$IFn$_invoke$arity$1(input));

return input;
});
gamma_driver.impl.variable.uniform_location = (function gamma_driver$impl$variable$uniform_location(gl,program,uniform){
return gl.getUniformLocation(new cljs.core.Keyword(null,"program","program",781564284).cljs$core$IFn$_invoke$arity$1(program),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(uniform));
});
gamma_driver.impl.variable.bind_uniform = (function gamma_driver$impl$variable$bind_uniform(gl,program,uniform,input){
var location = gamma_driver.impl.variable.uniform_location.call(null,gl,program,uniform);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(uniform);
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(input);
var G__19995_19996 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19995_19996) {
case "bvec3":
gl.uniform3iv(location,data);

break;
case "int":
gl.uniform1iv(location,data);

break;
case "mat3":
gl.uniformMatrix3fv(location,false,data);

break;
case "vec3":
gl.uniform3fv(location,data);

break;
case "float":
gl.uniform1fv(location,data);

break;
case "ivec4":
gl.uniform4iv(location,data);

break;
case "mat2":
gl.uniformMatrix2fv(location,false,data);

break;
case "ivec2":
gl.uniform2iv(location,data);

break;
case "vec4":
gl.uniform4fv(location,data);

break;
case "vec2":
gl.uniform2fv(location,data);

break;
case "bvec2":
gl.uniform2iv(location,data);

break;
case "mat4":
gl.uniformMatrix4fv(location,false,data);

break;
case "bvec4":
gl.uniform4iv(location,data);

break;
case "bool":
gl.uniform1iv(location,data);

break;
case "ivec3":
gl.uniform3iv(location,data);

break;
default:

}

return input;
});
gamma_driver.impl.variable.bind_texture_uniform = (function gamma_driver$impl$variable$bind_texture_uniform(gl,program,uniform,texture){
var location_19998 = gamma_driver.impl.variable.uniform_location.call(null,gl,program,uniform);
var id_19999 = new cljs.core.Keyword(null,"texture-id","texture-id",1751127592).cljs$core$IFn$_invoke$arity$1(texture);
gl.activeTexture((goog.webgl.TEXTURE0 + id_19999));

gl.bindTexture(goog.webgl.TEXTURE_2D,new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(texture));

gl.uniform1i(location_19998,id_19999);

return texture;
});

//# sourceMappingURL=variable.js.map