/* jshint esversion: 6 */
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jQuery');

import * as actions from 'actions';
let {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        
        let action = actions.startAddTodo('test input');
        
        let spy = expect.createSpy();

        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)

        let $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.todoText.value = 'test input';

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        let spy = expect.createSpy();

        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
        let $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});