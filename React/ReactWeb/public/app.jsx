var Greeter = React.createClass({

    getDefaultProps() {
        return {
            name: 'React',
            message: 'This is the paragraph from the component'
        }
    },

    render() {

       let name = this.props.name;
       let message = this.props.message;

       return (
          <div>
            <h1>Hello {name}!</h1>
            <p>{message + '!!'}</p>
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

