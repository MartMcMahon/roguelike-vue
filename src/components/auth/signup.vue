<template>
	<div class="signup">
		<input 
			type="text" 
			placeholder="email"
			v-model="email"
		><br>
		<input 
			type="password" 
			placeholder="password"
			v-model="password"
		><br>
		<button v-on:click="signUp">sign up</button>
		<span>go back to login</span>
	</div>
</template>

<script lang="ts">
import firebase from 'firebase'

export default {
	name: 'signup',
	data() {
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		signUp() {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
				.then( (user) => {
					alert('did it')
				},
				(err) => {
					alert('whoops')
					alert(err.message)
				})
		},
	},
}
</script>

<style scpoed>
	.signup {
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