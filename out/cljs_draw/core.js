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
cljs_draw.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green","blue","pink"], null),new cljs.core.Keyword(null,"current-color","current-color",1731984119),"green"], null));
}
cljs_draw.core.set_canvas_size_BANG_ = (function cljs_draw$core$set_canvas_size_BANG_(el,canvas){
var rect = el.getBoundingClientRect();
canvas.width = rect.width;

return canvas.height = rect.height;
});
cljs_draw.core.points = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_draw.core.moved = cljs_draw.util.listen.call(null,window,"pointermove");
cljs.core.async.close_BANG_.call(null,cljs_draw.core.moved);

cljs_draw.core.moved = cljs_draw.util.listen.call(null,window,"pointermove");

var c__1902__auto___8477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto___8477){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto___8477){
return (function (state_8451){
var state_val_8452 = (state_8451[(1)]);
if((state_val_8452 === (7))){
var inst_8447 = (state_8451[(2)]);
var state_8451__$1 = state_8451;
var statearr_8453_8478 = state_8451__$1;
(statearr_8453_8478[(2)] = inst_8447);

(statearr_8453_8478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (1))){
var state_8451__$1 = state_8451;
var statearr_8454_8479 = state_8451__$1;
(statearr_8454_8479[(2)] = null);

(statearr_8454_8479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (4))){
var inst_8418 = (state_8451[(7)]);
var inst_8418__$1 = (state_8451[(2)]);
var state_8451__$1 = (function (){var statearr_8455 = state_8451;
(statearr_8455[(7)] = inst_8418__$1);

return statearr_8455;
})();
if(cljs.core.truth_(inst_8418__$1)){
var statearr_8456_8480 = state_8451__$1;
(statearr_8456_8480[(1)] = (5));

} else {
var statearr_8457_8481 = state_8451__$1;
(statearr_8457_8481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (13))){
var inst_8428 = (state_8451[(8)]);
var inst_8427 = (state_8451[(9)]);
var inst_8426 = (state_8451[(10)]);
var inst_8435 = (state_8451[(2)]);
var inst_8436 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_8437 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_8436);
var inst_8438 = [inst_8427,inst_8428,inst_8435,inst_8437];
var inst_8439 = cljs.core.PersistentHashMap.fromArrays(inst_8426,inst_8438);
var inst_8440 = cljs.core.swap_BANG_.call(null,cljs_draw.core.points,cljs.core.conj,inst_8439);
var state_8451__$1 = state_8451;
var statearr_8458_8482 = state_8451__$1;
(statearr_8458_8482[(2)] = inst_8440);

(statearr_8458_8482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (6))){
var state_8451__$1 = state_8451;
var statearr_8459_8483 = state_8451__$1;
(statearr_8459_8483[(2)] = null);

(statearr_8459_8483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (3))){
var inst_8449 = (state_8451[(2)]);
var state_8451__$1 = state_8451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8451__$1,inst_8449);
} else {
if((state_val_8452 === (12))){
var inst_8418 = (state_8451[(7)]);
var inst_8433 = inst_8418.mozPressure;
var state_8451__$1 = state_8451;
var statearr_8460_8484 = state_8451__$1;
(statearr_8460_8484[(2)] = inst_8433);

(statearr_8460_8484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (2))){
var state_8451__$1 = state_8451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8451__$1,(4),cljs_draw.core.moved);
} else {
if((state_val_8452 === (11))){
var state_8451__$1 = state_8451;
var statearr_8461_8485 = state_8451__$1;
(statearr_8461_8485[(2)] = (1));

(statearr_8461_8485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (9))){
var state_8451__$1 = state_8451;
var statearr_8462_8486 = state_8451__$1;
(statearr_8462_8486[(2)] = null);

(statearr_8462_8486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (5))){
var inst_8418 = (state_8451[(7)]);
var inst_8420 = inst_8418.pointerType;
var inst_8421 = cljs.core._EQ_.call(null,inst_8420,"mouse");
var inst_8422 = inst_8418.mozPressure;
var inst_8423 = cljs.core.not_EQ_.call(null,inst_8422,.5);
var inst_8424 = (inst_8421) || (inst_8423);
var state_8451__$1 = state_8451;
if(cljs.core.truth_(inst_8424)){
var statearr_8463_8487 = state_8451__$1;
(statearr_8463_8487[(1)] = (8));

} else {
var statearr_8464_8488 = state_8451__$1;
(statearr_8464_8488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (10))){
var inst_8443 = (state_8451[(2)]);
var state_8451__$1 = (function (){var statearr_8465 = state_8451;
(statearr_8465[(11)] = inst_8443);

return statearr_8465;
})();
var statearr_8466_8489 = state_8451__$1;
(statearr_8466_8489[(2)] = null);

(statearr_8466_8489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (8))){
var inst_8418 = (state_8451[(7)]);
var inst_8426 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"color","color",1011675173)];
var inst_8427 = inst_8418.clientX;
var inst_8428 = inst_8418.clientY;
var inst_8429 = inst_8418.pointerType;
var inst_8430 = cljs.core._EQ_.call(null,inst_8429,"mouse");
var state_8451__$1 = (function (){var statearr_8467 = state_8451;
(statearr_8467[(8)] = inst_8428);

(statearr_8467[(9)] = inst_8427);

(statearr_8467[(10)] = inst_8426);

return statearr_8467;
})();
if(inst_8430){
var statearr_8468_8490 = state_8451__$1;
(statearr_8468_8490[(1)] = (11));

} else {
var statearr_8469_8491 = state_8451__$1;
(statearr_8469_8491[(1)] = (12));

}

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
});})(c__1902__auto___8477))
;
return ((function (switch__1881__auto__,c__1902__auto___8477){
return (function() {
var cljs_draw$core$state_machine__1882__auto__ = null;
var cljs_draw$core$state_machine__1882__auto____0 = (function (){
var statearr_8473 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8473[(0)] = cljs_draw$core$state_machine__1882__auto__);

(statearr_8473[(1)] = (1));

return statearr_8473;
});
var cljs_draw$core$state_machine__1882__auto____1 = (function (state_8451){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_8451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e8474){if((e8474 instanceof Object)){
var ex__1885__auto__ = e8474;
var statearr_8475_8492 = state_8451;
(statearr_8475_8492[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8493 = state_8451;
state_8451 = G__8493;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$state_machine__1882__auto__ = function(state_8451){
switch(arguments.length){
case 0:
return cljs_draw$core$state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$state_machine__1882__auto____1.call(this,state_8451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$state_machine__1882__auto____0;
cljs_draw$core$state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$state_machine__1882__auto____1;
return cljs_draw$core$state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto___8477))
})();
var state__1904__auto__ = (function (){var statearr_8476 = f__1903__auto__.call(null);
(statearr_8476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto___8477);

return statearr_8476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto___8477))
);

cljs_draw.core.render = (function cljs_draw$core$render(ctx){
var seq__8498 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs_draw.core.points));
var chunk__8499 = null;
var count__8500 = (0);
var i__8501 = (0);
while(true){
if((i__8501 < count__8500)){
var p = cljs.core._nth.call(null,chunk__8499,i__8501);
var width_8502 = (new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p) * (20));
ctx.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);

ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),width_8502,width_8502);

var G__8503 = seq__8498;
var G__8504 = chunk__8499;
var G__8505 = count__8500;
var G__8506 = (i__8501 + (1));
seq__8498 = G__8503;
chunk__8499 = G__8504;
count__8500 = G__8505;
i__8501 = G__8506;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8498);
if(temp__4126__auto__){
var seq__8498__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8498__$1)){
var c__3511__auto__ = cljs.core.chunk_first.call(null,seq__8498__$1);
var G__8507 = cljs.core.chunk_rest.call(null,seq__8498__$1);
var G__8508 = c__3511__auto__;
var G__8509 = cljs.core.count.call(null,c__3511__auto__);
var G__8510 = (0);
seq__8498 = G__8507;
chunk__8499 = G__8508;
count__8500 = G__8509;
i__8501 = G__8510;
continue;
} else {
var p = cljs.core.first.call(null,seq__8498__$1);
var width_8511 = (new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p) * (20));
ctx.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);

ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),width_8511,width_8511);

var G__8512 = cljs.core.next.call(null,seq__8498__$1);
var G__8513 = null;
var G__8514 = (0);
var G__8515 = (0);
seq__8498 = G__8512;
chunk__8499 = G__8513;
count__8500 = G__8514;
i__8501 = G__8515;
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
cljs_draw.core.color_chooser = (function cljs_draw$core$color_chooser(data){
return cljs.core.apply.call(null,om.dom.div,{"style": {"flexDirection": "column", "display": "flex", "width": (300)}, "className": "color-chooser"},cljs.core.map.call(null,(function (color){
return React.DOM.div({"style": {"backgroundColor": color, "cursor": "pointer", "width": "100%", "flex": (1)}, "onClick": (function (){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"current-color","current-color",1731984119),(function (xs){
return color;
}));
})});
}),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(data)));
});
cljs_draw.core.app = (function cljs_draw$core$app(data,owner){
if(typeof cljs_draw.core.t8539 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t8539 = (function (owner,data,app,meta8540){
this.owner = owner;
this.data = data;
this.app = app;
this.meta8540 = meta8540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_draw.core.t8539.prototype.om$core$IRender$ = true;

cljs_draw.core.t8539.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"style": {"height": "100%", "display": "flex"}, "id": "app"},React.DOM.div({"style": {"overflow": "hidden", "display": "flex", "backgroundColor": "black", "flex": (1)}, "className": "canvas-container"},React.DOM.canvas(null)),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t8539.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t8539.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvas = node.querySelector("canvas");
cljs_draw.core.set_canvas_size_BANG_.call(null,container,canvas);

cljs_draw.core.render_loop.call(null,canvas);

var resized = cljs_draw.util.listen.call(null,window,"resize");
var c__1902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto__,resized,node,container,canvas,this$__$1){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto__,resized,node,container,canvas,this$__$1){
return (function (state_8550){
var state_val_8551 = (state_8550[(1)]);
if((state_val_8551 === (4))){
var inst_8544 = (state_8550[(2)]);
var inst_8545 = cljs_draw.core.set_canvas_size_BANG_.call(null,container,canvas);
var state_8550__$1 = (function (){var statearr_8552 = state_8550;
(statearr_8552[(7)] = inst_8544);

(statearr_8552[(8)] = inst_8545);

return statearr_8552;
})();
var statearr_8553_8562 = state_8550__$1;
(statearr_8553_8562[(2)] = null);

(statearr_8553_8562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8551 === (3))){
var inst_8548 = (state_8550[(2)]);
var state_8550__$1 = state_8550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8550__$1,inst_8548);
} else {
if((state_val_8551 === (2))){
var state_8550__$1 = state_8550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8550__$1,(4),resized);
} else {
if((state_val_8551 === (1))){
var state_8550__$1 = state_8550;
var statearr_8554_8563 = state_8550__$1;
(statearr_8554_8563[(2)] = null);

(statearr_8554_8563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__1902__auto__,resized,node,container,canvas,this$__$1))
;
return ((function (switch__1881__auto__,c__1902__auto__,resized,node,container,canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__1882__auto__ = null;
var cljs_draw$core$app_$_state_machine__1882__auto____0 = (function (){
var statearr_8558 = [null,null,null,null,null,null,null,null,null];
(statearr_8558[(0)] = cljs_draw$core$app_$_state_machine__1882__auto__);

(statearr_8558[(1)] = (1));

return statearr_8558;
});
var cljs_draw$core$app_$_state_machine__1882__auto____1 = (function (state_8550){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_8550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e8559){if((e8559 instanceof Object)){
var ex__1885__auto__ = e8559;
var statearr_8560_8564 = state_8550;
(statearr_8560_8564[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8565 = state_8550;
state_8550 = G__8565;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__1882__auto__ = function(state_8550){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__1882__auto____1.call(this,state_8550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__1882__auto____0;
cljs_draw$core$app_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__1882__auto____1;
return cljs_draw$core$app_$_state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto__,resized,node,container,canvas,this$__$1))
})();
var state__1904__auto__ = (function (){var statearr_8561 = f__1903__auto__.call(null);
(statearr_8561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto__);

return statearr_8561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto__,resized,node,container,canvas,this$__$1))
);

return c__1902__auto__;
});

cljs_draw.core.t8539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8541){
var self__ = this;
var _8541__$1 = this;
return self__.meta8540;
});

cljs_draw.core.t8539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8541,meta8540__$1){
var self__ = this;
var _8541__$1 = this;
return (new cljs_draw.core.t8539(self__.owner,self__.data,self__.app,meta8540__$1));
});

cljs_draw.core.t8539.cljs$lang$type = true;

cljs_draw.core.t8539.cljs$lang$ctorStr = "cljs_draw.core/t8539";

cljs_draw.core.t8539.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs_draw.core/t8539");
});

cljs_draw.core.__GT_t8539 = (function cljs_draw$core$app_$___GT_t8539(owner__$1,data__$1,app__$1,meta8540){
return (new cljs_draw.core.t8539(owner__$1,data__$1,app__$1,meta8540));
});

}

return (new cljs_draw.core.t8539(owner,data,cljs_draw$core$app,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map