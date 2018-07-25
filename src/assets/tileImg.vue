<template>
	<img 
		src="./tileset-32.png"
		v-bind:style="style"
	/>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Sprite } from './assetManager'

const TileImgProps = Vue.extend({
  props: {
    boardTile: {} as () => Sprite
  }
})
@Component({
	name: 'TileImg',
})
export default class TileImg extends TileImgProps {

	initialStyle = this.boardTile

	// computed
	get style() {
		return 'position: absolute; '
			+ 'clip: ' + this.boardTile.rect + ';'
			+ 'margin-left: -' + this.boardTile.xOffset + 'px;'
			+ 'margin-top: -' + this.boardTile.yOffset + 'px;'
	}

	created() {
		console.log(this.boardTile)
	}
}

</script>
