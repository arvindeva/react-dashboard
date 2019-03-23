import { FETCH_USER, CLEAR_USER } from '../actions/types';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.user
    case CLEAR_USER:
      return {}
    default:
      return state;
  }
}


