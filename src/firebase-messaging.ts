import firebase from 'firebase'

const messaging = firebase.messaging()
messaging.requestPermission()
	.then(() => {
		console.log('yesss')
		return messaging.getToken()
	})
	.then((token) => {
		console.log('' + token)
	})
	.catch((err) => {
		console.log('rude')
})

messaging.onMessage( (payload) => {
	console.log('onMessage')
} )

	export default messaging;