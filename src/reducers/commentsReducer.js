import {
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENTS,
  EDIT_COMMENT,
  CLEAR_COMMENTS
} from '../actions/types';

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.payload, ...state];
    case EDIT_COMMENT:
      const index = state.findIndex(
        comment => comment.id === action.payload.id
      );
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1)
      ];
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.payload.id);
    case FETCH_COMMENTS:
      return action.comments;
    case CLEAR_COMMENTS:
      return [];
    default:
      return state;
  }
}
