/* jshint esversion: 6 */
let React = require('react');
let {Link} = require('react-router');

let Nav = React.createClass({
    render() {
        return(
            <div>
                <h2>Nav component</h2>
                <Link to="/">Get Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
});

module.exports = Nav;
