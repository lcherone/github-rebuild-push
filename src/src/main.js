import '@babel/polyfill'

import Vue from 'vue'
import app from './app.vue'
import router from './router'

/* vendors */
import './plugins/bootstrap-jquery'

/* vue setup - hide warnings and debug */
Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
    Vue.config.devtools = false
    Vue.config.debug = false
    Vue.config.silent = true

    let console = {}
    console.log = function () {}
    console.error = function () {}
    window.console = console

    ;
    (function () {
        (function a() {
            try {
                (function b(i) {
                    if (('' + (i / i)).length !== 1 || i % 20 === 0)
                        (function () {}).constructor('debugger')()
                    else
                        debugger
                    b(++i)
                })(0)
            } catch (e) {
                setTimeout(a, Math.floor(Math.random() * (3000 - 500 + 1) + 500))
            }
        })()
    })()
} else {
    Vue.config.devtools = true
    Vue.config.debug = true
    Vue.config.silent = false
}

new Vue({
    el: '#app',
    router,
    render: h => h(app)
})
