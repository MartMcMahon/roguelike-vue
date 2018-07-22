import { Tile } from '@/types'
import Vector from '@/types/vector'

/***
 * tile is an array of columns
 * each col is an arrow of single tiles, one per row
 */

export default class BoardManager {

	tiles: Tile[][] = []

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
					result[x][y] = { isOpen: true }
					let r =  Math.floor(Math.random()*10) %4
					if (r === 0) {
						result[x][y] = { isOpen: false }
					}
				}
			}
		}
		
		this.tiles = result
		return result
	}

	isTileOpen(pos: Vector): boolean {
		console.log('idk. is it?')
		console.log(pos)

		let t = this.tiles[pos[0]][pos[1]]
		return t.isOpen
	}

	getOpenAdjacentTiles(pos: Vector): Vector[] {
		let result = [] as Vector[]
		// look at adject tiles by adding the vector for n, s, e, w
		let tilesToCheck = Vector.dirs.map( dir => Vector.add(pos, dir) )
		console.log(tilesToCheck)
		tilesToCheck.forEach(t => {
			if (this.isTileOpen(t)) {
				result.push(t)
			}
		})
			
		return result
	}
}