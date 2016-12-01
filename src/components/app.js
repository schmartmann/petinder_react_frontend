import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMyPet } from '../actions/index';
import Pet from "./pet.js"


function mapStateToProps(state){
  return {
    pet: state.pet
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchMyPet: fetchMyPet
  }, dispatch)
}


class App extends Component {
  render() {
    return (
      <div>
        <Pet/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
