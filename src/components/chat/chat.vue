<template>
	<div class="chat-screen">
		<div class="chat-top">
			<div class="dialog-box">
				<div 
					class="single-message"
					v-for="msg in messages"
					:key="msg.id"
				>
					{{ msg.body }}
				</div>

				<div class="single-message">
					msg1: Hi!
				</div>
				<div class="single-message">
					msg2: sup
				</div>
			</div>
		</div>
		<div class="chat-bottom">
			<div class="msg-input">
				<input 
					type="text"
					placeholder="message"
					v-model="msgBody"
				/>
			</div>
			<div class="send-buttom">
				<v-app dark>
					<v-container dark>
						<v-btn @click="onSend">send</v-btn>
						<SubscribeButton></SubscribeButton>
					</v-container>
				</v-app>
			</div>
		</div>
	</div>
</template>
		
<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import firebase from 'firebase'
import { firestore } from '../../firebase'
import { bus } from '@/bus'

import SubscribeButton from '../subscribeButton.vue'

@Component({
	components: {
		SubscribeButton
	},
	name: "chat",
})
export default class Chat extends Vue {

	messages: {}[] = []

	msgBody: string = ''

	// computed
	get asciiMode() {
		return this.$store.state.renderInfo.asciiMode
	}
	set asciiMode(value: boolean) {
		this.$store.commit('asciiMode', value)
	}

	created() {
		// firestore.collection('messages').get().then(snapshot => {
		// 	console.log(snapshot)
		// })

		firestore.collection('messages').onSnapshot( (snapshot) => {
			let newMessages: {}[] = []
			snapshot.forEach( (doc) => {
				let localOnly = doc.metadata.hasPendingWrites
				newMessages.push( { ...doc.data(), localOnly: localOnly })
			})
			this.messages = newMessages
		})
	}

	onSend() {
		bus.$emit('sendMessage', null)
		// console.log(firebase.auth().currentUser)
		console.log('send message')
		firestore.collection('messages').doc().set({ sender: 'me', body: this.msgBody })
		// console.log(this.firestore.ok)
	}
	
}
</script>

<style scoped>


</style>