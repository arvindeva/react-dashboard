export const albumsIsLoading = (state = false, action) => {
  switch(action.type) {
    case 'ALBUMS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const albums = (state = [], action) => {
  switch(action.type) {
    case 'ALBUMS_FETCH_DATA_SUCCESS':
      return action.albums;
    default:
      return state;
  }
}
