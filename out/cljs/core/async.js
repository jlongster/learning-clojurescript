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
if(typeof cljs.core.async.t16691 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16691 = (function (fn_handler,f,meta16692){
this.fn_handler = fn_handler;
this.f = f;
this.meta16692 = meta16692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16693,meta16692__$1){
var self__ = this;
var _16693__$1 = this;
return (new cljs.core.async.t16691(self__.fn_handler,self__.f,meta16692__$1));
});

cljs.core.async.t16691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16693){
var self__ = this;
var _16693__$1 = this;
return self__.meta16692;
});

cljs.core.async.t16691.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta16692","meta16692",-575124997,null)], null);
});

cljs.core.async.t16691.cljs$lang$type = true;

cljs.core.async.t16691.cljs$lang$ctorStr = "cljs.core.async/t16691";

cljs.core.async.t16691.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t16691");
});

cljs.core.async.__GT_t16691 = (function cljs$core$async$fn_handler_$___GT_t16691(fn_handler__$1,f__$1,meta16692){
return (new cljs.core.async.t16691(fn_handler__$1,f__$1,meta16692));
});

}

return (new cljs.core.async.t16691(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16695 = buff;
if(G__16695){
var bit__5624__auto__ = null;
if(cljs.core.truth_((function (){var or__4950__auto__ = bit__5624__auto__;
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
return G__16695.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16695.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16695);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16695);
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
var G__16697 = arguments.length;
switch (G__16697) {
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
var G__16700 = arguments.length;
switch (G__16700) {
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
var val_16702 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16702);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16702,ret){
return (function (){
return fn1.call(null,val_16702);
});})(val_16702,ret))
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
var G__16704 = arguments.length;
switch (G__16704) {
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
var n__5835__auto___16706 = n;
var x_16707 = (0);
while(true){
if((x_16707 < n__5835__auto___16706)){
(a[x_16707] = (0));

var G__16708 = (x_16707 + (1));
x_16707 = G__16708;
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

var G__16709 = (i + (1));
i = G__16709;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16713 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16713 = (function (alt_flag,flag,meta16714){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16714 = meta16714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16715,meta16714__$1){
var self__ = this;
var _16715__$1 = this;
return (new cljs.core.async.t16713(self__.alt_flag,self__.flag,meta16714__$1));
});})(flag))
;

cljs.core.async.t16713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16715){
var self__ = this;
var _16715__$1 = this;
return self__.meta16714;
});})(flag))
;

cljs.core.async.t16713.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16713.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16714","meta16714",1216066501,null)], null);
});})(flag))
;

cljs.core.async.t16713.cljs$lang$type = true;

cljs.core.async.t16713.cljs$lang$ctorStr = "cljs.core.async/t16713";

cljs.core.async.t16713.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t16713");
});})(flag))
;

cljs.core.async.__GT_t16713 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t16713(alt_flag__$1,flag__$1,meta16714){
return (new cljs.core.async.t16713(alt_flag__$1,flag__$1,meta16714));
});})(flag))
;

}

return (new cljs.core.async.t16713(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t16719 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16719 = (function (alt_handler,flag,cb,meta16720){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16720 = meta16720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16721,meta16720__$1){
var self__ = this;
var _16721__$1 = this;
return (new cljs.core.async.t16719(self__.alt_handler,self__.flag,self__.cb,meta16720__$1));
});

cljs.core.async.t16719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16721){
var self__ = this;
var _16721__$1 = this;
return self__.meta16720;
});

cljs.core.async.t16719.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16720","meta16720",268297378,null)], null);
});

cljs.core.async.t16719.cljs$lang$type = true;

cljs.core.async.t16719.cljs$lang$ctorStr = "cljs.core.async/t16719";

cljs.core.async.t16719.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t16719");
});

cljs.core.async.__GT_t16719 = (function cljs$core$async$alt_handler_$___GT_t16719(alt_handler__$1,flag__$1,cb__$1,meta16720){
return (new cljs.core.async.t16719(alt_handler__$1,flag__$1,cb__$1,meta16720));
});

}

return (new cljs.core.async.t16719(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16722_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16722_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16723_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16723_SHARP_,port], null));
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
var G__16724 = (i + (1));
i = G__16724;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16727){
var map__16728 = p__16727;
var map__16728__$1 = ((cljs.core.seq_QMARK_.call(null,map__16728))?cljs.core.apply.call(null,cljs.core.hash_map,map__16728):map__16728);
var opts = map__16728__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16725){
var G__16726 = cljs.core.first.call(null,seq16725);
var seq16725__$1 = cljs.core.next.call(null,seq16725);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16726,seq16725__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__16730 = arguments.length;
switch (G__16730) {
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
var c__7310__auto___16779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___16779){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___16779){
return (function (state_16754){
var state_val_16755 = (state_16754[(1)]);
if((state_val_16755 === (7))){
var inst_16750 = (state_16754[(2)]);
var state_16754__$1 = state_16754;
var statearr_16756_16780 = state_16754__$1;
(statearr_16756_16780[(2)] = inst_16750);

(statearr_16756_16780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16755 === (1))){
var state_16754__$1 = state_16754;
var statearr_16757_16781 = state_16754__$1;
(statearr_16757_16781[(2)] = null);

(statearr_16757_16781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16755 === (4))){
var inst_16733 = (state_16754[(7)]);
var inst_16733__$1 = (state_16754[(2)]);
var inst_16734 = (inst_16733__$1 == null);
var state_16754__$1 = (function (){var statearr_16758 = state_16754;
(statearr_16758[(7)] = inst_16733__$1);

return statearr_16758;
})();
if(cljs.core.truth_(inst_16734)){
var statearr_16759_16782 = state_16754__$1;
(statearr_16759_16782[(1)] = (5));

} else {
var statearr_16760_16783 = state_16754__$1;
(statearr_16760_16783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16755 === (13))){
var state_16754__$1 = state_16754;
var statearr_16761_16784 = state_16754__$1;
(statearr_16761_16784[(2)] = null);

(statearr_16761_16784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16755 === (6))){
var inst_16733 = (state_16754[(7)]);
var state_16754__$1 = state_16754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16754__$1,(11),to,inst_16733);
} else {
if((state_val_16755 === (3))){
var inst_16752 = (state_16754[(2)]);
var state_16754__$1 = state_16754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16754__$1,inst_16752);
} else {
if((state_val_16755 === (12))){
var state_16754__$1 = state_16754;
var statearr_16762_16785 = state_16754__$1;
(statearr_16762_16785[(2)] = null);

(statearr_16762_16785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16755 === (2))){
var state_16754__$1 = state_16754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16754__$1,(4),from);
} else {
if((state_val_16755 === (11))){
var inst_16743 = (state_16754[(2)]);
var state_16754__$1 = state_16754;
if(cljs.core.truth_(inst_16743)){
var statearr_16763_16786 = state_16754__$1;
(statearr_16763_16786[(1)] = (12));

} else {
var statearr_16764_16787 = state_16754__$1;
(statearr_16764_16787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16755 === (9))){
var state_16754__$1 = state_16754;
var statearr_16765_16788 = state_16754__$1;
(statearr_16765_16788[(2)] = null);

(statearr_16765_16788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16755 === (5))){
var state_16754__$1 = state_16754;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16766_16789 = state_16754__$1;
(statearr_16766_16789[(1)] = (8));

} else {
var statearr_16767_16790 = state_16754__$1;
(statearr_16767_16790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16755 === (14))){
var inst_16748 = (state_16754[(2)]);
var state_16754__$1 = state_16754;
var statearr_16768_16791 = state_16754__$1;
(statearr_16768_16791[(2)] = inst_16748);

(statearr_16768_16791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16755 === (10))){
var inst_16740 = (state_16754[(2)]);
var state_16754__$1 = state_16754;
var statearr_16769_16792 = state_16754__$1;
(statearr_16769_16792[(2)] = inst_16740);

(statearr_16769_16792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16755 === (8))){
var inst_16737 = cljs.core.async.close_BANG_.call(null,to);
var state_16754__$1 = state_16754;
var statearr_16770_16793 = state_16754__$1;
(statearr_16770_16793[(2)] = inst_16737);

(statearr_16770_16793[(1)] = (10));


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
});})(c__7310__auto___16779))
;
return ((function (switch__7248__auto__,c__7310__auto___16779){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_16774 = [null,null,null,null,null,null,null,null];
(statearr_16774[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_16774[(1)] = (1));

return statearr_16774;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_16754){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16775){if((e16775 instanceof Object)){
var ex__7252__auto__ = e16775;
var statearr_16776_16794 = state_16754;
(statearr_16776_16794[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16795 = state_16754;
state_16754 = G__16795;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_16754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_16754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___16779))
})();
var state__7312__auto__ = (function (){var statearr_16777 = f__7311__auto__.call(null);
(statearr_16777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___16779);

return statearr_16777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___16779))
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
return (function (p__16979){
var vec__16980 = p__16979;
var v = cljs.core.nth.call(null,vec__16980,(0),null);
var p = cljs.core.nth.call(null,vec__16980,(1),null);
var job = vec__16980;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7310__auto___17162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___17162,res,vec__16980,v,p,job,jobs,results){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___17162,res,vec__16980,v,p,job,jobs,results){
return (function (state_16985){
var state_val_16986 = (state_16985[(1)]);
if((state_val_16986 === (1))){
var state_16985__$1 = state_16985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16985__$1,(2),res,v);
} else {
if((state_val_16986 === (2))){
var inst_16982 = (state_16985[(2)]);
var inst_16983 = cljs.core.async.close_BANG_.call(null,res);
var state_16985__$1 = (function (){var statearr_16987 = state_16985;
(statearr_16987[(7)] = inst_16982);

return statearr_16987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16985__$1,inst_16983);
} else {
return null;
}
}
});})(c__7310__auto___17162,res,vec__16980,v,p,job,jobs,results))
;
return ((function (switch__7248__auto__,c__7310__auto___17162,res,vec__16980,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0 = (function (){
var statearr_16991 = [null,null,null,null,null,null,null,null];
(statearr_16991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__);

(statearr_16991[(1)] = (1));

return statearr_16991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1 = (function (state_16985){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16992){if((e16992 instanceof Object)){
var ex__7252__auto__ = e16992;
var statearr_16993_17163 = state_16985;
(statearr_16993_17163[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17164 = state_16985;
state_16985 = G__17164;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = function(state_16985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1.call(this,state_16985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___17162,res,vec__16980,v,p,job,jobs,results))
})();
var state__7312__auto__ = (function (){var statearr_16994 = f__7311__auto__.call(null);
(statearr_16994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17162);

return statearr_16994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___17162,res,vec__16980,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16995){
var vec__16996 = p__16995;
var v = cljs.core.nth.call(null,vec__16996,(0),null);
var p = cljs.core.nth.call(null,vec__16996,(1),null);
var job = vec__16996;
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
var n__5835__auto___17165 = n;
var __17166 = (0);
while(true){
if((__17166 < n__5835__auto___17165)){
var G__16997_17167 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16997_17167) {
case "compute":
var c__7310__auto___17169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17166,c__7310__auto___17169,G__16997_17167,n__5835__auto___17165,jobs,results,process,async){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (__17166,c__7310__auto___17169,G__16997_17167,n__5835__auto___17165,jobs,results,process,async){
return (function (state_17010){
var state_val_17011 = (state_17010[(1)]);
if((state_val_17011 === (1))){
var state_17010__$1 = state_17010;
var statearr_17012_17170 = state_17010__$1;
(statearr_17012_17170[(2)] = null);

(statearr_17012_17170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (2))){
var state_17010__$1 = state_17010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17010__$1,(4),jobs);
} else {
if((state_val_17011 === (3))){
var inst_17008 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17010__$1,inst_17008);
} else {
if((state_val_17011 === (4))){
var inst_17000 = (state_17010[(2)]);
var inst_17001 = process.call(null,inst_17000);
var state_17010__$1 = state_17010;
if(cljs.core.truth_(inst_17001)){
var statearr_17013_17171 = state_17010__$1;
(statearr_17013_17171[(1)] = (5));

} else {
var statearr_17014_17172 = state_17010__$1;
(statearr_17014_17172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (5))){
var state_17010__$1 = state_17010;
var statearr_17015_17173 = state_17010__$1;
(statearr_17015_17173[(2)] = null);

(statearr_17015_17173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (6))){
var state_17010__$1 = state_17010;
var statearr_17016_17174 = state_17010__$1;
(statearr_17016_17174[(2)] = null);

(statearr_17016_17174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (7))){
var inst_17006 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
var statearr_17017_17175 = state_17010__$1;
(statearr_17017_17175[(2)] = inst_17006);

(statearr_17017_17175[(1)] = (3));


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
});})(__17166,c__7310__auto___17169,G__16997_17167,n__5835__auto___17165,jobs,results,process,async))
;
return ((function (__17166,switch__7248__auto__,c__7310__auto___17169,G__16997_17167,n__5835__auto___17165,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0 = (function (){
var statearr_17021 = [null,null,null,null,null,null,null];
(statearr_17021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__);

(statearr_17021[(1)] = (1));

return statearr_17021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1 = (function (state_17010){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17022){if((e17022 instanceof Object)){
var ex__7252__auto__ = e17022;
var statearr_17023_17176 = state_17010;
(statearr_17023_17176[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17177 = state_17010;
state_17010 = G__17177;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = function(state_17010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1.call(this,state_17010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__;
})()
;})(__17166,switch__7248__auto__,c__7310__auto___17169,G__16997_17167,n__5835__auto___17165,jobs,results,process,async))
})();
var state__7312__auto__ = (function (){var statearr_17024 = f__7311__auto__.call(null);
(statearr_17024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17169);

return statearr_17024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(__17166,c__7310__auto___17169,G__16997_17167,n__5835__auto___17165,jobs,results,process,async))
);


break;
case "async":
var c__7310__auto___17178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17166,c__7310__auto___17178,G__16997_17167,n__5835__auto___17165,jobs,results,process,async){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (__17166,c__7310__auto___17178,G__16997_17167,n__5835__auto___17165,jobs,results,process,async){
return (function (state_17037){
var state_val_17038 = (state_17037[(1)]);
if((state_val_17038 === (1))){
var state_17037__$1 = state_17037;
var statearr_17039_17179 = state_17037__$1;
(statearr_17039_17179[(2)] = null);

(statearr_17039_17179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (2))){
var state_17037__$1 = state_17037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17037__$1,(4),jobs);
} else {
if((state_val_17038 === (3))){
var inst_17035 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17037__$1,inst_17035);
} else {
if((state_val_17038 === (4))){
var inst_17027 = (state_17037[(2)]);
var inst_17028 = async.call(null,inst_17027);
var state_17037__$1 = state_17037;
if(cljs.core.truth_(inst_17028)){
var statearr_17040_17180 = state_17037__$1;
(statearr_17040_17180[(1)] = (5));

} else {
var statearr_17041_17181 = state_17037__$1;
(statearr_17041_17181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (5))){
var state_17037__$1 = state_17037;
var statearr_17042_17182 = state_17037__$1;
(statearr_17042_17182[(2)] = null);

(statearr_17042_17182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (6))){
var state_17037__$1 = state_17037;
var statearr_17043_17183 = state_17037__$1;
(statearr_17043_17183[(2)] = null);

(statearr_17043_17183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (7))){
var inst_17033 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17044_17184 = state_17037__$1;
(statearr_17044_17184[(2)] = inst_17033);

(statearr_17044_17184[(1)] = (3));


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
});})(__17166,c__7310__auto___17178,G__16997_17167,n__5835__auto___17165,jobs,results,process,async))
;
return ((function (__17166,switch__7248__auto__,c__7310__auto___17178,G__16997_17167,n__5835__auto___17165,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0 = (function (){
var statearr_17048 = [null,null,null,null,null,null,null];
(statearr_17048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__);

(statearr_17048[(1)] = (1));

return statearr_17048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1 = (function (state_17037){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17049){if((e17049 instanceof Object)){
var ex__7252__auto__ = e17049;
var statearr_17050_17185 = state_17037;
(statearr_17050_17185[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17186 = state_17037;
state_17037 = G__17186;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = function(state_17037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1.call(this,state_17037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__;
})()
;})(__17166,switch__7248__auto__,c__7310__auto___17178,G__16997_17167,n__5835__auto___17165,jobs,results,process,async))
})();
var state__7312__auto__ = (function (){var statearr_17051 = f__7311__auto__.call(null);
(statearr_17051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17178);

return statearr_17051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(__17166,c__7310__auto___17178,G__16997_17167,n__5835__auto___17165,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17187 = (__17166 + (1));
__17166 = G__17187;
continue;
} else {
}
break;
}

var c__7310__auto___17188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___17188,jobs,results,process,async){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___17188,jobs,results,process,async){
return (function (state_17073){
var state_val_17074 = (state_17073[(1)]);
if((state_val_17074 === (1))){
var state_17073__$1 = state_17073;
var statearr_17075_17189 = state_17073__$1;
(statearr_17075_17189[(2)] = null);

(statearr_17075_17189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (2))){
var state_17073__$1 = state_17073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17073__$1,(4),from);
} else {
if((state_val_17074 === (3))){
var inst_17071 = (state_17073[(2)]);
var state_17073__$1 = state_17073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17073__$1,inst_17071);
} else {
if((state_val_17074 === (4))){
var inst_17054 = (state_17073[(7)]);
var inst_17054__$1 = (state_17073[(2)]);
var inst_17055 = (inst_17054__$1 == null);
var state_17073__$1 = (function (){var statearr_17076 = state_17073;
(statearr_17076[(7)] = inst_17054__$1);

return statearr_17076;
})();
if(cljs.core.truth_(inst_17055)){
var statearr_17077_17190 = state_17073__$1;
(statearr_17077_17190[(1)] = (5));

} else {
var statearr_17078_17191 = state_17073__$1;
(statearr_17078_17191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (5))){
var inst_17057 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17073__$1 = state_17073;
var statearr_17079_17192 = state_17073__$1;
(statearr_17079_17192[(2)] = inst_17057);

(statearr_17079_17192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (6))){
var inst_17054 = (state_17073[(7)]);
var inst_17059 = (state_17073[(8)]);
var inst_17059__$1 = cljs.core.async.chan.call(null,(1));
var inst_17060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17061 = [inst_17054,inst_17059__$1];
var inst_17062 = (new cljs.core.PersistentVector(null,2,(5),inst_17060,inst_17061,null));
var state_17073__$1 = (function (){var statearr_17080 = state_17073;
(statearr_17080[(8)] = inst_17059__$1);

return statearr_17080;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17073__$1,(8),jobs,inst_17062);
} else {
if((state_val_17074 === (7))){
var inst_17069 = (state_17073[(2)]);
var state_17073__$1 = state_17073;
var statearr_17081_17193 = state_17073__$1;
(statearr_17081_17193[(2)] = inst_17069);

(statearr_17081_17193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (8))){
var inst_17059 = (state_17073[(8)]);
var inst_17064 = (state_17073[(2)]);
var state_17073__$1 = (function (){var statearr_17082 = state_17073;
(statearr_17082[(9)] = inst_17064);

return statearr_17082;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17073__$1,(9),results,inst_17059);
} else {
if((state_val_17074 === (9))){
var inst_17066 = (state_17073[(2)]);
var state_17073__$1 = (function (){var statearr_17083 = state_17073;
(statearr_17083[(10)] = inst_17066);

return statearr_17083;
})();
var statearr_17084_17194 = state_17073__$1;
(statearr_17084_17194[(2)] = null);

(statearr_17084_17194[(1)] = (2));


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
});})(c__7310__auto___17188,jobs,results,process,async))
;
return ((function (switch__7248__auto__,c__7310__auto___17188,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0 = (function (){
var statearr_17088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17088[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__);

(statearr_17088[(1)] = (1));

return statearr_17088;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1 = (function (state_17073){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17089){if((e17089 instanceof Object)){
var ex__7252__auto__ = e17089;
var statearr_17090_17195 = state_17073;
(statearr_17090_17195[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17196 = state_17073;
state_17073 = G__17196;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = function(state_17073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1.call(this,state_17073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___17188,jobs,results,process,async))
})();
var state__7312__auto__ = (function (){var statearr_17091 = f__7311__auto__.call(null);
(statearr_17091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17188);

return statearr_17091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___17188,jobs,results,process,async))
);


var c__7310__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto__,jobs,results,process,async){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto__,jobs,results,process,async){
return (function (state_17129){
var state_val_17130 = (state_17129[(1)]);
if((state_val_17130 === (7))){
var inst_17125 = (state_17129[(2)]);
var state_17129__$1 = state_17129;
var statearr_17131_17197 = state_17129__$1;
(statearr_17131_17197[(2)] = inst_17125);

(statearr_17131_17197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (20))){
var state_17129__$1 = state_17129;
var statearr_17132_17198 = state_17129__$1;
(statearr_17132_17198[(2)] = null);

(statearr_17132_17198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (1))){
var state_17129__$1 = state_17129;
var statearr_17133_17199 = state_17129__$1;
(statearr_17133_17199[(2)] = null);

(statearr_17133_17199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (4))){
var inst_17094 = (state_17129[(7)]);
var inst_17094__$1 = (state_17129[(2)]);
var inst_17095 = (inst_17094__$1 == null);
var state_17129__$1 = (function (){var statearr_17134 = state_17129;
(statearr_17134[(7)] = inst_17094__$1);

return statearr_17134;
})();
if(cljs.core.truth_(inst_17095)){
var statearr_17135_17200 = state_17129__$1;
(statearr_17135_17200[(1)] = (5));

} else {
var statearr_17136_17201 = state_17129__$1;
(statearr_17136_17201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (15))){
var inst_17107 = (state_17129[(8)]);
var state_17129__$1 = state_17129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17129__$1,(18),to,inst_17107);
} else {
if((state_val_17130 === (21))){
var inst_17120 = (state_17129[(2)]);
var state_17129__$1 = state_17129;
var statearr_17137_17202 = state_17129__$1;
(statearr_17137_17202[(2)] = inst_17120);

(statearr_17137_17202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (13))){
var inst_17122 = (state_17129[(2)]);
var state_17129__$1 = (function (){var statearr_17138 = state_17129;
(statearr_17138[(9)] = inst_17122);

return statearr_17138;
})();
var statearr_17139_17203 = state_17129__$1;
(statearr_17139_17203[(2)] = null);

(statearr_17139_17203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (6))){
var inst_17094 = (state_17129[(7)]);
var state_17129__$1 = state_17129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17129__$1,(11),inst_17094);
} else {
if((state_val_17130 === (17))){
var inst_17115 = (state_17129[(2)]);
var state_17129__$1 = state_17129;
if(cljs.core.truth_(inst_17115)){
var statearr_17140_17204 = state_17129__$1;
(statearr_17140_17204[(1)] = (19));

} else {
var statearr_17141_17205 = state_17129__$1;
(statearr_17141_17205[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (3))){
var inst_17127 = (state_17129[(2)]);
var state_17129__$1 = state_17129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17129__$1,inst_17127);
} else {
if((state_val_17130 === (12))){
var inst_17104 = (state_17129[(10)]);
var state_17129__$1 = state_17129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17129__$1,(14),inst_17104);
} else {
if((state_val_17130 === (2))){
var state_17129__$1 = state_17129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17129__$1,(4),results);
} else {
if((state_val_17130 === (19))){
var state_17129__$1 = state_17129;
var statearr_17142_17206 = state_17129__$1;
(statearr_17142_17206[(2)] = null);

(statearr_17142_17206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (11))){
var inst_17104 = (state_17129[(2)]);
var state_17129__$1 = (function (){var statearr_17143 = state_17129;
(statearr_17143[(10)] = inst_17104);

return statearr_17143;
})();
var statearr_17144_17207 = state_17129__$1;
(statearr_17144_17207[(2)] = null);

(statearr_17144_17207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (9))){
var state_17129__$1 = state_17129;
var statearr_17145_17208 = state_17129__$1;
(statearr_17145_17208[(2)] = null);

(statearr_17145_17208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (5))){
var state_17129__$1 = state_17129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17146_17209 = state_17129__$1;
(statearr_17146_17209[(1)] = (8));

} else {
var statearr_17147_17210 = state_17129__$1;
(statearr_17147_17210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (14))){
var inst_17109 = (state_17129[(11)]);
var inst_17107 = (state_17129[(8)]);
var inst_17107__$1 = (state_17129[(2)]);
var inst_17108 = (inst_17107__$1 == null);
var inst_17109__$1 = cljs.core.not.call(null,inst_17108);
var state_17129__$1 = (function (){var statearr_17148 = state_17129;
(statearr_17148[(11)] = inst_17109__$1);

(statearr_17148[(8)] = inst_17107__$1);

return statearr_17148;
})();
if(inst_17109__$1){
var statearr_17149_17211 = state_17129__$1;
(statearr_17149_17211[(1)] = (15));

} else {
var statearr_17150_17212 = state_17129__$1;
(statearr_17150_17212[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (16))){
var inst_17109 = (state_17129[(11)]);
var state_17129__$1 = state_17129;
var statearr_17151_17213 = state_17129__$1;
(statearr_17151_17213[(2)] = inst_17109);

(statearr_17151_17213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (10))){
var inst_17101 = (state_17129[(2)]);
var state_17129__$1 = state_17129;
var statearr_17152_17214 = state_17129__$1;
(statearr_17152_17214[(2)] = inst_17101);

(statearr_17152_17214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (18))){
var inst_17112 = (state_17129[(2)]);
var state_17129__$1 = state_17129;
var statearr_17153_17215 = state_17129__$1;
(statearr_17153_17215[(2)] = inst_17112);

(statearr_17153_17215[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17130 === (8))){
var inst_17098 = cljs.core.async.close_BANG_.call(null,to);
var state_17129__$1 = state_17129;
var statearr_17154_17216 = state_17129__$1;
(statearr_17154_17216[(2)] = inst_17098);

(statearr_17154_17216[(1)] = (10));


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
var statearr_17158 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__);

(statearr_17158[(1)] = (1));

return statearr_17158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1 = (function (state_17129){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17159){if((e17159 instanceof Object)){
var ex__7252__auto__ = e17159;
var statearr_17160_17217 = state_17129;
(statearr_17160_17217[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17218 = state_17129;
state_17129 = G__17218;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__ = function(state_17129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1.call(this,state_17129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto__,jobs,results,process,async))
})();
var state__7312__auto__ = (function (){var statearr_17161 = f__7311__auto__.call(null);
(statearr_17161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto__);

return statearr_17161;
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
var G__17220 = arguments.length;
switch (G__17220) {
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
var G__17223 = arguments.length;
switch (G__17223) {
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
var G__17226 = arguments.length;
switch (G__17226) {
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
var c__7310__auto___17278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___17278,tc,fc){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___17278,tc,fc){
return (function (state_17252){
var state_val_17253 = (state_17252[(1)]);
if((state_val_17253 === (7))){
var inst_17248 = (state_17252[(2)]);
var state_17252__$1 = state_17252;
var statearr_17254_17279 = state_17252__$1;
(statearr_17254_17279[(2)] = inst_17248);

(statearr_17254_17279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (1))){
var state_17252__$1 = state_17252;
var statearr_17255_17280 = state_17252__$1;
(statearr_17255_17280[(2)] = null);

(statearr_17255_17280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (4))){
var inst_17229 = (state_17252[(7)]);
var inst_17229__$1 = (state_17252[(2)]);
var inst_17230 = (inst_17229__$1 == null);
var state_17252__$1 = (function (){var statearr_17256 = state_17252;
(statearr_17256[(7)] = inst_17229__$1);

return statearr_17256;
})();
if(cljs.core.truth_(inst_17230)){
var statearr_17257_17281 = state_17252__$1;
(statearr_17257_17281[(1)] = (5));

} else {
var statearr_17258_17282 = state_17252__$1;
(statearr_17258_17282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (13))){
var state_17252__$1 = state_17252;
var statearr_17259_17283 = state_17252__$1;
(statearr_17259_17283[(2)] = null);

(statearr_17259_17283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (6))){
var inst_17229 = (state_17252[(7)]);
var inst_17235 = p.call(null,inst_17229);
var state_17252__$1 = state_17252;
if(cljs.core.truth_(inst_17235)){
var statearr_17260_17284 = state_17252__$1;
(statearr_17260_17284[(1)] = (9));

} else {
var statearr_17261_17285 = state_17252__$1;
(statearr_17261_17285[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (3))){
var inst_17250 = (state_17252[(2)]);
var state_17252__$1 = state_17252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17252__$1,inst_17250);
} else {
if((state_val_17253 === (12))){
var state_17252__$1 = state_17252;
var statearr_17262_17286 = state_17252__$1;
(statearr_17262_17286[(2)] = null);

(statearr_17262_17286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (2))){
var state_17252__$1 = state_17252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17252__$1,(4),ch);
} else {
if((state_val_17253 === (11))){
var inst_17229 = (state_17252[(7)]);
var inst_17239 = (state_17252[(2)]);
var state_17252__$1 = state_17252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17252__$1,(8),inst_17239,inst_17229);
} else {
if((state_val_17253 === (9))){
var state_17252__$1 = state_17252;
var statearr_17263_17287 = state_17252__$1;
(statearr_17263_17287[(2)] = tc);

(statearr_17263_17287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (5))){
var inst_17232 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17233 = cljs.core.async.close_BANG_.call(null,fc);
var state_17252__$1 = (function (){var statearr_17264 = state_17252;
(statearr_17264[(8)] = inst_17232);

return statearr_17264;
})();
var statearr_17265_17288 = state_17252__$1;
(statearr_17265_17288[(2)] = inst_17233);

(statearr_17265_17288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (14))){
var inst_17246 = (state_17252[(2)]);
var state_17252__$1 = state_17252;
var statearr_17266_17289 = state_17252__$1;
(statearr_17266_17289[(2)] = inst_17246);

(statearr_17266_17289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (10))){
var state_17252__$1 = state_17252;
var statearr_17267_17290 = state_17252__$1;
(statearr_17267_17290[(2)] = fc);

(statearr_17267_17290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (8))){
var inst_17241 = (state_17252[(2)]);
var state_17252__$1 = state_17252;
if(cljs.core.truth_(inst_17241)){
var statearr_17268_17291 = state_17252__$1;
(statearr_17268_17291[(1)] = (12));

} else {
var statearr_17269_17292 = state_17252__$1;
(statearr_17269_17292[(1)] = (13));

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
});})(c__7310__auto___17278,tc,fc))
;
return ((function (switch__7248__auto__,c__7310__auto___17278,tc,fc){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_17273 = [null,null,null,null,null,null,null,null,null];
(statearr_17273[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_17273[(1)] = (1));

return statearr_17273;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_17252){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17274){if((e17274 instanceof Object)){
var ex__7252__auto__ = e17274;
var statearr_17275_17293 = state_17252;
(statearr_17275_17293[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17294 = state_17252;
state_17252 = G__17294;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_17252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_17252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___17278,tc,fc))
})();
var state__7312__auto__ = (function (){var statearr_17276 = f__7311__auto__.call(null);
(statearr_17276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17278);

return statearr_17276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___17278,tc,fc))
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
return (function (state_17341){
var state_val_17342 = (state_17341[(1)]);
if((state_val_17342 === (1))){
var inst_17327 = init;
var state_17341__$1 = (function (){var statearr_17343 = state_17341;
(statearr_17343[(7)] = inst_17327);

return statearr_17343;
})();
var statearr_17344_17359 = state_17341__$1;
(statearr_17344_17359[(2)] = null);

(statearr_17344_17359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17342 === (2))){
var state_17341__$1 = state_17341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17341__$1,(4),ch);
} else {
if((state_val_17342 === (3))){
var inst_17339 = (state_17341[(2)]);
var state_17341__$1 = state_17341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17341__$1,inst_17339);
} else {
if((state_val_17342 === (4))){
var inst_17330 = (state_17341[(8)]);
var inst_17330__$1 = (state_17341[(2)]);
var inst_17331 = (inst_17330__$1 == null);
var state_17341__$1 = (function (){var statearr_17345 = state_17341;
(statearr_17345[(8)] = inst_17330__$1);

return statearr_17345;
})();
if(cljs.core.truth_(inst_17331)){
var statearr_17346_17360 = state_17341__$1;
(statearr_17346_17360[(1)] = (5));

} else {
var statearr_17347_17361 = state_17341__$1;
(statearr_17347_17361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17342 === (5))){
var inst_17327 = (state_17341[(7)]);
var state_17341__$1 = state_17341;
var statearr_17348_17362 = state_17341__$1;
(statearr_17348_17362[(2)] = inst_17327);

(statearr_17348_17362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17342 === (6))){
var inst_17327 = (state_17341[(7)]);
var inst_17330 = (state_17341[(8)]);
var inst_17334 = f.call(null,inst_17327,inst_17330);
var inst_17327__$1 = inst_17334;
var state_17341__$1 = (function (){var statearr_17349 = state_17341;
(statearr_17349[(7)] = inst_17327__$1);

return statearr_17349;
})();
var statearr_17350_17363 = state_17341__$1;
(statearr_17350_17363[(2)] = null);

(statearr_17350_17363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17342 === (7))){
var inst_17337 = (state_17341[(2)]);
var state_17341__$1 = state_17341;
var statearr_17351_17364 = state_17341__$1;
(statearr_17351_17364[(2)] = inst_17337);

(statearr_17351_17364[(1)] = (3));


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
var statearr_17355 = [null,null,null,null,null,null,null,null,null];
(statearr_17355[(0)] = cljs$core$async$reduce_$_state_machine__7249__auto__);

(statearr_17355[(1)] = (1));

return statearr_17355;
});
var cljs$core$async$reduce_$_state_machine__7249__auto____1 = (function (state_17341){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17356){if((e17356 instanceof Object)){
var ex__7252__auto__ = e17356;
var statearr_17357_17365 = state_17341;
(statearr_17357_17365[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17366 = state_17341;
state_17341 = G__17366;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7249__auto__ = function(state_17341){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7249__auto____1.call(this,state_17341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7249__auto____0;
cljs$core$async$reduce_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7249__auto____1;
return cljs$core$async$reduce_$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto__))
})();
var state__7312__auto__ = (function (){var statearr_17358 = f__7311__auto__.call(null);
(statearr_17358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto__);

return statearr_17358;
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
var G__17368 = arguments.length;
switch (G__17368) {
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
return (function (state_17393){
var state_val_17394 = (state_17393[(1)]);
if((state_val_17394 === (7))){
var inst_17375 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
var statearr_17395_17419 = state_17393__$1;
(statearr_17395_17419[(2)] = inst_17375);

(statearr_17395_17419[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (1))){
var inst_17369 = cljs.core.seq.call(null,coll);
var inst_17370 = inst_17369;
var state_17393__$1 = (function (){var statearr_17396 = state_17393;
(statearr_17396[(7)] = inst_17370);

return statearr_17396;
})();
var statearr_17397_17420 = state_17393__$1;
(statearr_17397_17420[(2)] = null);

(statearr_17397_17420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (4))){
var inst_17370 = (state_17393[(7)]);
var inst_17373 = cljs.core.first.call(null,inst_17370);
var state_17393__$1 = state_17393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17393__$1,(7),ch,inst_17373);
} else {
if((state_val_17394 === (13))){
var inst_17387 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
var statearr_17398_17421 = state_17393__$1;
(statearr_17398_17421[(2)] = inst_17387);

(statearr_17398_17421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (6))){
var inst_17378 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
if(cljs.core.truth_(inst_17378)){
var statearr_17399_17422 = state_17393__$1;
(statearr_17399_17422[(1)] = (8));

} else {
var statearr_17400_17423 = state_17393__$1;
(statearr_17400_17423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (3))){
var inst_17391 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17393__$1,inst_17391);
} else {
if((state_val_17394 === (12))){
var state_17393__$1 = state_17393;
var statearr_17401_17424 = state_17393__$1;
(statearr_17401_17424[(2)] = null);

(statearr_17401_17424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (2))){
var inst_17370 = (state_17393[(7)]);
var state_17393__$1 = state_17393;
if(cljs.core.truth_(inst_17370)){
var statearr_17402_17425 = state_17393__$1;
(statearr_17402_17425[(1)] = (4));

} else {
var statearr_17403_17426 = state_17393__$1;
(statearr_17403_17426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (11))){
var inst_17384 = cljs.core.async.close_BANG_.call(null,ch);
var state_17393__$1 = state_17393;
var statearr_17404_17427 = state_17393__$1;
(statearr_17404_17427[(2)] = inst_17384);

(statearr_17404_17427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (9))){
var state_17393__$1 = state_17393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17405_17428 = state_17393__$1;
(statearr_17405_17428[(1)] = (11));

} else {
var statearr_17406_17429 = state_17393__$1;
(statearr_17406_17429[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (5))){
var inst_17370 = (state_17393[(7)]);
var state_17393__$1 = state_17393;
var statearr_17407_17430 = state_17393__$1;
(statearr_17407_17430[(2)] = inst_17370);

(statearr_17407_17430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (10))){
var inst_17389 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
var statearr_17408_17431 = state_17393__$1;
(statearr_17408_17431[(2)] = inst_17389);

(statearr_17408_17431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (8))){
var inst_17370 = (state_17393[(7)]);
var inst_17380 = cljs.core.next.call(null,inst_17370);
var inst_17370__$1 = inst_17380;
var state_17393__$1 = (function (){var statearr_17409 = state_17393;
(statearr_17409[(7)] = inst_17370__$1);

return statearr_17409;
})();
var statearr_17410_17432 = state_17393__$1;
(statearr_17410_17432[(2)] = null);

(statearr_17410_17432[(1)] = (2));


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
var statearr_17414 = [null,null,null,null,null,null,null,null];
(statearr_17414[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_17414[(1)] = (1));

return statearr_17414;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_17393){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17415){if((e17415 instanceof Object)){
var ex__7252__auto__ = e17415;
var statearr_17416_17433 = state_17393;
(statearr_17416_17433[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17434 = state_17393;
state_17393 = G__17434;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_17393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_17393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto__))
})();
var state__7312__auto__ = (function (){var statearr_17417 = f__7311__auto__.call(null);
(statearr_17417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto__);

return statearr_17417;
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

cljs.core.async.Mux = (function (){var obj17436 = {};
return obj17436;
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


cljs.core.async.Mult = (function (){var obj17438 = {};
return obj17438;
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
if(typeof cljs.core.async.t17660 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17660 = (function (mult,ch,cs,meta17661){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17661 = meta17661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17662,meta17661__$1){
var self__ = this;
var _17662__$1 = this;
return (new cljs.core.async.t17660(self__.mult,self__.ch,self__.cs,meta17661__$1));
});})(cs))
;

cljs.core.async.t17660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17662){
var self__ = this;
var _17662__$1 = this;
return self__.meta17661;
});})(cs))
;

cljs.core.async.t17660.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17660.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17660.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17660.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17660.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17660.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17660.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17661","meta17661",1725757830,null)], null);
});})(cs))
;

cljs.core.async.t17660.cljs$lang$type = true;

cljs.core.async.t17660.cljs$lang$ctorStr = "cljs.core.async/t17660";

cljs.core.async.t17660.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t17660");
});})(cs))
;

cljs.core.async.__GT_t17660 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t17660(mult__$1,ch__$1,cs__$1,meta17661){
return (new cljs.core.async.t17660(mult__$1,ch__$1,cs__$1,meta17661));
});})(cs))
;

}

return (new cljs.core.async.t17660(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7310__auto___17881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___17881,cs,m,dchan,dctr,done){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___17881,cs,m,dchan,dctr,done){
return (function (state_17793){
var state_val_17794 = (state_17793[(1)]);
if((state_val_17794 === (7))){
var inst_17789 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17795_17882 = state_17793__$1;
(statearr_17795_17882[(2)] = inst_17789);

(statearr_17795_17882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (20))){
var inst_17694 = (state_17793[(7)]);
var inst_17704 = cljs.core.first.call(null,inst_17694);
var inst_17705 = cljs.core.nth.call(null,inst_17704,(0),null);
var inst_17706 = cljs.core.nth.call(null,inst_17704,(1),null);
var state_17793__$1 = (function (){var statearr_17796 = state_17793;
(statearr_17796[(8)] = inst_17705);

return statearr_17796;
})();
if(cljs.core.truth_(inst_17706)){
var statearr_17797_17883 = state_17793__$1;
(statearr_17797_17883[(1)] = (22));

} else {
var statearr_17798_17884 = state_17793__$1;
(statearr_17798_17884[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (27))){
var inst_17734 = (state_17793[(9)]);
var inst_17736 = (state_17793[(10)]);
var inst_17741 = (state_17793[(11)]);
var inst_17665 = (state_17793[(12)]);
var inst_17741__$1 = cljs.core._nth.call(null,inst_17734,inst_17736);
var inst_17742 = cljs.core.async.put_BANG_.call(null,inst_17741__$1,inst_17665,done);
var state_17793__$1 = (function (){var statearr_17799 = state_17793;
(statearr_17799[(11)] = inst_17741__$1);

return statearr_17799;
})();
if(cljs.core.truth_(inst_17742)){
var statearr_17800_17885 = state_17793__$1;
(statearr_17800_17885[(1)] = (30));

} else {
var statearr_17801_17886 = state_17793__$1;
(statearr_17801_17886[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (1))){
var state_17793__$1 = state_17793;
var statearr_17802_17887 = state_17793__$1;
(statearr_17802_17887[(2)] = null);

(statearr_17802_17887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (24))){
var inst_17694 = (state_17793[(7)]);
var inst_17711 = (state_17793[(2)]);
var inst_17712 = cljs.core.next.call(null,inst_17694);
var inst_17674 = inst_17712;
var inst_17675 = null;
var inst_17676 = (0);
var inst_17677 = (0);
var state_17793__$1 = (function (){var statearr_17803 = state_17793;
(statearr_17803[(13)] = inst_17675);

(statearr_17803[(14)] = inst_17676);

(statearr_17803[(15)] = inst_17711);

(statearr_17803[(16)] = inst_17677);

(statearr_17803[(17)] = inst_17674);

return statearr_17803;
})();
var statearr_17804_17888 = state_17793__$1;
(statearr_17804_17888[(2)] = null);

(statearr_17804_17888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (39))){
var state_17793__$1 = state_17793;
var statearr_17808_17889 = state_17793__$1;
(statearr_17808_17889[(2)] = null);

(statearr_17808_17889[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (4))){
var inst_17665 = (state_17793[(12)]);
var inst_17665__$1 = (state_17793[(2)]);
var inst_17666 = (inst_17665__$1 == null);
var state_17793__$1 = (function (){var statearr_17809 = state_17793;
(statearr_17809[(12)] = inst_17665__$1);

return statearr_17809;
})();
if(cljs.core.truth_(inst_17666)){
var statearr_17810_17890 = state_17793__$1;
(statearr_17810_17890[(1)] = (5));

} else {
var statearr_17811_17891 = state_17793__$1;
(statearr_17811_17891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (15))){
var inst_17675 = (state_17793[(13)]);
var inst_17676 = (state_17793[(14)]);
var inst_17677 = (state_17793[(16)]);
var inst_17674 = (state_17793[(17)]);
var inst_17690 = (state_17793[(2)]);
var inst_17691 = (inst_17677 + (1));
var tmp17805 = inst_17675;
var tmp17806 = inst_17676;
var tmp17807 = inst_17674;
var inst_17674__$1 = tmp17807;
var inst_17675__$1 = tmp17805;
var inst_17676__$1 = tmp17806;
var inst_17677__$1 = inst_17691;
var state_17793__$1 = (function (){var statearr_17812 = state_17793;
(statearr_17812[(18)] = inst_17690);

(statearr_17812[(13)] = inst_17675__$1);

(statearr_17812[(14)] = inst_17676__$1);

(statearr_17812[(16)] = inst_17677__$1);

(statearr_17812[(17)] = inst_17674__$1);

return statearr_17812;
})();
var statearr_17813_17892 = state_17793__$1;
(statearr_17813_17892[(2)] = null);

(statearr_17813_17892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (21))){
var inst_17715 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17817_17893 = state_17793__$1;
(statearr_17817_17893[(2)] = inst_17715);

(statearr_17817_17893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (31))){
var inst_17741 = (state_17793[(11)]);
var inst_17745 = done.call(null,null);
var inst_17746 = cljs.core.async.untap_STAR_.call(null,m,inst_17741);
var state_17793__$1 = (function (){var statearr_17818 = state_17793;
(statearr_17818[(19)] = inst_17745);

return statearr_17818;
})();
var statearr_17819_17894 = state_17793__$1;
(statearr_17819_17894[(2)] = inst_17746);

(statearr_17819_17894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (32))){
var inst_17734 = (state_17793[(9)]);
var inst_17736 = (state_17793[(10)]);
var inst_17733 = (state_17793[(20)]);
var inst_17735 = (state_17793[(21)]);
var inst_17748 = (state_17793[(2)]);
var inst_17749 = (inst_17736 + (1));
var tmp17814 = inst_17734;
var tmp17815 = inst_17733;
var tmp17816 = inst_17735;
var inst_17733__$1 = tmp17815;
var inst_17734__$1 = tmp17814;
var inst_17735__$1 = tmp17816;
var inst_17736__$1 = inst_17749;
var state_17793__$1 = (function (){var statearr_17820 = state_17793;
(statearr_17820[(9)] = inst_17734__$1);

(statearr_17820[(10)] = inst_17736__$1);

(statearr_17820[(22)] = inst_17748);

(statearr_17820[(20)] = inst_17733__$1);

(statearr_17820[(21)] = inst_17735__$1);

return statearr_17820;
})();
var statearr_17821_17895 = state_17793__$1;
(statearr_17821_17895[(2)] = null);

(statearr_17821_17895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (40))){
var inst_17761 = (state_17793[(23)]);
var inst_17765 = done.call(null,null);
var inst_17766 = cljs.core.async.untap_STAR_.call(null,m,inst_17761);
var state_17793__$1 = (function (){var statearr_17822 = state_17793;
(statearr_17822[(24)] = inst_17765);

return statearr_17822;
})();
var statearr_17823_17896 = state_17793__$1;
(statearr_17823_17896[(2)] = inst_17766);

(statearr_17823_17896[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (33))){
var inst_17752 = (state_17793[(25)]);
var inst_17754 = cljs.core.chunked_seq_QMARK_.call(null,inst_17752);
var state_17793__$1 = state_17793;
if(inst_17754){
var statearr_17824_17897 = state_17793__$1;
(statearr_17824_17897[(1)] = (36));

} else {
var statearr_17825_17898 = state_17793__$1;
(statearr_17825_17898[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (13))){
var inst_17684 = (state_17793[(26)]);
var inst_17687 = cljs.core.async.close_BANG_.call(null,inst_17684);
var state_17793__$1 = state_17793;
var statearr_17826_17899 = state_17793__$1;
(statearr_17826_17899[(2)] = inst_17687);

(statearr_17826_17899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (22))){
var inst_17705 = (state_17793[(8)]);
var inst_17708 = cljs.core.async.close_BANG_.call(null,inst_17705);
var state_17793__$1 = state_17793;
var statearr_17827_17900 = state_17793__$1;
(statearr_17827_17900[(2)] = inst_17708);

(statearr_17827_17900[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (36))){
var inst_17752 = (state_17793[(25)]);
var inst_17756 = cljs.core.chunk_first.call(null,inst_17752);
var inst_17757 = cljs.core.chunk_rest.call(null,inst_17752);
var inst_17758 = cljs.core.count.call(null,inst_17756);
var inst_17733 = inst_17757;
var inst_17734 = inst_17756;
var inst_17735 = inst_17758;
var inst_17736 = (0);
var state_17793__$1 = (function (){var statearr_17828 = state_17793;
(statearr_17828[(9)] = inst_17734);

(statearr_17828[(10)] = inst_17736);

(statearr_17828[(20)] = inst_17733);

(statearr_17828[(21)] = inst_17735);

return statearr_17828;
})();
var statearr_17829_17901 = state_17793__$1;
(statearr_17829_17901[(2)] = null);

(statearr_17829_17901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (41))){
var inst_17752 = (state_17793[(25)]);
var inst_17768 = (state_17793[(2)]);
var inst_17769 = cljs.core.next.call(null,inst_17752);
var inst_17733 = inst_17769;
var inst_17734 = null;
var inst_17735 = (0);
var inst_17736 = (0);
var state_17793__$1 = (function (){var statearr_17830 = state_17793;
(statearr_17830[(27)] = inst_17768);

(statearr_17830[(9)] = inst_17734);

(statearr_17830[(10)] = inst_17736);

(statearr_17830[(20)] = inst_17733);

(statearr_17830[(21)] = inst_17735);

return statearr_17830;
})();
var statearr_17831_17902 = state_17793__$1;
(statearr_17831_17902[(2)] = null);

(statearr_17831_17902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (43))){
var state_17793__$1 = state_17793;
var statearr_17832_17903 = state_17793__$1;
(statearr_17832_17903[(2)] = null);

(statearr_17832_17903[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (29))){
var inst_17777 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17833_17904 = state_17793__$1;
(statearr_17833_17904[(2)] = inst_17777);

(statearr_17833_17904[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (44))){
var inst_17786 = (state_17793[(2)]);
var state_17793__$1 = (function (){var statearr_17834 = state_17793;
(statearr_17834[(28)] = inst_17786);

return statearr_17834;
})();
var statearr_17835_17905 = state_17793__$1;
(statearr_17835_17905[(2)] = null);

(statearr_17835_17905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (6))){
var inst_17725 = (state_17793[(29)]);
var inst_17724 = cljs.core.deref.call(null,cs);
var inst_17725__$1 = cljs.core.keys.call(null,inst_17724);
var inst_17726 = cljs.core.count.call(null,inst_17725__$1);
var inst_17727 = cljs.core.reset_BANG_.call(null,dctr,inst_17726);
var inst_17732 = cljs.core.seq.call(null,inst_17725__$1);
var inst_17733 = inst_17732;
var inst_17734 = null;
var inst_17735 = (0);
var inst_17736 = (0);
var state_17793__$1 = (function (){var statearr_17836 = state_17793;
(statearr_17836[(9)] = inst_17734);

(statearr_17836[(30)] = inst_17727);

(statearr_17836[(10)] = inst_17736);

(statearr_17836[(29)] = inst_17725__$1);

(statearr_17836[(20)] = inst_17733);

(statearr_17836[(21)] = inst_17735);

return statearr_17836;
})();
var statearr_17837_17906 = state_17793__$1;
(statearr_17837_17906[(2)] = null);

(statearr_17837_17906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (28))){
var inst_17752 = (state_17793[(25)]);
var inst_17733 = (state_17793[(20)]);
var inst_17752__$1 = cljs.core.seq.call(null,inst_17733);
var state_17793__$1 = (function (){var statearr_17838 = state_17793;
(statearr_17838[(25)] = inst_17752__$1);

return statearr_17838;
})();
if(inst_17752__$1){
var statearr_17839_17907 = state_17793__$1;
(statearr_17839_17907[(1)] = (33));

} else {
var statearr_17840_17908 = state_17793__$1;
(statearr_17840_17908[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (25))){
var inst_17736 = (state_17793[(10)]);
var inst_17735 = (state_17793[(21)]);
var inst_17738 = (inst_17736 < inst_17735);
var inst_17739 = inst_17738;
var state_17793__$1 = state_17793;
if(cljs.core.truth_(inst_17739)){
var statearr_17841_17909 = state_17793__$1;
(statearr_17841_17909[(1)] = (27));

} else {
var statearr_17842_17910 = state_17793__$1;
(statearr_17842_17910[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (34))){
var state_17793__$1 = state_17793;
var statearr_17843_17911 = state_17793__$1;
(statearr_17843_17911[(2)] = null);

(statearr_17843_17911[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (17))){
var state_17793__$1 = state_17793;
var statearr_17844_17912 = state_17793__$1;
(statearr_17844_17912[(2)] = null);

(statearr_17844_17912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (3))){
var inst_17791 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17793__$1,inst_17791);
} else {
if((state_val_17794 === (12))){
var inst_17720 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17845_17913 = state_17793__$1;
(statearr_17845_17913[(2)] = inst_17720);

(statearr_17845_17913[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (2))){
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17793__$1,(4),ch);
} else {
if((state_val_17794 === (23))){
var state_17793__$1 = state_17793;
var statearr_17846_17914 = state_17793__$1;
(statearr_17846_17914[(2)] = null);

(statearr_17846_17914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (35))){
var inst_17775 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17847_17915 = state_17793__$1;
(statearr_17847_17915[(2)] = inst_17775);

(statearr_17847_17915[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (19))){
var inst_17694 = (state_17793[(7)]);
var inst_17698 = cljs.core.chunk_first.call(null,inst_17694);
var inst_17699 = cljs.core.chunk_rest.call(null,inst_17694);
var inst_17700 = cljs.core.count.call(null,inst_17698);
var inst_17674 = inst_17699;
var inst_17675 = inst_17698;
var inst_17676 = inst_17700;
var inst_17677 = (0);
var state_17793__$1 = (function (){var statearr_17848 = state_17793;
(statearr_17848[(13)] = inst_17675);

(statearr_17848[(14)] = inst_17676);

(statearr_17848[(16)] = inst_17677);

(statearr_17848[(17)] = inst_17674);

return statearr_17848;
})();
var statearr_17849_17916 = state_17793__$1;
(statearr_17849_17916[(2)] = null);

(statearr_17849_17916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (11))){
var inst_17674 = (state_17793[(17)]);
var inst_17694 = (state_17793[(7)]);
var inst_17694__$1 = cljs.core.seq.call(null,inst_17674);
var state_17793__$1 = (function (){var statearr_17850 = state_17793;
(statearr_17850[(7)] = inst_17694__$1);

return statearr_17850;
})();
if(inst_17694__$1){
var statearr_17851_17917 = state_17793__$1;
(statearr_17851_17917[(1)] = (16));

} else {
var statearr_17852_17918 = state_17793__$1;
(statearr_17852_17918[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (9))){
var inst_17722 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17853_17919 = state_17793__$1;
(statearr_17853_17919[(2)] = inst_17722);

(statearr_17853_17919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (5))){
var inst_17672 = cljs.core.deref.call(null,cs);
var inst_17673 = cljs.core.seq.call(null,inst_17672);
var inst_17674 = inst_17673;
var inst_17675 = null;
var inst_17676 = (0);
var inst_17677 = (0);
var state_17793__$1 = (function (){var statearr_17854 = state_17793;
(statearr_17854[(13)] = inst_17675);

(statearr_17854[(14)] = inst_17676);

(statearr_17854[(16)] = inst_17677);

(statearr_17854[(17)] = inst_17674);

return statearr_17854;
})();
var statearr_17855_17920 = state_17793__$1;
(statearr_17855_17920[(2)] = null);

(statearr_17855_17920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (14))){
var state_17793__$1 = state_17793;
var statearr_17856_17921 = state_17793__$1;
(statearr_17856_17921[(2)] = null);

(statearr_17856_17921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (45))){
var inst_17783 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17857_17922 = state_17793__$1;
(statearr_17857_17922[(2)] = inst_17783);

(statearr_17857_17922[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (26))){
var inst_17725 = (state_17793[(29)]);
var inst_17779 = (state_17793[(2)]);
var inst_17780 = cljs.core.seq.call(null,inst_17725);
var state_17793__$1 = (function (){var statearr_17858 = state_17793;
(statearr_17858[(31)] = inst_17779);

return statearr_17858;
})();
if(inst_17780){
var statearr_17859_17923 = state_17793__$1;
(statearr_17859_17923[(1)] = (42));

} else {
var statearr_17860_17924 = state_17793__$1;
(statearr_17860_17924[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (16))){
var inst_17694 = (state_17793[(7)]);
var inst_17696 = cljs.core.chunked_seq_QMARK_.call(null,inst_17694);
var state_17793__$1 = state_17793;
if(inst_17696){
var statearr_17861_17925 = state_17793__$1;
(statearr_17861_17925[(1)] = (19));

} else {
var statearr_17862_17926 = state_17793__$1;
(statearr_17862_17926[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (38))){
var inst_17772 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17863_17927 = state_17793__$1;
(statearr_17863_17927[(2)] = inst_17772);

(statearr_17863_17927[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (30))){
var state_17793__$1 = state_17793;
var statearr_17864_17928 = state_17793__$1;
(statearr_17864_17928[(2)] = null);

(statearr_17864_17928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (10))){
var inst_17675 = (state_17793[(13)]);
var inst_17677 = (state_17793[(16)]);
var inst_17683 = cljs.core._nth.call(null,inst_17675,inst_17677);
var inst_17684 = cljs.core.nth.call(null,inst_17683,(0),null);
var inst_17685 = cljs.core.nth.call(null,inst_17683,(1),null);
var state_17793__$1 = (function (){var statearr_17865 = state_17793;
(statearr_17865[(26)] = inst_17684);

return statearr_17865;
})();
if(cljs.core.truth_(inst_17685)){
var statearr_17866_17929 = state_17793__$1;
(statearr_17866_17929[(1)] = (13));

} else {
var statearr_17867_17930 = state_17793__$1;
(statearr_17867_17930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (18))){
var inst_17718 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17868_17931 = state_17793__$1;
(statearr_17868_17931[(2)] = inst_17718);

(statearr_17868_17931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (42))){
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17793__$1,(45),dchan);
} else {
if((state_val_17794 === (37))){
var inst_17761 = (state_17793[(23)]);
var inst_17752 = (state_17793[(25)]);
var inst_17665 = (state_17793[(12)]);
var inst_17761__$1 = cljs.core.first.call(null,inst_17752);
var inst_17762 = cljs.core.async.put_BANG_.call(null,inst_17761__$1,inst_17665,done);
var state_17793__$1 = (function (){var statearr_17869 = state_17793;
(statearr_17869[(23)] = inst_17761__$1);

return statearr_17869;
})();
if(cljs.core.truth_(inst_17762)){
var statearr_17870_17932 = state_17793__$1;
(statearr_17870_17932[(1)] = (39));

} else {
var statearr_17871_17933 = state_17793__$1;
(statearr_17871_17933[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (8))){
var inst_17676 = (state_17793[(14)]);
var inst_17677 = (state_17793[(16)]);
var inst_17679 = (inst_17677 < inst_17676);
var inst_17680 = inst_17679;
var state_17793__$1 = state_17793;
if(cljs.core.truth_(inst_17680)){
var statearr_17872_17934 = state_17793__$1;
(statearr_17872_17934[(1)] = (10));

} else {
var statearr_17873_17935 = state_17793__$1;
(statearr_17873_17935[(1)] = (11));

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
});})(c__7310__auto___17881,cs,m,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7310__auto___17881,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7249__auto__ = null;
var cljs$core$async$mult_$_state_machine__7249__auto____0 = (function (){
var statearr_17877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17877[(0)] = cljs$core$async$mult_$_state_machine__7249__auto__);

(statearr_17877[(1)] = (1));

return statearr_17877;
});
var cljs$core$async$mult_$_state_machine__7249__auto____1 = (function (state_17793){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17878){if((e17878 instanceof Object)){
var ex__7252__auto__ = e17878;
var statearr_17879_17936 = state_17793;
(statearr_17879_17936[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17937 = state_17793;
state_17793 = G__17937;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7249__auto__ = function(state_17793){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7249__auto____1.call(this,state_17793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7249__auto____0;
cljs$core$async$mult_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7249__auto____1;
return cljs$core$async$mult_$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___17881,cs,m,dchan,dctr,done))
})();
var state__7312__auto__ = (function (){var statearr_17880 = f__7311__auto__.call(null);
(statearr_17880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___17881);

return statearr_17880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___17881,cs,m,dchan,dctr,done))
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
var G__17939 = arguments.length;
switch (G__17939) {
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

cljs.core.async.Mix = (function (){var obj17942 = {};
return obj17942;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17947){
var map__17948 = p__17947;
var map__17948__$1 = ((cljs.core.seq_QMARK_.call(null,map__17948))?cljs.core.apply.call(null,cljs.core.hash_map,map__17948):map__17948);
var opts = map__17948__$1;
var statearr_17949_17952 = state;
(statearr_17949_17952[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4422__auto__ = cljs.core.async.do_alts.call(null,((function (map__17948,map__17948__$1,opts){
return (function (val){
var statearr_17950_17953 = state;
(statearr_17950_17953[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17948,map__17948__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4422__auto__)){
var cb = temp__4422__auto__;
var statearr_17951_17954 = state;
(statearr_17951_17954[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17943){
var G__17944 = cljs.core.first.call(null,seq17943);
var seq17943__$1 = cljs.core.next.call(null,seq17943);
var G__17945 = cljs.core.first.call(null,seq17943__$1);
var seq17943__$2 = cljs.core.next.call(null,seq17943__$1);
var G__17946 = cljs.core.first.call(null,seq17943__$2);
var seq17943__$3 = cljs.core.next.call(null,seq17943__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17944,G__17945,G__17946,seq17943__$3);
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
if(typeof cljs.core.async.t18074 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18074 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18075){
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
this.meta18075 = meta18075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18076,meta18075__$1){
var self__ = this;
var _18076__$1 = this;
return (new cljs.core.async.t18074(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18075__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18076){
var self__ = this;
var _18076__$1 = this;
return self__.meta18075;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18074.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18074.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18074.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18074.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18074.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18074.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18074.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18074.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18075","meta18075",433747810,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18074.cljs$lang$type = true;

cljs.core.async.t18074.cljs$lang$ctorStr = "cljs.core.async/t18074";

cljs.core.async.t18074.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18074");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18074 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t18074(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18075){
return (new cljs.core.async.t18074(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18075));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18074(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7310__auto___18193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18146){
var state_val_18147 = (state_18146[(1)]);
if((state_val_18147 === (7))){
var inst_18090 = (state_18146[(7)]);
var inst_18095 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18090);
var state_18146__$1 = state_18146;
var statearr_18148_18194 = state_18146__$1;
(statearr_18148_18194[(2)] = inst_18095);

(statearr_18148_18194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (20))){
var inst_18105 = (state_18146[(8)]);
var state_18146__$1 = state_18146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18146__$1,(23),out,inst_18105);
} else {
if((state_val_18147 === (1))){
var inst_18080 = (state_18146[(9)]);
var inst_18080__$1 = calc_state.call(null);
var inst_18081 = cljs.core.seq_QMARK_.call(null,inst_18080__$1);
var state_18146__$1 = (function (){var statearr_18149 = state_18146;
(statearr_18149[(9)] = inst_18080__$1);

return statearr_18149;
})();
if(inst_18081){
var statearr_18150_18195 = state_18146__$1;
(statearr_18150_18195[(1)] = (2));

} else {
var statearr_18151_18196 = state_18146__$1;
(statearr_18151_18196[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (24))){
var inst_18098 = (state_18146[(10)]);
var inst_18090 = inst_18098;
var state_18146__$1 = (function (){var statearr_18152 = state_18146;
(statearr_18152[(7)] = inst_18090);

return statearr_18152;
})();
var statearr_18153_18197 = state_18146__$1;
(statearr_18153_18197[(2)] = null);

(statearr_18153_18197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (4))){
var inst_18080 = (state_18146[(9)]);
var inst_18086 = (state_18146[(2)]);
var inst_18087 = cljs.core.get.call(null,inst_18086,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18088 = cljs.core.get.call(null,inst_18086,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18089 = cljs.core.get.call(null,inst_18086,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18090 = inst_18080;
var state_18146__$1 = (function (){var statearr_18154 = state_18146;
(statearr_18154[(11)] = inst_18087);

(statearr_18154[(7)] = inst_18090);

(statearr_18154[(12)] = inst_18088);

(statearr_18154[(13)] = inst_18089);

return statearr_18154;
})();
var statearr_18155_18198 = state_18146__$1;
(statearr_18155_18198[(2)] = null);

(statearr_18155_18198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (15))){
var state_18146__$1 = state_18146;
var statearr_18156_18199 = state_18146__$1;
(statearr_18156_18199[(2)] = null);

(statearr_18156_18199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (21))){
var inst_18098 = (state_18146[(10)]);
var inst_18090 = inst_18098;
var state_18146__$1 = (function (){var statearr_18157 = state_18146;
(statearr_18157[(7)] = inst_18090);

return statearr_18157;
})();
var statearr_18158_18200 = state_18146__$1;
(statearr_18158_18200[(2)] = null);

(statearr_18158_18200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (13))){
var inst_18142 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
var statearr_18159_18201 = state_18146__$1;
(statearr_18159_18201[(2)] = inst_18142);

(statearr_18159_18201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (22))){
var inst_18140 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
var statearr_18160_18202 = state_18146__$1;
(statearr_18160_18202[(2)] = inst_18140);

(statearr_18160_18202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (6))){
var inst_18144 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18146__$1,inst_18144);
} else {
if((state_val_18147 === (25))){
var state_18146__$1 = state_18146;
var statearr_18161_18203 = state_18146__$1;
(statearr_18161_18203[(2)] = null);

(statearr_18161_18203[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (17))){
var inst_18120 = (state_18146[(14)]);
var state_18146__$1 = state_18146;
var statearr_18162_18204 = state_18146__$1;
(statearr_18162_18204[(2)] = inst_18120);

(statearr_18162_18204[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (3))){
var inst_18080 = (state_18146[(9)]);
var state_18146__$1 = state_18146;
var statearr_18163_18205 = state_18146__$1;
(statearr_18163_18205[(2)] = inst_18080);

(statearr_18163_18205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (12))){
var inst_18099 = (state_18146[(15)]);
var inst_18106 = (state_18146[(16)]);
var inst_18120 = (state_18146[(14)]);
var inst_18120__$1 = inst_18099.call(null,inst_18106);
var state_18146__$1 = (function (){var statearr_18164 = state_18146;
(statearr_18164[(14)] = inst_18120__$1);

return statearr_18164;
})();
if(cljs.core.truth_(inst_18120__$1)){
var statearr_18165_18206 = state_18146__$1;
(statearr_18165_18206[(1)] = (17));

} else {
var statearr_18166_18207 = state_18146__$1;
(statearr_18166_18207[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (2))){
var inst_18080 = (state_18146[(9)]);
var inst_18083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18080);
var state_18146__$1 = state_18146;
var statearr_18167_18208 = state_18146__$1;
(statearr_18167_18208[(2)] = inst_18083);

(statearr_18167_18208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (23))){
var inst_18131 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
if(cljs.core.truth_(inst_18131)){
var statearr_18168_18209 = state_18146__$1;
(statearr_18168_18209[(1)] = (24));

} else {
var statearr_18169_18210 = state_18146__$1;
(statearr_18169_18210[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (19))){
var inst_18128 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
if(cljs.core.truth_(inst_18128)){
var statearr_18170_18211 = state_18146__$1;
(statearr_18170_18211[(1)] = (20));

} else {
var statearr_18171_18212 = state_18146__$1;
(statearr_18171_18212[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (11))){
var inst_18105 = (state_18146[(8)]);
var inst_18111 = (inst_18105 == null);
var state_18146__$1 = state_18146;
if(cljs.core.truth_(inst_18111)){
var statearr_18172_18213 = state_18146__$1;
(statearr_18172_18213[(1)] = (14));

} else {
var statearr_18173_18214 = state_18146__$1;
(statearr_18173_18214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (9))){
var inst_18098 = (state_18146[(10)]);
var inst_18098__$1 = (state_18146[(2)]);
var inst_18099 = cljs.core.get.call(null,inst_18098__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18100 = cljs.core.get.call(null,inst_18098__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18101 = cljs.core.get.call(null,inst_18098__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18146__$1 = (function (){var statearr_18174 = state_18146;
(statearr_18174[(15)] = inst_18099);

(statearr_18174[(10)] = inst_18098__$1);

(statearr_18174[(17)] = inst_18100);

return statearr_18174;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18146__$1,(10),inst_18101);
} else {
if((state_val_18147 === (5))){
var inst_18090 = (state_18146[(7)]);
var inst_18093 = cljs.core.seq_QMARK_.call(null,inst_18090);
var state_18146__$1 = state_18146;
if(inst_18093){
var statearr_18175_18215 = state_18146__$1;
(statearr_18175_18215[(1)] = (7));

} else {
var statearr_18176_18216 = state_18146__$1;
(statearr_18176_18216[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (14))){
var inst_18106 = (state_18146[(16)]);
var inst_18113 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18106);
var state_18146__$1 = state_18146;
var statearr_18177_18217 = state_18146__$1;
(statearr_18177_18217[(2)] = inst_18113);

(statearr_18177_18217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (26))){
var inst_18136 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
var statearr_18178_18218 = state_18146__$1;
(statearr_18178_18218[(2)] = inst_18136);

(statearr_18178_18218[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (16))){
var inst_18116 = (state_18146[(2)]);
var inst_18117 = calc_state.call(null);
var inst_18090 = inst_18117;
var state_18146__$1 = (function (){var statearr_18179 = state_18146;
(statearr_18179[(18)] = inst_18116);

(statearr_18179[(7)] = inst_18090);

return statearr_18179;
})();
var statearr_18180_18219 = state_18146__$1;
(statearr_18180_18219[(2)] = null);

(statearr_18180_18219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (10))){
var inst_18106 = (state_18146[(16)]);
var inst_18105 = (state_18146[(8)]);
var inst_18104 = (state_18146[(2)]);
var inst_18105__$1 = cljs.core.nth.call(null,inst_18104,(0),null);
var inst_18106__$1 = cljs.core.nth.call(null,inst_18104,(1),null);
var inst_18107 = (inst_18105__$1 == null);
var inst_18108 = cljs.core._EQ_.call(null,inst_18106__$1,change);
var inst_18109 = (inst_18107) || (inst_18108);
var state_18146__$1 = (function (){var statearr_18181 = state_18146;
(statearr_18181[(16)] = inst_18106__$1);

(statearr_18181[(8)] = inst_18105__$1);

return statearr_18181;
})();
if(cljs.core.truth_(inst_18109)){
var statearr_18182_18220 = state_18146__$1;
(statearr_18182_18220[(1)] = (11));

} else {
var statearr_18183_18221 = state_18146__$1;
(statearr_18183_18221[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (18))){
var inst_18099 = (state_18146[(15)]);
var inst_18106 = (state_18146[(16)]);
var inst_18100 = (state_18146[(17)]);
var inst_18123 = cljs.core.empty_QMARK_.call(null,inst_18099);
var inst_18124 = inst_18100.call(null,inst_18106);
var inst_18125 = cljs.core.not.call(null,inst_18124);
var inst_18126 = (inst_18123) && (inst_18125);
var state_18146__$1 = state_18146;
var statearr_18184_18222 = state_18146__$1;
(statearr_18184_18222[(2)] = inst_18126);

(statearr_18184_18222[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (8))){
var inst_18090 = (state_18146[(7)]);
var state_18146__$1 = state_18146;
var statearr_18185_18223 = state_18146__$1;
(statearr_18185_18223[(2)] = inst_18090);

(statearr_18185_18223[(1)] = (9));


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
});})(c__7310__auto___18193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7248__auto__,c__7310__auto___18193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7249__auto__ = null;
var cljs$core$async$mix_$_state_machine__7249__auto____0 = (function (){
var statearr_18189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18189[(0)] = cljs$core$async$mix_$_state_machine__7249__auto__);

(statearr_18189[(1)] = (1));

return statearr_18189;
});
var cljs$core$async$mix_$_state_machine__7249__auto____1 = (function (state_18146){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18190){if((e18190 instanceof Object)){
var ex__7252__auto__ = e18190;
var statearr_18191_18224 = state_18146;
(statearr_18191_18224[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18225 = state_18146;
state_18146 = G__18225;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7249__auto__ = function(state_18146){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7249__auto____1.call(this,state_18146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7249__auto____0;
cljs$core$async$mix_$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7249__auto____1;
return cljs$core$async$mix_$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7312__auto__ = (function (){var statearr_18192 = f__7311__auto__.call(null);
(statearr_18192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18193);

return statearr_18192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18227 = {};
return obj18227;
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
var G__18229 = arguments.length;
switch (G__18229) {
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
var G__18233 = arguments.length;
switch (G__18233) {
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
return (function (p1__18231_SHARP_){
if(cljs.core.truth_(p1__18231_SHARP_.call(null,topic))){
return p1__18231_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18231_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4950__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18234 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18234 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18235){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18235 = meta18235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18236,meta18235__$1){
var self__ = this;
var _18236__$1 = this;
return (new cljs.core.async.t18234(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18235__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18236){
var self__ = this;
var _18236__$1 = this;
return self__.meta18235;
});})(mults,ensure_mult))
;

cljs.core.async.t18234.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18234.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18234.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18234.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18234.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18234.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18234.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18235","meta18235",-1396418716,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t18234.cljs$lang$type = true;

cljs.core.async.t18234.cljs$lang$ctorStr = "cljs.core.async/t18234";

cljs.core.async.t18234.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18234");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18234 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t18234(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18235){
return (new cljs.core.async.t18234(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18235));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18234(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7310__auto___18357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18357,mults,ensure_mult,p){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18357,mults,ensure_mult,p){
return (function (state_18308){
var state_val_18309 = (state_18308[(1)]);
if((state_val_18309 === (7))){
var inst_18304 = (state_18308[(2)]);
var state_18308__$1 = state_18308;
var statearr_18310_18358 = state_18308__$1;
(statearr_18310_18358[(2)] = inst_18304);

(statearr_18310_18358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (20))){
var state_18308__$1 = state_18308;
var statearr_18311_18359 = state_18308__$1;
(statearr_18311_18359[(2)] = null);

(statearr_18311_18359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (1))){
var state_18308__$1 = state_18308;
var statearr_18312_18360 = state_18308__$1;
(statearr_18312_18360[(2)] = null);

(statearr_18312_18360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (24))){
var inst_18287 = (state_18308[(7)]);
var inst_18296 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18287);
var state_18308__$1 = state_18308;
var statearr_18313_18361 = state_18308__$1;
(statearr_18313_18361[(2)] = inst_18296);

(statearr_18313_18361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (4))){
var inst_18239 = (state_18308[(8)]);
var inst_18239__$1 = (state_18308[(2)]);
var inst_18240 = (inst_18239__$1 == null);
var state_18308__$1 = (function (){var statearr_18314 = state_18308;
(statearr_18314[(8)] = inst_18239__$1);

return statearr_18314;
})();
if(cljs.core.truth_(inst_18240)){
var statearr_18315_18362 = state_18308__$1;
(statearr_18315_18362[(1)] = (5));

} else {
var statearr_18316_18363 = state_18308__$1;
(statearr_18316_18363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (15))){
var inst_18281 = (state_18308[(2)]);
var state_18308__$1 = state_18308;
var statearr_18317_18364 = state_18308__$1;
(statearr_18317_18364[(2)] = inst_18281);

(statearr_18317_18364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (21))){
var inst_18301 = (state_18308[(2)]);
var state_18308__$1 = (function (){var statearr_18318 = state_18308;
(statearr_18318[(9)] = inst_18301);

return statearr_18318;
})();
var statearr_18319_18365 = state_18308__$1;
(statearr_18319_18365[(2)] = null);

(statearr_18319_18365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (13))){
var inst_18263 = (state_18308[(10)]);
var inst_18265 = cljs.core.chunked_seq_QMARK_.call(null,inst_18263);
var state_18308__$1 = state_18308;
if(inst_18265){
var statearr_18320_18366 = state_18308__$1;
(statearr_18320_18366[(1)] = (16));

} else {
var statearr_18321_18367 = state_18308__$1;
(statearr_18321_18367[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (22))){
var inst_18293 = (state_18308[(2)]);
var state_18308__$1 = state_18308;
if(cljs.core.truth_(inst_18293)){
var statearr_18322_18368 = state_18308__$1;
(statearr_18322_18368[(1)] = (23));

} else {
var statearr_18323_18369 = state_18308__$1;
(statearr_18323_18369[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (6))){
var inst_18287 = (state_18308[(7)]);
var inst_18289 = (state_18308[(11)]);
var inst_18239 = (state_18308[(8)]);
var inst_18287__$1 = topic_fn.call(null,inst_18239);
var inst_18288 = cljs.core.deref.call(null,mults);
var inst_18289__$1 = cljs.core.get.call(null,inst_18288,inst_18287__$1);
var state_18308__$1 = (function (){var statearr_18324 = state_18308;
(statearr_18324[(7)] = inst_18287__$1);

(statearr_18324[(11)] = inst_18289__$1);

return statearr_18324;
})();
if(cljs.core.truth_(inst_18289__$1)){
var statearr_18325_18370 = state_18308__$1;
(statearr_18325_18370[(1)] = (19));

} else {
var statearr_18326_18371 = state_18308__$1;
(statearr_18326_18371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (25))){
var inst_18298 = (state_18308[(2)]);
var state_18308__$1 = state_18308;
var statearr_18327_18372 = state_18308__$1;
(statearr_18327_18372[(2)] = inst_18298);

(statearr_18327_18372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (17))){
var inst_18263 = (state_18308[(10)]);
var inst_18272 = cljs.core.first.call(null,inst_18263);
var inst_18273 = cljs.core.async.muxch_STAR_.call(null,inst_18272);
var inst_18274 = cljs.core.async.close_BANG_.call(null,inst_18273);
var inst_18275 = cljs.core.next.call(null,inst_18263);
var inst_18249 = inst_18275;
var inst_18250 = null;
var inst_18251 = (0);
var inst_18252 = (0);
var state_18308__$1 = (function (){var statearr_18328 = state_18308;
(statearr_18328[(12)] = inst_18250);

(statearr_18328[(13)] = inst_18249);

(statearr_18328[(14)] = inst_18252);

(statearr_18328[(15)] = inst_18274);

(statearr_18328[(16)] = inst_18251);

return statearr_18328;
})();
var statearr_18329_18373 = state_18308__$1;
(statearr_18329_18373[(2)] = null);

(statearr_18329_18373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (3))){
var inst_18306 = (state_18308[(2)]);
var state_18308__$1 = state_18308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18308__$1,inst_18306);
} else {
if((state_val_18309 === (12))){
var inst_18283 = (state_18308[(2)]);
var state_18308__$1 = state_18308;
var statearr_18330_18374 = state_18308__$1;
(statearr_18330_18374[(2)] = inst_18283);

(statearr_18330_18374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (2))){
var state_18308__$1 = state_18308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18308__$1,(4),ch);
} else {
if((state_val_18309 === (23))){
var state_18308__$1 = state_18308;
var statearr_18331_18375 = state_18308__$1;
(statearr_18331_18375[(2)] = null);

(statearr_18331_18375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (19))){
var inst_18289 = (state_18308[(11)]);
var inst_18239 = (state_18308[(8)]);
var inst_18291 = cljs.core.async.muxch_STAR_.call(null,inst_18289);
var state_18308__$1 = state_18308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18308__$1,(22),inst_18291,inst_18239);
} else {
if((state_val_18309 === (11))){
var inst_18249 = (state_18308[(13)]);
var inst_18263 = (state_18308[(10)]);
var inst_18263__$1 = cljs.core.seq.call(null,inst_18249);
var state_18308__$1 = (function (){var statearr_18332 = state_18308;
(statearr_18332[(10)] = inst_18263__$1);

return statearr_18332;
})();
if(inst_18263__$1){
var statearr_18333_18376 = state_18308__$1;
(statearr_18333_18376[(1)] = (13));

} else {
var statearr_18334_18377 = state_18308__$1;
(statearr_18334_18377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (9))){
var inst_18285 = (state_18308[(2)]);
var state_18308__$1 = state_18308;
var statearr_18335_18378 = state_18308__$1;
(statearr_18335_18378[(2)] = inst_18285);

(statearr_18335_18378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (5))){
var inst_18246 = cljs.core.deref.call(null,mults);
var inst_18247 = cljs.core.vals.call(null,inst_18246);
var inst_18248 = cljs.core.seq.call(null,inst_18247);
var inst_18249 = inst_18248;
var inst_18250 = null;
var inst_18251 = (0);
var inst_18252 = (0);
var state_18308__$1 = (function (){var statearr_18336 = state_18308;
(statearr_18336[(12)] = inst_18250);

(statearr_18336[(13)] = inst_18249);

(statearr_18336[(14)] = inst_18252);

(statearr_18336[(16)] = inst_18251);

return statearr_18336;
})();
var statearr_18337_18379 = state_18308__$1;
(statearr_18337_18379[(2)] = null);

(statearr_18337_18379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (14))){
var state_18308__$1 = state_18308;
var statearr_18341_18380 = state_18308__$1;
(statearr_18341_18380[(2)] = null);

(statearr_18341_18380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (16))){
var inst_18263 = (state_18308[(10)]);
var inst_18267 = cljs.core.chunk_first.call(null,inst_18263);
var inst_18268 = cljs.core.chunk_rest.call(null,inst_18263);
var inst_18269 = cljs.core.count.call(null,inst_18267);
var inst_18249 = inst_18268;
var inst_18250 = inst_18267;
var inst_18251 = inst_18269;
var inst_18252 = (0);
var state_18308__$1 = (function (){var statearr_18342 = state_18308;
(statearr_18342[(12)] = inst_18250);

(statearr_18342[(13)] = inst_18249);

(statearr_18342[(14)] = inst_18252);

(statearr_18342[(16)] = inst_18251);

return statearr_18342;
})();
var statearr_18343_18381 = state_18308__$1;
(statearr_18343_18381[(2)] = null);

(statearr_18343_18381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (10))){
var inst_18250 = (state_18308[(12)]);
var inst_18249 = (state_18308[(13)]);
var inst_18252 = (state_18308[(14)]);
var inst_18251 = (state_18308[(16)]);
var inst_18257 = cljs.core._nth.call(null,inst_18250,inst_18252);
var inst_18258 = cljs.core.async.muxch_STAR_.call(null,inst_18257);
var inst_18259 = cljs.core.async.close_BANG_.call(null,inst_18258);
var inst_18260 = (inst_18252 + (1));
var tmp18338 = inst_18250;
var tmp18339 = inst_18249;
var tmp18340 = inst_18251;
var inst_18249__$1 = tmp18339;
var inst_18250__$1 = tmp18338;
var inst_18251__$1 = tmp18340;
var inst_18252__$1 = inst_18260;
var state_18308__$1 = (function (){var statearr_18344 = state_18308;
(statearr_18344[(12)] = inst_18250__$1);

(statearr_18344[(13)] = inst_18249__$1);

(statearr_18344[(14)] = inst_18252__$1);

(statearr_18344[(17)] = inst_18259);

(statearr_18344[(16)] = inst_18251__$1);

return statearr_18344;
})();
var statearr_18345_18382 = state_18308__$1;
(statearr_18345_18382[(2)] = null);

(statearr_18345_18382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (18))){
var inst_18278 = (state_18308[(2)]);
var state_18308__$1 = state_18308;
var statearr_18346_18383 = state_18308__$1;
(statearr_18346_18383[(2)] = inst_18278);

(statearr_18346_18383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18309 === (8))){
var inst_18252 = (state_18308[(14)]);
var inst_18251 = (state_18308[(16)]);
var inst_18254 = (inst_18252 < inst_18251);
var inst_18255 = inst_18254;
var state_18308__$1 = state_18308;
if(cljs.core.truth_(inst_18255)){
var statearr_18347_18384 = state_18308__$1;
(statearr_18347_18384[(1)] = (10));

} else {
var statearr_18348_18385 = state_18308__$1;
(statearr_18348_18385[(1)] = (11));

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
});})(c__7310__auto___18357,mults,ensure_mult,p))
;
return ((function (switch__7248__auto__,c__7310__auto___18357,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18352[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18352[(1)] = (1));

return statearr_18352;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18308){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18353){if((e18353 instanceof Object)){
var ex__7252__auto__ = e18353;
var statearr_18354_18386 = state_18308;
(statearr_18354_18386[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18387 = state_18308;
state_18308 = G__18387;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18357,mults,ensure_mult,p))
})();
var state__7312__auto__ = (function (){var statearr_18355 = f__7311__auto__.call(null);
(statearr_18355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18357);

return statearr_18355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18357,mults,ensure_mult,p))
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
var G__18389 = arguments.length;
switch (G__18389) {
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
var G__18392 = arguments.length;
switch (G__18392) {
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
var G__18395 = arguments.length;
switch (G__18395) {
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
var c__7310__auto___18465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18434){
var state_val_18435 = (state_18434[(1)]);
if((state_val_18435 === (7))){
var state_18434__$1 = state_18434;
var statearr_18436_18466 = state_18434__$1;
(statearr_18436_18466[(2)] = null);

(statearr_18436_18466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (1))){
var state_18434__$1 = state_18434;
var statearr_18437_18467 = state_18434__$1;
(statearr_18437_18467[(2)] = null);

(statearr_18437_18467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (4))){
var inst_18398 = (state_18434[(7)]);
var inst_18400 = (inst_18398 < cnt);
var state_18434__$1 = state_18434;
if(cljs.core.truth_(inst_18400)){
var statearr_18438_18468 = state_18434__$1;
(statearr_18438_18468[(1)] = (6));

} else {
var statearr_18439_18469 = state_18434__$1;
(statearr_18439_18469[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (15))){
var inst_18430 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18440_18470 = state_18434__$1;
(statearr_18440_18470[(2)] = inst_18430);

(statearr_18440_18470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (13))){
var inst_18423 = cljs.core.async.close_BANG_.call(null,out);
var state_18434__$1 = state_18434;
var statearr_18441_18471 = state_18434__$1;
(statearr_18441_18471[(2)] = inst_18423);

(statearr_18441_18471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (6))){
var state_18434__$1 = state_18434;
var statearr_18442_18472 = state_18434__$1;
(statearr_18442_18472[(2)] = null);

(statearr_18442_18472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (3))){
var inst_18432 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18434__$1,inst_18432);
} else {
if((state_val_18435 === (12))){
var inst_18420 = (state_18434[(8)]);
var inst_18420__$1 = (state_18434[(2)]);
var inst_18421 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18420__$1);
var state_18434__$1 = (function (){var statearr_18443 = state_18434;
(statearr_18443[(8)] = inst_18420__$1);

return statearr_18443;
})();
if(cljs.core.truth_(inst_18421)){
var statearr_18444_18473 = state_18434__$1;
(statearr_18444_18473[(1)] = (13));

} else {
var statearr_18445_18474 = state_18434__$1;
(statearr_18445_18474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (2))){
var inst_18397 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18398 = (0);
var state_18434__$1 = (function (){var statearr_18446 = state_18434;
(statearr_18446[(7)] = inst_18398);

(statearr_18446[(9)] = inst_18397);

return statearr_18446;
})();
var statearr_18447_18475 = state_18434__$1;
(statearr_18447_18475[(2)] = null);

(statearr_18447_18475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (11))){
var inst_18398 = (state_18434[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18434,(10),Object,null,(9));
var inst_18407 = chs__$1.call(null,inst_18398);
var inst_18408 = done.call(null,inst_18398);
var inst_18409 = cljs.core.async.take_BANG_.call(null,inst_18407,inst_18408);
var state_18434__$1 = state_18434;
var statearr_18448_18476 = state_18434__$1;
(statearr_18448_18476[(2)] = inst_18409);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18434__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (9))){
var inst_18398 = (state_18434[(7)]);
var inst_18411 = (state_18434[(2)]);
var inst_18412 = (inst_18398 + (1));
var inst_18398__$1 = inst_18412;
var state_18434__$1 = (function (){var statearr_18449 = state_18434;
(statearr_18449[(10)] = inst_18411);

(statearr_18449[(7)] = inst_18398__$1);

return statearr_18449;
})();
var statearr_18450_18477 = state_18434__$1;
(statearr_18450_18477[(2)] = null);

(statearr_18450_18477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (5))){
var inst_18418 = (state_18434[(2)]);
var state_18434__$1 = (function (){var statearr_18451 = state_18434;
(statearr_18451[(11)] = inst_18418);

return statearr_18451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18434__$1,(12),dchan);
} else {
if((state_val_18435 === (14))){
var inst_18420 = (state_18434[(8)]);
var inst_18425 = cljs.core.apply.call(null,f,inst_18420);
var state_18434__$1 = state_18434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18434__$1,(16),out,inst_18425);
} else {
if((state_val_18435 === (16))){
var inst_18427 = (state_18434[(2)]);
var state_18434__$1 = (function (){var statearr_18452 = state_18434;
(statearr_18452[(12)] = inst_18427);

return statearr_18452;
})();
var statearr_18453_18478 = state_18434__$1;
(statearr_18453_18478[(2)] = null);

(statearr_18453_18478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (10))){
var inst_18402 = (state_18434[(2)]);
var inst_18403 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18434__$1 = (function (){var statearr_18454 = state_18434;
(statearr_18454[(13)] = inst_18402);

return statearr_18454;
})();
var statearr_18455_18479 = state_18434__$1;
(statearr_18455_18479[(2)] = inst_18403);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18434__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (8))){
var inst_18416 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18456_18480 = state_18434__$1;
(statearr_18456_18480[(2)] = inst_18416);

(statearr_18456_18480[(1)] = (5));


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
});})(c__7310__auto___18465,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7310__auto___18465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18460[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18460[(1)] = (1));

return statearr_18460;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18434){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18461){if((e18461 instanceof Object)){
var ex__7252__auto__ = e18461;
var statearr_18462_18481 = state_18434;
(statearr_18462_18481[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18482 = state_18434;
state_18434 = G__18482;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18465,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7312__auto__ = (function (){var statearr_18463 = f__7311__auto__.call(null);
(statearr_18463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18465);

return statearr_18463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18465,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18485 = arguments.length;
switch (G__18485) {
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
var c__7310__auto___18540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18540,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18540,out){
return (function (state_18515){
var state_val_18516 = (state_18515[(1)]);
if((state_val_18516 === (7))){
var inst_18494 = (state_18515[(7)]);
var inst_18495 = (state_18515[(8)]);
var inst_18494__$1 = (state_18515[(2)]);
var inst_18495__$1 = cljs.core.nth.call(null,inst_18494__$1,(0),null);
var inst_18496 = cljs.core.nth.call(null,inst_18494__$1,(1),null);
var inst_18497 = (inst_18495__$1 == null);
var state_18515__$1 = (function (){var statearr_18517 = state_18515;
(statearr_18517[(7)] = inst_18494__$1);

(statearr_18517[(8)] = inst_18495__$1);

(statearr_18517[(9)] = inst_18496);

return statearr_18517;
})();
if(cljs.core.truth_(inst_18497)){
var statearr_18518_18541 = state_18515__$1;
(statearr_18518_18541[(1)] = (8));

} else {
var statearr_18519_18542 = state_18515__$1;
(statearr_18519_18542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (1))){
var inst_18486 = cljs.core.vec.call(null,chs);
var inst_18487 = inst_18486;
var state_18515__$1 = (function (){var statearr_18520 = state_18515;
(statearr_18520[(10)] = inst_18487);

return statearr_18520;
})();
var statearr_18521_18543 = state_18515__$1;
(statearr_18521_18543[(2)] = null);

(statearr_18521_18543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (4))){
var inst_18487 = (state_18515[(10)]);
var state_18515__$1 = state_18515;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18515__$1,(7),inst_18487);
} else {
if((state_val_18516 === (6))){
var inst_18511 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
var statearr_18522_18544 = state_18515__$1;
(statearr_18522_18544[(2)] = inst_18511);

(statearr_18522_18544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (3))){
var inst_18513 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18515__$1,inst_18513);
} else {
if((state_val_18516 === (2))){
var inst_18487 = (state_18515[(10)]);
var inst_18489 = cljs.core.count.call(null,inst_18487);
var inst_18490 = (inst_18489 > (0));
var state_18515__$1 = state_18515;
if(cljs.core.truth_(inst_18490)){
var statearr_18524_18545 = state_18515__$1;
(statearr_18524_18545[(1)] = (4));

} else {
var statearr_18525_18546 = state_18515__$1;
(statearr_18525_18546[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (11))){
var inst_18487 = (state_18515[(10)]);
var inst_18504 = (state_18515[(2)]);
var tmp18523 = inst_18487;
var inst_18487__$1 = tmp18523;
var state_18515__$1 = (function (){var statearr_18526 = state_18515;
(statearr_18526[(10)] = inst_18487__$1);

(statearr_18526[(11)] = inst_18504);

return statearr_18526;
})();
var statearr_18527_18547 = state_18515__$1;
(statearr_18527_18547[(2)] = null);

(statearr_18527_18547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (9))){
var inst_18495 = (state_18515[(8)]);
var state_18515__$1 = state_18515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18515__$1,(11),out,inst_18495);
} else {
if((state_val_18516 === (5))){
var inst_18509 = cljs.core.async.close_BANG_.call(null,out);
var state_18515__$1 = state_18515;
var statearr_18528_18548 = state_18515__$1;
(statearr_18528_18548[(2)] = inst_18509);

(statearr_18528_18548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (10))){
var inst_18507 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
var statearr_18529_18549 = state_18515__$1;
(statearr_18529_18549[(2)] = inst_18507);

(statearr_18529_18549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (8))){
var inst_18487 = (state_18515[(10)]);
var inst_18494 = (state_18515[(7)]);
var inst_18495 = (state_18515[(8)]);
var inst_18496 = (state_18515[(9)]);
var inst_18499 = (function (){var cs = inst_18487;
var vec__18492 = inst_18494;
var v = inst_18495;
var c = inst_18496;
return ((function (cs,vec__18492,v,c,inst_18487,inst_18494,inst_18495,inst_18496,state_val_18516,c__7310__auto___18540,out){
return (function (p1__18483_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18483_SHARP_);
});
;})(cs,vec__18492,v,c,inst_18487,inst_18494,inst_18495,inst_18496,state_val_18516,c__7310__auto___18540,out))
})();
var inst_18500 = cljs.core.filterv.call(null,inst_18499,inst_18487);
var inst_18487__$1 = inst_18500;
var state_18515__$1 = (function (){var statearr_18530 = state_18515;
(statearr_18530[(10)] = inst_18487__$1);

return statearr_18530;
})();
var statearr_18531_18550 = state_18515__$1;
(statearr_18531_18550[(2)] = null);

(statearr_18531_18550[(1)] = (2));


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
});})(c__7310__auto___18540,out))
;
return ((function (switch__7248__auto__,c__7310__auto___18540,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18535 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18535[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18535[(1)] = (1));

return statearr_18535;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18515){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18536){if((e18536 instanceof Object)){
var ex__7252__auto__ = e18536;
var statearr_18537_18551 = state_18515;
(statearr_18537_18551[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18552 = state_18515;
state_18515 = G__18552;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18540,out))
})();
var state__7312__auto__ = (function (){var statearr_18538 = f__7311__auto__.call(null);
(statearr_18538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18540);

return statearr_18538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18540,out))
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
var G__18554 = arguments.length;
switch (G__18554) {
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
var c__7310__auto___18602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18602,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18602,out){
return (function (state_18578){
var state_val_18579 = (state_18578[(1)]);
if((state_val_18579 === (7))){
var inst_18560 = (state_18578[(7)]);
var inst_18560__$1 = (state_18578[(2)]);
var inst_18561 = (inst_18560__$1 == null);
var inst_18562 = cljs.core.not.call(null,inst_18561);
var state_18578__$1 = (function (){var statearr_18580 = state_18578;
(statearr_18580[(7)] = inst_18560__$1);

return statearr_18580;
})();
if(inst_18562){
var statearr_18581_18603 = state_18578__$1;
(statearr_18581_18603[(1)] = (8));

} else {
var statearr_18582_18604 = state_18578__$1;
(statearr_18582_18604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18579 === (1))){
var inst_18555 = (0);
var state_18578__$1 = (function (){var statearr_18583 = state_18578;
(statearr_18583[(8)] = inst_18555);

return statearr_18583;
})();
var statearr_18584_18605 = state_18578__$1;
(statearr_18584_18605[(2)] = null);

(statearr_18584_18605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18579 === (4))){
var state_18578__$1 = state_18578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18578__$1,(7),ch);
} else {
if((state_val_18579 === (6))){
var inst_18573 = (state_18578[(2)]);
var state_18578__$1 = state_18578;
var statearr_18585_18606 = state_18578__$1;
(statearr_18585_18606[(2)] = inst_18573);

(statearr_18585_18606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18579 === (3))){
var inst_18575 = (state_18578[(2)]);
var inst_18576 = cljs.core.async.close_BANG_.call(null,out);
var state_18578__$1 = (function (){var statearr_18586 = state_18578;
(statearr_18586[(9)] = inst_18575);

return statearr_18586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18578__$1,inst_18576);
} else {
if((state_val_18579 === (2))){
var inst_18555 = (state_18578[(8)]);
var inst_18557 = (inst_18555 < n);
var state_18578__$1 = state_18578;
if(cljs.core.truth_(inst_18557)){
var statearr_18587_18607 = state_18578__$1;
(statearr_18587_18607[(1)] = (4));

} else {
var statearr_18588_18608 = state_18578__$1;
(statearr_18588_18608[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18579 === (11))){
var inst_18555 = (state_18578[(8)]);
var inst_18565 = (state_18578[(2)]);
var inst_18566 = (inst_18555 + (1));
var inst_18555__$1 = inst_18566;
var state_18578__$1 = (function (){var statearr_18589 = state_18578;
(statearr_18589[(10)] = inst_18565);

(statearr_18589[(8)] = inst_18555__$1);

return statearr_18589;
})();
var statearr_18590_18609 = state_18578__$1;
(statearr_18590_18609[(2)] = null);

(statearr_18590_18609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18579 === (9))){
var state_18578__$1 = state_18578;
var statearr_18591_18610 = state_18578__$1;
(statearr_18591_18610[(2)] = null);

(statearr_18591_18610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18579 === (5))){
var state_18578__$1 = state_18578;
var statearr_18592_18611 = state_18578__$1;
(statearr_18592_18611[(2)] = null);

(statearr_18592_18611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18579 === (10))){
var inst_18570 = (state_18578[(2)]);
var state_18578__$1 = state_18578;
var statearr_18593_18612 = state_18578__$1;
(statearr_18593_18612[(2)] = inst_18570);

(statearr_18593_18612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18579 === (8))){
var inst_18560 = (state_18578[(7)]);
var state_18578__$1 = state_18578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18578__$1,(11),out,inst_18560);
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
});})(c__7310__auto___18602,out))
;
return ((function (switch__7248__auto__,c__7310__auto___18602,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18597 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18597[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18597[(1)] = (1));

return statearr_18597;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18578){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18598){if((e18598 instanceof Object)){
var ex__7252__auto__ = e18598;
var statearr_18599_18613 = state_18578;
(statearr_18599_18613[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18614 = state_18578;
state_18578 = G__18614;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18602,out))
})();
var state__7312__auto__ = (function (){var statearr_18600 = f__7311__auto__.call(null);
(statearr_18600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18602);

return statearr_18600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18602,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t18622 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18622 = (function (map_LT_,f,ch,meta18623){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18623 = meta18623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18624,meta18623__$1){
var self__ = this;
var _18624__$1 = this;
return (new cljs.core.async.t18622(self__.map_LT_,self__.f,self__.ch,meta18623__$1));
});

cljs.core.async.t18622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18624){
var self__ = this;
var _18624__$1 = this;
return self__.meta18623;
});

cljs.core.async.t18622.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18622.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18622.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18622.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18622.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t18625 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18625 = (function (map_LT_,f,ch,meta18623,_,fn1,meta18626){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18623 = meta18623;
this._ = _;
this.fn1 = fn1;
this.meta18626 = meta18626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18627,meta18626__$1){
var self__ = this;
var _18627__$1 = this;
return (new cljs.core.async.t18625(self__.map_LT_,self__.f,self__.ch,self__.meta18623,self__._,self__.fn1,meta18626__$1));
});})(___$1))
;

cljs.core.async.t18625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18627){
var self__ = this;
var _18627__$1 = this;
return self__.meta18626;
});})(___$1))
;

cljs.core.async.t18625.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t18625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18615_SHARP_){
return f1.call(null,(((p1__18615_SHARP_ == null))?null:self__.f.call(null,p1__18615_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t18625.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18623","meta18623",962359617,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18626","meta18626",-589186422,null)], null);
});})(___$1))
;

cljs.core.async.t18625.cljs$lang$type = true;

cljs.core.async.t18625.cljs$lang$ctorStr = "cljs.core.async/t18625";

cljs.core.async.t18625.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18625");
});})(___$1))
;

cljs.core.async.__GT_t18625 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t18625(map_LT___$1,f__$1,ch__$1,meta18623__$1,___$2,fn1__$1,meta18626){
return (new cljs.core.async.t18625(map_LT___$1,f__$1,ch__$1,meta18623__$1,___$2,fn1__$1,meta18626));
});})(___$1))
;

}

return (new cljs.core.async.t18625(self__.map_LT_,self__.f,self__.ch,self__.meta18623,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t18622.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18622.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t18622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18623","meta18623",962359617,null)], null);
});

cljs.core.async.t18622.cljs$lang$type = true;

cljs.core.async.t18622.cljs$lang$ctorStr = "cljs.core.async/t18622";

cljs.core.async.t18622.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18622");
});

cljs.core.async.__GT_t18622 = (function cljs$core$async$map_LT__$___GT_t18622(map_LT___$1,f__$1,ch__$1,meta18623){
return (new cljs.core.async.t18622(map_LT___$1,f__$1,ch__$1,meta18623));
});

}

return (new cljs.core.async.t18622(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t18631 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18631 = (function (map_GT_,f,ch,meta18632){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18632 = meta18632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18633,meta18632__$1){
var self__ = this;
var _18633__$1 = this;
return (new cljs.core.async.t18631(self__.map_GT_,self__.f,self__.ch,meta18632__$1));
});

cljs.core.async.t18631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18633){
var self__ = this;
var _18633__$1 = this;
return self__.meta18632;
});

cljs.core.async.t18631.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t18631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18632","meta18632",1028401407,null)], null);
});

cljs.core.async.t18631.cljs$lang$type = true;

cljs.core.async.t18631.cljs$lang$ctorStr = "cljs.core.async/t18631";

cljs.core.async.t18631.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18631");
});

cljs.core.async.__GT_t18631 = (function cljs$core$async$map_GT__$___GT_t18631(map_GT___$1,f__$1,ch__$1,meta18632){
return (new cljs.core.async.t18631(map_GT___$1,f__$1,ch__$1,meta18632));
});

}

return (new cljs.core.async.t18631(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t18637 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18637 = (function (filter_GT_,p,ch,meta18638){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18638 = meta18638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18639,meta18638__$1){
var self__ = this;
var _18639__$1 = this;
return (new cljs.core.async.t18637(self__.filter_GT_,self__.p,self__.ch,meta18638__$1));
});

cljs.core.async.t18637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18639){
var self__ = this;
var _18639__$1 = this;
return self__.meta18638;
});

cljs.core.async.t18637.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18637.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18637.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18637.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t18637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18638","meta18638",-728768218,null)], null);
});

cljs.core.async.t18637.cljs$lang$type = true;

cljs.core.async.t18637.cljs$lang$ctorStr = "cljs.core.async/t18637";

cljs.core.async.t18637.cljs$lang$ctorPrWriter = (function (this__5529__auto__,writer__5530__auto__,opt__5531__auto__){
return cljs.core._write.call(null,writer__5530__auto__,"cljs.core.async/t18637");
});

cljs.core.async.__GT_t18637 = (function cljs$core$async$filter_GT__$___GT_t18637(filter_GT___$1,p__$1,ch__$1,meta18638){
return (new cljs.core.async.t18637(filter_GT___$1,p__$1,ch__$1,meta18638));
});

}

return (new cljs.core.async.t18637(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18641 = arguments.length;
switch (G__18641) {
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
var c__7310__auto___18684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18684,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18684,out){
return (function (state_18662){
var state_val_18663 = (state_18662[(1)]);
if((state_val_18663 === (7))){
var inst_18658 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
var statearr_18664_18685 = state_18662__$1;
(statearr_18664_18685[(2)] = inst_18658);

(statearr_18664_18685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18663 === (1))){
var state_18662__$1 = state_18662;
var statearr_18665_18686 = state_18662__$1;
(statearr_18665_18686[(2)] = null);

(statearr_18665_18686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18663 === (4))){
var inst_18644 = (state_18662[(7)]);
var inst_18644__$1 = (state_18662[(2)]);
var inst_18645 = (inst_18644__$1 == null);
var state_18662__$1 = (function (){var statearr_18666 = state_18662;
(statearr_18666[(7)] = inst_18644__$1);

return statearr_18666;
})();
if(cljs.core.truth_(inst_18645)){
var statearr_18667_18687 = state_18662__$1;
(statearr_18667_18687[(1)] = (5));

} else {
var statearr_18668_18688 = state_18662__$1;
(statearr_18668_18688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18663 === (6))){
var inst_18644 = (state_18662[(7)]);
var inst_18649 = p.call(null,inst_18644);
var state_18662__$1 = state_18662;
if(cljs.core.truth_(inst_18649)){
var statearr_18669_18689 = state_18662__$1;
(statearr_18669_18689[(1)] = (8));

} else {
var statearr_18670_18690 = state_18662__$1;
(statearr_18670_18690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18663 === (3))){
var inst_18660 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18662__$1,inst_18660);
} else {
if((state_val_18663 === (2))){
var state_18662__$1 = state_18662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18662__$1,(4),ch);
} else {
if((state_val_18663 === (11))){
var inst_18652 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
var statearr_18671_18691 = state_18662__$1;
(statearr_18671_18691[(2)] = inst_18652);

(statearr_18671_18691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18663 === (9))){
var state_18662__$1 = state_18662;
var statearr_18672_18692 = state_18662__$1;
(statearr_18672_18692[(2)] = null);

(statearr_18672_18692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18663 === (5))){
var inst_18647 = cljs.core.async.close_BANG_.call(null,out);
var state_18662__$1 = state_18662;
var statearr_18673_18693 = state_18662__$1;
(statearr_18673_18693[(2)] = inst_18647);

(statearr_18673_18693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18663 === (10))){
var inst_18655 = (state_18662[(2)]);
var state_18662__$1 = (function (){var statearr_18674 = state_18662;
(statearr_18674[(8)] = inst_18655);

return statearr_18674;
})();
var statearr_18675_18694 = state_18662__$1;
(statearr_18675_18694[(2)] = null);

(statearr_18675_18694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18663 === (8))){
var inst_18644 = (state_18662[(7)]);
var state_18662__$1 = state_18662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18662__$1,(11),out,inst_18644);
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
});})(c__7310__auto___18684,out))
;
return ((function (switch__7248__auto__,c__7310__auto___18684,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18679 = [null,null,null,null,null,null,null,null,null];
(statearr_18679[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18679[(1)] = (1));

return statearr_18679;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18662){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18680){if((e18680 instanceof Object)){
var ex__7252__auto__ = e18680;
var statearr_18681_18695 = state_18662;
(statearr_18681_18695[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18696 = state_18662;
state_18662 = G__18696;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18684,out))
})();
var state__7312__auto__ = (function (){var statearr_18682 = f__7311__auto__.call(null);
(statearr_18682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18684);

return statearr_18682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18684,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__18698 = arguments.length;
switch (G__18698) {
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
return (function (state_18865){
var state_val_18866 = (state_18865[(1)]);
if((state_val_18866 === (7))){
var inst_18861 = (state_18865[(2)]);
var state_18865__$1 = state_18865;
var statearr_18867_18908 = state_18865__$1;
(statearr_18867_18908[(2)] = inst_18861);

(statearr_18867_18908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (20))){
var inst_18831 = (state_18865[(7)]);
var inst_18842 = (state_18865[(2)]);
var inst_18843 = cljs.core.next.call(null,inst_18831);
var inst_18817 = inst_18843;
var inst_18818 = null;
var inst_18819 = (0);
var inst_18820 = (0);
var state_18865__$1 = (function (){var statearr_18868 = state_18865;
(statearr_18868[(8)] = inst_18842);

(statearr_18868[(9)] = inst_18817);

(statearr_18868[(10)] = inst_18820);

(statearr_18868[(11)] = inst_18818);

(statearr_18868[(12)] = inst_18819);

return statearr_18868;
})();
var statearr_18869_18909 = state_18865__$1;
(statearr_18869_18909[(2)] = null);

(statearr_18869_18909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (1))){
var state_18865__$1 = state_18865;
var statearr_18870_18910 = state_18865__$1;
(statearr_18870_18910[(2)] = null);

(statearr_18870_18910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (4))){
var inst_18806 = (state_18865[(13)]);
var inst_18806__$1 = (state_18865[(2)]);
var inst_18807 = (inst_18806__$1 == null);
var state_18865__$1 = (function (){var statearr_18871 = state_18865;
(statearr_18871[(13)] = inst_18806__$1);

return statearr_18871;
})();
if(cljs.core.truth_(inst_18807)){
var statearr_18872_18911 = state_18865__$1;
(statearr_18872_18911[(1)] = (5));

} else {
var statearr_18873_18912 = state_18865__$1;
(statearr_18873_18912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (15))){
var state_18865__$1 = state_18865;
var statearr_18877_18913 = state_18865__$1;
(statearr_18877_18913[(2)] = null);

(statearr_18877_18913[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (21))){
var state_18865__$1 = state_18865;
var statearr_18878_18914 = state_18865__$1;
(statearr_18878_18914[(2)] = null);

(statearr_18878_18914[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (13))){
var inst_18817 = (state_18865[(9)]);
var inst_18820 = (state_18865[(10)]);
var inst_18818 = (state_18865[(11)]);
var inst_18819 = (state_18865[(12)]);
var inst_18827 = (state_18865[(2)]);
var inst_18828 = (inst_18820 + (1));
var tmp18874 = inst_18817;
var tmp18875 = inst_18818;
var tmp18876 = inst_18819;
var inst_18817__$1 = tmp18874;
var inst_18818__$1 = tmp18875;
var inst_18819__$1 = tmp18876;
var inst_18820__$1 = inst_18828;
var state_18865__$1 = (function (){var statearr_18879 = state_18865;
(statearr_18879[(9)] = inst_18817__$1);

(statearr_18879[(10)] = inst_18820__$1);

(statearr_18879[(11)] = inst_18818__$1);

(statearr_18879[(12)] = inst_18819__$1);

(statearr_18879[(14)] = inst_18827);

return statearr_18879;
})();
var statearr_18880_18915 = state_18865__$1;
(statearr_18880_18915[(2)] = null);

(statearr_18880_18915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (22))){
var state_18865__$1 = state_18865;
var statearr_18881_18916 = state_18865__$1;
(statearr_18881_18916[(2)] = null);

(statearr_18881_18916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (6))){
var inst_18806 = (state_18865[(13)]);
var inst_18815 = f.call(null,inst_18806);
var inst_18816 = cljs.core.seq.call(null,inst_18815);
var inst_18817 = inst_18816;
var inst_18818 = null;
var inst_18819 = (0);
var inst_18820 = (0);
var state_18865__$1 = (function (){var statearr_18882 = state_18865;
(statearr_18882[(9)] = inst_18817);

(statearr_18882[(10)] = inst_18820);

(statearr_18882[(11)] = inst_18818);

(statearr_18882[(12)] = inst_18819);

return statearr_18882;
})();
var statearr_18883_18917 = state_18865__$1;
(statearr_18883_18917[(2)] = null);

(statearr_18883_18917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (17))){
var inst_18831 = (state_18865[(7)]);
var inst_18835 = cljs.core.chunk_first.call(null,inst_18831);
var inst_18836 = cljs.core.chunk_rest.call(null,inst_18831);
var inst_18837 = cljs.core.count.call(null,inst_18835);
var inst_18817 = inst_18836;
var inst_18818 = inst_18835;
var inst_18819 = inst_18837;
var inst_18820 = (0);
var state_18865__$1 = (function (){var statearr_18884 = state_18865;
(statearr_18884[(9)] = inst_18817);

(statearr_18884[(10)] = inst_18820);

(statearr_18884[(11)] = inst_18818);

(statearr_18884[(12)] = inst_18819);

return statearr_18884;
})();
var statearr_18885_18918 = state_18865__$1;
(statearr_18885_18918[(2)] = null);

(statearr_18885_18918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (3))){
var inst_18863 = (state_18865[(2)]);
var state_18865__$1 = state_18865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18865__$1,inst_18863);
} else {
if((state_val_18866 === (12))){
var inst_18851 = (state_18865[(2)]);
var state_18865__$1 = state_18865;
var statearr_18886_18919 = state_18865__$1;
(statearr_18886_18919[(2)] = inst_18851);

(statearr_18886_18919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (2))){
var state_18865__$1 = state_18865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18865__$1,(4),in$);
} else {
if((state_val_18866 === (23))){
var inst_18859 = (state_18865[(2)]);
var state_18865__$1 = state_18865;
var statearr_18887_18920 = state_18865__$1;
(statearr_18887_18920[(2)] = inst_18859);

(statearr_18887_18920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (19))){
var inst_18846 = (state_18865[(2)]);
var state_18865__$1 = state_18865;
var statearr_18888_18921 = state_18865__$1;
(statearr_18888_18921[(2)] = inst_18846);

(statearr_18888_18921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (11))){
var inst_18817 = (state_18865[(9)]);
var inst_18831 = (state_18865[(7)]);
var inst_18831__$1 = cljs.core.seq.call(null,inst_18817);
var state_18865__$1 = (function (){var statearr_18889 = state_18865;
(statearr_18889[(7)] = inst_18831__$1);

return statearr_18889;
})();
if(inst_18831__$1){
var statearr_18890_18922 = state_18865__$1;
(statearr_18890_18922[(1)] = (14));

} else {
var statearr_18891_18923 = state_18865__$1;
(statearr_18891_18923[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (9))){
var inst_18853 = (state_18865[(2)]);
var inst_18854 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18865__$1 = (function (){var statearr_18892 = state_18865;
(statearr_18892[(15)] = inst_18853);

return statearr_18892;
})();
if(cljs.core.truth_(inst_18854)){
var statearr_18893_18924 = state_18865__$1;
(statearr_18893_18924[(1)] = (21));

} else {
var statearr_18894_18925 = state_18865__$1;
(statearr_18894_18925[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (5))){
var inst_18809 = cljs.core.async.close_BANG_.call(null,out);
var state_18865__$1 = state_18865;
var statearr_18895_18926 = state_18865__$1;
(statearr_18895_18926[(2)] = inst_18809);

(statearr_18895_18926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (14))){
var inst_18831 = (state_18865[(7)]);
var inst_18833 = cljs.core.chunked_seq_QMARK_.call(null,inst_18831);
var state_18865__$1 = state_18865;
if(inst_18833){
var statearr_18896_18927 = state_18865__$1;
(statearr_18896_18927[(1)] = (17));

} else {
var statearr_18897_18928 = state_18865__$1;
(statearr_18897_18928[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (16))){
var inst_18849 = (state_18865[(2)]);
var state_18865__$1 = state_18865;
var statearr_18898_18929 = state_18865__$1;
(statearr_18898_18929[(2)] = inst_18849);

(statearr_18898_18929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18866 === (10))){
var inst_18820 = (state_18865[(10)]);
var inst_18818 = (state_18865[(11)]);
var inst_18825 = cljs.core._nth.call(null,inst_18818,inst_18820);
var state_18865__$1 = state_18865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18865__$1,(13),out,inst_18825);
} else {
if((state_val_18866 === (18))){
var inst_18831 = (state_18865[(7)]);
var inst_18840 = cljs.core.first.call(null,inst_18831);
var state_18865__$1 = state_18865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18865__$1,(20),out,inst_18840);
} else {
if((state_val_18866 === (8))){
var inst_18820 = (state_18865[(10)]);
var inst_18819 = (state_18865[(12)]);
var inst_18822 = (inst_18820 < inst_18819);
var inst_18823 = inst_18822;
var state_18865__$1 = state_18865;
if(cljs.core.truth_(inst_18823)){
var statearr_18899_18930 = state_18865__$1;
(statearr_18899_18930[(1)] = (10));

} else {
var statearr_18900_18931 = state_18865__$1;
(statearr_18900_18931[(1)] = (11));

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
var statearr_18904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18904[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__);

(statearr_18904[(1)] = (1));

return statearr_18904;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____1 = (function (state_18865){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18905){if((e18905 instanceof Object)){
var ex__7252__auto__ = e18905;
var statearr_18906_18932 = state_18865;
(statearr_18906_18932[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18933 = state_18865;
state_18865 = G__18933;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__ = function(state_18865){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____1.call(this,state_18865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7249__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto__))
})();
var state__7312__auto__ = (function (){var statearr_18907 = f__7311__auto__.call(null);
(statearr_18907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto__);

return statearr_18907;
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
var G__18935 = arguments.length;
switch (G__18935) {
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
var G__18938 = arguments.length;
switch (G__18938) {
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
var G__18941 = arguments.length;
switch (G__18941) {
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
var c__7310__auto___18991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___18991,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___18991,out){
return (function (state_18965){
var state_val_18966 = (state_18965[(1)]);
if((state_val_18966 === (7))){
var inst_18960 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_18967_18992 = state_18965__$1;
(statearr_18967_18992[(2)] = inst_18960);

(statearr_18967_18992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (1))){
var inst_18942 = null;
var state_18965__$1 = (function (){var statearr_18968 = state_18965;
(statearr_18968[(7)] = inst_18942);

return statearr_18968;
})();
var statearr_18969_18993 = state_18965__$1;
(statearr_18969_18993[(2)] = null);

(statearr_18969_18993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (4))){
var inst_18945 = (state_18965[(8)]);
var inst_18945__$1 = (state_18965[(2)]);
var inst_18946 = (inst_18945__$1 == null);
var inst_18947 = cljs.core.not.call(null,inst_18946);
var state_18965__$1 = (function (){var statearr_18970 = state_18965;
(statearr_18970[(8)] = inst_18945__$1);

return statearr_18970;
})();
if(inst_18947){
var statearr_18971_18994 = state_18965__$1;
(statearr_18971_18994[(1)] = (5));

} else {
var statearr_18972_18995 = state_18965__$1;
(statearr_18972_18995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (6))){
var state_18965__$1 = state_18965;
var statearr_18973_18996 = state_18965__$1;
(statearr_18973_18996[(2)] = null);

(statearr_18973_18996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (3))){
var inst_18962 = (state_18965[(2)]);
var inst_18963 = cljs.core.async.close_BANG_.call(null,out);
var state_18965__$1 = (function (){var statearr_18974 = state_18965;
(statearr_18974[(9)] = inst_18962);

return statearr_18974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18965__$1,inst_18963);
} else {
if((state_val_18966 === (2))){
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18965__$1,(4),ch);
} else {
if((state_val_18966 === (11))){
var inst_18945 = (state_18965[(8)]);
var inst_18954 = (state_18965[(2)]);
var inst_18942 = inst_18945;
var state_18965__$1 = (function (){var statearr_18975 = state_18965;
(statearr_18975[(7)] = inst_18942);

(statearr_18975[(10)] = inst_18954);

return statearr_18975;
})();
var statearr_18976_18997 = state_18965__$1;
(statearr_18976_18997[(2)] = null);

(statearr_18976_18997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (9))){
var inst_18945 = (state_18965[(8)]);
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18965__$1,(11),out,inst_18945);
} else {
if((state_val_18966 === (5))){
var inst_18945 = (state_18965[(8)]);
var inst_18942 = (state_18965[(7)]);
var inst_18949 = cljs.core._EQ_.call(null,inst_18945,inst_18942);
var state_18965__$1 = state_18965;
if(inst_18949){
var statearr_18978_18998 = state_18965__$1;
(statearr_18978_18998[(1)] = (8));

} else {
var statearr_18979_18999 = state_18965__$1;
(statearr_18979_18999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (10))){
var inst_18957 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_18980_19000 = state_18965__$1;
(statearr_18980_19000[(2)] = inst_18957);

(statearr_18980_19000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (8))){
var inst_18942 = (state_18965[(7)]);
var tmp18977 = inst_18942;
var inst_18942__$1 = tmp18977;
var state_18965__$1 = (function (){var statearr_18981 = state_18965;
(statearr_18981[(7)] = inst_18942__$1);

return statearr_18981;
})();
var statearr_18982_19001 = state_18965__$1;
(statearr_18982_19001[(2)] = null);

(statearr_18982_19001[(1)] = (2));


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
});})(c__7310__auto___18991,out))
;
return ((function (switch__7248__auto__,c__7310__auto___18991,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_18986 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18986[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_18986[(1)] = (1));

return statearr_18986;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_18965){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18987){if((e18987 instanceof Object)){
var ex__7252__auto__ = e18987;
var statearr_18988_19002 = state_18965;
(statearr_18988_19002[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19003 = state_18965;
state_18965 = G__19003;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_18965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_18965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___18991,out))
})();
var state__7312__auto__ = (function (){var statearr_18989 = f__7311__auto__.call(null);
(statearr_18989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___18991);

return statearr_18989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___18991,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__19005 = arguments.length;
switch (G__19005) {
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
var c__7310__auto___19074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___19074,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___19074,out){
return (function (state_19043){
var state_val_19044 = (state_19043[(1)]);
if((state_val_19044 === (7))){
var inst_19039 = (state_19043[(2)]);
var state_19043__$1 = state_19043;
var statearr_19045_19075 = state_19043__$1;
(statearr_19045_19075[(2)] = inst_19039);

(statearr_19045_19075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (1))){
var inst_19006 = (new Array(n));
var inst_19007 = inst_19006;
var inst_19008 = (0);
var state_19043__$1 = (function (){var statearr_19046 = state_19043;
(statearr_19046[(7)] = inst_19007);

(statearr_19046[(8)] = inst_19008);

return statearr_19046;
})();
var statearr_19047_19076 = state_19043__$1;
(statearr_19047_19076[(2)] = null);

(statearr_19047_19076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (4))){
var inst_19011 = (state_19043[(9)]);
var inst_19011__$1 = (state_19043[(2)]);
var inst_19012 = (inst_19011__$1 == null);
var inst_19013 = cljs.core.not.call(null,inst_19012);
var state_19043__$1 = (function (){var statearr_19048 = state_19043;
(statearr_19048[(9)] = inst_19011__$1);

return statearr_19048;
})();
if(inst_19013){
var statearr_19049_19077 = state_19043__$1;
(statearr_19049_19077[(1)] = (5));

} else {
var statearr_19050_19078 = state_19043__$1;
(statearr_19050_19078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (15))){
var inst_19033 = (state_19043[(2)]);
var state_19043__$1 = state_19043;
var statearr_19051_19079 = state_19043__$1;
(statearr_19051_19079[(2)] = inst_19033);

(statearr_19051_19079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (13))){
var state_19043__$1 = state_19043;
var statearr_19052_19080 = state_19043__$1;
(statearr_19052_19080[(2)] = null);

(statearr_19052_19080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (6))){
var inst_19008 = (state_19043[(8)]);
var inst_19029 = (inst_19008 > (0));
var state_19043__$1 = state_19043;
if(cljs.core.truth_(inst_19029)){
var statearr_19053_19081 = state_19043__$1;
(statearr_19053_19081[(1)] = (12));

} else {
var statearr_19054_19082 = state_19043__$1;
(statearr_19054_19082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (3))){
var inst_19041 = (state_19043[(2)]);
var state_19043__$1 = state_19043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19043__$1,inst_19041);
} else {
if((state_val_19044 === (12))){
var inst_19007 = (state_19043[(7)]);
var inst_19031 = cljs.core.vec.call(null,inst_19007);
var state_19043__$1 = state_19043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19043__$1,(15),out,inst_19031);
} else {
if((state_val_19044 === (2))){
var state_19043__$1 = state_19043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19043__$1,(4),ch);
} else {
if((state_val_19044 === (11))){
var inst_19023 = (state_19043[(2)]);
var inst_19024 = (new Array(n));
var inst_19007 = inst_19024;
var inst_19008 = (0);
var state_19043__$1 = (function (){var statearr_19055 = state_19043;
(statearr_19055[(7)] = inst_19007);

(statearr_19055[(8)] = inst_19008);

(statearr_19055[(10)] = inst_19023);

return statearr_19055;
})();
var statearr_19056_19083 = state_19043__$1;
(statearr_19056_19083[(2)] = null);

(statearr_19056_19083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (9))){
var inst_19007 = (state_19043[(7)]);
var inst_19021 = cljs.core.vec.call(null,inst_19007);
var state_19043__$1 = state_19043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19043__$1,(11),out,inst_19021);
} else {
if((state_val_19044 === (5))){
var inst_19016 = (state_19043[(11)]);
var inst_19011 = (state_19043[(9)]);
var inst_19007 = (state_19043[(7)]);
var inst_19008 = (state_19043[(8)]);
var inst_19015 = (inst_19007[inst_19008] = inst_19011);
var inst_19016__$1 = (inst_19008 + (1));
var inst_19017 = (inst_19016__$1 < n);
var state_19043__$1 = (function (){var statearr_19057 = state_19043;
(statearr_19057[(11)] = inst_19016__$1);

(statearr_19057[(12)] = inst_19015);

return statearr_19057;
})();
if(cljs.core.truth_(inst_19017)){
var statearr_19058_19084 = state_19043__$1;
(statearr_19058_19084[(1)] = (8));

} else {
var statearr_19059_19085 = state_19043__$1;
(statearr_19059_19085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (14))){
var inst_19036 = (state_19043[(2)]);
var inst_19037 = cljs.core.async.close_BANG_.call(null,out);
var state_19043__$1 = (function (){var statearr_19061 = state_19043;
(statearr_19061[(13)] = inst_19036);

return statearr_19061;
})();
var statearr_19062_19086 = state_19043__$1;
(statearr_19062_19086[(2)] = inst_19037);

(statearr_19062_19086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (10))){
var inst_19027 = (state_19043[(2)]);
var state_19043__$1 = state_19043;
var statearr_19063_19087 = state_19043__$1;
(statearr_19063_19087[(2)] = inst_19027);

(statearr_19063_19087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (8))){
var inst_19016 = (state_19043[(11)]);
var inst_19007 = (state_19043[(7)]);
var tmp19060 = inst_19007;
var inst_19007__$1 = tmp19060;
var inst_19008 = inst_19016;
var state_19043__$1 = (function (){var statearr_19064 = state_19043;
(statearr_19064[(7)] = inst_19007__$1);

(statearr_19064[(8)] = inst_19008);

return statearr_19064;
})();
var statearr_19065_19088 = state_19043__$1;
(statearr_19065_19088[(2)] = null);

(statearr_19065_19088[(1)] = (2));


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
});})(c__7310__auto___19074,out))
;
return ((function (switch__7248__auto__,c__7310__auto___19074,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_19069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19069[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_19069[(1)] = (1));

return statearr_19069;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_19043){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_19043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e19070){if((e19070 instanceof Object)){
var ex__7252__auto__ = e19070;
var statearr_19071_19089 = state_19043;
(statearr_19071_19089[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19090 = state_19043;
state_19043 = G__19090;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_19043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_19043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___19074,out))
})();
var state__7312__auto__ = (function (){var statearr_19072 = f__7311__auto__.call(null);
(statearr_19072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___19074);

return statearr_19072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___19074,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__19092 = arguments.length;
switch (G__19092) {
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
var c__7310__auto___19165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7310__auto___19165,out){
return (function (){
var f__7311__auto__ = (function (){var switch__7248__auto__ = ((function (c__7310__auto___19165,out){
return (function (state_19134){
var state_val_19135 = (state_19134[(1)]);
if((state_val_19135 === (7))){
var inst_19130 = (state_19134[(2)]);
var state_19134__$1 = state_19134;
var statearr_19136_19166 = state_19134__$1;
(statearr_19136_19166[(2)] = inst_19130);

(statearr_19136_19166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (1))){
var inst_19093 = [];
var inst_19094 = inst_19093;
var inst_19095 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19134__$1 = (function (){var statearr_19137 = state_19134;
(statearr_19137[(7)] = inst_19094);

(statearr_19137[(8)] = inst_19095);

return statearr_19137;
})();
var statearr_19138_19167 = state_19134__$1;
(statearr_19138_19167[(2)] = null);

(statearr_19138_19167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (4))){
var inst_19098 = (state_19134[(9)]);
var inst_19098__$1 = (state_19134[(2)]);
var inst_19099 = (inst_19098__$1 == null);
var inst_19100 = cljs.core.not.call(null,inst_19099);
var state_19134__$1 = (function (){var statearr_19139 = state_19134;
(statearr_19139[(9)] = inst_19098__$1);

return statearr_19139;
})();
if(inst_19100){
var statearr_19140_19168 = state_19134__$1;
(statearr_19140_19168[(1)] = (5));

} else {
var statearr_19141_19169 = state_19134__$1;
(statearr_19141_19169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (15))){
var inst_19124 = (state_19134[(2)]);
var state_19134__$1 = state_19134;
var statearr_19142_19170 = state_19134__$1;
(statearr_19142_19170[(2)] = inst_19124);

(statearr_19142_19170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (13))){
var state_19134__$1 = state_19134;
var statearr_19143_19171 = state_19134__$1;
(statearr_19143_19171[(2)] = null);

(statearr_19143_19171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (6))){
var inst_19094 = (state_19134[(7)]);
var inst_19119 = inst_19094.length;
var inst_19120 = (inst_19119 > (0));
var state_19134__$1 = state_19134;
if(cljs.core.truth_(inst_19120)){
var statearr_19144_19172 = state_19134__$1;
(statearr_19144_19172[(1)] = (12));

} else {
var statearr_19145_19173 = state_19134__$1;
(statearr_19145_19173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (3))){
var inst_19132 = (state_19134[(2)]);
var state_19134__$1 = state_19134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19134__$1,inst_19132);
} else {
if((state_val_19135 === (12))){
var inst_19094 = (state_19134[(7)]);
var inst_19122 = cljs.core.vec.call(null,inst_19094);
var state_19134__$1 = state_19134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19134__$1,(15),out,inst_19122);
} else {
if((state_val_19135 === (2))){
var state_19134__$1 = state_19134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19134__$1,(4),ch);
} else {
if((state_val_19135 === (11))){
var inst_19098 = (state_19134[(9)]);
var inst_19102 = (state_19134[(10)]);
var inst_19112 = (state_19134[(2)]);
var inst_19113 = [];
var inst_19114 = inst_19113.push(inst_19098);
var inst_19094 = inst_19113;
var inst_19095 = inst_19102;
var state_19134__$1 = (function (){var statearr_19146 = state_19134;
(statearr_19146[(7)] = inst_19094);

(statearr_19146[(8)] = inst_19095);

(statearr_19146[(11)] = inst_19112);

(statearr_19146[(12)] = inst_19114);

return statearr_19146;
})();
var statearr_19147_19174 = state_19134__$1;
(statearr_19147_19174[(2)] = null);

(statearr_19147_19174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (9))){
var inst_19094 = (state_19134[(7)]);
var inst_19110 = cljs.core.vec.call(null,inst_19094);
var state_19134__$1 = state_19134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19134__$1,(11),out,inst_19110);
} else {
if((state_val_19135 === (5))){
var inst_19098 = (state_19134[(9)]);
var inst_19102 = (state_19134[(10)]);
var inst_19095 = (state_19134[(8)]);
var inst_19102__$1 = f.call(null,inst_19098);
var inst_19103 = cljs.core._EQ_.call(null,inst_19102__$1,inst_19095);
var inst_19104 = cljs.core.keyword_identical_QMARK_.call(null,inst_19095,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19105 = (inst_19103) || (inst_19104);
var state_19134__$1 = (function (){var statearr_19148 = state_19134;
(statearr_19148[(10)] = inst_19102__$1);

return statearr_19148;
})();
if(cljs.core.truth_(inst_19105)){
var statearr_19149_19175 = state_19134__$1;
(statearr_19149_19175[(1)] = (8));

} else {
var statearr_19150_19176 = state_19134__$1;
(statearr_19150_19176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (14))){
var inst_19127 = (state_19134[(2)]);
var inst_19128 = cljs.core.async.close_BANG_.call(null,out);
var state_19134__$1 = (function (){var statearr_19152 = state_19134;
(statearr_19152[(13)] = inst_19127);

return statearr_19152;
})();
var statearr_19153_19177 = state_19134__$1;
(statearr_19153_19177[(2)] = inst_19128);

(statearr_19153_19177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (10))){
var inst_19117 = (state_19134[(2)]);
var state_19134__$1 = state_19134;
var statearr_19154_19178 = state_19134__$1;
(statearr_19154_19178[(2)] = inst_19117);

(statearr_19154_19178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (8))){
var inst_19098 = (state_19134[(9)]);
var inst_19094 = (state_19134[(7)]);
var inst_19102 = (state_19134[(10)]);
var inst_19107 = inst_19094.push(inst_19098);
var tmp19151 = inst_19094;
var inst_19094__$1 = tmp19151;
var inst_19095 = inst_19102;
var state_19134__$1 = (function (){var statearr_19155 = state_19134;
(statearr_19155[(14)] = inst_19107);

(statearr_19155[(7)] = inst_19094__$1);

(statearr_19155[(8)] = inst_19095);

return statearr_19155;
})();
var statearr_19156_19179 = state_19134__$1;
(statearr_19156_19179[(2)] = null);

(statearr_19156_19179[(1)] = (2));


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
});})(c__7310__auto___19165,out))
;
return ((function (switch__7248__auto__,c__7310__auto___19165,out){
return (function() {
var cljs$core$async$state_machine__7249__auto__ = null;
var cljs$core$async$state_machine__7249__auto____0 = (function (){
var statearr_19160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19160[(0)] = cljs$core$async$state_machine__7249__auto__);

(statearr_19160[(1)] = (1));

return statearr_19160;
});
var cljs$core$async$state_machine__7249__auto____1 = (function (state_19134){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_19134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e19161){if((e19161 instanceof Object)){
var ex__7252__auto__ = e19161;
var statearr_19162_19180 = state_19134;
(statearr_19162_19180[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19181 = state_19134;
state_19134 = G__19181;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
cljs$core$async$state_machine__7249__auto__ = function(state_19134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7249__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7249__auto____1.call(this,state_19134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7249__auto____0;
cljs$core$async$state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7249__auto____1;
return cljs$core$async$state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7310__auto___19165,out))
})();
var state__7312__auto__ = (function (){var statearr_19163 = f__7311__auto__.call(null);
(statearr_19163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7310__auto___19165);

return statearr_19163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7312__auto__);
});})(c__7310__auto___19165,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map