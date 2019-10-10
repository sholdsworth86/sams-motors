import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

//Footer Component (optimize to SFC later as not managing state here)
export default class Footer extends React.Component {

    currentYear () {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      return currentYear;
    }
  
    render() {
  
      return (
        <footer id="footer">
          <span><small>Copyright &copy; {this.currentYear()} <strong>Sam's Motors</strong> All rights reserved</small></span>
          <div id="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
          </div>
        </footer>
      )
    };
  }