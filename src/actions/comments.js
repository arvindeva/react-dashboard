import { ADD_COMMENT, DELETE_COMMENT, FETCH_COMMENTS } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const addComment = ({ name, email, body }) => dispatch => {
  axios
    .post(`${apiUrl}/comments`, { name, email, body })
    .then(response => {
      dispatch(addCommentSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const addCommentSuccess = data => {
  return {
    type: ADD_COMMENT,
    payload: {
      id: data.id,
      name: data.name,
      email: data.email,
      body: data.body
    }
  };
};

export const deleteComment = id => dispatch => {
  axios
    .delete(`${apiUrl}/comments/${id}`)
    .then(response => {
      dispatch(deleteCommentSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const deleteCommentSuccess = id => {
  return {
    type: DELETE_COMMENT,
    payload: {
      id: id
    }
  };
};

export const fetchComments = postId => dispatch => {
  console.log(postId);
  axios
    .get(`${apiUrl}/comments?postId=${postId}`)
    .then(response => {
      dispatch(fetchCommentsSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const fetchCommentsSuccess = comments => {
  return {
    type: FETCH_COMMENTS,
    comments: comments
  };
};
