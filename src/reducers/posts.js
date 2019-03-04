export const postsIsLoading = (state = false, action) => {
  switch(action.type) {
    case 'POSTS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const posts = (state = [], action) => {
  switch(action.type) {
    case 'POSTS_FETCH_DATA_SUCCESS':
      return action.posts;
    default:
      return state;
  }
}