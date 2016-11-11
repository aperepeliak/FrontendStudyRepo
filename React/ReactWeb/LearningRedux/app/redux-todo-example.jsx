/* jshint esversion: 6 */
let redux = require('redux');

console.log('starting redux-todo example app');

let stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

let reducer = (state = stateDefault, action) => {

    return state;
};

let store = redux.createStore(reducer);

console.log('currState', store.getState());

