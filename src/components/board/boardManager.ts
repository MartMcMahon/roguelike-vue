import { Tile } from '@/types'
import Vector from '@/types/vector'

/***
 * tile is an array of columns
 * each col is an arrow of single tiles, one per row
 */

export default class BoardManager {

	constructor() {}

	generateBoard(height: number, width: number) {
		console.log('making board')
		let result = []
		for (let x = 0; x < width; x++) {
			result[x] = [] as Tile[]
			
			// literal edge-cases
			for (let y = 0; y < height; y++) {
				if ( (x === 0) || (x === width-1)
					|| (y === 0) || (y === height-1) ) {
					result[x][y] = { isOpen: false }
				}
				else {
					let r =  Math.floor(Math.random()*10) %2
					console.log(r)

					if (r === 0) {
						result[x][y] = { isOpen: true }
					}
					else {
						result[x][y] = { isOpen: false }
					}
				}
			}
		}
		
		return result
	}

	defaultBoard() {
		return [
			[
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
			],
			[
				{isOpen: false},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: false},
			],
			[
				{isOpen: false},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: false},
			],
			[
				{isOpen: false},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: false},
			],
			[
				{isOpen: false},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: false},
			],
			[
				{isOpen: false},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: false},
			],
			[
				{isOpen: false},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: false},
			],
			[
				{isOpen: false},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: true},
				{isOpen: false},
			],
			[
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
				{isOpen: false},
			],
		]
	}





	isTileOpen(pos: number[]): boolean {
		
		return true
	}
}