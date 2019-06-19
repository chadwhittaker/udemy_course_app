import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE } from '../actions/actionTypes'

const initialState = {
  places: [],
  selectedPlace: null,
}

const placesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places, { key: Math.random().toString(), placeName: action.payload.placeName, placeImage: action.payload.placeImage }],
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== state.selectedPlace.key),
        selectedPlace: null,
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => action.payload.placeKey === place.key),
      };
    case UNSELECT_PLACE: 
      return {
        ...state,
        selectedPlace: null,
      };
    default:
      return state;
  }
}

export default placesReducer