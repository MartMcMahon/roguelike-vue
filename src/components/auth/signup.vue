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
import Vue from 'vue'
import Component from 'vue-class-component'
import firebase from 'firebase'

@Component({
	name: 'Signup'
})
export default class Signup extends Vue {

	email: string = ''
	password: string = ''

	signUp() {
		firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
			.then( (user) => {
				console.log('did it')
			},
			(err) => {
				console.log('whoops')
				console.log(err.message)
		})
	}
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