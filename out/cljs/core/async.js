// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t17062 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17062 = (function (fn_handler,f,meta17063){
this.fn_handler = fn_handler;
this.f = f;
this.meta17063 = meta17063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17064,meta17063__$1){
var self__ = this;
var _17064__$1 = this;
return (new cljs.core.async.t17062(self__.fn_handler,self__.f,meta17063__$1));
});

cljs.core.async.t17062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17064){
var self__ = this;
var _17064__$1 = this;
return self__.meta17063;
});

cljs.core.async.t17062.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17063","meta17063",-636996691,null)], null);
});

cljs.core.async.t17062.cljs$lang$type = true;

cljs.core.async.t17062.cljs$lang$ctorStr = "cljs.core.async/t17062";

cljs.core.async.t17062.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs.core.async/t17062");
});

cljs.core.async.__GT_t17062 = (function cljs$core$async$fn_handler_$___GT_t17062(fn_handler__$1,f__$1,meta17063){
return (new cljs.core.async.t17062(fn_handler__$1,f__$1,meta17063));
});

}

return (new cljs.core.async.t17062(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17066 = buff;
if(G__17066){
var bit__5627__auto__ = null;
if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5627__auto__;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return G__17066.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17066.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17066);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17066);
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
var G__17068 = arguments.length;
switch (G__17068) {
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
var G__17071 = arguments.length;
switch (G__17071) {
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
var val_17073 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17073);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17073,ret){
return (function (){
return fn1.call(null,val_17073);
});})(val_17073,ret))
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
var G__17075 = arguments.length;
switch (G__17075) {
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
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
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
var n__5838__auto___17077 = n;
var x_17078 = (0);
while(true){
if((x_17078 < n__5838__auto___17077)){
(a[x_17078] = (0));

var G__17079 = (x_17078 + (1));
x_17078 = G__17079;
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

var G__17080 = (i + (1));
i = G__17080;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17084 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17084 = (function (alt_flag,flag,meta17085){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17085 = meta17085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17086,meta17085__$1){
var self__ = this;
var _17086__$1 = this;
return (new cljs.core.async.t17084(self__.alt_flag,self__.flag,meta17085__$1));
});})(flag))
;

cljs.core.async.t17084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17086){
var self__ = this;
var _17086__$1 = this;
return self__.meta17085;
});})(flag))
;

cljs.core.async.t17084.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17084.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17085","meta17085",2074606216,null)], null);
});})(flag))
;

cljs.core.async.t17084.cljs$lang$type = true;

cljs.core.async.t17084.cljs$lang$ctorStr = "cljs.core.async/t17084";

cljs.core.async.t17084.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs.core.async/t17084");
});})(flag))
;

cljs.core.async.__GT_t17084 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t17084(alt_flag__$1,flag__$1,meta17085){
return (new cljs.core.async.t17084(alt_flag__$1,flag__$1,meta17085));
});})(flag))
;

}

return (new cljs.core.async.t17084(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t17090 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17090 = (function (alt_handler,flag,cb,meta17091){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17091 = meta17091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17092,meta17091__$1){
var self__ = this;
var _17092__$1 = this;
return (new cljs.core.async.t17090(self__.alt_handler,self__.flag,self__.cb,meta17091__$1));
});

cljs.core.async.t17090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17092){
var self__ = this;
var _17092__$1 = this;
return self__.meta17091;
});

cljs.core.async.t17090.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17091","meta17091",-1501796318,null)], null);
});

cljs.core.async.t17090.cljs$lang$type = true;

cljs.core.async.t17090.cljs$lang$ctorStr = "cljs.core.async/t17090";

cljs.core.async.t17090.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs.core.async/t17090");
});

cljs.core.async.__GT_t17090 = (function cljs$core$async$alt_handler_$___GT_t17090(alt_handler__$1,flag__$1,cb__$1,meta17091){
return (new cljs.core.async.t17090(alt_handler__$1,flag__$1,cb__$1,meta17091));
});

}

return (new cljs.core.async.t17090(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17093_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17093_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17094_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17094_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4953__auto__ = wport;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17095 = (i + (1));
i = G__17095;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4953__auto__ = ret;
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__4941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4941__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4941__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
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
var argseq__5993__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5993__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17098){
var map__17099 = p__17098;
var map__17099__$1 = ((cljs.core.seq_QMARK_.call(null,map__17099))?cljs.core.apply.call(null,cljs.core.hash_map,map__17099):map__17099);
var opts = map__17099__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17096){
var G__17097 = cljs.core.first.call(null,seq17096);
var seq17096__$1 = cljs.core.next.call(null,seq17096);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17097,seq17096__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__17101 = arguments.length;
switch (G__17101) {
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
var c__7313__auto___17150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___17150){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___17150){
return (function (state_17125){
var state_val_17126 = (state_17125[(1)]);
if((state_val_17126 === (7))){
var inst_17121 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17127_17151 = state_17125__$1;
(statearr_17127_17151[(2)] = inst_17121);

(statearr_17127_17151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (1))){
var state_17125__$1 = state_17125;
var statearr_17128_17152 = state_17125__$1;
(statearr_17128_17152[(2)] = null);

(statearr_17128_17152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (4))){
var inst_17104 = (state_17125[(7)]);
var inst_17104__$1 = (state_17125[(2)]);
var inst_17105 = (inst_17104__$1 == null);
var state_17125__$1 = (function (){var statearr_17129 = state_17125;
(statearr_17129[(7)] = inst_17104__$1);

return statearr_17129;
})();
if(cljs.core.truth_(inst_17105)){
var statearr_17130_17153 = state_17125__$1;
(statearr_17130_17153[(1)] = (5));

} else {
var statearr_17131_17154 = state_17125__$1;
(statearr_17131_17154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (13))){
var state_17125__$1 = state_17125;
var statearr_17132_17155 = state_17125__$1;
(statearr_17132_17155[(2)] = null);

(statearr_17132_17155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (6))){
var inst_17104 = (state_17125[(7)]);
var state_17125__$1 = state_17125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17125__$1,(11),to,inst_17104);
} else {
if((state_val_17126 === (3))){
var inst_17123 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17125__$1,inst_17123);
} else {
if((state_val_17126 === (12))){
var state_17125__$1 = state_17125;
var statearr_17133_17156 = state_17125__$1;
(statearr_17133_17156[(2)] = null);

(statearr_17133_17156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (2))){
var state_17125__$1 = state_17125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17125__$1,(4),from);
} else {
if((state_val_17126 === (11))){
var inst_17114 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
if(cljs.core.truth_(inst_17114)){
var statearr_17134_17157 = state_17125__$1;
(statearr_17134_17157[(1)] = (12));

} else {
var statearr_17135_17158 = state_17125__$1;
(statearr_17135_17158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (9))){
var state_17125__$1 = state_17125;
var statearr_17136_17159 = state_17125__$1;
(statearr_17136_17159[(2)] = null);

(statearr_17136_17159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (5))){
var state_17125__$1 = state_17125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17137_17160 = state_17125__$1;
(statearr_17137_17160[(1)] = (8));

} else {
var statearr_17138_17161 = state_17125__$1;
(statearr_17138_17161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (14))){
var inst_17119 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17139_17162 = state_17125__$1;
(statearr_17139_17162[(2)] = inst_17119);

(statearr_17139_17162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (10))){
var inst_17111 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17140_17163 = state_17125__$1;
(statearr_17140_17163[(2)] = inst_17111);

(statearr_17140_17163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (8))){
var inst_17108 = cljs.core.async.close_BANG_.call(null,to);
var state_17125__$1 = state_17125;
var statearr_17141_17164 = state_17125__$1;
(statearr_17141_17164[(2)] = inst_17108);

(statearr_17141_17164[(1)] = (10));


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
});})(c__7313__auto___17150))
;
return ((function (switch__7251__auto__,c__7313__auto___17150){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_17145 = [null,null,null,null,null,null,null,null];
(statearr_17145[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_17145[(1)] = (1));

return statearr_17145;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_17125){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_17125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e17146){if((e17146 instanceof Object)){
var ex__7255__auto__ = e17146;
var statearr_17147_17165 = state_17125;
(statearr_17147_17165[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17166 = state_17125;
state_17125 = G__17166;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_17125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_17125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___17150))
})();
var state__7315__auto__ = (function (){var statearr_17148 = f__7314__auto__.call(null);
(statearr_17148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___17150);

return statearr_17148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___17150))
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
return (function (p__17350){
var vec__17351 = p__17350;
var v = cljs.core.nth.call(null,vec__17351,(0),null);
var p = cljs.core.nth.call(null,vec__17351,(1),null);
var job = vec__17351;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7313__auto___17533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___17533,res,vec__17351,v,p,job,jobs,results){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___17533,res,vec__17351,v,p,job,jobs,results){
return (function (state_17356){
var state_val_17357 = (state_17356[(1)]);
if((state_val_17357 === (1))){
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17356__$1,(2),res,v);
} else {
if((state_val_17357 === (2))){
var inst_17353 = (state_17356[(2)]);
var inst_17354 = cljs.core.async.close_BANG_.call(null,res);
var state_17356__$1 = (function (){var statearr_17358 = state_17356;
(statearr_17358[(7)] = inst_17353);

return statearr_17358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17356__$1,inst_17354);
} else {
return null;
}
}
});})(c__7313__auto___17533,res,vec__17351,v,p,job,jobs,results))
;
return ((function (switch__7251__auto__,c__7313__auto___17533,res,vec__17351,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0 = (function (){
var statearr_17362 = [null,null,null,null,null,null,null,null];
(statearr_17362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__);

(statearr_17362[(1)] = (1));

return statearr_17362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1 = (function (state_17356){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_17356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e17363){if((e17363 instanceof Object)){
var ex__7255__auto__ = e17363;
var statearr_17364_17534 = state_17356;
(statearr_17364_17534[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17535 = state_17356;
state_17356 = G__17535;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__ = function(state_17356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1.call(this,state_17356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___17533,res,vec__17351,v,p,job,jobs,results))
})();
var state__7315__auto__ = (function (){var statearr_17365 = f__7314__auto__.call(null);
(statearr_17365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___17533);

return statearr_17365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___17533,res,vec__17351,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17366){
var vec__17367 = p__17366;
var v = cljs.core.nth.call(null,vec__17367,(0),null);
var p = cljs.core.nth.call(null,vec__17367,(1),null);
var job = vec__17367;
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
var n__5838__auto___17536 = n;
var __17537 = (0);
while(true){
if((__17537 < n__5838__auto___17536)){
var G__17368_17538 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17368_17538) {
case "compute":
var c__7313__auto___17540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17537,c__7313__auto___17540,G__17368_17538,n__5838__auto___17536,jobs,results,process,async){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (__17537,c__7313__auto___17540,G__17368_17538,n__5838__auto___17536,jobs,results,process,async){
return (function (state_17381){
var state_val_17382 = (state_17381[(1)]);
if((state_val_17382 === (1))){
var state_17381__$1 = state_17381;
var statearr_17383_17541 = state_17381__$1;
(statearr_17383_17541[(2)] = null);

(statearr_17383_17541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17382 === (2))){
var state_17381__$1 = state_17381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17381__$1,(4),jobs);
} else {
if((state_val_17382 === (3))){
var inst_17379 = (state_17381[(2)]);
var state_17381__$1 = state_17381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17381__$1,inst_17379);
} else {
if((state_val_17382 === (4))){
var inst_17371 = (state_17381[(2)]);
var inst_17372 = process.call(null,inst_17371);
var state_17381__$1 = state_17381;
if(cljs.core.truth_(inst_17372)){
var statearr_17384_17542 = state_17381__$1;
(statearr_17384_17542[(1)] = (5));

} else {
var statearr_17385_17543 = state_17381__$1;
(statearr_17385_17543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17382 === (5))){
var state_17381__$1 = state_17381;
var statearr_17386_17544 = state_17381__$1;
(statearr_17386_17544[(2)] = null);

(statearr_17386_17544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17382 === (6))){
var state_17381__$1 = state_17381;
var statearr_17387_17545 = state_17381__$1;
(statearr_17387_17545[(2)] = null);

(statearr_17387_17545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17382 === (7))){
var inst_17377 = (state_17381[(2)]);
var state_17381__$1 = state_17381;
var statearr_17388_17546 = state_17381__$1;
(statearr_17388_17546[(2)] = inst_17377);

(statearr_17388_17546[(1)] = (3));


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
});})(__17537,c__7313__auto___17540,G__17368_17538,n__5838__auto___17536,jobs,results,process,async))
;
return ((function (__17537,switch__7251__auto__,c__7313__auto___17540,G__17368_17538,n__5838__auto___17536,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0 = (function (){
var statearr_17392 = [null,null,null,null,null,null,null];
(statearr_17392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__);

(statearr_17392[(1)] = (1));

return statearr_17392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1 = (function (state_17381){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_17381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e17393){if((e17393 instanceof Object)){
var ex__7255__auto__ = e17393;
var statearr_17394_17547 = state_17381;
(statearr_17394_17547[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17548 = state_17381;
state_17381 = G__17548;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__ = function(state_17381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1.call(this,state_17381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__;
})()
;})(__17537,switch__7251__auto__,c__7313__auto___17540,G__17368_17538,n__5838__auto___17536,jobs,results,process,async))
})();
var state__7315__auto__ = (function (){var statearr_17395 = f__7314__auto__.call(null);
(statearr_17395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___17540);

return statearr_17395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(__17537,c__7313__auto___17540,G__17368_17538,n__5838__auto___17536,jobs,results,process,async))
);


break;
case "async":
var c__7313__auto___17549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17537,c__7313__auto___17549,G__17368_17538,n__5838__auto___17536,jobs,results,process,async){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (__17537,c__7313__auto___17549,G__17368_17538,n__5838__auto___17536,jobs,results,process,async){
return (function (state_17408){
var state_val_17409 = (state_17408[(1)]);
if((state_val_17409 === (1))){
var state_17408__$1 = state_17408;
var statearr_17410_17550 = state_17408__$1;
(statearr_17410_17550[(2)] = null);

(statearr_17410_17550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (2))){
var state_17408__$1 = state_17408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17408__$1,(4),jobs);
} else {
if((state_val_17409 === (3))){
var inst_17406 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17408__$1,inst_17406);
} else {
if((state_val_17409 === (4))){
var inst_17398 = (state_17408[(2)]);
var inst_17399 = async.call(null,inst_17398);
var state_17408__$1 = state_17408;
if(cljs.core.truth_(inst_17399)){
var statearr_17411_17551 = state_17408__$1;
(statearr_17411_17551[(1)] = (5));

} else {
var statearr_17412_17552 = state_17408__$1;
(statearr_17412_17552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (5))){
var state_17408__$1 = state_17408;
var statearr_17413_17553 = state_17408__$1;
(statearr_17413_17553[(2)] = null);

(statearr_17413_17553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (6))){
var state_17408__$1 = state_17408;
var statearr_17414_17554 = state_17408__$1;
(statearr_17414_17554[(2)] = null);

(statearr_17414_17554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (7))){
var inst_17404 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17415_17555 = state_17408__$1;
(statearr_17415_17555[(2)] = inst_17404);

(statearr_17415_17555[(1)] = (3));


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
});})(__17537,c__7313__auto___17549,G__17368_17538,n__5838__auto___17536,jobs,results,process,async))
;
return ((function (__17537,switch__7251__auto__,c__7313__auto___17549,G__17368_17538,n__5838__auto___17536,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0 = (function (){
var statearr_17419 = [null,null,null,null,null,null,null];
(statearr_17419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__);

(statearr_17419[(1)] = (1));

return statearr_17419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1 = (function (state_17408){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_17408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e17420){if((e17420 instanceof Object)){
var ex__7255__auto__ = e17420;
var statearr_17421_17556 = state_17408;
(statearr_17421_17556[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17557 = state_17408;
state_17408 = G__17557;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__ = function(state_17408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1.call(this,state_17408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__;
})()
;})(__17537,switch__7251__auto__,c__7313__auto___17549,G__17368_17538,n__5838__auto___17536,jobs,results,process,async))
})();
var state__7315__auto__ = (function (){var statearr_17422 = f__7314__auto__.call(null);
(statearr_17422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___17549);

return statearr_17422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(__17537,c__7313__auto___17549,G__17368_17538,n__5838__auto___17536,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17558 = (__17537 + (1));
__17537 = G__17558;
continue;
} else {
}
break;
}

var c__7313__auto___17559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___17559,jobs,results,process,async){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___17559,jobs,results,process,async){
return (function (state_17444){
var state_val_17445 = (state_17444[(1)]);
if((state_val_17445 === (1))){
var state_17444__$1 = state_17444;
var statearr_17446_17560 = state_17444__$1;
(statearr_17446_17560[(2)] = null);

(statearr_17446_17560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (2))){
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17444__$1,(4),from);
} else {
if((state_val_17445 === (3))){
var inst_17442 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17444__$1,inst_17442);
} else {
if((state_val_17445 === (4))){
var inst_17425 = (state_17444[(7)]);
var inst_17425__$1 = (state_17444[(2)]);
var inst_17426 = (inst_17425__$1 == null);
var state_17444__$1 = (function (){var statearr_17447 = state_17444;
(statearr_17447[(7)] = inst_17425__$1);

return statearr_17447;
})();
if(cljs.core.truth_(inst_17426)){
var statearr_17448_17561 = state_17444__$1;
(statearr_17448_17561[(1)] = (5));

} else {
var statearr_17449_17562 = state_17444__$1;
(statearr_17449_17562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (5))){
var inst_17428 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17444__$1 = state_17444;
var statearr_17450_17563 = state_17444__$1;
(statearr_17450_17563[(2)] = inst_17428);

(statearr_17450_17563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (6))){
var inst_17430 = (state_17444[(8)]);
var inst_17425 = (state_17444[(7)]);
var inst_17430__$1 = cljs.core.async.chan.call(null,(1));
var inst_17431 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17432 = [inst_17425,inst_17430__$1];
var inst_17433 = (new cljs.core.PersistentVector(null,2,(5),inst_17431,inst_17432,null));
var state_17444__$1 = (function (){var statearr_17451 = state_17444;
(statearr_17451[(8)] = inst_17430__$1);

return statearr_17451;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17444__$1,(8),jobs,inst_17433);
} else {
if((state_val_17445 === (7))){
var inst_17440 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
var statearr_17452_17564 = state_17444__$1;
(statearr_17452_17564[(2)] = inst_17440);

(statearr_17452_17564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (8))){
var inst_17430 = (state_17444[(8)]);
var inst_17435 = (state_17444[(2)]);
var state_17444__$1 = (function (){var statearr_17453 = state_17444;
(statearr_17453[(9)] = inst_17435);

return statearr_17453;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17444__$1,(9),results,inst_17430);
} else {
if((state_val_17445 === (9))){
var inst_17437 = (state_17444[(2)]);
var state_17444__$1 = (function (){var statearr_17454 = state_17444;
(statearr_17454[(10)] = inst_17437);

return statearr_17454;
})();
var statearr_17455_17565 = state_17444__$1;
(statearr_17455_17565[(2)] = null);

(statearr_17455_17565[(1)] = (2));


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
});})(c__7313__auto___17559,jobs,results,process,async))
;
return ((function (switch__7251__auto__,c__7313__auto___17559,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0 = (function (){
var statearr_17459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__);

(statearr_17459[(1)] = (1));

return statearr_17459;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1 = (function (state_17444){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_17444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e17460){if((e17460 instanceof Object)){
var ex__7255__auto__ = e17460;
var statearr_17461_17566 = state_17444;
(statearr_17461_17566[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17567 = state_17444;
state_17444 = G__17567;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__ = function(state_17444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1.call(this,state_17444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___17559,jobs,results,process,async))
})();
var state__7315__auto__ = (function (){var statearr_17462 = f__7314__auto__.call(null);
(statearr_17462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___17559);

return statearr_17462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___17559,jobs,results,process,async))
);


var c__7313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto__,jobs,results,process,async){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto__,jobs,results,process,async){
return (function (state_17500){
var state_val_17501 = (state_17500[(1)]);
if((state_val_17501 === (7))){
var inst_17496 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
var statearr_17502_17568 = state_17500__$1;
(statearr_17502_17568[(2)] = inst_17496);

(statearr_17502_17568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (20))){
var state_17500__$1 = state_17500;
var statearr_17503_17569 = state_17500__$1;
(statearr_17503_17569[(2)] = null);

(statearr_17503_17569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (1))){
var state_17500__$1 = state_17500;
var statearr_17504_17570 = state_17500__$1;
(statearr_17504_17570[(2)] = null);

(statearr_17504_17570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (4))){
var inst_17465 = (state_17500[(7)]);
var inst_17465__$1 = (state_17500[(2)]);
var inst_17466 = (inst_17465__$1 == null);
var state_17500__$1 = (function (){var statearr_17505 = state_17500;
(statearr_17505[(7)] = inst_17465__$1);

return statearr_17505;
})();
if(cljs.core.truth_(inst_17466)){
var statearr_17506_17571 = state_17500__$1;
(statearr_17506_17571[(1)] = (5));

} else {
var statearr_17507_17572 = state_17500__$1;
(statearr_17507_17572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (15))){
var inst_17478 = (state_17500[(8)]);
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17500__$1,(18),to,inst_17478);
} else {
if((state_val_17501 === (21))){
var inst_17491 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
var statearr_17508_17573 = state_17500__$1;
(statearr_17508_17573[(2)] = inst_17491);

(statearr_17508_17573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (13))){
var inst_17493 = (state_17500[(2)]);
var state_17500__$1 = (function (){var statearr_17509 = state_17500;
(statearr_17509[(9)] = inst_17493);

return statearr_17509;
})();
var statearr_17510_17574 = state_17500__$1;
(statearr_17510_17574[(2)] = null);

(statearr_17510_17574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (6))){
var inst_17465 = (state_17500[(7)]);
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17500__$1,(11),inst_17465);
} else {
if((state_val_17501 === (17))){
var inst_17486 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
if(cljs.core.truth_(inst_17486)){
var statearr_17511_17575 = state_17500__$1;
(statearr_17511_17575[(1)] = (19));

} else {
var statearr_17512_17576 = state_17500__$1;
(statearr_17512_17576[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (3))){
var inst_17498 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17500__$1,inst_17498);
} else {
if((state_val_17501 === (12))){
var inst_17475 = (state_17500[(10)]);
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17500__$1,(14),inst_17475);
} else {
if((state_val_17501 === (2))){
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17500__$1,(4),results);
} else {
if((state_val_17501 === (19))){
var state_17500__$1 = state_17500;
var statearr_17513_17577 = state_17500__$1;
(statearr_17513_17577[(2)] = null);

(statearr_17513_17577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (11))){
var inst_17475 = (state_17500[(2)]);
var state_17500__$1 = (function (){var statearr_17514 = state_17500;
(statearr_17514[(10)] = inst_17475);

return statearr_17514;
})();
var statearr_17515_17578 = state_17500__$1;
(statearr_17515_17578[(2)] = null);

(statearr_17515_17578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (9))){
var state_17500__$1 = state_17500;
var statearr_17516_17579 = state_17500__$1;
(statearr_17516_17579[(2)] = null);

(statearr_17516_17579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (5))){
var state_17500__$1 = state_17500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17517_17580 = state_17500__$1;
(statearr_17517_17580[(1)] = (8));

} else {
var statearr_17518_17581 = state_17500__$1;
(statearr_17518_17581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (14))){
var inst_17478 = (state_17500[(8)]);
var inst_17480 = (state_17500[(11)]);
var inst_17478__$1 = (state_17500[(2)]);
var inst_17479 = (inst_17478__$1 == null);
var inst_17480__$1 = cljs.core.not.call(null,inst_17479);
var state_17500__$1 = (function (){var statearr_17519 = state_17500;
(statearr_17519[(8)] = inst_17478__$1);

(statearr_17519[(11)] = inst_17480__$1);

return statearr_17519;
})();
if(inst_17480__$1){
var statearr_17520_17582 = state_17500__$1;
(statearr_17520_17582[(1)] = (15));

} else {
var statearr_17521_17583 = state_17500__$1;
(statearr_17521_17583[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (16))){
var inst_17480 = (state_17500[(11)]);
var state_17500__$1 = state_17500;
var statearr_17522_17584 = state_17500__$1;
(statearr_17522_17584[(2)] = inst_17480);

(statearr_17522_17584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (10))){
var inst_17472 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
var statearr_17523_17585 = state_17500__$1;
(statearr_17523_17585[(2)] = inst_17472);

(statearr_17523_17585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (18))){
var inst_17483 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
var statearr_17524_17586 = state_17500__$1;
(statearr_17524_17586[(2)] = inst_17483);

(statearr_17524_17586[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (8))){
var inst_17469 = cljs.core.async.close_BANG_.call(null,to);
var state_17500__$1 = state_17500;
var statearr_17525_17587 = state_17500__$1;
(statearr_17525_17587[(2)] = inst_17469);

(statearr_17525_17587[(1)] = (10));


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
});})(c__7313__auto__,jobs,results,process,async))
;
return ((function (switch__7251__auto__,c__7313__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0 = (function (){
var statearr_17529 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__);

(statearr_17529[(1)] = (1));

return statearr_17529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1 = (function (state_17500){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_17500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e17530){if((e17530 instanceof Object)){
var ex__7255__auto__ = e17530;
var statearr_17531_17588 = state_17500;
(statearr_17531_17588[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17589 = state_17500;
state_17500 = G__17589;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__ = function(state_17500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1.call(this,state_17500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7252__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto__,jobs,results,process,async))
})();
var state__7315__auto__ = (function (){var statearr_17532 = f__7314__auto__.call(null);
(statearr_17532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto__);

return statearr_17532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto__,jobs,results,process,async))
);

return c__7313__auto__;
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
var G__17591 = arguments.length;
switch (G__17591) {
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
var G__17594 = arguments.length;
switch (G__17594) {
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
var G__17597 = arguments.length;
switch (G__17597) {
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
var c__7313__auto___17649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___17649,tc,fc){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___17649,tc,fc){
return (function (state_17623){
var state_val_17624 = (state_17623[(1)]);
if((state_val_17624 === (7))){
var inst_17619 = (state_17623[(2)]);
var state_17623__$1 = state_17623;
var statearr_17625_17650 = state_17623__$1;
(statearr_17625_17650[(2)] = inst_17619);

(statearr_17625_17650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (1))){
var state_17623__$1 = state_17623;
var statearr_17626_17651 = state_17623__$1;
(statearr_17626_17651[(2)] = null);

(statearr_17626_17651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (4))){
var inst_17600 = (state_17623[(7)]);
var inst_17600__$1 = (state_17623[(2)]);
var inst_17601 = (inst_17600__$1 == null);
var state_17623__$1 = (function (){var statearr_17627 = state_17623;
(statearr_17627[(7)] = inst_17600__$1);

return statearr_17627;
})();
if(cljs.core.truth_(inst_17601)){
var statearr_17628_17652 = state_17623__$1;
(statearr_17628_17652[(1)] = (5));

} else {
var statearr_17629_17653 = state_17623__$1;
(statearr_17629_17653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (13))){
var state_17623__$1 = state_17623;
var statearr_17630_17654 = state_17623__$1;
(statearr_17630_17654[(2)] = null);

(statearr_17630_17654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (6))){
var inst_17600 = (state_17623[(7)]);
var inst_17606 = p.call(null,inst_17600);
var state_17623__$1 = state_17623;
if(cljs.core.truth_(inst_17606)){
var statearr_17631_17655 = state_17623__$1;
(statearr_17631_17655[(1)] = (9));

} else {
var statearr_17632_17656 = state_17623__$1;
(statearr_17632_17656[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (3))){
var inst_17621 = (state_17623[(2)]);
var state_17623__$1 = state_17623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17623__$1,inst_17621);
} else {
if((state_val_17624 === (12))){
var state_17623__$1 = state_17623;
var statearr_17633_17657 = state_17623__$1;
(statearr_17633_17657[(2)] = null);

(statearr_17633_17657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (2))){
var state_17623__$1 = state_17623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17623__$1,(4),ch);
} else {
if((state_val_17624 === (11))){
var inst_17600 = (state_17623[(7)]);
var inst_17610 = (state_17623[(2)]);
var state_17623__$1 = state_17623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17623__$1,(8),inst_17610,inst_17600);
} else {
if((state_val_17624 === (9))){
var state_17623__$1 = state_17623;
var statearr_17634_17658 = state_17623__$1;
(statearr_17634_17658[(2)] = tc);

(statearr_17634_17658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (5))){
var inst_17603 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17604 = cljs.core.async.close_BANG_.call(null,fc);
var state_17623__$1 = (function (){var statearr_17635 = state_17623;
(statearr_17635[(8)] = inst_17603);

return statearr_17635;
})();
var statearr_17636_17659 = state_17623__$1;
(statearr_17636_17659[(2)] = inst_17604);

(statearr_17636_17659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (14))){
var inst_17617 = (state_17623[(2)]);
var state_17623__$1 = state_17623;
var statearr_17637_17660 = state_17623__$1;
(statearr_17637_17660[(2)] = inst_17617);

(statearr_17637_17660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (10))){
var state_17623__$1 = state_17623;
var statearr_17638_17661 = state_17623__$1;
(statearr_17638_17661[(2)] = fc);

(statearr_17638_17661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (8))){
var inst_17612 = (state_17623[(2)]);
var state_17623__$1 = state_17623;
if(cljs.core.truth_(inst_17612)){
var statearr_17639_17662 = state_17623__$1;
(statearr_17639_17662[(1)] = (12));

} else {
var statearr_17640_17663 = state_17623__$1;
(statearr_17640_17663[(1)] = (13));

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
});})(c__7313__auto___17649,tc,fc))
;
return ((function (switch__7251__auto__,c__7313__auto___17649,tc,fc){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_17644 = [null,null,null,null,null,null,null,null,null];
(statearr_17644[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_17644[(1)] = (1));

return statearr_17644;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_17623){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_17623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e17645){if((e17645 instanceof Object)){
var ex__7255__auto__ = e17645;
var statearr_17646_17664 = state_17623;
(statearr_17646_17664[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17665 = state_17623;
state_17623 = G__17665;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_17623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_17623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___17649,tc,fc))
})();
var state__7315__auto__ = (function (){var statearr_17647 = f__7314__auto__.call(null);
(statearr_17647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___17649);

return statearr_17647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___17649,tc,fc))
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
var c__7313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto__){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto__){
return (function (state_17712){
var state_val_17713 = (state_17712[(1)]);
if((state_val_17713 === (1))){
var inst_17698 = init;
var state_17712__$1 = (function (){var statearr_17714 = state_17712;
(statearr_17714[(7)] = inst_17698);

return statearr_17714;
})();
var statearr_17715_17730 = state_17712__$1;
(statearr_17715_17730[(2)] = null);

(statearr_17715_17730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (2))){
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17712__$1,(4),ch);
} else {
if((state_val_17713 === (3))){
var inst_17710 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17712__$1,inst_17710);
} else {
if((state_val_17713 === (4))){
var inst_17701 = (state_17712[(8)]);
var inst_17701__$1 = (state_17712[(2)]);
var inst_17702 = (inst_17701__$1 == null);
var state_17712__$1 = (function (){var statearr_17716 = state_17712;
(statearr_17716[(8)] = inst_17701__$1);

return statearr_17716;
})();
if(cljs.core.truth_(inst_17702)){
var statearr_17717_17731 = state_17712__$1;
(statearr_17717_17731[(1)] = (5));

} else {
var statearr_17718_17732 = state_17712__$1;
(statearr_17718_17732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (5))){
var inst_17698 = (state_17712[(7)]);
var state_17712__$1 = state_17712;
var statearr_17719_17733 = state_17712__$1;
(statearr_17719_17733[(2)] = inst_17698);

(statearr_17719_17733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (6))){
var inst_17698 = (state_17712[(7)]);
var inst_17701 = (state_17712[(8)]);
var inst_17705 = f.call(null,inst_17698,inst_17701);
var inst_17698__$1 = inst_17705;
var state_17712__$1 = (function (){var statearr_17720 = state_17712;
(statearr_17720[(7)] = inst_17698__$1);

return statearr_17720;
})();
var statearr_17721_17734 = state_17712__$1;
(statearr_17721_17734[(2)] = null);

(statearr_17721_17734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (7))){
var inst_17708 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17722_17735 = state_17712__$1;
(statearr_17722_17735[(2)] = inst_17708);

(statearr_17722_17735[(1)] = (3));


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
});})(c__7313__auto__))
;
return ((function (switch__7251__auto__,c__7313__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7252__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7252__auto____0 = (function (){
var statearr_17726 = [null,null,null,null,null,null,null,null,null];
(statearr_17726[(0)] = cljs$core$async$reduce_$_state_machine__7252__auto__);

(statearr_17726[(1)] = (1));

return statearr_17726;
});
var cljs$core$async$reduce_$_state_machine__7252__auto____1 = (function (state_17712){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_17712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e17727){if((e17727 instanceof Object)){
var ex__7255__auto__ = e17727;
var statearr_17728_17736 = state_17712;
(statearr_17728_17736[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17737 = state_17712;
state_17712 = G__17737;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7252__auto__ = function(state_17712){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7252__auto____1.call(this,state_17712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7252__auto____0;
cljs$core$async$reduce_$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7252__auto____1;
return cljs$core$async$reduce_$_state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto__))
})();
var state__7315__auto__ = (function (){var statearr_17729 = f__7314__auto__.call(null);
(statearr_17729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto__);

return statearr_17729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto__))
);

return c__7313__auto__;
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
var G__17739 = arguments.length;
switch (G__17739) {
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
var c__7313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto__){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto__){
return (function (state_17764){
var state_val_17765 = (state_17764[(1)]);
if((state_val_17765 === (7))){
var inst_17746 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
var statearr_17766_17790 = state_17764__$1;
(statearr_17766_17790[(2)] = inst_17746);

(statearr_17766_17790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (1))){
var inst_17740 = cljs.core.seq.call(null,coll);
var inst_17741 = inst_17740;
var state_17764__$1 = (function (){var statearr_17767 = state_17764;
(statearr_17767[(7)] = inst_17741);

return statearr_17767;
})();
var statearr_17768_17791 = state_17764__$1;
(statearr_17768_17791[(2)] = null);

(statearr_17768_17791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (4))){
var inst_17741 = (state_17764[(7)]);
var inst_17744 = cljs.core.first.call(null,inst_17741);
var state_17764__$1 = state_17764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17764__$1,(7),ch,inst_17744);
} else {
if((state_val_17765 === (13))){
var inst_17758 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
var statearr_17769_17792 = state_17764__$1;
(statearr_17769_17792[(2)] = inst_17758);

(statearr_17769_17792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (6))){
var inst_17749 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
if(cljs.core.truth_(inst_17749)){
var statearr_17770_17793 = state_17764__$1;
(statearr_17770_17793[(1)] = (8));

} else {
var statearr_17771_17794 = state_17764__$1;
(statearr_17771_17794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (3))){
var inst_17762 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17764__$1,inst_17762);
} else {
if((state_val_17765 === (12))){
var state_17764__$1 = state_17764;
var statearr_17772_17795 = state_17764__$1;
(statearr_17772_17795[(2)] = null);

(statearr_17772_17795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (2))){
var inst_17741 = (state_17764[(7)]);
var state_17764__$1 = state_17764;
if(cljs.core.truth_(inst_17741)){
var statearr_17773_17796 = state_17764__$1;
(statearr_17773_17796[(1)] = (4));

} else {
var statearr_17774_17797 = state_17764__$1;
(statearr_17774_17797[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (11))){
var inst_17755 = cljs.core.async.close_BANG_.call(null,ch);
var state_17764__$1 = state_17764;
var statearr_17775_17798 = state_17764__$1;
(statearr_17775_17798[(2)] = inst_17755);

(statearr_17775_17798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (9))){
var state_17764__$1 = state_17764;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17776_17799 = state_17764__$1;
(statearr_17776_17799[(1)] = (11));

} else {
var statearr_17777_17800 = state_17764__$1;
(statearr_17777_17800[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (5))){
var inst_17741 = (state_17764[(7)]);
var state_17764__$1 = state_17764;
var statearr_17778_17801 = state_17764__$1;
(statearr_17778_17801[(2)] = inst_17741);

(statearr_17778_17801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (10))){
var inst_17760 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
var statearr_17779_17802 = state_17764__$1;
(statearr_17779_17802[(2)] = inst_17760);

(statearr_17779_17802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (8))){
var inst_17741 = (state_17764[(7)]);
var inst_17751 = cljs.core.next.call(null,inst_17741);
var inst_17741__$1 = inst_17751;
var state_17764__$1 = (function (){var statearr_17780 = state_17764;
(statearr_17780[(7)] = inst_17741__$1);

return statearr_17780;
})();
var statearr_17781_17803 = state_17764__$1;
(statearr_17781_17803[(2)] = null);

(statearr_17781_17803[(1)] = (2));


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
});})(c__7313__auto__))
;
return ((function (switch__7251__auto__,c__7313__auto__){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_17785 = [null,null,null,null,null,null,null,null];
(statearr_17785[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_17785[(1)] = (1));

return statearr_17785;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_17764){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_17764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e17786){if((e17786 instanceof Object)){
var ex__7255__auto__ = e17786;
var statearr_17787_17804 = state_17764;
(statearr_17787_17804[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17805 = state_17764;
state_17764 = G__17805;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_17764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_17764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto__))
})();
var state__7315__auto__ = (function (){var statearr_17788 = f__7314__auto__.call(null);
(statearr_17788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto__);

return statearr_17788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto__))
);

return c__7313__auto__;
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

cljs.core.async.Mux = (function (){var obj17807 = {};
return obj17807;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4941__auto__ = _;
if(and__4941__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4941__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5589__auto__ = (((_ == null))?null:_);
return (function (){var or__4953__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj17809 = {};
return obj17809;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4941__auto__ = m;
if(and__4941__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4941__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5589__auto__ = (((m == null))?null:m);
return (function (){var or__4953__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4941__auto__ = m;
if(and__4941__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5589__auto__ = (((m == null))?null:m);
return (function (){var or__4953__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4941__auto__ = m;
if(and__4941__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4941__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5589__auto__ = (((m == null))?null:m);
return (function (){var or__4953__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
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
if(typeof cljs.core.async.t18031 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18031 = (function (mult,ch,cs,meta18032){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18032 = meta18032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18033,meta18032__$1){
var self__ = this;
var _18033__$1 = this;
return (new cljs.core.async.t18031(self__.mult,self__.ch,self__.cs,meta18032__$1));
});})(cs))
;

cljs.core.async.t18031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18033){
var self__ = this;
var _18033__$1 = this;
return self__.meta18032;
});})(cs))
;

cljs.core.async.t18031.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18031.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18031.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18031.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18031.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18031.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18032","meta18032",1446708335,null)], null);
});})(cs))
;

cljs.core.async.t18031.cljs$lang$type = true;

cljs.core.async.t18031.cljs$lang$ctorStr = "cljs.core.async/t18031";

cljs.core.async.t18031.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs.core.async/t18031");
});})(cs))
;

cljs.core.async.__GT_t18031 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t18031(mult__$1,ch__$1,cs__$1,meta18032){
return (new cljs.core.async.t18031(mult__$1,ch__$1,cs__$1,meta18032));
});})(cs))
;

}

return (new cljs.core.async.t18031(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7313__auto___18252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___18252,cs,m,dchan,dctr,done){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___18252,cs,m,dchan,dctr,done){
return (function (state_18164){
var state_val_18165 = (state_18164[(1)]);
if((state_val_18165 === (7))){
var inst_18160 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18166_18253 = state_18164__$1;
(statearr_18166_18253[(2)] = inst_18160);

(statearr_18166_18253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (20))){
var inst_18065 = (state_18164[(7)]);
var inst_18075 = cljs.core.first.call(null,inst_18065);
var inst_18076 = cljs.core.nth.call(null,inst_18075,(0),null);
var inst_18077 = cljs.core.nth.call(null,inst_18075,(1),null);
var state_18164__$1 = (function (){var statearr_18167 = state_18164;
(statearr_18167[(8)] = inst_18076);

return statearr_18167;
})();
if(cljs.core.truth_(inst_18077)){
var statearr_18168_18254 = state_18164__$1;
(statearr_18168_18254[(1)] = (22));

} else {
var statearr_18169_18255 = state_18164__$1;
(statearr_18169_18255[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (27))){
var inst_18105 = (state_18164[(9)]);
var inst_18112 = (state_18164[(10)]);
var inst_18107 = (state_18164[(11)]);
var inst_18036 = (state_18164[(12)]);
var inst_18112__$1 = cljs.core._nth.call(null,inst_18105,inst_18107);
var inst_18113 = cljs.core.async.put_BANG_.call(null,inst_18112__$1,inst_18036,done);
var state_18164__$1 = (function (){var statearr_18170 = state_18164;
(statearr_18170[(10)] = inst_18112__$1);

return statearr_18170;
})();
if(cljs.core.truth_(inst_18113)){
var statearr_18171_18256 = state_18164__$1;
(statearr_18171_18256[(1)] = (30));

} else {
var statearr_18172_18257 = state_18164__$1;
(statearr_18172_18257[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (1))){
var state_18164__$1 = state_18164;
var statearr_18173_18258 = state_18164__$1;
(statearr_18173_18258[(2)] = null);

(statearr_18173_18258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (24))){
var inst_18065 = (state_18164[(7)]);
var inst_18082 = (state_18164[(2)]);
var inst_18083 = cljs.core.next.call(null,inst_18065);
var inst_18045 = inst_18083;
var inst_18046 = null;
var inst_18047 = (0);
var inst_18048 = (0);
var state_18164__$1 = (function (){var statearr_18174 = state_18164;
(statearr_18174[(13)] = inst_18047);

(statearr_18174[(14)] = inst_18045);

(statearr_18174[(15)] = inst_18048);

(statearr_18174[(16)] = inst_18046);

(statearr_18174[(17)] = inst_18082);

return statearr_18174;
})();
var statearr_18175_18259 = state_18164__$1;
(statearr_18175_18259[(2)] = null);

(statearr_18175_18259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (39))){
var state_18164__$1 = state_18164;
var statearr_18179_18260 = state_18164__$1;
(statearr_18179_18260[(2)] = null);

(statearr_18179_18260[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (4))){
var inst_18036 = (state_18164[(12)]);
var inst_18036__$1 = (state_18164[(2)]);
var inst_18037 = (inst_18036__$1 == null);
var state_18164__$1 = (function (){var statearr_18180 = state_18164;
(statearr_18180[(12)] = inst_18036__$1);

return statearr_18180;
})();
if(cljs.core.truth_(inst_18037)){
var statearr_18181_18261 = state_18164__$1;
(statearr_18181_18261[(1)] = (5));

} else {
var statearr_18182_18262 = state_18164__$1;
(statearr_18182_18262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (15))){
var inst_18047 = (state_18164[(13)]);
var inst_18045 = (state_18164[(14)]);
var inst_18048 = (state_18164[(15)]);
var inst_18046 = (state_18164[(16)]);
var inst_18061 = (state_18164[(2)]);
var inst_18062 = (inst_18048 + (1));
var tmp18176 = inst_18047;
var tmp18177 = inst_18045;
var tmp18178 = inst_18046;
var inst_18045__$1 = tmp18177;
var inst_18046__$1 = tmp18178;
var inst_18047__$1 = tmp18176;
var inst_18048__$1 = inst_18062;
var state_18164__$1 = (function (){var statearr_18183 = state_18164;
(statearr_18183[(13)] = inst_18047__$1);

(statearr_18183[(14)] = inst_18045__$1);

(statearr_18183[(15)] = inst_18048__$1);

(statearr_18183[(16)] = inst_18046__$1);

(statearr_18183[(18)] = inst_18061);

return statearr_18183;
})();
var statearr_18184_18263 = state_18164__$1;
(statearr_18184_18263[(2)] = null);

(statearr_18184_18263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (21))){
var inst_18086 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18188_18264 = state_18164__$1;
(statearr_18188_18264[(2)] = inst_18086);

(statearr_18188_18264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (31))){
var inst_18112 = (state_18164[(10)]);
var inst_18116 = done.call(null,null);
var inst_18117 = cljs.core.async.untap_STAR_.call(null,m,inst_18112);
var state_18164__$1 = (function (){var statearr_18189 = state_18164;
(statearr_18189[(19)] = inst_18116);

return statearr_18189;
})();
var statearr_18190_18265 = state_18164__$1;
(statearr_18190_18265[(2)] = inst_18117);

(statearr_18190_18265[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (32))){
var inst_18106 = (state_18164[(20)]);
var inst_18104 = (state_18164[(21)]);
var inst_18105 = (state_18164[(9)]);
var inst_18107 = (state_18164[(11)]);
var inst_18119 = (state_18164[(2)]);
var inst_18120 = (inst_18107 + (1));
var tmp18185 = inst_18106;
var tmp18186 = inst_18104;
var tmp18187 = inst_18105;
var inst_18104__$1 = tmp18186;
var inst_18105__$1 = tmp18187;
var inst_18106__$1 = tmp18185;
var inst_18107__$1 = inst_18120;
var state_18164__$1 = (function (){var statearr_18191 = state_18164;
(statearr_18191[(22)] = inst_18119);

(statearr_18191[(20)] = inst_18106__$1);

(statearr_18191[(21)] = inst_18104__$1);

(statearr_18191[(9)] = inst_18105__$1);

(statearr_18191[(11)] = inst_18107__$1);

return statearr_18191;
})();
var statearr_18192_18266 = state_18164__$1;
(statearr_18192_18266[(2)] = null);

(statearr_18192_18266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (40))){
var inst_18132 = (state_18164[(23)]);
var inst_18136 = done.call(null,null);
var inst_18137 = cljs.core.async.untap_STAR_.call(null,m,inst_18132);
var state_18164__$1 = (function (){var statearr_18193 = state_18164;
(statearr_18193[(24)] = inst_18136);

return statearr_18193;
})();
var statearr_18194_18267 = state_18164__$1;
(statearr_18194_18267[(2)] = inst_18137);

(statearr_18194_18267[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (33))){
var inst_18123 = (state_18164[(25)]);
var inst_18125 = cljs.core.chunked_seq_QMARK_.call(null,inst_18123);
var state_18164__$1 = state_18164;
if(inst_18125){
var statearr_18195_18268 = state_18164__$1;
(statearr_18195_18268[(1)] = (36));

} else {
var statearr_18196_18269 = state_18164__$1;
(statearr_18196_18269[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (13))){
var inst_18055 = (state_18164[(26)]);
var inst_18058 = cljs.core.async.close_BANG_.call(null,inst_18055);
var state_18164__$1 = state_18164;
var statearr_18197_18270 = state_18164__$1;
(statearr_18197_18270[(2)] = inst_18058);

(statearr_18197_18270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (22))){
var inst_18076 = (state_18164[(8)]);
var inst_18079 = cljs.core.async.close_BANG_.call(null,inst_18076);
var state_18164__$1 = state_18164;
var statearr_18198_18271 = state_18164__$1;
(statearr_18198_18271[(2)] = inst_18079);

(statearr_18198_18271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (36))){
var inst_18123 = (state_18164[(25)]);
var inst_18127 = cljs.core.chunk_first.call(null,inst_18123);
var inst_18128 = cljs.core.chunk_rest.call(null,inst_18123);
var inst_18129 = cljs.core.count.call(null,inst_18127);
var inst_18104 = inst_18128;
var inst_18105 = inst_18127;
var inst_18106 = inst_18129;
var inst_18107 = (0);
var state_18164__$1 = (function (){var statearr_18199 = state_18164;
(statearr_18199[(20)] = inst_18106);

(statearr_18199[(21)] = inst_18104);

(statearr_18199[(9)] = inst_18105);

(statearr_18199[(11)] = inst_18107);

return statearr_18199;
})();
var statearr_18200_18272 = state_18164__$1;
(statearr_18200_18272[(2)] = null);

(statearr_18200_18272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (41))){
var inst_18123 = (state_18164[(25)]);
var inst_18139 = (state_18164[(2)]);
var inst_18140 = cljs.core.next.call(null,inst_18123);
var inst_18104 = inst_18140;
var inst_18105 = null;
var inst_18106 = (0);
var inst_18107 = (0);
var state_18164__$1 = (function (){var statearr_18201 = state_18164;
(statearr_18201[(27)] = inst_18139);

(statearr_18201[(20)] = inst_18106);

(statearr_18201[(21)] = inst_18104);

(statearr_18201[(9)] = inst_18105);

(statearr_18201[(11)] = inst_18107);

return statearr_18201;
})();
var statearr_18202_18273 = state_18164__$1;
(statearr_18202_18273[(2)] = null);

(statearr_18202_18273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (43))){
var state_18164__$1 = state_18164;
var statearr_18203_18274 = state_18164__$1;
(statearr_18203_18274[(2)] = null);

(statearr_18203_18274[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (29))){
var inst_18148 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18204_18275 = state_18164__$1;
(statearr_18204_18275[(2)] = inst_18148);

(statearr_18204_18275[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (44))){
var inst_18157 = (state_18164[(2)]);
var state_18164__$1 = (function (){var statearr_18205 = state_18164;
(statearr_18205[(28)] = inst_18157);

return statearr_18205;
})();
var statearr_18206_18276 = state_18164__$1;
(statearr_18206_18276[(2)] = null);

(statearr_18206_18276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (6))){
var inst_18096 = (state_18164[(29)]);
var inst_18095 = cljs.core.deref.call(null,cs);
var inst_18096__$1 = cljs.core.keys.call(null,inst_18095);
var inst_18097 = cljs.core.count.call(null,inst_18096__$1);
var inst_18098 = cljs.core.reset_BANG_.call(null,dctr,inst_18097);
var inst_18103 = cljs.core.seq.call(null,inst_18096__$1);
var inst_18104 = inst_18103;
var inst_18105 = null;
var inst_18106 = (0);
var inst_18107 = (0);
var state_18164__$1 = (function (){var statearr_18207 = state_18164;
(statearr_18207[(20)] = inst_18106);

(statearr_18207[(21)] = inst_18104);

(statearr_18207[(9)] = inst_18105);

(statearr_18207[(30)] = inst_18098);

(statearr_18207[(11)] = inst_18107);

(statearr_18207[(29)] = inst_18096__$1);

return statearr_18207;
})();
var statearr_18208_18277 = state_18164__$1;
(statearr_18208_18277[(2)] = null);

(statearr_18208_18277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (28))){
var inst_18123 = (state_18164[(25)]);
var inst_18104 = (state_18164[(21)]);
var inst_18123__$1 = cljs.core.seq.call(null,inst_18104);
var state_18164__$1 = (function (){var statearr_18209 = state_18164;
(statearr_18209[(25)] = inst_18123__$1);

return statearr_18209;
})();
if(inst_18123__$1){
var statearr_18210_18278 = state_18164__$1;
(statearr_18210_18278[(1)] = (33));

} else {
var statearr_18211_18279 = state_18164__$1;
(statearr_18211_18279[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (25))){
var inst_18106 = (state_18164[(20)]);
var inst_18107 = (state_18164[(11)]);
var inst_18109 = (inst_18107 < inst_18106);
var inst_18110 = inst_18109;
var state_18164__$1 = state_18164;
if(cljs.core.truth_(inst_18110)){
var statearr_18212_18280 = state_18164__$1;
(statearr_18212_18280[(1)] = (27));

} else {
var statearr_18213_18281 = state_18164__$1;
(statearr_18213_18281[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (34))){
var state_18164__$1 = state_18164;
var statearr_18214_18282 = state_18164__$1;
(statearr_18214_18282[(2)] = null);

(statearr_18214_18282[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (17))){
var state_18164__$1 = state_18164;
var statearr_18215_18283 = state_18164__$1;
(statearr_18215_18283[(2)] = null);

(statearr_18215_18283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (3))){
var inst_18162 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18164__$1,inst_18162);
} else {
if((state_val_18165 === (12))){
var inst_18091 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18216_18284 = state_18164__$1;
(statearr_18216_18284[(2)] = inst_18091);

(statearr_18216_18284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (2))){
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18164__$1,(4),ch);
} else {
if((state_val_18165 === (23))){
var state_18164__$1 = state_18164;
var statearr_18217_18285 = state_18164__$1;
(statearr_18217_18285[(2)] = null);

(statearr_18217_18285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (35))){
var inst_18146 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18218_18286 = state_18164__$1;
(statearr_18218_18286[(2)] = inst_18146);

(statearr_18218_18286[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (19))){
var inst_18065 = (state_18164[(7)]);
var inst_18069 = cljs.core.chunk_first.call(null,inst_18065);
var inst_18070 = cljs.core.chunk_rest.call(null,inst_18065);
var inst_18071 = cljs.core.count.call(null,inst_18069);
var inst_18045 = inst_18070;
var inst_18046 = inst_18069;
var inst_18047 = inst_18071;
var inst_18048 = (0);
var state_18164__$1 = (function (){var statearr_18219 = state_18164;
(statearr_18219[(13)] = inst_18047);

(statearr_18219[(14)] = inst_18045);

(statearr_18219[(15)] = inst_18048);

(statearr_18219[(16)] = inst_18046);

return statearr_18219;
})();
var statearr_18220_18287 = state_18164__$1;
(statearr_18220_18287[(2)] = null);

(statearr_18220_18287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (11))){
var inst_18045 = (state_18164[(14)]);
var inst_18065 = (state_18164[(7)]);
var inst_18065__$1 = cljs.core.seq.call(null,inst_18045);
var state_18164__$1 = (function (){var statearr_18221 = state_18164;
(statearr_18221[(7)] = inst_18065__$1);

return statearr_18221;
})();
if(inst_18065__$1){
var statearr_18222_18288 = state_18164__$1;
(statearr_18222_18288[(1)] = (16));

} else {
var statearr_18223_18289 = state_18164__$1;
(statearr_18223_18289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (9))){
var inst_18093 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18224_18290 = state_18164__$1;
(statearr_18224_18290[(2)] = inst_18093);

(statearr_18224_18290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (5))){
var inst_18043 = cljs.core.deref.call(null,cs);
var inst_18044 = cljs.core.seq.call(null,inst_18043);
var inst_18045 = inst_18044;
var inst_18046 = null;
var inst_18047 = (0);
var inst_18048 = (0);
var state_18164__$1 = (function (){var statearr_18225 = state_18164;
(statearr_18225[(13)] = inst_18047);

(statearr_18225[(14)] = inst_18045);

(statearr_18225[(15)] = inst_18048);

(statearr_18225[(16)] = inst_18046);

return statearr_18225;
})();
var statearr_18226_18291 = state_18164__$1;
(statearr_18226_18291[(2)] = null);

(statearr_18226_18291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (14))){
var state_18164__$1 = state_18164;
var statearr_18227_18292 = state_18164__$1;
(statearr_18227_18292[(2)] = null);

(statearr_18227_18292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (45))){
var inst_18154 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18228_18293 = state_18164__$1;
(statearr_18228_18293[(2)] = inst_18154);

(statearr_18228_18293[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (26))){
var inst_18096 = (state_18164[(29)]);
var inst_18150 = (state_18164[(2)]);
var inst_18151 = cljs.core.seq.call(null,inst_18096);
var state_18164__$1 = (function (){var statearr_18229 = state_18164;
(statearr_18229[(31)] = inst_18150);

return statearr_18229;
})();
if(inst_18151){
var statearr_18230_18294 = state_18164__$1;
(statearr_18230_18294[(1)] = (42));

} else {
var statearr_18231_18295 = state_18164__$1;
(statearr_18231_18295[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (16))){
var inst_18065 = (state_18164[(7)]);
var inst_18067 = cljs.core.chunked_seq_QMARK_.call(null,inst_18065);
var state_18164__$1 = state_18164;
if(inst_18067){
var statearr_18232_18296 = state_18164__$1;
(statearr_18232_18296[(1)] = (19));

} else {
var statearr_18233_18297 = state_18164__$1;
(statearr_18233_18297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (38))){
var inst_18143 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18234_18298 = state_18164__$1;
(statearr_18234_18298[(2)] = inst_18143);

(statearr_18234_18298[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (30))){
var state_18164__$1 = state_18164;
var statearr_18235_18299 = state_18164__$1;
(statearr_18235_18299[(2)] = null);

(statearr_18235_18299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (10))){
var inst_18048 = (state_18164[(15)]);
var inst_18046 = (state_18164[(16)]);
var inst_18054 = cljs.core._nth.call(null,inst_18046,inst_18048);
var inst_18055 = cljs.core.nth.call(null,inst_18054,(0),null);
var inst_18056 = cljs.core.nth.call(null,inst_18054,(1),null);
var state_18164__$1 = (function (){var statearr_18236 = state_18164;
(statearr_18236[(26)] = inst_18055);

return statearr_18236;
})();
if(cljs.core.truth_(inst_18056)){
var statearr_18237_18300 = state_18164__$1;
(statearr_18237_18300[(1)] = (13));

} else {
var statearr_18238_18301 = state_18164__$1;
(statearr_18238_18301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (18))){
var inst_18089 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18239_18302 = state_18164__$1;
(statearr_18239_18302[(2)] = inst_18089);

(statearr_18239_18302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (42))){
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18164__$1,(45),dchan);
} else {
if((state_val_18165 === (37))){
var inst_18123 = (state_18164[(25)]);
var inst_18132 = (state_18164[(23)]);
var inst_18036 = (state_18164[(12)]);
var inst_18132__$1 = cljs.core.first.call(null,inst_18123);
var inst_18133 = cljs.core.async.put_BANG_.call(null,inst_18132__$1,inst_18036,done);
var state_18164__$1 = (function (){var statearr_18240 = state_18164;
(statearr_18240[(23)] = inst_18132__$1);

return statearr_18240;
})();
if(cljs.core.truth_(inst_18133)){
var statearr_18241_18303 = state_18164__$1;
(statearr_18241_18303[(1)] = (39));

} else {
var statearr_18242_18304 = state_18164__$1;
(statearr_18242_18304[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18165 === (8))){
var inst_18047 = (state_18164[(13)]);
var inst_18048 = (state_18164[(15)]);
var inst_18050 = (inst_18048 < inst_18047);
var inst_18051 = inst_18050;
var state_18164__$1 = state_18164;
if(cljs.core.truth_(inst_18051)){
var statearr_18243_18305 = state_18164__$1;
(statearr_18243_18305[(1)] = (10));

} else {
var statearr_18244_18306 = state_18164__$1;
(statearr_18244_18306[(1)] = (11));

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
});})(c__7313__auto___18252,cs,m,dchan,dctr,done))
;
return ((function (switch__7251__auto__,c__7313__auto___18252,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7252__auto__ = null;
var cljs$core$async$mult_$_state_machine__7252__auto____0 = (function (){
var statearr_18248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18248[(0)] = cljs$core$async$mult_$_state_machine__7252__auto__);

(statearr_18248[(1)] = (1));

return statearr_18248;
});
var cljs$core$async$mult_$_state_machine__7252__auto____1 = (function (state_18164){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_18164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e18249){if((e18249 instanceof Object)){
var ex__7255__auto__ = e18249;
var statearr_18250_18307 = state_18164;
(statearr_18250_18307[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18308 = state_18164;
state_18164 = G__18308;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7252__auto__ = function(state_18164){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7252__auto____1.call(this,state_18164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7252__auto____0;
cljs$core$async$mult_$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7252__auto____1;
return cljs$core$async$mult_$_state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___18252,cs,m,dchan,dctr,done))
})();
var state__7315__auto__ = (function (){var statearr_18251 = f__7314__auto__.call(null);
(statearr_18251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___18252);

return statearr_18251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___18252,cs,m,dchan,dctr,done))
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
var G__18310 = arguments.length;
switch (G__18310) {
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

cljs.core.async.Mix = (function (){var obj18313 = {};
return obj18313;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4941__auto__ = m;
if(and__4941__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5589__auto__ = (((m == null))?null:m);
return (function (){var or__4953__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4941__auto__ = m;
if(and__4941__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5589__auto__ = (((m == null))?null:m);
return (function (){var or__4953__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4941__auto__ = m;
if(and__4941__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4941__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5589__auto__ = (((m == null))?null:m);
return (function (){var or__4953__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4941__auto__ = m;
if(and__4941__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5589__auto__ = (((m == null))?null:m);
return (function (){var or__4953__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4941__auto__ = m;
if(and__4941__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5589__auto__ = (((m == null))?null:m);
return (function (){var or__4953__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5993__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5993__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18318){
var map__18319 = p__18318;
var map__18319__$1 = ((cljs.core.seq_QMARK_.call(null,map__18319))?cljs.core.apply.call(null,cljs.core.hash_map,map__18319):map__18319);
var opts = map__18319__$1;
var statearr_18320_18323 = state;
(statearr_18320_18323[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__18319,map__18319__$1,opts){
return (function (val){
var statearr_18321_18324 = state;
(statearr_18321_18324[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18319,map__18319__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_18322_18325 = state;
(statearr_18322_18325[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18314){
var G__18315 = cljs.core.first.call(null,seq18314);
var seq18314__$1 = cljs.core.next.call(null,seq18314);
var G__18316 = cljs.core.first.call(null,seq18314__$1);
var seq18314__$2 = cljs.core.next.call(null,seq18314__$1);
var G__18317 = cljs.core.first.call(null,seq18314__$2);
var seq18314__$3 = cljs.core.next.call(null,seq18314__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18315,G__18316,G__18317,seq18314__$3);
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
if(typeof cljs.core.async.t18445 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18445 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18446){
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
this.meta18446 = meta18446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18447,meta18446__$1){
var self__ = this;
var _18447__$1 = this;
return (new cljs.core.async.t18445(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18446__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18447){
var self__ = this;
var _18447__$1 = this;
return self__.meta18446;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18445.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18445.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18445.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18445.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18445.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18445.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18445.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18445.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18446","meta18446",777017505,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18445.cljs$lang$type = true;

cljs.core.async.t18445.cljs$lang$ctorStr = "cljs.core.async/t18445";

cljs.core.async.t18445.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs.core.async/t18445");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18445 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t18445(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18446){
return (new cljs.core.async.t18445(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18446));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18445(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7313__auto___18564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___18564,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___18564,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18517){
var state_val_18518 = (state_18517[(1)]);
if((state_val_18518 === (7))){
var inst_18461 = (state_18517[(7)]);
var inst_18466 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18461);
var state_18517__$1 = state_18517;
var statearr_18519_18565 = state_18517__$1;
(statearr_18519_18565[(2)] = inst_18466);

(statearr_18519_18565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (20))){
var inst_18476 = (state_18517[(8)]);
var state_18517__$1 = state_18517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18517__$1,(23),out,inst_18476);
} else {
if((state_val_18518 === (1))){
var inst_18451 = (state_18517[(9)]);
var inst_18451__$1 = calc_state.call(null);
var inst_18452 = cljs.core.seq_QMARK_.call(null,inst_18451__$1);
var state_18517__$1 = (function (){var statearr_18520 = state_18517;
(statearr_18520[(9)] = inst_18451__$1);

return statearr_18520;
})();
if(inst_18452){
var statearr_18521_18566 = state_18517__$1;
(statearr_18521_18566[(1)] = (2));

} else {
var statearr_18522_18567 = state_18517__$1;
(statearr_18522_18567[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (24))){
var inst_18469 = (state_18517[(10)]);
var inst_18461 = inst_18469;
var state_18517__$1 = (function (){var statearr_18523 = state_18517;
(statearr_18523[(7)] = inst_18461);

return statearr_18523;
})();
var statearr_18524_18568 = state_18517__$1;
(statearr_18524_18568[(2)] = null);

(statearr_18524_18568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (4))){
var inst_18451 = (state_18517[(9)]);
var inst_18457 = (state_18517[(2)]);
var inst_18458 = cljs.core.get.call(null,inst_18457,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18459 = cljs.core.get.call(null,inst_18457,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18460 = cljs.core.get.call(null,inst_18457,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18461 = inst_18451;
var state_18517__$1 = (function (){var statearr_18525 = state_18517;
(statearr_18525[(7)] = inst_18461);

(statearr_18525[(11)] = inst_18458);

(statearr_18525[(12)] = inst_18459);

(statearr_18525[(13)] = inst_18460);

return statearr_18525;
})();
var statearr_18526_18569 = state_18517__$1;
(statearr_18526_18569[(2)] = null);

(statearr_18526_18569[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (15))){
var state_18517__$1 = state_18517;
var statearr_18527_18570 = state_18517__$1;
(statearr_18527_18570[(2)] = null);

(statearr_18527_18570[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (21))){
var inst_18469 = (state_18517[(10)]);
var inst_18461 = inst_18469;
var state_18517__$1 = (function (){var statearr_18528 = state_18517;
(statearr_18528[(7)] = inst_18461);

return statearr_18528;
})();
var statearr_18529_18571 = state_18517__$1;
(statearr_18529_18571[(2)] = null);

(statearr_18529_18571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (13))){
var inst_18513 = (state_18517[(2)]);
var state_18517__$1 = state_18517;
var statearr_18530_18572 = state_18517__$1;
(statearr_18530_18572[(2)] = inst_18513);

(statearr_18530_18572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (22))){
var inst_18511 = (state_18517[(2)]);
var state_18517__$1 = state_18517;
var statearr_18531_18573 = state_18517__$1;
(statearr_18531_18573[(2)] = inst_18511);

(statearr_18531_18573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (6))){
var inst_18515 = (state_18517[(2)]);
var state_18517__$1 = state_18517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18517__$1,inst_18515);
} else {
if((state_val_18518 === (25))){
var state_18517__$1 = state_18517;
var statearr_18532_18574 = state_18517__$1;
(statearr_18532_18574[(2)] = null);

(statearr_18532_18574[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (17))){
var inst_18491 = (state_18517[(14)]);
var state_18517__$1 = state_18517;
var statearr_18533_18575 = state_18517__$1;
(statearr_18533_18575[(2)] = inst_18491);

(statearr_18533_18575[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (3))){
var inst_18451 = (state_18517[(9)]);
var state_18517__$1 = state_18517;
var statearr_18534_18576 = state_18517__$1;
(statearr_18534_18576[(2)] = inst_18451);

(statearr_18534_18576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (12))){
var inst_18491 = (state_18517[(14)]);
var inst_18477 = (state_18517[(15)]);
var inst_18470 = (state_18517[(16)]);
var inst_18491__$1 = inst_18470.call(null,inst_18477);
var state_18517__$1 = (function (){var statearr_18535 = state_18517;
(statearr_18535[(14)] = inst_18491__$1);

return statearr_18535;
})();
if(cljs.core.truth_(inst_18491__$1)){
var statearr_18536_18577 = state_18517__$1;
(statearr_18536_18577[(1)] = (17));

} else {
var statearr_18537_18578 = state_18517__$1;
(statearr_18537_18578[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (2))){
var inst_18451 = (state_18517[(9)]);
var inst_18454 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18451);
var state_18517__$1 = state_18517;
var statearr_18538_18579 = state_18517__$1;
(statearr_18538_18579[(2)] = inst_18454);

(statearr_18538_18579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (23))){
var inst_18502 = (state_18517[(2)]);
var state_18517__$1 = state_18517;
if(cljs.core.truth_(inst_18502)){
var statearr_18539_18580 = state_18517__$1;
(statearr_18539_18580[(1)] = (24));

} else {
var statearr_18540_18581 = state_18517__$1;
(statearr_18540_18581[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (19))){
var inst_18499 = (state_18517[(2)]);
var state_18517__$1 = state_18517;
if(cljs.core.truth_(inst_18499)){
var statearr_18541_18582 = state_18517__$1;
(statearr_18541_18582[(1)] = (20));

} else {
var statearr_18542_18583 = state_18517__$1;
(statearr_18542_18583[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (11))){
var inst_18476 = (state_18517[(8)]);
var inst_18482 = (inst_18476 == null);
var state_18517__$1 = state_18517;
if(cljs.core.truth_(inst_18482)){
var statearr_18543_18584 = state_18517__$1;
(statearr_18543_18584[(1)] = (14));

} else {
var statearr_18544_18585 = state_18517__$1;
(statearr_18544_18585[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (9))){
var inst_18469 = (state_18517[(10)]);
var inst_18469__$1 = (state_18517[(2)]);
var inst_18470 = cljs.core.get.call(null,inst_18469__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18471 = cljs.core.get.call(null,inst_18469__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18472 = cljs.core.get.call(null,inst_18469__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18517__$1 = (function (){var statearr_18545 = state_18517;
(statearr_18545[(10)] = inst_18469__$1);

(statearr_18545[(17)] = inst_18471);

(statearr_18545[(16)] = inst_18470);

return statearr_18545;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18517__$1,(10),inst_18472);
} else {
if((state_val_18518 === (5))){
var inst_18461 = (state_18517[(7)]);
var inst_18464 = cljs.core.seq_QMARK_.call(null,inst_18461);
var state_18517__$1 = state_18517;
if(inst_18464){
var statearr_18546_18586 = state_18517__$1;
(statearr_18546_18586[(1)] = (7));

} else {
var statearr_18547_18587 = state_18517__$1;
(statearr_18547_18587[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (14))){
var inst_18477 = (state_18517[(15)]);
var inst_18484 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18477);
var state_18517__$1 = state_18517;
var statearr_18548_18588 = state_18517__$1;
(statearr_18548_18588[(2)] = inst_18484);

(statearr_18548_18588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (26))){
var inst_18507 = (state_18517[(2)]);
var state_18517__$1 = state_18517;
var statearr_18549_18589 = state_18517__$1;
(statearr_18549_18589[(2)] = inst_18507);

(statearr_18549_18589[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (16))){
var inst_18487 = (state_18517[(2)]);
var inst_18488 = calc_state.call(null);
var inst_18461 = inst_18488;
var state_18517__$1 = (function (){var statearr_18550 = state_18517;
(statearr_18550[(18)] = inst_18487);

(statearr_18550[(7)] = inst_18461);

return statearr_18550;
})();
var statearr_18551_18590 = state_18517__$1;
(statearr_18551_18590[(2)] = null);

(statearr_18551_18590[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (10))){
var inst_18477 = (state_18517[(15)]);
var inst_18476 = (state_18517[(8)]);
var inst_18475 = (state_18517[(2)]);
var inst_18476__$1 = cljs.core.nth.call(null,inst_18475,(0),null);
var inst_18477__$1 = cljs.core.nth.call(null,inst_18475,(1),null);
var inst_18478 = (inst_18476__$1 == null);
var inst_18479 = cljs.core._EQ_.call(null,inst_18477__$1,change);
var inst_18480 = (inst_18478) || (inst_18479);
var state_18517__$1 = (function (){var statearr_18552 = state_18517;
(statearr_18552[(15)] = inst_18477__$1);

(statearr_18552[(8)] = inst_18476__$1);

return statearr_18552;
})();
if(cljs.core.truth_(inst_18480)){
var statearr_18553_18591 = state_18517__$1;
(statearr_18553_18591[(1)] = (11));

} else {
var statearr_18554_18592 = state_18517__$1;
(statearr_18554_18592[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (18))){
var inst_18477 = (state_18517[(15)]);
var inst_18471 = (state_18517[(17)]);
var inst_18470 = (state_18517[(16)]);
var inst_18494 = cljs.core.empty_QMARK_.call(null,inst_18470);
var inst_18495 = inst_18471.call(null,inst_18477);
var inst_18496 = cljs.core.not.call(null,inst_18495);
var inst_18497 = (inst_18494) && (inst_18496);
var state_18517__$1 = state_18517;
var statearr_18555_18593 = state_18517__$1;
(statearr_18555_18593[(2)] = inst_18497);

(statearr_18555_18593[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18518 === (8))){
var inst_18461 = (state_18517[(7)]);
var state_18517__$1 = state_18517;
var statearr_18556_18594 = state_18517__$1;
(statearr_18556_18594[(2)] = inst_18461);

(statearr_18556_18594[(1)] = (9));


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
});})(c__7313__auto___18564,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7251__auto__,c__7313__auto___18564,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7252__auto__ = null;
var cljs$core$async$mix_$_state_machine__7252__auto____0 = (function (){
var statearr_18560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18560[(0)] = cljs$core$async$mix_$_state_machine__7252__auto__);

(statearr_18560[(1)] = (1));

return statearr_18560;
});
var cljs$core$async$mix_$_state_machine__7252__auto____1 = (function (state_18517){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_18517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e18561){if((e18561 instanceof Object)){
var ex__7255__auto__ = e18561;
var statearr_18562_18595 = state_18517;
(statearr_18562_18595[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18596 = state_18517;
state_18517 = G__18596;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7252__auto__ = function(state_18517){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7252__auto____1.call(this,state_18517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7252__auto____0;
cljs$core$async$mix_$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7252__auto____1;
return cljs$core$async$mix_$_state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___18564,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7315__auto__ = (function (){var statearr_18563 = f__7314__auto__.call(null);
(statearr_18563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___18564);

return statearr_18563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___18564,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18598 = {};
return obj18598;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4941__auto__ = p;
if(and__4941__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4941__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5589__auto__ = (((p == null))?null:p);
return (function (){var or__4953__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4941__auto__ = p;
if(and__4941__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4941__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5589__auto__ = (((p == null))?null:p);
return (function (){var or__4953__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__18600 = arguments.length;
switch (G__18600) {
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
if((function (){var and__4941__auto__ = p;
if(and__4941__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4941__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5589__auto__ = (((p == null))?null:p);
return (function (){var or__4953__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4941__auto__ = p;
if(and__4941__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5589__auto__ = (((p == null))?null:p);
return (function (){var or__4953__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
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
var G__18604 = arguments.length;
switch (G__18604) {
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
var or__4953__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4953__auto__,mults){
return (function (p1__18602_SHARP_){
if(cljs.core.truth_(p1__18602_SHARP_.call(null,topic))){
return p1__18602_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18602_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4953__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18605 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18605 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18606){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18606 = meta18606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18607,meta18606__$1){
var self__ = this;
var _18607__$1 = this;
return (new cljs.core.async.t18605(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18606__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18607){
var self__ = this;
var _18607__$1 = this;
return self__.meta18606;
});})(mults,ensure_mult))
;

cljs.core.async.t18605.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18605.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18605.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18605.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t18605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18605.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18606","meta18606",-945324063,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t18605.cljs$lang$type = true;

cljs.core.async.t18605.cljs$lang$ctorStr = "cljs.core.async/t18605";

cljs.core.async.t18605.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs.core.async/t18605");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18605 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t18605(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18606){
return (new cljs.core.async.t18605(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18606));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18605(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7313__auto___18728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___18728,mults,ensure_mult,p){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___18728,mults,ensure_mult,p){
return (function (state_18679){
var state_val_18680 = (state_18679[(1)]);
if((state_val_18680 === (7))){
var inst_18675 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18681_18729 = state_18679__$1;
(statearr_18681_18729[(2)] = inst_18675);

(statearr_18681_18729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (20))){
var state_18679__$1 = state_18679;
var statearr_18682_18730 = state_18679__$1;
(statearr_18682_18730[(2)] = null);

(statearr_18682_18730[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (1))){
var state_18679__$1 = state_18679;
var statearr_18683_18731 = state_18679__$1;
(statearr_18683_18731[(2)] = null);

(statearr_18683_18731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (24))){
var inst_18658 = (state_18679[(7)]);
var inst_18667 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18658);
var state_18679__$1 = state_18679;
var statearr_18684_18732 = state_18679__$1;
(statearr_18684_18732[(2)] = inst_18667);

(statearr_18684_18732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (4))){
var inst_18610 = (state_18679[(8)]);
var inst_18610__$1 = (state_18679[(2)]);
var inst_18611 = (inst_18610__$1 == null);
var state_18679__$1 = (function (){var statearr_18685 = state_18679;
(statearr_18685[(8)] = inst_18610__$1);

return statearr_18685;
})();
if(cljs.core.truth_(inst_18611)){
var statearr_18686_18733 = state_18679__$1;
(statearr_18686_18733[(1)] = (5));

} else {
var statearr_18687_18734 = state_18679__$1;
(statearr_18687_18734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (15))){
var inst_18652 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18688_18735 = state_18679__$1;
(statearr_18688_18735[(2)] = inst_18652);

(statearr_18688_18735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (21))){
var inst_18672 = (state_18679[(2)]);
var state_18679__$1 = (function (){var statearr_18689 = state_18679;
(statearr_18689[(9)] = inst_18672);

return statearr_18689;
})();
var statearr_18690_18736 = state_18679__$1;
(statearr_18690_18736[(2)] = null);

(statearr_18690_18736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (13))){
var inst_18634 = (state_18679[(10)]);
var inst_18636 = cljs.core.chunked_seq_QMARK_.call(null,inst_18634);
var state_18679__$1 = state_18679;
if(inst_18636){
var statearr_18691_18737 = state_18679__$1;
(statearr_18691_18737[(1)] = (16));

} else {
var statearr_18692_18738 = state_18679__$1;
(statearr_18692_18738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (22))){
var inst_18664 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
if(cljs.core.truth_(inst_18664)){
var statearr_18693_18739 = state_18679__$1;
(statearr_18693_18739[(1)] = (23));

} else {
var statearr_18694_18740 = state_18679__$1;
(statearr_18694_18740[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (6))){
var inst_18610 = (state_18679[(8)]);
var inst_18658 = (state_18679[(7)]);
var inst_18660 = (state_18679[(11)]);
var inst_18658__$1 = topic_fn.call(null,inst_18610);
var inst_18659 = cljs.core.deref.call(null,mults);
var inst_18660__$1 = cljs.core.get.call(null,inst_18659,inst_18658__$1);
var state_18679__$1 = (function (){var statearr_18695 = state_18679;
(statearr_18695[(7)] = inst_18658__$1);

(statearr_18695[(11)] = inst_18660__$1);

return statearr_18695;
})();
if(cljs.core.truth_(inst_18660__$1)){
var statearr_18696_18741 = state_18679__$1;
(statearr_18696_18741[(1)] = (19));

} else {
var statearr_18697_18742 = state_18679__$1;
(statearr_18697_18742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (25))){
var inst_18669 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18698_18743 = state_18679__$1;
(statearr_18698_18743[(2)] = inst_18669);

(statearr_18698_18743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (17))){
var inst_18634 = (state_18679[(10)]);
var inst_18643 = cljs.core.first.call(null,inst_18634);
var inst_18644 = cljs.core.async.muxch_STAR_.call(null,inst_18643);
var inst_18645 = cljs.core.async.close_BANG_.call(null,inst_18644);
var inst_18646 = cljs.core.next.call(null,inst_18634);
var inst_18620 = inst_18646;
var inst_18621 = null;
var inst_18622 = (0);
var inst_18623 = (0);
var state_18679__$1 = (function (){var statearr_18699 = state_18679;
(statearr_18699[(12)] = inst_18621);

(statearr_18699[(13)] = inst_18623);

(statearr_18699[(14)] = inst_18622);

(statearr_18699[(15)] = inst_18620);

(statearr_18699[(16)] = inst_18645);

return statearr_18699;
})();
var statearr_18700_18744 = state_18679__$1;
(statearr_18700_18744[(2)] = null);

(statearr_18700_18744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (3))){
var inst_18677 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18679__$1,inst_18677);
} else {
if((state_val_18680 === (12))){
var inst_18654 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18701_18745 = state_18679__$1;
(statearr_18701_18745[(2)] = inst_18654);

(statearr_18701_18745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (2))){
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18679__$1,(4),ch);
} else {
if((state_val_18680 === (23))){
var state_18679__$1 = state_18679;
var statearr_18702_18746 = state_18679__$1;
(statearr_18702_18746[(2)] = null);

(statearr_18702_18746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (19))){
var inst_18610 = (state_18679[(8)]);
var inst_18660 = (state_18679[(11)]);
var inst_18662 = cljs.core.async.muxch_STAR_.call(null,inst_18660);
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18679__$1,(22),inst_18662,inst_18610);
} else {
if((state_val_18680 === (11))){
var inst_18620 = (state_18679[(15)]);
var inst_18634 = (state_18679[(10)]);
var inst_18634__$1 = cljs.core.seq.call(null,inst_18620);
var state_18679__$1 = (function (){var statearr_18703 = state_18679;
(statearr_18703[(10)] = inst_18634__$1);

return statearr_18703;
})();
if(inst_18634__$1){
var statearr_18704_18747 = state_18679__$1;
(statearr_18704_18747[(1)] = (13));

} else {
var statearr_18705_18748 = state_18679__$1;
(statearr_18705_18748[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (9))){
var inst_18656 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18706_18749 = state_18679__$1;
(statearr_18706_18749[(2)] = inst_18656);

(statearr_18706_18749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (5))){
var inst_18617 = cljs.core.deref.call(null,mults);
var inst_18618 = cljs.core.vals.call(null,inst_18617);
var inst_18619 = cljs.core.seq.call(null,inst_18618);
var inst_18620 = inst_18619;
var inst_18621 = null;
var inst_18622 = (0);
var inst_18623 = (0);
var state_18679__$1 = (function (){var statearr_18707 = state_18679;
(statearr_18707[(12)] = inst_18621);

(statearr_18707[(13)] = inst_18623);

(statearr_18707[(14)] = inst_18622);

(statearr_18707[(15)] = inst_18620);

return statearr_18707;
})();
var statearr_18708_18750 = state_18679__$1;
(statearr_18708_18750[(2)] = null);

(statearr_18708_18750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (14))){
var state_18679__$1 = state_18679;
var statearr_18712_18751 = state_18679__$1;
(statearr_18712_18751[(2)] = null);

(statearr_18712_18751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (16))){
var inst_18634 = (state_18679[(10)]);
var inst_18638 = cljs.core.chunk_first.call(null,inst_18634);
var inst_18639 = cljs.core.chunk_rest.call(null,inst_18634);
var inst_18640 = cljs.core.count.call(null,inst_18638);
var inst_18620 = inst_18639;
var inst_18621 = inst_18638;
var inst_18622 = inst_18640;
var inst_18623 = (0);
var state_18679__$1 = (function (){var statearr_18713 = state_18679;
(statearr_18713[(12)] = inst_18621);

(statearr_18713[(13)] = inst_18623);

(statearr_18713[(14)] = inst_18622);

(statearr_18713[(15)] = inst_18620);

return statearr_18713;
})();
var statearr_18714_18752 = state_18679__$1;
(statearr_18714_18752[(2)] = null);

(statearr_18714_18752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (10))){
var inst_18621 = (state_18679[(12)]);
var inst_18623 = (state_18679[(13)]);
var inst_18622 = (state_18679[(14)]);
var inst_18620 = (state_18679[(15)]);
var inst_18628 = cljs.core._nth.call(null,inst_18621,inst_18623);
var inst_18629 = cljs.core.async.muxch_STAR_.call(null,inst_18628);
var inst_18630 = cljs.core.async.close_BANG_.call(null,inst_18629);
var inst_18631 = (inst_18623 + (1));
var tmp18709 = inst_18621;
var tmp18710 = inst_18622;
var tmp18711 = inst_18620;
var inst_18620__$1 = tmp18711;
var inst_18621__$1 = tmp18709;
var inst_18622__$1 = tmp18710;
var inst_18623__$1 = inst_18631;
var state_18679__$1 = (function (){var statearr_18715 = state_18679;
(statearr_18715[(12)] = inst_18621__$1);

(statearr_18715[(13)] = inst_18623__$1);

(statearr_18715[(14)] = inst_18622__$1);

(statearr_18715[(15)] = inst_18620__$1);

(statearr_18715[(17)] = inst_18630);

return statearr_18715;
})();
var statearr_18716_18753 = state_18679__$1;
(statearr_18716_18753[(2)] = null);

(statearr_18716_18753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (18))){
var inst_18649 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18717_18754 = state_18679__$1;
(statearr_18717_18754[(2)] = inst_18649);

(statearr_18717_18754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (8))){
var inst_18623 = (state_18679[(13)]);
var inst_18622 = (state_18679[(14)]);
var inst_18625 = (inst_18623 < inst_18622);
var inst_18626 = inst_18625;
var state_18679__$1 = state_18679;
if(cljs.core.truth_(inst_18626)){
var statearr_18718_18755 = state_18679__$1;
(statearr_18718_18755[(1)] = (10));

} else {
var statearr_18719_18756 = state_18679__$1;
(statearr_18719_18756[(1)] = (11));

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
});})(c__7313__auto___18728,mults,ensure_mult,p))
;
return ((function (switch__7251__auto__,c__7313__auto___18728,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_18723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18723[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_18723[(1)] = (1));

return statearr_18723;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_18679){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_18679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e18724){if((e18724 instanceof Object)){
var ex__7255__auto__ = e18724;
var statearr_18725_18757 = state_18679;
(statearr_18725_18757[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18758 = state_18679;
state_18679 = G__18758;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_18679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_18679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___18728,mults,ensure_mult,p))
})();
var state__7315__auto__ = (function (){var statearr_18726 = f__7314__auto__.call(null);
(statearr_18726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___18728);

return statearr_18726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___18728,mults,ensure_mult,p))
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
var G__18760 = arguments.length;
switch (G__18760) {
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
var G__18763 = arguments.length;
switch (G__18763) {
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
var G__18766 = arguments.length;
switch (G__18766) {
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
var c__7313__auto___18836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___18836,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___18836,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18805){
var state_val_18806 = (state_18805[(1)]);
if((state_val_18806 === (7))){
var state_18805__$1 = state_18805;
var statearr_18807_18837 = state_18805__$1;
(statearr_18807_18837[(2)] = null);

(statearr_18807_18837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (1))){
var state_18805__$1 = state_18805;
var statearr_18808_18838 = state_18805__$1;
(statearr_18808_18838[(2)] = null);

(statearr_18808_18838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (4))){
var inst_18769 = (state_18805[(7)]);
var inst_18771 = (inst_18769 < cnt);
var state_18805__$1 = state_18805;
if(cljs.core.truth_(inst_18771)){
var statearr_18809_18839 = state_18805__$1;
(statearr_18809_18839[(1)] = (6));

} else {
var statearr_18810_18840 = state_18805__$1;
(statearr_18810_18840[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (15))){
var inst_18801 = (state_18805[(2)]);
var state_18805__$1 = state_18805;
var statearr_18811_18841 = state_18805__$1;
(statearr_18811_18841[(2)] = inst_18801);

(statearr_18811_18841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (13))){
var inst_18794 = cljs.core.async.close_BANG_.call(null,out);
var state_18805__$1 = state_18805;
var statearr_18812_18842 = state_18805__$1;
(statearr_18812_18842[(2)] = inst_18794);

(statearr_18812_18842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (6))){
var state_18805__$1 = state_18805;
var statearr_18813_18843 = state_18805__$1;
(statearr_18813_18843[(2)] = null);

(statearr_18813_18843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (3))){
var inst_18803 = (state_18805[(2)]);
var state_18805__$1 = state_18805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18805__$1,inst_18803);
} else {
if((state_val_18806 === (12))){
var inst_18791 = (state_18805[(8)]);
var inst_18791__$1 = (state_18805[(2)]);
var inst_18792 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18791__$1);
var state_18805__$1 = (function (){var statearr_18814 = state_18805;
(statearr_18814[(8)] = inst_18791__$1);

return statearr_18814;
})();
if(cljs.core.truth_(inst_18792)){
var statearr_18815_18844 = state_18805__$1;
(statearr_18815_18844[(1)] = (13));

} else {
var statearr_18816_18845 = state_18805__$1;
(statearr_18816_18845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (2))){
var inst_18768 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18769 = (0);
var state_18805__$1 = (function (){var statearr_18817 = state_18805;
(statearr_18817[(9)] = inst_18768);

(statearr_18817[(7)] = inst_18769);

return statearr_18817;
})();
var statearr_18818_18846 = state_18805__$1;
(statearr_18818_18846[(2)] = null);

(statearr_18818_18846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (11))){
var inst_18769 = (state_18805[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18805,(10),Object,null,(9));
var inst_18778 = chs__$1.call(null,inst_18769);
var inst_18779 = done.call(null,inst_18769);
var inst_18780 = cljs.core.async.take_BANG_.call(null,inst_18778,inst_18779);
var state_18805__$1 = state_18805;
var statearr_18819_18847 = state_18805__$1;
(statearr_18819_18847[(2)] = inst_18780);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18805__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (9))){
var inst_18769 = (state_18805[(7)]);
var inst_18782 = (state_18805[(2)]);
var inst_18783 = (inst_18769 + (1));
var inst_18769__$1 = inst_18783;
var state_18805__$1 = (function (){var statearr_18820 = state_18805;
(statearr_18820[(7)] = inst_18769__$1);

(statearr_18820[(10)] = inst_18782);

return statearr_18820;
})();
var statearr_18821_18848 = state_18805__$1;
(statearr_18821_18848[(2)] = null);

(statearr_18821_18848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (5))){
var inst_18789 = (state_18805[(2)]);
var state_18805__$1 = (function (){var statearr_18822 = state_18805;
(statearr_18822[(11)] = inst_18789);

return statearr_18822;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18805__$1,(12),dchan);
} else {
if((state_val_18806 === (14))){
var inst_18791 = (state_18805[(8)]);
var inst_18796 = cljs.core.apply.call(null,f,inst_18791);
var state_18805__$1 = state_18805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18805__$1,(16),out,inst_18796);
} else {
if((state_val_18806 === (16))){
var inst_18798 = (state_18805[(2)]);
var state_18805__$1 = (function (){var statearr_18823 = state_18805;
(statearr_18823[(12)] = inst_18798);

return statearr_18823;
})();
var statearr_18824_18849 = state_18805__$1;
(statearr_18824_18849[(2)] = null);

(statearr_18824_18849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (10))){
var inst_18773 = (state_18805[(2)]);
var inst_18774 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18805__$1 = (function (){var statearr_18825 = state_18805;
(statearr_18825[(13)] = inst_18773);

return statearr_18825;
})();
var statearr_18826_18850 = state_18805__$1;
(statearr_18826_18850[(2)] = inst_18774);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18805__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (8))){
var inst_18787 = (state_18805[(2)]);
var state_18805__$1 = state_18805;
var statearr_18827_18851 = state_18805__$1;
(statearr_18827_18851[(2)] = inst_18787);

(statearr_18827_18851[(1)] = (5));


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
});})(c__7313__auto___18836,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7251__auto__,c__7313__auto___18836,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_18831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18831[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_18831[(1)] = (1));

return statearr_18831;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_18805){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_18805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e18832){if((e18832 instanceof Object)){
var ex__7255__auto__ = e18832;
var statearr_18833_18852 = state_18805;
(statearr_18833_18852[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18853 = state_18805;
state_18805 = G__18853;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_18805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_18805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___18836,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7315__auto__ = (function (){var statearr_18834 = f__7314__auto__.call(null);
(statearr_18834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___18836);

return statearr_18834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___18836,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18856 = arguments.length;
switch (G__18856) {
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
var c__7313__auto___18911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___18911,out){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___18911,out){
return (function (state_18886){
var state_val_18887 = (state_18886[(1)]);
if((state_val_18887 === (7))){
var inst_18865 = (state_18886[(7)]);
var inst_18866 = (state_18886[(8)]);
var inst_18865__$1 = (state_18886[(2)]);
var inst_18866__$1 = cljs.core.nth.call(null,inst_18865__$1,(0),null);
var inst_18867 = cljs.core.nth.call(null,inst_18865__$1,(1),null);
var inst_18868 = (inst_18866__$1 == null);
var state_18886__$1 = (function (){var statearr_18888 = state_18886;
(statearr_18888[(7)] = inst_18865__$1);

(statearr_18888[(9)] = inst_18867);

(statearr_18888[(8)] = inst_18866__$1);

return statearr_18888;
})();
if(cljs.core.truth_(inst_18868)){
var statearr_18889_18912 = state_18886__$1;
(statearr_18889_18912[(1)] = (8));

} else {
var statearr_18890_18913 = state_18886__$1;
(statearr_18890_18913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (1))){
var inst_18857 = cljs.core.vec.call(null,chs);
var inst_18858 = inst_18857;
var state_18886__$1 = (function (){var statearr_18891 = state_18886;
(statearr_18891[(10)] = inst_18858);

return statearr_18891;
})();
var statearr_18892_18914 = state_18886__$1;
(statearr_18892_18914[(2)] = null);

(statearr_18892_18914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (4))){
var inst_18858 = (state_18886[(10)]);
var state_18886__$1 = state_18886;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18886__$1,(7),inst_18858);
} else {
if((state_val_18887 === (6))){
var inst_18882 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18893_18915 = state_18886__$1;
(statearr_18893_18915[(2)] = inst_18882);

(statearr_18893_18915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (3))){
var inst_18884 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18886__$1,inst_18884);
} else {
if((state_val_18887 === (2))){
var inst_18858 = (state_18886[(10)]);
var inst_18860 = cljs.core.count.call(null,inst_18858);
var inst_18861 = (inst_18860 > (0));
var state_18886__$1 = state_18886;
if(cljs.core.truth_(inst_18861)){
var statearr_18895_18916 = state_18886__$1;
(statearr_18895_18916[(1)] = (4));

} else {
var statearr_18896_18917 = state_18886__$1;
(statearr_18896_18917[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (11))){
var inst_18858 = (state_18886[(10)]);
var inst_18875 = (state_18886[(2)]);
var tmp18894 = inst_18858;
var inst_18858__$1 = tmp18894;
var state_18886__$1 = (function (){var statearr_18897 = state_18886;
(statearr_18897[(10)] = inst_18858__$1);

(statearr_18897[(11)] = inst_18875);

return statearr_18897;
})();
var statearr_18898_18918 = state_18886__$1;
(statearr_18898_18918[(2)] = null);

(statearr_18898_18918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (9))){
var inst_18866 = (state_18886[(8)]);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18886__$1,(11),out,inst_18866);
} else {
if((state_val_18887 === (5))){
var inst_18880 = cljs.core.async.close_BANG_.call(null,out);
var state_18886__$1 = state_18886;
var statearr_18899_18919 = state_18886__$1;
(statearr_18899_18919[(2)] = inst_18880);

(statearr_18899_18919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (10))){
var inst_18878 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18900_18920 = state_18886__$1;
(statearr_18900_18920[(2)] = inst_18878);

(statearr_18900_18920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (8))){
var inst_18858 = (state_18886[(10)]);
var inst_18865 = (state_18886[(7)]);
var inst_18867 = (state_18886[(9)]);
var inst_18866 = (state_18886[(8)]);
var inst_18870 = (function (){var cs = inst_18858;
var vec__18863 = inst_18865;
var v = inst_18866;
var c = inst_18867;
return ((function (cs,vec__18863,v,c,inst_18858,inst_18865,inst_18867,inst_18866,state_val_18887,c__7313__auto___18911,out){
return (function (p1__18854_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18854_SHARP_);
});
;})(cs,vec__18863,v,c,inst_18858,inst_18865,inst_18867,inst_18866,state_val_18887,c__7313__auto___18911,out))
})();
var inst_18871 = cljs.core.filterv.call(null,inst_18870,inst_18858);
var inst_18858__$1 = inst_18871;
var state_18886__$1 = (function (){var statearr_18901 = state_18886;
(statearr_18901[(10)] = inst_18858__$1);

return statearr_18901;
})();
var statearr_18902_18921 = state_18886__$1;
(statearr_18902_18921[(2)] = null);

(statearr_18902_18921[(1)] = (2));


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
});})(c__7313__auto___18911,out))
;
return ((function (switch__7251__auto__,c__7313__auto___18911,out){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_18906 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18906[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_18906[(1)] = (1));

return statearr_18906;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_18886){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_18886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e18907){if((e18907 instanceof Object)){
var ex__7255__auto__ = e18907;
var statearr_18908_18922 = state_18886;
(statearr_18908_18922[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18923 = state_18886;
state_18886 = G__18923;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_18886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_18886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___18911,out))
})();
var state__7315__auto__ = (function (){var statearr_18909 = f__7314__auto__.call(null);
(statearr_18909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___18911);

return statearr_18909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___18911,out))
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
var G__18925 = arguments.length;
switch (G__18925) {
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
var c__7313__auto___18973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___18973,out){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___18973,out){
return (function (state_18949){
var state_val_18950 = (state_18949[(1)]);
if((state_val_18950 === (7))){
var inst_18931 = (state_18949[(7)]);
var inst_18931__$1 = (state_18949[(2)]);
var inst_18932 = (inst_18931__$1 == null);
var inst_18933 = cljs.core.not.call(null,inst_18932);
var state_18949__$1 = (function (){var statearr_18951 = state_18949;
(statearr_18951[(7)] = inst_18931__$1);

return statearr_18951;
})();
if(inst_18933){
var statearr_18952_18974 = state_18949__$1;
(statearr_18952_18974[(1)] = (8));

} else {
var statearr_18953_18975 = state_18949__$1;
(statearr_18953_18975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18950 === (1))){
var inst_18926 = (0);
var state_18949__$1 = (function (){var statearr_18954 = state_18949;
(statearr_18954[(8)] = inst_18926);

return statearr_18954;
})();
var statearr_18955_18976 = state_18949__$1;
(statearr_18955_18976[(2)] = null);

(statearr_18955_18976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18950 === (4))){
var state_18949__$1 = state_18949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18949__$1,(7),ch);
} else {
if((state_val_18950 === (6))){
var inst_18944 = (state_18949[(2)]);
var state_18949__$1 = state_18949;
var statearr_18956_18977 = state_18949__$1;
(statearr_18956_18977[(2)] = inst_18944);

(statearr_18956_18977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18950 === (3))){
var inst_18946 = (state_18949[(2)]);
var inst_18947 = cljs.core.async.close_BANG_.call(null,out);
var state_18949__$1 = (function (){var statearr_18957 = state_18949;
(statearr_18957[(9)] = inst_18946);

return statearr_18957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18949__$1,inst_18947);
} else {
if((state_val_18950 === (2))){
var inst_18926 = (state_18949[(8)]);
var inst_18928 = (inst_18926 < n);
var state_18949__$1 = state_18949;
if(cljs.core.truth_(inst_18928)){
var statearr_18958_18978 = state_18949__$1;
(statearr_18958_18978[(1)] = (4));

} else {
var statearr_18959_18979 = state_18949__$1;
(statearr_18959_18979[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18950 === (11))){
var inst_18926 = (state_18949[(8)]);
var inst_18936 = (state_18949[(2)]);
var inst_18937 = (inst_18926 + (1));
var inst_18926__$1 = inst_18937;
var state_18949__$1 = (function (){var statearr_18960 = state_18949;
(statearr_18960[(8)] = inst_18926__$1);

(statearr_18960[(10)] = inst_18936);

return statearr_18960;
})();
var statearr_18961_18980 = state_18949__$1;
(statearr_18961_18980[(2)] = null);

(statearr_18961_18980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18950 === (9))){
var state_18949__$1 = state_18949;
var statearr_18962_18981 = state_18949__$1;
(statearr_18962_18981[(2)] = null);

(statearr_18962_18981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18950 === (5))){
var state_18949__$1 = state_18949;
var statearr_18963_18982 = state_18949__$1;
(statearr_18963_18982[(2)] = null);

(statearr_18963_18982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18950 === (10))){
var inst_18941 = (state_18949[(2)]);
var state_18949__$1 = state_18949;
var statearr_18964_18983 = state_18949__$1;
(statearr_18964_18983[(2)] = inst_18941);

(statearr_18964_18983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18950 === (8))){
var inst_18931 = (state_18949[(7)]);
var state_18949__$1 = state_18949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18949__$1,(11),out,inst_18931);
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
});})(c__7313__auto___18973,out))
;
return ((function (switch__7251__auto__,c__7313__auto___18973,out){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_18968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18968[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_18968[(1)] = (1));

return statearr_18968;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_18949){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_18949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e18969){if((e18969 instanceof Object)){
var ex__7255__auto__ = e18969;
var statearr_18970_18984 = state_18949;
(statearr_18970_18984[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18985 = state_18949;
state_18949 = G__18985;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_18949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_18949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___18973,out))
})();
var state__7315__auto__ = (function (){var statearr_18971 = f__7314__auto__.call(null);
(statearr_18971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___18973);

return statearr_18971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___18973,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t18993 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18993 = (function (map_LT_,f,ch,meta18994){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18994 = meta18994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18995,meta18994__$1){
var self__ = this;
var _18995__$1 = this;
return (new cljs.core.async.t18993(self__.map_LT_,self__.f,self__.ch,meta18994__$1));
});

cljs.core.async.t18993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18995){
var self__ = this;
var _18995__$1 = this;
return self__.meta18994;
});

cljs.core.async.t18993.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18993.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18993.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t18996 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18996 = (function (map_LT_,f,ch,meta18994,_,fn1,meta18997){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18994 = meta18994;
this._ = _;
this.fn1 = fn1;
this.meta18997 = meta18997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18998,meta18997__$1){
var self__ = this;
var _18998__$1 = this;
return (new cljs.core.async.t18996(self__.map_LT_,self__.f,self__.ch,self__.meta18994,self__._,self__.fn1,meta18997__$1));
});})(___$1))
;

cljs.core.async.t18996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18998){
var self__ = this;
var _18998__$1 = this;
return self__.meta18997;
});})(___$1))
;

cljs.core.async.t18996.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t18996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18986_SHARP_){
return f1.call(null,(((p1__18986_SHARP_ == null))?null:self__.f.call(null,p1__18986_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t18996.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18994","meta18994",725051960,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18997","meta18997",-1799243888,null)], null);
});})(___$1))
;

cljs.core.async.t18996.cljs$lang$type = true;

cljs.core.async.t18996.cljs$lang$ctorStr = "cljs.core.async/t18996";

cljs.core.async.t18996.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs.core.async/t18996");
});})(___$1))
;

cljs.core.async.__GT_t18996 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t18996(map_LT___$1,f__$1,ch__$1,meta18994__$1,___$2,fn1__$1,meta18997){
return (new cljs.core.async.t18996(map_LT___$1,f__$1,ch__$1,meta18994__$1,___$2,fn1__$1,meta18997));
});})(___$1))
;

}

return (new cljs.core.async.t18996(self__.map_LT_,self__.f,self__.ch,self__.meta18994,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4941__auto__ = ret;
if(cljs.core.truth_(and__4941__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4941__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t18993.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t18993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18994","meta18994",725051960,null)], null);
});

cljs.core.async.t18993.cljs$lang$type = true;

cljs.core.async.t18993.cljs$lang$ctorStr = "cljs.core.async/t18993";

cljs.core.async.t18993.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs.core.async/t18993");
});

cljs.core.async.__GT_t18993 = (function cljs$core$async$map_LT__$___GT_t18993(map_LT___$1,f__$1,ch__$1,meta18994){
return (new cljs.core.async.t18993(map_LT___$1,f__$1,ch__$1,meta18994));
});

}

return (new cljs.core.async.t18993(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t19002 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19002 = (function (map_GT_,f,ch,meta19003){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19003 = meta19003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19004,meta19003__$1){
var self__ = this;
var _19004__$1 = this;
return (new cljs.core.async.t19002(self__.map_GT_,self__.f,self__.ch,meta19003__$1));
});

cljs.core.async.t19002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19004){
var self__ = this;
var _19004__$1 = this;
return self__.meta19003;
});

cljs.core.async.t19002.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19002.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19002.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19003","meta19003",-1838621461,null)], null);
});

cljs.core.async.t19002.cljs$lang$type = true;

cljs.core.async.t19002.cljs$lang$ctorStr = "cljs.core.async/t19002";

cljs.core.async.t19002.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs.core.async/t19002");
});

cljs.core.async.__GT_t19002 = (function cljs$core$async$map_GT__$___GT_t19002(map_GT___$1,f__$1,ch__$1,meta19003){
return (new cljs.core.async.t19002(map_GT___$1,f__$1,ch__$1,meta19003));
});

}

return (new cljs.core.async.t19002(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t19008 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19008 = (function (filter_GT_,p,ch,meta19009){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19009 = meta19009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19010,meta19009__$1){
var self__ = this;
var _19010__$1 = this;
return (new cljs.core.async.t19008(self__.filter_GT_,self__.p,self__.ch,meta19009__$1));
});

cljs.core.async.t19008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19010){
var self__ = this;
var _19010__$1 = this;
return self__.meta19009;
});

cljs.core.async.t19008.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19008.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19008.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19008.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19009","meta19009",842579512,null)], null);
});

cljs.core.async.t19008.cljs$lang$type = true;

cljs.core.async.t19008.cljs$lang$ctorStr = "cljs.core.async/t19008";

cljs.core.async.t19008.cljs$lang$ctorPrWriter = (function (this__5532__auto__,writer__5533__auto__,opt__5534__auto__){
return cljs.core._write.call(null,writer__5533__auto__,"cljs.core.async/t19008");
});

cljs.core.async.__GT_t19008 = (function cljs$core$async$filter_GT__$___GT_t19008(filter_GT___$1,p__$1,ch__$1,meta19009){
return (new cljs.core.async.t19008(filter_GT___$1,p__$1,ch__$1,meta19009));
});

}

return (new cljs.core.async.t19008(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19012 = arguments.length;
switch (G__19012) {
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
var c__7313__auto___19055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___19055,out){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___19055,out){
return (function (state_19033){
var state_val_19034 = (state_19033[(1)]);
if((state_val_19034 === (7))){
var inst_19029 = (state_19033[(2)]);
var state_19033__$1 = state_19033;
var statearr_19035_19056 = state_19033__$1;
(statearr_19035_19056[(2)] = inst_19029);

(statearr_19035_19056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (1))){
var state_19033__$1 = state_19033;
var statearr_19036_19057 = state_19033__$1;
(statearr_19036_19057[(2)] = null);

(statearr_19036_19057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (4))){
var inst_19015 = (state_19033[(7)]);
var inst_19015__$1 = (state_19033[(2)]);
var inst_19016 = (inst_19015__$1 == null);
var state_19033__$1 = (function (){var statearr_19037 = state_19033;
(statearr_19037[(7)] = inst_19015__$1);

return statearr_19037;
})();
if(cljs.core.truth_(inst_19016)){
var statearr_19038_19058 = state_19033__$1;
(statearr_19038_19058[(1)] = (5));

} else {
var statearr_19039_19059 = state_19033__$1;
(statearr_19039_19059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (6))){
var inst_19015 = (state_19033[(7)]);
var inst_19020 = p.call(null,inst_19015);
var state_19033__$1 = state_19033;
if(cljs.core.truth_(inst_19020)){
var statearr_19040_19060 = state_19033__$1;
(statearr_19040_19060[(1)] = (8));

} else {
var statearr_19041_19061 = state_19033__$1;
(statearr_19041_19061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (3))){
var inst_19031 = (state_19033[(2)]);
var state_19033__$1 = state_19033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19033__$1,inst_19031);
} else {
if((state_val_19034 === (2))){
var state_19033__$1 = state_19033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19033__$1,(4),ch);
} else {
if((state_val_19034 === (11))){
var inst_19023 = (state_19033[(2)]);
var state_19033__$1 = state_19033;
var statearr_19042_19062 = state_19033__$1;
(statearr_19042_19062[(2)] = inst_19023);

(statearr_19042_19062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (9))){
var state_19033__$1 = state_19033;
var statearr_19043_19063 = state_19033__$1;
(statearr_19043_19063[(2)] = null);

(statearr_19043_19063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (5))){
var inst_19018 = cljs.core.async.close_BANG_.call(null,out);
var state_19033__$1 = state_19033;
var statearr_19044_19064 = state_19033__$1;
(statearr_19044_19064[(2)] = inst_19018);

(statearr_19044_19064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (10))){
var inst_19026 = (state_19033[(2)]);
var state_19033__$1 = (function (){var statearr_19045 = state_19033;
(statearr_19045[(8)] = inst_19026);

return statearr_19045;
})();
var statearr_19046_19065 = state_19033__$1;
(statearr_19046_19065[(2)] = null);

(statearr_19046_19065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (8))){
var inst_19015 = (state_19033[(7)]);
var state_19033__$1 = state_19033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19033__$1,(11),out,inst_19015);
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
});})(c__7313__auto___19055,out))
;
return ((function (switch__7251__auto__,c__7313__auto___19055,out){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_19050 = [null,null,null,null,null,null,null,null,null];
(statearr_19050[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_19050[(1)] = (1));

return statearr_19050;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_19033){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_19033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e19051){if((e19051 instanceof Object)){
var ex__7255__auto__ = e19051;
var statearr_19052_19066 = state_19033;
(statearr_19052_19066[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19067 = state_19033;
state_19033 = G__19067;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_19033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_19033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___19055,out))
})();
var state__7315__auto__ = (function (){var statearr_19053 = f__7314__auto__.call(null);
(statearr_19053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___19055);

return statearr_19053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___19055,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__19069 = arguments.length;
switch (G__19069) {
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
var c__7313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto__){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto__){
return (function (state_19236){
var state_val_19237 = (state_19236[(1)]);
if((state_val_19237 === (7))){
var inst_19232 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19238_19279 = state_19236__$1;
(statearr_19238_19279[(2)] = inst_19232);

(statearr_19238_19279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (20))){
var inst_19202 = (state_19236[(7)]);
var inst_19213 = (state_19236[(2)]);
var inst_19214 = cljs.core.next.call(null,inst_19202);
var inst_19188 = inst_19214;
var inst_19189 = null;
var inst_19190 = (0);
var inst_19191 = (0);
var state_19236__$1 = (function (){var statearr_19239 = state_19236;
(statearr_19239[(8)] = inst_19191);

(statearr_19239[(9)] = inst_19213);

(statearr_19239[(10)] = inst_19190);

(statearr_19239[(11)] = inst_19189);

(statearr_19239[(12)] = inst_19188);

return statearr_19239;
})();
var statearr_19240_19280 = state_19236__$1;
(statearr_19240_19280[(2)] = null);

(statearr_19240_19280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (1))){
var state_19236__$1 = state_19236;
var statearr_19241_19281 = state_19236__$1;
(statearr_19241_19281[(2)] = null);

(statearr_19241_19281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (4))){
var inst_19177 = (state_19236[(13)]);
var inst_19177__$1 = (state_19236[(2)]);
var inst_19178 = (inst_19177__$1 == null);
var state_19236__$1 = (function (){var statearr_19242 = state_19236;
(statearr_19242[(13)] = inst_19177__$1);

return statearr_19242;
})();
if(cljs.core.truth_(inst_19178)){
var statearr_19243_19282 = state_19236__$1;
(statearr_19243_19282[(1)] = (5));

} else {
var statearr_19244_19283 = state_19236__$1;
(statearr_19244_19283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (15))){
var state_19236__$1 = state_19236;
var statearr_19248_19284 = state_19236__$1;
(statearr_19248_19284[(2)] = null);

(statearr_19248_19284[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (21))){
var state_19236__$1 = state_19236;
var statearr_19249_19285 = state_19236__$1;
(statearr_19249_19285[(2)] = null);

(statearr_19249_19285[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (13))){
var inst_19191 = (state_19236[(8)]);
var inst_19190 = (state_19236[(10)]);
var inst_19189 = (state_19236[(11)]);
var inst_19188 = (state_19236[(12)]);
var inst_19198 = (state_19236[(2)]);
var inst_19199 = (inst_19191 + (1));
var tmp19245 = inst_19190;
var tmp19246 = inst_19189;
var tmp19247 = inst_19188;
var inst_19188__$1 = tmp19247;
var inst_19189__$1 = tmp19246;
var inst_19190__$1 = tmp19245;
var inst_19191__$1 = inst_19199;
var state_19236__$1 = (function (){var statearr_19250 = state_19236;
(statearr_19250[(8)] = inst_19191__$1);

(statearr_19250[(14)] = inst_19198);

(statearr_19250[(10)] = inst_19190__$1);

(statearr_19250[(11)] = inst_19189__$1);

(statearr_19250[(12)] = inst_19188__$1);

return statearr_19250;
})();
var statearr_19251_19286 = state_19236__$1;
(statearr_19251_19286[(2)] = null);

(statearr_19251_19286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (22))){
var state_19236__$1 = state_19236;
var statearr_19252_19287 = state_19236__$1;
(statearr_19252_19287[(2)] = null);

(statearr_19252_19287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (6))){
var inst_19177 = (state_19236[(13)]);
var inst_19186 = f.call(null,inst_19177);
var inst_19187 = cljs.core.seq.call(null,inst_19186);
var inst_19188 = inst_19187;
var inst_19189 = null;
var inst_19190 = (0);
var inst_19191 = (0);
var state_19236__$1 = (function (){var statearr_19253 = state_19236;
(statearr_19253[(8)] = inst_19191);

(statearr_19253[(10)] = inst_19190);

(statearr_19253[(11)] = inst_19189);

(statearr_19253[(12)] = inst_19188);

return statearr_19253;
})();
var statearr_19254_19288 = state_19236__$1;
(statearr_19254_19288[(2)] = null);

(statearr_19254_19288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (17))){
var inst_19202 = (state_19236[(7)]);
var inst_19206 = cljs.core.chunk_first.call(null,inst_19202);
var inst_19207 = cljs.core.chunk_rest.call(null,inst_19202);
var inst_19208 = cljs.core.count.call(null,inst_19206);
var inst_19188 = inst_19207;
var inst_19189 = inst_19206;
var inst_19190 = inst_19208;
var inst_19191 = (0);
var state_19236__$1 = (function (){var statearr_19255 = state_19236;
(statearr_19255[(8)] = inst_19191);

(statearr_19255[(10)] = inst_19190);

(statearr_19255[(11)] = inst_19189);

(statearr_19255[(12)] = inst_19188);

return statearr_19255;
})();
var statearr_19256_19289 = state_19236__$1;
(statearr_19256_19289[(2)] = null);

(statearr_19256_19289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (3))){
var inst_19234 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19236__$1,inst_19234);
} else {
if((state_val_19237 === (12))){
var inst_19222 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19257_19290 = state_19236__$1;
(statearr_19257_19290[(2)] = inst_19222);

(statearr_19257_19290[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (2))){
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19236__$1,(4),in$);
} else {
if((state_val_19237 === (23))){
var inst_19230 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19258_19291 = state_19236__$1;
(statearr_19258_19291[(2)] = inst_19230);

(statearr_19258_19291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (19))){
var inst_19217 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19259_19292 = state_19236__$1;
(statearr_19259_19292[(2)] = inst_19217);

(statearr_19259_19292[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (11))){
var inst_19202 = (state_19236[(7)]);
var inst_19188 = (state_19236[(12)]);
var inst_19202__$1 = cljs.core.seq.call(null,inst_19188);
var state_19236__$1 = (function (){var statearr_19260 = state_19236;
(statearr_19260[(7)] = inst_19202__$1);

return statearr_19260;
})();
if(inst_19202__$1){
var statearr_19261_19293 = state_19236__$1;
(statearr_19261_19293[(1)] = (14));

} else {
var statearr_19262_19294 = state_19236__$1;
(statearr_19262_19294[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (9))){
var inst_19224 = (state_19236[(2)]);
var inst_19225 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19236__$1 = (function (){var statearr_19263 = state_19236;
(statearr_19263[(15)] = inst_19224);

return statearr_19263;
})();
if(cljs.core.truth_(inst_19225)){
var statearr_19264_19295 = state_19236__$1;
(statearr_19264_19295[(1)] = (21));

} else {
var statearr_19265_19296 = state_19236__$1;
(statearr_19265_19296[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (5))){
var inst_19180 = cljs.core.async.close_BANG_.call(null,out);
var state_19236__$1 = state_19236;
var statearr_19266_19297 = state_19236__$1;
(statearr_19266_19297[(2)] = inst_19180);

(statearr_19266_19297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (14))){
var inst_19202 = (state_19236[(7)]);
var inst_19204 = cljs.core.chunked_seq_QMARK_.call(null,inst_19202);
var state_19236__$1 = state_19236;
if(inst_19204){
var statearr_19267_19298 = state_19236__$1;
(statearr_19267_19298[(1)] = (17));

} else {
var statearr_19268_19299 = state_19236__$1;
(statearr_19268_19299[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (16))){
var inst_19220 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19269_19300 = state_19236__$1;
(statearr_19269_19300[(2)] = inst_19220);

(statearr_19269_19300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (10))){
var inst_19191 = (state_19236[(8)]);
var inst_19189 = (state_19236[(11)]);
var inst_19196 = cljs.core._nth.call(null,inst_19189,inst_19191);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19236__$1,(13),out,inst_19196);
} else {
if((state_val_19237 === (18))){
var inst_19202 = (state_19236[(7)]);
var inst_19211 = cljs.core.first.call(null,inst_19202);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19236__$1,(20),out,inst_19211);
} else {
if((state_val_19237 === (8))){
var inst_19191 = (state_19236[(8)]);
var inst_19190 = (state_19236[(10)]);
var inst_19193 = (inst_19191 < inst_19190);
var inst_19194 = inst_19193;
var state_19236__$1 = state_19236;
if(cljs.core.truth_(inst_19194)){
var statearr_19270_19301 = state_19236__$1;
(statearr_19270_19301[(1)] = (10));

} else {
var statearr_19271_19302 = state_19236__$1;
(statearr_19271_19302[(1)] = (11));

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
});})(c__7313__auto__))
;
return ((function (switch__7251__auto__,c__7313__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7252__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7252__auto____0 = (function (){
var statearr_19275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19275[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7252__auto__);

(statearr_19275[(1)] = (1));

return statearr_19275;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7252__auto____1 = (function (state_19236){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_19236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e19276){if((e19276 instanceof Object)){
var ex__7255__auto__ = e19276;
var statearr_19277_19303 = state_19236;
(statearr_19277_19303[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19304 = state_19236;
state_19236 = G__19304;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7252__auto__ = function(state_19236){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7252__auto____1.call(this,state_19236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7252__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7252__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto__))
})();
var state__7315__auto__ = (function (){var statearr_19278 = f__7314__auto__.call(null);
(statearr_19278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto__);

return statearr_19278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto__))
);

return c__7313__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__19306 = arguments.length;
switch (G__19306) {
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
var G__19309 = arguments.length;
switch (G__19309) {
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
var G__19312 = arguments.length;
switch (G__19312) {
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
var c__7313__auto___19362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___19362,out){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___19362,out){
return (function (state_19336){
var state_val_19337 = (state_19336[(1)]);
if((state_val_19337 === (7))){
var inst_19331 = (state_19336[(2)]);
var state_19336__$1 = state_19336;
var statearr_19338_19363 = state_19336__$1;
(statearr_19338_19363[(2)] = inst_19331);

(statearr_19338_19363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (1))){
var inst_19313 = null;
var state_19336__$1 = (function (){var statearr_19339 = state_19336;
(statearr_19339[(7)] = inst_19313);

return statearr_19339;
})();
var statearr_19340_19364 = state_19336__$1;
(statearr_19340_19364[(2)] = null);

(statearr_19340_19364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (4))){
var inst_19316 = (state_19336[(8)]);
var inst_19316__$1 = (state_19336[(2)]);
var inst_19317 = (inst_19316__$1 == null);
var inst_19318 = cljs.core.not.call(null,inst_19317);
var state_19336__$1 = (function (){var statearr_19341 = state_19336;
(statearr_19341[(8)] = inst_19316__$1);

return statearr_19341;
})();
if(inst_19318){
var statearr_19342_19365 = state_19336__$1;
(statearr_19342_19365[(1)] = (5));

} else {
var statearr_19343_19366 = state_19336__$1;
(statearr_19343_19366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (6))){
var state_19336__$1 = state_19336;
var statearr_19344_19367 = state_19336__$1;
(statearr_19344_19367[(2)] = null);

(statearr_19344_19367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (3))){
var inst_19333 = (state_19336[(2)]);
var inst_19334 = cljs.core.async.close_BANG_.call(null,out);
var state_19336__$1 = (function (){var statearr_19345 = state_19336;
(statearr_19345[(9)] = inst_19333);

return statearr_19345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19336__$1,inst_19334);
} else {
if((state_val_19337 === (2))){
var state_19336__$1 = state_19336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19336__$1,(4),ch);
} else {
if((state_val_19337 === (11))){
var inst_19316 = (state_19336[(8)]);
var inst_19325 = (state_19336[(2)]);
var inst_19313 = inst_19316;
var state_19336__$1 = (function (){var statearr_19346 = state_19336;
(statearr_19346[(7)] = inst_19313);

(statearr_19346[(10)] = inst_19325);

return statearr_19346;
})();
var statearr_19347_19368 = state_19336__$1;
(statearr_19347_19368[(2)] = null);

(statearr_19347_19368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (9))){
var inst_19316 = (state_19336[(8)]);
var state_19336__$1 = state_19336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19336__$1,(11),out,inst_19316);
} else {
if((state_val_19337 === (5))){
var inst_19313 = (state_19336[(7)]);
var inst_19316 = (state_19336[(8)]);
var inst_19320 = cljs.core._EQ_.call(null,inst_19316,inst_19313);
var state_19336__$1 = state_19336;
if(inst_19320){
var statearr_19349_19369 = state_19336__$1;
(statearr_19349_19369[(1)] = (8));

} else {
var statearr_19350_19370 = state_19336__$1;
(statearr_19350_19370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (10))){
var inst_19328 = (state_19336[(2)]);
var state_19336__$1 = state_19336;
var statearr_19351_19371 = state_19336__$1;
(statearr_19351_19371[(2)] = inst_19328);

(statearr_19351_19371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (8))){
var inst_19313 = (state_19336[(7)]);
var tmp19348 = inst_19313;
var inst_19313__$1 = tmp19348;
var state_19336__$1 = (function (){var statearr_19352 = state_19336;
(statearr_19352[(7)] = inst_19313__$1);

return statearr_19352;
})();
var statearr_19353_19372 = state_19336__$1;
(statearr_19353_19372[(2)] = null);

(statearr_19353_19372[(1)] = (2));


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
});})(c__7313__auto___19362,out))
;
return ((function (switch__7251__auto__,c__7313__auto___19362,out){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_19357 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19357[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_19357[(1)] = (1));

return statearr_19357;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_19336){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_19336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e19358){if((e19358 instanceof Object)){
var ex__7255__auto__ = e19358;
var statearr_19359_19373 = state_19336;
(statearr_19359_19373[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19374 = state_19336;
state_19336 = G__19374;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_19336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_19336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___19362,out))
})();
var state__7315__auto__ = (function (){var statearr_19360 = f__7314__auto__.call(null);
(statearr_19360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___19362);

return statearr_19360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___19362,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__19376 = arguments.length;
switch (G__19376) {
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
var c__7313__auto___19445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___19445,out){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___19445,out){
return (function (state_19414){
var state_val_19415 = (state_19414[(1)]);
if((state_val_19415 === (7))){
var inst_19410 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19416_19446 = state_19414__$1;
(statearr_19416_19446[(2)] = inst_19410);

(statearr_19416_19446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (1))){
var inst_19377 = (new Array(n));
var inst_19378 = inst_19377;
var inst_19379 = (0);
var state_19414__$1 = (function (){var statearr_19417 = state_19414;
(statearr_19417[(7)] = inst_19379);

(statearr_19417[(8)] = inst_19378);

return statearr_19417;
})();
var statearr_19418_19447 = state_19414__$1;
(statearr_19418_19447[(2)] = null);

(statearr_19418_19447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (4))){
var inst_19382 = (state_19414[(9)]);
var inst_19382__$1 = (state_19414[(2)]);
var inst_19383 = (inst_19382__$1 == null);
var inst_19384 = cljs.core.not.call(null,inst_19383);
var state_19414__$1 = (function (){var statearr_19419 = state_19414;
(statearr_19419[(9)] = inst_19382__$1);

return statearr_19419;
})();
if(inst_19384){
var statearr_19420_19448 = state_19414__$1;
(statearr_19420_19448[(1)] = (5));

} else {
var statearr_19421_19449 = state_19414__$1;
(statearr_19421_19449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (15))){
var inst_19404 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19422_19450 = state_19414__$1;
(statearr_19422_19450[(2)] = inst_19404);

(statearr_19422_19450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (13))){
var state_19414__$1 = state_19414;
var statearr_19423_19451 = state_19414__$1;
(statearr_19423_19451[(2)] = null);

(statearr_19423_19451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (6))){
var inst_19379 = (state_19414[(7)]);
var inst_19400 = (inst_19379 > (0));
var state_19414__$1 = state_19414;
if(cljs.core.truth_(inst_19400)){
var statearr_19424_19452 = state_19414__$1;
(statearr_19424_19452[(1)] = (12));

} else {
var statearr_19425_19453 = state_19414__$1;
(statearr_19425_19453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (3))){
var inst_19412 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19414__$1,inst_19412);
} else {
if((state_val_19415 === (12))){
var inst_19378 = (state_19414[(8)]);
var inst_19402 = cljs.core.vec.call(null,inst_19378);
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19414__$1,(15),out,inst_19402);
} else {
if((state_val_19415 === (2))){
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19414__$1,(4),ch);
} else {
if((state_val_19415 === (11))){
var inst_19394 = (state_19414[(2)]);
var inst_19395 = (new Array(n));
var inst_19378 = inst_19395;
var inst_19379 = (0);
var state_19414__$1 = (function (){var statearr_19426 = state_19414;
(statearr_19426[(7)] = inst_19379);

(statearr_19426[(10)] = inst_19394);

(statearr_19426[(8)] = inst_19378);

return statearr_19426;
})();
var statearr_19427_19454 = state_19414__$1;
(statearr_19427_19454[(2)] = null);

(statearr_19427_19454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (9))){
var inst_19378 = (state_19414[(8)]);
var inst_19392 = cljs.core.vec.call(null,inst_19378);
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19414__$1,(11),out,inst_19392);
} else {
if((state_val_19415 === (5))){
var inst_19387 = (state_19414[(11)]);
var inst_19379 = (state_19414[(7)]);
var inst_19378 = (state_19414[(8)]);
var inst_19382 = (state_19414[(9)]);
var inst_19386 = (inst_19378[inst_19379] = inst_19382);
var inst_19387__$1 = (inst_19379 + (1));
var inst_19388 = (inst_19387__$1 < n);
var state_19414__$1 = (function (){var statearr_19428 = state_19414;
(statearr_19428[(11)] = inst_19387__$1);

(statearr_19428[(12)] = inst_19386);

return statearr_19428;
})();
if(cljs.core.truth_(inst_19388)){
var statearr_19429_19455 = state_19414__$1;
(statearr_19429_19455[(1)] = (8));

} else {
var statearr_19430_19456 = state_19414__$1;
(statearr_19430_19456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (14))){
var inst_19407 = (state_19414[(2)]);
var inst_19408 = cljs.core.async.close_BANG_.call(null,out);
var state_19414__$1 = (function (){var statearr_19432 = state_19414;
(statearr_19432[(13)] = inst_19407);

return statearr_19432;
})();
var statearr_19433_19457 = state_19414__$1;
(statearr_19433_19457[(2)] = inst_19408);

(statearr_19433_19457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (10))){
var inst_19398 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19434_19458 = state_19414__$1;
(statearr_19434_19458[(2)] = inst_19398);

(statearr_19434_19458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (8))){
var inst_19387 = (state_19414[(11)]);
var inst_19378 = (state_19414[(8)]);
var tmp19431 = inst_19378;
var inst_19378__$1 = tmp19431;
var inst_19379 = inst_19387;
var state_19414__$1 = (function (){var statearr_19435 = state_19414;
(statearr_19435[(7)] = inst_19379);

(statearr_19435[(8)] = inst_19378__$1);

return statearr_19435;
})();
var statearr_19436_19459 = state_19414__$1;
(statearr_19436_19459[(2)] = null);

(statearr_19436_19459[(1)] = (2));


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
});})(c__7313__auto___19445,out))
;
return ((function (switch__7251__auto__,c__7313__auto___19445,out){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_19440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19440[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_19440[(1)] = (1));

return statearr_19440;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_19414){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_19414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e19441){if((e19441 instanceof Object)){
var ex__7255__auto__ = e19441;
var statearr_19442_19460 = state_19414;
(statearr_19442_19460[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19461 = state_19414;
state_19414 = G__19461;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_19414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_19414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___19445,out))
})();
var state__7315__auto__ = (function (){var statearr_19443 = f__7314__auto__.call(null);
(statearr_19443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___19445);

return statearr_19443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___19445,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__19463 = arguments.length;
switch (G__19463) {
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
var c__7313__auto___19536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7313__auto___19536,out){
return (function (){
var f__7314__auto__ = (function (){var switch__7251__auto__ = ((function (c__7313__auto___19536,out){
return (function (state_19505){
var state_val_19506 = (state_19505[(1)]);
if((state_val_19506 === (7))){
var inst_19501 = (state_19505[(2)]);
var state_19505__$1 = state_19505;
var statearr_19507_19537 = state_19505__$1;
(statearr_19507_19537[(2)] = inst_19501);

(statearr_19507_19537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (1))){
var inst_19464 = [];
var inst_19465 = inst_19464;
var inst_19466 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19505__$1 = (function (){var statearr_19508 = state_19505;
(statearr_19508[(7)] = inst_19465);

(statearr_19508[(8)] = inst_19466);

return statearr_19508;
})();
var statearr_19509_19538 = state_19505__$1;
(statearr_19509_19538[(2)] = null);

(statearr_19509_19538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (4))){
var inst_19469 = (state_19505[(9)]);
var inst_19469__$1 = (state_19505[(2)]);
var inst_19470 = (inst_19469__$1 == null);
var inst_19471 = cljs.core.not.call(null,inst_19470);
var state_19505__$1 = (function (){var statearr_19510 = state_19505;
(statearr_19510[(9)] = inst_19469__$1);

return statearr_19510;
})();
if(inst_19471){
var statearr_19511_19539 = state_19505__$1;
(statearr_19511_19539[(1)] = (5));

} else {
var statearr_19512_19540 = state_19505__$1;
(statearr_19512_19540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (15))){
var inst_19495 = (state_19505[(2)]);
var state_19505__$1 = state_19505;
var statearr_19513_19541 = state_19505__$1;
(statearr_19513_19541[(2)] = inst_19495);

(statearr_19513_19541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (13))){
var state_19505__$1 = state_19505;
var statearr_19514_19542 = state_19505__$1;
(statearr_19514_19542[(2)] = null);

(statearr_19514_19542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (6))){
var inst_19465 = (state_19505[(7)]);
var inst_19490 = inst_19465.length;
var inst_19491 = (inst_19490 > (0));
var state_19505__$1 = state_19505;
if(cljs.core.truth_(inst_19491)){
var statearr_19515_19543 = state_19505__$1;
(statearr_19515_19543[(1)] = (12));

} else {
var statearr_19516_19544 = state_19505__$1;
(statearr_19516_19544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (3))){
var inst_19503 = (state_19505[(2)]);
var state_19505__$1 = state_19505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19505__$1,inst_19503);
} else {
if((state_val_19506 === (12))){
var inst_19465 = (state_19505[(7)]);
var inst_19493 = cljs.core.vec.call(null,inst_19465);
var state_19505__$1 = state_19505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19505__$1,(15),out,inst_19493);
} else {
if((state_val_19506 === (2))){
var state_19505__$1 = state_19505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19505__$1,(4),ch);
} else {
if((state_val_19506 === (11))){
var inst_19473 = (state_19505[(10)]);
var inst_19469 = (state_19505[(9)]);
var inst_19483 = (state_19505[(2)]);
var inst_19484 = [];
var inst_19485 = inst_19484.push(inst_19469);
var inst_19465 = inst_19484;
var inst_19466 = inst_19473;
var state_19505__$1 = (function (){var statearr_19517 = state_19505;
(statearr_19517[(11)] = inst_19485);

(statearr_19517[(7)] = inst_19465);

(statearr_19517[(8)] = inst_19466);

(statearr_19517[(12)] = inst_19483);

return statearr_19517;
})();
var statearr_19518_19545 = state_19505__$1;
(statearr_19518_19545[(2)] = null);

(statearr_19518_19545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (9))){
var inst_19465 = (state_19505[(7)]);
var inst_19481 = cljs.core.vec.call(null,inst_19465);
var state_19505__$1 = state_19505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19505__$1,(11),out,inst_19481);
} else {
if((state_val_19506 === (5))){
var inst_19473 = (state_19505[(10)]);
var inst_19469 = (state_19505[(9)]);
var inst_19466 = (state_19505[(8)]);
var inst_19473__$1 = f.call(null,inst_19469);
var inst_19474 = cljs.core._EQ_.call(null,inst_19473__$1,inst_19466);
var inst_19475 = cljs.core.keyword_identical_QMARK_.call(null,inst_19466,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19476 = (inst_19474) || (inst_19475);
var state_19505__$1 = (function (){var statearr_19519 = state_19505;
(statearr_19519[(10)] = inst_19473__$1);

return statearr_19519;
})();
if(cljs.core.truth_(inst_19476)){
var statearr_19520_19546 = state_19505__$1;
(statearr_19520_19546[(1)] = (8));

} else {
var statearr_19521_19547 = state_19505__$1;
(statearr_19521_19547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (14))){
var inst_19498 = (state_19505[(2)]);
var inst_19499 = cljs.core.async.close_BANG_.call(null,out);
var state_19505__$1 = (function (){var statearr_19523 = state_19505;
(statearr_19523[(13)] = inst_19498);

return statearr_19523;
})();
var statearr_19524_19548 = state_19505__$1;
(statearr_19524_19548[(2)] = inst_19499);

(statearr_19524_19548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (10))){
var inst_19488 = (state_19505[(2)]);
var state_19505__$1 = state_19505;
var statearr_19525_19549 = state_19505__$1;
(statearr_19525_19549[(2)] = inst_19488);

(statearr_19525_19549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (8))){
var inst_19473 = (state_19505[(10)]);
var inst_19465 = (state_19505[(7)]);
var inst_19469 = (state_19505[(9)]);
var inst_19478 = inst_19465.push(inst_19469);
var tmp19522 = inst_19465;
var inst_19465__$1 = tmp19522;
var inst_19466 = inst_19473;
var state_19505__$1 = (function (){var statearr_19526 = state_19505;
(statearr_19526[(7)] = inst_19465__$1);

(statearr_19526[(14)] = inst_19478);

(statearr_19526[(8)] = inst_19466);

return statearr_19526;
})();
var statearr_19527_19550 = state_19505__$1;
(statearr_19527_19550[(2)] = null);

(statearr_19527_19550[(1)] = (2));


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
});})(c__7313__auto___19536,out))
;
return ((function (switch__7251__auto__,c__7313__auto___19536,out){
return (function() {
var cljs$core$async$state_machine__7252__auto__ = null;
var cljs$core$async$state_machine__7252__auto____0 = (function (){
var statearr_19531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19531[(0)] = cljs$core$async$state_machine__7252__auto__);

(statearr_19531[(1)] = (1));

return statearr_19531;
});
var cljs$core$async$state_machine__7252__auto____1 = (function (state_19505){
while(true){
var ret_value__7253__auto__ = (function (){try{while(true){
var result__7254__auto__ = switch__7251__auto__.call(null,state_19505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7254__auto__;
}
break;
}
}catch (e19532){if((e19532 instanceof Object)){
var ex__7255__auto__ = e19532;
var statearr_19533_19551 = state_19505;
(statearr_19533_19551[(5)] = ex__7255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19552 = state_19505;
state_19505 = G__19552;
continue;
} else {
return ret_value__7253__auto__;
}
break;
}
});
cljs$core$async$state_machine__7252__auto__ = function(state_19505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7252__auto____1.call(this,state_19505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7252__auto____0;
cljs$core$async$state_machine__7252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7252__auto____1;
return cljs$core$async$state_machine__7252__auto__;
})()
;})(switch__7251__auto__,c__7313__auto___19536,out))
})();
var state__7315__auto__ = (function (){var statearr_19534 = f__7314__auto__.call(null);
(statearr_19534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7313__auto___19536);

return statearr_19534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7315__auto__);
});})(c__7313__auto___19536,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map