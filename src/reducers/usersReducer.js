import { FETCH_USERS, CLEAR_USERS } from '../actions/types';

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.users
    case CLEAR_USERS:
      return [];
    default:
      return state;
  }
}
