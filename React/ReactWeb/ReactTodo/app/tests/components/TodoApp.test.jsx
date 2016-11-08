/* jshint esversion: 6 */
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');

let TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        let todoText = 'Test text';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({
            todos: []
        });

        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });
});