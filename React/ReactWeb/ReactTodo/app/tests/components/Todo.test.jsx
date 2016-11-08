/* jshint esversion: 6 */
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jQuery');

let Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on click', () => {
        let todoData = {
            id: 19,
            text: 'Another test',
            completed: true
        };

        let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);

        let $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el.find('input')[0]);

        expect(spy).toHaveBeenCalledWith(19);
    });
});