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
var c__8625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8625__auto__){
return (function (){
var f__8626__auto__ = (function (){var switch__8604__auto__ = ((function (c__8625__auto__){
return (function (state_10819){
var state_val_10820 = (state_10819[(1)]);
if((state_val_10820 === (1))){
var inst_10802 = coll;
var inst_10803 = chans;
var state_10819__$1 = (function (){var statearr_10821 = state_10819;
(statearr_10821[(7)] = inst_10803);

(statearr_10821[(8)] = inst_10802);

return statearr_10821;
})();
var statearr_10822_10836 = state_10819__$1;
(statearr_10822_10836[(2)] = null);

(statearr_10822_10836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10820 === (2))){
var inst_10803 = (state_10819[(7)]);
var inst_10805 = cljs.core.empty_QMARK_.call(null,inst_10803);
var state_10819__$1 = state_10819;
if(inst_10805){
var statearr_10823_10837 = state_10819__$1;
(statearr_10823_10837[(1)] = (4));

} else {
var statearr_10824_10838 = state_10819__$1;
(statearr_10824_10838[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10820 === (3))){
var inst_10817 = (state_10819[(2)]);
var state_10819__$1 = state_10819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10819__$1,inst_10817);
} else {
if((state_val_10820 === (4))){
var inst_10802 = (state_10819[(8)]);
var state_10819__$1 = state_10819;
var statearr_10825_10839 = state_10819__$1;
(statearr_10825_10839[(2)] = inst_10802);

(statearr_10825_10839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10820 === (5))){
var inst_10803 = (state_10819[(7)]);
var inst_10808 = cljs.core.first.call(null,inst_10803);
var state_10819__$1 = state_10819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10819__$1,(7),inst_10808);
} else {
if((state_val_10820 === (6))){
var inst_10815 = (state_10819[(2)]);
var state_10819__$1 = state_10819;
var statearr_10826_10840 = state_10819__$1;
(statearr_10826_10840[(2)] = inst_10815);

(statearr_10826_10840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10820 === (7))){
var inst_10803 = (state_10819[(7)]);
var inst_10802 = (state_10819[(8)]);
var inst_10810 = (state_10819[(2)]);
var inst_10811 = cljs.core.conj.call(null,inst_10802,inst_10810);
var inst_10812 = cljs.core.rest.call(null,inst_10803);
var inst_10802__$1 = inst_10811;
var inst_10803__$1 = inst_10812;
var state_10819__$1 = (function (){var statearr_10827 = state_10819;
(statearr_10827[(7)] = inst_10803__$1);

(statearr_10827[(8)] = inst_10802__$1);

return statearr_10827;
})();
var statearr_10828_10841 = state_10819__$1;
(statearr_10828_10841[(2)] = null);

(statearr_10828_10841[(1)] = (2));


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
});})(c__8625__auto__))
;
return ((function (switch__8604__auto__,c__8625__auto__){
return (function() {
var cljs_draw$core$take_into_$_state_machine__8605__auto__ = null;
var cljs_draw$core$take_into_$_state_machine__8605__auto____0 = (function (){
var statearr_10832 = [null,null,null,null,null,null,null,null,null];
(statearr_10832[(0)] = cljs_draw$core$take_into_$_state_machine__8605__auto__);

(statearr_10832[(1)] = (1));

return statearr_10832;
});
var cljs_draw$core$take_into_$_state_machine__8605__auto____1 = (function (state_10819){
while(true){
var ret_value__8606__auto__ = (function (){try{while(true){
var result__8607__auto__ = switch__8604__auto__.call(null,state_10819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8607__auto__;
}
break;
}
}catch (e10833){if((e10833 instanceof Object)){
var ex__8608__auto__ = e10833;
var statearr_10834_10842 = state_10819;
(statearr_10834_10842[(5)] = ex__8608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10843 = state_10819;
state_10819 = G__10843;
continue;
} else {
return ret_value__8606__auto__;
}
break;
}
});
cljs_draw$core$take_into_$_state_machine__8605__auto__ = function(state_10819){
switch(arguments.length){
case 0:
return cljs_draw$core$take_into_$_state_machine__8605__auto____0.call(this);
case 1:
return cljs_draw$core$take_into_$_state_machine__8605__auto____1.call(this,state_10819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$take_into_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$take_into_$_state_machine__8605__auto____0;
cljs_draw$core$take_into_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$take_into_$_state_machine__8605__auto____1;
return cljs_draw$core$take_into_$_state_machine__8605__auto__;
})()
;})(switch__8604__auto__,c__8625__auto__))
})();
var state__8627__auto__ = (function (){var statearr_10835 = f__8626__auto__.call(null);
(statearr_10835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8625__auto__);

return statearr_10835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8627__auto__);
});})(c__8625__auto__))
);

return c__8625__auto__;
});
cljs_draw.core.merge_in_BANG_ = (function cljs_draw$core$merge_in_BANG_(data,key,m){
return cljs.core.swap_BANG_.call(null,data,(function (p1__10844_SHARP_){
return cljs.core.assoc.call(null,p1__10844_SHARP_,key,cljs.core.merge.call(null,m,(function (){var or__4953__auto__ = cljs.core.get.call(null,p1__10844_SHARP_,key);
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
var c__8625__auto___10939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8625__auto___10939,in$,out){
return (function (){
var f__8626__auto__ = (function (){var switch__8604__auto__ = ((function (c__8625__auto___10939,in$,out){
return (function (state_10919){
var state_val_10920 = (state_10919[(1)]);
if((state_val_10920 === (7))){
var inst_10902 = (state_10919[(2)]);
var inst_10903 = cljs.core.nth.call(null,inst_10902,(0),null);
var inst_10904 = cljs.core.nth.call(null,inst_10902,(1),null);
var inst_10905 = cljs.core._EQ_.call(null,inst_10904,in$);
var state_10919__$1 = (function (){var statearr_10921 = state_10919;
(statearr_10921[(7)] = inst_10903);

return statearr_10921;
})();
if(inst_10905){
var statearr_10922_10940 = state_10919__$1;
(statearr_10922_10940[(1)] = (8));

} else {
var statearr_10923_10941 = state_10919__$1;
(statearr_10923_10941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (1))){
var state_10919__$1 = state_10919;
var statearr_10924_10942 = state_10919__$1;
(statearr_10924_10942[(2)] = null);

(statearr_10924_10942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (4))){
var inst_10894 = (state_10919[(2)]);
var state_10919__$1 = (function (){var statearr_10925 = state_10919;
(statearr_10925[(8)] = inst_10894);

return statearr_10925;
})();
var statearr_10926_10943 = state_10919__$1;
(statearr_10926_10943[(2)] = null);

(statearr_10926_10943[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (6))){
var inst_10914 = (state_10919[(2)]);
var state_10919__$1 = (function (){var statearr_10927 = state_10919;
(statearr_10927[(9)] = inst_10914);

return statearr_10927;
})();
var statearr_10928_10944 = state_10919__$1;
(statearr_10928_10944[(2)] = null);

(statearr_10928_10944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (3))){
var inst_10917 = (state_10919[(2)]);
var state_10919__$1 = state_10919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10919__$1,inst_10917);
} else {
if((state_val_10920 === (2))){
var state_10919__$1 = state_10919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10919__$1,(4),in$);
} else {
if((state_val_10920 === (11))){
var inst_10910 = (state_10919[(2)]);
var state_10919__$1 = state_10919;
var statearr_10929_10945 = state_10919__$1;
(statearr_10929_10945[(2)] = inst_10910);

(statearr_10929_10945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (9))){
var state_10919__$1 = state_10919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10919__$1,(11),out,true);
} else {
if((state_val_10920 === (5))){
var inst_10897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10898 = cljs.core.async.timeout.call(null,ms);
var inst_10899 = [in$,inst_10898];
var inst_10900 = (new cljs.core.PersistentVector(null,2,(5),inst_10897,inst_10899,null));
var state_10919__$1 = state_10919;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10919__$1,(7),inst_10900);
} else {
if((state_val_10920 === (10))){
var inst_10912 = (state_10919[(2)]);
var state_10919__$1 = state_10919;
var statearr_10930_10946 = state_10919__$1;
(statearr_10930_10946[(2)] = inst_10912);

(statearr_10930_10946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (8))){
var state_10919__$1 = state_10919;
var statearr_10931_10947 = state_10919__$1;
(statearr_10931_10947[(2)] = null);

(statearr_10931_10947[(1)] = (5));


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
});})(c__8625__auto___10939,in$,out))
;
return ((function (switch__8604__auto__,c__8625__auto___10939,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto____0 = (function (){
var statearr_10935 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10935[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto__);

(statearr_10935[(1)] = (1));

return statearr_10935;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto____1 = (function (state_10919){
while(true){
var ret_value__8606__auto__ = (function (){try{while(true){
var result__8607__auto__ = switch__8604__auto__.call(null,state_10919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8607__auto__;
}
break;
}
}catch (e10936){if((e10936 instanceof Object)){
var ex__8608__auto__ = e10936;
var statearr_10937_10948 = state_10919;
(statearr_10937_10948[(5)] = ex__8608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10949 = state_10919;
state_10919 = G__10949;
continue;
} else {
return ret_value__8606__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto__ = function(state_10919){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto____1.call(this,state_10919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__8605__auto__;
})()
;})(switch__8604__auto__,c__8625__auto___10939,in$,out))
})();
var state__8627__auto__ = (function (){var statearr_10938 = f__8626__auto__.call(null);
(statearr_10938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8625__auto___10939);

return statearr_10938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8627__auto__);
});})(c__8625__auto___10939,in$,out))
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
var brush_10950__$1 = cljs.core.assoc.call(null,brush,new cljs.core.Keyword(null,"brush-type","brush-type",1288263035),type,new cljs.core.Keyword(null,"name","name",1843675177),name);
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brushes","brushes",1893051952)], null),cljs.core.assoc,name,brush_10950__$1);

var temp__4421__auto___10951 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"driver","driver",1515263546)], null));
if(cljs.core.truth_(temp__4421__auto___10951)){
var driver_10952 = temp__4421__auto___10951;
cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,((function (driver_10952,temp__4421__auto___10951){
return (function (data){
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724),name], null),cljs_draw.core.compile_brush.call(null,driver_10952,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447),new cljs.core.Keyword(null,"vertex-shader","vertex-shader",82674447).cljs$core$IFn$_invoke$arity$1(brush),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701),new cljs.core.Keyword(null,"fragment-shader","fragment-shader",-2107324701).cljs$core$IFn$_invoke$arity$1(brush)], null)));
});})(driver_10952,temp__4421__auto___10951))
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

return localforage.setItem("app-state",cljs.core.clj__GT_js.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"current-color","current-color",1731984119)], null))));
});
cljs_draw.core.load_state = (function cljs_draw$core$load_state(){
var c__8625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8625__auto__){
return (function (){
var f__8626__auto__ = (function (){var switch__8604__auto__ = ((function (c__8625__auto__){
return (function (state_11007){
var state_val_11008 = (state_11007[(1)]);
if((state_val_11008 === (1))){
var inst_10986 = (function (){return ((function (state_val_11008,c__8625__auto__){
return (function (data){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,data),"linear")){
return LinearStroke;
} else {
return RadialStroke;
}
});
;})(state_val_11008,c__8625__auto__))
})();
var inst_10987 = cljs_draw.util.get_from_storage.call(null,"current-mesh");
var state_11007__$1 = (function (){var statearr_11009 = state_11007;
(statearr_11009[(7)] = inst_10986);

return statearr_11009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11007__$1,(2),inst_10987);
} else {
if((state_val_11008 === (2))){
var inst_10986 = (state_11007[(7)]);
var inst_10989 = (state_11007[(8)]);
var inst_10989__$1 = (state_11007[(2)]);
var inst_10990 = [new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847),new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685)];
var inst_10991 = (function (){var get_class = inst_10986;
var current = inst_10989__$1;
return ((function (get_class,current,inst_10986,inst_10989,inst_10989__$1,inst_10990,state_val_11008,c__8625__auto__){
return (function (data){
return get_class.call(null,data).unserialize(data);
});
;})(get_class,current,inst_10986,inst_10989,inst_10989__$1,inst_10990,state_val_11008,c__8625__auto__))
})();
var inst_10992 = cljs_draw.util.get_from_storage.call(null,"meshes");
var state_11007__$1 = (function (){var statearr_11010 = state_11007;
(statearr_11010[(9)] = inst_10991);

(statearr_11010[(8)] = inst_10989__$1);

(statearr_11010[(10)] = inst_10990);

return statearr_11010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11007__$1,(3),inst_10992);
} else {
if((state_val_11008 === (3))){
var inst_10991 = (state_11007[(9)]);
var inst_10986 = (state_11007[(7)]);
var inst_10989 = (state_11007[(8)]);
var inst_10990 = (state_11007[(10)]);
var inst_10994 = (state_11007[(2)]);
var inst_10995 = cljs.core.mapv.call(null,inst_10991,inst_10994);
var inst_10996 = inst_10986.call(null,inst_10989);
var inst_10997 = inst_10996.unserialize(inst_10989);
var inst_10998 = [inst_10995,inst_10997];
var inst_10999 = cljs.core.PersistentHashMap.fromArrays(inst_10990,inst_10998);
var inst_11000 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,cljs.core.merge,inst_10999);
var inst_11001 = cljs_draw.util.get_from_storage.call(null,"app-state");
var state_11007__$1 = (function (){var statearr_11011 = state_11007;
(statearr_11011[(11)] = inst_11000);

return statearr_11011;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11007__$1,(4),inst_11001);
} else {
if((state_val_11008 === (4))){
var inst_11003 = (state_11007[(2)]);
var inst_11004 = (function (){var state = inst_11003;
return ((function (state,inst_11003,state_val_11008,c__8625__auto__){
return (function (data){
return cljs.core.merge.call(null,data,cljs.core.js__GT_clj.call(null,state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
;})(state,inst_11003,state_val_11008,c__8625__auto__))
})();
var inst_11005 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,inst_11004);
var state_11007__$1 = state_11007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11007__$1,inst_11005);
} else {
return null;
}
}
}
}
});})(c__8625__auto__))
;
return ((function (switch__8604__auto__,c__8625__auto__){
return (function() {
var cljs_draw$core$load_state_$_state_machine__8605__auto__ = null;
var cljs_draw$core$load_state_$_state_machine__8605__auto____0 = (function (){
var statearr_11015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11015[(0)] = cljs_draw$core$load_state_$_state_machine__8605__auto__);

(statearr_11015[(1)] = (1));

return statearr_11015;
});
var cljs_draw$core$load_state_$_state_machine__8605__auto____1 = (function (state_11007){
while(true){
var ret_value__8606__auto__ = (function (){try{while(true){
var result__8607__auto__ = switch__8604__auto__.call(null,state_11007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8607__auto__;
}
break;
}
}catch (e11016){if((e11016 instanceof Object)){
var ex__8608__auto__ = e11016;
var statearr_11017_11019 = state_11007;
(statearr_11017_11019[(5)] = ex__8608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11020 = state_11007;
state_11007 = G__11020;
continue;
} else {
return ret_value__8606__auto__;
}
break;
}
});
cljs_draw$core$load_state_$_state_machine__8605__auto__ = function(state_11007){
switch(arguments.length){
case 0:
return cljs_draw$core$load_state_$_state_machine__8605__auto____0.call(this);
case 1:
return cljs_draw$core$load_state_$_state_machine__8605__auto____1.call(this,state_11007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$load_state_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$load_state_$_state_machine__8605__auto____0;
cljs_draw$core$load_state_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$load_state_$_state_machine__8605__auto____1;
return cljs_draw$core$load_state_$_state_machine__8605__auto__;
})()
;})(switch__8604__auto__,c__8625__auto__))
})();
var state__8627__auto__ = (function (){var statearr_11018 = f__8626__auto__.call(null);
(statearr_11018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8625__auto__);

return statearr_11018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8627__auto__);
});})(c__8625__auto__))
);

return c__8625__auto__;
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
var class$ = (function (){var G__11022 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__11022) {
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
var vec__11025 = point;
var x = cljs.core.nth.call(null,vec__11025,(0),null);
var y = cljs.core.nth.call(null,vec__11025,(1),null);
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
var G__11027 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__11027) {
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
var G__11030 = (((new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"brush-type","brush-type",1288263035).cljs$core$IFn$_invoke$arity$1(brush).fqn:null);
switch (G__11030) {
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
return (function (p__11068){
var vec__11069 = p__11068;
var name = cljs.core.nth.call(null,vec__11069,(0),null);
var brush = cljs.core.nth.call(null,vec__11069,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs_draw.core.compile_brush.call(null,driver,brush)], null);
});})(gl,rect,w,h,driver))
,brushes));
var pers = cljs_draw.core.get_perspective_matrix.call(null,w,h);
gl.viewport((0),(0),(w * (2)),(h * (2)));

gl.clearColor((1),(1),(1),(1));

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.enable(gl.BLEND);

gl.disable(gl.DEPTH_TEST);

var c__8625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8625__auto__,gl,rect,w,h,driver,programs,pers){
return (function (){
var f__8626__auto__ = (function (){var switch__8604__auto__ = ((function (c__8625__auto__,gl,rect,w,h,driver,programs,pers){
return (function (state_11093){
var state_val_11094 = (state_11093[(1)]);
if((state_val_11094 === (1))){
var inst_11076 = (state_11093[(7)]);
var inst_11071 = (function (){return ((function (inst_11076,state_val_11094,c__8625__auto__,gl,rect,w,h,driver,programs,pers){
return (function (p__11070){
var vec__11095 = p__11070;
var name = cljs.core.nth.call(null,vec__11095,(0),null);
var brush = cljs.core.nth.call(null,vec__11095,(1),null);
return new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(brush);
});
;})(inst_11076,state_val_11094,c__8625__auto__,gl,rect,w,h,driver,programs,pers))
})();
var inst_11072 = cljs.core.map.call(null,inst_11071);
var inst_11073 = cljs.core.filter.call(null,cljs.core.identity);
var inst_11074 = cljs.core.comp.call(null,inst_11072,inst_11073);
var inst_11075 = cljs.core.sequence.call(null,inst_11074,brushes);
var inst_11076__$1 = cljs.core.distinct.call(null,inst_11075);
var inst_11077 = (function (){var get_texs = inst_11074;
var urls = inst_11076__$1;
return ((function (get_texs,urls,inst_11076,inst_11071,inst_11072,inst_11073,inst_11074,inst_11075,inst_11076__$1,state_val_11094,c__8625__auto__,gl,rect,w,h,driver,programs,pers){
return (function (url){
return cljs_draw.core.load_texture.call(null,url);
});
;})(get_texs,urls,inst_11076,inst_11071,inst_11072,inst_11073,inst_11074,inst_11075,inst_11076__$1,state_val_11094,c__8625__auto__,gl,rect,w,h,driver,programs,pers))
})();
var inst_11078 = cljs.core.map.call(null,inst_11077,inst_11076__$1);
var inst_11079 = cljs.core.PersistentHashMap.EMPTY;
var inst_11080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11081 = cljs.core.PersistentVector.EMPTY;
var inst_11082 = cljs_draw.core.take_into.call(null,inst_11081,inst_11078);
var state_11093__$1 = (function (){var statearr_11096 = state_11093;
(statearr_11096[(8)] = inst_11080);

(statearr_11096[(7)] = inst_11076__$1);

(statearr_11096[(9)] = inst_11079);

return statearr_11096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11093__$1,(2),inst_11082);
} else {
if((state_val_11094 === (2))){
var inst_11080 = (state_11093[(8)]);
var inst_11076 = (state_11093[(7)]);
var inst_11079 = (state_11093[(9)]);
var inst_11084 = (state_11093[(2)]);
var inst_11085 = [inst_11076,inst_11084];
var inst_11086 = (new cljs.core.PersistentVector(null,2,(5),inst_11080,inst_11085,null));
var inst_11087 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,inst_11086);
var inst_11088 = cljs.core.into.call(null,inst_11079,inst_11087);
var inst_11089 = [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"driver","driver",1515263546),new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724),new cljs.core.Keyword(null,"pers","pers",-1016576635),new cljs.core.Keyword(null,"textures","textures",560681081)];
var inst_11090 = [gl,driver,programs,pers,inst_11088];
var inst_11091 = cljs.core.PersistentHashMap.fromArrays(inst_11089,inst_11090);
var state_11093__$1 = state_11093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11093__$1,inst_11091);
} else {
return null;
}
}
});})(c__8625__auto__,gl,rect,w,h,driver,programs,pers))
;
return ((function (switch__8604__auto__,c__8625__auto__,gl,rect,w,h,driver,programs,pers){
return (function() {
var cljs_draw$core$init_renderer_$_state_machine__8605__auto__ = null;
var cljs_draw$core$init_renderer_$_state_machine__8605__auto____0 = (function (){
var statearr_11100 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11100[(0)] = cljs_draw$core$init_renderer_$_state_machine__8605__auto__);

(statearr_11100[(1)] = (1));

return statearr_11100;
});
var cljs_draw$core$init_renderer_$_state_machine__8605__auto____1 = (function (state_11093){
while(true){
var ret_value__8606__auto__ = (function (){try{while(true){
var result__8607__auto__ = switch__8604__auto__.call(null,state_11093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8607__auto__;
}
break;
}
}catch (e11101){if((e11101 instanceof Object)){
var ex__8608__auto__ = e11101;
var statearr_11102_11104 = state_11093;
(statearr_11102_11104[(5)] = ex__8608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11105 = state_11093;
state_11093 = G__11105;
continue;
} else {
return ret_value__8606__auto__;
}
break;
}
});
cljs_draw$core$init_renderer_$_state_machine__8605__auto__ = function(state_11093){
switch(arguments.length){
case 0:
return cljs_draw$core$init_renderer_$_state_machine__8605__auto____0.call(this);
case 1:
return cljs_draw$core$init_renderer_$_state_machine__8605__auto____1.call(this,state_11093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$init_renderer_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$init_renderer_$_state_machine__8605__auto____0;
cljs_draw$core$init_renderer_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$init_renderer_$_state_machine__8605__auto____1;
return cljs_draw$core$init_renderer_$_state_machine__8605__auto__;
})()
;})(switch__8604__auto__,c__8625__auto__,gl,rect,w,h,driver,programs,pers))
})();
var state__8627__auto__ = (function (){var statearr_11103 = f__8626__auto__.call(null);
(statearr_11103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8625__auto__);

return statearr_11103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8627__auto__);
});})(c__8625__auto__,gl,rect,w,h,driver,programs,pers))
);

return c__8625__auto__;
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

return gamma_driver.api.draw_arrays.call(null,driver,gamma_driver.api.bind.call(null,driver,program,(function (){var G__11107 = (((brush_type instanceof cljs.core.Keyword))?brush_type.fqn:null);
switch (G__11107) {
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
var map__11114 = ctx;
var map__11114__$1 = ((cljs.core.seq_QMARK_.call(null,map__11114))?cljs.core.apply.call(null,cljs.core.hash_map,map__11114):map__11114);
var gl = cljs.core.get.call(null,map__11114__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var driver = cljs.core.get.call(null,map__11114__$1,new cljs.core.Keyword(null,"driver","driver",1515263546));
var compiled_programs = cljs.core.get.call(null,map__11114__$1,new cljs.core.Keyword(null,"compiled-programs","compiled-programs",-1543340724));
var pers = cljs.core.get.call(null,map__11114__$1,new cljs.core.Keyword(null,"pers","pers",-1016576635));
var textures = cljs.core.get.call(null,map__11114__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var mv = thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.matrix44.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null));
gl.clear(gl.COLOR_BUFFER_BIT);

var seq__11115_11119 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"paint-meshes","paint-meshes",1576438847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_draw.core.app_state)));
var chunk__11116_11120 = null;
var count__11117_11121 = (0);
var i__11118_11122 = (0);
while(true){
if((i__11118_11122 < count__11117_11121)){
var mesh_11123 = cljs.core._nth.call(null,chunk__11116_11120,i__11118_11122);
var brush_name_11124 = cljs.core.keyword.call(null,mesh_11123.getBrush());
cljs_draw.core.render_mesh.call(null,gl,mesh_11123,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name_11124),cljs.core.get.call(null,compiled_programs,brush_name_11124),textures,pers,mv);

var G__11125 = seq__11115_11119;
var G__11126 = chunk__11116_11120;
var G__11127 = count__11117_11121;
var G__11128 = (i__11118_11122 + (1));
seq__11115_11119 = G__11125;
chunk__11116_11120 = G__11126;
count__11117_11121 = G__11127;
i__11118_11122 = G__11128;
continue;
} else {
var temp__4423__auto___11129 = cljs.core.seq.call(null,seq__11115_11119);
if(temp__4423__auto___11129){
var seq__11115_11130__$1 = temp__4423__auto___11129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11115_11130__$1)){
var c__5738__auto___11131 = cljs.core.chunk_first.call(null,seq__11115_11130__$1);
var G__11132 = cljs.core.chunk_rest.call(null,seq__11115_11130__$1);
var G__11133 = c__5738__auto___11131;
var G__11134 = cljs.core.count.call(null,c__5738__auto___11131);
var G__11135 = (0);
seq__11115_11119 = G__11132;
chunk__11116_11120 = G__11133;
count__11117_11121 = G__11134;
i__11118_11122 = G__11135;
continue;
} else {
var mesh_11136 = cljs.core.first.call(null,seq__11115_11130__$1);
var brush_name_11137 = cljs.core.keyword.call(null,mesh_11136.getBrush());
cljs_draw.core.render_mesh.call(null,gl,mesh_11136,driver,cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,brush_name_11137),cljs.core.get.call(null,compiled_programs,brush_name_11137),textures,pers,mv);

var G__11138 = cljs.core.next.call(null,seq__11115_11130__$1);
var G__11139 = null;
var G__11140 = (0);
var G__11141 = (0);
seq__11115_11119 = G__11138;
chunk__11116_11120 = G__11139;
count__11117_11121 = G__11140;
i__11118_11122 = G__11141;
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
if(typeof cljs_draw.core.t11145 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t11145 = (function (color_input,data,owner,meta11146){
this.color_input = color_input;
this.data = data;
this.owner = owner;
this.meta11146 = meta11146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t11145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11147,meta11146__$1){
var self__ = this;
var _11147__$1 = this;
return (new cljs_draw.core.t11145(self__.color_input,self__.data,self__.owner,meta11146__$1));
});

cljs_draw.core.t11145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11147){
var self__ = this;
var _11147__$1 = this;
return self__.meta11146;
});

cljs_draw.core.t11145.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t11145.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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

cljs_draw.core.t11145.prototype.om$core$IRender$ = true;

cljs_draw.core.t11145.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"type": "color", "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "style": {"width": (50), "height": (50), "border": (0)}});
});

cljs_draw.core.t11145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-input","color-input",696074651,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta11146","meta11146",-174470429,null)], null);
});

cljs_draw.core.t11145.cljs$lang$type = true;

cljs_draw.core.t11145.cljs$lang$ctorStr = "cljs_draw.core/t11145";

cljs_draw.core.t11145.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t11145");
});

cljs_draw.core.__GT_t11145 = (function cljs_draw$core$color_input_$___GT_t11145(color_input__$1,data__$1,owner__$1,meta11146){
return (new cljs_draw.core.t11145(color_input__$1,data__$1,owner__$1,meta11146));
});

}

return (new cljs_draw.core.t11145(cljs_draw$core$color_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t11226 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t11226 = (function (color_item,props,owner,meta11227){
this.color_item = color_item;
this.props = props;
this.owner = owner;
this.meta11227 = meta11227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t11226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11228,meta11227__$1){
var self__ = this;
var _11228__$1 = this;
return (new cljs_draw.core.t11226(self__.color_item,self__.props,self__.owner,meta11227__$1));
});

cljs_draw.core.t11226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11228){
var self__ = this;
var _11228__$1 = this;
return self__.meta11227;
});

cljs_draw.core.t11226.prototype.om$core$IInitState$ = true;

cljs_draw.core.t11226.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t11226.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t11226.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__11229 = om.core.get_state.call(null,self__.owner);
var map__11229__$1 = ((cljs.core.seq_QMARK_.call(null,map__11229))?cljs.core.apply.call(null,cljs.core.hash_map,map__11229):map__11229);
var mouseup = cljs.core.get.call(null,map__11229__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__11229__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__11229__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var hide_controls = cljs.core.get.call(null,map__11229__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var c__8625__auto___11304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8625__auto___11304,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8626__auto__ = (function (){var switch__8604__auto__ = ((function (c__8625__auto___11304,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_11261){
var state_val_11262 = (state_11261[(1)]);
if((state_val_11262 === (7))){
var inst_11249 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_11250 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_11261__$1 = (function (){var statearr_11263 = state_11261;
(statearr_11263[(7)] = inst_11249);

return statearr_11263;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11261__$1,(9),inst_11250,true);
} else {
if((state_val_11262 === (1))){
var state_11261__$1 = state_11261;
var statearr_11264_11305 = state_11261__$1;
(statearr_11264_11305[(2)] = null);

(statearr_11264_11305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11262 === (4))){
var inst_11232 = (state_11261[(2)]);
var inst_11234 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11235 = cljs.core.async.timeout.call(null,(500));
var inst_11236 = [mouseup,inst_11235];
var inst_11237 = (new cljs.core.PersistentVector(null,2,(5),inst_11234,inst_11236,null));
var state_11261__$1 = (function (){var statearr_11265 = state_11261;
(statearr_11265[(8)] = inst_11232);

return statearr_11265;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11261__$1,(5),inst_11237);
} else {
if((state_val_11262 === (6))){
var inst_11244 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_11245 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_11246 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_11247 = inst_11245.call(null,inst_11246);
var state_11261__$1 = (function (){var statearr_11266 = state_11261;
(statearr_11266[(9)] = inst_11244);

return statearr_11266;
})();
var statearr_11267_11306 = state_11261__$1;
(statearr_11267_11306[(2)] = inst_11247);

(statearr_11267_11306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11262 === (3))){
var inst_11259 = (state_11261[(2)]);
var state_11261__$1 = state_11261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11261__$1,inst_11259);
} else {
if((state_val_11262 === (2))){
var state_11261__$1 = state_11261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11261__$1,(4),mousedown);
} else {
if((state_val_11262 === (9))){
var inst_11252 = (state_11261[(2)]);
var state_11261__$1 = (function (){var statearr_11268 = state_11261;
(statearr_11268[(10)] = inst_11252);

return statearr_11268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11261__$1,(10),mouseup);
} else {
if((state_val_11262 === (5))){
var inst_11239 = (state_11261[(2)]);
var inst_11240 = cljs.core.nth.call(null,inst_11239,(0),null);
var inst_11241 = cljs.core.nth.call(null,inst_11239,(1),null);
var inst_11242 = cljs.core._EQ_.call(null,inst_11241,mouseup);
var state_11261__$1 = (function (){var statearr_11269 = state_11261;
(statearr_11269[(11)] = inst_11240);

return statearr_11269;
})();
if(inst_11242){
var statearr_11270_11307 = state_11261__$1;
(statearr_11270_11307[(1)] = (6));

} else {
var statearr_11271_11308 = state_11261__$1;
(statearr_11271_11308[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11262 === (10))){
var inst_11254 = (state_11261[(2)]);
var state_11261__$1 = state_11261;
var statearr_11272_11309 = state_11261__$1;
(statearr_11272_11309[(2)] = inst_11254);

(statearr_11272_11309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11262 === (8))){
var inst_11256 = (state_11261[(2)]);
var state_11261__$1 = (function (){var statearr_11273 = state_11261;
(statearr_11273[(12)] = inst_11256);

return statearr_11273;
})();
var statearr_11274_11310 = state_11261__$1;
(statearr_11274_11310[(2)] = null);

(statearr_11274_11310[(1)] = (2));


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
});})(c__8625__auto___11304,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8604__auto__,c__8625__auto___11304,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8605__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8605__auto____0 = (function (){
var statearr_11278 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11278[(0)] = cljs_draw$core$color_item_$_state_machine__8605__auto__);

(statearr_11278[(1)] = (1));

return statearr_11278;
});
var cljs_draw$core$color_item_$_state_machine__8605__auto____1 = (function (state_11261){
while(true){
var ret_value__8606__auto__ = (function (){try{while(true){
var result__8607__auto__ = switch__8604__auto__.call(null,state_11261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8607__auto__;
}
break;
}
}catch (e11279){if((e11279 instanceof Object)){
var ex__8608__auto__ = e11279;
var statearr_11280_11311 = state_11261;
(statearr_11280_11311[(5)] = ex__8608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11312 = state_11261;
state_11261 = G__11312;
continue;
} else {
return ret_value__8606__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8605__auto__ = function(state_11261){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8605__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8605__auto____1.call(this,state_11261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8605__auto____0;
cljs_draw$core$color_item_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8605__auto____1;
return cljs_draw$core$color_item_$_state_machine__8605__auto__;
})()
;})(switch__8604__auto__,c__8625__auto___11304,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8627__auto__ = (function (){var statearr_11281 = f__8626__auto__.call(null);
(statearr_11281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8625__auto___11304);

return statearr_11281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8627__auto__);
});})(c__8625__auto___11304,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);


var c__8625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8625__auto__,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (){
var f__8626__auto__ = (function (){var switch__8604__auto__ = ((function (c__8625__auto__,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function (state_11291){
var state_val_11292 = (state_11291[(1)]);
if((state_val_11292 === (1))){
var state_11291__$1 = state_11291;
var statearr_11293_11313 = state_11291__$1;
(statearr_11293_11313[(2)] = null);

(statearr_11293_11313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (2))){
var inst_11283 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_11291__$1 = state_11291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11291__$1,(4),inst_11283);
} else {
if((state_val_11292 === (3))){
var inst_11289 = (state_11291[(2)]);
var state_11291__$1 = state_11291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11291__$1,inst_11289);
} else {
if((state_val_11292 === (4))){
var inst_11285 = (state_11291[(2)]);
var inst_11286 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_11291__$1 = (function (){var statearr_11294 = state_11291;
(statearr_11294[(7)] = inst_11285);

(statearr_11294[(8)] = inst_11286);

return statearr_11294;
})();
var statearr_11295_11314 = state_11291__$1;
(statearr_11295_11314[(2)] = null);

(statearr_11295_11314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8625__auto__,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
;
return ((function (switch__8604__auto__,c__8625__auto__,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__8605__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__8605__auto____0 = (function (){
var statearr_11299 = [null,null,null,null,null,null,null,null,null];
(statearr_11299[(0)] = cljs_draw$core$color_item_$_state_machine__8605__auto__);

(statearr_11299[(1)] = (1));

return statearr_11299;
});
var cljs_draw$core$color_item_$_state_machine__8605__auto____1 = (function (state_11291){
while(true){
var ret_value__8606__auto__ = (function (){try{while(true){
var result__8607__auto__ = switch__8604__auto__.call(null,state_11291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8607__auto__;
}
break;
}
}catch (e11300){if((e11300 instanceof Object)){
var ex__8608__auto__ = e11300;
var statearr_11301_11315 = state_11291;
(statearr_11301_11315[(5)] = ex__8608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11316 = state_11291;
state_11291 = G__11316;
continue;
} else {
return ret_value__8606__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__8605__auto__ = function(state_11291){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__8605__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__8605__auto____1.call(this,state_11291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__8605__auto____0;
cljs_draw$core$color_item_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__8605__auto____1;
return cljs_draw$core$color_item_$_state_machine__8605__auto__;
})()
;})(switch__8604__auto__,c__8625__auto__,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
})();
var state__8627__auto__ = (function (){var statearr_11302 = f__8626__auto__.call(null);
(statearr_11302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8625__auto__);

return statearr_11302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8627__auto__);
});})(c__8625__auto__,map__11229,map__11229__$1,mouseup,mousedown,mouseout,hide_controls,___$1))
);

return c__8625__auto__;
});

cljs_draw.core.t11226.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t11226.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t11226.prototype.om$core$IRender$ = true;

cljs_draw.core.t11226.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__11303 = om.core.get_state.call(null,self__.owner);
var map__11303__$1 = ((cljs.core.seq_QMARK_.call(null,map__11303))?cljs.core.apply.call(null,cljs.core.hash_map,map__11303):map__11303);
var mouseup = cljs.core.get.call(null,map__11303__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var mousedown = cljs.core.get.call(null,map__11303__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseout = cljs.core.get.call(null,map__11303__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
return React.DOM.div({"style": {"position": "relative", "width": (50), "height": (50)}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"href": "#", "onClick": ((function (map__11303,map__11303__$1,mouseup,mousedown,mouseout,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__11303,map__11303__$1,mouseup,mousedown,mouseout,___$1))
},"remove")),React.DOM.div({"onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "style": {"position": "absolute", "width": (50), "height": (50), "cursor": "pointer", "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":"")}}));
});

cljs_draw.core.t11226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color-item","color-item",934499434,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta11227","meta11227",-1758798275,null)], null);
});

cljs_draw.core.t11226.cljs$lang$type = true;

cljs_draw.core.t11226.cljs$lang$ctorStr = "cljs_draw.core/t11226";

cljs_draw.core.t11226.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t11226");
});

cljs_draw.core.__GT_t11226 = (function cljs_draw$core$color_item_$___GT_t11226(color_item__$1,props__$1,owner__$1,meta11227){
return (new cljs_draw.core.t11226(color_item__$1,props__$1,owner__$1,meta11227));
});

}

return (new cljs_draw.core.t11226(cljs_draw$core$color_item,props,owner,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cljs_draw.core.t11510 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t11510 = (function (app,data,owner,meta11511){
this.app = app;
this.data = data;
this.owner = owner;
this.meta11511 = meta11511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_draw.core.t11510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11512,meta11511__$1){
var self__ = this;
var _11512__$1 = this;
return (new cljs_draw.core.t11510(self__.app,self__.data,self__.owner,meta11511__$1));
});

cljs_draw.core.t11510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11512){
var self__ = this;
var _11512__$1 = this;
return self__.meta11511;
});

cljs_draw.core.t11510.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t11510.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvas = node.querySelector("canvas");
var c__8625__auto___11703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8625__auto___11703,node,container,canvas,this$__$1){
return (function (){
var f__8626__auto__ = (function (){var switch__8604__auto__ = ((function (c__8625__auto___11703,node,container,canvas,this$__$1){
return (function (state_11522){
var state_val_11523 = (state_11522[(1)]);
if((state_val_11523 === (1))){
var inst_11513 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_11514 = new cljs.core.Keyword(null,"brushes","brushes",1893051952).cljs$core$IFn$_invoke$arity$1(inst_11513);
var inst_11515 = cljs_draw.core.init_renderer.call(null,canvas,inst_11514);
var state_11522__$1 = state_11522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11522__$1,(2),inst_11515);
} else {
if((state_val_11523 === (2))){
var inst_11517 = (state_11522[(2)]);
var inst_11518 = cljs_draw.core.merge_in_BANG_.call(null,cljs_draw.core.app_state,new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),inst_11517);
var inst_11519 = cljs_draw.core.load_state.call(null);
var inst_11520 = cljs_draw.core.render_loop.call(null);
var state_11522__$1 = (function (){var statearr_11524 = state_11522;
(statearr_11524[(7)] = inst_11519);

(statearr_11524[(8)] = inst_11518);

return statearr_11524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11522__$1,inst_11520);
} else {
return null;
}
}
});})(c__8625__auto___11703,node,container,canvas,this$__$1))
;
return ((function (switch__8604__auto__,c__8625__auto___11703,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8605__auto__ = null;
var cljs_draw$core$app_$_state_machine__8605__auto____0 = (function (){
var statearr_11528 = [null,null,null,null,null,null,null,null,null];
(statearr_11528[(0)] = cljs_draw$core$app_$_state_machine__8605__auto__);

(statearr_11528[(1)] = (1));

return statearr_11528;
});
var cljs_draw$core$app_$_state_machine__8605__auto____1 = (function (state_11522){
while(true){
var ret_value__8606__auto__ = (function (){try{while(true){
var result__8607__auto__ = switch__8604__auto__.call(null,state_11522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8607__auto__;
}
break;
}
}catch (e11529){if((e11529 instanceof Object)){
var ex__8608__auto__ = e11529;
var statearr_11530_11704 = state_11522;
(statearr_11530_11704[(5)] = ex__8608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11705 = state_11522;
state_11522 = G__11705;
continue;
} else {
return ret_value__8606__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8605__auto__ = function(state_11522){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8605__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8605__auto____1.call(this,state_11522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8605__auto____0;
cljs_draw$core$app_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8605__auto____1;
return cljs_draw$core$app_$_state_machine__8605__auto__;
})()
;})(switch__8604__auto__,c__8625__auto___11703,node,container,canvas,this$__$1))
})();
var state__8627__auto__ = (function (){var statearr_11531 = f__8626__auto__.call(null);
(statearr_11531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8625__auto___11703);

return statearr_11531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8627__auto__);
});})(c__8625__auto___11703,node,container,canvas,this$__$1))
);


var moved_11706 = cljs_draw.util.listen.call(null,container,"pointermove");
var c__8625__auto___11707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8625__auto___11707,moved_11706,node,container,canvas,this$__$1){
return (function (){
var f__8626__auto__ = (function (){var switch__8604__auto__ = ((function (c__8625__auto___11707,moved_11706,node,container,canvas,this$__$1){
return (function (state_11610){
var state_val_11611 = (state_11610[(1)]);
if((state_val_11611 === (7))){
var inst_11606 = (state_11610[(2)]);
var state_11610__$1 = state_11610;
var statearr_11612_11708 = state_11610__$1;
(statearr_11612_11708[(2)] = inst_11606);

(statearr_11612_11708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (20))){
var inst_11546 = (state_11610[(7)]);
var inst_11580 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_11581 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_11580);
var inst_11582 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_11583 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_11582);
var inst_11584 = cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,inst_11583);
var inst_11585 = cljs_draw.core.start_stroke.call(null,inst_11546,inst_11581,inst_11584);
var state_11610__$1 = state_11610;
var statearr_11613_11709 = state_11610__$1;
(statearr_11613_11709[(2)] = inst_11585);

(statearr_11613_11709[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (1))){
var inst_11532 = (0);
var state_11610__$1 = (function (){var statearr_11614 = state_11610;
(statearr_11614[(8)] = inst_11532);

return statearr_11614;
})();
var statearr_11615_11710 = state_11610__$1;
(statearr_11615_11710[(2)] = null);

(statearr_11615_11710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (24))){
var state_11610__$1 = state_11610;
var statearr_11616_11711 = state_11610__$1;
(statearr_11616_11711[(2)] = null);

(statearr_11616_11711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (4))){
var inst_11535 = (state_11610[(9)]);
var inst_11535__$1 = (state_11610[(2)]);
var state_11610__$1 = (function (){var statearr_11617 = state_11610;
(statearr_11617[(9)] = inst_11535__$1);

return statearr_11617;
})();
if(cljs.core.truth_(inst_11535__$1)){
var statearr_11618_11712 = state_11610__$1;
(statearr_11618_11712[(1)] = (5));

} else {
var statearr_11619_11713 = state_11610__$1;
(statearr_11619_11713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (15))){
var state_11610__$1 = state_11610;
var statearr_11620_11714 = state_11610__$1;
(statearr_11620_11714[(2)] = null);

(statearr_11620_11714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (21))){
var state_11610__$1 = state_11610;
var statearr_11621_11715 = state_11610__$1;
(statearr_11621_11715[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (13))){
var inst_11600 = (state_11610[(2)]);
var state_11610__$1 = state_11610;
var statearr_11623_11716 = state_11610__$1;
(statearr_11623_11716[(2)] = inst_11600);

(statearr_11623_11716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (22))){
var inst_11598 = (state_11610[(2)]);
var state_11610__$1 = state_11610;
var statearr_11624_11717 = state_11610__$1;
(statearr_11624_11717[(2)] = inst_11598);

(statearr_11624_11717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (6))){
var state_11610__$1 = state_11610;
var statearr_11625_11718 = state_11610__$1;
(statearr_11625_11718[(2)] = null);

(statearr_11625_11718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (25))){
var inst_11596 = (state_11610[(2)]);
var state_11610__$1 = state_11610;
var statearr_11626_11719 = state_11610__$1;
(statearr_11626_11719[(2)] = inst_11596);

(statearr_11626_11719[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (17))){
var inst_11570 = cljs_draw.core.finalize_stroke.call(null);
var state_11610__$1 = state_11610;
var statearr_11627_11720 = state_11610__$1;
(statearr_11627_11720[(2)] = inst_11570);

(statearr_11627_11720[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (3))){
var inst_11608 = (state_11610[(2)]);
var state_11610__$1 = state_11610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11610__$1,inst_11608);
} else {
if((state_val_11611 === (12))){
var inst_11532 = (state_11610[(8)]);
var inst_11578 = cljs.core._EQ_.call(null,inst_11532,(0));
var state_11610__$1 = state_11610;
if(inst_11578){
var statearr_11628_11721 = state_11610__$1;
(statearr_11628_11721[(1)] = (20));

} else {
var statearr_11629_11722 = state_11610__$1;
(statearr_11629_11722[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (2))){
var state_11610__$1 = state_11610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11610__$1,(4),moved_11706);
} else {
if((state_val_11611 === (23))){
var inst_11546 = (state_11610[(7)]);
var inst_11547 = (state_11610[(10)]);
var inst_11588 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_11589 = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(inst_11588);
var inst_11590 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_11591 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_11590);
var inst_11592 = cljs_draw.core.get_brush.call(null,cljs_draw.core.app_state,inst_11591);
var inst_11593 = cljs_draw.core.add_to_stroke.call(null,inst_11546,inst_11547,inst_11589,inst_11592);
var state_11610__$1 = state_11610;
var statearr_11630_11723 = state_11610__$1;
(statearr_11630_11723[(2)] = inst_11593);

(statearr_11630_11723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (19))){
var inst_11573 = (state_11610[(2)]);
var state_11610__$1 = state_11610;
var statearr_11631_11724 = state_11610__$1;
(statearr_11631_11724[(2)] = inst_11573);

(statearr_11631_11724[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (11))){
var inst_11556 = (state_11610[(11)]);
var inst_11555 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_11556__$1 = new cljs.core.Keyword(null,"current-mesh","current-mesh",-1062868685).cljs$core$IFn$_invoke$arity$1(inst_11555);
var state_11610__$1 = (function (){var statearr_11632 = state_11610;
(statearr_11632[(11)] = inst_11556__$1);

return statearr_11632;
})();
if(cljs.core.truth_(inst_11556__$1)){
var statearr_11633_11725 = state_11610__$1;
(statearr_11633_11725[(1)] = (14));

} else {
var statearr_11634_11726 = state_11610__$1;
(statearr_11634_11726[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (9))){
var inst_11547 = (state_11610[(10)]);
var inst_11553 = cljs.core._EQ_.call(null,inst_11547,(0));
var state_11610__$1 = state_11610;
if(inst_11553){
var statearr_11635_11727 = state_11610__$1;
(statearr_11635_11727[(1)] = (11));

} else {
var statearr_11636_11728 = state_11610__$1;
(statearr_11636_11728[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (5))){
var inst_11535 = (state_11610[(9)]);
var inst_11537 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_11538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11539 = [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)];
var inst_11540 = (new cljs.core.PersistentVector(null,2,(5),inst_11538,inst_11539,null));
var inst_11541 = cljs.core.get_in.call(null,inst_11537,inst_11540);
var inst_11542 = inst_11535.layerX;
var inst_11543 = (inst_11542 - inst_11541);
var inst_11544 = inst_11535.layerY;
var inst_11545 = (inst_11544 - inst_11541);
var inst_11546 = thi.ng.geom.core.vector.vec2.call(null,inst_11543,inst_11545);
var inst_11547 = inst_11535.mozPressure;
var inst_11548 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_11549 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_11548);
var inst_11550 = cljs.core.not.call(null,inst_11549);
var state_11610__$1 = (function (){var statearr_11637 = state_11610;
(statearr_11637[(7)] = inst_11546);

(statearr_11637[(10)] = inst_11547);

return statearr_11637;
})();
if(inst_11550){
var statearr_11638_11729 = state_11610__$1;
(statearr_11638_11729[(1)] = (8));

} else {
var statearr_11639_11730 = state_11610__$1;
(statearr_11639_11730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (14))){
var inst_11556 = (state_11610[(11)]);
var inst_11558 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_11559 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_11558);
var inst_11560 = inst_11556.isColor(inst_11559);
var inst_11561 = cljs.core.not.call(null,inst_11560);
var inst_11562 = inst_11556.getBrush();
var inst_11563 = cljs.core.keyword.call(null,inst_11562);
var inst_11564 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_11565 = new cljs.core.Keyword(null,"current-brush","current-brush",935402).cljs$core$IFn$_invoke$arity$1(inst_11564);
var inst_11566 = cljs.core._EQ_.call(null,inst_11563,inst_11565);
var inst_11567 = !(inst_11566);
var inst_11568 = (inst_11561) || (inst_11567);
var state_11610__$1 = state_11610;
if(cljs.core.truth_(inst_11568)){
var statearr_11640_11731 = state_11610__$1;
(statearr_11640_11731[(1)] = (17));

} else {
var statearr_11641_11732 = state_11610__$1;
(statearr_11641_11732[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (16))){
var inst_11576 = (state_11610[(2)]);
var state_11610__$1 = state_11610;
var statearr_11642_11733 = state_11610__$1;
(statearr_11642_11733[(2)] = inst_11576);

(statearr_11642_11733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (10))){
var inst_11547 = (state_11610[(10)]);
var inst_11602 = (state_11610[(2)]);
var inst_11532 = inst_11547;
var state_11610__$1 = (function (){var statearr_11643 = state_11610;
(statearr_11643[(12)] = inst_11602);

(statearr_11643[(8)] = inst_11532);

return statearr_11643;
})();
var statearr_11644_11734 = state_11610__$1;
(statearr_11644_11734[(2)] = null);

(statearr_11644_11734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (18))){
var state_11610__$1 = state_11610;
var statearr_11645_11735 = state_11610__$1;
(statearr_11645_11735[(2)] = null);

(statearr_11645_11735[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11611 === (8))){
var state_11610__$1 = state_11610;
var statearr_11646_11736 = state_11610__$1;
(statearr_11646_11736[(2)] = null);

(statearr_11646_11736[(1)] = (10));


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
});})(c__8625__auto___11707,moved_11706,node,container,canvas,this$__$1))
;
return ((function (switch__8604__auto__,c__8625__auto___11707,moved_11706,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8605__auto__ = null;
var cljs_draw$core$app_$_state_machine__8605__auto____0 = (function (){
var statearr_11650 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11650[(0)] = cljs_draw$core$app_$_state_machine__8605__auto__);

(statearr_11650[(1)] = (1));

return statearr_11650;
});
var cljs_draw$core$app_$_state_machine__8605__auto____1 = (function (state_11610){
while(true){
var ret_value__8606__auto__ = (function (){try{while(true){
var result__8607__auto__ = switch__8604__auto__.call(null,state_11610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8607__auto__;
}
break;
}
}catch (e11651){if((e11651 instanceof Object)){
var ex__8608__auto__ = e11651;
var statearr_11652_11737 = state_11610;
(statearr_11652_11737[(5)] = ex__8608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11738 = state_11610;
state_11610 = G__11738;
continue;
} else {
return ret_value__8606__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8605__auto__ = function(state_11610){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8605__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8605__auto____1.call(this,state_11610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8605__auto____0;
cljs_draw$core$app_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8605__auto____1;
return cljs_draw$core$app_$_state_machine__8605__auto__;
})()
;})(switch__8604__auto__,c__8625__auto___11707,moved_11706,node,container,canvas,this$__$1))
})();
var state__8627__auto__ = (function (){var statearr_11653 = f__8626__auto__.call(null);
(statearr_11653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8625__auto___11707);

return statearr_11653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8627__auto__);
});})(c__8625__auto___11707,moved_11706,node,container,canvas,this$__$1))
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
var c__8625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8625__auto__,keydown,node,container,canvas,this$__$1){
return (function (){
var f__8626__auto__ = (function (){var switch__8604__auto__ = ((function (c__8625__auto__,keydown,node,container,canvas,this$__$1){
return (function (state_11676){
var state_val_11677 = (state_11676[(1)]);
if((state_val_11677 === (7))){
var inst_11671 = (state_11676[(2)]);
var state_11676__$1 = (function (){var statearr_11678 = state_11676;
(statearr_11678[(7)] = inst_11671);

return statearr_11678;
})();
var statearr_11679_11739 = state_11676__$1;
(statearr_11679_11739[(2)] = null);

(statearr_11679_11739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (1))){
var state_11676__$1 = state_11676;
var statearr_11680_11740 = state_11676__$1;
(statearr_11680_11740[(2)] = null);

(statearr_11680_11740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (4))){
var inst_11656 = (state_11676[(8)]);
var inst_11656__$1 = (state_11676[(2)]);
var inst_11657 = inst_11656__$1.metaKey;
var state_11676__$1 = (function (){var statearr_11681 = state_11676;
(statearr_11681[(8)] = inst_11656__$1);

return statearr_11681;
})();
if(cljs.core.truth_(inst_11657)){
var statearr_11682_11741 = state_11676__$1;
(statearr_11682_11741[(1)] = (5));

} else {
var statearr_11683_11742 = state_11676__$1;
(statearr_11683_11742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (6))){
var state_11676__$1 = state_11676;
var statearr_11684_11743 = state_11676__$1;
(statearr_11684_11743[(2)] = null);

(statearr_11684_11743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (3))){
var inst_11674 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11676__$1,inst_11674);
} else {
if((state_val_11677 === (12))){
var state_11676__$1 = state_11676;
var statearr_11685_11744 = state_11676__$1;
(statearr_11685_11744[(2)] = new cljs.core.Keyword(null,"else","else",-1508377146));

(statearr_11685_11744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (2))){
var state_11676__$1 = state_11676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11676__$1,(4),keydown);
} else {
if((state_val_11677 === (11))){
var inst_11663 = cljs_draw.core.clear_canvas.call(null);
var state_11676__$1 = state_11676;
var statearr_11686_11745 = state_11676__$1;
(statearr_11686_11745[(2)] = inst_11663);

(statearr_11686_11745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (9))){
var inst_11659 = cljs_draw.core.save_state.call(null);
var state_11676__$1 = state_11676;
var statearr_11687_11746 = state_11676__$1;
(statearr_11687_11746[(2)] = inst_11659);

(statearr_11687_11746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (5))){
var inst_11656 = (state_11676[(8)]);
var inst_11666 = inst_11656.keyCode;
var state_11676__$1 = state_11676;
var G__11688_11747 = inst_11666;
switch (G__11688_11747) {
case (83):
var statearr_11689_11749 = state_11676__$1;
(statearr_11689_11749[(1)] = (9));


break;
case (90):
var statearr_11690_11750 = state_11676__$1;
(statearr_11690_11750[(1)] = (10));


break;
case (67):
var statearr_11691_11751 = state_11676__$1;
(statearr_11691_11751[(1)] = (11));


break;
default:
var statearr_11692_11752 = state_11676__$1;
(statearr_11692_11752[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (10))){
var inst_11661 = cljs_draw.core.undo.call(null);
var state_11676__$1 = state_11676;
var statearr_11693_11753 = state_11676__$1;
(statearr_11693_11753[(2)] = inst_11661);

(statearr_11693_11753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (8))){
var inst_11668 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
var statearr_11694_11754 = state_11676__$1;
(statearr_11694_11754[(2)] = inst_11668);

(statearr_11694_11754[(1)] = (7));


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
});})(c__8625__auto__,keydown,node,container,canvas,this$__$1))
;
return ((function (switch__8604__auto__,c__8625__auto__,keydown,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__8605__auto__ = null;
var cljs_draw$core$app_$_state_machine__8605__auto____0 = (function (){
var statearr_11698 = [null,null,null,null,null,null,null,null,null];
(statearr_11698[(0)] = cljs_draw$core$app_$_state_machine__8605__auto__);

(statearr_11698[(1)] = (1));

return statearr_11698;
});
var cljs_draw$core$app_$_state_machine__8605__auto____1 = (function (state_11676){
while(true){
var ret_value__8606__auto__ = (function (){try{while(true){
var result__8607__auto__ = switch__8604__auto__.call(null,state_11676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8607__auto__;
}
break;
}
}catch (e11699){if((e11699 instanceof Object)){
var ex__8608__auto__ = e11699;
var statearr_11700_11755 = state_11676;
(statearr_11700_11755[(5)] = ex__8608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11756 = state_11676;
state_11676 = G__11756;
continue;
} else {
return ret_value__8606__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__8605__auto__ = function(state_11676){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__8605__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__8605__auto____1.call(this,state_11676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__8605__auto____0;
cljs_draw$core$app_$_state_machine__8605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__8605__auto____1;
return cljs_draw$core$app_$_state_machine__8605__auto__;
})()
;})(switch__8604__auto__,c__8625__auto__,keydown,node,container,canvas,this$__$1))
})();
var state__8627__auto__ = (function (){var statearr_11701 = f__8626__auto__.call(null);
(statearr_11701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8625__auto__);

return statearr_11701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8627__auto__);
});})(c__8625__auto__,keydown,node,container,canvas,this$__$1))
);

return c__8625__auto__;
});

cljs_draw.core.t11510.prototype.om$core$IRender$ = true;

cljs_draw.core.t11510.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__11702 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"dimen","dimen",-234621985)], null));
var width = cljs.core.nth.call(null,vec__11702,(0),null);
var height = cljs.core.nth.call(null,vec__11702,(1),null);
var boundary = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-ctx","render-ctx",-521898772),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)], null));
return React.DOM.div({"id": "app", "style": {"height": "100%", "backgroundColor": "#222222"}},React.DOM.div({"className": "canvas-container", "style": {"bottom": (0), "top": (0), "overflow": "hidden", "width": ((width / (2)) + (boundary * (2))), "cursor": "crosshair", "padding": (50), "right": (0), "position": "absolute", "border": "1px solid #2f2f2f", "height": ((height / (2)) + (boundary * (2))), "left": (0), "margin": "auto"}},React.DOM.canvas({"width": width, "height": height, "style": {"width": (width / (2)), "height": (height / (2))}})),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t11510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta11511","meta11511",521301248,null)], null);
});

cljs_draw.core.t11510.cljs$lang$type = true;

cljs_draw.core.t11510.cljs$lang$ctorStr = "cljs_draw.core/t11510";

cljs_draw.core.t11510.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs_draw.core/t11510");
});

cljs_draw.core.__GT_t11510 = (function cljs_draw$core$app_$___GT_t11510(app__$1,data__$1,owner__$1,meta11511){
return (new cljs_draw.core.t11510(app__$1,data__$1,owner__$1,meta11511));
});

}

return (new cljs_draw.core.t11510(cljs_draw$core$app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map