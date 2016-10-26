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
        let name = this.refs.name.value;
        if (name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" placeholder="Type your name" />
                <button>Set Name</button>
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
            name: this.props.name
        };
    },

    handleNewName(name) {
        this.setState({
            name: name
        });
    },

    render() {
        let name = this.state.name;
        let message = this.props.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>     
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

