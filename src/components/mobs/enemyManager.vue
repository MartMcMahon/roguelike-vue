<template>
	<div class="enemyManager">
		<DrawEnemies :enemies="enemies"></DrawEnemies>
	</div>
</template>

<script>
import DrawEnemies from './drawEnemies'
import { mapGetters } from 'vuex'

import Enemy from './enemy'

import Vector from '@/types/vector'

// event bus
import { bus } from '@/bus'

export default {
	components: {
		'DrawEnemies': DrawEnemies
	},
	computed: mapGetters(['enemies']),
	created() {
		
		this.addDebugEnemies()

		bus.$on('tick', (event) => {
			console.log('oookkkk')
		})

		bus.$on('reset', () => {
			this.addDebugEnemies()
		})
	},
	data() {
		return {}
	},
	methods: {
		addEnemy(enemy) {
			this.$store.commit('addEnemy', enemy)
		},
		addDebugEnemies() {
			// enemies for debugging
			let e = new Enemy(this, new Vector(2, 2))
			// console.log(e)
			this.addEnemy(e)

			e = new Enemy(this, new Vector(4, 6))
			e.key++
			// console.log(e)
			this.addEnemy(e)
		},
		initEnemies() {
			this.enemies.forEach(enemy => {
				enemy.init()
			})
		},
		nextRound(event) {
			console.log('next round')
		},
	},
}

export const nextRound = () => {
	console.log('next round')
}
</script>