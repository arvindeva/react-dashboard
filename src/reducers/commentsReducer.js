import { ADD_COMMENT, DELETE_COMMENT, FETCH_COMMENTS } from '../actions/types';

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.payload.id);
    case FETCH_COMMENTS:
      return action.comments;
    default:
      return state;
  }
}
