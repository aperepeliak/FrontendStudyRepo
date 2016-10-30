// Using callbacks is not appropriate
// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Philadelphia', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a !== 'number' || typeof b !== 'number')
            reject('not a number');

        resolve(a + b);
    });
}

addPromise(4, 6).then(function (temp) {
    console.log('success', temp);
}, function (err) {
    console.log('error: ', err);
});

addPromise(4, 'a').then(function (temp) {
    console.log('success', temp);
}, function (err) {
    console.log('error: ', err);
});

addPromise('4', 'a').then(function (result) {
    console.log('success: ', result);
}, function (err) {
    console.log('error: ', err);
});