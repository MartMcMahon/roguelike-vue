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
		//vanilla setters
		mutateEnemyList(state, newEnemyList) {
			state.nearbyEnemies = newEnemyList;
		},
		mutatePlayer(state, newPlayerObj) {
			state.player = newPlayerObj;
		},



		addBoardToMap(state, board: {worldX: number, worldY: number}) {
			//this probably won't work
			// create a new object to get reactivness to trigger
			// state.worldMap[board.worldX][board.worldY] = board
		},
		defaultBoard(state, board) {
			state.currentBoard = board
		},
		addEnemy(state, newEnemy) {
			let index = newEnemy.index
			//this might also have to be replaced
			state.nearbyEnemies[index] = newEnemy
			// console.log(index)
		},
	},
	actions: {
		tick(context) {
			// context.commit('updateEnemies', {index: 1})
			console.log('moving enemies')
		},
		movePlayer(context, vector) {
			let shouldTick = false;
			let x = context.state.player.pos[0] + vector[0]
			let y = context.state.player.pos[1] + vector[1]
			if (context.state.currentBoard[x][y].isOpen) {
				let newPlayerObj = {
					...context.state.player,
					pos: [x, y]
				}
				//player can move, so mutate player...
				//...and return promise so we know when to move gamestate forward
				return context.commit('mutatePlayer', newPlayerObj)
			}
			return Promise.reject("can't move here")
		}
	},
})
