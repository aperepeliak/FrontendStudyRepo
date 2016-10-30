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
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            that.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
    },

    render() {
        let {isLoading, location, temp} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        };

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;