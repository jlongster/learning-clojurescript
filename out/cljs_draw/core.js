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
cljs_draw.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-history","stroke-history",-272903291),new cljs.core.Keyword(null,"listening-for-color","listening-for-color",-341629494),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"current-brush","current-brush",935402),new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"brushes","brushes",1893051952),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685),new cljs.core.Keyword(null,"current-color","current-color",1731984119),new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847)],[cljs.core.PersistentVector.EMPTY,false,"#1b1b1b",new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimen","dimen",-234621985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1200),(1200)], null),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),(50)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#cccccc"], null),cljs.core.PersistentArrayMap.EMPTY,null,"#000000",cljs.core.PersistentVector.EMPTY]));
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
return (function (state_20759){
var state_val_20760 = (state_20759[(1)]);
if((state_val_20760 === (1))){
var inst_20742 = coll;
var inst_20743 = chans;
var state_20759__$1 = (function (){var statearr_20761 = state_20759;
(statearr_20761[(7)] = inst_20742);

(statearr_20761[(8)] = inst_20743);

return statearr_20761;
})();
var statearr_20762_20776 = state_20759__$1;
(statearr_20762_20776[(2)] = null);

(statearr_20762_20776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20760 === (2))){
var inst_20743 = (state_20759[(8)]);
var inst_20745 = cljs.core.empty_QMARK_.call(null,inst_20743);
var state_20759__$1 = state_20759;
if(inst_20745){
var statearr_20763_20777 = state_20759__$1;
(statearr_20763_20777[(1)] = (4));

} else {
var statearr_20764_20778 = state_20759__$1;
(statearr_20764_20778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20760 === (3))){
var inst_20757 = (state_20759[(2)]);
var state_20759__$1 = state_20759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20759__$1,inst_20757);
} else {
if((state_val_20760 === (4))){
var inst_20742 = (state_20759[(7)]);
var state_20759__$1 = state_20759;
var statearr_20765_20779 = state_20759__$1;
(statearr_20765_20779[(2)] = inst_20742);

(statearr_20765_20779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20760 === (5))){
var inst_20743 = (state_20759[(8)]);
var inst_20748 = cljs.core.first.call(null,inst_20743);
var state_20759__$1 = state_20759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20759__$1,(7),inst_20748);
} else {
if((state_val_20760 === (6))){
var inst_20755 = (state_20759[(2)]);
var state_20759__$1 = state_20759;
var statearr_20766_20780 = state_20759__$1;
(statearr_20766_20780[(2)] = inst_20755);

(statearr_20766_20780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20760 === (7))){
var inst_20742 = (state_20759[(7)]);
var inst_20743 = (state_20759[(8)]);
var inst_20750 = (state_20759[(2)]);
var inst_20751 = cljs.core.conj.call(null,inst_20742,inst_20750);
var inst_20752 = cljs.core.rest.call(null,inst_20743);
var inst_20742__$1 = inst_20751;
var inst_20743__$1 = inst_20752;
var state_20759__$1 = (function (){var statearr_20767 = state_20759;
(statearr_20767[(7)] = inst_20742__$1);

(statearr_20767[(8)] = inst_20743__$1);

return statearr_20767;
})();
var statearr_20768_20781 = state_20759__$1;
(statearr_20768_20781[(2)] = null);

(statearr_20768_20781[(1)] = (2));


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
var statearr_20772 = [null,null,null,null,null,null,null,null,null];
(statearr_20772[(0)] = cljs_draw$core$take_into_$_state_machine__8596__auto__);

(statearr_20772[(1)] = (1));

return statearr_20772;
});
var cljs_draw$core$take_into_$_state_machine__8596__auto____1 = (function (state_20759){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_20759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e20773){if((e20773 instanceof Object)){
var ex__8599__auto__ = e20773;
var statearr_20774_20782 = state_20759;
(statearr_20774_20782[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20783 = state_20759;
state_20759 = G__20783;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$take_into_$_state_machine__8596__auto__ = function(state_20759){
switch(arguments.length){
case 0:
return cljs_draw$core$take_into_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$take_into_$_state_machine__8596__auto____1.call(this,state_20759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$take_into_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$take_into_$_state_machine__8596__auto____0;
cljs_draw$core$take_into_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$take_into_$_state_machine__8596__auto____1;
return cljs_draw$core$take_into_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__))
})();
var state__8618__auto__ = (function (){var statearr_20775 = f__8617__auto__.call(null);
(statearr_20775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_20775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__))
);

return c__8616__auto__;
});
cljs_draw.core.merge_in_BANG_ = (function cljs_draw$core$merge_in_BANG_(data,key,m){
return cljs.core.swap_BANG_.call(null,data,(function (p1__20784_SHARP_){
return cljs.core.assoc.call(null,p1__20784_SHARP_,key,cljs.core.merge.call(null,m,(function (){var or__4953__auto__ = cljs.core.get.call(null,p1__20784_SHARP_,key);
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
var c__8616__auto___20879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___20879,in$,out){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___20879,in$,out){
return (function (state_20859){
var state_val_20860 = (state_20859[(1)]);
if((state_val_20860 === (7))){
var inst_20842 = (state_20859[(2)]);
var inst_20843 = cljs.core.nth.call(null,inst_20842,(0),null);
var inst_20844 = cljs.core.nth.call(null,inst_20842,(1),null);
var inst_20845 = cljs.core._EQ_.call(null,inst_20844,in$);
var state_20859__$1 = (function (){var statearr_20861 = state_20859;
(statearr_20861[(7)] = inst_20843);

return statearr_20861;
})();
if(inst_20845){
var statearr_20862_20880 = state_20859__$1;
(statearr_20862_20880[(1)] = (8));

} else {
var statearr_20863_20881 = state_20859__$1;
(statearr_20863_20881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20860 === (1))){
var state_20859__$1 = state_20859;
var statearr_20864_20882 = state_20859__$1;
(statearr_20864_20882[(2)] = null);

(statearr_20864_20882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20860 === (4))){
var inst_20834 = (state_20859[(2)]);
var state_20859__$1 = (function (){var statearr_20865 = state_20859;
(statearr_20865[(8)] = inst_20834);

return statearr_20865;
})();
var statearr_20866_20883 = state_20859__$1;
(statearr_20866_20883[(2)] = null);

(statearr_20866_20883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20860 === (6))){
var inst_20854 = (state_20859[(2)]);
var state_20859__$1 = (function (){var statearr_20867 = state_20859;
(statearr_20867[(9)] = inst_20854);

return statearr_20867;
})();
var statearr_20868_20884 = state_20859__$1;
(statearr_20868_20884[(2)] = null);

(statearr_20868_20884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20860 === (3))){
var inst_20857 = (state_20859[(2)]);
var state_20859__$1 = state_20859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20859__$1,inst_20857);
} else {
if((state_val_20860 === (2))){
var state_20859__$1 = state_20859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20859__$1,(4),in$);
} else {
if((state_val_20860 === (11))){
var inst_20850 = (state_20859[(2)]);
var state_20859__$1 = state_20859;
var statearr_20869_20885 = state_20859__$1;
(statearr_20869_20885[(2)] = inst_20850);

(statearr_20869_20885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20860 === (9))){
var state_20859__$1 = state_20859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20859__$1,(11),out,true);
} else {
if((state_val_20860 === (5))){
var inst_20837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20838 = cljs.core.async.timeout.call(null,ms);
var inst_20839 = [in$,inst_20838];
var inst_20840 = (new cljs.core.PersistentVector(null,2,(5),inst_20837,inst_20839,null));
var state_20859__$1 = state_20859;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20859__$1,(7),inst_20840);
} else {
if((state_val_20860 === (10))){
var inst_20852 = (state_20859[(2)]);
var state_20859__$1 = state_20859;
var statearr_20870_20886 = state_20859__$1;
(statearr_20870_20886[(2)] = inst_20852);

(statearr_20870_20886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20860 === (8))){
var state_20859__$1 = state_20859;
var statearr_20871_20887 = state_20859__$1;
(statearr_20871_20887[(2)] = null);

(statearr_20871_20887[(1)] = (5));


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
});})(c__8616__auto___20879,in$,out))
;
return ((function (switch__8595__auto__,c__8616__auto___20879,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____0 = (function (){
var statearr_20875 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20875[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__);

(statearr_20875[(1)] = (1));

return statearr_20875;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____1 = (function (state_20859){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_20859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e20876){if((e20876 instanceof Object)){
var ex__8599__auto__ = e20876;
var statearr_20877_20888 = state_20859;
(statearr_20877_20888[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20889 = state_20859;
state_20859 = G__20889;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__ = function(state_20859){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____1.call(this,state_20859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___20879,in$,out))
})();
var state__8618__auto__ = (function (){var statearr_20878 = f__8617__auto__.call(null);
(statearr_20878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___20879);

return statearr_20878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___20879,in$,out))
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
var brush_20890__$1 = cljs.core.assoc.call(null,brush,new cljs.core.Keyword(null,"brush-type","brush-type",1288263035),type,new cljs.core.Keyword(null,"name","name",1843675177),name);
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brushes","brushes",1893051952)], null),cljs.core.assoc,name,brush_20890__$1);

var temp__4421__auto___20891 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"driver","driver",1515263546)], null));
if(cljs.core.truth_(temp__4421__auto___20891)){
var driver_20892 = temp__4421__auto___20891;
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,((function (driver_20892,temp__4421__auto___20891){
return (function (data){
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724),name], null),cljs_draw.core.compile_brush.call(null,driver_20892,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447).cljs$core$IFn$_invoke$arity$1(brush),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701).cljs$core$IFn$_invoke$arity$1(brush)], null)));
});})(driver_20892,temp__4421__auto___20891))
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
return (function (state_20947){
var state_val_20948 = (state_20947[(1)]);
if((state_val_20948 === (1))){
var inst_20926 = (function (){return ((function (state_val_20948,c__8616__auto__){
return (function (data){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,data),"linear")){
return LinearStroke;
} else {
return RadialStroke;
}
});
;})(state_val_20948,c__8616__auto__))
})();
var inst_20927 = cljs_draw.util.get_from_storage.call(null,"current-mesh");
var state_20947__$1 = (function (){var statearr_20949 = state_20947;
(statearr_20949[(7)] = inst_20926);

return statearr_20949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20947__$1,(2),inst_20927);
} else {
if((state_val_20948 === (2))){
var inst_20929 = (state_20947[(8)]);
var inst_20926 = (state_20947[(7)]);
var inst_20929__$1 = (state_20947[(2)]);
var inst_20930 = [new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685)];
var inst_20931 = (function (){var get_class = inst_20926;
var current = inst_20929__$1;
return ((function (get_class,current,inst_20929,inst_20926,inst_20929__$1,inst_20930,state_val_20948,c__8616__auto__){
return (function (data){
return get_class.call(null,data).unserialize(data);
});
;})(get_class,current,inst_20929,inst_20926,inst_20929__$1,inst_20930,state_val_20948,c__8616__auto__))
})();
var inst_20932 = cljs_draw.util.get_from_storage.call(null,"meshes");
var state_20947__$1 = (function (){var statearr_20950 = state_20947;
(statearr_20950[(9)] = inst_20930);

(statearr_20950[(8)] = inst_20929__$1);

(statearr_20950[(10)] = inst_20931);

return statearr_20950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20947__$1,(3),inst_20932);
} else {
if((state_val_20948 === (3))){
var inst_20930 = (state_20947[(9)]);
var inst_20929 = (state_20947[(8)]);
var inst_20926 = (state_20947[(7)]);
var inst_20931 = (state_20947[(10)]);
var inst_20934 = (state_20947[(2)]);
var inst_20935 = cljs.core.mapv.call(null,inst_20931,inst_20934);
var inst_20936 = inst_20926.call(null,inst_20929);
var inst_20937 = inst_20936.unserialize(inst_20929);
var inst_20938 = [inst_20935,inst_20937];
var inst_20939 = cljs.core.PersistentHashMap.fromArrays(inst_20930,inst_20938);
var inst_20940 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.merge,inst_20939);
var inst_20941 = cljs_draw.util.get_from_storage.call(null,"app-state");
var state_20947__$1 = (function (){var statearr_20951 = state_20947;
(statearr_20951[(11)] = inst_20940);

return statearr_20951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20947__$1,(4),inst_20941);
} else {
if((state_val_20948 === (4))){
var inst_20943 = (state_20947[(2)]);
var inst_20944 = (function (){var state = inst_20943;
return ((function (state,inst_20943,state_val_20948,c__8616__auto__){
return (function (data){
return cljs.core.merge.call(null,data,cljs.core.js__GT_clj.call(null,state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
;})(state,inst_20943,state_val_20948,c__8616__auto__))
})();
var inst_20945 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,inst_20944);
var state_20947__$1 = state_20947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20947__$1,inst_20945);
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
var statearr_20955 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20955[(0)] = cljs_draw$core$load_state_$_state_machine__8596__auto__);

(statearr_20955[(1)] = (1));

return statearr_20955;
});
var cljs_draw$core$load_state_$_state_machine__8596__auto____1 = (function (state_20947){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_20947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e20956){if((e20956 instanceof Object)){
var ex__8599__auto__ = e20956;
var statearr_20957_20959 = state_20947;
(statearr_20957_20959[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20960 = state_20947;
state_20947 = G__20960;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$load_state_$_state_machine__8596__auto__ = function(state_20947){
switch(arguments.length){
case 0:
return cljs_draw$core$load_state_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$load_state_$_state_machine__8596__auto____1.call(this,state_20947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$load_state_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$load_state_$_state_machine__8596__auto____0;
cljs_draw$core$load_state_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$load_state_$_state_machine__8596__auto____1;
return cljs_draw$core$load_state_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__))
})();
var state__8618__auto__ = (function (){var statearr_20958 = f__8617__auto__.call(null);
(statearr_20958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_20958;
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
var class$ = (function (){var G__20962 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__20962) {
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
var vec__20965 = point;
var x = cljs.core.nth.call(null,vec__20965,(0),null);
var y = cljs.core.nth.call(null,vec__20965,(1),null);
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
var G__20967 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__20967) {
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
var G__20970 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__20970) {
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
return (function (p__21008){
var vec__21009 = p__21008;
var name = cljs.core.nth.call(null,vec__21009,(0),null);
var brush = cljs.core.nth.call(null,vec__21009,(1),null);
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
return (function (state_21033){
var state_val_21034 = (state_21033[(1)]);
if((state_val_21034 === (1))){
var inst_21016 = (state_21033[(7)]);
var inst_21011 = (function (){return ((function (inst_21016,state_val_21034,c__8616__auto__,gl,rect,w,h,driver,programs,pers){
return (function (p__21010){
var vec__21035 = p__21010;
var name = cljs.core.nth.call(null,vec__21035,(0),null);
var brush = cljs.core.nth.call(null,vec__21035,(1),null);
return new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(brush);
});
;})(inst_21016,state_val_21034,c__8616__auto__,gl,rect,w,h,driver,programs,pers))
})();
var inst_21012 = cljs.core.map.call(null,inst_21011);
var inst_21013 = cljs.core.filter.call(null,cljs.core.identity);
var inst_21014 = cljs.core.comp.call(null,inst_21012,inst_21013);
var inst_21015 = cljs.core.sequence.call(null,inst_21014,brushes);
var inst_21016__$1 = cljs.core.distinct.call(null,inst_21015);
var inst_21017 = (function (){var get_texs = inst_21014;
var urls = inst_21016__$1;
return ((function (get_texs,urls,inst_21016,inst_21011,inst_21012,inst_21013,inst_21014,inst_21015,inst_21016__$1,state_val_21034,c__8616__auto__,gl,rect,w,h,driver,programs,pers){
return (function (url){
return cljs_draw.core.load_texture.call(null,url);
});
;})(get_texs,urls,inst_21016,inst_21011,inst_21012,inst_21013,inst_21014,inst_21015,inst_21016__$1,state_val_21034,c__8616__auto__,gl,rect,w,h,driver,programs,pers))
})();
var inst_21018 = cljs.core.map.call(null,inst_21017,inst_21016__$1);
var inst_21019 = cljs.core.PersistentHashMap.EMPTY;
var inst_21020 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21021 = cljs.core.PersistentVector.EMPTY;
var inst_21022 = cljs_draw.core.take_into.call(null,inst_21021,inst_21018);
var state_21033__$1 = (function (){var statearr_21036 = state_21033;
(statearr_21036[(8)] = inst_21020);

(statearr_21036[(7)] = inst_21016__$1);

(statearr_21036[(9)] = inst_21019);

return statearr_21036;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21033__$1,(2),inst_21022);
} else {
if((state_val_21034 === (2))){
var inst_21020 = (state_21033[(8)]);
var inst_21016 = (state_21033[(7)]);
var inst_21019 = (state_21033[(9)]);
var inst_21024 = (state_21033[(2)]);
var inst_21025 = [inst_21016,inst_21024];
var inst_21026 = (new cljs.core.PersistentVector(null,2,(5),inst_21020,inst_21025,null));
var inst_21027 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,inst_21026);
var inst_21028 = cljs.core.into.call(null,inst_21019,inst_21027);
var inst_21029 = [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"driver","driver",1515263546),new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724),new cljs.core.Keyword(null,"pers","pers",-1016576635),new cljs.core.Keyword(null,"textures","textures",560681081)];
var inst_21030 = [gl,driver,programs,pers,inst_21028];
var inst_21031 = cljs.core.PersistentHashMap.fromArrays(inst_21029,inst_21030);
var state_21033__$1 = state_21033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21033__$1,inst_21031);
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
var statearr_21040 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21040[(0)] = cljs_draw$core$init_renderer_$_state_machine__8596__auto__);

(statearr_21040[(1)] = (1));

return statearr_21040;
});
var cljs_draw$core$init_renderer_$_state_machine__8596__auto____1 = (function (state_21033){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_21033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e21041){if((e21041 instanceof Object)){
var ex__8599__auto__ = e21041;
var statearr_21042_21044 = state_21033;
(statearr_21042_21044[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21045 = state_21033;
state_21033 = G__21045;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$init_renderer_$_state_machine__8596__auto__ = function(state_21033){
switch(arguments.length){
case 0:
return cljs_draw$core$init_renderer_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$init_renderer_$_state_machine__8596__auto____1.call(this,state_21033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$init_renderer_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$init_renderer_$_state_machine__8596__auto____0;
cljs_draw$core$init_renderer_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$init_renderer_$_state_machine__8596__auto____1;
return cljs_draw$core$init_renderer_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__,gl,rect,w,h,driver,programs,pers))
})();
var state__8618__auto__ = (function (){var statearr_21043 = f__8617__auto__.call(null);
(statearr_21043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_21043;
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

return gamma_driver.api.draw_arrays.call(null,driver,gamma_driver.api.bind.call(null,driver,program,(function (){var G__21047 = (((brush_type instanceof cljs.core.Keyword))?brush_type.fqn:null);
switch (G__21047) {
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
var map__21054 = ctx;
var map__21054__$1 = ((cljs.core.seq_QMARK_.call(null,map__21054))?cljs.core.apply.call(null,cljs.core.hash_map,map__21054):map__21054);
var gl = cljs.core.get.call(null,map__21054__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var driver = cljs.core.get.call(null,map__21054__$1,new cljs.core.Keyword(null,"driver","driver",1515263546));
var compiled_programs = cljs.core.get.call(null,map__21054__$1,new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724));
var pers = cljs.core.get.call(null,map__21054__$1,new cljs.core.Keyword(null,"pers","pers",-1016576635));
var textures = cljs.core.get.call(null,map__21054__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var mv = thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.matrix44.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null));
gl.clearColor((cljs.core.nth.call(null,bg_color,(0)) / (255)),(cljs.core.nth.call(null,bg_color,(1)) / (255)),(cljs.core.nth.call(null,bg_color,(2)) / (255)),(1));

gl.clear(gl.COLOR_BUFFER_BIT);

var seq__21055_21059 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state)));
var chunk__21056_21060 = null;
var count__21057_21061 = (0);
var i__21058_21062 = (0);
while(true){
if((i__21058_21062 < count__21057_21061)){
var mesh_21063 = cljs.core._nth.call(null,chunk__21056_21060,i__21058_21062);
var brush_name_21064 = cljs.core.keyword.call(null,mesh_21063.getBrush());
cljs_draw.core.render_mesh.call(null,gl,mesh_21063,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name_21064),cljs.core.get.call(null,compiled_programs,brush_name_21064),textures,pers,mv);

var G__21065 = seq__21055_21059;
var G__21066 = chunk__21056_21060;
var G__21067 = count__21057_21061;
var G__21068 = (i__21058_21062 + (1));
seq__21055_21059 = G__21065;
chunk__21056_21060 = G__21066;
count__21057_21061 = G__21067;
i__21058_21062 = G__21068;
continue;
} else {
var temp__4423__auto___21069 = cljs.core.seq.call(null,seq__21055_21059);
if(temp__4423__auto___21069){
var seq__21055_21070__$1 = temp__4423__auto___21069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21055_21070__$1)){
var c__5738__auto___21071 = cljs.core.chunk_first.call(null,seq__21055_21070__$1);
var G__21072 = cljs.core.chunk_rest.call(null,seq__21055_21070__$1);
var G__21073 = c__5738__auto___21071;
var G__21074 = cljs.core.count.call(null,c__5738__auto___21071);
var G__21075 = (0);
seq__21055_21059 = G__21072;
chunk__21056_21060 = G__21073;
count__21057_21061 = G__21074;
i__21058_21062 = G__21075;
continue;
} else {
var mesh_21076 = cljs.core.first.call(null,seq__21055_21070__$1);
var brush_name_21077 = cljs.core.keyword.call(null,mesh_21076.getBrush());
cljs_draw.core.render_mesh.call(null,gl,mesh_21076,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name_21077),cljs.core.get.call(null,compiled_programs,brush_name_21077),textures,pers,mv);

var G__21078 = cljs.core.next.call(null,seq__21055_21070__$1);
var G__21079 = null;
var G__21080 = (0);
var G__21081 = (0);
seq__21055_21059 = G__21078;
chunk__21056_21060 = G__21079;
count__21057_21061 = G__21080;
i__21058_21062 = G__21081;
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
if(typeof cljs_draw.core.t21085 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t21085 = (function (color_input,data,owner,meta21086){
this.color_input = color_input;
this.data = data;
this.owner = owner;
this.meta21086 = meta21086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t21085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21087,meta21086__$1){
var self__ = this;
var _21087__$1 = this;
return (new cljs_draw.core.t21085(self__.color_input,self__.data,self__.owner,meta21086__$1));
});

cljs_draw.core.t21085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21087){
var self__ = this;
var _21087__$1 = this;
return self__.meta21086;
});

cljs_draw.core.t21085.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t21085.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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

cljs_draw.core.t21085.prototype.om$core$IRender$ = true;

cljs_draw.core.t21085.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"type": "color", "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "style": {"width": (50), "height": (50), "border": (0)}});
});

cljs_draw.core.t21085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-input","color-input",696074651,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta21086","meta21086",360134220,null)], null);
});

cljs_draw.core.t21085.cljs$lang$type = true;

cljs_draw.core.t21085.cljs$lang$ctorStr = "cljs_draw.core/t21085";

cljs_draw.core.t21085.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t21085");
});

cljs_draw.core.__GT_t21085 = (function cljs_draw$core$color_input_$___GT_t21085(color_input__$1,data__$1,owner__$1,meta21086){
return (new cljs_draw.core.t21085(color_input__$1,data__$1,owner__$1,meta21086));
});

}

return (new cljs_draw.core.t21085(cljs_draw$core$color_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t21166 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t21166 = (function (color_item,props,owner,meta21167){
this.color_item = color_item;
this.props = props;
this.owner = owner;
this.meta21167 = meta21167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t21166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21168,meta21167__$1){
var self__ = this;
var _21168__$1 = this;
return (new cljs_draw.core.t21166(self__.color_item,self__.props,self__.owner,meta21167__$1));
});

cljs_draw.core.t21166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21168){
var self__ = this;
var _21168__$1 = this;
return self__.meta21167;
});

cljs_draw.core.t21166.prototype.om$core$IInitState$ = true;

cljs_draw.core.t21166.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t21166.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t21166.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__21169 = om.core.get_state.call(null,self__.owner);
var map__21169__$1 = ((cljs.core.seq_QMARK_.call(null,map__21169))?cljs.core.apply.call(null,cljs.core.hash_map,map__21169):map__21169);
var mouseup = cljs.core.get.call(null,map__21169__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__21169__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__21169__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var hide_controls = cljs.core.get.call(null,map__21169__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var c__8616__auto___21244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___21244,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___21244,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_21201){
var state_val_21202 = (state_21201[(1)]);
if((state_val_21202 === (7))){
var inst_21189 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_21190 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_21201__$1 = (function (){var statearr_21203 = state_21201;
(statearr_21203[(7)] = inst_21189);

return statearr_21203;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21201__$1,(9),inst_21190,true);
} else {
if((state_val_21202 === (1))){
var state_21201__$1 = state_21201;
var statearr_21204_21245 = state_21201__$1;
(statearr_21204_21245[(2)] = null);

(statearr_21204_21245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21202 === (4))){
var inst_21172 = (state_21201[(2)]);
var inst_21174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21175 = cljs.core.async.timeout.call(null,(500));
var inst_21176 = [mouseup,inst_21175];
var inst_21177 = (new cljs.core.PersistentVector(null,2,(5),inst_21174,inst_21176,null));
var state_21201__$1 = (function (){var statearr_21205 = state_21201;
(statearr_21205[(8)] = inst_21172);

return statearr_21205;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21201__$1,(5),inst_21177);
} else {
if((state_val_21202 === (6))){
var inst_21184 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_21185 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_21186 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_21187 = inst_21185.call(null,inst_21186);
var state_21201__$1 = (function (){var statearr_21206 = state_21201;
(statearr_21206[(9)] = inst_21184);

return statearr_21206;
})();
var statearr_21207_21246 = state_21201__$1;
(statearr_21207_21246[(2)] = inst_21187);

(statearr_21207_21246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21202 === (3))){
var inst_21199 = (state_21201[(2)]);
var state_21201__$1 = state_21201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21201__$1,inst_21199);
} else {
if((state_val_21202 === (2))){
var state_21201__$1 = state_21201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21201__$1,(4),mousedown);
} else {
if((state_val_21202 === (9))){
var inst_21192 = (state_21201[(2)]);
var state_21201__$1 = (function (){var statearr_21208 = state_21201;
(statearr_21208[(10)] = inst_21192);

return statearr_21208;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21201__$1,(10),mouseup);
} else {
if((state_val_21202 === (5))){
var inst_21179 = (state_21201[(2)]);
var inst_21180 = cljs.core.nth.call(null,inst_21179,(0),null);
var inst_21181 = cljs.core.nth.call(null,inst_21179,(1),null);
var inst_21182 = cljs.core._EQ_.call(null,inst_21181,mouseup);
var state_21201__$1 = (function (){var statearr_21209 = state_21201;
(statearr_21209[(11)] = inst_21180);

return statearr_21209;
})();
if(inst_21182){
var statearr_21210_21247 = state_21201__$1;
(statearr_21210_21247[(1)] = (6));

} else {
var statearr_21211_21248 = state_21201__$1;
(statearr_21211_21248[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21202 === (10))){
var inst_21194 = (state_21201[(2)]);
var state_21201__$1 = state_21201;
var statearr_21212_21249 = state_21201__$1;
(statearr_21212_21249[(2)] = inst_21194);

(statearr_21212_21249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21202 === (8))){
var inst_21196 = (state_21201[(2)]);
var state_21201__$1 = (function (){var statearr_21213 = state_21201;
(statearr_21213[(12)] = inst_21196);

return statearr_21213;
})();
var statearr_21214_21250 = state_21201__$1;
(statearr_21214_21250[(2)] = null);

(statearr_21214_21250[(1)] = (2));


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
});})(c__8616__auto___21244,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8595__auto__,c__8616__auto___21244,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8596__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8596__auto____0 = (function (){
var statearr_21218 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21218[(0)] = cljs_draw$core$color_item_$_state_machine__8596__auto__);

(statearr_21218[(1)] = (1));

return statearr_21218;
});
var cljs_draw$core$color_item_$_state_machine__8596__auto____1 = (function (state_21201){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_21201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e21219){if((e21219 instanceof Object)){
var ex__8599__auto__ = e21219;
var statearr_21220_21251 = state_21201;
(statearr_21220_21251[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21252 = state_21201;
state_21201 = G__21252;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8596__auto__ = function(state_21201){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8596__auto____1.call(this,state_21201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8596__auto____0;
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8596__auto____1;
return cljs_draw$core$color_item_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___21244,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8618__auto__ = (function (){var statearr_21221 = f__8617__auto__.call(null);
(statearr_21221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___21244);

return statearr_21221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___21244,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);


var c__8616__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto__,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto__,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_21231){
var state_val_21232 = (state_21231[(1)]);
if((state_val_21232 === (1))){
var state_21231__$1 = state_21231;
var statearr_21233_21253 = state_21231__$1;
(statearr_21233_21253[(2)] = null);

(statearr_21233_21253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (2))){
var inst_21223 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_21231__$1 = state_21231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21231__$1,(4),inst_21223);
} else {
if((state_val_21232 === (3))){
var inst_21229 = (state_21231[(2)]);
var state_21231__$1 = state_21231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21231__$1,inst_21229);
} else {
if((state_val_21232 === (4))){
var inst_21225 = (state_21231[(2)]);
var inst_21226 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_21231__$1 = (function (){var statearr_21234 = state_21231;
(statearr_21234[(7)] = inst_21225);

(statearr_21234[(8)] = inst_21226);

return statearr_21234;
})();
var statearr_21235_21254 = state_21231__$1;
(statearr_21235_21254[(2)] = null);

(statearr_21235_21254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8616__auto__,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8595__auto__,c__8616__auto__,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8596__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8596__auto____0 = (function (){
var statearr_21239 = [null,null,null,null,null,null,null,null,null];
(statearr_21239[(0)] = cljs_draw$core$color_item_$_state_machine__8596__auto__);

(statearr_21239[(1)] = (1));

return statearr_21239;
});
var cljs_draw$core$color_item_$_state_machine__8596__auto____1 = (function (state_21231){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_21231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e21240){if((e21240 instanceof Object)){
var ex__8599__auto__ = e21240;
var statearr_21241_21255 = state_21231;
(statearr_21241_21255[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21256 = state_21231;
state_21231 = G__21256;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8596__auto__ = function(state_21231){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8596__auto____1.call(this,state_21231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8596__auto____0;
cljs_draw$core$color_item_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8596__auto____1;
return cljs_draw$core$color_item_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8618__auto__ = (function (){var statearr_21242 = f__8617__auto__.call(null);
(statearr_21242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_21242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__,map__21169,map__21169__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);

return c__8616__auto__;
});

cljs_draw.core.t21166.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t21166.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t21166.prototype.om$core$IRender$ = true;

cljs_draw.core.t21166.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__21243 = om.core.get_state.call(null,self__.owner);
var map__21243__$1 = ((cljs.core.seq_QMARK_.call(null,map__21243))?cljs.core.apply.call(null,cljs.core.hash_map,map__21243):map__21243);
var mouseup = cljs.core.get.call(null,map__21243__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__21243__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__21243__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
return React.DOM.div({"style": {"position": "relative", "width": (50), "height": (50)}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"href": "#", "onClick": ((function (map__21243,map__21243__$1,mouseup,mousedown,mouseout,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__21243,map__21243__$1,mouseup,mousedown,mouseout,___$1))
},"remove")),React.DOM.div({"onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "style": {"position": "absolute", "width": (50), "height": (50), "cursor": "pointer", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":"")}}));
});

cljs_draw.core.t21166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-item","color-item",934499434,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta21167","meta21167",-1101955424,null)], null);
});

cljs_draw.core.t21166.cljs$lang$type = true;

cljs_draw.core.t21166.cljs$lang$ctorStr = "cljs_draw.core/t21166";

cljs_draw.core.t21166.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t21166");
});

cljs_draw.core.__GT_t21166 = (function cljs_draw$core$color_item_$___GT_t21166(color_item__$1,props__$1,owner__$1,meta21167){
return (new cljs_draw.core.t21166(color_item__$1,props__$1,owner__$1,meta21167));
});

}

return (new cljs_draw.core.t21166(cljs_draw$core$color_item,props,owner,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cljs_draw.core.t21450 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t21450 = (function (app,data,owner,meta21451){
this.app = app;
this.data = data;
this.owner = owner;
this.meta21451 = meta21451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t21450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21452,meta21451__$1){
var self__ = this;
var _21452__$1 = this;
return (new cljs_draw.core.t21450(self__.app,self__.data,self__.owner,meta21451__$1));
});

cljs_draw.core.t21450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21452){
var self__ = this;
var _21452__$1 = this;
return self__.meta21451;
});

cljs_draw.core.t21450.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t21450.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvas = node.querySelector("canvas");
var c__8616__auto___21643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___21643,node,container,canvas,this$__$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___21643,node,container,canvas,this$__$1){
return (function (state_21462){
var state_val_21463 = (state_21462[(1)]);
if((state_val_21463 === (1))){
var inst_21453 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_21454 = new cljs.core.Keyword(null,"brushes","brushes",1893051952).cljs$core$IFn$_invoke$arity$1(inst_21453);
var inst_21455 = cljs_draw.core.init_renderer.call(null,canvas,inst_21454);
var state_21462__$1 = state_21462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21462__$1,(2),inst_21455);
} else {
if((state_val_21463 === (2))){
var inst_21457 = (state_21462[(2)]);
var inst_21458 = cljs_draw.core.merge_in_BANG_.call(null,cljs_draw.core.app_state,new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),inst_21457);
var inst_21459 = cljs_draw.core.load_state.call(null);
var inst_21460 = cljs_draw.core.render_loop.call(null);
var state_21462__$1 = (function (){var statearr_21464 = state_21462;
(statearr_21464[(7)] = inst_21458);

(statearr_21464[(8)] = inst_21459);

return statearr_21464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21462__$1,inst_21460);
} else {
return null;
}
}
});})(c__8616__auto___21643,node,container,canvas,this$__$1))
;
return ((function (switch__8595__auto__,c__8616__auto___21643,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8596__auto__ = null;
var cljs_draw$core$app_$_state_machine__8596__auto____0 = (function (){
var statearr_21468 = [null,null,null,null,null,null,null,null,null];
(statearr_21468[(0)] = cljs_draw$core$app_$_state_machine__8596__auto__);

(statearr_21468[(1)] = (1));

return statearr_21468;
});
var cljs_draw$core$app_$_state_machine__8596__auto____1 = (function (state_21462){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_21462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e21469){if((e21469 instanceof Object)){
var ex__8599__auto__ = e21469;
var statearr_21470_21644 = state_21462;
(statearr_21470_21644[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21645 = state_21462;
state_21462 = G__21645;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8596__auto__ = function(state_21462){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8596__auto____1.call(this,state_21462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8596__auto____0;
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8596__auto____1;
return cljs_draw$core$app_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___21643,node,container,canvas,this$__$1))
})();
var state__8618__auto__ = (function (){var statearr_21471 = f__8617__auto__.call(null);
(statearr_21471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___21643);

return statearr_21471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___21643,node,container,canvas,this$__$1))
);


var moved_21646 = cljs_draw.util.listen.call(null,container,"pointermove");
var c__8616__auto___21647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8616__auto___21647,moved_21646,node,container,canvas,this$__$1){
return (function (){
var f__8617__auto__ = (function (){var switch__8595__auto__ = ((function (c__8616__auto___21647,moved_21646,node,container,canvas,this$__$1){
return (function (state_21550){
var state_val_21551 = (state_21550[(1)]);
if((state_val_21551 === (7))){
var inst_21546 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
var statearr_21552_21648 = state_21550__$1;
(statearr_21552_21648[(2)] = inst_21546);

(statearr_21552_21648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (20))){
var inst_21486 = (state_21550[(7)]);
var inst_21520 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_21521 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_21520);
var inst_21522 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_21523 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_21522);
var inst_21524 = cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,inst_21523);
var inst_21525 = cljs_draw.core.start_stroke.call(null,inst_21486,inst_21521,inst_21524);
var state_21550__$1 = state_21550;
var statearr_21553_21649 = state_21550__$1;
(statearr_21553_21649[(2)] = inst_21525);

(statearr_21553_21649[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (1))){
var inst_21472 = (0);
var state_21550__$1 = (function (){var statearr_21554 = state_21550;
(statearr_21554[(8)] = inst_21472);

return statearr_21554;
})();
var statearr_21555_21650 = state_21550__$1;
(statearr_21555_21650[(2)] = null);

(statearr_21555_21650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (24))){
var state_21550__$1 = state_21550;
var statearr_21556_21651 = state_21550__$1;
(statearr_21556_21651[(2)] = null);

(statearr_21556_21651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (4))){
var inst_21475 = (state_21550[(9)]);
var inst_21475__$1 = (state_21550[(2)]);
var state_21550__$1 = (function (){var statearr_21557 = state_21550;
(statearr_21557[(9)] = inst_21475__$1);

return statearr_21557;
})();
if(cljs.core.truth_(inst_21475__$1)){
var statearr_21558_21652 = state_21550__$1;
(statearr_21558_21652[(1)] = (5));

} else {
var statearr_21559_21653 = state_21550__$1;
(statearr_21559_21653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (15))){
var state_21550__$1 = state_21550;
var statearr_21560_21654 = state_21550__$1;
(statearr_21560_21654[(2)] = null);

(statearr_21560_21654[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (21))){
var state_21550__$1 = state_21550;
var statearr_21561_21655 = state_21550__$1;
(statearr_21561_21655[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (13))){
var inst_21540 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
var statearr_21563_21656 = state_21550__$1;
(statearr_21563_21656[(2)] = inst_21540);

(statearr_21563_21656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (22))){
var inst_21538 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
var statearr_21564_21657 = state_21550__$1;
(statearr_21564_21657[(2)] = inst_21538);

(statearr_21564_21657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (6))){
var state_21550__$1 = state_21550;
var statearr_21565_21658 = state_21550__$1;
(statearr_21565_21658[(2)] = null);

(statearr_21565_21658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (25))){
var inst_21536 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
var statearr_21566_21659 = state_21550__$1;
(statearr_21566_21659[(2)] = inst_21536);

(statearr_21566_21659[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (17))){
var inst_21510 = cljs_draw.core.finalize_stroke.call(null);
var state_21550__$1 = state_21550;
var statearr_21567_21660 = state_21550__$1;
(statearr_21567_21660[(2)] = inst_21510);

(statearr_21567_21660[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (3))){
var inst_21548 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21550__$1,inst_21548);
} else {
if((state_val_21551 === (12))){
var inst_21472 = (state_21550[(8)]);
var inst_21518 = cljs.core._EQ_.call(null,inst_21472,(0));
var state_21550__$1 = state_21550;
if(inst_21518){
var statearr_21568_21661 = state_21550__$1;
(statearr_21568_21661[(1)] = (20));

} else {
var statearr_21569_21662 = state_21550__$1;
(statearr_21569_21662[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (2))){
var state_21550__$1 = state_21550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21550__$1,(4),moved_21646);
} else {
if((state_val_21551 === (23))){
var inst_21487 = (state_21550[(10)]);
var inst_21486 = (state_21550[(7)]);
var inst_21528 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_21529 = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(inst_21528);
var inst_21530 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_21531 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_21530);
var inst_21532 = cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,inst_21531);
var inst_21533 = cljs_draw.core.add_to_stroke.call(null,inst_21486,inst_21487,inst_21529,inst_21532);
var state_21550__$1 = state_21550;
var statearr_21570_21663 = state_21550__$1;
(statearr_21570_21663[(2)] = inst_21533);

(statearr_21570_21663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (19))){
var inst_21513 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
var statearr_21571_21664 = state_21550__$1;
(statearr_21571_21664[(2)] = inst_21513);

(statearr_21571_21664[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (11))){
var inst_21496 = (state_21550[(11)]);
var inst_21495 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_21496__$1 = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(inst_21495);
var state_21550__$1 = (function (){var statearr_21572 = state_21550;
(statearr_21572[(11)] = inst_21496__$1);

return statearr_21572;
})();
if(cljs.core.truth_(inst_21496__$1)){
var statearr_21573_21665 = state_21550__$1;
(statearr_21573_21665[(1)] = (14));

} else {
var statearr_21574_21666 = state_21550__$1;
(statearr_21574_21666[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (9))){
var inst_21487 = (state_21550[(10)]);
var inst_21493 = cljs.core._EQ_.call(null,inst_21487,(0));
var state_21550__$1 = state_21550;
if(inst_21493){
var statearr_21575_21667 = state_21550__$1;
(statearr_21575_21667[(1)] = (11));

} else {
var statearr_21576_21668 = state_21550__$1;
(statearr_21576_21668[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (5))){
var inst_21475 = (state_21550[(9)]);
var inst_21477 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_21478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21479 = [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)];
var inst_21480 = (new cljs.core.PersistentVector(null,2,(5),inst_21478,inst_21479,null));
var inst_21481 = cljs.core.get_in.call(null,inst_21477,inst_21480);
var inst_21482 = inst_21475.layerX;
var inst_21483 = (inst_21482 - inst_21481);
var inst_21484 = inst_21475.layerY;
var inst_21485 = (inst_21484 - inst_21481);
var inst_21486 = thi.ng.geom.core.vector.vec2.call(null,inst_21483,inst_21485);
var inst_21487 = inst_21475.mozPressure;
var inst_21488 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_21489 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_21488);
var inst_21490 = cljs.core.not.call(null,inst_21489);
var state_21550__$1 = (function (){var statearr_21577 = state_21550;
(statearr_21577[(10)] = inst_21487);

(statearr_21577[(7)] = inst_21486);

return statearr_21577;
})();
if(inst_21490){
var statearr_21578_21669 = state_21550__$1;
(statearr_21578_21669[(1)] = (8));

} else {
var statearr_21579_21670 = state_21550__$1;
(statearr_21579_21670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (14))){
var inst_21496 = (state_21550[(11)]);
var inst_21498 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_21499 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_21498);
var inst_21500 = inst_21496.isColor(inst_21499);
var inst_21501 = cljs.core.not.call(null,inst_21500);
var inst_21502 = inst_21496.getBrush();
var inst_21503 = cljs.core.keyword.call(null,inst_21502);
var inst_21504 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_21505 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_21504);
var inst_21506 = cljs.core._EQ_.call(null,inst_21503,inst_21505);
var inst_21507 = !(inst_21506);
var inst_21508 = (inst_21501) || (inst_21507);
var state_21550__$1 = state_21550;
if(cljs.core.truth_(inst_21508)){
var statearr_21580_21671 = state_21550__$1;
(statearr_21580_21671[(1)] = (17));

} else {
var statearr_21581_21672 = state_21550__$1;
(statearr_21581_21672[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (16))){
var inst_21516 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
var statearr_21582_21673 = state_21550__$1;
(statearr_21582_21673[(2)] = inst_21516);

(statearr_21582_21673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (10))){
var inst_21487 = (state_21550[(10)]);
var inst_21542 = (state_21550[(2)]);
var inst_21472 = inst_21487;
var state_21550__$1 = (function (){var statearr_21583 = state_21550;
(statearr_21583[(12)] = inst_21542);

(statearr_21583[(8)] = inst_21472);

return statearr_21583;
})();
var statearr_21584_21674 = state_21550__$1;
(statearr_21584_21674[(2)] = null);

(statearr_21584_21674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (18))){
var state_21550__$1 = state_21550;
var statearr_21585_21675 = state_21550__$1;
(statearr_21585_21675[(2)] = null);

(statearr_21585_21675[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (8))){
var state_21550__$1 = state_21550;
var statearr_21586_21676 = state_21550__$1;
(statearr_21586_21676[(2)] = null);

(statearr_21586_21676[(1)] = (10));


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
});})(c__8616__auto___21647,moved_21646,node,container,canvas,this$__$1))
;
return ((function (switch__8595__auto__,c__8616__auto___21647,moved_21646,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8596__auto__ = null;
var cljs_draw$core$app_$_state_machine__8596__auto____0 = (function (){
var statearr_21590 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21590[(0)] = cljs_draw$core$app_$_state_machine__8596__auto__);

(statearr_21590[(1)] = (1));

return statearr_21590;
});
var cljs_draw$core$app_$_state_machine__8596__auto____1 = (function (state_21550){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_21550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e21591){if((e21591 instanceof Object)){
var ex__8599__auto__ = e21591;
var statearr_21592_21677 = state_21550;
(statearr_21592_21677[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21678 = state_21550;
state_21550 = G__21678;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8596__auto__ = function(state_21550){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8596__auto____1.call(this,state_21550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8596__auto____0;
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8596__auto____1;
return cljs_draw$core$app_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto___21647,moved_21646,node,container,canvas,this$__$1))
})();
var state__8618__auto__ = (function (){var statearr_21593 = f__8617__auto__.call(null);
(statearr_21593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto___21647);

return statearr_21593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto___21647,moved_21646,node,container,canvas,this$__$1))
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
return (function (state_21616){
var state_val_21617 = (state_21616[(1)]);
if((state_val_21617 === (7))){
var inst_21611 = (state_21616[(2)]);
var state_21616__$1 = (function (){var statearr_21618 = state_21616;
(statearr_21618[(7)] = inst_21611);

return statearr_21618;
})();
var statearr_21619_21679 = state_21616__$1;
(statearr_21619_21679[(2)] = null);

(statearr_21619_21679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (1))){
var state_21616__$1 = state_21616;
var statearr_21620_21680 = state_21616__$1;
(statearr_21620_21680[(2)] = null);

(statearr_21620_21680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (4))){
var inst_21596 = (state_21616[(8)]);
var inst_21596__$1 = (state_21616[(2)]);
var inst_21597 = inst_21596__$1.metaKey;
var state_21616__$1 = (function (){var statearr_21621 = state_21616;
(statearr_21621[(8)] = inst_21596__$1);

return statearr_21621;
})();
if(cljs.core.truth_(inst_21597)){
var statearr_21622_21681 = state_21616__$1;
(statearr_21622_21681[(1)] = (5));

} else {
var statearr_21623_21682 = state_21616__$1;
(statearr_21623_21682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (6))){
var state_21616__$1 = state_21616;
var statearr_21624_21683 = state_21616__$1;
(statearr_21624_21683[(2)] = null);

(statearr_21624_21683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (3))){
var inst_21614 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21616__$1,inst_21614);
} else {
if((state_val_21617 === (12))){
var state_21616__$1 = state_21616;
var statearr_21625_21684 = state_21616__$1;
(statearr_21625_21684[(2)] = new cljs.core.Keyword(null,"else","else",-1508377146));

(statearr_21625_21684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (2))){
var state_21616__$1 = state_21616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21616__$1,(4),keydown);
} else {
if((state_val_21617 === (11))){
var inst_21603 = cljs_draw.core.clear_canvas.call(null);
var state_21616__$1 = state_21616;
var statearr_21626_21685 = state_21616__$1;
(statearr_21626_21685[(2)] = inst_21603);

(statearr_21626_21685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (9))){
var inst_21599 = cljs_draw.core.save_state.call(null);
var state_21616__$1 = state_21616;
var statearr_21627_21686 = state_21616__$1;
(statearr_21627_21686[(2)] = inst_21599);

(statearr_21627_21686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (5))){
var inst_21596 = (state_21616[(8)]);
var inst_21606 = inst_21596.keyCode;
var state_21616__$1 = state_21616;
var G__21628_21687 = inst_21606;
switch (G__21628_21687) {
case (83):
var statearr_21629_21689 = state_21616__$1;
(statearr_21629_21689[(1)] = (9));


break;
case (90):
var statearr_21630_21690 = state_21616__$1;
(statearr_21630_21690[(1)] = (10));


break;
case (67):
var statearr_21631_21691 = state_21616__$1;
(statearr_21631_21691[(1)] = (11));


break;
default:
var statearr_21632_21692 = state_21616__$1;
(statearr_21632_21692[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (10))){
var inst_21601 = cljs_draw.core.undo.call(null);
var state_21616__$1 = state_21616;
var statearr_21633_21693 = state_21616__$1;
(statearr_21633_21693[(2)] = inst_21601);

(statearr_21633_21693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (8))){
var inst_21608 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
var statearr_21634_21694 = state_21616__$1;
(statearr_21634_21694[(2)] = inst_21608);

(statearr_21634_21694[(1)] = (7));


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
var statearr_21638 = [null,null,null,null,null,null,null,null,null];
(statearr_21638[(0)] = cljs_draw$core$app_$_state_machine__8596__auto__);

(statearr_21638[(1)] = (1));

return statearr_21638;
});
var cljs_draw$core$app_$_state_machine__8596__auto____1 = (function (state_21616){
while(true){
var ret_value__8597__auto__ = (function (){try{while(true){
var result__8598__auto__ = switch__8595__auto__.call(null,state_21616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8598__auto__;
}
break;
}
}catch (e21639){if((e21639 instanceof Object)){
var ex__8599__auto__ = e21639;
var statearr_21640_21695 = state_21616;
(statearr_21640_21695[(5)] = ex__8599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21696 = state_21616;
state_21616 = G__21696;
continue;
} else {
return ret_value__8597__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8596__auto__ = function(state_21616){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8596__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8596__auto____1.call(this,state_21616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8596__auto____0;
cljs_draw$core$app_$_state_machine__8596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8596__auto____1;
return cljs_draw$core$app_$_state_machine__8596__auto__;
})()
;})(switch__8595__auto__,c__8616__auto__,keydown,node,container,canvas,this$__$1))
})();
var state__8618__auto__ = (function (){var statearr_21641 = f__8617__auto__.call(null);
(statearr_21641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8616__auto__);

return statearr_21641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8618__auto__);
});})(c__8616__auto__,keydown,node,container,canvas,this$__$1))
);

return c__8616__auto__;
});

cljs_draw.core.t21450.prototype.om$core$IRender$ = true;

cljs_draw.core.t21450.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__21642 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"dimen","dimen",-234621985)], null));
var width = cljs.core.nth.call(null,vec__21642,(0),null);
var height = cljs.core.nth.call(null,vec__21642,(1),null);
var boundary = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)], null));
return React.DOM.div({"id": "app", "style": {"height": "100%", "backgroundColor": "#222222"}},React.DOM.div({"className": "canvas-container", "style": {"bottom": (0), "top": (0), "overflow": "hidden", "width": ((width / (2)) + (boundary * (2))), "cursor": "crosshair", "padding": (50), "right": (0), "position": "absolute", "border": "1px solid #2f2f2f", "height": ((height / (2)) + (boundary * (2))), "left": (0), "margin": "auto"}},React.DOM.canvas({"width": width, "height": height, "style": {"width": (width / (2)), "height": (height / (2))}})),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t21450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta21451","meta21451",-376021473,null)], null);
});

cljs_draw.core.t21450.cljs$lang$type = true;

cljs_draw.core.t21450.cljs$lang$ctorStr = "cljs_draw.core/t21450";

cljs_draw.core.t21450.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t21450");
});

cljs_draw.core.__GT_t21450 = (function cljs_draw$core$app_$___GT_t21450(app__$1,data__$1,owner__$1,meta21451){
return (new cljs_draw.core.t21450(app__$1,data__$1,owner__$1,meta21451));
});

}

return (new cljs_draw.core.t21450(cljs_draw$core$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));
cljs_draw.core.repl_swap_BANG_ = (function cljs_draw$core$repl_swap_BANG_(name,val){
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.assoc,name,val);

return null;
});

//# sourceMappingURL=core.js.map