/* jshint esversion: 6 */
let redux = require('redux');

console.log('Starting redux example');

// createStore takes one arg which has to be a  pure function
// a reducer is a pure function in redux speak
// reducer takes existing state and action as the arguments and then computes the new state
let reducer = (state = { name: 'Anonumous' }, action) => {
    // state = state || {name: 'Anonumous'}; // ES5 syntax (old)

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;       
    }
};


let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
// we can call unsubscribe func whenever we want to unsubscribe this callback
let unsubscribe = store.subscribe(() => {
    let state = store.getState();
    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
});

// unsubscribe();


let currState = store.getState();
console.log('currState', currState);

// action is an object
// it must have 'type' property. Type is an action's name
// let action = {
//     type: 'CHANGE_NAME', // Such naming is a rule
//     name: 'Andrew'
// };

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andrew'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: "Vasya"
});