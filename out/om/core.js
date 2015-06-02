// Compiled by ClojureScript 0.0-3308 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj14712 = {};
return obj14712;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.display_name[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.display_name["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj14714 = {};
return obj14714;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.init_state[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.init_state["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj14716 = {};
return obj14716;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.should_update[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.should_update["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj14718 = {};
return obj14718;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.will_mount[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.will_mount["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj14720 = {};
return obj14720;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.did_mount[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.did_mount["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj14722 = {};
return obj14722;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.will_unmount[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.will_unmount["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj14724 = {};
return obj14724;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.will_update[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.will_update["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj14726 = {};
return obj14726;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.did_update[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.did_update["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj14728 = {};
return obj14728;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.will_receive_props[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj14730 = {};
return obj14730;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.render[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.render["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj14732 = {};
return obj14732;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.render_props[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.render_props["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj14734 = {};
return obj14734;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core.render_state[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core.render_state["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj14736 = {};
return obj14736;
})();


om.core.IOmSwap = (function (){var obj14738 = {};
return obj14738;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj14740 = {};
return obj14740;
})();

om.core._get_state = (function om$core$_get_state(){
var G__14742 = arguments.length;
switch (G__14742) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._get_state[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._get_state["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._get_state[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._get_state["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


om.core.IGetRenderState = (function (){var obj14745 = {};
return obj14745;
})();

om.core._get_render_state = (function om$core$_get_render_state(){
var G__14747 = arguments.length;
switch (G__14747) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._get_render_state[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._get_render_state["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._get_render_state[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._get_render_state["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


om.core.ISetState = (function (){var obj14750 = {};
return obj14750;
})();

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var G__14752 = arguments.length;
switch (G__14752) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


om.core.IRenderQueue = (function (){var obj14755 = {};
return obj14755;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._get_queue[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._get_queue["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj14757 = {};
return obj14757;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__4941__auto__ = x;
if(and__4941__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4941__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__5589__auto__ = (((x == null))?null:x);
return (function (){var or__4953__auto__ = (om.core._value[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._value["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj14759 = {};
return obj14759;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__4941__auto__ = cursor;
if(and__4941__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4941__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__5589__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4953__auto__ = (om.core._path[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._path["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__4941__auto__ = cursor;
if(and__4941__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4941__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__5589__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4953__auto__ = (om.core._state[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._state["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj14761 = {};
return obj14761;
})();

om.core._to_cursor = (function om$core$_to_cursor(){
var G__14763 = arguments.length;
switch (G__14763) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((function (){var and__4941__auto__ = value;
if(and__4941__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4941__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__5589__auto__ = (((value == null))?null:value);
return (function (){var or__4953__auto__ = (om.core._to_cursor[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._to_cursor["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((function (){var and__4941__auto__ = value;
if(and__4941__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4941__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__5589__auto__ = (((value == null))?null:value);
return (function (){var or__4953__auto__ = (om.core._to_cursor[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._to_cursor["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


om.core.ICursorDerive = (function (){var obj14766 = {};
return obj14766;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__4941__auto__ = cursor;
if(and__4941__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4941__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__5589__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4953__auto__ = (om.core._derive[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._derive["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj14768 = {};
return obj14768;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4941__auto__ = cursor;
if(and__4941__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4941__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__5589__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4953__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj14770 = {};
return obj14770;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__4941__auto__ = x;
if(and__4941__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4941__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__5589__auto__ = (((x == null))?null:x);
return (function (){var or__4953__auto__ = (om.core._listen_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__4941__auto__ = x;
if(and__4941__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__5589__auto__ = (((x == null))?null:x);
return (function (){var or__4953__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4941__auto__ = x;
if(and__4941__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4941__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__5589__auto__ = (((x == null))?null:x);
return (function (){var or__4953__auto__ = (om.core._notify_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj14772 = {};
return obj14772;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._get_property[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._get_property["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj14774 = {};
return obj14774;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__4941__auto__ = cursor;
if(and__4941__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4941__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__5589__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4953__auto__ = (om.core._root_key[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._root_key["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj14776 = {};
return obj14776;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._adapt[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._adapt["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj14778 = {};
return obj14778;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__4941__auto__ = this$;
if(and__4941__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4941__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__5589__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4953__auto__ = (om.core._get_deps[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (om.core._get_deps["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__14780 = state;
if(G__14780){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14780.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__14780.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__14780);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__14780);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__14782 = x;
if(G__14782){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14782.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__14782.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__14782);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__14782);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(){
var G__14784 = arguments.length;
switch (G__14784) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__14785 = (x.props["__om_cursor"]);
var G__14785__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__14785,korks__$1):G__14785);
return G__14785__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var G__14788 = arguments.length;
switch (G__14788) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(){
var G__14791 = arguments.length;
switch (G__14791) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4423__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4423__auto__)){
var pending_state = temp__4423__auto__;
var G__14794 = state;
(G__14794["__om_prev_state"] = (state["__om_state"]));

(G__14794["__om_state"] = pending_state);

(G__14794["__om_pending_state"] = null);

return G__14794;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var G__14796 = arguments.length;
switch (G__14796) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4953__auto__ = props;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return owner.props;
}
})();
var temp__4423__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4423__auto__)){
var props_state = temp__4423__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__4953__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__14799 = c;
if(G__14799){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14799.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__14799.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14799);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14799);
}
})()){
var state_14820 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4953__auto__ = (state_14820["__om_prev_state"]);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return (state_14820["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__14800 = c;
if(G__14800){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14800.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__14800.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14800);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14800);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4423__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4423__auto__){
var refs = temp__4423__auto__;
var seq__14801 = cljs.core.seq.call(null,refs);
var chunk__14802 = null;
var count__14803 = (0);
var i__14804 = (0);
while(true){
if((i__14804 < count__14803)){
var ref = cljs.core._nth.call(null,chunk__14802,i__14804);
om.core.unobserve.call(null,this$,ref);

var G__14821 = seq__14801;
var G__14822 = chunk__14802;
var G__14823 = count__14803;
var G__14824 = (i__14804 + (1));
seq__14801 = G__14821;
chunk__14802 = G__14822;
count__14803 = G__14823;
i__14804 = G__14824;
continue;
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,seq__14801);
if(temp__4423__auto____$1){
var seq__14801__$1 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14801__$1)){
var c__5738__auto__ = cljs.core.chunk_first.call(null,seq__14801__$1);
var G__14825 = cljs.core.chunk_rest.call(null,seq__14801__$1);
var G__14826 = c__5738__auto__;
var G__14827 = cljs.core.count.call(null,c__5738__auto__);
var G__14828 = (0);
seq__14801 = G__14825;
chunk__14802 = G__14826;
count__14803 = G__14827;
i__14804 = G__14828;
continue;
} else {
var ref = cljs.core.first.call(null,seq__14801__$1);
om.core.unobserve.call(null,this$,ref);

var G__14829 = cljs.core.next.call(null,seq__14801__$1);
var G__14830 = null;
var G__14831 = (0);
var G__14832 = (0);
seq__14801 = G__14829;
chunk__14802 = G__14830;
count__14803 = G__14831;
i__14804 = G__14832;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__14805 = c;
if(G__14805){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14805.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__14805.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__14805);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__14805);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__14806 = c;
if(G__14806){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14806.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__14806.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__14806);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__14806);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4941__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__4941__auto__)){
var and__4941__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__4941__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__4941__auto____$1;
}
} else {
return and__4941__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4941__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__4941__auto__){
return cljs.core.some.call(null,((function (and__4941__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__14798_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__14798_SHARP_);
});})(and__4941__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4941__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_14807 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_14808 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_14809 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_14810 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_14811 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__14812 = c;
if(G__14812){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14812.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__14812.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__14812);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__14812);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__14813 = c;
if(G__14813){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14813.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__14813.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__14813);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__14813);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__14814 = c;
if(G__14814){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14814.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__14814.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__14814);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__14814);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_14811;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_14810;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_14809;

om.core._STAR_state_STAR_ = _STAR_state_STAR_14808;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_14807;
}}),(function (next_props,next_state){
var this$ = this;
var c_14833 = om.core.children.call(null,this$);
if((function (){var G__14815 = c_14833;
if(G__14815){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14815.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__14815.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14815);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14815);
}
})()){
var state_14834 = this$.state;
om.core.will_update.call(null,c_14833,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4953__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4953__auto__ = id;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,(((function (){var G__14816 = c;
if(G__14816){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14816.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__14816.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14816);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14816);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__14817 = c;
if(G__14817){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14817.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__14817.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__14817);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__14817);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__14818 = c;
if(G__14818){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14818.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__14818.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__14818);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__14818);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_14835 = om.core.children.call(null,this$);
if((function (){var G__14819 = c_14835;
if(G__14819){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14819.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__14819.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14819);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14819);
}
})()){
om.core.will_mount.call(null,c_14835);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x14837 = obj;
x14837.om$core$ISetState$ = true;

x14837.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x14837){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4941__auto__ = !((app_state == null));
if(and__4941__auto__){
return render;
} else {
return and__4941__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x14837))
;

x14837.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x14837){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__4941__auto__ = !((app_state == null));
if(and__4941__auto__){
return render;
} else {
return and__4941__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x14837))
;

x14837.om$core$IGetRenderState$ = true;

x14837.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x14837){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x14837))
;

x14837.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x14837){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x14837))
;

x14837.om$core$IGetState$ = true;

x14837.om$core$IGetState$_get_state$arity$1 = ((function (x14837){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4953__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return (state["__om_state"]);
}
});})(x14837))
;

x14837.om$core$IGetState$_get_state$arity$2 = ((function (x14837){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x14837))
;

return x14837;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4953__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4953__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__14838 = c;
if(G__14838){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14838.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__14838.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14838);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14838);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_14847 = om.core.children.call(null,this$);
if((function (){var G__14839 = c_14847;
if(G__14839){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14839.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__14839.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14839);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14839);
}
})()){
om.core.will_mount.call(null,c_14847);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__14840 = c;
if(G__14840){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14840.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__14840.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14840);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14840);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4423__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4423__auto__){
var refs = temp__4423__auto__;
var seq__14841 = cljs.core.seq.call(null,refs);
var chunk__14842 = null;
var count__14843 = (0);
var i__14844 = (0);
while(true){
if((i__14844 < count__14843)){
var ref = cljs.core._nth.call(null,chunk__14842,i__14844);
om.core.unobserve.call(null,this$,ref);

var G__14848 = seq__14841;
var G__14849 = chunk__14842;
var G__14850 = count__14843;
var G__14851 = (i__14844 + (1));
seq__14841 = G__14848;
chunk__14842 = G__14849;
count__14843 = G__14850;
i__14844 = G__14851;
continue;
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,seq__14841);
if(temp__4423__auto____$1){
var seq__14841__$1 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14841__$1)){
var c__5738__auto__ = cljs.core.chunk_first.call(null,seq__14841__$1);
var G__14852 = cljs.core.chunk_rest.call(null,seq__14841__$1);
var G__14853 = c__5738__auto__;
var G__14854 = cljs.core.count.call(null,c__5738__auto__);
var G__14855 = (0);
seq__14841 = G__14852;
chunk__14842 = G__14853;
count__14843 = G__14854;
i__14844 = G__14855;
continue;
} else {
var ref = cljs.core.first.call(null,seq__14841__$1);
om.core.unobserve.call(null,this$,ref);

var G__14856 = cljs.core.next.call(null,seq__14841__$1);
var G__14857 = null;
var G__14858 = (0);
var G__14859 = (0);
seq__14841 = G__14856;
chunk__14842 = G__14857;
count__14843 = G__14858;
i__14844 = G__14859;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_14860 = this$.props;
var c_14861 = om.core.children.call(null,this$);
if((function (){var G__14845 = c_14861;
if(G__14845){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14845.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__14845.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14845);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14845);
}
})()){
var state_14862 = this$.state;
om.core.will_update.call(null,c_14861,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__14846 = c;
if(G__14846){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14846.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__14846.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14846);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14846);
}
})()){
var state_14863 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4953__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x14865 = cljs.core.clj__GT_js.call(null,methods$);
x14865.om$core$ISetState$ = true;

x14865.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x14865){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4941__auto__ = !((gstate == null));
if(and__4941__auto__){
return render;
} else {
return and__4941__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x14865))
;

x14865.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x14865){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x14865))
;

x14865.om$core$IGetRenderState$ = true;

x14865.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x14865){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x14865))
;

x14865.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x14865){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x14865))
;

x14865.om$core$IGetState$ = true;

x14865.om$core$IGetState$_get_state$arity$1 = ((function (x14865){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__4953__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x14865))
;

x14865.om$core$IGetState$_get_state$arity$2 = ((function (x14865){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x14865))
;

return x14865;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__14867 = x;
if(G__14867){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14867.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__14867.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__14867);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__14867);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__14869){
var vec__14870 = p__14869;
var k = cljs.core.nth.call(null,vec__14870,(0),null);
var v = cljs.core.nth.call(null,vec__14870,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__14871 = null;
var G__14871__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__14871__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__14871 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14871__2.call(this,self__,k);
case 3:
return G__14871__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14871.cljs$core$IFn$_invoke$arity$2 = G__14871__2;
G__14871.cljs$core$IFn$_invoke$arity$3 = G__14871__3;
return G__14871;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args14868){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14868)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__14873 = null;
var G__14873__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__14873__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__14873 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14873__2.call(this,self__,k);
case 3:
return G__14873__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14873.cljs$core$IFn$_invoke$arity$2 = G__14873__2;
G__14873.cljs$core$IFn$_invoke$arity$3 = G__14873__3;
return G__14873;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args14872){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14872)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x14875 = cljs.core.clone.call(null,val);
x14875.cljs$core$IDeref$ = true;

x14875.cljs$core$IDeref$_deref$arity$1 = ((function (x14875){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x14875))
;

x14875.om$core$ICursor$ = true;

x14875.om$core$ICursor$_path$arity$1 = ((function (x14875){
return (function (_){
var ___$1 = this;
return path;
});})(x14875))
;

x14875.om$core$ICursor$_state$arity$1 = ((function (x14875){
return (function (_){
var ___$1 = this;
return state;
});})(x14875))
;

x14875.om$core$ITransact$ = true;

x14875.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x14875){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x14875))
;

x14875.cljs$core$IEquiv$ = true;

x14875.cljs$core$IEquiv$_equiv$arity$2 = ((function (x14875){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x14875))
;

return x14875;
});
om.core.to_cursor = (function om$core$to_cursor(){
var G__14877 = arguments.length;
switch (G__14877) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if((function (){var G__14878 = val;
if(G__14878){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14878.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__14878.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__14878);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__14878);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__14879 = val;
if(G__14879){
var bit__5627__auto__ = (G__14879.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__5627__auto__) || (G__14879.cljs$core$ICloneable$)){
return true;
} else {
if((!G__14879.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__14879);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__14879);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((function (){var G__14882 = atom;
if(G__14882){
var bit__5627__auto__ = (G__14882.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5627__auto__) || (G__14882.cljs$core$IDeref$)){
return true;
} else {
if((!G__14882.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__14882);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__14882);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x14884 = cljs.core.clone.call(null,x);
x14884.cljs$core$ICloneable$ = true;

x14884.cljs$core$ICloneable$_clone$arity$1 = ((function (x14884){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x14884))
;

x14884.om$core$IAdapt$ = true;

x14884.om$core$IAdapt$_adapt$arity$2 = ((function (x14884){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x14884))
;

x14884.om$core$ICursorDerive$ = true;

x14884.om$core$ICursorDerive$_derive$arity$4 = ((function (x14884){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x14884))
;

x14884.om$core$ITransact$ = true;

x14884.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x14884){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x14884))
;

return x14884;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__14891 = cursor;
if(G__14891){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14891.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__14891.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__14891);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__14891);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x14892 = cljs.core.clone.call(null,cursor);
x14892.om$core$ICursorDerive$ = true;

x14892.om$core$ICursorDerive$_derive$arity$4 = ((function (x14892,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x14892,path,storage))
;

x14892.om$core$IOmRef$ = true;

x14892.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x14892,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x14892,path,storage))
;

x14892.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x14892,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x14892,path,storage))
;

x14892.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x14892,path,storage){
return (function (_){
var ___$1 = this;
var seq__14893 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__14894 = null;
var count__14895 = (0);
var i__14896 = (0);
while(true){
if((i__14896 < count__14895)){
var c = cljs.core._nth.call(null,chunk__14894,i__14896);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__14897 = seq__14893;
var G__14898 = chunk__14894;
var G__14899 = count__14895;
var G__14900 = (i__14896 + (1));
seq__14893 = G__14897;
chunk__14894 = G__14898;
count__14895 = G__14899;
i__14896 = G__14900;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__14893);
if(temp__4423__auto__){
var seq__14893__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14893__$1)){
var c__5738__auto__ = cljs.core.chunk_first.call(null,seq__14893__$1);
var G__14901 = cljs.core.chunk_rest.call(null,seq__14893__$1);
var G__14902 = c__5738__auto__;
var G__14903 = cljs.core.count.call(null,c__5738__auto__);
var G__14904 = (0);
seq__14893 = G__14901;
chunk__14894 = G__14902;
count__14895 = G__14903;
i__14896 = G__14904;
continue;
} else {
var c = cljs.core.first.call(null,seq__14893__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__14905 = cljs.core.next.call(null,seq__14893__$1);
var G__14906 = null;
var G__14907 = (0);
var G__14908 = (0);
seq__14893 = G__14905;
chunk__14894 = G__14906;
count__14895 = G__14907;
i__14896 = G__14908;
continue;
}
} else {
return null;
}
}
break;
}
});})(x14892,path,storage))
;

x14892.om$core$IOmRef$_get_deps$arity$1 = ((function (x14892,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x14892,path,storage))
;

x14892.om$core$ITransact$ = true;

x14892.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x14892,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x14892,path,storage))
;

return x14892;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4953__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4953__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function om$core$render_all(){
var G__14910 = arguments.length;
switch (G__14910) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__14911_14916 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__14912_14917 = null;
var count__14913_14918 = (0);
var i__14914_14919 = (0);
while(true){
if((i__14914_14919 < count__14913_14918)){
var f_14920 = cljs.core._nth.call(null,chunk__14912_14917,i__14914_14919);
f_14920.call(null);

var G__14921 = seq__14911_14916;
var G__14922 = chunk__14912_14917;
var G__14923 = count__14913_14918;
var G__14924 = (i__14914_14919 + (1));
seq__14911_14916 = G__14921;
chunk__14912_14917 = G__14922;
count__14913_14918 = G__14923;
i__14914_14919 = G__14924;
continue;
} else {
var temp__4423__auto___14925 = cljs.core.seq.call(null,seq__14911_14916);
if(temp__4423__auto___14925){
var seq__14911_14926__$1 = temp__4423__auto___14925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14911_14926__$1)){
var c__5738__auto___14927 = cljs.core.chunk_first.call(null,seq__14911_14926__$1);
var G__14928 = cljs.core.chunk_rest.call(null,seq__14911_14926__$1);
var G__14929 = c__5738__auto___14927;
var G__14930 = cljs.core.count.call(null,c__5738__auto___14927);
var G__14931 = (0);
seq__14911_14916 = G__14928;
chunk__14912_14917 = G__14929;
count__14913_14918 = G__14930;
i__14914_14919 = G__14931;
continue;
} else {
var f_14932 = cljs.core.first.call(null,seq__14911_14926__$1);
f_14932.call(null);

var G__14933 = cljs.core.next.call(null,seq__14911_14926__$1);
var G__14934 = null;
var G__14935 = (0);
var G__14936 = (0);
seq__14911_14916 = G__14933;
chunk__14912_14917 = G__14934;
count__14913_14918 = G__14935;
i__14914_14919 = G__14936;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4953__auto__ = (function (){var G__14943 = x;
if(G__14943){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14943.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__14943.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__14943);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__14943);
}
})();
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (function (){var G__14945 = x;
if(G__14945){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto____$1 = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto____$1)){
return or__4953__auto____$1;
} else {
return G__14945.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__14945.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__14945);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__14945);
}
})();
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
var G__14946 = x;
if(G__14946){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto____$2 = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto____$2)){
return or__4953__auto____$2;
} else {
return G__14946.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__14946.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__14946);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__14946);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(){
var G__14948 = arguments.length;
switch (G__14948) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__4953__auto__ = descriptor;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4953__auto____$1)){
return or__4953__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(){
var G__14951 = arguments.length;
switch (G__14951) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(){
var G__14954 = arguments.length;
switch (G__14954) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__14955 = m;
var map__14955__$1 = ((cljs.core.seq_QMARK_.call(null,map__14955))?cljs.core.apply.call(null,cljs.core.hash_map,map__14955):map__14955);
var key = cljs.core.get.call(null,map__14955__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__14955__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__14955__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__14955__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__14955__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4421__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4421__auto__)){
var i = temp__4421__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__4953__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__14955,map__14955__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__14955,map__14955__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__14955,map__14955__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__14955,map__14955__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4953__auto__ = rkey;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function om$core$build(){
var G__14958 = arguments.length;
switch (G__14958) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(){
var G__14961 = arguments.length;
switch (G__14961) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__14971 = state;
if(G__14971){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__14971.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__14971.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__14971);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__14971);
}
})()){
} else {
var properties_14979 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_14980 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_14981 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x14972_14982 = state;
x14972_14982.om$core$IRootProperties$ = true;

x14972_14982.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x14972_14982,properties_14979,listeners_14980,render_queue_14981){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_14979,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x14972_14982,properties_14979,listeners_14980,render_queue_14981))
;

x14972_14982.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x14972_14982,properties_14979,listeners_14980,render_queue_14981){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_14979,cljs.core.dissoc,id,k);
});})(x14972_14982,properties_14979,listeners_14980,render_queue_14981))
;

x14972_14982.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x14972_14982,properties_14979,listeners_14980,render_queue_14981){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_14979,cljs.core.dissoc,id);
});})(x14972_14982,properties_14979,listeners_14980,render_queue_14981))
;

x14972_14982.om$core$IRootProperties$_get_property$arity$3 = ((function (x14972_14982,properties_14979,listeners_14980,render_queue_14981){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_14979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x14972_14982,properties_14979,listeners_14980,render_queue_14981))
;

x14972_14982.om$core$INotify$ = true;

x14972_14982.om$core$INotify$_listen_BANG_$arity$3 = ((function (x14972_14982,properties_14979,listeners_14980,render_queue_14981){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_14980,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x14972_14982,properties_14979,listeners_14980,render_queue_14981))
;

x14972_14982.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x14972_14982,properties_14979,listeners_14980,render_queue_14981){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_14980,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x14972_14982,properties_14979,listeners_14980,render_queue_14981))
;

x14972_14982.om$core$INotify$_notify_BANG_$arity$3 = ((function (x14972_14982,properties_14979,listeners_14980,render_queue_14981){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__14973_14983 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_14980));
var chunk__14974_14984 = null;
var count__14975_14985 = (0);
var i__14976_14986 = (0);
while(true){
if((i__14976_14986 < count__14975_14985)){
var vec__14977_14987 = cljs.core._nth.call(null,chunk__14974_14984,i__14976_14986);
var __14988 = cljs.core.nth.call(null,vec__14977_14987,(0),null);
var f_14989 = cljs.core.nth.call(null,vec__14977_14987,(1),null);
f_14989.call(null,tx_data,root_cursor);

var G__14990 = seq__14973_14983;
var G__14991 = chunk__14974_14984;
var G__14992 = count__14975_14985;
var G__14993 = (i__14976_14986 + (1));
seq__14973_14983 = G__14990;
chunk__14974_14984 = G__14991;
count__14975_14985 = G__14992;
i__14976_14986 = G__14993;
continue;
} else {
var temp__4423__auto___14994 = cljs.core.seq.call(null,seq__14973_14983);
if(temp__4423__auto___14994){
var seq__14973_14995__$1 = temp__4423__auto___14994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14973_14995__$1)){
var c__5738__auto___14996 = cljs.core.chunk_first.call(null,seq__14973_14995__$1);
var G__14997 = cljs.core.chunk_rest.call(null,seq__14973_14995__$1);
var G__14998 = c__5738__auto___14996;
var G__14999 = cljs.core.count.call(null,c__5738__auto___14996);
var G__15000 = (0);
seq__14973_14983 = G__14997;
chunk__14974_14984 = G__14998;
count__14975_14985 = G__14999;
i__14976_14986 = G__15000;
continue;
} else {
var vec__14978_15001 = cljs.core.first.call(null,seq__14973_14995__$1);
var __15002 = cljs.core.nth.call(null,vec__14978_15001,(0),null);
var f_15003 = cljs.core.nth.call(null,vec__14978_15001,(1),null);
f_15003.call(null,tx_data,root_cursor);

var G__15004 = cljs.core.next.call(null,seq__14973_14995__$1);
var G__15005 = null;
var G__15006 = (0);
var G__15007 = (0);
seq__14973_14983 = G__15004;
chunk__14974_14984 = G__15005;
count__14975_14985 = G__15006;
i__14976_14986 = G__15007;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x14972_14982,properties_14979,listeners_14980,render_queue_14981))
;

x14972_14982.om$core$IRenderQueue$ = true;

x14972_14982.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x14972_14982,properties_14979,listeners_14980,render_queue_14981){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_14981);
});})(x14972_14982,properties_14979,listeners_14980,render_queue_14981))
;

x14972_14982.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x14972_14982,properties_14979,listeners_14980,render_queue_14981){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_14981),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_14981,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x14972_14982,properties_14979,listeners_14980,render_queue_14981))
;

x14972_14982.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x14972_14982,properties_14979,listeners_14980,render_queue_14981){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_14981,cljs.core.empty);
});})(x14972_14982,properties_14979,listeners_14980,render_queue_14981))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x15009 = cljs.core.clone.call(null,cursor);
x15009.cljs$core$ICloneable$ = true;

x15009.cljs$core$ICloneable$_clone$arity$1 = ((function (x15009){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x15009))
;

x15009.om$core$IAdapt$ = true;

x15009.om$core$IAdapt$_adapt$arity$2 = ((function (x15009){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x15009))
;

x15009.om$core$IRootKey$ = true;

x15009.om$core$IRootKey$_root_key$arity$1 = ((function (x15009){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x15009))
;

return x15009;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__15010){
var map__15073 = p__15010;
var map__15073__$1 = ((cljs.core.seq_QMARK_.call(null,map__15073))?cljs.core.apply.call(null,cljs.core.hash_map,map__15073):map__15073);
var options = map__15073__$1;
var target = cljs.core.get.call(null,map__15073__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__15073__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__15073__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__15073__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__15073__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__15073__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__15073__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__15135 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__15135,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__15135,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__15074 = value;
if(G__15074){
var bit__5627__auto__ = (G__15074.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__5627__auto__) || (G__15074.cljs$core$IAtom$)){
return true;
} else {
if((!G__15074.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__15074);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__15074);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4953__auto__ = adapt;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__15073,map__15073__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_15136 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_15105 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_15106 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_15107 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_15108 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_15108;

om.core._STAR_state_STAR_ = _STAR_state_STAR_15107;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_15106;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_15105;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_15136);
} else {
}
}

var queue_15137 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_15137)){
} else {
var seq__15109_15138 = cljs.core.seq.call(null,queue_15137);
var chunk__15110_15139 = null;
var count__15111_15140 = (0);
var i__15112_15141 = (0);
while(true){
if((i__15112_15141 < count__15111_15140)){
var c_15142 = cljs.core._nth.call(null,chunk__15110_15139,i__15112_15141);
if(cljs.core.truth_(c_15142.isMounted())){
var temp__4423__auto___15143 = (c_15142.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4423__auto___15143)){
var next_props_15144 = temp__4423__auto___15143;
(c_15142.props["__om_cursor"] = next_props_15144);

(c_15142.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4953__auto__ = !((function (){var G__15114 = om.core.children.call(null,c_15142);
if(G__15114){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__15114.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__15114.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__15114);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__15114);
}
})());
if(or__4953__auto__){
return or__4953__auto__;
} else {
return c_15142.shouldComponentUpdate(c_15142.props,c_15142.state);
}
})())){
c_15142.forceUpdate();
} else {
}
} else {
}

var G__15145 = seq__15109_15138;
var G__15146 = chunk__15110_15139;
var G__15147 = count__15111_15140;
var G__15148 = (i__15112_15141 + (1));
seq__15109_15138 = G__15145;
chunk__15110_15139 = G__15146;
count__15111_15140 = G__15147;
i__15112_15141 = G__15148;
continue;
} else {
var temp__4423__auto___15149 = cljs.core.seq.call(null,seq__15109_15138);
if(temp__4423__auto___15149){
var seq__15109_15150__$1 = temp__4423__auto___15149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15109_15150__$1)){
var c__5738__auto___15151 = cljs.core.chunk_first.call(null,seq__15109_15150__$1);
var G__15152 = cljs.core.chunk_rest.call(null,seq__15109_15150__$1);
var G__15153 = c__5738__auto___15151;
var G__15154 = cljs.core.count.call(null,c__5738__auto___15151);
var G__15155 = (0);
seq__15109_15138 = G__15152;
chunk__15110_15139 = G__15153;
count__15111_15140 = G__15154;
i__15112_15141 = G__15155;
continue;
} else {
var c_15156 = cljs.core.first.call(null,seq__15109_15150__$1);
if(cljs.core.truth_(c_15156.isMounted())){
var temp__4423__auto___15157__$1 = (c_15156.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4423__auto___15157__$1)){
var next_props_15158 = temp__4423__auto___15157__$1;
(c_15156.props["__om_cursor"] = next_props_15158);

(c_15156.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4953__auto__ = !((function (){var G__15116 = om.core.children.call(null,c_15156);
if(G__15116){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__15116.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__15116.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__15116);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__15116);
}
})());
if(or__4953__auto__){
return or__4953__auto__;
} else {
return c_15156.shouldComponentUpdate(c_15156.props,c_15156.state);
}
})())){
c_15156.forceUpdate();
} else {
}
} else {
}

var G__15159 = cljs.core.next.call(null,seq__15109_15150__$1);
var G__15160 = null;
var G__15161 = (0);
var G__15162 = (0);
seq__15109_15138 = G__15159;
chunk__15110_15139 = G__15160;
count__15111_15140 = G__15161;
i__15112_15141 = G__15162;
continue;
}
} else {
}
}
break;
}
}

var _refs_15163 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_15163)){
} else {
var seq__15117_15164 = cljs.core.seq.call(null,_refs_15163);
var chunk__15118_15165 = null;
var count__15119_15166 = (0);
var i__15120_15167 = (0);
while(true){
if((i__15120_15167 < count__15119_15166)){
var vec__15121_15168 = cljs.core._nth.call(null,chunk__15118_15165,i__15120_15167);
var path_15169__$1 = cljs.core.nth.call(null,vec__15121_15168,(0),null);
var cs_15170 = cljs.core.nth.call(null,vec__15121_15168,(1),null);
var cs_15171__$1 = cljs.core.deref.call(null,cs_15170);
var seq__15122_15172 = cljs.core.seq.call(null,cs_15171__$1);
var chunk__15123_15173 = null;
var count__15124_15174 = (0);
var i__15125_15175 = (0);
while(true){
if((i__15125_15175 < count__15124_15174)){
var vec__15126_15176 = cljs.core._nth.call(null,chunk__15123_15173,i__15125_15175);
var id_15177 = cljs.core.nth.call(null,vec__15126_15176,(0),null);
var c_15178 = cljs.core.nth.call(null,vec__15126_15176,(1),null);
if(cljs.core.truth_(c_15178.shouldComponentUpdate(c_15178.props,c_15178.state))){
c_15178.forceUpdate();
} else {
}

var G__15179 = seq__15122_15172;
var G__15180 = chunk__15123_15173;
var G__15181 = count__15124_15174;
var G__15182 = (i__15125_15175 + (1));
seq__15122_15172 = G__15179;
chunk__15123_15173 = G__15180;
count__15124_15174 = G__15181;
i__15125_15175 = G__15182;
continue;
} else {
var temp__4423__auto___15183 = cljs.core.seq.call(null,seq__15122_15172);
if(temp__4423__auto___15183){
var seq__15122_15184__$1 = temp__4423__auto___15183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15122_15184__$1)){
var c__5738__auto___15185 = cljs.core.chunk_first.call(null,seq__15122_15184__$1);
var G__15186 = cljs.core.chunk_rest.call(null,seq__15122_15184__$1);
var G__15187 = c__5738__auto___15185;
var G__15188 = cljs.core.count.call(null,c__5738__auto___15185);
var G__15189 = (0);
seq__15122_15172 = G__15186;
chunk__15123_15173 = G__15187;
count__15124_15174 = G__15188;
i__15125_15175 = G__15189;
continue;
} else {
var vec__15127_15190 = cljs.core.first.call(null,seq__15122_15184__$1);
var id_15191 = cljs.core.nth.call(null,vec__15127_15190,(0),null);
var c_15192 = cljs.core.nth.call(null,vec__15127_15190,(1),null);
if(cljs.core.truth_(c_15192.shouldComponentUpdate(c_15192.props,c_15192.state))){
c_15192.forceUpdate();
} else {
}

var G__15193 = cljs.core.next.call(null,seq__15122_15184__$1);
var G__15194 = null;
var G__15195 = (0);
var G__15196 = (0);
seq__15122_15172 = G__15193;
chunk__15123_15173 = G__15194;
count__15124_15174 = G__15195;
i__15125_15175 = G__15196;
continue;
}
} else {
}
}
break;
}

var G__15197 = seq__15117_15164;
var G__15198 = chunk__15118_15165;
var G__15199 = count__15119_15166;
var G__15200 = (i__15120_15167 + (1));
seq__15117_15164 = G__15197;
chunk__15118_15165 = G__15198;
count__15119_15166 = G__15199;
i__15120_15167 = G__15200;
continue;
} else {
var temp__4423__auto___15201 = cljs.core.seq.call(null,seq__15117_15164);
if(temp__4423__auto___15201){
var seq__15117_15202__$1 = temp__4423__auto___15201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15117_15202__$1)){
var c__5738__auto___15203 = cljs.core.chunk_first.call(null,seq__15117_15202__$1);
var G__15204 = cljs.core.chunk_rest.call(null,seq__15117_15202__$1);
var G__15205 = c__5738__auto___15203;
var G__15206 = cljs.core.count.call(null,c__5738__auto___15203);
var G__15207 = (0);
seq__15117_15164 = G__15204;
chunk__15118_15165 = G__15205;
count__15119_15166 = G__15206;
i__15120_15167 = G__15207;
continue;
} else {
var vec__15128_15208 = cljs.core.first.call(null,seq__15117_15202__$1);
var path_15209__$1 = cljs.core.nth.call(null,vec__15128_15208,(0),null);
var cs_15210 = cljs.core.nth.call(null,vec__15128_15208,(1),null);
var cs_15211__$1 = cljs.core.deref.call(null,cs_15210);
var seq__15129_15212 = cljs.core.seq.call(null,cs_15211__$1);
var chunk__15130_15213 = null;
var count__15131_15214 = (0);
var i__15132_15215 = (0);
while(true){
if((i__15132_15215 < count__15131_15214)){
var vec__15133_15216 = cljs.core._nth.call(null,chunk__15130_15213,i__15132_15215);
var id_15217 = cljs.core.nth.call(null,vec__15133_15216,(0),null);
var c_15218 = cljs.core.nth.call(null,vec__15133_15216,(1),null);
if(cljs.core.truth_(c_15218.shouldComponentUpdate(c_15218.props,c_15218.state))){
c_15218.forceUpdate();
} else {
}

var G__15219 = seq__15129_15212;
var G__15220 = chunk__15130_15213;
var G__15221 = count__15131_15214;
var G__15222 = (i__15132_15215 + (1));
seq__15129_15212 = G__15219;
chunk__15130_15213 = G__15220;
count__15131_15214 = G__15221;
i__15132_15215 = G__15222;
continue;
} else {
var temp__4423__auto___15223__$1 = cljs.core.seq.call(null,seq__15129_15212);
if(temp__4423__auto___15223__$1){
var seq__15129_15224__$1 = temp__4423__auto___15223__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15129_15224__$1)){
var c__5738__auto___15225 = cljs.core.chunk_first.call(null,seq__15129_15224__$1);
var G__15226 = cljs.core.chunk_rest.call(null,seq__15129_15224__$1);
var G__15227 = c__5738__auto___15225;
var G__15228 = cljs.core.count.call(null,c__5738__auto___15225);
var G__15229 = (0);
seq__15129_15212 = G__15226;
chunk__15130_15213 = G__15227;
count__15131_15214 = G__15228;
i__15132_15215 = G__15229;
continue;
} else {
var vec__15134_15230 = cljs.core.first.call(null,seq__15129_15224__$1);
var id_15231 = cljs.core.nth.call(null,vec__15134_15230,(0),null);
var c_15232 = cljs.core.nth.call(null,vec__15134_15230,(1),null);
if(cljs.core.truth_(c_15232.shouldComponentUpdate(c_15232.props,c_15232.state))){
c_15232.forceUpdate();
} else {
}

var G__15233 = cljs.core.next.call(null,seq__15129_15224__$1);
var G__15234 = null;
var G__15235 = (0);
var G__15236 = (0);
seq__15129_15212 = G__15233;
chunk__15130_15213 = G__15234;
count__15131_15214 = G__15235;
i__15132_15215 = G__15236;
continue;
}
} else {
}
}
break;
}

var G__15237 = cljs.core.next.call(null,seq__15117_15202__$1);
var G__15238 = null;
var G__15239 = (0);
var G__15240 = (0);
seq__15117_15164 = G__15237;
chunk__15118_15165 = G__15238;
count__15119_15166 = G__15239;
i__15120_15167 = G__15240;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__15073,map__15073__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__15073,map__15073__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__15073,map__15073__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__15073,map__15073__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__15073,map__15073__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__15073,map__15073__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__15073,map__15073__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__15073,map__15073__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__15073,map__15073__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__15242 = x;
if(G__15242){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__15242.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__15242.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__15242);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__15242);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var G__15244 = arguments.length;
switch (G__15244) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(){
var G__15247 = arguments.length;
switch (G__15247) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__15250 = cursor;
if(G__15250){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__15250.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__15250.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__15250);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__15250);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(){
var G__15252 = arguments.length;
switch (G__15252) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4423__auto__ = owner.refs;
if(cljs.core.truth_(temp__4423__auto__)){
var refs = temp__4423__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(){
var G__15255 = arguments.length;
switch (G__15255) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(){
var G__15258 = arguments.length;
switch (G__15258) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(){
var G__15261 = arguments.length;
switch (G__15261) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(){
var G__15264 = arguments.length;
switch (G__15264) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(){
var G__15267 = arguments.length;
switch (G__15267) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map