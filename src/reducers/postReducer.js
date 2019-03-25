import { FETCH_POST, CLEAR_POST } from '../actions/types';

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return action.post
    case CLEAR_POST:
      return {}
    default:
      return state;
  }
}
