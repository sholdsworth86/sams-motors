import React from 'react';
import Vehicle from './Vehicle';

//Zero Results Alert Message
const zeroResultsMsg = `Unfortunately, none of your desired options are available at this time... Please try a different filter combination to see if we have any other vehicle in stock 
                        that tickles your fancy, else feel free to visit our site again in the near future. Our apologies for the inconvenience.`;


//Vehicles Component (optimize to SFC later as not managing state here)
export default class Vehicles extends React.Component {
   
  render() {

    //De-structure the required props
    const { items, itemTotal, isLoading } = this.props;

    return (
      
      //else render the below vehicles/zero results code 
      <div id="vehicles">
        {items.map((item) => <Vehicle key={item.id} vehicleItem={item} />)}
        {itemTotal === 0 && 
          <div id="zero-results-returned"> 
            <img id="sad-face" src="../img/sad-face.png" /><br></br> 
            <h1 id="zero-results-returned-text">{zeroResultsMsg}</h1>
          </div>
        }
      </div>
    )
  }
}