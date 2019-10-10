import React from 'react';

//Outro Component (optimize to SFC later as not managing state here)
export default class Outro extends React.Component {
   
    render() {
  
      return (
        <div id="outro">
          <p id="outro-text">Why not give us a call or pop by to our showroom, we are open seven days a week,  from 9am to 5pm. Viewing can be arranged outside of these hours of 
            course if this is not convenient for you. So, grab that phone and give us a call today... great deals like ours don't hang around for too long!
          </p>
        </div>
      )
    };
  }