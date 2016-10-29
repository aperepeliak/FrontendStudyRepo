/* jshint esversion: 6 */
let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=61838188fa13198f1b7e08d10ebf56a2&units=metric';


module.exports = {
    getTemp(location) {
        let encodedLocation = encodeURIComponent(location);
        // use es6 feature template strings
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        // axios uses promises
        return axios.get(requestUrl).then(function (response) {
            if (response.data.cod && response.data.message) {
                throw new Error(response.data.message);
            } else {
                return response.data.main.temp;
            }
        }, function (response) {
            throw new Error(response.data.message);
        });
    }
}; 