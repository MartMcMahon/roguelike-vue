<template>
	<div class="top-layer" v-bind:class="{ screenshake: screenIsShaking }">
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
	import BoardManager from './boardManager'

	import { bus } from '../bus/bus'

	import styles from '../effects/shakeAnimation.css'

	export default {
		components: {
			'ControllerLayer': ControllerLayer,
			'EnemyManager': EnemyManager,
		},
		created() {
			console.log(this.boardManager.generateBoard())

			this.$store.commit('defaultBoard', this.tiles)
			bus.$on('enemyHit', this.shakeScreen)
		},
		methods: {
			shakeScreen() {
				this.screenIsShaking = true
				setTimeout(() => this.screenIsShaking = false, 200)
			},
		},
		data() {
			return {
				boardManager: new BoardManager(),
				screenIsShaking: false,
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

