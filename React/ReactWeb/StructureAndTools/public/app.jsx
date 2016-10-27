/* jshint esversion: 6 */

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

let firstName = 'Andrew';
let messageToPass = 'This is my message';

ReactDOM.render(
    <Greeter name={firstName} message={messageToPass} />,
    document.getElementById('app')
);

