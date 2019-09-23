import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueCarousel from 'vue-carousel'
import VueCookies from 'vue-cookies'
import store from './store'
import VuePlyr from 'vue-plyr'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VuePlyr)
Vue.use(VueCookies)
Vue.use(VueMaterial)
Vue.use(VueCarousel)

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  render: h => h(App)
})
