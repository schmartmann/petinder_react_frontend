import React, { Component } from 'react';

export default class Navbar extends Component {
  render(){
    return(
      <div>
        <div className="nav-wrapper">
          <nav className="nav-items">
            <h1 className="brand-logo center"><span className="small-logo">pe</span>Tinder</h1>
            <ul className="right">
              <li>
                <a href="#">
                  myPets
                </a>
              </li>
              <li>
                <a href="#">
                  About
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </div>
    )
  }

}
