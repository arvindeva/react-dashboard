import { FETCH_POST, CLEAR_POST } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchPost = id => dispatch => {
  axios
    .get(`${apiUrl}/posts/${id}`)
    .then(response => {
      dispatch(fetchPostSuccess(response.data));
    })
    .catch(error => {
      throw error;
    })
}

export const fetchPostSuccess = post => {
  return {
    type: FETCH_POST,
    post: post
  }
}

export const clearPost = () => {
  return {
    type: CLEAR_POST
  }
}
