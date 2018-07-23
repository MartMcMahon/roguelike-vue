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
				v-bind:class="{ 
					open: tile.isOpen, 
					closed: !tile.isOpen,
					full: !asciiMode,
					ascii: asciiMode,
				}">
				
				<TileImg 
					v-if="!tile.isOpen && !asciiMode"
					rect="rect(32px, 32px, 64px, 0px)"
				/>
				<div v-if="tile.isOpen && asciiMode">
					.
				</div>
				<div v-if="!tile.isOpen && asciiMode">
					#
				</div>
			</div>
		</div>
		<v-app dark>
			<v-container dark style="z-index: 100">
			<v-btn @click="reset">reset game</v-btn>
				<v-switch
					dark
					color="primary"
					label="partymode" 
					v-model="asciiMode"
				></v-switch>
			</v-container>
		</v-app>
	</div>
</template>
		

<script lang="ts">
import { bus } from '@/bus'

import TileImg from '../../assets/tileImg.vue'

export default {
	components: {
		'TileImg': TileImg,
	},
	computed: {
		asciiMode: {
			get(): any {
				return this.$store.state.renderInfo.asciiMode
			},
			set(value: any) {
				this.$store.commit('asciiMode', value)
			},
		},
	},
	props: ['tiles'],
  data () {
    return {
			// asciiMode: true,
      isOpen: true,

			board: '',

			width: 10,
			height: 10,

			// tileset: tileset,
    }
  },
	methods: {
		reset() {
			bus.$emit('reset')
		},
		switchAsciiMode() {
			this.$store.commit('asciiMode')
		},
	},
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

	.tile.full {
		overflow: hidden;
		height: 32px;
		width: 32px;
	}

	.closed.full {
		background-color: #660000;
	}

	.open.full {
		background-color: #006600;
	}

	.ascii {
		background-color: black;
		color: white;

		/* font-family: system-ui; */
		font-size: 16px;
		height: 16px;
		width: 16px;
	}

</style>