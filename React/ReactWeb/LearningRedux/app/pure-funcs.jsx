// pure function
// 1. it always returns the same result given the same input
// 2. no side effects, in doesnt rely on vars defined outside the function
// 3. doesnt change any values outside itself
// 4. cannot have any asynchronous requests, e.g. no promises or callbacks
// 5. it is not allowed to update data that gets passed in 
function add(a, b) {
    return a + b;
}

// ----------------------------------------------------------------------
// inpure functions
var a = 3;
function add(b) {
    return a + b;
}
var result;
function add(a, b) {
    result = a + b;
    return result;
}
function add(a, b) {
    return a + b + new Date().getSeconds();
}
function changeProp(obj) {
    obj.name = 'Andrew'; // we are not allowed to change input object!!
    return obj;
}
// ----------------------------------------------------------------------

// the correct pure function with no change to the passed object
function changePropCorrect(obj) {
    return {
        ...obj,
        name: 'Andrew'
    };
}
var myObj = {
    name: 'Misha',
    age: 25
}
console.log(changePropCorrect(myObj));
// The initial object is left unchanged
console.log(myObj);