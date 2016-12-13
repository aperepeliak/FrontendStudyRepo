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

    render() {
        return (
            <div>
                <h3>Component One using React.createClass</h3>
                <p>Current count: {this.state.count}</p>
            </div>
        );

    }
});

export default ComponentOne;