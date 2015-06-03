// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs_draw.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('gamma_driver.drivers.basic');
goog.require('thi.ng.math.core');
goog.require('gamma.program');
goog.require('om.dom');
goog.require('goog.color');
goog.require('thi.ng.geom.core');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('thi.ng.geom.core.vector');
goog.require('gamma.api');
goog.require('gamma_driver.api');
goog.require('cljs_draw.util');
goog.require('gamma_driver.protocols');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof cljs_draw.core.app_state !== 'undefined'){
} else {
cljs_draw.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-history","stroke-history",-272903291),new cljs.core.Keyword(null,"listening-for-color","listening-for-color",-341629494),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"current-brush","current-brush",935402),new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"brushes","brushes",1893051952),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685),new cljs.core.Keyword(null,"current-color","current-color",1731984119),new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847)],[cljs.core.PersistentVector.EMPTY,false,"#1b1b1b",new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimen","dimen",-234621985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1200),(1200)], null),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),(50)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#cccccc"], null),cljs.core.PersistentArrayMap.EMPTY,null,"#cccccc",cljs.core.PersistentVector.EMPTY]));
}
cljs_draw.core.load_texture = (function cljs_draw$core$load_texture(url){
var out = cljs.core.async.chan.call(null);
var image = (new Image());
(image["onload"] = ((function (out,image){
return (function (){
return cljs.core.async.put_BANG_.call(null,out,image);
});})(out,image))
);

(image["src"] = url);

return out;
});
cljs_draw.core.take_into = (function cljs_draw$core$take_into(coll,chans){
var c__8616__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto__){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto__){
return (function (state_21750){
var state_val_21751 = (state_21750[(1)]);
if((state_val_21751 === (1))){
var inst_21733 = coll;
var inst_21734 = chans;
var state_21750__$1 = (function (){var statearr_21752 = state_21750;
(statearr_21752[(7)] = inst_21733);

(statearr_21752[(8)] = inst_21734);

return statearr_21752;
})();
var statearr_21753_21767 = state_21750__$1;
(statearr_21753_21767[(2)] = null);

(statearr_21753_21767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (2))){
var inst_21734 = (state_21750[(8)]);
var inst_21736 = cljs.core.empty_QMARK_.call(null,inst_21734);
var state_21750__$1 = state_21750;
if(inst_21736){
var statearr_21754_21768 = state_21750__$1;
(statearr_21754_21768[(1)] = (4));

} else {
var statearr_21755_21769 = state_21750__$1;
(statearr_21755_21769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (3))){
var inst_21748 = (state_21750[(2)]);
var state_21750__$1 = state_21750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21750__$1,inst_21748);
} else {
if((state_val_21751 === (4))){
var inst_21733 = (state_21750[(7)]);
var state_21750__$1 = state_21750;
var statearr_21756_21770 = state_21750__$1;
(statearr_21756_21770[(2)] = inst_21733);

(statearr_21756_21770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (5))){
var inst_21734 = (state_21750[(8)]);
var inst_21739 = cljs.core.first.call(null,inst_21734);
var state_21750__$1 = state_21750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21750__$1,(7),inst_21739);
} else {
if((state_val_21751 === (6))){
var inst_21746 = (state_21750[(2)]);
var state_21750__$1 = state_21750;
var statearr_21757_21771 = state_21750__$1;
(statearr_21757_21771[(2)] = inst_21746);

(statearr_21757_21771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (7))){
var inst_21733 = (state_21750[(7)]);
var inst_21734 = (state_21750[(8)]);
var inst_21741 = (state_21750[(2)]);
var inst_21742 = cljs.core.conj.call(null,inst_21733,inst_21741);
var inst_21743 = cljs.core.rest.call(null,inst_21734);
var inst_21733__$1 = inst_21742;
var inst_21734__$1 = inst_21743;
var state_21750__$1 = (function (){var statearr_21758 = state_21750;
(statearr_21758[(7)] = inst_21733__$1);

(statearr_21758[(8)] = inst_21734__$1);

return statearr_21758;
})();
var statearr_21759_21772 = state_21750__$1;
(statearr_21759_21772[(2)] = null);

(statearr_21759_21772[(1)] = (2));


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
});})(c__8616__auto__))
;
return ((function (switch__8595__auto__,c__8616__auto__){
return (function() {
var cljs_draw$core$take_into_$_state_machine__8596__auto__ = null;
var cljs_draw$core$take_into_$_state_machine__8596__auto____0 = (function (){
var statearr_21763 = [null,null,null,null,null,null,null,null,null];
(statearr_21763[(0)] = cljs_draw$core$take_into_$_state_machine__8596__auto__);

(statearr_21763[(1)] = (1));

return statearr_21763;
});
var cljs_draw$core$take_into_$_state_machine__8596__auto____1 = (function (state_21750){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_21750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e21764){if((e21764 instanceof Object)){
var ex__8599__auto__ = e21764;
var statearr_21765_21773 = state_21750;
(statearr_21765_21773[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21774 = state_21750;
state_21750 = G__21774;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$take_into_$_state_machine__8596__auto__ = function(state_21750){
switch(arguments.length){
case 0:
return cljs_draw$core$take_into_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$take_into_$_state_machine__8596__auto____1.call(this,state_21750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$take_into_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$take_into_$_state_machine__8596__auto____0;
cljs_draw$core$take_into_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$take_into_$_state_machine__8596__auto____1;
return cljs_draw$core$take_into_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__))
})();
var state__8618__auto__ = (function (){var statearr_21766 = f__8617__auto__.call(null);
(statearr_21766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_21766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__))
);

return c__8616__auto__;
});
cljs_draw.core.merge_in_BANG_ = (function cljs_draw$core$merge_in_BANG_(data,key,m){
return cljs.core.swap_BANG_.call(null,data,(function (p1__21775_SHARP_){
return cljs.core.assoc.call(null,p1__21775_SHARP_,key,cljs.core.merge.call(null,m,(function (){var or__4953__auto__ = cljs.core.get.call(null,p1__21775_SHARP_,key);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
}));
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
var c__8616__auto___21870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___21870,in$,out){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___21870,in$,out){
return (function (state_21850){
var state_val_21851 = (state_21850[(1)]);
if((state_val_21851 === (7))){
var inst_21833 = (state_21850[(2)]);
var inst_21834 = cljs.core.nth.call(null,inst_21833,(0),null);
var inst_21835 = cljs.core.nth.call(null,inst_21833,(1),null);
var inst_21836 = cljs.core._EQ_.call(null,inst_21835,in$);
var state_21850__$1 = (function (){var statearr_21852 = state_21850;
(statearr_21852[(7)] = inst_21834);

return statearr_21852;
})();
if(inst_21836){
var statearr_21853_21871 = state_21850__$1;
(statearr_21853_21871[(1)] = (8));

} else {
var statearr_21854_21872 = state_21850__$1;
(statearr_21854_21872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (1))){
var state_21850__$1 = state_21850;
var statearr_21855_21873 = state_21850__$1;
(statearr_21855_21873[(2)] = null);

(statearr_21855_21873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (4))){
var inst_21825 = (state_21850[(2)]);
var state_21850__$1 = (function (){var statearr_21856 = state_21850;
(statearr_21856[(8)] = inst_21825);

return statearr_21856;
})();
var statearr_21857_21874 = state_21850__$1;
(statearr_21857_21874[(2)] = null);

(statearr_21857_21874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (6))){
var inst_21845 = (state_21850[(2)]);
var state_21850__$1 = (function (){var statearr_21858 = state_21850;
(statearr_21858[(9)] = inst_21845);

return statearr_21858;
})();
var statearr_21859_21875 = state_21850__$1;
(statearr_21859_21875[(2)] = null);

(statearr_21859_21875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (3))){
var inst_21848 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21850__$1,inst_21848);
} else {
if((state_val_21851 === (2))){
var state_21850__$1 = state_21850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21850__$1,(4),in$);
} else {
if((state_val_21851 === (11))){
var inst_21841 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21860_21876 = state_21850__$1;
(statearr_21860_21876[(2)] = inst_21841);

(statearr_21860_21876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (9))){
var state_21850__$1 = state_21850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21850__$1,(11),out,true);
} else {
if((state_val_21851 === (5))){
var inst_21828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21829 = cljs.core.async.timeout.call(null,ms);
var inst_21830 = [in$,inst_21829];
var inst_21831 = (new cljs.core.PersistentVector(null,2,(5),inst_21828,inst_21830,null));
var state_21850__$1 = state_21850;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21850__$1,(7),inst_21831);
} else {
if((state_val_21851 === (10))){
var inst_21843 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21861_21877 = state_21850__$1;
(statearr_21861_21877[(2)] = inst_21843);

(statearr_21861_21877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (8))){
var state_21850__$1 = state_21850;
var statearr_21862_21878 = state_21850__$1;
(statearr_21862_21878[(2)] = null);

(statearr_21862_21878[(1)] = (5));


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
});})(c__8616__auto___21870,in$,out))
;
return ((function (switch__8595__auto__,c__8616__auto___21870,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____0 = (function (){
var statearr_21866 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21866[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__);

(statearr_21866[(1)] = (1));

return statearr_21866;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____1 = (function (state_21850){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_21850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e21867){if((e21867 instanceof Object)){
var ex__8599__auto__ = e21867;
var statearr_21868_21879 = state_21850;
(statearr_21868_21879[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21880 = state_21850;
state_21850 = G__21880;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__ = function(state_21850){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____1.call(this,state_21850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___21870,in$,out))
})();
var state__8618__auto__ = (function (){var statearr_21869 = f__8617__auto__.call(null);
(statearr_21869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___21870);

return statearr_21869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___21870,in$,out))
);


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),in$,new cljs.core.Keyword(null,"output","output",-1105869043),out], null);
});
cljs_draw.core.u_p_matrix = gamma.api.uniform.call(null,"uPMatrix",new cljs.core.Keyword(null,"mat4","mat4",-237531594));
cljs_draw.core.u_mv_matrix = gamma.api.uniform.call(null,"uMVMatrix",new cljs.core.Keyword(null,"mat4","mat4",-237531594));
cljs_draw.core.u_color = gamma.api.uniform.call(null,"uColor",new cljs.core.Keyword(null,"vec3","vec3",1116680488));
cljs_draw.core.u_sampler = gamma.api.uniform.call(null,"uSampler",new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644));
cljs_draw.core.a_value = gamma.api.attribute.call(null,"aValue",new cljs.core.Keyword(null,"float","float",-1732389368));
cljs_draw.core.a_position = gamma.api.attribute.call(null,"aVertexPosition",new cljs.core.Keyword(null,"vec2","vec2",-762258640));
cljs_draw.core.a_texcoord = gamma.api.attribute.call(null,"aTexCoord",new cljs.core.Keyword(null,"vec2","vec2",-762258640));
cljs_draw.core.v_value = gamma.api.varying.call(null,"vValue",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"mediump","mediump",-1401096909));
cljs_draw.core.v_texcoord = gamma.api.varying.call(null,"vTexCoord",new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"mediump","mediump",-1401096909));
cljs_draw.core.shader_rand = (function cljs_draw$core$shader_rand(v){
return gamma.api.fract.call(null,gamma.api._STAR_.call(null,gamma.api.sin.call(null,gamma.api.dot.call(null,gamma.api.vec2.call(null,v),gamma.api.vec2.call(null,12.9898,78.233))),43758.5453));
});
cljs_draw.core.shader_lerp = (function cljs_draw$core$shader_lerp(a,b,s){
return gamma.api._PLUS_.call(null,a,gamma.api._STAR_.call(null,s,gamma.api._.call(null,b,a)));
});
cljs_draw.core.default_vertex_position = gamma.api._STAR_.call(null,gamma.api._STAR_.call(null,cljs_draw.core.u_p_matrix,cljs_draw.core.u_mv_matrix),gamma.api.vec4.call(null,cljs_draw.core.a_position,(0),(1)));
cljs_draw.core.compile_brush = (function cljs_draw$core$compile_brush(driver,props){
return gamma_driver.protocols.program.call(null,driver,gamma.program.program.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"mediump","mediump",-1401096909)], null))));
});
cljs_draw.core.get_brush = (function cljs_draw$core$get_brush(state,name){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"brushes","brushes",1893051952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),name);
});
cljs_draw.core.add_brush = (function cljs_draw$core$add_brush(name,type,brush){
var brush_21881__$1 = cljs.core.assoc.call(null,brush,new cljs.core.Keyword(null,"brush-type","brush-type",1288263035),type,new cljs.core.Keyword(null,"name","name",1843675177),name);
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brushes","brushes",1893051952)], null),cljs.core.assoc,name,brush_21881__$1);

var temp__4421__auto___21882 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"driver","driver",1515263546)], null));
if(cljs.core.truth_(temp__4421__auto___21882)){
var driver_21883 = temp__4421__auto___21882;
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,((function (driver_21883,temp__4421__auto___21882){
return (function (data){
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724),name], null),cljs_draw.core.compile_brush.call(null,driver_21883,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447).cljs$core$IFn$_invoke$arity$1(brush),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701).cljs$core$IFn$_invoke$arity$1(brush)], null)));
});})(driver_21883,temp__4421__auto___21882))
);
} else {
}

return null;
});
cljs_draw.core.add_linear_brush = (function cljs_draw$core$add_linear_brush(name,brush){
return cljs_draw.core.add_brush.call(null,name,new cljs.core.Keyword(null,"linear","linear",872268697),brush);
});
cljs_draw.core.add_radial_brush = (function cljs_draw$core$add_radial_brush(name,brush){
return cljs_draw.core.add_brush.call(null,name,new cljs.core.Keyword(null,"radial","radial",-1334240714),brush);
});
cljs_draw.core.add_linear_brush.call(null,new cljs.core.Keyword(null,"solid-linear","solid-linear",-966178167),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),cljs_draw.core.default_vertex_position,cljs_draw.core.v_value,cljs_draw.core.a_value], true, false),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,cljs_draw.core.u_color,(1))], true, false)], null));
cljs_draw.core.add_linear_brush.call(null,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),"SRC_ALPHA",new cljs.core.Keyword(null,"to","to",192099007),"ONE_MINUS_SRC_ALPHA"], null),new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),cljs_draw.core.default_vertex_position,cljs_draw.core.v_value,cljs_draw.core.a_value], true, false),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,cljs_draw.core.u_color,.5)], true, false)], null));
cljs_draw.core.add_linear_brush.call(null,new cljs.core.Keyword(null,"transparent2","transparent2",-272067717),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),"SRC_COLOR",new cljs.core.Keyword(null,"to","to",192099007),"ONE"], null),new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),cljs_draw.core.default_vertex_position,cljs_draw.core.v_value,cljs_draw.core.a_value], true, false),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,cljs_draw.core.u_color,.5)], true, false)], null));
cljs_draw.core.add_linear_brush.call(null,new cljs.core.Keyword(null,"spray","spray",-1479371657),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),cljs_draw.core.default_vertex_position,cljs_draw.core.v_value,cljs_draw.core.a_value], true, false),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),(function (){var seed = gamma.api.vec2.call(null,32.2,3.5);
return gamma.api.vec4.call(null,cljs_draw.core.u_color,gamma.api.if$.call(null,gamma.api._LT_.call(null,gamma.api._PLUS_.call(null,gamma.api.pow.call(null,cljs_draw.core.v_value,(3)),gamma.api._STAR_.call(null,cljs_draw.core.shader_rand.call(null,gamma.api.gl_frag_coord.call(null)),.5)),.5),(0),(1)));
})()], true, false)], null));
cljs_draw.core.add_radial_brush.call(null,new cljs.core.Keyword(null,"solid-radial","solid-radial",1428886130),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"texture","texture",-266291651),"01-pressure-draw/cljs_draw/radial.png",new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),cljs_draw.core.default_vertex_position,cljs_draw.core.v_texcoord,cljs_draw.core.a_texcoord], true, false),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),(function (){var tex_color = gamma.api.texture2D.call(null,cljs_draw.core.u_sampler,cljs_draw.core.v_texcoord);
var tex_alpha = gamma.api.swizzle.call(null,tex_color,new cljs.core.Keyword(null,"a","a",-2123407586));
var alpha = gamma.api.pow.call(null,Math.E,gamma.api._.call(null,(1),gamma.api.div.call(null,(1),tex_alpha)));
return new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,cljs_draw.core.u_color,alpha)], true, false);
})()], null));
cljs_draw.core.save_state = (function cljs_draw$core$save_state(){
localforage.setItem("meshes",cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (m){
return m.serialize();
}),new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state)))));

localforage.setItem("current-mesh",new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state)).serialize());

return localforage.setItem("app-state",cljs.core.clj__GT_js.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"current-color","current-color",1731984119)], null))));
});
cljs_draw.core.load_state = (function cljs_draw$core$load_state(){
var c__8616__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto__){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto__){
return (function (state_21938){
var state_val_21939 = (state_21938[(1)]);
if((state_val_21939 === (1))){
var inst_21917 = (function (){return ((function (state_val_21939,c__8616__auto__){
return (function (data){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,data),"linear")){
return LinearStroke;
} else {
return RadialStroke;
}
});
;})(state_val_21939,c__8616__auto__))
})();
var inst_21918 = cljs_draw.util.get_from_storage.call(null,"current-mesh");
var state_21938__$1 = (function (){var statearr_21940 = state_21938;
(statearr_21940[(7)] = inst_21917);

return statearr_21940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21938__$1,(2),inst_21918);
} else {
if((state_val_21939 === (2))){
var inst_21920 = (state_21938[(8)]);
var inst_21917 = (state_21938[(7)]);
var inst_21920__$1 = (state_21938[(2)]);
var inst_21921 = [new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685)];
var inst_21922 = (function (){var get_class = inst_21917;
var current = inst_21920__$1;
return ((function (get_class,current,inst_21920,inst_21917,inst_21920__$1,inst_21921,state_val_21939,c__8616__auto__){
return (function (data){
return get_class.call(null,data).unserialize(data);
});
;})(get_class,current,inst_21920,inst_21917,inst_21920__$1,inst_21921,state_val_21939,c__8616__auto__))
})();
var inst_21923 = cljs_draw.util.get_from_storage.call(null,"meshes");
var state_21938__$1 = (function (){var statearr_21941 = state_21938;
(statearr_21941[(8)] = inst_21920__$1);

(statearr_21941[(9)] = inst_21921);

(statearr_21941[(10)] = inst_21922);

return statearr_21941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21938__$1,(3),inst_21923);
} else {
if((state_val_21939 === (3))){
var inst_21920 = (state_21938[(8)]);
var inst_21921 = (state_21938[(9)]);
var inst_21917 = (state_21938[(7)]);
var inst_21922 = (state_21938[(10)]);
var inst_21925 = (state_21938[(2)]);
var inst_21926 = cljs.core.mapv.call(null,inst_21922,inst_21925);
var inst_21927 = inst_21917.call(null,inst_21920);
var inst_21928 = inst_21927.unserialize(inst_21920);
var inst_21929 = [inst_21926,inst_21928];
var inst_21930 = cljs.core.PersistentHashMap.fromArrays(inst_21921,inst_21929);
var inst_21931 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.merge,inst_21930);
var inst_21932 = cljs_draw.util.get_from_storage.call(null,"app-state");
var state_21938__$1 = (function (){var statearr_21942 = state_21938;
(statearr_21942[(11)] = inst_21931);

return statearr_21942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21938__$1,(4),inst_21932);
} else {
if((state_val_21939 === (4))){
var inst_21934 = (state_21938[(2)]);
var inst_21935 = (function (){var state = inst_21934;
return ((function (state,inst_21934,state_val_21939,c__8616__auto__){
return (function (data){
return cljs.core.merge.call(null,data,cljs.core.js__GT_clj.call(null,state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
;})(state,inst_21934,state_val_21939,c__8616__auto__))
})();
var inst_21936 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,inst_21935);
var state_21938__$1 = state_21938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21938__$1,inst_21936);
} else {
return null;
}
}
}
}
});})(c__8616__auto__))
;
return ((function (switch__8595__auto__,c__8616__auto__){
return (function() {
var cljs_draw$core$load_state_$_state_machine__8596__auto__ = null;
var cljs_draw$core$load_state_$_state_machine__8596__auto____0 = (function (){
var statearr_21946 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21946[(0)] = cljs_draw$core$load_state_$_state_machine__8596__auto__);

(statearr_21946[(1)] = (1));

return statearr_21946;
});
var cljs_draw$core$load_state_$_state_machine__8596__auto____1 = (function (state_21938){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_21938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e21947){if((e21947 instanceof Object)){
var ex__8599__auto__ = e21947;
var statearr_21948_21950 = state_21938;
(statearr_21948_21950[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21951 = state_21938;
state_21938 = G__21951;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$load_state_$_state_machine__8596__auto__ = function(state_21938){
switch(arguments.length){
case 0:
return cljs_draw$core$load_state_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$load_state_$_state_machine__8596__auto____1.call(this,state_21938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$load_state_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$load_state_$_state_machine__8596__auto____0;
cljs_draw$core$load_state_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$load_state_$_state_machine__8596__auto____1;
return cljs_draw$core$load_state_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__))
})();
var state__8618__auto__ = (function (){var statearr_21949 = f__8617__auto__.call(null);
(statearr_21949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_21949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__))
);

return c__8616__auto__;
});
cljs_draw.core.clear_canvas = (function cljs_draw$core$clear_canvas(){
if(cljs.core.truth_(confirm("Are you sure you want to clear the canvas?"))){
return cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685),null,new cljs.core.Keyword(null,"stroke-history","stroke-history",-272903291),cljs.core.PersistentVector.EMPTY], null));
} else {
return null;
}
});
cljs_draw.core.undo = (function cljs_draw$core$undo(){
var stroke_history = new cljs.core.Keyword(null,"stroke-history","stroke-history",-272903291).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state));
var num_verts = cljs.core.last.call(null,stroke_history);
var history = cljs.core.vec.call(null,cljs.core.drop_last.call(null,(1),stroke_history));
var temp__4421__auto__ = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state));
if(cljs.core.truth_(temp__4421__auto__)){
var current_mesh = temp__4421__auto__;
current_mesh.setNumVertices(num_verts);

cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stroke-history","stroke-history",-272903291),history);

if(cljs.core._EQ_.call(null,num_verts,(0))){
return cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,((function (current_mesh,temp__4421__auto__,stroke_history,num_verts,history){
return (function (data){
return cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847),cljs.core.vec.call(null,cljs.core.drop_last.call(null,(1),new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685),cljs.core.last.call(null,new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847).cljs$core$IFn$_invoke$arity$1(data))], null));
});})(current_mesh,temp__4421__auto__,stroke_history,num_verts,history))
);
} else {
return null;
}
} else {
return null;
}
});
cljs_draw.core.make_mesh = (function cljs_draw$core$make_mesh(color,brush){
var class$ = (function (){var G__21953 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__21953) {
case "linear":
return LinearStroke;

break;
case "radial":
return RadialStroke;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush))].join('')));

}
})();
return (new class$(color,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(brush))));
});
cljs_draw.core.stroke_started = (function cljs_draw$core$stroke_started(point){
return null;
});
cljs_draw.core.start_stroke = (function cljs_draw$core$start_stroke(point,color,brush){
var vec__21956 = point;
var x = cljs.core.nth.call(null,vec__21956,(0),null);
var y = cljs.core.nth.call(null,vec__21956,(1),null);
var current_mesh = (function (){var or__4953__auto__ = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state));
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return cljs_draw.core.make_mesh.call(null,color,brush);
}
})();
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-history","stroke-history",-272903291)], null),cljs.core.conj,current_mesh.getNumVertices());

cljs_draw.core.stroke_started.call(null,point);

if(cljs.core._EQ_.call(null,cljs.core.type.call(null,current_mesh),LinearStroke)){
current_mesh.setCurrentPos(x,y,x,y);
} else {
current_mesh.setCurrentPos(x,y);
}

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state)))){
return cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685),current_mesh);
} else {
return null;
}
});
cljs_draw.core.finalize_stroke = (function cljs_draw$core$finalize_stroke(){
return cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,(function (data){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847),cljs.core.conj.call(null,new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685),null);
}));
});
cljs_draw.core.vec_equals = (function cljs_draw$core$vec_equals(v1,v2){
var and__4941__auto__ = thi.ng.math.core.delta_EQ_.call(null,cljs.core.nth.call(null,v1,(0)),cljs.core.nth.call(null,v2,(0)));
if(cljs.core.truth_(and__4941__auto__)){
return thi.ng.math.core.delta_EQ_.call(null,cljs.core.nth.call(null,v1,(1)),cljs.core.nth.call(null,v2,(1)));
} else {
return and__4941__auto__;
}
});
cljs_draw.core.constrain_stroke = (function cljs_draw$core$constrain_stroke(point,dir){
return thi.ng.geom.core._PLUS_.call(null,point,dir);
});
cljs_draw.core.add_linear_face = (function cljs_draw$core$add_linear_face(mesh,p1,p2,p3,v1,v2,v3){
mesh.addVertex(cljs.core.nth.call(null,p1,(0)),cljs.core.nth.call(null,p1,(1)),v1);

mesh.addVertex(cljs.core.nth.call(null,p2,(0)),cljs.core.nth.call(null,p2,(1)),v2);

return mesh.addVertex(cljs.core.nth.call(null,p3,(0)),cljs.core.nth.call(null,p3,(1)),v3);
});
cljs_draw.core.add_to_linear_stroke = (function cljs_draw$core$add_to_linear_stroke(point,pressure,mesh){
var width = (Math.pow(pressure,(2)) * (55));
var current_pos = mesh.getCurrentPos();
var last_point1 = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(0)),cljs.core.nth.call(null,current_pos,(1)));
var last_point2 = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(2)),cljs.core.nth.call(null,current_pos,(3)));
var last_edge = thi.ng.geom.core.div.call(null,thi.ng.geom.core._.call(null,last_point2,last_point1),(2));
var last_middle = thi.ng.geom.core._PLUS_.call(null,last_point1,last_edge);
var pos = cljs_draw.core.constrain_stroke.call(null,last_middle,thi.ng.geom.core._.call(null,point,last_middle));
var diff = thi.ng.geom.core._.call(null,pos,last_middle);
if((thi.ng.geom.core.mag.call(null,diff) > (5))){
var normalized = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normalize.call(null,diff),width);
var r1 = thi.ng.geom.core.rotate.call(null,normalized,(thi.ng.math.core.PI / (2)));
var r2 = thi.ng.geom.core.rotate.call(null,normalized,(thi.ng.math.core.PI / (-2)));
var c1 = thi.ng.geom.core._PLUS_.call(null,pos,r1);
var c2 = thi.ng.geom.core._PLUS_.call(null,pos,r2);
var c3 = last_point1;
var c4 = last_point2;
if(cljs.core.truth_(cljs_draw.core.vec_equals.call(null,last_point1,last_point2))){
cljs_draw.core.add_linear_face.call(null,mesh,last_point1,c1,pos,(1),(0),(1));

cljs_draw.core.add_linear_face.call(null,mesh,last_point1,pos,c2,(1),(1),(0));
} else {
cljs_draw.core.add_linear_face.call(null,mesh,c1,pos,c3,(0),(1),(0));

cljs_draw.core.add_linear_face.call(null,mesh,c3,pos,last_middle,(0),(1),(1));

cljs_draw.core.add_linear_face.call(null,mesh,pos,c2,last_middle,(1),(0),(1));

cljs_draw.core.add_linear_face.call(null,mesh,last_middle,c2,c4,(1),(0),(0));
}

return mesh.setCurrentPos(cljs.core.nth.call(null,c1,(0)),cljs.core.nth.call(null,c1,(1)),cljs.core.nth.call(null,c2,(0)),cljs.core.nth.call(null,c2,(1)));
} else {
return null;
}
});
cljs_draw.core.add_radial_face = (function cljs_draw$core$add_radial_face(mesh,p1,p2,p3,t1,t2,t3){
mesh.addVertex(cljs.core.nth.call(null,p1,(0)),cljs.core.nth.call(null,p1,(1)),cljs.core.nth.call(null,t1,(0)),cljs.core.nth.call(null,t1,(1)));

mesh.addVertex(cljs.core.nth.call(null,p2,(0)),cljs.core.nth.call(null,p2,(1)),cljs.core.nth.call(null,t2,(0)),cljs.core.nth.call(null,t2,(1)));

return mesh.addVertex(cljs.core.nth.call(null,p3,(0)),cljs.core.nth.call(null,p3,(1)),cljs.core.nth.call(null,t3,(0)),cljs.core.nth.call(null,t3,(1)));
});
cljs_draw.core.add_to_radial_stroke = (function cljs_draw$core$add_to_radial_stroke(point,pressure,mesh){
var radius = ((Math.pow(pressure,(2)) * (30)) / (2));
var current_pos = mesh.getCurrentPos();
var last_point = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(0)),cljs.core.nth.call(null,current_pos,(1)));
var pos = cljs_draw.core.constrain_stroke.call(null,last_point,thi.ng.geom.core._.call(null,point,last_point));
var c1 = thi.ng.geom.core._PLUS_.call(null,pos,thi.ng.geom.core.vector.vec2.call(null,(- radius),(- radius)));
var c2 = thi.ng.geom.core._PLUS_.call(null,pos,thi.ng.geom.core.vector.vec2.call(null,(- radius),radius));
var c3 = thi.ng.geom.core._PLUS_.call(null,pos,thi.ng.geom.core.vector.vec2.call(null,radius,(- radius)));
var c4 = thi.ng.geom.core._PLUS_.call(null,pos,thi.ng.geom.core.vector.vec2.call(null,radius,radius));
cljs_draw.core.add_radial_face.call(null,mesh,c1,c2,c3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

return cljs_draw.core.add_radial_face.call(null,mesh,c3,c2,c4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
});
cljs_draw.core.add_to_stroke = (function cljs_draw$core$add_to_stroke(point,pressure,mesh,brush){
var G__21958 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__21958) {
case "linear":
return cljs_draw.core.add_to_linear_stroke.call(null,point,pressure,mesh);

break;
case "radial":
return cljs_draw.core.add_to_radial_stroke.call(null,point,pressure,mesh);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush))].join('')));

}
});
cljs_draw.core.validate_brush = (function cljs_draw$core$validate_brush(brush,mesh){
var G__21961 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__21961) {
case "linear":
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,mesh),LinearStroke)){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"mesh","mesh",2096852122,null)),new cljs.core.Symbol("js","LinearStroke","js/LinearStroke",-1159499649,null))))].join('')));
}

break;
case "radial":
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,mesh),RadialStroke)){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"mesh","mesh",2096852122,null)),new cljs.core.Symbol("js","RadialStroke","js/RadialStroke",1784497441,null))))].join('')));
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush))].join('')));

}
});
cljs_draw.core.get_perspective_matrix = (function cljs_draw$core$get_perspective_matrix(width,height){
return thi.ng.geom.core.matrix.ortho.call(null,(0),(0),width,height,0.1,(1000));
});
cljs_draw.core.init_renderer = (function cljs_draw$core$init_renderer(node,brushes){
var gl = node.getContext("webgl");
var rect = node.getBoundingClientRect();
var w = rect.width;
var h = rect.height;
var driver = gamma_driver.drivers.basic.basic_driver.call(null,gl);
var programs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (gl,rect,w,h,driver){
return (function (p__21999){
var vec__22000 = p__21999;
var name = cljs.core.nth.call(null,vec__22000,(0),null);
var brush = cljs.core.nth.call(null,vec__22000,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs_draw.core.compile_brush.call(null,driver,brush)], null);
});})(gl,rect,w,h,driver))
,brushes));
var pers = cljs_draw.core.get_perspective_matrix.call(null,w,h);
gl.viewport((0),(0),(w * (2)),(h * (2)));

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.enable(gl.BLEND);

gl.disable(gl.DEPTH_TEST);

var c__8616__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto__,gl,rect,w,h,driver,programs,pers){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto__,gl,rect,w,h,driver,programs,pers){
return (function (state_22024){
var state_val_22025 = (state_22024[(1)]);
if((state_val_22025 === (1))){
var inst_22007 = (state_22024[(7)]);
var inst_22002 = (function (){return ((function (inst_22007,state_val_22025,c__8616__auto__,gl,rect,w,h,driver,programs,pers){
return (function (p__22001){
var vec__22026 = p__22001;
var name = cljs.core.nth.call(null,vec__22026,(0),null);
var brush = cljs.core.nth.call(null,vec__22026,(1),null);
return new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(brush);
});
;})(inst_22007,state_val_22025,c__8616__auto__,gl,rect,w,h,driver,programs,pers))
})();
var inst_22003 = cljs.core.map.call(null,inst_22002);
var inst_22004 = cljs.core.filter.call(null,cljs.core.identity);
var inst_22005 = cljs.core.comp.call(null,inst_22003,inst_22004);
var inst_22006 = cljs.core.sequence.call(null,inst_22005,brushes);
var inst_22007__$1 = cljs.core.distinct.call(null,inst_22006);
var inst_22008 = (function (){var get_texs = inst_22005;
var urls = inst_22007__$1;
return ((function (get_texs,urls,inst_22007,inst_22002,inst_22003,inst_22004,inst_22005,inst_22006,inst_22007__$1,state_val_22025,c__8616__auto__,gl,rect,w,h,driver,programs,pers){
return (function (url){
return cljs_draw.core.load_texture.call(null,url);
});
;})(get_texs,urls,inst_22007,inst_22002,inst_22003,inst_22004,inst_22005,inst_22006,inst_22007__$1,state_val_22025,c__8616__auto__,gl,rect,w,h,driver,programs,pers))
})();
var inst_22009 = cljs.core.map.call(null,inst_22008,inst_22007__$1);
var inst_22010 = cljs.core.PersistentHashMap.EMPTY;
var inst_22011 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22012 = cljs.core.PersistentVector.EMPTY;
var inst_22013 = cljs_draw.core.take_into.call(null,inst_22012,inst_22009);
var state_22024__$1 = (function (){var statearr_22027 = state_22024;
(statearr_22027[(8)] = inst_22010);

(statearr_22027[(7)] = inst_22007__$1);

(statearr_22027[(9)] = inst_22011);

return statearr_22027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22024__$1,(2),inst_22013);
} else {
if((state_val_22025 === (2))){
var inst_22010 = (state_22024[(8)]);
var inst_22007 = (state_22024[(7)]);
var inst_22011 = (state_22024[(9)]);
var inst_22015 = (state_22024[(2)]);
var inst_22016 = [inst_22007,inst_22015];
var inst_22017 = (new cljs.core.PersistentVector(null,2,(5),inst_22011,inst_22016,null));
var inst_22018 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,inst_22017);
var inst_22019 = cljs.core.into.call(null,inst_22010,inst_22018);
var inst_22020 = [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"driver","driver",1515263546),new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724),new cljs.core.Keyword(null,"pers","pers",-1016576635),new cljs.core.Keyword(null,"textures","textures",560681081)];
var inst_22021 = [gl,driver,programs,pers,inst_22019];
var inst_22022 = cljs.core.PersistentHashMap.fromArrays(inst_22020,inst_22021);
var state_22024__$1 = state_22024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22024__$1,inst_22022);
} else {
return null;
}
}
});})(c__8616__auto__,gl,rect,w,h,driver,programs,pers))
;
return ((function (switch__8595__auto__,c__8616__auto__,gl,rect,w,h,driver,programs,pers){
return (function() {
var cljs_draw$core$init_renderer_$_state_machine__8596__auto__ = null;
var cljs_draw$core$init_renderer_$_state_machine__8596__auto____0 = (function (){
var statearr_22031 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22031[(0)] = cljs_draw$core$init_renderer_$_state_machine__8596__auto__);

(statearr_22031[(1)] = (1));

return statearr_22031;
});
var cljs_draw$core$init_renderer_$_state_machine__8596__auto____1 = (function (state_22024){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_22024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e22032){if((e22032 instanceof Object)){
var ex__8599__auto__ = e22032;
var statearr_22033_22035 = state_22024;
(statearr_22033_22035[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22036 = state_22024;
state_22024 = G__22036;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$init_renderer_$_state_machine__8596__auto__ = function(state_22024){
switch(arguments.length){
case 0:
return cljs_draw$core$init_renderer_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$init_renderer_$_state_machine__8596__auto____1.call(this,state_22024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$init_renderer_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$init_renderer_$_state_machine__8596__auto____0;
cljs_draw$core$init_renderer_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$init_renderer_$_state_machine__8596__auto____1;
return cljs_draw$core$init_renderer_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__,gl,rect,w,h,driver,programs,pers))
})();
var state__8618__auto__ = (function (){var statearr_22034 = f__8617__auto__.call(null);
(statearr_22034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_22034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__,gl,rect,w,h,driver,programs,pers))
);

return c__8616__auto__;
});
cljs_draw.core.render_mesh = (function cljs_draw$core$render_mesh(gl,mesh,driver,brush,program,textures,pers,mv){
var brush_type = new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush);
var blend = new cljs.core.Keyword(null,"blend","blend",249565561).cljs$core$IFn$_invoke$arity$1(brush);
cljs_draw.core.validate_brush.call(null,brush,mesh);

if(cljs.core.truth_(blend)){
gl.blendFunc((gl[new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(blend)]),(gl[new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(blend)]));
} else {
gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
}

return gamma_driver.api.draw_arrays.call(null,driver,gamma_driver.api.bind.call(null,driver,program,(function (){var G__22038 = (((brush_type instanceof cljs.core.Keyword))?brush_type.fqn:null);
switch (G__22038) {
case "linear":
return new cljs.core.PersistentArrayMap.fromArray([cljs_draw.core.u_p_matrix,pers,cljs_draw.core.u_mv_matrix,mv,cljs_draw.core.u_color,cljs.core.vec.call(null,mesh.getColor()),cljs_draw.core.a_value,mesh.getValues(),cljs_draw.core.a_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),mesh.getVertices(),new cljs.core.Keyword(null,"count","count",2139924085),mesh.getNumVertices()], null)], true, false);

break;
case "radial":
return new cljs.core.PersistentArrayMap.fromArray([cljs_draw.core.u_p_matrix,pers,cljs_draw.core.u_mv_matrix,mv,cljs_draw.core.u_color,cljs.core.vec.call(null,mesh.getColor()),cljs_draw.core.u_sampler,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,textures,new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(brush)),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"mag","mag",48619174),new cljs.core.Keyword(null,"nearest","nearest",1176353890)], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(brush),new cljs.core.Keyword(null,"immutable?","immutable?",756662222),true], null),cljs_draw.core.a_texcoord,mesh.getTexCoords(),cljs_draw.core.a_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),mesh.getVertices(),new cljs.core.Keyword(null,"count","count",2139924085),mesh.getNumVertices()], null)], true, false);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(brush_type)].join('')));

}
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),new cljs.core.Keyword(null,"triangles","triangles",-1525417058)], null));
});
cljs_draw.core.render = (function cljs_draw$core$render(){
var ctx = new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state));
var bg_color = goog.color.hexToRgb(new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state)));
var map__22045 = ctx;
var map__22045__$1 = ((cljs.core.seq_QMARK_.call(null,map__22045))?cljs.core.apply.call(null,cljs.core.hash_map,map__22045):map__22045);
var gl = cljs.core.get.call(null,map__22045__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var driver = cljs.core.get.call(null,map__22045__$1,new cljs.core.Keyword(null,"driver","driver",1515263546));
var compiled_programs = cljs.core.get.call(null,map__22045__$1,new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724));
var pers = cljs.core.get.call(null,map__22045__$1,new cljs.core.Keyword(null,"pers","pers",-1016576635));
var textures = cljs.core.get.call(null,map__22045__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var mv = thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.matrix44.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null));
gl.clearColor((cljs.core.nth.call(null,bg_color,(0)) / (255)),(cljs.core.nth.call(null,bg_color,(1)) / (255)),(cljs.core.nth.call(null,bg_color,(2)) / (255)),(1));

gl.clear(gl.COLOR_BUFFER_BIT);

var seq__22046_22050 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state)));
var chunk__22047_22051 = null;
var count__22048_22052 = (0);
var i__22049_22053 = (0);
while(true){
if((i__22049_22053 < count__22048_22052)){
var mesh_22054 = cljs.core._nth.call(null,chunk__22047_22051,i__22049_22053);
var brush_name_22055 = cljs.core.keyword.call(null,mesh_22054.getBrush());
cljs_draw.core.render_mesh.call(null,gl,mesh_22054,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name_22055),cljs.core.get.call(null,compiled_programs,brush_name_22055),textures,pers,mv);

var G__22056 = seq__22046_22050;
var G__22057 = chunk__22047_22051;
var G__22058 = count__22048_22052;
var G__22059 = (i__22049_22053 + (1));
seq__22046_22050 = G__22056;
chunk__22047_22051 = G__22057;
count__22048_22052 = G__22058;
i__22049_22053 = G__22059;
continue;
} else {
var temp__4423__auto___22060 = cljs.core.seq.call(null,seq__22046_22050);
if(temp__4423__auto___22060){
var seq__22046_22061__$1 = temp__4423__auto___22060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22046_22061__$1)){
var c__5738__auto___22062 = cljs.core.chunk_first.call(null,seq__22046_22061__$1);
var G__22063 = cljs.core.chunk_rest.call(null,seq__22046_22061__$1);
var G__22064 = c__5738__auto___22062;
var G__22065 = cljs.core.count.call(null,c__5738__auto___22062);
var G__22066 = (0);
seq__22046_22050 = G__22063;
chunk__22047_22051 = G__22064;
count__22048_22052 = G__22065;
i__22049_22053 = G__22066;
continue;
} else {
var mesh_22067 = cljs.core.first.call(null,seq__22046_22061__$1);
var brush_name_22068 = cljs.core.keyword.call(null,mesh_22067.getBrush());
cljs_draw.core.render_mesh.call(null,gl,mesh_22067,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name_22068),cljs.core.get.call(null,compiled_programs,brush_name_22068),textures,pers,mv);

var G__22069 = cljs.core.next.call(null,seq__22046_22061__$1);
var G__22070 = null;
var G__22071 = (0);
var G__22072 = (0);
seq__22046_22050 = G__22069;
chunk__22047_22051 = G__22070;
count__22048_22052 = G__22071;
i__22049_22053 = G__22072;
continue;
}
} else {
}
}
break;
}

var temp__4421__auto__ = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state));
if(cljs.core.truth_(temp__4421__auto__)){
var current_mesh = temp__4421__auto__;
var brush_name = cljs.core.keyword.call(null,current_mesh.getBrush());
return cljs_draw.core.render_mesh.call(null,gl,current_mesh,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name),cljs.core.get.call(null,compiled_programs,brush_name),textures,pers,mv);
} else {
return null;
}
});
cljs_draw.core.render_loop = (function cljs_draw$core$render_loop(){
cljs_draw.core.render.call(null);

return requestAnimationFrame(cljs_draw$core$render_loop);
});
cljs_draw.core.color_input = (function cljs_draw$core$color_input(data,owner){
if(typeof cljs_draw.core.t22076 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t22076 = (function (color_input,data,owner,meta22077){
this.color_input = color_input;
this.data = data;
this.owner = owner;
this.meta22077 = meta22077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t22076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22078,meta22077__$1){
var self__ = this;
var _22078__$1 = this;
return (new cljs_draw.core.t22076(self__.color_input,self__.data,self__.owner,meta22077__$1));
});

cljs_draw.core.t22076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22078){
var self__ = this;
var _22078__$1 = this;
return self__.meta22077;
});

cljs_draw.core.t22076.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t22076.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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

cljs_draw.core.t22076.prototype.om$core$IRender$ = true;

cljs_draw.core.t22076.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"type": "color", "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "style": {"width": (50), "height": (50), "border": (0)}});
});

cljs_draw.core.t22076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-input","color-input",696074651,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta22077","meta22077",-1081482375,null)], null);
});

cljs_draw.core.t22076.cljs$lang$type = true;

cljs_draw.core.t22076.cljs$lang$ctorStr = "cljs_draw.core/t22076";

cljs_draw.core.t22076.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t22076");
});

cljs_draw.core.__GT_t22076 = (function cljs_draw$core$color_input_$___GT_t22076(color_input__$1,data__$1,owner__$1,meta22077){
return (new cljs_draw.core.t22076(color_input__$1,data__$1,owner__$1,meta22077));
});

}

return (new cljs_draw.core.t22076(cljs_draw$core$color_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t22157 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t22157 = (function (color_item,props,owner,meta22158){
this.color_item = color_item;
this.props = props;
this.owner = owner;
this.meta22158 = meta22158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t22157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22159,meta22158__$1){
var self__ = this;
var _22159__$1 = this;
return (new cljs_draw.core.t22157(self__.color_item,self__.props,self__.owner,meta22158__$1));
});

cljs_draw.core.t22157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22159){
var self__ = this;
var _22159__$1 = this;
return self__.meta22158;
});

cljs_draw.core.t22157.prototype.om$core$IInitState$ = true;

cljs_draw.core.t22157.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t22157.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t22157.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__22160 = om.core.get_state.call(null,self__.owner);
var map__22160__$1 = ((cljs.core.seq_QMARK_.call(null,map__22160))?cljs.core.apply.call(null,cljs.core.hash_map,map__22160):map__22160);
var mouseup = cljs.core.get.call(null,map__22160__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__22160__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__22160__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var hide_controls = cljs.core.get.call(null,map__22160__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var c__8616__auto___22235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___22235,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___22235,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_22192){
var state_val_22193 = (state_22192[(1)]);
if((state_val_22193 === (7))){
var inst_22180 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_22181 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_22192__$1 = (function (){var statearr_22194 = state_22192;
(statearr_22194[(7)] = inst_22180);

return statearr_22194;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22192__$1,(9),inst_22181,true);
} else {
if((state_val_22193 === (1))){
var state_22192__$1 = state_22192;
var statearr_22195_22236 = state_22192__$1;
(statearr_22195_22236[(2)] = null);

(statearr_22195_22236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (4))){
var inst_22163 = (state_22192[(2)]);
var inst_22165 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22166 = cljs.core.async.timeout.call(null,(500));
var inst_22167 = [mouseup,inst_22166];
var inst_22168 = (new cljs.core.PersistentVector(null,2,(5),inst_22165,inst_22167,null));
var state_22192__$1 = (function (){var statearr_22196 = state_22192;
(statearr_22196[(8)] = inst_22163);

return statearr_22196;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22192__$1,(5),inst_22168);
} else {
if((state_val_22193 === (6))){
var inst_22175 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_22176 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_22177 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_22178 = inst_22176.call(null,inst_22177);
var state_22192__$1 = (function (){var statearr_22197 = state_22192;
(statearr_22197[(9)] = inst_22175);

return statearr_22197;
})();
var statearr_22198_22237 = state_22192__$1;
(statearr_22198_22237[(2)] = inst_22178);

(statearr_22198_22237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (3))){
var inst_22190 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22192__$1,inst_22190);
} else {
if((state_val_22193 === (2))){
var state_22192__$1 = state_22192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22192__$1,(4),mousedown);
} else {
if((state_val_22193 === (9))){
var inst_22183 = (state_22192[(2)]);
var state_22192__$1 = (function (){var statearr_22199 = state_22192;
(statearr_22199[(10)] = inst_22183);

return statearr_22199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22192__$1,(10),mouseup);
} else {
if((state_val_22193 === (5))){
var inst_22170 = (state_22192[(2)]);
var inst_22171 = cljs.core.nth.call(null,inst_22170,(0),null);
var inst_22172 = cljs.core.nth.call(null,inst_22170,(1),null);
var inst_22173 = cljs.core._EQ_.call(null,inst_22172,mouseup);
var state_22192__$1 = (function (){var statearr_22200 = state_22192;
(statearr_22200[(11)] = inst_22171);

return statearr_22200;
})();
if(inst_22173){
var statearr_22201_22238 = state_22192__$1;
(statearr_22201_22238[(1)] = (6));

} else {
var statearr_22202_22239 = state_22192__$1;
(statearr_22202_22239[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (10))){
var inst_22185 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
var statearr_22203_22240 = state_22192__$1;
(statearr_22203_22240[(2)] = inst_22185);

(statearr_22203_22240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (8))){
var inst_22187 = (state_22192[(2)]);
var state_22192__$1 = (function (){var statearr_22204 = state_22192;
(statearr_22204[(12)] = inst_22187);

return statearr_22204;
})();
var statearr_22205_22241 = state_22192__$1;
(statearr_22205_22241[(2)] = null);

(statearr_22205_22241[(1)] = (2));


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
});})(c__8616__auto___22235,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8595__auto__,c__8616__auto___22235,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8596__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8596__auto____0 = (function (){
var statearr_22209 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22209[(0)] = cljs_draw$core$color_item_$_state_machine__8596__auto__);

(statearr_22209[(1)] = (1));

return statearr_22209;
});
var cljs_draw$core$color_item_$_state_machine__8596__auto____1 = (function (state_22192){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_22192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e22210){if((e22210 instanceof Object)){
var ex__8599__auto__ = e22210;
var statearr_22211_22242 = state_22192;
(statearr_22211_22242[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22243 = state_22192;
state_22192 = G__22243;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8596__auto__ = function(state_22192){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8596__auto____1.call(this,state_22192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8596__auto____0;
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8596__auto____1;
return cljs_draw$core$color_item_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___22235,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8618__auto__ = (function (){var statearr_22212 = f__8617__auto__.call(null);
(statearr_22212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___22235);

return statearr_22212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___22235,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);


var c__8616__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto__,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto__,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_22222){
var state_val_22223 = (state_22222[(1)]);
if((state_val_22223 === (1))){
var state_22222__$1 = state_22222;
var statearr_22224_22244 = state_22222__$1;
(statearr_22224_22244[(2)] = null);

(statearr_22224_22244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (2))){
var inst_22214 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_22222__$1 = state_22222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22222__$1,(4),inst_22214);
} else {
if((state_val_22223 === (3))){
var inst_22220 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22222__$1,inst_22220);
} else {
if((state_val_22223 === (4))){
var inst_22216 = (state_22222[(2)]);
var inst_22217 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_22222__$1 = (function (){var statearr_22225 = state_22222;
(statearr_22225[(7)] = inst_22216);

(statearr_22225[(8)] = inst_22217);

return statearr_22225;
})();
var statearr_22226_22245 = state_22222__$1;
(statearr_22226_22245[(2)] = null);

(statearr_22226_22245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8616__auto__,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8595__auto__,c__8616__auto__,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8596__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8596__auto____0 = (function (){
var statearr_22230 = [null,null,null,null,null,null,null,null,null];
(statearr_22230[(0)] = cljs_draw$core$color_item_$_state_machine__8596__auto__);

(statearr_22230[(1)] = (1));

return statearr_22230;
});
var cljs_draw$core$color_item_$_state_machine__8596__auto____1 = (function (state_22222){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_22222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e22231){if((e22231 instanceof Object)){
var ex__8599__auto__ = e22231;
var statearr_22232_22246 = state_22222;
(statearr_22232_22246[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22247 = state_22222;
state_22222 = G__22247;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8596__auto__ = function(state_22222){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8596__auto____1.call(this,state_22222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8596__auto____0;
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8596__auto____1;
return cljs_draw$core$color_item_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8618__auto__ = (function (){var statearr_22233 = f__8617__auto__.call(null);
(statearr_22233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_22233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__,map__22160,map__22160__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);

return c__8616__auto__;
});

cljs_draw.core.t22157.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t22157.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t22157.prototype.om$core$IRender$ = true;

cljs_draw.core.t22157.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__22234 = om.core.get_state.call(null,self__.owner);
var map__22234__$1 = ((cljs.core.seq_QMARK_.call(null,map__22234))?cljs.core.apply.call(null,cljs.core.hash_map,map__22234):map__22234);
var mouseup = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
return React.DOM.div({"style": {"position": "relative", "width": (50), "height": (50)}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"href": "#", "onClick": ((function (map__22234,map__22234__$1,mouseup,mousedown,mouseout,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__22234,map__22234__$1,mouseup,mousedown,mouseout,___$1))
},"remove")),React.DOM.div({"onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "style": {"position": "absolute", "width": (50), "height": (50), "cursor": "pointer", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":"")}}));
});

cljs_draw.core.t22157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-item","color-item",934499434,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta22158","meta22158",-1575388275,null)], null);
});

cljs_draw.core.t22157.cljs$lang$type = true;

cljs_draw.core.t22157.cljs$lang$ctorStr = "cljs_draw.core/t22157";

cljs_draw.core.t22157.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t22157");
});

cljs_draw.core.__GT_t22157 = (function cljs_draw$core$color_item_$___GT_t22157(color_item__$1,props__$1,owner__$1,meta22158){
return (new cljs_draw.core.t22157(color_item__$1,props__$1,owner__$1,meta22158));
});

}

return (new cljs_draw.core.t22157(cljs_draw$core$color_item,props,owner,cljs.core.PersistentArrayMap.EMPTY));
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
cljs_draw.core.app = (function cljs_draw$core$app(data,owner){
if(typeof cljs_draw.core.t22441 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t22441 = (function (app,data,owner,meta22442){
this.app = app;
this.data = data;
this.owner = owner;
this.meta22442 = meta22442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t22441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22443,meta22442__$1){
var self__ = this;
var _22443__$1 = this;
return (new cljs_draw.core.t22441(self__.app,self__.data,self__.owner,meta22442__$1));
});

cljs_draw.core.t22441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22443){
var self__ = this;
var _22443__$1 = this;
return self__.meta22442;
});

cljs_draw.core.t22441.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t22441.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvas = node.querySelector("canvas");
var c__8616__auto___22634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___22634,node,container,canvas,this$__$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___22634,node,container,canvas,this$__$1){
return (function (state_22453){
var state_val_22454 = (state_22453[(1)]);
if((state_val_22454 === (1))){
var inst_22444 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_22445 = new cljs.core.Keyword(null,"brushes","brushes",1893051952).cljs$core$IFn$_invoke$arity$1(inst_22444);
var inst_22446 = cljs_draw.core.init_renderer.call(null,canvas,inst_22445);
var state_22453__$1 = state_22453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22453__$1,(2),inst_22446);
} else {
if((state_val_22454 === (2))){
var inst_22448 = (state_22453[(2)]);
var inst_22449 = cljs_draw.core.merge_in_BANG_.call(null,cljs_draw.core.app_state,new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),inst_22448);
var inst_22450 = cljs_draw.core.load_state.call(null);
var inst_22451 = cljs_draw.core.render_loop.call(null);
var state_22453__$1 = (function (){var statearr_22455 = state_22453;
(statearr_22455[(7)] = inst_22450);

(statearr_22455[(8)] = inst_22449);

return statearr_22455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22453__$1,inst_22451);
} else {
return null;
}
}
});})(c__8616__auto___22634,node,container,canvas,this$__$1))
;
return ((function (switch__8595__auto__,c__8616__auto___22634,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8596__auto__ = null;
var cljs_draw$core$app_$_state_machine__8596__auto____0 = (function (){
var statearr_22459 = [null,null,null,null,null,null,null,null,null];
(statearr_22459[(0)] = cljs_draw$core$app_$_state_machine__8596__auto__);

(statearr_22459[(1)] = (1));

return statearr_22459;
});
var cljs_draw$core$app_$_state_machine__8596__auto____1 = (function (state_22453){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_22453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e22460){if((e22460 instanceof Object)){
var ex__8599__auto__ = e22460;
var statearr_22461_22635 = state_22453;
(statearr_22461_22635[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22636 = state_22453;
state_22453 = G__22636;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8596__auto__ = function(state_22453){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8596__auto____1.call(this,state_22453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8596__auto____0;
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8596__auto____1;
return cljs_draw$core$app_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___22634,node,container,canvas,this$__$1))
})();
var state__8618__auto__ = (function (){var statearr_22462 = f__8617__auto__.call(null);
(statearr_22462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___22634);

return statearr_22462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___22634,node,container,canvas,this$__$1))
);


var moved_22637 = cljs_draw.util.listen.call(null,container,"pointermove");
var c__8616__auto___22638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___22638,moved_22637,node,container,canvas,this$__$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___22638,moved_22637,node,container,canvas,this$__$1){
return (function (state_22541){
var state_val_22542 = (state_22541[(1)]);
if((state_val_22542 === (7))){
var inst_22537 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22543_22639 = state_22541__$1;
(statearr_22543_22639[(2)] = inst_22537);

(statearr_22543_22639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (20))){
var inst_22477 = (state_22541[(7)]);
var inst_22511 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_22512 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_22511);
var inst_22513 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_22514 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_22513);
var inst_22515 = cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,inst_22514);
var inst_22516 = cljs_draw.core.start_stroke.call(null,inst_22477,inst_22512,inst_22515);
var state_22541__$1 = state_22541;
var statearr_22544_22640 = state_22541__$1;
(statearr_22544_22640[(2)] = inst_22516);

(statearr_22544_22640[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (1))){
var inst_22463 = (0);
var state_22541__$1 = (function (){var statearr_22545 = state_22541;
(statearr_22545[(8)] = inst_22463);

return statearr_22545;
})();
var statearr_22546_22641 = state_22541__$1;
(statearr_22546_22641[(2)] = null);

(statearr_22546_22641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (24))){
var state_22541__$1 = state_22541;
var statearr_22547_22642 = state_22541__$1;
(statearr_22547_22642[(2)] = null);

(statearr_22547_22642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (4))){
var inst_22466 = (state_22541[(9)]);
var inst_22466__$1 = (state_22541[(2)]);
var state_22541__$1 = (function (){var statearr_22548 = state_22541;
(statearr_22548[(9)] = inst_22466__$1);

return statearr_22548;
})();
if(cljs.core.truth_(inst_22466__$1)){
var statearr_22549_22643 = state_22541__$1;
(statearr_22549_22643[(1)] = (5));

} else {
var statearr_22550_22644 = state_22541__$1;
(statearr_22550_22644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (15))){
var state_22541__$1 = state_22541;
var statearr_22551_22645 = state_22541__$1;
(statearr_22551_22645[(2)] = null);

(statearr_22551_22645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (21))){
var state_22541__$1 = state_22541;
var statearr_22552_22646 = state_22541__$1;
(statearr_22552_22646[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (13))){
var inst_22531 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22554_22647 = state_22541__$1;
(statearr_22554_22647[(2)] = inst_22531);

(statearr_22554_22647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (22))){
var inst_22529 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22555_22648 = state_22541__$1;
(statearr_22555_22648[(2)] = inst_22529);

(statearr_22555_22648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (6))){
var state_22541__$1 = state_22541;
var statearr_22556_22649 = state_22541__$1;
(statearr_22556_22649[(2)] = null);

(statearr_22556_22649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (25))){
var inst_22527 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22557_22650 = state_22541__$1;
(statearr_22557_22650[(2)] = inst_22527);

(statearr_22557_22650[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (17))){
var inst_22501 = cljs_draw.core.finalize_stroke.call(null);
var state_22541__$1 = state_22541;
var statearr_22558_22651 = state_22541__$1;
(statearr_22558_22651[(2)] = inst_22501);

(statearr_22558_22651[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (3))){
var inst_22539 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22541__$1,inst_22539);
} else {
if((state_val_22542 === (12))){
var inst_22463 = (state_22541[(8)]);
var inst_22509 = cljs.core._EQ_.call(null,inst_22463,(0));
var state_22541__$1 = state_22541;
if(inst_22509){
var statearr_22559_22652 = state_22541__$1;
(statearr_22559_22652[(1)] = (20));

} else {
var statearr_22560_22653 = state_22541__$1;
(statearr_22560_22653[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (2))){
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22541__$1,(4),moved_22637);
} else {
if((state_val_22542 === (23))){
var inst_22477 = (state_22541[(7)]);
var inst_22478 = (state_22541[(10)]);
var inst_22519 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_22520 = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(inst_22519);
var inst_22521 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_22522 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_22521);
var inst_22523 = cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,inst_22522);
var inst_22524 = cljs_draw.core.add_to_stroke.call(null,inst_22477,inst_22478,inst_22520,inst_22523);
var state_22541__$1 = state_22541;
var statearr_22561_22654 = state_22541__$1;
(statearr_22561_22654[(2)] = inst_22524);

(statearr_22561_22654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (19))){
var inst_22504 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22562_22655 = state_22541__$1;
(statearr_22562_22655[(2)] = inst_22504);

(statearr_22562_22655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (11))){
var inst_22487 = (state_22541[(11)]);
var inst_22486 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_22487__$1 = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(inst_22486);
var state_22541__$1 = (function (){var statearr_22563 = state_22541;
(statearr_22563[(11)] = inst_22487__$1);

return statearr_22563;
})();
if(cljs.core.truth_(inst_22487__$1)){
var statearr_22564_22656 = state_22541__$1;
(statearr_22564_22656[(1)] = (14));

} else {
var statearr_22565_22657 = state_22541__$1;
(statearr_22565_22657[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (9))){
var inst_22478 = (state_22541[(10)]);
var inst_22484 = cljs.core._EQ_.call(null,inst_22478,(0));
var state_22541__$1 = state_22541;
if(inst_22484){
var statearr_22566_22658 = state_22541__$1;
(statearr_22566_22658[(1)] = (11));

} else {
var statearr_22567_22659 = state_22541__$1;
(statearr_22567_22659[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (5))){
var inst_22466 = (state_22541[(9)]);
var inst_22468 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_22469 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22470 = [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)];
var inst_22471 = (new cljs.core.PersistentVector(null,2,(5),inst_22469,inst_22470,null));
var inst_22472 = cljs.core.get_in.call(null,inst_22468,inst_22471);
var inst_22473 = inst_22466.layerX;
var inst_22474 = (inst_22473 - inst_22472);
var inst_22475 = inst_22466.layerY;
var inst_22476 = (inst_22475 - inst_22472);
var inst_22477 = thi.ng.geom.core.vector.vec2.call(null,inst_22474,inst_22476);
var inst_22478 = inst_22466.mozPressure;
var inst_22479 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_22480 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_22479);
var inst_22481 = cljs.core.not.call(null,inst_22480);
var state_22541__$1 = (function (){var statearr_22568 = state_22541;
(statearr_22568[(7)] = inst_22477);

(statearr_22568[(10)] = inst_22478);

return statearr_22568;
})();
if(inst_22481){
var statearr_22569_22660 = state_22541__$1;
(statearr_22569_22660[(1)] = (8));

} else {
var statearr_22570_22661 = state_22541__$1;
(statearr_22570_22661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (14))){
var inst_22487 = (state_22541[(11)]);
var inst_22489 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_22490 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_22489);
var inst_22491 = inst_22487.isColor(inst_22490);
var inst_22492 = cljs.core.not.call(null,inst_22491);
var inst_22493 = inst_22487.getBrush();
var inst_22494 = cljs.core.keyword.call(null,inst_22493);
var inst_22495 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_22496 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_22495);
var inst_22497 = cljs.core._EQ_.call(null,inst_22494,inst_22496);
var inst_22498 = !(inst_22497);
var inst_22499 = (inst_22492) || (inst_22498);
var state_22541__$1 = state_22541;
if(cljs.core.truth_(inst_22499)){
var statearr_22571_22662 = state_22541__$1;
(statearr_22571_22662[(1)] = (17));

} else {
var statearr_22572_22663 = state_22541__$1;
(statearr_22572_22663[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (16))){
var inst_22507 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22573_22664 = state_22541__$1;
(statearr_22573_22664[(2)] = inst_22507);

(statearr_22573_22664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (10))){
var inst_22478 = (state_22541[(10)]);
var inst_22533 = (state_22541[(2)]);
var inst_22463 = inst_22478;
var state_22541__$1 = (function (){var statearr_22574 = state_22541;
(statearr_22574[(8)] = inst_22463);

(statearr_22574[(12)] = inst_22533);

return statearr_22574;
})();
var statearr_22575_22665 = state_22541__$1;
(statearr_22575_22665[(2)] = null);

(statearr_22575_22665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (18))){
var state_22541__$1 = state_22541;
var statearr_22576_22666 = state_22541__$1;
(statearr_22576_22666[(2)] = null);

(statearr_22576_22666[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (8))){
var state_22541__$1 = state_22541;
var statearr_22577_22667 = state_22541__$1;
(statearr_22577_22667[(2)] = null);

(statearr_22577_22667[(1)] = (10));


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
});})(c__8616__auto___22638,moved_22637,node,container,canvas,this$__$1))
;
return ((function (switch__8595__auto__,c__8616__auto___22638,moved_22637,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8596__auto__ = null;
var cljs_draw$core$app_$_state_machine__8596__auto____0 = (function (){
var statearr_22581 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22581[(0)] = cljs_draw$core$app_$_state_machine__8596__auto__);

(statearr_22581[(1)] = (1));

return statearr_22581;
});
var cljs_draw$core$app_$_state_machine__8596__auto____1 = (function (state_22541){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_22541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e22582){if((e22582 instanceof Object)){
var ex__8599__auto__ = e22582;
var statearr_22583_22668 = state_22541;
(statearr_22583_22668[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22669 = state_22541;
state_22541 = G__22669;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8596__auto__ = function(state_22541){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8596__auto____1.call(this,state_22541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8596__auto____0;
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8596__auto____1;
return cljs_draw$core$app_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___22638,moved_22637,node,container,canvas,this$__$1))
})();
var state__8618__auto__ = (function (){var statearr_22584 = f__8617__auto__.call(null);
(statearr_22584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___22638);

return statearr_22584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___22638,moved_22637,node,container,canvas,this$__$1))
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
var c__8616__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto__,keydown,node,container,canvas,this$__$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto__,keydown,node,container,canvas,this$__$1){
return (function (state_22607){
var state_val_22608 = (state_22607[(1)]);
if((state_val_22608 === (7))){
var inst_22602 = (state_22607[(2)]);
var state_22607__$1 = (function (){var statearr_22609 = state_22607;
(statearr_22609[(7)] = inst_22602);

return statearr_22609;
})();
var statearr_22610_22670 = state_22607__$1;
(statearr_22610_22670[(2)] = null);

(statearr_22610_22670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (1))){
var state_22607__$1 = state_22607;
var statearr_22611_22671 = state_22607__$1;
(statearr_22611_22671[(2)] = null);

(statearr_22611_22671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (4))){
var inst_22587 = (state_22607[(8)]);
var inst_22587__$1 = (state_22607[(2)]);
var inst_22588 = inst_22587__$1.metaKey;
var state_22607__$1 = (function (){var statearr_22612 = state_22607;
(statearr_22612[(8)] = inst_22587__$1);

return statearr_22612;
})();
if(cljs.core.truth_(inst_22588)){
var statearr_22613_22672 = state_22607__$1;
(statearr_22613_22672[(1)] = (5));

} else {
var statearr_22614_22673 = state_22607__$1;
(statearr_22614_22673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (6))){
var state_22607__$1 = state_22607;
var statearr_22615_22674 = state_22607__$1;
(statearr_22615_22674[(2)] = null);

(statearr_22615_22674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (3))){
var inst_22605 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22607__$1,inst_22605);
} else {
if((state_val_22608 === (12))){
var state_22607__$1 = state_22607;
var statearr_22616_22675 = state_22607__$1;
(statearr_22616_22675[(2)] = new cljs.core.Keyword(null,"else","else",-1508377146));

(statearr_22616_22675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (2))){
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22607__$1,(4),keydown);
} else {
if((state_val_22608 === (11))){
var inst_22594 = cljs_draw.core.clear_canvas.call(null);
var state_22607__$1 = state_22607;
var statearr_22617_22676 = state_22607__$1;
(statearr_22617_22676[(2)] = inst_22594);

(statearr_22617_22676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (9))){
var inst_22590 = cljs_draw.core.save_state.call(null);
var state_22607__$1 = state_22607;
var statearr_22618_22677 = state_22607__$1;
(statearr_22618_22677[(2)] = inst_22590);

(statearr_22618_22677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (5))){
var inst_22587 = (state_22607[(8)]);
var inst_22597 = inst_22587.keyCode;
var state_22607__$1 = state_22607;
var G__22619_22678 = inst_22597;
switch (G__22619_22678) {
case (83):
var statearr_22620_22680 = state_22607__$1;
(statearr_22620_22680[(1)] = (9));


break;
case (90):
var statearr_22621_22681 = state_22607__$1;
(statearr_22621_22681[(1)] = (10));


break;
case (67):
var statearr_22622_22682 = state_22607__$1;
(statearr_22622_22682[(1)] = (11));


break;
default:
var statearr_22623_22683 = state_22607__$1;
(statearr_22623_22683[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (10))){
var inst_22592 = cljs_draw.core.undo.call(null);
var state_22607__$1 = state_22607;
var statearr_22624_22684 = state_22607__$1;
(statearr_22624_22684[(2)] = inst_22592);

(statearr_22624_22684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (8))){
var inst_22599 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22625_22685 = state_22607__$1;
(statearr_22625_22685[(2)] = inst_22599);

(statearr_22625_22685[(1)] = (7));


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
});})(c__8616__auto__,keydown,node,container,canvas,this$__$1))
;
return ((function (switch__8595__auto__,c__8616__auto__,keydown,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8596__auto__ = null;
var cljs_draw$core$app_$_state_machine__8596__auto____0 = (function (){
var statearr_22629 = [null,null,null,null,null,null,null,null,null];
(statearr_22629[(0)] = cljs_draw$core$app_$_state_machine__8596__auto__);

(statearr_22629[(1)] = (1));

return statearr_22629;
});
var cljs_draw$core$app_$_state_machine__8596__auto____1 = (function (state_22607){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_22607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e22630){if((e22630 instanceof Object)){
var ex__8599__auto__ = e22630;
var statearr_22631_22686 = state_22607;
(statearr_22631_22686[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22687 = state_22607;
state_22607 = G__22687;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8596__auto__ = function(state_22607){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8596__auto____1.call(this,state_22607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8596__auto____0;
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8596__auto____1;
return cljs_draw$core$app_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__,keydown,node,container,canvas,this$__$1))
})();
var state__8618__auto__ = (function (){var statearr_22632 = f__8617__auto__.call(null);
(statearr_22632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_22632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__,keydown,node,container,canvas,this$__$1))
);

return c__8616__auto__;
});

cljs_draw.core.t22441.prototype.om$core$IRender$ = true;

cljs_draw.core.t22441.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__22633 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"dimen","dimen",-234621985)], null));
var width = cljs.core.nth.call(null,vec__22633,(0),null);
var height = cljs.core.nth.call(null,vec__22633,(1),null);
var boundary = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)], null));
return React.DOM.div({"id": "app", "style": {"height": "100%", "backgroundColor": "#222222"}},React.DOM.div({"className": "canvas-container", "style": {"bottom": (0), "top": (0), "overflow": "hidden", "width": ((width / (2)) + (boundary * (2))), "cursor": "crosshair", "padding": (50), "right": (0), "position": "absolute", "border": "1px solid #2f2f2f", "height": ((height / (2)) + (boundary * (2))), "left": (0), "margin": "auto"}},React.DOM.canvas({"width": width, "height": height, "style": {"width": (width / (2)), "height": (height / (2))}})),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t22441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta22442","meta22442",1701521301,null)], null);
});

cljs_draw.core.t22441.cljs$lang$type = true;

cljs_draw.core.t22441.cljs$lang$ctorStr = "cljs_draw.core/t22441";

cljs_draw.core.t22441.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t22441");
});

cljs_draw.core.__GT_t22441 = (function cljs_draw$core$app_$___GT_t22441(app__$1,data__$1,owner__$1,meta22442){
return (new cljs_draw.core.t22441(app__$1,data__$1,owner__$1,meta22442));
});

}

return (new cljs_draw.core.t22441(cljs_draw$core$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));
cljs_draw.core.repl_swap_BANG_ = (function cljs_draw$core$repl_swap_BANG_(name,val){
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.assoc,name,val);

return null;
});

//# sourceMappingURL=core.js.map