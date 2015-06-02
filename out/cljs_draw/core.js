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
if(typeof cljs_draw.core.conn !== 'undefined'){
} else {
cljs_draw.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
if(typeof cljs_draw.core.app_state !== 'undefined'){
} else {
cljs_draw.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-history","stroke-history",-272903291),new cljs.core.Keyword(null,"listening-for-color","listening-for-color",-341629494),new cljs.core.Keyword(null,"current-brush","current-brush",935402),new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"brushes","brushes",1893051952),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685),new cljs.core.Keyword(null,"current-color","current-color",1731984119),new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847)],[cljs.core.PersistentVector.EMPTY,false,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimen","dimen",-234621985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1200),(1200)], null),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),(50)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000"], null),cljs.core.PersistentArrayMap.EMPTY,null,"#000000",cljs.core.PersistentVector.EMPTY]));
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
var c__8518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8518__auto__){
return (function (){
var f__8519__auto__ = (function (){var switch__8497__auto__ = ((function (c__8518__auto__){
return (function (state_170751){
var state_val_170752 = (state_170751[(1)]);
if((state_val_170752 === (1))){
var inst_170734 = coll;
var inst_170735 = chans;
var state_170751__$1 = (function (){var statearr_170753 = state_170751;
(statearr_170753[(7)] = inst_170734);

(statearr_170753[(8)] = inst_170735);

return statearr_170753;
})();
var statearr_170754_170768 = state_170751__$1;
(statearr_170754_170768[(2)] = null);

(statearr_170754_170768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_170752 === (2))){
var inst_170735 = (state_170751[(8)]);
var inst_170737 = cljs.core.empty_QMARK_.call(null,inst_170735);
var state_170751__$1 = state_170751;
if(inst_170737){
var statearr_170755_170769 = state_170751__$1;
(statearr_170755_170769[(1)] = (4));

} else {
var statearr_170756_170770 = state_170751__$1;
(statearr_170756_170770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_170752 === (3))){
var inst_170749 = (state_170751[(2)]);
var state_170751__$1 = state_170751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_170751__$1,inst_170749);
} else {
if((state_val_170752 === (4))){
var inst_170734 = (state_170751[(7)]);
var state_170751__$1 = state_170751;
var statearr_170757_170771 = state_170751__$1;
(statearr_170757_170771[(2)] = inst_170734);

(statearr_170757_170771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_170752 === (5))){
var inst_170735 = (state_170751[(8)]);
var inst_170740 = cljs.core.first.call(null,inst_170735);
var state_170751__$1 = state_170751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_170751__$1,(7),inst_170740);
} else {
if((state_val_170752 === (6))){
var inst_170747 = (state_170751[(2)]);
var state_170751__$1 = state_170751;
var statearr_170758_170772 = state_170751__$1;
(statearr_170758_170772[(2)] = inst_170747);

(statearr_170758_170772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_170752 === (7))){
var inst_170734 = (state_170751[(7)]);
var inst_170735 = (state_170751[(8)]);
var inst_170742 = (state_170751[(2)]);
var inst_170743 = cljs.core.conj.call(null,inst_170734,inst_170742);
var inst_170744 = cljs.core.rest.call(null,inst_170735);
var inst_170734__$1 = inst_170743;
var inst_170735__$1 = inst_170744;
var state_170751__$1 = (function (){var statearr_170759 = state_170751;
(statearr_170759[(7)] = inst_170734__$1);

(statearr_170759[(8)] = inst_170735__$1);

return statearr_170759;
})();
var statearr_170760_170773 = state_170751__$1;
(statearr_170760_170773[(2)] = null);

(statearr_170760_170773[(1)] = (2));


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
});})(c__8518__auto__))
;
return ((function (switch__8497__auto__,c__8518__auto__){
return (function() {
var cljs_draw$core$take_into_$_state_machine__8498__auto__ = null;
var cljs_draw$core$take_into_$_state_machine__8498__auto____0 = (function (){
var statearr_170764 = [null,null,null,null,null,null,null,null,null];
(statearr_170764[(0)] = cljs_draw$core$take_into_$_state_machine__8498__auto__);

(statearr_170764[(1)] = (1));

return statearr_170764;
});
var cljs_draw$core$take_into_$_state_machine__8498__auto____1 = (function (state_170751){
while(true){
var ret_value__8499__auto__ = (function (){try{while(true){
var result__8500__auto__ = switch__8497__auto__.call(null,state_170751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8500__auto__;
}
break;
}
}catch (e170765){if((e170765 instanceof Object)){
var ex__8501__auto__ = e170765;
var statearr_170766_170774 = state_170751;
(statearr_170766_170774[(5)] = ex__8501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_170751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e170765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__170775 = state_170751;
state_170751 = G__170775;
continue;
} else {
return ret_value__8499__auto__;
}
break;
}
});
cljs_draw$core$take_into_$_state_machine__8498__auto__ = function(state_170751){
switch(arguments.length){
case 0:
return cljs_draw$core$take_into_$_state_machine__8498__auto____0.call(this);
case 1:
return cljs_draw$core$take_into_$_state_machine__8498__auto____1.call(this,state_170751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$take_into_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$take_into_$_state_machine__8498__auto____0;
cljs_draw$core$take_into_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$take_into_$_state_machine__8498__auto____1;
return cljs_draw$core$take_into_$_state_machine__8498__auto__;
})()
;})(switch__8497__auto__,c__8518__auto__))
})();
var state__8520__auto__ = (function (){var statearr_170767 = f__8519__auto__.call(null);
(statearr_170767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8518__auto__);

return statearr_170767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8520__auto__);
});})(c__8518__auto__))
);

return c__8518__auto__;
});
cljs_draw.core.merge_in_BANG_ = (function cljs_draw$core$merge_in_BANG_(data,key,m){
return cljs.core.swap_BANG_.call(null,data,(function (p1__170776_SHARP_){
return cljs.core.assoc.call(null,p1__170776_SHARP_,key,cljs.core.merge.call(null,m,(function (){var or__4953__auto__ = cljs.core.get.call(null,p1__170776_SHARP_,key);
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
var c__8518__auto___170871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8518__auto___170871,in$,out){
return (function (){
var f__8519__auto__ = (function (){var switch__8497__auto__ = ((function (c__8518__auto___170871,in$,out){
return (function (state_170851){
var state_val_170852 = (state_170851[(1)]);
if((state_val_170852 === (7))){
var inst_170834 = (state_170851[(2)]);
var inst_170835 = cljs.core.nth.call(null,inst_170834,(0),null);
var inst_170836 = cljs.core.nth.call(null,inst_170834,(1),null);
var inst_170837 = cljs.core._EQ_.call(null,inst_170836,in$);
var state_170851__$1 = (function (){var statearr_170853 = state_170851;
(statearr_170853[(7)] = inst_170835);

return statearr_170853;
})();
if(inst_170837){
var statearr_170854_170872 = state_170851__$1;
(statearr_170854_170872[(1)] = (8));

} else {
var statearr_170855_170873 = state_170851__$1;
(statearr_170855_170873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_170852 === (1))){
var state_170851__$1 = state_170851;
var statearr_170856_170874 = state_170851__$1;
(statearr_170856_170874[(2)] = null);

(statearr_170856_170874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_170852 === (4))){
var inst_170826 = (state_170851[(2)]);
var state_170851__$1 = (function (){var statearr_170857 = state_170851;
(statearr_170857[(8)] = inst_170826);

return statearr_170857;
})();
var statearr_170858_170875 = state_170851__$1;
(statearr_170858_170875[(2)] = null);

(statearr_170858_170875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_170852 === (6))){
var inst_170846 = (state_170851[(2)]);
var state_170851__$1 = (function (){var statearr_170859 = state_170851;
(statearr_170859[(9)] = inst_170846);

return statearr_170859;
})();
var statearr_170860_170876 = state_170851__$1;
(statearr_170860_170876[(2)] = null);

(statearr_170860_170876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_170852 === (3))){
var inst_170849 = (state_170851[(2)]);
var state_170851__$1 = state_170851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_170851__$1,inst_170849);
} else {
if((state_val_170852 === (2))){
var state_170851__$1 = state_170851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_170851__$1,(4),in$);
} else {
if((state_val_170852 === (11))){
var inst_170842 = (state_170851[(2)]);
var state_170851__$1 = state_170851;
var statearr_170861_170877 = state_170851__$1;
(statearr_170861_170877[(2)] = inst_170842);

(statearr_170861_170877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_170852 === (9))){
var state_170851__$1 = state_170851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_170851__$1,(11),out,true);
} else {
if((state_val_170852 === (5))){
var inst_170829 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_170830 = cljs.core.async.timeout.call(null,ms);
var inst_170831 = [in$,inst_170830];
var inst_170832 = (new cljs.core.PersistentVector(null,2,(5),inst_170829,inst_170831,null));
var state_170851__$1 = state_170851;
return cljs.core.async.ioc_alts_BANG_.call(null,state_170851__$1,(7),inst_170832);
} else {
if((state_val_170852 === (10))){
var inst_170844 = (state_170851[(2)]);
var state_170851__$1 = state_170851;
var statearr_170862_170878 = state_170851__$1;
(statearr_170862_170878[(2)] = inst_170844);

(statearr_170862_170878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_170852 === (8))){
var state_170851__$1 = state_170851;
var statearr_170863_170879 = state_170851__$1;
(statearr_170863_170879[(2)] = null);

(statearr_170863_170879[(1)] = (5));


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
});})(c__8518__auto___170871,in$,out))
;
return ((function (switch__8497__auto__,c__8518__auto___170871,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto____0 = (function (){
var statearr_170867 = [null,null,null,null,null,null,null,null,null,null];
(statearr_170867[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto__);

(statearr_170867[(1)] = (1));

return statearr_170867;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto____1 = (function (state_170851){
while(true){
var ret_value__8499__auto__ = (function (){try{while(true){
var result__8500__auto__ = switch__8497__auto__.call(null,state_170851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8500__auto__;
}
break;
}
}catch (e170868){if((e170868 instanceof Object)){
var ex__8501__auto__ = e170868;
var statearr_170869_170880 = state_170851;
(statearr_170869_170880[(5)] = ex__8501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_170851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e170868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__170881 = state_170851;
state_170851 = G__170881;
continue;
} else {
return ret_value__8499__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto__ = function(state_170851){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto____1.call(this,state_170851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__8498__auto__;
})()
;})(switch__8497__auto__,c__8518__auto___170871,in$,out))
})();
var state__8520__auto__ = (function (){var statearr_170870 = f__8519__auto__.call(null);
(statearr_170870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8518__auto___170871);

return statearr_170870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8520__auto__);
});})(c__8518__auto___170871,in$,out))
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
var brush_170882__$1 = cljs.core.assoc.call(null,brush,new cljs.core.Keyword(null,"brush-type","brush-type",1288263035),type,new cljs.core.Keyword(null,"name","name",1843675177),name);
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brushes","brushes",1893051952)], null),cljs.core.assoc,name,brush_170882__$1);

var temp__4421__auto___170883 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"driver","driver",1515263546)], null));
if(cljs.core.truth_(temp__4421__auto___170883)){
var driver_170884 = temp__4421__auto___170883;
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,((function (driver_170884,temp__4421__auto___170883){
return (function (data){
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724),name], null),cljs_draw.core.compile_brush.call(null,driver_170884,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447).cljs$core$IFn$_invoke$arity$1(brush),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701).cljs$core$IFn$_invoke$arity$1(brush)], null)));
});})(driver_170884,temp__4421__auto___170883))
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
cljs_draw.core.add_linear_brush.call(null,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_position.call(null),cljs_draw.core.default_vertex_position,cljs_draw.core.v_value,cljs_draw.core.a_value], true, false),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.PersistentArrayMap.fromArray([gamma.api.gl_frag_color.call(null),gamma.api.vec4.call(null,cljs_draw.core.u_color,.8)], true, false)], null));
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

return localforage.setItem("app-state",cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state)));
});
cljs_draw.core.load_state = (function cljs_draw$core$load_state(){
var c__8518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8518__auto__){
return (function (){
var f__8519__auto__ = (function (){var switch__8497__auto__ = ((function (c__8518__auto__){
return (function (state_170939){
var state_val_170940 = (state_170939[(1)]);
if((state_val_170940 === (1))){
var inst_170918 = (function (){return ((function (state_val_170940,c__8518__auto__){
return (function (data){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,data),"linear")){
return LinearStroke;
} else {
return RadialStroke;
}
});
;})(state_val_170940,c__8518__auto__))
})();
var inst_170919 = cljs_draw.util.get_from_storage.call(null,"current-mesh");
var state_170939__$1 = (function (){var statearr_170941 = state_170939;
(statearr_170941[(7)] = inst_170918);

return statearr_170941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_170939__$1,(2),inst_170919);
} else {
if((state_val_170940 === (2))){
var inst_170918 = (state_170939[(7)]);
var inst_170921 = (state_170939[(8)]);
var inst_170921__$1 = (state_170939[(2)]);
var inst_170922 = [new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685)];
var inst_170923 = (function (){var get_class = inst_170918;
var current = inst_170921__$1;
return ((function (get_class,current,inst_170918,inst_170921,inst_170921__$1,inst_170922,state_val_170940,c__8518__auto__){
return (function (data){
return get_class.call(null,data).unserialize(data);
});
;})(get_class,current,inst_170918,inst_170921,inst_170921__$1,inst_170922,state_val_170940,c__8518__auto__))
})();
var inst_170924 = cljs_draw.util.get_from_storage.call(null,"meshes");
var state_170939__$1 = (function (){var statearr_170942 = state_170939;
(statearr_170942[(9)] = inst_170922);

(statearr_170942[(8)] = inst_170921__$1);

(statearr_170942[(10)] = inst_170923);

return statearr_170942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_170939__$1,(3),inst_170924);
} else {
if((state_val_170940 === (3))){
var inst_170922 = (state_170939[(9)]);
var inst_170918 = (state_170939[(7)]);
var inst_170921 = (state_170939[(8)]);
var inst_170923 = (state_170939[(10)]);
var inst_170926 = (state_170939[(2)]);
var inst_170927 = cljs.core.mapv.call(null,inst_170923,inst_170926);
var inst_170928 = inst_170918.call(null,inst_170921);
var inst_170929 = inst_170928.unserialize(inst_170921);
var inst_170930 = [inst_170927,inst_170929];
var inst_170931 = cljs.core.PersistentHashMap.fromArrays(inst_170922,inst_170930);
var inst_170932 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.merge,inst_170931);
var inst_170933 = cljs_draw.util.get_from_storage.call(null,"app-state");
var state_170939__$1 = (function (){var statearr_170943 = state_170939;
(statearr_170943[(11)] = inst_170932);

return statearr_170943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_170939__$1,(4),inst_170933);
} else {
if((state_val_170940 === (4))){
var inst_170935 = (state_170939[(2)]);
var inst_170936 = (function (){var state = inst_170935;
return ((function (state,inst_170935,state_val_170940,c__8518__auto__){
return (function (x){
return cljs.core.js__GT_clj.call(null,state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
;})(state,inst_170935,state_val_170940,c__8518__auto__))
})();
var inst_170937 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,inst_170936);
var state_170939__$1 = state_170939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_170939__$1,inst_170937);
} else {
return null;
}
}
}
}
});})(c__8518__auto__))
;
return ((function (switch__8497__auto__,c__8518__auto__){
return (function() {
var cljs_draw$core$load_state_$_state_machine__8498__auto__ = null;
var cljs_draw$core$load_state_$_state_machine__8498__auto____0 = (function (){
var statearr_170947 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_170947[(0)] = cljs_draw$core$load_state_$_state_machine__8498__auto__);

(statearr_170947[(1)] = (1));

return statearr_170947;
});
var cljs_draw$core$load_state_$_state_machine__8498__auto____1 = (function (state_170939){
while(true){
var ret_value__8499__auto__ = (function (){try{while(true){
var result__8500__auto__ = switch__8497__auto__.call(null,state_170939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8500__auto__;
}
break;
}
}catch (e170948){if((e170948 instanceof Object)){
var ex__8501__auto__ = e170948;
var statearr_170949_170951 = state_170939;
(statearr_170949_170951[(5)] = ex__8501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_170939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e170948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__170952 = state_170939;
state_170939 = G__170952;
continue;
} else {
return ret_value__8499__auto__;
}
break;
}
});
cljs_draw$core$load_state_$_state_machine__8498__auto__ = function(state_170939){
switch(arguments.length){
case 0:
return cljs_draw$core$load_state_$_state_machine__8498__auto____0.call(this);
case 1:
return cljs_draw$core$load_state_$_state_machine__8498__auto____1.call(this,state_170939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$load_state_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$load_state_$_state_machine__8498__auto____0;
cljs_draw$core$load_state_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$load_state_$_state_machine__8498__auto____1;
return cljs_draw$core$load_state_$_state_machine__8498__auto__;
})()
;})(switch__8497__auto__,c__8518__auto__))
})();
var state__8520__auto__ = (function (){var statearr_170950 = f__8519__auto__.call(null);
(statearr_170950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8518__auto__);

return statearr_170950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8520__auto__);
});})(c__8518__auto__))
);

return c__8518__auto__;
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
var class$ = (function (){var G__170954 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__170954) {
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
cljs_draw.core.start_stroke = (function cljs_draw$core$start_stroke(point,color,brush){
var vec__170957 = point;
var x = cljs.core.nth.call(null,vec__170957,(0),null);
var y = cljs.core.nth.call(null,vec__170957,(1),null);
var current_mesh = (function (){var or__4953__auto__ = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state));
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return cljs_draw.core.make_mesh.call(null,color,brush);
}
})();
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-history","stroke-history",-272903291)], null),cljs.core.conj,current_mesh.getNumVertices());

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
cljs_draw.core.angle_of_vectors = (function cljs_draw$core$angle_of_vectors(v1,v2){
return Math.acos((thi.ng.geom.core.dot.call(null,v1,v2) / (thi.ng.geom.core.mag.call(null,v1) * thi.ng.geom.core.mag.call(null,v2))));
});
cljs_draw.core.constrain_stroke = (function cljs_draw$core$constrain_stroke(dir){
return dir;
});
cljs_draw.core.add_linear_face = (function cljs_draw$core$add_linear_face(mesh,p1,p2,p3,v1,v2,v3){
mesh.addVertex(cljs.core.nth.call(null,p1,(0)),cljs.core.nth.call(null,p1,(1)),v1);

mesh.addVertex(cljs.core.nth.call(null,p2,(0)),cljs.core.nth.call(null,p2,(1)),v2);

return mesh.addVertex(cljs.core.nth.call(null,p3,(0)),cljs.core.nth.call(null,p3,(1)),v3);
});
cljs_draw.core.add_to_linear_stroke = (function cljs_draw$core$add_to_linear_stroke(point,pressure,mesh){
var width = (Math.pow(pressure,(2)) * (30));
var current_pos = mesh.getCurrentPos();
var last_point1 = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(0)),cljs.core.nth.call(null,current_pos,(1)));
var last_point2 = thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,current_pos,(2)),cljs.core.nth.call(null,current_pos,(3)));
var last_edge = thi.ng.geom.core.div.call(null,thi.ng.geom.core._.call(null,last_point2,last_point1),(2));
var last_middle = thi.ng.geom.core._PLUS_.call(null,last_point1,last_edge);
var vec = cljs_draw.core.constrain_stroke.call(null,thi.ng.geom.core._.call(null,thi.ng.geom.core.vector.vec2.call(null,point),last_middle));
var pos = thi.ng.geom.core._PLUS_.call(null,last_middle,vec);
if((thi.ng.geom.core.mag.call(null,vec) > (5))){
var normalized = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normalize.call(null,vec),width);
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
var vec = cljs_draw.core.constrain_stroke.call(null,thi.ng.geom.core._.call(null,point,last_point));
var pos = thi.ng.geom.core._PLUS_.call(null,last_point,vec);
var c1 = thi.ng.geom.core._PLUS_.call(null,pos,thi.ng.geom.core.vector.vec2.call(null,(- radius),(- radius)));
var c2 = thi.ng.geom.core._PLUS_.call(null,pos,thi.ng.geom.core.vector.vec2.call(null,(- radius),radius));
var c3 = thi.ng.geom.core._PLUS_.call(null,pos,thi.ng.geom.core.vector.vec2.call(null,radius,(- radius)));
var c4 = thi.ng.geom.core._PLUS_.call(null,pos,thi.ng.geom.core.vector.vec2.call(null,radius,radius));
cljs_draw.core.add_radial_face.call(null,mesh,c1,c2,c3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

return cljs_draw.core.add_radial_face.call(null,mesh,c3,c2,c4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
});
cljs_draw.core.add_to_stroke = (function cljs_draw$core$add_to_stroke(point,pressure,mesh,brush){
var G__170959 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__170959) {
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
var G__170962 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__170962) {
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
return (function (p__171000){
var vec__171001 = p__171000;
var name = cljs.core.nth.call(null,vec__171001,(0),null);
var brush = cljs.core.nth.call(null,vec__171001,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs_draw.core.compile_brush.call(null,driver,brush)], null);
});})(gl,rect,w,h,driver))
,brushes));
var pers = cljs_draw.core.get_perspective_matrix.call(null,w,h);
gl.viewport((0),(0),(w * (2)),(h * (2)));

gl.clearColor((1),(1),(1),(1));

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);

gl.enable(gl.BLEND);

gl.disable(gl.DEPTH_TEST);

var c__8518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8518__auto__,gl,rect,w,h,driver,programs,pers){
return (function (){
var f__8519__auto__ = (function (){var switch__8497__auto__ = ((function (c__8518__auto__,gl,rect,w,h,driver,programs,pers){
return (function (state_171025){
var state_val_171026 = (state_171025[(1)]);
if((state_val_171026 === (1))){
var inst_171008 = (state_171025[(7)]);
var inst_171003 = (function (){return ((function (inst_171008,state_val_171026,c__8518__auto__,gl,rect,w,h,driver,programs,pers){
return (function (p__171002){
var vec__171027 = p__171002;
var name = cljs.core.nth.call(null,vec__171027,(0),null);
var brush = cljs.core.nth.call(null,vec__171027,(1),null);
return new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(brush);
});
;})(inst_171008,state_val_171026,c__8518__auto__,gl,rect,w,h,driver,programs,pers))
})();
var inst_171004 = cljs.core.map.call(null,inst_171003);
var inst_171005 = cljs.core.filter.call(null,cljs.core.identity);
var inst_171006 = cljs.core.comp.call(null,inst_171004,inst_171005);
var inst_171007 = cljs.core.sequence.call(null,inst_171006,brushes);
var inst_171008__$1 = cljs.core.distinct.call(null,inst_171007);
var inst_171009 = (function (){var get_texs = inst_171006;
var urls = inst_171008__$1;
return ((function (get_texs,urls,inst_171008,inst_171003,inst_171004,inst_171005,inst_171006,inst_171007,inst_171008__$1,state_val_171026,c__8518__auto__,gl,rect,w,h,driver,programs,pers){
return (function (url){
return cljs_draw.core.load_texture.call(null,url);
});
;})(get_texs,urls,inst_171008,inst_171003,inst_171004,inst_171005,inst_171006,inst_171007,inst_171008__$1,state_val_171026,c__8518__auto__,gl,rect,w,h,driver,programs,pers))
})();
var inst_171010 = cljs.core.map.call(null,inst_171009,inst_171008__$1);
var inst_171011 = cljs.core.PersistentHashMap.EMPTY;
var inst_171012 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_171013 = cljs.core.PersistentVector.EMPTY;
var inst_171014 = cljs_draw.core.take_into.call(null,inst_171013,inst_171010);
var state_171025__$1 = (function (){var statearr_171028 = state_171025;
(statearr_171028[(8)] = inst_171011);

(statearr_171028[(9)] = inst_171012);

(statearr_171028[(7)] = inst_171008__$1);

return statearr_171028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_171025__$1,(2),inst_171014);
} else {
if((state_val_171026 === (2))){
var inst_171011 = (state_171025[(8)]);
var inst_171012 = (state_171025[(9)]);
var inst_171008 = (state_171025[(7)]);
var inst_171016 = (state_171025[(2)]);
var inst_171017 = [inst_171008,inst_171016];
var inst_171018 = (new cljs.core.PersistentVector(null,2,(5),inst_171012,inst_171017,null));
var inst_171019 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,inst_171018);
var inst_171020 = cljs.core.into.call(null,inst_171011,inst_171019);
var inst_171021 = [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"driver","driver",1515263546),new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724),new cljs.core.Keyword(null,"pers","pers",-1016576635),new cljs.core.Keyword(null,"textures","textures",560681081)];
var inst_171022 = [gl,driver,programs,pers,inst_171020];
var inst_171023 = cljs.core.PersistentHashMap.fromArrays(inst_171021,inst_171022);
var state_171025__$1 = state_171025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_171025__$1,inst_171023);
} else {
return null;
}
}
});})(c__8518__auto__,gl,rect,w,h,driver,programs,pers))
;
return ((function (switch__8497__auto__,c__8518__auto__,gl,rect,w,h,driver,programs,pers){
return (function() {
var cljs_draw$core$init_renderer_$_state_machine__8498__auto__ = null;
var cljs_draw$core$init_renderer_$_state_machine__8498__auto____0 = (function (){
var statearr_171032 = [null,null,null,null,null,null,null,null,null,null];
(statearr_171032[(0)] = cljs_draw$core$init_renderer_$_state_machine__8498__auto__);

(statearr_171032[(1)] = (1));

return statearr_171032;
});
var cljs_draw$core$init_renderer_$_state_machine__8498__auto____1 = (function (state_171025){
while(true){
var ret_value__8499__auto__ = (function (){try{while(true){
var result__8500__auto__ = switch__8497__auto__.call(null,state_171025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8500__auto__;
}
break;
}
}catch (e171033){if((e171033 instanceof Object)){
var ex__8501__auto__ = e171033;
var statearr_171034_171036 = state_171025;
(statearr_171034_171036[(5)] = ex__8501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_171025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e171033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__171037 = state_171025;
state_171025 = G__171037;
continue;
} else {
return ret_value__8499__auto__;
}
break;
}
});
cljs_draw$core$init_renderer_$_state_machine__8498__auto__ = function(state_171025){
switch(arguments.length){
case 0:
return cljs_draw$core$init_renderer_$_state_machine__8498__auto____0.call(this);
case 1:
return cljs_draw$core$init_renderer_$_state_machine__8498__auto____1.call(this,state_171025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$init_renderer_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$init_renderer_$_state_machine__8498__auto____0;
cljs_draw$core$init_renderer_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$init_renderer_$_state_machine__8498__auto____1;
return cljs_draw$core$init_renderer_$_state_machine__8498__auto__;
})()
;})(switch__8497__auto__,c__8518__auto__,gl,rect,w,h,driver,programs,pers))
})();
var state__8520__auto__ = (function (){var statearr_171035 = f__8519__auto__.call(null);
(statearr_171035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8518__auto__);

return statearr_171035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8520__auto__);
});})(c__8518__auto__,gl,rect,w,h,driver,programs,pers))
);

return c__8518__auto__;
});
cljs_draw.core.render_mesh = (function cljs_draw$core$render_mesh(mesh,driver,brush,program,textures,pers,mv){
var brush_name = cljs.core.keyword.call(null,mesh.getBrush());
var brush_type = new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush);
cljs_draw.core.validate_brush.call(null,brush,mesh);

return gamma_driver.api.draw_arrays.call(null,driver,gamma_driver.api.bind.call(null,driver,program,(function (){var G__171039 = (((brush_type instanceof cljs.core.Keyword))?brush_type.fqn:null);
switch (G__171039) {
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
var map__171046 = ctx;
var map__171046__$1 = ((cljs.core.seq_QMARK_.call(null,map__171046))?cljs.core.apply.call(null,cljs.core.hash_map,map__171046):map__171046);
var gl = cljs.core.get.call(null,map__171046__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var driver = cljs.core.get.call(null,map__171046__$1,new cljs.core.Keyword(null,"driver","driver",1515263546));
var compiled_programs = cljs.core.get.call(null,map__171046__$1,new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724));
var pers = cljs.core.get.call(null,map__171046__$1,new cljs.core.Keyword(null,"pers","pers",-1016576635));
var textures = cljs.core.get.call(null,map__171046__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var mv = thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.matrix44.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null));
gl.clear(gl.COLOR_BUFFER_BIT);

var seq__171047_171051 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state)));
var chunk__171048_171052 = null;
var count__171049_171053 = (0);
var i__171050_171054 = (0);
while(true){
if((i__171050_171054 < count__171049_171053)){
var mesh_171055 = cljs.core._nth.call(null,chunk__171048_171052,i__171050_171054);
var brush_name_171056 = cljs.core.keyword.call(null,mesh_171055.getBrush());
cljs_draw.core.render_mesh.call(null,mesh_171055,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name_171056),cljs.core.get.call(null,compiled_programs,brush_name_171056),textures,pers,mv);

var G__171057 = seq__171047_171051;
var G__171058 = chunk__171048_171052;
var G__171059 = count__171049_171053;
var G__171060 = (i__171050_171054 + (1));
seq__171047_171051 = G__171057;
chunk__171048_171052 = G__171058;
count__171049_171053 = G__171059;
i__171050_171054 = G__171060;
continue;
} else {
var temp__4423__auto___171061 = cljs.core.seq.call(null,seq__171047_171051);
if(temp__4423__auto___171061){
var seq__171047_171062__$1 = temp__4423__auto___171061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__171047_171062__$1)){
var c__5738__auto___171063 = cljs.core.chunk_first.call(null,seq__171047_171062__$1);
var G__171064 = cljs.core.chunk_rest.call(null,seq__171047_171062__$1);
var G__171065 = c__5738__auto___171063;
var G__171066 = cljs.core.count.call(null,c__5738__auto___171063);
var G__171067 = (0);
seq__171047_171051 = G__171064;
chunk__171048_171052 = G__171065;
count__171049_171053 = G__171066;
i__171050_171054 = G__171067;
continue;
} else {
var mesh_171068 = cljs.core.first.call(null,seq__171047_171062__$1);
var brush_name_171069 = cljs.core.keyword.call(null,mesh_171068.getBrush());
cljs_draw.core.render_mesh.call(null,mesh_171068,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name_171069),cljs.core.get.call(null,compiled_programs,brush_name_171069),textures,pers,mv);

var G__171070 = cljs.core.next.call(null,seq__171047_171062__$1);
var G__171071 = null;
var G__171072 = (0);
var G__171073 = (0);
seq__171047_171051 = G__171070;
chunk__171048_171052 = G__171071;
count__171049_171053 = G__171072;
i__171050_171054 = G__171073;
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
return cljs_draw.core.render_mesh.call(null,current_mesh,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name),cljs.core.get.call(null,compiled_programs,brush_name),textures,pers,mv);
} else {
return null;
}
});
cljs_draw.core.render_loop = (function cljs_draw$core$render_loop(){
cljs_draw.core.render.call(null);

return requestAnimationFrame(cljs_draw$core$render_loop);
});
cljs_draw.core.color_input = (function cljs_draw$core$color_input(data,owner){
if(typeof cljs_draw.core.t171077 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t171077 = (function (color_input,data,owner,meta171078){
this.color_input = color_input;
this.data = data;
this.owner = owner;
this.meta171078 = meta171078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t171077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_171079,meta171078__$1){
var self__ = this;
var _171079__$1 = this;
return (new cljs_draw.core.t171077(self__.color_input,self__.data,self__.owner,meta171078__$1));
});

cljs_draw.core.t171077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_171079){
var self__ = this;
var _171079__$1 = this;
return self__.meta171078;
});

cljs_draw.core.t171077.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t171077.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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

cljs_draw.core.t171077.prototype.om$core$IRender$ = true;

cljs_draw.core.t171077.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"type": "color", "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "style": {"width": (50), "height": (50), "border": (0)}});
});

cljs_draw.core.t171077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-input","color-input",696074651,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta171078","meta171078",976588291,null)], null);
});

cljs_draw.core.t171077.cljs$lang$type = true;

cljs_draw.core.t171077.cljs$lang$ctorStr = "cljs_draw.core/t171077";

cljs_draw.core.t171077.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t171077");
});

cljs_draw.core.__GT_t171077 = (function cljs_draw$core$color_input_$___GT_t171077(color_input__$1,data__$1,owner__$1,meta171078){
return (new cljs_draw.core.t171077(color_input__$1,data__$1,owner__$1,meta171078));
});

}

return (new cljs_draw.core.t171077(cljs_draw$core$color_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t171158 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t171158 = (function (color_item,props,owner,meta171159){
this.color_item = color_item;
this.props = props;
this.owner = owner;
this.meta171159 = meta171159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t171158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_171160,meta171159__$1){
var self__ = this;
var _171160__$1 = this;
return (new cljs_draw.core.t171158(self__.color_item,self__.props,self__.owner,meta171159__$1));
});

cljs_draw.core.t171158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_171160){
var self__ = this;
var _171160__$1 = this;
return self__.meta171159;
});

cljs_draw.core.t171158.prototype.om$core$IInitState$ = true;

cljs_draw.core.t171158.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t171158.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t171158.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__171161 = om.core.get_state.call(null,self__.owner);
var map__171161__$1 = ((cljs.core.seq_QMARK_.call(null,map__171161))?cljs.core.apply.call(null,cljs.core.hash_map,map__171161):map__171161);
var mouseup = cljs.core.get.call(null,map__171161__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__171161__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__171161__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var hide_controls = cljs.core.get.call(null,map__171161__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var c__8518__auto___171236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8518__auto___171236,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8519__auto__ = (function (){var switch__8497__auto__ = ((function (c__8518__auto___171236,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_171193){
var state_val_171194 = (state_171193[(1)]);
if((state_val_171194 === (7))){
var inst_171181 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_171182 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_171193__$1 = (function (){var statearr_171195 = state_171193;
(statearr_171195[(7)] = inst_171181);

return statearr_171195;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_171193__$1,(9),inst_171182,true);
} else {
if((state_val_171194 === (1))){
var state_171193__$1 = state_171193;
var statearr_171196_171237 = state_171193__$1;
(statearr_171196_171237[(2)] = null);

(statearr_171196_171237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171194 === (4))){
var inst_171164 = (state_171193[(2)]);
var inst_171166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_171167 = cljs.core.async.timeout.call(null,(500));
var inst_171168 = [mouseup,inst_171167];
var inst_171169 = (new cljs.core.PersistentVector(null,2,(5),inst_171166,inst_171168,null));
var state_171193__$1 = (function (){var statearr_171197 = state_171193;
(statearr_171197[(8)] = inst_171164);

return statearr_171197;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_171193__$1,(5),inst_171169);
} else {
if((state_val_171194 === (6))){
var inst_171176 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_171177 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_171178 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_171179 = inst_171177.call(null,inst_171178);
var state_171193__$1 = (function (){var statearr_171198 = state_171193;
(statearr_171198[(9)] = inst_171176);

return statearr_171198;
})();
var statearr_171199_171238 = state_171193__$1;
(statearr_171199_171238[(2)] = inst_171179);

(statearr_171199_171238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171194 === (3))){
var inst_171191 = (state_171193[(2)]);
var state_171193__$1 = state_171193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_171193__$1,inst_171191);
} else {
if((state_val_171194 === (2))){
var state_171193__$1 = state_171193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_171193__$1,(4),mousedown);
} else {
if((state_val_171194 === (9))){
var inst_171184 = (state_171193[(2)]);
var state_171193__$1 = (function (){var statearr_171200 = state_171193;
(statearr_171200[(10)] = inst_171184);

return statearr_171200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_171193__$1,(10),mouseup);
} else {
if((state_val_171194 === (5))){
var inst_171171 = (state_171193[(2)]);
var inst_171172 = cljs.core.nth.call(null,inst_171171,(0),null);
var inst_171173 = cljs.core.nth.call(null,inst_171171,(1),null);
var inst_171174 = cljs.core._EQ_.call(null,inst_171173,mouseup);
var state_171193__$1 = (function (){var statearr_171201 = state_171193;
(statearr_171201[(11)] = inst_171172);

return statearr_171201;
})();
if(inst_171174){
var statearr_171202_171239 = state_171193__$1;
(statearr_171202_171239[(1)] = (6));

} else {
var statearr_171203_171240 = state_171193__$1;
(statearr_171203_171240[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171194 === (10))){
var inst_171186 = (state_171193[(2)]);
var state_171193__$1 = state_171193;
var statearr_171204_171241 = state_171193__$1;
(statearr_171204_171241[(2)] = inst_171186);

(statearr_171204_171241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171194 === (8))){
var inst_171188 = (state_171193[(2)]);
var state_171193__$1 = (function (){var statearr_171205 = state_171193;
(statearr_171205[(12)] = inst_171188);

return statearr_171205;
})();
var statearr_171206_171242 = state_171193__$1;
(statearr_171206_171242[(2)] = null);

(statearr_171206_171242[(1)] = (2));


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
});})(c__8518__auto___171236,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8497__auto__,c__8518__auto___171236,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8498__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8498__auto____0 = (function (){
var statearr_171210 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_171210[(0)] = cljs_draw$core$color_item_$_state_machine__8498__auto__);

(statearr_171210[(1)] = (1));

return statearr_171210;
});
var cljs_draw$core$color_item_$_state_machine__8498__auto____1 = (function (state_171193){
while(true){
var ret_value__8499__auto__ = (function (){try{while(true){
var result__8500__auto__ = switch__8497__auto__.call(null,state_171193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8500__auto__;
}
break;
}
}catch (e171211){if((e171211 instanceof Object)){
var ex__8501__auto__ = e171211;
var statearr_171212_171243 = state_171193;
(statearr_171212_171243[(5)] = ex__8501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_171193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e171211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__171244 = state_171193;
state_171193 = G__171244;
continue;
} else {
return ret_value__8499__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8498__auto__ = function(state_171193){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8498__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8498__auto____1.call(this,state_171193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8498__auto____0;
cljs_draw$core$color_item_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8498__auto____1;
return cljs_draw$core$color_item_$_state_machine__8498__auto__;
})()
;})(switch__8497__auto__,c__8518__auto___171236,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8520__auto__ = (function (){var statearr_171213 = f__8519__auto__.call(null);
(statearr_171213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8518__auto___171236);

return statearr_171213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8520__auto__);
});})(c__8518__auto___171236,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);


var c__8518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8518__auto__,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8519__auto__ = (function (){var switch__8497__auto__ = ((function (c__8518__auto__,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_171223){
var state_val_171224 = (state_171223[(1)]);
if((state_val_171224 === (1))){
var state_171223__$1 = state_171223;
var statearr_171225_171245 = state_171223__$1;
(statearr_171225_171245[(2)] = null);

(statearr_171225_171245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171224 === (2))){
var inst_171215 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_171223__$1 = state_171223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_171223__$1,(4),inst_171215);
} else {
if((state_val_171224 === (3))){
var inst_171221 = (state_171223[(2)]);
var state_171223__$1 = state_171223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_171223__$1,inst_171221);
} else {
if((state_val_171224 === (4))){
var inst_171217 = (state_171223[(2)]);
var inst_171218 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_171223__$1 = (function (){var statearr_171226 = state_171223;
(statearr_171226[(7)] = inst_171217);

(statearr_171226[(8)] = inst_171218);

return statearr_171226;
})();
var statearr_171227_171246 = state_171223__$1;
(statearr_171227_171246[(2)] = null);

(statearr_171227_171246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8518__auto__,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8497__auto__,c__8518__auto__,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8498__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8498__auto____0 = (function (){
var statearr_171231 = [null,null,null,null,null,null,null,null,null];
(statearr_171231[(0)] = cljs_draw$core$color_item_$_state_machine__8498__auto__);

(statearr_171231[(1)] = (1));

return statearr_171231;
});
var cljs_draw$core$color_item_$_state_machine__8498__auto____1 = (function (state_171223){
while(true){
var ret_value__8499__auto__ = (function (){try{while(true){
var result__8500__auto__ = switch__8497__auto__.call(null,state_171223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8500__auto__;
}
break;
}
}catch (e171232){if((e171232 instanceof Object)){
var ex__8501__auto__ = e171232;
var statearr_171233_171247 = state_171223;
(statearr_171233_171247[(5)] = ex__8501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_171223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e171232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__171248 = state_171223;
state_171223 = G__171248;
continue;
} else {
return ret_value__8499__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8498__auto__ = function(state_171223){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8498__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8498__auto____1.call(this,state_171223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8498__auto____0;
cljs_draw$core$color_item_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8498__auto____1;
return cljs_draw$core$color_item_$_state_machine__8498__auto__;
})()
;})(switch__8497__auto__,c__8518__auto__,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8520__auto__ = (function (){var statearr_171234 = f__8519__auto__.call(null);
(statearr_171234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8518__auto__);

return statearr_171234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8520__auto__);
});})(c__8518__auto__,map__171161,map__171161__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);

return c__8518__auto__;
});

cljs_draw.core.t171158.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t171158.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t171158.prototype.om$core$IRender$ = true;

cljs_draw.core.t171158.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__171235 = om.core.get_state.call(null,self__.owner);
var map__171235__$1 = ((cljs.core.seq_QMARK_.call(null,map__171235))?cljs.core.apply.call(null,cljs.core.hash_map,map__171235):map__171235);
var mouseup = cljs.core.get.call(null,map__171235__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__171235__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__171235__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
return React.DOM.div({"style": {"position": "relative", "width": (50), "height": (50)}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"href": "#", "onClick": ((function (map__171235,map__171235__$1,mouseup,mousedown,mouseout,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__171235,map__171235__$1,mouseup,mousedown,mouseout,___$1))
},"remove")),React.DOM.div({"onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "style": {"position": "absolute", "width": (50), "height": (50), "cursor": "pointer", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":"")}}));
});

cljs_draw.core.t171158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-item","color-item",934499434,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta171159","meta171159",1116684509,null)], null);
});

cljs_draw.core.t171158.cljs$lang$type = true;

cljs_draw.core.t171158.cljs$lang$ctorStr = "cljs_draw.core/t171158";

cljs_draw.core.t171158.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t171158");
});

cljs_draw.core.__GT_t171158 = (function cljs_draw$core$color_item_$___GT_t171158(color_item__$1,props__$1,owner__$1,meta171159){
return (new cljs_draw.core.t171158(color_item__$1,props__$1,owner__$1,meta171159));
});

}

return (new cljs_draw.core.t171158(cljs_draw$core$color_item,props,owner,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cljs_draw.core.t171441 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t171441 = (function (app,data,owner,meta171442){
this.app = app;
this.data = data;
this.owner = owner;
this.meta171442 = meta171442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t171441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_171443,meta171442__$1){
var self__ = this;
var _171443__$1 = this;
return (new cljs_draw.core.t171441(self__.app,self__.data,self__.owner,meta171442__$1));
});

cljs_draw.core.t171441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_171443){
var self__ = this;
var _171443__$1 = this;
return self__.meta171442;
});

cljs_draw.core.t171441.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t171441.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvas = node.querySelector("canvas");
var c__8518__auto___171633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8518__auto___171633,node,container,canvas,this$__$1){
return (function (){
var f__8519__auto__ = (function (){var switch__8497__auto__ = ((function (c__8518__auto___171633,node,container,canvas,this$__$1){
return (function (state_171452){
var state_val_171453 = (state_171452[(1)]);
if((state_val_171453 === (1))){
var inst_171444 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_171445 = new cljs.core.Keyword(null,"brushes","brushes",1893051952).cljs$core$IFn$_invoke$arity$1(inst_171444);
var inst_171446 = cljs_draw.core.init_renderer.call(null,canvas,inst_171445);
var state_171452__$1 = state_171452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_171452__$1,(2),inst_171446);
} else {
if((state_val_171453 === (2))){
var inst_171448 = (state_171452[(2)]);
var inst_171449 = cljs_draw.core.merge_in_BANG_.call(null,cljs_draw.core.app_state,new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),inst_171448);
var inst_171450 = cljs_draw.core.render_loop.call(null);
var state_171452__$1 = (function (){var statearr_171454 = state_171452;
(statearr_171454[(7)] = inst_171449);

return statearr_171454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_171452__$1,inst_171450);
} else {
return null;
}
}
});})(c__8518__auto___171633,node,container,canvas,this$__$1))
;
return ((function (switch__8497__auto__,c__8518__auto___171633,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8498__auto__ = null;
var cljs_draw$core$app_$_state_machine__8498__auto____0 = (function (){
var statearr_171458 = [null,null,null,null,null,null,null,null];
(statearr_171458[(0)] = cljs_draw$core$app_$_state_machine__8498__auto__);

(statearr_171458[(1)] = (1));

return statearr_171458;
});
var cljs_draw$core$app_$_state_machine__8498__auto____1 = (function (state_171452){
while(true){
var ret_value__8499__auto__ = (function (){try{while(true){
var result__8500__auto__ = switch__8497__auto__.call(null,state_171452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8500__auto__;
}
break;
}
}catch (e171459){if((e171459 instanceof Object)){
var ex__8501__auto__ = e171459;
var statearr_171460_171634 = state_171452;
(statearr_171460_171634[(5)] = ex__8501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_171452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e171459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__171635 = state_171452;
state_171452 = G__171635;
continue;
} else {
return ret_value__8499__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8498__auto__ = function(state_171452){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8498__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8498__auto____1.call(this,state_171452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8498__auto____0;
cljs_draw$core$app_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8498__auto____1;
return cljs_draw$core$app_$_state_machine__8498__auto__;
})()
;})(switch__8497__auto__,c__8518__auto___171633,node,container,canvas,this$__$1))
})();
var state__8520__auto__ = (function (){var statearr_171461 = f__8519__auto__.call(null);
(statearr_171461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8518__auto___171633);

return statearr_171461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8520__auto__);
});})(c__8518__auto___171633,node,container,canvas,this$__$1))
);


var moved_171636 = cljs_draw.util.listen.call(null,container,"pointermove");
var c__8518__auto___171637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8518__auto___171637,moved_171636,node,container,canvas,this$__$1){
return (function (){
var f__8519__auto__ = (function (){var switch__8497__auto__ = ((function (c__8518__auto___171637,moved_171636,node,container,canvas,this$__$1){
return (function (state_171540){
var state_val_171541 = (state_171540[(1)]);
if((state_val_171541 === (7))){
var inst_171536 = (state_171540[(2)]);
var state_171540__$1 = state_171540;
var statearr_171542_171638 = state_171540__$1;
(statearr_171542_171638[(2)] = inst_171536);

(statearr_171542_171638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (20))){
var inst_171476 = (state_171540[(7)]);
var inst_171510 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_171511 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_171510);
var inst_171512 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_171513 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_171512);
var inst_171514 = cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,inst_171513);
var inst_171515 = cljs_draw.core.start_stroke.call(null,inst_171476,inst_171511,inst_171514);
var state_171540__$1 = state_171540;
var statearr_171543_171639 = state_171540__$1;
(statearr_171543_171639[(2)] = inst_171515);

(statearr_171543_171639[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (1))){
var inst_171462 = (0);
var state_171540__$1 = (function (){var statearr_171544 = state_171540;
(statearr_171544[(8)] = inst_171462);

return statearr_171544;
})();
var statearr_171545_171640 = state_171540__$1;
(statearr_171545_171640[(2)] = null);

(statearr_171545_171640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (24))){
var state_171540__$1 = state_171540;
var statearr_171546_171641 = state_171540__$1;
(statearr_171546_171641[(2)] = null);

(statearr_171546_171641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (4))){
var inst_171465 = (state_171540[(9)]);
var inst_171465__$1 = (state_171540[(2)]);
var state_171540__$1 = (function (){var statearr_171547 = state_171540;
(statearr_171547[(9)] = inst_171465__$1);

return statearr_171547;
})();
if(cljs.core.truth_(inst_171465__$1)){
var statearr_171548_171642 = state_171540__$1;
(statearr_171548_171642[(1)] = (5));

} else {
var statearr_171549_171643 = state_171540__$1;
(statearr_171549_171643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (15))){
var state_171540__$1 = state_171540;
var statearr_171550_171644 = state_171540__$1;
(statearr_171550_171644[(2)] = null);

(statearr_171550_171644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (21))){
var state_171540__$1 = state_171540;
var statearr_171551_171645 = state_171540__$1;
(statearr_171551_171645[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (13))){
var inst_171530 = (state_171540[(2)]);
var state_171540__$1 = state_171540;
var statearr_171553_171646 = state_171540__$1;
(statearr_171553_171646[(2)] = inst_171530);

(statearr_171553_171646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (22))){
var inst_171528 = (state_171540[(2)]);
var state_171540__$1 = state_171540;
var statearr_171554_171647 = state_171540__$1;
(statearr_171554_171647[(2)] = inst_171528);

(statearr_171554_171647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (6))){
var state_171540__$1 = state_171540;
var statearr_171555_171648 = state_171540__$1;
(statearr_171555_171648[(2)] = null);

(statearr_171555_171648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (25))){
var inst_171526 = (state_171540[(2)]);
var state_171540__$1 = state_171540;
var statearr_171556_171649 = state_171540__$1;
(statearr_171556_171649[(2)] = inst_171526);

(statearr_171556_171649[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (17))){
var inst_171500 = cljs_draw.core.finalize_stroke.call(null);
var state_171540__$1 = state_171540;
var statearr_171557_171650 = state_171540__$1;
(statearr_171557_171650[(2)] = inst_171500);

(statearr_171557_171650[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (3))){
var inst_171538 = (state_171540[(2)]);
var state_171540__$1 = state_171540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_171540__$1,inst_171538);
} else {
if((state_val_171541 === (12))){
var inst_171462 = (state_171540[(8)]);
var inst_171508 = cljs.core._EQ_.call(null,inst_171462,(0));
var state_171540__$1 = state_171540;
if(inst_171508){
var statearr_171558_171651 = state_171540__$1;
(statearr_171558_171651[(1)] = (20));

} else {
var statearr_171559_171652 = state_171540__$1;
(statearr_171559_171652[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (2))){
var state_171540__$1 = state_171540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_171540__$1,(4),moved_171636);
} else {
if((state_val_171541 === (23))){
var inst_171477 = (state_171540[(10)]);
var inst_171476 = (state_171540[(7)]);
var inst_171518 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_171519 = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(inst_171518);
var inst_171520 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_171521 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_171520);
var inst_171522 = cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,inst_171521);
var inst_171523 = cljs_draw.core.add_to_stroke.call(null,inst_171476,inst_171477,inst_171519,inst_171522);
var state_171540__$1 = state_171540;
var statearr_171560_171653 = state_171540__$1;
(statearr_171560_171653[(2)] = inst_171523);

(statearr_171560_171653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (19))){
var inst_171503 = (state_171540[(2)]);
var state_171540__$1 = state_171540;
var statearr_171561_171654 = state_171540__$1;
(statearr_171561_171654[(2)] = inst_171503);

(statearr_171561_171654[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (11))){
var inst_171486 = (state_171540[(11)]);
var inst_171485 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_171486__$1 = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(inst_171485);
var state_171540__$1 = (function (){var statearr_171562 = state_171540;
(statearr_171562[(11)] = inst_171486__$1);

return statearr_171562;
})();
if(cljs.core.truth_(inst_171486__$1)){
var statearr_171563_171655 = state_171540__$1;
(statearr_171563_171655[(1)] = (14));

} else {
var statearr_171564_171656 = state_171540__$1;
(statearr_171564_171656[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (9))){
var inst_171477 = (state_171540[(10)]);
var inst_171483 = cljs.core._EQ_.call(null,inst_171477,(0));
var state_171540__$1 = state_171540;
if(inst_171483){
var statearr_171565_171657 = state_171540__$1;
(statearr_171565_171657[(1)] = (11));

} else {
var statearr_171566_171658 = state_171540__$1;
(statearr_171566_171658[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (5))){
var inst_171465 = (state_171540[(9)]);
var inst_171467 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_171468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_171469 = [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)];
var inst_171470 = (new cljs.core.PersistentVector(null,2,(5),inst_171468,inst_171469,null));
var inst_171471 = cljs.core.get_in.call(null,inst_171467,inst_171470);
var inst_171472 = inst_171465.layerX;
var inst_171473 = (inst_171472 - inst_171471);
var inst_171474 = inst_171465.layerY;
var inst_171475 = (inst_171474 - inst_171471);
var inst_171476 = thi.ng.geom.core.vector.vec2.call(null,inst_171473,inst_171475);
var inst_171477 = inst_171465.mozPressure;
var inst_171478 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_171479 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_171478);
var inst_171480 = cljs.core.not.call(null,inst_171479);
var state_171540__$1 = (function (){var statearr_171567 = state_171540;
(statearr_171567[(10)] = inst_171477);

(statearr_171567[(7)] = inst_171476);

return statearr_171567;
})();
if(inst_171480){
var statearr_171568_171659 = state_171540__$1;
(statearr_171568_171659[(1)] = (8));

} else {
var statearr_171569_171660 = state_171540__$1;
(statearr_171569_171660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (14))){
var inst_171486 = (state_171540[(11)]);
var inst_171488 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_171489 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_171488);
var inst_171490 = inst_171486.isColor(inst_171489);
var inst_171491 = cljs.core.not.call(null,inst_171490);
var inst_171492 = inst_171486.getBrush();
var inst_171493 = cljs.core.keyword.call(null,inst_171492);
var inst_171494 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_171495 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_171494);
var inst_171496 = cljs.core._EQ_.call(null,inst_171493,inst_171495);
var inst_171497 = !(inst_171496);
var inst_171498 = (inst_171491) || (inst_171497);
var state_171540__$1 = state_171540;
if(cljs.core.truth_(inst_171498)){
var statearr_171570_171661 = state_171540__$1;
(statearr_171570_171661[(1)] = (17));

} else {
var statearr_171571_171662 = state_171540__$1;
(statearr_171571_171662[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (16))){
var inst_171506 = (state_171540[(2)]);
var state_171540__$1 = state_171540;
var statearr_171572_171663 = state_171540__$1;
(statearr_171572_171663[(2)] = inst_171506);

(statearr_171572_171663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (10))){
var inst_171477 = (state_171540[(10)]);
var inst_171532 = (state_171540[(2)]);
var inst_171462 = inst_171477;
var state_171540__$1 = (function (){var statearr_171573 = state_171540;
(statearr_171573[(8)] = inst_171462);

(statearr_171573[(12)] = inst_171532);

return statearr_171573;
})();
var statearr_171574_171664 = state_171540__$1;
(statearr_171574_171664[(2)] = null);

(statearr_171574_171664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (18))){
var state_171540__$1 = state_171540;
var statearr_171575_171665 = state_171540__$1;
(statearr_171575_171665[(2)] = null);

(statearr_171575_171665[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171541 === (8))){
var state_171540__$1 = state_171540;
var statearr_171576_171666 = state_171540__$1;
(statearr_171576_171666[(2)] = null);

(statearr_171576_171666[(1)] = (10));


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
});})(c__8518__auto___171637,moved_171636,node,container,canvas,this$__$1))
;
return ((function (switch__8497__auto__,c__8518__auto___171637,moved_171636,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8498__auto__ = null;
var cljs_draw$core$app_$_state_machine__8498__auto____0 = (function (){
var statearr_171580 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_171580[(0)] = cljs_draw$core$app_$_state_machine__8498__auto__);

(statearr_171580[(1)] = (1));

return statearr_171580;
});
var cljs_draw$core$app_$_state_machine__8498__auto____1 = (function (state_171540){
while(true){
var ret_value__8499__auto__ = (function (){try{while(true){
var result__8500__auto__ = switch__8497__auto__.call(null,state_171540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8500__auto__;
}
break;
}
}catch (e171581){if((e171581 instanceof Object)){
var ex__8501__auto__ = e171581;
var statearr_171582_171667 = state_171540;
(statearr_171582_171667[(5)] = ex__8501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_171540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e171581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__171668 = state_171540;
state_171540 = G__171668;
continue;
} else {
return ret_value__8499__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8498__auto__ = function(state_171540){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8498__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8498__auto____1.call(this,state_171540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8498__auto____0;
cljs_draw$core$app_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8498__auto____1;
return cljs_draw$core$app_$_state_machine__8498__auto__;
})()
;})(switch__8497__auto__,c__8518__auto___171637,moved_171636,node,container,canvas,this$__$1))
})();
var state__8520__auto__ = (function (){var statearr_171583 = f__8519__auto__.call(null);
(statearr_171583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8518__auto___171637);

return statearr_171583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8520__auto__);
});})(c__8518__auto___171637,moved_171636,node,container,canvas,this$__$1))
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
var c__8518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8518__auto__,keydown,node,container,canvas,this$__$1){
return (function (){
var f__8519__auto__ = (function (){var switch__8497__auto__ = ((function (c__8518__auto__,keydown,node,container,canvas,this$__$1){
return (function (state_171606){
var state_val_171607 = (state_171606[(1)]);
if((state_val_171607 === (7))){
var inst_171601 = (state_171606[(2)]);
var state_171606__$1 = (function (){var statearr_171608 = state_171606;
(statearr_171608[(7)] = inst_171601);

return statearr_171608;
})();
var statearr_171609_171669 = state_171606__$1;
(statearr_171609_171669[(2)] = null);

(statearr_171609_171669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171607 === (1))){
var state_171606__$1 = state_171606;
var statearr_171610_171670 = state_171606__$1;
(statearr_171610_171670[(2)] = null);

(statearr_171610_171670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171607 === (4))){
var inst_171586 = (state_171606[(8)]);
var inst_171586__$1 = (state_171606[(2)]);
var inst_171587 = inst_171586__$1.metaKey;
var state_171606__$1 = (function (){var statearr_171611 = state_171606;
(statearr_171611[(8)] = inst_171586__$1);

return statearr_171611;
})();
if(cljs.core.truth_(inst_171587)){
var statearr_171612_171671 = state_171606__$1;
(statearr_171612_171671[(1)] = (5));

} else {
var statearr_171613_171672 = state_171606__$1;
(statearr_171613_171672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171607 === (6))){
var state_171606__$1 = state_171606;
var statearr_171614_171673 = state_171606__$1;
(statearr_171614_171673[(2)] = null);

(statearr_171614_171673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171607 === (3))){
var inst_171604 = (state_171606[(2)]);
var state_171606__$1 = state_171606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_171606__$1,inst_171604);
} else {
if((state_val_171607 === (12))){
var state_171606__$1 = state_171606;
var statearr_171615_171674 = state_171606__$1;
(statearr_171615_171674[(2)] = new cljs.core.Keyword(null,"else","else",-1508377146));

(statearr_171615_171674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171607 === (2))){
var state_171606__$1 = state_171606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_171606__$1,(4),keydown);
} else {
if((state_val_171607 === (11))){
var inst_171593 = cljs_draw.core.clear_canvas.call(null);
var state_171606__$1 = state_171606;
var statearr_171616_171675 = state_171606__$1;
(statearr_171616_171675[(2)] = inst_171593);

(statearr_171616_171675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171607 === (9))){
var inst_171589 = cljs_draw.core.save_state.call(null);
var state_171606__$1 = state_171606;
var statearr_171617_171676 = state_171606__$1;
(statearr_171617_171676[(2)] = inst_171589);

(statearr_171617_171676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171607 === (5))){
var inst_171586 = (state_171606[(8)]);
var inst_171596 = inst_171586.keyCode;
var state_171606__$1 = state_171606;
var G__171618_171677 = inst_171596;
switch (G__171618_171677) {
case (83):
var statearr_171619_171679 = state_171606__$1;
(statearr_171619_171679[(1)] = (9));


break;
case (90):
var statearr_171620_171680 = state_171606__$1;
(statearr_171620_171680[(1)] = (10));


break;
case (67):
var statearr_171621_171681 = state_171606__$1;
(statearr_171621_171681[(1)] = (11));


break;
default:
var statearr_171622_171682 = state_171606__$1;
(statearr_171622_171682[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171607 === (10))){
var inst_171591 = cljs_draw.core.undo.call(null);
var state_171606__$1 = state_171606;
var statearr_171623_171683 = state_171606__$1;
(statearr_171623_171683[(2)] = inst_171591);

(statearr_171623_171683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_171607 === (8))){
var inst_171598 = (state_171606[(2)]);
var state_171606__$1 = state_171606;
var statearr_171624_171684 = state_171606__$1;
(statearr_171624_171684[(2)] = inst_171598);

(statearr_171624_171684[(1)] = (7));


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
});})(c__8518__auto__,keydown,node,container,canvas,this$__$1))
;
return ((function (switch__8497__auto__,c__8518__auto__,keydown,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8498__auto__ = null;
var cljs_draw$core$app_$_state_machine__8498__auto____0 = (function (){
var statearr_171628 = [null,null,null,null,null,null,null,null,null];
(statearr_171628[(0)] = cljs_draw$core$app_$_state_machine__8498__auto__);

(statearr_171628[(1)] = (1));

return statearr_171628;
});
var cljs_draw$core$app_$_state_machine__8498__auto____1 = (function (state_171606){
while(true){
var ret_value__8499__auto__ = (function (){try{while(true){
var result__8500__auto__ = switch__8497__auto__.call(null,state_171606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8500__auto__;
}
break;
}
}catch (e171629){if((e171629 instanceof Object)){
var ex__8501__auto__ = e171629;
var statearr_171630_171685 = state_171606;
(statearr_171630_171685[(5)] = ex__8501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_171606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e171629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__171686 = state_171606;
state_171606 = G__171686;
continue;
} else {
return ret_value__8499__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8498__auto__ = function(state_171606){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8498__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8498__auto____1.call(this,state_171606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8498__auto____0;
cljs_draw$core$app_$_state_machine__8498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8498__auto____1;
return cljs_draw$core$app_$_state_machine__8498__auto__;
})()
;})(switch__8497__auto__,c__8518__auto__,keydown,node,container,canvas,this$__$1))
})();
var state__8520__auto__ = (function (){var statearr_171631 = f__8519__auto__.call(null);
(statearr_171631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8518__auto__);

return statearr_171631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8520__auto__);
});})(c__8518__auto__,keydown,node,container,canvas,this$__$1))
);

return c__8518__auto__;
});

cljs_draw.core.t171441.prototype.om$core$IRender$ = true;

cljs_draw.core.t171441.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__171632 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"dimen","dimen",-234621985)], null));
var width = cljs.core.nth.call(null,vec__171632,(0),null);
var height = cljs.core.nth.call(null,vec__171632,(1),null);
var boundary = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)], null));
return React.DOM.div({"id": "app", "style": {"height": "100%", "backgroundColor": "#222222"}},React.DOM.div({"className": "canvas-container", "style": {"bottom": (0), "top": (0), "overflow": "hidden", "width": ((width / (2)) + (boundary * (2))), "cursor": "crosshair", "padding": (50), "right": (0), "position": "absolute", "border": "1px solid #2f2f2f", "height": ((height / (2)) + (boundary * (2))), "left": (0), "margin": "auto"}},React.DOM.canvas({"width": width, "height": height, "style": {"width": (width / (2)), "height": (height / (2))}})),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t171441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta171442","meta171442",-285526937,null)], null);
});

cljs_draw.core.t171441.cljs$lang$type = true;

cljs_draw.core.t171441.cljs$lang$ctorStr = "cljs_draw.core/t171441";

cljs_draw.core.t171441.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t171441");
});

cljs_draw.core.__GT_t171441 = (function cljs_draw$core$app_$___GT_t171441(app__$1,data__$1,owner__$1,meta171442){
return (new cljs_draw.core.t171441(app__$1,data__$1,owner__$1,meta171442));
});

}

return (new cljs_draw.core.t171441(cljs_draw$core$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map