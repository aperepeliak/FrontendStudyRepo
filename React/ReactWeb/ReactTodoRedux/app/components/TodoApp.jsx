/* jshint esversion:6 */
let React = require('react');
let uuid = require('node-uuid');
let moment = require('moment');

//let TodoList = require('TodoList');
import TodoList from 'TodoList';
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let TodoAPI = require('TodoAPI');

let TodoApp = React.createClass({

    getInitialState() {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
    },

    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
    },

    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    // Generate random unique id
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    },

    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },

    render() {

        let {todos, showCompleted, searchText} = this.state;

        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch} />
                            <TodoList />
                            <AddTodo onAddTodo={this.handleAddTodo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;

