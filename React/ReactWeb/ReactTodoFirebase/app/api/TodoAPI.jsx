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
        filteredTodos = filteredTodos.filter((todo) => {
            if (searchText.length === 0) return true;

            return todo.text.toLowerCase().indexOf(searchText) !== -1 ? true: false;
        });

        // Sort todos with none-completed first
        // If return -1 than it means that a must go before b
        // If 1 --> b before a
        // If 0 --> no change (a == b)
        filteredTodos.sort((a, b) => {
            // if a status is not true and b status is true
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });


        return filteredTodos;
    }
};