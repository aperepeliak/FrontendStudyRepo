/* jshint esversion: 6 */
let expect = require('expect');
let actions = require('actions');

describe('Actions', () => {
    it ('should generate search text action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some search text'
        };

        let res = actions.setSearchText('some search text');

        expect(res).toEqual(action);
    });

    it ('should generate add todo action', () => {
        let action = {
            type: 'ADD_TODO',
            text: 'todo smth'
        };

        let res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });

    it ('should generate toggle show completed action', () => {
       let action = {
           type: 'TOGGLE_SHOW_COMPLETED'
       };

       let res = actions.toggleShowCompleted();
       expect(res).toEqual(action); 
    });

    it ('should generate toggle todo action', () => {
        let action = {
            type: 'TOGGLE_TODO',
            id: 1
        };

        let res = actions.toggleTodo(1);
        expect(res).toEqual(action);
    });
});