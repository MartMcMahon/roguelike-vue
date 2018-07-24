<template>
	<div class="login">
		<button v-on:click="login">log in w/ google</button>
		<button v-on:click="logout">log out</button>
	</div>
</template>

<script lang="ts">
import firebase from 'firebase'

export default {
	name: 'login',
	data() {
		return {}
	},
	created() {
		firebase.auth().getRedirectResult().then( (result: any) => {
			if (result.credential) {
				const token = result.credential.accessToken
				// console.log(result)
			}
		})
	},
	methods: {
		login() {
			const provider = new firebase.auth.GoogleAuthProvider()
			firebase.auth().signInWithRedirect(provider)
		},
		logout() {
			firebase.auth().signOut()
				.then(() => {
					// console.log('signed out')
				})
		},
	},
}
</script>

<style scpoed>
	.login {
		margin-top: 40px;
	}
	input {
		margin: 10px 0;
		width: 20%;
		padding: 5px;
	}
	button {
		margin-top: 20px;
		width: 25%;
		height: 15%;
		cursor: pointer;
	}
</style>