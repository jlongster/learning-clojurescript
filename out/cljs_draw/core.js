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

var c__1902__auto___8755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto___8755){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto___8755){
return (function (state_8734){
var state_val_8735 = (state_8734[(1)]);
if((state_val_8735 === (7))){
var inst_8730 = (state_8734[(2)]);
var state_8734__$1 = state_8734;
var statearr_8736_8756 = state_8734__$1;
(statearr_8736_8756[(2)] = inst_8730);

(statearr_8736_8756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8735 === (1))){
var state_8734__$1 = state_8734;
var statearr_8737_8757 = state_8734__$1;
(statearr_8737_8757[(2)] = null);

(statearr_8737_8757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8735 === (4))){
var inst_8707 = (state_8734[(7)]);
var inst_8707__$1 = (state_8734[(2)]);
var state_8734__$1 = (function (){var statearr_8738 = state_8734;
(statearr_8738[(7)] = inst_8707__$1);

return statearr_8738;
})();
if(cljs.core.truth_(inst_8707__$1)){
var statearr_8739_8758 = state_8734__$1;
(statearr_8739_8758[(1)] = (5));

} else {
var statearr_8740_8759 = state_8734__$1;
(statearr_8740_8759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8735 === (6))){
var state_8734__$1 = state_8734;
var statearr_8741_8760 = state_8734__$1;
(statearr_8741_8760[(2)] = null);

(statearr_8741_8760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8735 === (3))){
var inst_8732 = (state_8734[(2)]);
var state_8734__$1 = state_8734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8734__$1,inst_8732);
} else {
if((state_val_8735 === (2))){
var state_8734__$1 = state_8734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8734__$1,(4),cljs_draw.core.moved);
} else {
if((state_val_8735 === (9))){
var state_8734__$1 = state_8734;
var statearr_8742_8761 = state_8734__$1;
(statearr_8742_8761[(2)] = null);

(statearr_8742_8761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8735 === (5))){
var inst_8707 = (state_8734[(7)]);
var inst_8709 = inst_8707.pointerType;
var inst_8710 = cljs.core._EQ_.call(null,inst_8709,"mouse");
var inst_8711 = inst_8707.mozPressure;
var inst_8712 = cljs.core.not_EQ_.call(null,inst_8711,.5);
var inst_8713 = (inst_8710) || (inst_8712);
var state_8734__$1 = state_8734;
if(cljs.core.truth_(inst_8713)){
var statearr_8743_8762 = state_8734__$1;
(statearr_8743_8762[(1)] = (8));

} else {
var statearr_8744_8763 = state_8734__$1;
(statearr_8744_8763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8735 === (10))){
var inst_8726 = (state_8734[(2)]);
var state_8734__$1 = (function (){var statearr_8745 = state_8734;
(statearr_8745[(8)] = inst_8726);

return statearr_8745;
})();
var statearr_8746_8764 = state_8734__$1;
(statearr_8746_8764[(2)] = null);

(statearr_8746_8764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8735 === (8))){
var inst_8707 = (state_8734[(7)]);
var inst_8715 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"color","color",1011675173)];
var inst_8716 = inst_8707.clientX;
var inst_8717 = inst_8707.clientY;
var inst_8718 = inst_8707.mozPressure;
var inst_8719 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_8720 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_8719);
var inst_8721 = [inst_8716,inst_8717,inst_8718,inst_8720];
var inst_8722 = cljs.core.PersistentHashMap.fromArrays(inst_8715,inst_8721);
var inst_8723 = cljs.core.swap_BANG_.call(null,cljs_draw.core.points,cljs.core.conj,inst_8722);
var state_8734__$1 = state_8734;
var statearr_8747_8765 = state_8734__$1;
(statearr_8747_8765[(2)] = inst_8723);

(statearr_8747_8765[(1)] = (10));


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
});})(c__1902__auto___8755))
;
return ((function (switch__1881__auto__,c__1902__auto___8755){
return (function() {
var cljs_draw$core$state_machine__1882__auto__ = null;
var cljs_draw$core$state_machine__1882__auto____0 = (function (){
var statearr_8751 = [null,null,null,null,null,null,null,null,null];
(statearr_8751[(0)] = cljs_draw$core$state_machine__1882__auto__);

(statearr_8751[(1)] = (1));

return statearr_8751;
});
var cljs_draw$core$state_machine__1882__auto____1 = (function (state_8734){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_8734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e8752){if((e8752 instanceof Object)){
var ex__1885__auto__ = e8752;
var statearr_8753_8766 = state_8734;
(statearr_8753_8766[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8767 = state_8734;
state_8734 = G__8767;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$state_machine__1882__auto__ = function(state_8734){
switch(arguments.length){
case 0:
return cljs_draw$core$state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$state_machine__1882__auto____1.call(this,state_8734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$state_machine__1882__auto____0;
cljs_draw$core$state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$state_machine__1882__auto____1;
return cljs_draw$core$state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto___8755))
})();
var state__1904__auto__ = (function (){var statearr_8754 = f__1903__auto__.call(null);
(statearr_8754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto___8755);

return statearr_8754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto___8755))
);

cljs_draw.core.render = (function cljs_draw$core$render(ctx){
var seq__8772 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs_draw.core.points));
var chunk__8773 = null;
var count__8774 = (0);
var i__8775 = (0);
while(true){
if((i__8775 < count__8774)){
var p = cljs.core._nth.call(null,chunk__8773,i__8775);
var width_8776 = (new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p) * (20));
ctx.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);

ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),width_8776,width_8776);

var G__8777 = seq__8772;
var G__8778 = chunk__8773;
var G__8779 = count__8774;
var G__8780 = (i__8775 + (1));
seq__8772 = G__8777;
chunk__8773 = G__8778;
count__8774 = G__8779;
i__8775 = G__8780;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8772);
if(temp__4126__auto__){
var seq__8772__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8772__$1)){
var c__3511__auto__ = cljs.core.chunk_first.call(null,seq__8772__$1);
var G__8781 = cljs.core.chunk_rest.call(null,seq__8772__$1);
var G__8782 = c__3511__auto__;
var G__8783 = cljs.core.count.call(null,c__3511__auto__);
var G__8784 = (0);
seq__8772 = G__8781;
chunk__8773 = G__8782;
count__8774 = G__8783;
i__8775 = G__8784;
continue;
} else {
var p = cljs.core.first.call(null,seq__8772__$1);
var width_8785 = (new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p) * (20));
ctx.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);

ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),width_8785,width_8785);

var G__8786 = cljs.core.next.call(null,seq__8772__$1);
var G__8787 = null;
var G__8788 = (0);
var G__8789 = (0);
seq__8772 = G__8786;
chunk__8773 = G__8787;
count__8774 = G__8788;
i__8775 = G__8789;
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
if(typeof cljs_draw.core.t8813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t8813 = (function (owner,data,app,meta8814){
this.owner = owner;
this.data = data;
this.app = app;
this.meta8814 = meta8814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_draw.core.t8813.prototype.om$core$IRender$ = true;

cljs_draw.core.t8813.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"style": {"height": "100%", "display": "flex"}, "id": "app"},React.DOM.div({"style": {"overflow": "hidden", "display": "flex", "backgroundColor": "black", "flex": (1)}, "className": "canvas-container"},React.DOM.canvas(null)),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t8813.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t8813.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
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
return (function (state_8824){
var state_val_8825 = (state_8824[(1)]);
if((state_val_8825 === (4))){
var inst_8818 = (state_8824[(2)]);
var inst_8819 = cljs_draw.core.set_canvas_size_BANG_.call(null,container,canvas);
var state_8824__$1 = (function (){var statearr_8826 = state_8824;
(statearr_8826[(7)] = inst_8818);

(statearr_8826[(8)] = inst_8819);

return statearr_8826;
})();
var statearr_8827_8836 = state_8824__$1;
(statearr_8827_8836[(2)] = null);

(statearr_8827_8836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8825 === (3))){
var inst_8822 = (state_8824[(2)]);
var state_8824__$1 = state_8824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8824__$1,inst_8822);
} else {
if((state_val_8825 === (2))){
var state_8824__$1 = state_8824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8824__$1,(4),resized);
} else {
if((state_val_8825 === (1))){
var state_8824__$1 = state_8824;
var statearr_8828_8837 = state_8824__$1;
(statearr_8828_8837[(2)] = null);

(statearr_8828_8837[(1)] = (2));


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
var statearr_8832 = [null,null,null,null,null,null,null,null,null];
(statearr_8832[(0)] = cljs_draw$core$app_$_state_machine__1882__auto__);

(statearr_8832[(1)] = (1));

return statearr_8832;
});
var cljs_draw$core$app_$_state_machine__1882__auto____1 = (function (state_8824){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_8824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e8833){if((e8833 instanceof Object)){
var ex__1885__auto__ = e8833;
var statearr_8834_8838 = state_8824;
(statearr_8834_8838[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8839 = state_8824;
state_8824 = G__8839;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__1882__auto__ = function(state_8824){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__1882__auto____1.call(this,state_8824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__1882__auto____0;
cljs_draw$core$app_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__1882__auto____1;
return cljs_draw$core$app_$_state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto__,resized,node,container,canvas,this$__$1))
})();
var state__1904__auto__ = (function (){var statearr_8835 = f__1903__auto__.call(null);
(statearr_8835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto__);

return statearr_8835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto__,resized,node,container,canvas,this$__$1))
);

return c__1902__auto__;
});

cljs_draw.core.t8813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8815){
var self__ = this;
var _8815__$1 = this;
return self__.meta8814;
});

cljs_draw.core.t8813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8815,meta8814__$1){
var self__ = this;
var _8815__$1 = this;
return (new cljs_draw.core.t8813(self__.owner,self__.data,self__.app,meta8814__$1));
});

cljs_draw.core.t8813.cljs$lang$type = true;

cljs_draw.core.t8813.cljs$lang$ctorStr = "cljs_draw.core/t8813";

cljs_draw.core.t8813.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs_draw.core/t8813");
});

cljs_draw.core.__GT_t8813 = (function cljs_draw$core$app_$___GT_t8813(owner__$1,data__$1,app__$1,meta8814){
return (new cljs_draw.core.t8813(owner__$1,data__$1,app__$1,meta8814));
});

}

return (new cljs_draw.core.t8813(owner,data,cljs_draw$core$app,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map