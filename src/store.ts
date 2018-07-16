import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		player: {
			pos: [200, 100]
		},
		message: 'test'
	},
	getters: {
		getPlayer(state) {
			return state.player
		}
	},
	mutations: {
		moveUp(state) {
			state.player.pos[0] += 100
		}
	}
})