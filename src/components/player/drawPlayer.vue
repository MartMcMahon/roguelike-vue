<template>
	<div class="game-layer">
		<div 
			class="player"
			v-bind:style="{ top: player.pos[1] + 'px', left: player.pos[0] + 'px' }">
			@
		</div>
	</div>
</template>

<script lang="ts">
	import { mapGetters } from 'vuex'

	export default {
		computed: mapGetters({
			player: 'getPlayer'
		}),
		msg() {
			return this.$store.state.message
		}
	}
</script>

<style scoped>

.player {
	color: white;
	position: relative;
}

</style>