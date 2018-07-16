<template>
	<div 
		class="handleInput"
		@keyup="handleKeyUp">
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: mapGetters({
		player: 'player'
	}),
	methods: {
		handleKeyUp(e) {
			e.preventDefault()
			switch (e.key) {
				case 'w':
				case 'ArrowUp':
					// move up
					this.$store.commit('movePlayer', [0, -1])
					break
				case 's':
				case 'ArrowDown':
					//move down
					this.$store.commit('movePlayer', [0, 1])
					break
				case 'a':
				case 'ArrowLeft':
					//move left
					this.$store.commit('movePlayer', [-1, 0])
					break
				case 'd':
				case 'ArrowRight':
					//move right
					this.$store.commit('movePlayer', [1, 0])
					break
			}
		}
	},
	created: function() {
  	window.addEventListener('keyup', this.handleKeyUp)
	},
	destroyed: function() {
  	window.removeEventListener('keyup', this.handleKeyUp)
	},
}
</script>

<style scoped>
.handleInput {
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0;
}
</style>