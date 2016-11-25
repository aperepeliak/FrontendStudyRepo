/* jshint esversion: 6 */
import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyBVFz5LfIr6Jr03FWorF2npAuACd9RvJ30",
        authDomain: "todofireapp-3724f.firebaseapp.com",
        databaseURL: "https://todofireapp-3724f.firebaseio.com",
        storageBucket: "todofireapp-3724f.appspot.com",
        messagingSenderId: "834731709312"
    };

    firebase.initializeApp(config);
} catch (e) {

}



export let firebaseRef = firebase.database().ref();
export default firebase;