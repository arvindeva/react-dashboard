export const usersIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'USERS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

export const users = (state = [], action) => {
  switch(action.type) {
    case 'USERS_FETCH_DATA_SUCCESS':
      return action.users;
    default:
      return state;
  }
}
