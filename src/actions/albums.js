import { FETCH_ALBUMS, CLEAR_ALBUMS } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchAlbums = userId => dispatch => {
  axios
    .get(`${apiUrl}/albums?userId=${userId}`)
    .then(response => {
      dispatch(fetchAlbumsSuccess(response.data));
    })
    .catch(error => {
      throw error;
    })
}

export const fetchAlbumsSuccess = albums => {
  return {
    type: FETCH_ALBUMS,
    albums: albums
  }
}

export const clearAlbums = () => {
  return {
    type: CLEAR_ALBUMS
  }
}
