<template>
	<div>
		<p>
			Profile works!
			{{ user }}
		</p>
	</div>
</template>

<script lang="ts">
import firebase from 'firebase'

export default {
	data() {
		return {
			user: '',
		}
	},
	created() {
		this.user = firebase.auth().currentUser
	},
}
</script>