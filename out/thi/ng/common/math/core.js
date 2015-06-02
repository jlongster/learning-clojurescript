// Compiled by ClojureScript 0.0-3308 {}
goog.provide('thi.ng.common.math.core');
goog.require('cljs.core');
thi.ng.common.math.core.PI = Math.PI;
thi.ng.common.math.core.TWO_PI = (thi.ng.common.math.core.PI * 2.0);
thi.ng.common.math.core.HALF_PI = (thi.ng.common.math.core.PI / 2.0);
thi.ng.common.math.core.THIRD_PI = (thi.ng.common.math.core.PI / 3.0);
thi.ng.common.math.core.QUARTER_PI = (thi.ng.common.math.core.PI / 4.0);
thi.ng.common.math.core.SIXTH_PI = (thi.ng.common.math.core.PI / 6.0);
thi.ng.common.math.core.THREE_HALVES_PI = (thi.ng.common.math.core.PI * 1.5);
thi.ng.common.math.core.MAX = 1.7976931348623157E308;
thi.ng.common.math.core.MIN = 4.9E-324;
thi.ng.common.math.core.SQRT2 = Math.sqrt((2));
thi.ng.common.math.core.SQRT3 = Math.sqrt((3));
thi.ng.common.math.core.PHI = ((Math.sqrt(5.0) + (1)) / (2));
thi.ng.common.math.core.THIRD = (1.0 / 3.0);
thi.ng.common.math.core.LOG2 = Math.log(2.0);
thi.ng.common.math.core.INF_PLUS_ = Number.POSITIVE_INFINITY;
thi.ng.common.math.core.INF_ = Number.NEGATIVE_INFINITY;
thi.ng.common.math.core.DEG = (180.0 / thi.ng.common.math.core.PI);
thi.ng.common.math.core.RAD = (thi.ng.common.math.core.PI / 180.0);
thi.ng.common.math.core._STAR_eps_STAR_ = 1.0E-6;
thi.ng.common.math.core._STAR_rnd_STAR_ = Math.random;
thi.ng.common.math.core.abs = Math.abs;
thi.ng.common.math.core.abs_diff = (function thi$ng$common$math$core$abs_diff(x,y){
return thi.ng.common.math.core.abs.call(null,(x - y));
});

thi.ng.common.math.core.PDeltaEquals = (function (){var obj16996 = {};
return obj16996;
})();

thi.ng.common.math.core.delta_EQ_ = (function thi$ng$common$math$core$delta_EQ_(){
var G__16998 = arguments.length;
switch (G__16998) {
case 2:
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((function (){var and__4941__auto__ = a;
if(and__4941__auto__){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2;
} else {
return and__4941__auto__;
}
})()){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2(a,b);
} else {
var x__5589__auto__ = (((a == null))?null:a);
return (function (){var or__4953__auto__ = (thi.ng.common.math.core.delta_EQ_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (thi.ng.common.math.core.delta_EQ_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PDeltaEquals.delta=",a);
}
}
})().call(null,a,b);
}
});

thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,eps){
if((function (){var and__4941__auto__ = a;
if(and__4941__auto__){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3;
} else {
return and__4941__auto__;
}
})()){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3(a,b,eps);
} else {
var x__5589__auto__ = (((a == null))?null:a);
return (function (){var or__4953__auto__ = (thi.ng.common.math.core.delta_EQ_[goog.typeOf(x__5589__auto__)]);
if(or__4953__auto__){
return or__4953__auto__;
} else {
var or__4953__auto____$1 = (thi.ng.common.math.core.delta_EQ_["_"]);
if(or__4953__auto____$1){
return or__4953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PDeltaEquals.delta=",a);
}
}
})().call(null,a,b,eps);
}
});

thi.ng.common.math.core.delta_EQ_.cljs$lang$maxFixedArity = 3;

(thi.ng.common.math.core.PDeltaEquals["number"] = true);

(thi.ng.common.math.core.delta_EQ_["number"] = (function() {
var G__17000 = null;
var G__17000__2 = (function (a,b){
return (typeof b === 'number') && ((thi.ng.common.math.core.abs.call(null,(a - b)) <= thi.ng.common.math.core._STAR_eps_STAR_));
});
var G__17000__3 = (function (a,b,eps){
return (typeof b === 'number') && ((thi.ng.common.math.core.abs.call(null,(a - b)) <= eps));
});
G__17000 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__17000__2.call(this,a,b);
case 3:
return G__17000__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17000.cljs$core$IFn$_invoke$arity$2 = G__17000__2;
G__17000.cljs$core$IFn$_invoke$arity$3 = G__17000__3;
return G__17000;
})()
);

cljs.core.PersistentVector.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.PersistentVector.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__4941__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4941__auto__){
var and__4941__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4941__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1)))){
var G__17001 = cljs.core.next.call(null,a__$2);
var G__17002 = cljs.core.next.call(null,b__$1);
a__$2 = G__17001;
b__$1 = G__17002;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__4941__auto____$1;
}
} else {
return and__4941__auto__;
}
});

cljs.core.PersistentVector.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__4941__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4941__auto__){
var and__4941__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4941__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__17003 = cljs.core.next.call(null,a__$2);
var G__17004 = cljs.core.next.call(null,b__$1);
a__$2 = G__17003;
b__$1 = G__17004;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__4941__auto____$1;
}
} else {
return and__4941__auto__;
}
});

cljs.core.List.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.List.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__4941__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4941__auto__){
var and__4941__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4941__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1)))){
var G__17005 = cljs.core.next.call(null,a__$2);
var G__17006 = cljs.core.next.call(null,b__$1);
a__$2 = G__17005;
b__$1 = G__17006;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__4941__auto____$1;
}
} else {
return and__4941__auto__;
}
});

cljs.core.List.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__4941__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4941__auto__){
var and__4941__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4941__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__17007 = cljs.core.next.call(null,a__$2);
var G__17008 = cljs.core.next.call(null,b__$1);
a__$2 = G__17007;
b__$1 = G__17008;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__4941__auto____$1;
}
} else {
return and__4941__auto__;
}
});

cljs.core.LazySeq.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.LazySeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__4941__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4941__auto__){
var and__4941__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4941__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1)))){
var G__17009 = cljs.core.next.call(null,a__$2);
var G__17010 = cljs.core.next.call(null,b__$1);
a__$2 = G__17009;
b__$1 = G__17010;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__4941__auto____$1;
}
} else {
return and__4941__auto__;
}
});

cljs.core.LazySeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__4941__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4941__auto__){
var and__4941__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4941__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__17011 = cljs.core.next.call(null,a__$2);
var G__17012 = cljs.core.next.call(null,b__$1);
a__$2 = G__17011;
b__$1 = G__17012;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__4941__auto____$1;
}
} else {
return and__4941__auto__;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.IndexedSeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__4941__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4941__auto__){
var and__4941__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4941__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1)))){
var G__17013 = cljs.core.next.call(null,a__$2);
var G__17014 = cljs.core.next.call(null,b__$1);
a__$2 = G__17013;
b__$1 = G__17014;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__4941__auto____$1;
}
} else {
return and__4941__auto__;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__4941__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4941__auto__){
var and__4941__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4941__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__17015 = cljs.core.next.call(null,a__$2);
var G__17016 = cljs.core.next.call(null,b__$1);
a__$2 = G__17015;
b__$1 = G__17016;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__4941__auto____$1;
}
} else {
return and__4941__auto__;
}
});

(thi.ng.common.math.core.PDeltaEquals["null"] = true);

(thi.ng.common.math.core.delta_EQ_["null"] = (function() {
var G__17017 = null;
var G__17017__2 = (function (_,b){
return (b == null);
});
var G__17017__3 = (function (_,b,___$1){
return (b == null);
});
G__17017 = function(_,b,___$1){
switch(arguments.length){
case 2:
return G__17017__2.call(this,_,b);
case 3:
return G__17017__3.call(this,_,b,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17017.cljs$core$IFn$_invoke$arity$2 = G__17017__2;
G__17017.cljs$core$IFn$_invoke$arity$3 = G__17017__3;
return G__17017;
})()
);
/**
 * Returns x if even or `x+1` if `x` is odd.
 */
thi.ng.common.math.core.ensure_even = (function thi$ng$common$math$core$ensure_even(x){
if(cljs.core.even_QMARK_.call(null,x)){
return x;
} else {
return (x + (1));
}
});
/**
 * Returns x if odd or `x+1` if `x` is even.
 */
thi.ng.common.math.core.ensure_odd = (function thi$ng$common$math$core$ensure_odd(x){
if(cljs.core.even_QMARK_.call(null,x)){
return (x + (1));
} else {
return x;
}
});
thi.ng.common.math.core.signum = (function thi$ng$common$math$core$signum(){
var G__17019 = arguments.length;
switch (G__17019) {
case 1:
return thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x < (0))){
return (-1);
} else {
if((x === (0))){
return (0);
} else {
return (1);
}
}
});

thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$2 = (function (x,delta){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.call(null,0.0,x,delta))){
return (0);
} else {
if((x < (0))){
return (-1);
} else {
return (1);
}
}
});

thi.ng.common.math.core.signum.cljs$lang$maxFixedArity = 2;
thi.ng.common.math.core.clamp = (function thi$ng$common$math$core$clamp(x,min,max){
if((x < min)){
return min;
} else {
if((x > max)){
return max;
} else {
return x;
}
}
});
thi.ng.common.math.core.clamp_normalized = (function thi$ng$common$math$core$clamp_normalized(x){
if((x < -1.0)){
return -1.0;
} else {
if((x > 1.0)){
return 1.0;
} else {
return x;
}
}
});
/**
 * Maps x from one interval into another. Intervals can be defined as vectors.
 */
thi.ng.common.math.core.map_interval = (function thi$ng$common$math$core$map_interval(){
var G__17022 = arguments.length;
switch (G__17022) {
case 3:
return thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$3 = (function (x,p__17023,p__17024){
var vec__17025 = p__17023;
var in1 = cljs.core.nth.call(null,vec__17025,(0),null);
var in2 = cljs.core.nth.call(null,vec__17025,(1),null);
var vec__17026 = p__17024;
var out1 = cljs.core.nth.call(null,vec__17026,(0),null);
var out2 = cljs.core.nth.call(null,vec__17026,(1),null);
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
});

thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
});

thi.ng.common.math.core.map_interval.cljs$lang$maxFixedArity = 5;
thi.ng.common.math.core.map_interval_clamped = (function thi$ng$common$math$core$map_interval_clamped(){
var G__17029 = arguments.length;
switch (G__17029) {
case 3:
return thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 7:
return thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3 = (function (x,p__17030,p__17031){
var vec__17032 = p__17030;
var in1 = cljs.core.nth.call(null,vec__17032,(0),null);
var in2 = cljs.core.nth.call(null,vec__17032,(1),null);
var vec__17033 = p__17031;
var out1 = cljs.core.nth.call(null,vec__17033,(0),null);
var out2 = cljs.core.nth.call(null,vec__17033,(1),null);
return thi.ng.common.math.core.map_interval_clamped.call(null,x,in1,in2,out1,out2);
});

thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if((x <= in1)){
return out1;
} else {
if((x >= in2)){
return out2;
} else {
return thi.ng.common.math.core.map_interval.call(null,x,in1,in2,out1,out2);
}
}
});

thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4 = (function (x,p__17034,p__17035,p__17036){
var vec__17037 = p__17034;
var in1 = cljs.core.nth.call(null,vec__17037,(0),null);
var in2 = cljs.core.nth.call(null,vec__17037,(1),null);
var vec__17038 = p__17035;
var out1 = cljs.core.nth.call(null,vec__17038,(0),null);
var out2 = cljs.core.nth.call(null,vec__17038,(1),null);
var vec__17039 = p__17036;
var c1 = cljs.core.nth.call(null,vec__17039,(0),null);
var c2 = cljs.core.nth.call(null,vec__17039,(1),null);
return thi.ng.common.math.core.clamp.call(null,thi.ng.common.math.core.map_interval.call(null,x,in1,in2,out1,out2),c1,c2);
});

thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7 = (function (x,in1,in2,out1,out2,c1,c2){
return thi.ng.common.math.core.clamp.call(null,thi.ng.common.math.core.map_interval.call(null,x,in1,in2,out1,out2),c1,c2);
});

thi.ng.common.math.core.map_interval_clamped.cljs$lang$maxFixedArity = 7;
/**
 * Returns true if x >= min and x <= max.
 */
thi.ng.common.math.core.in_range_QMARK_ = (function thi$ng$common$math$core$in_range_QMARK_(){
var G__17042 = arguments.length;
switch (G__17042) {
case 2:
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__17043,x){
var vec__17044 = p__17043;
var min = cljs.core.nth.call(null,vec__17044,(0),null);
var max = cljs.core.nth.call(null,vec__17044,(1),null);
return ((x >= min)) && ((x <= max));
});

thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (min,max,x){
return ((x >= min)) && ((x <= max));
});

thi.ng.common.math.core.in_range_QMARK_.cljs$lang$maxFixedArity = 3;
thi.ng.common.math.core.wrap_range = (function thi$ng$common$math$core$wrap_range(x,y){
var x__$1 = cljs.core.rem.call(null,x,y);
if((x__$1 < (0))){
return (x__$1 + y);
} else {
return x__$1;
}
});
/**
 * Returns lazy-seq of values in the closed interval [0.0, 1.0] at
 * resolution 1/x.
 */
thi.ng.common.math.core.norm_range = (function thi$ng$common$math$core$norm_range(x){
return cljs.core.map.call(null,(function (p1__17046_SHARP_){
return (p1__17046_SHARP_ / x);
}),cljs.core.range.call(null,(x + (1))));
});
thi.ng.common.math.core.mix = (function thi$ng$common$math$core$mix(a,b,t){
return (((b - a) * t) + a);
});
thi.ng.common.math.core.step = (function thi$ng$common$math$core$step(edge,x){
if((x < edge)){
return 0.0;
} else {
return 1.0;
}
});
thi.ng.common.math.core.smoothstep = (function thi$ng$common$math$core$smoothstep(e0,e1,x){
var t = thi.ng.common.math.core.clamp.call(null,((x - e0) / (e1 - e0)),0.0,1.0);
return (t * (t * ((t * -2.0) + 3.0)));
});
thi.ng.common.math.core.floor = (function thi$ng$common$math$core$floor(x){
return Math.floor(x);
});
thi.ng.common.math.core.ceil = (function thi$ng$common$math$core$ceil(x){
return Math.ceil(x);
});
thi.ng.common.math.core.roundto = (function thi$ng$common$math$core$roundto(x,prec){
return (thi.ng.common.math.core.floor.call(null,((x / prec) + 0.5)) * prec);
});
thi.ng.common.math.core.ceil_pow2 = (function thi$ng$common$math$core$ceil_pow2(x){
var pow2 = (1);
while(true){
if((pow2 >= x)){
return pow2;
} else {
var G__17047 = (pow2 * (2));
pow2 = G__17047;
continue;
}
break;
}
});
thi.ng.common.math.core.floor_pow2 = (function thi$ng$common$math$core$floor_pow2(x){
return Math.pow((2),((Math.log(x) / thi.ng.common.math.core.LOG2) | (0)));
});
thi.ng.common.math.core.bit_count = (function thi$ng$common$math$core$bit_count(x){
return thi.ng.common.math.core.ceil.call(null,(Math.log(x) / thi.ng.common.math.core.LOG2));
});
thi.ng.common.math.core.trunc = (function thi$ng$common$math$core$trunc(x){
if((x < (0))){
return thi.ng.common.math.core.ceil.call(null,x);
} else {
return thi.ng.common.math.core.floor.call(null,x);
}
});
thi.ng.common.math.core.fract = (function thi$ng$common$math$core$fract(x){
return (x - Math.floor(x));
});
thi.ng.common.math.core.fdim = (function thi$ng$common$math$core$fdim(x,y){
if((x > y)){
return (x - y);
} else {
return (0);
}
});
thi.ng.common.math.core.radians = (function thi$ng$common$math$core$radians(x){
return (x * thi.ng.common.math.core.RAD);
});
thi.ng.common.math.core.degrees = (function thi$ng$common$math$core$degrees(x){
return (x * thi.ng.common.math.core.DEG);
});
thi.ng.common.math.core.maxmag = (function thi$ng$common$math$core$maxmag(x,y){
var ax = thi.ng.common.math.core.abs.call(null,x);
var ay = thi.ng.common.math.core.abs.call(null,y);
if((ax > ay)){
return x;
} else {
if((ay > ax)){
return y;
} else {
return x;

}
}
});
thi.ng.common.math.core.minmag = (function thi$ng$common$math$core$minmag(x,y){
var ax = thi.ng.common.math.core.abs.call(null,x);
var ay = thi.ng.common.math.core.abs.call(null,y);
if((ax < ay)){
return x;
} else {
if((ay < ax)){
return y;
} else {
return x;

}
}
});
thi.ng.common.math.core.ldexp = (function thi$ng$common$math$core$ldexp(x,k){
return (x * Math.pow((2),(k | (0))));
});
thi.ng.common.math.core.remquo = (function thi$ng$common$math$core$remquo(x,y){
var k = (x / y);
var f = thi.ng.common.math.core.fract.call(null,k);
var k__$1 = ((cljs.core._EQ_.call(null,f,0.5))?((cljs.core.even_QMARK_.call(null,(k | (0))))?(k | (0)):thi.ng.common.math.core.ceil.call(null,k)):(((f < 0.5))?thi.ng.common.math.core.floor.call(null,k):thi.ng.common.math.core.ceil.call(null,k)
));
return (x - (k__$1 * y));
});
thi.ng.common.math.core.hypot = (function thi$ng$common$math$core$hypot(x,y){
return Math.sqrt(((x * x) + (y * y)));
});
thi.ng.common.math.core.rootn = (function thi$ng$common$math$core$rootn(x,y){
return Math.pow(x,(1.0 / y));
});
thi.ng.common.math.core.rsqrt = (function thi$ng$common$math$core$rsqrt(x){
var r = Math.sqrt(x);
if((r > (0))){
return (1.0 / r);
} else {
return (0);
}
});
thi.ng.common.math.core.impulse = (function thi$ng$common$math$core$impulse(k,t){
var h = (k * t);
return (h * Math.exp((1.0 - h)));
});
thi.ng.common.math.core.random = (function thi$ng$common$math$core$random(){
var G__17049 = arguments.length;
switch (G__17049) {
case 0:
return thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.common.math.core._STAR_rnd_STAR_.call(null);
});

thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$1 = (function (max){
return (thi.ng.common.math.core._STAR_rnd_STAR_.call(null) * max);
});

thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (((max - min) * thi.ng.common.math.core._STAR_rnd_STAR_.call(null)) + min);
});

thi.ng.common.math.core.random.cljs$lang$maxFixedArity = 2;
thi.ng.common.math.core.randnorm = (function thi$ng$common$math$core$randnorm(){
return ((thi.ng.common.math.core._STAR_rnd_STAR_.call(null) * 2.0) - (1));
});
thi.ng.common.math.core.percentile_index = (function thi$ng$common$math$core$percentile_index(n,num){
return ((((n < (100)))?(Math.round((((n / 100.0) * num) + 0.5)) | (0)):num) - (1));
});
thi.ng.common.math.core.percentile = (function thi$ng$common$math$core$percentile(n,sorted){
return cljs.core.nth.call(null,sorted,thi.ng.common.math.core.percentile_index.call(null,n,cljs.core.count.call(null,sorted)));
});
thi.ng.common.math.core.quartile_index = (function thi$ng$common$math$core$quartile_index(n,num){
return thi.ng.common.math.core.percentile_index.call(null,(n * (25)),num);
});
thi.ng.common.math.core.quartile_range = (function thi$ng$common$math$core$quartile_range(n,num){
var a = thi.ng.common.math.core.quartile_index.call(null,(n - (1)),num);
var b = thi.ng.common.math.core.quartile_index.call(null,n,num);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((cljs.core._EQ_.call(null,n,(4)))?(b + (1)):b)], null);
});
/**
 * Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile.
 */
thi.ng.common.math.core.quartile = (function thi$ng$common$math$core$quartile(n,sorted){
var vec__17052 = thi.ng.common.math.core.quartile_range.call(null,n,cljs.core.count.call(null,sorted));
var a = cljs.core.nth.call(null,vec__17052,(0),null);
var b = cljs.core.nth.call(null,vec__17052,(1),null);
return cljs.core.take.call(null,(b - a),cljs.core.drop.call(null,a,sorted));
});
thi.ng.common.math.core.normdist_weights = (function thi$ng$common$math$core$normdist_weights(){
var G__17055 = arguments.length;
switch (G__17055) {
case 1:
return thi.ng.common.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.common.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.common.math.core.normdist_weights.call(null,n,1.0);
});

thi.ng.common.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2 = (function (n,scale){
var ws = cljs.core.repeatedly.call(null,n,thi.ng.common.math.core.random);
var s = (scale / cljs.core.reduce.call(null,cljs.core._PLUS_,ws));
return cljs.core.map.call(null,((function (ws,s){
return (function (p1__17053_SHARP_){
return (s * p1__17053_SHARP_);
});})(ws,s))
,ws);
});

thi.ng.common.math.core.normdist_weights.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map