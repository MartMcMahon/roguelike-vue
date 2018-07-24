import { Direction } from '@/types'

export default class Vector extends Array {
	public x: number = 0
	public y: number = 0
	public dir?: Direction = 0
	public velocity?: number = 0

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

	public static add(a: Vector, b: Vector): Vector {
		const x = a[0] + b[0]
		const y = a[1] + b[1]
		return new Vector(x, y)
	}

	public static UP = new Vector(0, -1, undefined, Direction.up)
	public static RIGHT = new Vector(1, 0, undefined, Direction.right)
	public static DOWN = new Vector(0, 1, undefined, Direction.down)
	public static LEFT = new Vector(-1, 0, undefined, Direction.left)

	public static dirs = [Vector.UP, Vector.RIGHT, Vector.DOWN, Vector.LEFT]
}
