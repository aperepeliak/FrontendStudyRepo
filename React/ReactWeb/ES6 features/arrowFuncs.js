/* jshint esversion: 6 */

var names = ['Andrew', 'Sveta', 'Vasya', 'Sasha'];

// Simplifying with arrow functions
// names.forEach(function(name) {
//     console.log('foreach', name);
// });
// names.forEach((name) => {
//     console.log('arrFunc', name);
// });
// names.forEach((name) => console.log(name));

// var returnMe = (name) => `${name}!`;
// console.log(returnMe(names[0]));

// the old way
var personOld = {
    name: 'Andrii',
    greet: function () {
        var that = this;
        names.forEach(function (name) {
            console.log(that.name + ' says hi to ' + name)
        });
    }
};

// the new way
let personNew = {
    name: 'Andrii',
    greet() {
        names.forEach((name) => console.log(`${this.name} says hi to ${name}`));
    }
};

personNew.greet();

// addStatement syntax
let addStatement = (a, b) => {
    return a + b;
};

// addExpression syntax
let addExpression = (a, b) => a + b;

console.log(addStatement(1, 3));
console.log(addExpression(9, 0));