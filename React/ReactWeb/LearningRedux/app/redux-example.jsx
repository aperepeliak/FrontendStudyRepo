/* jshint esversion: 6 */
let redux = require('redux');
    

console.log('Starting redux example');

let actions = require('./actions/index');
let store = require('./store/configureStore').configure();

// subscribe to changes
// we can call unsubscribe func whenever we want to unsubscribe this callback
let unsubscribe = store.subscribe(() => {
    let state = store.getState();

    console.log('new state: ', store.getState());

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
    }
});

// unsubscribe();

let currState = store.getState();
console.log('currState', currState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Vasya'));

store.dispatch(actions.addMovie('Star Wars', 'action'));
store.dispatch(actions.addMovie('Hobbit', 'fantasy'));
store.dispatch(actions.removeMovie(1));
