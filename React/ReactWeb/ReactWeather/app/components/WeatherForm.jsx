/* jshint esversion: 6 */

let React = require('react');

let WeatherForm = React.createClass({
    render() {
        return (
            <div>
                <form>
                    <input type="text" ref="city" placeholder="Enter city name"/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;