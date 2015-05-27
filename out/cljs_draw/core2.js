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
var seq__13837_13843 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),vec));
var chunk__13838_13844 = null;
var count__13839_13845 = (0);
var i__13840_13846 = (0);
while(true){
if((i__13840_13846 < count__13839_13845)){
var vec__13841_13847 = cljs.core._nth.call(null,chunk__13838_13844,i__13840_13846);
var index_13848 = cljs.core.nth.call(null,vec__13841_13847,(0),null);
var f_13849 = cljs.core.nth.call(null,vec__13841_13847,(1),null);
(arr[index_13848] = f_13849);

var G__13850 = seq__13837_13843;
var G__13851 = chunk__13838_13844;
var G__13852 = count__13839_13845;
var G__13853 = (i__13840_13846 + (1));
seq__13837_13843 = G__13850;
chunk__13838_13844 = G__13851;
count__13839_13845 = G__13852;
i__13840_13846 = G__13853;
continue;
} else {
var temp__4422__auto___13854 = cljs.core.seq.call(null,seq__13837_13843);
if(temp__4422__auto___13854){
var seq__13837_13855__$1 = temp__4422__auto___13854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13837_13855__$1)){
var c__5735__auto___13856 = cljs.core.chunk_first.call(null,seq__13837_13855__$1);
var G__13857 = cljs.core.chunk_rest.call(null,seq__13837_13855__$1);
var G__13858 = c__5735__auto___13856;
var G__13859 = cljs.core.count.call(null,c__5735__auto___13856);
var G__13860 = (0);
seq__13837_13843 = G__13857;
chunk__13838_13844 = G__13858;
count__13839_13845 = G__13859;
i__13840_13846 = G__13860;
continue;
} else {
var vec__13842_13861 = cljs.core.first.call(null,seq__13837_13855__$1);
var index_13862 = cljs.core.nth.call(null,vec__13842_13861,(0),null);
var f_13863 = cljs.core.nth.call(null,vec__13842_13861,(1),null);
(arr[index_13862] = f_13863);

var G__13864 = cljs.core.next.call(null,seq__13837_13855__$1);
var G__13865 = null;
var G__13866 = (0);
var G__13867 = (0);
seq__13837_13843 = G__13864;
chunk__13838_13844 = G__13865;
count__13839_13845 = G__13866;
i__13840_13846 = G__13867;
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
if(typeof cljs_draw.core2.t13871 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core2.t13871 = (function (app,data,owner,meta13872){
this.app = app;
this.data = data;
this.owner = owner;
this.meta13872 = meta13872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core2.t13871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13873,meta13872__$1){
var self__ = this;
var _13873__$1 = this;
return (new cljs_draw.core2.t13871(self__.app,self__.data,self__.owner,meta13872__$1));
});

cljs_draw.core2.t13871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13873){
var self__ = this;
var _13873__$1 = this;
return self__.meta13872;
});

cljs_draw.core2.t13871.prototype.om$core$IDidMount$ = true;

cljs_draw.core2.t13871.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var canvas = node.querySelector("canvas");
canvas.width = (500);

canvas.height = (500);

return cljs_draw.core2.init.call(null,canvas);
});

cljs_draw.core2.t13871.prototype.om$core$IRender$ = true;

cljs_draw.core2.t13871.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.canvas(null));
});

cljs_draw.core2.t13871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta13872","meta13872",-532605500,null)], null);
});

cljs_draw.core2.t13871.cljs$lang$type = true;

cljs_draw.core2.t13871.cljs$lang$ctorStr = "cljs_draw.core2/t13871";

cljs_draw.core2.t13871.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core2/t13871");
});

cljs_draw.core2.__GT_t13871 = (function cljs_draw$core2$app_$___GT_t13871(app__$1,data__$1,owner__$1,meta13872){
return (new cljs_draw.core2.t13871(app__$1,data__$1,owner__$1,meta13872));
});

}

return (new cljs_draw.core2.t13871(cljs_draw$core2$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core2.app,cljs_draw.core2.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core2.js.map