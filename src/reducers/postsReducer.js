import { ADD_POST, DELETE_POST, FETCH_POSTS } from '../actions/types';

export default function postsReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [action.payload, ...state];
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id);
    case FETCH_POSTS:
      return action.posts;
    default:
      return state;
  }
}
