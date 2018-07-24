export default class AssetManager {

	public static tileRects = [] as Array<Array<{top: number, right: number, bottom: number, left: number}>>



	public static getRectStr(x: number, y: number): string {
		const top = y * 32
		const right = (x + 1) * 32
		const bottom = (y + 1) * 32
		const left = x * 32
		return 'rect(' + top + 'px,' + right + 'px,' + bottom + 'px,' + left + 'px)'
	}

	public static getWallTile() {
		return {
			rect: AssetManager.getRectStr(0, 1),
			xOffset: 0 * 32,
			yOffset: 1 * 32,
		}
	}

	public static getFloorTile() {
		return {
			rect: AssetManager.getRectStr(1, 2),
			xOffset: 1 * 32,
			yOffset: 2 * 32,
		}
	}

	public static getPlayerTile() {
		return {
			rect: AssetManager.getRectStr(0, 4),
			xOffset: 0 * 32,
			yOffset: 4 * 32,
		}
	}

	public static getEnemyTile() {
		return {
			rect: AssetManager.getRectStr(0, 6),
			xOffset: 0 * 32,
			yOffset: 6 * 32,
		}
	}

	constructor() {
		for (let y = 0; y < 16; y++) {
			AssetManager.tileRects.push([])
			for (let x = 0; x < 10; x++) {
				AssetManager.tileRects[y].push({
					top: y * 32,
					right: (x + 1) * 32,
					bottom: (y + 1) * 32,
					left: x * 32,
				})
			}
		}
		console.log()
	}
}
