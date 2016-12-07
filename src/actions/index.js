import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api/v1'

export const FETCH_MY_PET  = "FETCH_MY_PET";
export const LOAD_PET = "LOAD_PET";

export function fetchMyPetOptimistic(props){
  console.log("fetchMyPetOptimistic:", props.data.first[0])
  let pet = {
    current_pet : props.data.first[0],
    pet_batch: [props.data.second]
  };
  console.log(pet)
  return {
    type: LOAD_PET,
    payload: pet
  }
}

export function fetchMyPet(){
  return function(dispatch){
    const url = `${ROOT_URL}/pets`;
    const request = axios.get(url).then(response => {
      console.log("request from actions/index.js", response)
      dispatch(fetchMyPetOptimistic(response))
    });
    return null
  }
}
