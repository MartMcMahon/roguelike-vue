export default class AssetManager {

	static tileRects = [] as {top: number, right: number, bottom: number, left: number}[][]

	constructor () {
		for (let y = 0; y < 16; y++) {
			AssetManager.tileRects.push([])
			for (let x = 0; x < 10; x++) {
				AssetManager.tileRects[y].push({ 
					top: y*32, 
					right: (x+1)*32, 
					bottom: (y+1)*32,
					left: x*32
				})
			}
		}
		console.log()
	}
	
	static getRectStr(x: number, y: number): string {
		let top = y*32
		let right = (x+1)*32
		let bottom = (y+1)*32
		let left = x*32
		return 'rect(' + top + 'px,' + right + 'px,' + bottom + 'px,' + left + 'px)'
	}

	static getWallTile() {
		return {
			rect: AssetManager.getRectStr(0, 1),
			xOffset: 0*32,
			yOffset: 1*32,
		}
	}

	static getFloorTile() {
		return {
			rect: AssetManager.getRectStr(1, 2),
			xOffset: 1*32,
			yOffset: 2*32,
		}
	}
}