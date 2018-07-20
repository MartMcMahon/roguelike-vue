import { bus } from '../bus/bus'

export default class Enemy {

	key: number = 1
	pos: number[] = [8, 2]

	constructor() {
		bus.$on('enemyHit', (enemy: Enemy) => {
			if (enemy === this) {
				console.log('YA BIT')
				console.log(enemy.key + ' got hit')
			}
		})
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
