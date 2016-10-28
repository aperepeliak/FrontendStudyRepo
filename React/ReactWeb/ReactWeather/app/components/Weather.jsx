/* jshint esversion: 6 */
let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');

let Weather = React.createClass({
    render() {
        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm />
                <WeatherMessage />
            </div>
        );
    }
});

module.exports = Weather;