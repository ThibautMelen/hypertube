import Vue from 'vue'
import Router from 'vue-router'

import HomeComp from '../components/basic/Home.vue';
import SearchComp from '../components/basic/Search.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  props: ['userInfos'],
  routes: [
    {
      path: '/',
      name: 'HomeComp',
      component: HomeComp
    },
    {
      path: '/search',
      name: 'SearchComp',
      component: SearchComp,
    }
  ]
})


