// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t16918 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16918 = (function (fn_handler,f,meta16919){
this.fn_handler = fn_handler;
this.f = f;
this.meta16919 = meta16919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16920,meta16919__$1){
var self__ = this;
var _16920__$1 = this;
return (new cljs.core.async.t16918(self__.fn_handler,self__.f,meta16919__$1));
});

cljs.core.async.t16918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16920){
var self__ = this;
var _16920__$1 = this;
return self__.meta16919;
});

cljs.core.async.t16918.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta16919","meta16919",-31804227,null)], null);
});

cljs.core.async.t16918.cljs$lang$type = true;

cljs.core.async.t16918.cljs$lang$ctorStr = "cljs.core.async/t16918";

cljs.core.async.t16918.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t16918");
});

cljs.core.async.__GT_t16918 = (function cljs$core$async$fn_handler_$___GT_t16918(fn_handler__$1,f__$1,meta16919){
return (new cljs.core.async.t16918(fn_handler__$1,f__$1,meta16919));
});

}

return (new cljs.core.async.t16918(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16922 = buff;
if(G__16922){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__16922.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16922.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16922);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16922);
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
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__16924 = arguments.length;
switch (G__16924) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
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

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__16927 = arguments.length;
switch (G__16927) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16929 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16929);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16929,ret){
return (function (){
return fn1.call(null,val_16929);
});})(val_16929,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__16931 = arguments.length;
switch (G__16931) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4420__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4420__auto__)){
var ret = temp__4420__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4420__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4420__auto__)){
var retb = temp__4420__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4420__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4420__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5835__auto___16933 = n;
var x_16934 = (0);
while(true){
if((x_16934 < n__5835__auto___16933)){
(a[x_16934] = (0));

var G__16935 = (x_16934 + (1));
x_16934 = G__16935;
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

var G__16936 = (i + (1));
i = G__16936;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16940 = (function (alt_flag,flag,meta16941){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16941 = meta16941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16942,meta16941__$1){
var self__ = this;
var _16942__$1 = this;
return (new cljs.core.async.t16940(self__.alt_flag,self__.flag,meta16941__$1));
});})(flag))
;

cljs.core.async.t16940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16942){
var self__ = this;
var _16942__$1 = this;
return self__.meta16941;
});})(flag))
;

cljs.core.async.t16940.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16940.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16941","meta16941",-2048223030,null)], null);
});})(flag))
;

cljs.core.async.t16940.cljs$lang$type = true;

cljs.core.async.t16940.cljs$lang$ctorStr = "cljs.core.async/t16940";

cljs.core.async.t16940.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t16940");
});})(flag))
;

cljs.core.async.__GT_t16940 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t16940(alt_flag__$1,flag__$1,meta16941){
return (new cljs.core.async.t16940(alt_flag__$1,flag__$1,meta16941));
});})(flag))
;

}

return (new cljs.core.async.t16940(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t16946 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16946 = (function (alt_handler,flag,cb,meta16947){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16947 = meta16947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16948,meta16947__$1){
var self__ = this;
var _16948__$1 = this;
return (new cljs.core.async.t16946(self__.alt_handler,self__.flag,self__.cb,meta16947__$1));
});

cljs.core.async.t16946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16948){
var self__ = this;
var _16948__$1 = this;
return self__.meta16947;
});

cljs.core.async.t16946.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16947","meta16947",-1903165742,null)], null);
});

cljs.core.async.t16946.cljs$lang$type = true;

cljs.core.async.t16946.cljs$lang$ctorStr = "cljs.core.async/t16946";

cljs.core.async.t16946.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t16946");
});

cljs.core.async.__GT_t16946 = (function cljs$core$async$alt_handler_$___GT_t16946(alt_handler__$1,flag__$1,cb__$1,meta16947){
return (new cljs.core.async.t16946(alt_handler__$1,flag__$1,cb__$1,meta16947));
});

}

return (new cljs.core.async.t16946(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16949_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16949_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16950_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16950_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4950__auto__ = wport;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16951 = (i + (1));
i = G__16951;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4950__auto__ = ret;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4422__auto__ = (function (){var and__4938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4938__auto__;
}
})();
if(cljs.core.truth_(temp__4422__auto__)){
var got = temp__4422__auto__;
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
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5990__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5990__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16954){
var map__16955 = p__16954;
var map__16955__$1 = ((cljs.core.seq_QMARK_.call(null,map__16955))?cljs.core.apply.call(null,cljs.core.hash_map,map__16955):map__16955);
var opts = map__16955__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16952){
var G__16953 = cljs.core.first.call(null,seq16952);
var seq16952__$1 = cljs.core.next.call(null,seq16952);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16953,seq16952__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__16957 = arguments.length;
switch (G__16957) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7310__auto___17006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___17006){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___17006){
return (function (state_16981){
var state_val_16982 = (state_16981[(1)]);
if((state_val_16982 === (7))){
var inst_16977 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_16983_17007 = state_16981__$1;
(statearr_16983_17007[(2)] = inst_16977);

(statearr_16983_17007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (1))){
var state_16981__$1 = state_16981;
var statearr_16984_17008 = state_16981__$1;
(statearr_16984_17008[(2)] = null);

(statearr_16984_17008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (4))){
var inst_16960 = (state_16981[(7)]);
var inst_16960__$1 = (state_16981[(2)]);
var inst_16961 = (inst_16960__$1 == null);
var state_16981__$1 = (function (){var statearr_16985 = state_16981;
(statearr_16985[(7)] = inst_16960__$1);

return statearr_16985;
})();
if(cljs.core.truth_(inst_16961)){
var statearr_16986_17009 = state_16981__$1;
(statearr_16986_17009[(1)] = (5));

} else {
var statearr_16987_17010 = state_16981__$1;
(statearr_16987_17010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (13))){
var state_16981__$1 = state_16981;
var statearr_16988_17011 = state_16981__$1;
(statearr_16988_17011[(2)] = null);

(statearr_16988_17011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (6))){
var inst_16960 = (state_16981[(7)]);
var state_16981__$1 = state_16981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16981__$1,(11),to,inst_16960);
} else {
if((state_val_16982 === (3))){
var inst_16979 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16981__$1,inst_16979);
} else {
if((state_val_16982 === (12))){
var state_16981__$1 = state_16981;
var statearr_16989_17012 = state_16981__$1;
(statearr_16989_17012[(2)] = null);

(statearr_16989_17012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (2))){
var state_16981__$1 = state_16981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16981__$1,(4),from);
} else {
if((state_val_16982 === (11))){
var inst_16970 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
if(cljs.core.truth_(inst_16970)){
var statearr_16990_17013 = state_16981__$1;
(statearr_16990_17013[(1)] = (12));

} else {
var statearr_16991_17014 = state_16981__$1;
(statearr_16991_17014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (9))){
var state_16981__$1 = state_16981;
var statearr_16992_17015 = state_16981__$1;
(statearr_16992_17015[(2)] = null);

(statearr_16992_17015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (5))){
var state_16981__$1 = state_16981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16993_17016 = state_16981__$1;
(statearr_16993_17016[(1)] = (8));

} else {
var statearr_16994_17017 = state_16981__$1;
(statearr_16994_17017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (14))){
var inst_16975 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_16995_17018 = state_16981__$1;
(statearr_16995_17018[(2)] = inst_16975);

(statearr_16995_17018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (10))){
var inst_16967 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_16996_17019 = state_16981__$1;
(statearr_16996_17019[(2)] = inst_16967);

(statearr_16996_17019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (8))){
var inst_16964 = cljs.core.async.close_BANG_.call(null,to);
var state_16981__$1 = state_16981;
var statearr_16997_17020 = state_16981__$1;
(statearr_16997_17020[(2)] = inst_16964);

(statearr_16997_17020[(1)] = (10));


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
});})(c__7310__auto___17006))
;
return ((function (switch__7248__auto__,c__7310__auto___17006){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_17001 = [null,null,null,null,null,null,null,null];
(statearr_17001[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_17001[(1)] = (1));

return statearr_17001;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_16981){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17002){if((e17002 instanceof Object)){
var ex__7252__auto__ = e17002;
var statearr_17003_17021 = state_16981;
(statearr_17003_17021[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17022 = state_16981;
state_16981 = G__17022;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_16981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_16981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___17006))
})();
var state__7312__auto__ = (function (){var statearr_17004 = f__7311__auto__.call(null);
(statearr_17004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17006);

return statearr_17004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___17006))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__17206){
var vec__17207 = p__17206;
var v = cljs.core.nth.call(null,vec__17207,(0),null);
var p = cljs.core.nth.call(null,vec__17207,(1),null);
var job = vec__17207;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7310__auto___17389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___17389,res,vec__17207,v,p,job,jobs,results){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___17389,res,vec__17207,v,p,job,jobs,results){
return (function (state_17212){
var state_val_17213 = (state_17212[(1)]);
if((state_val_17213 === (1))){
var state_17212__$1 = state_17212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17212__$1,(2),res,v);
} else {
if((state_val_17213 === (2))){
var inst_17209 = (state_17212[(2)]);
var inst_17210 = cljs.core.async.close_BANG_.call(null,res);
var state_17212__$1 = (function (){var statearr_17214 = state_17212;
(statearr_17214[(7)] = inst_17209);

return statearr_17214;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17212__$1,inst_17210);
} else {
return null;
}
}
});})(c__7310__auto___17389,res,vec__17207,v,p,job,jobs,results))
;
return ((function (switch__7248__auto__,c__7310__auto___17389,res,vec__17207,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0 = (function (){
var statearr_17218 = [null,null,null,null,null,null,null,null];
(statearr_17218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__);

(statearr_17218[(1)] = (1));

return statearr_17218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1 = (function (state_17212){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17219){if((e17219 instanceof Object)){
var ex__7252__auto__ = e17219;
var statearr_17220_17390 = state_17212;
(statearr_17220_17390[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17391 = state_17212;
state_17212 = G__17391;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = function(state_17212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1.call(this,state_17212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___17389,res,vec__17207,v,p,job,jobs,results))
})();
var state__7312__auto__ = (function (){var statearr_17221 = f__7311__auto__.call(null);
(statearr_17221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17389);

return statearr_17221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___17389,res,vec__17207,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17222){
var vec__17223 = p__17222;
var v = cljs.core.nth.call(null,vec__17223,(0),null);
var p = cljs.core.nth.call(null,vec__17223,(1),null);
var job = vec__17223;
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
var n__5835__auto___17392 = n;
var __17393 = (0);
while(true){
if((__17393 < n__5835__auto___17392)){
var G__17224_17394 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17224_17394) {
case "compute":
var c__7310__auto___17396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17393,c__7310__auto___17396,G__17224_17394,n__5835__auto___17392,jobs,results,process,async){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (__17393,c__7310__auto___17396,G__17224_17394,n__5835__auto___17392,jobs,results,process,async){
return (function (state_17237){
var state_val_17238 = (state_17237[(1)]);
if((state_val_17238 === (1))){
var state_17237__$1 = state_17237;
var statearr_17239_17397 = state_17237__$1;
(statearr_17239_17397[(2)] = null);

(statearr_17239_17397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (2))){
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17237__$1,(4),jobs);
} else {
if((state_val_17238 === (3))){
var inst_17235 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17237__$1,inst_17235);
} else {
if((state_val_17238 === (4))){
var inst_17227 = (state_17237[(2)]);
var inst_17228 = process.call(null,inst_17227);
var state_17237__$1 = state_17237;
if(cljs.core.truth_(inst_17228)){
var statearr_17240_17398 = state_17237__$1;
(statearr_17240_17398[(1)] = (5));

} else {
var statearr_17241_17399 = state_17237__$1;
(statearr_17241_17399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (5))){
var state_17237__$1 = state_17237;
var statearr_17242_17400 = state_17237__$1;
(statearr_17242_17400[(2)] = null);

(statearr_17242_17400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (6))){
var state_17237__$1 = state_17237;
var statearr_17243_17401 = state_17237__$1;
(statearr_17243_17401[(2)] = null);

(statearr_17243_17401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (7))){
var inst_17233 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17244_17402 = state_17237__$1;
(statearr_17244_17402[(2)] = inst_17233);

(statearr_17244_17402[(1)] = (3));


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
});})(__17393,c__7310__auto___17396,G__17224_17394,n__5835__auto___17392,jobs,results,process,async))
;
return ((function (__17393,switch__7248__auto__,c__7310__auto___17396,G__17224_17394,n__5835__auto___17392,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0 = (function (){
var statearr_17248 = [null,null,null,null,null,null,null];
(statearr_17248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__);

(statearr_17248[(1)] = (1));

return statearr_17248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1 = (function (state_17237){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17249){if((e17249 instanceof Object)){
var ex__7252__auto__ = e17249;
var statearr_17250_17403 = state_17237;
(statearr_17250_17403[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17404 = state_17237;
state_17237 = G__17404;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = function(state_17237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1.call(this,state_17237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__;
})()
;})(__17393,switch__7248__auto__,c__7310__auto___17396,G__17224_17394,n__5835__auto___17392,jobs,results,process,async))
})();
var state__7312__auto__ = (function (){var statearr_17251 = f__7311__auto__.call(null);
(statearr_17251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17396);

return statearr_17251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(__17393,c__7310__auto___17396,G__17224_17394,n__5835__auto___17392,jobs,results,process,async))
);


break;
case "async":
var c__7310__auto___17405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17393,c__7310__auto___17405,G__17224_17394,n__5835__auto___17392,jobs,results,process,async){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (__17393,c__7310__auto___17405,G__17224_17394,n__5835__auto___17392,jobs,results,process,async){
return (function (state_17264){
var state_val_17265 = (state_17264[(1)]);
if((state_val_17265 === (1))){
var state_17264__$1 = state_17264;
var statearr_17266_17406 = state_17264__$1;
(statearr_17266_17406[(2)] = null);

(statearr_17266_17406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17265 === (2))){
var state_17264__$1 = state_17264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17264__$1,(4),jobs);
} else {
if((state_val_17265 === (3))){
var inst_17262 = (state_17264[(2)]);
var state_17264__$1 = state_17264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17264__$1,inst_17262);
} else {
if((state_val_17265 === (4))){
var inst_17254 = (state_17264[(2)]);
var inst_17255 = async.call(null,inst_17254);
var state_17264__$1 = state_17264;
if(cljs.core.truth_(inst_17255)){
var statearr_17267_17407 = state_17264__$1;
(statearr_17267_17407[(1)] = (5));

} else {
var statearr_17268_17408 = state_17264__$1;
(statearr_17268_17408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17265 === (5))){
var state_17264__$1 = state_17264;
var statearr_17269_17409 = state_17264__$1;
(statearr_17269_17409[(2)] = null);

(statearr_17269_17409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17265 === (6))){
var state_17264__$1 = state_17264;
var statearr_17270_17410 = state_17264__$1;
(statearr_17270_17410[(2)] = null);

(statearr_17270_17410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17265 === (7))){
var inst_17260 = (state_17264[(2)]);
var state_17264__$1 = state_17264;
var statearr_17271_17411 = state_17264__$1;
(statearr_17271_17411[(2)] = inst_17260);

(statearr_17271_17411[(1)] = (3));


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
});})(__17393,c__7310__auto___17405,G__17224_17394,n__5835__auto___17392,jobs,results,process,async))
;
return ((function (__17393,switch__7248__auto__,c__7310__auto___17405,G__17224_17394,n__5835__auto___17392,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0 = (function (){
var statearr_17275 = [null,null,null,null,null,null,null];
(statearr_17275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__);

(statearr_17275[(1)] = (1));

return statearr_17275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1 = (function (state_17264){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17276){if((e17276 instanceof Object)){
var ex__7252__auto__ = e17276;
var statearr_17277_17412 = state_17264;
(statearr_17277_17412[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17413 = state_17264;
state_17264 = G__17413;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = function(state_17264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1.call(this,state_17264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__;
})()
;})(__17393,switch__7248__auto__,c__7310__auto___17405,G__17224_17394,n__5835__auto___17392,jobs,results,process,async))
})();
var state__7312__auto__ = (function (){var statearr_17278 = f__7311__auto__.call(null);
(statearr_17278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17405);

return statearr_17278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(__17393,c__7310__auto___17405,G__17224_17394,n__5835__auto___17392,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17414 = (__17393 + (1));
__17393 = G__17414;
continue;
} else {
}
break;
}

var c__7310__auto___17415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___17415,jobs,results,process,async){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___17415,jobs,results,process,async){
return (function (state_17300){
var state_val_17301 = (state_17300[(1)]);
if((state_val_17301 === (1))){
var state_17300__$1 = state_17300;
var statearr_17302_17416 = state_17300__$1;
(statearr_17302_17416[(2)] = null);

(statearr_17302_17416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (2))){
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17300__$1,(4),from);
} else {
if((state_val_17301 === (3))){
var inst_17298 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17300__$1,inst_17298);
} else {
if((state_val_17301 === (4))){
var inst_17281 = (state_17300[(7)]);
var inst_17281__$1 = (state_17300[(2)]);
var inst_17282 = (inst_17281__$1 == null);
var state_17300__$1 = (function (){var statearr_17303 = state_17300;
(statearr_17303[(7)] = inst_17281__$1);

return statearr_17303;
})();
if(cljs.core.truth_(inst_17282)){
var statearr_17304_17417 = state_17300__$1;
(statearr_17304_17417[(1)] = (5));

} else {
var statearr_17305_17418 = state_17300__$1;
(statearr_17305_17418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (5))){
var inst_17284 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17300__$1 = state_17300;
var statearr_17306_17419 = state_17300__$1;
(statearr_17306_17419[(2)] = inst_17284);

(statearr_17306_17419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (6))){
var inst_17286 = (state_17300[(8)]);
var inst_17281 = (state_17300[(7)]);
var inst_17286__$1 = cljs.core.async.chan.call(null,(1));
var inst_17287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17288 = [inst_17281,inst_17286__$1];
var inst_17289 = (new cljs.core.PersistentVector(null,2,(5),inst_17287,inst_17288,null));
var state_17300__$1 = (function (){var statearr_17307 = state_17300;
(statearr_17307[(8)] = inst_17286__$1);

return statearr_17307;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17300__$1,(8),jobs,inst_17289);
} else {
if((state_val_17301 === (7))){
var inst_17296 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
var statearr_17308_17420 = state_17300__$1;
(statearr_17308_17420[(2)] = inst_17296);

(statearr_17308_17420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (8))){
var inst_17286 = (state_17300[(8)]);
var inst_17291 = (state_17300[(2)]);
var state_17300__$1 = (function (){var statearr_17309 = state_17300;
(statearr_17309[(9)] = inst_17291);

return statearr_17309;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17300__$1,(9),results,inst_17286);
} else {
if((state_val_17301 === (9))){
var inst_17293 = (state_17300[(2)]);
var state_17300__$1 = (function (){var statearr_17310 = state_17300;
(statearr_17310[(10)] = inst_17293);

return statearr_17310;
})();
var statearr_17311_17421 = state_17300__$1;
(statearr_17311_17421[(2)] = null);

(statearr_17311_17421[(1)] = (2));


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
});})(c__7310__auto___17415,jobs,results,process,async))
;
return ((function (switch__7248__auto__,c__7310__auto___17415,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0 = (function (){
var statearr_17315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__);

(statearr_17315[(1)] = (1));

return statearr_17315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1 = (function (state_17300){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17316){if((e17316 instanceof Object)){
var ex__7252__auto__ = e17316;
var statearr_17317_17422 = state_17300;
(statearr_17317_17422[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17423 = state_17300;
state_17300 = G__17423;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = function(state_17300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1.call(this,state_17300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___17415,jobs,results,process,async))
})();
var state__7312__auto__ = (function (){var statearr_17318 = f__7311__auto__.call(null);
(statearr_17318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17415);

return statearr_17318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___17415,jobs,results,process,async))
);


var c__7310__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto__,jobs,results,process,async){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto__,jobs,results,process,async){
return (function (state_17356){
var state_val_17357 = (state_17356[(1)]);
if((state_val_17357 === (7))){
var inst_17352 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
var statearr_17358_17424 = state_17356__$1;
(statearr_17358_17424[(2)] = inst_17352);

(statearr_17358_17424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (20))){
var state_17356__$1 = state_17356;
var statearr_17359_17425 = state_17356__$1;
(statearr_17359_17425[(2)] = null);

(statearr_17359_17425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (1))){
var state_17356__$1 = state_17356;
var statearr_17360_17426 = state_17356__$1;
(statearr_17360_17426[(2)] = null);

(statearr_17360_17426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (4))){
var inst_17321 = (state_17356[(7)]);
var inst_17321__$1 = (state_17356[(2)]);
var inst_17322 = (inst_17321__$1 == null);
var state_17356__$1 = (function (){var statearr_17361 = state_17356;
(statearr_17361[(7)] = inst_17321__$1);

return statearr_17361;
})();
if(cljs.core.truth_(inst_17322)){
var statearr_17362_17427 = state_17356__$1;
(statearr_17362_17427[(1)] = (5));

} else {
var statearr_17363_17428 = state_17356__$1;
(statearr_17363_17428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (15))){
var inst_17334 = (state_17356[(8)]);
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17356__$1,(18),to,inst_17334);
} else {
if((state_val_17357 === (21))){
var inst_17347 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
var statearr_17364_17429 = state_17356__$1;
(statearr_17364_17429[(2)] = inst_17347);

(statearr_17364_17429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (13))){
var inst_17349 = (state_17356[(2)]);
var state_17356__$1 = (function (){var statearr_17365 = state_17356;
(statearr_17365[(9)] = inst_17349);

return statearr_17365;
})();
var statearr_17366_17430 = state_17356__$1;
(statearr_17366_17430[(2)] = null);

(statearr_17366_17430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (6))){
var inst_17321 = (state_17356[(7)]);
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17356__$1,(11),inst_17321);
} else {
if((state_val_17357 === (17))){
var inst_17342 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
if(cljs.core.truth_(inst_17342)){
var statearr_17367_17431 = state_17356__$1;
(statearr_17367_17431[(1)] = (19));

} else {
var statearr_17368_17432 = state_17356__$1;
(statearr_17368_17432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (3))){
var inst_17354 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17356__$1,inst_17354);
} else {
if((state_val_17357 === (12))){
var inst_17331 = (state_17356[(10)]);
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17356__$1,(14),inst_17331);
} else {
if((state_val_17357 === (2))){
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17356__$1,(4),results);
} else {
if((state_val_17357 === (19))){
var state_17356__$1 = state_17356;
var statearr_17369_17433 = state_17356__$1;
(statearr_17369_17433[(2)] = null);

(statearr_17369_17433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (11))){
var inst_17331 = (state_17356[(2)]);
var state_17356__$1 = (function (){var statearr_17370 = state_17356;
(statearr_17370[(10)] = inst_17331);

return statearr_17370;
})();
var statearr_17371_17434 = state_17356__$1;
(statearr_17371_17434[(2)] = null);

(statearr_17371_17434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (9))){
var state_17356__$1 = state_17356;
var statearr_17372_17435 = state_17356__$1;
(statearr_17372_17435[(2)] = null);

(statearr_17372_17435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (5))){
var state_17356__$1 = state_17356;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17373_17436 = state_17356__$1;
(statearr_17373_17436[(1)] = (8));

} else {
var statearr_17374_17437 = state_17356__$1;
(statearr_17374_17437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (14))){
var inst_17336 = (state_17356[(11)]);
var inst_17334 = (state_17356[(8)]);
var inst_17334__$1 = (state_17356[(2)]);
var inst_17335 = (inst_17334__$1 == null);
var inst_17336__$1 = cljs.core.not.call(null,inst_17335);
var state_17356__$1 = (function (){var statearr_17375 = state_17356;
(statearr_17375[(11)] = inst_17336__$1);

(statearr_17375[(8)] = inst_17334__$1);

return statearr_17375;
})();
if(inst_17336__$1){
var statearr_17376_17438 = state_17356__$1;
(statearr_17376_17438[(1)] = (15));

} else {
var statearr_17377_17439 = state_17356__$1;
(statearr_17377_17439[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (16))){
var inst_17336 = (state_17356[(11)]);
var state_17356__$1 = state_17356;
var statearr_17378_17440 = state_17356__$1;
(statearr_17378_17440[(2)] = inst_17336);

(statearr_17378_17440[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (10))){
var inst_17328 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
var statearr_17379_17441 = state_17356__$1;
(statearr_17379_17441[(2)] = inst_17328);

(statearr_17379_17441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (18))){
var inst_17339 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
var statearr_17380_17442 = state_17356__$1;
(statearr_17380_17442[(2)] = inst_17339);

(statearr_17380_17442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (8))){
var inst_17325 = cljs.core.async.close_BANG_.call(null,to);
var state_17356__$1 = state_17356;
var statearr_17381_17443 = state_17356__$1;
(statearr_17381_17443[(2)] = inst_17325);

(statearr_17381_17443[(1)] = (10));


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
});})(c__7310__auto__,jobs,results,process,async))
;
return ((function (switch__7248__auto__,c__7310__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0 = (function (){
var statearr_17385 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__);

(statearr_17385[(1)] = (1));

return statearr_17385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1 = (function (state_17356){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17386){if((e17386 instanceof Object)){
var ex__7252__auto__ = e17386;
var statearr_17387_17444 = state_17356;
(statearr_17387_17444[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17445 = state_17356;
state_17356 = G__17445;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = function(state_17356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1.call(this,state_17356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto__,jobs,results,process,async))
})();
var state__7312__auto__ = (function (){var statearr_17388 = f__7311__auto__.call(null);
(statearr_17388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto__);

return statearr_17388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto__,jobs,results,process,async))
);

return c__7310__auto__;
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
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__17447 = arguments.length;
switch (G__17447) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__17450 = arguments.length;
switch (G__17450) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
cljs.core.async.split = (function cljs$core$async$split(){
var G__17453 = arguments.length;
switch (G__17453) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7310__auto___17505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___17505,tc,fc){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___17505,tc,fc){
return (function (state_17479){
var state_val_17480 = (state_17479[(1)]);
if((state_val_17480 === (7))){
var inst_17475 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17481_17506 = state_17479__$1;
(statearr_17481_17506[(2)] = inst_17475);

(statearr_17481_17506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (1))){
var state_17479__$1 = state_17479;
var statearr_17482_17507 = state_17479__$1;
(statearr_17482_17507[(2)] = null);

(statearr_17482_17507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (4))){
var inst_17456 = (state_17479[(7)]);
var inst_17456__$1 = (state_17479[(2)]);
var inst_17457 = (inst_17456__$1 == null);
var state_17479__$1 = (function (){var statearr_17483 = state_17479;
(statearr_17483[(7)] = inst_17456__$1);

return statearr_17483;
})();
if(cljs.core.truth_(inst_17457)){
var statearr_17484_17508 = state_17479__$1;
(statearr_17484_17508[(1)] = (5));

} else {
var statearr_17485_17509 = state_17479__$1;
(statearr_17485_17509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (13))){
var state_17479__$1 = state_17479;
var statearr_17486_17510 = state_17479__$1;
(statearr_17486_17510[(2)] = null);

(statearr_17486_17510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (6))){
var inst_17456 = (state_17479[(7)]);
var inst_17462 = p.call(null,inst_17456);
var state_17479__$1 = state_17479;
if(cljs.core.truth_(inst_17462)){
var statearr_17487_17511 = state_17479__$1;
(statearr_17487_17511[(1)] = (9));

} else {
var statearr_17488_17512 = state_17479__$1;
(statearr_17488_17512[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (3))){
var inst_17477 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17479__$1,inst_17477);
} else {
if((state_val_17480 === (12))){
var state_17479__$1 = state_17479;
var statearr_17489_17513 = state_17479__$1;
(statearr_17489_17513[(2)] = null);

(statearr_17489_17513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (2))){
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17479__$1,(4),ch);
} else {
if((state_val_17480 === (11))){
var inst_17456 = (state_17479[(7)]);
var inst_17466 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17479__$1,(8),inst_17466,inst_17456);
} else {
if((state_val_17480 === (9))){
var state_17479__$1 = state_17479;
var statearr_17490_17514 = state_17479__$1;
(statearr_17490_17514[(2)] = tc);

(statearr_17490_17514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (5))){
var inst_17459 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17460 = cljs.core.async.close_BANG_.call(null,fc);
var state_17479__$1 = (function (){var statearr_17491 = state_17479;
(statearr_17491[(8)] = inst_17459);

return statearr_17491;
})();
var statearr_17492_17515 = state_17479__$1;
(statearr_17492_17515[(2)] = inst_17460);

(statearr_17492_17515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (14))){
var inst_17473 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17493_17516 = state_17479__$1;
(statearr_17493_17516[(2)] = inst_17473);

(statearr_17493_17516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (10))){
var state_17479__$1 = state_17479;
var statearr_17494_17517 = state_17479__$1;
(statearr_17494_17517[(2)] = fc);

(statearr_17494_17517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (8))){
var inst_17468 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
if(cljs.core.truth_(inst_17468)){
var statearr_17495_17518 = state_17479__$1;
(statearr_17495_17518[(1)] = (12));

} else {
var statearr_17496_17519 = state_17479__$1;
(statearr_17496_17519[(1)] = (13));

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
});})(c__7310__auto___17505,tc,fc))
;
return ((function (switch__7248__auto__,c__7310__auto___17505,tc,fc){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_17500 = [null,null,null,null,null,null,null,null,null];
(statearr_17500[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_17500[(1)] = (1));

return statearr_17500;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_17479){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17501){if((e17501 instanceof Object)){
var ex__7252__auto__ = e17501;
var statearr_17502_17520 = state_17479;
(statearr_17502_17520[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17521 = state_17479;
state_17479 = G__17521;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_17479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_17479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___17505,tc,fc))
})();
var state__7312__auto__ = (function (){var statearr_17503 = f__7311__auto__.call(null);
(statearr_17503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17505);

return statearr_17503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___17505,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7310__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto__){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto__){
return (function (state_17568){
var state_val_17569 = (state_17568[(1)]);
if((state_val_17569 === (1))){
var inst_17554 = init;
var state_17568__$1 = (function (){var statearr_17570 = state_17568;
(statearr_17570[(7)] = inst_17554);

return statearr_17570;
})();
var statearr_17571_17586 = state_17568__$1;
(statearr_17571_17586[(2)] = null);

(statearr_17571_17586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (2))){
var state_17568__$1 = state_17568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17568__$1,(4),ch);
} else {
if((state_val_17569 === (3))){
var inst_17566 = (state_17568[(2)]);
var state_17568__$1 = state_17568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17568__$1,inst_17566);
} else {
if((state_val_17569 === (4))){
var inst_17557 = (state_17568[(8)]);
var inst_17557__$1 = (state_17568[(2)]);
var inst_17558 = (inst_17557__$1 == null);
var state_17568__$1 = (function (){var statearr_17572 = state_17568;
(statearr_17572[(8)] = inst_17557__$1);

return statearr_17572;
})();
if(cljs.core.truth_(inst_17558)){
var statearr_17573_17587 = state_17568__$1;
(statearr_17573_17587[(1)] = (5));

} else {
var statearr_17574_17588 = state_17568__$1;
(statearr_17574_17588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (5))){
var inst_17554 = (state_17568[(7)]);
var state_17568__$1 = state_17568;
var statearr_17575_17589 = state_17568__$1;
(statearr_17575_17589[(2)] = inst_17554);

(statearr_17575_17589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (6))){
var inst_17554 = (state_17568[(7)]);
var inst_17557 = (state_17568[(8)]);
var inst_17561 = f.call(null,inst_17554,inst_17557);
var inst_17554__$1 = inst_17561;
var state_17568__$1 = (function (){var statearr_17576 = state_17568;
(statearr_17576[(7)] = inst_17554__$1);

return statearr_17576;
})();
var statearr_17577_17590 = state_17568__$1;
(statearr_17577_17590[(2)] = null);

(statearr_17577_17590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (7))){
var inst_17564 = (state_17568[(2)]);
var state_17568__$1 = state_17568;
var statearr_17578_17591 = state_17568__$1;
(statearr_17578_17591[(2)] = inst_17564);

(statearr_17578_17591[(1)] = (3));


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
});})(c__7310__auto__))
;
return ((function (switch__7248__auto__,c__7310__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7249__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7249__auto____0 = (function (){
var statearr_17582 = [null,null,null,null,null,null,null,null,null];
(statearr_17582[(0)] = cljs$core$async$reduce_$_state_machine__7249__auto__);

(statearr_17582[(1)] = (1));

return statearr_17582;
});
var cljs$core$async$reduce_$_state_machine__7249__auto____1 = (function (state_17568){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17583){if((e17583 instanceof Object)){
var ex__7252__auto__ = e17583;
var statearr_17584_17592 = state_17568;
(statearr_17584_17592[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17593 = state_17568;
state_17568 = G__17593;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7249__auto__ = function(state_17568){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7249__auto____1.call(this,state_17568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7249__auto____0;
cljs$core$async$reduce_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7249__auto____1;
return cljs$core$async$reduce_$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto__))
})();
var state__7312__auto__ = (function (){var statearr_17585 = f__7311__auto__.call(null);
(statearr_17585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto__);

return statearr_17585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto__))
);

return c__7310__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__17595 = arguments.length;
switch (G__17595) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7310__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto__){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto__){
return (function (state_17620){
var state_val_17621 = (state_17620[(1)]);
if((state_val_17621 === (7))){
var inst_17602 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17622_17646 = state_17620__$1;
(statearr_17622_17646[(2)] = inst_17602);

(statearr_17622_17646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (1))){
var inst_17596 = cljs.core.seq.call(null,coll);
var inst_17597 = inst_17596;
var state_17620__$1 = (function (){var statearr_17623 = state_17620;
(statearr_17623[(7)] = inst_17597);

return statearr_17623;
})();
var statearr_17624_17647 = state_17620__$1;
(statearr_17624_17647[(2)] = null);

(statearr_17624_17647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (4))){
var inst_17597 = (state_17620[(7)]);
var inst_17600 = cljs.core.first.call(null,inst_17597);
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17620__$1,(7),ch,inst_17600);
} else {
if((state_val_17621 === (13))){
var inst_17614 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17625_17648 = state_17620__$1;
(statearr_17625_17648[(2)] = inst_17614);

(statearr_17625_17648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (6))){
var inst_17605 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
if(cljs.core.truth_(inst_17605)){
var statearr_17626_17649 = state_17620__$1;
(statearr_17626_17649[(1)] = (8));

} else {
var statearr_17627_17650 = state_17620__$1;
(statearr_17627_17650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (3))){
var inst_17618 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17620__$1,inst_17618);
} else {
if((state_val_17621 === (12))){
var state_17620__$1 = state_17620;
var statearr_17628_17651 = state_17620__$1;
(statearr_17628_17651[(2)] = null);

(statearr_17628_17651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (2))){
var inst_17597 = (state_17620[(7)]);
var state_17620__$1 = state_17620;
if(cljs.core.truth_(inst_17597)){
var statearr_17629_17652 = state_17620__$1;
(statearr_17629_17652[(1)] = (4));

} else {
var statearr_17630_17653 = state_17620__$1;
(statearr_17630_17653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (11))){
var inst_17611 = cljs.core.async.close_BANG_.call(null,ch);
var state_17620__$1 = state_17620;
var statearr_17631_17654 = state_17620__$1;
(statearr_17631_17654[(2)] = inst_17611);

(statearr_17631_17654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (9))){
var state_17620__$1 = state_17620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17632_17655 = state_17620__$1;
(statearr_17632_17655[(1)] = (11));

} else {
var statearr_17633_17656 = state_17620__$1;
(statearr_17633_17656[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (5))){
var inst_17597 = (state_17620[(7)]);
var state_17620__$1 = state_17620;
var statearr_17634_17657 = state_17620__$1;
(statearr_17634_17657[(2)] = inst_17597);

(statearr_17634_17657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (10))){
var inst_17616 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17635_17658 = state_17620__$1;
(statearr_17635_17658[(2)] = inst_17616);

(statearr_17635_17658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (8))){
var inst_17597 = (state_17620[(7)]);
var inst_17607 = cljs.core.next.call(null,inst_17597);
var inst_17597__$1 = inst_17607;
var state_17620__$1 = (function (){var statearr_17636 = state_17620;
(statearr_17636[(7)] = inst_17597__$1);

return statearr_17636;
})();
var statearr_17637_17659 = state_17620__$1;
(statearr_17637_17659[(2)] = null);

(statearr_17637_17659[(1)] = (2));


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
});})(c__7310__auto__))
;
return ((function (switch__7248__auto__,c__7310__auto__){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_17641 = [null,null,null,null,null,null,null,null];
(statearr_17641[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_17641[(1)] = (1));

return statearr_17641;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_17620){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17642){if((e17642 instanceof Object)){
var ex__7252__auto__ = e17642;
var statearr_17643_17660 = state_17620;
(statearr_17643_17660[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17661 = state_17620;
state_17620 = G__17661;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_17620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_17620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto__))
})();
var state__7312__auto__ = (function (){var statearr_17644 = f__7311__auto__.call(null);
(statearr_17644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto__);

return statearr_17644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto__))
);

return c__7310__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj17663 = {};
return obj17663;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4938__auto__ = _;
if(and__4938__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4938__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5586__auto__ = (((_ == null))?null:_);
return (function (){var or__4950__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj17665 = {};
return obj17665;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4938__auto__ = m;
if(and__4938__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4938__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5586__auto__ = (((m == null))?null:m);
return (function (){var or__4950__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4938__auto__ = m;
if(and__4938__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5586__auto__ = (((m == null))?null:m);
return (function (){var or__4950__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4938__auto__ = m;
if(and__4938__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4938__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5586__auto__ = (((m == null))?null:m);
return (function (){var or__4950__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
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
if(typeof cljs.core.async.t17887 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17887 = (function (mult,ch,cs,meta17888){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17888 = meta17888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17889,meta17888__$1){
var self__ = this;
var _17889__$1 = this;
return (new cljs.core.async.t17887(self__.mult,self__.ch,self__.cs,meta17888__$1));
});})(cs))
;

cljs.core.async.t17887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17889){
var self__ = this;
var _17889__$1 = this;
return self__.meta17888;
});})(cs))
;

cljs.core.async.t17887.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17887.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17887.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17887.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17887.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17887.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17888","meta17888",1700792885,null)], null);
});})(cs))
;

cljs.core.async.t17887.cljs$lang$type = true;

cljs.core.async.t17887.cljs$lang$ctorStr = "cljs.core.async/t17887";

cljs.core.async.t17887.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t17887");
});})(cs))
;

cljs.core.async.__GT_t17887 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t17887(mult__$1,ch__$1,cs__$1,meta17888){
return (new cljs.core.async.t17887(mult__$1,ch__$1,cs__$1,meta17888));
});})(cs))
;

}

return (new cljs.core.async.t17887(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7310__auto___18108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18108,cs,m,dchan,dctr,done){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18108,cs,m,dchan,dctr,done){
return (function (state_18020){
var state_val_18021 = (state_18020[(1)]);
if((state_val_18021 === (7))){
var inst_18016 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18022_18109 = state_18020__$1;
(statearr_18022_18109[(2)] = inst_18016);

(statearr_18022_18109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (20))){
var inst_17921 = (state_18020[(7)]);
var inst_17931 = cljs.core.first.call(null,inst_17921);
var inst_17932 = cljs.core.nth.call(null,inst_17931,(0),null);
var inst_17933 = cljs.core.nth.call(null,inst_17931,(1),null);
var state_18020__$1 = (function (){var statearr_18023 = state_18020;
(statearr_18023[(8)] = inst_17932);

return statearr_18023;
})();
if(cljs.core.truth_(inst_17933)){
var statearr_18024_18110 = state_18020__$1;
(statearr_18024_18110[(1)] = (22));

} else {
var statearr_18025_18111 = state_18020__$1;
(statearr_18025_18111[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (27))){
var inst_17963 = (state_18020[(9)]);
var inst_17961 = (state_18020[(10)]);
var inst_17968 = (state_18020[(11)]);
var inst_17892 = (state_18020[(12)]);
var inst_17968__$1 = cljs.core._nth.call(null,inst_17961,inst_17963);
var inst_17969 = cljs.core.async.put_BANG_.call(null,inst_17968__$1,inst_17892,done);
var state_18020__$1 = (function (){var statearr_18026 = state_18020;
(statearr_18026[(11)] = inst_17968__$1);

return statearr_18026;
})();
if(cljs.core.truth_(inst_17969)){
var statearr_18027_18112 = state_18020__$1;
(statearr_18027_18112[(1)] = (30));

} else {
var statearr_18028_18113 = state_18020__$1;
(statearr_18028_18113[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (1))){
var state_18020__$1 = state_18020;
var statearr_18029_18114 = state_18020__$1;
(statearr_18029_18114[(2)] = null);

(statearr_18029_18114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (24))){
var inst_17921 = (state_18020[(7)]);
var inst_17938 = (state_18020[(2)]);
var inst_17939 = cljs.core.next.call(null,inst_17921);
var inst_17901 = inst_17939;
var inst_17902 = null;
var inst_17903 = (0);
var inst_17904 = (0);
var state_18020__$1 = (function (){var statearr_18030 = state_18020;
(statearr_18030[(13)] = inst_17902);

(statearr_18030[(14)] = inst_17901);

(statearr_18030[(15)] = inst_17938);

(statearr_18030[(16)] = inst_17903);

(statearr_18030[(17)] = inst_17904);

return statearr_18030;
})();
var statearr_18031_18115 = state_18020__$1;
(statearr_18031_18115[(2)] = null);

(statearr_18031_18115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (39))){
var state_18020__$1 = state_18020;
var statearr_18035_18116 = state_18020__$1;
(statearr_18035_18116[(2)] = null);

(statearr_18035_18116[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (4))){
var inst_17892 = (state_18020[(12)]);
var inst_17892__$1 = (state_18020[(2)]);
var inst_17893 = (inst_17892__$1 == null);
var state_18020__$1 = (function (){var statearr_18036 = state_18020;
(statearr_18036[(12)] = inst_17892__$1);

return statearr_18036;
})();
if(cljs.core.truth_(inst_17893)){
var statearr_18037_18117 = state_18020__$1;
(statearr_18037_18117[(1)] = (5));

} else {
var statearr_18038_18118 = state_18020__$1;
(statearr_18038_18118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (15))){
var inst_17902 = (state_18020[(13)]);
var inst_17901 = (state_18020[(14)]);
var inst_17903 = (state_18020[(16)]);
var inst_17904 = (state_18020[(17)]);
var inst_17917 = (state_18020[(2)]);
var inst_17918 = (inst_17904 + (1));
var tmp18032 = inst_17902;
var tmp18033 = inst_17901;
var tmp18034 = inst_17903;
var inst_17901__$1 = tmp18033;
var inst_17902__$1 = tmp18032;
var inst_17903__$1 = tmp18034;
var inst_17904__$1 = inst_17918;
var state_18020__$1 = (function (){var statearr_18039 = state_18020;
(statearr_18039[(13)] = inst_17902__$1);

(statearr_18039[(14)] = inst_17901__$1);

(statearr_18039[(16)] = inst_17903__$1);

(statearr_18039[(18)] = inst_17917);

(statearr_18039[(17)] = inst_17904__$1);

return statearr_18039;
})();
var statearr_18040_18119 = state_18020__$1;
(statearr_18040_18119[(2)] = null);

(statearr_18040_18119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (21))){
var inst_17942 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18044_18120 = state_18020__$1;
(statearr_18044_18120[(2)] = inst_17942);

(statearr_18044_18120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (31))){
var inst_17968 = (state_18020[(11)]);
var inst_17972 = done.call(null,null);
var inst_17973 = cljs.core.async.untap_STAR_.call(null,m,inst_17968);
var state_18020__$1 = (function (){var statearr_18045 = state_18020;
(statearr_18045[(19)] = inst_17972);

return statearr_18045;
})();
var statearr_18046_18121 = state_18020__$1;
(statearr_18046_18121[(2)] = inst_17973);

(statearr_18046_18121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (32))){
var inst_17963 = (state_18020[(9)]);
var inst_17961 = (state_18020[(10)]);
var inst_17962 = (state_18020[(20)]);
var inst_17960 = (state_18020[(21)]);
var inst_17975 = (state_18020[(2)]);
var inst_17976 = (inst_17963 + (1));
var tmp18041 = inst_17961;
var tmp18042 = inst_17962;
var tmp18043 = inst_17960;
var inst_17960__$1 = tmp18043;
var inst_17961__$1 = tmp18041;
var inst_17962__$1 = tmp18042;
var inst_17963__$1 = inst_17976;
var state_18020__$1 = (function (){var statearr_18047 = state_18020;
(statearr_18047[(9)] = inst_17963__$1);

(statearr_18047[(10)] = inst_17961__$1);

(statearr_18047[(22)] = inst_17975);

(statearr_18047[(20)] = inst_17962__$1);

(statearr_18047[(21)] = inst_17960__$1);

return statearr_18047;
})();
var statearr_18048_18122 = state_18020__$1;
(statearr_18048_18122[(2)] = null);

(statearr_18048_18122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (40))){
var inst_17988 = (state_18020[(23)]);
var inst_17992 = done.call(null,null);
var inst_17993 = cljs.core.async.untap_STAR_.call(null,m,inst_17988);
var state_18020__$1 = (function (){var statearr_18049 = state_18020;
(statearr_18049[(24)] = inst_17992);

return statearr_18049;
})();
var statearr_18050_18123 = state_18020__$1;
(statearr_18050_18123[(2)] = inst_17993);

(statearr_18050_18123[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (33))){
var inst_17979 = (state_18020[(25)]);
var inst_17981 = cljs.core.chunked_seq_QMARK_.call(null,inst_17979);
var state_18020__$1 = state_18020;
if(inst_17981){
var statearr_18051_18124 = state_18020__$1;
(statearr_18051_18124[(1)] = (36));

} else {
var statearr_18052_18125 = state_18020__$1;
(statearr_18052_18125[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (13))){
var inst_17911 = (state_18020[(26)]);
var inst_17914 = cljs.core.async.close_BANG_.call(null,inst_17911);
var state_18020__$1 = state_18020;
var statearr_18053_18126 = state_18020__$1;
(statearr_18053_18126[(2)] = inst_17914);

(statearr_18053_18126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (22))){
var inst_17932 = (state_18020[(8)]);
var inst_17935 = cljs.core.async.close_BANG_.call(null,inst_17932);
var state_18020__$1 = state_18020;
var statearr_18054_18127 = state_18020__$1;
(statearr_18054_18127[(2)] = inst_17935);

(statearr_18054_18127[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (36))){
var inst_17979 = (state_18020[(25)]);
var inst_17983 = cljs.core.chunk_first.call(null,inst_17979);
var inst_17984 = cljs.core.chunk_rest.call(null,inst_17979);
var inst_17985 = cljs.core.count.call(null,inst_17983);
var inst_17960 = inst_17984;
var inst_17961 = inst_17983;
var inst_17962 = inst_17985;
var inst_17963 = (0);
var state_18020__$1 = (function (){var statearr_18055 = state_18020;
(statearr_18055[(9)] = inst_17963);

(statearr_18055[(10)] = inst_17961);

(statearr_18055[(20)] = inst_17962);

(statearr_18055[(21)] = inst_17960);

return statearr_18055;
})();
var statearr_18056_18128 = state_18020__$1;
(statearr_18056_18128[(2)] = null);

(statearr_18056_18128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (41))){
var inst_17979 = (state_18020[(25)]);
var inst_17995 = (state_18020[(2)]);
var inst_17996 = cljs.core.next.call(null,inst_17979);
var inst_17960 = inst_17996;
var inst_17961 = null;
var inst_17962 = (0);
var inst_17963 = (0);
var state_18020__$1 = (function (){var statearr_18057 = state_18020;
(statearr_18057[(9)] = inst_17963);

(statearr_18057[(10)] = inst_17961);

(statearr_18057[(27)] = inst_17995);

(statearr_18057[(20)] = inst_17962);

(statearr_18057[(21)] = inst_17960);

return statearr_18057;
})();
var statearr_18058_18129 = state_18020__$1;
(statearr_18058_18129[(2)] = null);

(statearr_18058_18129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (43))){
var state_18020__$1 = state_18020;
var statearr_18059_18130 = state_18020__$1;
(statearr_18059_18130[(2)] = null);

(statearr_18059_18130[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (29))){
var inst_18004 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18060_18131 = state_18020__$1;
(statearr_18060_18131[(2)] = inst_18004);

(statearr_18060_18131[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (44))){
var inst_18013 = (state_18020[(2)]);
var state_18020__$1 = (function (){var statearr_18061 = state_18020;
(statearr_18061[(28)] = inst_18013);

return statearr_18061;
})();
var statearr_18062_18132 = state_18020__$1;
(statearr_18062_18132[(2)] = null);

(statearr_18062_18132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (6))){
var inst_17952 = (state_18020[(29)]);
var inst_17951 = cljs.core.deref.call(null,cs);
var inst_17952__$1 = cljs.core.keys.call(null,inst_17951);
var inst_17953 = cljs.core.count.call(null,inst_17952__$1);
var inst_17954 = cljs.core.reset_BANG_.call(null,dctr,inst_17953);
var inst_17959 = cljs.core.seq.call(null,inst_17952__$1);
var inst_17960 = inst_17959;
var inst_17961 = null;
var inst_17962 = (0);
var inst_17963 = (0);
var state_18020__$1 = (function (){var statearr_18063 = state_18020;
(statearr_18063[(9)] = inst_17963);

(statearr_18063[(30)] = inst_17954);

(statearr_18063[(10)] = inst_17961);

(statearr_18063[(20)] = inst_17962);

(statearr_18063[(21)] = inst_17960);

(statearr_18063[(29)] = inst_17952__$1);

return statearr_18063;
})();
var statearr_18064_18133 = state_18020__$1;
(statearr_18064_18133[(2)] = null);

(statearr_18064_18133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (28))){
var inst_17979 = (state_18020[(25)]);
var inst_17960 = (state_18020[(21)]);
var inst_17979__$1 = cljs.core.seq.call(null,inst_17960);
var state_18020__$1 = (function (){var statearr_18065 = state_18020;
(statearr_18065[(25)] = inst_17979__$1);

return statearr_18065;
})();
if(inst_17979__$1){
var statearr_18066_18134 = state_18020__$1;
(statearr_18066_18134[(1)] = (33));

} else {
var statearr_18067_18135 = state_18020__$1;
(statearr_18067_18135[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (25))){
var inst_17963 = (state_18020[(9)]);
var inst_17962 = (state_18020[(20)]);
var inst_17965 = (inst_17963 < inst_17962);
var inst_17966 = inst_17965;
var state_18020__$1 = state_18020;
if(cljs.core.truth_(inst_17966)){
var statearr_18068_18136 = state_18020__$1;
(statearr_18068_18136[(1)] = (27));

} else {
var statearr_18069_18137 = state_18020__$1;
(statearr_18069_18137[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (34))){
var state_18020__$1 = state_18020;
var statearr_18070_18138 = state_18020__$1;
(statearr_18070_18138[(2)] = null);

(statearr_18070_18138[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (17))){
var state_18020__$1 = state_18020;
var statearr_18071_18139 = state_18020__$1;
(statearr_18071_18139[(2)] = null);

(statearr_18071_18139[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (3))){
var inst_18018 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18020__$1,inst_18018);
} else {
if((state_val_18021 === (12))){
var inst_17947 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18072_18140 = state_18020__$1;
(statearr_18072_18140[(2)] = inst_17947);

(statearr_18072_18140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (2))){
var state_18020__$1 = state_18020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18020__$1,(4),ch);
} else {
if((state_val_18021 === (23))){
var state_18020__$1 = state_18020;
var statearr_18073_18141 = state_18020__$1;
(statearr_18073_18141[(2)] = null);

(statearr_18073_18141[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (35))){
var inst_18002 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18074_18142 = state_18020__$1;
(statearr_18074_18142[(2)] = inst_18002);

(statearr_18074_18142[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (19))){
var inst_17921 = (state_18020[(7)]);
var inst_17925 = cljs.core.chunk_first.call(null,inst_17921);
var inst_17926 = cljs.core.chunk_rest.call(null,inst_17921);
var inst_17927 = cljs.core.count.call(null,inst_17925);
var inst_17901 = inst_17926;
var inst_17902 = inst_17925;
var inst_17903 = inst_17927;
var inst_17904 = (0);
var state_18020__$1 = (function (){var statearr_18075 = state_18020;
(statearr_18075[(13)] = inst_17902);

(statearr_18075[(14)] = inst_17901);

(statearr_18075[(16)] = inst_17903);

(statearr_18075[(17)] = inst_17904);

return statearr_18075;
})();
var statearr_18076_18143 = state_18020__$1;
(statearr_18076_18143[(2)] = null);

(statearr_18076_18143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (11))){
var inst_17921 = (state_18020[(7)]);
var inst_17901 = (state_18020[(14)]);
var inst_17921__$1 = cljs.core.seq.call(null,inst_17901);
var state_18020__$1 = (function (){var statearr_18077 = state_18020;
(statearr_18077[(7)] = inst_17921__$1);

return statearr_18077;
})();
if(inst_17921__$1){
var statearr_18078_18144 = state_18020__$1;
(statearr_18078_18144[(1)] = (16));

} else {
var statearr_18079_18145 = state_18020__$1;
(statearr_18079_18145[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (9))){
var inst_17949 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18080_18146 = state_18020__$1;
(statearr_18080_18146[(2)] = inst_17949);

(statearr_18080_18146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (5))){
var inst_17899 = cljs.core.deref.call(null,cs);
var inst_17900 = cljs.core.seq.call(null,inst_17899);
var inst_17901 = inst_17900;
var inst_17902 = null;
var inst_17903 = (0);
var inst_17904 = (0);
var state_18020__$1 = (function (){var statearr_18081 = state_18020;
(statearr_18081[(13)] = inst_17902);

(statearr_18081[(14)] = inst_17901);

(statearr_18081[(16)] = inst_17903);

(statearr_18081[(17)] = inst_17904);

return statearr_18081;
})();
var statearr_18082_18147 = state_18020__$1;
(statearr_18082_18147[(2)] = null);

(statearr_18082_18147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (14))){
var state_18020__$1 = state_18020;
var statearr_18083_18148 = state_18020__$1;
(statearr_18083_18148[(2)] = null);

(statearr_18083_18148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (45))){
var inst_18010 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18084_18149 = state_18020__$1;
(statearr_18084_18149[(2)] = inst_18010);

(statearr_18084_18149[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (26))){
var inst_17952 = (state_18020[(29)]);
var inst_18006 = (state_18020[(2)]);
var inst_18007 = cljs.core.seq.call(null,inst_17952);
var state_18020__$1 = (function (){var statearr_18085 = state_18020;
(statearr_18085[(31)] = inst_18006);

return statearr_18085;
})();
if(inst_18007){
var statearr_18086_18150 = state_18020__$1;
(statearr_18086_18150[(1)] = (42));

} else {
var statearr_18087_18151 = state_18020__$1;
(statearr_18087_18151[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (16))){
var inst_17921 = (state_18020[(7)]);
var inst_17923 = cljs.core.chunked_seq_QMARK_.call(null,inst_17921);
var state_18020__$1 = state_18020;
if(inst_17923){
var statearr_18088_18152 = state_18020__$1;
(statearr_18088_18152[(1)] = (19));

} else {
var statearr_18089_18153 = state_18020__$1;
(statearr_18089_18153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (38))){
var inst_17999 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18090_18154 = state_18020__$1;
(statearr_18090_18154[(2)] = inst_17999);

(statearr_18090_18154[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (30))){
var state_18020__$1 = state_18020;
var statearr_18091_18155 = state_18020__$1;
(statearr_18091_18155[(2)] = null);

(statearr_18091_18155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (10))){
var inst_17902 = (state_18020[(13)]);
var inst_17904 = (state_18020[(17)]);
var inst_17910 = cljs.core._nth.call(null,inst_17902,inst_17904);
var inst_17911 = cljs.core.nth.call(null,inst_17910,(0),null);
var inst_17912 = cljs.core.nth.call(null,inst_17910,(1),null);
var state_18020__$1 = (function (){var statearr_18092 = state_18020;
(statearr_18092[(26)] = inst_17911);

return statearr_18092;
})();
if(cljs.core.truth_(inst_17912)){
var statearr_18093_18156 = state_18020__$1;
(statearr_18093_18156[(1)] = (13));

} else {
var statearr_18094_18157 = state_18020__$1;
(statearr_18094_18157[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (18))){
var inst_17945 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18095_18158 = state_18020__$1;
(statearr_18095_18158[(2)] = inst_17945);

(statearr_18095_18158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (42))){
var state_18020__$1 = state_18020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18020__$1,(45),dchan);
} else {
if((state_val_18021 === (37))){
var inst_17979 = (state_18020[(25)]);
var inst_17892 = (state_18020[(12)]);
var inst_17988 = (state_18020[(23)]);
var inst_17988__$1 = cljs.core.first.call(null,inst_17979);
var inst_17989 = cljs.core.async.put_BANG_.call(null,inst_17988__$1,inst_17892,done);
var state_18020__$1 = (function (){var statearr_18096 = state_18020;
(statearr_18096[(23)] = inst_17988__$1);

return statearr_18096;
})();
if(cljs.core.truth_(inst_17989)){
var statearr_18097_18159 = state_18020__$1;
(statearr_18097_18159[(1)] = (39));

} else {
var statearr_18098_18160 = state_18020__$1;
(statearr_18098_18160[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (8))){
var inst_17903 = (state_18020[(16)]);
var inst_17904 = (state_18020[(17)]);
var inst_17906 = (inst_17904 < inst_17903);
var inst_17907 = inst_17906;
var state_18020__$1 = state_18020;
if(cljs.core.truth_(inst_17907)){
var statearr_18099_18161 = state_18020__$1;
(statearr_18099_18161[(1)] = (10));

} else {
var statearr_18100_18162 = state_18020__$1;
(statearr_18100_18162[(1)] = (11));

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
});})(c__7310__auto___18108,cs,m,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7310__auto___18108,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7249__auto__ = null;
var cljs$core$async$mult_$_state_machine__7249__auto____0 = (function (){
var statearr_18104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18104[(0)] = cljs$core$async$mult_$_state_machine__7249__auto__);

(statearr_18104[(1)] = (1));

return statearr_18104;
});
var cljs$core$async$mult_$_state_machine__7249__auto____1 = (function (state_18020){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18105){if((e18105 instanceof Object)){
var ex__7252__auto__ = e18105;
var statearr_18106_18163 = state_18020;
(statearr_18106_18163[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18164 = state_18020;
state_18020 = G__18164;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7249__auto__ = function(state_18020){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7249__auto____1.call(this,state_18020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7249__auto____0;
cljs$core$async$mult_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7249__auto____1;
return cljs$core$async$mult_$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18108,cs,m,dchan,dctr,done))
})();
var state__7312__auto__ = (function (){var statearr_18107 = f__7311__auto__.call(null);
(statearr_18107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18108);

return statearr_18107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18108,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__18166 = arguments.length;
switch (G__18166) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
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

cljs.core.async.Mix = (function (){var obj18169 = {};
return obj18169;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4938__auto__ = m;
if(and__4938__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5586__auto__ = (((m == null))?null:m);
return (function (){var or__4950__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4938__auto__ = m;
if(and__4938__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5586__auto__ = (((m == null))?null:m);
return (function (){var or__4950__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4938__auto__ = m;
if(and__4938__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4938__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5586__auto__ = (((m == null))?null:m);
return (function (){var or__4950__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4938__auto__ = m;
if(and__4938__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5586__auto__ = (((m == null))?null:m);
return (function (){var or__4950__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4938__auto__ = m;
if(and__4938__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5586__auto__ = (((m == null))?null:m);
return (function (){var or__4950__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5990__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5990__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18174){
var map__18175 = p__18174;
var map__18175__$1 = ((cljs.core.seq_QMARK_.call(null,map__18175))?cljs.core.apply.call(null,cljs.core.hash_map,map__18175):map__18175);
var opts = map__18175__$1;
var statearr_18176_18179 = state;
(statearr_18176_18179[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4422__auto__ = cljs.core.async.do_alts.call(null,((function (map__18175,map__18175__$1,opts){
return (function (val){
var statearr_18177_18180 = state;
(statearr_18177_18180[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18175,map__18175__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4422__auto__)){
var cb = temp__4422__auto__;
var statearr_18178_18181 = state;
(statearr_18178_18181[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18170){
var G__18171 = cljs.core.first.call(null,seq18170);
var seq18170__$1 = cljs.core.next.call(null,seq18170);
var G__18172 = cljs.core.first.call(null,seq18170__$1);
var seq18170__$2 = cljs.core.next.call(null,seq18170__$1);
var G__18173 = cljs.core.first.call(null,seq18170__$2);
var seq18170__$3 = cljs.core.next.call(null,seq18170__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18171,G__18172,G__18173,seq18170__$3);
});
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
if(typeof cljs.core.async.t18301 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18301 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18302){
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
this.meta18302 = meta18302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18303,meta18302__$1){
var self__ = this;
var _18303__$1 = this;
return (new cljs.core.async.t18301(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18302__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18303){
var self__ = this;
var _18303__$1 = this;
return self__.meta18302;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18301.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18301.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18301.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18302","meta18302",-1925208140,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18301.cljs$lang$type = true;

cljs.core.async.t18301.cljs$lang$ctorStr = "cljs.core.async/t18301";

cljs.core.async.t18301.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18301");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18301 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t18301(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18302){
return (new cljs.core.async.t18301(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18302));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18301(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7310__auto___18420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18373){
var state_val_18374 = (state_18373[(1)]);
if((state_val_18374 === (7))){
var inst_18317 = (state_18373[(7)]);
var inst_18322 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18317);
var state_18373__$1 = state_18373;
var statearr_18375_18421 = state_18373__$1;
(statearr_18375_18421[(2)] = inst_18322);

(statearr_18375_18421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (20))){
var inst_18332 = (state_18373[(8)]);
var state_18373__$1 = state_18373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18373__$1,(23),out,inst_18332);
} else {
if((state_val_18374 === (1))){
var inst_18307 = (state_18373[(9)]);
var inst_18307__$1 = calc_state.call(null);
var inst_18308 = cljs.core.seq_QMARK_.call(null,inst_18307__$1);
var state_18373__$1 = (function (){var statearr_18376 = state_18373;
(statearr_18376[(9)] = inst_18307__$1);

return statearr_18376;
})();
if(inst_18308){
var statearr_18377_18422 = state_18373__$1;
(statearr_18377_18422[(1)] = (2));

} else {
var statearr_18378_18423 = state_18373__$1;
(statearr_18378_18423[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (24))){
var inst_18325 = (state_18373[(10)]);
var inst_18317 = inst_18325;
var state_18373__$1 = (function (){var statearr_18379 = state_18373;
(statearr_18379[(7)] = inst_18317);

return statearr_18379;
})();
var statearr_18380_18424 = state_18373__$1;
(statearr_18380_18424[(2)] = null);

(statearr_18380_18424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (4))){
var inst_18307 = (state_18373[(9)]);
var inst_18313 = (state_18373[(2)]);
var inst_18314 = cljs.core.get.call(null,inst_18313,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18315 = cljs.core.get.call(null,inst_18313,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18316 = cljs.core.get.call(null,inst_18313,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18317 = inst_18307;
var state_18373__$1 = (function (){var statearr_18381 = state_18373;
(statearr_18381[(11)] = inst_18315);

(statearr_18381[(7)] = inst_18317);

(statearr_18381[(12)] = inst_18314);

(statearr_18381[(13)] = inst_18316);

return statearr_18381;
})();
var statearr_18382_18425 = state_18373__$1;
(statearr_18382_18425[(2)] = null);

(statearr_18382_18425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (15))){
var state_18373__$1 = state_18373;
var statearr_18383_18426 = state_18373__$1;
(statearr_18383_18426[(2)] = null);

(statearr_18383_18426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (21))){
var inst_18325 = (state_18373[(10)]);
var inst_18317 = inst_18325;
var state_18373__$1 = (function (){var statearr_18384 = state_18373;
(statearr_18384[(7)] = inst_18317);

return statearr_18384;
})();
var statearr_18385_18427 = state_18373__$1;
(statearr_18385_18427[(2)] = null);

(statearr_18385_18427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (13))){
var inst_18369 = (state_18373[(2)]);
var state_18373__$1 = state_18373;
var statearr_18386_18428 = state_18373__$1;
(statearr_18386_18428[(2)] = inst_18369);

(statearr_18386_18428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (22))){
var inst_18367 = (state_18373[(2)]);
var state_18373__$1 = state_18373;
var statearr_18387_18429 = state_18373__$1;
(statearr_18387_18429[(2)] = inst_18367);

(statearr_18387_18429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (6))){
var inst_18371 = (state_18373[(2)]);
var state_18373__$1 = state_18373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18373__$1,inst_18371);
} else {
if((state_val_18374 === (25))){
var state_18373__$1 = state_18373;
var statearr_18388_18430 = state_18373__$1;
(statearr_18388_18430[(2)] = null);

(statearr_18388_18430[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (17))){
var inst_18347 = (state_18373[(14)]);
var state_18373__$1 = state_18373;
var statearr_18389_18431 = state_18373__$1;
(statearr_18389_18431[(2)] = inst_18347);

(statearr_18389_18431[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (3))){
var inst_18307 = (state_18373[(9)]);
var state_18373__$1 = state_18373;
var statearr_18390_18432 = state_18373__$1;
(statearr_18390_18432[(2)] = inst_18307);

(statearr_18390_18432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (12))){
var inst_18333 = (state_18373[(15)]);
var inst_18347 = (state_18373[(14)]);
var inst_18326 = (state_18373[(16)]);
var inst_18347__$1 = inst_18326.call(null,inst_18333);
var state_18373__$1 = (function (){var statearr_18391 = state_18373;
(statearr_18391[(14)] = inst_18347__$1);

return statearr_18391;
})();
if(cljs.core.truth_(inst_18347__$1)){
var statearr_18392_18433 = state_18373__$1;
(statearr_18392_18433[(1)] = (17));

} else {
var statearr_18393_18434 = state_18373__$1;
(statearr_18393_18434[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (2))){
var inst_18307 = (state_18373[(9)]);
var inst_18310 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18307);
var state_18373__$1 = state_18373;
var statearr_18394_18435 = state_18373__$1;
(statearr_18394_18435[(2)] = inst_18310);

(statearr_18394_18435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (23))){
var inst_18358 = (state_18373[(2)]);
var state_18373__$1 = state_18373;
if(cljs.core.truth_(inst_18358)){
var statearr_18395_18436 = state_18373__$1;
(statearr_18395_18436[(1)] = (24));

} else {
var statearr_18396_18437 = state_18373__$1;
(statearr_18396_18437[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (19))){
var inst_18355 = (state_18373[(2)]);
var state_18373__$1 = state_18373;
if(cljs.core.truth_(inst_18355)){
var statearr_18397_18438 = state_18373__$1;
(statearr_18397_18438[(1)] = (20));

} else {
var statearr_18398_18439 = state_18373__$1;
(statearr_18398_18439[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (11))){
var inst_18332 = (state_18373[(8)]);
var inst_18338 = (inst_18332 == null);
var state_18373__$1 = state_18373;
if(cljs.core.truth_(inst_18338)){
var statearr_18399_18440 = state_18373__$1;
(statearr_18399_18440[(1)] = (14));

} else {
var statearr_18400_18441 = state_18373__$1;
(statearr_18400_18441[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (9))){
var inst_18325 = (state_18373[(10)]);
var inst_18325__$1 = (state_18373[(2)]);
var inst_18326 = cljs.core.get.call(null,inst_18325__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18327 = cljs.core.get.call(null,inst_18325__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18328 = cljs.core.get.call(null,inst_18325__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18373__$1 = (function (){var statearr_18401 = state_18373;
(statearr_18401[(17)] = inst_18327);

(statearr_18401[(10)] = inst_18325__$1);

(statearr_18401[(16)] = inst_18326);

return statearr_18401;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18373__$1,(10),inst_18328);
} else {
if((state_val_18374 === (5))){
var inst_18317 = (state_18373[(7)]);
var inst_18320 = cljs.core.seq_QMARK_.call(null,inst_18317);
var state_18373__$1 = state_18373;
if(inst_18320){
var statearr_18402_18442 = state_18373__$1;
(statearr_18402_18442[(1)] = (7));

} else {
var statearr_18403_18443 = state_18373__$1;
(statearr_18403_18443[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (14))){
var inst_18333 = (state_18373[(15)]);
var inst_18340 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18333);
var state_18373__$1 = state_18373;
var statearr_18404_18444 = state_18373__$1;
(statearr_18404_18444[(2)] = inst_18340);

(statearr_18404_18444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (26))){
var inst_18363 = (state_18373[(2)]);
var state_18373__$1 = state_18373;
var statearr_18405_18445 = state_18373__$1;
(statearr_18405_18445[(2)] = inst_18363);

(statearr_18405_18445[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (16))){
var inst_18343 = (state_18373[(2)]);
var inst_18344 = calc_state.call(null);
var inst_18317 = inst_18344;
var state_18373__$1 = (function (){var statearr_18406 = state_18373;
(statearr_18406[(18)] = inst_18343);

(statearr_18406[(7)] = inst_18317);

return statearr_18406;
})();
var statearr_18407_18446 = state_18373__$1;
(statearr_18407_18446[(2)] = null);

(statearr_18407_18446[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (10))){
var inst_18333 = (state_18373[(15)]);
var inst_18332 = (state_18373[(8)]);
var inst_18331 = (state_18373[(2)]);
var inst_18332__$1 = cljs.core.nth.call(null,inst_18331,(0),null);
var inst_18333__$1 = cljs.core.nth.call(null,inst_18331,(1),null);
var inst_18334 = (inst_18332__$1 == null);
var inst_18335 = cljs.core._EQ_.call(null,inst_18333__$1,change);
var inst_18336 = (inst_18334) || (inst_18335);
var state_18373__$1 = (function (){var statearr_18408 = state_18373;
(statearr_18408[(15)] = inst_18333__$1);

(statearr_18408[(8)] = inst_18332__$1);

return statearr_18408;
})();
if(cljs.core.truth_(inst_18336)){
var statearr_18409_18447 = state_18373__$1;
(statearr_18409_18447[(1)] = (11));

} else {
var statearr_18410_18448 = state_18373__$1;
(statearr_18410_18448[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (18))){
var inst_18327 = (state_18373[(17)]);
var inst_18333 = (state_18373[(15)]);
var inst_18326 = (state_18373[(16)]);
var inst_18350 = cljs.core.empty_QMARK_.call(null,inst_18326);
var inst_18351 = inst_18327.call(null,inst_18333);
var inst_18352 = cljs.core.not.call(null,inst_18351);
var inst_18353 = (inst_18350) && (inst_18352);
var state_18373__$1 = state_18373;
var statearr_18411_18449 = state_18373__$1;
(statearr_18411_18449[(2)] = inst_18353);

(statearr_18411_18449[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (8))){
var inst_18317 = (state_18373[(7)]);
var state_18373__$1 = state_18373;
var statearr_18412_18450 = state_18373__$1;
(statearr_18412_18450[(2)] = inst_18317);

(statearr_18412_18450[(1)] = (9));


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
});})(c__7310__auto___18420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7248__auto__,c__7310__auto___18420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7249__auto__ = null;
var cljs$core$async$mix_$_state_machine__7249__auto____0 = (function (){
var statearr_18416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18416[(0)] = cljs$core$async$mix_$_state_machine__7249__auto__);

(statearr_18416[(1)] = (1));

return statearr_18416;
});
var cljs$core$async$mix_$_state_machine__7249__auto____1 = (function (state_18373){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18417){if((e18417 instanceof Object)){
var ex__7252__auto__ = e18417;
var statearr_18418_18451 = state_18373;
(statearr_18418_18451[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18452 = state_18373;
state_18373 = G__18452;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7249__auto__ = function(state_18373){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7249__auto____1.call(this,state_18373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7249__auto____0;
cljs$core$async$mix_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7249__auto____1;
return cljs$core$async$mix_$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7312__auto__ = (function (){var statearr_18419 = f__7311__auto__.call(null);
(statearr_18419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18420);

return statearr_18419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18454 = {};
return obj18454;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4938__auto__ = p;
if(and__4938__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4938__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5586__auto__ = (((p == null))?null:p);
return (function (){var or__4950__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4938__auto__ = p;
if(and__4938__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4938__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5586__auto__ = (((p == null))?null:p);
return (function (){var or__4950__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__18456 = arguments.length;
switch (G__18456) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4938__auto__ = p;
if(and__4938__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4938__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5586__auto__ = (((p == null))?null:p);
return (function (){var or__4950__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4938__auto__ = p;
if(and__4938__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5586__auto__ = (((p == null))?null:p);
return (function (){var or__4950__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__18460 = arguments.length;
switch (G__18460) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4950__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4950__auto__,mults){
return (function (p1__18458_SHARP_){
if(cljs.core.truth_(p1__18458_SHARP_.call(null,topic))){
return p1__18458_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18458_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4950__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18461 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18461 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18462){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18462 = meta18462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18463,meta18462__$1){
var self__ = this;
var _18463__$1 = this;
return (new cljs.core.async.t18461(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18462__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18463){
var self__ = this;
var _18463__$1 = this;
return self__.meta18462;
});})(mults,ensure_mult))
;

cljs.core.async.t18461.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18461.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18461.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18461.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4422__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4422__auto__)){
var m = temp__4422__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t18461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18461.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18462","meta18462",-605014700,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t18461.cljs$lang$type = true;

cljs.core.async.t18461.cljs$lang$ctorStr = "cljs.core.async/t18461";

cljs.core.async.t18461.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18461");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18461 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t18461(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18462){
return (new cljs.core.async.t18461(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18462));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18461(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7310__auto___18584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18584,mults,ensure_mult,p){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18584,mults,ensure_mult,p){
return (function (state_18535){
var state_val_18536 = (state_18535[(1)]);
if((state_val_18536 === (7))){
var inst_18531 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18537_18585 = state_18535__$1;
(statearr_18537_18585[(2)] = inst_18531);

(statearr_18537_18585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (20))){
var state_18535__$1 = state_18535;
var statearr_18538_18586 = state_18535__$1;
(statearr_18538_18586[(2)] = null);

(statearr_18538_18586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (1))){
var state_18535__$1 = state_18535;
var statearr_18539_18587 = state_18535__$1;
(statearr_18539_18587[(2)] = null);

(statearr_18539_18587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (24))){
var inst_18514 = (state_18535[(7)]);
var inst_18523 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18514);
var state_18535__$1 = state_18535;
var statearr_18540_18588 = state_18535__$1;
(statearr_18540_18588[(2)] = inst_18523);

(statearr_18540_18588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (4))){
var inst_18466 = (state_18535[(8)]);
var inst_18466__$1 = (state_18535[(2)]);
var inst_18467 = (inst_18466__$1 == null);
var state_18535__$1 = (function (){var statearr_18541 = state_18535;
(statearr_18541[(8)] = inst_18466__$1);

return statearr_18541;
})();
if(cljs.core.truth_(inst_18467)){
var statearr_18542_18589 = state_18535__$1;
(statearr_18542_18589[(1)] = (5));

} else {
var statearr_18543_18590 = state_18535__$1;
(statearr_18543_18590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (15))){
var inst_18508 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18544_18591 = state_18535__$1;
(statearr_18544_18591[(2)] = inst_18508);

(statearr_18544_18591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (21))){
var inst_18528 = (state_18535[(2)]);
var state_18535__$1 = (function (){var statearr_18545 = state_18535;
(statearr_18545[(9)] = inst_18528);

return statearr_18545;
})();
var statearr_18546_18592 = state_18535__$1;
(statearr_18546_18592[(2)] = null);

(statearr_18546_18592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (13))){
var inst_18490 = (state_18535[(10)]);
var inst_18492 = cljs.core.chunked_seq_QMARK_.call(null,inst_18490);
var state_18535__$1 = state_18535;
if(inst_18492){
var statearr_18547_18593 = state_18535__$1;
(statearr_18547_18593[(1)] = (16));

} else {
var statearr_18548_18594 = state_18535__$1;
(statearr_18548_18594[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (22))){
var inst_18520 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18520)){
var statearr_18549_18595 = state_18535__$1;
(statearr_18549_18595[(1)] = (23));

} else {
var statearr_18550_18596 = state_18535__$1;
(statearr_18550_18596[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (6))){
var inst_18514 = (state_18535[(7)]);
var inst_18516 = (state_18535[(11)]);
var inst_18466 = (state_18535[(8)]);
var inst_18514__$1 = topic_fn.call(null,inst_18466);
var inst_18515 = cljs.core.deref.call(null,mults);
var inst_18516__$1 = cljs.core.get.call(null,inst_18515,inst_18514__$1);
var state_18535__$1 = (function (){var statearr_18551 = state_18535;
(statearr_18551[(7)] = inst_18514__$1);

(statearr_18551[(11)] = inst_18516__$1);

return statearr_18551;
})();
if(cljs.core.truth_(inst_18516__$1)){
var statearr_18552_18597 = state_18535__$1;
(statearr_18552_18597[(1)] = (19));

} else {
var statearr_18553_18598 = state_18535__$1;
(statearr_18553_18598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (25))){
var inst_18525 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18554_18599 = state_18535__$1;
(statearr_18554_18599[(2)] = inst_18525);

(statearr_18554_18599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (17))){
var inst_18490 = (state_18535[(10)]);
var inst_18499 = cljs.core.first.call(null,inst_18490);
var inst_18500 = cljs.core.async.muxch_STAR_.call(null,inst_18499);
var inst_18501 = cljs.core.async.close_BANG_.call(null,inst_18500);
var inst_18502 = cljs.core.next.call(null,inst_18490);
var inst_18476 = inst_18502;
var inst_18477 = null;
var inst_18478 = (0);
var inst_18479 = (0);
var state_18535__$1 = (function (){var statearr_18555 = state_18535;
(statearr_18555[(12)] = inst_18477);

(statearr_18555[(13)] = inst_18501);

(statearr_18555[(14)] = inst_18476);

(statearr_18555[(15)] = inst_18478);

(statearr_18555[(16)] = inst_18479);

return statearr_18555;
})();
var statearr_18556_18600 = state_18535__$1;
(statearr_18556_18600[(2)] = null);

(statearr_18556_18600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (3))){
var inst_18533 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18535__$1,inst_18533);
} else {
if((state_val_18536 === (12))){
var inst_18510 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18557_18601 = state_18535__$1;
(statearr_18557_18601[(2)] = inst_18510);

(statearr_18557_18601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (2))){
var state_18535__$1 = state_18535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18535__$1,(4),ch);
} else {
if((state_val_18536 === (23))){
var state_18535__$1 = state_18535;
var statearr_18558_18602 = state_18535__$1;
(statearr_18558_18602[(2)] = null);

(statearr_18558_18602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (19))){
var inst_18516 = (state_18535[(11)]);
var inst_18466 = (state_18535[(8)]);
var inst_18518 = cljs.core.async.muxch_STAR_.call(null,inst_18516);
var state_18535__$1 = state_18535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18535__$1,(22),inst_18518,inst_18466);
} else {
if((state_val_18536 === (11))){
var inst_18490 = (state_18535[(10)]);
var inst_18476 = (state_18535[(14)]);
var inst_18490__$1 = cljs.core.seq.call(null,inst_18476);
var state_18535__$1 = (function (){var statearr_18559 = state_18535;
(statearr_18559[(10)] = inst_18490__$1);

return statearr_18559;
})();
if(inst_18490__$1){
var statearr_18560_18603 = state_18535__$1;
(statearr_18560_18603[(1)] = (13));

} else {
var statearr_18561_18604 = state_18535__$1;
(statearr_18561_18604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (9))){
var inst_18512 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18562_18605 = state_18535__$1;
(statearr_18562_18605[(2)] = inst_18512);

(statearr_18562_18605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (5))){
var inst_18473 = cljs.core.deref.call(null,mults);
var inst_18474 = cljs.core.vals.call(null,inst_18473);
var inst_18475 = cljs.core.seq.call(null,inst_18474);
var inst_18476 = inst_18475;
var inst_18477 = null;
var inst_18478 = (0);
var inst_18479 = (0);
var state_18535__$1 = (function (){var statearr_18563 = state_18535;
(statearr_18563[(12)] = inst_18477);

(statearr_18563[(14)] = inst_18476);

(statearr_18563[(15)] = inst_18478);

(statearr_18563[(16)] = inst_18479);

return statearr_18563;
})();
var statearr_18564_18606 = state_18535__$1;
(statearr_18564_18606[(2)] = null);

(statearr_18564_18606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (14))){
var state_18535__$1 = state_18535;
var statearr_18568_18607 = state_18535__$1;
(statearr_18568_18607[(2)] = null);

(statearr_18568_18607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (16))){
var inst_18490 = (state_18535[(10)]);
var inst_18494 = cljs.core.chunk_first.call(null,inst_18490);
var inst_18495 = cljs.core.chunk_rest.call(null,inst_18490);
var inst_18496 = cljs.core.count.call(null,inst_18494);
var inst_18476 = inst_18495;
var inst_18477 = inst_18494;
var inst_18478 = inst_18496;
var inst_18479 = (0);
var state_18535__$1 = (function (){var statearr_18569 = state_18535;
(statearr_18569[(12)] = inst_18477);

(statearr_18569[(14)] = inst_18476);

(statearr_18569[(15)] = inst_18478);

(statearr_18569[(16)] = inst_18479);

return statearr_18569;
})();
var statearr_18570_18608 = state_18535__$1;
(statearr_18570_18608[(2)] = null);

(statearr_18570_18608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (10))){
var inst_18477 = (state_18535[(12)]);
var inst_18476 = (state_18535[(14)]);
var inst_18478 = (state_18535[(15)]);
var inst_18479 = (state_18535[(16)]);
var inst_18484 = cljs.core._nth.call(null,inst_18477,inst_18479);
var inst_18485 = cljs.core.async.muxch_STAR_.call(null,inst_18484);
var inst_18486 = cljs.core.async.close_BANG_.call(null,inst_18485);
var inst_18487 = (inst_18479 + (1));
var tmp18565 = inst_18477;
var tmp18566 = inst_18476;
var tmp18567 = inst_18478;
var inst_18476__$1 = tmp18566;
var inst_18477__$1 = tmp18565;
var inst_18478__$1 = tmp18567;
var inst_18479__$1 = inst_18487;
var state_18535__$1 = (function (){var statearr_18571 = state_18535;
(statearr_18571[(12)] = inst_18477__$1);

(statearr_18571[(17)] = inst_18486);

(statearr_18571[(14)] = inst_18476__$1);

(statearr_18571[(15)] = inst_18478__$1);

(statearr_18571[(16)] = inst_18479__$1);

return statearr_18571;
})();
var statearr_18572_18609 = state_18535__$1;
(statearr_18572_18609[(2)] = null);

(statearr_18572_18609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (18))){
var inst_18505 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18573_18610 = state_18535__$1;
(statearr_18573_18610[(2)] = inst_18505);

(statearr_18573_18610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (8))){
var inst_18478 = (state_18535[(15)]);
var inst_18479 = (state_18535[(16)]);
var inst_18481 = (inst_18479 < inst_18478);
var inst_18482 = inst_18481;
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18482)){
var statearr_18574_18611 = state_18535__$1;
(statearr_18574_18611[(1)] = (10));

} else {
var statearr_18575_18612 = state_18535__$1;
(statearr_18575_18612[(1)] = (11));

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
});})(c__7310__auto___18584,mults,ensure_mult,p))
;
return ((function (switch__7248__auto__,c__7310__auto___18584,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18579[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18579[(1)] = (1));

return statearr_18579;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18535){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18580){if((e18580 instanceof Object)){
var ex__7252__auto__ = e18580;
var statearr_18581_18613 = state_18535;
(statearr_18581_18613[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18614 = state_18535;
state_18535 = G__18614;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18584,mults,ensure_mult,p))
})();
var state__7312__auto__ = (function (){var statearr_18582 = f__7311__auto__.call(null);
(statearr_18582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18584);

return statearr_18582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18584,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__18616 = arguments.length;
switch (G__18616) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__18619 = arguments.length;
switch (G__18619) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__18622 = arguments.length;
switch (G__18622) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__7310__auto___18692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18692,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18692,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18661){
var state_val_18662 = (state_18661[(1)]);
if((state_val_18662 === (7))){
var state_18661__$1 = state_18661;
var statearr_18663_18693 = state_18661__$1;
(statearr_18663_18693[(2)] = null);

(statearr_18663_18693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (1))){
var state_18661__$1 = state_18661;
var statearr_18664_18694 = state_18661__$1;
(statearr_18664_18694[(2)] = null);

(statearr_18664_18694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (4))){
var inst_18625 = (state_18661[(7)]);
var inst_18627 = (inst_18625 < cnt);
var state_18661__$1 = state_18661;
if(cljs.core.truth_(inst_18627)){
var statearr_18665_18695 = state_18661__$1;
(statearr_18665_18695[(1)] = (6));

} else {
var statearr_18666_18696 = state_18661__$1;
(statearr_18666_18696[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (15))){
var inst_18657 = (state_18661[(2)]);
var state_18661__$1 = state_18661;
var statearr_18667_18697 = state_18661__$1;
(statearr_18667_18697[(2)] = inst_18657);

(statearr_18667_18697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (13))){
var inst_18650 = cljs.core.async.close_BANG_.call(null,out);
var state_18661__$1 = state_18661;
var statearr_18668_18698 = state_18661__$1;
(statearr_18668_18698[(2)] = inst_18650);

(statearr_18668_18698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (6))){
var state_18661__$1 = state_18661;
var statearr_18669_18699 = state_18661__$1;
(statearr_18669_18699[(2)] = null);

(statearr_18669_18699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (3))){
var inst_18659 = (state_18661[(2)]);
var state_18661__$1 = state_18661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18661__$1,inst_18659);
} else {
if((state_val_18662 === (12))){
var inst_18647 = (state_18661[(8)]);
var inst_18647__$1 = (state_18661[(2)]);
var inst_18648 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18647__$1);
var state_18661__$1 = (function (){var statearr_18670 = state_18661;
(statearr_18670[(8)] = inst_18647__$1);

return statearr_18670;
})();
if(cljs.core.truth_(inst_18648)){
var statearr_18671_18700 = state_18661__$1;
(statearr_18671_18700[(1)] = (13));

} else {
var statearr_18672_18701 = state_18661__$1;
(statearr_18672_18701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (2))){
var inst_18624 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18625 = (0);
var state_18661__$1 = (function (){var statearr_18673 = state_18661;
(statearr_18673[(7)] = inst_18625);

(statearr_18673[(9)] = inst_18624);

return statearr_18673;
})();
var statearr_18674_18702 = state_18661__$1;
(statearr_18674_18702[(2)] = null);

(statearr_18674_18702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (11))){
var inst_18625 = (state_18661[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18661,(10),Object,null,(9));
var inst_18634 = chs__$1.call(null,inst_18625);
var inst_18635 = done.call(null,inst_18625);
var inst_18636 = cljs.core.async.take_BANG_.call(null,inst_18634,inst_18635);
var state_18661__$1 = state_18661;
var statearr_18675_18703 = state_18661__$1;
(statearr_18675_18703[(2)] = inst_18636);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18661__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (9))){
var inst_18625 = (state_18661[(7)]);
var inst_18638 = (state_18661[(2)]);
var inst_18639 = (inst_18625 + (1));
var inst_18625__$1 = inst_18639;
var state_18661__$1 = (function (){var statearr_18676 = state_18661;
(statearr_18676[(7)] = inst_18625__$1);

(statearr_18676[(10)] = inst_18638);

return statearr_18676;
})();
var statearr_18677_18704 = state_18661__$1;
(statearr_18677_18704[(2)] = null);

(statearr_18677_18704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (5))){
var inst_18645 = (state_18661[(2)]);
var state_18661__$1 = (function (){var statearr_18678 = state_18661;
(statearr_18678[(11)] = inst_18645);

return statearr_18678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18661__$1,(12),dchan);
} else {
if((state_val_18662 === (14))){
var inst_18647 = (state_18661[(8)]);
var inst_18652 = cljs.core.apply.call(null,f,inst_18647);
var state_18661__$1 = state_18661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18661__$1,(16),out,inst_18652);
} else {
if((state_val_18662 === (16))){
var inst_18654 = (state_18661[(2)]);
var state_18661__$1 = (function (){var statearr_18679 = state_18661;
(statearr_18679[(12)] = inst_18654);

return statearr_18679;
})();
var statearr_18680_18705 = state_18661__$1;
(statearr_18680_18705[(2)] = null);

(statearr_18680_18705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (10))){
var inst_18629 = (state_18661[(2)]);
var inst_18630 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18661__$1 = (function (){var statearr_18681 = state_18661;
(statearr_18681[(13)] = inst_18629);

return statearr_18681;
})();
var statearr_18682_18706 = state_18661__$1;
(statearr_18682_18706[(2)] = inst_18630);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18661__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (8))){
var inst_18643 = (state_18661[(2)]);
var state_18661__$1 = state_18661;
var statearr_18683_18707 = state_18661__$1;
(statearr_18683_18707[(2)] = inst_18643);

(statearr_18683_18707[(1)] = (5));


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
});})(c__7310__auto___18692,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7310__auto___18692,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18687[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18687[(1)] = (1));

return statearr_18687;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18661){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18688){if((e18688 instanceof Object)){
var ex__7252__auto__ = e18688;
var statearr_18689_18708 = state_18661;
(statearr_18689_18708[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18709 = state_18661;
state_18661 = G__18709;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18692,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7312__auto__ = (function (){var statearr_18690 = f__7311__auto__.call(null);
(statearr_18690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18692);

return statearr_18690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18692,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__18712 = arguments.length;
switch (G__18712) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7310__auto___18767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18767,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18767,out){
return (function (state_18742){
var state_val_18743 = (state_18742[(1)]);
if((state_val_18743 === (7))){
var inst_18722 = (state_18742[(7)]);
var inst_18721 = (state_18742[(8)]);
var inst_18721__$1 = (state_18742[(2)]);
var inst_18722__$1 = cljs.core.nth.call(null,inst_18721__$1,(0),null);
var inst_18723 = cljs.core.nth.call(null,inst_18721__$1,(1),null);
var inst_18724 = (inst_18722__$1 == null);
var state_18742__$1 = (function (){var statearr_18744 = state_18742;
(statearr_18744[(7)] = inst_18722__$1);

(statearr_18744[(8)] = inst_18721__$1);

(statearr_18744[(9)] = inst_18723);

return statearr_18744;
})();
if(cljs.core.truth_(inst_18724)){
var statearr_18745_18768 = state_18742__$1;
(statearr_18745_18768[(1)] = (8));

} else {
var statearr_18746_18769 = state_18742__$1;
(statearr_18746_18769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (1))){
var inst_18713 = cljs.core.vec.call(null,chs);
var inst_18714 = inst_18713;
var state_18742__$1 = (function (){var statearr_18747 = state_18742;
(statearr_18747[(10)] = inst_18714);

return statearr_18747;
})();
var statearr_18748_18770 = state_18742__$1;
(statearr_18748_18770[(2)] = null);

(statearr_18748_18770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (4))){
var inst_18714 = (state_18742[(10)]);
var state_18742__$1 = state_18742;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18742__$1,(7),inst_18714);
} else {
if((state_val_18743 === (6))){
var inst_18738 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18749_18771 = state_18742__$1;
(statearr_18749_18771[(2)] = inst_18738);

(statearr_18749_18771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (3))){
var inst_18740 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18742__$1,inst_18740);
} else {
if((state_val_18743 === (2))){
var inst_18714 = (state_18742[(10)]);
var inst_18716 = cljs.core.count.call(null,inst_18714);
var inst_18717 = (inst_18716 > (0));
var state_18742__$1 = state_18742;
if(cljs.core.truth_(inst_18717)){
var statearr_18751_18772 = state_18742__$1;
(statearr_18751_18772[(1)] = (4));

} else {
var statearr_18752_18773 = state_18742__$1;
(statearr_18752_18773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (11))){
var inst_18714 = (state_18742[(10)]);
var inst_18731 = (state_18742[(2)]);
var tmp18750 = inst_18714;
var inst_18714__$1 = tmp18750;
var state_18742__$1 = (function (){var statearr_18753 = state_18742;
(statearr_18753[(11)] = inst_18731);

(statearr_18753[(10)] = inst_18714__$1);

return statearr_18753;
})();
var statearr_18754_18774 = state_18742__$1;
(statearr_18754_18774[(2)] = null);

(statearr_18754_18774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (9))){
var inst_18722 = (state_18742[(7)]);
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18742__$1,(11),out,inst_18722);
} else {
if((state_val_18743 === (5))){
var inst_18736 = cljs.core.async.close_BANG_.call(null,out);
var state_18742__$1 = state_18742;
var statearr_18755_18775 = state_18742__$1;
(statearr_18755_18775[(2)] = inst_18736);

(statearr_18755_18775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (10))){
var inst_18734 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18756_18776 = state_18742__$1;
(statearr_18756_18776[(2)] = inst_18734);

(statearr_18756_18776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (8))){
var inst_18722 = (state_18742[(7)]);
var inst_18714 = (state_18742[(10)]);
var inst_18721 = (state_18742[(8)]);
var inst_18723 = (state_18742[(9)]);
var inst_18726 = (function (){var cs = inst_18714;
var vec__18719 = inst_18721;
var v = inst_18722;
var c = inst_18723;
return ((function (cs,vec__18719,v,c,inst_18722,inst_18714,inst_18721,inst_18723,state_val_18743,c__7310__auto___18767,out){
return (function (p1__18710_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18710_SHARP_);
});
;})(cs,vec__18719,v,c,inst_18722,inst_18714,inst_18721,inst_18723,state_val_18743,c__7310__auto___18767,out))
})();
var inst_18727 = cljs.core.filterv.call(null,inst_18726,inst_18714);
var inst_18714__$1 = inst_18727;
var state_18742__$1 = (function (){var statearr_18757 = state_18742;
(statearr_18757[(10)] = inst_18714__$1);

return statearr_18757;
})();
var statearr_18758_18777 = state_18742__$1;
(statearr_18758_18777[(2)] = null);

(statearr_18758_18777[(1)] = (2));


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
});})(c__7310__auto___18767,out))
;
return ((function (switch__7248__auto__,c__7310__auto___18767,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18762 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18762[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18762[(1)] = (1));

return statearr_18762;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18742){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18763){if((e18763 instanceof Object)){
var ex__7252__auto__ = e18763;
var statearr_18764_18778 = state_18742;
(statearr_18764_18778[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18779 = state_18742;
state_18742 = G__18779;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18767,out))
})();
var state__7312__auto__ = (function (){var statearr_18765 = f__7311__auto__.call(null);
(statearr_18765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18767);

return statearr_18765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18767,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
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
cljs.core.async.take = (function cljs$core$async$take(){
var G__18781 = arguments.length;
switch (G__18781) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7310__auto___18829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18829,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18829,out){
return (function (state_18805){
var state_val_18806 = (state_18805[(1)]);
if((state_val_18806 === (7))){
var inst_18787 = (state_18805[(7)]);
var inst_18787__$1 = (state_18805[(2)]);
var inst_18788 = (inst_18787__$1 == null);
var inst_18789 = cljs.core.not.call(null,inst_18788);
var state_18805__$1 = (function (){var statearr_18807 = state_18805;
(statearr_18807[(7)] = inst_18787__$1);

return statearr_18807;
})();
if(inst_18789){
var statearr_18808_18830 = state_18805__$1;
(statearr_18808_18830[(1)] = (8));

} else {
var statearr_18809_18831 = state_18805__$1;
(statearr_18809_18831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (1))){
var inst_18782 = (0);
var state_18805__$1 = (function (){var statearr_18810 = state_18805;
(statearr_18810[(8)] = inst_18782);

return statearr_18810;
})();
var statearr_18811_18832 = state_18805__$1;
(statearr_18811_18832[(2)] = null);

(statearr_18811_18832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (4))){
var state_18805__$1 = state_18805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18805__$1,(7),ch);
} else {
if((state_val_18806 === (6))){
var inst_18800 = (state_18805[(2)]);
var state_18805__$1 = state_18805;
var statearr_18812_18833 = state_18805__$1;
(statearr_18812_18833[(2)] = inst_18800);

(statearr_18812_18833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (3))){
var inst_18802 = (state_18805[(2)]);
var inst_18803 = cljs.core.async.close_BANG_.call(null,out);
var state_18805__$1 = (function (){var statearr_18813 = state_18805;
(statearr_18813[(9)] = inst_18802);

return statearr_18813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18805__$1,inst_18803);
} else {
if((state_val_18806 === (2))){
var inst_18782 = (state_18805[(8)]);
var inst_18784 = (inst_18782 < n);
var state_18805__$1 = state_18805;
if(cljs.core.truth_(inst_18784)){
var statearr_18814_18834 = state_18805__$1;
(statearr_18814_18834[(1)] = (4));

} else {
var statearr_18815_18835 = state_18805__$1;
(statearr_18815_18835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (11))){
var inst_18782 = (state_18805[(8)]);
var inst_18792 = (state_18805[(2)]);
var inst_18793 = (inst_18782 + (1));
var inst_18782__$1 = inst_18793;
var state_18805__$1 = (function (){var statearr_18816 = state_18805;
(statearr_18816[(10)] = inst_18792);

(statearr_18816[(8)] = inst_18782__$1);

return statearr_18816;
})();
var statearr_18817_18836 = state_18805__$1;
(statearr_18817_18836[(2)] = null);

(statearr_18817_18836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (9))){
var state_18805__$1 = state_18805;
var statearr_18818_18837 = state_18805__$1;
(statearr_18818_18837[(2)] = null);

(statearr_18818_18837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (5))){
var state_18805__$1 = state_18805;
var statearr_18819_18838 = state_18805__$1;
(statearr_18819_18838[(2)] = null);

(statearr_18819_18838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (10))){
var inst_18797 = (state_18805[(2)]);
var state_18805__$1 = state_18805;
var statearr_18820_18839 = state_18805__$1;
(statearr_18820_18839[(2)] = inst_18797);

(statearr_18820_18839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (8))){
var inst_18787 = (state_18805[(7)]);
var state_18805__$1 = state_18805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18805__$1,(11),out,inst_18787);
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
});})(c__7310__auto___18829,out))
;
return ((function (switch__7248__auto__,c__7310__auto___18829,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18824[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18824[(1)] = (1));

return statearr_18824;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18805){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18825){if((e18825 instanceof Object)){
var ex__7252__auto__ = e18825;
var statearr_18826_18840 = state_18805;
(statearr_18826_18840[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18841 = state_18805;
state_18805 = G__18841;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18829,out))
})();
var state__7312__auto__ = (function (){var statearr_18827 = f__7311__auto__.call(null);
(statearr_18827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18829);

return statearr_18827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18829,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t18849 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18849 = (function (map_LT_,f,ch,meta18850){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18850 = meta18850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18851,meta18850__$1){
var self__ = this;
var _18851__$1 = this;
return (new cljs.core.async.t18849(self__.map_LT_,self__.f,self__.ch,meta18850__$1));
});

cljs.core.async.t18849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18851){
var self__ = this;
var _18851__$1 = this;
return self__.meta18850;
});

cljs.core.async.t18849.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18849.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t18852 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18852 = (function (map_LT_,f,ch,meta18850,_,fn1,meta18853){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18850 = meta18850;
this._ = _;
this.fn1 = fn1;
this.meta18853 = meta18853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18854,meta18853__$1){
var self__ = this;
var _18854__$1 = this;
return (new cljs.core.async.t18852(self__.map_LT_,self__.f,self__.ch,self__.meta18850,self__._,self__.fn1,meta18853__$1));
});})(___$1))
;

cljs.core.async.t18852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18854){
var self__ = this;
var _18854__$1 = this;
return self__.meta18853;
});})(___$1))
;

cljs.core.async.t18852.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t18852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18842_SHARP_){
return f1.call(null,(((p1__18842_SHARP_ == null))?null:self__.f.call(null,p1__18842_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t18852.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18850","meta18850",949828228,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18853","meta18853",-210457700,null)], null);
});})(___$1))
;

cljs.core.async.t18852.cljs$lang$type = true;

cljs.core.async.t18852.cljs$lang$ctorStr = "cljs.core.async/t18852";

cljs.core.async.t18852.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18852");
});})(___$1))
;

cljs.core.async.__GT_t18852 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t18852(map_LT___$1,f__$1,ch__$1,meta18850__$1,___$2,fn1__$1,meta18853){
return (new cljs.core.async.t18852(map_LT___$1,f__$1,ch__$1,meta18850__$1,___$2,fn1__$1,meta18853));
});})(___$1))
;

}

return (new cljs.core.async.t18852(self__.map_LT_,self__.f,self__.ch,self__.meta18850,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4938__auto__ = ret;
if(cljs.core.truth_(and__4938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t18849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t18849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18850","meta18850",949828228,null)], null);
});

cljs.core.async.t18849.cljs$lang$type = true;

cljs.core.async.t18849.cljs$lang$ctorStr = "cljs.core.async/t18849";

cljs.core.async.t18849.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18849");
});

cljs.core.async.__GT_t18849 = (function cljs$core$async$map_LT__$___GT_t18849(map_LT___$1,f__$1,ch__$1,meta18850){
return (new cljs.core.async.t18849(map_LT___$1,f__$1,ch__$1,meta18850));
});

}

return (new cljs.core.async.t18849(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t18858 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18858 = (function (map_GT_,f,ch,meta18859){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18859 = meta18859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18860,meta18859__$1){
var self__ = this;
var _18860__$1 = this;
return (new cljs.core.async.t18858(self__.map_GT_,self__.f,self__.ch,meta18859__$1));
});

cljs.core.async.t18858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18860){
var self__ = this;
var _18860__$1 = this;
return self__.meta18859;
});

cljs.core.async.t18858.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18858.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18858.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t18858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18859","meta18859",-1025373476,null)], null);
});

cljs.core.async.t18858.cljs$lang$type = true;

cljs.core.async.t18858.cljs$lang$ctorStr = "cljs.core.async/t18858";

cljs.core.async.t18858.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18858");
});

cljs.core.async.__GT_t18858 = (function cljs$core$async$map_GT__$___GT_t18858(map_GT___$1,f__$1,ch__$1,meta18859){
return (new cljs.core.async.t18858(map_GT___$1,f__$1,ch__$1,meta18859));
});

}

return (new cljs.core.async.t18858(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t18864 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18864 = (function (filter_GT_,p,ch,meta18865){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18865 = meta18865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18866,meta18865__$1){
var self__ = this;
var _18866__$1 = this;
return (new cljs.core.async.t18864(self__.filter_GT_,self__.p,self__.ch,meta18865__$1));
});

cljs.core.async.t18864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18866){
var self__ = this;
var _18866__$1 = this;
return self__.meta18865;
});

cljs.core.async.t18864.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18864.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18864.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18864.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18864.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18864.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18864.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t18864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18865","meta18865",196858140,null)], null);
});

cljs.core.async.t18864.cljs$lang$type = true;

cljs.core.async.t18864.cljs$lang$ctorStr = "cljs.core.async/t18864";

cljs.core.async.t18864.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18864");
});

cljs.core.async.__GT_t18864 = (function cljs$core$async$filter_GT__$___GT_t18864(filter_GT___$1,p__$1,ch__$1,meta18865){
return (new cljs.core.async.t18864(filter_GT___$1,p__$1,ch__$1,meta18865));
});

}

return (new cljs.core.async.t18864(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__18868 = arguments.length;
switch (G__18868) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7310__auto___18911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18911,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18911,out){
return (function (state_18889){
var state_val_18890 = (state_18889[(1)]);
if((state_val_18890 === (7))){
var inst_18885 = (state_18889[(2)]);
var state_18889__$1 = state_18889;
var statearr_18891_18912 = state_18889__$1;
(statearr_18891_18912[(2)] = inst_18885);

(statearr_18891_18912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18890 === (1))){
var state_18889__$1 = state_18889;
var statearr_18892_18913 = state_18889__$1;
(statearr_18892_18913[(2)] = null);

(statearr_18892_18913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18890 === (4))){
var inst_18871 = (state_18889[(7)]);
var inst_18871__$1 = (state_18889[(2)]);
var inst_18872 = (inst_18871__$1 == null);
var state_18889__$1 = (function (){var statearr_18893 = state_18889;
(statearr_18893[(7)] = inst_18871__$1);

return statearr_18893;
})();
if(cljs.core.truth_(inst_18872)){
var statearr_18894_18914 = state_18889__$1;
(statearr_18894_18914[(1)] = (5));

} else {
var statearr_18895_18915 = state_18889__$1;
(statearr_18895_18915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18890 === (6))){
var inst_18871 = (state_18889[(7)]);
var inst_18876 = p.call(null,inst_18871);
var state_18889__$1 = state_18889;
if(cljs.core.truth_(inst_18876)){
var statearr_18896_18916 = state_18889__$1;
(statearr_18896_18916[(1)] = (8));

} else {
var statearr_18897_18917 = state_18889__$1;
(statearr_18897_18917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18890 === (3))){
var inst_18887 = (state_18889[(2)]);
var state_18889__$1 = state_18889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18889__$1,inst_18887);
} else {
if((state_val_18890 === (2))){
var state_18889__$1 = state_18889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18889__$1,(4),ch);
} else {
if((state_val_18890 === (11))){
var inst_18879 = (state_18889[(2)]);
var state_18889__$1 = state_18889;
var statearr_18898_18918 = state_18889__$1;
(statearr_18898_18918[(2)] = inst_18879);

(statearr_18898_18918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18890 === (9))){
var state_18889__$1 = state_18889;
var statearr_18899_18919 = state_18889__$1;
(statearr_18899_18919[(2)] = null);

(statearr_18899_18919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18890 === (5))){
var inst_18874 = cljs.core.async.close_BANG_.call(null,out);
var state_18889__$1 = state_18889;
var statearr_18900_18920 = state_18889__$1;
(statearr_18900_18920[(2)] = inst_18874);

(statearr_18900_18920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18890 === (10))){
var inst_18882 = (state_18889[(2)]);
var state_18889__$1 = (function (){var statearr_18901 = state_18889;
(statearr_18901[(8)] = inst_18882);

return statearr_18901;
})();
var statearr_18902_18921 = state_18889__$1;
(statearr_18902_18921[(2)] = null);

(statearr_18902_18921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18890 === (8))){
var inst_18871 = (state_18889[(7)]);
var state_18889__$1 = state_18889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18889__$1,(11),out,inst_18871);
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
});})(c__7310__auto___18911,out))
;
return ((function (switch__7248__auto__,c__7310__auto___18911,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18906 = [null,null,null,null,null,null,null,null,null];
(statearr_18906[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18906[(1)] = (1));

return statearr_18906;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18889){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18907){if((e18907 instanceof Object)){
var ex__7252__auto__ = e18907;
var statearr_18908_18922 = state_18889;
(statearr_18908_18922[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18923 = state_18889;
state_18889 = G__18923;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18911,out))
})();
var state__7312__auto__ = (function (){var statearr_18909 = f__7311__auto__.call(null);
(statearr_18909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18911);

return statearr_18909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18911,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__18925 = arguments.length;
switch (G__18925) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7310__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto__){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto__){
return (function (state_19092){
var state_val_19093 = (state_19092[(1)]);
if((state_val_19093 === (7))){
var inst_19088 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19094_19135 = state_19092__$1;
(statearr_19094_19135[(2)] = inst_19088);

(statearr_19094_19135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (20))){
var inst_19058 = (state_19092[(7)]);
var inst_19069 = (state_19092[(2)]);
var inst_19070 = cljs.core.next.call(null,inst_19058);
var inst_19044 = inst_19070;
var inst_19045 = null;
var inst_19046 = (0);
var inst_19047 = (0);
var state_19092__$1 = (function (){var statearr_19095 = state_19092;
(statearr_19095[(8)] = inst_19047);

(statearr_19095[(9)] = inst_19045);

(statearr_19095[(10)] = inst_19069);

(statearr_19095[(11)] = inst_19046);

(statearr_19095[(12)] = inst_19044);

return statearr_19095;
})();
var statearr_19096_19136 = state_19092__$1;
(statearr_19096_19136[(2)] = null);

(statearr_19096_19136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (1))){
var state_19092__$1 = state_19092;
var statearr_19097_19137 = state_19092__$1;
(statearr_19097_19137[(2)] = null);

(statearr_19097_19137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (4))){
var inst_19033 = (state_19092[(13)]);
var inst_19033__$1 = (state_19092[(2)]);
var inst_19034 = (inst_19033__$1 == null);
var state_19092__$1 = (function (){var statearr_19098 = state_19092;
(statearr_19098[(13)] = inst_19033__$1);

return statearr_19098;
})();
if(cljs.core.truth_(inst_19034)){
var statearr_19099_19138 = state_19092__$1;
(statearr_19099_19138[(1)] = (5));

} else {
var statearr_19100_19139 = state_19092__$1;
(statearr_19100_19139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (15))){
var state_19092__$1 = state_19092;
var statearr_19104_19140 = state_19092__$1;
(statearr_19104_19140[(2)] = null);

(statearr_19104_19140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (21))){
var state_19092__$1 = state_19092;
var statearr_19105_19141 = state_19092__$1;
(statearr_19105_19141[(2)] = null);

(statearr_19105_19141[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (13))){
var inst_19047 = (state_19092[(8)]);
var inst_19045 = (state_19092[(9)]);
var inst_19046 = (state_19092[(11)]);
var inst_19044 = (state_19092[(12)]);
var inst_19054 = (state_19092[(2)]);
var inst_19055 = (inst_19047 + (1));
var tmp19101 = inst_19045;
var tmp19102 = inst_19046;
var tmp19103 = inst_19044;
var inst_19044__$1 = tmp19103;
var inst_19045__$1 = tmp19101;
var inst_19046__$1 = tmp19102;
var inst_19047__$1 = inst_19055;
var state_19092__$1 = (function (){var statearr_19106 = state_19092;
(statearr_19106[(8)] = inst_19047__$1);

(statearr_19106[(14)] = inst_19054);

(statearr_19106[(9)] = inst_19045__$1);

(statearr_19106[(11)] = inst_19046__$1);

(statearr_19106[(12)] = inst_19044__$1);

return statearr_19106;
})();
var statearr_19107_19142 = state_19092__$1;
(statearr_19107_19142[(2)] = null);

(statearr_19107_19142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (22))){
var state_19092__$1 = state_19092;
var statearr_19108_19143 = state_19092__$1;
(statearr_19108_19143[(2)] = null);

(statearr_19108_19143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (6))){
var inst_19033 = (state_19092[(13)]);
var inst_19042 = f.call(null,inst_19033);
var inst_19043 = cljs.core.seq.call(null,inst_19042);
var inst_19044 = inst_19043;
var inst_19045 = null;
var inst_19046 = (0);
var inst_19047 = (0);
var state_19092__$1 = (function (){var statearr_19109 = state_19092;
(statearr_19109[(8)] = inst_19047);

(statearr_19109[(9)] = inst_19045);

(statearr_19109[(11)] = inst_19046);

(statearr_19109[(12)] = inst_19044);

return statearr_19109;
})();
var statearr_19110_19144 = state_19092__$1;
(statearr_19110_19144[(2)] = null);

(statearr_19110_19144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (17))){
var inst_19058 = (state_19092[(7)]);
var inst_19062 = cljs.core.chunk_first.call(null,inst_19058);
var inst_19063 = cljs.core.chunk_rest.call(null,inst_19058);
var inst_19064 = cljs.core.count.call(null,inst_19062);
var inst_19044 = inst_19063;
var inst_19045 = inst_19062;
var inst_19046 = inst_19064;
var inst_19047 = (0);
var state_19092__$1 = (function (){var statearr_19111 = state_19092;
(statearr_19111[(8)] = inst_19047);

(statearr_19111[(9)] = inst_19045);

(statearr_19111[(11)] = inst_19046);

(statearr_19111[(12)] = inst_19044);

return statearr_19111;
})();
var statearr_19112_19145 = state_19092__$1;
(statearr_19112_19145[(2)] = null);

(statearr_19112_19145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (3))){
var inst_19090 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19092__$1,inst_19090);
} else {
if((state_val_19093 === (12))){
var inst_19078 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19113_19146 = state_19092__$1;
(statearr_19113_19146[(2)] = inst_19078);

(statearr_19113_19146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (2))){
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19092__$1,(4),in$);
} else {
if((state_val_19093 === (23))){
var inst_19086 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19114_19147 = state_19092__$1;
(statearr_19114_19147[(2)] = inst_19086);

(statearr_19114_19147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (19))){
var inst_19073 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19115_19148 = state_19092__$1;
(statearr_19115_19148[(2)] = inst_19073);

(statearr_19115_19148[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (11))){
var inst_19058 = (state_19092[(7)]);
var inst_19044 = (state_19092[(12)]);
var inst_19058__$1 = cljs.core.seq.call(null,inst_19044);
var state_19092__$1 = (function (){var statearr_19116 = state_19092;
(statearr_19116[(7)] = inst_19058__$1);

return statearr_19116;
})();
if(inst_19058__$1){
var statearr_19117_19149 = state_19092__$1;
(statearr_19117_19149[(1)] = (14));

} else {
var statearr_19118_19150 = state_19092__$1;
(statearr_19118_19150[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (9))){
var inst_19080 = (state_19092[(2)]);
var inst_19081 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19092__$1 = (function (){var statearr_19119 = state_19092;
(statearr_19119[(15)] = inst_19080);

return statearr_19119;
})();
if(cljs.core.truth_(inst_19081)){
var statearr_19120_19151 = state_19092__$1;
(statearr_19120_19151[(1)] = (21));

} else {
var statearr_19121_19152 = state_19092__$1;
(statearr_19121_19152[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (5))){
var inst_19036 = cljs.core.async.close_BANG_.call(null,out);
var state_19092__$1 = state_19092;
var statearr_19122_19153 = state_19092__$1;
(statearr_19122_19153[(2)] = inst_19036);

(statearr_19122_19153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (14))){
var inst_19058 = (state_19092[(7)]);
var inst_19060 = cljs.core.chunked_seq_QMARK_.call(null,inst_19058);
var state_19092__$1 = state_19092;
if(inst_19060){
var statearr_19123_19154 = state_19092__$1;
(statearr_19123_19154[(1)] = (17));

} else {
var statearr_19124_19155 = state_19092__$1;
(statearr_19124_19155[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (16))){
var inst_19076 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19125_19156 = state_19092__$1;
(statearr_19125_19156[(2)] = inst_19076);

(statearr_19125_19156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (10))){
var inst_19047 = (state_19092[(8)]);
var inst_19045 = (state_19092[(9)]);
var inst_19052 = cljs.core._nth.call(null,inst_19045,inst_19047);
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19092__$1,(13),out,inst_19052);
} else {
if((state_val_19093 === (18))){
var inst_19058 = (state_19092[(7)]);
var inst_19067 = cljs.core.first.call(null,inst_19058);
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19092__$1,(20),out,inst_19067);
} else {
if((state_val_19093 === (8))){
var inst_19047 = (state_19092[(8)]);
var inst_19046 = (state_19092[(11)]);
var inst_19049 = (inst_19047 < inst_19046);
var inst_19050 = inst_19049;
var state_19092__$1 = state_19092;
if(cljs.core.truth_(inst_19050)){
var statearr_19126_19157 = state_19092__$1;
(statearr_19126_19157[(1)] = (10));

} else {
var statearr_19127_19158 = state_19092__$1;
(statearr_19127_19158[(1)] = (11));

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
});})(c__7310__auto__))
;
return ((function (switch__7248__auto__,c__7310__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____0 = (function (){
var statearr_19131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19131[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__);

(statearr_19131[(1)] = (1));

return statearr_19131;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____1 = (function (state_19092){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_19092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e19132){if((e19132 instanceof Object)){
var ex__7252__auto__ = e19132;
var statearr_19133_19159 = state_19092;
(statearr_19133_19159[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19160 = state_19092;
state_19092 = G__19160;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__ = function(state_19092){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____1.call(this,state_19092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto__))
})();
var state__7312__auto__ = (function (){var statearr_19134 = f__7311__auto__.call(null);
(statearr_19134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto__);

return statearr_19134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto__))
);

return c__7310__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__19162 = arguments.length;
switch (G__19162) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__19165 = arguments.length;
switch (G__19165) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__19168 = arguments.length;
switch (G__19168) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7310__auto___19218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___19218,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___19218,out){
return (function (state_19192){
var state_val_19193 = (state_19192[(1)]);
if((state_val_19193 === (7))){
var inst_19187 = (state_19192[(2)]);
var state_19192__$1 = state_19192;
var statearr_19194_19219 = state_19192__$1;
(statearr_19194_19219[(2)] = inst_19187);

(statearr_19194_19219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19193 === (1))){
var inst_19169 = null;
var state_19192__$1 = (function (){var statearr_19195 = state_19192;
(statearr_19195[(7)] = inst_19169);

return statearr_19195;
})();
var statearr_19196_19220 = state_19192__$1;
(statearr_19196_19220[(2)] = null);

(statearr_19196_19220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19193 === (4))){
var inst_19172 = (state_19192[(8)]);
var inst_19172__$1 = (state_19192[(2)]);
var inst_19173 = (inst_19172__$1 == null);
var inst_19174 = cljs.core.not.call(null,inst_19173);
var state_19192__$1 = (function (){var statearr_19197 = state_19192;
(statearr_19197[(8)] = inst_19172__$1);

return statearr_19197;
})();
if(inst_19174){
var statearr_19198_19221 = state_19192__$1;
(statearr_19198_19221[(1)] = (5));

} else {
var statearr_19199_19222 = state_19192__$1;
(statearr_19199_19222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19193 === (6))){
var state_19192__$1 = state_19192;
var statearr_19200_19223 = state_19192__$1;
(statearr_19200_19223[(2)] = null);

(statearr_19200_19223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19193 === (3))){
var inst_19189 = (state_19192[(2)]);
var inst_19190 = cljs.core.async.close_BANG_.call(null,out);
var state_19192__$1 = (function (){var statearr_19201 = state_19192;
(statearr_19201[(9)] = inst_19189);

return statearr_19201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19192__$1,inst_19190);
} else {
if((state_val_19193 === (2))){
var state_19192__$1 = state_19192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19192__$1,(4),ch);
} else {
if((state_val_19193 === (11))){
var inst_19172 = (state_19192[(8)]);
var inst_19181 = (state_19192[(2)]);
var inst_19169 = inst_19172;
var state_19192__$1 = (function (){var statearr_19202 = state_19192;
(statearr_19202[(10)] = inst_19181);

(statearr_19202[(7)] = inst_19169);

return statearr_19202;
})();
var statearr_19203_19224 = state_19192__$1;
(statearr_19203_19224[(2)] = null);

(statearr_19203_19224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19193 === (9))){
var inst_19172 = (state_19192[(8)]);
var state_19192__$1 = state_19192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19192__$1,(11),out,inst_19172);
} else {
if((state_val_19193 === (5))){
var inst_19169 = (state_19192[(7)]);
var inst_19172 = (state_19192[(8)]);
var inst_19176 = cljs.core._EQ_.call(null,inst_19172,inst_19169);
var state_19192__$1 = state_19192;
if(inst_19176){
var statearr_19205_19225 = state_19192__$1;
(statearr_19205_19225[(1)] = (8));

} else {
var statearr_19206_19226 = state_19192__$1;
(statearr_19206_19226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19193 === (10))){
var inst_19184 = (state_19192[(2)]);
var state_19192__$1 = state_19192;
var statearr_19207_19227 = state_19192__$1;
(statearr_19207_19227[(2)] = inst_19184);

(statearr_19207_19227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19193 === (8))){
var inst_19169 = (state_19192[(7)]);
var tmp19204 = inst_19169;
var inst_19169__$1 = tmp19204;
var state_19192__$1 = (function (){var statearr_19208 = state_19192;
(statearr_19208[(7)] = inst_19169__$1);

return statearr_19208;
})();
var statearr_19209_19228 = state_19192__$1;
(statearr_19209_19228[(2)] = null);

(statearr_19209_19228[(1)] = (2));


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
});})(c__7310__auto___19218,out))
;
return ((function (switch__7248__auto__,c__7310__auto___19218,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_19213 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19213[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_19213[(1)] = (1));

return statearr_19213;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_19192){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_19192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e19214){if((e19214 instanceof Object)){
var ex__7252__auto__ = e19214;
var statearr_19215_19229 = state_19192;
(statearr_19215_19229[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19230 = state_19192;
state_19192 = G__19230;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_19192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_19192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___19218,out))
})();
var state__7312__auto__ = (function (){var statearr_19216 = f__7311__auto__.call(null);
(statearr_19216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___19218);

return statearr_19216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___19218,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__19232 = arguments.length;
switch (G__19232) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7310__auto___19301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___19301,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___19301,out){
return (function (state_19270){
var state_val_19271 = (state_19270[(1)]);
if((state_val_19271 === (7))){
var inst_19266 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
var statearr_19272_19302 = state_19270__$1;
(statearr_19272_19302[(2)] = inst_19266);

(statearr_19272_19302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (1))){
var inst_19233 = (new Array(n));
var inst_19234 = inst_19233;
var inst_19235 = (0);
var state_19270__$1 = (function (){var statearr_19273 = state_19270;
(statearr_19273[(7)] = inst_19235);

(statearr_19273[(8)] = inst_19234);

return statearr_19273;
})();
var statearr_19274_19303 = state_19270__$1;
(statearr_19274_19303[(2)] = null);

(statearr_19274_19303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (4))){
var inst_19238 = (state_19270[(9)]);
var inst_19238__$1 = (state_19270[(2)]);
var inst_19239 = (inst_19238__$1 == null);
var inst_19240 = cljs.core.not.call(null,inst_19239);
var state_19270__$1 = (function (){var statearr_19275 = state_19270;
(statearr_19275[(9)] = inst_19238__$1);

return statearr_19275;
})();
if(inst_19240){
var statearr_19276_19304 = state_19270__$1;
(statearr_19276_19304[(1)] = (5));

} else {
var statearr_19277_19305 = state_19270__$1;
(statearr_19277_19305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (15))){
var inst_19260 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
var statearr_19278_19306 = state_19270__$1;
(statearr_19278_19306[(2)] = inst_19260);

(statearr_19278_19306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (13))){
var state_19270__$1 = state_19270;
var statearr_19279_19307 = state_19270__$1;
(statearr_19279_19307[(2)] = null);

(statearr_19279_19307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (6))){
var inst_19235 = (state_19270[(7)]);
var inst_19256 = (inst_19235 > (0));
var state_19270__$1 = state_19270;
if(cljs.core.truth_(inst_19256)){
var statearr_19280_19308 = state_19270__$1;
(statearr_19280_19308[(1)] = (12));

} else {
var statearr_19281_19309 = state_19270__$1;
(statearr_19281_19309[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (3))){
var inst_19268 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19270__$1,inst_19268);
} else {
if((state_val_19271 === (12))){
var inst_19234 = (state_19270[(8)]);
var inst_19258 = cljs.core.vec.call(null,inst_19234);
var state_19270__$1 = state_19270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19270__$1,(15),out,inst_19258);
} else {
if((state_val_19271 === (2))){
var state_19270__$1 = state_19270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19270__$1,(4),ch);
} else {
if((state_val_19271 === (11))){
var inst_19250 = (state_19270[(2)]);
var inst_19251 = (new Array(n));
var inst_19234 = inst_19251;
var inst_19235 = (0);
var state_19270__$1 = (function (){var statearr_19282 = state_19270;
(statearr_19282[(10)] = inst_19250);

(statearr_19282[(7)] = inst_19235);

(statearr_19282[(8)] = inst_19234);

return statearr_19282;
})();
var statearr_19283_19310 = state_19270__$1;
(statearr_19283_19310[(2)] = null);

(statearr_19283_19310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (9))){
var inst_19234 = (state_19270[(8)]);
var inst_19248 = cljs.core.vec.call(null,inst_19234);
var state_19270__$1 = state_19270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19270__$1,(11),out,inst_19248);
} else {
if((state_val_19271 === (5))){
var inst_19243 = (state_19270[(11)]);
var inst_19238 = (state_19270[(9)]);
var inst_19235 = (state_19270[(7)]);
var inst_19234 = (state_19270[(8)]);
var inst_19242 = (inst_19234[inst_19235] = inst_19238);
var inst_19243__$1 = (inst_19235 + (1));
var inst_19244 = (inst_19243__$1 < n);
var state_19270__$1 = (function (){var statearr_19284 = state_19270;
(statearr_19284[(11)] = inst_19243__$1);

(statearr_19284[(12)] = inst_19242);

return statearr_19284;
})();
if(cljs.core.truth_(inst_19244)){
var statearr_19285_19311 = state_19270__$1;
(statearr_19285_19311[(1)] = (8));

} else {
var statearr_19286_19312 = state_19270__$1;
(statearr_19286_19312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (14))){
var inst_19263 = (state_19270[(2)]);
var inst_19264 = cljs.core.async.close_BANG_.call(null,out);
var state_19270__$1 = (function (){var statearr_19288 = state_19270;
(statearr_19288[(13)] = inst_19263);

return statearr_19288;
})();
var statearr_19289_19313 = state_19270__$1;
(statearr_19289_19313[(2)] = inst_19264);

(statearr_19289_19313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (10))){
var inst_19254 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
var statearr_19290_19314 = state_19270__$1;
(statearr_19290_19314[(2)] = inst_19254);

(statearr_19290_19314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (8))){
var inst_19243 = (state_19270[(11)]);
var inst_19234 = (state_19270[(8)]);
var tmp19287 = inst_19234;
var inst_19234__$1 = tmp19287;
var inst_19235 = inst_19243;
var state_19270__$1 = (function (){var statearr_19291 = state_19270;
(statearr_19291[(7)] = inst_19235);

(statearr_19291[(8)] = inst_19234__$1);

return statearr_19291;
})();
var statearr_19292_19315 = state_19270__$1;
(statearr_19292_19315[(2)] = null);

(statearr_19292_19315[(1)] = (2));


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
});})(c__7310__auto___19301,out))
;
return ((function (switch__7248__auto__,c__7310__auto___19301,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_19296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19296[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_19296[(1)] = (1));

return statearr_19296;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_19270){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_19270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e19297){if((e19297 instanceof Object)){
var ex__7252__auto__ = e19297;
var statearr_19298_19316 = state_19270;
(statearr_19298_19316[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19317 = state_19270;
state_19270 = G__19317;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_19270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_19270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___19301,out))
})();
var state__7312__auto__ = (function (){var statearr_19299 = f__7311__auto__.call(null);
(statearr_19299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___19301);

return statearr_19299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___19301,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__19319 = arguments.length;
switch (G__19319) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7310__auto___19392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___19392,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___19392,out){
return (function (state_19361){
var state_val_19362 = (state_19361[(1)]);
if((state_val_19362 === (7))){
var inst_19357 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
var statearr_19363_19393 = state_19361__$1;
(statearr_19363_19393[(2)] = inst_19357);

(statearr_19363_19393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19362 === (1))){
var inst_19320 = [];
var inst_19321 = inst_19320;
var inst_19322 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19361__$1 = (function (){var statearr_19364 = state_19361;
(statearr_19364[(7)] = inst_19321);

(statearr_19364[(8)] = inst_19322);

return statearr_19364;
})();
var statearr_19365_19394 = state_19361__$1;
(statearr_19365_19394[(2)] = null);

(statearr_19365_19394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19362 === (4))){
var inst_19325 = (state_19361[(9)]);
var inst_19325__$1 = (state_19361[(2)]);
var inst_19326 = (inst_19325__$1 == null);
var inst_19327 = cljs.core.not.call(null,inst_19326);
var state_19361__$1 = (function (){var statearr_19366 = state_19361;
(statearr_19366[(9)] = inst_19325__$1);

return statearr_19366;
})();
if(inst_19327){
var statearr_19367_19395 = state_19361__$1;
(statearr_19367_19395[(1)] = (5));

} else {
var statearr_19368_19396 = state_19361__$1;
(statearr_19368_19396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19362 === (15))){
var inst_19351 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
var statearr_19369_19397 = state_19361__$1;
(statearr_19369_19397[(2)] = inst_19351);

(statearr_19369_19397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19362 === (13))){
var state_19361__$1 = state_19361;
var statearr_19370_19398 = state_19361__$1;
(statearr_19370_19398[(2)] = null);

(statearr_19370_19398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19362 === (6))){
var inst_19321 = (state_19361[(7)]);
var inst_19346 = inst_19321.length;
var inst_19347 = (inst_19346 > (0));
var state_19361__$1 = state_19361;
if(cljs.core.truth_(inst_19347)){
var statearr_19371_19399 = state_19361__$1;
(statearr_19371_19399[(1)] = (12));

} else {
var statearr_19372_19400 = state_19361__$1;
(statearr_19372_19400[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19362 === (3))){
var inst_19359 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19361__$1,inst_19359);
} else {
if((state_val_19362 === (12))){
var inst_19321 = (state_19361[(7)]);
var inst_19349 = cljs.core.vec.call(null,inst_19321);
var state_19361__$1 = state_19361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19361__$1,(15),out,inst_19349);
} else {
if((state_val_19362 === (2))){
var state_19361__$1 = state_19361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19361__$1,(4),ch);
} else {
if((state_val_19362 === (11))){
var inst_19329 = (state_19361[(10)]);
var inst_19325 = (state_19361[(9)]);
var inst_19339 = (state_19361[(2)]);
var inst_19340 = [];
var inst_19341 = inst_19340.push(inst_19325);
var inst_19321 = inst_19340;
var inst_19322 = inst_19329;
var state_19361__$1 = (function (){var statearr_19373 = state_19361;
(statearr_19373[(7)] = inst_19321);

(statearr_19373[(8)] = inst_19322);

(statearr_19373[(11)] = inst_19341);

(statearr_19373[(12)] = inst_19339);

return statearr_19373;
})();
var statearr_19374_19401 = state_19361__$1;
(statearr_19374_19401[(2)] = null);

(statearr_19374_19401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19362 === (9))){
var inst_19321 = (state_19361[(7)]);
var inst_19337 = cljs.core.vec.call(null,inst_19321);
var state_19361__$1 = state_19361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19361__$1,(11),out,inst_19337);
} else {
if((state_val_19362 === (5))){
var inst_19329 = (state_19361[(10)]);
var inst_19325 = (state_19361[(9)]);
var inst_19322 = (state_19361[(8)]);
var inst_19329__$1 = f.call(null,inst_19325);
var inst_19330 = cljs.core._EQ_.call(null,inst_19329__$1,inst_19322);
var inst_19331 = cljs.core.keyword_identical_QMARK_.call(null,inst_19322,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19332 = (inst_19330) || (inst_19331);
var state_19361__$1 = (function (){var statearr_19375 = state_19361;
(statearr_19375[(10)] = inst_19329__$1);

return statearr_19375;
})();
if(cljs.core.truth_(inst_19332)){
var statearr_19376_19402 = state_19361__$1;
(statearr_19376_19402[(1)] = (8));

} else {
var statearr_19377_19403 = state_19361__$1;
(statearr_19377_19403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19362 === (14))){
var inst_19354 = (state_19361[(2)]);
var inst_19355 = cljs.core.async.close_BANG_.call(null,out);
var state_19361__$1 = (function (){var statearr_19379 = state_19361;
(statearr_19379[(13)] = inst_19354);

return statearr_19379;
})();
var statearr_19380_19404 = state_19361__$1;
(statearr_19380_19404[(2)] = inst_19355);

(statearr_19380_19404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19362 === (10))){
var inst_19344 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
var statearr_19381_19405 = state_19361__$1;
(statearr_19381_19405[(2)] = inst_19344);

(statearr_19381_19405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19362 === (8))){
var inst_19321 = (state_19361[(7)]);
var inst_19329 = (state_19361[(10)]);
var inst_19325 = (state_19361[(9)]);
var inst_19334 = inst_19321.push(inst_19325);
var tmp19378 = inst_19321;
var inst_19321__$1 = tmp19378;
var inst_19322 = inst_19329;
var state_19361__$1 = (function (){var statearr_19382 = state_19361;
(statearr_19382[(7)] = inst_19321__$1);

(statearr_19382[(14)] = inst_19334);

(statearr_19382[(8)] = inst_19322);

return statearr_19382;
})();
var statearr_19383_19406 = state_19361__$1;
(statearr_19383_19406[(2)] = null);

(statearr_19383_19406[(1)] = (2));


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
});})(c__7310__auto___19392,out))
;
return ((function (switch__7248__auto__,c__7310__auto___19392,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_19387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19387[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_19387[(1)] = (1));

return statearr_19387;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_19361){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_19361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e19388){if((e19388 instanceof Object)){
var ex__7252__auto__ = e19388;
var statearr_19389_19407 = state_19361;
(statearr_19389_19407[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19408 = state_19361;
state_19361 = G__19408;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_19361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_19361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___19392,out))
})();
var state__7312__auto__ = (function (){var statearr_19390 = f__7311__auto__.call(null);
(statearr_19390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___19392);

return statearr_19390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___19392,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map