export const userIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'USER_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER_FETCH_DATA_SUCCESS':
      return action.user;
    default:
      return state;
  }
}
