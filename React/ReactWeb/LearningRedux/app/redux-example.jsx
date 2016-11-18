/* jshint esversion: 6 */
let redux = require('redux');

console.log('Starting redux example');

/* stateDefault var was used for oldReducer 
let stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
*/

// createStore takes one arg which has to be a  pure function
// a reducer is a pure function in redux speak
// reducer takes existing state and action as the arguments and then computes the new state

/*
let oldReducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'}; // ES5 syntax (old)

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
 */

let nameReducer = (state = "Anonymous", action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

// Action generator for name
let changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        
        // ES6 feature. its the same as: name: name 
        name
    };
};

let nextHobbyId = 1;
let hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        
        case 'REMOVE_HOBBY':
            return state.filter( hobby => hobby.id !== action.id);
        
        default:
            return state;
    }
};

let addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    };
};

let removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    };
};

let nextMovieId = 1;
let moviesReducer = (state = [], action) => {
    switch (action.type) {

        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
            ];

        case 'REMOVE_MOVIE':
            return state.filter( movie => movie.id !== action.id);

        default:
            return state;
    }
};

let addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    };
};

let removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    };
};

let reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});


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

// Dispatching with action generator
/* Previously it was like this:
    store.dispatch({
        type: 'CHANGE_NAME',
        name: 'Andrew'
    }); */
store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Vasya'));

store.dispatch(addMovie('Star Wars', 'action'));

store.dispatch(addMovie('Hobbit', 'fantasy'));

store.dispatch(removeMovie(1));
