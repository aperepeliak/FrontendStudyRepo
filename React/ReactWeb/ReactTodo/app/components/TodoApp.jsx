/* jshint esversion:6 */
let React = require('react');
let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let uuid = require('node-uuid');

let TodoApp = React.createClass({

    getInitialState() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Clean the yard'
                },
                {
                    id: uuid(),
                    text: 'Learn React'
                },
                {
                    id: uuid(),
                    text: 'Learn Angular 2'
                }
            ]
        }
    },

    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    // Generate random unique id
                    id: uuid(),
                    text: text
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

        let {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;