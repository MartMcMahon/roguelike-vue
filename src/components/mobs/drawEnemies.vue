<template>
	<div class="game-layer enemies">
		<div 
			class="enemy"
			v-for="enemy in enemies"
			:key="enemy.index"
			v-bind:style="{ top: enemy.pos[1]*32 + 8 + 'px', left: enemy.pos[0]*32 + 8 + 'px' }">
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
	position: inherit;
}
</style>