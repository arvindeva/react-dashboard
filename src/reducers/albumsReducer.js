import { FETCH_ALBUMS, CLEAR_ALBUMS } from '../actions/types';

export default function albumsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALBUMS:
      return action.albums;
    case CLEAR_ALBUMS:
      return [];
    default:
      return state;
  }
}
