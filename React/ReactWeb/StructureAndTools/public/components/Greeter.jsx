/* jshint esversion: 6 */
let React = require('react');

let GreeterMessage = require('GreeterMessage');
let GreeterForm = require('GreeterForm');

let Greeter = React.createClass({

    getDefaultProps() {
        return {
            name: 'React',
            message: 'default message'
        }
    },

    getInitialState() {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handleNewSubmit(updates) {
        this.setState({
            name: updates.name || this.state.name,
            message: updates.message || this.state.message
        });
    },

    render() {
        let name = this.state.name;
        let message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewSubmit={this.handleNewSubmit}/>     
            </div>
        );
    }
});

module.exports = Greeter;