/* jshint esversion: 6 */
let expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

let actions = require('actions');

// Creating a mockStore to use inside tests
let createMockStore = configureMockStore([thunk]);

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
            todo: {
                id: '123',
                text: 'todo',
                completed: false,
                createdAt: 900
            }
        };

        let res = actions.addTodo(action.todo);
        expect(res).toEqual(action);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'My todo item';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });

            done();

        }).catch(done);
    });

    it ('should generate add todos action object', () => {
        let todos = [{
            id: '123',
            text: 'anything',
            completed: false,
            completedAt: undefined,
            createdAt: 33000
        }];

        let action = {
            type: 'ADD_TODOS',
            todos
        };

        let res = actions.addTodos(todos);

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