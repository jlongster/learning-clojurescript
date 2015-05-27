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
cljs_draw.core.paint_meshes = cljs.core.PersistentVector.EMPTY;
cljs_draw.core.current_mesh = null;
cljs_draw.core.cursor = cljs.core.PersistentVector.EMPTY;
cljs_draw.core.renderer = null;
cljs_draw.core.u_p_matrix = gamma.api.uniform.call(null,"uPMatrix",new cljs.core.Keyword(null,"mat4","mat4",-237531594));
cljs_draw.core.u_mv_matrix = gamma.api.uniform.call(null,"uMVMatrix",new cljs.core.Keyword(null,"mat4","mat4",-237531594));
cljs_draw.core.u_color = gamma.api.uniform.call(null,"uColor",new cljs.core.Keyword(null,"vec3","vec3",1116680488));
cljs_draw.core.a_position = gamma.api.attribute.call(null,"aVertexPosition",new cljs.core.Keyword(null,"vec2","vec2",-762258640));
cljs_draw.core.program_source = gamma.program.program.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),gamma.api._STAR_.call(null,gamma.api._STAR_.call(null,cljs_draw.core.u_p_matrix,cljs_draw.core.u_mv_matrix),gamma.api.vec4.call(null,cljs_draw.core.a_position,(0),(1)))], true, false),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,cljs_draw.core.u_color,(1))], true, false),new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"mediump","mediump",-1401096909)], null)], null));
cljs_draw.core.renderable = (function cljs_draw$core$renderable(p,mv,color,vertices){
return new cljs.core.PersistentArrayMap.fromArray([cljs_draw.core.u_p_matrix,p,cljs_draw.core.u_mv_matrix,mv,cljs_draw.core.u_color,cljs.core.vec.call(null,color),cljs_draw.core.a_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),vertices,new cljs.core.Keyword(null,"count","count",2139924085),(vertices.length / (2))], null)], true, false);
});
cljs_draw.core.get_perspective_matrix = (function cljs_draw$core$get_perspective_matrix(width,height){
return thi.ng.geom.core.matrix.ortho.call(null,(0),(0),width,height,0.1,(1000));
});
cljs_draw.core.set_cursor = (function cljs_draw$core$set_cursor(point){
return cljs_draw.core.cursor = point;
});
cljs_draw.core.finalize_stroke = (function cljs_draw$core$finalize_stroke(){
cljs_draw.core.paint_meshes = cljs.core.conj.call(null,cljs_draw.core.paint_meshes,cljs_draw.core.current_mesh);

return cljs_draw.core.current_mesh = null;
});
cljs_draw.core.start_stroke = (function cljs_draw$core$start_stroke(point){
var vec__8657 = point;
var x = cljs.core.nth.call(null,vec__8657,(0),null);
var y = cljs.core.nth.call(null,vec__8657,(1),null);
cljs_draw.core.current_mesh.addFace(x,y,x,y,x,y);

return cljs_draw.core.current_mesh.addFace(x,y,x,y,x,y);
});
cljs_draw.core.add_to_stroke = (function cljs_draw$core$add_to_stroke(point,pressure){
var width = (Math.pow(pressure,(2)) * (10));
var valid = (cljs_draw.core.current_mesh.getPointer() > (0));
var last_point1 = ((valid)?thi.ng.geom.core.vector.vec2.call(null,cljs_draw.core.current_mesh.getOffsetValue((12)),cljs_draw.core.current_mesh.getOffsetValue((11))):point);
var last_point2 = ((valid)?thi.ng.geom.core.vector.vec2.call(null,cljs_draw.core.current_mesh.getOffsetValue((10)),cljs_draw.core.current_mesh.getOffsetValue((9))):point);
var last_middle = thi.ng.geom.core._PLUS_.call(null,last_point1,thi.ng.geom.core.div.call(null,thi.ng.geom.core._.call(null,last_point2,last_point1),(2)));
var vec = thi.ng.geom.core._.call(null,thi.ng.geom.core.vector.vec2.call(null,point),last_middle);
var normalized = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normalize.call(null,vec),width);
var r1 = thi.ng.geom.core.rotate.call(null,normalized,(thi.ng.math.core.PI / (2)));
var r2 = thi.ng.geom.core.rotate.call(null,normalized,(thi.ng.math.core.PI / (-2)));
var p1 = thi.ng.geom.core._PLUS_.call(null,point,r1);
var p2 = thi.ng.geom.core._PLUS_.call(null,point,r2);
var p3 = last_point1;
var p4 = last_point1;
var p5 = thi.ng.geom.core._PLUS_.call(null,point,r2);
var p6 = last_point2;
cljs_draw.core.current_mesh.addFace(cljs.core.nth.call(null,p1,(0)),cljs.core.nth.call(null,p1,(1)),cljs.core.nth.call(null,p2,(0)),cljs.core.nth.call(null,p2,(1)),cljs.core.nth.call(null,p3,(0)),cljs.core.nth.call(null,p3,(1)));

return cljs_draw.core.current_mesh.addFace(cljs.core.nth.call(null,p4,(0)),cljs.core.nth.call(null,p4,(1)),cljs.core.nth.call(null,p5,(0)),cljs.core.nth.call(null,p5,(1)),cljs.core.nth.call(null,p6,(0)),cljs.core.nth.call(null,p6,(1)));
});
cljs_draw.core.render_mesh = (function cljs_draw$core$render_mesh(mesh,driver,program,pers,mv){
return gamma_driver.api.draw_arrays.call(null,driver,gamma_driver.api.bind.call(null,driver,program,cljs_draw.core.renderable.call(null,pers,mv,mesh.getColor(),mesh.getVertices())),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),new cljs.core.Keyword(null,"triangles","triangles",-1525417058)], null));
});
cljs_draw.core.render = (function cljs_draw$core$render(){
var map__8663 = cljs_draw.core.renderer;
var map__8663__$1 = ((cljs.core.seq_QMARK_.call(null,map__8663))?cljs.core.apply.call(null,cljs.core.hash_map,map__8663):map__8663);
var gl = cljs.core.get.call(null,map__8663__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var driver = cljs.core.get.call(null,map__8663__$1,new cljs.core.Keyword(null,"driver","driver",1515263546));
var program = cljs.core.get.call(null,map__8663__$1,new cljs.core.Keyword(null,"program","program",781564284));
var pers = cljs.core.get.call(null,map__8663__$1,new cljs.core.Keyword(null,"pers","pers",-1016576635));
var mv = thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.matrix44.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null));
gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

var seq__8664_8668 = cljs.core.seq.call(null,cljs_draw.core.paint_meshes);
var chunk__8665_8669 = null;
var count__8666_8670 = (0);
var i__8667_8671 = (0);
while(true){
if((i__8667_8671 < count__8666_8670)){
var mesh_8672 = cljs.core._nth.call(null,chunk__8665_8669,i__8667_8671);
cljs_draw.core.render_mesh.call(null,mesh_8672,driver,program,pers,mv);

var G__8673 = seq__8664_8668;
var G__8674 = chunk__8665_8669;
var G__8675 = count__8666_8670;
var G__8676 = (i__8667_8671 + (1));
seq__8664_8668 = G__8673;
chunk__8665_8669 = G__8674;
count__8666_8670 = G__8675;
i__8667_8671 = G__8676;
continue;
} else {
var temp__4422__auto___8677 = cljs.core.seq.call(null,seq__8664_8668);
if(temp__4422__auto___8677){
var seq__8664_8678__$1 = temp__4422__auto___8677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8664_8678__$1)){
var c__5735__auto___8679 = cljs.core.chunk_first.call(null,seq__8664_8678__$1);
var G__8680 = cljs.core.chunk_rest.call(null,seq__8664_8678__$1);
var G__8681 = c__5735__auto___8679;
var G__8682 = cljs.core.count.call(null,c__5735__auto___8679);
var G__8683 = (0);
seq__8664_8668 = G__8680;
chunk__8665_8669 = G__8681;
count__8666_8670 = G__8682;
i__8667_8671 = G__8683;
continue;
} else {
var mesh_8684 = cljs.core.first.call(null,seq__8664_8678__$1);
cljs_draw.core.render_mesh.call(null,mesh_8684,driver,program,pers,mv);

var G__8685 = cljs.core.next.call(null,seq__8664_8678__$1);
var G__8686 = null;
var G__8687 = (0);
var G__8688 = (0);
seq__8664_8668 = G__8685;
chunk__8665_8669 = G__8686;
count__8666_8670 = G__8687;
i__8667_8671 = G__8688;
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
var c__8515__auto___8783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___8783,in$,out){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___8783,in$,out){
return (function (state_8763){
var state_val_8764 = (state_8763[(1)]);
if((state_val_8764 === (7))){
var inst_8746 = (state_8763[(2)]);
var inst_8747 = cljs.core.nth.call(null,inst_8746,(0),null);
var inst_8748 = cljs.core.nth.call(null,inst_8746,(1),null);
var inst_8749 = cljs.core._EQ_.call(null,inst_8748,in$);
var state_8763__$1 = (function (){var statearr_8765 = state_8763;
(statearr_8765[(7)] = inst_8747);

return statearr_8765;
})();
if(inst_8749){
var statearr_8766_8784 = state_8763__$1;
(statearr_8766_8784[(1)] = (8));

} else {
var statearr_8767_8785 = state_8763__$1;
(statearr_8767_8785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8764 === (1))){
var state_8763__$1 = state_8763;
var statearr_8768_8786 = state_8763__$1;
(statearr_8768_8786[(2)] = null);

(statearr_8768_8786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8764 === (4))){
var inst_8738 = (state_8763[(2)]);
var state_8763__$1 = (function (){var statearr_8769 = state_8763;
(statearr_8769[(8)] = inst_8738);

return statearr_8769;
})();
var statearr_8770_8787 = state_8763__$1;
(statearr_8770_8787[(2)] = null);

(statearr_8770_8787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8764 === (6))){
var inst_8758 = (state_8763[(2)]);
var state_8763__$1 = (function (){var statearr_8771 = state_8763;
(statearr_8771[(9)] = inst_8758);

return statearr_8771;
})();
var statearr_8772_8788 = state_8763__$1;
(statearr_8772_8788[(2)] = null);

(statearr_8772_8788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8764 === (3))){
var inst_8761 = (state_8763[(2)]);
var state_8763__$1 = state_8763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8763__$1,inst_8761);
} else {
if((state_val_8764 === (2))){
var state_8763__$1 = state_8763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8763__$1,(4),in$);
} else {
if((state_val_8764 === (11))){
var inst_8754 = (state_8763[(2)]);
var state_8763__$1 = state_8763;
var statearr_8773_8789 = state_8763__$1;
(statearr_8773_8789[(2)] = inst_8754);

(statearr_8773_8789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8764 === (9))){
var state_8763__$1 = state_8763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8763__$1,(11),out,true);
} else {
if((state_val_8764 === (5))){
var inst_8741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8742 = cljs.core.async.timeout.call(null,ms);
var inst_8743 = [in$,inst_8742];
var inst_8744 = (new cljs.core.PersistentVector(null,2,(5),inst_8741,inst_8743,null));
var state_8763__$1 = state_8763;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8763__$1,(7),inst_8744);
} else {
if((state_val_8764 === (10))){
var inst_8756 = (state_8763[(2)]);
var state_8763__$1 = state_8763;
var statearr_8774_8790 = state_8763__$1;
(statearr_8774_8790[(2)] = inst_8756);

(statearr_8774_8790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8764 === (8))){
var state_8763__$1 = state_8763;
var statearr_8775_8791 = state_8763__$1;
(statearr_8775_8791[(2)] = null);

(statearr_8775_8791[(1)] = (5));


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
});})(c__8515__auto___8783,in$,out))
;
return ((function (switch__8494__auto__,c__8515__auto___8783,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0 = (function (){
var statearr_8779 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8779[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__);

(statearr_8779[(1)] = (1));

return statearr_8779;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1 = (function (state_8763){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_8763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e8780){if((e8780 instanceof Object)){
var ex__8498__auto__ = e8780;
var statearr_8781_8792 = state_8763;
(statearr_8781_8792[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8793 = state_8763;
state_8763 = G__8793;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__ = function(state_8763){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1.call(this,state_8763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___8783,in$,out))
})();
var state__8517__auto__ = (function (){var statearr_8782 = f__8516__auto__.call(null);
(statearr_8782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___8783);

return statearr_8782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___8783,in$,out))
);


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),in$,new cljs.core.Keyword(null,"output","output",-1105869043),out], null);
});
cljs_draw.core.color_input = (function cljs_draw$core$color_input(data,owner){
if(typeof cljs_draw.core.t8797 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t8797 = (function (color_input,data,owner,meta8798){
this.color_input = color_input;
this.data = data;
this.owner = owner;
this.meta8798 = meta8798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t8797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8799,meta8798__$1){
var self__ = this;
var _8799__$1 = this;
return (new cljs_draw.core.t8797(self__.color_input,self__.data,self__.owner,meta8798__$1));
});

cljs_draw.core.t8797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8799){
var self__ = this;
var _8799__$1 = this;
return self__.meta8798;
});

cljs_draw.core.t8797.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t8797.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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

cljs_draw.core.t8797.prototype.om$core$IRender$ = true;

cljs_draw.core.t8797.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"type": "color", "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "style": {"width": (50), "height": (50), "border": (0)}});
});

cljs_draw.core.t8797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-input","color-input",696074651,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta8798","meta8798",-2093269044,null)], null);
});

cljs_draw.core.t8797.cljs$lang$type = true;

cljs_draw.core.t8797.cljs$lang$ctorStr = "cljs_draw.core/t8797";

cljs_draw.core.t8797.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t8797");
});

cljs_draw.core.__GT_t8797 = (function cljs_draw$core$color_input_$___GT_t8797(color_input__$1,data__$1,owner__$1,meta8798){
return (new cljs_draw.core.t8797(color_input__$1,data__$1,owner__$1,meta8798));
});

}

return (new cljs_draw.core.t8797(cljs_draw$core$color_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t8878 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t8878 = (function (color_item,props,owner,meta8879){
this.color_item = color_item;
this.props = props;
this.owner = owner;
this.meta8879 = meta8879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t8878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8880,meta8879__$1){
var self__ = this;
var _8880__$1 = this;
return (new cljs_draw.core.t8878(self__.color_item,self__.props,self__.owner,meta8879__$1));
});

cljs_draw.core.t8878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8880){
var self__ = this;
var _8880__$1 = this;
return self__.meta8879;
});

cljs_draw.core.t8878.prototype.om$core$IInitState$ = true;

cljs_draw.core.t8878.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t8878.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t8878.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__8881 = om.core.get_state.call(null,self__.owner);
var map__8881__$1 = ((cljs.core.seq_QMARK_.call(null,map__8881))?cljs.core.apply.call(null,cljs.core.hash_map,map__8881):map__8881);
var mouseup = cljs.core.get.call(null,map__8881__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__8881__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__8881__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var hide_controls = cljs.core.get.call(null,map__8881__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var c__8515__auto___8956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___8956,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___8956,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_8913){
var state_val_8914 = (state_8913[(1)]);
if((state_val_8914 === (7))){
var inst_8901 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_8902 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_8913__$1 = (function (){var statearr_8915 = state_8913;
(statearr_8915[(7)] = inst_8901);

return statearr_8915;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8913__$1,(9),inst_8902,true);
} else {
if((state_val_8914 === (1))){
var state_8913__$1 = state_8913;
var statearr_8916_8957 = state_8913__$1;
(statearr_8916_8957[(2)] = null);

(statearr_8916_8957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8914 === (4))){
var inst_8884 = (state_8913[(2)]);
var inst_8886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8887 = cljs.core.async.timeout.call(null,(500));
var inst_8888 = [mouseup,inst_8887];
var inst_8889 = (new cljs.core.PersistentVector(null,2,(5),inst_8886,inst_8888,null));
var state_8913__$1 = (function (){var statearr_8917 = state_8913;
(statearr_8917[(8)] = inst_8884);

return statearr_8917;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8913__$1,(5),inst_8889);
} else {
if((state_val_8914 === (6))){
var inst_8896 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_8897 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_8898 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_8899 = inst_8897.call(null,inst_8898);
var state_8913__$1 = (function (){var statearr_8918 = state_8913;
(statearr_8918[(9)] = inst_8896);

return statearr_8918;
})();
var statearr_8919_8958 = state_8913__$1;
(statearr_8919_8958[(2)] = inst_8899);

(statearr_8919_8958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8914 === (3))){
var inst_8911 = (state_8913[(2)]);
var state_8913__$1 = state_8913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8913__$1,inst_8911);
} else {
if((state_val_8914 === (2))){
var state_8913__$1 = state_8913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8913__$1,(4),mousedown);
} else {
if((state_val_8914 === (9))){
var inst_8904 = (state_8913[(2)]);
var state_8913__$1 = (function (){var statearr_8920 = state_8913;
(statearr_8920[(10)] = inst_8904);

return statearr_8920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8913__$1,(10),mouseup);
} else {
if((state_val_8914 === (5))){
var inst_8891 = (state_8913[(2)]);
var inst_8892 = cljs.core.nth.call(null,inst_8891,(0),null);
var inst_8893 = cljs.core.nth.call(null,inst_8891,(1),null);
var inst_8894 = cljs.core._EQ_.call(null,inst_8893,mouseup);
var state_8913__$1 = (function (){var statearr_8921 = state_8913;
(statearr_8921[(11)] = inst_8892);

return statearr_8921;
})();
if(inst_8894){
var statearr_8922_8959 = state_8913__$1;
(statearr_8922_8959[(1)] = (6));

} else {
var statearr_8923_8960 = state_8913__$1;
(statearr_8923_8960[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8914 === (10))){
var inst_8906 = (state_8913[(2)]);
var state_8913__$1 = state_8913;
var statearr_8924_8961 = state_8913__$1;
(statearr_8924_8961[(2)] = inst_8906);

(statearr_8924_8961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8914 === (8))){
var inst_8908 = (state_8913[(2)]);
var state_8913__$1 = (function (){var statearr_8925 = state_8913;
(statearr_8925[(12)] = inst_8908);

return statearr_8925;
})();
var statearr_8926_8962 = state_8913__$1;
(statearr_8926_8962[(2)] = null);

(statearr_8926_8962[(1)] = (2));


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
});})(c__8515__auto___8956,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8494__auto__,c__8515__auto___8956,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8495__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8495__auto____0 = (function (){
var statearr_8930 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8930[(0)] = cljs_draw$core$color_item_$_state_machine__8495__auto__);

(statearr_8930[(1)] = (1));

return statearr_8930;
});
var cljs_draw$core$color_item_$_state_machine__8495__auto____1 = (function (state_8913){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_8913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e8931){if((e8931 instanceof Object)){
var ex__8498__auto__ = e8931;
var statearr_8932_8963 = state_8913;
(statearr_8932_8963[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8964 = state_8913;
state_8913 = G__8964;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8495__auto__ = function(state_8913){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8495__auto____1.call(this,state_8913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8495__auto____0;
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8495__auto____1;
return cljs_draw$core$color_item_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___8956,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8517__auto__ = (function (){var statearr_8933 = f__8516__auto__.call(null);
(statearr_8933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___8956);

return statearr_8933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___8956,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);


var c__8515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto__,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto__,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_8943){
var state_val_8944 = (state_8943[(1)]);
if((state_val_8944 === (1))){
var state_8943__$1 = state_8943;
var statearr_8945_8965 = state_8943__$1;
(statearr_8945_8965[(2)] = null);

(statearr_8945_8965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8944 === (2))){
var inst_8935 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_8943__$1 = state_8943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8943__$1,(4),inst_8935);
} else {
if((state_val_8944 === (3))){
var inst_8941 = (state_8943[(2)]);
var state_8943__$1 = state_8943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8943__$1,inst_8941);
} else {
if((state_val_8944 === (4))){
var inst_8937 = (state_8943[(2)]);
var inst_8938 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_8943__$1 = (function (){var statearr_8946 = state_8943;
(statearr_8946[(7)] = inst_8938);

(statearr_8946[(8)] = inst_8937);

return statearr_8946;
})();
var statearr_8947_8966 = state_8943__$1;
(statearr_8947_8966[(2)] = null);

(statearr_8947_8966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8515__auto__,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8494__auto__,c__8515__auto__,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8495__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8495__auto____0 = (function (){
var statearr_8951 = [null,null,null,null,null,null,null,null,null];
(statearr_8951[(0)] = cljs_draw$core$color_item_$_state_machine__8495__auto__);

(statearr_8951[(1)] = (1));

return statearr_8951;
});
var cljs_draw$core$color_item_$_state_machine__8495__auto____1 = (function (state_8943){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_8943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e8952){if((e8952 instanceof Object)){
var ex__8498__auto__ = e8952;
var statearr_8953_8967 = state_8943;
(statearr_8953_8967[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8968 = state_8943;
state_8943 = G__8968;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8495__auto__ = function(state_8943){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8495__auto____1.call(this,state_8943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8495__auto____0;
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8495__auto____1;
return cljs_draw$core$color_item_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8517__auto__ = (function (){var statearr_8954 = f__8516__auto__.call(null);
(statearr_8954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_8954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__,map__8881,map__8881__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);

return c__8515__auto__;
});

cljs_draw.core.t8878.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t8878.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t8878.prototype.om$core$IRender$ = true;

cljs_draw.core.t8878.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__8955 = om.core.get_state.call(null,self__.owner);
var map__8955__$1 = ((cljs.core.seq_QMARK_.call(null,map__8955))?cljs.core.apply.call(null,cljs.core.hash_map,map__8955):map__8955);
var mouseup = cljs.core.get.call(null,map__8955__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__8955__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__8955__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
return React.DOM.div({"style": {"position": "relative", "width": (50), "height": (50)}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"href": "#", "onClick": ((function (map__8955,map__8955__$1,mouseup,mousedown,mouseout,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__8955,map__8955__$1,mouseup,mousedown,mouseout,___$1))
},"remove")),React.DOM.div({"onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "style": {"position": "absolute", "width": (50), "height": (50), "cursor": "pointer", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":"")}}));
});

cljs_draw.core.t8878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-item","color-item",934499434,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta8879","meta8879",2009607130,null)], null);
});

cljs_draw.core.t8878.cljs$lang$type = true;

cljs_draw.core.t8878.cljs$lang$ctorStr = "cljs_draw.core/t8878";

cljs_draw.core.t8878.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t8878");
});

cljs_draw.core.__GT_t8878 = (function cljs_draw$core$color_item_$___GT_t8878(color_item__$1,props__$1,owner__$1,meta8879){
return (new cljs_draw.core.t8878(color_item__$1,props__$1,owner__$1,meta8879));
});

}

return (new cljs_draw.core.t8878(cljs_draw$core$color_item,props,owner,cljs.core.PersistentArrayMap.EMPTY));
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

gl.clearColor((0),(0),(0),(1));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gl","gl",-246422634),gl,new cljs.core.Keyword(null,"driver","driver",1515263546),driver,new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"pers","pers",-1016576635),pers], null);
});
cljs_draw.core.app = (function cljs_draw$core$app(data,owner){
if(typeof cljs_draw.core.t9081 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t9081 = (function (app,data,owner,meta9082){
this.app = app;
this.data = data;
this.owner = owner;
this.meta9082 = meta9082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t9081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9083,meta9082__$1){
var self__ = this;
var _9083__$1 = this;
return (new cljs_draw.core.t9081(self__.app,self__.data,self__.owner,meta9082__$1));
});

cljs_draw.core.t9081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9083){
var self__ = this;
var _9083__$1 = this;
return self__.meta9082;
});

cljs_draw.core.t9081.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t9081.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvas = node.querySelector("canvas");
cljs_draw.core.renderer = cljs_draw.core.init.call(null,canvas);

cljs_draw.core.render_loop.call(null);

var moved = cljs_draw.util.listen.call(null,canvas,"pointermove");
var c__8515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto__,moved,node,container,canvas,this$__$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto__,moved,node,container,canvas,this$__$1){
return (function (state_9145){
var state_val_9146 = (state_9145[(1)]);
if((state_val_9146 === (7))){
var inst_9141 = (state_9145[(2)]);
var state_9145__$1 = state_9145;
var statearr_9147_9193 = state_9145__$1;
(statearr_9147_9193[(2)] = inst_9141);

(statearr_9147_9193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (20))){
var inst_9116 = cljs.core.not.call(null,cljs_draw.core.current_mesh);
var state_9145__$1 = state_9145;
if(inst_9116){
var statearr_9148_9194 = state_9145__$1;
(statearr_9148_9194[(1)] = (23));

} else {
var statearr_9149_9195 = state_9145__$1;
(statearr_9149_9195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (27))){
var state_9145__$1 = state_9145;
var statearr_9150_9196 = state_9145__$1;
(statearr_9150_9196[(2)] = null);

(statearr_9150_9196[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (1))){
var inst_9084 = (0);
var state_9145__$1 = (function (){var statearr_9151 = state_9145;
(statearr_9151[(7)] = inst_9084);

return statearr_9151;
})();
var statearr_9152_9197 = state_9145__$1;
(statearr_9152_9197[(2)] = null);

(statearr_9152_9197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (24))){
var state_9145__$1 = state_9145;
var statearr_9153_9198 = state_9145__$1;
(statearr_9153_9198[(2)] = null);

(statearr_9153_9198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (4))){
var inst_9087 = (state_9145[(8)]);
var inst_9087__$1 = (state_9145[(2)]);
var state_9145__$1 = (function (){var statearr_9154 = state_9145;
(statearr_9154[(8)] = inst_9087__$1);

return statearr_9154;
})();
if(cljs.core.truth_(inst_9087__$1)){
var statearr_9155_9199 = state_9145__$1;
(statearr_9155_9199[(1)] = (5));

} else {
var statearr_9156_9200 = state_9145__$1;
(statearr_9156_9200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (15))){
var state_9145__$1 = state_9145;
var statearr_9157_9201 = state_9145__$1;
(statearr_9157_9201[(2)] = cljs_draw.core.current_mesh);

(statearr_9157_9201[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (21))){
var state_9145__$1 = state_9145;
var statearr_9158_9202 = state_9145__$1;
(statearr_9158_9202[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (13))){
var inst_9135 = (state_9145[(2)]);
var state_9145__$1 = state_9145;
var statearr_9160_9203 = state_9145__$1;
(statearr_9160_9203[(2)] = inst_9135);

(statearr_9160_9203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (22))){
var inst_9133 = (state_9145[(2)]);
var state_9145__$1 = state_9145;
var statearr_9161_9204 = state_9145__$1;
(statearr_9161_9204[(2)] = inst_9133);

(statearr_9161_9204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (6))){
var state_9145__$1 = state_9145;
var statearr_9162_9205 = state_9145__$1;
(statearr_9162_9205[(2)] = null);

(statearr_9162_9205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (28))){
var inst_9131 = (state_9145[(2)]);
var state_9145__$1 = state_9145;
var statearr_9163_9206 = state_9145__$1;
(statearr_9163_9206[(2)] = inst_9131);

(statearr_9163_9206[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (25))){
var inst_9091 = (state_9145[(9)]);
var inst_9124 = (state_9145[(2)]);
var inst_9125 = cljs_draw.core.start_stroke.call(null,inst_9091);
var state_9145__$1 = (function (){var statearr_9164 = state_9145;
(statearr_9164[(10)] = inst_9124);

return statearr_9164;
})();
var statearr_9165_9207 = state_9145__$1;
(statearr_9165_9207[(2)] = inst_9125);

(statearr_9165_9207[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (17))){
var inst_9109 = cljs_draw.core.finalize_stroke.call(null);
var state_9145__$1 = state_9145;
var statearr_9166_9208 = state_9145__$1;
(statearr_9166_9208[(2)] = inst_9109);

(statearr_9166_9208[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (3))){
var inst_9143 = (state_9145[(2)]);
var state_9145__$1 = state_9145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9145__$1,inst_9143);
} else {
if((state_val_9146 === (12))){
var inst_9084 = (state_9145[(7)]);
var inst_9114 = cljs.core._EQ_.call(null,inst_9084,(0));
var state_9145__$1 = state_9145;
if(inst_9114){
var statearr_9167_9209 = state_9145__$1;
(statearr_9167_9209[(1)] = (20));

} else {
var statearr_9168_9210 = state_9145__$1;
(statearr_9168_9210[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (2))){
var state_9145__$1 = state_9145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9145__$1,(4),moved);
} else {
if((state_val_9146 === (23))){
var inst_9118 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_9119 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_9118);
var inst_9120 = (new Mesh2d(inst_9119));
var inst_9121 = cljs_draw.core.current_mesh = inst_9120;
var state_9145__$1 = state_9145;
var statearr_9169_9211 = state_9145__$1;
(statearr_9169_9211[(2)] = inst_9121);

(statearr_9169_9211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (19))){
var inst_9112 = (state_9145[(2)]);
var state_9145__$1 = state_9145;
var statearr_9170_9212 = state_9145__$1;
(statearr_9170_9212[(2)] = inst_9112);

(statearr_9170_9212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (11))){
var state_9145__$1 = state_9145;
if(cljs.core.truth_(cljs_draw.core.current_mesh)){
var statearr_9171_9213 = state_9145__$1;
(statearr_9171_9213[(1)] = (14));

} else {
var statearr_9172_9214 = state_9145__$1;
(statearr_9172_9214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (9))){
var inst_9092 = (state_9145[(11)]);
var inst_9098 = cljs.core._EQ_.call(null,inst_9092,(0));
var state_9145__$1 = state_9145;
if(inst_9098){
var statearr_9173_9215 = state_9145__$1;
(statearr_9173_9215[(1)] = (11));

} else {
var statearr_9174_9216 = state_9145__$1;
(statearr_9174_9216[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (5))){
var inst_9087 = (state_9145[(8)]);
var inst_9089 = inst_9087.layerX;
var inst_9090 = inst_9087.layerY;
var inst_9091 = thi.ng.geom.core.vector.vec2.call(null,inst_9089,inst_9090);
var inst_9092 = inst_9087.mozPressure;
var inst_9093 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_9094 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_9093);
var inst_9095 = cljs.core.not.call(null,inst_9094);
var state_9145__$1 = (function (){var statearr_9175 = state_9145;
(statearr_9175[(11)] = inst_9092);

(statearr_9175[(9)] = inst_9091);

return statearr_9175;
})();
if(inst_9095){
var statearr_9176_9217 = state_9145__$1;
(statearr_9176_9217[(1)] = (8));

} else {
var statearr_9177_9218 = state_9145__$1;
(statearr_9177_9218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (14))){
var inst_9101 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_9102 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_9101);
var inst_9103 = cljs_draw.core.current_mesh.isColor(inst_9102);
var inst_9104 = cljs.core.not.call(null,inst_9103);
var state_9145__$1 = state_9145;
var statearr_9178_9219 = state_9145__$1;
(statearr_9178_9219[(2)] = inst_9104);

(statearr_9178_9219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (26))){
var inst_9092 = (state_9145[(11)]);
var inst_9091 = (state_9145[(9)]);
var inst_9128 = cljs_draw.core.add_to_stroke.call(null,inst_9091,inst_9092);
var state_9145__$1 = state_9145;
var statearr_9179_9220 = state_9145__$1;
(statearr_9179_9220[(2)] = inst_9128);

(statearr_9179_9220[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (16))){
var inst_9107 = (state_9145[(2)]);
var state_9145__$1 = state_9145;
if(cljs.core.truth_(inst_9107)){
var statearr_9180_9221 = state_9145__$1;
(statearr_9180_9221[(1)] = (17));

} else {
var statearr_9181_9222 = state_9145__$1;
(statearr_9181_9222[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (10))){
var inst_9092 = (state_9145[(11)]);
var inst_9137 = (state_9145[(2)]);
var inst_9084 = inst_9092;
var state_9145__$1 = (function (){var statearr_9182 = state_9145;
(statearr_9182[(12)] = inst_9137);

(statearr_9182[(7)] = inst_9084);

return statearr_9182;
})();
var statearr_9183_9223 = state_9145__$1;
(statearr_9183_9223[(2)] = null);

(statearr_9183_9223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (18))){
var state_9145__$1 = state_9145;
var statearr_9184_9224 = state_9145__$1;
(statearr_9184_9224[(2)] = null);

(statearr_9184_9224[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9146 === (8))){
var state_9145__$1 = state_9145;
var statearr_9185_9225 = state_9145__$1;
(statearr_9185_9225[(2)] = null);

(statearr_9185_9225[(1)] = (10));


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
});})(c__8515__auto__,moved,node,container,canvas,this$__$1))
;
return ((function (switch__8494__auto__,c__8515__auto__,moved,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8495__auto__ = null;
var cljs_draw$core$app_$_state_machine__8495__auto____0 = (function (){
var statearr_9189 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9189[(0)] = cljs_draw$core$app_$_state_machine__8495__auto__);

(statearr_9189[(1)] = (1));

return statearr_9189;
});
var cljs_draw$core$app_$_state_machine__8495__auto____1 = (function (state_9145){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_9145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e9190){if((e9190 instanceof Object)){
var ex__8498__auto__ = e9190;
var statearr_9191_9226 = state_9145;
(statearr_9191_9226[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9227 = state_9145;
state_9145 = G__9227;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8495__auto__ = function(state_9145){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8495__auto____1.call(this,state_9145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8495__auto____0;
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8495__auto____1;
return cljs_draw$core$app_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__,moved,node,container,canvas,this$__$1))
})();
var state__8517__auto__ = (function (){var statearr_9192 = f__8516__auto__.call(null);
(statearr_9192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_9192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__,moved,node,container,canvas,this$__$1))
);

return c__8515__auto__;
});

cljs_draw.core.t9081.prototype.om$core$IRender$ = true;

cljs_draw.core.t9081.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "app", "style": {"height": "100%", "backgroundColor": "#222222"}},React.DOM.div({"className": "canvas-container", "style": {"overflow": "hidden"}},(function (){var dimen = (1200);
var style = {"bottom": (0), "top": (0), "width": (dimen / (2)), "right": (0), "position": "absolute", "border": "1px solid #333333", "height": (dimen / (2)), "left": (0), "margin": "auto"};
return [React.DOM.canvas({"width": dimen, "height": dimen, "style": style})];
})()),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t9081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9082","meta9082",-732754105,null)], null);
});

cljs_draw.core.t9081.cljs$lang$type = true;

cljs_draw.core.t9081.cljs$lang$ctorStr = "cljs_draw.core/t9081";

cljs_draw.core.t9081.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t9081");
});

cljs_draw.core.__GT_t9081 = (function cljs_draw$core$app_$___GT_t9081(app__$1,data__$1,owner__$1,meta9082){
return (new cljs_draw.core.t9081(app__$1,data__$1,owner__$1,meta9082));
});

}

return (new cljs_draw.core.t9081(cljs_draw$core$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map