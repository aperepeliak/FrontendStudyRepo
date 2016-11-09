/* jshint esversion: 6 */
let React = require('react');
let moment = require('moment');

let Todo = React.createClass({

    onToggle() {
        let {id} = this.props;
        this.props.onToggle(id);
    },

    render() {
        let {id, text, completed, createdAt, completedAt} = this.props;

        let renderDate = () => {
            let message = 'Created: ';
            let timestamp = createdAt;

            if(completed) {
                message = 'Completed: ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMMM Do, YYYY @ kk:mm');
        };

        return (
            <div onClick={this.onToggle}>
                <input type="checkbox" checked={completed} />
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;

// <div onClick={() => {
//     this.props.onToggle(id);
// }}>
