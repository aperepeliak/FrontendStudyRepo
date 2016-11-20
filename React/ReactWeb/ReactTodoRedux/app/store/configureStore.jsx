/* jshint esversion: 6 */
let redux = require('redux');
let {searcTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export let configure = () => {
    let reducer = redux.combineReducers({
        searcText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    let store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f 
    ));
};
