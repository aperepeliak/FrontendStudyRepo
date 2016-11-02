/* jshint esversion: 6 */
let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('Main');

let About = require('About');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App SCSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
           <Route path="about" component={About} />
           
        </Route>
    </Router>,
    document.getElementById('app')
);