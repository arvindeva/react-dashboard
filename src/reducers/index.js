import { combineReducers } from 'redux';
import posts from './postsReducer';
import users from './usersReducer';
import user from './userReducer';
import albums from './albumsReducer';
import album from './albumReducer';
import photos from './photosReducer';
import comments from './commentsReducer';
import post from './postReducer';

export default combineReducers({
  users: users,
  user: user,
  posts: posts,
  post: post,
  album: album,
  albums: albums,
  photos: photos,
  comments: comments
});
