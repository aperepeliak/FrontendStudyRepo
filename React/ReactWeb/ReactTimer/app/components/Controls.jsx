/* jshint esversion: 6 */
let React = require('react');

let Controls = React.createClass({

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },

    // using currying pattern here
    // use function to generate a different function
    onStatusChange(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        } 
    },

    // componentWillReceiveProps(newProps) {
    //     console.log('componentWillReceiveProps', newProps.countdownStatus);
    // },

    render() {
        let {countdownStatus} = this.props;

        let renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                // render 'pause' button
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
            } else {
                // render 'start' button
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;