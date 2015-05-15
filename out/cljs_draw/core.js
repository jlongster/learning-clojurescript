// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_draw.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs_draw.util');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
cljs_draw.core.set_canvas_size_BANG_ = (function cljs_draw$core$set_canvas_size_BANG_(canvas){
var rect = canvas.getBoundingClientRect();
canvas.width = rect.width;

return canvas.height = rect.height;
});
cljs_draw.core.points = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var moved_4974 = cljs_draw.util.listen.call(null,window,"pointermove");
var c__2657__auto___4975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2657__auto___4975,moved_4974){
return (function (){
var f__2658__auto__ = (function (){var switch__2636__auto__ = ((function (c__2657__auto___4975,moved_4974){
return (function (state_4952){
var state_val_4953 = (state_4952[(1)]);
if((state_val_4953 === (7))){
var inst_4947 = (state_4952[(2)]);
var state_4952__$1 = (function (){var statearr_4954 = state_4952;
(statearr_4954[(7)] = inst_4947);

return statearr_4954;
})();
var statearr_4955_4976 = state_4952__$1;
(statearr_4955_4976[(2)] = null);

(statearr_4955_4976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4953 === (1))){
var state_4952__$1 = state_4952;
var statearr_4956_4977 = state_4952__$1;
(statearr_4956_4977[(2)] = null);

(statearr_4956_4977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4953 === (4))){
var inst_4925 = (state_4952[(8)]);
var inst_4925__$1 = (state_4952[(2)]);
var inst_4926 = inst_4925__$1.pointerType;
var inst_4927 = cljs.core._EQ_.call(null,inst_4926,"mouse");
var inst_4928 = inst_4925__$1.mozPressure;
var inst_4929 = cljs.core.not_EQ_.call(null,inst_4928,.5);
var inst_4930 = (inst_4927) || (inst_4929);
var state_4952__$1 = (function (){var statearr_4957 = state_4952;
(statearr_4957[(8)] = inst_4925__$1);

return statearr_4957;
})();
if(cljs.core.truth_(inst_4930)){
var statearr_4958_4978 = state_4952__$1;
(statearr_4958_4978[(1)] = (5));

} else {
var statearr_4959_4979 = state_4952__$1;
(statearr_4959_4979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4953 === (6))){
var state_4952__$1 = state_4952;
var statearr_4960_4980 = state_4952__$1;
(statearr_4960_4980[(2)] = null);

(statearr_4960_4980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4953 === (3))){
var inst_4950 = (state_4952[(2)]);
var state_4952__$1 = state_4952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4952__$1,inst_4950);
} else {
if((state_val_4953 === (2))){
var state_4952__$1 = state_4952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4952__$1,(4),moved_4974);
} else {
if((state_val_4953 === (9))){
var inst_4925 = (state_4952[(8)]);
var inst_4939 = inst_4925.mozPressure;
var state_4952__$1 = state_4952;
var statearr_4961_4981 = state_4952__$1;
(statearr_4961_4981[(2)] = inst_4939);

(statearr_4961_4981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4953 === (5))){
var inst_4925 = (state_4952[(8)]);
var inst_4932 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"pressure","pressure",505343747)];
var inst_4933 = inst_4925.clientX;
var inst_4934 = inst_4925.clientY;
var inst_4935 = inst_4925.pointerType;
var inst_4936 = cljs.core._EQ_.call(null,inst_4935,"mouse");
var state_4952__$1 = (function (){var statearr_4962 = state_4952;
(statearr_4962[(9)] = inst_4932);

(statearr_4962[(10)] = inst_4934);

(statearr_4962[(11)] = inst_4933);

return statearr_4962;
})();
if(inst_4936){
var statearr_4963_4982 = state_4952__$1;
(statearr_4963_4982[(1)] = (8));

} else {
var statearr_4964_4983 = state_4952__$1;
(statearr_4964_4983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4953 === (10))){
var inst_4932 = (state_4952[(9)]);
var inst_4934 = (state_4952[(10)]);
var inst_4933 = (state_4952[(11)]);
var inst_4941 = (state_4952[(2)]);
var inst_4942 = [inst_4933,inst_4934,inst_4941];
var inst_4943 = cljs.core.PersistentHashMap.fromArrays(inst_4932,inst_4942);
var inst_4944 = cljs.core.swap_BANG_.call(null,cljs_draw.core.points,cljs.core.conj,inst_4943);
var state_4952__$1 = state_4952;
var statearr_4965_4984 = state_4952__$1;
(statearr_4965_4984[(2)] = inst_4944);

(statearr_4965_4984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4953 === (8))){
var state_4952__$1 = state_4952;
var statearr_4966_4985 = state_4952__$1;
(statearr_4966_4985[(2)] = (1));

(statearr_4966_4985[(1)] = (10));


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
});})(c__2657__auto___4975,moved_4974))
;
return ((function (switch__2636__auto__,c__2657__auto___4975,moved_4974){
return (function() {
var cljs_draw$core$state_machine__2637__auto__ = null;
var cljs_draw$core$state_machine__2637__auto____0 = (function (){
var statearr_4970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4970[(0)] = cljs_draw$core$state_machine__2637__auto__);

(statearr_4970[(1)] = (1));

return statearr_4970;
});
var cljs_draw$core$state_machine__2637__auto____1 = (function (state_4952){
while(true){
var ret_value__2638__auto__ = (function (){try{while(true){
var result__2639__auto__ = switch__2636__auto__.call(null,state_4952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2639__auto__;
}
break;
}
}catch (e4971){if((e4971 instanceof Object)){
var ex__2640__auto__ = e4971;
var statearr_4972_4986 = state_4952;
(statearr_4972_4986[(5)] = ex__2640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4987 = state_4952;
state_4952 = G__4987;
continue;
} else {
return ret_value__2638__auto__;
}
break;
}
});
cljs_draw$core$state_machine__2637__auto__ = function(state_4952){
switch(arguments.length){
case 0:
return cljs_draw$core$state_machine__2637__auto____0.call(this);
case 1:
return cljs_draw$core$state_machine__2637__auto____1.call(this,state_4952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$state_machine__2637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$state_machine__2637__auto____0;
cljs_draw$core$state_machine__2637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$state_machine__2637__auto____1;
return cljs_draw$core$state_machine__2637__auto__;
})()
;})(switch__2636__auto__,c__2657__auto___4975,moved_4974))
})();
var state__2659__auto__ = (function (){var statearr_4973 = f__2658__auto__.call(null);
(statearr_4973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2657__auto___4975);

return statearr_4973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2659__auto__);
});})(c__2657__auto___4975,moved_4974))
);

cljs_draw.core.render = (function cljs_draw$core$render(ctx){
ctx.fillStyle = "pink";

var seq__4992 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs_draw.core.points));
var chunk__4993 = null;
var count__4994 = (0);
var i__4995 = (0);
while(true){
if((i__4995 < count__4994)){
var p = cljs.core._nth.call(null,chunk__4993,i__4995);
var width_4996 = (new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p) * (20));
ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),width_4996,width_4996);

var G__4997 = seq__4992;
var G__4998 = chunk__4993;
var G__4999 = count__4994;
var G__5000 = (i__4995 + (1));
seq__4992 = G__4997;
chunk__4993 = G__4998;
count__4994 = G__4999;
i__4995 = G__5000;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__4992);
if(temp__4126__auto__){
var seq__4992__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4992__$1)){
var c__3511__auto__ = cljs.core.chunk_first.call(null,seq__4992__$1);
var G__5001 = cljs.core.chunk_rest.call(null,seq__4992__$1);
var G__5002 = c__3511__auto__;
var G__5003 = cljs.core.count.call(null,c__3511__auto__);
var G__5004 = (0);
seq__4992 = G__5001;
chunk__4993 = G__5002;
count__4994 = G__5003;
i__4995 = G__5004;
continue;
} else {
var p = cljs.core.first.call(null,seq__4992__$1);
var width_5005 = (new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p) * (20));
ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),width_5005,width_5005);

var G__5006 = cljs.core.next.call(null,seq__4992__$1);
var G__5007 = null;
var G__5008 = (0);
var G__5009 = (0);
seq__4992 = G__5006;
chunk__4993 = G__5007;
count__4994 = G__5008;
i__4995 = G__5009;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_draw.core.render_loop = (function cljs_draw$core$render_loop(canvas){
var ctx = canvas.getContext("2d");
return ((function (ctx){
return (function cljs_draw$core$render_loop_$_pump(){
cljs_draw.core.render.call(null,ctx);

return requestAnimationFrame(cljs_draw$core$render_loop_$_pump);
});})(ctx))
.call(null);
});
cljs_draw.core.app = (function cljs_draw$core$app(data,owner){
if(typeof cljs_draw.core.t5033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t5033 = (function (owner,data,app,meta5034){
this.owner = owner;
this.data = data;
this.app = app;
this.meta5034 = meta5034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_draw.core.t5033.prototype.om$core$IRender$ = true;

cljs_draw.core.t5033.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.canvas(null);
});

cljs_draw.core.t5033.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t5033.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var canvas = om.core.get_node.call(null,self__.owner);
cljs_draw.core.set_canvas_size_BANG_.call(null,canvas);

cljs_draw.core.render_loop.call(null,canvas);

var resized = cljs_draw.util.listen.call(null,window,"resize");
var c__2657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2657__auto__,resized,canvas,this$__$1){
return (function (){
var f__2658__auto__ = (function (){var switch__2636__auto__ = ((function (c__2657__auto__,resized,canvas,this$__$1){
return (function (state_5044){
var state_val_5045 = (state_5044[(1)]);
if((state_val_5045 === (4))){
var inst_5038 = (state_5044[(2)]);
var inst_5039 = cljs_draw.core.set_canvas_size_BANG_.call(null,canvas);
var state_5044__$1 = (function (){var statearr_5046 = state_5044;
(statearr_5046[(7)] = inst_5038);

(statearr_5046[(8)] = inst_5039);

return statearr_5046;
})();
var statearr_5047_5056 = state_5044__$1;
(statearr_5047_5056[(2)] = null);

(statearr_5047_5056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5045 === (3))){
var inst_5042 = (state_5044[(2)]);
var state_5044__$1 = state_5044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5044__$1,inst_5042);
} else {
if((state_val_5045 === (2))){
var state_5044__$1 = state_5044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5044__$1,(4),resized);
} else {
if((state_val_5045 === (1))){
var state_5044__$1 = state_5044;
var statearr_5048_5057 = state_5044__$1;
(statearr_5048_5057[(2)] = null);

(statearr_5048_5057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__2657__auto__,resized,canvas,this$__$1))
;
return ((function (switch__2636__auto__,c__2657__auto__,resized,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__2637__auto__ = null;
var cljs_draw$core$app_$_state_machine__2637__auto____0 = (function (){
var statearr_5052 = [null,null,null,null,null,null,null,null,null];
(statearr_5052[(0)] = cljs_draw$core$app_$_state_machine__2637__auto__);

(statearr_5052[(1)] = (1));

return statearr_5052;
});
var cljs_draw$core$app_$_state_machine__2637__auto____1 = (function (state_5044){
while(true){
var ret_value__2638__auto__ = (function (){try{while(true){
var result__2639__auto__ = switch__2636__auto__.call(null,state_5044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2639__auto__;
}
break;
}
}catch (e5053){if((e5053 instanceof Object)){
var ex__2640__auto__ = e5053;
var statearr_5054_5058 = state_5044;
(statearr_5054_5058[(5)] = ex__2640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5059 = state_5044;
state_5044 = G__5059;
continue;
} else {
return ret_value__2638__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__2637__auto__ = function(state_5044){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__2637__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__2637__auto____1.call(this,state_5044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__2637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__2637__auto____0;
cljs_draw$core$app_$_state_machine__2637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__2637__auto____1;
return cljs_draw$core$app_$_state_machine__2637__auto__;
})()
;})(switch__2636__auto__,c__2657__auto__,resized,canvas,this$__$1))
})();
var state__2659__auto__ = (function (){var statearr_5055 = f__2658__auto__.call(null);
(statearr_5055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2657__auto__);

return statearr_5055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2659__auto__);
});})(c__2657__auto__,resized,canvas,this$__$1))
);

return c__2657__auto__;
});

cljs_draw.core.t5033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5035){
var self__ = this;
var _5035__$1 = this;
return self__.meta5034;
});

cljs_draw.core.t5033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5035,meta5034__$1){
var self__ = this;
var _5035__$1 = this;
return (new cljs_draw.core.t5033(self__.owner,self__.data,self__.app,meta5034__$1));
});

cljs_draw.core.t5033.cljs$lang$type = true;

cljs_draw.core.t5033.cljs$lang$ctorStr = "cljs_draw.core/t5033";

cljs_draw.core.t5033.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs_draw.core/t5033");
});

cljs_draw.core.__GT_t5033 = (function cljs_draw$core$app_$___GT_t5033(owner__$1,data__$1,app__$1,meta5034){
return (new cljs_draw.core.t5033(owner__$1,data__$1,app__$1,meta5034));
});

}

return (new cljs_draw.core.t5033(owner,data,cljs_draw$core$app,cljs.core.PersistentArrayMap.EMPTY));
});
if(typeof cljs_draw.core.app_state !== 'undefined'){
} else {
cljs_draw.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello!"], null));
}
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map