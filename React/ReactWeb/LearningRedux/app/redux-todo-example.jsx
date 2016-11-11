/* jshint esversion: 6 */
let redux = require('redux');

console.log('starting redux-todo example app');

let stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

let reducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

let store = redux.createStore(reducer);

console.log('currState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'test'
});

console.log('new state: ', store.getState());

