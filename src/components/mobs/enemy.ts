import { bus } from '@/components/bus/bus'

import { Direction } from '@/types'
import Vector from '@/types/vector'

import BoardManager from '../board/boardManager'

export default class Enemy {

	parent: Object

	key: number = 1
	pos: number[] = new Vector(8, 2)

	openAdjacentTiles: Vector[] = []

	constructor(parent: BoardManager, pos: Vector) {
		bus.$on('enemyHit', (enemy: Enemy) => {
			if (enemy === this) {
				console.log('YA BIT')
				console.log(enemy.key + ' got hit')
			}
		})

		this.pos = pos
		this.parent = parent
		// while (!bus.boardReady) {
		// 	setTimeout(null, 200)
		// 	console.log('checking...')
		// }
		this.init()
	}

	init() {
		// can I see player?

		// where can I move?
		this.lookAround()
		
		// what can I do?

		// what do I want to do?
	}

	lookAround() {
		this.openAdjacentTiles = this.parent.$store.getters.boardManager.getOpenAdjacentTiles(this.pos)
	}

	getCoordsStr() {
		return this.pos[0] + ',' + this.pos[1]
	}

	move() {
		let numPossibleTiles = this.openAdjacentTiles.length
		let index = Math.floor(Math.random() * 10) % numPossibleTiles
		this.pos = this.openAdjacentTiles[index]
		this.lookAround()
		
		return Object.assign({}, this)
	}

	hit() {
		console.log('uhhhhh....')
		bus.$emit('enemyHit', this)
	}

	die() {


		//put this in the one in enemyManager and try it again


		return new Promise((resolve, reject) => {

			setTimeout(() => console.log('still dead'), 300)
			//drop loot
			//add loot to map
			
		//explode?
		//trigger onDeath event
		//trigger onKill event
		})
	}
}