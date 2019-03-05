import { ADD_COMMENT, DELETE_COMMENT, FETCH_COMMENTS, EDIT_COMMENT } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const addComment = ( name, email, body ) => dispatch => {
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
  console.log(`Trying to delete ${apiUrl}/comments/${id}`)
  axios
    .delete(`${apiUrl}/comments/${id}`)
    .then((response) => {
      dispatch(deleteCommentSuccess(id));
      console.log(response.status);
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

export const editComment = (id, name, email, body) => dispatch =>{
  console.log(id, name, email, body)
  axios
    .put(`${apiUrl}/posts/${id}`, { name, email, body })
    .then(response => {
      console.log(response.data);
      dispatch(editCommentSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
}

export const editCommentSuccess = data => {
  return {
    type: EDIT_COMMENT,
    payload: {
      id: data.id,
      name: data.name,
      email: data.email,
      body: data.body
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
