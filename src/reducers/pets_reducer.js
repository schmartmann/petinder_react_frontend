const INITIAL_STATE = {
  name: '',
  picture: '',
  description: '',
  pet_id: '',
  link: ''
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'LOAD_PET':
      console.log("LOAD_PET firing: ", action.payload)
      let pet_profile = action.payload
      return {
        name: pet_profile.name,
        picture: pet_profile.picture,
        description: pet_profile.description,
        pet_id: pet_profile.pet_id,
        link: pet_profile.link
      };
    default:
      console.log("no pet loaded");
      return state;
  }
}
