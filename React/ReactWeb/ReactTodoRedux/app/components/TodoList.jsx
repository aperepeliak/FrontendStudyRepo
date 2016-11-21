/* jshint esversion: 6 */
let React = require('react');
let {connect} = require('react-redux');
import Todo from 'Todo';
let TodoAPI = require('TodoAPI');

export let TodoList = React.createClass({
    render() {
        let {todos, showCompleted, searchText} = this.props;

        //console.log(searchText);

        let renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                );
            }
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} />
                );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

// we wanna do a connection and we wanna connect it to TodoList
export default connect(
    (state) => {
        console.log(state);
        return state;
    }
)(TodoList);