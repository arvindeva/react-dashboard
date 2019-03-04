import axios from 'axios';

export const albumsIsLoading = bool => {
  return {
    type: 'ALBUMS_IS_LOADING',
    isLoading: bool
  };
};

export const albumsFetchDataSuccess = albums => {
  return {
    type: 'ALBUMS_FETCH_DATA_SUCCESS',
    albums
  };
};

export const albumsFetchData = url => {
  return async dispatch => {
    dispatch(albumsIsLoading(true));
    let albumsResponse = await axios.get(url);
    const albums = albumsResponse.data;
    dispatch(albumsFetchDataSuccess(albums));
    console.log(albums);
    dispatch(albumsIsLoading(false));
  };
};
