import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		player: {
			pos: [2, 1]
		},
		nearbyEnemies: [],
	},
	getters: {
		player(state) {
			return state.player
		},
	},
	mutations: {
		addBoardToMap(state, board: {worldX: number, worldY: number}) {
			//this probably won't work
			// create a new object to get reactivness to trigger
			// state.worldMap[board.worldX][board.worldY] = board
		},
		movePlayer(state, vec) {
			let x = state.player.pos[0] + vec[0]
			let y = state.player.pos[1] + vec[1]
			state.player = {
				...state.player,
				pos: [x, y]
			}
		}
	}
})