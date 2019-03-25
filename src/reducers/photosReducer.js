import { FETCH_PHOTOS, CLEAR_PHOTOS } from '../actions/types';

export default function photosReducer(state = [], action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return action.photos;
    case CLEAR_PHOTOS:
      return [];
    default:
      return state;
  }
}
