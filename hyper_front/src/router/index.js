// Dependency
import Vue from 'vue'
import Router from 'vue-router'

// No connected VIEWS
import LoginComp from '../views/Login.vue';
import RegisterComp from '../views/Register.vue';
import Reset1Comp from '../views/ResetPassPart1.vue';
import Reset2Comp from '../views/ResetPassPart2.vue';

//Connected VIEWS
import HomeComp from '../views/Home.vue';



Vue.use(Router)

export default new Router({
  mode: 'history',
  props: ['userInfos'],
  routes: [
    
    // No connected VIEWS\
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
    },

    //Connected VIEWS
    {
      path: '/',
      name: 'HomeComp',
      component: HomeComp
    },
  ]
})


