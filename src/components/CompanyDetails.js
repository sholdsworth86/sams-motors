//Required imports
import React from 'react';

//CompanyDetails Component (optimize to SFC later as not managing state here)
export default class CompanyDetails extends React.Component {

    render() {
  
      return (
        <div id="company-details">
        <div>
          <h4 id="moto">Our excellence and success in serving our loyal customers continues to grow...</h4>
          </div>
          <div id="details">
            <img id="5-star" src="/img/5-stars.png" alt="5 Star Rating" height="125" width="150" />
            <img id="AA" src="/img/aa-logo.png" alt="AA Covered" height="100" width="250" />
            <img id="trust-pilot" src="/img/trustpilot.png" alt="Trust Pilot Rating" height="125" width="200" />
            <img id="dealer-power" src="/img/car-dealer-power.png" alt="Car Dealer Power" height="125" width="125" />
            <img id="defaqto" src="/img/defaqto.png" alt="Defaqto Rating" height="125" width="200" />
          </div>
        </div>
      );
    }
  }