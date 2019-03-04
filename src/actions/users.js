import axios from 'axios';

export const usersIsLoading = bool => {
  return {
    type: 'USERS_IS_LOADING',
    isLoading: bool
  };
};

export const usersFetchDataSuccess = users => {
  return {
    type: 'USERS_FETCH_DATA_SUCCESS',
    users
  };
};

export const usersFetchData = url => {
  return async dispatch => {
    dispatch(usersIsLoading(true));
    let usersResponse = await axios.get(url);
    const users = usersResponse.data;
    dispatch(usersFetchDataSuccess(users));
    console.log(users);
    dispatch(usersIsLoading(false));
  };
};
