// Dependency
import Vue from 'vue'
import Router from 'vue-router'
import VueCookies from 'vue-cookies'
import axios from 'axios'

//store
import store from '../store'

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

const router = new Router({
  mode: 'history',
  props: ['userInfos'],
  routes: [
    
    // AUTH VIEWS
    {
      path: '/login',
      name: 'LoginComp',
      component: LoginComp
    },
    {
      path: '/register',
      name: 'RegisterComp',
      component: RegisterComp,
      tet: 42
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
      component: PageNotFound
    }
  ]
})

const loggedRoutes = ['HomeComp', 'PlayerComp', 'ProfileComp', 'SettingsComp']

const unloggedRoutes = ['LoginComp', 'RegisterComp', 'Reset1Comp', 'Reset2Comp']

router.beforeEach(async (to, from, next) => {
  if (store.state.loading) {
    const token = VueCookies.get('user_token')

    if (token) {
      try {
        let res = await axios.get('http://localhost:3000/users/verify', {withCredentials: true})

        console.log(res)
        if (res.data.userInfos) {
          store.commit('SET_USER', res.data.userInfos)
          store.commit('SET_LOADING', false)
        }
        else {
          store.commit('SET_USER', null)
          store.commit('SET_LOADING', false)
          VueCookies.remove('user_token')
        }
      }
      catch(err) {
        console.log(err)
        store.commit('SET_USER', null)
        store.commit('SET_LOADING', false)
        VueCookies.remove('user_token')
      }
    }
    else {
      store.commit('SET_USER', null)
      store.commit('SET_LOADING', false)
    }
  }

  if (!store.state.user && loggedRoutes.includes(to.name)) {
    next('/login')
  }
  else if (store.state.user && unloggedRoutes.includes(to.name)) {
    next('/')
  }

  next()
})

export default router