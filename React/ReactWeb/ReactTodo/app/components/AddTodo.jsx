/* jshint esversion: 6 */
let React = require('react');

let AddTodo = React.createClass({

    handleSubmit(e) {
        e.preventDefault();

        let todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            // Put focus on an input control automatically
            this.refs.todoText.focus();
        }
    },

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;