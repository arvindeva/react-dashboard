import { FETCH_USERS, CLEAR_USERS } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = () => dispatch => {
  axios
    .get(`${apiUrl}/users`)
    .then(response => {
      dispatch(fetchUsersSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS,
    users: users
  };
};

export const clearUsers = () => {
  return {
    type: CLEAR_USERS
  }
}