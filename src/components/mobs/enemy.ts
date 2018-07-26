import { bus } from '@/bus'

import { Direction } from '@/types'
import Vector from '@/types/vector'

import BoardManager from '@/components/board/boardManager'

export default class Enemy {

	public parent: any

	public key: number = 1
	public pos: number[] = new Vector(8, 2)

	public openAdjacentTiles: Vector[] = []

	static defaultEnemy() {
		return new Enemy(null, new Vector(0, 0))
	}

	constructor(parent: BoardManager | null, pos: Vector) {
		bus.$on('enemyHit', (enemy: Enemy) => {
			if (enemy === this) {
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

	public init() {
		// can I see player?

		// where can I move?
		this.lookAround()

		// what can I do?

		// what do I want to do?
	}

	public lookAround() {
		this.openAdjacentTiles = this.parent.$store.getters.boardManager.getOpenAdjacentTiles(this.pos)
	}

	public getCoordsStr(): string {
		return this.pos[0] + ',' + this.pos[1]
	}

	public move() {
		const numPossibleTiles = this.openAdjacentTiles.length
		const index = Math.floor(Math.random() * 10) % numPossibleTiles
		this.pos = this.openAdjacentTiles[index]
		this.lookAround()

		return Object.assign({}, this)
	}

	public hit() {
		console.log('uhhhhh....')
		bus.$emit('enemyHit', this)
	}

	public die() {


		// put this in the one in enemyManager and try it again


		return new Promise((resolve, reject) => {

			setTimeout(() => console.log('still dead'), 300)
			// drop loot
			// add loot to map

		// explode?
		// trigger onDeath event
		// trigger onKill event
		})
	}
}
