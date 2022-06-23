import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            latitude : 20
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({latitude : position.coords.latitude})
            } ,
            (error) => { 
                console.log(error);
                this.setState({latitude : error.message})
            }
        );

    }
   
    render() {
        return (
            <div>Laitude: {this.state.latitude} </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)