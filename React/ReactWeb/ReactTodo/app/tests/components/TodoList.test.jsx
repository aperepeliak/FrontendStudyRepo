/* jshint esversion: 6 */
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');

let TodoList = require('TodoList');
let Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        let todos = [
            {
                id: 1,
                text: 'do smth'
            },
            {
                id: 2,
                text: 'check mail'
            }
        ];

        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);

        // this method lets check how many of a given component are rendered under a separate component. 
        // Returns an array of components.
        // in this case we are checking how many Todo components are rendered under TodoList component  
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });
});