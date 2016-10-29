/* jshint esversion: 6 */
let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({

    getInitialState() {
        return {
            isLoading: false
        }
    },

    handleSearch(location) {
        let that = this;

        this.setState({
            isLoading: true
        });

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
        let {isLoading, location, temp} = this.state;

        function renderMessage(){
            if (isLoading) {
                 
            }
        };

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage location={location} temp={temp} />
            </div>
        );
    }
});

module.exports = Weather;