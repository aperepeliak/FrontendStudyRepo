/* jshint esversion: 6 */
let expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, { firebaseRef } from 'app/firebase/';
let actions = require('actions');

// Creating a mockStore to use inside tests
let createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate search text action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some search text'
        };

        let res = actions.setSearchText('some search text');

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
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

    it('should generate add todos action object', () => {
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

    it('should generate toggle show completed action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        let res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });

    it('should generate update todo action', () => {
        let action = {
            type: 'UPDATE_TODO',
            id: '123',
            updates: {
                completed: false
            }
        };

        let res = actions.updateTodo(action.id, action.updates);
        expect(res).toEqual(action);
    });

    describe('Tests with firebase todos', () => {
        let testTodoRef;

        beforeEach((done) => {
            let todosRef = firebaseRef.child('todos');

            todosRef.remove().then((snapshot) => {
                testTodoRef = firebaseRef.child('todos').push();

                return testTodoRef.set({
                    text: 'smth to do',
                    completed: false,
                    createdAt: 200
                });
            })
            .then(() => done())
            .catch(done);
        });

        afterEach((done) => {
            testTodoRef.remove().then(() => done());
        });

        it('should populate todos and dispatch ADD_TODOS', (done) => {
            const store = createMockStore({});
            const action = actions.startAddTodos();

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0].type).toEqual('ADD_TODOS');
                expect(mockActions[0].todos.length).toBe(1);
                expect(mockActions[0].todos[0].text).toEqual('smth to do');
                
                done();
            }, done);
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();

                done();
            }, done);
        });
    });
});