import React from 'react';

//Header Component (optimize to SFC later as not managing state here)
export default class Header extends React.Component {

    render() {
      return (  
        <header id="header">
          <h1 id="title">{this.props.title}</h1>
          <img className="logo-left" src="/img/logo.png" alt="Sam's Motors Logo"/>
          <img className="logo-right" src="/img/logo.png" alt="Sam's Motors Logo"/>
          <h4 id="subtitle">{this.props.subtitle}</h4>
        </header>
      )
    };
  }