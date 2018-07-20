<template>
	<div class="enemyManager">
		<DrawEnemies :enemies="enemies"></DrawEnemies>
	</div>
</template>

<script>
import DrawEnemies from './drawEnemies'
import { mapGetters } from 'vuex'

import Enemy from './enemy'

// event bus
import { bus } from '../bus/bus'

export default {
	components: {
		'DrawEnemies': DrawEnemies
	},
	computed: mapGetters(['enemies']),
	created() {
		let e = new Enemy()
		console.log(e)
		this.addEnemy(e)
		e = new Enemy()
		e.pos = [4, 6]
		e.key++
		console.log(e)
		this.addEnemy(e)
		bus.$on('tick', (event) => {
			console.log('oookkkk')
		})

		// console.log(this.$store.dispatch('testAction'))
	},
	data() {
		return {}
	},
	methods: {
		addEnemy(enemy) {
			this.$store.commit('addEnemy', enemy)
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