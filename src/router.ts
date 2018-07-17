import Vue from 'vue';
import Router from 'vue-router';

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
