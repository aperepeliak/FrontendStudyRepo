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

/* Setting data 
    // Setting data on the database
    // We can add everything bu arrays
    // set() erases all the previous data
    // set() also returns a Promise
*/
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
    });

 //   firebaseRef.child('app').set({
 //       name: 'Todo application'
 //   });


/* Data modification 
    update() modifies existing data without erasing other data
    multipath updates --> 'app/name': value || or to use child()

    update() comes with a promise as its return value
    firebaseRef.update({
        'app/name': 'Todo application',
        'user/name': 'Vasya'
    });
    firebaseRef.child('app').update({
        name: 'Todo application'
    });
    firebaseRef.child('user').update({
        name: 'Misha'
    });
*/

/* Removing data 
    // wipe the db completely. Also returns promise
    // firebaseRef.remove();

    // remove only app object
    // firebaseRef.child('app').remove(); 

    // remove particular field in a nested object
    // firebaseRef.child('app/name').remove();

    // setting value to null
    // firebaseRef.child('app').update({
    //     version: '2.0.0',
    //     name: null
    // });

    // Two more examples
    //  firebaseRef.update({
    //      isRunning: null
    //  });
    // firebaseRef.child('user/age').remove();
*/



