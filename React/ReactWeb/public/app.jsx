var Greeter = React.createClass({
   render: function() {
       return (
          <div>
            <h1>Hello React</h1>
            <p>this is the paragraph from the component</p>
          </div>
       );
   } 
});



ReactDOM.render(
            <Greeter />,
            document.getElementById('app')
        );

