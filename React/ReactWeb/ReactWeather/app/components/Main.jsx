/* jshint esversion: 6 */
let React = require('react');
let Nav = require('Nav');

let Main = React.createClass({
    render() {
        return(
            <div>
                <Nav />
                <h2>Main component</h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;