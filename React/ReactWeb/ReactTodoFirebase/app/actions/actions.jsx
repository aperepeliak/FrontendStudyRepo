/* jshint esversion: 6 */
import moment from 'moment';

import firebase, { firebaseRef } from 'app/firebase/index';

export let setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

export let addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};

export let startAddTodo = (text) => {
    return (dispatch, getState) => {
        let todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        let todoRef = firebaseRef.child('todos').push(todo);

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};

export let addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

export let toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export let updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};

export let startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        let todoRef = firebaseRef.child(`todos/${id}`);
        let updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
};