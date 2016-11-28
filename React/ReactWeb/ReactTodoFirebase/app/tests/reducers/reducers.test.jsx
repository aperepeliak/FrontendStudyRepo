/* jshint esversion:6 */
let expect = require('expect');
let df = require('deep-freeze-strict');

let reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'some text'
            };

            let res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };

            let res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toBe(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            let action = {
                type: 'ADD_TODO',
                todo: {
                    id: '123',
                    text: 'Smth to do',
                    completed: false,
                    createdAt: 500
                }
            };

            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toBe(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should update todo', () => {
            let initTodos = [
                {
                    id: '123',
                    text: 'initial todo',
                    completed: true,
                    createdAt: 177,
                    completedAt: 200
                }
            ];

            let updates = {
                completed: false,
                completedAt: null
            };

            let action = {
                type: 'UPDATE_TODO',
                id: initTodos[0].id,
                updates
            };

            let res = reducers.todosReducer(df(initTodos), df(action));

            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(initTodos[0].text);
        });

        it('should add existing todos', () => {
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

            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toBe(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});