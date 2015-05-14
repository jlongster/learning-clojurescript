(require 'cljs.repl)
(require 'cljs.closure)
(require 'cljs.repl.browser)
(require 'cljs.repl.node)

(defonce target (first *command-line-args*))
(defonce action (second *command-line-args*))

(defonce build (if (= action "watch")
                   cljs.closure/watch
                   cljs.closure/build))

(build "src/cljs_draw"
       {:main 'cljs-core.core
        :output-to "out/frontend.js"})

(if (= action "repl")
  (cljs.repl/repl (if (= target "server")
                    (cljs.repl.node/repl-env)
                    (cljs.repl.browser/repl-env))
                  :watch "src"
                  :output-dir "out"
                  :output-to "out/main.js"))

