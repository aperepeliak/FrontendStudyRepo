/* jshint esversion: 6 */
let React = require('react');
let {connect} = require('react-redux');
let actions = require('actions');

export let AddTodo = React.createClass({

    handleSubmit(e) {
        e.preventDefault();
        let {dispatch} = this.props;
        let todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            //this.props.onAddTodo(todoText);

            dispatch(actions.addTodo(todoText));
        } else {
            // Put focus on an input control automatically
            this.refs.todoText.focus();
        }
    },

    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

export default connect()(AddTodo);