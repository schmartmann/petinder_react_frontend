import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMyPet } from '../actions/index';

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
  constructor(props){
    super(props);
    this.props.fetchMyPet();
  };
  componentWillMount(){
  };
  render() {
    return (
      <div>
      <div>Your Pleasant Ghost evironment is set up correctly.</div>
      <ul>
        <li>
          {this.props.pet.name}
        </li>
        <li>
          <img src={this.props.pet.picture}></img>
        </li>
        <li>
          {this.props.pet.description}
        </li>
        <li>
          {this.props.pet.link}
        </li>
      </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
