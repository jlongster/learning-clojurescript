// Compiled by ClojureScript 0.0-3126 {}
goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.WebSocket');
goog.require('goog.net.EventType');
goog.require('goog.json');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
goog.require('goog.net.xpc.CrossPageChannel');
clojure.browser.net._STAR_timeout_STAR_ = (10000);
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__121){
var vec__122 = p__121;
var k = cljs.core.nth.call(null,vec__122,(0),null);
var v = cljs.core.nth.call(null,vec__122,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));

clojure.browser.net.IConnection = (function (){var obj124 = {};
return obj124;
})();

clojure.browser.net.connect = (function() {
var clojure$browser$net$connect = null;
var clojure$browser$net$connect__1 = (function (this$){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$1;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.connect[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var clojure$browser$net$connect__2 = (function (this$,opt1){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$2;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.connect[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var clojure$browser$net$connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$3;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.connect[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var clojure$browser$net$connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$4;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.connect[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
clojure$browser$net$connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return clojure$browser$net$connect__1.call(this,this$);
case 2:
return clojure$browser$net$connect__2.call(this,this$,opt1);
case 3:
return clojure$browser$net$connect__3.call(this,this$,opt1,opt2);
case 4:
return clojure$browser$net$connect__4.call(this,this$,opt1,opt2,opt3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$net$connect.cljs$core$IFn$_invoke$arity$1 = clojure$browser$net$connect__1;
clojure$browser$net$connect.cljs$core$IFn$_invoke$arity$2 = clojure$browser$net$connect__2;
clojure$browser$net$connect.cljs$core$IFn$_invoke$arity$3 = clojure$browser$net$connect__3;
clojure$browser$net$connect.cljs$core$IFn$_invoke$arity$4 = clojure$browser$net$connect__4;
return clojure$browser$net$connect;
})()
;

clojure.browser.net.transmit = (function() {
var clojure$browser$net$transmit = null;
var clojure$browser$net$transmit__2 = (function (this$,opt){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var clojure$browser$net$transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var clojure$browser$net$transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var clojure$browser$net$transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var clojure$browser$net$transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
clojure$browser$net$transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return clojure$browser$net$transmit__2.call(this,this$,opt);
case 3:
return clojure$browser$net$transmit__3.call(this,this$,opt,opt2);
case 4:
return clojure$browser$net$transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return clojure$browser$net$transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return clojure$browser$net$transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$net$transmit.cljs$core$IFn$_invoke$arity$2 = clojure$browser$net$transmit__2;
clojure$browser$net$transmit.cljs$core$IFn$_invoke$arity$3 = clojure$browser$net$transmit__3;
clojure$browser$net$transmit.cljs$core$IFn$_invoke$arity$4 = clojure$browser$net$transmit__4;
clojure$browser$net$transmit.cljs$core$IFn$_invoke$arity$5 = clojure$browser$net$transmit__5;
clojure$browser$net$transmit.cljs$core$IFn$_invoke$arity$6 = clojure$browser$net$transmit__6;
return clojure$browser$net$transmit;
})()
;

clojure.browser.net.close = (function clojure$browser$net$close(this$){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IConnection$close$arity$1;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.close[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.close["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});

goog.net.XhrIo.prototype.clojure$browser$event$IEventType$ = true;

goog.net.XhrIo.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__125){
var vec__126 = p__125;
var k = cljs.core.nth.call(null,vec__126,(0),null);
var v = cljs.core.nth.call(null,vec__126,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
var this$__$1 = this;
this$__$1.setTimeoutInterval(timeout);

return this$__$1.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__127){
var vec__128 = p__127;
var k = cljs.core.nth.call(null,vec__128,(0),null);
var v = cljs.core.nth.call(null,vec__128,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
 * Returns an XhrIo connection
 */
clojure.browser.net.xhr_connection = (function clojure$browser$net$xhr_connection(){
return (new goog.net.XhrIo());
});

clojure.browser.net.ICrossPageChannel = (function (){var obj130 = {};
return obj130;
})();

clojure.browser.net.register_service = (function() {
var clojure$browser$net$register_service = null;
var clojure$browser$net$register_service__3 = (function (this$,service_name,fn){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.register_service["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var clojure$browser$net$register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.register_service["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
clojure$browser$net$register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$net$register_service__3.call(this,this$,service_name,fn);
case 4:
return clojure$browser$net$register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$net$register_service.cljs$core$IFn$_invoke$arity$3 = clojure$browser$net$register_service__3;
clojure$browser$net$register_service.cljs$core$IFn$_invoke$arity$4 = clojure$browser$net$register_service__4;
return clojure$browser$net$register_service;
})()
;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,null);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
var this$__$1 = this;
return this$__$1.connect(on_connect_fn);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,on_connect_fn,config_iframe_fn,document.body);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
var this$__$1 = this;
this$__$1.createPeerIframe(iframe_parent,config_iframe_fn);

return this$__$1.connect(on_connect_fn);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
var this$__$1 = this;
return this$__$1.send(cljs.core.name.call(null,service_name),payload);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close();
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
var this$__$1 = this;
return clojure.browser.net.register_service.call(null,this$__$1,service_name,fn,false);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
var this$__$1 = this;
return this$__$1.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
/**
 * When passed with a config hash-map, returns a parent
 * CrossPageChannel object. Keys in the config hash map are downcased
 * versions of the goog.net.xpc.CfgFields enum keys,
 * e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
 * hash.
 * 
 * When passed with no args, creates a child CrossPageChannel object,
 * and the config is automatically taken from the URL param 'xpc', as
 * per the CrossPageChannel API.
 */
clojure.browser.net.xpc_connection = (function() {
var clojure$browser$net$xpc_connection = null;
var clojure$browser$net$xpc_connection__0 = (function (){
var temp__4126__auto__ = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__4126__auto__)){
var config = temp__4126__auto__;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config)));
} else {
return null;
}
});
var clojure$browser$net$xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__136){
var vec__137 = p__136;
var k = cljs.core.nth.call(null,vec__137,(0),null);
var v = cljs.core.nth.call(null,vec__137,(1),null);
var temp__4124__auto__ = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k);
if(cljs.core.truth_(temp__4124__auto__)){
var field = temp__4124__auto__;
var G__138 = sum;
(G__138[field] = v);

return G__138;
} else {
return sum;
}
}),(function (){var obj140 = {};
return obj140;
})(),config)));
});
clojure$browser$net$xpc_connection = function(config){
switch(arguments.length){
case 0:
return clojure$browser$net$xpc_connection__0.call(this);
case 1:
return clojure$browser$net$xpc_connection__1.call(this,config);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$net$xpc_connection.cljs$core$IFn$_invoke$arity$0 = clojure$browser$net$xpc_connection__0;
clojure$browser$net$xpc_connection.cljs$core$IFn$_invoke$arity$1 = clojure$browser$net$xpc_connection__1;
return clojure$browser$net$xpc_connection;
})()
;

clojure.browser.net.IWebSocket = (function (){var obj142 = {};
return obj142;
})();

clojure.browser.net.open_QMARK_ = (function clojure$browser$net$open_QMARK_(this$){
if((function (){var and__3134__auto__ = this$;
if(and__3134__auto__){
return this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1;
} else {
return and__3134__auto__;
}
})()){
return this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1(this$);
} else {
var x__3406__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3142__auto__ = (clojure.browser.net.open_QMARK_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (clojure.browser.net.open_QMARK_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWebSocket.open?",this$);
}
}
})().call(null,this$);
}
});

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = true;

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__143){
var vec__144 = p__143;
var k = cljs.core.nth.call(null,vec__144,(0),null);
var v = cljs.core.nth.call(null,vec__144,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.WebSocket.EventType))));
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = true;

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,url,null);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
return this$__$1.send(message);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$ = true;

goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
});
clojure.browser.net.websocket_connection = (function() {
var clojure$browser$net$websocket_connection = null;
var clojure$browser$net$websocket_connection__0 = (function (){
return clojure$browser$net$websocket_connection.call(null,null,null);
});
var clojure$browser$net$websocket_connection__1 = (function (auto_reconnect_QMARK_){
return clojure$browser$net$websocket_connection.call(null,auto_reconnect_QMARK_,null);
});
var clojure$browser$net$websocket_connection__2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
});
clojure$browser$net$websocket_connection = function(auto_reconnect_QMARK_,next_reconnect_fn){
switch(arguments.length){
case 0:
return clojure$browser$net$websocket_connection__0.call(this);
case 1:
return clojure$browser$net$websocket_connection__1.call(this,auto_reconnect_QMARK_);
case 2:
return clojure$browser$net$websocket_connection__2.call(this,auto_reconnect_QMARK_,next_reconnect_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$net$websocket_connection.cljs$core$IFn$_invoke$arity$0 = clojure$browser$net$websocket_connection__0;
clojure$browser$net$websocket_connection.cljs$core$IFn$_invoke$arity$1 = clojure$browser$net$websocket_connection__1;
clojure$browser$net$websocket_connection.cljs$core$IFn$_invoke$arity$2 = clojure$browser$net$websocket_connection__2;
return clojure$browser$net$websocket_connection;
})()
;

//# sourceMappingURL=net.js.map