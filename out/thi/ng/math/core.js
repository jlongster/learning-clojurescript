// Compiled by ClojureScript 0.0-3291 {}
goog.provide('thi.ng.math.core');
goog.require('cljs.core');
thi.ng.math.core.PI = Math.PI;
thi.ng.math.core.TWO_PI = (thi.ng.math.core.PI * 2.0);
thi.ng.math.core.HALF_PI = (thi.ng.math.core.PI / 2.0);
thi.ng.math.core.THIRD_PI = (thi.ng.math.core.PI / 3.0);
thi.ng.math.core.QUARTER_PI = (thi.ng.math.core.PI / 4.0);
thi.ng.math.core.SIXTH_PI = (thi.ng.math.core.PI / 6.0);
thi.ng.math.core.THREE_HALVES_PI = (thi.ng.math.core.PI * 1.5);
thi.ng.math.core.MAX = 1.7976931348623157E308;
thi.ng.math.core.MIN = 4.9E-324;
thi.ng.math.core.SQRT2 = Math.sqrt((2));
thi.ng.math.core.SQRT3 = Math.sqrt((3));
thi.ng.math.core.PHI = ((Math.sqrt(5.0) + (1)) / (2));
thi.ng.math.core.THIRD = (1.0 / 3.0);
thi.ng.math.core.LOG2 = Math.log(2.0);
thi.ng.math.core.INF_PLUS_ = Number.POSITIVE_INFINITY;
thi.ng.math.core.INF_ = Number.NEGATIVE_INFINITY;
thi.ng.math.core.DEG = (180.0 / thi.ng.math.core.PI);
thi.ng.math.core.RAD = (thi.ng.math.core.PI / 180.0);
thi.ng.math.core._STAR_eps_STAR_ = 1.0E-6;
thi.ng.math.core._STAR_rnd_STAR_ = Math.random;
thi.ng.math.core.abs = Math.abs;
thi.ng.math.core.abs_diff = (function thi$ng$math$core$abs_diff(x,y){
return thi.ng.math.core.abs.call(null,(x - y));
});

thi.ng.math.core.PDeltaEquals = (function (){var obj19861 = {};
return obj19861;
})();

thi.ng.math.core.delta_EQ_ = (function thi$ng$math$core$delta_EQ_(){
var G__19863 = arguments.length;
switch (G__19863) {
case 2:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((function (){var and__4938__auto__ = a;
if(and__4938__auto__){
return a.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2;
} else {
return and__4938__auto__;
}
})()){
return a.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2(a,b);
} else {
var x__5586__auto__ = (((a == null))?null:a);
return (function (){var or__4950__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (thi.ng.math.core.delta_EQ_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PDeltaEquals.delta=",a);
}
}
})().call(null,a,b);
}
});

thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,eps){
if((function (){var and__4938__auto__ = a;
if(and__4938__auto__){
return a.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3;
} else {
return and__4938__auto__;
}
})()){
return a.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3(a,b,eps);
} else {
var x__5586__auto__ = (((a == null))?null:a);
return (function (){var or__4950__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__5586__auto__)]);
if(or__4950__auto__){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = (thi.ng.math.core.delta_EQ_["_"]);
if(or__4950__auto____$1){
return or__4950__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PDeltaEquals.delta=",a);
}
}
})().call(null,a,b,eps);
}
});

thi.ng.math.core.delta_EQ_.cljs$lang$maxFixedArity = 3;

(thi.ng.math.core.PDeltaEquals["number"] = true);

(thi.ng.math.core.delta_EQ_["number"] = (function() {
var G__19865 = null;
var G__19865__2 = (function (a,b){
return (typeof b === 'number') && ((thi.ng.math.core.abs.call(null,(a - b)) <= thi.ng.math.core._STAR_eps_STAR_));
});
var G__19865__3 = (function (a,b,eps){
return (typeof b === 'number') && ((thi.ng.math.core.abs.call(null,(a - b)) <= eps));
});
G__19865 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__19865__2.call(this,a,b);
case 3:
return G__19865__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19865.cljs$core$IFn$_invoke$arity$2 = G__19865__2;
G__19865.cljs$core$IFn$_invoke$arity$3 = G__19865__3;
return G__19865;
})()
);

cljs.core.PersistentVector.prototype.thi$ng$math$core$PDeltaEquals$ = true;

cljs.core.PersistentVector.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__4938__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4938__auto__){
var and__4938__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1)))){
var G__19866 = cljs.core.next.call(null,a__$2);
var G__19867 = cljs.core.next.call(null,b__$1);
a__$2 = G__19866;
b__$1 = G__19867;
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
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
});

cljs.core.PersistentVector.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__4938__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4938__auto__){
var and__4938__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__19868 = cljs.core.next.call(null,a__$2);
var G__19869 = cljs.core.next.call(null,b__$1);
a__$2 = G__19868;
b__$1 = G__19869;
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
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
});

cljs.core.List.prototype.thi$ng$math$core$PDeltaEquals$ = true;

cljs.core.List.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__4938__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4938__auto__){
var and__4938__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1)))){
var G__19870 = cljs.core.next.call(null,a__$2);
var G__19871 = cljs.core.next.call(null,b__$1);
a__$2 = G__19870;
b__$1 = G__19871;
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
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
});

cljs.core.List.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__4938__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4938__auto__){
var and__4938__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__19872 = cljs.core.next.call(null,a__$2);
var G__19873 = cljs.core.next.call(null,b__$1);
a__$2 = G__19872;
b__$1 = G__19873;
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
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
});

cljs.core.LazySeq.prototype.thi$ng$math$core$PDeltaEquals$ = true;

cljs.core.LazySeq.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__4938__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4938__auto__){
var and__4938__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1)))){
var G__19874 = cljs.core.next.call(null,a__$2);
var G__19875 = cljs.core.next.call(null,b__$1);
a__$2 = G__19874;
b__$1 = G__19875;
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
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
});

cljs.core.LazySeq.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__4938__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4938__auto__){
var and__4938__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__19876 = cljs.core.next.call(null,a__$2);
var G__19877 = cljs.core.next.call(null,b__$1);
a__$2 = G__19876;
b__$1 = G__19877;
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
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$math$core$PDeltaEquals$ = true;

cljs.core.IndexedSeq.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__4938__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4938__auto__){
var and__4938__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1)))){
var G__19878 = cljs.core.next.call(null,a__$2);
var G__19879 = cljs.core.next.call(null,b__$1);
a__$2 = G__19878;
b__$1 = G__19879;
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
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__4938__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(and__4938__auto__){
var and__4938__auto____$1 = (cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b));
if(and__4938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__19880 = cljs.core.next.call(null,a__$2);
var G__19881 = cljs.core.next.call(null,b__$1);
a__$2 = G__19880;
b__$1 = G__19881;
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
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
});

(thi.ng.math.core.PDeltaEquals["null"] = true);

(thi.ng.math.core.delta_EQ_["null"] = (function() {
var G__19882 = null;
var G__19882__2 = (function (_,b){
return (b == null);
});
var G__19882__3 = (function (_,b,___$1){
return (b == null);
});
G__19882 = function(_,b,___$1){
switch(arguments.length){
case 2:
return G__19882__2.call(this,_,b);
case 3:
return G__19882__3.call(this,_,b,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19882.cljs$core$IFn$_invoke$arity$2 = G__19882__2;
G__19882.cljs$core$IFn$_invoke$arity$3 = G__19882__3;
return G__19882;
})()
);
/**
 * Returns x if even or `x+1` if `x` is odd.
 */
thi.ng.math.core.ensure_even = (function thi$ng$math$core$ensure_even(x){
if(cljs.core.even_QMARK_.call(null,x)){
return x;
} else {
return (x + (1));
}
});
/**
 * Returns x if odd or `x+1` if `x` is even.
 */
thi.ng.math.core.ensure_odd = (function thi$ng$math$core$ensure_odd(x){
if(cljs.core.even_QMARK_.call(null,x)){
return (x + (1));
} else {
return x;
}
});
thi.ng.math.core.signum = (function thi$ng$math$core$signum(){
var G__19884 = arguments.length;
switch (G__19884) {
case 1:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1 = (function (x){
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

thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2 = (function (x,delta){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,x,delta))){
return (0);
} else {
if((x < (0))){
return (-1);
} else {
return (1);
}
}
});

thi.ng.math.core.signum.cljs$lang$maxFixedArity = 2;
thi.ng.math.core.clamp = (function thi$ng$math$core$clamp(x,min,max){
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
thi.ng.math.core.clamp_normalized = (function thi$ng$math$core$clamp_normalized(x){
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
thi.ng.math.core.map_interval = (function thi$ng$math$core$map_interval(){
var G__19887 = arguments.length;
switch (G__19887) {
case 3:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3 = (function (x,p__19888,p__19889){
var vec__19890 = p__19888;
var in1 = cljs.core.nth.call(null,vec__19890,(0),null);
var in2 = cljs.core.nth.call(null,vec__19890,(1),null);
var vec__19891 = p__19889;
var out1 = cljs.core.nth.call(null,vec__19891,(0),null);
var out2 = cljs.core.nth.call(null,vec__19891,(1),null);
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
});

thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
});

thi.ng.math.core.map_interval.cljs$lang$maxFixedArity = 5;
thi.ng.math.core.map_interval_clamped = (function thi$ng$math$core$map_interval_clamped(){
var G__19894 = arguments.length;
switch (G__19894) {
case 3:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 7:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3 = (function (x,p__19895,p__19896){
var vec__19897 = p__19895;
var in1 = cljs.core.nth.call(null,vec__19897,(0),null);
var in2 = cljs.core.nth.call(null,vec__19897,(1),null);
var vec__19898 = p__19896;
var out1 = cljs.core.nth.call(null,vec__19898,(0),null);
var out2 = cljs.core.nth.call(null,vec__19898,(1),null);
return thi.ng.math.core.map_interval_clamped.call(null,x,in1,in2,out1,out2);
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if((x <= in1)){
return out1;
} else {
if((x >= in2)){
return out2;
} else {
return thi.ng.math.core.map_interval.call(null,x,in1,in2,out1,out2);
}
}
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4 = (function (x,p__19899,p__19900,p__19901){
var vec__19902 = p__19899;
var in1 = cljs.core.nth.call(null,vec__19902,(0),null);
var in2 = cljs.core.nth.call(null,vec__19902,(1),null);
var vec__19903 = p__19900;
var out1 = cljs.core.nth.call(null,vec__19903,(0),null);
var out2 = cljs.core.nth.call(null,vec__19903,(1),null);
var vec__19904 = p__19901;
var c1 = cljs.core.nth.call(null,vec__19904,(0),null);
var c2 = cljs.core.nth.call(null,vec__19904,(1),null);
return thi.ng.math.core.clamp.call(null,thi.ng.math.core.map_interval.call(null,x,in1,in2,out1,out2),c1,c2);
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7 = (function (x,in1,in2,out1,out2,c1,c2){
return thi.ng.math.core.clamp.call(null,thi.ng.math.core.map_interval.call(null,x,in1,in2,out1,out2),c1,c2);
});

thi.ng.math.core.map_interval_clamped.cljs$lang$maxFixedArity = 7;
/**
 * Returns true if x >= min and x <= max.
 */
thi.ng.math.core.in_range_QMARK_ = (function thi$ng$math$core$in_range_QMARK_(){
var G__19907 = arguments.length;
switch (G__19907) {
case 2:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__19908,x){
var vec__19909 = p__19908;
var min = cljs.core.nth.call(null,vec__19909,(0),null);
var max = cljs.core.nth.call(null,vec__19909,(1),null);
return ((x >= min)) && ((x <= max));
});

thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (min,max,x){
return ((x >= min)) && ((x <= max));
});

thi.ng.math.core.in_range_QMARK_.cljs$lang$maxFixedArity = 3;
thi.ng.math.core.wrap_range = (function thi$ng$math$core$wrap_range(x,y){
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
thi.ng.math.core.norm_range = (function thi$ng$math$core$norm_range(x){
return cljs.core.map.call(null,(function (p1__19911_SHARP_){
return (p1__19911_SHARP_ / x);
}),cljs.core.range.call(null,(x + (1))));
});
thi.ng.math.core.mix = (function thi$ng$math$core$mix(a,b,t){
return (((b - a) * t) + a);
});
thi.ng.math.core.step = (function thi$ng$math$core$step(edge,x){
if((x < edge)){
return 0.0;
} else {
return 1.0;
}
});
thi.ng.math.core.smoothstep = (function thi$ng$math$core$smoothstep(e0,e1,x){
var t = thi.ng.math.core.clamp.call(null,((x - e0) / (e1 - e0)),0.0,1.0);
return (t * (t * ((t * -2.0) + 3.0)));
});
thi.ng.math.core.floor = (function thi$ng$math$core$floor(x){
return Math.floor(x);
});
thi.ng.math.core.ceil = (function thi$ng$math$core$ceil(x){
return Math.ceil(x);
});
thi.ng.math.core.roundto = (function thi$ng$math$core$roundto(x,prec){
return (thi.ng.math.core.floor.call(null,((x / prec) + 0.5)) * prec);
});
thi.ng.math.core.ceil_pow2 = (function thi$ng$math$core$ceil_pow2(x){
var pow2 = (1);
while(true){
if((pow2 >= x)){
return pow2;
} else {
var G__19912 = (pow2 * (2));
pow2 = G__19912;
continue;
}
break;
}
});
thi.ng.math.core.floor_pow2 = (function thi$ng$math$core$floor_pow2(x){
return Math.pow((2),((Math.log(x) / thi.ng.math.core.LOG2) | (0)));
});
thi.ng.math.core.bit_count = (function thi$ng$math$core$bit_count(x){
return thi.ng.math.core.ceil.call(null,(Math.log(x) / thi.ng.math.core.LOG2));
});
thi.ng.math.core.trunc = (function thi$ng$math$core$trunc(x){
if((x < (0))){
return thi.ng.math.core.ceil.call(null,x);
} else {
return thi.ng.math.core.floor.call(null,x);
}
});
thi.ng.math.core.fract = (function thi$ng$math$core$fract(x){
return (x - Math.floor(x));
});
thi.ng.math.core.fdim = (function thi$ng$math$core$fdim(x,y){
if((x > y)){
return (x - y);
} else {
return (0);
}
});
thi.ng.math.core.radians = (function thi$ng$math$core$radians(x){
return (x * thi.ng.math.core.RAD);
});
thi.ng.math.core.degrees = (function thi$ng$math$core$degrees(x){
return (x * thi.ng.math.core.DEG);
});
thi.ng.math.core.maxmag = (function thi$ng$math$core$maxmag(x,y){
var ax = thi.ng.math.core.abs.call(null,x);
var ay = thi.ng.math.core.abs.call(null,y);
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
thi.ng.math.core.minmag = (function thi$ng$math$core$minmag(x,y){
var ax = thi.ng.math.core.abs.call(null,x);
var ay = thi.ng.math.core.abs.call(null,y);
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
thi.ng.math.core.ldexp = (function thi$ng$math$core$ldexp(x,k){
return (x * Math.pow((2),(k | (0))));
});
thi.ng.math.core.remquo = (function thi$ng$math$core$remquo(x,y){
var k = (x / y);
var f = thi.ng.math.core.fract.call(null,k);
var k__$1 = ((cljs.core._EQ_.call(null,f,0.5))?((cljs.core.even_QMARK_.call(null,(k | (0))))?(k | (0)):thi.ng.math.core.ceil.call(null,k)):(((f < 0.5))?thi.ng.math.core.floor.call(null,k):thi.ng.math.core.ceil.call(null,k)
));
return (x - (k__$1 * y));
});
thi.ng.math.core.hypot = (function thi$ng$math$core$hypot(x,y){
return Math.sqrt(((x * x) + (y * y)));
});
thi.ng.math.core.rootn = (function thi$ng$math$core$rootn(x,y){
return Math.pow(x,(1.0 / y));
});
thi.ng.math.core.rsqrt = (function thi$ng$math$core$rsqrt(x){
var r = Math.sqrt(x);
if((r > (0))){
return (1.0 / r);
} else {
return (0);
}
});
thi.ng.math.core.impulse = (function thi$ng$math$core$impulse(k,t){
var h = (k * t);
return (h * Math.exp((1.0 - h)));
});
thi.ng.math.core.random = (function thi$ng$math$core$random(){
var G__19914 = arguments.length;
switch (G__19914) {
case 0:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core._STAR_rnd_STAR_.call(null);
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1 = (function (max){
return (thi.ng.math.core._STAR_rnd_STAR_.call(null) * max);
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (((max - min) * thi.ng.math.core._STAR_rnd_STAR_.call(null)) + min);
});

thi.ng.math.core.random.cljs$lang$maxFixedArity = 2;
thi.ng.math.core.randnorm = (function thi$ng$math$core$randnorm(){
return ((thi.ng.math.core._STAR_rnd_STAR_.call(null) * 2.0) - (1));
});
thi.ng.math.core.percentile_index = (function thi$ng$math$core$percentile_index(n,num){
return ((((n < (100)))?(Math.round((((n / 100.0) * num) + 0.5)) | (0)):num) - (1));
});
thi.ng.math.core.percentile = (function thi$ng$math$core$percentile(n,sorted){
return cljs.core.nth.call(null,sorted,thi.ng.math.core.percentile_index.call(null,n,cljs.core.count.call(null,sorted)));
});
thi.ng.math.core.quartile_index = (function thi$ng$math$core$quartile_index(n,num){
return thi.ng.math.core.percentile_index.call(null,(n * (25)),num);
});
thi.ng.math.core.quartile_range = (function thi$ng$math$core$quartile_range(n,num){
var a = thi.ng.math.core.quartile_index.call(null,(n - (1)),num);
var b = thi.ng.math.core.quartile_index.call(null,n,num);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((cljs.core._EQ_.call(null,n,(4)))?(b + (1)):b)], null);
});
/**
 * Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile.
 */
thi.ng.math.core.quartile = (function thi$ng$math$core$quartile(n,sorted){
var vec__19917 = thi.ng.math.core.quartile_range.call(null,n,cljs.core.count.call(null,sorted));
var a = cljs.core.nth.call(null,vec__19917,(0),null);
var b = cljs.core.nth.call(null,vec__19917,(1),null);
return cljs.core.take.call(null,(b - a),cljs.core.drop.call(null,a,sorted));
});
thi.ng.math.core.normdist_weights = (function thi$ng$math$core$normdist_weights(){
var G__19920 = arguments.length;
switch (G__19920) {
case 1:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normdist_weights.call(null,n,1.0);
});

thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2 = (function (n,scale){
var ws = cljs.core.repeatedly.call(null,n,thi.ng.math.core.random);
var s = (scale / cljs.core.reduce.call(null,cljs.core._PLUS_,ws));
return cljs.core.map.call(null,((function (ws,s){
return (function (p1__19918_SHARP_){
return (s * p1__19918_SHARP_);
});})(ws,s))
,ws);
});

thi.ng.math.core.normdist_weights.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map