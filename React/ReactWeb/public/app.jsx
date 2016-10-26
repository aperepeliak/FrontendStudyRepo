var Greeter = React.createClass({

    getDefaultProps() {
        return {
            name: 'React',
            message: 'This is the paragraph from the component'
        }
    },

    getInitialState() {
        return {
            name: this.props.name
        };
    },

    onButtonClick(event) {
        // preventing the form from submiting and a page to refresh
        event.preventDefault();

        let nameRef = this.refs.name;
        let name = nameRef.value;

        nameRef.value = '';

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
        }
    },

    render() {

        let name = this.state.name;
        let message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!!'}</p>

                <form onSubmit={this.onButtonClick}>
                    <input placeholder="Type your name" type="text" ref="name" />
                    <button>Set Name</button>
                </form>
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

