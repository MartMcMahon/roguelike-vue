import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import {store} from './store'

import DrawBoard from './components/board/drawBoard.vue'
import DrawPlayer from './components/player/drawPlayer.vue'

import './styles/main.css'

Vue.config.productionTip = false;

//globally define components
Vue.component('DrawBoard', DrawBoard)
Vue.component('DrawPlayer', DrawPlayer)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
