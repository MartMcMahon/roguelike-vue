import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from '@/router'
import '@/registerServiceWorker'
import {store} from '@/store'

// firebase stuff
import firebase from 'firebase'
import { config } from '@/config/firebase'

// components
import DrawBoard from './components/board/drawBoard.vue'
import DrawPlayer from './components/player/drawPlayer.vue'

// styles
import './styles/main.css'

Vue.config.productionTip = false

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

// globally define components
Vue.component('DrawBoard', DrawBoard)
Vue.component('DrawPlayer', DrawPlayer)

let app: Vue
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged( (user) => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: (h) => h(App),
		}).$mount('#app')
	}
})
