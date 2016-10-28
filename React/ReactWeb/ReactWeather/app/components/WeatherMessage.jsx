/* jshint esversion: 6 */

let React = require('react');

let WeatherMessage = React.createClass({
    render() {
        let {temp, location} = this.props;

        return (
            <p>It is {temp} in {location}</p>
        );
    }
});

module.exports = WeatherMessage;