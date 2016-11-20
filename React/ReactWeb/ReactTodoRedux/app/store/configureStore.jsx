/* jshint esversion: 6 */
let redux = require('redux');
let {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export let configure = (initialState = {}) => {
    let reducer = redux.combineReducers({
        searcText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    let store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f 
    ));

    return store;
};
