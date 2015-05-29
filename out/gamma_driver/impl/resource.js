// Compiled by ClojureScript 0.0-3291 {}
goog.provide('gamma_driver.impl.resource');
goog.require('cljs.core');
goog.require('goog.webgl');
gamma_driver.impl.resource.shader = (function gamma_driver$impl$resource$shader(gl,spec){
var s = gl.createShader(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),goog.webgl.VERTEX_SHADER,new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),goog.webgl.FRAGMENT_SHADER], null).call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(spec)));
if(cljs.core.truth_(s)){
gl.shaderSource(s,new cljs.core.Keyword(null,"glsl","glsl",547384260).cljs$core$IFn$_invoke$arity$1(spec));

gl.compileShader(s);

var compiled = gl.getShaderParameter(s,goog.webgl.COMPILE_STATUS);
if(cljs.core.truth_(compiled)){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(spec),s);
} else {
throw (new Error([cljs.core.str("failed to compile "),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(spec))),cljs.core.str(":"),cljs.core.str(gl.getShaderInfoLog(s))].join('')));
}
} else {
throw (new Error([cljs.core.str("Unable to create "),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(spec)))].join('')));
}
});
gamma_driver.impl.resource.program = (function gamma_driver$impl$resource$program(gl,spec){
if(cljs.core.truth_(new cljs.core.Keyword(null,"program","program",781564284).cljs$core$IFn$_invoke$arity$1(spec))){
gl.useProgram(new cljs.core.Keyword(null,"program","program",781564284).cljs$core$IFn$_invoke$arity$1(spec));

return spec;
} else {
var v = gamma_driver.impl.resource.shader.call(null,gl,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447).cljs$core$IFn$_invoke$arity$1(spec),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447)));
var f = gamma_driver.impl.resource.shader.call(null,gl,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701).cljs$core$IFn$_invoke$arity$1(spec),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701)));
var p = gl.createProgram();
gl.attachShader(p,new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447).cljs$core$IFn$_invoke$arity$1(v));

gl.attachShader(p,new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701).cljs$core$IFn$_invoke$arity$1(f));

gl.linkProgram(p);

if(cljs.core.truth_(gl.getProgramParameter(p,goog.webgl.LINK_STATUS))){
gl.useProgram(p);

return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),v,new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),f);
} else {
throw (new Error([cljs.core.str("failed to link program: "),cljs.core.str(gl.getProgramInfoLog(p))].join('')));
}
}
});
gamma_driver.impl.resource.array_buffer = (function gamma_driver$impl$resource$array_buffer(gl,spec){
var buffer = (function (){var or__4950__auto__ = new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return gl.createBuffer();
}
})();
gl.bindBuffer(goog.webgl.ARRAY_BUFFER,buffer);

gl.bufferData(goog.webgl.ARRAY_BUFFER,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(spec),(function (){var or__4950__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"static-draw","static-draw",1191962050),goog.webgl.STATIC_DRAW,new cljs.core.Keyword(null,"dynamic-draw","dynamic-draw",752436613),goog.webgl.DYNAMIC_DRAW], null).call(null,new cljs.core.Keyword(null,"usage","usage",-1583752910).cljs$core$IFn$_invoke$arity$1(spec));
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return goog.webgl.STATIC_DRAW;
}
})());

return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),buffer);
});
gamma_driver.impl.resource.element_array_buffer = (function gamma_driver$impl$resource$element_array_buffer(gl,spec){
var buffer = (function (){var or__4950__auto__ = new cljs.core.Keyword(null,"element-array-buffer","element-array-buffer",-2099854251).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return gl.createBuffer();
}
})();
gl.bindBuffer(goog.webgl.ELEMENT_ARRAY_BUFFER,buffer);

gl.bufferData(goog.webgl.ELEMENT_ARRAY_BUFFER,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(spec),(function (){var or__4950__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"static-draw","static-draw",1191962050),goog.webgl.STATIC_DRAW,new cljs.core.Keyword(null,"dynamic-draw","dynamic-draw",752436613),goog.webgl.DYNAMIC_DRAW], null).call(null,new cljs.core.Keyword(null,"usage","usage",-1583752910).cljs$core$IFn$_invoke$arity$1(spec));
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return goog.webgl.STATIC_DRAW;
}
})());

return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"element-array-buffer","element-array-buffer",-2099854251),buffer);
});
gamma_driver.impl.resource.texture_unpack = (function gamma_driver$impl$resource$texture_unpack(gl,spec){
var map__19963 = spec;
var map__19963__$1 = ((cljs.core.seq_QMARK_.call(null,map__19963))?cljs.core.apply.call(null,cljs.core.hash_map,map__19963):map__19963);
var flip_y = cljs.core.get.call(null,map__19963__$1,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
if(!((flip_y == null))){
return gl.pixelStorei(goog.webgl.UNPACK_FLIP_Y_WEBGL,flip_y);
} else {
return null;
}
});
gamma_driver.impl.resource.texture_wrap_constants = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"repeat","repeat",832692087),goog.webgl.REPEAT,new cljs.core.Keyword(null,"clamp-to-edge","clamp-to-edge",-991281832),goog.webgl.CLAMP_TO_EDGE,new cljs.core.Keyword(null,"mirrored-repeat","mirrored-repeat",-892831418),goog.webgl.MIRRORED_REPEAT], null);
gamma_driver.impl.resource.texture_wrap = (function gamma_driver$impl$resource$texture_wrap(gl,spec){
var map__19965 = spec;
var map__19965__$1 = ((cljs.core.seq_QMARK_.call(null,map__19965))?cljs.core.apply.call(null,cljs.core.hash_map,map__19965):map__19965);
var s = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var t = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
if(cljs.core.truth_(s)){
gl.texParameteri(goog.webgl.TEXTURE_2D,goog.webgl.TEXTURE_WRAP_S,gamma_driver.impl.resource.texture_wrap_constants.call(null,s));
} else {
}

if(cljs.core.truth_(t)){
return gl.texParameteri(goog.webgl.TEXTURE_2D,goog.webgl.TEXTURE_WRAP_T,gamma_driver.impl.resource.texture_wrap_constants.call(null,t));
} else {
return null;
}
});
gamma_driver.impl.resource.texture_filter_constants = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"linear","linear",872268697),goog.webgl.LINEAR,new cljs.core.Keyword(null,"nearest","nearest",1176353890),goog.webgl.NEAREST,new cljs.core.Keyword(null,"nearest-mipmap-nearest","nearest-mipmap-nearest",-1180299778),goog.webgl.NEAREST_MIPMAP_NEAREST,new cljs.core.Keyword(null,"linear-mipmap-nearest","linear-mipmap-nearest",-1196585032),goog.webgl.LINEAR_MIPMAP_NEAREST,new cljs.core.Keyword(null,"nearest-mipmap-linear","nearest-mipmap-linear",1410757486),goog.webgl.NEAREST_MIPMAP_LINEAR,new cljs.core.Keyword(null,"linear-mipmap-linear","linear-mipmap-linear",1932176890),goog.webgl.LINEAR_MIPMAP_LINEAR], null);
gamma_driver.impl.resource.texture_filter = (function gamma_driver$impl$resource$texture_filter(gl,spec){
var map__19967 = spec;
var map__19967__$1 = ((cljs.core.seq_QMARK_.call(null,map__19967))?cljs.core.apply.call(null,cljs.core.hash_map,map__19967):map__19967);
var min = cljs.core.get.call(null,map__19967__$1,new cljs.core.Keyword(null,"min","min",444991522));
var mag = cljs.core.get.call(null,map__19967__$1,new cljs.core.Keyword(null,"mag","mag",48619174));
if(cljs.core.truth_(min)){
gl.texParameteri(goog.webgl.TEXTURE_2D,goog.webgl.TEXTURE_MIN_FILTER,gamma_driver.impl.resource.texture_filter_constants.call(null,min));
} else {
}

if(cljs.core.truth_(mag)){
return gl.texParameteri(goog.webgl.TEXTURE_2D,goog.webgl.TEXTURE_MAG_FILTER,gamma_driver.impl.resource.texture_filter_constants.call(null,mag));
} else {
return null;
}
});
gamma_driver.impl.resource.texture_data_type = (function gamma_driver$impl$resource$texture_data_type(d){
if(((d instanceof ImageData)) || ((d instanceof HTMLImageElement)) || ((d instanceof HTMLCanvasElement)) || ((d instanceof HTMLVideoElement))){
return new cljs.core.Keyword(null,"image","image",-58725096);
} else {
if(((d instanceof Float32Array)) || ((d == null))){
return new cljs.core.Keyword(null,"pixels","pixels",-40523077);
} else {
throw (new Error([cljs.core.str("texture data type not supported: "),cljs.core.str(cljs.core.pr_str.call(null,d))].join('')));
}
}
});
gamma_driver.impl.resource.texture_formats = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),goog.webgl.ALPHA,new cljs.core.Keyword(null,"luminance","luminance",2062525618),goog.webgl.LUMINANCE,new cljs.core.Keyword(null,"luminance-alpha","luminance-alpha",-561824723),goog.webgl.LUMINANCE_ALPHA,new cljs.core.Keyword(null,"rgb","rgb",1432123467),goog.webgl.RGB,new cljs.core.Keyword(null,"rgba","rgba",-2032958718),goog.webgl.RGBA], null);
gamma_driver.impl.resource.texture_data_types = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"unsigned-byte","unsigned-byte",541188667),goog.webgl.UNSIGNED_BYTE,new cljs.core.Keyword(null,"unsigned-short-5-6-5","unsigned-short-5-6-5",300830563),goog.webgl.UNSIGNED_SHORT_5_6_5,new cljs.core.Keyword(null,"unsigned-short-4-4-4-4","unsigned-short-4-4-4-4",-529445534),goog.webgl.UNSIGNED_SHORT_4_4_4_4,new cljs.core.Keyword(null,"unsigned-short-5-5-5-1","unsigned-short-5-5-5-1",1210404384),goog.webgl.UNSIGNED_SHORT_5_5_5_1], null);
gamma_driver.impl.resource.texture = (function gamma_driver$impl$resource$texture(gl,spec){
if(cljs.core.truth_(new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(spec))){
return spec;
} else {
var tex = gl.createTexture();
var map__19971 = spec;
var map__19971__$1 = ((cljs.core.seq_QMARK_.call(null,map__19971))?cljs.core.apply.call(null,cljs.core.hash_map,map__19971):map__19971);
var format_type = cljs.core.get.call(null,map__19971__$1,new cljs.core.Keyword(null,"format-type","format-type",-23280096));
var width = cljs.core.get.call(null,map__19971__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__19971__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var unpack = cljs.core.get.call(null,map__19971__$1,new cljs.core.Keyword(null,"unpack","unpack",-2027067542));
var filter = cljs.core.get.call(null,map__19971__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var wrap = cljs.core.get.call(null,map__19971__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var vec__19972 = format_type;
var format = cljs.core.nth.call(null,vec__19972,(0),null);
var type = cljs.core.nth.call(null,vec__19972,(1),null);
var format__$1 = gamma_driver.impl.resource.texture_formats.call(null,(function (){var or__4950__auto__ = format;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return new cljs.core.Keyword(null,"rgba","rgba",-2032958718);
}
})());
var type__$1 = gamma_driver.impl.resource.texture_data_types.call(null,(function (){var or__4950__auto__ = type;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return new cljs.core.Keyword(null,"unsigned-byte","unsigned-byte",541188667);
}
})());
gamma_driver.impl.resource.texture_unpack.call(null,gl,unpack);

gl.activeTexture((goog.webgl.TEXTURE0 + new cljs.core.Keyword(null,"texture-id","texture-id",1751127592).cljs$core$IFn$_invoke$arity$1(spec)));

gl.bindTexture(goog.webgl.TEXTURE_2D,tex);

gamma_driver.impl.resource.texture_wrap.call(null,gl,wrap);

gamma_driver.impl.resource.texture_filter.call(null,gl,filter);

var G__19973_19974 = (((gamma_driver.impl.resource.texture_data_type.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(spec)) instanceof cljs.core.Keyword))?gamma_driver.impl.resource.texture_data_type.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(spec)).fqn:null);
switch (G__19973_19974) {
case "image":
gl.texImage2D(goog.webgl.TEXTURE_2D,(0),format__$1,format__$1,type__$1,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(spec));

break;
case "pixels":
gl.texImage2D(goog.webgl.TEXTURE_2D,(0),format__$1,width,height,(0),format__$1,type__$1,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(spec));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(gamma_driver.impl.resource.texture_data_type.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(spec)))].join('')));

}

gl.bindTexture(goog.webgl.TEXTURE_2D,null);

return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"texture","texture",-266291651),new cljs.core.Keyword(null,"texture","texture",-266291651),tex);
}
});
gamma_driver.impl.resource.renderbuffer_formats = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"depth-component16","depth-component16",899680906),goog.webgl.DEPTH_COMPONENT16,new cljs.core.Keyword(null,"rgba4","rgba4",220779635),goog.webgl.RGBA4,new cljs.core.Keyword(null,"rgb5-a1","rgb5-a1",-86372846),goog.webgl.RGB5_A1,new cljs.core.Keyword(null,"rgb565","rgb565",1929374922),goog.webgl.RGB565,new cljs.core.Keyword(null,"stencil-index8","stencil-index8",460433011),goog.webgl.STENCIL_INDEX8], null);
gamma_driver.impl.resource.render_buffer = (function gamma_driver$impl$resource$render_buffer(gl,spec){
var rb = gl.createRenderbuffer();
var map__19977 = spec;
var map__19977__$1 = ((cljs.core.seq_QMARK_.call(null,map__19977))?cljs.core.apply.call(null,cljs.core.hash_map,map__19977):map__19977);
var width = cljs.core.get.call(null,map__19977__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__19977__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var format = cljs.core.get.call(null,map__19977__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
gl.bindRenderbuffer(goog.webgl.RENDERBUFFER,rb);

gl.renderbufferStorage(goog.webgl.RENDERBUFFER,gamma_driver.impl.resource.renderbuffer_formats.call(null,format),width,height);

return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"render-buffer","render-buffer",390064983),new cljs.core.Keyword(null,"render-buffer","render-buffer",390064983),rb);
});
gamma_driver.impl.resource.frame_buffer_attachment = (function gamma_driver$impl$resource$frame_buffer_attachment(gl,fb,p__19978){
var vec__19981 = p__19978;
var attachment = cljs.core.nth.call(null,vec__19981,(0),null);
var attachment_point = cljs.core.nth.call(null,vec__19981,(1),null);
var G__19982 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(attachment) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(attachment).fqn:null);
switch (G__19982) {
case "texture":
return gl.framebufferTexture2D(goog.webgl.FRAMEBUFFER,attachment_point,goog.webgl.TEXTURE_2D,new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(attachment),(0));

break;
case "render-buffer":
return gl.framebufferRenderbuffer(goog.webgl.FRAMEBUFFER,attachment_point,goog.webgl.RENDERBUFFER,new cljs.core.Keyword(null,"render-buffer","render-buffer",390064983).cljs$core$IFn$_invoke$arity$1(attachment));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(attachment))].join('')));

}
});
gamma_driver.impl.resource.frame_buffer = (function gamma_driver$impl$resource$frame_buffer(gl,spec){
var fb = gl.createFramebuffer();
var map__19986 = spec;
var map__19986__$1 = ((cljs.core.seq_QMARK_.call(null,map__19986))?cljs.core.apply.call(null,cljs.core.hash_map,map__19986):map__19986);
var color = cljs.core.get.call(null,map__19986__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var depth = cljs.core.get.call(null,map__19986__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var stencil = cljs.core.get.call(null,map__19986__$1,new cljs.core.Keyword(null,"stencil","stencil",-1049110946));
var depth_stencil = cljs.core.get.call(null,map__19986__$1,new cljs.core.Keyword(null,"depth-stencil","depth-stencil",-221852810));
gl.bindFramebuffer(goog.webgl.FRAMEBUFFER,fb);

cljs.core.dorun.call(null,cljs.core.map.call(null,((function (fb,map__19986,map__19986__$1,color,depth,stencil,depth_stencil){
return (function (p1__19984_SHARP_){
return gamma_driver.impl.resource.frame_buffer_attachment.call(null,gl,fb,p1__19984_SHARP_);
});})(fb,map__19986,map__19986__$1,color,depth,stencil,depth_stencil))
,cljs.core.filter.call(null,cljs.core.first,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,goog.webgl.COLOR_ATTACHMENT0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth,goog.webgl.DEPTH_ATTACHMENT], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stencil,goog.webgl.STENCIL_ATTACHMENT], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth_stencil,goog.webgl.DEPTH_STENCIL_ATTACHMENT], null)], null))));

gl.bindFramebuffer(goog.webgl.FRAMEBUFFER,null);

return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"frame-buffer","frame-buffer",339847354),new cljs.core.Keyword(null,"frame-buffer","frame-buffer",339847354),fb);
});
gamma_driver.impl.resource.release = (function gamma_driver$impl$resource$release(gl,spec){
var G__19988 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(spec) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(spec).fqn:null);
switch (G__19988) {
case "program":
return gl.deleteProgram(new cljs.core.Keyword(null,"program","program",781564284).cljs$core$IFn$_invoke$arity$1(spec));

break;
case "array-buffer":
return gl.deleteBuffer(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380).cljs$core$IFn$_invoke$arity$1(spec));

break;
case "element-array-buffer":
return gl.deleteBuffer(new cljs.core.Keyword(null,"element-array-buffer","element-array-buffer",-2099854251).cljs$core$IFn$_invoke$arity$1(spec));

break;
case "frame-buffer":
return gl.deleteFramebuffer(new cljs.core.Keyword(null,"frame-buffer","frame-buffer",339847354).cljs$core$IFn$_invoke$arity$1(spec));

break;
case "render-buffer":
return gl.deleteRenderbuffer(new cljs.core.Keyword(null,"render-buffer","render-buffer",390064983).cljs$core$IFn$_invoke$arity$1(spec));

break;
case "vertex-shader":
return gl.deleteShader(new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447).cljs$core$IFn$_invoke$arity$1(spec));

break;
case "fragment-shader":
return gl.deleteShader(new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701).cljs$core$IFn$_invoke$arity$1(spec));

break;
case "texture":
return gl.deleteTexture(new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(spec));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(spec))].join('')));

}
});

//# sourceMappingURL=resource.js.map