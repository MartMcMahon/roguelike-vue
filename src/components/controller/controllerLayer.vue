<template>
	<div 
		class="handleInput"
		@keyup="handleKeyUp"
		@click="handleKeyUp">
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: mapGetters({
		player: 'getPlayer'
	}),
	methods: {
		handleKeyUp(e) {
			console.log(e)
			console.log(e.which)
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