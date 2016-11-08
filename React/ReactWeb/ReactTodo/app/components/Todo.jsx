/* jshint esversion: 6 */
let React = require('react');

let Todo = React.createClass({

    onToggle() {
        let {id} = this.props;
        this.props.onToggle(id);
    },

    render() {
        let {id, text, completed} = this.props;
        return (
            <div onClick={this.onToggle}>
                <input type="checkbox" checked={completed} />
                {text}
            </div>
        );
    }
});

module.exports = Todo;

// <div onClick={() => {
//     this.props.onToggle(id);
// }}>
