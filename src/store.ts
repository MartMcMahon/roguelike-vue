import Vue from 'vue'
import Vuex from 'vuex'

import AssetManager from '@/assets/assetManager'
import BoardManager from '@/components/board/boardManager'
import Enemy from '@/components/mobs/enemy'

// import { bus } from '@/bus'

// import { Direction } from '@/types'
// import Vector from '@/types/vector'

Vue.use(Vuex)

// export class store extends Vue {
// 	@State('assetManager') new AssetManager()

// }

export const store = new Vuex.Store({
	state: {
		assetManager: new AssetManager(),
		boardManager: new BoardManager(),
		// currentBoard: [] as [ { isOpen: boolean } ][],

		player: {
			pos: [2, 1],
		},

		// enemy objects
		// nearbyEnemies: {} as { [selector: number]: { pos: number[], key: number } },
		nearbyEnemies: {} as { [selector: number]: Enemy }, // as { number: Enemy},

		// hashtable: keys are board positions as strings and values are enemy keys for quick lookup and collision testing
		enemyLayer: {} as { [selector: string]: number },
		// enemyLayer: {} as { [selector: number]: { [selector: number]: number } },

		renderInfo: {
			asciiMode: false,
		},

		nearbyChunks: [
			[],
			[],
			[],
		],
	},
	getters: {
		assetManager(state) {
			return state.assetManager
		},
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
		// vanilla setters
		mutateEnemyList(state, newEnemyList) {
			state.nearbyEnemies = newEnemyList
		},
		mutatePlayer(state, newPlayerObj) {
			state.player = newPlayerObj
		},
		refreshEnemyList(state) {
			state.nearbyEnemies = Object.assign({}, state.nearbyEnemies)
		},
		boardManager(state, manager) {
			state.boardManager = manager
		},
		setBoard(state, board) {
			state.boardManager.tiles = board
		},

		mutateEnemy(state, enemy) {
			// state.enemyLayer[oldX + ',' + oldY] = 0
			delete state.enemyLayer[enemy.getCoordsStr()]

			enemy.move()
			console.log(enemy)
			state.enemyLayer[enemy.getCoordsStr()] = enemy.key
		},

		killEnemy(state, enemy) {
			delete state.nearbyEnemies[enemy.key]
			delete state.enemyLayer[enemy.getCoordsStr()]
		},

		addBoardToMap(state, board: {worldX: number, worldY: number}) {
			// this probably won't work
			// create a new object to get reactivness to trigger
			// state.worldMap[board.worldX][board.worldY] = board
		},
		addEnemy(state, newEnemy: Enemy) {
			console.log('adding enemy to list')
			console.log(state.nearbyEnemies)
			// add to nearbyEnemies list
			const key = newEnemy.key
			state.nearbyEnemies[key] = newEnemy

			// add to catalog of enemy keys listed by coordinates
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
			context.commit('setBoard', board)
			console.log('emitting boardReady')
			// bus.$emit('boardReady')
		},

		tick(context) {
			console.log('moving enemies')
			context.dispatch('moveEnemies')
		},
		moveEnemies(context) {
			const enemyList = context.state.nearbyEnemies
			console.log(Object.keys(enemyList))
			// enemyList.map( (enemy: Enemy) => {
			// 	context.commit('mutateEnemy', enemy)
			// }
			
			Object.keys(enemyList).forEach((enemyKey: any) => {
				context.commit( 'mutateEnemy', enemyList[enemyKey] )//List[key])
			})
			context.commit('refreshEnemyList')
		},
		killEnemy(context, enemy) {
			enemy.die()
			// .then(
				// ok
			context.commit('killEnemy', enemy)
			context.commit('refreshEnemyList')

			// 	() => console.log("can't kill this!")
			// )
		},
		movePlayer(context, vector) {
			const shouldTick = false
			const x = context.state.player.pos[0] + vector[0]
			const y = context.state.player.pos[1] + vector[1]
			if (context.state.boardManager.tiles[x][y].isOpen) {
				// check if open square we're moving into is occupied by an enemy...
				const key = context.state.enemyLayer[x + ',' + y]
				if (key > 0) {
					console.log('eyyyy, I\'m walkin\' here!')
					const enemy = context.state.nearbyEnemies[key]
					enemy.hit()
					context.dispatch('killEnemy', context.state.nearbyEnemies[key])
						// .then(() => {
					return Promise.reject('you killed her!')
					// })
				}
				const newPlayerObj = {
					...context.state.player,
					pos: [x, y],
				}
				// player can move, so mutate player...
				// ...and return promise so we know when to move gamestate forward
				return context.commit('mutatePlayer', newPlayerObj)
			}
			return Promise.reject('can\'t move here')
		},
	},
})
