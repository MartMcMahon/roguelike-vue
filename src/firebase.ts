import firebase from 'firebase'
import { config } from './config/firebase'

export const firebaseApp = firebase.initializeApp(config)
export const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

// firebase.messaging().
export class GameUser {

	uid: string = ''
	displayName: string = ''
	email: string = ''
	firebaseUser: any = null
	firestoreUserObj: any = null
	token: string = ''

	constructor() {
		this.firebaseUser = firebase.auth().currentUser
		console.log('why hullo!')
		console.log(this.firebaseUser)
		// if (this.firebaseUser != null) {
		// 	// this.initUser()
		// 	this.setToken()
		// }
		// else {
		// 	console.log('not logged in;')
		// }
	}

	// initUser() {
	// 	// lookup messaging token
	// 	firestore.collection('tokens').doc(this.firebaseUser.uid).get().then(res => {
	// 		if (res.data() != undefined) {
	// 			this.token = res.data().token
	// 		}
	// 	})
	// 	console.log(this.token)

		// lookup user game data
	

	// setToken() {
	// 	firestore.collection('users').doc(this.firebaseUser.uid).collection('tokens').add({'ok':'hi'})
	// }

	getFirestoreUserObj(uid: string) {
		return this.firestoreUserObj = firestore.collection('users').doc(uid)
	}

	// writeToken(token: string) {
	// 	this.mesagingToken = token
	// 	firestore.collection('userData').doc(firebase.aut)
	// }

}