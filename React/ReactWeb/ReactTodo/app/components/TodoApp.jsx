/* jshint esversion:6 */
let React = require('react');
let TodoList = require('TodoList');

let TodoApp = React.createClass({

    getInitialState() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Learn React'
                },
                {
                    id: 4,
                    text: 'Learn Angular 2'
                }
            ]
        }
    },

    render() {

        let {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
});

module.exports = TodoApp;