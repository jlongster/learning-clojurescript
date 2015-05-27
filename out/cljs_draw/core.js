// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs_draw.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('gamma_driver.drivers.basic');
goog.require('gamma.program');
goog.require('om.dom');
goog.require('goog.color');
goog.require('thi.ng.geom.core');
goog.require('clojure.browser.repl');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
goog.require('cljs.core.async');
goog.require('gamma.api');
goog.require('gamma_driver.api');
goog.require('cljs_draw.util');
goog.require('gamma_driver.protocols');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof cljs_draw.core.app_state !== 'undefined'){
} else {
cljs_draw.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#bbffbb"], null),new cljs.core.Keyword(null,"current-color","current-color",1731984119),"#bbffbb",new cljs.core.Keyword(null,"listening-for-color","listening-for-color",-341629494),false], null));
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
cljs_draw.core.a_position = gamma.api.attribute.call(null,"aVertexPosition",new cljs.core.Keyword(null,"vec2","vec2",-762258640));
cljs_draw.core.program_source = gamma.program.program.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),gamma.api._STAR_.call(null,gamma.api._STAR_.call(null,cljs_draw.core.u_p_matrix,cljs_draw.core.u_mv_matrix),gamma.api.vec4.call(null,cljs_draw.core.a_position,(0),(1)))], true, false),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,cljs_draw.core.u_color,(1))], true, false),new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"mediump","mediump",-1401096909)], null)], null));
cljs_draw.core.renderable = (function cljs_draw$core$renderable(p,mv,color,vertices,vertex_count){
return new cljs.core.PersistentArrayMap.fromArray([cljs_draw.core.u_p_matrix,p,cljs_draw.core.u_mv_matrix,mv,cljs_draw.core.u_color,cljs.core.vec.call(null,color),cljs_draw.core.a_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),vertices,new cljs.core.Keyword(null,"count","count",2139924085),vertex_count], null)], true, false);
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
return (function (state_9456){
var state_val_9457 = (state_9456[(1)]);
if((state_val_9457 === (1))){
var inst_9439 = (function (){return ((function (state_val_9457,c__8515__auto__){
return (function (data){
return Mesh2d.unserialize(data);
});
;})(state_val_9457,c__8515__auto__))
})();
var inst_9440 = cljs_draw.util.get_from_storage.call(null,"meshes");
var state_9456__$1 = (function (){var statearr_9458 = state_9456;
(statearr_9458[(7)] = inst_9439);

return statearr_9458;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9456__$1,(2),inst_9440);
} else {
if((state_val_9457 === (2))){
var inst_9439 = (state_9456[(7)]);
var inst_9442 = (state_9456[(2)]);
var inst_9443 = cljs.core.mapv.call(null,inst_9439,inst_9442);
var inst_9444 = cljs_draw.core.paint_meshes = inst_9443;
var inst_9445 = cljs_draw.util.get_from_storage.call(null,"current-mesh");
var state_9456__$1 = (function (){var statearr_9459 = state_9456;
(statearr_9459[(8)] = inst_9444);

return statearr_9459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9456__$1,(3),inst_9445);
} else {
if((state_val_9457 === (3))){
var inst_9447 = (state_9456[(2)]);
var inst_9448 = Mesh2d.unserialize(inst_9447);
var inst_9449 = cljs_draw.core.current_mesh = inst_9448;
var inst_9450 = cljs_draw.util.get_from_storage.call(null,"app-state");
var state_9456__$1 = (function (){var statearr_9460 = state_9456;
(statearr_9460[(9)] = inst_9449);

return statearr_9460;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9456__$1,(4),inst_9450);
} else {
if((state_val_9457 === (4))){
var inst_9452 = (state_9456[(2)]);
var inst_9453 = (function (){var state = inst_9452;
return ((function (state,inst_9452,state_val_9457,c__8515__auto__){
return (function (x){
return cljs.core.js__GT_clj.call(null,state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
;})(state,inst_9452,state_val_9457,c__8515__auto__))
})();
var inst_9454 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,inst_9453);
var state_9456__$1 = state_9456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9456__$1,inst_9454);
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
var statearr_9464 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9464[(0)] = cljs_draw$core$load_state_$_state_machine__8495__auto__);

(statearr_9464[(1)] = (1));

return statearr_9464;
});
var cljs_draw$core$load_state_$_state_machine__8495__auto____1 = (function (state_9456){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_9456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e9465){if((e9465 instanceof Object)){
var ex__8498__auto__ = e9465;
var statearr_9466_9468 = state_9456;
(statearr_9466_9468[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9469 = state_9456;
state_9456 = G__9469;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$load_state_$_state_machine__8495__auto__ = function(state_9456){
switch(arguments.length){
case 0:
return cljs_draw$core$load_state_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$load_state_$_state_machine__8495__auto____1.call(this,state_9456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$load_state_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$load_state_$_state_machine__8495__auto____0;
cljs_draw$core$load_state_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$load_state_$_state_machine__8495__auto____1;
return cljs_draw$core$load_state_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__))
})();
var state__8517__auto__ = (function (){var statearr_9467 = f__8516__auto__.call(null);
(statearr_9467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_9467;
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
var vec__9471 = point;
var x = cljs.core.nth.call(null,vec__9471,(0),null);
var y = cljs.core.nth.call(null,vec__9471,(1),null);
cljs_draw.core.stroke_history = cljs.core.conj.call(null,cljs_draw.core.stroke_history,cljs_draw.core.current_mesh.getPointer());

return cljs_draw.core.current_mesh.setCurrentPos(x,y,x,y);
});
cljs_draw.core.add_face = (function cljs_draw$core$add_face(mesh,p1,p2,p3){
return mesh.addFace(cljs.core.nth.call(null,p1,(0)),cljs.core.nth.call(null,p1,(1)),cljs.core.nth.call(null,p2,(0)),cljs.core.nth.call(null,p2,(1)),cljs.core.nth.call(null,p3,(0)),cljs.core.nth.call(null,p3,(1)));
});
cljs_draw.core.add_to_stroke = (function cljs_draw$core$add_to_stroke(point,pressure){
var width = (Math.pow(pressure,(2)) * (20));
var current_pos = cljs_draw.core.current_mesh.getCurrentPos();
var last_point1 = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(0)),cljs.core.nth.call(null,current_pos,(1)));
var last_point2 = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(2)),cljs.core.nth.call(null,current_pos,(3)));
var last_middle = thi.ng.geom.core._PLUS_.call(null,last_point1,thi.ng.geom.core.div.call(null,thi.ng.geom.core._.call(null,last_point2,last_point1),(2)));
var vec = thi.ng.geom.core._.call(null,thi.ng.geom.core.vector.vec2.call(null,point),last_middle);
if((thi.ng.geom.core.dot.call(null,vec,vec) > (2))){
var normalized = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normalize.call(null,vec),width);
var r1 = thi.ng.geom.core.rotate.call(null,normalized,(thi.ng.math.core.PI / (2)));
var r2 = thi.ng.geom.core.rotate.call(null,normalized,(thi.ng.math.core.PI / (-2)));
var c1 = thi.ng.geom.core._PLUS_.call(null,point,r1);
var c2 = thi.ng.geom.core._PLUS_.call(null,point,r2);
var c3 = last_point1;
var c4 = last_point2;
cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,c1,point,c3);

cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,c3,point,last_middle);

cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,point,c2,last_middle);

cljs_draw.core.add_face.call(null,cljs_draw.core.current_mesh,last_middle,c2,c4);

return cljs_draw.core.current_mesh.setCurrentPos(cljs.core.nth.call(null,c1,(0)),cljs.core.nth.call(null,c1,(1)),cljs.core.nth.call(null,c2,(0)),cljs.core.nth.call(null,c2,(1)));
} else {
return null;
}
});
cljs_draw.core.render_mesh = (function cljs_draw$core$render_mesh(mesh,driver,program,pers,mv){
return gamma_driver.api.draw_arrays.call(null,driver,gamma_driver.api.bind.call(null,driver,program,cljs_draw.core.renderable.call(null,pers,mv,mesh.getColor(),mesh.getVertices(),(mesh.getPointer() / (2)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),new cljs.core.Keyword(null,"triangles","triangles",-1525417058)], null));
});
cljs_draw.core.render = (function cljs_draw$core$render(){
var map__9477 = cljs_draw.core.renderer;
var map__9477__$1 = ((cljs.core.seq_QMARK_.call(null,map__9477))?cljs.core.apply.call(null,cljs.core.hash_map,map__9477):map__9477);
var gl = cljs.core.get.call(null,map__9477__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var driver = cljs.core.get.call(null,map__9477__$1,new cljs.core.Keyword(null,"driver","driver",1515263546));
var program = cljs.core.get.call(null,map__9477__$1,new cljs.core.Keyword(null,"program","program",781564284));
var pers = cljs.core.get.call(null,map__9477__$1,new cljs.core.Keyword(null,"pers","pers",-1016576635));
var mv = thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.matrix44.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null));
gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

var seq__9478_9482 = cljs.core.seq.call(null,cljs_draw.core.paint_meshes);
var chunk__9479_9483 = null;
var count__9480_9484 = (0);
var i__9481_9485 = (0);
while(true){
if((i__9481_9485 < count__9480_9484)){
var mesh_9486 = cljs.core._nth.call(null,chunk__9479_9483,i__9481_9485);
cljs_draw.core.render_mesh.call(null,mesh_9486,driver,program,pers,mv);

var G__9487 = seq__9478_9482;
var G__9488 = chunk__9479_9483;
var G__9489 = count__9480_9484;
var G__9490 = (i__9481_9485 + (1));
seq__9478_9482 = G__9487;
chunk__9479_9483 = G__9488;
count__9480_9484 = G__9489;
i__9481_9485 = G__9490;
continue;
} else {
var temp__4422__auto___9491 = cljs.core.seq.call(null,seq__9478_9482);
if(temp__4422__auto___9491){
var seq__9478_9492__$1 = temp__4422__auto___9491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9478_9492__$1)){
var c__5735__auto___9493 = cljs.core.chunk_first.call(null,seq__9478_9492__$1);
var G__9494 = cljs.core.chunk_rest.call(null,seq__9478_9492__$1);
var G__9495 = c__5735__auto___9493;
var G__9496 = cljs.core.count.call(null,c__5735__auto___9493);
var G__9497 = (0);
seq__9478_9482 = G__9494;
chunk__9479_9483 = G__9495;
count__9480_9484 = G__9496;
i__9481_9485 = G__9497;
continue;
} else {
var mesh_9498 = cljs.core.first.call(null,seq__9478_9492__$1);
cljs_draw.core.render_mesh.call(null,mesh_9498,driver,program,pers,mv);

var G__9499 = cljs.core.next.call(null,seq__9478_9492__$1);
var G__9500 = null;
var G__9501 = (0);
var G__9502 = (0);
seq__9478_9482 = G__9499;
chunk__9479_9483 = G__9500;
count__9480_9484 = G__9501;
i__9481_9485 = G__9502;
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
var ptr = cljs.core.last.call(null,cljs_draw.core.stroke_history);
var history = cljs.core.drop_last.call(null,(1),cljs_draw.core.stroke_history);
if(cljs.core.truth_(cljs_draw.core.current_mesh)){
cljs_draw.core.current_mesh.setPointer(ptr);

cljs_draw.core.stroke_history = cljs.core.vec.call(null,history);

if(cljs.core._EQ_.call(null,ptr,(0))){
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
var c__8515__auto___9597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___9597,in$,out){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___9597,in$,out){
return (function (state_9577){
var state_val_9578 = (state_9577[(1)]);
if((state_val_9578 === (7))){
var inst_9560 = (state_9577[(2)]);
var inst_9561 = cljs.core.nth.call(null,inst_9560,(0),null);
var inst_9562 = cljs.core.nth.call(null,inst_9560,(1),null);
var inst_9563 = cljs.core._EQ_.call(null,inst_9562,in$);
var state_9577__$1 = (function (){var statearr_9579 = state_9577;
(statearr_9579[(7)] = inst_9561);

return statearr_9579;
})();
if(inst_9563){
var statearr_9580_9598 = state_9577__$1;
(statearr_9580_9598[(1)] = (8));

} else {
var statearr_9581_9599 = state_9577__$1;
(statearr_9581_9599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9578 === (1))){
var state_9577__$1 = state_9577;
var statearr_9582_9600 = state_9577__$1;
(statearr_9582_9600[(2)] = null);

(statearr_9582_9600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9578 === (4))){
var inst_9552 = (state_9577[(2)]);
var state_9577__$1 = (function (){var statearr_9583 = state_9577;
(statearr_9583[(8)] = inst_9552);

return statearr_9583;
})();
var statearr_9584_9601 = state_9577__$1;
(statearr_9584_9601[(2)] = null);

(statearr_9584_9601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9578 === (6))){
var inst_9572 = (state_9577[(2)]);
var state_9577__$1 = (function (){var statearr_9585 = state_9577;
(statearr_9585[(9)] = inst_9572);

return statearr_9585;
})();
var statearr_9586_9602 = state_9577__$1;
(statearr_9586_9602[(2)] = null);

(statearr_9586_9602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9578 === (3))){
var inst_9575 = (state_9577[(2)]);
var state_9577__$1 = state_9577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9577__$1,inst_9575);
} else {
if((state_val_9578 === (2))){
var state_9577__$1 = state_9577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9577__$1,(4),in$);
} else {
if((state_val_9578 === (11))){
var inst_9568 = (state_9577[(2)]);
var state_9577__$1 = state_9577;
var statearr_9587_9603 = state_9577__$1;
(statearr_9587_9603[(2)] = inst_9568);

(statearr_9587_9603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9578 === (9))){
var state_9577__$1 = state_9577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9577__$1,(11),out,true);
} else {
if((state_val_9578 === (5))){
var inst_9555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9556 = cljs.core.async.timeout.call(null,ms);
var inst_9557 = [in$,inst_9556];
var inst_9558 = (new cljs.core.PersistentVector(null,2,(5),inst_9555,inst_9557,null));
var state_9577__$1 = state_9577;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9577__$1,(7),inst_9558);
} else {
if((state_val_9578 === (10))){
var inst_9570 = (state_9577[(2)]);
var state_9577__$1 = state_9577;
var statearr_9588_9604 = state_9577__$1;
(statearr_9588_9604[(2)] = inst_9570);

(statearr_9588_9604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9578 === (8))){
var state_9577__$1 = state_9577;
var statearr_9589_9605 = state_9577__$1;
(statearr_9589_9605[(2)] = null);

(statearr_9589_9605[(1)] = (5));


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
});})(c__8515__auto___9597,in$,out))
;
return ((function (switch__8494__auto__,c__8515__auto___9597,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0 = (function (){
var statearr_9593 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9593[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__);

(statearr_9593[(1)] = (1));

return statearr_9593;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1 = (function (state_9577){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_9577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e9594){if((e9594 instanceof Object)){
var ex__8498__auto__ = e9594;
var statearr_9595_9606 = state_9577;
(statearr_9595_9606[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9607 = state_9577;
state_9577 = G__9607;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__ = function(state_9577){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1.call(this,state_9577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___9597,in$,out))
})();
var state__8517__auto__ = (function (){var statearr_9596 = f__8516__auto__.call(null);
(statearr_9596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___9597);

return statearr_9596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___9597,in$,out))
);


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),in$,new cljs.core.Keyword(null,"output","output",-1105869043),out], null);
});
cljs_draw.core.color_input = (function cljs_draw$core$color_input(data,owner){
if(typeof cljs_draw.core.t9611 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t9611 = (function (color_input,data,owner,meta9612){
this.color_input = color_input;
this.data = data;
this.owner = owner;
this.meta9612 = meta9612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t9611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9613,meta9612__$1){
var self__ = this;
var _9613__$1 = this;
return (new cljs_draw.core.t9611(self__.color_input,self__.data,self__.owner,meta9612__$1));
});

cljs_draw.core.t9611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9613){
var self__ = this;
var _9613__$1 = this;
return self__.meta9612;
});

cljs_draw.core.t9611.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t9611.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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

cljs_draw.core.t9611.prototype.om$core$IRender$ = true;

cljs_draw.core.t9611.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"type": "color", "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "style": {"width": (50), "height": (50), "border": (0)}});
});

cljs_draw.core.t9611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-input","color-input",696074651,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9612","meta9612",1708697013,null)], null);
});

cljs_draw.core.t9611.cljs$lang$type = true;

cljs_draw.core.t9611.cljs$lang$ctorStr = "cljs_draw.core/t9611";

cljs_draw.core.t9611.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t9611");
});

cljs_draw.core.__GT_t9611 = (function cljs_draw$core$color_input_$___GT_t9611(color_input__$1,data__$1,owner__$1,meta9612){
return (new cljs_draw.core.t9611(color_input__$1,data__$1,owner__$1,meta9612));
});

}

return (new cljs_draw.core.t9611(cljs_draw$core$color_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t9692 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t9692 = (function (color_item,props,owner,meta9693){
this.color_item = color_item;
this.props = props;
this.owner = owner;
this.meta9693 = meta9693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t9692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9694,meta9693__$1){
var self__ = this;
var _9694__$1 = this;
return (new cljs_draw.core.t9692(self__.color_item,self__.props,self__.owner,meta9693__$1));
});

cljs_draw.core.t9692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9694){
var self__ = this;
var _9694__$1 = this;
return self__.meta9693;
});

cljs_draw.core.t9692.prototype.om$core$IInitState$ = true;

cljs_draw.core.t9692.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t9692.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t9692.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__9695 = om.core.get_state.call(null,self__.owner);
var map__9695__$1 = ((cljs.core.seq_QMARK_.call(null,map__9695))?cljs.core.apply.call(null,cljs.core.hash_map,map__9695):map__9695);
var mouseup = cljs.core.get.call(null,map__9695__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__9695__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__9695__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var hide_controls = cljs.core.get.call(null,map__9695__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var c__8515__auto___9770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___9770,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___9770,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_9727){
var state_val_9728 = (state_9727[(1)]);
if((state_val_9728 === (7))){
var inst_9715 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_9716 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_9727__$1 = (function (){var statearr_9729 = state_9727;
(statearr_9729[(7)] = inst_9715);

return statearr_9729;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9727__$1,(9),inst_9716,true);
} else {
if((state_val_9728 === (1))){
var state_9727__$1 = state_9727;
var statearr_9730_9771 = state_9727__$1;
(statearr_9730_9771[(2)] = null);

(statearr_9730_9771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (4))){
var inst_9698 = (state_9727[(2)]);
var inst_9700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9701 = cljs.core.async.timeout.call(null,(500));
var inst_9702 = [mouseup,inst_9701];
var inst_9703 = (new cljs.core.PersistentVector(null,2,(5),inst_9700,inst_9702,null));
var state_9727__$1 = (function (){var statearr_9731 = state_9727;
(statearr_9731[(8)] = inst_9698);

return statearr_9731;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9727__$1,(5),inst_9703);
} else {
if((state_val_9728 === (6))){
var inst_9710 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_9711 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_9712 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_9713 = inst_9711.call(null,inst_9712);
var state_9727__$1 = (function (){var statearr_9732 = state_9727;
(statearr_9732[(9)] = inst_9710);

return statearr_9732;
})();
var statearr_9733_9772 = state_9727__$1;
(statearr_9733_9772[(2)] = inst_9713);

(statearr_9733_9772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (3))){
var inst_9725 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9727__$1,inst_9725);
} else {
if((state_val_9728 === (2))){
var state_9727__$1 = state_9727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9727__$1,(4),mousedown);
} else {
if((state_val_9728 === (9))){
var inst_9718 = (state_9727[(2)]);
var state_9727__$1 = (function (){var statearr_9734 = state_9727;
(statearr_9734[(10)] = inst_9718);

return statearr_9734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9727__$1,(10),mouseup);
} else {
if((state_val_9728 === (5))){
var inst_9705 = (state_9727[(2)]);
var inst_9706 = cljs.core.nth.call(null,inst_9705,(0),null);
var inst_9707 = cljs.core.nth.call(null,inst_9705,(1),null);
var inst_9708 = cljs.core._EQ_.call(null,inst_9707,mouseup);
var state_9727__$1 = (function (){var statearr_9735 = state_9727;
(statearr_9735[(11)] = inst_9706);

return statearr_9735;
})();
if(inst_9708){
var statearr_9736_9773 = state_9727__$1;
(statearr_9736_9773[(1)] = (6));

} else {
var statearr_9737_9774 = state_9727__$1;
(statearr_9737_9774[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (10))){
var inst_9720 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
var statearr_9738_9775 = state_9727__$1;
(statearr_9738_9775[(2)] = inst_9720);

(statearr_9738_9775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (8))){
var inst_9722 = (state_9727[(2)]);
var state_9727__$1 = (function (){var statearr_9739 = state_9727;
(statearr_9739[(12)] = inst_9722);

return statearr_9739;
})();
var statearr_9740_9776 = state_9727__$1;
(statearr_9740_9776[(2)] = null);

(statearr_9740_9776[(1)] = (2));


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
});})(c__8515__auto___9770,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8494__auto__,c__8515__auto___9770,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8495__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8495__auto____0 = (function (){
var statearr_9744 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9744[(0)] = cljs_draw$core$color_item_$_state_machine__8495__auto__);

(statearr_9744[(1)] = (1));

return statearr_9744;
});
var cljs_draw$core$color_item_$_state_machine__8495__auto____1 = (function (state_9727){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_9727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e9745){if((e9745 instanceof Object)){
var ex__8498__auto__ = e9745;
var statearr_9746_9777 = state_9727;
(statearr_9746_9777[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9778 = state_9727;
state_9727 = G__9778;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8495__auto__ = function(state_9727){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8495__auto____1.call(this,state_9727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8495__auto____0;
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8495__auto____1;
return cljs_draw$core$color_item_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___9770,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8517__auto__ = (function (){var statearr_9747 = f__8516__auto__.call(null);
(statearr_9747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___9770);

return statearr_9747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___9770,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);


var c__8515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto__,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto__,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_9757){
var state_val_9758 = (state_9757[(1)]);
if((state_val_9758 === (1))){
var state_9757__$1 = state_9757;
var statearr_9759_9779 = state_9757__$1;
(statearr_9759_9779[(2)] = null);

(statearr_9759_9779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9758 === (2))){
var inst_9749 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_9757__$1 = state_9757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9757__$1,(4),inst_9749);
} else {
if((state_val_9758 === (3))){
var inst_9755 = (state_9757[(2)]);
var state_9757__$1 = state_9757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9757__$1,inst_9755);
} else {
if((state_val_9758 === (4))){
var inst_9751 = (state_9757[(2)]);
var inst_9752 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_9757__$1 = (function (){var statearr_9760 = state_9757;
(statearr_9760[(7)] = inst_9752);

(statearr_9760[(8)] = inst_9751);

return statearr_9760;
})();
var statearr_9761_9780 = state_9757__$1;
(statearr_9761_9780[(2)] = null);

(statearr_9761_9780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8515__auto__,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8494__auto__,c__8515__auto__,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8495__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8495__auto____0 = (function (){
var statearr_9765 = [null,null,null,null,null,null,null,null,null];
(statearr_9765[(0)] = cljs_draw$core$color_item_$_state_machine__8495__auto__);

(statearr_9765[(1)] = (1));

return statearr_9765;
});
var cljs_draw$core$color_item_$_state_machine__8495__auto____1 = (function (state_9757){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_9757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e9766){if((e9766 instanceof Object)){
var ex__8498__auto__ = e9766;
var statearr_9767_9781 = state_9757;
(statearr_9767_9781[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9782 = state_9757;
state_9757 = G__9782;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8495__auto__ = function(state_9757){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8495__auto____1.call(this,state_9757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8495__auto____0;
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8495__auto____1;
return cljs_draw$core$color_item_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8517__auto__ = (function (){var statearr_9768 = f__8516__auto__.call(null);
(statearr_9768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_9768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__,map__9695,map__9695__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);

return c__8515__auto__;
});

cljs_draw.core.t9692.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t9692.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t9692.prototype.om$core$IRender$ = true;

cljs_draw.core.t9692.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__9769 = om.core.get_state.call(null,self__.owner);
var map__9769__$1 = ((cljs.core.seq_QMARK_.call(null,map__9769))?cljs.core.apply.call(null,cljs.core.hash_map,map__9769):map__9769);
var mouseup = cljs.core.get.call(null,map__9769__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__9769__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__9769__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
return React.DOM.div({"style": {"position": "relative", "width": (50), "height": (50)}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"href": "#", "onClick": ((function (map__9769,map__9769__$1,mouseup,mousedown,mouseout,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__9769,map__9769__$1,mouseup,mousedown,mouseout,___$1))
},"remove")),React.DOM.div({"onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "style": {"position": "absolute", "width": (50), "height": (50), "cursor": "pointer", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":"")}}));
});

cljs_draw.core.t9692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-item","color-item",934499434,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9693","meta9693",-141651071,null)], null);
});

cljs_draw.core.t9692.cljs$lang$type = true;

cljs_draw.core.t9692.cljs$lang$ctorStr = "cljs_draw.core/t9692";

cljs_draw.core.t9692.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t9692");
});

cljs_draw.core.__GT_t9692 = (function cljs_draw$core$color_item_$___GT_t9692(color_item__$1,props__$1,owner__$1,meta9693){
return (new cljs_draw.core.t9692(color_item__$1,props__$1,owner__$1,meta9693));
});

}

return (new cljs_draw.core.t9692(cljs_draw$core$color_item,props,owner,cljs.core.PersistentArrayMap.EMPTY));
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

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gl","gl",-246422634),gl,new cljs.core.Keyword(null,"driver","driver",1515263546),driver,new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"pers","pers",-1016576635),pers], null);
});
cljs_draw.core.app = (function cljs_draw$core$app(data,owner){
if(typeof cljs_draw.core.t9945 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t9945 = (function (app,data,owner,meta9946){
this.app = app;
this.data = data;
this.owner = owner;
this.meta9946 = meta9946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t9945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9947,meta9946__$1){
var self__ = this;
var _9947__$1 = this;
return (new cljs_draw.core.t9945(self__.app,self__.data,self__.owner,meta9946__$1));
});

cljs_draw.core.t9945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9947){
var self__ = this;
var _9947__$1 = this;
return self__.meta9946;
});

cljs_draw.core.t9945.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t9945.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvas = node.querySelector("canvas");
cljs_draw.core.renderer = cljs_draw.core.init.call(null,canvas);

cljs_draw.core.load_state.call(null);

cljs_draw.core.render_loop.call(null);

var moved_10107 = cljs_draw.util.listen.call(null,container,"pointermove");
var c__8515__auto___10108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___10108,moved_10107,node,container,canvas,this$__$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___10108,moved_10107,node,container,canvas,this$__$1){
return (function (state_10011){
var state_val_10012 = (state_10011[(1)]);
if((state_val_10012 === (7))){
var inst_10007 = (state_10011[(2)]);
var state_10011__$1 = state_10011;
var statearr_10013_10109 = state_10011__$1;
(statearr_10013_10109[(2)] = inst_10007);

(statearr_10013_10109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (20))){
var inst_9982 = cljs.core.not.call(null,cljs_draw.core.current_mesh);
var state_10011__$1 = state_10011;
if(inst_9982){
var statearr_10014_10110 = state_10011__$1;
(statearr_10014_10110[(1)] = (23));

} else {
var statearr_10015_10111 = state_10011__$1;
(statearr_10015_10111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (27))){
var state_10011__$1 = state_10011;
var statearr_10016_10112 = state_10011__$1;
(statearr_10016_10112[(2)] = null);

(statearr_10016_10112[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (1))){
var inst_9948 = (0);
var state_10011__$1 = (function (){var statearr_10017 = state_10011;
(statearr_10017[(7)] = inst_9948);

return statearr_10017;
})();
var statearr_10018_10113 = state_10011__$1;
(statearr_10018_10113[(2)] = null);

(statearr_10018_10113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (24))){
var state_10011__$1 = state_10011;
var statearr_10019_10114 = state_10011__$1;
(statearr_10019_10114[(2)] = null);

(statearr_10019_10114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (4))){
var inst_9951 = (state_10011[(8)]);
var inst_9951__$1 = (state_10011[(2)]);
var state_10011__$1 = (function (){var statearr_10020 = state_10011;
(statearr_10020[(8)] = inst_9951__$1);

return statearr_10020;
})();
if(cljs.core.truth_(inst_9951__$1)){
var statearr_10021_10115 = state_10011__$1;
(statearr_10021_10115[(1)] = (5));

} else {
var statearr_10022_10116 = state_10011__$1;
(statearr_10022_10116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (15))){
var state_10011__$1 = state_10011;
var statearr_10023_10117 = state_10011__$1;
(statearr_10023_10117[(2)] = cljs_draw.core.current_mesh);

(statearr_10023_10117[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (21))){
var state_10011__$1 = state_10011;
var statearr_10024_10118 = state_10011__$1;
(statearr_10024_10118[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (13))){
var inst_10001 = (state_10011[(2)]);
var state_10011__$1 = state_10011;
var statearr_10026_10119 = state_10011__$1;
(statearr_10026_10119[(2)] = inst_10001);

(statearr_10026_10119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (22))){
var inst_9999 = (state_10011[(2)]);
var state_10011__$1 = state_10011;
var statearr_10027_10120 = state_10011__$1;
(statearr_10027_10120[(2)] = inst_9999);

(statearr_10027_10120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (6))){
var state_10011__$1 = state_10011;
var statearr_10028_10121 = state_10011__$1;
(statearr_10028_10121[(2)] = null);

(statearr_10028_10121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (28))){
var inst_9997 = (state_10011[(2)]);
var state_10011__$1 = state_10011;
var statearr_10029_10122 = state_10011__$1;
(statearr_10029_10122[(2)] = inst_9997);

(statearr_10029_10122[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (25))){
var inst_9957 = (state_10011[(9)]);
var inst_9990 = (state_10011[(2)]);
var inst_9991 = cljs_draw.core.start_stroke.call(null,inst_9957);
var state_10011__$1 = (function (){var statearr_10030 = state_10011;
(statearr_10030[(10)] = inst_9990);

return statearr_10030;
})();
var statearr_10031_10123 = state_10011__$1;
(statearr_10031_10123[(2)] = inst_9991);

(statearr_10031_10123[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (17))){
var inst_9975 = cljs_draw.core.finalize_stroke.call(null);
var state_10011__$1 = state_10011;
var statearr_10032_10124 = state_10011__$1;
(statearr_10032_10124[(2)] = inst_9975);

(statearr_10032_10124[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (3))){
var inst_10009 = (state_10011[(2)]);
var state_10011__$1 = state_10011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10011__$1,inst_10009);
} else {
if((state_val_10012 === (12))){
var inst_9948 = (state_10011[(7)]);
var inst_9980 = cljs.core._EQ_.call(null,inst_9948,(0));
var state_10011__$1 = state_10011;
if(inst_9980){
var statearr_10033_10125 = state_10011__$1;
(statearr_10033_10125[(1)] = (20));

} else {
var statearr_10034_10126 = state_10011__$1;
(statearr_10034_10126[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (2))){
var state_10011__$1 = state_10011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10011__$1,(4),moved_10107);
} else {
if((state_val_10012 === (23))){
var inst_9984 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_9985 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_9984);
var inst_9986 = (new Mesh2d(inst_9985));
var inst_9987 = cljs_draw.core.current_mesh = inst_9986;
var state_10011__$1 = state_10011;
var statearr_10035_10127 = state_10011__$1;
(statearr_10035_10127[(2)] = inst_9987);

(statearr_10035_10127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (19))){
var inst_9978 = (state_10011[(2)]);
var state_10011__$1 = state_10011;
var statearr_10036_10128 = state_10011__$1;
(statearr_10036_10128[(2)] = inst_9978);

(statearr_10036_10128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (11))){
var state_10011__$1 = state_10011;
if(cljs.core.truth_(cljs_draw.core.current_mesh)){
var statearr_10037_10129 = state_10011__$1;
(statearr_10037_10129[(1)] = (14));

} else {
var statearr_10038_10130 = state_10011__$1;
(statearr_10038_10130[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (9))){
var inst_9958 = (state_10011[(11)]);
var inst_9964 = cljs.core._EQ_.call(null,inst_9958,(0));
var state_10011__$1 = state_10011;
if(inst_9964){
var statearr_10039_10131 = state_10011__$1;
(statearr_10039_10131[(1)] = (11));

} else {
var statearr_10040_10132 = state_10011__$1;
(statearr_10040_10132[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (5))){
var inst_9951 = (state_10011[(8)]);
var inst_9953 = inst_9951.layerX;
var inst_9954 = (inst_9953 - cljs_draw.core.boundary);
var inst_9955 = inst_9951.layerY;
var inst_9956 = (inst_9955 - cljs_draw.core.boundary);
var inst_9957 = thi.ng.geom.core.vector.vec2.call(null,inst_9954,inst_9956);
var inst_9958 = inst_9951.mozPressure;
var inst_9959 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_9960 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_9959);
var inst_9961 = cljs.core.not.call(null,inst_9960);
var state_10011__$1 = (function (){var statearr_10041 = state_10011;
(statearr_10041[(11)] = inst_9958);

(statearr_10041[(9)] = inst_9957);

return statearr_10041;
})();
if(inst_9961){
var statearr_10042_10133 = state_10011__$1;
(statearr_10042_10133[(1)] = (8));

} else {
var statearr_10043_10134 = state_10011__$1;
(statearr_10043_10134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (14))){
var inst_9967 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_9968 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_9967);
var inst_9969 = cljs_draw.core.current_mesh.isColor(inst_9968);
var inst_9970 = cljs.core.not.call(null,inst_9969);
var state_10011__$1 = state_10011;
var statearr_10044_10135 = state_10011__$1;
(statearr_10044_10135[(2)] = inst_9970);

(statearr_10044_10135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (26))){
var inst_9958 = (state_10011[(11)]);
var inst_9957 = (state_10011[(9)]);
var inst_9994 = cljs_draw.core.add_to_stroke.call(null,inst_9957,inst_9958);
var state_10011__$1 = state_10011;
var statearr_10045_10136 = state_10011__$1;
(statearr_10045_10136[(2)] = inst_9994);

(statearr_10045_10136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (16))){
var inst_9973 = (state_10011[(2)]);
var state_10011__$1 = state_10011;
if(cljs.core.truth_(inst_9973)){
var statearr_10046_10137 = state_10011__$1;
(statearr_10046_10137[(1)] = (17));

} else {
var statearr_10047_10138 = state_10011__$1;
(statearr_10047_10138[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (10))){
var inst_9958 = (state_10011[(11)]);
var inst_10003 = (state_10011[(2)]);
var inst_9948 = inst_9958;
var state_10011__$1 = (function (){var statearr_10048 = state_10011;
(statearr_10048[(12)] = inst_10003);

(statearr_10048[(7)] = inst_9948);

return statearr_10048;
})();
var statearr_10049_10139 = state_10011__$1;
(statearr_10049_10139[(2)] = null);

(statearr_10049_10139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (18))){
var state_10011__$1 = state_10011;
var statearr_10050_10140 = state_10011__$1;
(statearr_10050_10140[(2)] = null);

(statearr_10050_10140[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10012 === (8))){
var state_10011__$1 = state_10011;
var statearr_10051_10141 = state_10011__$1;
(statearr_10051_10141[(2)] = null);

(statearr_10051_10141[(1)] = (10));


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
});})(c__8515__auto___10108,moved_10107,node,container,canvas,this$__$1))
;
return ((function (switch__8494__auto__,c__8515__auto___10108,moved_10107,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8495__auto__ = null;
var cljs_draw$core$app_$_state_machine__8495__auto____0 = (function (){
var statearr_10055 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10055[(0)] = cljs_draw$core$app_$_state_machine__8495__auto__);

(statearr_10055[(1)] = (1));

return statearr_10055;
});
var cljs_draw$core$app_$_state_machine__8495__auto____1 = (function (state_10011){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_10011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e10056){if((e10056 instanceof Object)){
var ex__8498__auto__ = e10056;
var statearr_10057_10142 = state_10011;
(statearr_10057_10142[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10143 = state_10011;
state_10011 = G__10143;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8495__auto__ = function(state_10011){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8495__auto____1.call(this,state_10011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8495__auto____0;
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8495__auto____1;
return cljs_draw$core$app_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___10108,moved_10107,node,container,canvas,this$__$1))
})();
var state__8517__auto__ = (function (){var statearr_10058 = f__8516__auto__.call(null);
(statearr_10058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___10108);

return statearr_10058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___10108,moved_10107,node,container,canvas,this$__$1))
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
return (function (state_10081){
var state_val_10082 = (state_10081[(1)]);
if((state_val_10082 === (7))){
var inst_10076 = (state_10081[(2)]);
var state_10081__$1 = (function (){var statearr_10083 = state_10081;
(statearr_10083[(7)] = inst_10076);

return statearr_10083;
})();
var statearr_10084_10144 = state_10081__$1;
(statearr_10084_10144[(2)] = null);

(statearr_10084_10144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (1))){
var state_10081__$1 = state_10081;
var statearr_10085_10145 = state_10081__$1;
(statearr_10085_10145[(2)] = null);

(statearr_10085_10145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (4))){
var inst_10061 = (state_10081[(8)]);
var inst_10061__$1 = (state_10081[(2)]);
var inst_10062 = inst_10061__$1.metaKey;
var state_10081__$1 = (function (){var statearr_10086 = state_10081;
(statearr_10086[(8)] = inst_10061__$1);

return statearr_10086;
})();
if(cljs.core.truth_(inst_10062)){
var statearr_10087_10146 = state_10081__$1;
(statearr_10087_10146[(1)] = (5));

} else {
var statearr_10088_10147 = state_10081__$1;
(statearr_10088_10147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (6))){
var state_10081__$1 = state_10081;
var statearr_10089_10148 = state_10081__$1;
(statearr_10089_10148[(2)] = null);

(statearr_10089_10148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (3))){
var inst_10079 = (state_10081[(2)]);
var state_10081__$1 = state_10081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10081__$1,inst_10079);
} else {
if((state_val_10082 === (12))){
var state_10081__$1 = state_10081;
var statearr_10090_10149 = state_10081__$1;
(statearr_10090_10149[(2)] = new cljs.core.Keyword(null,"else","else",-1508377146));

(statearr_10090_10149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (2))){
var state_10081__$1 = state_10081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10081__$1,(4),keydown);
} else {
if((state_val_10082 === (11))){
var inst_10068 = cljs_draw.core.clear_canvas.call(null);
var state_10081__$1 = state_10081;
var statearr_10091_10150 = state_10081__$1;
(statearr_10091_10150[(2)] = inst_10068);

(statearr_10091_10150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (9))){
var inst_10064 = cljs_draw.core.save_state.call(null);
var state_10081__$1 = state_10081;
var statearr_10092_10151 = state_10081__$1;
(statearr_10092_10151[(2)] = inst_10064);

(statearr_10092_10151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (5))){
var inst_10061 = (state_10081[(8)]);
var inst_10071 = inst_10061.keyCode;
var state_10081__$1 = state_10081;
var G__10093_10152 = inst_10071;
switch (G__10093_10152) {
case (83):
var statearr_10094_10154 = state_10081__$1;
(statearr_10094_10154[(1)] = (9));


break;
case (90):
var statearr_10095_10155 = state_10081__$1;
(statearr_10095_10155[(1)] = (10));


break;
case (67):
var statearr_10096_10156 = state_10081__$1;
(statearr_10096_10156[(1)] = (11));


break;
default:
var statearr_10097_10157 = state_10081__$1;
(statearr_10097_10157[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (10))){
var inst_10066 = cljs_draw.core.undo.call(null);
var state_10081__$1 = state_10081;
var statearr_10098_10158 = state_10081__$1;
(statearr_10098_10158[(2)] = inst_10066);

(statearr_10098_10158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (8))){
var inst_10073 = (state_10081[(2)]);
var state_10081__$1 = state_10081;
var statearr_10099_10159 = state_10081__$1;
(statearr_10099_10159[(2)] = inst_10073);

(statearr_10099_10159[(1)] = (7));


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
var statearr_10103 = [null,null,null,null,null,null,null,null,null];
(statearr_10103[(0)] = cljs_draw$core$app_$_state_machine__8495__auto__);

(statearr_10103[(1)] = (1));

return statearr_10103;
});
var cljs_draw$core$app_$_state_machine__8495__auto____1 = (function (state_10081){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_10081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e10104){if((e10104 instanceof Object)){
var ex__8498__auto__ = e10104;
var statearr_10105_10160 = state_10081;
(statearr_10105_10160[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10161 = state_10081;
state_10081 = G__10161;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8495__auto__ = function(state_10081){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8495__auto____1.call(this,state_10081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8495__auto____0;
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8495__auto____1;
return cljs_draw$core$app_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__,keydown,node,container,canvas,this$__$1))
})();
var state__8517__auto__ = (function (){var statearr_10106 = f__8516__auto__.call(null);
(statearr_10106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_10106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__,keydown,node,container,canvas,this$__$1))
);

return c__8515__auto__;
});

cljs_draw.core.t9945.prototype.om$core$IRender$ = true;

cljs_draw.core.t9945.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "app", "style": {"height": "100%", "backgroundColor": "#222222"}},React.DOM.div({"className": "canvas-container", "style": {"bottom": (0), "top": (0), "overflow": "hidden", "width": ((cljs_draw.core.dimen / (2)) + (cljs_draw.core.boundary * (2))), "cursor": "crosshair", "padding": (50), "right": (0), "position": "absolute", "border": "1px solid #2f2f2f", "height": ((cljs_draw.core.dimen / (2)) + (cljs_draw.core.boundary * (2))), "left": (0), "margin": "auto"}},React.DOM.canvas({"width": cljs_draw.core.dimen, "height": cljs_draw.core.dimen, "style": {"width": (cljs_draw.core.dimen / (2)), "height": (cljs_draw.core.dimen / (2))}})),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t9945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9946","meta9946",2091510641,null)], null);
});

cljs_draw.core.t9945.cljs$lang$type = true;

cljs_draw.core.t9945.cljs$lang$ctorStr = "cljs_draw.core/t9945";

cljs_draw.core.t9945.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t9945");
});

cljs_draw.core.__GT_t9945 = (function cljs_draw$core$app_$___GT_t9945(app__$1,data__$1,owner__$1,meta9946){
return (new cljs_draw.core.t9945(app__$1,data__$1,owner__$1,meta9946));
});

}

return (new cljs_draw.core.t9945(cljs_draw$core$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map