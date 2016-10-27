/* jshint esversion: 6 */
let React = require('react');

let GreeterForm = React.createClass({

    onFormSubmit(e) {
        e.preventDefault();

        let updates = {};

        let name = this.refs.name.value;
        let message = this.refs.message.value;

        if (name.length > 0) {
            updates.name = name;
            this.refs.name.value = '';
        }
        if (message.length > 0) {
            updates.message = message;
            this.refs.message.value = '';
        }

        this.props.onNewSubmit(updates);
    },

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" placeholder="Type your name" />
                <br />
                <textarea ref="message" placeholder="type your message"></textarea>
                <br />
                <button>Submit</button>
            </form>
        );
    }
});

module.exports = GreeterForm;