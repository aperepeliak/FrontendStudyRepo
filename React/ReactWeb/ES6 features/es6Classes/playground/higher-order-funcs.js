// function one(name, location) {
//     console.log(name, location);
// };

// function two() {
//     console.log('Args', arguments);
//     one.apply(undefined, arguments);
// };

// two('Andrew', 'Lviv');

let add = (a,b) => a + b;
let square = (a) => a * a;

let callAndLog = (func) => {
    return function() {
        let res = func.apply(undefined, arguments);
        console.log('Result is ' + res);
        return res;
    };
};

let addAnfLog = callAndLog(add);
addAnfLog(44, -4);

let squareAndLog = callAndLog(square);
squareAndLog(5);
