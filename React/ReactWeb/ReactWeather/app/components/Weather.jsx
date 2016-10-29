/* jshint esversion: 6 */
let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({

    getInitialState() {
        return {
            location: 'Kyiv',
            temp: 17
        }
    },

    handleSearch(location) {
        let that = this;
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp
            });
        }, function (errorMessage) {
            alert(errorMessage);
        });
    },

    render() {
        // We also could have used destructuring here
        // var {location, temp} = this.state;

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage location={this.state.location} temp={this.state.temp} />
            </div>
        );
    }
});

module.exports = Weather;