// challenge 1
// var johnHeight = 175;
// var friendHeight = 195;

// var johnAge = 25;
// var friendAge = 23;

// var johnScore = johnHeight + 5 * johnAge;
// var friendScore = friendHeight + 5 * friendAge;

// if (johnScore < friendScore)
//     console.log('Friend won');
// else if (johnScore > friendScore)
//     console.log('John won');
// else
//     console.log('It\'s a draw!');

// challenge 2
var input_1 = [1989, 1990, 2000, 1997, 1967];
var input_2 = [1989, 2011];
var full_1 = printFullAge(input_1);
var full_2 = printFullAge(input_2);

console.log('input_1: ', input_1);
console.log('full_1: ', full_1);
console.log('-----------------------');
console.log('input_2: ', input_2);
console.log('full_2: ', full_2);

function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    calculateAge = (yearOfBirth) =>
        new Date().getFullYear() - yearOfBirth;

    for (var i = 0; i < years.length; i++)
        ages.push(calculateAge(years[i]));

    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) fullAges.push(true);
        else fullAges.push(false);
    }

    return fullAges;
}