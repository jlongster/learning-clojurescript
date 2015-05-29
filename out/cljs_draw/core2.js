// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs_draw.core2');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('gamma_driver.drivers.basic');
goog.require('gamma.program');
goog.require('om.dom');
goog.require('thi.ng.geom.core');
goog.require('clojure.browser.repl');
goog.require('cljs.core.async');
goog.require('gamma.api');
goog.require('cljs_draw.util');
goog.require('gamma_driver.protocols');
goog.require('om.core');
if(typeof cljs_draw.core2.conn !== 'undefined'){
} else {
cljs_draw.core2.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
if(typeof cljs_draw.core2.app_state !== 'undefined'){
} else {
cljs_draw.core2.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#bbffbb"], null),new cljs.core.Keyword(null,"current-color","current-color",1731984119),"#bbffbb",new cljs.core.Keyword(null,"listening-for-color","listening-for-color",-341629494),false], null));
}
cljs_draw.core2.u_p_matrix = gamma.api.uniform.call(null,"uPMatrix",new cljs.core.Keyword(null,"mat4","mat4",-237531594));
cljs_draw.core2.u_mv_matrix = gamma.api.uniform.call(null,"uMVMatrix",new cljs.core.Keyword(null,"mat4","mat4",-237531594));
cljs_draw.core2.a_position = gamma.api.attribute.call(null,"aVertexPosition",new cljs.core.Keyword(null,"vec3","vec3",1116680488));
cljs_draw.core2.program_source = gamma.program.program.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),gamma.api._STAR_.call(null,gamma.api._STAR_.call(null,cljs_draw.core2.u_p_matrix,cljs_draw.core2.u_mv_matrix),gamma.api.vec4.call(null,cljs_draw.core2.a_position,(1)))], true, false),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,(1),(1),(1),(1))], true, false)], null));
cljs_draw.core2.renderable = (function cljs_draw$core2$renderable(p,mv,vertices){
return new cljs.core.PersistentArrayMap.fromArray([cljs_draw.core2.u_p_matrix,p,cljs_draw.core2.u_mv_matrix,mv,cljs_draw.core2.a_position,vertices], true, false);
});
cljs_draw.core2.get_perspective_matrix = (function cljs_draw$core2$get_perspective_matrix(width,height){
return thi.ng.geom.core.matrix.ortho.call(null,(0),(0),width,height,0.1,(1000));
});
cljs_draw.core2.__GT_Float32Array = (function cljs_draw$core2$__GT_Float32Array(vec){
var arr = (new Float32Array(cljs.core.count.call(null,vec)));
var seq__14064_14070 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),vec));
var chunk__14065_14071 = null;
var count__14066_14072 = (0);
var i__14067_14073 = (0);
while(true){
if((i__14067_14073 < count__14066_14072)){
var vec__14068_14074 = cljs.core._nth.call(null,chunk__14065_14071,i__14067_14073);
var index_14075 = cljs.core.nth.call(null,vec__14068_14074,(0),null);
var f_14076 = cljs.core.nth.call(null,vec__14068_14074,(1),null);
(arr[index_14075] = f_14076);

var G__14077 = seq__14064_14070;
var G__14078 = chunk__14065_14071;
var G__14079 = count__14066_14072;
var G__14080 = (i__14067_14073 + (1));
seq__14064_14070 = G__14077;
chunk__14065_14071 = G__14078;
count__14066_14072 = G__14079;
i__14067_14073 = G__14080;
continue;
} else {
var temp__4422__auto___14081 = cljs.core.seq.call(null,seq__14064_14070);
if(temp__4422__auto___14081){
var seq__14064_14082__$1 = temp__4422__auto___14081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14064_14082__$1)){
var c__5735__auto___14083 = cljs.core.chunk_first.call(null,seq__14064_14082__$1);
var G__14084 = cljs.core.chunk_rest.call(null,seq__14064_14082__$1);
var G__14085 = c__5735__auto___14083;
var G__14086 = cljs.core.count.call(null,c__5735__auto___14083);
var G__14087 = (0);
seq__14064_14070 = G__14084;
chunk__14065_14071 = G__14085;
count__14066_14072 = G__14086;
i__14067_14073 = G__14087;
continue;
} else {
var vec__14069_14088 = cljs.core.first.call(null,seq__14064_14082__$1);
var index_14089 = cljs.core.nth.call(null,vec__14069_14088,(0),null);
var f_14090 = cljs.core.nth.call(null,vec__14069_14088,(1),null);
(arr[index_14089] = f_14090);

var G__14091 = cljs.core.next.call(null,seq__14064_14082__$1);
var G__14092 = null;
var G__14093 = (0);
var G__14094 = (0);
seq__14064_14070 = G__14091;
chunk__14065_14071 = G__14092;
count__14066_14072 = G__14093;
i__14067_14073 = G__14094;
continue;
}
} else {
}
}
break;
}

return arr;
});
cljs_draw.core2.init = (function cljs_draw$core2$init(node){
var gl = node.getContext("webgl");
var w = node.clientWidth;
var h = node.clientHeight;
var driver = gamma_driver.drivers.basic.basic_driver.call(null,gl);
var program = gamma_driver.protocols.program.call(null,driver,cljs_draw.core2.program_source);
var pers = cljs_draw.core2.get_perspective_matrix.call(null,w,h);
var mv = thi.ng.geom.core.matrix.matrix44.call(null);
var triangle_vertices = cljs_draw.core2.__GT_Float32Array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(-100),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(-100),(0)], null)], null));
gl.viewport((0),(0),w,h);

gl.clearColor((0),(0),(0),(1));

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

var mv__$1 = thi.ng.geom.core.translate.call(null,mv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200),(-1)], null));
return gamma_driver.drivers.basic.draw_arrays.call(null,driver,program,cljs_draw.core2.renderable.call(null,pers,mv__$1,triangle_vertices),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),new cljs.core.Keyword(null,"triangles","triangles",-1525417058)], null));
});
cljs_draw.core2.app = (function cljs_draw$core2$app(data,owner){
if(typeof cljs_draw.core2.t14098 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core2.t14098 = (function (app,data,owner,meta14099){
this.app = app;
this.data = data;
this.owner = owner;
this.meta14099 = meta14099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core2.t14098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14100,meta14099__$1){
var self__ = this;
var _14100__$1 = this;
return (new cljs_draw.core2.t14098(self__.app,self__.data,self__.owner,meta14099__$1));
});

cljs_draw.core2.t14098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14100){
var self__ = this;
var _14100__$1 = this;
return self__.meta14099;
});

cljs_draw.core2.t14098.prototype.om$core$IDidMount$ = true;

cljs_draw.core2.t14098.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var canvas = node.querySelector("canvas");
canvas.width = (500);

canvas.height = (500);

return cljs_draw.core2.init.call(null,canvas);
});

cljs_draw.core2.t14098.prototype.om$core$IRender$ = true;

cljs_draw.core2.t14098.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.canvas(null));
});

cljs_draw.core2.t14098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14099","meta14099",-1139721481,null)], null);
});

cljs_draw.core2.t14098.cljs$lang$type = true;

cljs_draw.core2.t14098.cljs$lang$ctorStr = "cljs_draw.core2/t14098";

cljs_draw.core2.t14098.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core2/t14098");
});

cljs_draw.core2.__GT_t14098 = (function cljs_draw$core2$app_$___GT_t14098(app__$1,data__$1,owner__$1,meta14099){
return (new cljs_draw.core2.t14098(app__$1,data__$1,owner__$1,meta14099));
});

}

return (new cljs_draw.core2.t14098(cljs_draw$core2$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core2.app,cljs_draw.core2.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core2.js.map