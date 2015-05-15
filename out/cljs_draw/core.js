// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_draw.core');
goog.require('cljs.core');
goog.require('cljs_draw.util');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('clojure.browser.repl');
if(typeof cljs_draw.core.conn !== 'undefined'){
} else {
cljs_draw.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
cljs_draw.core.canvas = goog.dom.createElement("canvas");
cljs_draw.core.ctx = cljs_draw.core.canvas.getContext("2d");
document.body.appendChild(cljs_draw.core.canvas);
cljs_draw.core.canvas.width = window.innerWidth;
cljs_draw.core.canvas.height = window.innerHeight;
cljs_draw.core.canvas.style.backgroundColor = "black";
cljs_draw.core.points = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_draw.core.render = (function cljs_draw$core$render(){
cljs_draw.core.ctx.fillStyle = "pink";

var seq__1312_1316 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs_draw.core.points));
var chunk__1313_1317 = null;
var count__1314_1318 = (0);
var i__1315_1319 = (0);
while(true){
if((i__1315_1319 < count__1314_1318)){
var p_1320 = cljs.core._nth.call(null,chunk__1313_1317,i__1315_1319);
var width_1321 = (new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p_1320) * (20));
cljs_draw.core.ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_1320),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_1320),width_1321,width_1321);

var G__1322 = seq__1312_1316;
var G__1323 = chunk__1313_1317;
var G__1324 = count__1314_1318;
var G__1325 = (i__1315_1319 + (1));
seq__1312_1316 = G__1322;
chunk__1313_1317 = G__1323;
count__1314_1318 = G__1324;
i__1315_1319 = G__1325;
continue;
} else {
var temp__4126__auto___1326 = cljs.core.seq.call(null,seq__1312_1316);
if(temp__4126__auto___1326){
var seq__1312_1327__$1 = temp__4126__auto___1326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312_1327__$1)){
var c__3511__auto___1328 = cljs.core.chunk_first.call(null,seq__1312_1327__$1);
var G__1329 = cljs.core.chunk_rest.call(null,seq__1312_1327__$1);
var G__1330 = c__3511__auto___1328;
var G__1331 = cljs.core.count.call(null,c__3511__auto___1328);
var G__1332 = (0);
seq__1312_1316 = G__1329;
chunk__1313_1317 = G__1330;
count__1314_1318 = G__1331;
i__1315_1319 = G__1332;
continue;
} else {
var p_1333 = cljs.core.first.call(null,seq__1312_1327__$1);
var width_1334 = (new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p_1333) * (20));
cljs_draw.core.ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_1333),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_1333),width_1334,width_1334);

var G__1335 = cljs.core.next.call(null,seq__1312_1327__$1);
var G__1336 = null;
var G__1337 = (0);
var G__1338 = (0);
seq__1312_1316 = G__1335;
chunk__1313_1317 = G__1336;
count__1314_1318 = G__1337;
i__1315_1319 = G__1338;
continue;
}
} else {
}
}
break;
}

return requestAnimationFrame(cljs_draw$core$render);
});
var clicked_1384 = cljs_draw.util.listen.call(null,window,"pointermove");
var c__1263__auto___1385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1263__auto___1385,clicked_1384){
return (function (){
var f__1264__auto__ = (function (){var switch__1242__auto__ = ((function (c__1263__auto___1385,clicked_1384){
return (function (state_1363){
var state_val_1364 = (state_1363[(1)]);
if((state_val_1364 === (7))){
var inst_1342 = (state_1363[(7)]);
var inst_1342__$1 = (state_1363[(2)]);
var inst_1343 = inst_1342__$1.mozPressure;
var inst_1344 = cljs.core.not_EQ_.call(null,inst_1343,.5);
var state_1363__$1 = (function (){var statearr_1365 = state_1363;
(statearr_1365[(7)] = inst_1342__$1);

return statearr_1365;
})();
if(inst_1344){
var statearr_1366_1386 = state_1363__$1;
(statearr_1366_1386[(1)] = (8));

} else {
var statearr_1367_1387 = state_1363__$1;
(statearr_1367_1387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1364 === (1))){
var state_1363__$1 = state_1363;
var statearr_1368_1388 = state_1363__$1;
(statearr_1368_1388[(2)] = null);

(statearr_1368_1388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1364 === (4))){
var state_1363__$1 = state_1363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1363__$1,(7),clicked_1384);
} else {
if((state_val_1364 === (6))){
var inst_1359 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
var statearr_1369_1389 = state_1363__$1;
(statearr_1369_1389[(2)] = inst_1359);

(statearr_1369_1389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1364 === (3))){
var inst_1361 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1363__$1,inst_1361);
} else {
if((state_val_1364 === (2))){
var state_1363__$1 = state_1363;
var statearr_1370_1390 = state_1363__$1;
(statearr_1370_1390[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1364 === (9))){
var state_1363__$1 = state_1363;
var statearr_1372_1391 = state_1363__$1;
(statearr_1372_1391[(2)] = null);

(statearr_1372_1391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1364 === (5))){
var state_1363__$1 = state_1363;
var statearr_1373_1392 = state_1363__$1;
(statearr_1373_1392[(2)] = null);

(statearr_1373_1392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1364 === (10))){
var inst_1355 = (state_1363[(2)]);
var state_1363__$1 = (function (){var statearr_1374 = state_1363;
(statearr_1374[(8)] = inst_1355);

return statearr_1374;
})();
var statearr_1375_1393 = state_1363__$1;
(statearr_1375_1393[(2)] = null);

(statearr_1375_1393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1364 === (8))){
var inst_1342 = (state_1363[(7)]);
var inst_1346 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"pressure","pressure",505343747)];
var inst_1347 = inst_1342.clientX;
var inst_1348 = inst_1342.clientY;
var inst_1349 = inst_1342.mozPressure;
var inst_1350 = [inst_1347,inst_1348,inst_1349];
var inst_1351 = cljs.core.PersistentHashMap.fromArrays(inst_1346,inst_1350);
var inst_1352 = cljs.core.swap_BANG_.call(null,cljs_draw.core.points,cljs.core.conj,inst_1351);
var state_1363__$1 = state_1363;
var statearr_1376_1394 = state_1363__$1;
(statearr_1376_1394[(2)] = inst_1352);

(statearr_1376_1394[(1)] = (10));


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
});})(c__1263__auto___1385,clicked_1384))
;
return ((function (switch__1242__auto__,c__1263__auto___1385,clicked_1384){
return (function() {
var cljs_draw$core$state_machine__1243__auto__ = null;
var cljs_draw$core$state_machine__1243__auto____0 = (function (){
var statearr_1380 = [null,null,null,null,null,null,null,null,null];
(statearr_1380[(0)] = cljs_draw$core$state_machine__1243__auto__);

(statearr_1380[(1)] = (1));

return statearr_1380;
});
var cljs_draw$core$state_machine__1243__auto____1 = (function (state_1363){
while(true){
var ret_value__1244__auto__ = (function (){try{while(true){
var result__1245__auto__ = switch__1242__auto__.call(null,state_1363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1245__auto__;
}
break;
}
}catch (e1381){if((e1381 instanceof Object)){
var ex__1246__auto__ = e1381;
var statearr_1382_1395 = state_1363;
(statearr_1382_1395[(5)] = ex__1246__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1396 = state_1363;
state_1363 = G__1396;
continue;
} else {
return ret_value__1244__auto__;
}
break;
}
});
cljs_draw$core$state_machine__1243__auto__ = function(state_1363){
switch(arguments.length){
case 0:
return cljs_draw$core$state_machine__1243__auto____0.call(this);
case 1:
return cljs_draw$core$state_machine__1243__auto____1.call(this,state_1363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$state_machine__1243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$state_machine__1243__auto____0;
cljs_draw$core$state_machine__1243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$state_machine__1243__auto____1;
return cljs_draw$core$state_machine__1243__auto__;
})()
;})(switch__1242__auto__,c__1263__auto___1385,clicked_1384))
})();
var state__1265__auto__ = (function (){var statearr_1383 = f__1264__auto__.call(null);
(statearr_1383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1263__auto___1385);

return statearr_1383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1265__auto__);
});})(c__1263__auto___1385,clicked_1384))
);

cljs_draw.core.render.call(null);

//# sourceMappingURL=core.js.map