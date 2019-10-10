import React from 'react';

//Vehicle Component (optimize to SFC later as not managing state here)
export default class Vehicle extends React.Component {

    componentDidMount() {
      console.log('Vehicle - componentDidMount');
    }
  
    componentWillUnmount() {
      console.log('Vehicle - componentWillUnmount');
    }
  
    render() {  

      //De-structure the required props
      const { isLoading } = this.props;
  
      const { refNo, 
              make, 
              model, 
              colour, 
              engine, 
              engineType, 
              mileage, 
              transmission, 
              year, 
              serviceHistory, 
              price, 
              image1, 
              image2, 
              image3, 
              image4 } = this.props.vehicleItem;

      const { cruise, 
              airCon, 
              cdMp3, 
              electricWindows, 
              electricMirrors, 
              heatedMirrors, 
              heatedSeats, 
              heatedWindscreen, 
              PAS, 
              parkingSensors, 
              reverseCameraAssist, 
              GPS } = this.props.vehicleItem.modCons;

     //if(!isLoading) {              
      return (
        <div className="vehicle-card">
          <h5>Vehicle Details</h5>
          <h6>Vehicle Ref No.<br /> {refNo}</h6>
          <ul id="itemsToFilter"> 
            <li><span className="vehicle-details">Make:</span> {make}</li> 
            <li><span className="vehicle-details">Model:</span> {model}</li>
            <li><span className="vehicle-details">Colour:</span> {colour}</li>
            <li><span className="vehicle-details">Engine:</span> {engine > 0 ? engine.toFixed(1) : 'N/A'}</li>
            <li><span className="vehicle-details">Engine-Type:</span> {engineType}</li>
            <li><span className="vehicle-details">Mileage:</span> {mileage}</li>
            <li><span className="vehicle-details">Transmission:</span> {transmission}</li>
            <li><span className="vehicle-details">Year:</span> {year}</li>
            <li><span className="vehicle-details">Service History:</span> {serviceHistory}</li>
            <li><span className="vehicle-details">OTR Price:</span> {'£' + price + ' (inc.VAT)'}</li>
            <h4>Mod-Cons</h4>
            <li><span>Cruise Control:</span> {cruise ? 'Yes' : 'No'}</li>
            <li><span>Air-Con:</span> {airCon ? 'Yes' : 'No'}</li>
            <li><span>CD/MP3:</span> {cdMp3 ? 'Yes' : 'No'}</li>
            <li><span>Electric Windows:</span> {electricWindows ? 'Yes' : 'No'}</li>
            <li><span>Electric Mirrors:</span> {electricMirrors ? 'Yes' : 'No'}</li>
            <li><span>Heated Mirrors:</span> {heatedMirrors ? 'Yes' : 'No'}</li>
            <li><span>Heated Seats:</span> {heatedSeats ? 'Yes' : 'No'}</li>
            <li><span>Heated Windscreen:</span> {heatedWindscreen ? 'Yes' : 'No'}</li>
            <li><span>Power Steering:</span> {PAS ? 'Yes' : 'No'}</li>
            <li><span>Parking Sensors:</span> {parkingSensors ? 'Yes' : 'No'}</li>
            <li><span>Reverse Camera Assist:</span> {reverseCameraAssist ? 'Yes' : 'No'}</li>
            <li><span>GPS:</span> {GPS ? 'Yes' : 'No'}</li>
          </ul>
          <div id="slider" >
            <figure id="figure" className="run-animation">
              <img id="cars" src={image1} alt="Car Image 1" />
              <img id="cars" src={image2} alt="Car Image 2" />
              <img id="cars" src={image3} alt="Car Image 3" />
              <img id="cars" src={image4} alt="Car Image 4" />
              <img id="cars" src={image1} alt="Car Image 1" />
            </figure>
          </div>
        </div>
      )    
    //}
  }
  }