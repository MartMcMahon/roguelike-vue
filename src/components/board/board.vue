<template>
	<div class="top-layer">
		<DrawBoard :tiles="tiles">
		</DrawBoard>
		<DrawPlayer></DrawPlayer>
		<ControllerLayer></ControllerLayer>
	</div>
</template>

<script>
	import ControllerLayer from '../controller/controllerLayer.vue'
	export default {
		components: {
			'ControllerLayer': ControllerLayer
		},
		data() {
			return {
				tiles: [
					[
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
					],
					[
						{isOpen: false},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: false},
					],
					[
						{isOpen: false},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: false},
					],
					[
						{isOpen: false},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
					],
					[
						{isOpen: false},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: false},
					],
					[
						{isOpen: false},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: false},
					],
					[
						{isOpen: false},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: false},
					],
					[
						{isOpen: false},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: true},
						{isOpen: false},
					],
					[
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
						{isOpen: false},
					],
				]
			}
		}
	}
</script>

