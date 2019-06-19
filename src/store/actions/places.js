import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  UNSELECT_PLACE,
} from './actionTypes';

import imageName from '../../assets/IMG_4635.jpg';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: {
      placeName: placeName,
      placeImage: imageName,
    },
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE,
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    payload: {
      placeKey: key,
    },
  };
};

export const unselectPlace = () => {
  return {
    type: UNSELECT_PLACE,
  };
};
