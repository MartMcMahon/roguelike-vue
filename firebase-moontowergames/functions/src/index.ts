import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import { DeltaSnapshot } from 'firebase-functions/lib/providers/database';
// import { Change } from '../node_modules/firebase-functions/lib/cloud-functions';

// init admin
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const buildPayload = (context) => {
	return {
		data: {
			data_type: "direct_message",
			title: "New Message: " + context.params.msgId,
			message: context.params.msgBody,
			message_id: 'ok'
		}
	}
}

exports.sendMessageNotification = functions.firestore.document('messages/{msgId}')
	.onWrite( (change, context) => {
		console.log(change)
		console.log(context)

		const payload = buildPayload(context)
		
		db.collection('users').doc('{userId}').get()
		.then( (userRef) => {
			if (userRef) {
				console.log(userRef.data()['fcmToken'])
				admin.messaging().sendToDevice(userRef.data()['fcmToken'], payload)
				console.log('sent a message')
			}
		})

		// return new Promise( () => 'all set')
		
		// console.log(getDeviceTokensPromise)

		//get the user id of the person who sent the message
		// const sender = change.after.child('sender').val();
		// const sender = 'me'
		// console.log("sender: ", sender);


		// const fcmToken = 'fXfkpMKvcnc:APA91bG-F6WMwNSg3zLKPuyiDrJ06n7TjOVz3Ym6JAeb-oX-Cxd7ATUljRJGwn8ocTzvRtDW-GgFoCnjJqSh0iq28gq5g1Q5oEDFrygYgq5o-1f4TuZXuFdJvFBweG9XjE9EW6K0koXA'

		// Build the message payload and send the message
		// console.log("Construction the notification message.");
		// const payload = {
		// 	data: {
		// 		data_type: "direct_message",
		// 		title: "New Message: " + context.params.msgId,//from " + sender,
		// 		message: "YO",
		// 		message_id: 'ok',
		// 	}
		// };
		
		
		// return admin.messaging().sendToDevice(fcmToken, payload)
		// 	.then(function(response) {
		// 		console.log("Successfully sent message:", response);
		// 	})
		// 	.catch(function(error) {
		// 		console.log("Error sending message:", error);
		// 	});
	});



// exports.sendMessageNotification = functions.database.ref('/messages/{msgId}')
// 	.onWrite( (change, context) => {
// 		console.log(change)
// 		console.log(context)
// 		console.log(context)
		
// 		// Get the list of device notification tokens.
// 		const getDeviceTokensPromise = admin.database()
// 		.ref('/users/${userId}/notificationTokens').once('value');
		
		
// 		console.log(getDeviceTokensPromise)

// // Get the follower profile.
// const getFollowerProfilePromise = admin.auth().getUser(userId);







