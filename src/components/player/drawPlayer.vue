<template>
	<div class="game-layer">
		<TileImg 
			v-if="!asciiMode"
			:boardTile="getPlayerTile()"
			v-bind:style="{ top: player.pos[1]*32 + 'px', left: player.pos[0]*32 + 'px' }"
		/>
		<div 
			v-if="asciiMode"
			class="player"
			v-bind:style="{ top: player.pos[1]*32 + 8 + 'px', left: player.pos[0]*32 + 8 + 'px' }">
			@
			({{player.pos[0]}}, {{player.pos[1]}})
		</div>
	</div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator'
// import { mapGetters } from 'vuex'
import AssetManager from '../../assets/assetManager'
import TileImg from '../../assets/tileImg.vue'

@Component({
	components: {
		TileImg
	},
	name: 'DrawPlayer'
})
export default class DrawPlayer extends Vue {

	// computed
	get  player() {
		return this.$store.state.player
	}
	get asciiMode() {
		return this.$store.state.renderInfo.asciiMode
	}

	getPlayerTile() {
		return AssetManager.getPlayerTile()
	}

}
</script>

<style scoped>
.player {
	color: white;
	position: relative;
	
	font-size: 14px;
}

</style>