<template>
	<div class="top-layer">
		<DrawBoard :tiles="tiles">
		</DrawBoard>
		<DrawPlayer></DrawPlayer>
		<EnemyManager></EnemyManager>
		<ControllerLayer v-on:tick="nextRound()"></ControllerLayer>
	</div>
</template>

<script>
	import EnemyManager from '../mobs/enemyManager.vue'
	import ControllerLayer from '../controller/controllerLayer.vue'

	import{ bus } from '../bus/bus'

	export default {
		components: {
			'ControllerLayer': ControllerLayer,
			'EnemyManager': EnemyManager,
		},
		created() {
			this.$store.commit('defaultBoard', this.tiles)
		},
		methods: {
			nextRound() {
				console.log('test')
			}
		},
		data() {
			return {
				tiles: [
					[
						//0
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
						//1
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
						//2
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
						//3
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
						//4
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
						//5
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
						//6
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
						//7
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
						//8
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
						//9
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

