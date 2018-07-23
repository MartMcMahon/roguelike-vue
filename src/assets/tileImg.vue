<template>
	<img 
		src="./tileset-32.png"
		v-bind:style="style"
	/>
</template>

<script lang="ts">
import AssetManager from './assetManager'

export default {
	created() {
		console.log(this.boardTile)
	},
	computed: {
		style: function() {
			return 'position: absolute; '
				+ 'clip: ' + this.boardTile.rect + ';'
				+ 'margin-left: -' + this.boardTile.xOffset + 'px;'
				+ 'margin-top: -' + this.boardTile.yOffset + 'px;'
		},
	},
	data() {
		return {}
	},
	name: 'TileImg',
	props: ['boardTile'],
}

export interface TileImgData {
	Xindex: number,
	Yindex: number,

	xOffset: number,
	yOffset: number
}
</script>