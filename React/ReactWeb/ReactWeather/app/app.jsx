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
let Weather = require('Weather');
let About = require('About');
let Examples = require('Examples');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById('app')
);

