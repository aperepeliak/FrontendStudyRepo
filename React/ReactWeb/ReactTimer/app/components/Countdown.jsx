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

    // componentDidUpdate is called every time the state or props get updated
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

    // componentWillUpdate is called just before component get will be updated
    //componentWillUpdate(nextProps, nextState) {    },

    // Fired when the component first gets mounted
    // means method is invoked just before component shown th the screen
    // don't have access to the refs or DOM  
    // componentWillMount() {
    //     console.log('componentWillMount');
    // },

    // Fired right after component is rendered in the DOM
    // has access to refs  
    // componentDidMount() {
    //     console.log('componentDidMount');
    // },

    // this method automatically invoked by react right before component gets removed from the DOM
    // means visually removed from the browser
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    },

    startTimer() {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
               this.setState({
                   countdownStatus: 'stopped'
               });
            }
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
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;