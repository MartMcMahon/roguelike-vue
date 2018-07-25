<template>
	<div>
		<v-btn @click="onClick">:D</v-btn>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import firebase from 'firebase'

@Component({
	name: 'SubscribeButton'
})
export default class SubscribeButton extends Vue {
		
	messaging = firebase.messaging()

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
	}

	created() {
		console.log('hello darkness, my old friend')
	}
}
</script>
