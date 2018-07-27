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

	import { mapGetters } from 'vuex'

	import { bus } from '@/bus'

	import styles from '../effects/shakeAnimation.css'

	export default {
		components: {
			'ControllerLayer': ControllerLayer,
			'EnemyManager': EnemyManager,
		},
		computed: {
			...mapGetters({
			// assetManager: 'assetManager',
			boardManager: 'boardManager',
			tiles: 'tiles',
			}),
		},
		created() {
			// manage initializetion order here
			// register listeners
			// bus.$on('boardReady', () => this.boardReady = true)
			bus.$on('reset', () => console.log('resetting...'))
			bus.$on('enemyHit', this.shakeScreen)

			this.$store.commit('boardManager', this.boardManager)

			// generate the board
			// this.tiles = this.boardManager.generateBoard(10, 10)
			console.log('board generated')
			this.$store.dispatch('setBoard', this.boardManager.generateBoard(10, 10))
		},
		data() {
			return {
				screenIsShaking: false,
			}
		},
		methods: {
			shakeScreen() {
				this.screenIsShaking = true
				setTimeout(() => this.screenIsShaking = false, 200)
			},
		},
	}
</script>

