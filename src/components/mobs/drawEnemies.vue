<template>
	<div class="game-layer enemies">
		<TileImg 
			v-if="!asciiMode"
			:boardTile="getEnemyTile()"
			v-for="enemy in enemyList"
			:key="enemy.key"
			v-bind:style="{ top: enemy.pos[1]*32 + 'px', left: enemy.pos[0]*32 + 'px' }"
		/>
		<div 
			v-if="asciiMode"
			class="enemy"
			v-for="enemy in enemyList"
			:key="enemy.key"
			v-bind:style="{ top: enemy.pos[1]*32 + 8 + 'px', left: enemy.pos[0]*32 + 8 + 'px' }">
			X
		</div>
	</div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import AssetManager from '../../assets/assetManager'
import TileImg from '../../assets/tileImg.vue'
import Enemy from './enemy'

@Component({
	components: {
		TileImg
	},
	name: 'DrawEnemies'
})
export default class DrawEnemies extends Vue {

	@Prop() enemies: any

	// computed	
	get enemyList() {
		return this.enemies
	}
	get asciiMode() {
		return this.$store.state.renderInfo.asciiMode
	}

	getEnemyTile() {
		return AssetManager.getEnemyTile()
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