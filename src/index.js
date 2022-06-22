import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    
    render() {
// function App () {
    window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        )   
        return (
            <div>Laitude:</div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)