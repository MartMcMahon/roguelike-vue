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

		this.subscribe()

		this.messaging.onTokenRefresh( () => {
			this.messaging.getToken().then( (refreshedToken) => {
				if (refreshedToken) {
					console.log('Token refreshed')
					this.sendTokenToServer(refreshedToken)
				}
			})
			.catch( (err: any) => {
				console.log('can\'t get refreshed token')
			})
		})
	}

	sendTokenToServer(token: string) {
		console.log('sending token to server')
	}

	get user() {
		return this.$store.state.user
	}

	subscribe() {
		this.messaging.requestPermission()
			.then( (perm) => {
				console.log(perm)
				this.messaging.getToken()
					.then( (token) => {
						console.log(token)
  					if (token) {
							firestore.collection('users').doc(this.user.uid).set({ fcmToken: token }).then(() => {
								console.log('done')
								console.log(firestore.collection('users').doc(this.user.uid).get())
							})
  					} else {
							console.log('no token')
						}
				})
			})
			.catch( (err) => {
				console.log( err )
			})
	}
}
</script>
