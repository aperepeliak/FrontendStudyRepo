/* jshint esversion: 6 */

let React = require('react');
let ReactDOM = require('react-dom');
let Greeter = require('Greeter');

let firstName = 'Sveta';
let messageToPass = 'This is my message';

ReactDOM.render(
    <Greeter name={firstName} message={messageToPass} />,
    document.getElementById('app')
);

