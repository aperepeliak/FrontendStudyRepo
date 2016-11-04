/* jshint esversion: 6 */
let React = require('react');

let Controls = React.createClass({

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },

    render() {
        let {countdownStatus} = this.props;

        let renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                // render 'pause' button
                return <button className="button secondary">Pause</button>;
            } else if (countdownStatus === 'paused') {
                // render 'start' button
                return <button className="button primary">Start</button>
            }
        };

        return (
            <div className="Controls">
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }
});

module.exports = Controls;