// Dependency
import Vue from 'vue'
import Router from 'vue-router'

// AUTH VIEW
import LoginComp from '../views/Login.vue';
import RegisterComp from '../views/Register.vue';
import Reset1Comp from '../views/ResetPassPart1.vue';
import Reset2Comp from '../views/ResetPassPart2.vue';

//MAIN VIEWS
import HomeComp from '../views/Home.vue';
import PlayerComp from '../views/Player.vue';
import ProfileComp from '../views/Profile.vue';
import SettingsComp from '../views/Settings.vue';

//404 VIEWS
import PageNotFound from '../views/PageNotFound.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  props: ['userInfos'],
  routes: [
    
    // AUTH VIEWS
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

    //MAIN VIEWS
    {
      path: '/',
      name: 'HomeComp',
      component: HomeComp
    },
    {
      path: '/player/:id',
      name: 'PlayerComp',
      component: PlayerComp
    },
    {
      path: '/profile/:id',
      name: 'ProfileComp',
      component: ProfileComp
    },
    {
      path: '/settings',
      name: 'SettingsComp',
      component: SettingsComp
    },

    //404 VIEWS
    {
      path: "*",
      name: 'PageNotFound',
      component: PageNotFound }
  ]
})


