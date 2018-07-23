// takes 2d array of tiles to draw
// renders tiles as divs

<template>
	<div class="game-layer">
		<div 
			class="tilemap-col"
			v-for="col in tiles"
			:key="col.index"
		>
		<div 
			class="tile" 
			v-for="tile in col"
			:key="tile.index"
			v-bind:class="{ open: tile.isOpen, closed: !tile.isOpen }">
		</div>
	</div>
	<v-btn style="z-index: 100" @click="reset">reset game</v-btn>
	</div>
</template>
		

<script lang="ts">
import { bus } from '@/bus'

export default {
	computed: {
		// player() {
		// 	return this.$store.state.player
		// },
		// msg() {
		// 	return this.$store.state.message
		// }
	},
	props: ['tiles'],
  data () {
    return {
      isOpen: true,

			board: '',

			width: 10,
			height: 10
    }
  },
	methods: {
		reset(e) {
			bus.$emit('reset')
		}
	}
}
</script>

<style scoped>

	.board-layer {
		position: absolute;
		top: 0
	}

	.tilemap-col {
		display: -webkit-box;
		flex-direction: column;
	}

	.tile {
		border: black solid 2px;

		width: 50px;
		height: 50px;
	}

	.closed {
		background-color: #660000;
	}

	.open {
		background-color: #006600;
	}

</style>