// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_draw.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs_draw.util');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
if(typeof cljs_draw.core.conn !== 'undefined'){
} else {
cljs_draw.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
if(typeof cljs_draw.core.app_state !== 'undefined'){
} else {
cljs_draw.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#bbffbb"], null),new cljs.core.Keyword(null,"current-color","current-color",1731984119),"#bbffbb",new cljs.core.Keyword(null,"listening-for-color","listening-for-color",-341629494),false], null));
}
cljs_draw.core.lines = cljs.core.PersistentVector.EMPTY;
cljs_draw.core.cursor = cljs.core.PersistentVector.EMPTY;
cljs_draw.core.baked_cvs = null;
cljs_draw.core.baked_ctx = null;
cljs_draw.core.baked_dimen = null;
cljs_draw.core.recent_ctx = null;
cljs_draw.core.recent_dimen = null;
cljs_draw.core.save_image = (function cljs_draw$core$save_image(){
var data = cljs_draw.core.baked_ctx.getImageData((0),(0),cljs.core.first.call(null,cljs_draw.core.baked_dimen),cljs.core.second.call(null,cljs_draw.core.baked_dimen));
return localforage.setItem("image",cljs_draw.core.baked_cvs.toDataURL());
});
cljs_draw.core.load_image = (function cljs_draw$core$load_image(){
var c__1902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto__){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto__){
return (function (state_62334){
var state_val_62335 = (state_62334[(1)]);
if((state_val_62335 === (5))){
var inst_62332 = (state_62334[(2)]);
var state_62334__$1 = state_62334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62334__$1,inst_62332);
} else {
if((state_val_62335 === (4))){
var state_62334__$1 = state_62334;
var statearr_62336_62349 = state_62334__$1;
(statearr_62336_62349[(2)] = null);

(statearr_62336_62349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (3))){
var inst_62324 = (state_62334[(7)]);
var inst_62326 = (new Image());
var inst_62327 = (function (){var img = inst_62326;
var value = inst_62324;
return ((function (img,value,inst_62324,inst_62326,state_val_62335,c__1902__auto__){
return (function (e){
return cljs_draw.core.baked_ctx.drawImage(img,(0),(0));
});
;})(img,value,inst_62324,inst_62326,state_val_62335,c__1902__auto__))
})();
var inst_62328 = inst_62326.addEventListener("load",inst_62327);
var inst_62329 = inst_62326.src = inst_62324;
var state_62334__$1 = (function (){var statearr_62337 = state_62334;
(statearr_62337[(8)] = inst_62328);

return statearr_62337;
})();
var statearr_62338_62350 = state_62334__$1;
(statearr_62338_62350[(2)] = inst_62329);

(statearr_62338_62350[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (2))){
var inst_62324 = (state_62334[(7)]);
var inst_62324__$1 = (state_62334[(2)]);
var state_62334__$1 = (function (){var statearr_62339 = state_62334;
(statearr_62339[(7)] = inst_62324__$1);

return statearr_62339;
})();
if(cljs.core.truth_(inst_62324__$1)){
var statearr_62340_62351 = state_62334__$1;
(statearr_62340_62351[(1)] = (3));

} else {
var statearr_62341_62352 = state_62334__$1;
(statearr_62341_62352[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (1))){
var inst_62322 = cljs_draw.util.get_from_storage.call(null,"image");
var state_62334__$1 = state_62334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62334__$1,(2),inst_62322);
} else {
return null;
}
}
}
}
}
});})(c__1902__auto__))
;
return ((function (switch__1881__auto__,c__1902__auto__){
return (function() {
var cljs_draw$core$load_image_$_state_machine__1882__auto__ = null;
var cljs_draw$core$load_image_$_state_machine__1882__auto____0 = (function (){
var statearr_62345 = [null,null,null,null,null,null,null,null,null];
(statearr_62345[(0)] = cljs_draw$core$load_image_$_state_machine__1882__auto__);

(statearr_62345[(1)] = (1));

return statearr_62345;
});
var cljs_draw$core$load_image_$_state_machine__1882__auto____1 = (function (state_62334){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_62334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e62346){if((e62346 instanceof Object)){
var ex__1885__auto__ = e62346;
var statearr_62347_62353 = state_62334;
(statearr_62347_62353[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62354 = state_62334;
state_62334 = G__62354;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$load_image_$_state_machine__1882__auto__ = function(state_62334){
switch(arguments.length){
case 0:
return cljs_draw$core$load_image_$_state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$load_image_$_state_machine__1882__auto____1.call(this,state_62334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$load_image_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$load_image_$_state_machine__1882__auto____0;
cljs_draw$core$load_image_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$load_image_$_state_machine__1882__auto____1;
return cljs_draw$core$load_image_$_state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto__))
})();
var state__1904__auto__ = (function (){var statearr_62348 = f__1903__auto__.call(null);
(statearr_62348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto__);

return statearr_62348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto__))
);

return c__1902__auto__;
});
cljs_draw.core.save_state = (function cljs_draw$core$save_state(){
cljs_draw.core.save_image.call(null);

localforage.setItem("lines",cljs.core.clj__GT_js.call(null,cljs_draw.core.lines));

return localforage.setItem("app-state",cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,cljs_draw.core.app_state)));
});
cljs_draw.core.load_state = (function cljs_draw$core$load_state(){
cljs_draw.core.load_image.call(null);

var c__1902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto__){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto__){
return (function (state_62387){
var state_val_62388 = (state_62387[(1)]);
if((state_val_62388 === (3))){
var inst_62383 = (state_62387[(2)]);
var inst_62384 = (function (){var state = inst_62383;
return ((function (state,inst_62383,state_val_62388,c__1902__auto__){
return (function (x){
return cljs.core.js__GT_clj.call(null,state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
;})(state,inst_62383,state_val_62388,c__1902__auto__))
})();
var inst_62385 = cljs.core.swap_BANG_.call(null,cljs_draw.core.app_state,inst_62384);
var state_62387__$1 = state_62387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62387__$1,inst_62385);
} else {
if((state_val_62388 === (2))){
var inst_62378 = (state_62387[(2)]);
var inst_62379 = cljs.core.js__GT_clj.call(null,inst_62378,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_62380 = cljs_draw.core.lines = inst_62379;
var inst_62381 = cljs_draw.util.get_from_storage.call(null,"app-state");
var state_62387__$1 = (function (){var statearr_62389 = state_62387;
(statearr_62389[(7)] = inst_62380);

return statearr_62389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62387__$1,(3),inst_62381);
} else {
if((state_val_62388 === (1))){
var inst_62376 = cljs_draw.util.get_from_storage.call(null,"lines");
var state_62387__$1 = state_62387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62387__$1,(2),inst_62376);
} else {
return null;
}
}
}
});})(c__1902__auto__))
;
return ((function (switch__1881__auto__,c__1902__auto__){
return (function() {
var cljs_draw$core$load_state_$_state_machine__1882__auto__ = null;
var cljs_draw$core$load_state_$_state_machine__1882__auto____0 = (function (){
var statearr_62393 = [null,null,null,null,null,null,null,null];
(statearr_62393[(0)] = cljs_draw$core$load_state_$_state_machine__1882__auto__);

(statearr_62393[(1)] = (1));

return statearr_62393;
});
var cljs_draw$core$load_state_$_state_machine__1882__auto____1 = (function (state_62387){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_62387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e62394){if((e62394 instanceof Object)){
var ex__1885__auto__ = e62394;
var statearr_62395_62397 = state_62387;
(statearr_62395_62397[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62398 = state_62387;
state_62387 = G__62398;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$load_state_$_state_machine__1882__auto__ = function(state_62387){
switch(arguments.length){
case 0:
return cljs_draw$core$load_state_$_state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$load_state_$_state_machine__1882__auto____1.call(this,state_62387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$load_state_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$load_state_$_state_machine__1882__auto____0;
cljs_draw$core$load_state_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$load_state_$_state_machine__1882__auto____1;
return cljs_draw$core$load_state_$_state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto__))
})();
var state__1904__auto__ = (function (){var statearr_62396 = f__1903__auto__.call(null);
(statearr_62396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto__);

return statearr_62396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto__))
);

return c__1902__auto__;
});
cljs_draw.core.clear_canvas = (function cljs_draw$core$clear_canvas(){
if(cljs.core.truth_(confirm("Are you sure you want to clear the canvas?"))){
cljs_draw.core.reset_canvas.call(null,cljs_draw.core.baked_ctx,cljs_draw.core.baked_dimen);

return cljs_draw.core.lines = cljs.core.PersistentVector.EMPTY;
} else {
return null;
}
});
cljs_draw.core.set_cursor = (function cljs_draw$core$set_cursor(x,y){
return cljs_draw.core.cursor = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
cljs_draw.core.finalize_stroke = (function cljs_draw$core$finalize_stroke(){
return cljs_draw.core.lines = cljs.core.conj.call(null,cljs_draw.core.lines,cljs.core.PersistentVector.EMPTY);
});
cljs_draw.core.vec2_length = (function cljs_draw$core$vec2_length(x,y){
return Math.sqrt(((x * x) + (y * y)));
});
cljs_draw.core.render_line = (function cljs_draw$core$render_line(ctx,line){
if((cljs.core.count.call(null,line) > (1))){
var seq__62403 = cljs.core.seq.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,line) - (1))));
var chunk__62404 = null;
var count__62405 = (0);
var i__62406 = (0);
while(true){
if((i__62406 < count__62405)){
var i = cljs.core._nth.call(null,chunk__62404,i__62406);
var p1_62407 = cljs.core.nth.call(null,line,i);
var p2_62408 = cljs.core.nth.call(null,line,(i + (1)));
var width_62409 = ((new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p1_62407) + new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p2_62408)) * ((20) * (2)));
ctx.lineWidth = (width_62409 * (2));

ctx.strokeStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p1_62407);

ctx.beginPath();

ctx.moveTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1_62407) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1_62407) * (2)));

ctx.lineTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2_62408) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2_62408) * (2)));

ctx.stroke();

var G__62410 = seq__62403;
var G__62411 = chunk__62404;
var G__62412 = count__62405;
var G__62413 = (i__62406 + (1));
seq__62403 = G__62410;
chunk__62404 = G__62411;
count__62405 = G__62412;
i__62406 = G__62413;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__62403);
if(temp__4126__auto__){
var seq__62403__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62403__$1)){
var c__3511__auto__ = cljs.core.chunk_first.call(null,seq__62403__$1);
var G__62414 = cljs.core.chunk_rest.call(null,seq__62403__$1);
var G__62415 = c__3511__auto__;
var G__62416 = cljs.core.count.call(null,c__3511__auto__);
var G__62417 = (0);
seq__62403 = G__62414;
chunk__62404 = G__62415;
count__62405 = G__62416;
i__62406 = G__62417;
continue;
} else {
var i = cljs.core.first.call(null,seq__62403__$1);
var p1_62418 = cljs.core.nth.call(null,line,i);
var p2_62419 = cljs.core.nth.call(null,line,(i + (1)));
var width_62420 = ((new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p1_62418) + new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(p2_62419)) * ((20) * (2)));
ctx.lineWidth = (width_62420 * (2));

ctx.strokeStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p1_62418);

ctx.beginPath();

ctx.moveTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1_62418) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1_62418) * (2)));

ctx.lineTo((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2_62419) * (2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2_62419) * (2)));

ctx.stroke();

var G__62421 = cljs.core.next.call(null,seq__62403__$1);
var G__62422 = null;
var G__62423 = (0);
var G__62424 = (0);
seq__62403 = G__62421;
chunk__62404 = G__62422;
count__62405 = G__62423;
i__62406 = G__62424;
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
});
cljs_draw.core.reset_canvas = (function cljs_draw$core$reset_canvas(ctx,dimen){
return ctx.clearRect((0),(0),cljs.core.first.call(null,dimen),cljs.core.second.call(null,dimen));
});
cljs_draw.core.render = (function cljs_draw$core$render(baked_ctx,recent_ctx){
cljs_draw.core.reset_canvas.call(null,recent_ctx,cljs_draw.core.recent_dimen);

var seq__62434_62443 = cljs.core.seq.call(null,cljs.core.drop_last.call(null,(10),cljs_draw.core.lines));
var chunk__62435_62444 = null;
var count__62436_62445 = (0);
var i__62437_62446 = (0);
while(true){
if((i__62437_62446 < count__62436_62445)){
var line_62447 = cljs.core._nth.call(null,chunk__62435_62444,i__62437_62446);
cljs_draw.core.render_line.call(null,baked_ctx,line_62447);

var G__62448 = seq__62434_62443;
var G__62449 = chunk__62435_62444;
var G__62450 = count__62436_62445;
var G__62451 = (i__62437_62446 + (1));
seq__62434_62443 = G__62448;
chunk__62435_62444 = G__62449;
count__62436_62445 = G__62450;
i__62437_62446 = G__62451;
continue;
} else {
var temp__4126__auto___62452 = cljs.core.seq.call(null,seq__62434_62443);
if(temp__4126__auto___62452){
var seq__62434_62453__$1 = temp__4126__auto___62452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62434_62453__$1)){
var c__3511__auto___62454 = cljs.core.chunk_first.call(null,seq__62434_62453__$1);
var G__62455 = cljs.core.chunk_rest.call(null,seq__62434_62453__$1);
var G__62456 = c__3511__auto___62454;
var G__62457 = cljs.core.count.call(null,c__3511__auto___62454);
var G__62458 = (0);
seq__62434_62443 = G__62455;
chunk__62435_62444 = G__62456;
count__62436_62445 = G__62457;
i__62437_62446 = G__62458;
continue;
} else {
var line_62459 = cljs.core.first.call(null,seq__62434_62453__$1);
cljs_draw.core.render_line.call(null,baked_ctx,line_62459);

var G__62460 = cljs.core.next.call(null,seq__62434_62453__$1);
var G__62461 = null;
var G__62462 = (0);
var G__62463 = (0);
seq__62434_62443 = G__62460;
chunk__62435_62444 = G__62461;
count__62436_62445 = G__62462;
i__62437_62446 = G__62463;
continue;
}
} else {
}
}
break;
}

var seq__62438_62464 = cljs.core.seq.call(null,cljs.core.take_last.call(null,(10),cljs_draw.core.lines));
var chunk__62439_62465 = null;
var count__62440_62466 = (0);
var i__62441_62467 = (0);
while(true){
if((i__62441_62467 < count__62440_62466)){
var line_62468 = cljs.core._nth.call(null,chunk__62439_62465,i__62441_62467);
cljs_draw.core.render_line.call(null,recent_ctx,line_62468);

var G__62469 = seq__62438_62464;
var G__62470 = chunk__62439_62465;
var G__62471 = count__62440_62466;
var G__62472 = (i__62441_62467 + (1));
seq__62438_62464 = G__62469;
chunk__62439_62465 = G__62470;
count__62440_62466 = G__62471;
i__62441_62467 = G__62472;
continue;
} else {
var temp__4126__auto___62473 = cljs.core.seq.call(null,seq__62438_62464);
if(temp__4126__auto___62473){
var seq__62438_62474__$1 = temp__4126__auto___62473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62438_62474__$1)){
var c__3511__auto___62475 = cljs.core.chunk_first.call(null,seq__62438_62474__$1);
var G__62476 = cljs.core.chunk_rest.call(null,seq__62438_62474__$1);
var G__62477 = c__3511__auto___62475;
var G__62478 = cljs.core.count.call(null,c__3511__auto___62475);
var G__62479 = (0);
seq__62438_62464 = G__62476;
chunk__62439_62465 = G__62477;
count__62440_62466 = G__62478;
i__62441_62467 = G__62479;
continue;
} else {
var line_62480 = cljs.core.first.call(null,seq__62438_62474__$1);
cljs_draw.core.render_line.call(null,recent_ctx,line_62480);

var G__62481 = cljs.core.next.call(null,seq__62438_62474__$1);
var G__62482 = null;
var G__62483 = (0);
var G__62484 = (0);
seq__62438_62464 = G__62481;
chunk__62439_62465 = G__62482;
count__62440_62466 = G__62483;
i__62441_62467 = G__62484;
continue;
}
} else {
}
}
break;
}

var vec__62442_62485 = cljs_draw.core.cursor;
var x_62486 = cljs.core.nth.call(null,vec__62442_62485,(0),null);
var y_62487 = cljs.core.nth.call(null,vec__62442_62485,(1),null);
var ctx_62488 = recent_ctx;
ctx_62488.strokeStyle = "white";

ctx_62488.lineWidth = (1);

ctx_62488.beginPath();

ctx_62488.moveTo(((x_62486 - (5)) * (2)),(y_62487 * (2)));

ctx_62488.lineTo(((x_62486 + (5)) * (2)),(y_62487 * (2)));

ctx_62488.moveTo((x_62486 * (2)),((y_62487 - (5)) * (2)));

ctx_62488.lineTo((x_62486 * (2)),((y_62487 + (5)) * (2)));

ctx_62488.stroke();

return cljs_draw.core.lines = cljs.core.vec.call(null,cljs.core.take_last.call(null,(10),cljs_draw.core.lines));
});
cljs_draw.core.render_loop = (function cljs_draw$core$render_loop(){
cljs_draw.core.render.call(null,cljs_draw.core.baked_ctx,cljs_draw.core.recent_ctx);

return requestAnimationFrame(cljs_draw$core$render_loop);
});
cljs_draw.core.undo = (function cljs_draw$core$undo(){
return cljs_draw.core.lines = cljs.core.vec.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.last.call(null,cljs_draw.core.lines)),(0)))?cljs.core.drop_last.call(null,(2),cljs_draw.core.lines):cljs.core.drop_last.call(null,(1),cljs_draw.core.lines)));
});
cljs_draw.core.debug = (function cljs_draw$core$debug(x){
console.log(cljs.core.type.call(null,x),x);

return x;
});
cljs_draw.core.chan_handler = (function cljs_draw$core$chan_handler(chan){
return (function (e){
cljs.core.async.put_BANG_.call(null,chan,e);

return e;
});
});
cljs_draw.core.signal_after_inactivity = (function cljs_draw$core$signal_after_inactivity(ms){
var in$ = cljs.core.async.chan.call(null);
var out = cljs.core.async.chan.call(null);
var c__1902__auto___62583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto___62583,in$,out){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto___62583,in$,out){
return (function (state_62563){
var state_val_62564 = (state_62563[(1)]);
if((state_val_62564 === (7))){
var inst_62546 = (state_62563[(2)]);
var inst_62547 = cljs.core.nth.call(null,inst_62546,(0),null);
var inst_62548 = cljs.core.nth.call(null,inst_62546,(1),null);
var inst_62549 = cljs.core._EQ_.call(null,inst_62548,in$);
var state_62563__$1 = (function (){var statearr_62565 = state_62563;
(statearr_62565[(7)] = inst_62547);

return statearr_62565;
})();
if(inst_62549){
var statearr_62566_62584 = state_62563__$1;
(statearr_62566_62584[(1)] = (8));

} else {
var statearr_62567_62585 = state_62563__$1;
(statearr_62567_62585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62564 === (1))){
var state_62563__$1 = state_62563;
var statearr_62568_62586 = state_62563__$1;
(statearr_62568_62586[(2)] = null);

(statearr_62568_62586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62564 === (4))){
var inst_62538 = (state_62563[(2)]);
var state_62563__$1 = (function (){var statearr_62569 = state_62563;
(statearr_62569[(8)] = inst_62538);

return statearr_62569;
})();
var statearr_62570_62587 = state_62563__$1;
(statearr_62570_62587[(2)] = null);

(statearr_62570_62587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62564 === (6))){
var inst_62558 = (state_62563[(2)]);
var state_62563__$1 = (function (){var statearr_62571 = state_62563;
(statearr_62571[(9)] = inst_62558);

return statearr_62571;
})();
var statearr_62572_62588 = state_62563__$1;
(statearr_62572_62588[(2)] = null);

(statearr_62572_62588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62564 === (3))){
var inst_62561 = (state_62563[(2)]);
var state_62563__$1 = state_62563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62563__$1,inst_62561);
} else {
if((state_val_62564 === (2))){
var state_62563__$1 = state_62563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62563__$1,(4),in$);
} else {
if((state_val_62564 === (11))){
var inst_62554 = (state_62563[(2)]);
var state_62563__$1 = state_62563;
var statearr_62573_62589 = state_62563__$1;
(statearr_62573_62589[(2)] = inst_62554);

(statearr_62573_62589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62564 === (9))){
var state_62563__$1 = state_62563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62563__$1,(11),out,true);
} else {
if((state_val_62564 === (5))){
var inst_62541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62542 = cljs.core.async.timeout.call(null,ms);
var inst_62543 = [in$,inst_62542];
var inst_62544 = (new cljs.core.PersistentVector(null,2,(5),inst_62541,inst_62543,null));
var state_62563__$1 = state_62563;
return cljs.core.async.ioc_alts_BANG_.call(null,state_62563__$1,(7),inst_62544);
} else {
if((state_val_62564 === (10))){
var inst_62556 = (state_62563[(2)]);
var state_62563__$1 = state_62563;
var statearr_62574_62590 = state_62563__$1;
(statearr_62574_62590[(2)] = inst_62556);

(statearr_62574_62590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62564 === (8))){
var state_62563__$1 = state_62563;
var statearr_62575_62591 = state_62563__$1;
(statearr_62575_62591[(2)] = null);

(statearr_62575_62591[(1)] = (5));


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
});})(c__1902__auto___62583,in$,out))
;
return ((function (switch__1881__auto__,c__1902__auto___62583,in$,out){
return (function() {
var cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto__ = null;
var cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto____0 = (function (){
var statearr_62579 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62579[(0)] = cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto__);

(statearr_62579[(1)] = (1));

return statearr_62579;
});
var cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto____1 = (function (state_62563){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_62563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e62580){if((e62580 instanceof Object)){
var ex__1885__auto__ = e62580;
var statearr_62581_62592 = state_62563;
(statearr_62581_62592[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62593 = state_62563;
state_62563 = G__62593;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto__ = function(state_62563){
switch(arguments.length){
case 0:
return cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto____1.call(this,state_62563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto____0;
cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto____1;
return cljs_draw$core$signal_after_inactivity_$_state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto___62583,in$,out))
})();
var state__1904__auto__ = (function (){var statearr_62582 = f__1903__auto__.call(null);
(statearr_62582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto___62583);

return statearr_62582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto___62583,in$,out))
);


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),in$,new cljs.core.Keyword(null,"output","output",-1105869043),out], null);
});
cljs_draw.core.color_input = (function cljs_draw$core$color_input(data,owner){
if(typeof cljs_draw.core.t62597 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t62597 = (function (owner,data,color_input,meta62598){
this.owner = owner;
this.data = data;
this.color_input = color_input;
this.meta62598 = meta62598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_draw.core.t62597.prototype.om$core$IRender$ = true;

cljs_draw.core.t62597.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.input.call(null,{"style": {"border": (0), "height": (50), "width": (50)}, "value": new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673).cljs$core$IFn$_invoke$arity$1(self__.data), "type": "color"});
});

cljs_draw.core.t62597.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t62597.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
node.addEventListener("input",((function (node,this$__$1){
return (function (e){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673),((function (node,this$__$1){
return (function (xs){
return e.target.value;
});})(node,this$__$1))
);
});})(node,this$__$1))
);

return node.addEventListener("change",((function (node,this$__$1){
return (function (e){
return om.core.transact_BANG_.call(null,self__.data,((function (node,this$__$1){
return (function (xs){
return cljs.core.assoc.call(null,xs,new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.conj.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(xs),e.target.value),new cljs.core.Keyword(null,"current-color","current-color",1731984119),e.target.value);
});})(node,this$__$1))
);
});})(node,this$__$1))
);
});

cljs_draw.core.t62597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62599){
var self__ = this;
var _62599__$1 = this;
return self__.meta62598;
});

cljs_draw.core.t62597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62599,meta62598__$1){
var self__ = this;
var _62599__$1 = this;
return (new cljs_draw.core.t62597(self__.owner,self__.data,self__.color_input,meta62598__$1));
});

cljs_draw.core.t62597.cljs$lang$type = true;

cljs_draw.core.t62597.cljs$lang$ctorStr = "cljs_draw.core/t62597";

cljs_draw.core.t62597.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs_draw.core/t62597");
});

cljs_draw.core.__GT_t62597 = (function cljs_draw$core$color_input_$___GT_t62597(owner__$1,data__$1,color_input__$1,meta62598){
return (new cljs_draw.core.t62597(owner__$1,data__$1,color_input__$1,meta62598));
});

}

return (new cljs_draw.core.t62597(owner,data,cljs_draw$core$color_input,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_item = (function cljs_draw$core$color_item(props,owner){
if(typeof cljs_draw.core.t62678 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t62678 = (function (owner,props,color_item,meta62679){
this.owner = owner;
this.props = props;
this.color_item = color_item;
this.meta62679 = meta62679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_draw.core.t62678.prototype.om$core$IRender$ = true;

cljs_draw.core.t62678.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__62681 = om.core.get_state.call(null,self__.owner);
var map__62681__$1 = ((cljs.core.seq_QMARK_.call(null,map__62681))?cljs.core.apply.call(null,cljs.core.hash_map,map__62681):map__62681);
var mouseout = cljs.core.get.call(null,map__62681__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var mousedown = cljs.core.get.call(null,map__62681__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseup = cljs.core.get.call(null,map__62681__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
return React.DOM.div({"style": {"height": (50), "width": (50), "position": "relative"}},React.DOM.div({"style": {"bottom": (0), "transition": "left .2s", "top": (0), "width": (60), "padding": (5), "position": "absolute", "backgroundColor": "#333333", "height": (30), "left": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742)))?(-60):(0)), "margin": "auto"}},React.DOM.a({"onClick": ((function (map__62681,map__62681__$1,mouseout,mousedown,mouseup,___$1){
return (function (e){
return new cljs.core.Keyword(null,"onRemove","onRemove",867118207).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(map__62681,map__62681__$1,mouseout,mousedown,mouseup,___$1))
, "href": "#"},"remove")),React.DOM.div({"style": {"border": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.props))?"3px solid white":""), "backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props), "cursor": "pointer", "height": (50), "width": (50), "position": "absolute"}, "onMouseOut": cljs_draw.core.chan_handler.call(null,mouseout), "onMouseUp": cljs_draw.core.chan_handler.call(null,mouseup), "onMouseDown": cljs_draw.core.chan_handler.call(null,mousedown)}));
});

cljs_draw.core.t62678.prototype.om$core$IWillUnmount$ = true;

cljs_draw.core.t62678.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))),true);
});

cljs_draw.core.t62678.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t62678.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__62682 = om.core.get_state.call(null,self__.owner);
var map__62682__$1 = ((cljs.core.seq_QMARK_.call(null,map__62682))?cljs.core.apply.call(null,cljs.core.hash_map,map__62682):map__62682);
var hide_controls = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490));
var mouseout = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890));
var mousedown = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var mouseup = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"mouseup","mouseup",350619456));
var c__1902__auto___62756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto___62756,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto___62756,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1){
return (function (state_62714){
var state_val_62715 = (state_62714[(1)]);
if((state_val_62715 === (7))){
var inst_62702 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),true);
var inst_62703 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_62714__$1 = (function (){var statearr_62716 = state_62714;
(statearr_62716[(7)] = inst_62702);

return statearr_62716;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62714__$1,(9),inst_62703,true);
} else {
if((state_val_62715 === (1))){
var state_62714__$1 = state_62714;
var statearr_62717_62757 = state_62714__$1;
(statearr_62717_62757[(2)] = null);

(statearr_62717_62757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (4))){
var inst_62685 = (state_62714[(2)]);
var inst_62687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62688 = cljs.core.async.timeout.call(null,(500));
var inst_62689 = [mouseup,inst_62688];
var inst_62690 = (new cljs.core.PersistentVector(null,2,(5),inst_62687,inst_62689,null));
var state_62714__$1 = (function (){var statearr_62718 = state_62714;
(statearr_62718[(8)] = inst_62685);

return statearr_62718;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_62714__$1,(5),inst_62690);
} else {
if((state_val_62715 === (6))){
var inst_62697 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var inst_62698 = new cljs.core.Keyword(null,"onSelect","onSelect",251862405).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_62699 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.props);
var inst_62700 = inst_62698.call(null,inst_62699);
var state_62714__$1 = (function (){var statearr_62719 = state_62714;
(statearr_62719[(9)] = inst_62697);

return statearr_62719;
})();
var statearr_62720_62758 = state_62714__$1;
(statearr_62720_62758[(2)] = inst_62700);

(statearr_62720_62758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (3))){
var inst_62712 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62714__$1,inst_62712);
} else {
if((state_val_62715 === (2))){
var state_62714__$1 = state_62714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62714__$1,(4),mousedown);
} else {
if((state_val_62715 === (9))){
var inst_62705 = (state_62714[(2)]);
var state_62714__$1 = (function (){var statearr_62721 = state_62714;
(statearr_62721[(10)] = inst_62705);

return statearr_62721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62714__$1,(10),mouseup);
} else {
if((state_val_62715 === (5))){
var inst_62692 = (state_62714[(2)]);
var inst_62693 = cljs.core.nth.call(null,inst_62692,(0),null);
var inst_62694 = cljs.core.nth.call(null,inst_62692,(1),null);
var inst_62695 = cljs.core._EQ_.call(null,inst_62694,mouseup);
var state_62714__$1 = (function (){var statearr_62722 = state_62714;
(statearr_62722[(11)] = inst_62693);

return statearr_62722;
})();
if(inst_62695){
var statearr_62723_62759 = state_62714__$1;
(statearr_62723_62759[(1)] = (6));

} else {
var statearr_62724_62760 = state_62714__$1;
(statearr_62724_62760[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (10))){
var inst_62707 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
var statearr_62725_62761 = state_62714__$1;
(statearr_62725_62761[(2)] = inst_62707);

(statearr_62725_62761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (8))){
var inst_62709 = (state_62714[(2)]);
var state_62714__$1 = (function (){var statearr_62726 = state_62714;
(statearr_62726[(12)] = inst_62709);

return statearr_62726;
})();
var statearr_62727_62762 = state_62714__$1;
(statearr_62727_62762[(2)] = null);

(statearr_62727_62762[(1)] = (2));


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
});})(c__1902__auto___62756,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1))
;
return ((function (switch__1881__auto__,c__1902__auto___62756,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__1882__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__1882__auto____0 = (function (){
var statearr_62731 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62731[(0)] = cljs_draw$core$color_item_$_state_machine__1882__auto__);

(statearr_62731[(1)] = (1));

return statearr_62731;
});
var cljs_draw$core$color_item_$_state_machine__1882__auto____1 = (function (state_62714){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_62714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e62732){if((e62732 instanceof Object)){
var ex__1885__auto__ = e62732;
var statearr_62733_62763 = state_62714;
(statearr_62733_62763[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62764 = state_62714;
state_62714 = G__62764;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__1882__auto__ = function(state_62714){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__1882__auto____1.call(this,state_62714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__1882__auto____0;
cljs_draw$core$color_item_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__1882__auto____1;
return cljs_draw$core$color_item_$_state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto___62756,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1))
})();
var state__1904__auto__ = (function (){var statearr_62734 = f__1903__auto__.call(null);
(statearr_62734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto___62756);

return statearr_62734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto___62756,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1))
);


var c__1902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto__,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto__,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1){
return (function (state_62744){
var state_val_62745 = (state_62744[(1)]);
if((state_val_62745 === (4))){
var inst_62738 = (state_62744[(2)]);
var inst_62739 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"expanded","expanded",-3020742),false);
var state_62744__$1 = (function (){var statearr_62746 = state_62744;
(statearr_62746[(7)] = inst_62739);

(statearr_62746[(8)] = inst_62738);

return statearr_62746;
})();
var statearr_62747_62765 = state_62744__$1;
(statearr_62747_62765[(2)] = null);

(statearr_62747_62765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (3))){
var inst_62742 = (state_62744[(2)]);
var state_62744__$1 = state_62744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62744__$1,inst_62742);
} else {
if((state_val_62745 === (2))){
var inst_62736 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(hide_controls);
var state_62744__$1 = state_62744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62744__$1,(4),inst_62736);
} else {
if((state_val_62745 === (1))){
var state_62744__$1 = state_62744;
var statearr_62748_62766 = state_62744__$1;
(statearr_62748_62766[(2)] = null);

(statearr_62748_62766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__1902__auto__,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1))
;
return ((function (switch__1881__auto__,c__1902__auto__,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1){
return (function() {
var cljs_draw$core$color_item_$_state_machine__1882__auto__ = null;
var cljs_draw$core$color_item_$_state_machine__1882__auto____0 = (function (){
var statearr_62752 = [null,null,null,null,null,null,null,null,null];
(statearr_62752[(0)] = cljs_draw$core$color_item_$_state_machine__1882__auto__);

(statearr_62752[(1)] = (1));

return statearr_62752;
});
var cljs_draw$core$color_item_$_state_machine__1882__auto____1 = (function (state_62744){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_62744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e62753){if((e62753 instanceof Object)){
var ex__1885__auto__ = e62753;
var statearr_62754_62767 = state_62744;
(statearr_62754_62767[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62768 = state_62744;
state_62744 = G__62768;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$color_item_$_state_machine__1882__auto__ = function(state_62744){
switch(arguments.length){
case 0:
return cljs_draw$core$color_item_$_state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$color_item_$_state_machine__1882__auto____1.call(this,state_62744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$color_item_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$color_item_$_state_machine__1882__auto____0;
cljs_draw$core$color_item_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$color_item_$_state_machine__1882__auto____1;
return cljs_draw$core$color_item_$_state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto__,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1))
})();
var state__1904__auto__ = (function (){var statearr_62755 = f__1903__auto__.call(null);
(statearr_62755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto__);

return statearr_62755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto__,map__62682,map__62682__$1,hide_controls,mouseout,mousedown,mouseup,___$1))
);

return c__1902__auto__;
});

cljs_draw.core.t62678.prototype.om$core$IInitState$ = true;

cljs_draw.core.t62678.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"hide-controls","hide-controls",1762239490),cljs_draw.core.signal_after_inactivity.call(null,(3000)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null);
});

cljs_draw.core.t62678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62680){
var self__ = this;
var _62680__$1 = this;
return self__.meta62679;
});

cljs_draw.core.t62678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62680,meta62679__$1){
var self__ = this;
var _62680__$1 = this;
return (new cljs_draw.core.t62678(self__.owner,self__.props,self__.color_item,meta62679__$1));
});

cljs_draw.core.t62678.cljs$lang$type = true;

cljs_draw.core.t62678.cljs$lang$ctorStr = "cljs_draw.core/t62678";

cljs_draw.core.t62678.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs_draw.core/t62678");
});

cljs_draw.core.__GT_t62678 = (function cljs_draw$core$color_item_$___GT_t62678(owner__$1,props__$1,color_item__$1,meta62679){
return (new cljs_draw.core.t62678(owner__$1,props__$1,color_item__$1,meta62679));
});

}

return (new cljs_draw.core.t62678(owner,props,cljs_draw$core$color_item,cljs.core.PersistentArrayMap.EMPTY));
});
cljs_draw.core.color_chooser = (function cljs_draw$core$color_chooser(data){
return cljs.core.apply.call(null,om.dom.div,{"style": {"right": (0), "top": (0), "position": "absolute"}, "className": "color-chooser"},cljs.core.conj.call(null,cljs.core.mapv.call(null,(function (color){
return om.core.build.call(null,cljs_draw.core.color_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(data),color),new cljs.core.Keyword(null,"onSelect","onSelect",251862405),(function (color__$1){
return om.core.transact_BANG_.call(null,data,(function (xs){
return cljs.core.assoc.call(null,xs,new cljs.core.Keyword(null,"current-color","current-color",1731984119),color__$1,new cljs.core.Keyword(null,"pending-color","pending-color",-2058986673),color__$1);
}));
}),new cljs.core.Keyword(null,"onRemove","onRemove",867118207),(function (color__$1){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"colors","colors",1157174732),(function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (x){
return cljs.core.not_EQ_.call(null,x,color__$1);
}),xs));
}));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),color], null));
}),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(data)),React.DOM.div({"style": {"textAlign": "center", "flex": (0)}},om.core.build.call(null,cljs_draw.core.color_input,data))));
});
cljs_draw.core.app = (function cljs_draw$core$app(data,owner){
if(typeof cljs_draw.core.t62910 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_draw.core.t62910 = (function (owner,data,app,meta62911){
this.owner = owner;
this.data = data;
this.app = app;
this.meta62911 = meta62911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_draw.core.t62910.prototype.om$core$IRender$ = true;

cljs_draw.core.t62910.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"style": {"backgroundColor": "#222222", "height": "100%"}, "id": "app"},React.DOM.div({"style": {"overflow": "hidden"}, "className": "canvas-container"},(function (){var dimen = (1300);
var style = {"bottom": (0), "top": (0), "transformOrigin": "0 0", "width": (dimen / (2)), "cursor": "none", "right": (0), "position": "absolute", "border": "1px solid #333333", "height": (dimen / (2)), "left": (0), "margin": "auto"};
return [React.DOM.canvas({"style": style, "height": dimen, "width": dimen}),React.DOM.canvas({"style": style, "height": dimen, "width": dimen})];
})()),cljs_draw.core.color_chooser.call(null,self__.data));
});

cljs_draw.core.t62910.prototype.om$core$IDidMount$ = true;

cljs_draw.core.t62910.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = om.core.get_node.call(null,self__.owner);
var container = node.querySelector(".canvas-container");
var canvases = cljs.core.array_seq.call(null,node.querySelectorAll("canvas"));
var baked_canvas = cljs.core.first.call(null,canvases);
var recent_canvas = cljs.core.second.call(null,canvases);
cljs_draw.core.baked_cvs = baked_canvas;

cljs_draw.core.baked_ctx = baked_canvas.getContext("2d");

cljs_draw.core.baked_dimen = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [baked_canvas.width,baked_canvas.height], null);

cljs_draw.core.recent_ctx = recent_canvas.getContext("2d");

cljs_draw.core.recent_dimen = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [recent_canvas.width,recent_canvas.height], null);

cljs_draw.core.load_state.call(null);

cljs_draw.core.render_loop.call(null);

var moved_63051 = cljs_draw.util.listen.call(null,recent_canvas,"pointermove");
var c__1902__auto___63052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto___63052,moved_63051,node,container,canvases,baked_canvas,recent_canvas,this$__$1){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto___63052,moved_63051,node,container,canvases,baked_canvas,recent_canvas,this$__$1){
return (function (state_62969){
var state_val_62970 = (state_62969[(1)]);
if((state_val_62970 === (7))){
var inst_62965 = (state_62969[(2)]);
var state_62969__$1 = state_62969;
var statearr_62971_63053 = state_62969__$1;
(statearr_62971_63053[(2)] = inst_62965);

(statearr_62971_63053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (1))){
var state_62969__$1 = state_62969;
var statearr_62972_63054 = state_62969__$1;
(statearr_62972_63054[(2)] = null);

(statearr_62972_63054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (4))){
var inst_62915 = (state_62969[(7)]);
var inst_62915__$1 = (state_62969[(2)]);
var state_62969__$1 = (function (){var statearr_62973 = state_62969;
(statearr_62973[(7)] = inst_62915__$1);

return statearr_62973;
})();
if(cljs.core.truth_(inst_62915__$1)){
var statearr_62974_63055 = state_62969__$1;
(statearr_62974_63055[(1)] = (5));

} else {
var statearr_62975_63056 = state_62969__$1;
(statearr_62975_63056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (15))){
var state_62969__$1 = state_62969;
var statearr_62976_63057 = state_62969__$1;
(statearr_62976_63057[(2)] = null);

(statearr_62976_63057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (13))){
var inst_62959 = (state_62969[(2)]);
var state_62969__$1 = state_62969;
var statearr_62977_63058 = state_62969__$1;
(statearr_62977_63058[(2)] = inst_62959);

(statearr_62977_63058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (6))){
var state_62969__$1 = state_62969;
var statearr_62978_63059 = state_62969__$1;
(statearr_62978_63059[(2)] = null);

(statearr_62978_63059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (17))){
var inst_62915 = (state_62969[(7)]);
var inst_62940 = cljs.core.drop_last.call(null,(1),cljs_draw.core.lines);
var inst_62941 = cljs.core.vec.call(null,inst_62940);
var inst_62942 = cljs.core.last.call(null,cljs_draw.core.lines);
var inst_62943 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"color","color",1011675173)];
var inst_62944 = inst_62915.layerX;
var inst_62945 = inst_62915.layerY;
var inst_62946 = inst_62915.mozPressure;
var inst_62947 = Math.pow(inst_62946,(2));
var inst_62948 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_62949 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_62948);
var inst_62950 = [inst_62944,inst_62945,inst_62947,inst_62949];
var inst_62951 = cljs.core.PersistentHashMap.fromArrays(inst_62943,inst_62950);
var inst_62952 = cljs.core.conj.call(null,inst_62942,inst_62951);
var inst_62953 = cljs.core.conj.call(null,inst_62941,inst_62952);
var inst_62954 = cljs_draw.core.lines = inst_62953;
var state_62969__$1 = state_62969;
var statearr_62979_63060 = state_62969__$1;
(statearr_62979_63060[(2)] = inst_62954);

(statearr_62979_63060[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (3))){
var inst_62967 = (state_62969[(2)]);
var state_62969__$1 = state_62969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62969__$1,inst_62967);
} else {
if((state_val_62970 === (12))){
var inst_62915 = (state_62969[(7)]);
var inst_62937 = inst_62915.mozPressure;
var inst_62938 = cljs.core.not_EQ_.call(null,inst_62937,.5);
var state_62969__$1 = state_62969;
if(inst_62938){
var statearr_62980_63061 = state_62969__$1;
(statearr_62980_63061[(1)] = (17));

} else {
var statearr_62981_63062 = state_62969__$1;
(statearr_62981_63062[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (2))){
var state_62969__$1 = state_62969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62969__$1,(4),moved_63051);
} else {
if((state_val_62970 === (19))){
var inst_62957 = (state_62969[(2)]);
var state_62969__$1 = state_62969;
var statearr_62982_63063 = state_62969__$1;
(statearr_62982_63063[(2)] = inst_62957);

(statearr_62982_63063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (11))){
var inst_62928 = cljs.core.last.call(null,cljs_draw.core.lines);
var inst_62929 = cljs.core.count.call(null,inst_62928);
var inst_62930 = (inst_62929 > (0));
var state_62969__$1 = state_62969;
if(cljs.core.truth_(inst_62930)){
var statearr_62983_63064 = state_62969__$1;
(statearr_62983_63064[(1)] = (14));

} else {
var statearr_62984_63065 = state_62969__$1;
(statearr_62984_63065[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (9))){
var inst_62915 = (state_62969[(7)]);
var inst_62925 = inst_62915.mozPressure;
var inst_62926 = cljs.core._EQ_.call(null,inst_62925,(0));
var state_62969__$1 = state_62969;
if(inst_62926){
var statearr_62985_63066 = state_62969__$1;
(statearr_62985_63066[(1)] = (11));

} else {
var statearr_62986_63067 = state_62969__$1;
(statearr_62986_63067[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (5))){
var inst_62915 = (state_62969[(7)]);
var inst_62917 = inst_62915.layerX;
var inst_62918 = inst_62915.layerY;
var inst_62919 = cljs_draw.core.set_cursor.call(null,inst_62917,inst_62918);
var inst_62920 = cljs.core.deref.call(null,cljs_draw.core.app_state);
var inst_62921 = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(inst_62920);
var inst_62922 = cljs.core.not.call(null,inst_62921);
var state_62969__$1 = (function (){var statearr_62987 = state_62969;
(statearr_62987[(8)] = inst_62919);

return statearr_62987;
})();
if(inst_62922){
var statearr_62988_63068 = state_62969__$1;
(statearr_62988_63068[(1)] = (8));

} else {
var statearr_62989_63069 = state_62969__$1;
(statearr_62989_63069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (14))){
var inst_62932 = cljs_draw.core.finalize_stroke.call(null);
var state_62969__$1 = state_62969;
var statearr_62990_63070 = state_62969__$1;
(statearr_62990_63070[(2)] = inst_62932);

(statearr_62990_63070[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (16))){
var inst_62935 = (state_62969[(2)]);
var state_62969__$1 = state_62969;
var statearr_62991_63071 = state_62969__$1;
(statearr_62991_63071[(2)] = inst_62935);

(statearr_62991_63071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (10))){
var inst_62961 = (state_62969[(2)]);
var state_62969__$1 = (function (){var statearr_62992 = state_62969;
(statearr_62992[(9)] = inst_62961);

return statearr_62992;
})();
var statearr_62993_63072 = state_62969__$1;
(statearr_62993_63072[(2)] = null);

(statearr_62993_63072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (18))){
var state_62969__$1 = state_62969;
var statearr_62994_63073 = state_62969__$1;
(statearr_62994_63073[(2)] = null);

(statearr_62994_63073[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62970 === (8))){
var state_62969__$1 = state_62969;
var statearr_62995_63074 = state_62969__$1;
(statearr_62995_63074[(2)] = null);

(statearr_62995_63074[(1)] = (10));


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
});})(c__1902__auto___63052,moved_63051,node,container,canvases,baked_canvas,recent_canvas,this$__$1))
;
return ((function (switch__1881__auto__,c__1902__auto___63052,moved_63051,node,container,canvases,baked_canvas,recent_canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__1882__auto__ = null;
var cljs_draw$core$app_$_state_machine__1882__auto____0 = (function (){
var statearr_62999 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62999[(0)] = cljs_draw$core$app_$_state_machine__1882__auto__);

(statearr_62999[(1)] = (1));

return statearr_62999;
});
var cljs_draw$core$app_$_state_machine__1882__auto____1 = (function (state_62969){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_62969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e63000){if((e63000 instanceof Object)){
var ex__1885__auto__ = e63000;
var statearr_63001_63075 = state_62969;
(statearr_63001_63075[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63076 = state_62969;
state_62969 = G__63076;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__1882__auto__ = function(state_62969){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__1882__auto____1.call(this,state_62969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__1882__auto____0;
cljs_draw$core$app_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__1882__auto____1;
return cljs_draw$core$app_$_state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto___63052,moved_63051,node,container,canvases,baked_canvas,recent_canvas,this$__$1))
})();
var state__1904__auto__ = (function (){var statearr_63002 = f__1903__auto__.call(null);
(statearr_63002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto___63052);

return statearr_63002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto___63052,moved_63051,node,container,canvases,baked_canvas,recent_canvas,this$__$1))
);


var keydown = cljs_draw.util.listen.call(null,window,"keydown",((function (node,container,canvases,baked_canvas,recent_canvas,this$__$1){
return (function (e){
var kc = e.keyCode;
if((cljs.core._EQ_.call(null,kc,(83))) || (cljs.core._EQ_.call(null,kc,(90)))){
return e.preventDefault();
} else {
return null;
}
});})(node,container,canvases,baked_canvas,recent_canvas,this$__$1))
);
var c__1902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1902__auto__,keydown,node,container,canvases,baked_canvas,recent_canvas,this$__$1){
return (function (){
var f__1903__auto__ = (function (){var switch__1881__auto__ = ((function (c__1902__auto__,keydown,node,container,canvases,baked_canvas,recent_canvas,this$__$1){
return (function (state_63025){
var state_val_63026 = (state_63025[(1)]);
if((state_val_63026 === (7))){
var inst_63020 = (state_63025[(2)]);
var state_63025__$1 = (function (){var statearr_63027 = state_63025;
(statearr_63027[(7)] = inst_63020);

return statearr_63027;
})();
var statearr_63028_63077 = state_63025__$1;
(statearr_63028_63077[(2)] = null);

(statearr_63028_63077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63026 === (1))){
var state_63025__$1 = state_63025;
var statearr_63029_63078 = state_63025__$1;
(statearr_63029_63078[(2)] = null);

(statearr_63029_63078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63026 === (4))){
var inst_63005 = (state_63025[(8)]);
var inst_63005__$1 = (state_63025[(2)]);
var inst_63006 = inst_63005__$1.metaKey;
var state_63025__$1 = (function (){var statearr_63030 = state_63025;
(statearr_63030[(8)] = inst_63005__$1);

return statearr_63030;
})();
if(cljs.core.truth_(inst_63006)){
var statearr_63031_63079 = state_63025__$1;
(statearr_63031_63079[(1)] = (5));

} else {
var statearr_63032_63080 = state_63025__$1;
(statearr_63032_63080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63026 === (6))){
var state_63025__$1 = state_63025;
var statearr_63033_63081 = state_63025__$1;
(statearr_63033_63081[(2)] = null);

(statearr_63033_63081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63026 === (3))){
var inst_63023 = (state_63025[(2)]);
var state_63025__$1 = state_63025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63025__$1,inst_63023);
} else {
if((state_val_63026 === (12))){
var state_63025__$1 = state_63025;
var statearr_63034_63082 = state_63025__$1;
(statearr_63034_63082[(2)] = new cljs.core.Keyword(null,"else","else",-1508377146));

(statearr_63034_63082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63026 === (2))){
var state_63025__$1 = state_63025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63025__$1,(4),keydown);
} else {
if((state_val_63026 === (11))){
var inst_63012 = cljs_draw.core.clear_canvas.call(null);
var state_63025__$1 = state_63025;
var statearr_63035_63083 = state_63025__$1;
(statearr_63035_63083[(2)] = inst_63012);

(statearr_63035_63083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63026 === (9))){
var inst_63008 = cljs_draw.core.save_state.call(null);
var state_63025__$1 = state_63025;
var statearr_63036_63084 = state_63025__$1;
(statearr_63036_63084[(2)] = inst_63008);

(statearr_63036_63084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63026 === (5))){
var inst_63005 = (state_63025[(8)]);
var inst_63015 = inst_63005.keyCode;
var state_63025__$1 = state_63025;
var G__63037_63085 = inst_63015;
switch (G__63037_63085) {
case (83):
var statearr_63038_63087 = state_63025__$1;
(statearr_63038_63087[(1)] = (9));


break;
case (90):
var statearr_63039_63088 = state_63025__$1;
(statearr_63039_63088[(1)] = (10));


break;
case (67):
var statearr_63040_63089 = state_63025__$1;
(statearr_63040_63089[(1)] = (11));


break;
default:
var statearr_63041_63090 = state_63025__$1;
(statearr_63041_63090[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63026 === (10))){
var inst_63010 = cljs_draw.core.undo.call(null);
var state_63025__$1 = state_63025;
var statearr_63042_63091 = state_63025__$1;
(statearr_63042_63091[(2)] = inst_63010);

(statearr_63042_63091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63026 === (8))){
var inst_63017 = (state_63025[(2)]);
var state_63025__$1 = state_63025;
var statearr_63043_63092 = state_63025__$1;
(statearr_63043_63092[(2)] = inst_63017);

(statearr_63043_63092[(1)] = (7));


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
});})(c__1902__auto__,keydown,node,container,canvases,baked_canvas,recent_canvas,this$__$1))
;
return ((function (switch__1881__auto__,c__1902__auto__,keydown,node,container,canvases,baked_canvas,recent_canvas,this$__$1){
return (function() {
var cljs_draw$core$app_$_state_machine__1882__auto__ = null;
var cljs_draw$core$app_$_state_machine__1882__auto____0 = (function (){
var statearr_63047 = [null,null,null,null,null,null,null,null,null];
(statearr_63047[(0)] = cljs_draw$core$app_$_state_machine__1882__auto__);

(statearr_63047[(1)] = (1));

return statearr_63047;
});
var cljs_draw$core$app_$_state_machine__1882__auto____1 = (function (state_63025){
while(true){
var ret_value__1883__auto__ = (function (){try{while(true){
var result__1884__auto__ = switch__1881__auto__.call(null,state_63025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1884__auto__;
}
break;
}
}catch (e63048){if((e63048 instanceof Object)){
var ex__1885__auto__ = e63048;
var statearr_63049_63093 = state_63025;
(statearr_63049_63093[(5)] = ex__1885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63094 = state_63025;
state_63025 = G__63094;
continue;
} else {
return ret_value__1883__auto__;
}
break;
}
});
cljs_draw$core$app_$_state_machine__1882__auto__ = function(state_63025){
switch(arguments.length){
case 0:
return cljs_draw$core$app_$_state_machine__1882__auto____0.call(this);
case 1:
return cljs_draw$core$app_$_state_machine__1882__auto____1.call(this,state_63025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_draw$core$app_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_draw$core$app_$_state_machine__1882__auto____0;
cljs_draw$core$app_$_state_machine__1882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_draw$core$app_$_state_machine__1882__auto____1;
return cljs_draw$core$app_$_state_machine__1882__auto__;
})()
;})(switch__1881__auto__,c__1902__auto__,keydown,node,container,canvases,baked_canvas,recent_canvas,this$__$1))
})();
var state__1904__auto__ = (function (){var statearr_63050 = f__1903__auto__.call(null);
(statearr_63050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1902__auto__);

return statearr_63050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1904__auto__);
});})(c__1902__auto__,keydown,node,container,canvases,baked_canvas,recent_canvas,this$__$1))
);

return c__1902__auto__;
});

cljs_draw.core.t62910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62912){
var self__ = this;
var _62912__$1 = this;
return self__.meta62911;
});

cljs_draw.core.t62910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62912,meta62911__$1){
var self__ = this;
var _62912__$1 = this;
return (new cljs_draw.core.t62910(self__.owner,self__.data,self__.app,meta62911__$1));
});

cljs_draw.core.t62910.cljs$lang$type = true;

cljs_draw.core.t62910.cljs$lang$ctorStr = "cljs_draw.core/t62910";

cljs_draw.core.t62910.cljs$lang$ctorPrWriter = (function (this__3357__auto__,writer__3358__auto__,opt__3359__auto__){
return cljs.core._write.call(null,writer__3358__auto__,"cljs_draw.core/t62910");
});

cljs_draw.core.__GT_t62910 = (function cljs_draw$core$app_$___GT_t62910(owner__$1,data__$1,app__$1,meta62911){
return (new cljs_draw.core.t62910(owner__$1,data__$1,app__$1,meta62911));
});

}

return (new cljs_draw.core.t62910(owner,data,cljs_draw$core$app,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,cljs_draw.core.app,cljs_draw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("mount")], null));

//# sourceMappingURL=core.js.map