import { FETCH_POST } from '../actions/types';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return action.post
    default:
      return state;
  }
}


