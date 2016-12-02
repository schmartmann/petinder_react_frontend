import React, { Component } from 'react';

export default class Navbar extends Component {
  render(){
    return(
      <div>
        <div className="nav-wrapper">
          <nav className="nav-items">
            <img id="paw-icon" src="./style/icons/paw-icon.png"/>
            <h1 className="brand-logo center"><span className="small-logo">pe</span>tinder</h1>
          </nav>
      </div>
    </div>
    )
  }
}
