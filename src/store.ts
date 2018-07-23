import Vue from 'vue'
import Vuex from 'vuex'

import Enemy from '@/components/mobs/enemy'
import BoardManager from '@/components/board/boardManager'

import { bus } from '@/bus'

import { Direction } from '@/types'
import Vector from '@/types/vector'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		boardManager: new BoardManager(),
		// currentBoard: [] as [ { isOpen: boolean } ][],

		player: {
			pos: [2, 1]
		},

		//enemy objects
		// nearbyEnemies: {} as { [selector: number]: { pos: number[], key: number } },
		nearbyEnemies: {} as { [selector: number]: Enemy },

		//hashtable: keys are board positions as strings and values are enemy keys for quick lookup and collision testing
		enemyLayer: {} as { [selector: string]: number },
		// enemyLayer: {} as { [selector: number]: { [selector: number]: number } },

		renderInfo: {
			asciiMode: true,
		},

		nearbyChunks: [
			[],
			[],
			[],
		],
	},
	getters: {
		boardManager(state) {
			return state.boardManager
		},
		tiles(state) {
			return state.boardManager.tiles
		},
		player(state) {
			return state.player
		},
		enemies(state) {
			return state.nearbyEnemies
		},
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
		boardManager(state, manager) {
			state.boardManager = manager
		},
		// setBoard(state, board) {
		// 	// state.boardmanager.tiles = board
		// },

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
		addEnemy(state, newEnemy: Enemy) {
			console.log('adding enemy to list')
			//add to nearbyEnemies list
			let key = newEnemy.key
			state.nearbyEnemies[key] = newEnemy

			//add to catalog of enemy keys listed by coordinates
			state.enemyLayer[newEnemy.getCoordsStr()] = key
			// state.enemyLayer[newEnemy.pos[0]][newEnemy.pos[1]] = key
		},
		asciiMode(state) {
			state.renderInfo.asciiMode = !state.renderInfo.asciiMode
			// state.renderInfo = Object.assign({}, state.renderInfo)
		},
	},
	actions: {
		// handle baord stuff
		setBoard(context, board) {
			// context.commit('setBoard', board)
			console.log('emitting boardReady')
			bus.$emit('boardReady')
		},

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
			enemy.die()
			// .then(
				//ok
				context.commit('killEnemy', enemy)
				context.commit('refreshEnemyList')
					
			// 	() => console.log("can't kill this!")
			// )
		},
		movePlayer(context, vector) {
			let shouldTick = false;
			let x = context.state.player.pos[0] + vector[0]
			let y = context.state.player.pos[1] + vector[1]
			if (context.state.boardManager.tiles[x][y].isOpen) {
				//check if open square we're moving into is occupied by an enemy...
				let key = context.state.enemyLayer[x + ',' + y]
				if (key > 0) {
					console.log("eyyyy, I'm walkin' here!")
					let enemy = context.state.nearbyEnemies[key]
					enemy.hit()
					context.dispatch('killEnemy', context.state.nearbyEnemies[key])
						// .then(() => {
							return Promise.reject("you killed her!")
					// })
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
