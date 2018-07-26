<template>
	<div class="game-layer enemies">
		<div 
			class="enemy"
			v-for="enemy in enemyList"
			:key="enemy.key"
			v-bind:style="{ top: enemy.pos[1]*32 + 8 + 'px', left: enemy.pos[0]*32 + 8 + 'px' }">
			X ({{enemy.pos[0]}}, {{enemy.pos[1]}})
		</div>
	</div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

import Enemy from './enemy'

@Component({
	name: 'DrawEnemies'
})
export default class DrawEnemies extends Vue {

	@Prop() enemies: any


	// computed	
	get enemyList() {
		console.log(this.enemies)
		return this.enemies
	}

	created() {
		// console.log(this.enemies)
	}
}
</script>

<style scoped>

.enemy {
	color: #ab0000;
	position: inherit;
}
</style>