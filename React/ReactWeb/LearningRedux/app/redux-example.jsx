/* jshint esversion: 6 */
let redux = require('redux');

console.log('Starting redux example');

// createStore takes one arg which has to be a  pure function
// a reducer is a pure function in redux speak
// reducer takes existing state and action as the arguments and then computes the new state
let reducer = (state = {name: 'Anonumous'}, action) => {
    // state = state || {name: 'Anonumous'}; // ES5 syntax (old)
    
    return state;
};

let store = redux.createStore(reducer);

let currState = store.getState();
console.log('currState', currState);