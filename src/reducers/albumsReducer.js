import { FETCH_ALBUMS } from '../actions/types';

export default function albumsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALBUMS:
      return action.albums
    default:
      return state;
  }
}
