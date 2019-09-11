import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueCarousel from 'vue-carousel';

Vue.use(VueMaterial)
Vue.use(VueCarousel);

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h(App)
})
