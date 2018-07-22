import Vue from 'vue';
import Router from 'vue-router';

// auth stuff
import Login from './components/auth/login.vue'
import Signup from './components/auth/signup.vue'
import Logout from './components/auth/logout.vue'
import firebase from 'firebase'

import Home from './components/Home.vue'
import Profile from './components/User/Profile.vue'
import Board from './components/board/board.vue'

Vue.use(Router);

const router =  new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/map',
      name: 'map',
      component: Board,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    // },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    },
  ],
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('login')
  } else {
    next()
  }
})

export default router;
