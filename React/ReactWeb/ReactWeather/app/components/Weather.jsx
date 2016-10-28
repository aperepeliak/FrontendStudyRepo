/* jshint esversion: 6 */
let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');

let Weather = React.createClass({

    getInitialState() {
        return {
            location: 'Kyiv',
            temp: 17
        }
    },

    handleSearch(location) {
        this.setState({
            location: location,
            temp: 23
        });
    },

    render() {
        // We also could destructuring here
        // var {location, temp} = this.state;

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={this.state.location} temp={this.state.temp}/>
            </div>
        );
    }
});

module.exports = Weather;