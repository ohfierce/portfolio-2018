import Vue from 'vue'
import App from './App.vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.use(BootstrapVue);
Vue.use(VueFullPage);

Vue.router = router

Vue.config.productionTip = false



new Vue({
  el: '#app',
  store,
  router,
  created() {
    AOS.init()
  },
  render: h => h(App)
});