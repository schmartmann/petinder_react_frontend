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

class Pet extends Component{
  constructor(props){
    super(props);
    this.props.fetchMyPet();
  };
  componentWillMount(){
  };
  render(){
    return(
      <div className="pet-card">
        <img src={this.props.pet.picture}></img>
        <h3>
            {this.props.pet.name}
        </h3>
        <p id="pet-description">
          {this.props.pet.description}
        </p>
        <p>
          {this.props.pet.link}
        </p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pet);
