<template>
	<div class="login">
		<input type="text" placeholder="email"><br>
		<input type="password" placeholder="password"><br>
		<button v-on:click="login">log in</button>
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
			firebase.auth().getRedirectResult().then( (result) => {
				if (result.credential) {
					var token = result.credential.accessToken
					console.log(token)
				}
			})
		},
		methods: {
			login() {
				let provider = new firebase.auth.GoogleAuthProvider()
				firebase.auth().signInWithRedirect(provider)
			},
			logout() {
				firebase.auth().signOut()
				console.log('signed out')
			}
		}
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
		width: 10%;
		cursor: pointer;
	}
</style>