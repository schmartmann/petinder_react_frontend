const INITIAL_STATE = {
    current_pet:
      {
        city: '',
        state: '',
        photo: '',
        id: '',
        link: '',
        name: '',
        description: '',
        animal: ''
      },
    pet_batch: []
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'LOAD_PET':
      console.log("LOAD_PET firing: ", action.payload)
      let current_pet = action.payload.current_pet;
      let pet_batch = action.payload.pet_batch;
      return {
        current_pet: {
          animal: current_pet.animal,
          city: current_pet.city,
          state: current_pet.state,
          description: current_pet.description,
          pet_id: current_pet.pet_id,
          name: current_pet.name,
          photo: current_pet.photo,
          link: current_pet.link
        },
        pet_batch: pet_batch
      };
    default:
      console.log("no pet loaded");
      return state;
  }
}
