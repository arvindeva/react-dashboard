import { FETCH_PHOTOS } from '../actions/types';

export default function photosReducer(state = [], action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return action.photos
    default:
      return state;
  }
}
