/* jshint esversion: 6 */
let $ = require('jQuery');

module.exports = {
    setTodos(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },

    getTodos() {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) { }

        return $.isArray(todos) ? todos : [];
    },

    filterTodos(todos, showCompleted, searchText) {
        let filteredTodos = todos;

        // filter by showCompleted
        // filter method return true than the item is added to a new array, otherwise - not
        filteredTodos = filteredTodos.filter((todo) => {
            // return items with completed status false, but if showCompleted is checked return every single item
            return !todo.completed || showCompleted;
        });

        // filter by searchText

        // Sort todos with none-completed first


        return filteredTodos;
    }
};