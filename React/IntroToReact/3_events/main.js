/* jshint esversion: 6 */

const ClickedChildren = React.createClass({

    render: function() {
        return (
            <div>
                <button name='btn1' onClick={this.props.onChildClick} >Click me!</button>
                <button name='btn2' onClick={this.props.onChildClick} >Or me!</button>
                <button name='btn3' onClick={this.props.onChildClick} >Even me!</button>
            </div>
        );
    }
});

const Clicker = React.createClass({

    announce: function(e) {
        alert('You clicked button: ' + e.target.name);
    },

    render: function() {
        return (
            <ClickedChildren onChildClick = {this.announce} />
        );
    }
});

ReactDOM.render(
    <Clicker />,
    document.getElementById('container')
);