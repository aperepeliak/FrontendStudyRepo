/* jshint esversion: 6 */
let redux = require('redux');

console.log('Starting redux example');

let stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};

// Unique identifier for each hobby
let nextHobbyId = 1;
let nextMovieId = 1;

// createStore takes one arg which has to be a  pure function
// a reducer is a pure function in redux speak
// reducer takes existing state and action as the arguments and then computes the new state
let reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonumous'}; // ES5 syntax (old)

    switch (action.type) {

        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby 
                    }
                ]
            };

        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
            };

        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            };

        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.id)
            };

        default:
            return state;       
    }
};


let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
// we can call unsubscribe func whenever we want to unsubscribe this callback
let unsubscribe = store.subscribe(() => {
    let state = store.getState();
    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;

    console.log('new state: ', store.getState());
});

// unsubscribe();


let currState = store.getState();
console.log('currState', currState);

// action is an object
// it must have 'type' property. Type is an action's name
// let action = {
//     type: 'CHANGE_NAME', // Such naming is a rule
//     name: 'Andrew'
// };

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andrew'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: "Vasya"
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Inception',
    genre: 'fiction'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Shawshank Redemption',
    genre: 'thriller'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});
