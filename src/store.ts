import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		currentBoard: [ [  ] ],

		player: {
			pos: [2, 1]
		},
		nearbyEnemies: [ {} ],
		nearbyChunks: [
			[],
			[],
			[],
		],
	},
	getters: {
		player(state) {
			return state.player
		},
		enemies(state) {
			return state.nearbyEnemies
		}
	},
	mutations: {
		addBoardToMap(state, board: {worldX: number, worldY: number}) {
			//this probably won't work
			// create a new object to get reactivness to trigger
			// state.worldMap[board.worldX][board.worldY] = board
		},
		defaultBoard(state, board) {
			state.currentBoard = board
		},
		movePlayer(state, vec) {
			let x = state.player.pos[0] + vec[0]
			let y = state.player.pos[1] + vec[1]
			if (state.currentBoard[x][y].isOpen) {
				state.player = {
					...state.player,
					pos: [x, y]
				}
			}
		},
		updateEnemies(state, newEnemy) {
			let index = newEnemy.index
			//this might also have to be replaced
			state.nearbyEnemies[index] = newEnemy
			// console.log(index)
		}
	},
	actions: {
		tick(context) {
			context.commit('updateEnemies', {index: 1})
		},
	},
})
