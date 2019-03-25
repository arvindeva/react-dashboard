import { FETCH_ALBUM, CLEAR_ALBUM } from '../actions/types';

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_ALBUM:
      return action.album;
    case CLEAR_ALBUM:
      return {};
    default:
      return state;
  }
}
