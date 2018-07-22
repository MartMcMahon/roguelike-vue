import { Direction } from '@/types'

export default class Vector extends Array {
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
			
		super()
		if (pos) {
			this[0] = pos[0]
			this[1] = pos[1]
		}
		else {
			this[0] = x
			this[1] = y
		}
	}

	static add(a: Vector, b: Vector): Vector {
		let x = a[0] + b[0]
		let y = a[1] + b[1]
		return new Vector(x, y)
	}

	static UP = new Vector(0, -1, undefined, Direction.up)
	static RIGHT = new Vector(1, 0, undefined, Direction.right)
	static DOWN = new Vector(0, 1, undefined, Direction.down)
	static LEFT = new Vector(-1, 0, undefined, Direction.left)

	static dirs = [Vector.UP, Vector.RIGHT, Vector.DOWN, Vector.LEFT]
}
