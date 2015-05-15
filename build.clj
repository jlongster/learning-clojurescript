(require 'cljs.repl)
(require 'cljs.closure)
(require 'cljs.repl.browser)
(require 'cljs.repl.node)

(defonce action (first *command-line-args*))

(defonce build (if (= action "watch")
                   cljs.closure/watch
                   cljs.closure/build))

(build "01-pressure-draw/cljs_draw"
       {:main 'cljs_draw.core
        :output-to "out/frontend.js"})

(if (= action "repl")
  (cljs.repl/repl (cljs.repl.browser/repl-env)
                  :watch "01-pressure-draw"
                  :output-dir "out"
                  :output-to "out/main.js"))
