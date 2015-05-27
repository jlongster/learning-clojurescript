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
if(typeof cljs_draw.core.conn !== 'undefined'){
} else {
cljs_draw.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
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
return new cljs.core.PersistentArrayMap.fromArray([cljs_draw.core.u_p_matrix,p,cljs_draw.core.u_mv_matrix,mv,cljs_draw.core.u_color,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),color,new cljs.core.Keyword(null,"count","count",2139924085),(3)], null),cljs_draw.core.a_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),vertices,new cljs.core.Keyword(null,"count","count",2139924085),(vertices.length / (2))], null)], true, false);
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
var map__9713 = cljs_draw.core.renderer;
var map__9713__$1 = ((cljs.core.seq_QMARK_.call(null,map__9713))?cljs.core.apply.call(null,cljs.core.hash_map,map__9713):map__9713);
var gl = cljs.core.get.call(null,map__9713__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var driver = cljs.core.get.call(null,map__9713__$1,new cljs.core.Keyword(null,"driver","driver",1515263546));
var program = cljs.core.get.call(null,map__9713__$1,new cljs.core.Keyword(null,"program","program",781564284));
var pers = cljs.core.get.call(null,map__9713__$1,new cljs.core.Keyword(null,"pers","pers",-1016576635));
var mv = thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.matrix44.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null));
gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

var seq__9714_9718 = cljs.core.seq.call(null,cljs_draw.core.paint_meshes);
var chunk__9715_9719 = null;
var count__9716_9720 = (0);
var i__9717_9721 = (0);
while(true){
if((i__9717_9721 < count__9716_9720)){
var mesh_9722 = cljs.core._nth.call(null,chunk__9715_9719,i__9717_9721);
cljs_draw.core.render_mesh.call(null,mesh_9722,driver,program,pers,mv);

var G__9723 = seq__9714_9718;
var G__9724 = chunk__9715_9719;
var G__9725 = count__9716_9720;
var G__9726 = (i__9717_9721 + (1));
seq__9714_9718 = G__9723;
chunk__9715_9719 = G__9724;
count__9716_9720 = G__9725;
i__9717_9721 = G__9726;
continue;
} else {
var temp__4422__auto___9727 = cljs.core.seq.call(null,seq__9714_9718);
if(temp__4422__auto___9727){
var seq__9714_9728__$1 = temp__4422__auto___9727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9714_9728__$1)){
var c__5735__auto___9729 = cljs.core.chunk_first.call(null,seq__9714_9728__$1);
var G__9730 = cljs.core.chunk_rest.call(null,seq__9714_9728__$1);
var G__9731 = c__5735__auto___9729;
var G__9732 = cljs.core.count.call(null,c__5735__auto___9729);
var G__9733 = (0);
seq__9714_9718 = G__9730;
chunk__9715_9719 = G__9731;
count__9716_9720 = G__9732;
i__9717_9721 = G__9733;
continue;
} else {
var mesh_9734 = cljs.core.first.call(null,seq__9714_9728__$1);
cljs_draw.core.render_mesh.call(null,mesh_9734,driver,program,pers,mv);

var G__9735 = cljs.core.next.call(null,seq__9714_9728__$1);
var G__9736 = null;
var G__9737 = (0);
var G__9738 = (0);
seq__9714_9718 = G__9735;
chunk__9715_9719 = G__9736;
count__9716_9720 = G__9737;
i__9717_9721 = G__9738;
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
var c__8515__auto___9833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___9833,in$,out){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___9833,in$,out){
return (function (state_9813){
var state_val_9814 = (state_9813[(1)]);
if((state_val_9814 === (7))){
var inst_9796 = (state_9813[(2)]);
var inst_9797 = cljs.core.nth.call(null,inst_9796,(0),null);
var inst_9798 = cljs.core.nth.call(null,inst_9796,(1),null);
var inst_9799 = cljs.core._EQ_.call(null,inst_9798,in$);
var state_9813__$1 = (function (){var statearr_9815 = state_9813;
(statearr_9815[(7)] = inst_9797);

return statearr_9815;
})();
if(inst_9799){
var statearr_9816_9834 = state_9813__$1;
(statearr_9816_9834[(1)] = (8));

} else {
var statearr_9817_9835 = state_9813__$1;
(statearr_9817_9835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9814 === (1))){
var state_9813__$1 = state_9813;
var statearr_9818_9836 = state_9813__$1;
(statearr_9818_9836[(2)] = null);

(statearr_9818_9836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9814 === (4))){
var inst_9788 = (state_9813[(2)]);
var state_9813__$1 = (function (){var statearr_9819 = state_9813;
(statearr_9819[(8)] = inst_9788);

return statearr_9819;
})();
var statearr_9820_9837 = state_9813__$1;
(statearr_9820_9837[(2)] = null);

(statearr_9820_9837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9814 === (6))){
var inst_9808 = (state_9813[(2)]);
var state_9813__$1 = (function (){var statearr_9821 = state_9813;
(statearr_9821[(9)] = inst_9808);

return statearr_9821;
})();
var statearr_9822_9838 = state_9813__$1;
(statearr_9822_9838[(2)] = null);

(statearr_9822_9838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9814 === (3))){
var inst_9811 = (state_9813[(2)]);
var state_9813__$1 = state_9813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9813__$1,inst_9811);
} else {
if((state_val_9814 === (2))){
var state_9813__$1 = state_9813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9813__$1,(4),in$);
} else {
if((state_val_9814 === (11))){
var inst_9804 = (state_9813[(2)]);
var state_9813__$1 = state_9813;
var statearr_9823_9839 = state_9813__$1;
(statearr_9823_9839[(2)] = inst_9804);

(statearr_9823_9839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9814 === (9))){
var state_9813__$1 = state_9813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9813__$1,(11),out,true);
} else {
if((state_val_9814 === (5))){
var inst_9791 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9792 = cljs.core.async.timeout.call(null,ms);
var inst_9793 = [in$,inst_9792];
var inst_9794 = (new cljs.core.PersistentVector(null,2,(5),inst_9791,inst_9793,null));
var state_9813__$1 = state_9813;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9813__$1,(7),inst_9794);
} else {
if((state_val_9814 === (10))){
var inst_9806 = (state_9813[(2)]);
var state_9813__$1 = state_9813;
var statearr_9824_9840 = state_9813__$1;
(statearr_9824_9840[(2)] = inst_9806);

(statearr_9824_9840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9814 === (8))){
var state_9813__$1 = state_9813;
var statearr_9825_9841 = state_9813__$1;
(statearr_9825_9841[(2)] = null);

(statearr_9825_9841[(1)] = (5));


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
});})(c__8515__auto___9833,in$,out))
;
return ((function (switch__8494__auto__,c__8515__auto___9833,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0 = (function (){
var statearr_9829 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9829[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__);

(statearr_9829[(1)] = (1));

return statearr_9829;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1 = (function (state_9813){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_9813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e9830){if((e9830 instanceof Object)){
var ex__8498__auto__ = e9830;
var statearr_9831_9842 = state_9813;
(statearr_9831_9842[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9843 = state_9813;
state_9813 = G__9843;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__ = function(state_9813){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1.call(this,state_9813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___9833,in$,out))
})();
var state__8517__auto__ = (function (){var statearr_9832 = f__8516__auto__.call(null);
(statearr_9832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___9833);

return statearr_9832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___9833,in$,out))
);


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),in$,new cljs.core.Keyword(null,"output","output",-1105869043),out], null);
});
cljs_draw.core.color_input = (function cljs_draw$core$color_input(data,owner){
if(typeof cljs_draw.core.t9847 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t9847 = (function (color_input,data,owner,meta9848){
this.color_input = color_input;
this.data = data;
this.owner = owner;
this.meta9848 = meta9848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t9847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9849,meta9848__$1){
var self__ = this;
var _9849__$1 = this;
return (new cljs_draw.core.t9847(self__.color_input,self__.data,self__.owner,meta9848__$1));
});

cljs_draw.core.t9847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9849){
var self__ = this;
var _9849__$1 = this;
return self__.meta9848;
});

cljs_draw.core.t9847.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t9847.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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

cljs_draw.core.t9847.prototype.om$core$IRender$ = true;

cljs_draw.core.t9847.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"type": "color", "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "style": {"width": (50), "height": (50), "border": (0)}});
});

cljs_draw.core.t9847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-input","color-input",696074651,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9848","meta9848",1544824902,null)], null);
});

cljs_draw.core.t9847.cljs$lang$type = true;

cljs_draw.core.t9847.cljs$lang$ctorStr = "cljs_draw.core/t9847";

cljs_draw.core.t9847.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t9847");
});

cljs_draw.core.__GT_t9847 = (function cljs_draw$core$color_input_$___GT_t9847(color_input__$1,data__$1,owner__$1,meta9848){
return (new cljs_draw.core.t9847(color_input__$1,data__$1,owner__$1,meta9848));
});

}

return (new cljs_draw.core.t9847(cljs_draw$core$color_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t9928 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t9928 = (function (color_item,props,owner,meta9929){
this.color_item = color_item;
this.props = props;
this.owner = owner;
this.meta9929 = meta9929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t9928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9930,meta9929__$1){
var self__ = this;
var _9930__$1 = this;
return (new cljs_draw.core.t9928(self__.color_item,self__.props,self__.owner,meta9929__$1));
});

cljs_draw.core.t9928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9930){
var self__ = this;
var _9930__$1 = this;
return self__.meta9929;
});

cljs_draw.core.t9928.prototype.om$core$IInitState$ = true;

cljs_draw.core.t9928.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t9928.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t9928.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__9931 = om.core.get_state.call(null,self__.owner);
var map__9931__$1 = ((cljs.core.seq_QMARK_.call(null,map__9931))?cljs.core.apply.call(null,cljs.core.hash_map,map__9931):map__9931);
var mouseup = cljs.core.get.call(null,map__9931__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__9931__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__9931__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var hide_controls = cljs.core.get.call(null,map__9931__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var c__8515__auto___10006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto___10006,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto___10006,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_9963){
var state_val_9964 = (state_9963[(1)]);
if((state_val_9964 === (7))){
var inst_9951 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_9952 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_9963__$1 = (function (){var statearr_9965 = state_9963;
(statearr_9965[(7)] = inst_9951);

return statearr_9965;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9963__$1,(9),inst_9952,true);
} else {
if((state_val_9964 === (1))){
var state_9963__$1 = state_9963;
var statearr_9966_10007 = state_9963__$1;
(statearr_9966_10007[(2)] = null);

(statearr_9966_10007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (4))){
var inst_9934 = (state_9963[(2)]);
var inst_9936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9937 = cljs.core.async.timeout.call(null,(500));
var inst_9938 = [mouseup,inst_9937];
var inst_9939 = (new cljs.core.PersistentVector(null,2,(5),inst_9936,inst_9938,null));
var state_9963__$1 = (function (){var statearr_9967 = state_9963;
(statearr_9967[(8)] = inst_9934);

return statearr_9967;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9963__$1,(5),inst_9939);
} else {
if((state_val_9964 === (6))){
var inst_9946 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_9947 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_9948 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_9949 = inst_9947.call(null,inst_9948);
var state_9963__$1 = (function (){var statearr_9968 = state_9963;
(statearr_9968[(9)] = inst_9946);

return statearr_9968;
})();
var statearr_9969_10008 = state_9963__$1;
(statearr_9969_10008[(2)] = inst_9949);

(statearr_9969_10008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (3))){
var inst_9961 = (state_9963[(2)]);
var state_9963__$1 = state_9963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9963__$1,inst_9961);
} else {
if((state_val_9964 === (2))){
var state_9963__$1 = state_9963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9963__$1,(4),mousedown);
} else {
if((state_val_9964 === (9))){
var inst_9954 = (state_9963[(2)]);
var state_9963__$1 = (function (){var statearr_9970 = state_9963;
(statearr_9970[(10)] = inst_9954);

return statearr_9970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9963__$1,(10),mouseup);
} else {
if((state_val_9964 === (5))){
var inst_9941 = (state_9963[(2)]);
var inst_9942 = cljs.core.nth.call(null,inst_9941,(0),null);
var inst_9943 = cljs.core.nth.call(null,inst_9941,(1),null);
var inst_9944 = cljs.core._EQ_.call(null,inst_9943,mouseup);
var state_9963__$1 = (function (){var statearr_9971 = state_9963;
(statearr_9971[(11)] = inst_9942);

return statearr_9971;
})();
if(inst_9944){
var statearr_9972_10009 = state_9963__$1;
(statearr_9972_10009[(1)] = (6));

} else {
var statearr_9973_10010 = state_9963__$1;
(statearr_9973_10010[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (10))){
var inst_9956 = (state_9963[(2)]);
var state_9963__$1 = state_9963;
var statearr_9974_10011 = state_9963__$1;
(statearr_9974_10011[(2)] = inst_9956);

(statearr_9974_10011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (8))){
var inst_9958 = (state_9963[(2)]);
var state_9963__$1 = (function (){var statearr_9975 = state_9963;
(statearr_9975[(12)] = inst_9958);

return statearr_9975;
})();
var statearr_9976_10012 = state_9963__$1;
(statearr_9976_10012[(2)] = null);

(statearr_9976_10012[(1)] = (2));


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
});})(c__8515__auto___10006,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8494__auto__,c__8515__auto___10006,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8495__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8495__auto____0 = (function (){
var statearr_9980 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9980[(0)] = cljs_draw$core$color_item_$_state_machine__8495__auto__);

(statearr_9980[(1)] = (1));

return statearr_9980;
});
var cljs_draw$core$color_item_$_state_machine__8495__auto____1 = (function (state_9963){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_9963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e9981){if((e9981 instanceof Object)){
var ex__8498__auto__ = e9981;
var statearr_9982_10013 = state_9963;
(statearr_9982_10013[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10014 = state_9963;
state_9963 = G__10014;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8495__auto__ = function(state_9963){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8495__auto____1.call(this,state_9963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8495__auto____0;
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8495__auto____1;
return cljs_draw$core$color_item_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto___10006,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8517__auto__ = (function (){var statearr_9983 = f__8516__auto__.call(null);
(statearr_9983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto___10006);

return statearr_9983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto___10006,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);


var c__8515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8515__auto__,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8516__auto__ = (function (){var switch__8494__auto__ = ((function (c__8515__auto__,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_9993){
var state_val_9994 = (state_9993[(1)]);
if((state_val_9994 === (1))){
var state_9993__$1 = state_9993;
var statearr_9995_10015 = state_9993__$1;
(statearr_9995_10015[(2)] = null);

(statearr_9995_10015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9994 === (2))){
var inst_9985 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_9993__$1 = state_9993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9993__$1,(4),inst_9985);
} else {
if((state_val_9994 === (3))){
var inst_9991 = (state_9993[(2)]);
var state_9993__$1 = state_9993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9993__$1,inst_9991);
} else {
if((state_val_9994 === (4))){
var inst_9987 = (state_9993[(2)]);
var inst_9988 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_9993__$1 = (function (){var statearr_9996 = state_9993;
(statearr_9996[(7)] = inst_9987);

(statearr_9996[(8)] = inst_9988);

return statearr_9996;
})();
var statearr_9997_10016 = state_9993__$1;
(statearr_9997_10016[(2)] = null);

(statearr_9997_10016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8515__auto__,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8494__auto__,c__8515__auto__,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8495__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8495__auto____0 = (function (){
var statearr_10001 = [null,null,null,null,null,null,null,null,null];
(statearr_10001[(0)] = cljs_draw$core$color_item_$_state_machine__8495__auto__);

(statearr_10001[(1)] = (1));

return statearr_10001;
});
var cljs_draw$core$color_item_$_state_machine__8495__auto____1 = (function (state_9993){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_9993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e10002){if((e10002 instanceof Object)){
var ex__8498__auto__ = e10002;
var statearr_10003_10017 = state_9993;
(statearr_10003_10017[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10018 = state_9993;
state_9993 = G__10018;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8495__auto__ = function(state_9993){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8495__auto____1.call(this,state_9993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8495__auto____0;
cljs_draw$core$color_item_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8495__auto____1;
return cljs_draw$core$color_item_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8517__auto__ = (function (){var statearr_10004 = f__8516__auto__.call(null);
(statearr_10004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_10004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__,map__9931,map__9931__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);

return c__8515__auto__;
});

cljs_draw.core.t9928.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t9928.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t9928.prototype.om$core$IRender$ = true;

cljs_draw.core.t9928.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__10005 = om.core.get_state.call(null,self__.owner);
var map__10005__$1 = ((cljs.core.seq_QMARK_.call(null,map__10005))?cljs.core.apply.call(null,cljs.core.hash_map,map__10005):map__10005);
var mouseup = cljs.core.get.call(null,map__10005__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__10005__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__10005__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
return React.DOM.div({"style": {"position": "relative", "width": (50), "height": (50)}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"href": "#", "onClick": ((function (map__10005,map__10005__$1,mouseup,mousedown,mouseout,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__10005,map__10005__$1,mouseup,mousedown,mouseout,___$1))
},"remove")),React.DOM.div({"onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "style": {"position": "absolute", "width": (50), "height": (50), "cursor": "pointer", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":"")}}));
});

cljs_draw.core.t9928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-item","color-item",934499434,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9929","meta9929",-1578772626,null)], null);
});

cljs_draw.core.t9928.cljs$lang$type = true;

cljs_draw.core.t9928.cljs$lang$ctorStr = "cljs_draw.core/t9928";

cljs_draw.core.t9928.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t9928");
});

cljs_draw.core.__GT_t9928 = (function cljs_draw$core$color_item_$___GT_t9928(color_item__$1,props__$1,owner__$1,meta9929){
return (new cljs_draw.core.t9928(color_item__$1,props__$1,owner__$1,meta9929));
});

}

return (new cljs_draw.core.t9928(cljs_draw$core$color_item,props,owner,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cljs_draw.core.t10113 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t10113 = (function (app,data,owner,meta10114){
this.app = app;
this.data = data;
this.owner = owner;
this.meta10114 = meta10114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t10113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10115,meta10114__$1){
var self__ = this;
var _10115__$1 = this;
return (new cljs_draw.core.t10113(self__.app,self__.data,self__.owner,meta10114__$1));
});

cljs_draw.core.t10113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10115){
var self__ = this;
var _10115__$1 = this;
return self__.meta10114;
});

cljs_draw.core.t10113.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t10113.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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
return (function (state_10167){
var state_val_10168 = (state_10167[(1)]);
if((state_val_10168 === (7))){
var inst_10163 = (state_10167[(2)]);
var state_10167__$1 = state_10167;
var statearr_10169_10207 = state_10167__$1;
(statearr_10169_10207[(2)] = inst_10163);

(statearr_10169_10207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (20))){
var inst_10119 = (state_10167[(7)]);
var inst_10116 = (state_10167[(8)]);
var inst_10121 = (state_10167[(9)]);
var inst_10138 = (function (){var brush_pressed = inst_10116;
var temp__4420__auto__ = inst_10119;
var e = inst_10119;
var pressure = inst_10121;
return ((function (brush_pressed,temp__4420__auto__,e,pressure,inst_10119,inst_10116,inst_10121,state_val_10168,c__8515__auto__,moved,node,container,canvas,this$__$1){
return (function (x){
return (x / (255));
});
;})(brush_pressed,temp__4420__auto__,e,pressure,inst_10119,inst_10116,inst_10121,state_val_10168,c__8515__auto__,moved,node,container,canvas,this$__$1))
})();
var inst_10139 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_10140 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_10139);
var inst_10141 = goog.color.hexToRgb(inst_10140);
var inst_10142 = cljs.core.map.call(null,inst_10138,inst_10141);
var inst_10143 = (new Mesh2d(inst_10142));
var inst_10144 = cljs_draw.core.current_mesh = inst_10143;
var state_10167__$1 = state_10167;
var statearr_10170_10208 = state_10167__$1;
(statearr_10170_10208[(2)] = inst_10144);

(statearr_10170_10208[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (1))){
var inst_10116 = false;
var state_10167__$1 = (function (){var statearr_10171 = state_10167;
(statearr_10171[(8)] = inst_10116);

return statearr_10171;
})();
var statearr_10172_10209 = state_10167__$1;
(statearr_10172_10209[(2)] = null);

(statearr_10172_10209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (4))){
var inst_10119 = (state_10167[(7)]);
var inst_10119__$1 = (state_10167[(2)]);
var state_10167__$1 = (function (){var statearr_10173 = state_10167;
(statearr_10173[(7)] = inst_10119__$1);

return statearr_10173;
})();
if(cljs.core.truth_(inst_10119__$1)){
var statearr_10174_10210 = state_10167__$1;
(statearr_10174_10210[(1)] = (5));

} else {
var statearr_10175_10211 = state_10167__$1;
(statearr_10175_10211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (15))){
var state_10167__$1 = state_10167;
var statearr_10176_10212 = state_10167__$1;
(statearr_10176_10212[(2)] = null);

(statearr_10176_10212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (21))){
var state_10167__$1 = state_10167;
var statearr_10177_10213 = state_10167__$1;
(statearr_10177_10213[(2)] = null);

(statearr_10177_10213[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (13))){
var inst_10157 = (state_10167[(2)]);
var state_10167__$1 = state_10167;
var statearr_10178_10214 = state_10167__$1;
(statearr_10178_10214[(2)] = inst_10157);

(statearr_10178_10214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (22))){
var inst_10119 = (state_10167[(7)]);
var inst_10121 = (state_10167[(9)]);
var inst_10147 = (state_10167[(2)]);
var inst_10148 = inst_10119.layerX;
var inst_10149 = inst_10119.layerY;
var inst_10150 = thi.ng.geom.core.vector.vec2.call(null,inst_10148,inst_10149);
var inst_10151 = cljs_draw.core.add_to_stroke.call(null,inst_10150,inst_10121);
var inst_10116 = true;
var state_10167__$1 = (function (){var statearr_10179 = state_10167;
(statearr_10179[(8)] = inst_10116);

(statearr_10179[(10)] = inst_10151);

(statearr_10179[(11)] = inst_10147);

return statearr_10179;
})();
var statearr_10180_10215 = state_10167__$1;
(statearr_10180_10215[(2)] = null);

(statearr_10180_10215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (6))){
var state_10167__$1 = state_10167;
var statearr_10181_10216 = state_10167__$1;
(statearr_10181_10216[(2)] = null);

(statearr_10181_10216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (17))){
var inst_10136 = cljs.core.not.call(null,cljs_draw.core.current_mesh);
var state_10167__$1 = state_10167;
if(inst_10136){
var statearr_10182_10217 = state_10167__$1;
(statearr_10182_10217[(1)] = (20));

} else {
var statearr_10183_10218 = state_10167__$1;
(statearr_10183_10218[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (3))){
var inst_10165 = (state_10167[(2)]);
var state_10167__$1 = state_10167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10167__$1,inst_10165);
} else {
if((state_val_10168 === (12))){
var state_10167__$1 = state_10167;
var statearr_10184_10219 = state_10167__$1;
(statearr_10184_10219[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (2))){
var state_10167__$1 = state_10167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10167__$1,(4),moved);
} else {
if((state_val_10168 === (19))){
var inst_10155 = (state_10167[(2)]);
var state_10167__$1 = state_10167;
var statearr_10186_10220 = state_10167__$1;
(statearr_10186_10220[(2)] = inst_10155);

(statearr_10186_10220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (11))){
var inst_10116 = (state_10167[(8)]);
var state_10167__$1 = state_10167;
if(cljs.core.truth_(inst_10116)){
var statearr_10187_10221 = state_10167__$1;
(statearr_10187_10221[(1)] = (14));

} else {
var statearr_10188_10222 = state_10167__$1;
(statearr_10188_10222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (9))){
var inst_10121 = (state_10167[(9)]);
var inst_10127 = cljs.core._EQ_.call(null,inst_10121,(0));
var state_10167__$1 = state_10167;
if(inst_10127){
var statearr_10189_10223 = state_10167__$1;
(statearr_10189_10223[(1)] = (11));

} else {
var statearr_10190_10224 = state_10167__$1;
(statearr_10190_10224[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (5))){
var inst_10119 = (state_10167[(7)]);
var inst_10121 = inst_10119.mozPressure;
var inst_10122 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_10123 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_10122);
var inst_10124 = cljs.core.not.call(null,inst_10123);
var state_10167__$1 = (function (){var statearr_10191 = state_10167;
(statearr_10191[(9)] = inst_10121);

return statearr_10191;
})();
if(inst_10124){
var statearr_10192_10225 = state_10167__$1;
(statearr_10192_10225[(1)] = (8));

} else {
var statearr_10193_10226 = state_10167__$1;
(statearr_10193_10226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (14))){
var inst_10130 = cljs_draw.core.finalize_stroke.call(null);
var state_10167__$1 = state_10167;
var statearr_10194_10227 = state_10167__$1;
(statearr_10194_10227[(2)] = inst_10130);

(statearr_10194_10227[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (16))){
var inst_10133 = (state_10167[(2)]);
var state_10167__$1 = state_10167;
var statearr_10195_10228 = state_10167__$1;
(statearr_10195_10228[(2)] = inst_10133);

(statearr_10195_10228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (10))){
var inst_10159 = (state_10167[(2)]);
var inst_10116 = false;
var state_10167__$1 = (function (){var statearr_10196 = state_10167;
(statearr_10196[(8)] = inst_10116);

(statearr_10196[(12)] = inst_10159);

return statearr_10196;
})();
var statearr_10197_10229 = state_10167__$1;
(statearr_10197_10229[(2)] = null);

(statearr_10197_10229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (18))){
var state_10167__$1 = state_10167;
var statearr_10198_10230 = state_10167__$1;
(statearr_10198_10230[(2)] = null);

(statearr_10198_10230[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (8))){
var state_10167__$1 = state_10167;
var statearr_10199_10231 = state_10167__$1;
(statearr_10199_10231[(2)] = null);

(statearr_10199_10231[(1)] = (10));


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
});})(c__8515__auto__,moved,node,container,canvas,this$__$1))
;
return ((function (switch__8494__auto__,c__8515__auto__,moved,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8495__auto__ = null;
var cljs_draw$core$app_$_state_machine__8495__auto____0 = (function (){
var statearr_10203 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10203[(0)] = cljs_draw$core$app_$_state_machine__8495__auto__);

(statearr_10203[(1)] = (1));

return statearr_10203;
});
var cljs_draw$core$app_$_state_machine__8495__auto____1 = (function (state_10167){
while(true){
var ret_value__8496__auto__ = (function (){try{while(true){
var result__8497__auto__ = switch__8494__auto__.call(null,state_10167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8497__auto__;
}
break;
}
}catch (e10204){if((e10204 instanceof Object)){
var ex__8498__auto__ = e10204;
var statearr_10205_10232 = state_10167;
(statearr_10205_10232[(5)] = ex__8498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10233 = state_10167;
state_10167 = G__10233;
continue;
} else {
return ret_value__8496__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8495__auto__ = function(state_10167){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8495__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8495__auto____1.call(this,state_10167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8495__auto____0;
cljs_draw$core$app_$_state_machine__8495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8495__auto____1;
return cljs_draw$core$app_$_state_machine__8495__auto__;
})()
;})(switch__8494__auto__,c__8515__auto__,moved,node,container,canvas,this$__$1))
})();
var state__8517__auto__ = (function (){var statearr_10206 = f__8516__auto__.call(null);
(statearr_10206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8515__auto__);

return statearr_10206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8517__auto__);
});})(c__8515__auto__,moved,node,container,canvas,this$__$1))
);

return c__8515__auto__;
});

cljs_draw.core.t10113.prototype.om$core$IRender$ = true;

cljs_draw.core.t10113.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "app", "style": {"height": "100%", "backgroundColor": "#222222"}},React.DOM.div({"className": "canvas-container", "style": {"overflow": "hidden"}},(function (){var dimen = (1200);
var style = {"bottom": (0), "top": (0), "width": (dimen / (2)), "right": (0), "position": "absolute", "border": "1px solid #333333", "height": (dimen / (2)), "left": (0), "margin": "auto"};
return [React.DOM.canvas({"width": dimen, "height": dimen, "style": style})];
})()),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t10113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta10114","meta10114",-670676075,null)], null);
});

cljs_draw.core.t10113.cljs$lang$type = true;

cljs_draw.core.t10113.cljs$lang$ctorStr = "cljs_draw.core/t10113";

cljs_draw.core.t10113.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs_draw.core/t10113");
});

cljs_draw.core.__GT_t10113 = (function cljs_draw$core$app_$___GT_t10113(app__$1,data__$1,owner__$1,meta10114){
return (new cljs_draw.core.t10113(app__$1,data__$1,owner__$1,meta10114));
});

}

return (new cljs_draw.core.t10113(cljs_draw$core$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map