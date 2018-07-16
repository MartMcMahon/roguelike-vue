<template>
	<div class="game-layer">
		<div 
			class="player"
			v-bind:style="{ top: player.pos[1]*50 + 17 + 'px', left: player.pos[0]*50 + 17 + 'px' }">
			@
			({{player.pos[0]}}, {{player.pos[1]}})
		</div>
	</div>
</template>

<script lang="ts">
	import { mapGetters } from 'vuex'

	export default {
		data () {
			return {
				// player: this.player
			}
		},
		computed: mapGetters({
			player: 'player'
		}),
	}
</script>

<style scoped>

.player {
	color: white;
	position: relative;
}

</style>