/* jshint esversion: 6 */

const ClickCounter = React.createClass({

    getInitialState: function() {
        return {
            count: 0
        }
    },

    increment: function() {
        this.setState({
            count: this.state.count + 1
        }); 
    },

    render: function() {
        return (
            <button onClick = {this.increment}>I have been clicked {this.state.count} times! </button>
        );
    }
});

ReactDOM.render(
    <ClickCounter />,
    document.getElementById('container')
);