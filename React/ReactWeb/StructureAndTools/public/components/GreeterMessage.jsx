/* jshint esversion: 6 */
let React = require('react');

let GreeterMessage = React.createClass({
    render() {
        let name = this.props.name;
        let message = this.props.message;
        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
            </div>
        );
    }
});

module.exports = GreeterMessage;