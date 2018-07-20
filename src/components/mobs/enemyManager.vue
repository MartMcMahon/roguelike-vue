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
		// let e = this.defaultEnemy
		let e = new Enemy()
		// e.pos = [8, 1]
		// e.key = 1
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
		return {
			defaultEnemy: {
				key: 1, 
				pos: [8, 1],
				getCoordsStr() {
					return this.pos[0] + ',' + this.pos[1]
				},
				move() {
					let dir = Math.floor(Math.random() * 10) % 4
					switch (dir) {
						case 0:
							this.pos[1]--
							break
						case 1:
							this.pos[1]++
							break
						case 2:
							this.pos[0]++
							break
						case 3:
							this.pos[0]--
							break
					}
					return Object.assign({}, this)
				},
				die() {
					//drop loot
					//add loot to map

					//explode?
					//trigger onDeath event
					//trigger onKill event
				},
			}
		}
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