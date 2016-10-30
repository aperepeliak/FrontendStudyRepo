/* jshint esversion: 6 */
let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = (props) => {
    return (
        <div>
            <h2>Nav component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
        </div>
    );
};

module.exports = Nav;
