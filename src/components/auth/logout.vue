<template>
	<div class="logout">
		uhhm. ok bye.
	</div>
</template>

<script lang="ts">
	import firebase from 'firebase'

	export default {
		created() {
			firebase.auth().signOut()
			console.log('signed out')
		},
	}
</script>

<style scpoed>
	.logout {
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