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
cljs_draw.core.program_source = gamma.program.program.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),gamma.api._STAR_.call(null,gamma.api._STAR_.call(null,cljs_draw.core.u_p_matrix,cljs_draw.core.u_mv_matrix),gamma.api.vec4.call(null,cljs_draw.core.a_position,(0),(1))),cljs_draw.core.v_value,cljs_draw.core.a_value], true, false),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,cljs_draw.core.u_color,cljs_draw.core.v_value)], true, false),new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"mediump","mediump",-1401096909)], null)], null));
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
return (function (state_12472){
var state_val_12473 = (state_12472[(1)]);
if((state_val_12473 === (1))){
var inst_12455 = (function (){return ((function (state_val_12473,c__8515__auto__){
return (function (data){
return Mesh2d.unserialize(data);
});
;})(state_val_12473,c__8515__auto__))
})();
var inst_12456 = cljs_draw.util.get_from_storage.call(null,"meshes");
var state_12472__$1 = (function (){var statearr_12474 = state_12472;
(statearr_12474[(7)] = inst_12455);

return statearr_12474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12472__$1,(2),inst_12456);
} else {
if((state_val_12473 === (2))){
var inst_12455 = (state_12472[(7)]);
var inst_12458 = (state_12472[(2)]);
var inst_12459 = cljs.core.mapv.call(null,inst_12455,inst_12458);
var inst_12460 = cljs_draw.core.paint_meshes = inst_12459;
var inst_12461 = cljs_draw.util.get_from_storage.call(null,"current-mesh");
var state_12472__$1 = (function (){var statearr_12475 = state_12472;
(statearr_12475[(8)] = inst_12460);

return statearr_12475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12472__$1,(3),inst_12461);
} else {
if((state_val_12473 === (3))){
var inst_12463 = (state_12472[(2)]);
var inst_12464 = Mesh2d.unserialize(inst_12463);
var inst_12465 = cljs_draw.core.current_mesh = inst_12464;
var inst_12466 = cljs_draw.util.get_from_storage.call(null,"app-state");
var state_12472__$1 = (function (){var statearr_12476 = state_12472;
(statearr_12476[(9)] = inst_12465);

return statearr_12476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12472__$1,(4),inst_12466);
} else {
if((state_val_12473 === (4))){
var inst_12468 = (state_12472[(2)]);
var inst_12469 = (function (){var state = inst_12468;
return ((function (state,inst_12468,state_val_12473,c__8515__auto__){
return (function (x){
return cljs.core.js__GT_clj.call(null,state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
;})(state,inst_12468,state_val_12473,c__8515__auto__))
})();
var inst_12470 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,inst_12469);
var state_12472__$1 = state_12472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12472__$1,inst_12470);
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
var statearr_12480 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12480[(0)] = cljs_draw$core$load_state_$_state_machine__8495__auto__);

(statearr_12480[(1)] = (1));

return statearr_12480;
});
var cljs_draw$core$load_state_$_state_machine__8495__auto____1 = (function (state_12472){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_12472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e12481){if((e12481 instanceof Object)){
var ex__8498__auto__ = e12481;
var statearr_12482_12484 = state_12472;
(statearr_12482_12484[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12485 = state_12472;
state_12472 = G__12485;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$load_state_$_state_machine__8495__auto__ = function(state_12472){
switch(arguments.length){
case 0:
return cljs_draw$core$load_state_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$load_state_$_state_machine__8495__auto____1.call(this,state_12472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$load_state_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$load_state_$_state_machine__8495__auto____0;
cljs_draw$core$load_state_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$load_state_$_state_machine__8495__auto____1;
return cljs_draw$core$load_state_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__))
})();
var state__8517__auto__ = (function (){var statearr_12483 = f__8516__auto__.call(null);
(statearr_12483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_12483;
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
var vec__12487 = point;
var x = cljs.core.nth.call(null,vec__12487,(0),null);
var y = cljs.core.nth.call(null,vec__12487,(1),null);
cljs_draw.core.stroke_history = cljs.core.conj.call(null,cljs_draw.core.stroke_history,cljs_draw.core.current_mesh.getNumVertices());

return cljs_draw.core.current_mesh.setCurrentPos(x,y,x,y);
});
cljs_draw.core.add_face = (function cljs_draw$core$add_face(mesh,p1,p2,p3,v1,v2,v3){
mesh.addVertex(cljs.core.nth.call(null,p1,(0)),cljs.core.nth.call(null,p1,(1)),v1);

mesh.addVertex(cljs.core.nth.call(null,p2,(0)),cljs.core.nth.call(null,p2,(1)),v2);

return mesh.addVertex(cljs.core.nth.call(null,p3,(0)),cljs.core.nth.call(null,p3,(1)),v3);
});
cljs_draw.core.__GT_poly_points = (function cljs_draw$core$__GT_poly_points(points){
return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p){
return (new poly2tri.Point(cljs.core.nth.call(null,p,(0)),cljs.core.nth.call(null,p,(1))));
}),points));
});
cljs_draw.core.__GT_vec2 = (function cljs_draw$core$__GT_vec2(poly_point){
return thi.ng.geom.core.vector.vec2.call(null,poly_point.x,poly_point.y);
});
cljs_draw.core.vec_equals = (function cljs_draw$core$vec_equals(v1,v2){
var and__4938__auto__ = thi.ng.math.core.delta_EQ_.call(null,cljs.core.nth.call(null,v1,(0)),cljs.core.nth.call(null,v2,(0)));
if(cljs.core.truth_(and__4938__auto__)){
return thi.ng.math.core.delta_EQ_.call(null,cljs.core.nth.call(null,v1,(1)),cljs.core.nth.call(null,v2,(1)));
} else {
return and__4938__auto__;
}
});
cljs_draw.core.get_alpha = (function cljs_draw$core$get_alpha(p,c1,c2,c3,c4,middle,m1,m2){
if(cljs.core.truth_(cljs_draw.core.vec_equals.call(null,p,c1))){
return (0);
} else {
if(cljs.core.truth_(cljs_draw.core.vec_equals.call(null,p,c2))){
return (1);
} else {
if(cljs.core.truth_(cljs_draw.core.vec_equals.call(null,p,c3))){
return (0);
} else {
if(cljs.core.truth_(cljs_draw.core.vec_equals.call(null,p,c4))){
return (1);
} else {
if(cljs.core.truth_(cljs_draw.core.vec_equals.call(null,p,middle))){
return .5;
} else {
if(cljs.core.truth_(cljs_draw.core.vec_equals.call(null,p,m1))){
return .5;
} else {
if(cljs.core.truth_(cljs_draw.core.vec_equals.call(null,p,m2))){
return .5;
} else {
return null;
}
}
}
}
}
}
}
});
cljs_draw.core.add_to_stroke = (function cljs_draw$core$add_to_stroke(point,pressure){
var width = (Math.pow(pressure,(2)) * (20));
var current_pos = cljs_draw.core.current_mesh.getCurrentPos();
var last_point1 = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(0)),cljs.core.nth.call(null,current_pos,(1)));
var last_point2 = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(2)),cljs.core.nth.call(null,current_pos,(3)));
var last_edge = thi.ng.geom.core.div.call(null,thi.ng.geom.core._.call(null,last_point2,last_point1),(2));
var last_middle = thi.ng.geom.core._PLUS_.call(null,last_point1,last_edge);
var vec = thi.ng.geom.core._.call(null,thi.ng.geom.core.vector.vec2.call(null,point),last_middle);
if((thi.ng.geom.core.dot.call(null,vec,vec) > (2))){
var normalized = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normalize.call(null,vec),width);
var r1 = thi.ng.geom.core.rotate.call(null,normalized,(thi.ng.math.core.PI / (2)));
var r2 = thi.ng.geom.core.rotate.call(null,normalized,(thi.ng.math.core.PI / (-2)));
var c1 = thi.ng.geom.core._PLUS_.call(null,point,r1);
var c2 = thi.ng.geom.core._PLUS_.call(null,point,r2);
var c3 = last_point1;
var c4 = last_point2;
var middle = thi.ng.geom.core._PLUS_.call(null,last_middle,thi.ng.geom.core.div.call(null,vec,(2)));
var swctx = (new poly2tri.SweepContext(cljs_draw.core.__GT_poly_points.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,point,c2,c4,last_middle,c3], null))));
if(cljs.core.truth_(cljs_draw.core.vec_equals.call(null,last_point1,last_point2))){
cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,last_point1,c1,point);

cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,last_point1,point,c2);
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
var map__12493 = cljs_draw.core.renderer;
var map__12493__$1 = ((cljs.core.seq_QMARK_.call(null,map__12493))?cljs.core.apply.call(null,cljs.core.hash_map,map__12493):map__12493);
var gl = cljs.core.get.call(null,map__12493__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var driver = cljs.core.get.call(null,map__12493__$1,new cljs.core.Keyword(null,"driver","driver",1515263546));
var program = cljs.core.get.call(null,map__12493__$1,new cljs.core.Keyword(null,"program","program",781564284));
var pers = cljs.core.get.call(null,map__12493__$1,new cljs.core.Keyword(null,"pers","pers",-1016576635));
var mv = thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.matrix44.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null));
gl.clear(gl.COLOR_BUFFER_BIT);

var seq__12494_12498 = cljs.core.seq.call(null,cljs_draw.core.paint_meshes);
var chunk__12495_12499 = null;
var count__12496_12500 = (0);
var i__12497_12501 = (0);
while(true){
if((i__12497_12501 < count__12496_12500)){
var mesh_12502 = cljs.core._nth.call(null,chunk__12495_12499,i__12497_12501);
cljs_draw.core.render_mesh.call(null,mesh_12502,driver,program,pers,mv);

var G__12503 = seq__12494_12498;
var G__12504 = chunk__12495_12499;
var G__12505 = count__12496_12500;
var G__12506 = (i__12497_12501 + (1));
seq__12494_12498 = G__12503;
chunk__12495_12499 = G__12504;
count__12496_12500 = G__12505;
i__12497_12501 = G__12506;
continue;
} else {
var temp__4422__auto___12507 = cljs.core.seq.call(null,seq__12494_12498);
if(temp__4422__auto___12507){
var seq__12494_12508__$1 = temp__4422__auto___12507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12494_12508__$1)){
var c__5735__auto___12509 = cljs.core.chunk_first.call(null,seq__12494_12508__$1);
var G__12510 = cljs.core.chunk_rest.call(null,seq__12494_12508__$1);
var G__12511 = c__5735__auto___12509;
var G__12512 = cljs.core.count.call(null,c__5735__auto___12509);
var G__12513 = (0);
seq__12494_12498 = G__12510;
chunk__12495_12499 = G__12511;
count__12496_12500 = G__12512;
i__12497_12501 = G__12513;
continue;
} else {
var mesh_12514 = cljs.core.first.call(null,seq__12494_12508__$1);
cljs_draw.core.render_mesh.call(null,mesh_12514,driver,program,pers,mv);

var G__12515 = cljs.core.next.call(null,seq__12494_12508__$1);
var G__12516 = null;
var G__12517 = (0);
var G__12518 = (0);
seq__12494_12498 = G__12515;
chunk__12495_12499 = G__12516;
count__12496_12500 = G__12517;
i__12497_12501 = G__12518;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs_draw.core.current_mesh)){
return cljs_draw.core.render_mesh.call(null,cljs_draw.core.current_mesh,driver,program,pers,mv);
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
var c__8515__auto___12613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___12613,in$,out){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___12613,in$,out){
return (function (state_12593){
var state_val_12594 = (state_12593[(1)]);
if((state_val_12594 === (7))){
var inst_12576 = (state_12593[(2)]);
var inst_12577 = cljs.core.nth.call(null,inst_12576,(0),null);
var inst_12578 = cljs.core.nth.call(null,inst_12576,(1),null);
var inst_12579 = cljs.core._EQ_.call(null,inst_12578,in$);
var state_12593__$1 = (function (){var statearr_12595 = state_12593;
(statearr_12595[(7)] = inst_12577);

return statearr_12595;
})();
if(inst_12579){
var statearr_12596_12614 = state_12593__$1;
(statearr_12596_12614[(1)] = (8));

} else {
var statearr_12597_12615 = state_12593__$1;
(statearr_12597_12615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (1))){
var state_12593__$1 = state_12593;
var statearr_12598_12616 = state_12593__$1;
(statearr_12598_12616[(2)] = null);

(statearr_12598_12616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (4))){
var inst_12568 = (state_12593[(2)]);
var state_12593__$1 = (function (){var statearr_12599 = state_12593;
(statearr_12599[(8)] = inst_12568);

return statearr_12599;
})();
var statearr_12600_12617 = state_12593__$1;
(statearr_12600_12617[(2)] = null);

(statearr_12600_12617[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (6))){
var inst_12588 = (state_12593[(2)]);
var state_12593__$1 = (function (){var statearr_12601 = state_12593;
(statearr_12601[(9)] = inst_12588);

return statearr_12601;
})();
var statearr_12602_12618 = state_12593__$1;
(statearr_12602_12618[(2)] = null);

(statearr_12602_12618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (3))){
var inst_12591 = (state_12593[(2)]);
var state_12593__$1 = state_12593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12593__$1,inst_12591);
} else {
if((state_val_12594 === (2))){
var state_12593__$1 = state_12593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12593__$1,(4),in$);
} else {
if((state_val_12594 === (11))){
var inst_12584 = (state_12593[(2)]);
var state_12593__$1 = state_12593;
var statearr_12603_12619 = state_12593__$1;
(statearr_12603_12619[(2)] = inst_12584);

(statearr_12603_12619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (9))){
var state_12593__$1 = state_12593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12593__$1,(11),out,true);
} else {
if((state_val_12594 === (5))){
var inst_12571 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12572 = cljs.core.async.timeout.call(null,ms);
var inst_12573 = [in$,inst_12572];
var inst_12574 = (new cljs.core.PersistentVector(null,2,(5),inst_12571,inst_12573,null));
var state_12593__$1 = state_12593;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12593__$1,(7),inst_12574);
} else {
if((state_val_12594 === (10))){
var inst_12586 = (state_12593[(2)]);
var state_12593__$1 = state_12593;
var statearr_12604_12620 = state_12593__$1;
(statearr_12604_12620[(2)] = inst_12586);

(statearr_12604_12620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (8))){
var state_12593__$1 = state_12593;
var statearr_12605_12621 = state_12593__$1;
(statearr_12605_12621[(2)] = null);

(statearr_12605_12621[(1)] = (5));


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
});})(c__8515__auto___12613,in$,out))
;
return ((function (switch__8494__auto__,c__8515__auto___12613,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0 = (function (){
var statearr_12609 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12609[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__);

(statearr_12609[(1)] = (1));

return statearr_12609;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1 = (function (state_12593){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_12593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e12610){if((e12610 instanceof Object)){
var ex__8498__auto__ = e12610;
var statearr_12611_12622 = state_12593;
(statearr_12611_12622[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12623 = state_12593;
state_12593 = G__12623;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__ = function(state_12593){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1.call(this,state_12593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___12613,in$,out))
})();
var state__8517__auto__ = (function (){var statearr_12612 = f__8516__auto__.call(null);
(statearr_12612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___12613);

return statearr_12612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___12613,in$,out))
);


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),in$,new cljs.core.Keyword(null,"output","output",-1105869043),out], null);
});
cljs_draw.core.color_input = (function cljs_draw$core$color_input(data,owner){
if(typeof cljs_draw.core.t12627 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t12627 = (function (color_input,data,owner,meta12628){
this.color_input = color_input;
this.data = data;
this.owner = owner;
this.meta12628 = meta12628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t12627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12629,meta12628__$1){
var self__ = this;
var _12629__$1 = this;
return (new cljs_draw.core.t12627(self__.color_input,self__.data,self__.owner,meta12628__$1));
});

cljs_draw.core.t12627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12629){
var self__ = this;
var _12629__$1 = this;
return self__.meta12628;
});

cljs_draw.core.t12627.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t12627.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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

cljs_draw.core.t12627.prototype.om$core$IRender$ = true;

cljs_draw.core.t12627.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"type": "color", "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "style": {"width": (50), "height": (50), "border": (0)}});
});

cljs_draw.core.t12627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-input","color-input",696074651,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta12628","meta12628",-499076519,null)], null);
});

cljs_draw.core.t12627.cljs$lang$type = true;

cljs_draw.core.t12627.cljs$lang$ctorStr = "cljs_draw.core/t12627";

cljs_draw.core.t12627.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t12627");
});

cljs_draw.core.__GT_t12627 = (function cljs_draw$core$color_input_$___GT_t12627(color_input__$1,data__$1,owner__$1,meta12628){
return (new cljs_draw.core.t12627(color_input__$1,data__$1,owner__$1,meta12628));
});

}

return (new cljs_draw.core.t12627(cljs_draw$core$color_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t12708 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t12708 = (function (color_item,props,owner,meta12709){
this.color_item = color_item;
this.props = props;
this.owner = owner;
this.meta12709 = meta12709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t12708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12710,meta12709__$1){
var self__ = this;
var _12710__$1 = this;
return (new cljs_draw.core.t12708(self__.color_item,self__.props,self__.owner,meta12709__$1));
});

cljs_draw.core.t12708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12710){
var self__ = this;
var _12710__$1 = this;
return self__.meta12709;
});

cljs_draw.core.t12708.prototype.om$core$IInitState$ = true;

cljs_draw.core.t12708.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t12708.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t12708.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__12711 = om.core.get_state.call(null,self__.owner);
var map__12711__$1 = ((cljs.core.seq_QMARK_.call(null,map__12711))?cljs.core.apply.call(null,cljs.core.hash_map,map__12711):map__12711);
var mouseup = cljs.core.get.call(null,map__12711__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__12711__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__12711__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var hide_controls = cljs.core.get.call(null,map__12711__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var c__8515__auto___12786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___12786,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___12786,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_12743){
var state_val_12744 = (state_12743[(1)]);
if((state_val_12744 === (7))){
var inst_12731 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_12732 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_12743__$1 = (function (){var statearr_12745 = state_12743;
(statearr_12745[(7)] = inst_12731);

return statearr_12745;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12743__$1,(9),inst_12732,true);
} else {
if((state_val_12744 === (1))){
var state_12743__$1 = state_12743;
var statearr_12746_12787 = state_12743__$1;
(statearr_12746_12787[(2)] = null);

(statearr_12746_12787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12744 === (4))){
var inst_12714 = (state_12743[(2)]);
var inst_12716 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12717 = cljs.core.async.timeout.call(null,(500));
var inst_12718 = [mouseup,inst_12717];
var inst_12719 = (new cljs.core.PersistentVector(null,2,(5),inst_12716,inst_12718,null));
var state_12743__$1 = (function (){var statearr_12747 = state_12743;
(statearr_12747[(8)] = inst_12714);

return statearr_12747;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12743__$1,(5),inst_12719);
} else {
if((state_val_12744 === (6))){
var inst_12726 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_12727 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_12728 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_12729 = inst_12727.call(null,inst_12728);
var state_12743__$1 = (function (){var statearr_12748 = state_12743;
(statearr_12748[(9)] = inst_12726);

return statearr_12748;
})();
var statearr_12749_12788 = state_12743__$1;
(statearr_12749_12788[(2)] = inst_12729);

(statearr_12749_12788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12744 === (3))){
var inst_12741 = (state_12743[(2)]);
var state_12743__$1 = state_12743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12743__$1,inst_12741);
} else {
if((state_val_12744 === (2))){
var state_12743__$1 = state_12743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12743__$1,(4),mousedown);
} else {
if((state_val_12744 === (9))){
var inst_12734 = (state_12743[(2)]);
var state_12743__$1 = (function (){var statearr_12750 = state_12743;
(statearr_12750[(10)] = inst_12734);

return statearr_12750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12743__$1,(10),mouseup);
} else {
if((state_val_12744 === (5))){
var inst_12721 = (state_12743[(2)]);
var inst_12722 = cljs.core.nth.call(null,inst_12721,(0),null);
var inst_12723 = cljs.core.nth.call(null,inst_12721,(1),null);
var inst_12724 = cljs.core._EQ_.call(null,inst_12723,mouseup);
var state_12743__$1 = (function (){var statearr_12751 = state_12743;
(statearr_12751[(11)] = inst_12722);

return statearr_12751;
})();
if(inst_12724){
var statearr_12752_12789 = state_12743__$1;
(statearr_12752_12789[(1)] = (6));

} else {
var statearr_12753_12790 = state_12743__$1;
(statearr_12753_12790[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12744 === (10))){
var inst_12736 = (state_12743[(2)]);
var state_12743__$1 = state_12743;
var statearr_12754_12791 = state_12743__$1;
(statearr_12754_12791[(2)] = inst_12736);

(statearr_12754_12791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12744 === (8))){
var inst_12738 = (state_12743[(2)]);
var state_12743__$1 = (function (){var statearr_12755 = state_12743;
(statearr_12755[(12)] = inst_12738);

return statearr_12755;
})();
var statearr_12756_12792 = state_12743__$1;
(statearr_12756_12792[(2)] = null);

(statearr_12756_12792[(1)] = (2));


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
});})(c__8515__auto___12786,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8494__auto__,c__8515__auto___12786,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8495__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8495__auto____0 = (function (){
var statearr_12760 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12760[(0)] = cljs_draw$core$color_item_$_state_machine__8495__auto__);

(statearr_12760[(1)] = (1));

return statearr_12760;
});
var cljs_draw$core$color_item_$_state_machine__8495__auto____1 = (function (state_12743){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_12743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e12761){if((e12761 instanceof Object)){
var ex__8498__auto__ = e12761;
var statearr_12762_12793 = state_12743;
(statearr_12762_12793[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12794 = state_12743;
state_12743 = G__12794;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8495__auto__ = function(state_12743){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8495__auto____1.call(this,state_12743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8495__auto____0;
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8495__auto____1;
return cljs_draw$core$color_item_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___12786,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8517__auto__ = (function (){var statearr_12763 = f__8516__auto__.call(null);
(statearr_12763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___12786);

return statearr_12763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___12786,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);


var c__8515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto__,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto__,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_12773){
var state_val_12774 = (state_12773[(1)]);
if((state_val_12774 === (1))){
var state_12773__$1 = state_12773;
var statearr_12775_12795 = state_12773__$1;
(statearr_12775_12795[(2)] = null);

(statearr_12775_12795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12774 === (2))){
var inst_12765 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_12773__$1 = state_12773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12773__$1,(4),inst_12765);
} else {
if((state_val_12774 === (3))){
var inst_12771 = (state_12773[(2)]);
var state_12773__$1 = state_12773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12773__$1,inst_12771);
} else {
if((state_val_12774 === (4))){
var inst_12767 = (state_12773[(2)]);
var inst_12768 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_12773__$1 = (function (){var statearr_12776 = state_12773;
(statearr_12776[(7)] = inst_12768);

(statearr_12776[(8)] = inst_12767);

return statearr_12776;
})();
var statearr_12777_12796 = state_12773__$1;
(statearr_12777_12796[(2)] = null);

(statearr_12777_12796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8515__auto__,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8494__auto__,c__8515__auto__,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8495__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8495__auto____0 = (function (){
var statearr_12781 = [null,null,null,null,null,null,null,null,null];
(statearr_12781[(0)] = cljs_draw$core$color_item_$_state_machine__8495__auto__);

(statearr_12781[(1)] = (1));

return statearr_12781;
});
var cljs_draw$core$color_item_$_state_machine__8495__auto____1 = (function (state_12773){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_12773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e12782){if((e12782 instanceof Object)){
var ex__8498__auto__ = e12782;
var statearr_12783_12797 = state_12773;
(statearr_12783_12797[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12798 = state_12773;
state_12773 = G__12798;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8495__auto__ = function(state_12773){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8495__auto____1.call(this,state_12773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8495__auto____0;
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8495__auto____1;
return cljs_draw$core$color_item_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8517__auto__ = (function (){var statearr_12784 = f__8516__auto__.call(null);
(statearr_12784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_12784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__,map__12711,map__12711__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);

return c__8515__auto__;
});

cljs_draw.core.t12708.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t12708.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t12708.prototype.om$core$IRender$ = true;

cljs_draw.core.t12708.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__12785 = om.core.get_state.call(null,self__.owner);
var map__12785__$1 = ((cljs.core.seq_QMARK_.call(null,map__12785))?cljs.core.apply.call(null,cljs.core.hash_map,map__12785):map__12785);
var mouseup = cljs.core.get.call(null,map__12785__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__12785__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__12785__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
return React.DOM.div({"style": {"position": "relative", "width": (50), "height": (50)}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"href": "#", "onClick": ((function (map__12785,map__12785__$1,mouseup,mousedown,mouseout,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__12785,map__12785__$1,mouseup,mousedown,mouseout,___$1))
},"remove")),React.DOM.div({"onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "style": {"position": "absolute", "width": (50), "height": (50), "cursor": "pointer", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":"")}}));
});

cljs_draw.core.t12708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-item","color-item",934499434,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta12709","meta12709",1001877078,null)], null);
});

cljs_draw.core.t12708.cljs$lang$type = true;

cljs_draw.core.t12708.cljs$lang$ctorStr = "cljs_draw.core/t12708";

cljs_draw.core.t12708.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t12708");
});

cljs_draw.core.__GT_t12708 = (function cljs_draw$core$color_item_$___GT_t12708(color_item__$1,props__$1,owner__$1,meta12709){
return (new cljs_draw.core.t12708(color_item__$1,props__$1,owner__$1,meta12709));
});

}

return (new cljs_draw.core.t12708(cljs_draw$core$color_item,props,owner,cljs.core.PersistentArrayMap.EMPTY));
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
var program = gamma_driver.protocols.program.call(null,driver,cljs_draw.core.program_source);
var pers = cljs_draw.core.get_perspective_matrix.call(null,w,h);
gl.viewport((0),(0),(w * (2)),(h * (2)));

gl.clearColor((1),(1),(1),(1));

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);

gl.enable(gl.BLEND);

gl.disable(gl.DEPTH_TEST);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gl","gl",-246422634),gl,new cljs.core.Keyword(null,"driver","driver",1515263546),driver,new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"pers","pers",-1016576635),pers], null);
});
cljs_draw.core.app = (function cljs_draw$core$app(data,owner){
if(typeof cljs_draw.core.t12961 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t12961 = (function (app,data,owner,meta12962){
this.app = app;
this.data = data;
this.owner = owner;
this.meta12962 = meta12962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t12961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12963,meta12962__$1){
var self__ = this;
var _12963__$1 = this;
return (new cljs_draw.core.t12961(self__.app,self__.data,self__.owner,meta12962__$1));
});

cljs_draw.core.t12961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12963){
var self__ = this;
var _12963__$1 = this;
return self__.meta12962;
});

cljs_draw.core.t12961.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t12961.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvas = node.querySelector("canvas");
cljs_draw.core.renderer = cljs_draw.core.init.call(null,canvas);

cljs_draw.core.render_loop.call(null);

cljs_draw.core.current_mesh = (new Mesh2d("#000000"));

cljs_draw.core.start_stroke.call(null,thi.ng.geom.core.vector.vec2.call(null,(100),(100)));

cljs_draw.core.add_to_stroke.call(null,thi.ng.geom.core.vector.vec2.call(null,(200),(200)),(2));

cljs_draw.core.add_to_stroke.call(null,thi.ng.geom.core.vector.vec2.call(null,(300),(300)),(2));

cljs_draw.core.add_to_stroke.call(null,thi.ng.geom.core.vector.vec2.call(null,(310),(395)),(3));

cljs_draw.core.add_to_stroke.call(null,thi.ng.geom.core.vector.vec2.call(null,(390),(500)),(3));

var moved_13123 = cljs_draw.util.listen.call(null,container,"pointermove");
var c__8515__auto___13124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___13124,moved_13123,node,container,canvas,this$__$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___13124,moved_13123,node,container,canvas,this$__$1){
return (function (state_13027){
var state_val_13028 = (state_13027[(1)]);
if((state_val_13028 === (7))){
var inst_13023 = (state_13027[(2)]);
var state_13027__$1 = state_13027;
var statearr_13029_13125 = state_13027__$1;
(statearr_13029_13125[(2)] = inst_13023);

(statearr_13029_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (20))){
var inst_12998 = cljs.core.not.call(null,cljs_draw.core.current_mesh);
var state_13027__$1 = state_13027;
if(inst_12998){
var statearr_13030_13126 = state_13027__$1;
(statearr_13030_13126[(1)] = (23));

} else {
var statearr_13031_13127 = state_13027__$1;
(statearr_13031_13127[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (27))){
var state_13027__$1 = state_13027;
var statearr_13032_13128 = state_13027__$1;
(statearr_13032_13128[(2)] = null);

(statearr_13032_13128[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (1))){
var inst_12964 = (0);
var state_13027__$1 = (function (){var statearr_13033 = state_13027;
(statearr_13033[(7)] = inst_12964);

return statearr_13033;
})();
var statearr_13034_13129 = state_13027__$1;
(statearr_13034_13129[(2)] = null);

(statearr_13034_13129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (24))){
var state_13027__$1 = state_13027;
var statearr_13035_13130 = state_13027__$1;
(statearr_13035_13130[(2)] = null);

(statearr_13035_13130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (4))){
var inst_12967 = (state_13027[(8)]);
var inst_12967__$1 = (state_13027[(2)]);
var state_13027__$1 = (function (){var statearr_13036 = state_13027;
(statearr_13036[(8)] = inst_12967__$1);

return statearr_13036;
})();
if(cljs.core.truth_(inst_12967__$1)){
var statearr_13037_13131 = state_13027__$1;
(statearr_13037_13131[(1)] = (5));

} else {
var statearr_13038_13132 = state_13027__$1;
(statearr_13038_13132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (15))){
var state_13027__$1 = state_13027;
var statearr_13039_13133 = state_13027__$1;
(statearr_13039_13133[(2)] = cljs_draw.core.current_mesh);

(statearr_13039_13133[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (21))){
var state_13027__$1 = state_13027;
var statearr_13040_13134 = state_13027__$1;
(statearr_13040_13134[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (13))){
var inst_13017 = (state_13027[(2)]);
var state_13027__$1 = state_13027;
var statearr_13042_13135 = state_13027__$1;
(statearr_13042_13135[(2)] = inst_13017);

(statearr_13042_13135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (22))){
var inst_13015 = (state_13027[(2)]);
var state_13027__$1 = state_13027;
var statearr_13043_13136 = state_13027__$1;
(statearr_13043_13136[(2)] = inst_13015);

(statearr_13043_13136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (6))){
var state_13027__$1 = state_13027;
var statearr_13044_13137 = state_13027__$1;
(statearr_13044_13137[(2)] = null);

(statearr_13044_13137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (28))){
var inst_13013 = (state_13027[(2)]);
var state_13027__$1 = state_13027;
var statearr_13045_13138 = state_13027__$1;
(statearr_13045_13138[(2)] = inst_13013);

(statearr_13045_13138[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (25))){
var inst_12973 = (state_13027[(9)]);
var inst_13006 = (state_13027[(2)]);
var inst_13007 = cljs_draw.core.start_stroke.call(null,inst_12973);
var state_13027__$1 = (function (){var statearr_13046 = state_13027;
(statearr_13046[(10)] = inst_13006);

return statearr_13046;
})();
var statearr_13047_13139 = state_13027__$1;
(statearr_13047_13139[(2)] = inst_13007);

(statearr_13047_13139[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (17))){
var inst_12991 = cljs_draw.core.finalize_stroke.call(null);
var state_13027__$1 = state_13027;
var statearr_13048_13140 = state_13027__$1;
(statearr_13048_13140[(2)] = inst_12991);

(statearr_13048_13140[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (3))){
var inst_13025 = (state_13027[(2)]);
var state_13027__$1 = state_13027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13027__$1,inst_13025);
} else {
if((state_val_13028 === (12))){
var inst_12964 = (state_13027[(7)]);
var inst_12996 = cljs.core._EQ_.call(null,inst_12964,(0));
var state_13027__$1 = state_13027;
if(inst_12996){
var statearr_13049_13141 = state_13027__$1;
(statearr_13049_13141[(1)] = (20));

} else {
var statearr_13050_13142 = state_13027__$1;
(statearr_13050_13142[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (2))){
var state_13027__$1 = state_13027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13027__$1,(4),moved_13123);
} else {
if((state_val_13028 === (23))){
var inst_13000 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_13001 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_13000);
var inst_13002 = (new Mesh2d(inst_13001));
var inst_13003 = cljs_draw.core.current_mesh = inst_13002;
var state_13027__$1 = state_13027;
var statearr_13051_13143 = state_13027__$1;
(statearr_13051_13143[(2)] = inst_13003);

(statearr_13051_13143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (19))){
var inst_12994 = (state_13027[(2)]);
var state_13027__$1 = state_13027;
var statearr_13052_13144 = state_13027__$1;
(statearr_13052_13144[(2)] = inst_12994);

(statearr_13052_13144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (11))){
var state_13027__$1 = state_13027;
if(cljs.core.truth_(cljs_draw.core.current_mesh)){
var statearr_13053_13145 = state_13027__$1;
(statearr_13053_13145[(1)] = (14));

} else {
var statearr_13054_13146 = state_13027__$1;
(statearr_13054_13146[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (9))){
var inst_12974 = (state_13027[(11)]);
var inst_12980 = cljs.core._EQ_.call(null,inst_12974,(0));
var state_13027__$1 = state_13027;
if(inst_12980){
var statearr_13055_13147 = state_13027__$1;
(statearr_13055_13147[(1)] = (11));

} else {
var statearr_13056_13148 = state_13027__$1;
(statearr_13056_13148[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (5))){
var inst_12967 = (state_13027[(8)]);
var inst_12969 = inst_12967.layerX;
var inst_12970 = (inst_12969 - cljs_draw.core.boundary);
var inst_12971 = inst_12967.layerY;
var inst_12972 = (inst_12971 - cljs_draw.core.boundary);
var inst_12973 = thi.ng.geom.core.vector.vec2.call(null,inst_12970,inst_12972);
var inst_12974 = inst_12967.mozPressure;
var inst_12975 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_12976 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_12975);
var inst_12977 = cljs.core.not.call(null,inst_12976);
var state_13027__$1 = (function (){var statearr_13057 = state_13027;
(statearr_13057[(9)] = inst_12973);

(statearr_13057[(11)] = inst_12974);

return statearr_13057;
})();
if(inst_12977){
var statearr_13058_13149 = state_13027__$1;
(statearr_13058_13149[(1)] = (8));

} else {
var statearr_13059_13150 = state_13027__$1;
(statearr_13059_13150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (14))){
var inst_12983 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_12984 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_12983);
var inst_12985 = cljs_draw.core.current_mesh.isColor(inst_12984);
var inst_12986 = cljs.core.not.call(null,inst_12985);
var state_13027__$1 = state_13027;
var statearr_13060_13151 = state_13027__$1;
(statearr_13060_13151[(2)] = inst_12986);

(statearr_13060_13151[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (26))){
var inst_12973 = (state_13027[(9)]);
var inst_12974 = (state_13027[(11)]);
var inst_13010 = cljs_draw.core.add_to_stroke.call(null,inst_12973,inst_12974);
var state_13027__$1 = state_13027;
var statearr_13061_13152 = state_13027__$1;
(statearr_13061_13152[(2)] = inst_13010);

(statearr_13061_13152[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (16))){
var inst_12989 = (state_13027[(2)]);
var state_13027__$1 = state_13027;
if(cljs.core.truth_(inst_12989)){
var statearr_13062_13153 = state_13027__$1;
(statearr_13062_13153[(1)] = (17));

} else {
var statearr_13063_13154 = state_13027__$1;
(statearr_13063_13154[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (10))){
var inst_12974 = (state_13027[(11)]);
var inst_13019 = (state_13027[(2)]);
var inst_12964 = inst_12974;
var state_13027__$1 = (function (){var statearr_13064 = state_13027;
(statearr_13064[(12)] = inst_13019);

(statearr_13064[(7)] = inst_12964);

return statearr_13064;
})();
var statearr_13065_13155 = state_13027__$1;
(statearr_13065_13155[(2)] = null);

(statearr_13065_13155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (18))){
var state_13027__$1 = state_13027;
var statearr_13066_13156 = state_13027__$1;
(statearr_13066_13156[(2)] = null);

(statearr_13066_13156[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13028 === (8))){
var state_13027__$1 = state_13027;
var statearr_13067_13157 = state_13027__$1;
(statearr_13067_13157[(2)] = null);

(statearr_13067_13157[(1)] = (10));


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
});})(c__8515__auto___13124,moved_13123,node,container,canvas,this$__$1))
;
return ((function (switch__8494__auto__,c__8515__auto___13124,moved_13123,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8495__auto__ = null;
var cljs_draw$core$app_$_state_machine__8495__auto____0 = (function (){
var statearr_13071 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13071[(0)] = cljs_draw$core$app_$_state_machine__8495__auto__);

(statearr_13071[(1)] = (1));

return statearr_13071;
});
var cljs_draw$core$app_$_state_machine__8495__auto____1 = (function (state_13027){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_13027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e13072){if((e13072 instanceof Object)){
var ex__8498__auto__ = e13072;
var statearr_13073_13158 = state_13027;
(statearr_13073_13158[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13159 = state_13027;
state_13027 = G__13159;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8495__auto__ = function(state_13027){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8495__auto____1.call(this,state_13027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8495__auto____0;
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8495__auto____1;
return cljs_draw$core$app_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___13124,moved_13123,node,container,canvas,this$__$1))
})();
var state__8517__auto__ = (function (){var statearr_13074 = f__8516__auto__.call(null);
(statearr_13074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___13124);

return statearr_13074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___13124,moved_13123,node,container,canvas,this$__$1))
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
return (function (state_13097){
var state_val_13098 = (state_13097[(1)]);
if((state_val_13098 === (7))){
var inst_13092 = (state_13097[(2)]);
var state_13097__$1 = (function (){var statearr_13099 = state_13097;
(statearr_13099[(7)] = inst_13092);

return statearr_13099;
})();
var statearr_13100_13160 = state_13097__$1;
(statearr_13100_13160[(2)] = null);

(statearr_13100_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (1))){
var state_13097__$1 = state_13097;
var statearr_13101_13161 = state_13097__$1;
(statearr_13101_13161[(2)] = null);

(statearr_13101_13161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (4))){
var inst_13077 = (state_13097[(8)]);
var inst_13077__$1 = (state_13097[(2)]);
var inst_13078 = inst_13077__$1.metaKey;
var state_13097__$1 = (function (){var statearr_13102 = state_13097;
(statearr_13102[(8)] = inst_13077__$1);

return statearr_13102;
})();
if(cljs.core.truth_(inst_13078)){
var statearr_13103_13162 = state_13097__$1;
(statearr_13103_13162[(1)] = (5));

} else {
var statearr_13104_13163 = state_13097__$1;
(statearr_13104_13163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (6))){
var state_13097__$1 = state_13097;
var statearr_13105_13164 = state_13097__$1;
(statearr_13105_13164[(2)] = null);

(statearr_13105_13164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (3))){
var inst_13095 = (state_13097[(2)]);
var state_13097__$1 = state_13097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13097__$1,inst_13095);
} else {
if((state_val_13098 === (12))){
var state_13097__$1 = state_13097;
var statearr_13106_13165 = state_13097__$1;
(statearr_13106_13165[(2)] = new cljs.core.Keyword(null,"else","else",-1508377146));

(statearr_13106_13165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (2))){
var state_13097__$1 = state_13097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13097__$1,(4),keydown);
} else {
if((state_val_13098 === (11))){
var inst_13084 = cljs_draw.core.clear_canvas.call(null);
var state_13097__$1 = state_13097;
var statearr_13107_13166 = state_13097__$1;
(statearr_13107_13166[(2)] = inst_13084);

(statearr_13107_13166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (9))){
var inst_13080 = cljs_draw.core.save_state.call(null);
var state_13097__$1 = state_13097;
var statearr_13108_13167 = state_13097__$1;
(statearr_13108_13167[(2)] = inst_13080);

(statearr_13108_13167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (5))){
var inst_13077 = (state_13097[(8)]);
var inst_13087 = inst_13077.keyCode;
var state_13097__$1 = state_13097;
var G__13109_13168 = inst_13087;
switch (G__13109_13168) {
case (83):
var statearr_13110_13170 = state_13097__$1;
(statearr_13110_13170[(1)] = (9));


break;
case (90):
var statearr_13111_13171 = state_13097__$1;
(statearr_13111_13171[(1)] = (10));


break;
case (67):
var statearr_13112_13172 = state_13097__$1;
(statearr_13112_13172[(1)] = (11));


break;
default:
var statearr_13113_13173 = state_13097__$1;
(statearr_13113_13173[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (10))){
var inst_13082 = cljs_draw.core.undo.call(null);
var state_13097__$1 = state_13097;
var statearr_13114_13174 = state_13097__$1;
(statearr_13114_13174[(2)] = inst_13082);

(statearr_13114_13174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (8))){
var inst_13089 = (state_13097[(2)]);
var state_13097__$1 = state_13097;
var statearr_13115_13175 = state_13097__$1;
(statearr_13115_13175[(2)] = inst_13089);

(statearr_13115_13175[(1)] = (7));


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
var statearr_13119 = [null,null,null,null,null,null,null,null,null];
(statearr_13119[(0)] = cljs_draw$core$app_$_state_machine__8495__auto__);

(statearr_13119[(1)] = (1));

return statearr_13119;
});
var cljs_draw$core$app_$_state_machine__8495__auto____1 = (function (state_13097){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_13097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e13120){if((e13120 instanceof Object)){
var ex__8498__auto__ = e13120;
var statearr_13121_13176 = state_13097;
(statearr_13121_13176[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13177 = state_13097;
state_13097 = G__13177;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8495__auto__ = function(state_13097){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8495__auto____1.call(this,state_13097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8495__auto____0;
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8495__auto____1;
return cljs_draw$core$app_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__,keydown,node,container,canvas,this$__$1))
})();
var state__8517__auto__ = (function (){var statearr_13122 = f__8516__auto__.call(null);
(statearr_13122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_13122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__,keydown,node,container,canvas,this$__$1))
);

return c__8515__auto__;
});

cljs_draw.core.t12961.prototype.om$core$IRender$ = true;

cljs_draw.core.t12961.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "app", "style": {"height": "100%", "backgroundColor": "#222222"}},React.DOM.div({"className": "canvas-container", "style": {"bottom": (0), "top": (0), "overflow": "hidden", "width": ((cljs_draw.core.dimen / (2)) + (cljs_draw.core.boundary * (2))), "cursor": "crosshair", "padding": (50), "right": (0), "position": "absolute", "border": "1px solid #2f2f2f", "height": ((cljs_draw.core.dimen / (2)) + (cljs_draw.core.boundary * (2))), "left": (0), "margin": "auto"}},React.DOM.canvas({"width": cljs_draw.core.dimen, "height": cljs_draw.core.dimen, "style": {"width": (cljs_draw.core.dimen / (2)), "height": (cljs_draw.core.dimen / (2))}})),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t12961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta12962","meta12962",-52013938,null)], null);
});

cljs_draw.core.t12961.cljs$lang$type = true;

cljs_draw.core.t12961.cljs$lang$ctorStr = "cljs_draw.core/t12961";

cljs_draw.core.t12961.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t12961");
});

cljs_draw.core.__GT_t12961 = (function cljs_draw$core$app_$___GT_t12961(app__$1,data__$1,owner__$1,meta12962){
return (new cljs_draw.core.t12961(app__$1,data__$1,owner__$1,meta12962));
});

}

return (new cljs_draw.core.t12961(cljs_draw$core$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map