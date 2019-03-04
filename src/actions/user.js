import axios from 'axios';

export const userIsLoading = bool => {
  return {
    type: 'USER_IS_LOADING',
    isLoading: bool
  };
};

export const userFetchDataSuccess = user => {
  return {
    type: 'USER_FETCH_DATA_SUCCESS',
    user
  };
};

export const userFetchData = url => {
  return async dispatch => {
    dispatch(userIsLoading(true));
    let userResponse = await axios.get(url);
    const user = userResponse.data;
    dispatch(userFetchDataSuccess(user));
    console.log(user);
    dispatch(userIsLoading(false));
  };
};
