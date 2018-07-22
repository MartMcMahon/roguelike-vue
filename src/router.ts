import Vue from 'vue';
import Router from 'vue-router';

// auth stuff
import Login from './components/auth/login.vue'
import Signup from './components/auth/signup.vue'

import Home from './components/Home.vue'
import Profile from './components/User/Profile.vue'
import Board from './components/board/board.vue'

Vue.use(Router);

export default new Router({
  routes: [
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
    },
  ],
  mode: 'history',
});
