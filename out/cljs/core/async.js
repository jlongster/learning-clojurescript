// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t4083 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4083 = (function (f,fn_handler,meta4084){
this.f = f;
this.fn_handler = fn_handler;
this.meta4084 = meta4084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t4083.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t4083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t4083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t4083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4085){
var self__ = this;
var _4085__$1 = this;
return self__.meta4084;
});

cljs.core.async.t4083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4085,meta4084__$1){
var self__ = this;
var _4085__$1 = this;
return (new cljs.core.async.t4083(self__.f,self__.fn_handler,meta4084__$1));
});

cljs.core.async.t4083.cljs$lang$type = true;

cljs.core.async.t4083.cljs$lang$ctorStr = "cljs.core.async/t4083";

cljs.core.async.t4083.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs.core.async/t4083");
});

cljs.core.async.__GT_t4083 = (function cljs$core$async$fn_handler_$___GT_t4083(f__$1,fn_handler__$1,meta4084){
return (new cljs.core.async.t4083(f__$1,fn_handler__$1,meta4084));
});

}

return (new cljs.core.async.t4083(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__4087 = buff;
if(G__4087){
var bit__3436__auto__ = null;
if(cljs.core.truth_((function (){var or__3142__auto__ = bit__3436__auto__;
if(cljs.core.truth_(or__3142__auto__)){
return or__3142__auto__;
} else {
return G__4087.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__4087.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__4087);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__4087);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_4088 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_4088);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_4088,ret){
return (function (){
return fn1.call(null,val_4088);
});})(val_4088,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__3563__auto___4089 = n;
var x_4090 = (0);
while(true){
if((x_4090 < n__3563__auto___4089)){
(a[x_4090] = (0));

var G__4091 = (x_4090 + (1));
x_4090 = G__4091;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__4092 = (i + (1));
i = G__4092;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t4096 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4096 = (function (flag,alt_flag,meta4097){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta4097 = meta4097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t4096.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t4096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t4096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t4096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_4098){
var self__ = this;
var _4098__$1 = this;
return self__.meta4097;
});})(flag))
;

cljs.core.async.t4096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_4098,meta4097__$1){
var self__ = this;
var _4098__$1 = this;
return (new cljs.core.async.t4096(self__.flag,self__.alt_flag,meta4097__$1));
});})(flag))
;

cljs.core.async.t4096.cljs$lang$type = true;

cljs.core.async.t4096.cljs$lang$ctorStr = "cljs.core.async/t4096";

cljs.core.async.t4096.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs.core.async/t4096");
});})(flag))
;

cljs.core.async.__GT_t4096 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t4096(flag__$1,alt_flag__$1,meta4097){
return (new cljs.core.async.t4096(flag__$1,alt_flag__$1,meta4097));
});})(flag))
;

}

return (new cljs.core.async.t4096(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t4102 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4102 = (function (cb,flag,alt_handler,meta4103){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta4103 = meta4103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t4102.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t4102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t4102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t4102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4104){
var self__ = this;
var _4104__$1 = this;
return self__.meta4103;
});

cljs.core.async.t4102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4104,meta4103__$1){
var self__ = this;
var _4104__$1 = this;
return (new cljs.core.async.t4102(self__.cb,self__.flag,self__.alt_handler,meta4103__$1));
});

cljs.core.async.t4102.cljs$lang$type = true;

cljs.core.async.t4102.cljs$lang$ctorStr = "cljs.core.async/t4102";

cljs.core.async.t4102.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs.core.async/t4102");
});

cljs.core.async.__GT_t4102 = (function cljs$core$async$alt_handler_$___GT_t4102(cb__$1,flag__$1,alt_handler__$1,meta4103){
return (new cljs.core.async.t4102(cb__$1,flag__$1,alt_handler__$1,meta4103));
});

}

return (new cljs.core.async.t4102(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4105_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4105_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4106_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4106_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3142__auto__ = wport;
if(cljs.core.truth_(or__3142__auto__)){
return or__3142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__4107 = (i + (1));
i = G__4107;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3142__auto__ = ret;
if(cljs.core.truth_(or__3142__auto__)){
return or__3142__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3134__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3134__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3134__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__4108){
var map__4110 = p__4108;
var map__4110__$1 = ((cljs.core.seq_QMARK_.call(null,map__4110))?cljs.core.apply.call(null,cljs.core.hash_map,map__4110):map__4110);
var opts = map__4110__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__4108 = null;
if (arguments.length > 1) {
var G__4111__i = 0, G__4111__a = new Array(arguments.length -  1);
while (G__4111__i < G__4111__a.length) {G__4111__a[G__4111__i] = arguments[G__4111__i + 1]; ++G__4111__i;}
  p__4108 = new cljs.core.IndexedSeq(G__4111__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__4108);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__4112){
var ports = cljs.core.first(arglist__4112);
var p__4108 = cljs.core.rest(arglist__4112);
return cljs$core$async$alts_BANG___delegate(ports,p__4108);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__1322__auto___4207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___4207){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___4207){
return (function (state_4183){
var state_val_4184 = (state_4183[(1)]);
if((state_val_4184 === (7))){
var inst_4179 = (state_4183[(2)]);
var state_4183__$1 = state_4183;
var statearr_4185_4208 = state_4183__$1;
(statearr_4185_4208[(2)] = inst_4179);

(statearr_4185_4208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4184 === (1))){
var state_4183__$1 = state_4183;
var statearr_4186_4209 = state_4183__$1;
(statearr_4186_4209[(2)] = null);

(statearr_4186_4209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4184 === (4))){
var inst_4162 = (state_4183[(7)]);
var inst_4162__$1 = (state_4183[(2)]);
var inst_4163 = (inst_4162__$1 == null);
var state_4183__$1 = (function (){var statearr_4187 = state_4183;
(statearr_4187[(7)] = inst_4162__$1);

return statearr_4187;
})();
if(cljs.core.truth_(inst_4163)){
var statearr_4188_4210 = state_4183__$1;
(statearr_4188_4210[(1)] = (5));

} else {
var statearr_4189_4211 = state_4183__$1;
(statearr_4189_4211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4184 === (13))){
var state_4183__$1 = state_4183;
var statearr_4190_4212 = state_4183__$1;
(statearr_4190_4212[(2)] = null);

(statearr_4190_4212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4184 === (6))){
var inst_4162 = (state_4183[(7)]);
var state_4183__$1 = state_4183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4183__$1,(11),to,inst_4162);
} else {
if((state_val_4184 === (3))){
var inst_4181 = (state_4183[(2)]);
var state_4183__$1 = state_4183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4183__$1,inst_4181);
} else {
if((state_val_4184 === (12))){
var state_4183__$1 = state_4183;
var statearr_4191_4213 = state_4183__$1;
(statearr_4191_4213[(2)] = null);

(statearr_4191_4213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4184 === (2))){
var state_4183__$1 = state_4183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4183__$1,(4),from);
} else {
if((state_val_4184 === (11))){
var inst_4172 = (state_4183[(2)]);
var state_4183__$1 = state_4183;
if(cljs.core.truth_(inst_4172)){
var statearr_4192_4214 = state_4183__$1;
(statearr_4192_4214[(1)] = (12));

} else {
var statearr_4193_4215 = state_4183__$1;
(statearr_4193_4215[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4184 === (9))){
var state_4183__$1 = state_4183;
var statearr_4194_4216 = state_4183__$1;
(statearr_4194_4216[(2)] = null);

(statearr_4194_4216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4184 === (5))){
var state_4183__$1 = state_4183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4195_4217 = state_4183__$1;
(statearr_4195_4217[(1)] = (8));

} else {
var statearr_4196_4218 = state_4183__$1;
(statearr_4196_4218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4184 === (14))){
var inst_4177 = (state_4183[(2)]);
var state_4183__$1 = state_4183;
var statearr_4197_4219 = state_4183__$1;
(statearr_4197_4219[(2)] = inst_4177);

(statearr_4197_4219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4184 === (10))){
var inst_4169 = (state_4183[(2)]);
var state_4183__$1 = state_4183;
var statearr_4198_4220 = state_4183__$1;
(statearr_4198_4220[(2)] = inst_4169);

(statearr_4198_4220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4184 === (8))){
var inst_4166 = cljs.core.async.close_BANG_.call(null,to);
var state_4183__$1 = state_4183;
var statearr_4199_4221 = state_4183__$1;
(statearr_4199_4221[(2)] = inst_4166);

(statearr_4199_4221[(1)] = (10));


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
});})(c__1322__auto___4207))
;
return ((function (switch__1266__auto__,c__1322__auto___4207){
return (function() {
var cljs$core$async$pipe_$_state_machine__1267__auto__ = null;
var cljs$core$async$pipe_$_state_machine__1267__auto____0 = (function (){
var statearr_4203 = [null,null,null,null,null,null,null,null];
(statearr_4203[(0)] = cljs$core$async$pipe_$_state_machine__1267__auto__);

(statearr_4203[(1)] = (1));

return statearr_4203;
});
var cljs$core$async$pipe_$_state_machine__1267__auto____1 = (function (state_4183){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4204){if((e4204 instanceof Object)){
var ex__1270__auto__ = e4204;
var statearr_4205_4222 = state_4183;
(statearr_4205_4222[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4223 = state_4183;
state_4183 = G__4223;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__1267__auto__ = function(state_4183){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__1267__auto____1.call(this,state_4183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__1267__auto____0;
cljs$core$async$pipe_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__1267__auto____1;
return cljs$core$async$pipe_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___4207))
})();
var state__1324__auto__ = (function (){var statearr_4206 = f__1323__auto__.call(null);
(statearr_4206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___4207);

return statearr_4206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___4207))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__4407){
var vec__4408 = p__4407;
var v = cljs.core.nth.call(null,vec__4408,(0),null);
var p = cljs.core.nth.call(null,vec__4408,(1),null);
var job = vec__4408;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__1322__auto___4590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___4590,res,vec__4408,v,p,job,jobs,results){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___4590,res,vec__4408,v,p,job,jobs,results){
return (function (state_4413){
var state_val_4414 = (state_4413[(1)]);
if((state_val_4414 === (2))){
var inst_4410 = (state_4413[(2)]);
var inst_4411 = cljs.core.async.close_BANG_.call(null,res);
var state_4413__$1 = (function (){var statearr_4415 = state_4413;
(statearr_4415[(7)] = inst_4410);

return statearr_4415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4413__$1,inst_4411);
} else {
if((state_val_4414 === (1))){
var state_4413__$1 = state_4413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4413__$1,(2),res,v);
} else {
return null;
}
}
});})(c__1322__auto___4590,res,vec__4408,v,p,job,jobs,results))
;
return ((function (switch__1266__auto__,c__1322__auto___4590,res,vec__4408,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_4419 = [null,null,null,null,null,null,null,null];
(statearr_4419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__);

(statearr_4419[(1)] = (1));

return statearr_4419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1 = (function (state_4413){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4420){if((e4420 instanceof Object)){
var ex__1270__auto__ = e4420;
var statearr_4421_4591 = state_4413;
(statearr_4421_4591[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4592 = state_4413;
state_4413 = G__4592;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = function(state_4413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1.call(this,state_4413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___4590,res,vec__4408,v,p,job,jobs,results))
})();
var state__1324__auto__ = (function (){var statearr_4422 = f__1323__auto__.call(null);
(statearr_4422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___4590);

return statearr_4422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___4590,res,vec__4408,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4423){
var vec__4424 = p__4423;
var v = cljs.core.nth.call(null,vec__4424,(0),null);
var p = cljs.core.nth.call(null,vec__4424,(1),null);
var job = vec__4424;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__3563__auto___4593 = n;
var __4594 = (0);
while(true){
if((__4594 < n__3563__auto___4593)){
var G__4425_4595 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__4425_4595) {
case "async":
var c__1322__auto___4597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4594,c__1322__auto___4597,G__4425_4595,n__3563__auto___4593,jobs,results,process,async){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (__4594,c__1322__auto___4597,G__4425_4595,n__3563__auto___4593,jobs,results,process,async){
return (function (state_4438){
var state_val_4439 = (state_4438[(1)]);
if((state_val_4439 === (7))){
var inst_4434 = (state_4438[(2)]);
var state_4438__$1 = state_4438;
var statearr_4440_4598 = state_4438__$1;
(statearr_4440_4598[(2)] = inst_4434);

(statearr_4440_4598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4439 === (6))){
var state_4438__$1 = state_4438;
var statearr_4441_4599 = state_4438__$1;
(statearr_4441_4599[(2)] = null);

(statearr_4441_4599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4439 === (5))){
var state_4438__$1 = state_4438;
var statearr_4442_4600 = state_4438__$1;
(statearr_4442_4600[(2)] = null);

(statearr_4442_4600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4439 === (4))){
var inst_4428 = (state_4438[(2)]);
var inst_4429 = async.call(null,inst_4428);
var state_4438__$1 = state_4438;
if(cljs.core.truth_(inst_4429)){
var statearr_4443_4601 = state_4438__$1;
(statearr_4443_4601[(1)] = (5));

} else {
var statearr_4444_4602 = state_4438__$1;
(statearr_4444_4602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4439 === (3))){
var inst_4436 = (state_4438[(2)]);
var state_4438__$1 = state_4438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4438__$1,inst_4436);
} else {
if((state_val_4439 === (2))){
var state_4438__$1 = state_4438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4438__$1,(4),jobs);
} else {
if((state_val_4439 === (1))){
var state_4438__$1 = state_4438;
var statearr_4445_4603 = state_4438__$1;
(statearr_4445_4603[(2)] = null);

(statearr_4445_4603[(1)] = (2));


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
});})(__4594,c__1322__auto___4597,G__4425_4595,n__3563__auto___4593,jobs,results,process,async))
;
return ((function (__4594,switch__1266__auto__,c__1322__auto___4597,G__4425_4595,n__3563__auto___4593,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_4449 = [null,null,null,null,null,null,null];
(statearr_4449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__);

(statearr_4449[(1)] = (1));

return statearr_4449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1 = (function (state_4438){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4450){if((e4450 instanceof Object)){
var ex__1270__auto__ = e4450;
var statearr_4451_4604 = state_4438;
(statearr_4451_4604[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4605 = state_4438;
state_4438 = G__4605;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = function(state_4438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1.call(this,state_4438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__;
})()
;})(__4594,switch__1266__auto__,c__1322__auto___4597,G__4425_4595,n__3563__auto___4593,jobs,results,process,async))
})();
var state__1324__auto__ = (function (){var statearr_4452 = f__1323__auto__.call(null);
(statearr_4452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___4597);

return statearr_4452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(__4594,c__1322__auto___4597,G__4425_4595,n__3563__auto___4593,jobs,results,process,async))
);


break;
case "compute":
var c__1322__auto___4606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4594,c__1322__auto___4606,G__4425_4595,n__3563__auto___4593,jobs,results,process,async){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (__4594,c__1322__auto___4606,G__4425_4595,n__3563__auto___4593,jobs,results,process,async){
return (function (state_4465){
var state_val_4466 = (state_4465[(1)]);
if((state_val_4466 === (7))){
var inst_4461 = (state_4465[(2)]);
var state_4465__$1 = state_4465;
var statearr_4467_4607 = state_4465__$1;
(statearr_4467_4607[(2)] = inst_4461);

(statearr_4467_4607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4466 === (6))){
var state_4465__$1 = state_4465;
var statearr_4468_4608 = state_4465__$1;
(statearr_4468_4608[(2)] = null);

(statearr_4468_4608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4466 === (5))){
var state_4465__$1 = state_4465;
var statearr_4469_4609 = state_4465__$1;
(statearr_4469_4609[(2)] = null);

(statearr_4469_4609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4466 === (4))){
var inst_4455 = (state_4465[(2)]);
var inst_4456 = process.call(null,inst_4455);
var state_4465__$1 = state_4465;
if(cljs.core.truth_(inst_4456)){
var statearr_4470_4610 = state_4465__$1;
(statearr_4470_4610[(1)] = (5));

} else {
var statearr_4471_4611 = state_4465__$1;
(statearr_4471_4611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4466 === (3))){
var inst_4463 = (state_4465[(2)]);
var state_4465__$1 = state_4465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4465__$1,inst_4463);
} else {
if((state_val_4466 === (2))){
var state_4465__$1 = state_4465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4465__$1,(4),jobs);
} else {
if((state_val_4466 === (1))){
var state_4465__$1 = state_4465;
var statearr_4472_4612 = state_4465__$1;
(statearr_4472_4612[(2)] = null);

(statearr_4472_4612[(1)] = (2));


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
});})(__4594,c__1322__auto___4606,G__4425_4595,n__3563__auto___4593,jobs,results,process,async))
;
return ((function (__4594,switch__1266__auto__,c__1322__auto___4606,G__4425_4595,n__3563__auto___4593,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_4476 = [null,null,null,null,null,null,null];
(statearr_4476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__);

(statearr_4476[(1)] = (1));

return statearr_4476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1 = (function (state_4465){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4477){if((e4477 instanceof Object)){
var ex__1270__auto__ = e4477;
var statearr_4478_4613 = state_4465;
(statearr_4478_4613[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4614 = state_4465;
state_4465 = G__4614;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = function(state_4465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1.call(this,state_4465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__;
})()
;})(__4594,switch__1266__auto__,c__1322__auto___4606,G__4425_4595,n__3563__auto___4593,jobs,results,process,async))
})();
var state__1324__auto__ = (function (){var statearr_4479 = f__1323__auto__.call(null);
(statearr_4479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___4606);

return statearr_4479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(__4594,c__1322__auto___4606,G__4425_4595,n__3563__auto___4593,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__4615 = (__4594 + (1));
__4594 = G__4615;
continue;
} else {
}
break;
}

var c__1322__auto___4616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___4616,jobs,results,process,async){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___4616,jobs,results,process,async){
return (function (state_4501){
var state_val_4502 = (state_4501[(1)]);
if((state_val_4502 === (9))){
var inst_4494 = (state_4501[(2)]);
var state_4501__$1 = (function (){var statearr_4503 = state_4501;
(statearr_4503[(7)] = inst_4494);

return statearr_4503;
})();
var statearr_4504_4617 = state_4501__$1;
(statearr_4504_4617[(2)] = null);

(statearr_4504_4617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (8))){
var inst_4487 = (state_4501[(8)]);
var inst_4492 = (state_4501[(2)]);
var state_4501__$1 = (function (){var statearr_4505 = state_4501;
(statearr_4505[(9)] = inst_4492);

return statearr_4505;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4501__$1,(9),results,inst_4487);
} else {
if((state_val_4502 === (7))){
var inst_4497 = (state_4501[(2)]);
var state_4501__$1 = state_4501;
var statearr_4506_4618 = state_4501__$1;
(statearr_4506_4618[(2)] = inst_4497);

(statearr_4506_4618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (6))){
var inst_4487 = (state_4501[(8)]);
var inst_4482 = (state_4501[(10)]);
var inst_4487__$1 = cljs.core.async.chan.call(null,(1));
var inst_4488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4489 = [inst_4482,inst_4487__$1];
var inst_4490 = (new cljs.core.PersistentVector(null,2,(5),inst_4488,inst_4489,null));
var state_4501__$1 = (function (){var statearr_4507 = state_4501;
(statearr_4507[(8)] = inst_4487__$1);

return statearr_4507;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4501__$1,(8),jobs,inst_4490);
} else {
if((state_val_4502 === (5))){
var inst_4485 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4501__$1 = state_4501;
var statearr_4508_4619 = state_4501__$1;
(statearr_4508_4619[(2)] = inst_4485);

(statearr_4508_4619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (4))){
var inst_4482 = (state_4501[(10)]);
var inst_4482__$1 = (state_4501[(2)]);
var inst_4483 = (inst_4482__$1 == null);
var state_4501__$1 = (function (){var statearr_4509 = state_4501;
(statearr_4509[(10)] = inst_4482__$1);

return statearr_4509;
})();
if(cljs.core.truth_(inst_4483)){
var statearr_4510_4620 = state_4501__$1;
(statearr_4510_4620[(1)] = (5));

} else {
var statearr_4511_4621 = state_4501__$1;
(statearr_4511_4621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (3))){
var inst_4499 = (state_4501[(2)]);
var state_4501__$1 = state_4501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4501__$1,inst_4499);
} else {
if((state_val_4502 === (2))){
var state_4501__$1 = state_4501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4501__$1,(4),from);
} else {
if((state_val_4502 === (1))){
var state_4501__$1 = state_4501;
var statearr_4512_4622 = state_4501__$1;
(statearr_4512_4622[(2)] = null);

(statearr_4512_4622[(1)] = (2));


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
});})(c__1322__auto___4616,jobs,results,process,async))
;
return ((function (switch__1266__auto__,c__1322__auto___4616,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_4516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__);

(statearr_4516[(1)] = (1));

return statearr_4516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1 = (function (state_4501){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4517){if((e4517 instanceof Object)){
var ex__1270__auto__ = e4517;
var statearr_4518_4623 = state_4501;
(statearr_4518_4623[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4624 = state_4501;
state_4501 = G__4624;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = function(state_4501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1.call(this,state_4501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___4616,jobs,results,process,async))
})();
var state__1324__auto__ = (function (){var statearr_4519 = f__1323__auto__.call(null);
(statearr_4519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___4616);

return statearr_4519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___4616,jobs,results,process,async))
);


var c__1322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto__,jobs,results,process,async){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto__,jobs,results,process,async){
return (function (state_4557){
var state_val_4558 = (state_4557[(1)]);
if((state_val_4558 === (7))){
var inst_4553 = (state_4557[(2)]);
var state_4557__$1 = state_4557;
var statearr_4559_4625 = state_4557__$1;
(statearr_4559_4625[(2)] = inst_4553);

(statearr_4559_4625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (20))){
var state_4557__$1 = state_4557;
var statearr_4560_4626 = state_4557__$1;
(statearr_4560_4626[(2)] = null);

(statearr_4560_4626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (1))){
var state_4557__$1 = state_4557;
var statearr_4561_4627 = state_4557__$1;
(statearr_4561_4627[(2)] = null);

(statearr_4561_4627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (4))){
var inst_4522 = (state_4557[(7)]);
var inst_4522__$1 = (state_4557[(2)]);
var inst_4523 = (inst_4522__$1 == null);
var state_4557__$1 = (function (){var statearr_4562 = state_4557;
(statearr_4562[(7)] = inst_4522__$1);

return statearr_4562;
})();
if(cljs.core.truth_(inst_4523)){
var statearr_4563_4628 = state_4557__$1;
(statearr_4563_4628[(1)] = (5));

} else {
var statearr_4564_4629 = state_4557__$1;
(statearr_4564_4629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (15))){
var inst_4535 = (state_4557[(8)]);
var state_4557__$1 = state_4557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4557__$1,(18),to,inst_4535);
} else {
if((state_val_4558 === (21))){
var inst_4548 = (state_4557[(2)]);
var state_4557__$1 = state_4557;
var statearr_4565_4630 = state_4557__$1;
(statearr_4565_4630[(2)] = inst_4548);

(statearr_4565_4630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (13))){
var inst_4550 = (state_4557[(2)]);
var state_4557__$1 = (function (){var statearr_4566 = state_4557;
(statearr_4566[(9)] = inst_4550);

return statearr_4566;
})();
var statearr_4567_4631 = state_4557__$1;
(statearr_4567_4631[(2)] = null);

(statearr_4567_4631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (6))){
var inst_4522 = (state_4557[(7)]);
var state_4557__$1 = state_4557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4557__$1,(11),inst_4522);
} else {
if((state_val_4558 === (17))){
var inst_4543 = (state_4557[(2)]);
var state_4557__$1 = state_4557;
if(cljs.core.truth_(inst_4543)){
var statearr_4568_4632 = state_4557__$1;
(statearr_4568_4632[(1)] = (19));

} else {
var statearr_4569_4633 = state_4557__$1;
(statearr_4569_4633[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (3))){
var inst_4555 = (state_4557[(2)]);
var state_4557__$1 = state_4557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4557__$1,inst_4555);
} else {
if((state_val_4558 === (12))){
var inst_4532 = (state_4557[(10)]);
var state_4557__$1 = state_4557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4557__$1,(14),inst_4532);
} else {
if((state_val_4558 === (2))){
var state_4557__$1 = state_4557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4557__$1,(4),results);
} else {
if((state_val_4558 === (19))){
var state_4557__$1 = state_4557;
var statearr_4570_4634 = state_4557__$1;
(statearr_4570_4634[(2)] = null);

(statearr_4570_4634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (11))){
var inst_4532 = (state_4557[(2)]);
var state_4557__$1 = (function (){var statearr_4571 = state_4557;
(statearr_4571[(10)] = inst_4532);

return statearr_4571;
})();
var statearr_4572_4635 = state_4557__$1;
(statearr_4572_4635[(2)] = null);

(statearr_4572_4635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (9))){
var state_4557__$1 = state_4557;
var statearr_4573_4636 = state_4557__$1;
(statearr_4573_4636[(2)] = null);

(statearr_4573_4636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (5))){
var state_4557__$1 = state_4557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4574_4637 = state_4557__$1;
(statearr_4574_4637[(1)] = (8));

} else {
var statearr_4575_4638 = state_4557__$1;
(statearr_4575_4638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (14))){
var inst_4537 = (state_4557[(11)]);
var inst_4535 = (state_4557[(8)]);
var inst_4535__$1 = (state_4557[(2)]);
var inst_4536 = (inst_4535__$1 == null);
var inst_4537__$1 = cljs.core.not.call(null,inst_4536);
var state_4557__$1 = (function (){var statearr_4576 = state_4557;
(statearr_4576[(11)] = inst_4537__$1);

(statearr_4576[(8)] = inst_4535__$1);

return statearr_4576;
})();
if(inst_4537__$1){
var statearr_4577_4639 = state_4557__$1;
(statearr_4577_4639[(1)] = (15));

} else {
var statearr_4578_4640 = state_4557__$1;
(statearr_4578_4640[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (16))){
var inst_4537 = (state_4557[(11)]);
var state_4557__$1 = state_4557;
var statearr_4579_4641 = state_4557__$1;
(statearr_4579_4641[(2)] = inst_4537);

(statearr_4579_4641[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (10))){
var inst_4529 = (state_4557[(2)]);
var state_4557__$1 = state_4557;
var statearr_4580_4642 = state_4557__$1;
(statearr_4580_4642[(2)] = inst_4529);

(statearr_4580_4642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (18))){
var inst_4540 = (state_4557[(2)]);
var state_4557__$1 = state_4557;
var statearr_4581_4643 = state_4557__$1;
(statearr_4581_4643[(2)] = inst_4540);

(statearr_4581_4643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4558 === (8))){
var inst_4526 = cljs.core.async.close_BANG_.call(null,to);
var state_4557__$1 = state_4557;
var statearr_4582_4644 = state_4557__$1;
(statearr_4582_4644[(2)] = inst_4526);

(statearr_4582_4644[(1)] = (10));


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
});})(c__1322__auto__,jobs,results,process,async))
;
return ((function (switch__1266__auto__,c__1322__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_4586 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__);

(statearr_4586[(1)] = (1));

return statearr_4586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1 = (function (state_4557){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4587){if((e4587 instanceof Object)){
var ex__1270__auto__ = e4587;
var statearr_4588_4645 = state_4557;
(statearr_4588_4645[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4646 = state_4557;
state_4557 = G__4646;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = function(state_4557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1.call(this,state_4557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto__,jobs,results,process,async))
})();
var state__1324__auto__ = (function (){var statearr_4589 = f__1323__auto__.call(null);
(statearr_4589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto__);

return statearr_4589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto__,jobs,results,process,async))
);

return c__1322__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__1322__auto___4747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___4747,tc,fc){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___4747,tc,fc){
return (function (state_4722){
var state_val_4723 = (state_4722[(1)]);
if((state_val_4723 === (7))){
var inst_4718 = (state_4722[(2)]);
var state_4722__$1 = state_4722;
var statearr_4724_4748 = state_4722__$1;
(statearr_4724_4748[(2)] = inst_4718);

(statearr_4724_4748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4723 === (1))){
var state_4722__$1 = state_4722;
var statearr_4725_4749 = state_4722__$1;
(statearr_4725_4749[(2)] = null);

(statearr_4725_4749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4723 === (4))){
var inst_4699 = (state_4722[(7)]);
var inst_4699__$1 = (state_4722[(2)]);
var inst_4700 = (inst_4699__$1 == null);
var state_4722__$1 = (function (){var statearr_4726 = state_4722;
(statearr_4726[(7)] = inst_4699__$1);

return statearr_4726;
})();
if(cljs.core.truth_(inst_4700)){
var statearr_4727_4750 = state_4722__$1;
(statearr_4727_4750[(1)] = (5));

} else {
var statearr_4728_4751 = state_4722__$1;
(statearr_4728_4751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4723 === (13))){
var state_4722__$1 = state_4722;
var statearr_4729_4752 = state_4722__$1;
(statearr_4729_4752[(2)] = null);

(statearr_4729_4752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4723 === (6))){
var inst_4699 = (state_4722[(7)]);
var inst_4705 = p.call(null,inst_4699);
var state_4722__$1 = state_4722;
if(cljs.core.truth_(inst_4705)){
var statearr_4730_4753 = state_4722__$1;
(statearr_4730_4753[(1)] = (9));

} else {
var statearr_4731_4754 = state_4722__$1;
(statearr_4731_4754[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4723 === (3))){
var inst_4720 = (state_4722[(2)]);
var state_4722__$1 = state_4722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4722__$1,inst_4720);
} else {
if((state_val_4723 === (12))){
var state_4722__$1 = state_4722;
var statearr_4732_4755 = state_4722__$1;
(statearr_4732_4755[(2)] = null);

(statearr_4732_4755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4723 === (2))){
var state_4722__$1 = state_4722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4722__$1,(4),ch);
} else {
if((state_val_4723 === (11))){
var inst_4699 = (state_4722[(7)]);
var inst_4709 = (state_4722[(2)]);
var state_4722__$1 = state_4722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4722__$1,(8),inst_4709,inst_4699);
} else {
if((state_val_4723 === (9))){
var state_4722__$1 = state_4722;
var statearr_4733_4756 = state_4722__$1;
(statearr_4733_4756[(2)] = tc);

(statearr_4733_4756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4723 === (5))){
var inst_4702 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4703 = cljs.core.async.close_BANG_.call(null,fc);
var state_4722__$1 = (function (){var statearr_4734 = state_4722;
(statearr_4734[(8)] = inst_4702);

return statearr_4734;
})();
var statearr_4735_4757 = state_4722__$1;
(statearr_4735_4757[(2)] = inst_4703);

(statearr_4735_4757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4723 === (14))){
var inst_4716 = (state_4722[(2)]);
var state_4722__$1 = state_4722;
var statearr_4736_4758 = state_4722__$1;
(statearr_4736_4758[(2)] = inst_4716);

(statearr_4736_4758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4723 === (10))){
var state_4722__$1 = state_4722;
var statearr_4737_4759 = state_4722__$1;
(statearr_4737_4759[(2)] = fc);

(statearr_4737_4759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4723 === (8))){
var inst_4711 = (state_4722[(2)]);
var state_4722__$1 = state_4722;
if(cljs.core.truth_(inst_4711)){
var statearr_4738_4760 = state_4722__$1;
(statearr_4738_4760[(1)] = (12));

} else {
var statearr_4739_4761 = state_4722__$1;
(statearr_4739_4761[(1)] = (13));

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
}
});})(c__1322__auto___4747,tc,fc))
;
return ((function (switch__1266__auto__,c__1322__auto___4747,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__1267__auto__ = null;
var cljs$core$async$split_$_state_machine__1267__auto____0 = (function (){
var statearr_4743 = [null,null,null,null,null,null,null,null,null];
(statearr_4743[(0)] = cljs$core$async$split_$_state_machine__1267__auto__);

(statearr_4743[(1)] = (1));

return statearr_4743;
});
var cljs$core$async$split_$_state_machine__1267__auto____1 = (function (state_4722){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4744){if((e4744 instanceof Object)){
var ex__1270__auto__ = e4744;
var statearr_4745_4762 = state_4722;
(statearr_4745_4762[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4763 = state_4722;
state_4722 = G__4763;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__1267__auto__ = function(state_4722){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__1267__auto____1.call(this,state_4722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__1267__auto____0;
cljs$core$async$split_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__1267__auto____1;
return cljs$core$async$split_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___4747,tc,fc))
})();
var state__1324__auto__ = (function (){var statearr_4746 = f__1323__auto__.call(null);
(statearr_4746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___4747);

return statearr_4746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___4747,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__1322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto__){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto__){
return (function (state_4810){
var state_val_4811 = (state_4810[(1)]);
if((state_val_4811 === (7))){
var inst_4806 = (state_4810[(2)]);
var state_4810__$1 = state_4810;
var statearr_4812_4828 = state_4810__$1;
(statearr_4812_4828[(2)] = inst_4806);

(statearr_4812_4828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4811 === (6))){
var inst_4796 = (state_4810[(7)]);
var inst_4799 = (state_4810[(8)]);
var inst_4803 = f.call(null,inst_4796,inst_4799);
var inst_4796__$1 = inst_4803;
var state_4810__$1 = (function (){var statearr_4813 = state_4810;
(statearr_4813[(7)] = inst_4796__$1);

return statearr_4813;
})();
var statearr_4814_4829 = state_4810__$1;
(statearr_4814_4829[(2)] = null);

(statearr_4814_4829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4811 === (5))){
var inst_4796 = (state_4810[(7)]);
var state_4810__$1 = state_4810;
var statearr_4815_4830 = state_4810__$1;
(statearr_4815_4830[(2)] = inst_4796);

(statearr_4815_4830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4811 === (4))){
var inst_4799 = (state_4810[(8)]);
var inst_4799__$1 = (state_4810[(2)]);
var inst_4800 = (inst_4799__$1 == null);
var state_4810__$1 = (function (){var statearr_4816 = state_4810;
(statearr_4816[(8)] = inst_4799__$1);

return statearr_4816;
})();
if(cljs.core.truth_(inst_4800)){
var statearr_4817_4831 = state_4810__$1;
(statearr_4817_4831[(1)] = (5));

} else {
var statearr_4818_4832 = state_4810__$1;
(statearr_4818_4832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4811 === (3))){
var inst_4808 = (state_4810[(2)]);
var state_4810__$1 = state_4810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4810__$1,inst_4808);
} else {
if((state_val_4811 === (2))){
var state_4810__$1 = state_4810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4810__$1,(4),ch);
} else {
if((state_val_4811 === (1))){
var inst_4796 = init;
var state_4810__$1 = (function (){var statearr_4819 = state_4810;
(statearr_4819[(7)] = inst_4796);

return statearr_4819;
})();
var statearr_4820_4833 = state_4810__$1;
(statearr_4820_4833[(2)] = null);

(statearr_4820_4833[(1)] = (2));


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
});})(c__1322__auto__))
;
return ((function (switch__1266__auto__,c__1322__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__1267__auto__ = null;
var cljs$core$async$reduce_$_state_machine__1267__auto____0 = (function (){
var statearr_4824 = [null,null,null,null,null,null,null,null,null];
(statearr_4824[(0)] = cljs$core$async$reduce_$_state_machine__1267__auto__);

(statearr_4824[(1)] = (1));

return statearr_4824;
});
var cljs$core$async$reduce_$_state_machine__1267__auto____1 = (function (state_4810){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4825){if((e4825 instanceof Object)){
var ex__1270__auto__ = e4825;
var statearr_4826_4834 = state_4810;
(statearr_4826_4834[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4835 = state_4810;
state_4810 = G__4835;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__1267__auto__ = function(state_4810){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__1267__auto____1.call(this,state_4810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__1267__auto____0;
cljs$core$async$reduce_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__1267__auto____1;
return cljs$core$async$reduce_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto__))
})();
var state__1324__auto__ = (function (){var statearr_4827 = f__1323__auto__.call(null);
(statearr_4827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto__);

return statearr_4827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto__))
);

return c__1322__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__1322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto__){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto__){
return (function (state_4909){
var state_val_4910 = (state_4909[(1)]);
if((state_val_4910 === (7))){
var inst_4891 = (state_4909[(2)]);
var state_4909__$1 = state_4909;
var statearr_4911_4934 = state_4909__$1;
(statearr_4911_4934[(2)] = inst_4891);

(statearr_4911_4934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4910 === (1))){
var inst_4885 = cljs.core.seq.call(null,coll);
var inst_4886 = inst_4885;
var state_4909__$1 = (function (){var statearr_4912 = state_4909;
(statearr_4912[(7)] = inst_4886);

return statearr_4912;
})();
var statearr_4913_4935 = state_4909__$1;
(statearr_4913_4935[(2)] = null);

(statearr_4913_4935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4910 === (4))){
var inst_4886 = (state_4909[(7)]);
var inst_4889 = cljs.core.first.call(null,inst_4886);
var state_4909__$1 = state_4909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4909__$1,(7),ch,inst_4889);
} else {
if((state_val_4910 === (13))){
var inst_4903 = (state_4909[(2)]);
var state_4909__$1 = state_4909;
var statearr_4914_4936 = state_4909__$1;
(statearr_4914_4936[(2)] = inst_4903);

(statearr_4914_4936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4910 === (6))){
var inst_4894 = (state_4909[(2)]);
var state_4909__$1 = state_4909;
if(cljs.core.truth_(inst_4894)){
var statearr_4915_4937 = state_4909__$1;
(statearr_4915_4937[(1)] = (8));

} else {
var statearr_4916_4938 = state_4909__$1;
(statearr_4916_4938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4910 === (3))){
var inst_4907 = (state_4909[(2)]);
var state_4909__$1 = state_4909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4909__$1,inst_4907);
} else {
if((state_val_4910 === (12))){
var state_4909__$1 = state_4909;
var statearr_4917_4939 = state_4909__$1;
(statearr_4917_4939[(2)] = null);

(statearr_4917_4939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4910 === (2))){
var inst_4886 = (state_4909[(7)]);
var state_4909__$1 = state_4909;
if(cljs.core.truth_(inst_4886)){
var statearr_4918_4940 = state_4909__$1;
(statearr_4918_4940[(1)] = (4));

} else {
var statearr_4919_4941 = state_4909__$1;
(statearr_4919_4941[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4910 === (11))){
var inst_4900 = cljs.core.async.close_BANG_.call(null,ch);
var state_4909__$1 = state_4909;
var statearr_4920_4942 = state_4909__$1;
(statearr_4920_4942[(2)] = inst_4900);

(statearr_4920_4942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4910 === (9))){
var state_4909__$1 = state_4909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4921_4943 = state_4909__$1;
(statearr_4921_4943[(1)] = (11));

} else {
var statearr_4922_4944 = state_4909__$1;
(statearr_4922_4944[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4910 === (5))){
var inst_4886 = (state_4909[(7)]);
var state_4909__$1 = state_4909;
var statearr_4923_4945 = state_4909__$1;
(statearr_4923_4945[(2)] = inst_4886);

(statearr_4923_4945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4910 === (10))){
var inst_4905 = (state_4909[(2)]);
var state_4909__$1 = state_4909;
var statearr_4924_4946 = state_4909__$1;
(statearr_4924_4946[(2)] = inst_4905);

(statearr_4924_4946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4910 === (8))){
var inst_4886 = (state_4909[(7)]);
var inst_4896 = cljs.core.next.call(null,inst_4886);
var inst_4886__$1 = inst_4896;
var state_4909__$1 = (function (){var statearr_4925 = state_4909;
(statearr_4925[(7)] = inst_4886__$1);

return statearr_4925;
})();
var statearr_4926_4947 = state_4909__$1;
(statearr_4926_4947[(2)] = null);

(statearr_4926_4947[(1)] = (2));


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
});})(c__1322__auto__))
;
return ((function (switch__1266__auto__,c__1322__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__1267__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__1267__auto____0 = (function (){
var statearr_4930 = [null,null,null,null,null,null,null,null];
(statearr_4930[(0)] = cljs$core$async$onto_chan_$_state_machine__1267__auto__);

(statearr_4930[(1)] = (1));

return statearr_4930;
});
var cljs$core$async$onto_chan_$_state_machine__1267__auto____1 = (function (state_4909){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4931){if((e4931 instanceof Object)){
var ex__1270__auto__ = e4931;
var statearr_4932_4948 = state_4909;
(statearr_4932_4948[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4949 = state_4909;
state_4909 = G__4949;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__1267__auto__ = function(state_4909){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__1267__auto____1.call(this,state_4909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__1267__auto____0;
cljs$core$async$onto_chan_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__1267__auto____1;
return cljs$core$async$onto_chan_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto__))
})();
var state__1324__auto__ = (function (){var statearr_4933 = f__1323__auto__.call(null);
(statearr_4933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto__);

return statearr_4933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto__))
);

return c__1322__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj4951 = {};
return obj4951;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__3134__auto__ = _;
if(and__3134__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3134__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__3406__auto__ = (((_ == null))?null:_);
return (function (){var or__3142__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj4953 = {};
return obj4953;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3134__auto__ = m;
if(and__3134__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3134__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__3406__auto__ = (((m == null))?null:m);
return (function (){var or__3142__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__3134__auto__ = m;
if(and__3134__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3134__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__3406__auto__ = (((m == null))?null:m);
return (function (){var or__3142__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__3134__auto__ = m;
if(and__3134__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3134__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__3406__auto__ = (((m == null))?null:m);
return (function (){var or__3142__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t5175 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5175 = (function (cs,ch,mult,meta5176){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta5176 = meta5176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t5175.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t5175.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t5175.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t5175.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t5175.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t5175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_5177){
var self__ = this;
var _5177__$1 = this;
return self__.meta5176;
});})(cs))
;

cljs.core.async.t5175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_5177,meta5176__$1){
var self__ = this;
var _5177__$1 = this;
return (new cljs.core.async.t5175(self__.cs,self__.ch,self__.mult,meta5176__$1));
});})(cs))
;

cljs.core.async.t5175.cljs$lang$type = true;

cljs.core.async.t5175.cljs$lang$ctorStr = "cljs.core.async/t5175";

cljs.core.async.t5175.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs.core.async/t5175");
});})(cs))
;

cljs.core.async.__GT_t5175 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t5175(cs__$1,ch__$1,mult__$1,meta5176){
return (new cljs.core.async.t5175(cs__$1,ch__$1,mult__$1,meta5176));
});})(cs))
;

}

return (new cljs.core.async.t5175(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__1322__auto___5396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___5396,cs,m,dchan,dctr,done){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___5396,cs,m,dchan,dctr,done){
return (function (state_5308){
var state_val_5309 = (state_5308[(1)]);
if((state_val_5309 === (7))){
var inst_5304 = (state_5308[(2)]);
var state_5308__$1 = state_5308;
var statearr_5310_5397 = state_5308__$1;
(statearr_5310_5397[(2)] = inst_5304);

(statearr_5310_5397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (20))){
var inst_5209 = (state_5308[(7)]);
var inst_5219 = cljs.core.first.call(null,inst_5209);
var inst_5220 = cljs.core.nth.call(null,inst_5219,(0),null);
var inst_5221 = cljs.core.nth.call(null,inst_5219,(1),null);
var state_5308__$1 = (function (){var statearr_5311 = state_5308;
(statearr_5311[(8)] = inst_5220);

return statearr_5311;
})();
if(cljs.core.truth_(inst_5221)){
var statearr_5312_5398 = state_5308__$1;
(statearr_5312_5398[(1)] = (22));

} else {
var statearr_5313_5399 = state_5308__$1;
(statearr_5313_5399[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (27))){
var inst_5180 = (state_5308[(9)]);
var inst_5249 = (state_5308[(10)]);
var inst_5256 = (state_5308[(11)]);
var inst_5251 = (state_5308[(12)]);
var inst_5256__$1 = cljs.core._nth.call(null,inst_5249,inst_5251);
var inst_5257 = cljs.core.async.put_BANG_.call(null,inst_5256__$1,inst_5180,done);
var state_5308__$1 = (function (){var statearr_5314 = state_5308;
(statearr_5314[(11)] = inst_5256__$1);

return statearr_5314;
})();
if(cljs.core.truth_(inst_5257)){
var statearr_5315_5400 = state_5308__$1;
(statearr_5315_5400[(1)] = (30));

} else {
var statearr_5316_5401 = state_5308__$1;
(statearr_5316_5401[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (1))){
var state_5308__$1 = state_5308;
var statearr_5317_5402 = state_5308__$1;
(statearr_5317_5402[(2)] = null);

(statearr_5317_5402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (24))){
var inst_5209 = (state_5308[(7)]);
var inst_5226 = (state_5308[(2)]);
var inst_5227 = cljs.core.next.call(null,inst_5209);
var inst_5189 = inst_5227;
var inst_5190 = null;
var inst_5191 = (0);
var inst_5192 = (0);
var state_5308__$1 = (function (){var statearr_5318 = state_5308;
(statearr_5318[(13)] = inst_5191);

(statearr_5318[(14)] = inst_5189);

(statearr_5318[(15)] = inst_5226);

(statearr_5318[(16)] = inst_5192);

(statearr_5318[(17)] = inst_5190);

return statearr_5318;
})();
var statearr_5319_5403 = state_5308__$1;
(statearr_5319_5403[(2)] = null);

(statearr_5319_5403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (39))){
var state_5308__$1 = state_5308;
var statearr_5323_5404 = state_5308__$1;
(statearr_5323_5404[(2)] = null);

(statearr_5323_5404[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (4))){
var inst_5180 = (state_5308[(9)]);
var inst_5180__$1 = (state_5308[(2)]);
var inst_5181 = (inst_5180__$1 == null);
var state_5308__$1 = (function (){var statearr_5324 = state_5308;
(statearr_5324[(9)] = inst_5180__$1);

return statearr_5324;
})();
if(cljs.core.truth_(inst_5181)){
var statearr_5325_5405 = state_5308__$1;
(statearr_5325_5405[(1)] = (5));

} else {
var statearr_5326_5406 = state_5308__$1;
(statearr_5326_5406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (15))){
var inst_5191 = (state_5308[(13)]);
var inst_5189 = (state_5308[(14)]);
var inst_5192 = (state_5308[(16)]);
var inst_5190 = (state_5308[(17)]);
var inst_5205 = (state_5308[(2)]);
var inst_5206 = (inst_5192 + (1));
var tmp5320 = inst_5191;
var tmp5321 = inst_5189;
var tmp5322 = inst_5190;
var inst_5189__$1 = tmp5321;
var inst_5190__$1 = tmp5322;
var inst_5191__$1 = tmp5320;
var inst_5192__$1 = inst_5206;
var state_5308__$1 = (function (){var statearr_5327 = state_5308;
(statearr_5327[(18)] = inst_5205);

(statearr_5327[(13)] = inst_5191__$1);

(statearr_5327[(14)] = inst_5189__$1);

(statearr_5327[(16)] = inst_5192__$1);

(statearr_5327[(17)] = inst_5190__$1);

return statearr_5327;
})();
var statearr_5328_5407 = state_5308__$1;
(statearr_5328_5407[(2)] = null);

(statearr_5328_5407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (21))){
var inst_5230 = (state_5308[(2)]);
var state_5308__$1 = state_5308;
var statearr_5332_5408 = state_5308__$1;
(statearr_5332_5408[(2)] = inst_5230);

(statearr_5332_5408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (31))){
var inst_5256 = (state_5308[(11)]);
var inst_5260 = done.call(null,null);
var inst_5261 = cljs.core.async.untap_STAR_.call(null,m,inst_5256);
var state_5308__$1 = (function (){var statearr_5333 = state_5308;
(statearr_5333[(19)] = inst_5260);

return statearr_5333;
})();
var statearr_5334_5409 = state_5308__$1;
(statearr_5334_5409[(2)] = inst_5261);

(statearr_5334_5409[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (32))){
var inst_5249 = (state_5308[(10)]);
var inst_5250 = (state_5308[(20)]);
var inst_5251 = (state_5308[(12)]);
var inst_5248 = (state_5308[(21)]);
var inst_5263 = (state_5308[(2)]);
var inst_5264 = (inst_5251 + (1));
var tmp5329 = inst_5249;
var tmp5330 = inst_5250;
var tmp5331 = inst_5248;
var inst_5248__$1 = tmp5331;
var inst_5249__$1 = tmp5329;
var inst_5250__$1 = tmp5330;
var inst_5251__$1 = inst_5264;
var state_5308__$1 = (function (){var statearr_5335 = state_5308;
(statearr_5335[(10)] = inst_5249__$1);

(statearr_5335[(20)] = inst_5250__$1);

(statearr_5335[(22)] = inst_5263);

(statearr_5335[(12)] = inst_5251__$1);

(statearr_5335[(21)] = inst_5248__$1);

return statearr_5335;
})();
var statearr_5336_5410 = state_5308__$1;
(statearr_5336_5410[(2)] = null);

(statearr_5336_5410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (40))){
var inst_5276 = (state_5308[(23)]);
var inst_5280 = done.call(null,null);
var inst_5281 = cljs.core.async.untap_STAR_.call(null,m,inst_5276);
var state_5308__$1 = (function (){var statearr_5337 = state_5308;
(statearr_5337[(24)] = inst_5280);

return statearr_5337;
})();
var statearr_5338_5411 = state_5308__$1;
(statearr_5338_5411[(2)] = inst_5281);

(statearr_5338_5411[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (33))){
var inst_5267 = (state_5308[(25)]);
var inst_5269 = cljs.core.chunked_seq_QMARK_.call(null,inst_5267);
var state_5308__$1 = state_5308;
if(inst_5269){
var statearr_5339_5412 = state_5308__$1;
(statearr_5339_5412[(1)] = (36));

} else {
var statearr_5340_5413 = state_5308__$1;
(statearr_5340_5413[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (13))){
var inst_5199 = (state_5308[(26)]);
var inst_5202 = cljs.core.async.close_BANG_.call(null,inst_5199);
var state_5308__$1 = state_5308;
var statearr_5341_5414 = state_5308__$1;
(statearr_5341_5414[(2)] = inst_5202);

(statearr_5341_5414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (22))){
var inst_5220 = (state_5308[(8)]);
var inst_5223 = cljs.core.async.close_BANG_.call(null,inst_5220);
var state_5308__$1 = state_5308;
var statearr_5342_5415 = state_5308__$1;
(statearr_5342_5415[(2)] = inst_5223);

(statearr_5342_5415[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (36))){
var inst_5267 = (state_5308[(25)]);
var inst_5271 = cljs.core.chunk_first.call(null,inst_5267);
var inst_5272 = cljs.core.chunk_rest.call(null,inst_5267);
var inst_5273 = cljs.core.count.call(null,inst_5271);
var inst_5248 = inst_5272;
var inst_5249 = inst_5271;
var inst_5250 = inst_5273;
var inst_5251 = (0);
var state_5308__$1 = (function (){var statearr_5343 = state_5308;
(statearr_5343[(10)] = inst_5249);

(statearr_5343[(20)] = inst_5250);

(statearr_5343[(12)] = inst_5251);

(statearr_5343[(21)] = inst_5248);

return statearr_5343;
})();
var statearr_5344_5416 = state_5308__$1;
(statearr_5344_5416[(2)] = null);

(statearr_5344_5416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (41))){
var inst_5267 = (state_5308[(25)]);
var inst_5283 = (state_5308[(2)]);
var inst_5284 = cljs.core.next.call(null,inst_5267);
var inst_5248 = inst_5284;
var inst_5249 = null;
var inst_5250 = (0);
var inst_5251 = (0);
var state_5308__$1 = (function (){var statearr_5345 = state_5308;
(statearr_5345[(10)] = inst_5249);

(statearr_5345[(20)] = inst_5250);

(statearr_5345[(12)] = inst_5251);

(statearr_5345[(27)] = inst_5283);

(statearr_5345[(21)] = inst_5248);

return statearr_5345;
})();
var statearr_5346_5417 = state_5308__$1;
(statearr_5346_5417[(2)] = null);

(statearr_5346_5417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (43))){
var state_5308__$1 = state_5308;
var statearr_5347_5418 = state_5308__$1;
(statearr_5347_5418[(2)] = null);

(statearr_5347_5418[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (29))){
var inst_5292 = (state_5308[(2)]);
var state_5308__$1 = state_5308;
var statearr_5348_5419 = state_5308__$1;
(statearr_5348_5419[(2)] = inst_5292);

(statearr_5348_5419[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (44))){
var inst_5301 = (state_5308[(2)]);
var state_5308__$1 = (function (){var statearr_5349 = state_5308;
(statearr_5349[(28)] = inst_5301);

return statearr_5349;
})();
var statearr_5350_5420 = state_5308__$1;
(statearr_5350_5420[(2)] = null);

(statearr_5350_5420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (6))){
var inst_5240 = (state_5308[(29)]);
var inst_5239 = cljs.core.deref.call(null,cs);
var inst_5240__$1 = cljs.core.keys.call(null,inst_5239);
var inst_5241 = cljs.core.count.call(null,inst_5240__$1);
var inst_5242 = cljs.core.reset_BANG_.call(null,dctr,inst_5241);
var inst_5247 = cljs.core.seq.call(null,inst_5240__$1);
var inst_5248 = inst_5247;
var inst_5249 = null;
var inst_5250 = (0);
var inst_5251 = (0);
var state_5308__$1 = (function (){var statearr_5351 = state_5308;
(statearr_5351[(10)] = inst_5249);

(statearr_5351[(20)] = inst_5250);

(statearr_5351[(29)] = inst_5240__$1);

(statearr_5351[(12)] = inst_5251);

(statearr_5351[(30)] = inst_5242);

(statearr_5351[(21)] = inst_5248);

return statearr_5351;
})();
var statearr_5352_5421 = state_5308__$1;
(statearr_5352_5421[(2)] = null);

(statearr_5352_5421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (28))){
var inst_5267 = (state_5308[(25)]);
var inst_5248 = (state_5308[(21)]);
var inst_5267__$1 = cljs.core.seq.call(null,inst_5248);
var state_5308__$1 = (function (){var statearr_5353 = state_5308;
(statearr_5353[(25)] = inst_5267__$1);

return statearr_5353;
})();
if(inst_5267__$1){
var statearr_5354_5422 = state_5308__$1;
(statearr_5354_5422[(1)] = (33));

} else {
var statearr_5355_5423 = state_5308__$1;
(statearr_5355_5423[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (25))){
var inst_5250 = (state_5308[(20)]);
var inst_5251 = (state_5308[(12)]);
var inst_5253 = (inst_5251 < inst_5250);
var inst_5254 = inst_5253;
var state_5308__$1 = state_5308;
if(cljs.core.truth_(inst_5254)){
var statearr_5356_5424 = state_5308__$1;
(statearr_5356_5424[(1)] = (27));

} else {
var statearr_5357_5425 = state_5308__$1;
(statearr_5357_5425[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (34))){
var state_5308__$1 = state_5308;
var statearr_5358_5426 = state_5308__$1;
(statearr_5358_5426[(2)] = null);

(statearr_5358_5426[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (17))){
var state_5308__$1 = state_5308;
var statearr_5359_5427 = state_5308__$1;
(statearr_5359_5427[(2)] = null);

(statearr_5359_5427[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (3))){
var inst_5306 = (state_5308[(2)]);
var state_5308__$1 = state_5308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5308__$1,inst_5306);
} else {
if((state_val_5309 === (12))){
var inst_5235 = (state_5308[(2)]);
var state_5308__$1 = state_5308;
var statearr_5360_5428 = state_5308__$1;
(statearr_5360_5428[(2)] = inst_5235);

(statearr_5360_5428[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (2))){
var state_5308__$1 = state_5308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5308__$1,(4),ch);
} else {
if((state_val_5309 === (23))){
var state_5308__$1 = state_5308;
var statearr_5361_5429 = state_5308__$1;
(statearr_5361_5429[(2)] = null);

(statearr_5361_5429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (35))){
var inst_5290 = (state_5308[(2)]);
var state_5308__$1 = state_5308;
var statearr_5362_5430 = state_5308__$1;
(statearr_5362_5430[(2)] = inst_5290);

(statearr_5362_5430[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (19))){
var inst_5209 = (state_5308[(7)]);
var inst_5213 = cljs.core.chunk_first.call(null,inst_5209);
var inst_5214 = cljs.core.chunk_rest.call(null,inst_5209);
var inst_5215 = cljs.core.count.call(null,inst_5213);
var inst_5189 = inst_5214;
var inst_5190 = inst_5213;
var inst_5191 = inst_5215;
var inst_5192 = (0);
var state_5308__$1 = (function (){var statearr_5363 = state_5308;
(statearr_5363[(13)] = inst_5191);

(statearr_5363[(14)] = inst_5189);

(statearr_5363[(16)] = inst_5192);

(statearr_5363[(17)] = inst_5190);

return statearr_5363;
})();
var statearr_5364_5431 = state_5308__$1;
(statearr_5364_5431[(2)] = null);

(statearr_5364_5431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (11))){
var inst_5189 = (state_5308[(14)]);
var inst_5209 = (state_5308[(7)]);
var inst_5209__$1 = cljs.core.seq.call(null,inst_5189);
var state_5308__$1 = (function (){var statearr_5365 = state_5308;
(statearr_5365[(7)] = inst_5209__$1);

return statearr_5365;
})();
if(inst_5209__$1){
var statearr_5366_5432 = state_5308__$1;
(statearr_5366_5432[(1)] = (16));

} else {
var statearr_5367_5433 = state_5308__$1;
(statearr_5367_5433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (9))){
var inst_5237 = (state_5308[(2)]);
var state_5308__$1 = state_5308;
var statearr_5368_5434 = state_5308__$1;
(statearr_5368_5434[(2)] = inst_5237);

(statearr_5368_5434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (5))){
var inst_5187 = cljs.core.deref.call(null,cs);
var inst_5188 = cljs.core.seq.call(null,inst_5187);
var inst_5189 = inst_5188;
var inst_5190 = null;
var inst_5191 = (0);
var inst_5192 = (0);
var state_5308__$1 = (function (){var statearr_5369 = state_5308;
(statearr_5369[(13)] = inst_5191);

(statearr_5369[(14)] = inst_5189);

(statearr_5369[(16)] = inst_5192);

(statearr_5369[(17)] = inst_5190);

return statearr_5369;
})();
var statearr_5370_5435 = state_5308__$1;
(statearr_5370_5435[(2)] = null);

(statearr_5370_5435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (14))){
var state_5308__$1 = state_5308;
var statearr_5371_5436 = state_5308__$1;
(statearr_5371_5436[(2)] = null);

(statearr_5371_5436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (45))){
var inst_5298 = (state_5308[(2)]);
var state_5308__$1 = state_5308;
var statearr_5372_5437 = state_5308__$1;
(statearr_5372_5437[(2)] = inst_5298);

(statearr_5372_5437[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (26))){
var inst_5240 = (state_5308[(29)]);
var inst_5294 = (state_5308[(2)]);
var inst_5295 = cljs.core.seq.call(null,inst_5240);
var state_5308__$1 = (function (){var statearr_5373 = state_5308;
(statearr_5373[(31)] = inst_5294);

return statearr_5373;
})();
if(inst_5295){
var statearr_5374_5438 = state_5308__$1;
(statearr_5374_5438[(1)] = (42));

} else {
var statearr_5375_5439 = state_5308__$1;
(statearr_5375_5439[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (16))){
var inst_5209 = (state_5308[(7)]);
var inst_5211 = cljs.core.chunked_seq_QMARK_.call(null,inst_5209);
var state_5308__$1 = state_5308;
if(inst_5211){
var statearr_5376_5440 = state_5308__$1;
(statearr_5376_5440[(1)] = (19));

} else {
var statearr_5377_5441 = state_5308__$1;
(statearr_5377_5441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (38))){
var inst_5287 = (state_5308[(2)]);
var state_5308__$1 = state_5308;
var statearr_5378_5442 = state_5308__$1;
(statearr_5378_5442[(2)] = inst_5287);

(statearr_5378_5442[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (30))){
var state_5308__$1 = state_5308;
var statearr_5379_5443 = state_5308__$1;
(statearr_5379_5443[(2)] = null);

(statearr_5379_5443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (10))){
var inst_5192 = (state_5308[(16)]);
var inst_5190 = (state_5308[(17)]);
var inst_5198 = cljs.core._nth.call(null,inst_5190,inst_5192);
var inst_5199 = cljs.core.nth.call(null,inst_5198,(0),null);
var inst_5200 = cljs.core.nth.call(null,inst_5198,(1),null);
var state_5308__$1 = (function (){var statearr_5380 = state_5308;
(statearr_5380[(26)] = inst_5199);

return statearr_5380;
})();
if(cljs.core.truth_(inst_5200)){
var statearr_5381_5444 = state_5308__$1;
(statearr_5381_5444[(1)] = (13));

} else {
var statearr_5382_5445 = state_5308__$1;
(statearr_5382_5445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (18))){
var inst_5233 = (state_5308[(2)]);
var state_5308__$1 = state_5308;
var statearr_5383_5446 = state_5308__$1;
(statearr_5383_5446[(2)] = inst_5233);

(statearr_5383_5446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (42))){
var state_5308__$1 = state_5308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5308__$1,(45),dchan);
} else {
if((state_val_5309 === (37))){
var inst_5180 = (state_5308[(9)]);
var inst_5267 = (state_5308[(25)]);
var inst_5276 = (state_5308[(23)]);
var inst_5276__$1 = cljs.core.first.call(null,inst_5267);
var inst_5277 = cljs.core.async.put_BANG_.call(null,inst_5276__$1,inst_5180,done);
var state_5308__$1 = (function (){var statearr_5384 = state_5308;
(statearr_5384[(23)] = inst_5276__$1);

return statearr_5384;
})();
if(cljs.core.truth_(inst_5277)){
var statearr_5385_5447 = state_5308__$1;
(statearr_5385_5447[(1)] = (39));

} else {
var statearr_5386_5448 = state_5308__$1;
(statearr_5386_5448[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5309 === (8))){
var inst_5191 = (state_5308[(13)]);
var inst_5192 = (state_5308[(16)]);
var inst_5194 = (inst_5192 < inst_5191);
var inst_5195 = inst_5194;
var state_5308__$1 = state_5308;
if(cljs.core.truth_(inst_5195)){
var statearr_5387_5449 = state_5308__$1;
(statearr_5387_5449[(1)] = (10));

} else {
var statearr_5388_5450 = state_5308__$1;
(statearr_5388_5450[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__1322__auto___5396,cs,m,dchan,dctr,done))
;
return ((function (switch__1266__auto__,c__1322__auto___5396,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__1267__auto__ = null;
var cljs$core$async$mult_$_state_machine__1267__auto____0 = (function (){
var statearr_5392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5392[(0)] = cljs$core$async$mult_$_state_machine__1267__auto__);

(statearr_5392[(1)] = (1));

return statearr_5392;
});
var cljs$core$async$mult_$_state_machine__1267__auto____1 = (function (state_5308){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_5308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e5393){if((e5393 instanceof Object)){
var ex__1270__auto__ = e5393;
var statearr_5394_5451 = state_5308;
(statearr_5394_5451[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5452 = state_5308;
state_5308 = G__5452;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__1267__auto__ = function(state_5308){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__1267__auto____1.call(this,state_5308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__1267__auto____0;
cljs$core$async$mult_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__1267__auto____1;
return cljs$core$async$mult_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___5396,cs,m,dchan,dctr,done))
})();
var state__1324__auto__ = (function (){var statearr_5395 = f__1323__auto__.call(null);
(statearr_5395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___5396);

return statearr_5395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___5396,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj5454 = {};
return obj5454;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__3134__auto__ = m;
if(and__3134__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3134__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__3406__auto__ = (((m == null))?null:m);
return (function (){var or__3142__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__3134__auto__ = m;
if(and__3134__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3134__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__3406__auto__ = (((m == null))?null:m);
return (function (){var or__3142__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__3134__auto__ = m;
if(and__3134__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3134__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__3406__auto__ = (((m == null))?null:m);
return (function (){var or__3142__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__3134__auto__ = m;
if(and__3134__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3134__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__3406__auto__ = (((m == null))?null:m);
return (function (){var or__3142__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__3134__auto__ = m;
if(and__3134__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3134__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__3406__auto__ = (((m == null))?null:m);
return (function (){var or__3142__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__5455){
var map__5460 = p__5455;
var map__5460__$1 = ((cljs.core.seq_QMARK_.call(null,map__5460))?cljs.core.apply.call(null,cljs.core.hash_map,map__5460):map__5460);
var opts = map__5460__$1;
var statearr_5461_5464 = state;
(statearr_5461_5464[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__5460,map__5460__$1,opts){
return (function (val){
var statearr_5462_5465 = state;
(statearr_5462_5465[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__5460,map__5460__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_5463_5466 = state;
(statearr_5463_5466[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__5455 = null;
if (arguments.length > 3) {
var G__5467__i = 0, G__5467__a = new Array(arguments.length -  3);
while (G__5467__i < G__5467__a.length) {G__5467__a[G__5467__i] = arguments[G__5467__i + 3]; ++G__5467__i;}
  p__5455 = new cljs.core.IndexedSeq(G__5467__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__5455);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__5468){
var state = cljs.core.first(arglist__5468);
arglist__5468 = cljs.core.next(arglist__5468);
var cont_block = cljs.core.first(arglist__5468);
arglist__5468 = cljs.core.next(arglist__5468);
var ports = cljs.core.first(arglist__5468);
var p__5455 = cljs.core.rest(arglist__5468);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__5455);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t5588 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5588 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta5589){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta5589 = meta5589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t5588.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t5588.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5588.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5588.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5588.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5588.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5588.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5590){
var self__ = this;
var _5590__$1 = this;
return self__.meta5589;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5590,meta5589__$1){
var self__ = this;
var _5590__$1 = this;
return (new cljs.core.async.t5588(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta5589__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5588.cljs$lang$type = true;

cljs.core.async.t5588.cljs$lang$ctorStr = "cljs.core.async/t5588";

cljs.core.async.t5588.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs.core.async/t5588");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t5588 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t5588(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5589){
return (new cljs.core.async.t5588(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5589));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t5588(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1322__auto___5707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___5707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___5707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5660){
var state_val_5661 = (state_5660[(1)]);
if((state_val_5661 === (7))){
var inst_5604 = (state_5660[(7)]);
var inst_5609 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5604);
var state_5660__$1 = state_5660;
var statearr_5662_5708 = state_5660__$1;
(statearr_5662_5708[(2)] = inst_5609);

(statearr_5662_5708[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (20))){
var inst_5619 = (state_5660[(8)]);
var state_5660__$1 = state_5660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5660__$1,(23),out,inst_5619);
} else {
if((state_val_5661 === (1))){
var inst_5594 = (state_5660[(9)]);
var inst_5594__$1 = calc_state.call(null);
var inst_5595 = cljs.core.seq_QMARK_.call(null,inst_5594__$1);
var state_5660__$1 = (function (){var statearr_5663 = state_5660;
(statearr_5663[(9)] = inst_5594__$1);

return statearr_5663;
})();
if(inst_5595){
var statearr_5664_5709 = state_5660__$1;
(statearr_5664_5709[(1)] = (2));

} else {
var statearr_5665_5710 = state_5660__$1;
(statearr_5665_5710[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (24))){
var inst_5612 = (state_5660[(10)]);
var inst_5604 = inst_5612;
var state_5660__$1 = (function (){var statearr_5666 = state_5660;
(statearr_5666[(7)] = inst_5604);

return statearr_5666;
})();
var statearr_5667_5711 = state_5660__$1;
(statearr_5667_5711[(2)] = null);

(statearr_5667_5711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (4))){
var inst_5594 = (state_5660[(9)]);
var inst_5600 = (state_5660[(2)]);
var inst_5601 = cljs.core.get.call(null,inst_5600,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5602 = cljs.core.get.call(null,inst_5600,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5603 = cljs.core.get.call(null,inst_5600,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5604 = inst_5594;
var state_5660__$1 = (function (){var statearr_5668 = state_5660;
(statearr_5668[(11)] = inst_5602);

(statearr_5668[(12)] = inst_5603);

(statearr_5668[(13)] = inst_5601);

(statearr_5668[(7)] = inst_5604);

return statearr_5668;
})();
var statearr_5669_5712 = state_5660__$1;
(statearr_5669_5712[(2)] = null);

(statearr_5669_5712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (15))){
var state_5660__$1 = state_5660;
var statearr_5670_5713 = state_5660__$1;
(statearr_5670_5713[(2)] = null);

(statearr_5670_5713[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (21))){
var inst_5612 = (state_5660[(10)]);
var inst_5604 = inst_5612;
var state_5660__$1 = (function (){var statearr_5671 = state_5660;
(statearr_5671[(7)] = inst_5604);

return statearr_5671;
})();
var statearr_5672_5714 = state_5660__$1;
(statearr_5672_5714[(2)] = null);

(statearr_5672_5714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (13))){
var inst_5656 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
var statearr_5673_5715 = state_5660__$1;
(statearr_5673_5715[(2)] = inst_5656);

(statearr_5673_5715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (22))){
var inst_5654 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
var statearr_5674_5716 = state_5660__$1;
(statearr_5674_5716[(2)] = inst_5654);

(statearr_5674_5716[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (6))){
var inst_5658 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5660__$1,inst_5658);
} else {
if((state_val_5661 === (25))){
var state_5660__$1 = state_5660;
var statearr_5675_5717 = state_5660__$1;
(statearr_5675_5717[(2)] = null);

(statearr_5675_5717[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (17))){
var inst_5634 = (state_5660[(14)]);
var state_5660__$1 = state_5660;
var statearr_5676_5718 = state_5660__$1;
(statearr_5676_5718[(2)] = inst_5634);

(statearr_5676_5718[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (3))){
var inst_5594 = (state_5660[(9)]);
var state_5660__$1 = state_5660;
var statearr_5677_5719 = state_5660__$1;
(statearr_5677_5719[(2)] = inst_5594);

(statearr_5677_5719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (12))){
var inst_5620 = (state_5660[(15)]);
var inst_5634 = (state_5660[(14)]);
var inst_5615 = (state_5660[(16)]);
var inst_5634__$1 = inst_5615.call(null,inst_5620);
var state_5660__$1 = (function (){var statearr_5678 = state_5660;
(statearr_5678[(14)] = inst_5634__$1);

return statearr_5678;
})();
if(cljs.core.truth_(inst_5634__$1)){
var statearr_5679_5720 = state_5660__$1;
(statearr_5679_5720[(1)] = (17));

} else {
var statearr_5680_5721 = state_5660__$1;
(statearr_5680_5721[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (2))){
var inst_5594 = (state_5660[(9)]);
var inst_5597 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5594);
var state_5660__$1 = state_5660;
var statearr_5681_5722 = state_5660__$1;
(statearr_5681_5722[(2)] = inst_5597);

(statearr_5681_5722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (23))){
var inst_5645 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
if(cljs.core.truth_(inst_5645)){
var statearr_5682_5723 = state_5660__$1;
(statearr_5682_5723[(1)] = (24));

} else {
var statearr_5683_5724 = state_5660__$1;
(statearr_5683_5724[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (19))){
var inst_5642 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
if(cljs.core.truth_(inst_5642)){
var statearr_5684_5725 = state_5660__$1;
(statearr_5684_5725[(1)] = (20));

} else {
var statearr_5685_5726 = state_5660__$1;
(statearr_5685_5726[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (11))){
var inst_5619 = (state_5660[(8)]);
var inst_5625 = (inst_5619 == null);
var state_5660__$1 = state_5660;
if(cljs.core.truth_(inst_5625)){
var statearr_5686_5727 = state_5660__$1;
(statearr_5686_5727[(1)] = (14));

} else {
var statearr_5687_5728 = state_5660__$1;
(statearr_5687_5728[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (9))){
var inst_5612 = (state_5660[(10)]);
var inst_5612__$1 = (state_5660[(2)]);
var inst_5613 = cljs.core.get.call(null,inst_5612__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5614 = cljs.core.get.call(null,inst_5612__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5615 = cljs.core.get.call(null,inst_5612__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_5660__$1 = (function (){var statearr_5688 = state_5660;
(statearr_5688[(16)] = inst_5615);

(statearr_5688[(17)] = inst_5614);

(statearr_5688[(10)] = inst_5612__$1);

return statearr_5688;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5660__$1,(10),inst_5613);
} else {
if((state_val_5661 === (5))){
var inst_5604 = (state_5660[(7)]);
var inst_5607 = cljs.core.seq_QMARK_.call(null,inst_5604);
var state_5660__$1 = state_5660;
if(inst_5607){
var statearr_5689_5729 = state_5660__$1;
(statearr_5689_5729[(1)] = (7));

} else {
var statearr_5690_5730 = state_5660__$1;
(statearr_5690_5730[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (14))){
var inst_5620 = (state_5660[(15)]);
var inst_5627 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5620);
var state_5660__$1 = state_5660;
var statearr_5691_5731 = state_5660__$1;
(statearr_5691_5731[(2)] = inst_5627);

(statearr_5691_5731[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (26))){
var inst_5650 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
var statearr_5692_5732 = state_5660__$1;
(statearr_5692_5732[(2)] = inst_5650);

(statearr_5692_5732[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (16))){
var inst_5630 = (state_5660[(2)]);
var inst_5631 = calc_state.call(null);
var inst_5604 = inst_5631;
var state_5660__$1 = (function (){var statearr_5693 = state_5660;
(statearr_5693[(18)] = inst_5630);

(statearr_5693[(7)] = inst_5604);

return statearr_5693;
})();
var statearr_5694_5733 = state_5660__$1;
(statearr_5694_5733[(2)] = null);

(statearr_5694_5733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (10))){
var inst_5620 = (state_5660[(15)]);
var inst_5619 = (state_5660[(8)]);
var inst_5618 = (state_5660[(2)]);
var inst_5619__$1 = cljs.core.nth.call(null,inst_5618,(0),null);
var inst_5620__$1 = cljs.core.nth.call(null,inst_5618,(1),null);
var inst_5621 = (inst_5619__$1 == null);
var inst_5622 = cljs.core._EQ_.call(null,inst_5620__$1,change);
var inst_5623 = (inst_5621) || (inst_5622);
var state_5660__$1 = (function (){var statearr_5695 = state_5660;
(statearr_5695[(15)] = inst_5620__$1);

(statearr_5695[(8)] = inst_5619__$1);

return statearr_5695;
})();
if(cljs.core.truth_(inst_5623)){
var statearr_5696_5734 = state_5660__$1;
(statearr_5696_5734[(1)] = (11));

} else {
var statearr_5697_5735 = state_5660__$1;
(statearr_5697_5735[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (18))){
var inst_5620 = (state_5660[(15)]);
var inst_5615 = (state_5660[(16)]);
var inst_5614 = (state_5660[(17)]);
var inst_5637 = cljs.core.empty_QMARK_.call(null,inst_5615);
var inst_5638 = inst_5614.call(null,inst_5620);
var inst_5639 = cljs.core.not.call(null,inst_5638);
var inst_5640 = (inst_5637) && (inst_5639);
var state_5660__$1 = state_5660;
var statearr_5698_5736 = state_5660__$1;
(statearr_5698_5736[(2)] = inst_5640);

(statearr_5698_5736[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (8))){
var inst_5604 = (state_5660[(7)]);
var state_5660__$1 = state_5660;
var statearr_5699_5737 = state_5660__$1;
(statearr_5699_5737[(2)] = inst_5604);

(statearr_5699_5737[(1)] = (9));


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
}
});})(c__1322__auto___5707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__1266__auto__,c__1322__auto___5707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__1267__auto__ = null;
var cljs$core$async$mix_$_state_machine__1267__auto____0 = (function (){
var statearr_5703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5703[(0)] = cljs$core$async$mix_$_state_machine__1267__auto__);

(statearr_5703[(1)] = (1));

return statearr_5703;
});
var cljs$core$async$mix_$_state_machine__1267__auto____1 = (function (state_5660){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_5660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e5704){if((e5704 instanceof Object)){
var ex__1270__auto__ = e5704;
var statearr_5705_5738 = state_5660;
(statearr_5705_5738[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5739 = state_5660;
state_5660 = G__5739;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__1267__auto__ = function(state_5660){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__1267__auto____1.call(this,state_5660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__1267__auto____0;
cljs$core$async$mix_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__1267__auto____1;
return cljs$core$async$mix_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___5707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__1324__auto__ = (function (){var statearr_5706 = f__1323__auto__.call(null);
(statearr_5706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___5707);

return statearr_5706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___5707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj5741 = {};
return obj5741;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3134__auto__ = p;
if(and__3134__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3134__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__3406__auto__ = (((p == null))?null:p);
return (function (){var or__3142__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__3134__auto__ = p;
if(and__3134__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3134__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__3406__auto__ = (((p == null))?null:p);
return (function (){var or__3142__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__3134__auto__ = p;
if(and__3134__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3134__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__3406__auto__ = (((p == null))?null:p);
return (function (){var or__3142__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3134__auto__ = p;
if(and__3134__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3134__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__3406__auto__ = (((p == null))?null:p);
return (function (){var or__3142__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3406__auto__)]);
if(or__3142__auto__){
return or__3142__auto__;
} else {
var or__3142__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3142__auto____$1){
return or__3142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3142__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3142__auto__)){
return or__3142__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3142__auto__,mults){
return (function (p1__5742_SHARP_){
if(cljs.core.truth_(p1__5742_SHARP_.call(null,topic))){
return p1__5742_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5742_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3142__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t5865 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5865 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta5866){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta5866 = meta5866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t5865.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t5865.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t5865.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t5865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t5865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t5865.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t5865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5867){
var self__ = this;
var _5867__$1 = this;
return self__.meta5866;
});})(mults,ensure_mult))
;

cljs.core.async.t5865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5867,meta5866__$1){
var self__ = this;
var _5867__$1 = this;
return (new cljs.core.async.t5865(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta5866__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t5865.cljs$lang$type = true;

cljs.core.async.t5865.cljs$lang$ctorStr = "cljs.core.async/t5865";

cljs.core.async.t5865.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs.core.async/t5865");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t5865 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t5865(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta5866){
return (new cljs.core.async.t5865(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta5866));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t5865(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1322__auto___5987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___5987,mults,ensure_mult,p){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___5987,mults,ensure_mult,p){
return (function (state_5939){
var state_val_5940 = (state_5939[(1)]);
if((state_val_5940 === (7))){
var inst_5935 = (state_5939[(2)]);
var state_5939__$1 = state_5939;
var statearr_5941_5988 = state_5939__$1;
(statearr_5941_5988[(2)] = inst_5935);

(statearr_5941_5988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (20))){
var state_5939__$1 = state_5939;
var statearr_5942_5989 = state_5939__$1;
(statearr_5942_5989[(2)] = null);

(statearr_5942_5989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (1))){
var state_5939__$1 = state_5939;
var statearr_5943_5990 = state_5939__$1;
(statearr_5943_5990[(2)] = null);

(statearr_5943_5990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (24))){
var inst_5918 = (state_5939[(7)]);
var inst_5927 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5918);
var state_5939__$1 = state_5939;
var statearr_5944_5991 = state_5939__$1;
(statearr_5944_5991[(2)] = inst_5927);

(statearr_5944_5991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (4))){
var inst_5870 = (state_5939[(8)]);
var inst_5870__$1 = (state_5939[(2)]);
var inst_5871 = (inst_5870__$1 == null);
var state_5939__$1 = (function (){var statearr_5945 = state_5939;
(statearr_5945[(8)] = inst_5870__$1);

return statearr_5945;
})();
if(cljs.core.truth_(inst_5871)){
var statearr_5946_5992 = state_5939__$1;
(statearr_5946_5992[(1)] = (5));

} else {
var statearr_5947_5993 = state_5939__$1;
(statearr_5947_5993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (15))){
var inst_5912 = (state_5939[(2)]);
var state_5939__$1 = state_5939;
var statearr_5948_5994 = state_5939__$1;
(statearr_5948_5994[(2)] = inst_5912);

(statearr_5948_5994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (21))){
var inst_5932 = (state_5939[(2)]);
var state_5939__$1 = (function (){var statearr_5949 = state_5939;
(statearr_5949[(9)] = inst_5932);

return statearr_5949;
})();
var statearr_5950_5995 = state_5939__$1;
(statearr_5950_5995[(2)] = null);

(statearr_5950_5995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (13))){
var inst_5894 = (state_5939[(10)]);
var inst_5896 = cljs.core.chunked_seq_QMARK_.call(null,inst_5894);
var state_5939__$1 = state_5939;
if(inst_5896){
var statearr_5951_5996 = state_5939__$1;
(statearr_5951_5996[(1)] = (16));

} else {
var statearr_5952_5997 = state_5939__$1;
(statearr_5952_5997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (22))){
var inst_5924 = (state_5939[(2)]);
var state_5939__$1 = state_5939;
if(cljs.core.truth_(inst_5924)){
var statearr_5953_5998 = state_5939__$1;
(statearr_5953_5998[(1)] = (23));

} else {
var statearr_5954_5999 = state_5939__$1;
(statearr_5954_5999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (6))){
var inst_5918 = (state_5939[(7)]);
var inst_5870 = (state_5939[(8)]);
var inst_5920 = (state_5939[(11)]);
var inst_5918__$1 = topic_fn.call(null,inst_5870);
var inst_5919 = cljs.core.deref.call(null,mults);
var inst_5920__$1 = cljs.core.get.call(null,inst_5919,inst_5918__$1);
var state_5939__$1 = (function (){var statearr_5955 = state_5939;
(statearr_5955[(7)] = inst_5918__$1);

(statearr_5955[(11)] = inst_5920__$1);

return statearr_5955;
})();
if(cljs.core.truth_(inst_5920__$1)){
var statearr_5956_6000 = state_5939__$1;
(statearr_5956_6000[(1)] = (19));

} else {
var statearr_5957_6001 = state_5939__$1;
(statearr_5957_6001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (25))){
var inst_5929 = (state_5939[(2)]);
var state_5939__$1 = state_5939;
var statearr_5958_6002 = state_5939__$1;
(statearr_5958_6002[(2)] = inst_5929);

(statearr_5958_6002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (17))){
var inst_5894 = (state_5939[(10)]);
var inst_5903 = cljs.core.first.call(null,inst_5894);
var inst_5904 = cljs.core.async.muxch_STAR_.call(null,inst_5903);
var inst_5905 = cljs.core.async.close_BANG_.call(null,inst_5904);
var inst_5906 = cljs.core.next.call(null,inst_5894);
var inst_5880 = inst_5906;
var inst_5881 = null;
var inst_5882 = (0);
var inst_5883 = (0);
var state_5939__$1 = (function (){var statearr_5959 = state_5939;
(statearr_5959[(12)] = inst_5882);

(statearr_5959[(13)] = inst_5880);

(statearr_5959[(14)] = inst_5883);

(statearr_5959[(15)] = inst_5881);

(statearr_5959[(16)] = inst_5905);

return statearr_5959;
})();
var statearr_5960_6003 = state_5939__$1;
(statearr_5960_6003[(2)] = null);

(statearr_5960_6003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (3))){
var inst_5937 = (state_5939[(2)]);
var state_5939__$1 = state_5939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5939__$1,inst_5937);
} else {
if((state_val_5940 === (12))){
var inst_5914 = (state_5939[(2)]);
var state_5939__$1 = state_5939;
var statearr_5961_6004 = state_5939__$1;
(statearr_5961_6004[(2)] = inst_5914);

(statearr_5961_6004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (2))){
var state_5939__$1 = state_5939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5939__$1,(4),ch);
} else {
if((state_val_5940 === (23))){
var state_5939__$1 = state_5939;
var statearr_5962_6005 = state_5939__$1;
(statearr_5962_6005[(2)] = null);

(statearr_5962_6005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (19))){
var inst_5870 = (state_5939[(8)]);
var inst_5920 = (state_5939[(11)]);
var inst_5922 = cljs.core.async.muxch_STAR_.call(null,inst_5920);
var state_5939__$1 = state_5939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5939__$1,(22),inst_5922,inst_5870);
} else {
if((state_val_5940 === (11))){
var inst_5880 = (state_5939[(13)]);
var inst_5894 = (state_5939[(10)]);
var inst_5894__$1 = cljs.core.seq.call(null,inst_5880);
var state_5939__$1 = (function (){var statearr_5963 = state_5939;
(statearr_5963[(10)] = inst_5894__$1);

return statearr_5963;
})();
if(inst_5894__$1){
var statearr_5964_6006 = state_5939__$1;
(statearr_5964_6006[(1)] = (13));

} else {
var statearr_5965_6007 = state_5939__$1;
(statearr_5965_6007[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (9))){
var inst_5916 = (state_5939[(2)]);
var state_5939__$1 = state_5939;
var statearr_5966_6008 = state_5939__$1;
(statearr_5966_6008[(2)] = inst_5916);

(statearr_5966_6008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (5))){
var inst_5877 = cljs.core.deref.call(null,mults);
var inst_5878 = cljs.core.vals.call(null,inst_5877);
var inst_5879 = cljs.core.seq.call(null,inst_5878);
var inst_5880 = inst_5879;
var inst_5881 = null;
var inst_5882 = (0);
var inst_5883 = (0);
var state_5939__$1 = (function (){var statearr_5967 = state_5939;
(statearr_5967[(12)] = inst_5882);

(statearr_5967[(13)] = inst_5880);

(statearr_5967[(14)] = inst_5883);

(statearr_5967[(15)] = inst_5881);

return statearr_5967;
})();
var statearr_5968_6009 = state_5939__$1;
(statearr_5968_6009[(2)] = null);

(statearr_5968_6009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (14))){
var state_5939__$1 = state_5939;
var statearr_5972_6010 = state_5939__$1;
(statearr_5972_6010[(2)] = null);

(statearr_5972_6010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (16))){
var inst_5894 = (state_5939[(10)]);
var inst_5898 = cljs.core.chunk_first.call(null,inst_5894);
var inst_5899 = cljs.core.chunk_rest.call(null,inst_5894);
var inst_5900 = cljs.core.count.call(null,inst_5898);
var inst_5880 = inst_5899;
var inst_5881 = inst_5898;
var inst_5882 = inst_5900;
var inst_5883 = (0);
var state_5939__$1 = (function (){var statearr_5973 = state_5939;
(statearr_5973[(12)] = inst_5882);

(statearr_5973[(13)] = inst_5880);

(statearr_5973[(14)] = inst_5883);

(statearr_5973[(15)] = inst_5881);

return statearr_5973;
})();
var statearr_5974_6011 = state_5939__$1;
(statearr_5974_6011[(2)] = null);

(statearr_5974_6011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (10))){
var inst_5882 = (state_5939[(12)]);
var inst_5880 = (state_5939[(13)]);
var inst_5883 = (state_5939[(14)]);
var inst_5881 = (state_5939[(15)]);
var inst_5888 = cljs.core._nth.call(null,inst_5881,inst_5883);
var inst_5889 = cljs.core.async.muxch_STAR_.call(null,inst_5888);
var inst_5890 = cljs.core.async.close_BANG_.call(null,inst_5889);
var inst_5891 = (inst_5883 + (1));
var tmp5969 = inst_5882;
var tmp5970 = inst_5880;
var tmp5971 = inst_5881;
var inst_5880__$1 = tmp5970;
var inst_5881__$1 = tmp5971;
var inst_5882__$1 = tmp5969;
var inst_5883__$1 = inst_5891;
var state_5939__$1 = (function (){var statearr_5975 = state_5939;
(statearr_5975[(12)] = inst_5882__$1);

(statearr_5975[(13)] = inst_5880__$1);

(statearr_5975[(14)] = inst_5883__$1);

(statearr_5975[(17)] = inst_5890);

(statearr_5975[(15)] = inst_5881__$1);

return statearr_5975;
})();
var statearr_5976_6012 = state_5939__$1;
(statearr_5976_6012[(2)] = null);

(statearr_5976_6012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (18))){
var inst_5909 = (state_5939[(2)]);
var state_5939__$1 = state_5939;
var statearr_5977_6013 = state_5939__$1;
(statearr_5977_6013[(2)] = inst_5909);

(statearr_5977_6013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5940 === (8))){
var inst_5882 = (state_5939[(12)]);
var inst_5883 = (state_5939[(14)]);
var inst_5885 = (inst_5883 < inst_5882);
var inst_5886 = inst_5885;
var state_5939__$1 = state_5939;
if(cljs.core.truth_(inst_5886)){
var statearr_5978_6014 = state_5939__$1;
(statearr_5978_6014[(1)] = (10));

} else {
var statearr_5979_6015 = state_5939__$1;
(statearr_5979_6015[(1)] = (11));

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
});})(c__1322__auto___5987,mults,ensure_mult,p))
;
return ((function (switch__1266__auto__,c__1322__auto___5987,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__1267__auto__ = null;
var cljs$core$async$pub_$_state_machine__1267__auto____0 = (function (){
var statearr_5983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5983[(0)] = cljs$core$async$pub_$_state_machine__1267__auto__);

(statearr_5983[(1)] = (1));

return statearr_5983;
});
var cljs$core$async$pub_$_state_machine__1267__auto____1 = (function (state_5939){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_5939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e5984){if((e5984 instanceof Object)){
var ex__1270__auto__ = e5984;
var statearr_5985_6016 = state_5939;
(statearr_5985_6016[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6017 = state_5939;
state_5939 = G__6017;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__1267__auto__ = function(state_5939){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__1267__auto____1.call(this,state_5939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__1267__auto____0;
cljs$core$async$pub_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__1267__auto____1;
return cljs$core$async$pub_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___5987,mults,ensure_mult,p))
})();
var state__1324__auto__ = (function (){var statearr_5986 = f__1323__auto__.call(null);
(statearr_5986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___5987);

return statearr_5986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___5987,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__1322__auto___6154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___6154,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___6154,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_6124){
var state_val_6125 = (state_6124[(1)]);
if((state_val_6125 === (7))){
var state_6124__$1 = state_6124;
var statearr_6126_6155 = state_6124__$1;
(statearr_6126_6155[(2)] = null);

(statearr_6126_6155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (1))){
var state_6124__$1 = state_6124;
var statearr_6127_6156 = state_6124__$1;
(statearr_6127_6156[(2)] = null);

(statearr_6127_6156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (4))){
var inst_6088 = (state_6124[(7)]);
var inst_6090 = (inst_6088 < cnt);
var state_6124__$1 = state_6124;
if(cljs.core.truth_(inst_6090)){
var statearr_6128_6157 = state_6124__$1;
(statearr_6128_6157[(1)] = (6));

} else {
var statearr_6129_6158 = state_6124__$1;
(statearr_6129_6158[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (15))){
var inst_6120 = (state_6124[(2)]);
var state_6124__$1 = state_6124;
var statearr_6130_6159 = state_6124__$1;
(statearr_6130_6159[(2)] = inst_6120);

(statearr_6130_6159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (13))){
var inst_6113 = cljs.core.async.close_BANG_.call(null,out);
var state_6124__$1 = state_6124;
var statearr_6131_6160 = state_6124__$1;
(statearr_6131_6160[(2)] = inst_6113);

(statearr_6131_6160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (6))){
var state_6124__$1 = state_6124;
var statearr_6132_6161 = state_6124__$1;
(statearr_6132_6161[(2)] = null);

(statearr_6132_6161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (3))){
var inst_6122 = (state_6124[(2)]);
var state_6124__$1 = state_6124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6124__$1,inst_6122);
} else {
if((state_val_6125 === (12))){
var inst_6110 = (state_6124[(8)]);
var inst_6110__$1 = (state_6124[(2)]);
var inst_6111 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_6110__$1);
var state_6124__$1 = (function (){var statearr_6133 = state_6124;
(statearr_6133[(8)] = inst_6110__$1);

return statearr_6133;
})();
if(cljs.core.truth_(inst_6111)){
var statearr_6134_6162 = state_6124__$1;
(statearr_6134_6162[(1)] = (13));

} else {
var statearr_6135_6163 = state_6124__$1;
(statearr_6135_6163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (2))){
var inst_6087 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_6088 = (0);
var state_6124__$1 = (function (){var statearr_6136 = state_6124;
(statearr_6136[(7)] = inst_6088);

(statearr_6136[(9)] = inst_6087);

return statearr_6136;
})();
var statearr_6137_6164 = state_6124__$1;
(statearr_6137_6164[(2)] = null);

(statearr_6137_6164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (11))){
var inst_6088 = (state_6124[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_6124,(10),Object,null,(9));
var inst_6097 = chs__$1.call(null,inst_6088);
var inst_6098 = done.call(null,inst_6088);
var inst_6099 = cljs.core.async.take_BANG_.call(null,inst_6097,inst_6098);
var state_6124__$1 = state_6124;
var statearr_6138_6165 = state_6124__$1;
(statearr_6138_6165[(2)] = inst_6099);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (9))){
var inst_6088 = (state_6124[(7)]);
var inst_6101 = (state_6124[(2)]);
var inst_6102 = (inst_6088 + (1));
var inst_6088__$1 = inst_6102;
var state_6124__$1 = (function (){var statearr_6139 = state_6124;
(statearr_6139[(7)] = inst_6088__$1);

(statearr_6139[(10)] = inst_6101);

return statearr_6139;
})();
var statearr_6140_6166 = state_6124__$1;
(statearr_6140_6166[(2)] = null);

(statearr_6140_6166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (5))){
var inst_6108 = (state_6124[(2)]);
var state_6124__$1 = (function (){var statearr_6141 = state_6124;
(statearr_6141[(11)] = inst_6108);

return statearr_6141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6124__$1,(12),dchan);
} else {
if((state_val_6125 === (14))){
var inst_6110 = (state_6124[(8)]);
var inst_6115 = cljs.core.apply.call(null,f,inst_6110);
var state_6124__$1 = state_6124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6124__$1,(16),out,inst_6115);
} else {
if((state_val_6125 === (16))){
var inst_6117 = (state_6124[(2)]);
var state_6124__$1 = (function (){var statearr_6142 = state_6124;
(statearr_6142[(12)] = inst_6117);

return statearr_6142;
})();
var statearr_6143_6167 = state_6124__$1;
(statearr_6143_6167[(2)] = null);

(statearr_6143_6167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (10))){
var inst_6092 = (state_6124[(2)]);
var inst_6093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_6124__$1 = (function (){var statearr_6144 = state_6124;
(statearr_6144[(13)] = inst_6092);

return statearr_6144;
})();
var statearr_6145_6168 = state_6124__$1;
(statearr_6145_6168[(2)] = inst_6093);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6125 === (8))){
var inst_6106 = (state_6124[(2)]);
var state_6124__$1 = state_6124;
var statearr_6146_6169 = state_6124__$1;
(statearr_6146_6169[(2)] = inst_6106);

(statearr_6146_6169[(1)] = (5));


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
});})(c__1322__auto___6154,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__1266__auto__,c__1322__auto___6154,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__1267__auto__ = null;
var cljs$core$async$map_$_state_machine__1267__auto____0 = (function (){
var statearr_6150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6150[(0)] = cljs$core$async$map_$_state_machine__1267__auto__);

(statearr_6150[(1)] = (1));

return statearr_6150;
});
var cljs$core$async$map_$_state_machine__1267__auto____1 = (function (state_6124){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_6124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e6151){if((e6151 instanceof Object)){
var ex__1270__auto__ = e6151;
var statearr_6152_6170 = state_6124;
(statearr_6152_6170[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6171 = state_6124;
state_6124 = G__6171;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__1267__auto__ = function(state_6124){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__1267__auto____1.call(this,state_6124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__1267__auto____0;
cljs$core$async$map_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__1267__auto____1;
return cljs$core$async$map_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___6154,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__1324__auto__ = (function (){var statearr_6153 = f__1323__auto__.call(null);
(statearr_6153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___6154);

return statearr_6153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___6154,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1322__auto___6279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___6279,out){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___6279,out){
return (function (state_6255){
var state_val_6256 = (state_6255[(1)]);
if((state_val_6256 === (7))){
var inst_6235 = (state_6255[(7)]);
var inst_6234 = (state_6255[(8)]);
var inst_6234__$1 = (state_6255[(2)]);
var inst_6235__$1 = cljs.core.nth.call(null,inst_6234__$1,(0),null);
var inst_6236 = cljs.core.nth.call(null,inst_6234__$1,(1),null);
var inst_6237 = (inst_6235__$1 == null);
var state_6255__$1 = (function (){var statearr_6257 = state_6255;
(statearr_6257[(9)] = inst_6236);

(statearr_6257[(7)] = inst_6235__$1);

(statearr_6257[(8)] = inst_6234__$1);

return statearr_6257;
})();
if(cljs.core.truth_(inst_6237)){
var statearr_6258_6280 = state_6255__$1;
(statearr_6258_6280[(1)] = (8));

} else {
var statearr_6259_6281 = state_6255__$1;
(statearr_6259_6281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6256 === (1))){
var inst_6226 = cljs.core.vec.call(null,chs);
var inst_6227 = inst_6226;
var state_6255__$1 = (function (){var statearr_6260 = state_6255;
(statearr_6260[(10)] = inst_6227);

return statearr_6260;
})();
var statearr_6261_6282 = state_6255__$1;
(statearr_6261_6282[(2)] = null);

(statearr_6261_6282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6256 === (4))){
var inst_6227 = (state_6255[(10)]);
var state_6255__$1 = state_6255;
return cljs.core.async.ioc_alts_BANG_.call(null,state_6255__$1,(7),inst_6227);
} else {
if((state_val_6256 === (6))){
var inst_6251 = (state_6255[(2)]);
var state_6255__$1 = state_6255;
var statearr_6262_6283 = state_6255__$1;
(statearr_6262_6283[(2)] = inst_6251);

(statearr_6262_6283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6256 === (3))){
var inst_6253 = (state_6255[(2)]);
var state_6255__$1 = state_6255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6255__$1,inst_6253);
} else {
if((state_val_6256 === (2))){
var inst_6227 = (state_6255[(10)]);
var inst_6229 = cljs.core.count.call(null,inst_6227);
var inst_6230 = (inst_6229 > (0));
var state_6255__$1 = state_6255;
if(cljs.core.truth_(inst_6230)){
var statearr_6264_6284 = state_6255__$1;
(statearr_6264_6284[(1)] = (4));

} else {
var statearr_6265_6285 = state_6255__$1;
(statearr_6265_6285[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6256 === (11))){
var inst_6227 = (state_6255[(10)]);
var inst_6244 = (state_6255[(2)]);
var tmp6263 = inst_6227;
var inst_6227__$1 = tmp6263;
var state_6255__$1 = (function (){var statearr_6266 = state_6255;
(statearr_6266[(11)] = inst_6244);

(statearr_6266[(10)] = inst_6227__$1);

return statearr_6266;
})();
var statearr_6267_6286 = state_6255__$1;
(statearr_6267_6286[(2)] = null);

(statearr_6267_6286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6256 === (9))){
var inst_6235 = (state_6255[(7)]);
var state_6255__$1 = state_6255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6255__$1,(11),out,inst_6235);
} else {
if((state_val_6256 === (5))){
var inst_6249 = cljs.core.async.close_BANG_.call(null,out);
var state_6255__$1 = state_6255;
var statearr_6268_6287 = state_6255__$1;
(statearr_6268_6287[(2)] = inst_6249);

(statearr_6268_6287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6256 === (10))){
var inst_6247 = (state_6255[(2)]);
var state_6255__$1 = state_6255;
var statearr_6269_6288 = state_6255__$1;
(statearr_6269_6288[(2)] = inst_6247);

(statearr_6269_6288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6256 === (8))){
var inst_6236 = (state_6255[(9)]);
var inst_6235 = (state_6255[(7)]);
var inst_6227 = (state_6255[(10)]);
var inst_6234 = (state_6255[(8)]);
var inst_6239 = (function (){var c = inst_6236;
var v = inst_6235;
var vec__6232 = inst_6234;
var cs = inst_6227;
return ((function (c,v,vec__6232,cs,inst_6236,inst_6235,inst_6227,inst_6234,state_val_6256,c__1322__auto___6279,out){
return (function (p1__6172_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__6172_SHARP_);
});
;})(c,v,vec__6232,cs,inst_6236,inst_6235,inst_6227,inst_6234,state_val_6256,c__1322__auto___6279,out))
})();
var inst_6240 = cljs.core.filterv.call(null,inst_6239,inst_6227);
var inst_6227__$1 = inst_6240;
var state_6255__$1 = (function (){var statearr_6270 = state_6255;
(statearr_6270[(10)] = inst_6227__$1);

return statearr_6270;
})();
var statearr_6271_6289 = state_6255__$1;
(statearr_6271_6289[(2)] = null);

(statearr_6271_6289[(1)] = (2));


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
});})(c__1322__auto___6279,out))
;
return ((function (switch__1266__auto__,c__1322__auto___6279,out){
return (function() {
var cljs$core$async$merge_$_state_machine__1267__auto__ = null;
var cljs$core$async$merge_$_state_machine__1267__auto____0 = (function (){
var statearr_6275 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6275[(0)] = cljs$core$async$merge_$_state_machine__1267__auto__);

(statearr_6275[(1)] = (1));

return statearr_6275;
});
var cljs$core$async$merge_$_state_machine__1267__auto____1 = (function (state_6255){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_6255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e6276){if((e6276 instanceof Object)){
var ex__1270__auto__ = e6276;
var statearr_6277_6290 = state_6255;
(statearr_6277_6290[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6291 = state_6255;
state_6255 = G__6291;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__1267__auto__ = function(state_6255){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__1267__auto____1.call(this,state_6255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__1267__auto____0;
cljs$core$async$merge_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__1267__auto____1;
return cljs$core$async$merge_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___6279,out))
})();
var state__1324__auto__ = (function (){var statearr_6278 = f__1323__auto__.call(null);
(statearr_6278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___6279);

return statearr_6278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___6279,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1322__auto___6384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___6384,out){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___6384,out){
return (function (state_6361){
var state_val_6362 = (state_6361[(1)]);
if((state_val_6362 === (7))){
var inst_6343 = (state_6361[(7)]);
var inst_6343__$1 = (state_6361[(2)]);
var inst_6344 = (inst_6343__$1 == null);
var inst_6345 = cljs.core.not.call(null,inst_6344);
var state_6361__$1 = (function (){var statearr_6363 = state_6361;
(statearr_6363[(7)] = inst_6343__$1);

return statearr_6363;
})();
if(inst_6345){
var statearr_6364_6385 = state_6361__$1;
(statearr_6364_6385[(1)] = (8));

} else {
var statearr_6365_6386 = state_6361__$1;
(statearr_6365_6386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6362 === (1))){
var inst_6338 = (0);
var state_6361__$1 = (function (){var statearr_6366 = state_6361;
(statearr_6366[(8)] = inst_6338);

return statearr_6366;
})();
var statearr_6367_6387 = state_6361__$1;
(statearr_6367_6387[(2)] = null);

(statearr_6367_6387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6362 === (4))){
var state_6361__$1 = state_6361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6361__$1,(7),ch);
} else {
if((state_val_6362 === (6))){
var inst_6356 = (state_6361[(2)]);
var state_6361__$1 = state_6361;
var statearr_6368_6388 = state_6361__$1;
(statearr_6368_6388[(2)] = inst_6356);

(statearr_6368_6388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6362 === (3))){
var inst_6358 = (state_6361[(2)]);
var inst_6359 = cljs.core.async.close_BANG_.call(null,out);
var state_6361__$1 = (function (){var statearr_6369 = state_6361;
(statearr_6369[(9)] = inst_6358);

return statearr_6369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6361__$1,inst_6359);
} else {
if((state_val_6362 === (2))){
var inst_6338 = (state_6361[(8)]);
var inst_6340 = (inst_6338 < n);
var state_6361__$1 = state_6361;
if(cljs.core.truth_(inst_6340)){
var statearr_6370_6389 = state_6361__$1;
(statearr_6370_6389[(1)] = (4));

} else {
var statearr_6371_6390 = state_6361__$1;
(statearr_6371_6390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6362 === (11))){
var inst_6338 = (state_6361[(8)]);
var inst_6348 = (state_6361[(2)]);
var inst_6349 = (inst_6338 + (1));
var inst_6338__$1 = inst_6349;
var state_6361__$1 = (function (){var statearr_6372 = state_6361;
(statearr_6372[(8)] = inst_6338__$1);

(statearr_6372[(10)] = inst_6348);

return statearr_6372;
})();
var statearr_6373_6391 = state_6361__$1;
(statearr_6373_6391[(2)] = null);

(statearr_6373_6391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6362 === (9))){
var state_6361__$1 = state_6361;
var statearr_6374_6392 = state_6361__$1;
(statearr_6374_6392[(2)] = null);

(statearr_6374_6392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6362 === (5))){
var state_6361__$1 = state_6361;
var statearr_6375_6393 = state_6361__$1;
(statearr_6375_6393[(2)] = null);

(statearr_6375_6393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6362 === (10))){
var inst_6353 = (state_6361[(2)]);
var state_6361__$1 = state_6361;
var statearr_6376_6394 = state_6361__$1;
(statearr_6376_6394[(2)] = inst_6353);

(statearr_6376_6394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6362 === (8))){
var inst_6343 = (state_6361[(7)]);
var state_6361__$1 = state_6361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6361__$1,(11),out,inst_6343);
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
});})(c__1322__auto___6384,out))
;
return ((function (switch__1266__auto__,c__1322__auto___6384,out){
return (function() {
var cljs$core$async$take_$_state_machine__1267__auto__ = null;
var cljs$core$async$take_$_state_machine__1267__auto____0 = (function (){
var statearr_6380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6380[(0)] = cljs$core$async$take_$_state_machine__1267__auto__);

(statearr_6380[(1)] = (1));

return statearr_6380;
});
var cljs$core$async$take_$_state_machine__1267__auto____1 = (function (state_6361){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_6361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e6381){if((e6381 instanceof Object)){
var ex__1270__auto__ = e6381;
var statearr_6382_6395 = state_6361;
(statearr_6382_6395[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6396 = state_6361;
state_6361 = G__6396;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__1267__auto__ = function(state_6361){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__1267__auto____1.call(this,state_6361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__1267__auto____0;
cljs$core$async$take_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__1267__auto____1;
return cljs$core$async$take_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___6384,out))
})();
var state__1324__auto__ = (function (){var statearr_6383 = f__1323__auto__.call(null);
(statearr_6383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___6384);

return statearr_6383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___6384,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t6404 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6404 = (function (ch,f,map_LT_,meta6405){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta6405 = meta6405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t6404.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t6404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t6404.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t6404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t6407 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6407 = (function (fn1,_,meta6405,map_LT_,f,ch,meta6408){
this.fn1 = fn1;
this._ = _;
this.meta6405 = meta6405;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta6408 = meta6408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t6407.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t6407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t6407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__6397_SHARP_){
return f1.call(null,(((p1__6397_SHARP_ == null))?null:self__.f.call(null,p1__6397_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t6407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_6409){
var self__ = this;
var _6409__$1 = this;
return self__.meta6408;
});})(___$1))
;

cljs.core.async.t6407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_6409,meta6408__$1){
var self__ = this;
var _6409__$1 = this;
return (new cljs.core.async.t6407(self__.fn1,self__._,self__.meta6405,self__.map_LT_,self__.f,self__.ch,meta6408__$1));
});})(___$1))
;

cljs.core.async.t6407.cljs$lang$type = true;

cljs.core.async.t6407.cljs$lang$ctorStr = "cljs.core.async/t6407";

cljs.core.async.t6407.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs.core.async/t6407");
});})(___$1))
;

cljs.core.async.__GT_t6407 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t6407(fn1__$1,___$2,meta6405__$1,map_LT___$1,f__$1,ch__$1,meta6408){
return (new cljs.core.async.t6407(fn1__$1,___$2,meta6405__$1,map_LT___$1,f__$1,ch__$1,meta6408));
});})(___$1))
;

}

return (new cljs.core.async.t6407(fn1,___$1,self__.meta6405,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3134__auto__ = ret;
if(cljs.core.truth_(and__3134__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3134__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t6404.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t6404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t6404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t6404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6406){
var self__ = this;
var _6406__$1 = this;
return self__.meta6405;
});

cljs.core.async.t6404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6406,meta6405__$1){
var self__ = this;
var _6406__$1 = this;
return (new cljs.core.async.t6404(self__.ch,self__.f,self__.map_LT_,meta6405__$1));
});

cljs.core.async.t6404.cljs$lang$type = true;

cljs.core.async.t6404.cljs$lang$ctorStr = "cljs.core.async/t6404";

cljs.core.async.t6404.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs.core.async/t6404");
});

cljs.core.async.__GT_t6404 = (function cljs$core$async$map_LT__$___GT_t6404(ch__$1,f__$1,map_LT___$1,meta6405){
return (new cljs.core.async.t6404(ch__$1,f__$1,map_LT___$1,meta6405));
});

}

return (new cljs.core.async.t6404(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t6413 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6413 = (function (ch,f,map_GT_,meta6414){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta6414 = meta6414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t6413.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t6413.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t6413.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t6413.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t6413.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t6413.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t6413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6415){
var self__ = this;
var _6415__$1 = this;
return self__.meta6414;
});

cljs.core.async.t6413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6415,meta6414__$1){
var self__ = this;
var _6415__$1 = this;
return (new cljs.core.async.t6413(self__.ch,self__.f,self__.map_GT_,meta6414__$1));
});

cljs.core.async.t6413.cljs$lang$type = true;

cljs.core.async.t6413.cljs$lang$ctorStr = "cljs.core.async/t6413";

cljs.core.async.t6413.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs.core.async/t6413");
});

cljs.core.async.__GT_t6413 = (function cljs$core$async$map_GT__$___GT_t6413(ch__$1,f__$1,map_GT___$1,meta6414){
return (new cljs.core.async.t6413(ch__$1,f__$1,map_GT___$1,meta6414));
});

}

return (new cljs.core.async.t6413(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t6419 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6419 = (function (ch,p,filter_GT_,meta6420){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta6420 = meta6420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t6419.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t6419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t6419.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t6419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t6419.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t6419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t6419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t6419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6421){
var self__ = this;
var _6421__$1 = this;
return self__.meta6420;
});

cljs.core.async.t6419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6421,meta6420__$1){
var self__ = this;
var _6421__$1 = this;
return (new cljs.core.async.t6419(self__.ch,self__.p,self__.filter_GT_,meta6420__$1));
});

cljs.core.async.t6419.cljs$lang$type = true;

cljs.core.async.t6419.cljs$lang$ctorStr = "cljs.core.async/t6419";

cljs.core.async.t6419.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs.core.async/t6419");
});

cljs.core.async.__GT_t6419 = (function cljs$core$async$filter_GT__$___GT_t6419(ch__$1,p__$1,filter_GT___$1,meta6420){
return (new cljs.core.async.t6419(ch__$1,p__$1,filter_GT___$1,meta6420));
});

}

return (new cljs.core.async.t6419(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1322__auto___6504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___6504,out){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___6504,out){
return (function (state_6483){
var state_val_6484 = (state_6483[(1)]);
if((state_val_6484 === (7))){
var inst_6479 = (state_6483[(2)]);
var state_6483__$1 = state_6483;
var statearr_6485_6505 = state_6483__$1;
(statearr_6485_6505[(2)] = inst_6479);

(statearr_6485_6505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6484 === (1))){
var state_6483__$1 = state_6483;
var statearr_6486_6506 = state_6483__$1;
(statearr_6486_6506[(2)] = null);

(statearr_6486_6506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6484 === (4))){
var inst_6465 = (state_6483[(7)]);
var inst_6465__$1 = (state_6483[(2)]);
var inst_6466 = (inst_6465__$1 == null);
var state_6483__$1 = (function (){var statearr_6487 = state_6483;
(statearr_6487[(7)] = inst_6465__$1);

return statearr_6487;
})();
if(cljs.core.truth_(inst_6466)){
var statearr_6488_6507 = state_6483__$1;
(statearr_6488_6507[(1)] = (5));

} else {
var statearr_6489_6508 = state_6483__$1;
(statearr_6489_6508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6484 === (6))){
var inst_6465 = (state_6483[(7)]);
var inst_6470 = p.call(null,inst_6465);
var state_6483__$1 = state_6483;
if(cljs.core.truth_(inst_6470)){
var statearr_6490_6509 = state_6483__$1;
(statearr_6490_6509[(1)] = (8));

} else {
var statearr_6491_6510 = state_6483__$1;
(statearr_6491_6510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6484 === (3))){
var inst_6481 = (state_6483[(2)]);
var state_6483__$1 = state_6483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6483__$1,inst_6481);
} else {
if((state_val_6484 === (2))){
var state_6483__$1 = state_6483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6483__$1,(4),ch);
} else {
if((state_val_6484 === (11))){
var inst_6473 = (state_6483[(2)]);
var state_6483__$1 = state_6483;
var statearr_6492_6511 = state_6483__$1;
(statearr_6492_6511[(2)] = inst_6473);

(statearr_6492_6511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6484 === (9))){
var state_6483__$1 = state_6483;
var statearr_6493_6512 = state_6483__$1;
(statearr_6493_6512[(2)] = null);

(statearr_6493_6512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6484 === (5))){
var inst_6468 = cljs.core.async.close_BANG_.call(null,out);
var state_6483__$1 = state_6483;
var statearr_6494_6513 = state_6483__$1;
(statearr_6494_6513[(2)] = inst_6468);

(statearr_6494_6513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6484 === (10))){
var inst_6476 = (state_6483[(2)]);
var state_6483__$1 = (function (){var statearr_6495 = state_6483;
(statearr_6495[(8)] = inst_6476);

return statearr_6495;
})();
var statearr_6496_6514 = state_6483__$1;
(statearr_6496_6514[(2)] = null);

(statearr_6496_6514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6484 === (8))){
var inst_6465 = (state_6483[(7)]);
var state_6483__$1 = state_6483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6483__$1,(11),out,inst_6465);
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
});})(c__1322__auto___6504,out))
;
return ((function (switch__1266__auto__,c__1322__auto___6504,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__1267__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__1267__auto____0 = (function (){
var statearr_6500 = [null,null,null,null,null,null,null,null,null];
(statearr_6500[(0)] = cljs$core$async$filter_LT__$_state_machine__1267__auto__);

(statearr_6500[(1)] = (1));

return statearr_6500;
});
var cljs$core$async$filter_LT__$_state_machine__1267__auto____1 = (function (state_6483){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_6483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e6501){if((e6501 instanceof Object)){
var ex__1270__auto__ = e6501;
var statearr_6502_6515 = state_6483;
(statearr_6502_6515[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6516 = state_6483;
state_6483 = G__6516;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__1267__auto__ = function(state_6483){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__1267__auto____1.call(this,state_6483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__1267__auto____0;
cljs$core$async$filter_LT__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__1267__auto____1;
return cljs$core$async$filter_LT__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___6504,out))
})();
var state__1324__auto__ = (function (){var statearr_6503 = f__1323__auto__.call(null);
(statearr_6503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___6504);

return statearr_6503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___6504,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__1322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto__){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto__){
return (function (state_6682){
var state_val_6683 = (state_6682[(1)]);
if((state_val_6683 === (7))){
var inst_6678 = (state_6682[(2)]);
var state_6682__$1 = state_6682;
var statearr_6684_6725 = state_6682__$1;
(statearr_6684_6725[(2)] = inst_6678);

(statearr_6684_6725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (20))){
var inst_6648 = (state_6682[(7)]);
var inst_6659 = (state_6682[(2)]);
var inst_6660 = cljs.core.next.call(null,inst_6648);
var inst_6634 = inst_6660;
var inst_6635 = null;
var inst_6636 = (0);
var inst_6637 = (0);
var state_6682__$1 = (function (){var statearr_6685 = state_6682;
(statearr_6685[(8)] = inst_6659);

(statearr_6685[(9)] = inst_6637);

(statearr_6685[(10)] = inst_6635);

(statearr_6685[(11)] = inst_6634);

(statearr_6685[(12)] = inst_6636);

return statearr_6685;
})();
var statearr_6686_6726 = state_6682__$1;
(statearr_6686_6726[(2)] = null);

(statearr_6686_6726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (1))){
var state_6682__$1 = state_6682;
var statearr_6687_6727 = state_6682__$1;
(statearr_6687_6727[(2)] = null);

(statearr_6687_6727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (4))){
var inst_6623 = (state_6682[(13)]);
var inst_6623__$1 = (state_6682[(2)]);
var inst_6624 = (inst_6623__$1 == null);
var state_6682__$1 = (function (){var statearr_6688 = state_6682;
(statearr_6688[(13)] = inst_6623__$1);

return statearr_6688;
})();
if(cljs.core.truth_(inst_6624)){
var statearr_6689_6728 = state_6682__$1;
(statearr_6689_6728[(1)] = (5));

} else {
var statearr_6690_6729 = state_6682__$1;
(statearr_6690_6729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (15))){
var state_6682__$1 = state_6682;
var statearr_6694_6730 = state_6682__$1;
(statearr_6694_6730[(2)] = null);

(statearr_6694_6730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (21))){
var state_6682__$1 = state_6682;
var statearr_6695_6731 = state_6682__$1;
(statearr_6695_6731[(2)] = null);

(statearr_6695_6731[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (13))){
var inst_6637 = (state_6682[(9)]);
var inst_6635 = (state_6682[(10)]);
var inst_6634 = (state_6682[(11)]);
var inst_6636 = (state_6682[(12)]);
var inst_6644 = (state_6682[(2)]);
var inst_6645 = (inst_6637 + (1));
var tmp6691 = inst_6635;
var tmp6692 = inst_6634;
var tmp6693 = inst_6636;
var inst_6634__$1 = tmp6692;
var inst_6635__$1 = tmp6691;
var inst_6636__$1 = tmp6693;
var inst_6637__$1 = inst_6645;
var state_6682__$1 = (function (){var statearr_6696 = state_6682;
(statearr_6696[(14)] = inst_6644);

(statearr_6696[(9)] = inst_6637__$1);

(statearr_6696[(10)] = inst_6635__$1);

(statearr_6696[(11)] = inst_6634__$1);

(statearr_6696[(12)] = inst_6636__$1);

return statearr_6696;
})();
var statearr_6697_6732 = state_6682__$1;
(statearr_6697_6732[(2)] = null);

(statearr_6697_6732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (22))){
var state_6682__$1 = state_6682;
var statearr_6698_6733 = state_6682__$1;
(statearr_6698_6733[(2)] = null);

(statearr_6698_6733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (6))){
var inst_6623 = (state_6682[(13)]);
var inst_6632 = f.call(null,inst_6623);
var inst_6633 = cljs.core.seq.call(null,inst_6632);
var inst_6634 = inst_6633;
var inst_6635 = null;
var inst_6636 = (0);
var inst_6637 = (0);
var state_6682__$1 = (function (){var statearr_6699 = state_6682;
(statearr_6699[(9)] = inst_6637);

(statearr_6699[(10)] = inst_6635);

(statearr_6699[(11)] = inst_6634);

(statearr_6699[(12)] = inst_6636);

return statearr_6699;
})();
var statearr_6700_6734 = state_6682__$1;
(statearr_6700_6734[(2)] = null);

(statearr_6700_6734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (17))){
var inst_6648 = (state_6682[(7)]);
var inst_6652 = cljs.core.chunk_first.call(null,inst_6648);
var inst_6653 = cljs.core.chunk_rest.call(null,inst_6648);
var inst_6654 = cljs.core.count.call(null,inst_6652);
var inst_6634 = inst_6653;
var inst_6635 = inst_6652;
var inst_6636 = inst_6654;
var inst_6637 = (0);
var state_6682__$1 = (function (){var statearr_6701 = state_6682;
(statearr_6701[(9)] = inst_6637);

(statearr_6701[(10)] = inst_6635);

(statearr_6701[(11)] = inst_6634);

(statearr_6701[(12)] = inst_6636);

return statearr_6701;
})();
var statearr_6702_6735 = state_6682__$1;
(statearr_6702_6735[(2)] = null);

(statearr_6702_6735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (3))){
var inst_6680 = (state_6682[(2)]);
var state_6682__$1 = state_6682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6682__$1,inst_6680);
} else {
if((state_val_6683 === (12))){
var inst_6668 = (state_6682[(2)]);
var state_6682__$1 = state_6682;
var statearr_6703_6736 = state_6682__$1;
(statearr_6703_6736[(2)] = inst_6668);

(statearr_6703_6736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (2))){
var state_6682__$1 = state_6682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6682__$1,(4),in$);
} else {
if((state_val_6683 === (23))){
var inst_6676 = (state_6682[(2)]);
var state_6682__$1 = state_6682;
var statearr_6704_6737 = state_6682__$1;
(statearr_6704_6737[(2)] = inst_6676);

(statearr_6704_6737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (19))){
var inst_6663 = (state_6682[(2)]);
var state_6682__$1 = state_6682;
var statearr_6705_6738 = state_6682__$1;
(statearr_6705_6738[(2)] = inst_6663);

(statearr_6705_6738[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (11))){
var inst_6648 = (state_6682[(7)]);
var inst_6634 = (state_6682[(11)]);
var inst_6648__$1 = cljs.core.seq.call(null,inst_6634);
var state_6682__$1 = (function (){var statearr_6706 = state_6682;
(statearr_6706[(7)] = inst_6648__$1);

return statearr_6706;
})();
if(inst_6648__$1){
var statearr_6707_6739 = state_6682__$1;
(statearr_6707_6739[(1)] = (14));

} else {
var statearr_6708_6740 = state_6682__$1;
(statearr_6708_6740[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (9))){
var inst_6670 = (state_6682[(2)]);
var inst_6671 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_6682__$1 = (function (){var statearr_6709 = state_6682;
(statearr_6709[(15)] = inst_6670);

return statearr_6709;
})();
if(cljs.core.truth_(inst_6671)){
var statearr_6710_6741 = state_6682__$1;
(statearr_6710_6741[(1)] = (21));

} else {
var statearr_6711_6742 = state_6682__$1;
(statearr_6711_6742[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (5))){
var inst_6626 = cljs.core.async.close_BANG_.call(null,out);
var state_6682__$1 = state_6682;
var statearr_6712_6743 = state_6682__$1;
(statearr_6712_6743[(2)] = inst_6626);

(statearr_6712_6743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (14))){
var inst_6648 = (state_6682[(7)]);
var inst_6650 = cljs.core.chunked_seq_QMARK_.call(null,inst_6648);
var state_6682__$1 = state_6682;
if(inst_6650){
var statearr_6713_6744 = state_6682__$1;
(statearr_6713_6744[(1)] = (17));

} else {
var statearr_6714_6745 = state_6682__$1;
(statearr_6714_6745[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (16))){
var inst_6666 = (state_6682[(2)]);
var state_6682__$1 = state_6682;
var statearr_6715_6746 = state_6682__$1;
(statearr_6715_6746[(2)] = inst_6666);

(statearr_6715_6746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6683 === (10))){
var inst_6637 = (state_6682[(9)]);
var inst_6635 = (state_6682[(10)]);
var inst_6642 = cljs.core._nth.call(null,inst_6635,inst_6637);
var state_6682__$1 = state_6682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6682__$1,(13),out,inst_6642);
} else {
if((state_val_6683 === (18))){
var inst_6648 = (state_6682[(7)]);
var inst_6657 = cljs.core.first.call(null,inst_6648);
var state_6682__$1 = state_6682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6682__$1,(20),out,inst_6657);
} else {
if((state_val_6683 === (8))){
var inst_6637 = (state_6682[(9)]);
var inst_6636 = (state_6682[(12)]);
var inst_6639 = (inst_6637 < inst_6636);
var inst_6640 = inst_6639;
var state_6682__$1 = state_6682;
if(cljs.core.truth_(inst_6640)){
var statearr_6716_6747 = state_6682__$1;
(statearr_6716_6747[(1)] = (10));

} else {
var statearr_6717_6748 = state_6682__$1;
(statearr_6717_6748[(1)] = (11));

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
});})(c__1322__auto__))
;
return ((function (switch__1266__auto__,c__1322__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_6721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6721[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__);

(statearr_6721[(1)] = (1));

return statearr_6721;
});
var cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____1 = (function (state_6682){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_6682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e6722){if((e6722 instanceof Object)){
var ex__1270__auto__ = e6722;
var statearr_6723_6749 = state_6682;
(statearr_6723_6749[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6750 = state_6682;
state_6682 = G__6750;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__ = function(state_6682){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____1.call(this,state_6682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto__))
})();
var state__1324__auto__ = (function (){var statearr_6724 = f__1323__auto__.call(null);
(statearr_6724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto__);

return statearr_6724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto__))
);

return c__1322__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1322__auto___6847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___6847,out){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___6847,out){
return (function (state_6822){
var state_val_6823 = (state_6822[(1)]);
if((state_val_6823 === (7))){
var inst_6817 = (state_6822[(2)]);
var state_6822__$1 = state_6822;
var statearr_6824_6848 = state_6822__$1;
(statearr_6824_6848[(2)] = inst_6817);

(statearr_6824_6848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (1))){
var inst_6799 = null;
var state_6822__$1 = (function (){var statearr_6825 = state_6822;
(statearr_6825[(7)] = inst_6799);

return statearr_6825;
})();
var statearr_6826_6849 = state_6822__$1;
(statearr_6826_6849[(2)] = null);

(statearr_6826_6849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (4))){
var inst_6802 = (state_6822[(8)]);
var inst_6802__$1 = (state_6822[(2)]);
var inst_6803 = (inst_6802__$1 == null);
var inst_6804 = cljs.core.not.call(null,inst_6803);
var state_6822__$1 = (function (){var statearr_6827 = state_6822;
(statearr_6827[(8)] = inst_6802__$1);

return statearr_6827;
})();
if(inst_6804){
var statearr_6828_6850 = state_6822__$1;
(statearr_6828_6850[(1)] = (5));

} else {
var statearr_6829_6851 = state_6822__$1;
(statearr_6829_6851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (6))){
var state_6822__$1 = state_6822;
var statearr_6830_6852 = state_6822__$1;
(statearr_6830_6852[(2)] = null);

(statearr_6830_6852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (3))){
var inst_6819 = (state_6822[(2)]);
var inst_6820 = cljs.core.async.close_BANG_.call(null,out);
var state_6822__$1 = (function (){var statearr_6831 = state_6822;
(statearr_6831[(9)] = inst_6819);

return statearr_6831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6822__$1,inst_6820);
} else {
if((state_val_6823 === (2))){
var state_6822__$1 = state_6822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6822__$1,(4),ch);
} else {
if((state_val_6823 === (11))){
var inst_6802 = (state_6822[(8)]);
var inst_6811 = (state_6822[(2)]);
var inst_6799 = inst_6802;
var state_6822__$1 = (function (){var statearr_6832 = state_6822;
(statearr_6832[(10)] = inst_6811);

(statearr_6832[(7)] = inst_6799);

return statearr_6832;
})();
var statearr_6833_6853 = state_6822__$1;
(statearr_6833_6853[(2)] = null);

(statearr_6833_6853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (9))){
var inst_6802 = (state_6822[(8)]);
var state_6822__$1 = state_6822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6822__$1,(11),out,inst_6802);
} else {
if((state_val_6823 === (5))){
var inst_6802 = (state_6822[(8)]);
var inst_6799 = (state_6822[(7)]);
var inst_6806 = cljs.core._EQ_.call(null,inst_6802,inst_6799);
var state_6822__$1 = state_6822;
if(inst_6806){
var statearr_6835_6854 = state_6822__$1;
(statearr_6835_6854[(1)] = (8));

} else {
var statearr_6836_6855 = state_6822__$1;
(statearr_6836_6855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (10))){
var inst_6814 = (state_6822[(2)]);
var state_6822__$1 = state_6822;
var statearr_6837_6856 = state_6822__$1;
(statearr_6837_6856[(2)] = inst_6814);

(statearr_6837_6856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (8))){
var inst_6799 = (state_6822[(7)]);
var tmp6834 = inst_6799;
var inst_6799__$1 = tmp6834;
var state_6822__$1 = (function (){var statearr_6838 = state_6822;
(statearr_6838[(7)] = inst_6799__$1);

return statearr_6838;
})();
var statearr_6839_6857 = state_6822__$1;
(statearr_6839_6857[(2)] = null);

(statearr_6839_6857[(1)] = (2));


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
});})(c__1322__auto___6847,out))
;
return ((function (switch__1266__auto__,c__1322__auto___6847,out){
return (function() {
var cljs$core$async$unique_$_state_machine__1267__auto__ = null;
var cljs$core$async$unique_$_state_machine__1267__auto____0 = (function (){
var statearr_6843 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6843[(0)] = cljs$core$async$unique_$_state_machine__1267__auto__);

(statearr_6843[(1)] = (1));

return statearr_6843;
});
var cljs$core$async$unique_$_state_machine__1267__auto____1 = (function (state_6822){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_6822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e6844){if((e6844 instanceof Object)){
var ex__1270__auto__ = e6844;
var statearr_6845_6858 = state_6822;
(statearr_6845_6858[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6859 = state_6822;
state_6822 = G__6859;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__1267__auto__ = function(state_6822){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__1267__auto____1.call(this,state_6822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__1267__auto____0;
cljs$core$async$unique_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__1267__auto____1;
return cljs$core$async$unique_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___6847,out))
})();
var state__1324__auto__ = (function (){var statearr_6846 = f__1323__auto__.call(null);
(statearr_6846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___6847);

return statearr_6846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___6847,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1322__auto___6994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___6994,out){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___6994,out){
return (function (state_6964){
var state_val_6965 = (state_6964[(1)]);
if((state_val_6965 === (7))){
var inst_6960 = (state_6964[(2)]);
var state_6964__$1 = state_6964;
var statearr_6966_6995 = state_6964__$1;
(statearr_6966_6995[(2)] = inst_6960);

(statearr_6966_6995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6965 === (1))){
var inst_6927 = (new Array(n));
var inst_6928 = inst_6927;
var inst_6929 = (0);
var state_6964__$1 = (function (){var statearr_6967 = state_6964;
(statearr_6967[(7)] = inst_6929);

(statearr_6967[(8)] = inst_6928);

return statearr_6967;
})();
var statearr_6968_6996 = state_6964__$1;
(statearr_6968_6996[(2)] = null);

(statearr_6968_6996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6965 === (4))){
var inst_6932 = (state_6964[(9)]);
var inst_6932__$1 = (state_6964[(2)]);
var inst_6933 = (inst_6932__$1 == null);
var inst_6934 = cljs.core.not.call(null,inst_6933);
var state_6964__$1 = (function (){var statearr_6969 = state_6964;
(statearr_6969[(9)] = inst_6932__$1);

return statearr_6969;
})();
if(inst_6934){
var statearr_6970_6997 = state_6964__$1;
(statearr_6970_6997[(1)] = (5));

} else {
var statearr_6971_6998 = state_6964__$1;
(statearr_6971_6998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6965 === (15))){
var inst_6954 = (state_6964[(2)]);
var state_6964__$1 = state_6964;
var statearr_6972_6999 = state_6964__$1;
(statearr_6972_6999[(2)] = inst_6954);

(statearr_6972_6999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6965 === (13))){
var state_6964__$1 = state_6964;
var statearr_6973_7000 = state_6964__$1;
(statearr_6973_7000[(2)] = null);

(statearr_6973_7000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6965 === (6))){
var inst_6929 = (state_6964[(7)]);
var inst_6950 = (inst_6929 > (0));
var state_6964__$1 = state_6964;
if(cljs.core.truth_(inst_6950)){
var statearr_6974_7001 = state_6964__$1;
(statearr_6974_7001[(1)] = (12));

} else {
var statearr_6975_7002 = state_6964__$1;
(statearr_6975_7002[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6965 === (3))){
var inst_6962 = (state_6964[(2)]);
var state_6964__$1 = state_6964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6964__$1,inst_6962);
} else {
if((state_val_6965 === (12))){
var inst_6928 = (state_6964[(8)]);
var inst_6952 = cljs.core.vec.call(null,inst_6928);
var state_6964__$1 = state_6964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6964__$1,(15),out,inst_6952);
} else {
if((state_val_6965 === (2))){
var state_6964__$1 = state_6964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6964__$1,(4),ch);
} else {
if((state_val_6965 === (11))){
var inst_6944 = (state_6964[(2)]);
var inst_6945 = (new Array(n));
var inst_6928 = inst_6945;
var inst_6929 = (0);
var state_6964__$1 = (function (){var statearr_6976 = state_6964;
(statearr_6976[(10)] = inst_6944);

(statearr_6976[(7)] = inst_6929);

(statearr_6976[(8)] = inst_6928);

return statearr_6976;
})();
var statearr_6977_7003 = state_6964__$1;
(statearr_6977_7003[(2)] = null);

(statearr_6977_7003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6965 === (9))){
var inst_6928 = (state_6964[(8)]);
var inst_6942 = cljs.core.vec.call(null,inst_6928);
var state_6964__$1 = state_6964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6964__$1,(11),out,inst_6942);
} else {
if((state_val_6965 === (5))){
var inst_6929 = (state_6964[(7)]);
var inst_6932 = (state_6964[(9)]);
var inst_6937 = (state_6964[(11)]);
var inst_6928 = (state_6964[(8)]);
var inst_6936 = (inst_6928[inst_6929] = inst_6932);
var inst_6937__$1 = (inst_6929 + (1));
var inst_6938 = (inst_6937__$1 < n);
var state_6964__$1 = (function (){var statearr_6978 = state_6964;
(statearr_6978[(12)] = inst_6936);

(statearr_6978[(11)] = inst_6937__$1);

return statearr_6978;
})();
if(cljs.core.truth_(inst_6938)){
var statearr_6979_7004 = state_6964__$1;
(statearr_6979_7004[(1)] = (8));

} else {
var statearr_6980_7005 = state_6964__$1;
(statearr_6980_7005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6965 === (14))){
var inst_6957 = (state_6964[(2)]);
var inst_6958 = cljs.core.async.close_BANG_.call(null,out);
var state_6964__$1 = (function (){var statearr_6982 = state_6964;
(statearr_6982[(13)] = inst_6957);

return statearr_6982;
})();
var statearr_6983_7006 = state_6964__$1;
(statearr_6983_7006[(2)] = inst_6958);

(statearr_6983_7006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6965 === (10))){
var inst_6948 = (state_6964[(2)]);
var state_6964__$1 = state_6964;
var statearr_6984_7007 = state_6964__$1;
(statearr_6984_7007[(2)] = inst_6948);

(statearr_6984_7007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6965 === (8))){
var inst_6937 = (state_6964[(11)]);
var inst_6928 = (state_6964[(8)]);
var tmp6981 = inst_6928;
var inst_6928__$1 = tmp6981;
var inst_6929 = inst_6937;
var state_6964__$1 = (function (){var statearr_6985 = state_6964;
(statearr_6985[(7)] = inst_6929);

(statearr_6985[(8)] = inst_6928__$1);

return statearr_6985;
})();
var statearr_6986_7008 = state_6964__$1;
(statearr_6986_7008[(2)] = null);

(statearr_6986_7008[(1)] = (2));


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
});})(c__1322__auto___6994,out))
;
return ((function (switch__1266__auto__,c__1322__auto___6994,out){
return (function() {
var cljs$core$async$partition_$_state_machine__1267__auto__ = null;
var cljs$core$async$partition_$_state_machine__1267__auto____0 = (function (){
var statearr_6990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6990[(0)] = cljs$core$async$partition_$_state_machine__1267__auto__);

(statearr_6990[(1)] = (1));

return statearr_6990;
});
var cljs$core$async$partition_$_state_machine__1267__auto____1 = (function (state_6964){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_6964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e6991){if((e6991 instanceof Object)){
var ex__1270__auto__ = e6991;
var statearr_6992_7009 = state_6964;
(statearr_6992_7009[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7010 = state_6964;
state_6964 = G__7010;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__1267__auto__ = function(state_6964){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__1267__auto____1.call(this,state_6964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__1267__auto____0;
cljs$core$async$partition_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__1267__auto____1;
return cljs$core$async$partition_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___6994,out))
})();
var state__1324__auto__ = (function (){var statearr_6993 = f__1323__auto__.call(null);
(statearr_6993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___6994);

return statearr_6993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___6994,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1322__auto___7153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1322__auto___7153,out){
return (function (){
var f__1323__auto__ = (function (){var switch__1266__auto__ = ((function (c__1322__auto___7153,out){
return (function (state_7123){
var state_val_7124 = (state_7123[(1)]);
if((state_val_7124 === (7))){
var inst_7119 = (state_7123[(2)]);
var state_7123__$1 = state_7123;
var statearr_7125_7154 = state_7123__$1;
(statearr_7125_7154[(2)] = inst_7119);

(statearr_7125_7154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7124 === (1))){
var inst_7082 = [];
var inst_7083 = inst_7082;
var inst_7084 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_7123__$1 = (function (){var statearr_7126 = state_7123;
(statearr_7126[(7)] = inst_7083);

(statearr_7126[(8)] = inst_7084);

return statearr_7126;
})();
var statearr_7127_7155 = state_7123__$1;
(statearr_7127_7155[(2)] = null);

(statearr_7127_7155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7124 === (4))){
var inst_7087 = (state_7123[(9)]);
var inst_7087__$1 = (state_7123[(2)]);
var inst_7088 = (inst_7087__$1 == null);
var inst_7089 = cljs.core.not.call(null,inst_7088);
var state_7123__$1 = (function (){var statearr_7128 = state_7123;
(statearr_7128[(9)] = inst_7087__$1);

return statearr_7128;
})();
if(inst_7089){
var statearr_7129_7156 = state_7123__$1;
(statearr_7129_7156[(1)] = (5));

} else {
var statearr_7130_7157 = state_7123__$1;
(statearr_7130_7157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7124 === (15))){
var inst_7113 = (state_7123[(2)]);
var state_7123__$1 = state_7123;
var statearr_7131_7158 = state_7123__$1;
(statearr_7131_7158[(2)] = inst_7113);

(statearr_7131_7158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7124 === (13))){
var state_7123__$1 = state_7123;
var statearr_7132_7159 = state_7123__$1;
(statearr_7132_7159[(2)] = null);

(statearr_7132_7159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7124 === (6))){
var inst_7083 = (state_7123[(7)]);
var inst_7108 = inst_7083.length;
var inst_7109 = (inst_7108 > (0));
var state_7123__$1 = state_7123;
if(cljs.core.truth_(inst_7109)){
var statearr_7133_7160 = state_7123__$1;
(statearr_7133_7160[(1)] = (12));

} else {
var statearr_7134_7161 = state_7123__$1;
(statearr_7134_7161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7124 === (3))){
var inst_7121 = (state_7123[(2)]);
var state_7123__$1 = state_7123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7123__$1,inst_7121);
} else {
if((state_val_7124 === (12))){
var inst_7083 = (state_7123[(7)]);
var inst_7111 = cljs.core.vec.call(null,inst_7083);
var state_7123__$1 = state_7123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7123__$1,(15),out,inst_7111);
} else {
if((state_val_7124 === (2))){
var state_7123__$1 = state_7123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7123__$1,(4),ch);
} else {
if((state_val_7124 === (11))){
var inst_7087 = (state_7123[(9)]);
var inst_7091 = (state_7123[(10)]);
var inst_7101 = (state_7123[(2)]);
var inst_7102 = [];
var inst_7103 = inst_7102.push(inst_7087);
var inst_7083 = inst_7102;
var inst_7084 = inst_7091;
var state_7123__$1 = (function (){var statearr_7135 = state_7123;
(statearr_7135[(7)] = inst_7083);

(statearr_7135[(11)] = inst_7103);

(statearr_7135[(8)] = inst_7084);

(statearr_7135[(12)] = inst_7101);

return statearr_7135;
})();
var statearr_7136_7162 = state_7123__$1;
(statearr_7136_7162[(2)] = null);

(statearr_7136_7162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7124 === (9))){
var inst_7083 = (state_7123[(7)]);
var inst_7099 = cljs.core.vec.call(null,inst_7083);
var state_7123__$1 = state_7123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7123__$1,(11),out,inst_7099);
} else {
if((state_val_7124 === (5))){
var inst_7087 = (state_7123[(9)]);
var inst_7084 = (state_7123[(8)]);
var inst_7091 = (state_7123[(10)]);
var inst_7091__$1 = f.call(null,inst_7087);
var inst_7092 = cljs.core._EQ_.call(null,inst_7091__$1,inst_7084);
var inst_7093 = cljs.core.keyword_identical_QMARK_.call(null,inst_7084,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_7094 = (inst_7092) || (inst_7093);
var state_7123__$1 = (function (){var statearr_7137 = state_7123;
(statearr_7137[(10)] = inst_7091__$1);

return statearr_7137;
})();
if(cljs.core.truth_(inst_7094)){
var statearr_7138_7163 = state_7123__$1;
(statearr_7138_7163[(1)] = (8));

} else {
var statearr_7139_7164 = state_7123__$1;
(statearr_7139_7164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7124 === (14))){
var inst_7116 = (state_7123[(2)]);
var inst_7117 = cljs.core.async.close_BANG_.call(null,out);
var state_7123__$1 = (function (){var statearr_7141 = state_7123;
(statearr_7141[(13)] = inst_7116);

return statearr_7141;
})();
var statearr_7142_7165 = state_7123__$1;
(statearr_7142_7165[(2)] = inst_7117);

(statearr_7142_7165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7124 === (10))){
var inst_7106 = (state_7123[(2)]);
var state_7123__$1 = state_7123;
var statearr_7143_7166 = state_7123__$1;
(statearr_7143_7166[(2)] = inst_7106);

(statearr_7143_7166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7124 === (8))){
var inst_7087 = (state_7123[(9)]);
var inst_7083 = (state_7123[(7)]);
var inst_7091 = (state_7123[(10)]);
var inst_7096 = inst_7083.push(inst_7087);
var tmp7140 = inst_7083;
var inst_7083__$1 = tmp7140;
var inst_7084 = inst_7091;
var state_7123__$1 = (function (){var statearr_7144 = state_7123;
(statearr_7144[(14)] = inst_7096);

(statearr_7144[(7)] = inst_7083__$1);

(statearr_7144[(8)] = inst_7084);

return statearr_7144;
})();
var statearr_7145_7167 = state_7123__$1;
(statearr_7145_7167[(2)] = null);

(statearr_7145_7167[(1)] = (2));


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
});})(c__1322__auto___7153,out))
;
return ((function (switch__1266__auto__,c__1322__auto___7153,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__1267__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__1267__auto____0 = (function (){
var statearr_7149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7149[(0)] = cljs$core$async$partition_by_$_state_machine__1267__auto__);

(statearr_7149[(1)] = (1));

return statearr_7149;
});
var cljs$core$async$partition_by_$_state_machine__1267__auto____1 = (function (state_7123){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_7123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e7150){if((e7150 instanceof Object)){
var ex__1270__auto__ = e7150;
var statearr_7151_7168 = state_7123;
(statearr_7151_7168[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7169 = state_7123;
state_7123 = G__7169;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__1267__auto__ = function(state_7123){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__1267__auto____1.call(this,state_7123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__1267__auto____0;
cljs$core$async$partition_by_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__1267__auto____1;
return cljs$core$async$partition_by_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1322__auto___7153,out))
})();
var state__1324__auto__ = (function (){var statearr_7152 = f__1323__auto__.call(null);
(statearr_7152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1322__auto___7153);

return statearr_7152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1324__auto__);
});})(c__1322__auto___7153,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map