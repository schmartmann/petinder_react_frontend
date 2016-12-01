import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api/v1'

export const FETCH_MY_PET  = "FETCH_MY_PET";
export const LOAD_PET = "LOAD_PET";

export function fetchMyPetOptimistic(props){
  console.log("fetchMyPetOptimistic:", props.data[0])
  let pet = props.data[0]
  return {
    type: LOAD_PET,
    payload: pet
  }
}

export function fetchMyPet(){
  return function(dispatch){
    const url = `${ROOT_URL}/pets`;
    const request = axios.get(url).then(response => {
      console.log("asdfasdfasdfa",response)
      console.log("request from actions/index.js", response)
      dispatch(fetchMyPetOptimistic(response))
    });
    return null
  }
}
