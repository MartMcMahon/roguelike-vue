import Vue from 'vue'
import Vuex from 'vuex'

import AssetManager from '@/assets/assetManager'
import BoardManager from '@/components/board/boardManager'
import Enemy from '@/components/mobs/enemy'

import { GameUser } from './firebase'

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
		user: {},
		// currentBoard: [] as [ { isOpen: boolean } ][],

		player: {
			pos: [2, 1],
		},

		// enemy objects
		// nearbyEnemies: {} as { [selector: number]: { pos: number[], key: number } },
		nearbyEnemies: [] as Enemy[], //{} as { [selector: number]: Enemy }, // as { number: Enemy},

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

		user(state) {
			return state.user
		}
	},
	mutations: {
		// vanilla setters
		mutateEnemyList(state, newEnemyList) {
			state.nearbyEnemies = newEnemyList
		},
		mutatePlayer(state, newPlayerObj) {
			state.player = newPlayerObj
		},
		boardManager(state, manager) {
			state.boardManager = manager
		},
		setBoard(state, board) {
			state.boardManager.tiles = board
		},
		refreshEnemyList(state) {
			state.nearbyEnemies = Object.assign({}, state.nearbyEnemies)
			state.enemyLayer = {}
			for (let keyString in state.nearbyEnemies) {
				let key = parseInt(keyString, 10)
				let enemy = state.nearbyEnemies[key]
				state.enemyLayer[ enemy.getCoordsStr() ] = key
			}
		},
		initUser(state, user) {
			state.user = user
		},

		// strawberry (not vanilla)
		mutateEnemy(state, enemy) {
			// state.enemyLayer[oldX + ',' + oldY] = 0
			delete state.enemyLayer[enemy.getCoordsStr()]

			enemy.move()
			console.log(enemy)
			state.enemyLayer[enemy.getCoordsStr()] = enemy.key
		},

		killEnemy(state, enemy) {
			console.log(state.nearbyEnemies)
			console.log(state.enemyLayer)
			console.log('deleting nearbyEnemies[' + enemy.key + ']')
			delete state.nearbyEnemies[enemy.key]
			console.log(state.nearbyEnemies)
			console.log(state.enemyLayer)
			console.log('deleting enemyLayer[' + enemy.getCoordsStr() + ']')
			delete state.enemyLayer[enemy.getCoordsStr()]
			console.log(state.nearbyEnemies)
			console.log(state.enemyLayer)
		},

		addBoardToMap(state, board: {worldX: number, worldY: number}) {
			// this probably won't work
			// create a new object to get reactivness to trigger
			// state.worldMap[board.worldX][board.worldY] = board
		},
		addEnemy(state, newEnemy: Enemy) {
			console.log('adding enemy to list')
			console.log(state.nearbyEnemies)

			// get correct index
			if (newEnemy.key === 0) {
				newEnemy.key = Object.keys(state.nearbyEnemies).length +1
			}

			// add to nearbyEnemies list
			// state.nearbyEnemies[newEnemy.key] = newEnemy
			state.nearbyEnemies.push(newEnemy)

			// add to catalog of enemy keys listed by coordinates
			state.enemyLayer[newEnemy.getCoordsStr()] = newEnemy.key
		},
		asciiMode(state) {
			state.renderInfo.asciiMode = !state.renderInfo.asciiMode
			// state.renderInfo = Object.assign({}, state.renderInfo)
		},
	},
	actions: {
		// user actions
		// initUser(context, firebaseUser) {
		// 	console.log('type: ' )
		// 	console.log(typeof firebaseUser)
		// 	context.state.user.initUser(firebaseUser)
		// },

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
					console.log(context.state.nearbyEnemies)
					enemy.hit()
					context.dispatch('killEnemy', context.state.nearbyEnemies[key])
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
