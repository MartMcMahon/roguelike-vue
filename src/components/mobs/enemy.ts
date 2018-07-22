import { bus } from '@/components/bus/bus'

import { Direction } from '@/types'
import Vector from '@/types/vector'

export default class Enemy {

	parent: Object

	key: number = 1
	pos: number[] = new Vector(8, 2)

	openAdjacentTiles: Vector[] = []

	constructor(parent: Object) {
		bus.$on('enemyHit', (enemy: Enemy) => {
			if (enemy === this) {
				console.log('YA BIT')
				console.log(enemy.key + ' got hit')
			}
		})

		this.parent = parent
	}

	init() {
		// can I see player?

		// where can I move?
		console.log(this.parent.$store)
		console.log(this.parent.$store.getters.getOpenAdjacentTiles(this.pos))
		

		// what can I do?

		// what do I want to do?
	}

	getCoordsStr() {
		return this.pos[0] + ',' + this.pos[1]
	}

	move() {

		let dir = Math.floor(Math.random() * 10) % 4
		switch (dir) {
			case 0:				
				this.pos[1]--
				break
			case 1:
				this.pos[1]++
				break
			case 2:
				this.pos[0]++
				break
			case 3:
				this.pos[0]--
				break
		}
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