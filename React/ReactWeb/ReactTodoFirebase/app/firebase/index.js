/* jshint esversion: 6 */
import firebase from 'firebase';

try {
    var config = {
        // db credentials
    };

    firebase.initializeApp(config);
} catch (e) {

}



export let firebaseRef = firebase.database().ref();
export default firebase;