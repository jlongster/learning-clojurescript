// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs_draw.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('gamma_driver.drivers.basic');
goog.require('thi.ng.math.core');
goog.require('gamma.program');
goog.require('om.dom');
goog.require('goog.color');
goog.require('thi.ng.geom.core');
goog.require('clojure.browser.repl');
goog.require('thi.ng.geom.core.vector');
goog.require('cljs.core.async');
goog.require('gamma.api');
goog.require('gamma_driver.api');
goog.require('cljs_draw.util');
goog.require('gamma_driver.protocols');
goog.require('om.core');
if(typeof cljs_draw.core.conn !== 'undefined'){
} else {
cljs_draw.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
if(typeof cljs_draw.core.app_state !== 'undefined'){
} else {
cljs_draw.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000"], null),new cljs.core.Keyword(null,"current-color","current-color",1731984119),"#000000",new cljs.core.Keyword(null,"listening-for-color","listening-for-color",-341629494),false], null));
}
cljs_draw.core.dimen = (1200);
cljs_draw.core.boundary = (50);
cljs_draw.core.paint_meshes = cljs.core.PersistentVector.EMPTY;
cljs_draw.core.current_mesh = null;
cljs_draw.core.stroke_history = cljs.core.PersistentVector.EMPTY;
cljs_draw.core.renderer = null;
cljs_draw.core.u_p_matrix = gamma.api.uniform.call(null,"uPMatrix",new cljs.core.Keyword(null,"mat4","mat4",-237531594));
cljs_draw.core.u_mv_matrix = gamma.api.uniform.call(null,"uMVMatrix",new cljs.core.Keyword(null,"mat4","mat4",-237531594));
cljs_draw.core.u_color = gamma.api.uniform.call(null,"uColor",new cljs.core.Keyword(null,"vec3","vec3",1116680488));
cljs_draw.core.a_value = gamma.api.attribute.call(null,"aValue",new cljs.core.Keyword(null,"float","float",-1732389368));
cljs_draw.core.a_position = gamma.api.attribute.call(null,"aVertexPosition",new cljs.core.Keyword(null,"vec2","vec2",-762258640));
cljs_draw.core.v_value = gamma.api.varying.call(null,"vValue",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"mediump","mediump",-1401096909));
cljs_draw.core.shader_rand = (function cljs_draw$core$shader_rand(v){
return gamma.api.fract.call(null,gamma.api._STAR_.call(null,gamma.api.sin.call(null,gamma.api.dot.call(null,gamma.api.vec2.call(null,v),gamma.api.vec2.call(null,12.9898,78.233))),43758.5453));
});
cljs_draw.core.shader_lerp = (function cljs_draw$core$shader_lerp(a,b,s){
return gamma.api._PLUS_.call(null,a,gamma.api._STAR_.call(null,s,gamma.api._.call(null,b,a)));
});
cljs_draw.core.current_brush = new cljs.core.Keyword(null,"transparent","transparent",-2073609949);
cljs_draw.core.default_vertex_shader = new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),gamma.api._STAR_.call(null,gamma.api._STAR_.call(null,cljs_draw.core.u_p_matrix,cljs_draw.core.u_mv_matrix),gamma.api.vec4.call(null,cljs_draw.core.a_position,(0),(1))),cljs_draw.core.v_value,cljs_draw.core.a_value], true, false);
cljs_draw.core.brushes = cljs.core.PersistentArrayMap.EMPTY;
cljs_draw.core.add_brush = (function cljs_draw$core$add_brush(name,brush){
var program = gamma.program.program.call(null,cljs.core.assoc.call(null,brush,new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"mediump","mediump",-1401096909)], null)));
cljs_draw.core.brushes = cljs.core.assoc.call(null,cljs_draw.core.brushes,name,program);

if(cljs.core.truth_(cljs_draw.core.renderer)){
cljs_draw.core.renderer = cljs.core.assoc.call(null,cljs_draw.core.renderer,new cljs.core.Keyword(null,"programs","programs",-911114278),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"programs","programs",-911114278).cljs$core$IFn$_invoke$arity$1(cljs_draw.core.renderer),name,gamma_driver.protocols.program.call(null,new cljs.core.Keyword(null,"driver","driver",1515263546).cljs$core$IFn$_invoke$arity$1(cljs_draw.core.renderer),program)));
} else {
}

return null;
});
cljs_draw.core.add_brush.call(null,new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),cljs_draw.core.default_vertex_shader,new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,cljs_draw.core.u_color,(1))], true, false)], null));
cljs_draw.core.add_brush.call(null,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),cljs_draw.core.default_vertex_shader,new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,cljs_draw.core.u_color,.4)], true, false)], null));
cljs_draw.core.add_brush.call(null,new cljs.core.Keyword(null,"spray","spray",-1479371657),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),cljs_draw.core.default_vertex_shader,new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),(function (){var seed = gamma.api.vec2.call(null,32.2,3.5);
return gamma.api.vec4.call(null,cljs_draw.core.u_color,gamma.api.if$.call(null,gamma.api._LT_.call(null,gamma.api._PLUS_.call(null,gamma.api.pow.call(null,cljs_draw.core.v_value,(3)),gamma.api._STAR_.call(null,cljs_draw.core.shader_rand.call(null,gamma.api.gl_frag_coord.call(null)),.5)),.5),(0),(1)));
})()], true, false)], null));
cljs_draw.core.renderable = (function cljs_draw$core$renderable(p,mv,color,vertices,values,vertex_count){
return new cljs.core.PersistentArrayMap.fromArray([cljs_draw.core.u_p_matrix,p,cljs_draw.core.u_mv_matrix,mv,cljs_draw.core.u_color,cljs.core.vec.call(null,color),cljs_draw.core.a_value,values,cljs_draw.core.a_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),vertices,new cljs.core.Keyword(null,"count","count",2139924085),vertex_count], null)], true, false);
});
cljs_draw.core.get_perspective_matrix = (function cljs_draw$core$get_perspective_matrix(width,height){
return thi.ng.geom.core.matrix.ortho.call(null,(0),(0),width,height,0.1,(1000));
});
cljs_draw.core.save_state = (function cljs_draw$core$save_state(){
localforage.setItem("meshes",cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (m){
return m.serialize();
}),cljs_draw.core.paint_meshes)));

localforage.setItem("current-mesh",cljs_draw.core.current_mesh.serialize());

return localforage.setItem("app-state",cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state)));
});
cljs_draw.core.load_state = (function cljs_draw$core$load_state(){
var c__8515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto__){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto__){
return (function (state_14990){
var state_val_14991 = (state_14990[(1)]);
if((state_val_14991 === (1))){
var inst_14973 = (function (){return ((function (state_val_14991,c__8515__auto__){
return (function (data){
return Mesh2d.unserialize(data);
});
;})(state_val_14991,c__8515__auto__))
})();
var inst_14974 = cljs_draw.util.get_from_storage.call(null,"meshes");
var state_14990__$1 = (function (){var statearr_14992 = state_14990;
(statearr_14992[(7)] = inst_14973);

return statearr_14992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14990__$1,(2),inst_14974);
} else {
if((state_val_14991 === (2))){
var inst_14973 = (state_14990[(7)]);
var inst_14976 = (state_14990[(2)]);
var inst_14977 = cljs.core.mapv.call(null,inst_14973,inst_14976);
var inst_14978 = cljs_draw.core.paint_meshes = inst_14977;
var inst_14979 = cljs_draw.util.get_from_storage.call(null,"current-mesh");
var state_14990__$1 = (function (){var statearr_14993 = state_14990;
(statearr_14993[(8)] = inst_14978);

return statearr_14993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14990__$1,(3),inst_14979);
} else {
if((state_val_14991 === (3))){
var inst_14981 = (state_14990[(2)]);
var inst_14982 = Mesh2d.unserialize(inst_14981);
var inst_14983 = cljs_draw.core.current_mesh = inst_14982;
var inst_14984 = cljs_draw.util.get_from_storage.call(null,"app-state");
var state_14990__$1 = (function (){var statearr_14994 = state_14990;
(statearr_14994[(9)] = inst_14983);

return statearr_14994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14990__$1,(4),inst_14984);
} else {
if((state_val_14991 === (4))){
var inst_14986 = (state_14990[(2)]);
var inst_14987 = (function (){var state = inst_14986;
return ((function (state,inst_14986,state_val_14991,c__8515__auto__){
return (function (x){
return cljs.core.js__GT_clj.call(null,state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
;})(state,inst_14986,state_val_14991,c__8515__auto__))
})();
var inst_14988 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,inst_14987);
var state_14990__$1 = state_14990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14990__$1,inst_14988);
} else {
return null;
}
}
}
}
});})(c__8515__auto__))
;
return ((function (switch__8494__auto__,c__8515__auto__){
return (function() {
var cljs_draw$core$load_state_$_state_machine__8495__auto__ = null;
var cljs_draw$core$load_state_$_state_machine__8495__auto____0 = (function (){
var statearr_14998 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14998[(0)] = cljs_draw$core$load_state_$_state_machine__8495__auto__);

(statearr_14998[(1)] = (1));

return statearr_14998;
});
var cljs_draw$core$load_state_$_state_machine__8495__auto____1 = (function (state_14990){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_14990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e14999){if((e14999 instanceof Object)){
var ex__8498__auto__ = e14999;
var statearr_15000_15002 = state_14990;
(statearr_15000_15002[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15003 = state_14990;
state_14990 = G__15003;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$load_state_$_state_machine__8495__auto__ = function(state_14990){
switch(arguments.length){
case 0:
return cljs_draw$core$load_state_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$load_state_$_state_machine__8495__auto____1.call(this,state_14990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$load_state_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$load_state_$_state_machine__8495__auto____0;
cljs_draw$core$load_state_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$load_state_$_state_machine__8495__auto____1;
return cljs_draw$core$load_state_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__))
})();
var state__8517__auto__ = (function (){var statearr_15001 = f__8516__auto__.call(null);
(statearr_15001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_15001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__))
);

return c__8515__auto__;
});
cljs_draw.core.clear_canvas = (function cljs_draw$core$clear_canvas(){
if(cljs.core.truth_(confirm("Are you sure you want to clear the canvas?"))){
cljs_draw.core.paint_meshes = cljs.core.PersistentVector.EMPTY;

cljs_draw.core.stroke_history = cljs.core.PersistentVector.EMPTY;

return cljs_draw.core.current_mesh = null;
} else {
return null;
}
});
cljs_draw.core.finalize_stroke = (function cljs_draw$core$finalize_stroke(){
cljs_draw.core.paint_meshes = cljs.core.conj.call(null,cljs_draw.core.paint_meshes,cljs_draw.core.current_mesh);

return cljs_draw.core.current_mesh = null;
});
cljs_draw.core.start_stroke = (function cljs_draw$core$start_stroke(point){
var vec__15005 = point;
var x = cljs.core.nth.call(null,vec__15005,(0),null);
var y = cljs.core.nth.call(null,vec__15005,(1),null);
cljs_draw.core.stroke_history = cljs.core.conj.call(null,cljs_draw.core.stroke_history,cljs_draw.core.current_mesh.getNumVertices());

return cljs_draw.core.current_mesh.setCurrentPos(x,y,x,y);
});

cljs_draw.core.IRenderable = (function (){var obj15007 = {};
return obj15007;
})();

cljs_draw.core.add_vertex = (function cljs_draw$core$add_vertex(this$,x,y,tracking){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.cljs_draw$core$IRenderable$add_vertex$arity$4;
} else {
return and__4938__auto__;
}
})()){
return this$.cljs_draw$core$IRenderable$add_vertex$arity$4(this$,x,y,tracking);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (cljs_draw.core.add_vertex[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs_draw.core.add_vertex["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderable.add-vertex",this$);
}
}
})().call(null,this$,x,y,tracking);
}
});


/**
* @constructor
*/
cljs_draw.core.LinearStroke = (function (color,brush,vertices,trackings,num_vertices){
this.color = color;
this.brush = brush;
this.vertices = vertices;
this.trackings = trackings;
this.num_vertices = num_vertices;
})
cljs_draw.core.LinearStroke.prototype.cljs_draw$core$IRenderable$ = true;

cljs_draw.core.LinearStroke.prototype.cljs_draw$core$IRenderable$add_vertex$arity$4 = (function (_,x,y,tracking){
var self__ = this;
var ___$1 = this;
self__.vertices.maybeResize(((self__.num_vertices * (2)) + (6)));

self__.trackings.maybeResize((self__.num_vertices + (3)));

var ptr_15008 = (self__.num_vertices * (2));
self__.vertices.set(ptr_15008,x);

self__.vertices.set((ptr_15008 + (1)),y);

var ptr_15009 = self__.num_vertices;
self__.trackings.set(ptr_15009,tracking);

return self__.num_vertices = (self__.num_vertices + (1));
});

cljs_draw.core.LinearStroke.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"brush","brush",2138565644,null),new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"trackings","trackings",-66647821,null),new cljs.core.Symbol(null,"num-vertices","num-vertices",190442476,null)], null);
});

cljs_draw.core.LinearStroke.cljs$lang$type = true;

cljs_draw.core.LinearStroke.cljs$lang$ctorStr = "cljs_draw.core/LinearStroke";

cljs_draw.core.LinearStroke.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/LinearStroke");
});

cljs_draw.core.__GT_LinearStroke = (function cljs_draw$core$__GT_LinearStroke(color,brush,vertices,trackings,num_vertices){
return (new cljs_draw.core.LinearStroke(color,brush,vertices,trackings,num_vertices));
});

cljs_draw.core.make_linear_stroke = (function cljs_draw$core$make_linear_stroke(color,brush){
return (new cljs_draw.core.LinearStroke(color,brush,(new ResizableFloatArray()),(new ResizableFloatArray()),(0)));
});
cljs_draw.core.x = cljs_draw.core.make_linear_stroke.call(null,"blue",new cljs.core.Keyword(null,"blue","blue",-622100620));
cljs_draw.core.add_vertex.call(null,cljs_draw.core.x,(3),(4),(10));
cljs_draw.core.add_vertex.call(null,cljs_draw.core.x,(3),(4),(10));
cljs_draw.core.add_vertex.call(null,cljs_draw.core.x,(3),(4),(10));
console.log(cljs_draw.core.x.vertices);
console.log(cljs_draw.core.x.num_vertices);
cljs_draw.core.add_face = (function cljs_draw$core$add_face(mesh,p1,p2,p3,v1,v2,v3){
mesh.addVertex(cljs.core.nth.call(null,p1,(0)),cljs.core.nth.call(null,p1,(1)),v1);

mesh.addVertex(cljs.core.nth.call(null,p2,(0)),cljs.core.nth.call(null,p2,(1)),v2);

return mesh.addVertex(cljs.core.nth.call(null,p3,(0)),cljs.core.nth.call(null,p3,(1)),v3);
});
cljs_draw.core.vec_equals = (function cljs_draw$core$vec_equals(v1,v2){
var and__4938__auto__ = thi.ng.math.core.delta_EQ_.call(null,cljs.core.nth.call(null,v1,(0)),cljs.core.nth.call(null,v2,(0)));
if(cljs.core.truth_(and__4938__auto__)){
return thi.ng.math.core.delta_EQ_.call(null,cljs.core.nth.call(null,v1,(1)),cljs.core.nth.call(null,v2,(1)));
} else {
return and__4938__auto__;
}
});
cljs_draw.core.angle_of_vectors = (function cljs_draw$core$angle_of_vectors(v1,v2){
return Math.acos((thi.ng.geom.core.dot.call(null,v1,v2) / (thi.ng.geom.core.mag.call(null,v1) * thi.ng.geom.core.mag.call(null,v2))));
});
cljs_draw.core.add_to_stroke = (function cljs_draw$core$add_to_stroke(point,pressure){
var width = (Math.pow(pressure,(2)) * (60));
var current_pos = cljs_draw.core.current_mesh.getCurrentPos();
var last_point1 = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(0)),cljs.core.nth.call(null,current_pos,(1)));
var last_point2 = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(2)),cljs.core.nth.call(null,current_pos,(3)));
var last_edge = thi.ng.geom.core.div.call(null,thi.ng.geom.core._.call(null,last_point2,last_point1),(2));
var last_middle = thi.ng.geom.core._PLUS_.call(null,last_point1,last_edge);
var vec = thi.ng.geom.core._.call(null,thi.ng.geom.core.vector.vec2.call(null,point),last_middle);
if((thi.ng.geom.core.mag.call(null,vec) > (5))){
var normalized = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normalize.call(null,vec),width);
var r1 = thi.ng.geom.core.rotate.call(null,normalized,(thi.ng.math.core.PI / (2)));
var r2 = thi.ng.geom.core.rotate.call(null,normalized,(thi.ng.math.core.PI / (-2)));
var c1_cross = thi.ng.geom.core.cross.call(null,last_edge,r1);
var c2_cross = thi.ng.geom.core.cross.call(null,last_edge,r2);
var c1 = thi.ng.geom.core._PLUS_.call(null,point,r1);
var c2 = thi.ng.geom.core._PLUS_.call(null,point,r2);
var c3 = last_point1;
var c4 = last_point2;
if(cljs.core.truth_(cljs_draw.core.vec_equals.call(null,last_point1,last_point2))){
cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,last_point1,c1,point,(1),(0),(1));

cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,last_point1,point,c2,(1),(1),(0));
} else {
cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,c1,point,c3,(0),(1),(0));

cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,c3,point,last_middle,(0),(1),(1));

cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,point,c2,last_middle,(1),(0),(1));

cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,last_middle,c2,c4,(1),(0),(0));
}

return cljs_draw.core.current_mesh.setCurrentPos(cljs.core.nth.call(null,c1,(0)),cljs.core.nth.call(null,c1,(1)),cljs.core.nth.call(null,c2,(0)),cljs.core.nth.call(null,c2,(1)));
} else {
return null;
}
});
cljs_draw.core.render_mesh = (function cljs_draw$core$render_mesh(mesh,driver,program,pers,mv){
return gamma_driver.api.draw_arrays.call(null,driver,gamma_driver.api.bind.call(null,driver,program,cljs_draw.core.renderable.call(null,pers,mv,mesh.getColor(),mesh.getVertices(),mesh.getValues(),mesh.getNumVertices())),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),new cljs.core.Keyword(null,"triangles","triangles",-1525417058)], null));
});
cljs_draw.core.render = (function cljs_draw$core$render(){
var map__15015 = cljs_draw.core.renderer;
var map__15015__$1 = ((cljs.core.seq_QMARK_.call(null,map__15015))?cljs.core.apply.call(null,cljs.core.hash_map,map__15015):map__15015);
var gl = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var driver = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"driver","driver",1515263546));
var programs = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"programs","programs",-911114278));
var pers = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"pers","pers",-1016576635));
var mv = thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.matrix44.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null));
gl.clear(gl.COLOR_BUFFER_BIT);

var seq__15016_15020 = cljs.core.seq.call(null,cljs_draw.core.paint_meshes);
var chunk__15017_15021 = null;
var count__15018_15022 = (0);
var i__15019_15023 = (0);
while(true){
if((i__15019_15023 < count__15018_15022)){
var mesh_15024 = cljs.core._nth.call(null,chunk__15017_15021,i__15019_15023);
cljs_draw.core.render_mesh.call(null,mesh_15024,driver,mesh_15024.getBrush().call(null,programs),pers,mv);

var G__15025 = seq__15016_15020;
var G__15026 = chunk__15017_15021;
var G__15027 = count__15018_15022;
var G__15028 = (i__15019_15023 + (1));
seq__15016_15020 = G__15025;
chunk__15017_15021 = G__15026;
count__15018_15022 = G__15027;
i__15019_15023 = G__15028;
continue;
} else {
var temp__4422__auto___15029 = cljs.core.seq.call(null,seq__15016_15020);
if(temp__4422__auto___15029){
var seq__15016_15030__$1 = temp__4422__auto___15029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15016_15030__$1)){
var c__5735__auto___15031 = cljs.core.chunk_first.call(null,seq__15016_15030__$1);
var G__15032 = cljs.core.chunk_rest.call(null,seq__15016_15030__$1);
var G__15033 = c__5735__auto___15031;
var G__15034 = cljs.core.count.call(null,c__5735__auto___15031);
var G__15035 = (0);
seq__15016_15020 = G__15032;
chunk__15017_15021 = G__15033;
count__15018_15022 = G__15034;
i__15019_15023 = G__15035;
continue;
} else {
var mesh_15036 = cljs.core.first.call(null,seq__15016_15030__$1);
cljs_draw.core.render_mesh.call(null,mesh_15036,driver,mesh_15036.getBrush().call(null,programs),pers,mv);

var G__15037 = cljs.core.next.call(null,seq__15016_15030__$1);
var G__15038 = null;
var G__15039 = (0);
var G__15040 = (0);
seq__15016_15020 = G__15037;
chunk__15017_15021 = G__15038;
count__15018_15022 = G__15039;
i__15019_15023 = G__15040;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs_draw.core.current_mesh)){
return cljs_draw.core.render_mesh.call(null,cljs_draw.core.current_mesh,driver,cljs_draw.core.current_mesh.getBrush().call(null,programs),pers,mv);
} else {
return null;
}
});
cljs_draw.core.render_loop = (function cljs_draw$core$render_loop(){
cljs_draw.core.render.call(null);

return requestAnimationFrame(cljs_draw$core$render_loop);
});
cljs_draw.core.undo = (function cljs_draw$core$undo(){
var num_verts = cljs.core.last.call(null,cljs_draw.core.stroke_history);
var history = cljs.core.vec.call(null,cljs.core.drop_last.call(null,(1),cljs_draw.core.stroke_history));
if(cljs.core.truth_(cljs_draw.core.current_mesh)){
cljs_draw.core.current_mesh.setNumVertices(num_verts);

cljs_draw.core.stroke_history = history;

if(cljs.core._EQ_.call(null,num_verts,(0))){
cljs_draw.core.current_mesh = cljs.core.last.call(null,cljs_draw.core.paint_meshes);

return cljs_draw.core.paint_meshes = cljs.core.vec.call(null,cljs.core.drop_last.call(null,(1),cljs_draw.core.paint_meshes));
} else {
return null;
}
} else {
return null;
}
});
cljs_draw.core.debug = (function cljs_draw$core$debug(x){
console.log(cljs.core.type.call(null,x),x);

return x;
});
cljs_draw.core.chan_handler = (function cljs_draw$core$chan_handler(chan){
return (function (e){
cljs.core.async.put_BANG_.call(null,chan,e);

return e;
});
});
cljs_draw.core.signal_after_inactivity = (function cljs_draw$core$signal_after_inactivity(ms){
var in$ = cljs.core.async.chan.call(null);
var out = cljs.core.async.chan.call(null);
var c__8515__auto___15135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___15135,in$,out){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___15135,in$,out){
return (function (state_15115){
var state_val_15116 = (state_15115[(1)]);
if((state_val_15116 === (7))){
var inst_15098 = (state_15115[(2)]);
var inst_15099 = cljs.core.nth.call(null,inst_15098,(0),null);
var inst_15100 = cljs.core.nth.call(null,inst_15098,(1),null);
var inst_15101 = cljs.core._EQ_.call(null,inst_15100,in$);
var state_15115__$1 = (function (){var statearr_15117 = state_15115;
(statearr_15117[(7)] = inst_15099);

return statearr_15117;
})();
if(inst_15101){
var statearr_15118_15136 = state_15115__$1;
(statearr_15118_15136[(1)] = (8));

} else {
var statearr_15119_15137 = state_15115__$1;
(statearr_15119_15137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (1))){
var state_15115__$1 = state_15115;
var statearr_15120_15138 = state_15115__$1;
(statearr_15120_15138[(2)] = null);

(statearr_15120_15138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (4))){
var inst_15090 = (state_15115[(2)]);
var state_15115__$1 = (function (){var statearr_15121 = state_15115;
(statearr_15121[(8)] = inst_15090);

return statearr_15121;
})();
var statearr_15122_15139 = state_15115__$1;
(statearr_15122_15139[(2)] = null);

(statearr_15122_15139[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (6))){
var inst_15110 = (state_15115[(2)]);
var state_15115__$1 = (function (){var statearr_15123 = state_15115;
(statearr_15123[(9)] = inst_15110);

return statearr_15123;
})();
var statearr_15124_15140 = state_15115__$1;
(statearr_15124_15140[(2)] = null);

(statearr_15124_15140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (3))){
var inst_15113 = (state_15115[(2)]);
var state_15115__$1 = state_15115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15115__$1,inst_15113);
} else {
if((state_val_15116 === (2))){
var state_15115__$1 = state_15115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15115__$1,(4),in$);
} else {
if((state_val_15116 === (11))){
var inst_15106 = (state_15115[(2)]);
var state_15115__$1 = state_15115;
var statearr_15125_15141 = state_15115__$1;
(statearr_15125_15141[(2)] = inst_15106);

(statearr_15125_15141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (9))){
var state_15115__$1 = state_15115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15115__$1,(11),out,true);
} else {
if((state_val_15116 === (5))){
var inst_15093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15094 = cljs.core.async.timeout.call(null,ms);
var inst_15095 = [in$,inst_15094];
var inst_15096 = (new cljs.core.PersistentVector(null,2,(5),inst_15093,inst_15095,null));
var state_15115__$1 = state_15115;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15115__$1,(7),inst_15096);
} else {
if((state_val_15116 === (10))){
var inst_15108 = (state_15115[(2)]);
var state_15115__$1 = state_15115;
var statearr_15126_15142 = state_15115__$1;
(statearr_15126_15142[(2)] = inst_15108);

(statearr_15126_15142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (8))){
var state_15115__$1 = state_15115;
var statearr_15127_15143 = state_15115__$1;
(statearr_15127_15143[(2)] = null);

(statearr_15127_15143[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8515__auto___15135,in$,out))
;
return ((function (switch__8494__auto__,c__8515__auto___15135,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0 = (function (){
var statearr_15131 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15131[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__);

(statearr_15131[(1)] = (1));

return statearr_15131;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1 = (function (state_15115){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_15115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e15132){if((e15132 instanceof Object)){
var ex__8498__auto__ = e15132;
var statearr_15133_15144 = state_15115;
(statearr_15133_15144[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15145 = state_15115;
state_15115 = G__15145;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__ = function(state_15115){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1.call(this,state_15115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___15135,in$,out))
})();
var state__8517__auto__ = (function (){var statearr_15134 = f__8516__auto__.call(null);
(statearr_15134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___15135);

return statearr_15134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___15135,in$,out))
);


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),in$,new cljs.core.Keyword(null,"output","output",-1105869043),out], null);
});
cljs_draw.core.color_input = (function cljs_draw$core$color_input(data,owner){
if(typeof cljs_draw.core.t15149 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t15149 = (function (color_input,data,owner,meta15150){
this.color_input = color_input;
this.data = data;
this.owner = owner;
this.meta15150 = meta15150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t15149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15151,meta15150__$1){
var self__ = this;
var _15151__$1 = this;
return (new cljs_draw.core.t15149(self__.color_input,self__.data,self__.owner,meta15150__$1));
});

cljs_draw.core.t15149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15151){
var self__ = this;
var _15151__$1 = this;
return self__.meta15150;
});

cljs_draw.core.t15149.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t15149.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
node.addEventListener("input",((function (node,this$__$1){
return (function (e){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673),((function (node,this$__$1){
return (function (xs){
return e.target.value;
});})(node,this$__$1))
);
});})(node,this$__$1))
);

return node.addEventListener("change",((function (node,this$__$1){
return (function (e){
return om.core.transact_BANG_.call(null,self__.data,((function (node,this$__$1){
return (function (xs){
return cljs.core.assoc.call(null,xs,new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.conj.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(xs),e.target.value),new cljs.core.Keyword(null,"current-color","current-color",1731984119),e.target.value);
});})(node,this$__$1))
);
});})(node,this$__$1))
);
});

cljs_draw.core.t15149.prototype.om$core$IRender$ = true;

cljs_draw.core.t15149.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"type": "color", "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "style": {"width": (50), "height": (50), "border": (0)}});
});

cljs_draw.core.t15149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-input","color-input",696074651,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta15150","meta15150",1275943534,null)], null);
});

cljs_draw.core.t15149.cljs$lang$type = true;

cljs_draw.core.t15149.cljs$lang$ctorStr = "cljs_draw.core/t15149";

cljs_draw.core.t15149.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t15149");
});

cljs_draw.core.__GT_t15149 = (function cljs_draw$core$color_input_$___GT_t15149(color_input__$1,data__$1,owner__$1,meta15150){
return (new cljs_draw.core.t15149(color_input__$1,data__$1,owner__$1,meta15150));
});

}

return (new cljs_draw.core.t15149(cljs_draw$core$color_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t15230 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t15230 = (function (color_item,props,owner,meta15231){
this.color_item = color_item;
this.props = props;
this.owner = owner;
this.meta15231 = meta15231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t15230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15232,meta15231__$1){
var self__ = this;
var _15232__$1 = this;
return (new cljs_draw.core.t15230(self__.color_item,self__.props,self__.owner,meta15231__$1));
});

cljs_draw.core.t15230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15232){
var self__ = this;
var _15232__$1 = this;
return self__.meta15231;
});

cljs_draw.core.t15230.prototype.om$core$IInitState$ = true;

cljs_draw.core.t15230.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t15230.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t15230.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__15233 = om.core.get_state.call(null,self__.owner);
var map__15233__$1 = ((cljs.core.seq_QMARK_.call(null,map__15233))?cljs.core.apply.call(null,cljs.core.hash_map,map__15233):map__15233);
var mouseup = cljs.core.get.call(null,map__15233__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__15233__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__15233__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var hide_controls = cljs.core.get.call(null,map__15233__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var c__8515__auto___15308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___15308,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___15308,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_15265){
var state_val_15266 = (state_15265[(1)]);
if((state_val_15266 === (7))){
var inst_15253 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_15254 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_15265__$1 = (function (){var statearr_15267 = state_15265;
(statearr_15267[(7)] = inst_15253);

return statearr_15267;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15265__$1,(9),inst_15254,true);
} else {
if((state_val_15266 === (1))){
var state_15265__$1 = state_15265;
var statearr_15268_15309 = state_15265__$1;
(statearr_15268_15309[(2)] = null);

(statearr_15268_15309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (4))){
var inst_15236 = (state_15265[(2)]);
var inst_15238 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15239 = cljs.core.async.timeout.call(null,(500));
var inst_15240 = [mouseup,inst_15239];
var inst_15241 = (new cljs.core.PersistentVector(null,2,(5),inst_15238,inst_15240,null));
var state_15265__$1 = (function (){var statearr_15269 = state_15265;
(statearr_15269[(8)] = inst_15236);

return statearr_15269;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15265__$1,(5),inst_15241);
} else {
if((state_val_15266 === (6))){
var inst_15248 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_15249 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_15250 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_15251 = inst_15249.call(null,inst_15250);
var state_15265__$1 = (function (){var statearr_15270 = state_15265;
(statearr_15270[(9)] = inst_15248);

return statearr_15270;
})();
var statearr_15271_15310 = state_15265__$1;
(statearr_15271_15310[(2)] = inst_15251);

(statearr_15271_15310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (3))){
var inst_15263 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15265__$1,inst_15263);
} else {
if((state_val_15266 === (2))){
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15265__$1,(4),mousedown);
} else {
if((state_val_15266 === (9))){
var inst_15256 = (state_15265[(2)]);
var state_15265__$1 = (function (){var statearr_15272 = state_15265;
(statearr_15272[(10)] = inst_15256);

return statearr_15272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15265__$1,(10),mouseup);
} else {
if((state_val_15266 === (5))){
var inst_15243 = (state_15265[(2)]);
var inst_15244 = cljs.core.nth.call(null,inst_15243,(0),null);
var inst_15245 = cljs.core.nth.call(null,inst_15243,(1),null);
var inst_15246 = cljs.core._EQ_.call(null,inst_15245,mouseup);
var state_15265__$1 = (function (){var statearr_15273 = state_15265;
(statearr_15273[(11)] = inst_15244);

return statearr_15273;
})();
if(inst_15246){
var statearr_15274_15311 = state_15265__$1;
(statearr_15274_15311[(1)] = (6));

} else {
var statearr_15275_15312 = state_15265__$1;
(statearr_15275_15312[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (10))){
var inst_15258 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15276_15313 = state_15265__$1;
(statearr_15276_15313[(2)] = inst_15258);

(statearr_15276_15313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (8))){
var inst_15260 = (state_15265[(2)]);
var state_15265__$1 = (function (){var statearr_15277 = state_15265;
(statearr_15277[(12)] = inst_15260);

return statearr_15277;
})();
var statearr_15278_15314 = state_15265__$1;
(statearr_15278_15314[(2)] = null);

(statearr_15278_15314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__8515__auto___15308,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8494__auto__,c__8515__auto___15308,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8495__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8495__auto____0 = (function (){
var statearr_15282 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15282[(0)] = cljs_draw$core$color_item_$_state_machine__8495__auto__);

(statearr_15282[(1)] = (1));

return statearr_15282;
});
var cljs_draw$core$color_item_$_state_machine__8495__auto____1 = (function (state_15265){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_15265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e15283){if((e15283 instanceof Object)){
var ex__8498__auto__ = e15283;
var statearr_15284_15315 = state_15265;
(statearr_15284_15315[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15316 = state_15265;
state_15265 = G__15316;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8495__auto__ = function(state_15265){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8495__auto____1.call(this,state_15265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8495__auto____0;
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8495__auto____1;
return cljs_draw$core$color_item_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___15308,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8517__auto__ = (function (){var statearr_15285 = f__8516__auto__.call(null);
(statearr_15285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___15308);

return statearr_15285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___15308,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);


var c__8515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto__,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto__,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_15295){
var state_val_15296 = (state_15295[(1)]);
if((state_val_15296 === (1))){
var state_15295__$1 = state_15295;
var statearr_15297_15317 = state_15295__$1;
(statearr_15297_15317[(2)] = null);

(statearr_15297_15317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15296 === (2))){
var inst_15287 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_15295__$1 = state_15295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15295__$1,(4),inst_15287);
} else {
if((state_val_15296 === (3))){
var inst_15293 = (state_15295[(2)]);
var state_15295__$1 = state_15295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15295__$1,inst_15293);
} else {
if((state_val_15296 === (4))){
var inst_15289 = (state_15295[(2)]);
var inst_15290 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_15295__$1 = (function (){var statearr_15298 = state_15295;
(statearr_15298[(7)] = inst_15289);

(statearr_15298[(8)] = inst_15290);

return statearr_15298;
})();
var statearr_15299_15318 = state_15295__$1;
(statearr_15299_15318[(2)] = null);

(statearr_15299_15318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8515__auto__,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8494__auto__,c__8515__auto__,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8495__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8495__auto____0 = (function (){
var statearr_15303 = [null,null,null,null,null,null,null,null,null];
(statearr_15303[(0)] = cljs_draw$core$color_item_$_state_machine__8495__auto__);

(statearr_15303[(1)] = (1));

return statearr_15303;
});
var cljs_draw$core$color_item_$_state_machine__8495__auto____1 = (function (state_15295){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_15295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e15304){if((e15304 instanceof Object)){
var ex__8498__auto__ = e15304;
var statearr_15305_15319 = state_15295;
(statearr_15305_15319[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15320 = state_15295;
state_15295 = G__15320;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8495__auto__ = function(state_15295){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8495__auto____1.call(this,state_15295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8495__auto____0;
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8495__auto____1;
return cljs_draw$core$color_item_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8517__auto__ = (function (){var statearr_15306 = f__8516__auto__.call(null);
(statearr_15306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_15306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__,map__15233,map__15233__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);

return c__8515__auto__;
});

cljs_draw.core.t15230.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t15230.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t15230.prototype.om$core$IRender$ = true;

cljs_draw.core.t15230.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__15307 = om.core.get_state.call(null,self__.owner);
var map__15307__$1 = ((cljs.core.seq_QMARK_.call(null,map__15307))?cljs.core.apply.call(null,cljs.core.hash_map,map__15307):map__15307);
var mouseup = cljs.core.get.call(null,map__15307__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__15307__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__15307__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
return React.DOM.div({"style": {"position": "relative", "width": (50), "height": (50)}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"href": "#", "onClick": ((function (map__15307,map__15307__$1,mouseup,mousedown,mouseout,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__15307,map__15307__$1,mouseup,mousedown,mouseout,___$1))
},"remove")),React.DOM.div({"onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "style": {"position": "absolute", "width": (50), "height": (50), "cursor": "pointer", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":"")}}));
});

cljs_draw.core.t15230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-item","color-item",934499434,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta15231","meta15231",961616500,null)], null);
});

cljs_draw.core.t15230.cljs$lang$type = true;

cljs_draw.core.t15230.cljs$lang$ctorStr = "cljs_draw.core/t15230";

cljs_draw.core.t15230.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t15230");
});

cljs_draw.core.__GT_t15230 = (function cljs_draw$core$color_item_$___GT_t15230(color_item__$1,props__$1,owner__$1,meta15231){
return (new cljs_draw.core.t15230(color_item__$1,props__$1,owner__$1,meta15231));
});

}

return (new cljs_draw.core.t15230(cljs_draw$core$color_item,props,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_chooser = (function cljs_draw$core$color_chooser(data){
return cljs.core.apply.call(null,om.dom.div,{"className": "color-chooser", "style": {"position": "absolute", "top": (0), "right": (0)}},cljs.core.conj.call(null,cljs.core.mapv.call(null,(function (color){
return om.core.build.call(null,cljs_draw.core.color_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(data),color),new cljs.core.Keyword(null,"onSelect","onSelect",251862405),(function (color__$1){
return om.core.transact_BANG_.call(null,data,(function (xs){
return cljs.core.assoc.call(null,xs,new cljs.core.Keyword(null,"current-color","current-color",1731984119),color__$1,new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673),color__$1);
}));
}),new cljs.core.Keyword(null,"onRemove","onRemove",867118207),(function (color__$1){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"colors","colors",1157174732),(function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (x){
return cljs.core.not_EQ_.call(null,x,color__$1);
}),xs));
}));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),color], null));
}),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(data)),React.DOM.div({"style": {"flex": (0), "textAlign": "center"}},om.core.build.call(null,cljs_draw.core.color_input,data))));
});
cljs_draw.core.init = (function cljs_draw$core$init(node){
var gl = node.getContext("webgl");
var rect = node.getBoundingClientRect();
var w = rect.width;
var h = rect.height;
var driver = gamma_driver.drivers.basic.basic_driver.call(null,gl);
var programs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (gl,rect,w,h,driver){
return (function (p__15323){
var vec__15324 = p__15323;
var name = cljs.core.nth.call(null,vec__15324,(0),null);
var brush = cljs.core.nth.call(null,vec__15324,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,gamma_driver.protocols.program.call(null,driver,brush)], null);
});})(gl,rect,w,h,driver))
,cljs_draw.core.brushes));
var pers = cljs_draw.core.get_perspective_matrix.call(null,w,h);
gl.viewport((0),(0),(w * (2)),(h * (2)));

gl.clearColor((1),(1),(1),(1));

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);

gl.enable(gl.BLEND);

gl.disable(gl.DEPTH_TEST);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gl","gl",-246422634),gl,new cljs.core.Keyword(null,"driver","driver",1515263546),driver,new cljs.core.Keyword(null,"programs","programs",-911114278),programs,new cljs.core.Keyword(null,"pers","pers",-1016576635),pers], null);
});
cljs_draw.core.app = (function cljs_draw$core$app(data,owner){
if(typeof cljs_draw.core.t15491 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t15491 = (function (app,data,owner,meta15492){
this.app = app;
this.data = data;
this.owner = owner;
this.meta15492 = meta15492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t15491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15493,meta15492__$1){
var self__ = this;
var _15493__$1 = this;
return (new cljs_draw.core.t15491(self__.app,self__.data,self__.owner,meta15492__$1));
});

cljs_draw.core.t15491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15493){
var self__ = this;
var _15493__$1 = this;
return self__.meta15492;
});

cljs_draw.core.t15491.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t15491.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvas = node.querySelector("canvas");
cljs_draw.core.renderer = cljs_draw.core.init.call(null,canvas);

cljs_draw.core.render_loop.call(null);

var moved_15657 = cljs_draw.util.listen.call(null,container,"pointermove");
var c__8515__auto___15658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___15658,moved_15657,node,container,canvas,this$__$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___15658,moved_15657,node,container,canvas,this$__$1){
return (function (state_15561){
var state_val_15562 = (state_15561[(1)]);
if((state_val_15562 === (7))){
var inst_15557 = (state_15561[(2)]);
var state_15561__$1 = state_15561;
var statearr_15563_15659 = state_15561__$1;
(statearr_15563_15659[(2)] = inst_15557);

(statearr_15563_15659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (20))){
var inst_15532 = cljs.core.not.call(null,cljs_draw.core.current_mesh);
var state_15561__$1 = state_15561;
if(inst_15532){
var statearr_15564_15660 = state_15561__$1;
(statearr_15564_15660[(1)] = (23));

} else {
var statearr_15565_15661 = state_15561__$1;
(statearr_15565_15661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (27))){
var state_15561__$1 = state_15561;
var statearr_15566_15662 = state_15561__$1;
(statearr_15566_15662[(2)] = null);

(statearr_15566_15662[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (1))){
var inst_15494 = (0);
var state_15561__$1 = (function (){var statearr_15567 = state_15561;
(statearr_15567[(7)] = inst_15494);

return statearr_15567;
})();
var statearr_15568_15663 = state_15561__$1;
(statearr_15568_15663[(2)] = null);

(statearr_15568_15663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (24))){
var state_15561__$1 = state_15561;
var statearr_15569_15664 = state_15561__$1;
(statearr_15569_15664[(2)] = null);

(statearr_15569_15664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (4))){
var inst_15497 = (state_15561[(8)]);
var inst_15497__$1 = (state_15561[(2)]);
var state_15561__$1 = (function (){var statearr_15570 = state_15561;
(statearr_15570[(8)] = inst_15497__$1);

return statearr_15570;
})();
if(cljs.core.truth_(inst_15497__$1)){
var statearr_15571_15665 = state_15561__$1;
(statearr_15571_15665[(1)] = (5));

} else {
var statearr_15572_15666 = state_15561__$1;
(statearr_15572_15666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (15))){
var state_15561__$1 = state_15561;
var statearr_15573_15667 = state_15561__$1;
(statearr_15573_15667[(2)] = cljs_draw.core.current_mesh);

(statearr_15573_15667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (21))){
var state_15561__$1 = state_15561;
var statearr_15574_15668 = state_15561__$1;
(statearr_15574_15668[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (13))){
var inst_15551 = (state_15561[(2)]);
var state_15561__$1 = state_15561;
var statearr_15576_15669 = state_15561__$1;
(statearr_15576_15669[(2)] = inst_15551);

(statearr_15576_15669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (22))){
var inst_15549 = (state_15561[(2)]);
var state_15561__$1 = state_15561;
var statearr_15577_15670 = state_15561__$1;
(statearr_15577_15670[(2)] = inst_15549);

(statearr_15577_15670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (6))){
var state_15561__$1 = state_15561;
var statearr_15578_15671 = state_15561__$1;
(statearr_15578_15671[(2)] = null);

(statearr_15578_15671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (28))){
var inst_15547 = (state_15561[(2)]);
var state_15561__$1 = state_15561;
var statearr_15579_15672 = state_15561__$1;
(statearr_15579_15672[(2)] = inst_15547);

(statearr_15579_15672[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (25))){
var inst_15503 = (state_15561[(9)]);
var inst_15540 = (state_15561[(2)]);
var inst_15541 = cljs_draw.core.start_stroke.call(null,inst_15503);
var state_15561__$1 = (function (){var statearr_15580 = state_15561;
(statearr_15580[(10)] = inst_15540);

return statearr_15580;
})();
var statearr_15581_15673 = state_15561__$1;
(statearr_15581_15673[(2)] = inst_15541);

(statearr_15581_15673[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (17))){
var inst_15525 = cljs_draw.core.finalize_stroke.call(null);
var state_15561__$1 = state_15561;
var statearr_15582_15674 = state_15561__$1;
(statearr_15582_15674[(2)] = inst_15525);

(statearr_15582_15674[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (3))){
var inst_15559 = (state_15561[(2)]);
var state_15561__$1 = state_15561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15561__$1,inst_15559);
} else {
if((state_val_15562 === (12))){
var inst_15494 = (state_15561[(7)]);
var inst_15530 = cljs.core._EQ_.call(null,inst_15494,(0));
var state_15561__$1 = state_15561;
if(inst_15530){
var statearr_15583_15675 = state_15561__$1;
(statearr_15583_15675[(1)] = (20));

} else {
var statearr_15584_15676 = state_15561__$1;
(statearr_15584_15676[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (2))){
var state_15561__$1 = state_15561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15561__$1,(4),moved_15657);
} else {
if((state_val_15562 === (23))){
var inst_15534 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_15535 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_15534);
var inst_15536 = (new Mesh2d(inst_15535,cljs_draw.core.current_brush));
var inst_15537 = cljs_draw.core.current_mesh = inst_15536;
var state_15561__$1 = state_15561;
var statearr_15585_15677 = state_15561__$1;
(statearr_15585_15677[(2)] = inst_15537);

(statearr_15585_15677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (19))){
var inst_15528 = (state_15561[(2)]);
var state_15561__$1 = state_15561;
var statearr_15586_15678 = state_15561__$1;
(statearr_15586_15678[(2)] = inst_15528);

(statearr_15586_15678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (11))){
var state_15561__$1 = state_15561;
if(cljs.core.truth_(cljs_draw.core.current_mesh)){
var statearr_15587_15679 = state_15561__$1;
(statearr_15587_15679[(1)] = (14));

} else {
var statearr_15588_15680 = state_15561__$1;
(statearr_15588_15680[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (9))){
var inst_15504 = (state_15561[(11)]);
var inst_15510 = cljs.core._EQ_.call(null,inst_15504,(0));
var state_15561__$1 = state_15561;
if(inst_15510){
var statearr_15589_15681 = state_15561__$1;
(statearr_15589_15681[(1)] = (11));

} else {
var statearr_15590_15682 = state_15561__$1;
(statearr_15590_15682[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (5))){
var inst_15497 = (state_15561[(8)]);
var inst_15499 = inst_15497.layerX;
var inst_15500 = (inst_15499 - cljs_draw.core.boundary);
var inst_15501 = inst_15497.layerY;
var inst_15502 = (inst_15501 - cljs_draw.core.boundary);
var inst_15503 = thi.ng.geom.core.vector.vec2.call(null,inst_15500,inst_15502);
var inst_15504 = inst_15497.mozPressure;
var inst_15505 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_15506 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_15505);
var inst_15507 = cljs.core.not.call(null,inst_15506);
var state_15561__$1 = (function (){var statearr_15591 = state_15561;
(statearr_15591[(11)] = inst_15504);

(statearr_15591[(9)] = inst_15503);

return statearr_15591;
})();
if(inst_15507){
var statearr_15592_15683 = state_15561__$1;
(statearr_15592_15683[(1)] = (8));

} else {
var statearr_15593_15684 = state_15561__$1;
(statearr_15593_15684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (14))){
var inst_15513 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_15514 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_15513);
var inst_15515 = cljs_draw.core.current_mesh.isColor(inst_15514);
var inst_15516 = cljs.core.not.call(null,inst_15515);
var inst_15517 = cljs_draw.core.current_mesh.getBrush();
var inst_15518 = cljs.core._EQ_.call(null,inst_15517,cljs_draw.core.current_brush);
var inst_15519 = !(inst_15518);
var inst_15520 = (inst_15516) || (inst_15519);
var state_15561__$1 = state_15561;
var statearr_15594_15685 = state_15561__$1;
(statearr_15594_15685[(2)] = inst_15520);

(statearr_15594_15685[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (26))){
var inst_15504 = (state_15561[(11)]);
var inst_15503 = (state_15561[(9)]);
var inst_15544 = cljs_draw.core.add_to_stroke.call(null,inst_15503,inst_15504);
var state_15561__$1 = state_15561;
var statearr_15595_15686 = state_15561__$1;
(statearr_15595_15686[(2)] = inst_15544);

(statearr_15595_15686[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (16))){
var inst_15523 = (state_15561[(2)]);
var state_15561__$1 = state_15561;
if(cljs.core.truth_(inst_15523)){
var statearr_15596_15687 = state_15561__$1;
(statearr_15596_15687[(1)] = (17));

} else {
var statearr_15597_15688 = state_15561__$1;
(statearr_15597_15688[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (10))){
var inst_15504 = (state_15561[(11)]);
var inst_15553 = (state_15561[(2)]);
var inst_15494 = inst_15504;
var state_15561__$1 = (function (){var statearr_15598 = state_15561;
(statearr_15598[(7)] = inst_15494);

(statearr_15598[(12)] = inst_15553);

return statearr_15598;
})();
var statearr_15599_15689 = state_15561__$1;
(statearr_15599_15689[(2)] = null);

(statearr_15599_15689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (18))){
var state_15561__$1 = state_15561;
var statearr_15600_15690 = state_15561__$1;
(statearr_15600_15690[(2)] = null);

(statearr_15600_15690[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (8))){
var state_15561__$1 = state_15561;
var statearr_15601_15691 = state_15561__$1;
(statearr_15601_15691[(2)] = null);

(statearr_15601_15691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8515__auto___15658,moved_15657,node,container,canvas,this$__$1))
;
return ((function (switch__8494__auto__,c__8515__auto___15658,moved_15657,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8495__auto__ = null;
var cljs_draw$core$app_$_state_machine__8495__auto____0 = (function (){
var statearr_15605 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15605[(0)] = cljs_draw$core$app_$_state_machine__8495__auto__);

(statearr_15605[(1)] = (1));

return statearr_15605;
});
var cljs_draw$core$app_$_state_machine__8495__auto____1 = (function (state_15561){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_15561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e15606){if((e15606 instanceof Object)){
var ex__8498__auto__ = e15606;
var statearr_15607_15692 = state_15561;
(statearr_15607_15692[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15693 = state_15561;
state_15561 = G__15693;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8495__auto__ = function(state_15561){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8495__auto____1.call(this,state_15561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8495__auto____0;
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8495__auto____1;
return cljs_draw$core$app_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___15658,moved_15657,node,container,canvas,this$__$1))
})();
var state__8517__auto__ = (function (){var statearr_15608 = f__8516__auto__.call(null);
(statearr_15608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___15658);

return statearr_15608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___15658,moved_15657,node,container,canvas,this$__$1))
);


var keydown = cljs_draw.util.listen.call(null,window,"keydown",((function (node,container,canvas,this$__$1){
return (function (e){
var kc = e.keyCode;
if((cljs.core._EQ_.call(null,kc,(83))) || (cljs.core._EQ_.call(null,kc,(90)))){
return e.preventDefault();
} else {
return null;
}
});})(node,container,canvas,this$__$1))
);
var c__8515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto__,keydown,node,container,canvas,this$__$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto__,keydown,node,container,canvas,this$__$1){
return (function (state_15631){
var state_val_15632 = (state_15631[(1)]);
if((state_val_15632 === (7))){
var inst_15626 = (state_15631[(2)]);
var state_15631__$1 = (function (){var statearr_15633 = state_15631;
(statearr_15633[(7)] = inst_15626);

return statearr_15633;
})();
var statearr_15634_15694 = state_15631__$1;
(statearr_15634_15694[(2)] = null);

(statearr_15634_15694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (1))){
var state_15631__$1 = state_15631;
var statearr_15635_15695 = state_15631__$1;
(statearr_15635_15695[(2)] = null);

(statearr_15635_15695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (4))){
var inst_15611 = (state_15631[(8)]);
var inst_15611__$1 = (state_15631[(2)]);
var inst_15612 = inst_15611__$1.metaKey;
var state_15631__$1 = (function (){var statearr_15636 = state_15631;
(statearr_15636[(8)] = inst_15611__$1);

return statearr_15636;
})();
if(cljs.core.truth_(inst_15612)){
var statearr_15637_15696 = state_15631__$1;
(statearr_15637_15696[(1)] = (5));

} else {
var statearr_15638_15697 = state_15631__$1;
(statearr_15638_15697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (6))){
var state_15631__$1 = state_15631;
var statearr_15639_15698 = state_15631__$1;
(statearr_15639_15698[(2)] = null);

(statearr_15639_15698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (3))){
var inst_15629 = (state_15631[(2)]);
var state_15631__$1 = state_15631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15631__$1,inst_15629);
} else {
if((state_val_15632 === (12))){
var state_15631__$1 = state_15631;
var statearr_15640_15699 = state_15631__$1;
(statearr_15640_15699[(2)] = new cljs.core.Keyword(null,"else","else",-1508377146));

(statearr_15640_15699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (2))){
var state_15631__$1 = state_15631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15631__$1,(4),keydown);
} else {
if((state_val_15632 === (11))){
var inst_15618 = cljs_draw.core.clear_canvas.call(null);
var state_15631__$1 = state_15631;
var statearr_15641_15700 = state_15631__$1;
(statearr_15641_15700[(2)] = inst_15618);

(statearr_15641_15700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (9))){
var inst_15614 = cljs_draw.core.save_state.call(null);
var state_15631__$1 = state_15631;
var statearr_15642_15701 = state_15631__$1;
(statearr_15642_15701[(2)] = inst_15614);

(statearr_15642_15701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (5))){
var inst_15611 = (state_15631[(8)]);
var inst_15621 = inst_15611.keyCode;
var state_15631__$1 = state_15631;
var G__15643_15702 = inst_15621;
switch (G__15643_15702) {
case (83):
var statearr_15644_15704 = state_15631__$1;
(statearr_15644_15704[(1)] = (9));


break;
case (90):
var statearr_15645_15705 = state_15631__$1;
(statearr_15645_15705[(1)] = (10));


break;
case (67):
var statearr_15646_15706 = state_15631__$1;
(statearr_15646_15706[(1)] = (11));


break;
default:
var statearr_15647_15707 = state_15631__$1;
(statearr_15647_15707[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (10))){
var inst_15616 = cljs_draw.core.undo.call(null);
var state_15631__$1 = state_15631;
var statearr_15648_15708 = state_15631__$1;
(statearr_15648_15708[(2)] = inst_15616);

(statearr_15648_15708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (8))){
var inst_15623 = (state_15631[(2)]);
var state_15631__$1 = state_15631;
var statearr_15649_15709 = state_15631__$1;
(statearr_15649_15709[(2)] = inst_15623);

(statearr_15649_15709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8515__auto__,keydown,node,container,canvas,this$__$1))
;
return ((function (switch__8494__auto__,c__8515__auto__,keydown,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8495__auto__ = null;
var cljs_draw$core$app_$_state_machine__8495__auto____0 = (function (){
var statearr_15653 = [null,null,null,null,null,null,null,null,null];
(statearr_15653[(0)] = cljs_draw$core$app_$_state_machine__8495__auto__);

(statearr_15653[(1)] = (1));

return statearr_15653;
});
var cljs_draw$core$app_$_state_machine__8495__auto____1 = (function (state_15631){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_15631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e15654){if((e15654 instanceof Object)){
var ex__8498__auto__ = e15654;
var statearr_15655_15710 = state_15631;
(statearr_15655_15710[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15711 = state_15631;
state_15631 = G__15711;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8495__auto__ = function(state_15631){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8495__auto____1.call(this,state_15631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8495__auto____0;
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8495__auto____1;
return cljs_draw$core$app_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__,keydown,node,container,canvas,this$__$1))
})();
var state__8517__auto__ = (function (){var statearr_15656 = f__8516__auto__.call(null);
(statearr_15656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_15656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__,keydown,node,container,canvas,this$__$1))
);

return c__8515__auto__;
});

cljs_draw.core.t15491.prototype.om$core$IRender$ = true;

cljs_draw.core.t15491.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "app", "style": {"height": "100%", "backgroundColor": "#222222"}},React.DOM.div({"className": "canvas-container", "style": {"bottom": (0), "top": (0), "overflow": "hidden", "width": ((cljs_draw.core.dimen / (2)) + (cljs_draw.core.boundary * (2))), "cursor": "crosshair", "padding": (50), "right": (0), "position": "absolute", "border": "1px solid #2f2f2f", "height": ((cljs_draw.core.dimen / (2)) + (cljs_draw.core.boundary * (2))), "left": (0), "margin": "auto"}},React.DOM.canvas({"width": cljs_draw.core.dimen, "height": cljs_draw.core.dimen, "style": {"width": (cljs_draw.core.dimen / (2)), "height": (cljs_draw.core.dimen / (2))}})),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t15491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta15492","meta15492",1245367889,null)], null);
});

cljs_draw.core.t15491.cljs$lang$type = true;

cljs_draw.core.t15491.cljs$lang$ctorStr = "cljs_draw.core/t15491";

cljs_draw.core.t15491.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t15491");
});

cljs_draw.core.__GT_t15491 = (function cljs_draw$core$app_$___GT_t15491(app__$1,data__$1,owner__$1,meta15492){
return (new cljs_draw.core.t15491(app__$1,data__$1,owner__$1,meta15492));
});

}

return (new cljs_draw.core.t15491(cljs_draw$core$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map