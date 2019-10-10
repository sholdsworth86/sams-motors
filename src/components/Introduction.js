//Required imports
import React from 'react';

//Introduction Component (optimize to SFC later as not managing state here)
export default class Introduction extends React.Component {

    render() {
  
      return (
        <div id="intro">     
          <div>
            <p id="intro-text">Hello and Welcome! ... At<span className="brand"> Sam's Motors</span> we know and understand just how important it is keeping our customers 
            happy and satisfied. We only want to provide the best quality service and offer a great range of affordable, top quality used vehicles for you, our invaluable customer.
            <br /><br />
            We offer a range of used, but great condition, top quality motors at affordable prices... but thats not all... we are now also offering you some of the best 
            outstanding vehicle finance interest rates out there, if you prefer to pay this way of course.<br /><br />
  
            What's more... all our vehicles come with a free premium-plus 318 point vehicle inspection check at no extra cost to you before you buy!<br /><br />
  
            Once you have spoken to one of our experts and have decided on the best vehicle for you, dealing with your purchase could not be easier. Once a deposit 
            has been taken for your vehicle of choice, we will ensure the vehicle undergoes a brand new MOT test and if anything is at fault, we will sort it before you drive away. 
            We will even give you a free 6-month hassle-free, no quibbles warranty for your peace of mind as we are so confident our vehicles are top-notch!<br /><br />
  
            So hurry... what are you waiting for? ... buy with confidence from us, a great, trusted, award winning vehicles dealership!</p>
          </div>
  
          <div id="awards">
            <img id="award-1" src="/img/sams-motors-award-2015.png" alt="Sam's Motors Award-2015" />
            <img id="award-2" src="/img/sams-motors-award-2017.png" alt="Sam's Motors Award-2017" />
            <img id="award-3" src="/img/sams-motors-award-2018.png" alt="Sam's Motors Award-2018" />
          </div> 
        </div>
      );
    } 
}