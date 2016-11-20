/* jshint esversion: 6 */
let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jQuery');

import {configure} from 'configureStore';

//let TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        let todos = [
            {
                id: 1,
                text: 'do smth',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            },
            {
                id: 2,
                text: 'check mail',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ];

        let store = configure({
            todos
        });

        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList />
            </Provider>
        );

        let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

        // this method lets check how many of a given component are rendered under a separate component. 
        // Returns an array of components.
        // in this case we are checking how many ConnectedTodo components are rendered under TodoList component  
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        let todos = [];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        let $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});