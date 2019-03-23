import { FETCH_USER, CLEAR_USER } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchUser = id => dispatch => {
  axios
    .get(`${apiUrl}/users/${id}`)
    .then(response => {
      dispatch(fetchUserSuccess(response.data));
    })
    .catch(error => {
      throw error;
    })
}

export const fetchUserSuccess = user => {
  return {
    type: FETCH_USER,
    user: user
  }
}

export const clearUser = () => {
  return {
    type: CLEAR_USER
  }
}

