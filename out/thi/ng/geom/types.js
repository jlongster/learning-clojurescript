// Compiled by ClojureScript 0.0-3291 {}
goog.provide('thi.ng.geom.types');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.vector');

/**
* @constructor
* @param {*} vertices
* @param {*} edges
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Graph = (function (vertices,edges,__meta,__extmap,__hash){
this.vertices = vertices;
this.edges = edges;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9680,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9682 = (((k9680 instanceof cljs.core.Keyword))?k9680.fqn:null);
switch (G__9682) {
case "vertices":
return self__.vertices;

break;
case "edges":
return self__.edges;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9680,else__5548__auto__);

}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9679){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9683 = cljs.core.keyword_identical_QMARK_;
var expr__9684 = k__5553__auto__;
if(cljs.core.truth_(pred__9683.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__9684))){
return (new thi.ng.geom.types.Graph(G__9679,self__.edges,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9683.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__9684))){
return (new thi.ng.geom.types.Graph(self__.vertices,G__9679,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9679),null));
}
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9679){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__9679,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Graph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"edges","edges",945740132,null)], null);
});

thi.ng.geom.types.Graph.cljs$lang$type = true;

thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.__GT_Graph = (function thi$ng$geom$types$__GT_Graph(vertices,edges){
return (new thi.ng.geom.types.Graph(vertices,edges,null,null,null));
});

thi.ng.geom.types.map__GT_Graph = (function thi$ng$geom$types$map__GT_Graph(G__9681){
return (new thi.ng.geom.types.Graph(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__9681),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__9681),null,cljs.core.dissoc.call(null,G__9681,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Bezier2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9688,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9690 = (((k9688 instanceof cljs.core.Keyword))?k9688.fqn:null);
switch (G__9690) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9688,else__5548__auto__);

}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9687){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9691 = cljs.core.keyword_identical_QMARK_;
var expr__9692 = k__5553__auto__;
if(cljs.core.truth_(pred__9691.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9692))){
return (new thi.ng.geom.types.Bezier2(G__9687,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9687),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9687){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,G__9687,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Bezier2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier2.cljs$lang$type = true;

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.__GT_Bezier2 = (function thi$ng$geom$types$__GT_Bezier2(points){
return (new thi.ng.geom.types.Bezier2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier2 = (function thi$ng$geom$types$map__GT_Bezier2(G__9689){
return (new thi.ng.geom.types.Bezier2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9689),null,cljs.core.dissoc.call(null,G__9689,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} r
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Circle2 = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9696,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9698 = (((k9696 instanceof cljs.core.Keyword))?k9696.fqn:null);
switch (G__9698) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9696,else__5548__auto__);

}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9695){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9699 = cljs.core.keyword_identical_QMARK_;
var expr__9700 = k__5553__auto__;
if(cljs.core.truth_(pred__9699.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__9700))){
return (new thi.ng.geom.types.Circle2(G__9695,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9699.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__9700))){
return (new thi.ng.geom.types.Circle2(self__.p,G__9695,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9695),null));
}
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9695){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__9695,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Circle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Circle2.cljs$lang$type = true;

thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.__GT_Circle2 = (function thi$ng$geom$types$__GT_Circle2(p,r){
return (new thi.ng.geom.types.Circle2(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Circle2 = (function thi$ng$geom$types$map__GT_Circle2(G__9697){
return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__9697),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__9697),null,cljs.core.dissoc.call(null,G__9697,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} rx
* @param {*} ry
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Ellipse2 = (function (p,rx,ry,__meta,__extmap,__hash){
this.p = p;
this.rx = rx;
this.ry = ry;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9704,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9706 = (((k9704 instanceof cljs.core.Keyword))?k9704.fqn:null);
switch (G__9706) {
case "p":
return self__.p;

break;
case "rx":
return self__.rx;

break;
case "ry":
return self__.ry;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9704,else__5548__auto__);

}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9703){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9707 = cljs.core.keyword_identical_QMARK_;
var expr__9708 = k__5553__auto__;
if(cljs.core.truth_(pred__9707.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__9708))){
return (new thi.ng.geom.types.Ellipse2(G__9703,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9707.call(null,new cljs.core.Keyword(null,"rx","rx",1627208482),expr__9708))){
return (new thi.ng.geom.types.Ellipse2(self__.p,G__9703,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9707.call(null,new cljs.core.Keyword(null,"ry","ry",-334598563),expr__9708))){
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__9703,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9703),null));
}
}
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9703){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__9703,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Ellipse2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null),new cljs.core.Symbol(null,"ry","ry",1305932964,null)], null);
});

thi.ng.geom.types.Ellipse2.cljs$lang$type = true;

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.__GT_Ellipse2 = (function thi$ng$geom$types$__GT_Ellipse2(p,rx,ry){
return (new thi.ng.geom.types.Ellipse2(p,rx,ry,null,null,null));
});

thi.ng.geom.types.map__GT_Ellipse2 = (function thi$ng$geom$types$map__GT_Ellipse2(G__9705){
return (new thi.ng.geom.types.Ellipse2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__9705),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(G__9705),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(G__9705),null,cljs.core.dissoc.call(null,G__9705,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Line2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9712,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9714 = (((k9712 instanceof cljs.core.Keyword))?k9712.fqn:null);
switch (G__9714) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9712,else__5548__auto__);

}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9711){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9715 = cljs.core.keyword_identical_QMARK_;
var expr__9716 = k__5553__auto__;
if(cljs.core.truth_(pred__9715.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9716))){
return (new thi.ng.geom.types.Line2(G__9711,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9711),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9711){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,G__9711,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Line2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line2.cljs$lang$type = true;

thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.__GT_Line2 = (function thi$ng$geom$types$__GT_Line2(points){
return (new thi.ng.geom.types.Line2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line2 = (function thi$ng$geom$types$map__GT_Line2(G__9713){
return (new thi.ng.geom.types.Line2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9713),null,cljs.core.dissoc.call(null,G__9713,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.LineStrip2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9720,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9722 = (((k9720 instanceof cljs.core.Keyword))?k9720.fqn:null);
switch (G__9722) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9720,else__5548__auto__);

}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9719){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9723 = cljs.core.keyword_identical_QMARK_;
var expr__9724 = k__5553__auto__;
if(cljs.core.truth_(pred__9723.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9724))){
return (new thi.ng.geom.types.LineStrip2(G__9719,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9719),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9719){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,G__9719,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.LineStrip2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip2.cljs$lang$type = true;

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.__GT_LineStrip2 = (function thi$ng$geom$types$__GT_LineStrip2(points){
return (new thi.ng.geom.types.LineStrip2(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip2 = (function thi$ng$geom$types$map__GT_LineStrip2(G__9721){
return (new thi.ng.geom.types.LineStrip2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9721),null,cljs.core.dissoc.call(null,G__9721,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Mesh2 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9728,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9730 = (((k9728 instanceof cljs.core.Keyword))?k9728.fqn:null);
switch (G__9730) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9728,else__5548__auto__);

}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9727){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9731 = cljs.core.keyword_identical_QMARK_;
var expr__9732 = k__5553__auto__;
if(cljs.core.truth_(pred__9731.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__9732))){
return (new thi.ng.geom.types.Mesh2(G__9727,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9731.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__9732))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,G__9727,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9731.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__9732))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__9727,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9731.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__9732))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__9727,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9731.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__9732))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__9727,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9731.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__9732))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__9727,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9731.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__9732))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__9727,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9727),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9727){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__9727,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Mesh2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.Mesh2.cljs$lang$type = true;

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.__GT_Mesh2 = (function thi$ng$geom$types$__GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh2 = (function thi$ng$geom$types$map__GT_Mesh2(G__9729){
return (new thi.ng.geom.types.Mesh2(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__9729),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__9729),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__9729),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__9729),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__9729),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__9729),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__9729),null,cljs.core.dissoc.call(null,G__9729,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
* @param {*} segments
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Path2 = (function (segments,__meta,__extmap,__hash){
this.segments = segments;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9736,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9738 = (((k9736 instanceof cljs.core.Keyword))?k9736.fqn:null);
switch (G__9738) {
case "segments":
return self__.segments;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9736,else__5548__auto__);

}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9735){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9739 = cljs.core.keyword_identical_QMARK_;
var expr__9740 = k__5553__auto__;
if(cljs.core.truth_(pred__9739.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949),expr__9740))){
return (new thi.ng.geom.types.Path2(G__9735,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9735),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9735){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,G__9735,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Path2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"segments","segments",-716899820,null)], null);
});

thi.ng.geom.types.Path2.cljs$lang$type = true;

thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.__GT_Path2 = (function thi$ng$geom$types$__GT_Path2(segments){
return (new thi.ng.geom.types.Path2(segments,null,null,null));
});

thi.ng.geom.types.map__GT_Path2 = (function thi$ng$geom$types$map__GT_Path2(G__9737){
return (new thi.ng.geom.types.Path2(new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(G__9737),null,cljs.core.dissoc.call(null,G__9737,new cljs.core.Keyword(null,"segments","segments",1937535949)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Polygon2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9744,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9746 = (((k9744 instanceof cljs.core.Keyword))?k9744.fqn:null);
switch (G__9746) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9744,else__5548__auto__);

}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9743){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9747 = cljs.core.keyword_identical_QMARK_;
var expr__9748 = k__5553__auto__;
if(cljs.core.truth_(pred__9747.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9748))){
return (new thi.ng.geom.types.Polygon2(G__9743,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9743),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9743){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,G__9743,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Polygon2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Polygon2.cljs$lang$type = true;

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.__GT_Polygon2 = (function thi$ng$geom$types$__GT_Polygon2(points){
return (new thi.ng.geom.types.Polygon2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Polygon2 = (function thi$ng$geom$types$map__GT_Polygon2(G__9745){
return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9745),null,cljs.core.dissoc.call(null,G__9745,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} size
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Rect2 = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9752,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9754 = (((k9752 instanceof cljs.core.Keyword))?k9752.fqn:null);
switch (G__9754) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9752,else__5548__auto__);

}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9751){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9755 = cljs.core.keyword_identical_QMARK_;
var expr__9756 = k__5553__auto__;
if(cljs.core.truth_(pred__9755.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__9756))){
return (new thi.ng.geom.types.Rect2(G__9751,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9755.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__9756))){
return (new thi.ng.geom.types.Rect2(self__.p,G__9751,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9751),null));
}
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9751){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__9751,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Rect2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.Rect2.cljs$lang$type = true;

thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.__GT_Rect2 = (function thi$ng$geom$types$__GT_Rect2(p,size){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_Rect2 = (function thi$ng$geom$types$map__GT_Rect2(G__9753){
return (new thi.ng.geom.types.Rect2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__9753),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__9753),null,cljs.core.dissoc.call(null,G__9753,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Triangle2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9760,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9762 = (((k9760 instanceof cljs.core.Keyword))?k9760.fqn:null);
switch (G__9762) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9760,else__5548__auto__);

}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9759){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9763 = cljs.core.keyword_identical_QMARK_;
var expr__9764 = k__5553__auto__;
if(cljs.core.truth_(pred__9763.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9764))){
return (new thi.ng.geom.types.Triangle2(G__9759,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9759),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9759){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,G__9759,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Triangle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle2.cljs$lang$type = true;

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.__GT_Triangle2 = (function thi$ng$geom$types$__GT_Triangle2(points){
return (new thi.ng.geom.types.Triangle2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle2 = (function thi$ng$geom$types$map__GT_Triangle2(G__9761){
return (new thi.ng.geom.types.Triangle2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9761),null,cljs.core.dissoc.call(null,G__9761,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} size
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.AABB = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9768,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9770 = (((k9768 instanceof cljs.core.Keyword))?k9768.fqn:null);
switch (G__9770) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9768,else__5548__auto__);

}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9767){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9771 = cljs.core.keyword_identical_QMARK_;
var expr__9772 = k__5553__auto__;
if(cljs.core.truth_(pred__9771.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__9772))){
return (new thi.ng.geom.types.AABB(G__9767,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9771.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__9772))){
return (new thi.ng.geom.types.AABB(self__.p,G__9767,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9767),null));
}
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9767){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__9767,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.AABB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.AABB.cljs$lang$type = true;

thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.__GT_AABB = (function thi$ng$geom$types$__GT_AABB(p,size){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_AABB = (function thi$ng$geom$types$map__GT_AABB(G__9769){
return (new thi.ng.geom.types.AABB(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__9769),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__9769),null,cljs.core.dissoc.call(null,G__9769,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Cuboid = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9776,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9778 = (((k9776 instanceof cljs.core.Keyword))?k9776.fqn:null);
switch (G__9778) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9776,else__5548__auto__);

}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9775){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9779 = cljs.core.keyword_identical_QMARK_;
var expr__9780 = k__5553__auto__;
if(cljs.core.truth_(pred__9779.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9780))){
return (new thi.ng.geom.types.Cuboid(G__9775,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9775),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9775){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,G__9775,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Cuboid.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Cuboid.cljs$lang$type = true;

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.__GT_Cuboid = (function thi$ng$geom$types$__GT_Cuboid(points){
return (new thi.ng.geom.types.Cuboid(points,null,null,null));
});

thi.ng.geom.types.map__GT_Cuboid = (function thi$ng$geom$types$map__GT_Cuboid(G__9777){
return (new thi.ng.geom.types.Cuboid(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9777),null,cljs.core.dissoc.call(null,G__9777,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Bezier3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9784,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9786 = (((k9784 instanceof cljs.core.Keyword))?k9784.fqn:null);
switch (G__9786) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9784,else__5548__auto__);

}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9783){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9787 = cljs.core.keyword_identical_QMARK_;
var expr__9788 = k__5553__auto__;
if(cljs.core.truth_(pred__9787.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9788))){
return (new thi.ng.geom.types.Bezier3(G__9783,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9783),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9783){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,G__9783,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Bezier3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier3.cljs$lang$type = true;

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.__GT_Bezier3 = (function thi$ng$geom$types$__GT_Bezier3(points){
return (new thi.ng.geom.types.Bezier3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier3 = (function thi$ng$geom$types$map__GT_Bezier3(G__9785){
return (new thi.ng.geom.types.Bezier3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9785),null,cljs.core.dissoc.call(null,G__9785,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} faces
* @param {*} fnormals
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.BasicMesh = (function (vertices,faces,fnormals,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.faces = faces;
this.fnormals = fnormals;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9792,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9794 = (((k9792 instanceof cljs.core.Keyword))?k9792.fqn:null);
switch (G__9794) {
case "vertices":
return self__.vertices;

break;
case "faces":
return self__.faces;

break;
case "fnormals":
return self__.fnormals;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9792,else__5548__auto__);

}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.BasicMesh{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9791){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9795 = cljs.core.keyword_identical_QMARK_;
var expr__9796 = k__5553__auto__;
if(cljs.core.truth_(pred__9795.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__9796))){
return (new thi.ng.geom.types.BasicMesh(G__9791,self__.faces,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9795.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__9796))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,G__9791,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9795.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__9796))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,G__9791,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9795.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__9796))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,G__9791,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9791),null));
}
}
}
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9791){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,G__9791,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.BasicMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.BasicMesh.cljs$lang$type = true;

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.__GT_BasicMesh = (function thi$ng$geom$types$__GT_BasicMesh(vertices,faces,fnormals,attribs){
return (new thi.ng.geom.types.BasicMesh(vertices,faces,fnormals,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_BasicMesh = (function thi$ng$geom$types$map__GT_BasicMesh(G__9793){
return (new thi.ng.geom.types.BasicMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__9793),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__9793),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__9793),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__9793),null,cljs.core.dissoc.call(null,G__9793,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.GMesh = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9800,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9802 = (((k9800 instanceof cljs.core.Keyword))?k9800.fqn:null);
switch (G__9802) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9800,else__5548__auto__);

}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9799){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9803 = cljs.core.keyword_identical_QMARK_;
var expr__9804 = k__5553__auto__;
if(cljs.core.truth_(pred__9803.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__9804))){
return (new thi.ng.geom.types.GMesh(G__9799,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9803.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__9804))){
return (new thi.ng.geom.types.GMesh(self__.vertices,G__9799,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9803.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__9804))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__9799,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9803.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__9804))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__9799,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9803.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__9804))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__9799,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9803.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__9804))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__9799,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9803.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__9804))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__9799,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9799),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9799){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__9799,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.GMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.GMesh.cljs$lang$type = true;

thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.__GT_GMesh = (function thi$ng$geom$types$__GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_GMesh = (function thi$ng$geom$types$map__GT_GMesh(G__9801){
return (new thi.ng.geom.types.GMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__9801),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__9801),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__9801),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__9801),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__9801),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__9801),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__9801),null,cljs.core.dissoc.call(null,G__9801,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Line3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9808,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9810 = (((k9808 instanceof cljs.core.Keyword))?k9808.fqn:null);
switch (G__9810) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9808,else__5548__auto__);

}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9807){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9811 = cljs.core.keyword_identical_QMARK_;
var expr__9812 = k__5553__auto__;
if(cljs.core.truth_(pred__9811.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9812))){
return (new thi.ng.geom.types.Line3(G__9807,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9807),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9807){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,G__9807,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Line3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line3.cljs$lang$type = true;

thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.__GT_Line3 = (function thi$ng$geom$types$__GT_Line3(points){
return (new thi.ng.geom.types.Line3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line3 = (function thi$ng$geom$types$map__GT_Line3(G__9809){
return (new thi.ng.geom.types.Line3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9809),null,cljs.core.dissoc.call(null,G__9809,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.LineStrip3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9816,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9818 = (((k9816 instanceof cljs.core.Keyword))?k9816.fqn:null);
switch (G__9818) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9816,else__5548__auto__);

}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9815){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9819 = cljs.core.keyword_identical_QMARK_;
var expr__9820 = k__5553__auto__;
if(cljs.core.truth_(pred__9819.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9820))){
return (new thi.ng.geom.types.LineStrip3(G__9815,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9815),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9815){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,G__9815,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.LineStrip3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip3.cljs$lang$type = true;

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.__GT_LineStrip3 = (function thi$ng$geom$types$__GT_LineStrip3(points){
return (new thi.ng.geom.types.LineStrip3(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip3 = (function thi$ng$geom$types$map__GT_LineStrip3(G__9817){
return (new thi.ng.geom.types.LineStrip3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9817),null,cljs.core.dissoc.call(null,G__9817,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Mesh3 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9824,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9826 = (((k9824 instanceof cljs.core.Keyword))?k9824.fqn:null);
switch (G__9826) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9824,else__5548__auto__);

}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Mesh3{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Mesh3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Mesh3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9823){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9827 = cljs.core.keyword_identical_QMARK_;
var expr__9828 = k__5553__auto__;
if(cljs.core.truth_(pred__9827.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__9828))){
return (new thi.ng.geom.types.Mesh3(G__9823,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9827.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__9828))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,G__9823,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9827.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__9828))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,G__9823,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9827.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__9828))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,G__9823,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9827.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__9828))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__9823,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9827.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__9828))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__9823,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9827.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__9828))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__9823,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9823),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9823){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__9823,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Mesh3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.Mesh3.cljs$lang$type = true;

thi.ng.geom.types.Mesh3.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh3");
});

thi.ng.geom.types.Mesh3.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Mesh3");
});

thi.ng.geom.types.__GT_Mesh3 = (function thi$ng$geom$types$__GT_Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh3 = (function thi$ng$geom$types$map__GT_Mesh3(G__9825){
return (new thi.ng.geom.types.Mesh3(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__9825),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__9825),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__9825),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__9825),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__9825),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__9825),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__9825),null,cljs.core.dissoc.call(null,G__9825,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
* @param {*} n
* @param {*} w
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Plane = (function (n,w,__meta,__extmap,__hash){
this.n = n;
this.w = w;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9832,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9834 = (((k9832 instanceof cljs.core.Keyword))?k9832.fqn:null);
switch (G__9834) {
case "n":
return self__.n;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9832,else__5548__auto__);

}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9831){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9835 = cljs.core.keyword_identical_QMARK_;
var expr__9836 = k__5553__auto__;
if(cljs.core.truth_(pred__9835.call(null,new cljs.core.Keyword(null,"n","n",562130025),expr__9836))){
return (new thi.ng.geom.types.Plane(G__9831,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9835.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__9836))){
return (new thi.ng.geom.types.Plane(self__.n,G__9831,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9831),null));
}
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9831){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__9831,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Plane.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null);
});

thi.ng.geom.types.Plane.cljs$lang$type = true;

thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.__GT_Plane = (function thi$ng$geom$types$__GT_Plane(n,w){
return (new thi.ng.geom.types.Plane(n,w,null,null,null));
});

thi.ng.geom.types.map__GT_Plane = (function thi$ng$geom$types$map__GT_Plane(G__9833){
return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(G__9833),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__9833),null,cljs.core.dissoc.call(null,G__9833,new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Quad3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9840,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9842 = (((k9840 instanceof cljs.core.Keyword))?k9840.fqn:null);
switch (G__9842) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9840,else__5548__auto__);

}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9839){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9843 = cljs.core.keyword_identical_QMARK_;
var expr__9844 = k__5553__auto__;
if(cljs.core.truth_(pred__9843.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9844))){
return (new thi.ng.geom.types.Quad3(G__9839,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9839),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9839){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,G__9839,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Quad3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Quad3.cljs$lang$type = true;

thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.__GT_Quad3 = (function thi$ng$geom$types$__GT_Quad3(points){
return (new thi.ng.geom.types.Quad3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Quad3 = (function thi$ng$geom$types$map__GT_Quad3(G__9841){
return (new thi.ng.geom.types.Quad3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9841),null,cljs.core.dissoc.call(null,G__9841,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} r
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Sphere = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9848,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9850 = (((k9848 instanceof cljs.core.Keyword))?k9848.fqn:null);
switch (G__9850) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9848,else__5548__auto__);

}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9847){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9851 = cljs.core.keyword_identical_QMARK_;
var expr__9852 = k__5553__auto__;
if(cljs.core.truth_(pred__9851.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__9852))){
return (new thi.ng.geom.types.Sphere(G__9847,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9851.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__9852))){
return (new thi.ng.geom.types.Sphere(self__.p,G__9847,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9847),null));
}
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9847){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__9847,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Sphere.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Sphere.cljs$lang$type = true;

thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.__GT_Sphere = (function thi$ng$geom$types$__GT_Sphere(p,r){
return (new thi.ng.geom.types.Sphere(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Sphere = (function thi$ng$geom$types$map__GT_Sphere(G__9849){
return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__9849),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__9849),null,cljs.core.dissoc.call(null,G__9849,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Tetrahedron = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9856,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9858 = (((k9856 instanceof cljs.core.Keyword))?k9856.fqn:null);
switch (G__9858) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9856,else__5548__auto__);

}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9855){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9859 = cljs.core.keyword_identical_QMARK_;
var expr__9860 = k__5553__auto__;
if(cljs.core.truth_(pred__9859.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9860))){
return (new thi.ng.geom.types.Tetrahedron(G__9855,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9855),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9855){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,G__9855,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Tetrahedron.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.__GT_Tetrahedron = (function thi$ng$geom$types$__GT_Tetrahedron(points){
return (new thi.ng.geom.types.Tetrahedron(points,null,null,null));
});

thi.ng.geom.types.map__GT_Tetrahedron = (function thi$ng$geom$types$map__GT_Tetrahedron(G__9857){
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9857),null,cljs.core.dissoc.call(null,G__9857,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Triangle3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5545__auto__,k__5546__auto__){
var self__ = this;
var this__5545__auto____$1 = this;
return cljs.core._lookup.call(null,this__5545__auto____$1,k__5546__auto__,null);
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5547__auto__,k9864,else__5548__auto__){
var self__ = this;
var this__5547__auto____$1 = this;
var G__9866 = (((k9864 instanceof cljs.core.Keyword))?k9864.fqn:null);
switch (G__9866) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9864,else__5548__auto__);

}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5559__auto__,writer__5560__auto__,opts__5561__auto__){
var self__ = this;
var this__5559__auto____$1 = this;
var pr_pair__5562__auto__ = ((function (this__5559__auto____$1){
return (function (keyval__5563__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,cljs.core.pr_writer,""," ","",opts__5561__auto__,keyval__5563__auto__);
});})(this__5559__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5560__auto__,pr_pair__5562__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__5561__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5543__auto__){
var self__ = this;
var this__5543__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5539__auto__){
var self__ = this;
var this__5539__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5549__auto__){
var self__ = this;
var this__5549__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5540__auto__){
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5541__auto__,other__5542__auto__){
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5554__auto__,k__5555__auto__){
var self__ = this;
var this__5554__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__5555__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5554__auto____$1),self__.__meta),k__5555__auto__);
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5555__auto__)),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5552__auto__,k__5553__auto__,G__9863){
var self__ = this;
var this__5552__auto____$1 = this;
var pred__9867 = cljs.core.keyword_identical_QMARK_;
var expr__9868 = k__5553__auto__;
if(cljs.core.truth_(pred__9867.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__9868))){
return (new thi.ng.geom.types.Triangle3(G__9863,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5553__auto__,G__9863),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5557__auto__){
var self__ = this;
var this__5557__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5544__auto__,G__9863){
var self__ = this;
var this__5544__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,G__9863,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5550__auto__,entry__5551__auto__){
var self__ = this;
var this__5550__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5551__auto__)){
return cljs.core._assoc.call(null,this__5550__auto____$1,cljs.core._nth.call(null,entry__5551__auto__,(0)),cljs.core._nth.call(null,entry__5551__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5550__auto____$1,entry__5551__auto__);
}
});

thi.ng.geom.types.Triangle3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle3.cljs$lang$type = true;

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__5579__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__5579__auto__,writer__5580__auto__){
return cljs.core._write.call(null,writer__5580__auto__,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.__GT_Triangle3 = (function thi$ng$geom$types$__GT_Triangle3(points){
return (new thi.ng.geom.types.Triangle3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle3 = (function thi$ng$geom$types$map__GT_Triangle3(G__9865){
return (new thi.ng.geom.types.Triangle3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__9865),null,cljs.core.dissoc.call(null,G__9865,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


//# sourceMappingURL=types.js.map