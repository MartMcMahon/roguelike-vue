import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import About from './views/About.vue';


import Home from './components/Home'
// import Meetups from '@/components/Meetup/Meetups'
// import CreateMeetup from '@/components/Meetup/CreateMeetups'
import Profile from './components/User/Profile'

import Board from './components/board/board'

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
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
  ],
  mode: 'history',
});
