/* jshint esversion: 6 */
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jQuery');

let AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo if smth entered', () => {
        let spy = expect.createSpy();

        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />)

        let $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.todoText.value = 'test input';

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('test input');
    });

    it('should not call onAddTodo if empty string is entered', () => {
        let spy = expect.createSpy();

        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
        let $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});