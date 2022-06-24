import React from 'react';
import northenpic from './image/northen.gif';
import southernpic from './image/southern.jpg';
const hemisphereConfig = {
    northen :{
        picture : northenpic,
        text : "You're in Northen Hemisphere!"
    },
    southern:{
        picture : southernpic,
        text : "You're in Southern Hemisphere!"
    }
}

const Hemisphere = (props) => {

    const hemisphere = props.latitude > 0 ? 'northen' : 'southern' ; 
    const { picture, text } = hemisphereConfig[hemisphere]
   
    return (
        <div>
            <p>
            <img src={picture} alt='Hemisphere picture' width='480px'/> <br/>
            <q>{text}</q> </p>
            <pre className='code'><q>Latitude:{props.latitude} | Longitude:{props.longitude}</q></pre>
        </div>
    )
}

export default Hemisphere;