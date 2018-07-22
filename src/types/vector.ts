import { Direction } from './types'

export default class Vector {
	x: number = 0
	y: number = 0
	dir?: Direction = 0
	velocity?: number = 0

	constructor(
		x: number = 0, 
		y: number = 0, 
		pos?: number[],
		dir: Direction = 0,
		velocity: number = 0) {
			
		if (pos) {
			this.x = pos[0]
			this.y = pos[1]
		}
	}

	static UP = new Vector(0, -1, undefined, Direction.up)
	static RIGHT = new Vector(1, 0, undefined, Direction.right)
	static DOWN = new Vector(0, 1, undefined, Direction.down)
	static LEFT = new Vector(-1, 0, undefined, Direction.left)
}
