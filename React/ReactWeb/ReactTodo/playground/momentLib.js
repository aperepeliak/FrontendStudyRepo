/* jshint esversion: 6 */

let moment = require('moment');

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

let timestamp = 1459111648;
let currentMoment = moment.unix(timestamp);

console.log('current moment ', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2016 @ 12:13 AM
console.log('current moment ', currentMoment.format('MMMM Do, YYYY hh:mm A'));
console.log('current moment ', currentMoment.format('MMMM Do, YYYY kk:mm'));

