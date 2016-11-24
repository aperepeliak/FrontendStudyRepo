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
                text: 'test todo'
            };

            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toBe(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle todo status', () => {
            let initTodos = [
                {
                    id: 1,
                    text: 'initial todo',
                    completed: false,
                    createdAt: 17778854,
                    completedAt: undefined
                }
            ];

            let action = {
                type: 'TOGGLE_TODO',
                id: 1
            };

            let res = reducers.todosReducer(df(initTodos), df(action));

            expect(res[0].completed).toBe(true);
            expect(res[0].completedAt).toNotBe(undefined);
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