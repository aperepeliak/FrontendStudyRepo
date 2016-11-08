/* jshint esversion: 6 */
let expect = require('expect');

let TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

    // It is a test lifecycle method and gets called before every test 
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [{
                id: 23,
                text: 'test local storage',
                completed: false
            }];

            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            // We are using toEqual with objects and arrays
            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            let badTodos = { a: 'b' };
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);

        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {
            let actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localStorage', () => {
            let todos = [{
                id: 23,
                text: 'test local storage',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));
            let actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });        


    });


});