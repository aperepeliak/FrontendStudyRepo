/* jshint esversion: 6 */
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jQuery');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        let searchText = 'Test';

        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: searchText
        };

        let spy = expect.createSpy();

        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        
        expect(spy).toHaveBeenCalledWith(action);
    });
});