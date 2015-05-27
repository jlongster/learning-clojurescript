// Compiled by ClojureScript 0.0-3291 {}
goog.provide('gamma_driver.drivers.basic');
goog.require('cljs.core');
goog.require('gamma_driver.api');
goog.require('gamma_driver.protocols');
gamma_driver.drivers.basic.produce = (function gamma_driver$drivers$basic$produce(driver,constructor_fn,spec){
var map__19339 = driver;
var map__19339__$1 = ((cljs.core.seq_QMARK_.call(null,map__19339))?cljs.core.apply.call(null,cljs.core.hash_map,map__19339):map__19339);
var gl = cljs.core.get.call(null,map__19339__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var resource_state = cljs.core.get.call(null,map__19339__$1,new cljs.core.Keyword(null,"resource-state","resource-state",129710456));
var mapping_fn = cljs.core.get.call(null,map__19339__$1,new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410));
var k = mapping_fn.call(null,spec);
var spec__$1 = (function (){var temp__4420__auto__ = cljs.core.deref.call(null,resource_state).call(null,k);
if(cljs.core.truth_(temp__4420__auto__)){
var x = temp__4420__auto__;
return cljs.core.merge.call(null,x,spec);
} else {
return spec;
}
})();
var val = constructor_fn.call(null,gamma_driver.api.gl.call(null,driver),spec__$1);
cljs.core.swap_BANG_.call(null,resource_state,cljs.core.assoc,k,val);

return val;
});
gamma_driver.drivers.basic.default_input_fn = (function gamma_driver$drivers$basic$default_input_fn(driver,program,input_binder,variable,spec){
var map__19341 = driver;
var map__19341__$1 = ((cljs.core.seq_QMARK_.call(null,map__19341))?cljs.core.apply.call(null,cljs.core.hash_map,map__19341):map__19341);
var input_state = cljs.core.get.call(null,map__19341__$1,new cljs.core.Keyword(null,"input-state","input-state",-2018653626));
var gl = cljs.core.get.call(null,map__19341__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var i = input_binder.call(null,gl,program,variable,spec);
cljs.core.swap_BANG_.call(null,input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [program,variable], null),spec);

return i;
});
gamma_driver.drivers.basic.program_inputs_state = (function gamma_driver$drivers$basic$program_inputs_state(driver,program){
var s = cljs.core.deref.call(null,new cljs.core.Keyword(null,"input-state","input-state",-2018653626).cljs$core$IFn$_invoke$arity$1(driver)).call(null,program);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s){
return (function (p1__19342_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__19342_SHARP_,s.call(null,p1__19342_SHARP_)],null));
});})(s))
,new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(program)));
});
gamma_driver.drivers.basic.input_complete_QMARK_ = (function gamma_driver$drivers$basic$input_complete_QMARK_(driver,program){
var state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"input-state","input-state",-2018653626).cljs$core$IFn$_invoke$arity$1(driver)).call(null,program);
var inputs = new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(program);
return cljs.core.not_any_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,state,inputs));
});
gamma_driver.drivers.basic.draw_count = (function gamma_driver$drivers$basic$draw_count(driver,program){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (p__19345){
var vec__19346 = p__19345;
var k = cljs.core.nth.call(null,vec__19346,(0),null);
var v = cljs.core.nth.call(null,vec__19346,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"storage","storage",1867247511).cljs$core$IFn$_invoke$arity$1(k))){
return new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(v);
} else {
return null;
}
}),cljs.core.deref.call(null,new cljs.core.Keyword(null,"input-state","input-state",-2018653626).cljs$core$IFn$_invoke$arity$1(driver)).call(null,program)));
});
gamma_driver.drivers.basic.draw_arrays_STAR_ = (function gamma_driver$drivers$basic$draw_arrays_STAR_(){
var G__19348 = arguments.length;
switch (G__19348) {
case 3:
return gamma_driver.drivers.basic.draw_arrays_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gamma_driver.drivers.basic.draw_arrays_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gamma_driver.drivers.basic.draw_arrays_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (driver,program,opts){
return gamma_driver.drivers.basic.draw_arrays_STAR_.call(null,driver,program,opts,null);
});

gamma_driver.drivers.basic.draw_arrays_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (driver,program,opts,target){
if(cljs.core.not.call(null,gamma_driver.drivers.basic.input_complete_QMARK_.call(null,driver,program))){
throw (new Error("Program inputs are incomplete."));
} else {
return gamma_driver.api.draw_arrays.call(null,gamma_driver.protocols.gl.call(null,driver),program,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794).cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"triangles","triangles",-1525417058)),new cljs.core.Keyword(null,"first","first",-644103046),(0),new cljs.core.Keyword(null,"count","count",2139924085),gamma_driver.drivers.basic.draw_count.call(null,driver,program)], null),target);
}
});

gamma_driver.drivers.basic.draw_arrays_STAR_.cljs$lang$maxFixedArity = 4;
gamma_driver.drivers.basic.draw_elements_STAR_ = (function gamma_driver$drivers$basic$draw_elements_STAR_(){
var G__19351 = arguments.length;
switch (G__19351) {
case 3:
return gamma_driver.drivers.basic.draw_elements_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gamma_driver.drivers.basic.draw_elements_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gamma_driver.drivers.basic.draw_elements_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (driver,program,opts){
return gamma_driver.drivers.basic.draw_elements_STAR_.call(null,driver,program,opts,null);
});

gamma_driver.drivers.basic.draw_elements_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (driver,program,opts,target){
if(cljs.core.not.call(null,gamma_driver.drivers.basic.input_complete_QMARK_.call(null,driver,program))){
throw (new Error("Program inputs are incomplete."));
} else {
return gamma_driver.api.draw_elements.call(null,gamma_driver.protocols.gl.call(null,driver),program,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794).cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"triangles","triangles",-1525417058)),new cljs.core.Keyword(null,"first","first",-644103046),(0),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"unsigned-short","unsigned-short",-1572039401),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(opts)], null),target);
}
});

gamma_driver.drivers.basic.draw_elements_STAR_.cljs$lang$maxFixedArity = 4;

/**
* @constructor
* @param {*} gl
* @param {*} resource_state
* @param {*} mapping_fn
* @param {*} input_state
* @param {*} input_fn
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
gamma_driver.drivers.basic.BasicDriver = (function (gl,resource_state,mapping_fn,input_state,input_fn,__meta,__extmap,__hash){
this.gl = gl;
this.resource_state = resource_state;
this.mapping_fn = mapping_fn;
this.input_state = input_state;
this.input_fn = input_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k19354,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__19356 = (((k19354 instanceof cljs.core.Keyword))?k19354.fqn:null);
switch (G__19356) {
case "gl":
return self__.gl;

break;
case "resource-state":
return self__.resource_state;

break;
case "mapping-fn":
return self__.mapping_fn;

break;
case "input-state":
return self__.input_state;

break;
case "input-fn":
return self__.input_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19354,else__5548__auto__);

}
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IBindVariable$ = true;

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IBindVariable$bind_attribute$arity$4 = (function (this$,program,attribute,input){
var self__ = this;
var this$__$1 = this;
return self__.input_fn.call(null,this$__$1,program,gamma_driver.api.bind_attribute,attribute,input);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IBindVariable$bind_texture_uniform$arity$4 = (function (this$,program,uniform,input){
var self__ = this;
var this$__$1 = this;
return self__.input_fn.call(null,this$__$1,program,gamma_driver.api.bind_texture_uniform,uniform,input);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IBindVariable$bind_uniform$arity$4 = (function (this$,program,uniform,input){
var self__ = this;
var this$__$1 = this;
return self__.input_fn.call(null,this$__$1,program,gamma_driver.api.bind_uniform,uniform,input);
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#gamma-driver.drivers.basic.BasicDriver{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resource-state","resource-state",129710456),self__.resource_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410),self__.mapping_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-state","input-state",-2018653626),self__.input_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-fn","input-fn",-1154229510),self__.input_fn],null))], null),self__.__extmap));
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new gamma_driver.drivers.basic.BasicDriver(self__.gl,self__.resource_state,self__.mapping_fn,self__.input_state,self__.input_fn,self__.__meta,self__.__extmap,self__.__hash));
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
var self__ = this;
var this__5540__auto____$1 = this;
var h__5366__auto__ = self__.__hash;
if(!((h__5366__auto__ == null))){
return h__5366__auto__;
} else {
var h__5366__auto____$1 = cljs.core.hash_imap.call(null,this__5540__auto____$1);
self__.__hash = h__5366__auto____$1;

return h__5366__auto____$1;
}
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IDraw$ = true;

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IDraw$draw_arrays$arity$3 = (function (this$,program,spec){
var self__ = this;
var this$__$1 = this;
return gamma_driver.drivers.basic.draw_arrays_STAR_.call(null,this$__$1,program,spec);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IDraw$draw_arrays$arity$4 = (function (this$,program,spec,target){
var self__ = this;
var this$__$1 = this;
return gamma_driver.drivers.basic.draw_arrays_STAR_.call(null,this$__$1,program,spec,target);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IDraw$draw_elements$arity$3 = (function (this$,program,spec){
var self__ = this;
var this$__$1 = this;
return gamma_driver.drivers.basic.draw_elements_STAR_.call(null,this$__$1,program,spec);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IDraw$draw_elements$arity$4 = (function (this$,program,spec,target){
var self__ = this;
var this$__$1 = this;
return gamma_driver.drivers.basic.draw_elements_STAR_.call(null,this$__$1,program,spec,target);
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
var self__ = this;
var this__5541__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4938__auto__ = other__5542__auto__;
if(cljs.core.truth_(and__4938__auto__)){
var and__4938__auto____$1 = (this__5541__auto____$1.constructor === other__5542__auto__.constructor);
if(and__4938__auto____$1){
return cljs.core.equiv_map.call(null,this__5541__auto____$1,other__5542__auto__);
} else {
return and__4938__auto____$1;
}
} else {
return and__4938__auto__;
}
})())){
return true;
} else {
return false;
}
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IResource$ = true;

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IResource$program$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
return gamma_driver.api.program.call(null,self__.gl,spec);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IResource$array_buffer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
return gamma_driver.drivers.basic.produce.call(null,this$__$1,gamma_driver.api.array_buffer,spec);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IResource$element_array_buffer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
return gamma_driver.drivers.basic.produce.call(null,this$__$1,gamma_driver.api.element_array_buffer,spec);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IResource$texture$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
return gamma_driver.drivers.basic.produce.call(null,this$__$1,gamma_driver.api.texture,spec);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IResource$frame_buffer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
return gamma_driver.drivers.basic.produce.call(null,this$__$1,gamma_driver.api.frame_buffer,spec);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IResource$render_buffer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
return gamma_driver.drivers.basic.produce.call(null,this$__$1,gamma_driver.api.render_buffer,spec);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IResource$release$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
var k = self__.mapping_fn.call(null,spec);
gamma_driver.api.release.call(null,self__.gl,spec);

return cljs.core.swap_BANG_.call(null,self__.resource_state,cljs.core.dissoc,k);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IContext$ = true;

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IContext$configure$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
return gamma_driver.api.configure.call(null,self__.gl,spec);
});

gamma_driver.drivers.basic.BasicDriver.prototype.gamma_driver$protocols$IContext$gl$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.gl;
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"input-state","input-state",-2018653626),null,new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410),null,new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"resource-state","resource-state",129710456),null,new cljs.core.Keyword(null,"input-fn","input-fn",-1154229510),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new gamma_driver.drivers.basic.BasicDriver(self__.gl,self__.resource_state,self__.mapping_fn,self__.input_state,self__.input_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__19353){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__19357 = cljs.core.keyword_identical_QMARK_;
var expr__19358 = k__5553__auto__;
if(cljs.core.truth_(pred__19357.call(null,new cljs.core.Keyword(null,"gl","gl",-246422634),expr__19358))){
return (new gamma_driver.drivers.basic.BasicDriver(G__19353,self__.resource_state,self__.mapping_fn,self__.input_state,self__.input_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19357.call(null,new cljs.core.Keyword(null,"resource-state","resource-state",129710456),expr__19358))){
return (new gamma_driver.drivers.basic.BasicDriver(self__.gl,G__19353,self__.mapping_fn,self__.input_state,self__.input_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19357.call(null,new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410),expr__19358))){
return (new gamma_driver.drivers.basic.BasicDriver(self__.gl,self__.resource_state,G__19353,self__.input_state,self__.input_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19357.call(null,new cljs.core.Keyword(null,"input-state","input-state",-2018653626),expr__19358))){
return (new gamma_driver.drivers.basic.BasicDriver(self__.gl,self__.resource_state,self__.mapping_fn,G__19353,self__.input_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19357.call(null,new cljs.core.Keyword(null,"input-fn","input-fn",-1154229510),expr__19358))){
return (new gamma_driver.drivers.basic.BasicDriver(self__.gl,self__.resource_state,self__.mapping_fn,self__.input_state,G__19353,self__.__meta,self__.__extmap,null));
} else {
return (new gamma_driver.drivers.basic.BasicDriver(self__.gl,self__.resource_state,self__.mapping_fn,self__.input_state,self__.input_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__19353),null));
}
}
}
}
}
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resource-state","resource-state",129710456),self__.resource_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410),self__.mapping_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-state","input-state",-2018653626),self__.input_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-fn","input-fn",-1154229510),self__.input_fn],null))], null),self__.__extmap));
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__19353){
var self__ = this;
var this__5544__auto____$1 = this;
return (new gamma_driver.drivers.basic.BasicDriver(self__.gl,self__.resource_state,self__.mapping_fn,self__.input_state,self__.input_fn,G__19353,self__.__extmap,self__.__hash));
});

gamma_driver.drivers.basic.BasicDriver.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

gamma_driver.drivers.basic.BasicDriver.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gl","gl",1394108893,null),new cljs.core.Symbol(null,"resource-state","resource-state",1770241983,null),new cljs.core.Symbol(null,"mapping-fn","mapping-fn",-1530189359,null),new cljs.core.Symbol(null,"input-state","input-state",-378122099,null),new cljs.core.Symbol(null,"input-fn","input-fn",486302017,null)], null);
});

gamma_driver.drivers.basic.BasicDriver.cljs$lang$type = true;

gamma_driver.drivers.basic.BasicDriver.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"gamma-driver.drivers.basic/BasicDriver");
});

gamma_driver.drivers.basic.BasicDriver.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"gamma-driver.drivers.basic/BasicDriver");
});

gamma_driver.drivers.basic.__GT_BasicDriver = (function gamma_driver$drivers$basic$__GT_BasicDriver(gl,resource_state,mapping_fn,input_state,input_fn){
return (new gamma_driver.drivers.basic.BasicDriver(gl,resource_state,mapping_fn,input_state,input_fn,null,null,null));
});

gamma_driver.drivers.basic.map__GT_BasicDriver = (function gamma_driver$drivers$basic$map__GT_BasicDriver(G__19355){
return (new gamma_driver.drivers.basic.BasicDriver(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(G__19355),new cljs.core.Keyword(null,"resource-state","resource-state",129710456).cljs$core$IFn$_invoke$arity$1(G__19355),new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410).cljs$core$IFn$_invoke$arity$1(G__19355),new cljs.core.Keyword(null,"input-state","input-state",-2018653626).cljs$core$IFn$_invoke$arity$1(G__19355),new cljs.core.Keyword(null,"input-fn","input-fn",-1154229510).cljs$core$IFn$_invoke$arity$1(G__19355),null,cljs.core.dissoc.call(null,G__19355,new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"resource-state","resource-state",129710456),new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410),new cljs.core.Keyword(null,"input-state","input-state",-2018653626),new cljs.core.Keyword(null,"input-fn","input-fn",-1154229510)),null));
});

gamma_driver.drivers.basic.basic_driver = (function gamma_driver$drivers$basic$basic_driver(gl){
return (new gamma_driver.drivers.basic.BasicDriver(gl,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),(function (x){
var or__4950__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__4950__auto__)){
return or__4950__auto__;
} else {
var or__4950__auto____$1 = new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__4950__auto____$1)){
return or__4950__auto____$1;
} else {
return x;
}
}
}),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),gamma_driver.drivers.basic.default_input_fn,null,null,null));
});

//# sourceMappingURL=basic.js.map