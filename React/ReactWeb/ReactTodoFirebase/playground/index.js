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
    // We can add everything but arrays
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

/* Fetching data 

    // // snapshot has props: key, values
    // // val() returns root object (the whole db)
    // firebaseRef.once('value').then((snapshot) => {
    //     console.log('Got entire database', snapshot.val());
    // }, (e) => {console.log('unable to feth the data: ', e);});

    // // to fetch the subset of db call child()
    // firebaseRef.child('app').once('value').then((snapshot) => {
    //     console.log('Key\t\t:', snapshot.key);
    //     console.log('Value\t:', snapshot.val());
    // }, (e) => {console.log('unable to fetch the data: ', e);});

    // // listening for changes
    // // we can use on('value', ...) with root or any child reference
    // firebaseRef.on('value', (snapshot) => {
    //     console.log('Got value:', snapshot.val());
    // });

    // // removing all listeners
    // // firebaseRef.off();

    // // better to define callbacks in separate function vars in order to be able to
    // // add several listeners and be able to remove particular one if needed. Like this:
    // let logData = (snapshot) => {
    //     console.log('Got value:', snapshot.val());
    // };

    // firebaseRef.on('value', logData);
    // firebaseRef.off('value', logData);

*/

/* mini-challenge
    let userChange = (snapshot) => {
        console.log('User changed: ', snapshot.val());
    };
    firebaseRef.child('user').on('value', userChange);

    firebaseRef.child('user').update({
        name: 'Sveta'
    });
    firebaseRef.child('app').update({
        name: 'Application Todo'
    });
*/


/* Working with arrays */
// Instead of arrays firebase stores data in object with unique key
    /* Example
        // false
        firebaseRef.set({
            todos : [
                {
                    id: '123',
                    text: 'do smth'
                }
            ]
        });

        // OK!
        firebaseRef.set({
            todos: {
                '123' : {
                    text: 'do smth'
                }
            }
        });
     */


let notesRef = firebaseRef.child('notes');

/* Full notation
    let newNoteRef = notesRef.push();
    newNoteRef.set({
        text: 'Walk the dog'
    });
*/
// Shorthand notation
let newNoteRef = notesRef.push({
    text: 'Wash the dishes'
});

// Get the unique ID
//console.log('Todo ID: ', newNoteRef.key);

/* Other available events:
    for new items       (CHILD_ADDED)   - fires every time you add new child to reference
    for changed items   (CHILD_CHANGED) - 
    for removed items   (CHILD_REMOVED) -
 */

/* Examples 

    notesRef.on('child_added', (snapshot) => {
        console.log('New note added: ');
        console.log(' --> Key: ', snapshot.key);
        console.log(' --> Val: ', snapshot.val());
        console.log('--------------');
    });

    notesRef.on('child_changed', (snapshot) => {
        console.log('Note changed: ');
        console.log(' --> Key: ', snapshot.key);
        console.log(' --> Val: ', snapshot.val());
        console.log('--------------');
    });

    notesRef.on('child_removed', (snapshot) => {
        console.log('Note removed: ');
        console.log(' --> Key: ', snapshot.key);
        console.log(' --> Val: ', snapshot.val());
        console.log('--------------');
    });

*/

/* Mini-challenge

    let todosRef = firebaseRef.child('todos');

    todosRef.on('child_added', (snapshot) => {
        console.log('New todo added:');
        console.log('\t=> Key: ', snapshot.key);
        console.log('\t=> Val: ', snapshot.val());
    });

    todosRef.push({
        text: 'Todo #1'
    });
        
    todosRef.push({
        text: 'Todo #2'
    });
 */

















