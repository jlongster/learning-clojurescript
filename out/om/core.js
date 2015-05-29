// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj14568 = {};
return obj14568;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.display_name[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.display_name["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj14570 = {};
return obj14570;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.init_state[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.init_state["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj14572 = {};
return obj14572;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.should_update[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.should_update["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj14574 = {};
return obj14574;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.will_mount[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.will_mount["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj14576 = {};
return obj14576;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.did_mount[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.did_mount["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj14578 = {};
return obj14578;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.will_unmount[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.will_unmount["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj14580 = {};
return obj14580;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.will_update[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.will_update["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj14582 = {};
return obj14582;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.did_update[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.did_update["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj14584 = {};
return obj14584;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.will_receive_props[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj14586 = {};
return obj14586;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.render[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.render["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj14588 = {};
return obj14588;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.render_props[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.render_props["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj14590 = {};
return obj14590;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core.render_state[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core.render_state["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj14592 = {};
return obj14592;
})();


om.core.IOmSwap = (function (){var obj14594 = {};
return obj14594;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj14596 = {};
return obj14596;
})();

om.core._get_state = (function om$core$_get_state(){
var G__14598 = arguments.length;
switch (G__14598) {
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
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._get_state[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._get_state["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._get_state[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._get_state["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


om.core.IGetRenderState = (function (){var obj14601 = {};
return obj14601;
})();

om.core._get_render_state = (function om$core$_get_render_state(){
var G__14603 = arguments.length;
switch (G__14603) {
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
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._get_render_state[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._get_render_state["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._get_render_state[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._get_render_state["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


om.core.ISetState = (function (){var obj14606 = {};
return obj14606;
})();

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var G__14608 = arguments.length;
switch (G__14608) {
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
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


om.core.IRenderQueue = (function (){var obj14611 = {};
return obj14611;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._get_queue[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._get_queue["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj14613 = {};
return obj14613;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__4938__auto__ = x;
if(and__4938__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4938__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__5586__auto__ = (((x == null))?null:x);
return (function (){var or__4950__auto__ = (om.core._value[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._value["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
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

om.core.ICursor = (function (){var obj14615 = {};
return obj14615;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__4938__auto__ = cursor;
if(and__4938__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4938__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__5586__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4950__auto__ = (om.core._path[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._path["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__4938__auto__ = cursor;
if(and__4938__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4938__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__5586__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4950__auto__ = (om.core._state[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._state["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj14617 = {};
return obj14617;
})();

om.core._to_cursor = (function om$core$_to_cursor(){
var G__14619 = arguments.length;
switch (G__14619) {
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
if((function (){var and__4938__auto__ = value;
if(and__4938__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4938__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__5586__auto__ = (((value == null))?null:value);
return (function (){var or__4950__auto__ = (om.core._to_cursor[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._to_cursor["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((function (){var and__4938__auto__ = value;
if(and__4938__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4938__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__5586__auto__ = (((value == null))?null:value);
return (function (){var or__4950__auto__ = (om.core._to_cursor[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._to_cursor["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


om.core.ICursorDerive = (function (){var obj14622 = {};
return obj14622;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__4938__auto__ = cursor;
if(and__4938__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4938__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__5586__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4950__auto__ = (om.core._derive[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._derive["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
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

om.core.ITransact = (function (){var obj14624 = {};
return obj14624;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4938__auto__ = cursor;
if(and__4938__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4938__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__5586__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4950__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj14626 = {};
return obj14626;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__4938__auto__ = x;
if(and__4938__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4938__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__5586__auto__ = (((x == null))?null:x);
return (function (){var or__4950__auto__ = (om.core._listen_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__4938__auto__ = x;
if(and__4938__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__5586__auto__ = (((x == null))?null:x);
return (function (){var or__4950__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4938__auto__ = x;
if(and__4938__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4938__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__5586__auto__ = (((x == null))?null:x);
return (function (){var or__4950__auto__ = (om.core._notify_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj14628 = {};
return obj14628;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._get_property[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._get_property["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj14630 = {};
return obj14630;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__4938__auto__ = cursor;
if(and__4938__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4938__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__5586__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4950__auto__ = (om.core._root_key[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._root_key["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj14632 = {};
return obj14632;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._adapt[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._adapt["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
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

om.core.IOmRef = (function (){var obj14634 = {};
return obj14634;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__4938__auto__ = this$;
if(and__4938__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4938__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__5586__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4950__auto__ = (om.core._get_deps[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (om.core._get_deps["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
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
var ret = (((function (){var G__14636 = state;
if(G__14636){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14636.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__14636.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__14636);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__14636);
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
var G__14638 = x;
if(G__14638){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14638.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__14638.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__14638);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__14638);
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
var G__14640 = arguments.length;
switch (G__14640) {
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
var G__14641 = (x.props["__om_cursor"]);
var G__14641__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__14641,korks__$1):G__14641);
return G__14641__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var G__14644 = arguments.length;
switch (G__14644) {
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
var G__14647 = arguments.length;
switch (G__14647) {
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
var temp__4422__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4422__auto__)){
var pending_state = temp__4422__auto__;
var G__14650 = state;
(G__14650["__om_prev_state"] = (state["__om_state"]));

(G__14650["__om_state"] = pending_state);

(G__14650["__om_pending_state"] = null);

return G__14650;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var G__14652 = arguments.length;
switch (G__14652) {
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
var props__$1 = (function (){var or__4950__auto__ = props;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return owner.props;
}
})();
var temp__4422__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4422__auto__)){
var props_state = temp__4422__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__4950__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
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
if((function (){var G__14655 = c;
if(G__14655){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14655.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__14655.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14655);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14655);
}
})()){
var state_14676 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4950__auto__ = (state_14676["__om_prev_state"]);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return (state_14676["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__14656 = c;
if(G__14656){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14656.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__14656.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14656);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14656);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4422__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4422__auto__){
var refs = temp__4422__auto__;
var seq__14657 = cljs.core.seq.call(null,refs);
var chunk__14658 = null;
var count__14659 = (0);
var i__14660 = (0);
while(true){
if((i__14660 < count__14659)){
var ref = cljs.core._nth.call(null,chunk__14658,i__14660);
om.core.unobserve.call(null,this$,ref);

var G__14677 = seq__14657;
var G__14678 = chunk__14658;
var G__14679 = count__14659;
var G__14680 = (i__14660 + (1));
seq__14657 = G__14677;
chunk__14658 = G__14678;
count__14659 = G__14679;
i__14660 = G__14680;
continue;
} else {
var temp__4422__auto____$1 = cljs.core.seq.call(null,seq__14657);
if(temp__4422__auto____$1){
var seq__14657__$1 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14657__$1)){
var c__5735__auto__ = cljs.core.chunk_first.call(null,seq__14657__$1);
var G__14681 = cljs.core.chunk_rest.call(null,seq__14657__$1);
var G__14682 = c__5735__auto__;
var G__14683 = cljs.core.count.call(null,c__5735__auto__);
var G__14684 = (0);
seq__14657 = G__14681;
chunk__14658 = G__14682;
count__14659 = G__14683;
i__14660 = G__14684;
continue;
} else {
var ref = cljs.core.first.call(null,seq__14657__$1);
om.core.unobserve.call(null,this$,ref);

var G__14685 = cljs.core.next.call(null,seq__14657__$1);
var G__14686 = null;
var G__14687 = (0);
var G__14688 = (0);
seq__14657 = G__14685;
chunk__14658 = G__14686;
count__14659 = G__14687;
i__14660 = G__14688;
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
if((function (){var G__14661 = c;
if(G__14661){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14661.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__14661.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__14661);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__14661);
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

if((function (){var G__14662 = c;
if(G__14662){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14662.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__14662.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__14662);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__14662);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4938__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__4938__auto__)){
var and__4938__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__4938__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4938__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__4938__auto__){
return cljs.core.some.call(null,((function (and__4938__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__14654_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__14654_SHARP_);
});})(and__4938__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4938__auto__;
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
var _STAR_parent_STAR_14663 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_14664 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_14665 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_14666 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_14667 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__14668 = c;
if(G__14668){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14668.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__14668.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__14668);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__14668);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__14669 = c;
if(G__14669){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14669.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__14669.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__14669);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__14669);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__14670 = c;
if(G__14670){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14670.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__14670.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__14670);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__14670);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_14667;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_14666;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_14665;

om.core._STAR_state_STAR_ = _STAR_state_STAR_14664;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_14663;
}}),(function (next_props,next_state){
var this$ = this;
var c_14689 = om.core.children.call(null,this$);
if((function (){var G__14671 = c_14689;
if(G__14671){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14671.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__14671.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14671);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14671);
}
})()){
var state_14690 = this$.state;
om.core.will_update.call(null,c_14689,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4950__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4950__auto__ = id;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,(((function (){var G__14672 = c;
if(G__14672){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14672.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__14672.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14672);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14672);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__14673 = c;
if(G__14673){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14673.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__14673.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__14673);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__14673);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__14674 = c;
if(G__14674){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14674.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__14674.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__14674);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__14674);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_14691 = om.core.children.call(null,this$);
if((function (){var G__14675 = c_14691;
if(G__14675){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14675.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__14675.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14675);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14675);
}
})()){
om.core.will_mount.call(null,c_14691);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x14693 = obj;
x14693.om$core$ISetState$ = true;

x14693.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x14693){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4938__auto__ = !((app_state == null));
if(and__4938__auto__){
return render;
} else {
return and__4938__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x14693))
;

x14693.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x14693){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__4938__auto__ = !((app_state == null));
if(and__4938__auto__){
return render;
} else {
return and__4938__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x14693))
;

x14693.om$core$IGetRenderState$ = true;

x14693.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x14693){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x14693))
;

x14693.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x14693){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x14693))
;

x14693.om$core$IGetState$ = true;

x14693.om$core$IGetState$_get_state$arity$1 = ((function (x14693){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4950__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return (state["__om_state"]);
}
});})(x14693))
;

x14693.om$core$IGetState$_get_state$arity$2 = ((function (x14693){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x14693))
;

return x14693;
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
var istate = (function (){var or__4950__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4950__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__14694 = c;
if(G__14694){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14694.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__14694.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14694);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14694);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_14703 = om.core.children.call(null,this$);
if((function (){var G__14695 = c_14703;
if(G__14695){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14695.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__14695.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14695);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14695);
}
})()){
om.core.will_mount.call(null,c_14703);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__14696 = c;
if(G__14696){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14696.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__14696.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14696);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14696);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4422__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4422__auto__){
var refs = temp__4422__auto__;
var seq__14697 = cljs.core.seq.call(null,refs);
var chunk__14698 = null;
var count__14699 = (0);
var i__14700 = (0);
while(true){
if((i__14700 < count__14699)){
var ref = cljs.core._nth.call(null,chunk__14698,i__14700);
om.core.unobserve.call(null,this$,ref);

var G__14704 = seq__14697;
var G__14705 = chunk__14698;
var G__14706 = count__14699;
var G__14707 = (i__14700 + (1));
seq__14697 = G__14704;
chunk__14698 = G__14705;
count__14699 = G__14706;
i__14700 = G__14707;
continue;
} else {
var temp__4422__auto____$1 = cljs.core.seq.call(null,seq__14697);
if(temp__4422__auto____$1){
var seq__14697__$1 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14697__$1)){
var c__5735__auto__ = cljs.core.chunk_first.call(null,seq__14697__$1);
var G__14708 = cljs.core.chunk_rest.call(null,seq__14697__$1);
var G__14709 = c__5735__auto__;
var G__14710 = cljs.core.count.call(null,c__5735__auto__);
var G__14711 = (0);
seq__14697 = G__14708;
chunk__14698 = G__14709;
count__14699 = G__14710;
i__14700 = G__14711;
continue;
} else {
var ref = cljs.core.first.call(null,seq__14697__$1);
om.core.unobserve.call(null,this$,ref);

var G__14712 = cljs.core.next.call(null,seq__14697__$1);
var G__14713 = null;
var G__14714 = (0);
var G__14715 = (0);
seq__14697 = G__14712;
chunk__14698 = G__14713;
count__14699 = G__14714;
i__14700 = G__14715;
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
var props_14716 = this$.props;
var c_14717 = om.core.children.call(null,this$);
if((function (){var G__14701 = c_14717;
if(G__14701){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14701.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__14701.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14701);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14701);
}
})()){
var state_14718 = this$.state;
om.core.will_update.call(null,c_14717,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
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
if((function (){var G__14702 = c;
if(G__14702){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14702.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__14702.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14702);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14702);
}
})()){
var state_14719 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4950__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
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
var x14721 = cljs.core.clj__GT_js.call(null,methods$);
x14721.om$core$ISetState$ = true;

x14721.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x14721){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4938__auto__ = !((gstate == null));
if(and__4938__auto__){
return render;
} else {
return and__4938__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x14721))
;

x14721.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x14721){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x14721))
;

x14721.om$core$IGetRenderState$ = true;

x14721.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x14721){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x14721))
;

x14721.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x14721){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x14721))
;

x14721.om$core$IGetState$ = true;

x14721.om$core$IGetState$_get_state$arity$1 = ((function (x14721){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__4950__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x14721))
;

x14721.om$core$IGetState$_get_state$arity$2 = ((function (x14721){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x14721))
;

return x14721;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__14723 = x;
if(G__14723){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14723.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__14723.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__14723);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__14723);
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
return (function (p__14725){
var vec__14726 = p__14725;
var k = cljs.core.nth.call(null,vec__14726,(0),null);
var v = cljs.core.nth.call(null,vec__14726,(1),null);
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
var G__14727 = null;
var G__14727__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__14727__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__14727 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14727__2.call(this,self__,k);
case 3:
return G__14727__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14727.cljs$core$IFn$_invoke$arity$2 = G__14727__2;
G__14727.cljs$core$IFn$_invoke$arity$3 = G__14727__3;
return G__14727;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args14724){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14724)));
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

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"om.core/MapCursor");
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
var G__14729 = null;
var G__14729__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__14729__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__14729 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14729__2.call(this,self__,k);
case 3:
return G__14729__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14729.cljs$core$IFn$_invoke$arity$2 = G__14729__2;
G__14729.cljs$core$IFn$_invoke$arity$3 = G__14729__3;
return G__14729;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args14728){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14728)));
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

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x14731 = cljs.core.clone.call(null,val);
x14731.cljs$core$IDeref$ = true;

x14731.cljs$core$IDeref$_deref$arity$1 = ((function (x14731){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x14731))
;

x14731.om$core$ICursor$ = true;

x14731.om$core$ICursor$_path$arity$1 = ((function (x14731){
return (function (_){
var ___$1 = this;
return path;
});})(x14731))
;

x14731.om$core$ICursor$_state$arity$1 = ((function (x14731){
return (function (_){
var ___$1 = this;
return state;
});})(x14731))
;

x14731.om$core$ITransact$ = true;

x14731.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x14731){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x14731))
;

x14731.cljs$core$IEquiv$ = true;

x14731.cljs$core$IEquiv$_equiv$arity$2 = ((function (x14731){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x14731))
;

return x14731;
});
om.core.to_cursor = (function om$core$to_cursor(){
var G__14733 = arguments.length;
switch (G__14733) {
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
if((function (){var G__14734 = val;
if(G__14734){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14734.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__14734.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__14734);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__14734);
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
if((function (){var G__14735 = val;
if(G__14735){
var bit__5624__auto__ = (G__14735.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__5624__auto__) || (G__14735.cljs$core$ICloneable$)){
return true;
} else {
if((!G__14735.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__14735);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__14735);
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
if((function (){var G__14738 = atom;
if(G__14738){
var bit__5624__auto__ = (G__14738.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5624__auto__) || (G__14738.cljs$core$IDeref$)){
return true;
} else {
if((!G__14738.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__14738);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__14738);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x14740 = cljs.core.clone.call(null,x);
x14740.cljs$core$ICloneable$ = true;

x14740.cljs$core$ICloneable$_clone$arity$1 = ((function (x14740){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x14740))
;

x14740.om$core$IAdapt$ = true;

x14740.om$core$IAdapt$_adapt$arity$2 = ((function (x14740){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x14740))
;

x14740.om$core$ICursorDerive$ = true;

x14740.om$core$ICursorDerive$_derive$arity$4 = ((function (x14740){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x14740))
;

x14740.om$core$ITransact$ = true;

x14740.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x14740){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x14740))
;

return x14740;
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

if((function (){var G__14747 = cursor;
if(G__14747){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14747.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__14747.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__14747);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__14747);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x14748 = cljs.core.clone.call(null,cursor);
x14748.om$core$ICursorDerive$ = true;

x14748.om$core$ICursorDerive$_derive$arity$4 = ((function (x14748,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x14748,path,storage))
;

x14748.om$core$IOmRef$ = true;

x14748.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x14748,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x14748,path,storage))
;

x14748.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x14748,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x14748,path,storage))
;

x14748.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x14748,path,storage){
return (function (_){
var ___$1 = this;
var seq__14749 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__14750 = null;
var count__14751 = (0);
var i__14752 = (0);
while(true){
if((i__14752 < count__14751)){
var c = cljs.core._nth.call(null,chunk__14750,i__14752);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__14753 = seq__14749;
var G__14754 = chunk__14750;
var G__14755 = count__14751;
var G__14756 = (i__14752 + (1));
seq__14749 = G__14753;
chunk__14750 = G__14754;
count__14751 = G__14755;
i__14752 = G__14756;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__14749);
if(temp__4422__auto__){
var seq__14749__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14749__$1)){
var c__5735__auto__ = cljs.core.chunk_first.call(null,seq__14749__$1);
var G__14757 = cljs.core.chunk_rest.call(null,seq__14749__$1);
var G__14758 = c__5735__auto__;
var G__14759 = cljs.core.count.call(null,c__5735__auto__);
var G__14760 = (0);
seq__14749 = G__14757;
chunk__14750 = G__14758;
count__14751 = G__14759;
i__14752 = G__14760;
continue;
} else {
var c = cljs.core.first.call(null,seq__14749__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__14761 = cljs.core.next.call(null,seq__14749__$1);
var G__14762 = null;
var G__14763 = (0);
var G__14764 = (0);
seq__14749 = G__14761;
chunk__14750 = G__14762;
count__14751 = G__14763;
i__14752 = G__14764;
continue;
}
} else {
return null;
}
}
break;
}
});})(x14748,path,storage))
;

x14748.om$core$IOmRef$_get_deps$arity$1 = ((function (x14748,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x14748,path,storage))
;

x14748.om$core$ITransact$ = true;

x14748.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x14748,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x14748,path,storage))
;

return x14748;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4950__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
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
var or__4950__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function om$core$render_all(){
var G__14766 = arguments.length;
switch (G__14766) {
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

var seq__14767_14772 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__14768_14773 = null;
var count__14769_14774 = (0);
var i__14770_14775 = (0);
while(true){
if((i__14770_14775 < count__14769_14774)){
var f_14776 = cljs.core._nth.call(null,chunk__14768_14773,i__14770_14775);
f_14776.call(null);

var G__14777 = seq__14767_14772;
var G__14778 = chunk__14768_14773;
var G__14779 = count__14769_14774;
var G__14780 = (i__14770_14775 + (1));
seq__14767_14772 = G__14777;
chunk__14768_14773 = G__14778;
count__14769_14774 = G__14779;
i__14770_14775 = G__14780;
continue;
} else {
var temp__4422__auto___14781 = cljs.core.seq.call(null,seq__14767_14772);
if(temp__4422__auto___14781){
var seq__14767_14782__$1 = temp__4422__auto___14781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14767_14782__$1)){
var c__5735__auto___14783 = cljs.core.chunk_first.call(null,seq__14767_14782__$1);
var G__14784 = cljs.core.chunk_rest.call(null,seq__14767_14782__$1);
var G__14785 = c__5735__auto___14783;
var G__14786 = cljs.core.count.call(null,c__5735__auto___14783);
var G__14787 = (0);
seq__14767_14772 = G__14784;
chunk__14768_14773 = G__14785;
count__14769_14774 = G__14786;
i__14770_14775 = G__14787;
continue;
} else {
var f_14788 = cljs.core.first.call(null,seq__14767_14782__$1);
f_14788.call(null);

var G__14789 = cljs.core.next.call(null,seq__14767_14782__$1);
var G__14790 = null;
var G__14791 = (0);
var G__14792 = (0);
seq__14767_14772 = G__14789;
chunk__14768_14773 = G__14790;
count__14769_14774 = G__14791;
i__14770_14775 = G__14792;
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
if((function (){var or__4950__auto__ = (function (){var G__14799 = x;
if(G__14799){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14799.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__14799.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__14799);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__14799);
}
})();
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (function (){var G__14801 = x;
if(G__14801){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto____$1 = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto____$1)){
return or__4950__auto____$1;
} else {
return G__14801.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__14801.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__14801);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__14801);
}
})();
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
var G__14802 = x;
if(G__14802){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto____$2 = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto____$2)){
return or__4950__auto____$2;
} else {
return G__14802.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__14802.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__14802);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__14802);
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
var G__14804 = arguments.length;
switch (G__14804) {
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
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__4950__auto__ = descriptor;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4950__auto____$1)){
return or__4950__auto____$1;
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
var G__14807 = arguments.length;
switch (G__14807) {
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
var G__14810 = arguments.length;
switch (G__14810) {
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
var map__14811 = m;
var map__14811__$1 = ((cljs.core.seq_QMARK_.call(null,map__14811))?cljs.core.apply.call(null,cljs.core.hash_map,map__14811):map__14811);
var key = cljs.core.get.call(null,map__14811__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__14811__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__14811__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__14811__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__14811__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4420__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4420__auto__)){
var i = temp__4420__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__4950__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__14811,map__14811__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__14811,map__14811__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__14811,map__14811__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__14811,map__14811__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4950__auto__ = rkey;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
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
var G__14814 = arguments.length;
switch (G__14814) {
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
var G__14817 = arguments.length;
switch (G__14817) {
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
if((function (){var G__14827 = state;
if(G__14827){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14827.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__14827.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__14827);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__14827);
}
})()){
} else {
var properties_14835 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_14836 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_14837 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x14828_14838 = state;
x14828_14838.om$core$IRootProperties$ = true;

x14828_14838.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x14828_14838,properties_14835,listeners_14836,render_queue_14837){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_14835,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x14828_14838,properties_14835,listeners_14836,render_queue_14837))
;

x14828_14838.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x14828_14838,properties_14835,listeners_14836,render_queue_14837){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_14835,cljs.core.dissoc,id,k);
});})(x14828_14838,properties_14835,listeners_14836,render_queue_14837))
;

x14828_14838.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x14828_14838,properties_14835,listeners_14836,render_queue_14837){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_14835,cljs.core.dissoc,id);
});})(x14828_14838,properties_14835,listeners_14836,render_queue_14837))
;

x14828_14838.om$core$IRootProperties$_get_property$arity$3 = ((function (x14828_14838,properties_14835,listeners_14836,render_queue_14837){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_14835),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x14828_14838,properties_14835,listeners_14836,render_queue_14837))
;

x14828_14838.om$core$INotify$ = true;

x14828_14838.om$core$INotify$_listen_BANG_$arity$3 = ((function (x14828_14838,properties_14835,listeners_14836,render_queue_14837){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_14836,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x14828_14838,properties_14835,listeners_14836,render_queue_14837))
;

x14828_14838.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x14828_14838,properties_14835,listeners_14836,render_queue_14837){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_14836,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x14828_14838,properties_14835,listeners_14836,render_queue_14837))
;

x14828_14838.om$core$INotify$_notify_BANG_$arity$3 = ((function (x14828_14838,properties_14835,listeners_14836,render_queue_14837){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__14829_14839 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_14836));
var chunk__14830_14840 = null;
var count__14831_14841 = (0);
var i__14832_14842 = (0);
while(true){
if((i__14832_14842 < count__14831_14841)){
var vec__14833_14843 = cljs.core._nth.call(null,chunk__14830_14840,i__14832_14842);
var __14844 = cljs.core.nth.call(null,vec__14833_14843,(0),null);
var f_14845 = cljs.core.nth.call(null,vec__14833_14843,(1),null);
f_14845.call(null,tx_data,root_cursor);

var G__14846 = seq__14829_14839;
var G__14847 = chunk__14830_14840;
var G__14848 = count__14831_14841;
var G__14849 = (i__14832_14842 + (1));
seq__14829_14839 = G__14846;
chunk__14830_14840 = G__14847;
count__14831_14841 = G__14848;
i__14832_14842 = G__14849;
continue;
} else {
var temp__4422__auto___14850 = cljs.core.seq.call(null,seq__14829_14839);
if(temp__4422__auto___14850){
var seq__14829_14851__$1 = temp__4422__auto___14850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14829_14851__$1)){
var c__5735__auto___14852 = cljs.core.chunk_first.call(null,seq__14829_14851__$1);
var G__14853 = cljs.core.chunk_rest.call(null,seq__14829_14851__$1);
var G__14854 = c__5735__auto___14852;
var G__14855 = cljs.core.count.call(null,c__5735__auto___14852);
var G__14856 = (0);
seq__14829_14839 = G__14853;
chunk__14830_14840 = G__14854;
count__14831_14841 = G__14855;
i__14832_14842 = G__14856;
continue;
} else {
var vec__14834_14857 = cljs.core.first.call(null,seq__14829_14851__$1);
var __14858 = cljs.core.nth.call(null,vec__14834_14857,(0),null);
var f_14859 = cljs.core.nth.call(null,vec__14834_14857,(1),null);
f_14859.call(null,tx_data,root_cursor);

var G__14860 = cljs.core.next.call(null,seq__14829_14851__$1);
var G__14861 = null;
var G__14862 = (0);
var G__14863 = (0);
seq__14829_14839 = G__14860;
chunk__14830_14840 = G__14861;
count__14831_14841 = G__14862;
i__14832_14842 = G__14863;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x14828_14838,properties_14835,listeners_14836,render_queue_14837))
;

x14828_14838.om$core$IRenderQueue$ = true;

x14828_14838.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x14828_14838,properties_14835,listeners_14836,render_queue_14837){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_14837);
});})(x14828_14838,properties_14835,listeners_14836,render_queue_14837))
;

x14828_14838.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x14828_14838,properties_14835,listeners_14836,render_queue_14837){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_14837),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_14837,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x14828_14838,properties_14835,listeners_14836,render_queue_14837))
;

x14828_14838.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x14828_14838,properties_14835,listeners_14836,render_queue_14837){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_14837,cljs.core.empty);
});})(x14828_14838,properties_14835,listeners_14836,render_queue_14837))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x14865 = cljs.core.clone.call(null,cursor);
x14865.cljs$core$ICloneable$ = true;

x14865.cljs$core$ICloneable$_clone$arity$1 = ((function (x14865){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x14865))
;

x14865.om$core$IAdapt$ = true;

x14865.om$core$IAdapt$_adapt$arity$2 = ((function (x14865){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x14865))
;

x14865.om$core$IRootKey$ = true;

x14865.om$core$IRootKey$_root_key$arity$1 = ((function (x14865){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x14865))
;

return x14865;
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
om.core.root = (function om$core$root(f,value,p__14866){
var map__14929 = p__14866;
var map__14929__$1 = ((cljs.core.seq_QMARK_.call(null,map__14929))?cljs.core.apply.call(null,cljs.core.hash_map,map__14929):map__14929);
var options = map__14929__$1;
var target = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__14991 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__14991,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__14991,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__14930 = value;
if(G__14930){
var bit__5624__auto__ = (G__14930.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__5624__auto__) || (G__14930.cljs$core$IAtom$)){
return true;
} else {
if((!G__14930.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__14930);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__14930);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4950__auto__ = adapt;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__14929,map__14929__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_14992 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_14961 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_14962 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_14963 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_14964 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_14964;

om.core._STAR_state_STAR_ = _STAR_state_STAR_14963;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_14962;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_14961;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_14992);
} else {
}
}

var queue_14993 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_14993)){
} else {
var seq__14965_14994 = cljs.core.seq.call(null,queue_14993);
var chunk__14966_14995 = null;
var count__14967_14996 = (0);
var i__14968_14997 = (0);
while(true){
if((i__14968_14997 < count__14967_14996)){
var c_14998 = cljs.core._nth.call(null,chunk__14966_14995,i__14968_14997);
if(cljs.core.truth_(c_14998.isMounted())){
var temp__4422__auto___14999 = (c_14998.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4422__auto___14999)){
var next_props_15000 = temp__4422__auto___14999;
(c_14998.props["__om_cursor"] = next_props_15000);

(c_14998.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4950__auto__ = !((function (){var G__14970 = om.core.children.call(null,c_14998);
if(G__14970){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14970.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__14970.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__14970);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__14970);
}
})());
if(or__4950__auto__){
return or__4950__auto__;
} else {
return c_14998.shouldComponentUpdate(c_14998.props,c_14998.state);
}
})())){
c_14998.forceUpdate();
} else {
}
} else {
}

var G__15001 = seq__14965_14994;
var G__15002 = chunk__14966_14995;
var G__15003 = count__14967_14996;
var G__15004 = (i__14968_14997 + (1));
seq__14965_14994 = G__15001;
chunk__14966_14995 = G__15002;
count__14967_14996 = G__15003;
i__14968_14997 = G__15004;
continue;
} else {
var temp__4422__auto___15005 = cljs.core.seq.call(null,seq__14965_14994);
if(temp__4422__auto___15005){
var seq__14965_15006__$1 = temp__4422__auto___15005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14965_15006__$1)){
var c__5735__auto___15007 = cljs.core.chunk_first.call(null,seq__14965_15006__$1);
var G__15008 = cljs.core.chunk_rest.call(null,seq__14965_15006__$1);
var G__15009 = c__5735__auto___15007;
var G__15010 = cljs.core.count.call(null,c__5735__auto___15007);
var G__15011 = (0);
seq__14965_14994 = G__15008;
chunk__14966_14995 = G__15009;
count__14967_14996 = G__15010;
i__14968_14997 = G__15011;
continue;
} else {
var c_15012 = cljs.core.first.call(null,seq__14965_15006__$1);
if(cljs.core.truth_(c_15012.isMounted())){
var temp__4422__auto___15013__$1 = (c_15012.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4422__auto___15013__$1)){
var next_props_15014 = temp__4422__auto___15013__$1;
(c_15012.props["__om_cursor"] = next_props_15014);

(c_15012.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4950__auto__ = !((function (){var G__14972 = om.core.children.call(null,c_15012);
if(G__14972){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__14972.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__14972.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__14972);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__14972);
}
})());
if(or__4950__auto__){
return or__4950__auto__;
} else {
return c_15012.shouldComponentUpdate(c_15012.props,c_15012.state);
}
})())){
c_15012.forceUpdate();
} else {
}
} else {
}

var G__15015 = cljs.core.next.call(null,seq__14965_15006__$1);
var G__15016 = null;
var G__15017 = (0);
var G__15018 = (0);
seq__14965_14994 = G__15015;
chunk__14966_14995 = G__15016;
count__14967_14996 = G__15017;
i__14968_14997 = G__15018;
continue;
}
} else {
}
}
break;
}
}

var _refs_15019 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_15019)){
} else {
var seq__14973_15020 = cljs.core.seq.call(null,_refs_15019);
var chunk__14974_15021 = null;
var count__14975_15022 = (0);
var i__14976_15023 = (0);
while(true){
if((i__14976_15023 < count__14975_15022)){
var vec__14977_15024 = cljs.core._nth.call(null,chunk__14974_15021,i__14976_15023);
var path_15025__$1 = cljs.core.nth.call(null,vec__14977_15024,(0),null);
var cs_15026 = cljs.core.nth.call(null,vec__14977_15024,(1),null);
var cs_15027__$1 = cljs.core.deref.call(null,cs_15026);
var seq__14978_15028 = cljs.core.seq.call(null,cs_15027__$1);
var chunk__14979_15029 = null;
var count__14980_15030 = (0);
var i__14981_15031 = (0);
while(true){
if((i__14981_15031 < count__14980_15030)){
var vec__14982_15032 = cljs.core._nth.call(null,chunk__14979_15029,i__14981_15031);
var id_15033 = cljs.core.nth.call(null,vec__14982_15032,(0),null);
var c_15034 = cljs.core.nth.call(null,vec__14982_15032,(1),null);
if(cljs.core.truth_(c_15034.shouldComponentUpdate(c_15034.props,c_15034.state))){
c_15034.forceUpdate();
} else {
}

var G__15035 = seq__14978_15028;
var G__15036 = chunk__14979_15029;
var G__15037 = count__14980_15030;
var G__15038 = (i__14981_15031 + (1));
seq__14978_15028 = G__15035;
chunk__14979_15029 = G__15036;
count__14980_15030 = G__15037;
i__14981_15031 = G__15038;
continue;
} else {
var temp__4422__auto___15039 = cljs.core.seq.call(null,seq__14978_15028);
if(temp__4422__auto___15039){
var seq__14978_15040__$1 = temp__4422__auto___15039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14978_15040__$1)){
var c__5735__auto___15041 = cljs.core.chunk_first.call(null,seq__14978_15040__$1);
var G__15042 = cljs.core.chunk_rest.call(null,seq__14978_15040__$1);
var G__15043 = c__5735__auto___15041;
var G__15044 = cljs.core.count.call(null,c__5735__auto___15041);
var G__15045 = (0);
seq__14978_15028 = G__15042;
chunk__14979_15029 = G__15043;
count__14980_15030 = G__15044;
i__14981_15031 = G__15045;
continue;
} else {
var vec__14983_15046 = cljs.core.first.call(null,seq__14978_15040__$1);
var id_15047 = cljs.core.nth.call(null,vec__14983_15046,(0),null);
var c_15048 = cljs.core.nth.call(null,vec__14983_15046,(1),null);
if(cljs.core.truth_(c_15048.shouldComponentUpdate(c_15048.props,c_15048.state))){
c_15048.forceUpdate();
} else {
}

var G__15049 = cljs.core.next.call(null,seq__14978_15040__$1);
var G__15050 = null;
var G__15051 = (0);
var G__15052 = (0);
seq__14978_15028 = G__15049;
chunk__14979_15029 = G__15050;
count__14980_15030 = G__15051;
i__14981_15031 = G__15052;
continue;
}
} else {
}
}
break;
}

var G__15053 = seq__14973_15020;
var G__15054 = chunk__14974_15021;
var G__15055 = count__14975_15022;
var G__15056 = (i__14976_15023 + (1));
seq__14973_15020 = G__15053;
chunk__14974_15021 = G__15054;
count__14975_15022 = G__15055;
i__14976_15023 = G__15056;
continue;
} else {
var temp__4422__auto___15057 = cljs.core.seq.call(null,seq__14973_15020);
if(temp__4422__auto___15057){
var seq__14973_15058__$1 = temp__4422__auto___15057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14973_15058__$1)){
var c__5735__auto___15059 = cljs.core.chunk_first.call(null,seq__14973_15058__$1);
var G__15060 = cljs.core.chunk_rest.call(null,seq__14973_15058__$1);
var G__15061 = c__5735__auto___15059;
var G__15062 = cljs.core.count.call(null,c__5735__auto___15059);
var G__15063 = (0);
seq__14973_15020 = G__15060;
chunk__14974_15021 = G__15061;
count__14975_15022 = G__15062;
i__14976_15023 = G__15063;
continue;
} else {
var vec__14984_15064 = cljs.core.first.call(null,seq__14973_15058__$1);
var path_15065__$1 = cljs.core.nth.call(null,vec__14984_15064,(0),null);
var cs_15066 = cljs.core.nth.call(null,vec__14984_15064,(1),null);
var cs_15067__$1 = cljs.core.deref.call(null,cs_15066);
var seq__14985_15068 = cljs.core.seq.call(null,cs_15067__$1);
var chunk__14986_15069 = null;
var count__14987_15070 = (0);
var i__14988_15071 = (0);
while(true){
if((i__14988_15071 < count__14987_15070)){
var vec__14989_15072 = cljs.core._nth.call(null,chunk__14986_15069,i__14988_15071);
var id_15073 = cljs.core.nth.call(null,vec__14989_15072,(0),null);
var c_15074 = cljs.core.nth.call(null,vec__14989_15072,(1),null);
if(cljs.core.truth_(c_15074.shouldComponentUpdate(c_15074.props,c_15074.state))){
c_15074.forceUpdate();
} else {
}

var G__15075 = seq__14985_15068;
var G__15076 = chunk__14986_15069;
var G__15077 = count__14987_15070;
var G__15078 = (i__14988_15071 + (1));
seq__14985_15068 = G__15075;
chunk__14986_15069 = G__15076;
count__14987_15070 = G__15077;
i__14988_15071 = G__15078;
continue;
} else {
var temp__4422__auto___15079__$1 = cljs.core.seq.call(null,seq__14985_15068);
if(temp__4422__auto___15079__$1){
var seq__14985_15080__$1 = temp__4422__auto___15079__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14985_15080__$1)){
var c__5735__auto___15081 = cljs.core.chunk_first.call(null,seq__14985_15080__$1);
var G__15082 = cljs.core.chunk_rest.call(null,seq__14985_15080__$1);
var G__15083 = c__5735__auto___15081;
var G__15084 = cljs.core.count.call(null,c__5735__auto___15081);
var G__15085 = (0);
seq__14985_15068 = G__15082;
chunk__14986_15069 = G__15083;
count__14987_15070 = G__15084;
i__14988_15071 = G__15085;
continue;
} else {
var vec__14990_15086 = cljs.core.first.call(null,seq__14985_15080__$1);
var id_15087 = cljs.core.nth.call(null,vec__14990_15086,(0),null);
var c_15088 = cljs.core.nth.call(null,vec__14990_15086,(1),null);
if(cljs.core.truth_(c_15088.shouldComponentUpdate(c_15088.props,c_15088.state))){
c_15088.forceUpdate();
} else {
}

var G__15089 = cljs.core.next.call(null,seq__14985_15080__$1);
var G__15090 = null;
var G__15091 = (0);
var G__15092 = (0);
seq__14985_15068 = G__15089;
chunk__14986_15069 = G__15090;
count__14987_15070 = G__15091;
i__14988_15071 = G__15092;
continue;
}
} else {
}
}
break;
}

var G__15093 = cljs.core.next.call(null,seq__14973_15058__$1);
var G__15094 = null;
var G__15095 = (0);
var G__15096 = (0);
seq__14973_15020 = G__15093;
chunk__14974_15021 = G__15094;
count__14975_15022 = G__15095;
i__14976_15023 = G__15096;
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
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__14929,map__14929__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14929,map__14929__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
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
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14929,map__14929__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14929,map__14929__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14929,map__14929__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14929,map__14929__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14929,map__14929__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14929,map__14929__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14929,map__14929__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
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

var temp__4422__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4422__auto__)){
var f = temp__4422__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__15098 = x;
if(G__15098){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__15098.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__15098.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__15098);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__15098);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var G__15100 = arguments.length;
switch (G__15100) {
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
var G__15103 = arguments.length;
switch (G__15103) {
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

var key = (((function (){var G__15106 = cursor;
if(G__15106){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__15106.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__15106.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__15106);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__15106);
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
var G__15108 = arguments.length;
switch (G__15108) {
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

var temp__4422__auto__ = owner.refs;
if(cljs.core.truth_(temp__4422__auto__)){
var refs = temp__4422__auto__;
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
var G__15111 = arguments.length;
switch (G__15111) {
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
var G__15114 = arguments.length;
switch (G__15114) {
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
var G__15117 = arguments.length;
switch (G__15117) {
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
var G__15120 = arguments.length;
switch (G__15120) {
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
var G__15123 = arguments.length;
switch (G__15123) {
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