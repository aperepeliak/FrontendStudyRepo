/* jshint esversion: 6 */
let React = require('react');
let Nav = require('Nav');

let Main = (props) => {
    return (
        <div>
            <Nav />
            <h2>Main component</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;

// we can put this anywhere we want put children
// {props.children}