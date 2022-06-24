import React from 'react';
import ReactDOM from 'react-dom';
import allow from './image/allow.png';
import Hemisphere from './hemisphere';
import './hemisphere.css'

class App extends React.Component {
    state = {
        latitude : null,
        longitude : null,
        errorMessage: '',
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude : position.coords.latitude})
                this.setState({longitude : position.coords.longitude})
            } ,
            (error) => { 
                this.setState({errorMessage : error.message})
            }
        );
    }
   
    render() {
        if (this.state.latitude && !this.state.errorMessage){
            return (
                <div className='main-div'>
                    <div className='sub-div'>
                        <h1>Know your Device's location</h1>
                        <Hemisphere latitude={ this.state.latitude } longitude={ this.state.longitude }/>
                    
                    </div>
                </div>
            )
        }
        if (!this.state.latitude && this.state.errorMessage) {
            return (
                <div className='main-div'>
                    <div className='sub-div'>
                        <h1>Know your Device's location</h1>
                        <p className='permission'> <q><span>&#9888;</span><i> Allow your location permission</i></q></p>
                        <img width='480px' src={allow} alt='permission' />
                        <p className='denied'>{this.state.errorMessage} &#128534;</p>
                    </div>
                </div> 
            )
        } else {
            return (
                <div className='main-div'>
                    <div className='sub-div'>
                        <h1>Know your Device's location</h1>
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

// comment
{/* <div className='main-div'>
    <div style={{borderRadius:'4px' ,border:'1px solid gray', padding:'10px'}}>
    </div>
</div>  */}