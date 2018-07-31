<template>
	<div>
		<v-btn @click="onClick">:D</v-btn>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import firebase from 'firebase'
import { firestore } from '../firebase'

@Component({
	name: 'SubscribeButton'
})
export default class SubscribeButton extends Vue {
		
	messaging = firebase.messaging()

	created() {
		this.messaging.usePublicVapidKey("BM47ty_fAI2_Kd0AH0gUy3KtbTs1AMkqozdNmCsMcIOZNpEafunPf7ozMO0tA41hiWqcPMEvIvJR914zvd17UYA")
		this.messaging.onMessage( (payload) => {
		console.log('onMessage')
		} )
	}

	get user() {
		return this.$store.state.user
	}

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
				let uid = this.user.uid
				firestore.collection('users').doc(uid).set({token: 'cool!'}, { merge: true })
				console.log('rude')
		})
	}
}
</script>
