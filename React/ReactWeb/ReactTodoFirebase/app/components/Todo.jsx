/* jshint esversion: 6 */
let React = require('react');
let {connect} = require('react-redux');
let moment = require('moment');

let actions = require('actions');

export let Todo = React.createClass({

    // onToggle() {
    //     let {id} = this.props;
    //     this.props.onToggle(id);
    // },

    render() {
        let {id, text, completed, createdAt, completedAt, dispatch} = this.props;

        let todoClassName = completed ? 'todo todo-completed' : 'todo';

        let renderDate = () => {
            let message = 'Created: ';
            let timestamp = createdAt;

            if (completed) {
                message = 'Completed: ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMMM Do, YYYY @ kk:mm');
        };

        return (
            <div className={todoClassName} onClick={ () => {
                dispatch(actions.toggleTodo(id));
            }}>
                <div>
                    <input type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

export default connect()(Todo);