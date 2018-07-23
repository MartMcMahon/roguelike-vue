<template>
	<img 
		src="./tileset-32.png"
		v-bind:style="style"
	/>
</template>

<script lang="ts">
export default {
	computed: {
		style: function() {
			console.log(this.rect.top)
			return 'position: absolute; '//clip: rect(16px, 16px, 32px, 0px);'
				+ 'clip: ' + this.rect + '; margin-top: -32px;'
		}
	},
	data() {
		return {}
	},
	name: 'TileImg',
	props: ['rect'],
}
</script>