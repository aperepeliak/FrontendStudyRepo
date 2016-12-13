/* jshint esversion:6 */
let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <ComponentOne count={123} />
    <ComponentTwo count={99} />
  </div>,
  document.getElementById('app')
);
