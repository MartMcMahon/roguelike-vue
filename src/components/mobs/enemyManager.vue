<template>
	<div class="enemyManager">
		<DrawEnemies :enemies="enemies"></DrawEnemies>
	</div>
</template>

<script>
import DrawEnemies from './drawEnemies'
import { mapGetters } from 'vuex'

import { bus } from '../bus/bus'

export default {
	components: {
		'DrawEnemies': DrawEnemies
	},
	computed: mapGetters(['enemies']),
	created() {
		this.addEnemy(this.defaultEnemy)
		bus.$on('tick', (e) => {
			console.log('oookkkk')
		})

		console.log(this.$store.dispatch('testAction'))
	},
	data() {
		return {
		defaultEnemy: { index: 0, pos: [8, 1] }
		}
	},
	methods: {
		addEnemy(enemy) {
			this.$store.commit('addEnemy', enemy)
		},
		nextRound(event) {
			console.log('next round')
		}
	},
}

export const nextRound = () => {
	console.log('next round')
}
</script>