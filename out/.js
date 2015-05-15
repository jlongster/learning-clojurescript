// Compiled by ClojureScript 0.0-3126 {}
cljs.user.listen = (function cljs$user$listen(el,type){
var out = cljs.user.chan.call(null);
events.listen.call(null,el,type,((function (out){
return (function (e){
return cljs.user.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});

//# sourceMappingURL=.js.map