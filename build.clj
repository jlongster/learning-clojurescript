(require 'cljs.repl)
(require 'cljs.build.api)
(require 'cljs.repl.browser)
(require 'cljs.repl.node)

(defonce action (first *command-line-args*))

(defonce build (if (= action "watch")
                   cljs.build.api/watch
                   cljs.build.api/build))

(build "01-pressure-draw/cljs_draw"
       {:main 'cljs_draw.core
        :output-to "out/frontend.js"})

(if (= action "repl")
  (cljs.repl/repl (cljs.repl.browser/repl-env)
                  :watch "01-pressure-draw"
                  :output-dir "out"
                  :output-to "out/main.js"))
