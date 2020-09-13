import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import VueSweetalert2 from 'vue-sweetalert2'
=======
import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'
window.$ = window.jQuery = jQuery
>>>>>>> e5302511a44e9d465f065171fd74cb0046abc21e

Vue.use(VueSweetalert2)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
