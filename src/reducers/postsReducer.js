import {
  ADD_POST,
  DELETE_POST,
  FETCH_POSTS,
  EDIT_POST,
  CLEAR_POSTS
} from '../actions/types';

export default function postsReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [action.payload, ...state];
    case EDIT_POST:
      const index = state.findIndex(post => post.id === action.payload.id);
      return [
        ...state.slice(0, index), 
        action.payload,
        ...state.slice(index + 1) 
      ];
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id);
    case FETCH_POSTS:
      return action.posts;
    case CLEAR_POSTS:
      return [];
    default:
      return state;
  }
}
