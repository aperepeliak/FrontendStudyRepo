/* jshint esversion: 6 */
let React = require('react');
let Clock = require('Clock');
let Controls = require('Controls');


let Timer = React.createClass({

    getInitialState() {
        return {
            count: 0,
            countdownStatus: 'paused'
        }
    },

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    // reset time to zero
                    this.setState({
                        count: 0,
                        countdownStatus: 'paused'
                    });
                // We are not using 'break;' intentionally 
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    },

    startTimer() {
        this.timer = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });

        }, 1000);
    },

    handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },

    render() {
        let {count, countdownStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count} />
                <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
            </div>
        );
    }
});

module.exports = Timer;