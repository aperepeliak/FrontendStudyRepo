/*jshint esversion: 6 */

const ItIsNow = React.createClass({
    render: function() {
        return (
            <p>The curret time is {this.props.date.toTimeString()}</p>
        );
    }
});

setInterval(function() {
    ReactDOM.render(
        <ItIsNow date = {new Date()} />,
        document.getElementById('container')
    );
}, 500);