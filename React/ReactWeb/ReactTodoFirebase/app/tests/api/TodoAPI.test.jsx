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

    describe('filterTodos', () => {
        let todos = [
            {
                id: 1,
                text: 'some text',
                completed: true
            },
            {
                id: 2,
                text: 'test',
                completed: false
            },
            {
                id: 3,
                text: 'other text',
                completed: true
            }
        ];

        it('should return all items if showCompleted is true', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should only return items that have not been completed', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should return all todos if searchText is empty', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should only return items that match searchText', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'text');
            expect(filteredTodos.length).toBe(2);
        });
    });


});