<template>
	<div class="chat-screen">
		<div class="chat-top">
			<div class="dialog-box">
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
import { bus } from '@/bus'

import SubscribeButton from '../subscribeButton.vue'

@Component({
	components: {
		SubscribeButton
	},
	name: "chat",
})
export default class Chat extends Vue {

	// computed
	get asciiMode() {
		return this.$store.state.renderInfo.asciiMode
	}
	set asciiMode(value: boolean) {
		this.$store.commit('asciiMode', value)
	}



	onSend() {
		bus.$emit('sendMessage', null)
		console.log('send message')
	}
}
</script>

<style scoped>


</style>