import Vue from 'vue'
import Router from 'vue-router'

import HomeComp from '../components/basic/Home.vue';
import SearchComp from '../components/basic/Search.vue';
import LoginComp from '../views/Login.vue';
import RegisterComp from '../views/Register.vue';
import Reset1Comp from '../views/ResetPassPart1.vue';
import Reset2Comp from '../views/ResetPassPart2.vue';


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
    },
    {
      path: '/login',
      name: 'LoginComp',
      component: LoginComp,
    },
    {
      path: '/register',
      name: 'RegisterComp',
      component: RegisterComp,
    },
    {
      path: '/reset1',
      name: 'Reset1Comp',
      component: Reset1Comp,
    },
    {
      path: '/reset2',
      name: 'Reset2Comp',
      component: Reset2Comp,
    }
  ]
})


