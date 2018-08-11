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

		this.messaging.requestPermission()

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

	onClick() {
		this.messaging.requestPermission()
			.then( () => {
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

							/*
							console.log('writing token to firestore')
							const userDoc = firestore.collection('users').doc(this.user.uid)
							userDoc.get().then( (doc) => {
								let data = doc.data()
								// make sure data for this user exists
								if (data && data.notificationTokensArray) {
									let res = data.notificationTokensArray
									// if this token is already listed, return null and do nothing
									if (token in res) {
										console.log(res)
										return res
									}
									// if this is a new token, write that shit to the array
									else {
										res.push(token)
										return res
									}
								}
								// array gets returned from last one only if we add to it.
								// this then sets the new array to firestore
							}).then( (res) => {
								if (res != null) {
									userDoc.set({ notificationTokensArray: res })
								}
							})
  					}
				})
				// if we can't get a token, we are probs running locally
				.catch((err) => {
					// Use err to check if blocked.
					console.log('couldn\'t get token. You\'re probably running in dev mode.')
					console.log('using "Test Token" ')

					const userDoc = firestore.collection('users').doc(this.user.uid)
					userDoc.get().then( (doc) => {
						let data = doc.data()
						if (data && data.notificationTokensArray) {
							let res = data.notificationTokensArray
							if ("Test Token" in res) {
								console.log(res)
								return res
							}
							else {
								res.push("Test Token")
								return res
							}
						}
					})
					.then( (res) => {
						if (res != null) {
							userDoc.set({ notificationTokensArray: res })
						}
					})

					/** object token field
					firestore.collection('users').doc(this.user.uid).get().then( (doc) => {
						let data = doc.data()
						if (data) {
							let res = {...data.notificationTokens, "Test Token": "Sunday" }
							console.log(res)
							return res
						}
					}).then( (newTokens) => {
						firestore.collection('users').doc(this.user.uid).set({
							notificationTokens: newTokens
						}, { merge: true })
					})

					**/
// 				})
// 		})
// 	}
// }

</script>
