import React from 'react';
import ReactDOM from 'react-dom';
import allow from './image/allow.png';

class App extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            latitude : null,
            longitude : null,
            errorMessage: '',
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({latitude : position.coords.latitude + ' North'})
                this.setState({longitude : position.coords.longitude + ' South'})
            } ,
            (error) => { 
                console.log(error);
                this.setState({errorMessage : error.message})
            }
        );

    }
   
    render() {
        if (this.state.latitude && !this.state.errorMessage){
            return (
                <div style= {{margin:'100px auto', width:'50%', textAlign:'center', lineHeight:1.25}}>
                    <div style={{borderRadius:'4px' ,border:'1px solid gray', padding:'10px'}}>
                        <h1>Know your device location</h1>
                        <p> Latitude: <q>{this.state.latitude}</q> <br/> Longitude: <q>{this.state.longitude}</q> </p>
                    </div>
                </div>
            )
        }
        if (!this.state.latitude && this.state.errorMessage) {
            return (
                <div style= {{margin:'100px auto', width:'50%', textAlign:'center', lineHeight:1.25}}>
                    <div style={{borderRadius:'4px' ,border:'1px solid gray', padding:'10px'}}>
                        <h1>Know your device location</h1>
                        <p>{this.state.errorMessage}</p>
                        <p><i>Allow location permission to know your location</i></p>
                        <img width='240px' src={allow} alt='permission' />
                    </div>
                </div> 
            )
        } else {
            return (
                <div style= {{margin:'100px auto', width:'50%', textAlign:'center', lineHeight:1.25}}>
                    <div style={{borderRadius:'4px' ,border:'1px solid gray', padding:'10px'}}>
                        <h1>Know your device location</h1>
                        <p> Latitude: Loading... <br/> Longitude: Loading... </p>
                    </div>
                </div> 
            )
        }
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)