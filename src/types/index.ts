export interface Tile {
	isOpen: boolean
}

export enum Direction {
	up = 1,
	right,
	down,
	left
}

export const dir: {} = {
	1: [0, -1],
	2: [1, 0],
	3: [0, +1],
	4: [-1, 0],
}