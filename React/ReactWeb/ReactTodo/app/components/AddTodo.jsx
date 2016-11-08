/* jshint esversion: 6 */
let React = require('react');

let AddTodo = React.createClass({

    onSubmit(e) {
        e.preventDefault();

        let newTodo = this.refs.todo.value;

        if (newTodo.length > 0) {
            this.refs.todo.value = '';
            this.props.onAddTodo(newTodo);
        }
    },

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todo" placeholder="What do you need to do?" />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;