var path = require("path");
try {
    require("source-map-support").install();
} catch(err) {
}
require(path.join(path.resolve("."),"out","goog","bootstrap","nodejs.js"));
require(path.join(path.resolve("."),"out","cljs_deps.js"));
goog.require("galleon_server.core");
goog.require("cljs.nodejscli");
