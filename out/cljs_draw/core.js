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
cljs_draw.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-history","stroke-history",-272903291),new cljs.core.Keyword(null,"listening-for-color","listening-for-color",-341629494),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"current-brush","current-brush",935402),new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"brushes","brushes",1893051952),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685),new cljs.core.Keyword(null,"current-color","current-color",1731984119),new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847)],[cljs.core.PersistentVector.EMPTY,false,"#1b1b1b",new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimen","dimen",-234621985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1200),(1200)], null),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),(50)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000"], null),cljs.core.PersistentArrayMap.EMPTY,null,"#000000",cljs.core.PersistentVector.EMPTY]));
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
return (function (state_19768){
var state_val_19769 = (state_19768[(1)]);
if((state_val_19769 === (1))){
var inst_19751 = coll;
var inst_19752 = chans;
var state_19768__$1 = (function (){var statearr_19770 = state_19768;
(statearr_19770[(7)] = inst_19752);

(statearr_19770[(8)] = inst_19751);

return statearr_19770;
})();
var statearr_19771_19785 = state_19768__$1;
(statearr_19771_19785[(2)] = null);

(statearr_19771_19785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19769 === (2))){
var inst_19752 = (state_19768[(7)]);
var inst_19754 = cljs.core.empty_QMARK_.call(null,inst_19752);
var state_19768__$1 = state_19768;
if(inst_19754){
var statearr_19772_19786 = state_19768__$1;
(statearr_19772_19786[(1)] = (4));

} else {
var statearr_19773_19787 = state_19768__$1;
(statearr_19773_19787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19769 === (3))){
var inst_19766 = (state_19768[(2)]);
var state_19768__$1 = state_19768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19768__$1,inst_19766);
} else {
if((state_val_19769 === (4))){
var inst_19751 = (state_19768[(8)]);
var state_19768__$1 = state_19768;
var statearr_19774_19788 = state_19768__$1;
(statearr_19774_19788[(2)] = inst_19751);

(statearr_19774_19788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19769 === (5))){
var inst_19752 = (state_19768[(7)]);
var inst_19757 = cljs.core.first.call(null,inst_19752);
var state_19768__$1 = state_19768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19768__$1,(7),inst_19757);
} else {
if((state_val_19769 === (6))){
var inst_19764 = (state_19768[(2)]);
var state_19768__$1 = state_19768;
var statearr_19775_19789 = state_19768__$1;
(statearr_19775_19789[(2)] = inst_19764);

(statearr_19775_19789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19769 === (7))){
var inst_19752 = (state_19768[(7)]);
var inst_19751 = (state_19768[(8)]);
var inst_19759 = (state_19768[(2)]);
var inst_19760 = cljs.core.conj.call(null,inst_19751,inst_19759);
var inst_19761 = cljs.core.rest.call(null,inst_19752);
var inst_19751__$1 = inst_19760;
var inst_19752__$1 = inst_19761;
var state_19768__$1 = (function (){var statearr_19776 = state_19768;
(statearr_19776[(7)] = inst_19752__$1);

(statearr_19776[(8)] = inst_19751__$1);

return statearr_19776;
})();
var statearr_19777_19790 = state_19768__$1;
(statearr_19777_19790[(2)] = null);

(statearr_19777_19790[(1)] = (2));


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
var statearr_19781 = [null,null,null,null,null,null,null,null,null];
(statearr_19781[(0)] = cljs_draw$core$take_into_$_state_machine__8596__auto__);

(statearr_19781[(1)] = (1));

return statearr_19781;
});
var cljs_draw$core$take_into_$_state_machine__8596__auto____1 = (function (state_19768){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_19768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e19782){if((e19782 instanceof Object)){
var ex__8599__auto__ = e19782;
var statearr_19783_19791 = state_19768;
(statearr_19783_19791[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19792 = state_19768;
state_19768 = G__19792;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$take_into_$_state_machine__8596__auto__ = function(state_19768){
switch(arguments.length){
case 0:
return cljs_draw$core$take_into_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$take_into_$_state_machine__8596__auto____1.call(this,state_19768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$take_into_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$take_into_$_state_machine__8596__auto____0;
cljs_draw$core$take_into_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$take_into_$_state_machine__8596__auto____1;
return cljs_draw$core$take_into_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__))
})();
var state__8618__auto__ = (function (){var statearr_19784 = f__8617__auto__.call(null);
(statearr_19784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_19784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__))
);

return c__8616__auto__;
});
cljs_draw.core.merge_in_BANG_ = (function cljs_draw$core$merge_in_BANG_(data,key,m){
return cljs.core.swap_BANG_.call(null,data,(function (p1__19793_SHARP_){
return cljs.core.assoc.call(null,p1__19793_SHARP_,key,cljs.core.merge.call(null,m,(function (){var or__4953__auto__ = cljs.core.get.call(null,p1__19793_SHARP_,key);
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
var c__8616__auto___19888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___19888,in$,out){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___19888,in$,out){
return (function (state_19868){
var state_val_19869 = (state_19868[(1)]);
if((state_val_19869 === (7))){
var inst_19851 = (state_19868[(2)]);
var inst_19852 = cljs.core.nth.call(null,inst_19851,(0),null);
var inst_19853 = cljs.core.nth.call(null,inst_19851,(1),null);
var inst_19854 = cljs.core._EQ_.call(null,inst_19853,in$);
var state_19868__$1 = (function (){var statearr_19870 = state_19868;
(statearr_19870[(7)] = inst_19852);

return statearr_19870;
})();
if(inst_19854){
var statearr_19871_19889 = state_19868__$1;
(statearr_19871_19889[(1)] = (8));

} else {
var statearr_19872_19890 = state_19868__$1;
(statearr_19872_19890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19869 === (1))){
var state_19868__$1 = state_19868;
var statearr_19873_19891 = state_19868__$1;
(statearr_19873_19891[(2)] = null);

(statearr_19873_19891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19869 === (4))){
var inst_19843 = (state_19868[(2)]);
var state_19868__$1 = (function (){var statearr_19874 = state_19868;
(statearr_19874[(8)] = inst_19843);

return statearr_19874;
})();
var statearr_19875_19892 = state_19868__$1;
(statearr_19875_19892[(2)] = null);

(statearr_19875_19892[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19869 === (6))){
var inst_19863 = (state_19868[(2)]);
var state_19868__$1 = (function (){var statearr_19876 = state_19868;
(statearr_19876[(9)] = inst_19863);

return statearr_19876;
})();
var statearr_19877_19893 = state_19868__$1;
(statearr_19877_19893[(2)] = null);

(statearr_19877_19893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19869 === (3))){
var inst_19866 = (state_19868[(2)]);
var state_19868__$1 = state_19868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19868__$1,inst_19866);
} else {
if((state_val_19869 === (2))){
var state_19868__$1 = state_19868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19868__$1,(4),in$);
} else {
if((state_val_19869 === (11))){
var inst_19859 = (state_19868[(2)]);
var state_19868__$1 = state_19868;
var statearr_19878_19894 = state_19868__$1;
(statearr_19878_19894[(2)] = inst_19859);

(statearr_19878_19894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19869 === (9))){
var state_19868__$1 = state_19868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19868__$1,(11),out,true);
} else {
if((state_val_19869 === (5))){
var inst_19846 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19847 = cljs.core.async.timeout.call(null,ms);
var inst_19848 = [in$,inst_19847];
var inst_19849 = (new cljs.core.PersistentVector(null,2,(5),inst_19846,inst_19848,null));
var state_19868__$1 = state_19868;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19868__$1,(7),inst_19849);
} else {
if((state_val_19869 === (10))){
var inst_19861 = (state_19868[(2)]);
var state_19868__$1 = state_19868;
var statearr_19879_19895 = state_19868__$1;
(statearr_19879_19895[(2)] = inst_19861);

(statearr_19879_19895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19869 === (8))){
var state_19868__$1 = state_19868;
var statearr_19880_19896 = state_19868__$1;
(statearr_19880_19896[(2)] = null);

(statearr_19880_19896[(1)] = (5));


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
});})(c__8616__auto___19888,in$,out))
;
return ((function (switch__8595__auto__,c__8616__auto___19888,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____0 = (function (){
var statearr_19884 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19884[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__);

(statearr_19884[(1)] = (1));

return statearr_19884;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____1 = (function (state_19868){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_19868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e19885){if((e19885 instanceof Object)){
var ex__8599__auto__ = e19885;
var statearr_19886_19897 = state_19868;
(statearr_19886_19897[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19898 = state_19868;
state_19868 = G__19898;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__ = function(state_19868){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____1.call(this,state_19868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___19888,in$,out))
})();
var state__8618__auto__ = (function (){var statearr_19887 = f__8617__auto__.call(null);
(statearr_19887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___19888);

return statearr_19887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___19888,in$,out))
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
var brush_19899__$1 = cljs.core.assoc.call(null,brush,new cljs.core.Keyword(null,"brush-type","brush-type",1288263035),type,new cljs.core.Keyword(null,"name","name",1843675177),name);
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brushes","brushes",1893051952)], null),cljs.core.assoc,name,brush_19899__$1);

var temp__4421__auto___19900 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"driver","driver",1515263546)], null));
if(cljs.core.truth_(temp__4421__auto___19900)){
var driver_19901 = temp__4421__auto___19900;
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,((function (driver_19901,temp__4421__auto___19900){
return (function (data){
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724),name], null),cljs_draw.core.compile_brush.call(null,driver_19901,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447).cljs$core$IFn$_invoke$arity$1(brush),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701).cljs$core$IFn$_invoke$arity$1(brush)], null)));
});})(driver_19901,temp__4421__auto___19900))
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
return (function (state_19956){
var state_val_19957 = (state_19956[(1)]);
if((state_val_19957 === (1))){
var inst_19935 = (function (){return ((function (state_val_19957,c__8616__auto__){
return (function (data){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,data),"linear")){
return LinearStroke;
} else {
return RadialStroke;
}
});
;})(state_val_19957,c__8616__auto__))
})();
var inst_19936 = cljs_draw.util.get_from_storage.call(null,"current-mesh");
var state_19956__$1 = (function (){var statearr_19958 = state_19956;
(statearr_19958[(7)] = inst_19935);

return statearr_19958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19956__$1,(2),inst_19936);
} else {
if((state_val_19957 === (2))){
var inst_19938 = (state_19956[(8)]);
var inst_19935 = (state_19956[(7)]);
var inst_19938__$1 = (state_19956[(2)]);
var inst_19939 = [new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685)];
var inst_19940 = (function (){var get_class = inst_19935;
var current = inst_19938__$1;
return ((function (get_class,current,inst_19938,inst_19935,inst_19938__$1,inst_19939,state_val_19957,c__8616__auto__){
return (function (data){
return get_class.call(null,data).unserialize(data);
});
;})(get_class,current,inst_19938,inst_19935,inst_19938__$1,inst_19939,state_val_19957,c__8616__auto__))
})();
var inst_19941 = cljs_draw.util.get_from_storage.call(null,"meshes");
var state_19956__$1 = (function (){var statearr_19959 = state_19956;
(statearr_19959[(8)] = inst_19938__$1);

(statearr_19959[(9)] = inst_19940);

(statearr_19959[(10)] = inst_19939);

return statearr_19959;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19956__$1,(3),inst_19941);
} else {
if((state_val_19957 === (3))){
var inst_19938 = (state_19956[(8)]);
var inst_19940 = (state_19956[(9)]);
var inst_19935 = (state_19956[(7)]);
var inst_19939 = (state_19956[(10)]);
var inst_19943 = (state_19956[(2)]);
var inst_19944 = cljs.core.mapv.call(null,inst_19940,inst_19943);
var inst_19945 = inst_19935.call(null,inst_19938);
var inst_19946 = inst_19945.unserialize(inst_19938);
var inst_19947 = [inst_19944,inst_19946];
var inst_19948 = cljs.core.PersistentHashMap.fromArrays(inst_19939,inst_19947);
var inst_19949 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.merge,inst_19948);
var inst_19950 = cljs_draw.util.get_from_storage.call(null,"app-state");
var state_19956__$1 = (function (){var statearr_19960 = state_19956;
(statearr_19960[(11)] = inst_19949);

return statearr_19960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19956__$1,(4),inst_19950);
} else {
if((state_val_19957 === (4))){
var inst_19952 = (state_19956[(2)]);
var inst_19953 = (function (){var state = inst_19952;
return ((function (state,inst_19952,state_val_19957,c__8616__auto__){
return (function (data){
return cljs.core.merge.call(null,data,cljs.core.js__GT_clj.call(null,state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
;})(state,inst_19952,state_val_19957,c__8616__auto__))
})();
var inst_19954 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,inst_19953);
var state_19956__$1 = state_19956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19956__$1,inst_19954);
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
var statearr_19964 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19964[(0)] = cljs_draw$core$load_state_$_state_machine__8596__auto__);

(statearr_19964[(1)] = (1));

return statearr_19964;
});
var cljs_draw$core$load_state_$_state_machine__8596__auto____1 = (function (state_19956){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_19956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e19965){if((e19965 instanceof Object)){
var ex__8599__auto__ = e19965;
var statearr_19966_19968 = state_19956;
(statearr_19966_19968[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19969 = state_19956;
state_19956 = G__19969;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$load_state_$_state_machine__8596__auto__ = function(state_19956){
switch(arguments.length){
case 0:
return cljs_draw$core$load_state_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$load_state_$_state_machine__8596__auto____1.call(this,state_19956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$load_state_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$load_state_$_state_machine__8596__auto____0;
cljs_draw$core$load_state_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$load_state_$_state_machine__8596__auto____1;
return cljs_draw$core$load_state_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__))
})();
var state__8618__auto__ = (function (){var statearr_19967 = f__8617__auto__.call(null);
(statearr_19967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_19967;
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
var class$ = (function (){var G__19971 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__19971) {
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
var vec__19974 = point;
var x = cljs.core.nth.call(null,vec__19974,(0),null);
var y = cljs.core.nth.call(null,vec__19974,(1),null);
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
var G__19976 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__19976) {
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
var G__19979 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__19979) {
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
return (function (p__20017){
var vec__20018 = p__20017;
var name = cljs.core.nth.call(null,vec__20018,(0),null);
var brush = cljs.core.nth.call(null,vec__20018,(1),null);
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
return (function (state_20042){
var state_val_20043 = (state_20042[(1)]);
if((state_val_20043 === (1))){
var inst_20025 = (state_20042[(7)]);
var inst_20020 = (function (){return ((function (inst_20025,state_val_20043,c__8616__auto__,gl,rect,w,h,driver,programs,pers){
return (function (p__20019){
var vec__20044 = p__20019;
var name = cljs.core.nth.call(null,vec__20044,(0),null);
var brush = cljs.core.nth.call(null,vec__20044,(1),null);
return new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(brush);
});
;})(inst_20025,state_val_20043,c__8616__auto__,gl,rect,w,h,driver,programs,pers))
})();
var inst_20021 = cljs.core.map.call(null,inst_20020);
var inst_20022 = cljs.core.filter.call(null,cljs.core.identity);
var inst_20023 = cljs.core.comp.call(null,inst_20021,inst_20022);
var inst_20024 = cljs.core.sequence.call(null,inst_20023,brushes);
var inst_20025__$1 = cljs.core.distinct.call(null,inst_20024);
var inst_20026 = (function (){var get_texs = inst_20023;
var urls = inst_20025__$1;
return ((function (get_texs,urls,inst_20025,inst_20020,inst_20021,inst_20022,inst_20023,inst_20024,inst_20025__$1,state_val_20043,c__8616__auto__,gl,rect,w,h,driver,programs,pers){
return (function (url){
return cljs_draw.core.load_texture.call(null,url);
});
;})(get_texs,urls,inst_20025,inst_20020,inst_20021,inst_20022,inst_20023,inst_20024,inst_20025__$1,state_val_20043,c__8616__auto__,gl,rect,w,h,driver,programs,pers))
})();
var inst_20027 = cljs.core.map.call(null,inst_20026,inst_20025__$1);
var inst_20028 = cljs.core.PersistentHashMap.EMPTY;
var inst_20029 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20030 = cljs.core.PersistentVector.EMPTY;
var inst_20031 = cljs_draw.core.take_into.call(null,inst_20030,inst_20027);
var state_20042__$1 = (function (){var statearr_20045 = state_20042;
(statearr_20045[(7)] = inst_20025__$1);

(statearr_20045[(8)] = inst_20028);

(statearr_20045[(9)] = inst_20029);

return statearr_20045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20042__$1,(2),inst_20031);
} else {
if((state_val_20043 === (2))){
var inst_20025 = (state_20042[(7)]);
var inst_20028 = (state_20042[(8)]);
var inst_20029 = (state_20042[(9)]);
var inst_20033 = (state_20042[(2)]);
var inst_20034 = [inst_20025,inst_20033];
var inst_20035 = (new cljs.core.PersistentVector(null,2,(5),inst_20029,inst_20034,null));
var inst_20036 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,inst_20035);
var inst_20037 = cljs.core.into.call(null,inst_20028,inst_20036);
var inst_20038 = [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"driver","driver",1515263546),new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724),new cljs.core.Keyword(null,"pers","pers",-1016576635),new cljs.core.Keyword(null,"textures","textures",560681081)];
var inst_20039 = [gl,driver,programs,pers,inst_20037];
var inst_20040 = cljs.core.PersistentHashMap.fromArrays(inst_20038,inst_20039);
var state_20042__$1 = state_20042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20042__$1,inst_20040);
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
var statearr_20049 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20049[(0)] = cljs_draw$core$init_renderer_$_state_machine__8596__auto__);

(statearr_20049[(1)] = (1));

return statearr_20049;
});
var cljs_draw$core$init_renderer_$_state_machine__8596__auto____1 = (function (state_20042){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_20042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e20050){if((e20050 instanceof Object)){
var ex__8599__auto__ = e20050;
var statearr_20051_20053 = state_20042;
(statearr_20051_20053[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20054 = state_20042;
state_20042 = G__20054;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$init_renderer_$_state_machine__8596__auto__ = function(state_20042){
switch(arguments.length){
case 0:
return cljs_draw$core$init_renderer_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$init_renderer_$_state_machine__8596__auto____1.call(this,state_20042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$init_renderer_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$init_renderer_$_state_machine__8596__auto____0;
cljs_draw$core$init_renderer_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$init_renderer_$_state_machine__8596__auto____1;
return cljs_draw$core$init_renderer_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__,gl,rect,w,h,driver,programs,pers))
})();
var state__8618__auto__ = (function (){var statearr_20052 = f__8617__auto__.call(null);
(statearr_20052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_20052;
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

return gamma_driver.api.draw_arrays.call(null,driver,gamma_driver.api.bind.call(null,driver,program,(function (){var G__20056 = (((brush_type instanceof cljs.core.Keyword))?brush_type.fqn:null);
switch (G__20056) {
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
var map__20063 = ctx;
var map__20063__$1 = ((cljs.core.seq_QMARK_.call(null,map__20063))?cljs.core.apply.call(null,cljs.core.hash_map,map__20063):map__20063);
var gl = cljs.core.get.call(null,map__20063__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var driver = cljs.core.get.call(null,map__20063__$1,new cljs.core.Keyword(null,"driver","driver",1515263546));
var compiled_programs = cljs.core.get.call(null,map__20063__$1,new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724));
var pers = cljs.core.get.call(null,map__20063__$1,new cljs.core.Keyword(null,"pers","pers",-1016576635));
var textures = cljs.core.get.call(null,map__20063__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var mv = thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.matrix44.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null));
gl.clearColor((cljs.core.nth.call(null,bg_color,(0)) / (255)),(cljs.core.nth.call(null,bg_color,(1)) / (255)),(cljs.core.nth.call(null,bg_color,(2)) / (255)),(1));

gl.clear(gl.COLOR_BUFFER_BIT);

var seq__20064_20068 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state)));
var chunk__20065_20069 = null;
var count__20066_20070 = (0);
var i__20067_20071 = (0);
while(true){
if((i__20067_20071 < count__20066_20070)){
var mesh_20072 = cljs.core._nth.call(null,chunk__20065_20069,i__20067_20071);
var brush_name_20073 = cljs.core.keyword.call(null,mesh_20072.getBrush());
cljs_draw.core.render_mesh.call(null,gl,mesh_20072,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name_20073),cljs.core.get.call(null,compiled_programs,brush_name_20073),textures,pers,mv);

var G__20074 = seq__20064_20068;
var G__20075 = chunk__20065_20069;
var G__20076 = count__20066_20070;
var G__20077 = (i__20067_20071 + (1));
seq__20064_20068 = G__20074;
chunk__20065_20069 = G__20075;
count__20066_20070 = G__20076;
i__20067_20071 = G__20077;
continue;
} else {
var temp__4423__auto___20078 = cljs.core.seq.call(null,seq__20064_20068);
if(temp__4423__auto___20078){
var seq__20064_20079__$1 = temp__4423__auto___20078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20064_20079__$1)){
var c__5738__auto___20080 = cljs.core.chunk_first.call(null,seq__20064_20079__$1);
var G__20081 = cljs.core.chunk_rest.call(null,seq__20064_20079__$1);
var G__20082 = c__5738__auto___20080;
var G__20083 = cljs.core.count.call(null,c__5738__auto___20080);
var G__20084 = (0);
seq__20064_20068 = G__20081;
chunk__20065_20069 = G__20082;
count__20066_20070 = G__20083;
i__20067_20071 = G__20084;
continue;
} else {
var mesh_20085 = cljs.core.first.call(null,seq__20064_20079__$1);
var brush_name_20086 = cljs.core.keyword.call(null,mesh_20085.getBrush());
cljs_draw.core.render_mesh.call(null,gl,mesh_20085,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name_20086),cljs.core.get.call(null,compiled_programs,brush_name_20086),textures,pers,mv);

var G__20087 = cljs.core.next.call(null,seq__20064_20079__$1);
var G__20088 = null;
var G__20089 = (0);
var G__20090 = (0);
seq__20064_20068 = G__20087;
chunk__20065_20069 = G__20088;
count__20066_20070 = G__20089;
i__20067_20071 = G__20090;
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
if(typeof cljs_draw.core.t20094 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t20094 = (function (color_input,data,owner,meta20095){
this.color_input = color_input;
this.data = data;
this.owner = owner;
this.meta20095 = meta20095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t20094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20096,meta20095__$1){
var self__ = this;
var _20096__$1 = this;
return (new cljs_draw.core.t20094(self__.color_input,self__.data,self__.owner,meta20095__$1));
});

cljs_draw.core.t20094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20096){
var self__ = this;
var _20096__$1 = this;
return self__.meta20095;
});

cljs_draw.core.t20094.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t20094.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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

cljs_draw.core.t20094.prototype.om$core$IRender$ = true;

cljs_draw.core.t20094.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"type": "color", "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "style": {"width": (50), "height": (50), "border": (0)}});
});

cljs_draw.core.t20094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-input","color-input",696074651,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20095","meta20095",-611111847,null)], null);
});

cljs_draw.core.t20094.cljs$lang$type = true;

cljs_draw.core.t20094.cljs$lang$ctorStr = "cljs_draw.core/t20094";

cljs_draw.core.t20094.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t20094");
});

cljs_draw.core.__GT_t20094 = (function cljs_draw$core$color_input_$___GT_t20094(color_input__$1,data__$1,owner__$1,meta20095){
return (new cljs_draw.core.t20094(color_input__$1,data__$1,owner__$1,meta20095));
});

}

return (new cljs_draw.core.t20094(cljs_draw$core$color_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t20175 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t20175 = (function (color_item,props,owner,meta20176){
this.color_item = color_item;
this.props = props;
this.owner = owner;
this.meta20176 = meta20176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t20175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20177,meta20176__$1){
var self__ = this;
var _20177__$1 = this;
return (new cljs_draw.core.t20175(self__.color_item,self__.props,self__.owner,meta20176__$1));
});

cljs_draw.core.t20175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20177){
var self__ = this;
var _20177__$1 = this;
return self__.meta20176;
});

cljs_draw.core.t20175.prototype.om$core$IInitState$ = true;

cljs_draw.core.t20175.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t20175.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t20175.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__20178 = om.core.get_state.call(null,self__.owner);
var map__20178__$1 = ((cljs.core.seq_QMARK_.call(null,map__20178))?cljs.core.apply.call(null,cljs.core.hash_map,map__20178):map__20178);
var mouseup = cljs.core.get.call(null,map__20178__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__20178__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__20178__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var hide_controls = cljs.core.get.call(null,map__20178__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var c__8616__auto___20253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___20253,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___20253,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_20210){
var state_val_20211 = (state_20210[(1)]);
if((state_val_20211 === (7))){
var inst_20198 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_20199 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_20210__$1 = (function (){var statearr_20212 = state_20210;
(statearr_20212[(7)] = inst_20198);

return statearr_20212;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20210__$1,(9),inst_20199,true);
} else {
if((state_val_20211 === (1))){
var state_20210__$1 = state_20210;
var statearr_20213_20254 = state_20210__$1;
(statearr_20213_20254[(2)] = null);

(statearr_20213_20254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20211 === (4))){
var inst_20181 = (state_20210[(2)]);
var inst_20183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20184 = cljs.core.async.timeout.call(null,(500));
var inst_20185 = [mouseup,inst_20184];
var inst_20186 = (new cljs.core.PersistentVector(null,2,(5),inst_20183,inst_20185,null));
var state_20210__$1 = (function (){var statearr_20214 = state_20210;
(statearr_20214[(8)] = inst_20181);

return statearr_20214;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20210__$1,(5),inst_20186);
} else {
if((state_val_20211 === (6))){
var inst_20193 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_20194 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_20195 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_20196 = inst_20194.call(null,inst_20195);
var state_20210__$1 = (function (){var statearr_20215 = state_20210;
(statearr_20215[(9)] = inst_20193);

return statearr_20215;
})();
var statearr_20216_20255 = state_20210__$1;
(statearr_20216_20255[(2)] = inst_20196);

(statearr_20216_20255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20211 === (3))){
var inst_20208 = (state_20210[(2)]);
var state_20210__$1 = state_20210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20210__$1,inst_20208);
} else {
if((state_val_20211 === (2))){
var state_20210__$1 = state_20210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20210__$1,(4),mousedown);
} else {
if((state_val_20211 === (9))){
var inst_20201 = (state_20210[(2)]);
var state_20210__$1 = (function (){var statearr_20217 = state_20210;
(statearr_20217[(10)] = inst_20201);

return statearr_20217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20210__$1,(10),mouseup);
} else {
if((state_val_20211 === (5))){
var inst_20188 = (state_20210[(2)]);
var inst_20189 = cljs.core.nth.call(null,inst_20188,(0),null);
var inst_20190 = cljs.core.nth.call(null,inst_20188,(1),null);
var inst_20191 = cljs.core._EQ_.call(null,inst_20190,mouseup);
var state_20210__$1 = (function (){var statearr_20218 = state_20210;
(statearr_20218[(11)] = inst_20189);

return statearr_20218;
})();
if(inst_20191){
var statearr_20219_20256 = state_20210__$1;
(statearr_20219_20256[(1)] = (6));

} else {
var statearr_20220_20257 = state_20210__$1;
(statearr_20220_20257[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20211 === (10))){
var inst_20203 = (state_20210[(2)]);
var state_20210__$1 = state_20210;
var statearr_20221_20258 = state_20210__$1;
(statearr_20221_20258[(2)] = inst_20203);

(statearr_20221_20258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20211 === (8))){
var inst_20205 = (state_20210[(2)]);
var state_20210__$1 = (function (){var statearr_20222 = state_20210;
(statearr_20222[(12)] = inst_20205);

return statearr_20222;
})();
var statearr_20223_20259 = state_20210__$1;
(statearr_20223_20259[(2)] = null);

(statearr_20223_20259[(1)] = (2));


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
});})(c__8616__auto___20253,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8595__auto__,c__8616__auto___20253,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8596__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8596__auto____0 = (function (){
var statearr_20227 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20227[(0)] = cljs_draw$core$color_item_$_state_machine__8596__auto__);

(statearr_20227[(1)] = (1));

return statearr_20227;
});
var cljs_draw$core$color_item_$_state_machine__8596__auto____1 = (function (state_20210){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_20210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e20228){if((e20228 instanceof Object)){
var ex__8599__auto__ = e20228;
var statearr_20229_20260 = state_20210;
(statearr_20229_20260[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20261 = state_20210;
state_20210 = G__20261;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8596__auto__ = function(state_20210){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8596__auto____1.call(this,state_20210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8596__auto____0;
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8596__auto____1;
return cljs_draw$core$color_item_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___20253,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8618__auto__ = (function (){var statearr_20230 = f__8617__auto__.call(null);
(statearr_20230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___20253);

return statearr_20230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___20253,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);


var c__8616__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto__,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto__,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_20240){
var state_val_20241 = (state_20240[(1)]);
if((state_val_20241 === (1))){
var state_20240__$1 = state_20240;
var statearr_20242_20262 = state_20240__$1;
(statearr_20242_20262[(2)] = null);

(statearr_20242_20262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (2))){
var inst_20232 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_20240__$1 = state_20240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20240__$1,(4),inst_20232);
} else {
if((state_val_20241 === (3))){
var inst_20238 = (state_20240[(2)]);
var state_20240__$1 = state_20240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20240__$1,inst_20238);
} else {
if((state_val_20241 === (4))){
var inst_20234 = (state_20240[(2)]);
var inst_20235 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_20240__$1 = (function (){var statearr_20243 = state_20240;
(statearr_20243[(7)] = inst_20235);

(statearr_20243[(8)] = inst_20234);

return statearr_20243;
})();
var statearr_20244_20263 = state_20240__$1;
(statearr_20244_20263[(2)] = null);

(statearr_20244_20263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8616__auto__,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8595__auto__,c__8616__auto__,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8596__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8596__auto____0 = (function (){
var statearr_20248 = [null,null,null,null,null,null,null,null,null];
(statearr_20248[(0)] = cljs_draw$core$color_item_$_state_machine__8596__auto__);

(statearr_20248[(1)] = (1));

return statearr_20248;
});
var cljs_draw$core$color_item_$_state_machine__8596__auto____1 = (function (state_20240){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_20240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e20249){if((e20249 instanceof Object)){
var ex__8599__auto__ = e20249;
var statearr_20250_20264 = state_20240;
(statearr_20250_20264[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20265 = state_20240;
state_20240 = G__20265;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8596__auto__ = function(state_20240){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8596__auto____1.call(this,state_20240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8596__auto____0;
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8596__auto____1;
return cljs_draw$core$color_item_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8618__auto__ = (function (){var statearr_20251 = f__8617__auto__.call(null);
(statearr_20251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_20251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__,map__20178,map__20178__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);

return c__8616__auto__;
});

cljs_draw.core.t20175.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t20175.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t20175.prototype.om$core$IRender$ = true;

cljs_draw.core.t20175.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__20252 = om.core.get_state.call(null,self__.owner);
var map__20252__$1 = ((cljs.core.seq_QMARK_.call(null,map__20252))?cljs.core.apply.call(null,cljs.core.hash_map,map__20252):map__20252);
var mouseup = cljs.core.get.call(null,map__20252__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__20252__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__20252__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
return React.DOM.div({"style": {"position": "relative", "width": (50), "height": (50)}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"href": "#", "onClick": ((function (map__20252,map__20252__$1,mouseup,mousedown,mouseout,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__20252,map__20252__$1,mouseup,mousedown,mouseout,___$1))
},"remove")),React.DOM.div({"onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "style": {"position": "absolute", "width": (50), "height": (50), "cursor": "pointer", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":"")}}));
});

cljs_draw.core.t20175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-item","color-item",934499434,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20176","meta20176",943248911,null)], null);
});

cljs_draw.core.t20175.cljs$lang$type = true;

cljs_draw.core.t20175.cljs$lang$ctorStr = "cljs_draw.core/t20175";

cljs_draw.core.t20175.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t20175");
});

cljs_draw.core.__GT_t20175 = (function cljs_draw$core$color_item_$___GT_t20175(color_item__$1,props__$1,owner__$1,meta20176){
return (new cljs_draw.core.t20175(color_item__$1,props__$1,owner__$1,meta20176));
});

}

return (new cljs_draw.core.t20175(cljs_draw$core$color_item,props,owner,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cljs_draw.core.t20459 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t20459 = (function (app,data,owner,meta20460){
this.app = app;
this.data = data;
this.owner = owner;
this.meta20460 = meta20460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t20459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20461,meta20460__$1){
var self__ = this;
var _20461__$1 = this;
return (new cljs_draw.core.t20459(self__.app,self__.data,self__.owner,meta20460__$1));
});

cljs_draw.core.t20459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20461){
var self__ = this;
var _20461__$1 = this;
return self__.meta20460;
});

cljs_draw.core.t20459.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t20459.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvas = node.querySelector("canvas");
var c__8616__auto___20652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___20652,node,container,canvas,this$__$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___20652,node,container,canvas,this$__$1){
return (function (state_20471){
var state_val_20472 = (state_20471[(1)]);
if((state_val_20472 === (1))){
var inst_20462 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_20463 = new cljs.core.Keyword(null,"brushes","brushes",1893051952).cljs$core$IFn$_invoke$arity$1(inst_20462);
var inst_20464 = cljs_draw.core.init_renderer.call(null,canvas,inst_20463);
var state_20471__$1 = state_20471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20471__$1,(2),inst_20464);
} else {
if((state_val_20472 === (2))){
var inst_20466 = (state_20471[(2)]);
var inst_20467 = cljs_draw.core.merge_in_BANG_.call(null,cljs_draw.core.app_state,new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),inst_20466);
var inst_20468 = cljs_draw.core.load_state.call(null);
var inst_20469 = cljs_draw.core.render_loop.call(null);
var state_20471__$1 = (function (){var statearr_20473 = state_20471;
(statearr_20473[(7)] = inst_20468);

(statearr_20473[(8)] = inst_20467);

return statearr_20473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20471__$1,inst_20469);
} else {
return null;
}
}
});})(c__8616__auto___20652,node,container,canvas,this$__$1))
;
return ((function (switch__8595__auto__,c__8616__auto___20652,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8596__auto__ = null;
var cljs_draw$core$app_$_state_machine__8596__auto____0 = (function (){
var statearr_20477 = [null,null,null,null,null,null,null,null,null];
(statearr_20477[(0)] = cljs_draw$core$app_$_state_machine__8596__auto__);

(statearr_20477[(1)] = (1));

return statearr_20477;
});
var cljs_draw$core$app_$_state_machine__8596__auto____1 = (function (state_20471){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_20471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e20478){if((e20478 instanceof Object)){
var ex__8599__auto__ = e20478;
var statearr_20479_20653 = state_20471;
(statearr_20479_20653[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20654 = state_20471;
state_20471 = G__20654;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8596__auto__ = function(state_20471){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8596__auto____1.call(this,state_20471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8596__auto____0;
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8596__auto____1;
return cljs_draw$core$app_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___20652,node,container,canvas,this$__$1))
})();
var state__8618__auto__ = (function (){var statearr_20480 = f__8617__auto__.call(null);
(statearr_20480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___20652);

return statearr_20480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___20652,node,container,canvas,this$__$1))
);


var moved_20655 = cljs_draw.util.listen.call(null,container,"pointermove");
var c__8616__auto___20656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___20656,moved_20655,node,container,canvas,this$__$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___20656,moved_20655,node,container,canvas,this$__$1){
return (function (state_20559){
var state_val_20560 = (state_20559[(1)]);
if((state_val_20560 === (7))){
var inst_20555 = (state_20559[(2)]);
var state_20559__$1 = state_20559;
var statearr_20561_20657 = state_20559__$1;
(statearr_20561_20657[(2)] = inst_20555);

(statearr_20561_20657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (20))){
var inst_20495 = (state_20559[(7)]);
var inst_20529 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_20530 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_20529);
var inst_20531 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_20532 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_20531);
var inst_20533 = cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,inst_20532);
var inst_20534 = cljs_draw.core.start_stroke.call(null,inst_20495,inst_20530,inst_20533);
var state_20559__$1 = state_20559;
var statearr_20562_20658 = state_20559__$1;
(statearr_20562_20658[(2)] = inst_20534);

(statearr_20562_20658[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (1))){
var inst_20481 = (0);
var state_20559__$1 = (function (){var statearr_20563 = state_20559;
(statearr_20563[(8)] = inst_20481);

return statearr_20563;
})();
var statearr_20564_20659 = state_20559__$1;
(statearr_20564_20659[(2)] = null);

(statearr_20564_20659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (24))){
var state_20559__$1 = state_20559;
var statearr_20565_20660 = state_20559__$1;
(statearr_20565_20660[(2)] = null);

(statearr_20565_20660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (4))){
var inst_20484 = (state_20559[(9)]);
var inst_20484__$1 = (state_20559[(2)]);
var state_20559__$1 = (function (){var statearr_20566 = state_20559;
(statearr_20566[(9)] = inst_20484__$1);

return statearr_20566;
})();
if(cljs.core.truth_(inst_20484__$1)){
var statearr_20567_20661 = state_20559__$1;
(statearr_20567_20661[(1)] = (5));

} else {
var statearr_20568_20662 = state_20559__$1;
(statearr_20568_20662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (15))){
var state_20559__$1 = state_20559;
var statearr_20569_20663 = state_20559__$1;
(statearr_20569_20663[(2)] = null);

(statearr_20569_20663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (21))){
var state_20559__$1 = state_20559;
var statearr_20570_20664 = state_20559__$1;
(statearr_20570_20664[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (13))){
var inst_20549 = (state_20559[(2)]);
var state_20559__$1 = state_20559;
var statearr_20572_20665 = state_20559__$1;
(statearr_20572_20665[(2)] = inst_20549);

(statearr_20572_20665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (22))){
var inst_20547 = (state_20559[(2)]);
var state_20559__$1 = state_20559;
var statearr_20573_20666 = state_20559__$1;
(statearr_20573_20666[(2)] = inst_20547);

(statearr_20573_20666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (6))){
var state_20559__$1 = state_20559;
var statearr_20574_20667 = state_20559__$1;
(statearr_20574_20667[(2)] = null);

(statearr_20574_20667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (25))){
var inst_20545 = (state_20559[(2)]);
var state_20559__$1 = state_20559;
var statearr_20575_20668 = state_20559__$1;
(statearr_20575_20668[(2)] = inst_20545);

(statearr_20575_20668[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (17))){
var inst_20519 = cljs_draw.core.finalize_stroke.call(null);
var state_20559__$1 = state_20559;
var statearr_20576_20669 = state_20559__$1;
(statearr_20576_20669[(2)] = inst_20519);

(statearr_20576_20669[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (3))){
var inst_20557 = (state_20559[(2)]);
var state_20559__$1 = state_20559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20559__$1,inst_20557);
} else {
if((state_val_20560 === (12))){
var inst_20481 = (state_20559[(8)]);
var inst_20527 = cljs.core._EQ_.call(null,inst_20481,(0));
var state_20559__$1 = state_20559;
if(inst_20527){
var statearr_20577_20670 = state_20559__$1;
(statearr_20577_20670[(1)] = (20));

} else {
var statearr_20578_20671 = state_20559__$1;
(statearr_20578_20671[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (2))){
var state_20559__$1 = state_20559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20559__$1,(4),moved_20655);
} else {
if((state_val_20560 === (23))){
var inst_20496 = (state_20559[(10)]);
var inst_20495 = (state_20559[(7)]);
var inst_20537 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_20538 = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(inst_20537);
var inst_20539 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_20540 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_20539);
var inst_20541 = cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,inst_20540);
var inst_20542 = cljs_draw.core.add_to_stroke.call(null,inst_20495,inst_20496,inst_20538,inst_20541);
var state_20559__$1 = state_20559;
var statearr_20579_20672 = state_20559__$1;
(statearr_20579_20672[(2)] = inst_20542);

(statearr_20579_20672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (19))){
var inst_20522 = (state_20559[(2)]);
var state_20559__$1 = state_20559;
var statearr_20580_20673 = state_20559__$1;
(statearr_20580_20673[(2)] = inst_20522);

(statearr_20580_20673[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (11))){
var inst_20505 = (state_20559[(11)]);
var inst_20504 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_20505__$1 = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(inst_20504);
var state_20559__$1 = (function (){var statearr_20581 = state_20559;
(statearr_20581[(11)] = inst_20505__$1);

return statearr_20581;
})();
if(cljs.core.truth_(inst_20505__$1)){
var statearr_20582_20674 = state_20559__$1;
(statearr_20582_20674[(1)] = (14));

} else {
var statearr_20583_20675 = state_20559__$1;
(statearr_20583_20675[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (9))){
var inst_20496 = (state_20559[(10)]);
var inst_20502 = cljs.core._EQ_.call(null,inst_20496,(0));
var state_20559__$1 = state_20559;
if(inst_20502){
var statearr_20584_20676 = state_20559__$1;
(statearr_20584_20676[(1)] = (11));

} else {
var statearr_20585_20677 = state_20559__$1;
(statearr_20585_20677[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (5))){
var inst_20484 = (state_20559[(9)]);
var inst_20486 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_20487 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20488 = [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)];
var inst_20489 = (new cljs.core.PersistentVector(null,2,(5),inst_20487,inst_20488,null));
var inst_20490 = cljs.core.get_in.call(null,inst_20486,inst_20489);
var inst_20491 = inst_20484.layerX;
var inst_20492 = (inst_20491 - inst_20490);
var inst_20493 = inst_20484.layerY;
var inst_20494 = (inst_20493 - inst_20490);
var inst_20495 = thi.ng.geom.core.vector.vec2.call(null,inst_20492,inst_20494);
var inst_20496 = inst_20484.mozPressure;
var inst_20497 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_20498 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_20497);
var inst_20499 = cljs.core.not.call(null,inst_20498);
var state_20559__$1 = (function (){var statearr_20586 = state_20559;
(statearr_20586[(10)] = inst_20496);

(statearr_20586[(7)] = inst_20495);

return statearr_20586;
})();
if(inst_20499){
var statearr_20587_20678 = state_20559__$1;
(statearr_20587_20678[(1)] = (8));

} else {
var statearr_20588_20679 = state_20559__$1;
(statearr_20588_20679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (14))){
var inst_20505 = (state_20559[(11)]);
var inst_20507 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_20508 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_20507);
var inst_20509 = inst_20505.isColor(inst_20508);
var inst_20510 = cljs.core.not.call(null,inst_20509);
var inst_20511 = inst_20505.getBrush();
var inst_20512 = cljs.core.keyword.call(null,inst_20511);
var inst_20513 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_20514 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_20513);
var inst_20515 = cljs.core._EQ_.call(null,inst_20512,inst_20514);
var inst_20516 = !(inst_20515);
var inst_20517 = (inst_20510) || (inst_20516);
var state_20559__$1 = state_20559;
if(cljs.core.truth_(inst_20517)){
var statearr_20589_20680 = state_20559__$1;
(statearr_20589_20680[(1)] = (17));

} else {
var statearr_20590_20681 = state_20559__$1;
(statearr_20590_20681[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (16))){
var inst_20525 = (state_20559[(2)]);
var state_20559__$1 = state_20559;
var statearr_20591_20682 = state_20559__$1;
(statearr_20591_20682[(2)] = inst_20525);

(statearr_20591_20682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (10))){
var inst_20496 = (state_20559[(10)]);
var inst_20551 = (state_20559[(2)]);
var inst_20481 = inst_20496;
var state_20559__$1 = (function (){var statearr_20592 = state_20559;
(statearr_20592[(8)] = inst_20481);

(statearr_20592[(12)] = inst_20551);

return statearr_20592;
})();
var statearr_20593_20683 = state_20559__$1;
(statearr_20593_20683[(2)] = null);

(statearr_20593_20683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (18))){
var state_20559__$1 = state_20559;
var statearr_20594_20684 = state_20559__$1;
(statearr_20594_20684[(2)] = null);

(statearr_20594_20684[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20560 === (8))){
var state_20559__$1 = state_20559;
var statearr_20595_20685 = state_20559__$1;
(statearr_20595_20685[(2)] = null);

(statearr_20595_20685[(1)] = (10));


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
});})(c__8616__auto___20656,moved_20655,node,container,canvas,this$__$1))
;
return ((function (switch__8595__auto__,c__8616__auto___20656,moved_20655,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8596__auto__ = null;
var cljs_draw$core$app_$_state_machine__8596__auto____0 = (function (){
var statearr_20599 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20599[(0)] = cljs_draw$core$app_$_state_machine__8596__auto__);

(statearr_20599[(1)] = (1));

return statearr_20599;
});
var cljs_draw$core$app_$_state_machine__8596__auto____1 = (function (state_20559){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_20559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e20600){if((e20600 instanceof Object)){
var ex__8599__auto__ = e20600;
var statearr_20601_20686 = state_20559;
(statearr_20601_20686[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20687 = state_20559;
state_20559 = G__20687;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8596__auto__ = function(state_20559){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8596__auto____1.call(this,state_20559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8596__auto____0;
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8596__auto____1;
return cljs_draw$core$app_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___20656,moved_20655,node,container,canvas,this$__$1))
})();
var state__8618__auto__ = (function (){var statearr_20602 = f__8617__auto__.call(null);
(statearr_20602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___20656);

return statearr_20602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___20656,moved_20655,node,container,canvas,this$__$1))
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
return (function (state_20625){
var state_val_20626 = (state_20625[(1)]);
if((state_val_20626 === (7))){
var inst_20620 = (state_20625[(2)]);
var state_20625__$1 = (function (){var statearr_20627 = state_20625;
(statearr_20627[(7)] = inst_20620);

return statearr_20627;
})();
var statearr_20628_20688 = state_20625__$1;
(statearr_20628_20688[(2)] = null);

(statearr_20628_20688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (1))){
var state_20625__$1 = state_20625;
var statearr_20629_20689 = state_20625__$1;
(statearr_20629_20689[(2)] = null);

(statearr_20629_20689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (4))){
var inst_20605 = (state_20625[(8)]);
var inst_20605__$1 = (state_20625[(2)]);
var inst_20606 = inst_20605__$1.metaKey;
var state_20625__$1 = (function (){var statearr_20630 = state_20625;
(statearr_20630[(8)] = inst_20605__$1);

return statearr_20630;
})();
if(cljs.core.truth_(inst_20606)){
var statearr_20631_20690 = state_20625__$1;
(statearr_20631_20690[(1)] = (5));

} else {
var statearr_20632_20691 = state_20625__$1;
(statearr_20632_20691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (6))){
var state_20625__$1 = state_20625;
var statearr_20633_20692 = state_20625__$1;
(statearr_20633_20692[(2)] = null);

(statearr_20633_20692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (3))){
var inst_20623 = (state_20625[(2)]);
var state_20625__$1 = state_20625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20625__$1,inst_20623);
} else {
if((state_val_20626 === (12))){
var state_20625__$1 = state_20625;
var statearr_20634_20693 = state_20625__$1;
(statearr_20634_20693[(2)] = new cljs.core.Keyword(null,"else","else",-1508377146));

(statearr_20634_20693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (2))){
var state_20625__$1 = state_20625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20625__$1,(4),keydown);
} else {
if((state_val_20626 === (11))){
var inst_20612 = cljs_draw.core.clear_canvas.call(null);
var state_20625__$1 = state_20625;
var statearr_20635_20694 = state_20625__$1;
(statearr_20635_20694[(2)] = inst_20612);

(statearr_20635_20694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (9))){
var inst_20608 = cljs_draw.core.save_state.call(null);
var state_20625__$1 = state_20625;
var statearr_20636_20695 = state_20625__$1;
(statearr_20636_20695[(2)] = inst_20608);

(statearr_20636_20695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (5))){
var inst_20605 = (state_20625[(8)]);
var inst_20615 = inst_20605.keyCode;
var state_20625__$1 = state_20625;
var G__20637_20696 = inst_20615;
switch (G__20637_20696) {
case (83):
var statearr_20638_20698 = state_20625__$1;
(statearr_20638_20698[(1)] = (9));


break;
case (90):
var statearr_20639_20699 = state_20625__$1;
(statearr_20639_20699[(1)] = (10));


break;
case (67):
var statearr_20640_20700 = state_20625__$1;
(statearr_20640_20700[(1)] = (11));


break;
default:
var statearr_20641_20701 = state_20625__$1;
(statearr_20641_20701[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (10))){
var inst_20610 = cljs_draw.core.undo.call(null);
var state_20625__$1 = state_20625;
var statearr_20642_20702 = state_20625__$1;
(statearr_20642_20702[(2)] = inst_20610);

(statearr_20642_20702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (8))){
var inst_20617 = (state_20625[(2)]);
var state_20625__$1 = state_20625;
var statearr_20643_20703 = state_20625__$1;
(statearr_20643_20703[(2)] = inst_20617);

(statearr_20643_20703[(1)] = (7));


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
var statearr_20647 = [null,null,null,null,null,null,null,null,null];
(statearr_20647[(0)] = cljs_draw$core$app_$_state_machine__8596__auto__);

(statearr_20647[(1)] = (1));

return statearr_20647;
});
var cljs_draw$core$app_$_state_machine__8596__auto____1 = (function (state_20625){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_20625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e20648){if((e20648 instanceof Object)){
var ex__8599__auto__ = e20648;
var statearr_20649_20704 = state_20625;
(statearr_20649_20704[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20705 = state_20625;
state_20625 = G__20705;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8596__auto__ = function(state_20625){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8596__auto____1.call(this,state_20625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8596__auto____0;
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8596__auto____1;
return cljs_draw$core$app_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__,keydown,node,container,canvas,this$__$1))
})();
var state__8618__auto__ = (function (){var statearr_20650 = f__8617__auto__.call(null);
(statearr_20650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_20650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__,keydown,node,container,canvas,this$__$1))
);

return c__8616__auto__;
});

cljs_draw.core.t20459.prototype.om$core$IRender$ = true;

cljs_draw.core.t20459.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__20651 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"dimen","dimen",-234621985)], null));
var width = cljs.core.nth.call(null,vec__20651,(0),null);
var height = cljs.core.nth.call(null,vec__20651,(1),null);
var boundary = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)], null));
return React.DOM.div({"id": "app", "style": {"height": "100%", "backgroundColor": "#222222"}},React.DOM.div({"className": "canvas-container", "style": {"bottom": (0), "top": (0), "overflow": "hidden", "width": ((width / (2)) + (boundary * (2))), "cursor": "crosshair", "padding": (50), "right": (0), "position": "absolute", "border": "1px solid #2f2f2f", "height": ((height / (2)) + (boundary * (2))), "left": (0), "margin": "auto"}},React.DOM.canvas({"width": width, "height": height, "style": {"width": (width / (2)), "height": (height / (2))}})),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t20459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20460","meta20460",-870947777,null)], null);
});

cljs_draw.core.t20459.cljs$lang$type = true;

cljs_draw.core.t20459.cljs$lang$ctorStr = "cljs_draw.core/t20459";

cljs_draw.core.t20459.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t20459");
});

cljs_draw.core.__GT_t20459 = (function cljs_draw$core$app_$___GT_t20459(app__$1,data__$1,owner__$1,meta20460){
return (new cljs_draw.core.t20459(app__$1,data__$1,owner__$1,meta20460));
});

}

return (new cljs_draw.core.t20459(cljs_draw$core$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));
cljs_draw.core.repl_swap_BANG_ = (function cljs_draw$core$repl_swap_BANG_(name,val){
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.assoc,name,val);

return null;
});

//# sourceMappingURL=core.js.map