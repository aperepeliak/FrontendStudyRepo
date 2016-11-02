/* jshint esversion: 6 */
let React = require('react');
let {Link} = require('react-router');

let About = (props) => {
    return (
        <div className="about">
            <h1 className="text-center">About</h1>
            <p>Welcome to React Timer App. The project uses:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - JS library for building UI
                </li>
                <li>
                    <a href="https://foundation.zurb.com/">Foundation framework</a> - for styling the app
                </li>
                <li>
                    <a href="https://webpack.github.io/">Webpack</a> - organizing the workflow
                </li>
                <li>
                    <a href="https://github.com/mjackson/expect">Expect</a> - Michael Jackson's assertion library
                </li>
            </ul>
        </div>
    );
};

module.exports = About;