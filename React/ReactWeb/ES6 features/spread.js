/* jshint esversion: 6 */

let add = (a, b) => a + b;
//console.log(add(2,5));

let toAdd = [9,5];
//console.log(add(...toAdd));

let groupA = ['Andrii', 'Vasilii', 'Dmitrii'];
let groupB = ['Sveta'];

let final = [...groupB, ...groupA];
//console.log(final);

let person = ['Andrew', 27];
let person2 = ['Sveta', 28];

let greeter = (name, age) => `Hello ${name}, you are ${age}.`;
//console.log(greeter(...person));

let names = ['Mike', 'Ben'];
let fnl = ['Andrii'];

fnl = [...fnl, ...names];
//console.log(fnl);

fnl.forEach((name) => {
    console.log('Hi ' + name);
});


