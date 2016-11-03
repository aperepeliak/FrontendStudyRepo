/* jshint esversion: 6 */
let React = require('react');
let Clock = require('Clock');
let CountdownForm = require('CountdownForm');

let Countdown = React.createClass({

    getInitialState() {
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },

    // componentDidUpdate is called every time the state or props gets updated
    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    },

    startTimer() {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >=0 ? newCount : 0
            });
        }, 1000);
    },

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },

    render() {

        let {count} = this.state;

        return (
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown} />
            </div>
        );
    }
});

module.exports = Countdown;