import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueCarousel from 'vue-carousel';

// In your main vue file - the one where you create the initial vue instance.
import VuePlyr from 'vue-plyr'

Vue.use(VuePlyr)

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
