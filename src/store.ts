import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		currentBoard: [] as [ { isOpen: boolean } ][],

		player: {
			pos: [2, 1]
		},

		//enemy objects
		nearbyEnemies: {} as { [selector: number]: { pos: number[], key: number } },

		//hashtable: keys are board positions as strings and values are enemy keys for quick lookup and collision testing
		enemyLayer: {} as { [selector: string]: number },
		// enemyLayer: {} as { [selector: number]: { [selector: number]: number } },

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
		refreshEnemyList(state) {
			state.nearbyEnemies = Object.assign({}, state.nearbyEnemies)
		},



		mutateEnemy(state, enemy) {
			// state.enemyLayer[oldX + ',' + oldY] = 0
			delete state.enemyLayer[enemy.getCoordsStr()]

			enemy.move()
			state.enemyLayer[enemy.getCoordsStr()] = enemy.key
		},

		killEnemy(state, enemy) {
			delete state.nearbyEnemies[enemy.key]
			delete state.enemyLayer[enemy.getCoordsStr()]
		},

		addBoardToMap(state, board: {worldX: number, worldY: number}) {
			//this probably won't work
			// create a new object to get reactivness to trigger
			// state.worldMap[board.worldX][board.worldY] = board
		},
		defaultBoard(state, board) {
			state.currentBoard = board
		},
		addEnemy(state, newEnemy: { pos: number[], key: number}) {
			//add to nearbyEnemies list
			let key = newEnemy.key
			state.nearbyEnemies[key] = newEnemy

			//add to catalog of enemy keys listed by coordinates
			state.enemyLayer[newEnemy.getCoordsStr()] = key
			// state.enemyLayer[newEnemy.pos[0]][newEnemy.pos[1]] = key
		},
	},
	actions: {
		tick(context) {
			console.log('moving enemies')
			context.dispatch('moveEnemies')
		},
		moveEnemies(context) {
			let enemyList = context.state.nearbyEnemies
			Object.keys(enemyList).forEach(function (key) {
				context.commit('mutateEnemy', enemyList[key])
			})
			context.commit('refreshEnemyList')
		},
		killEnemy(context, enemy) {
			enemy.die().then(
				() => context.commit('killEnemy', enemy),
				() => console.log("can't kill this!")
			)
		},
		movePlayer(context, vector) {
			let shouldTick = false;
			let x = context.state.player.pos[0] + vector[0]
			let y = context.state.player.pos[1] + vector[1]
			if (context.state.currentBoard[x][y].isOpen) {
				//check if open square we're moving into is occupied by an enemy...
				if (context.state.enemyLayer[x + ',' + y] > 0) {
					console.log("eyyyy, I'm walkin' here!")
					return Promise.reject("can't move here")
				}
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
