/* jshint esversion: 6 */
let React = require('react');
let Nav = require('Nav');

let Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Nav />
                    <p>Main.jsx rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;

// we can put this anywhere we want put children
// {props.children}

