/* jshint esversion: 6 */
let React = require('react');
let ReactDOM = require('react-dom');

// var Route = require('react-router').Route;
// etc.
// it is called destructure syntax
// another example
// var obj = {name: 'Andrew'};
// var {name} = obj;
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let Main = require('Main');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>

        </Route>
    </Router>,
    document.getElementById('app')
);

