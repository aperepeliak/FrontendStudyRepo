import React from 'react';

// let isAdmin = true;
// let adminComponent = (Component) => {
//     return class Admin extends React.Component {
//         render() {
//             if (isAdmin) {
//                 return (
//                     <div className="callout secondary">
//                         <p className="alert label">Private Admin inforamtion!</p>
//                         <Component {...this.props}></Component>
//                     </div>
//                 );
//             } else {
//                 return null;
//             }

//         }
//     };
// };

let isAdmin = true;
let adminComponent = (Component) => {
    return class Admin extends Component {

        componentDidUpdate() {
            console.log('Admin component did update');

            if (super.componentDidUpdate) {
                super.componentDidUpdate();
            }
        }

        render() {
            if (isAdmin) {
                return (
                    <div className="callout secondary">
                        <p className="alert label">Private Admin inforamtion!</p>
                        {super.render()}
                    </div>
                );
            } else {
                return null;
            }
        }
    };
};

class ComponentTwo extends React.Component {

    componentDidUpdate() {
        console.log('ComponentTwo did update');
    }

    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        };
        // this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <h3>Component Two using React.Component</h3>
                <p>Current count: {this.state.count}</p>
                <button className="button success" onClick={this.onClick.bind(this)}>Button One</button>
            </div>
        );
    }
};

ComponentTwo.defaultProps = {
    count: 50
};

ComponentTwo.propTypes = {
    count: React.PropTypes.number
};

export default adminComponent(ComponentTwo);