import { FETCH_USER } from '../actions/types';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.user
    default:
      return state;
  }
}


