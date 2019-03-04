import axios from 'axios';

export const postsIsLoading = bool => {
  return {
    type: 'POSTS_IS_LOADING',
    isLoading: bool
  };
};

export const postsFetchDataSuccess = posts => {
  return {
    type: 'POSTS_FETCH_DATA_SUCCESS',
    posts
  };
};

export const postsFetchData = url => {
  return async dispatch => {
    dispatch(postsIsLoading(true));
    let postsResponse = await axios.get(url);
    const posts = postsResponse.data;
    dispatch(postsFetchDataSuccess(posts));
    console.log(posts);
    dispatch(postsIsLoading(false));
  };  
};
