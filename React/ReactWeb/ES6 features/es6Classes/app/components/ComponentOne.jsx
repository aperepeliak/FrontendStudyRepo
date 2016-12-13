import React from 'react';

let ComponentOne = React.createClass({

    getInitialState() {
        return {
            count: this.props.count
        }
    },

    getDefaultProps() {
        return {
            count: 11
        }
    },

    propTypes: {
        count: React.PropTypes.number
    },

    onClick() {
        this.setState({
            count: this.state.count + 1
        });
    },

    render() {
        return (
            <div className="callout primary">
                <h3>Component One using React.createClass</h3>
                <p>Current count: {this.state.count}</p>
                <button className="button warning"onClick={this.onClick}>Button One</button>
            </div>
        );

    }
});

export default ComponentOne;