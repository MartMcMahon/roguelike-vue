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
			console.log(payload)
		} )
	}

	get user() {
		return this.$store.state.user
	}

	onClick() {
		this.messaging.requestPermission()
			.then( () => {
				this.messaging.getToken()
					.then( (token) => {
						console.log(token)
  					if (token === null) {
    					// User hasn't granted permission.
  					} else {
    					// We have token to send to backend
							console.log('writing token to firestore')
							firestore.collection('users').doc(this.user.uid).collection('notificationTokens').add({ value: token }).then(() => {
								console.log('done')
							})
  					}
				})
				.catch((err) => {
					// Use err to check if blocked.
				})
		})
	}
}

</script>
