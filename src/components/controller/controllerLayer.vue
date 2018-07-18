<template>
	<div 
		class="handleInput"
		@keyup="handleKeyUp">
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { bus } from '../bus/bus'

export default {
	computed: mapGetters({
		player: 'player'
	}),
	methods: {
		handleKeyUp(e) {
			e.preventDefault()
			let vec = []
			switch (e.key) {
				default: return;

				case 'w':
				case 'ArrowUp':
					// move up
					vec = [0, -1]
					break
				case 's':
				case 'ArrowDown':
					//move down
					vec = [0, 1]
					break
				case 'a':
				case 'ArrowLeft':
					//move left
					vec = [-1, 0]
					break
				case 'd':
				case 'ArrowRight':
					//move right
					vec = [1, 0]
					break

			}
			this.$store.dispatch('movePlayer', vec)
				.then(this.$store.dispatch('tick'))

			// bus.$emit('tick')

			//not sure this line should really go here
			//really want each thing that takes a round to mvoe the game clock with 'tick'
			//only once each though!
			// this.$store.dispatch('tick')
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