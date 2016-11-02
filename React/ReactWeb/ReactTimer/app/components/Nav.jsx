/* jshint esversion: 6 */
let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown" activeClassName="active-link">Countdown</Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active-link">About</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">created by <a href="https://aperepeliak.github.io">aperepeliak</a></li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Nav;