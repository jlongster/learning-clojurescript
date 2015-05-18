// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_draw.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs_draw.util');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof cljs_draw.core.app_state !== 'undefined'){
} else {
cljs_draw.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current-color","current-color",1731984119),null,new cljs.core.Keyword(null,"listening-for-color","listening-for-color",-341629494),false], null));
}
cljs_draw.core.set_canvas_sizes_BANG_ = (function cljs_draw$core$set_canvas_sizes_BANG_(el,canvases){
var rect = el.getBoundingClientRect();
var seq__8790 = cljs.core.seq.call(null,canvases);
var chunk__8791 = null;
var count__8792 = (0);
var i__8793 = (0);
while(true){
if((i__8793 < count__8792)){
var canvas = cljs.core._nth.call(null,chunk__8791,i__8793);
canvas.width = (rect.width * (2));

canvas.height = (rect.height * (2));

var G__8794 = seq__8790;
var G__8795 = chunk__8791;
var G__8796 = count__8792;
var G__8797 = (i__8793 + (1));
seq__8790 = G__8794;
chunk__8791 = G__8795;
count__8792 = G__8796;
i__8793 = G__8797;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8790);
if(temp__4126__auto__){
var seq__8790__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8790__$1)){
var c__3511__auto__ = cljs.core.chunk_first.call(null,seq__8790__$1);
var G__8798 = cljs.core.chunk_rest.call(null,seq__8790__$1);
var G__8799 = c__3511__auto__;
var G__8800 = cljs.core.count.call(null,c__3511__auto__);
var G__8801 = (0);
seq__8790 = G__8798;
chunk__8791 = G__8799;
count__8792 = G__8800;
i__8793 = G__8801;
continue;
} else {
var canvas = cljs.core.first.call(null,seq__8790__$1);
canvas.width = (rect.width * (2));

canvas.height = (rect.height * (2));

var G__8802 = cljs.core.next.call(null,seq__8790__$1);
var G__8803 = null;
var G__8804 = (0);
var G__8805 = (0);
seq__8790 = G__8802;
chunk__8791 = G__8803;
count__8792 = G__8804;
i__8793 = G__8805;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_draw.core.lines = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_draw.core.moved = cljs_draw.util.listen.call(null,window,"pointermove");
cljs_draw.core.finalize_stroke = (function cljs_draw$core$finalize_stroke(){
return cljs.core.swap_BANG_.call(null,cljs_draw.core.lines,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
});
var pressed_8832 = cljs_draw.util.listen.call(null,window,"gotpointercapture");
var c__1902__auto___8833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto___8833,pressed_8832){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto___8833,pressed_8832){
return (function (state_8817){
var state_val_8818 = (state_8817[(1)]);
if((state_val_8818 === (7))){
var inst_8813 = (state_8817[(2)]);
var state_8817__$1 = state_8817;
var statearr_8819_8834 = state_8817__$1;
(statearr_8819_8834[(2)] = inst_8813);

(statearr_8819_8834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8818 === (6))){
var state_8817__$1 = state_8817;
var statearr_8820_8835 = state_8817__$1;
(statearr_8820_8835[(2)] = null);

(statearr_8820_8835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8818 === (5))){
var inst_8810 = console.log("down");
var state_8817__$1 = state_8817;
var statearr_8821_8836 = state_8817__$1;
(statearr_8821_8836[(2)] = inst_8810);

(statearr_8821_8836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8818 === (4))){
var inst_8808 = (state_8817[(2)]);
var state_8817__$1 = state_8817;
if(cljs.core.truth_(inst_8808)){
var statearr_8822_8837 = state_8817__$1;
(statearr_8822_8837[(1)] = (5));

} else {
var statearr_8823_8838 = state_8817__$1;
(statearr_8823_8838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8818 === (3))){
var inst_8815 = (state_8817[(2)]);
var state_8817__$1 = state_8817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8817__$1,inst_8815);
} else {
if((state_val_8818 === (2))){
var state_8817__$1 = state_8817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8817__$1,(4),pressed_8832);
} else {
if((state_val_8818 === (1))){
var state_8817__$1 = state_8817;
var statearr_8824_8839 = state_8817__$1;
(statearr_8824_8839[(2)] = null);

(statearr_8824_8839[(1)] = (2));


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
});})(c__1902__auto___8833,pressed_8832))
;
return ((function (switch__1881__auto__,c__1902__auto___8833,pressed_8832){
return (function() {
var cljs_draw$core$state_machine__1882__auto__ = null;
var cljs_draw$core$state_machine__1882__auto____0 = (function (){
var statearr_8828 = [null,null,null,null,null,null,null];
(statearr_8828[(0)] = cljs_draw$core$state_machine__1882__auto__);

(statearr_8828[(1)] = (1));

return statearr_8828;
});
var cljs_draw$core$state_machine__1882__auto____1 = (function (state_8817){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_8817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e8829){if((e8829 instanceof Object)){
var ex__1885__auto__ = e8829;
var statearr_8830_8840 = state_8817;
(statearr_8830_8840[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8841 = state_8817;
state_8817 = G__8841;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$state_machine__1882__auto__ = function(state_8817){
switch(arguments.length){
case 0:
return cljs_draw$core$state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$state_machine__1882__auto____1.call(this,state_8817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$state_machine__1882__auto____0;
cljs_draw$core$state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$state_machine__1882__auto____1;
return cljs_draw$core$state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto___8833,pressed_8832))
})();
var state__1904__auto__ = (function (){var statearr_8831 = f__1903__auto__.call(null);
(statearr_8831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto___8833);

return statearr_8831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto___8833,pressed_8832))
);

var pressed_8868 = cljs_draw.util.listen.call(null,window,"lostpointercapture");
var c__1902__auto___8869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto___8869,pressed_8868){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto___8869,pressed_8868){
return (function (state_8853){
var state_val_8854 = (state_8853[(1)]);
if((state_val_8854 === (7))){
var inst_8849 = (state_8853[(2)]);
var state_8853__$1 = state_8853;
var statearr_8855_8870 = state_8853__$1;
(statearr_8855_8870[(2)] = inst_8849);

(statearr_8855_8870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (6))){
var state_8853__$1 = state_8853;
var statearr_8856_8871 = state_8853__$1;
(statearr_8856_8871[(2)] = null);

(statearr_8856_8871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (5))){
var inst_8846 = console.log("up");
var state_8853__$1 = state_8853;
var statearr_8857_8872 = state_8853__$1;
(statearr_8857_8872[(2)] = inst_8846);

(statearr_8857_8872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (4))){
var inst_8844 = (state_8853[(2)]);
var state_8853__$1 = state_8853;
if(cljs.core.truth_(inst_8844)){
var statearr_8858_8873 = state_8853__$1;
(statearr_8858_8873[(1)] = (5));

} else {
var statearr_8859_8874 = state_8853__$1;
(statearr_8859_8874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (3))){
var inst_8851 = (state_8853[(2)]);
var state_8853__$1 = state_8853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8853__$1,inst_8851);
} else {
if((state_val_8854 === (2))){
var state_8853__$1 = state_8853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8853__$1,(4),pressed_8868);
} else {
if((state_val_8854 === (1))){
var state_8853__$1 = state_8853;
var statearr_8860_8875 = state_8853__$1;
(statearr_8860_8875[(2)] = null);

(statearr_8860_8875[(1)] = (2));


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
});})(c__1902__auto___8869,pressed_8868))
;
return ((function (switch__1881__auto__,c__1902__auto___8869,pressed_8868){
return (function() {
var cljs_draw$core$state_machine__1882__auto__ = null;
var cljs_draw$core$state_machine__1882__auto____0 = (function (){
var statearr_8864 = [null,null,null,null,null,null,null];
(statearr_8864[(0)] = cljs_draw$core$state_machine__1882__auto__);

(statearr_8864[(1)] = (1));

return statearr_8864;
});
var cljs_draw$core$state_machine__1882__auto____1 = (function (state_8853){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_8853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e8865){if((e8865 instanceof Object)){
var ex__1885__auto__ = e8865;
var statearr_8866_8876 = state_8853;
(statearr_8866_8876[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8877 = state_8853;
state_8853 = G__8877;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$state_machine__1882__auto__ = function(state_8853){
switch(arguments.length){
case 0:
return cljs_draw$core$state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$state_machine__1882__auto____1.call(this,state_8853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$state_machine__1882__auto____0;
cljs_draw$core$state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$state_machine__1882__auto____1;
return cljs_draw$core$state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto___8869,pressed_8868))
})();
var state__1904__auto__ = (function (){var statearr_8867 = f__1903__auto__.call(null);
(statearr_8867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto___8869);

return statearr_8867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto___8869,pressed_8868))
);

cljs.core.async.close_BANG_.call(null,cljs_draw.core.moved);

cljs_draw.core.moved = cljs_draw.util.listen.call(null,window,"pointermove");

var c__1902__auto___8961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto___8961){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto___8961){
return (function (state_8928){
var state_val_8929 = (state_8928[(1)]);
if((state_val_8929 === (7))){
var inst_8924 = (state_8928[(2)]);
var state_8928__$1 = state_8928;
var statearr_8930_8962 = state_8928__$1;
(statearr_8930_8962[(2)] = inst_8924);

(statearr_8930_8962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (1))){
var state_8928__$1 = state_8928;
var statearr_8931_8963 = state_8928__$1;
(statearr_8931_8963[(2)] = null);

(statearr_8931_8963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (4))){
var inst_8880 = (state_8928[(7)]);
var inst_8880__$1 = (state_8928[(2)]);
var state_8928__$1 = (function (){var statearr_8932 = state_8928;
(statearr_8932[(7)] = inst_8880__$1);

return statearr_8932;
})();
if(cljs.core.truth_(inst_8880__$1)){
var statearr_8933_8964 = state_8928__$1;
(statearr_8933_8964[(1)] = (5));

} else {
var statearr_8934_8965 = state_8928__$1;
(statearr_8934_8965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (15))){
var state_8928__$1 = state_8928;
var statearr_8935_8966 = state_8928__$1;
(statearr_8935_8966[(2)] = null);

(statearr_8935_8966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (13))){
var inst_8918 = (state_8928[(2)]);
var state_8928__$1 = state_8928;
var statearr_8936_8967 = state_8928__$1;
(statearr_8936_8967[(2)] = inst_8918);

(statearr_8936_8967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (6))){
var state_8928__$1 = state_8928;
var statearr_8937_8968 = state_8928__$1;
(statearr_8937_8968[(2)] = null);

(statearr_8937_8968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (17))){
var inst_8880 = (state_8928[(7)]);
var inst_8903 = (function (){var e = inst_8880;
var temp__4124__auto__ = inst_8880;
return ((function (e,temp__4124__auto__,inst_8880,state_val_8929,c__1902__auto___8961){
return (function (d,x){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.drop_last.call(null,(1),cljs.core.deref.call(null,cljs_draw.core.lines))),cljs.core.conj.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,cljs_draw.core.lines)),x));
});
;})(e,temp__4124__auto__,inst_8880,state_val_8929,c__1902__auto___8961))
})();
var inst_8904 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"color","color",1011675173)];
var inst_8905 = inst_8880.clientX;
var inst_8906 = inst_8880.clientY;
var inst_8907 = inst_8880.mozPressure;
var inst_8908 = Math.pow(inst_8907,(2));
var inst_8909 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_8910 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_8909);
var inst_8911 = [inst_8905,inst_8906,inst_8908,inst_8910];
var inst_8912 = cljs.core.PersistentHashMap.fromArrays(inst_8904,inst_8911);
var inst_8913 = cljs.core.swap_BANG_.call(null,cljs_draw.core.lines,inst_8903,inst_8912);
var state_8928__$1 = state_8928;
var statearr_8938_8969 = state_8928__$1;
(statearr_8938_8969[(2)] = inst_8913);

(statearr_8938_8969[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (3))){
var inst_8926 = (state_8928[(2)]);
var state_8928__$1 = state_8928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8928__$1,inst_8926);
} else {
if((state_val_8929 === (12))){
var inst_8880 = (state_8928[(7)]);
var inst_8900 = inst_8880.mozPressure;
var inst_8901 = cljs.core.not_EQ_.call(null,inst_8900,.5);
var state_8928__$1 = state_8928;
if(inst_8901){
var statearr_8939_8970 = state_8928__$1;
(statearr_8939_8970[(1)] = (17));

} else {
var statearr_8940_8971 = state_8928__$1;
(statearr_8940_8971[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (2))){
var state_8928__$1 = state_8928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8928__$1,(4),cljs_draw.core.moved);
} else {
if((state_val_8929 === (19))){
var inst_8916 = (state_8928[(2)]);
var state_8928__$1 = state_8928;
var statearr_8941_8972 = state_8928__$1;
(statearr_8941_8972[(2)] = inst_8916);

(statearr_8941_8972[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (11))){
var inst_8890 = cljs.core.deref.call(null,cljs_draw.core.lines);
var inst_8891 = cljs.core.first.call(null,inst_8890);
var inst_8892 = cljs.core.count.call(null,inst_8891);
var inst_8893 = (inst_8892 > (0));
var state_8928__$1 = state_8928;
if(cljs.core.truth_(inst_8893)){
var statearr_8942_8973 = state_8928__$1;
(statearr_8942_8973[(1)] = (14));

} else {
var statearr_8943_8974 = state_8928__$1;
(statearr_8943_8974[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (9))){
var inst_8880 = (state_8928[(7)]);
var inst_8887 = inst_8880.mozPressure;
var inst_8888 = cljs.core._EQ_.call(null,inst_8887,(0));
var state_8928__$1 = state_8928;
if(inst_8888){
var statearr_8944_8975 = state_8928__$1;
(statearr_8944_8975[(1)] = (11));

} else {
var statearr_8945_8976 = state_8928__$1;
(statearr_8945_8976[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (5))){
var inst_8882 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_8883 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_8882);
var inst_8884 = cljs.core.not.call(null,inst_8883);
var state_8928__$1 = state_8928;
if(inst_8884){
var statearr_8946_8977 = state_8928__$1;
(statearr_8946_8977[(1)] = (8));

} else {
var statearr_8947_8978 = state_8928__$1;
(statearr_8947_8978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (14))){
var inst_8895 = cljs_draw.core.finalize_stroke.call(null);
var state_8928__$1 = state_8928;
var statearr_8948_8979 = state_8928__$1;
(statearr_8948_8979[(2)] = inst_8895);

(statearr_8948_8979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (16))){
var inst_8898 = (state_8928[(2)]);
var state_8928__$1 = state_8928;
var statearr_8949_8980 = state_8928__$1;
(statearr_8949_8980[(2)] = inst_8898);

(statearr_8949_8980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (10))){
var inst_8920 = (state_8928[(2)]);
var state_8928__$1 = (function (){var statearr_8950 = state_8928;
(statearr_8950[(8)] = inst_8920);

return statearr_8950;
})();
var statearr_8951_8981 = state_8928__$1;
(statearr_8951_8981[(2)] = null);

(statearr_8951_8981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (18))){
var state_8928__$1 = state_8928;
var statearr_8952_8982 = state_8928__$1;
(statearr_8952_8982[(2)] = null);

(statearr_8952_8982[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8929 === (8))){
var state_8928__$1 = state_8928;
var statearr_8953_8983 = state_8928__$1;
(statearr_8953_8983[(2)] = null);

(statearr_8953_8983[(1)] = (10));


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
});})(c__1902__auto___8961))
;
return ((function (switch__1881__auto__,c__1902__auto___8961){
return (function() {
var cljs_draw$core$state_machine__1882__auto__ = null;
var cljs_draw$core$state_machine__1882__auto____0 = (function (){
var statearr_8957 = [null,null,null,null,null,null,null,null,null];
(statearr_8957[(0)] = cljs_draw$core$state_machine__1882__auto__);

(statearr_8957[(1)] = (1));

return statearr_8957;
});
var cljs_draw$core$state_machine__1882__auto____1 = (function (state_8928){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_8928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e8958){if((e8958 instanceof Object)){
var ex__1885__auto__ = e8958;
var statearr_8959_8984 = state_8928;
(statearr_8959_8984[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8985 = state_8928;
state_8928 = G__8985;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$state_machine__1882__auto__ = function(state_8928){
switch(arguments.length){
case 0:
return cljs_draw$core$state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$state_machine__1882__auto____1.call(this,state_8928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$state_machine__1882__auto____0;
cljs_draw$core$state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$state_machine__1882__auto____1;
return cljs_draw$core$state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto___8961))
})();
var state__1904__auto__ = (function (){var statearr_8960 = f__1903__auto__.call(null);
(statearr_8960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto___8961);

return statearr_8960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto___8961))
);

cljs_draw.core.vec2_length = (function cljs_draw$core$vec2_length(x,y){
return Math.sqrt(((x * x) + (y * y)));
});
cljs_draw.core.render = (function cljs_draw$core$render(ctx){
var seq__8998 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs_draw.core.lines));
var chunk__8999 = null;
var count__9000 = (0);
var i__9001 = (0);
while(true){
if((i__9001 < count__9000)){
var line = cljs.core._nth.call(null,chunk__8999,i__9001);
if((cljs.core.count.call(null,line) > (1))){
var seq__9002_9010 = cljs.core.seq.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,line) - (1))));
var chunk__9003_9011 = null;
var count__9004_9012 = (0);
var i__9005_9013 = (0);
while(true){
if((i__9005_9013 < count__9004_9012)){
var i_9014 = cljs.core._nth.call(null,chunk__9003_9011,i__9005_9013);
var p1_9015 = cljs.core.nth.call(null,line,i_9014);
var p2_9016 = cljs.core.nth.call(null,line,(i_9014 + (1)));
var width_9017 = ((new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p1_9015) + new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p2_9016)) * ((20) * (2)));
ctx.lineWidth = (width_9017 * (2));

ctx.strokeStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p1_9015);

ctx.beginPath();

ctx.moveTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1_9015) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1_9015) * (2)));

ctx.lineTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2_9016) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2_9016) * (2)));

ctx.stroke();

var G__9018 = seq__9002_9010;
var G__9019 = chunk__9003_9011;
var G__9020 = count__9004_9012;
var G__9021 = (i__9005_9013 + (1));
seq__9002_9010 = G__9018;
chunk__9003_9011 = G__9019;
count__9004_9012 = G__9020;
i__9005_9013 = G__9021;
continue;
} else {
var temp__4126__auto___9022 = cljs.core.seq.call(null,seq__9002_9010);
if(temp__4126__auto___9022){
var seq__9002_9023__$1 = temp__4126__auto___9022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9002_9023__$1)){
var c__3511__auto___9024 = cljs.core.chunk_first.call(null,seq__9002_9023__$1);
var G__9025 = cljs.core.chunk_rest.call(null,seq__9002_9023__$1);
var G__9026 = c__3511__auto___9024;
var G__9027 = cljs.core.count.call(null,c__3511__auto___9024);
var G__9028 = (0);
seq__9002_9010 = G__9025;
chunk__9003_9011 = G__9026;
count__9004_9012 = G__9027;
i__9005_9013 = G__9028;
continue;
} else {
var i_9029 = cljs.core.first.call(null,seq__9002_9023__$1);
var p1_9030 = cljs.core.nth.call(null,line,i_9029);
var p2_9031 = cljs.core.nth.call(null,line,(i_9029 + (1)));
var width_9032 = ((new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p1_9030) + new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p2_9031)) * ((20) * (2)));
ctx.lineWidth = (width_9032 * (2));

ctx.strokeStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p1_9030);

ctx.beginPath();

ctx.moveTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1_9030) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1_9030) * (2)));

ctx.lineTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2_9031) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2_9031) * (2)));

ctx.stroke();

var G__9033 = cljs.core.next.call(null,seq__9002_9023__$1);
var G__9034 = null;
var G__9035 = (0);
var G__9036 = (0);
seq__9002_9010 = G__9033;
chunk__9003_9011 = G__9034;
count__9004_9012 = G__9035;
i__9005_9013 = G__9036;
continue;
}
} else {
}
}
break;
}
} else {
}

var G__9037 = seq__8998;
var G__9038 = chunk__8999;
var G__9039 = count__9000;
var G__9040 = (i__9001 + (1));
seq__8998 = G__9037;
chunk__8999 = G__9038;
count__9000 = G__9039;
i__9001 = G__9040;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8998);
if(temp__4126__auto__){
var seq__8998__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8998__$1)){
var c__3511__auto__ = cljs.core.chunk_first.call(null,seq__8998__$1);
var G__9041 = cljs.core.chunk_rest.call(null,seq__8998__$1);
var G__9042 = c__3511__auto__;
var G__9043 = cljs.core.count.call(null,c__3511__auto__);
var G__9044 = (0);
seq__8998 = G__9041;
chunk__8999 = G__9042;
count__9000 = G__9043;
i__9001 = G__9044;
continue;
} else {
var line = cljs.core.first.call(null,seq__8998__$1);
if((cljs.core.count.call(null,line) > (1))){
var seq__9006_9045 = cljs.core.seq.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,line) - (1))));
var chunk__9007_9046 = null;
var count__9008_9047 = (0);
var i__9009_9048 = (0);
while(true){
if((i__9009_9048 < count__9008_9047)){
var i_9049 = cljs.core._nth.call(null,chunk__9007_9046,i__9009_9048);
var p1_9050 = cljs.core.nth.call(null,line,i_9049);
var p2_9051 = cljs.core.nth.call(null,line,(i_9049 + (1)));
var width_9052 = ((new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p1_9050) + new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p2_9051)) * ((20) * (2)));
ctx.lineWidth = (width_9052 * (2));

ctx.strokeStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p1_9050);

ctx.beginPath();

ctx.moveTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1_9050) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1_9050) * (2)));

ctx.lineTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2_9051) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2_9051) * (2)));

ctx.stroke();

var G__9053 = seq__9006_9045;
var G__9054 = chunk__9007_9046;
var G__9055 = count__9008_9047;
var G__9056 = (i__9009_9048 + (1));
seq__9006_9045 = G__9053;
chunk__9007_9046 = G__9054;
count__9008_9047 = G__9055;
i__9009_9048 = G__9056;
continue;
} else {
var temp__4126__auto___9057__$1 = cljs.core.seq.call(null,seq__9006_9045);
if(temp__4126__auto___9057__$1){
var seq__9006_9058__$1 = temp__4126__auto___9057__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9006_9058__$1)){
var c__3511__auto___9059 = cljs.core.chunk_first.call(null,seq__9006_9058__$1);
var G__9060 = cljs.core.chunk_rest.call(null,seq__9006_9058__$1);
var G__9061 = c__3511__auto___9059;
var G__9062 = cljs.core.count.call(null,c__3511__auto___9059);
var G__9063 = (0);
seq__9006_9045 = G__9060;
chunk__9007_9046 = G__9061;
count__9008_9047 = G__9062;
i__9009_9048 = G__9063;
continue;
} else {
var i_9064 = cljs.core.first.call(null,seq__9006_9058__$1);
var p1_9065 = cljs.core.nth.call(null,line,i_9064);
var p2_9066 = cljs.core.nth.call(null,line,(i_9064 + (1)));
var width_9067 = ((new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p1_9065) + new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p2_9066)) * ((20) * (2)));
ctx.lineWidth = (width_9067 * (2));

ctx.strokeStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p1_9065);

ctx.beginPath();

ctx.moveTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1_9065) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1_9065) * (2)));

ctx.lineTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2_9066) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2_9066) * (2)));

ctx.stroke();

var G__9068 = cljs.core.next.call(null,seq__9006_9058__$1);
var G__9069 = null;
var G__9070 = (0);
var G__9071 = (0);
seq__9006_9045 = G__9068;
chunk__9007_9046 = G__9069;
count__9008_9047 = G__9070;
i__9009_9048 = G__9071;
continue;
}
} else {
}
}
break;
}
} else {
}

var G__9072 = cljs.core.next.call(null,seq__8998__$1);
var G__9073 = null;
var G__9074 = (0);
var G__9075 = (0);
seq__8998 = G__9072;
chunk__8999 = G__9073;
count__9000 = G__9074;
i__9001 = G__9075;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_draw.core.ctx = null;
cljs_draw.core.render_loop = (function cljs_draw$core$render_loop(){
cljs_draw.core.render.call(null,cljs_draw.core.ctx);

return requestAnimationFrame(cljs_draw$core$render_loop);
});
cljs_draw.core.debug = (function cljs_draw$core$debug(x){
console.log(cljs.core.type.call(null,x),x);

return x;
});
cljs_draw.core.color_input = (function cljs_draw$core$color_input(data,owner){
if(typeof cljs_draw.core.t9079 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t9079 = (function (owner,data,color_input,meta9080){
this.owner = owner;
this.data = data;
this.color_input = color_input;
this.meta9080 = meta9080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_draw.core.t9079.prototype.om$core$IRender$ = true;

cljs_draw.core.t9079.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"style": {"border": (0), "height": (50), "width": (50)}, "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "type": "color"});
});

cljs_draw.core.t9079.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t9079.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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

cljs_draw.core.t9079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9081){
var self__ = this;
var _9081__$1 = this;
return self__.meta9080;
});

cljs_draw.core.t9079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9081,meta9080__$1){
var self__ = this;
var _9081__$1 = this;
return (new cljs_draw.core.t9079(self__.owner,self__.data,self__.color_input,meta9080__$1));
});

cljs_draw.core.t9079.cljs$lang$type = true;

cljs_draw.core.t9079.cljs$lang$ctorStr = "cljs_draw.core/t9079";

cljs_draw.core.t9079.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs_draw.core/t9079");
});

cljs_draw.core.__GT_t9079 = (function cljs_draw$core$color_input_$___GT_t9079(owner__$1,data__$1,color_input__$1,meta9080){
return (new cljs_draw.core.t9079(owner__$1,data__$1,color_input__$1,meta9080));
});

}

return (new cljs_draw.core.t9079(owner,data,cljs_draw$core$color_input,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_chooser = (function cljs_draw$core$color_chooser(data){
return cljs.core.apply.call(null,om.dom.div,{"style": {"flexDirection": "column", "display": "flex", "width": (50)}, "className": "color-chooser"},cljs.core.conj.call(null,cljs.core.mapv.call(null,(function (color){
return React.DOM.div({"style": {"border": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(data),color))?"3px solid white":""), "backgroundColor": color, "cursor": "pointer", "flex": "0 0 50px"}, "onClick": (function (){
return om.core.transact_BANG_.call(null,data,(function (xs){
return cljs.core.assoc.call(null,xs,new cljs.core.Keyword(null,"current-color","current-color",1731984119),color,new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673),color);
}));
})});
}),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(data)),React.DOM.div({"style": {"textAlign": "center", "flex": (0)}},om.core.build.call(null,cljs_draw.core.color_input,data))));
});
cljs_draw.core.app = (function cljs_draw$core$app(data,owner){
if(typeof cljs_draw.core.t9105 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t9105 = (function (owner,data,app,meta9106){
this.owner = owner;
this.data = data;
this.app = app;
this.meta9106 = meta9106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_draw.core.t9105.prototype.om$core$IRender$ = true;

cljs_draw.core.t9105.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"style": {"height": "100%", "display": "flex"}, "id": "app"},React.DOM.div({"style": {"overflow": "hidden", "display": "flex", "backgroundColor": "black", "flex": (1)}, "className": "canvas-container"},(function (){var style = {"cursor": "crosshair", "transformOrigin": "0 0", "transform": "scale(.5)", "left": (0), "top": (0), "position": "absolute"};
return [React.DOM.canvas({"style": style}),React.DOM.canvas({"style": style})];
})()),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t9105.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t9105.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvases = cljs.core.array_seq.call(null,node.querySelectorAll("canvas"));
cljs_draw.core.set_canvas_sizes_BANG_.call(null,container,canvases);

cljs_draw.core.ctx = cljs.core.first.call(null,canvases).getContext("2d");

cljs_draw.core.render_loop.call(null);

var resized = cljs_draw.util.listen.call(null,window,"resize");
var c__1902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto__,resized,node,container,canvases,this$__$1){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto__,resized,node,container,canvases,this$__$1){
return (function (state_9116){
var state_val_9117 = (state_9116[(1)]);
if((state_val_9117 === (4))){
var inst_9110 = (state_9116[(2)]);
var inst_9111 = cljs_draw.core.set_canvas_sizes_BANG_.call(null,container,canvases);
var state_9116__$1 = (function (){var statearr_9118 = state_9116;
(statearr_9118[(7)] = inst_9111);

(statearr_9118[(8)] = inst_9110);

return statearr_9118;
})();
var statearr_9119_9128 = state_9116__$1;
(statearr_9119_9128[(2)] = null);

(statearr_9119_9128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9117 === (3))){
var inst_9114 = (state_9116[(2)]);
var state_9116__$1 = state_9116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9116__$1,inst_9114);
} else {
if((state_val_9117 === (2))){
var state_9116__$1 = state_9116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9116__$1,(4),resized);
} else {
if((state_val_9117 === (1))){
var state_9116__$1 = state_9116;
var statearr_9120_9129 = state_9116__$1;
(statearr_9120_9129[(2)] = null);

(statearr_9120_9129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__1902__auto__,resized,node,container,canvases,this$__$1))
;
return ((function (switch__1881__auto__,c__1902__auto__,resized,node,container,canvases,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__1882__auto__ = null;
var cljs_draw$core$app_$_state_machine__1882__auto____0 = (function (){
var statearr_9124 = [null,null,null,null,null,null,null,null,null];
(statearr_9124[(0)] = cljs_draw$core$app_$_state_machine__1882__auto__);

(statearr_9124[(1)] = (1));

return statearr_9124;
});
var cljs_draw$core$app_$_state_machine__1882__auto____1 = (function (state_9116){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_9116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e9125){if((e9125 instanceof Object)){
var ex__1885__auto__ = e9125;
var statearr_9126_9130 = state_9116;
(statearr_9126_9130[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9131 = state_9116;
state_9116 = G__9131;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__1882__auto__ = function(state_9116){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__1882__auto____1.call(this,state_9116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__1882__auto____0;
cljs_draw$core$app_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__1882__auto____1;
return cljs_draw$core$app_$_state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto__,resized,node,container,canvases,this$__$1))
})();
var state__1904__auto__ = (function (){var statearr_9127 = f__1903__auto__.call(null);
(statearr_9127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto__);

return statearr_9127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto__,resized,node,container,canvases,this$__$1))
);

return c__1902__auto__;
});

cljs_draw.core.t9105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9107){
var self__ = this;
var _9107__$1 = this;
return self__.meta9106;
});

cljs_draw.core.t9105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9107,meta9106__$1){
var self__ = this;
var _9107__$1 = this;
return (new cljs_draw.core.t9105(self__.owner,self__.data,self__.app,meta9106__$1));
});

cljs_draw.core.t9105.cljs$lang$type = true;

cljs_draw.core.t9105.cljs$lang$ctorStr = "cljs_draw.core/t9105";

cljs_draw.core.t9105.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs_draw.core/t9105");
});

cljs_draw.core.__GT_t9105 = (function cljs_draw$core$app_$___GT_t9105(owner__$1,data__$1,app__$1,meta9106){
return (new cljs_draw.core.t9105(owner__$1,data__$1,app__$1,meta9106));
});

}

return (new cljs_draw.core.t9105(owner,data,cljs_draw$core$app,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map