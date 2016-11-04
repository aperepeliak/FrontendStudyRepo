/* jshint esversion: 6 */
let React = require('react');
let Clock = require('Clock');

let CountdownForm = require('CountdownForm');
let Controls = require('Controls');

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
                case 'stopped':
                    // reset time to zero
                    this.setState({
                        count: 0
                    });
                // We are not using 'break;' intentionally 
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    startTimer() {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    },

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },

    handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },

    render() {

        let {count, countdownStatus} = this.state;
        // When we want to dynamically render smth we have to use a function
        let renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                // rendering Controls
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
            } else {
                // render CountdownForm
                return <CountdownForm onSetCountdown={this.handleSetCountdown} />
            }
        };

        return (
            <div>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;