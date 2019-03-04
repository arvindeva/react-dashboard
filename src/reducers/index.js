import { combineReducers } from 'redux';
import { users, usersIsLoading } from './users';
import { user, userIsLoading } from './user';
import { posts, postsIsLoading } from './posts';
import { albums, albumsIsLoading } from './albums';

export default combineReducers({
  users,
  usersIsLoading,
  user,
  userIsLoading,
  posts,
  postsIsLoading,
  albums,
  albumsIsLoading
});
