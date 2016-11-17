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

let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

let unsubscribe = store.subscribe(() => {
    let state = store.getState();
    console.log('searchText is: ', state.searchText);
    document.getElementById('app').innerHTML = state.searchText;
});

console.log('currState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'test'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'hello'
})

