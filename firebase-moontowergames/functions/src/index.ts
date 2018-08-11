import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// init admin
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const buildPayload = (change, context) => {
	let data = change.after.getData()

	return {
		data: {
			data_type: "direct_message",
			title: data['sender'] + ":",
			// context.params.msgId,
			message: data['body'],
			message_id: "ok"
		},
		notification: {
			"title": data['sender'] + ":",
			"body": data['body'],
			// "click_action" : "https://dummypage.com"
		},
		// "to" : "eEz-Q2sG8nQ:APA91bHJQRT0JJ..."
	}
}

exports.sendMessageNotification = functions.firestore.document('messages/{msgId}')
	.onWrite( (change, context) => {
		// console.log(change)
		// console.log(context)

		const payload = buildPayload(change, context)
		const promises = []

		db.collection('users').get().then( usersSnapshot => {
			usersSnapshot.forEach(userDoc => {
				const fcmToken = userDoc.get('fcmToken')
				console.log(userDoc.id)
				console.log(fcmToken)

				// add promise to our list
				promises.push(admin.messaging().sendToDevice(fcmToken, payload));
			})
		})
		.then( () => {
			console.log(promises)
			return Promise.all(promises)
			.then( (response) => {
					console.log("Successfully sent message:", response);
			})
			.catch(function(err) {
				console.log("Error sending message:", err);
			});
		})
		.catch(err => {
			console.log(err)
		})		
	});
