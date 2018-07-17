<template>
	<div class="game-layer enemies">
		<div 
			class="enemy"
			v-for="enemy in enemies"
			:key="enemy.index"
			v-bind:style="{ top: enemy.pos[1]*50 + 17 + 'px', left: enemy.pos[0]*50 + 17 + 'px' }">
			X ({{enemy.pos[0]}}, {{enemy.pos[1]}})
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: ['enemies'],
}
</script>

<style scoped>

.enemy {
	color: #ab0000;
	position: relative;
}
</style>