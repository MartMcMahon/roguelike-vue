<template>
	<div>
		<v-btn @click="onClick">:D</v-btn>
	</div>
</template>

<script lang='ts'>
import firebase from 'firebase'

export default {
	created() {
		console.log('hello darkness, my old friend')
	},
	data() {
		return {
			messaging: firebase.messaging(),
		}
	},
	methods: {
		onClick() {
			this.messaging.requestPermission()
		.then(() => {
			console.log('yesss')
			return this.messaging.getToken()
		})
		.then((token) => {
			console.log('' + token)
		})
		.catch((err) => {
			console.log('rude')
		})
		},
	},
}
</script>
