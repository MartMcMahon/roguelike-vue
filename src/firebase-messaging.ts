import firebase from 'firebase'


const messaging = firebase.messaging()
messaging.requestPermission()
  .then(function() {
    console.log('yesss')
    return messaging.getToken()
  })
  .then((token) => {
		console.log(''+ token)
  })
  .catch(function(err) {
    console.log('rude')
});

export default messaging;