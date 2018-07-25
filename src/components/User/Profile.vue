<template>
	<div>
		<p>
			Profile works!
			{{ user }}
		</p>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import firebase from 'firebase'

@Component({
	name: 'Profile'
})
export default class Profile extends Vue {

	user: any = ''

	created() {
		this.user = firebase.auth().currentUser
	}
}
</script>