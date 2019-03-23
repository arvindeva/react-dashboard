import { ADD_POST, DELETE_POST, FETCH_POSTS, EDIT_POST, CLEAR_POSTS } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const addPost = (title, body) => dispatch => {
  axios
    .post(`${apiUrl}/posts`, { title, body })
    .then(response => {
      dispatch(addPostSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const addPostSuccess = data => {
  return {
    type: ADD_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body
    }
  };
};

export const deletePost = id => dispatch => {
  axios
    .delete(`${apiUrl}/posts/${id}`)
    .then(response => {
      dispatch(deletePostSuccess(id));
    })
    .catch(error => {
      throw error;
    });
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id: id
    }
  };
};

export const editPost = (id, title, body) => dispatch => {
  axios
    .put(`${apiUrl}/posts/${id}`, { title, body })
    .then(response => {
      dispatch(editPostSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const editPostSuccess = data => {
  return {
    type: EDIT_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body
    }
  };
};

export const fetchPosts = userId => dispatch => {
  axios
    .get(`${apiUrl}/posts?userId=${userId}`)
    .then(response => {
      dispatch(fetchPostsSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS,
    posts: posts
  };
};

export const clearPosts = () => {
  return {
    type: CLEAR_POSTS
  }
}