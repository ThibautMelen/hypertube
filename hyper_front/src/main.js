import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueCarousel from 'vue-carousel'
import VueCookies from 'vue-cookies'
import store from './store'
import VuePlyr from 'vue-plyr'
import i18n from './i18n' //Trad

Vue.use(VueMaterial)
Vue.use(VuePlyr)
Vue.use(VueCookies)
Vue.use(VueMaterial)
Vue.use(VueCarousel)
Vue.use(VueCarousel)

// use beforeEach route guard to set the language
// router.beforeEach((to, from, next) => {

//   // use the language from the routing param or default language
//   let language = to.params.lang;
//   if (!language) {
//     language = 'en'
//   } 

//   // set the current language for i18n.
//   i18n.locale = language
//   next()
// })

new Vue({
  el: '#app',
  store,
  router,

  components: {
    App
  },

  i18n,
  render: h => h(App)
})
