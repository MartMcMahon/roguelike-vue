<template>
	<DrawPlayer></DrawPlayer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: mapGetters({
		player: 'getPlayer'
	}),
	methods: {
		movePlayer = (vec) => {
			
		},
	}
}

</script>