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
			this.tiles = this.boardManager.generateBoard(10, 10)
			this.$store.dispatch('setBoard', this.tiles)
			this.$store.commit('boardManager', this.boardManager)

			// register listeners
			bus.$on('reset', () => console.log('resetting...'))
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
				tiles: [],
			}
		}
	}
</script>

