/* jshint esversion: 6 */

const myItems = {
    items: ["Laptop", "Smartphone", "Printer", "PC", "Pad", "Watch", "Webcam", "USB"]
};

const FilteredList = React.createClass({

    filterList(event) {
        let updatedList = this.props.initialItems.items;

        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });

        updatedList.length === 0 ? updatedList.push("no results found"): updatedList; 

        this.setState({items: updatedList});
    },
    
    getInitialState() {
        return {
            items: []
        };
    },

    componentWillMount() {
        this.setState({items: this.props.initialItems.items})
    },

    render() {
        return (
            <div className="myList">
                <input type="text" placeholder="Search" onChange={this.filterList} />
                <List items={this.state.items} />
            </div>
        );
    }
});

const List = React.createClass({
    render() {
        return (
            <ul>
                {
                    this.props.items.map(function(item) {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        );
    }
});

ReactDOM.render(
    <FilteredList initialItems = {myItems} />,
    document.getElementById('container')
);