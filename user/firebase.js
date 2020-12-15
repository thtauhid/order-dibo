import * as firebase from 'firebase'
import '@firebase/auth'
const firebaseConfig = {
	apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
	authDomain: 'appname.firebaseapp.com',
	databaseURL: 'https://appname-rtdb.firebaseio.com',
	projectId: 'appname',
	storageBucket: 'appname.appspot.com',
	messagingSenderId: '000000000000',
	appId: '1:00000000000000000:web:abcdefghijk12467890',
}
firebase.initializeApp(firebaseConfig)
export default firebase
