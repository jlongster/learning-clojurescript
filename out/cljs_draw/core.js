// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_draw.core');
goog.require('cljs.core');
goog.require('cljs_draw.util');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('clojure.browser.repl');
cljs_draw.core.canvas = goog.dom.createElement("canvas");
cljs_draw.core.ctx = cljs_draw.core.canvas.getContext("2d");
document.body.appendChild(cljs_draw.core.canvas);
cljs_draw.core.canvas.width = window.innerWidth;
cljs_draw.core.canvas.height = window.innerHeight;
cljs_draw.core.canvas.style.backgroundColor = "black";
cljs_draw.core.points = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_draw.core.render = (function cljs_draw$core$render(){
cljs_draw.core.ctx.fillStyle = "pink";

var seq__1309_1313 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs_draw.core.points));
var chunk__1310_1314 = null;
var count__1311_1315 = (0);
var i__1312_1316 = (0);
while(true){
if((i__1312_1316 < count__1311_1315)){
var p_1317 = cljs.core._nth.call(null,chunk__1310_1314,i__1312_1316);
var width_1318 = (new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p_1317) * (20));
cljs_draw.core.ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_1317),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_1317),width_1318,width_1318);

var G__1319 = seq__1309_1313;
var G__1320 = chunk__1310_1314;
var G__1321 = count__1311_1315;
var G__1322 = (i__1312_1316 + (1));
seq__1309_1313 = G__1319;
chunk__1310_1314 = G__1320;
count__1311_1315 = G__1321;
i__1312_1316 = G__1322;
continue;
} else {
var temp__4126__auto___1323 = cljs.core.seq.call(null,seq__1309_1313);
if(temp__4126__auto___1323){
var seq__1309_1324__$1 = temp__4126__auto___1323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1309_1324__$1)){
var c__3511__auto___1325 = cljs.core.chunk_first.call(null,seq__1309_1324__$1);
var G__1326 = cljs.core.chunk_rest.call(null,seq__1309_1324__$1);
var G__1327 = c__3511__auto___1325;
var G__1328 = cljs.core.count.call(null,c__3511__auto___1325);
var G__1329 = (0);
seq__1309_1313 = G__1326;
chunk__1310_1314 = G__1327;
count__1311_1315 = G__1328;
i__1312_1316 = G__1329;
continue;
} else {
var p_1330 = cljs.core.first.call(null,seq__1309_1324__$1);
var width_1331 = (new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p_1330) * (20));
cljs_draw.core.ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_1330),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_1330),width_1331,width_1331);

var G__1332 = cljs.core.next.call(null,seq__1309_1324__$1);
var G__1333 = null;
var G__1334 = (0);
var G__1335 = (0);
seq__1309_1313 = G__1332;
chunk__1310_1314 = G__1333;
count__1311_1315 = G__1334;
i__1312_1316 = G__1335;
continue;
}
} else {
}
}
break;
}

return requestAnimationFrame(cljs_draw$core$render);
});
var clicked_1381 = cljs_draw.util.listen.call(null,window,"pointermove");
var c__1260__auto___1382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1260__auto___1382,clicked_1381){
return (function (){
var f__1261__auto__ = (function (){var switch__1239__auto__ = ((function (c__1260__auto___1382,clicked_1381){
return (function (state_1360){
var state_val_1361 = (state_1360[(1)]);
if((state_val_1361 === (7))){
var inst_1339 = (state_1360[(7)]);
var inst_1339__$1 = (state_1360[(2)]);
var inst_1340 = inst_1339__$1.mozPressure;
var inst_1341 = cljs.core.not_EQ_.call(null,inst_1340,.5);
var state_1360__$1 = (function (){var statearr_1362 = state_1360;
(statearr_1362[(7)] = inst_1339__$1);

return statearr_1362;
})();
if(inst_1341){
var statearr_1363_1383 = state_1360__$1;
(statearr_1363_1383[(1)] = (8));

} else {
var statearr_1364_1384 = state_1360__$1;
(statearr_1364_1384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1361 === (1))){
var state_1360__$1 = state_1360;
var statearr_1365_1385 = state_1360__$1;
(statearr_1365_1385[(2)] = null);

(statearr_1365_1385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1361 === (4))){
var state_1360__$1 = state_1360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1360__$1,(7),clicked_1381);
} else {
if((state_val_1361 === (6))){
var inst_1356 = (state_1360[(2)]);
var state_1360__$1 = state_1360;
var statearr_1366_1386 = state_1360__$1;
(statearr_1366_1386[(2)] = inst_1356);

(statearr_1366_1386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1361 === (3))){
var inst_1358 = (state_1360[(2)]);
var state_1360__$1 = state_1360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1360__$1,inst_1358);
} else {
if((state_val_1361 === (2))){
var state_1360__$1 = state_1360;
var statearr_1367_1387 = state_1360__$1;
(statearr_1367_1387[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1361 === (9))){
var state_1360__$1 = state_1360;
var statearr_1369_1388 = state_1360__$1;
(statearr_1369_1388[(2)] = null);

(statearr_1369_1388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1361 === (5))){
var state_1360__$1 = state_1360;
var statearr_1370_1389 = state_1360__$1;
(statearr_1370_1389[(2)] = null);

(statearr_1370_1389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1361 === (10))){
var inst_1352 = (state_1360[(2)]);
var state_1360__$1 = (function (){var statearr_1371 = state_1360;
(statearr_1371[(8)] = inst_1352);

return statearr_1371;
})();
var statearr_1372_1390 = state_1360__$1;
(statearr_1372_1390[(2)] = null);

(statearr_1372_1390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1361 === (8))){
var inst_1339 = (state_1360[(7)]);
var inst_1343 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"pressure","pressure",505343747)];
var inst_1344 = inst_1339.clientX;
var inst_1345 = inst_1339.clientY;
var inst_1346 = inst_1339.mozPressure;
var inst_1347 = [inst_1344,inst_1345,inst_1346];
var inst_1348 = cljs.core.PersistentHashMap.fromArrays(inst_1343,inst_1347);
var inst_1349 = cljs.core.swap_BANG_.call(null,cljs_draw.core.points,cljs.core.conj,inst_1348);
var state_1360__$1 = state_1360;
var statearr_1373_1391 = state_1360__$1;
(statearr_1373_1391[(2)] = inst_1349);

(statearr_1373_1391[(1)] = (10));


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
});})(c__1260__auto___1382,clicked_1381))
;
return ((function (switch__1239__auto__,c__1260__auto___1382,clicked_1381){
return (function() {
var cljs_draw$core$state_machine__1240__auto__ = null;
var cljs_draw$core$state_machine__1240__auto____0 = (function (){
var statearr_1377 = [null,null,null,null,null,null,null,null,null];
(statearr_1377[(0)] = cljs_draw$core$state_machine__1240__auto__);

(statearr_1377[(1)] = (1));

return statearr_1377;
});
var cljs_draw$core$state_machine__1240__auto____1 = (function (state_1360){
while(true){
var ret_value__1241__auto__ = (function (){try{while(true){
var result__1242__auto__ = switch__1239__auto__.call(null,state_1360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1242__auto__;
}
break;
}
}catch (e1378){if((e1378 instanceof Object)){
var ex__1243__auto__ = e1378;
var statearr_1379_1392 = state_1360;
(statearr_1379_1392[(5)] = ex__1243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1393 = state_1360;
state_1360 = G__1393;
continue;
} else {
return ret_value__1241__auto__;
}
break;
}
});
cljs_draw$core$state_machine__1240__auto__ = function(state_1360){
switch(arguments.length){
case 0:
return cljs_draw$core$state_machine__1240__auto____0.call(this);
case 1:
return cljs_draw$core$state_machine__1240__auto____1.call(this,state_1360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$state_machine__1240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$state_machine__1240__auto____0;
cljs_draw$core$state_machine__1240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$state_machine__1240__auto____1;
return cljs_draw$core$state_machine__1240__auto__;
})()
;})(switch__1239__auto__,c__1260__auto___1382,clicked_1381))
})();
var state__1262__auto__ = (function (){var statearr_1380 = f__1261__auto__.call(null);
(statearr_1380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1260__auto___1382);

return statearr_1380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1262__auto__);
});})(c__1260__auto___1382,clicked_1381))
);

cljs_draw.core.render.call(null);

//# sourceMappingURL=core.js.map