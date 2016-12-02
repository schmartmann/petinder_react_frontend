import React, { Component } from 'react';

export default class Icons extends Component {
  render(){
    return(
      <div className="row">
        <div className="icon-container">
          <img id="heart-icon" className="hvr-pulse-grow" src="./style/icons/heart.svg"/>
        </div>
        <div className="icon-container">
          <img id="remove-icon" className="hvr-pulse-grow" src="./style/icons/delete-outline.svg"/>
        </div>
      </div>
    )
  }
}
