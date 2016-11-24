/* jshint esversion: 6 */
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBVFz5LfIr6Jr03FWorF2npAuACd9RvJ30",
    authDomain: "todofireapp-3724f.firebaseapp.com",
    databaseURL: "https://todofireapp-3724f.firebaseio.com",
    storageBucket: "todofireapp-3724f.appspot.com",
    messagingSenderId: "834731709312"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

// Setting data on the database
// We can add everything bu arrays
// set() erases all the previous data
// set() also returns a Promise
firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Andrii',
        age: 27
    }, 
}).then(() => {
    console.log('Set worked!');
}, (err) => {
    console.log('Set failed!');
});

firebaseRef.child('user').set({
    name: 'Vasya'
});

firebaseRef.child('app').set({
    name: 'Todo application'
});