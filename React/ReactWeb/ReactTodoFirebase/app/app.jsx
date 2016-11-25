/* jshint esversion:6 */
let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();
let TodoAPI = require('TodoAPI');

import './../playground/index';

store.subscribe(() => {
  let state = store.getState();
  //console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();

store.dispatch(actions.addTodos(initialTodos));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// Todo app component and all its children will be able to acess the data on the store and dispatch actions
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
