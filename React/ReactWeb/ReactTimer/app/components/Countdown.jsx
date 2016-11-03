/* jshint esversion: 6 */
let React = require('react');
let Clock = require('Clock');

let Countdown = React.createClass({
    render() {
        return (
            <div>
                <Clock totalSeconds={129} />
            </div>
        );
    }
});

module.exports = Countdown;