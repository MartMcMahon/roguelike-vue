export default class AssetManager {

	static tileRects = [] as {top: number, right: number, bottom: number, left: number}[][]

	constructor () {
		for (let y = 0; y < 16; y++) {
			for (let x = 0; x < 10; x++) {
				AssetManager.tileRects[y][x] = { 
					top: y*16, 
					right: (x+1)*16, 
					bottom: (y+1)*16,
					left: x*16
				}
			}
		}
	}
	
	static getRect(x: number, y: number) {
		return AssetManager.tileRects[y][x]
	}

	static getWallTile() {
		return 
	}

}