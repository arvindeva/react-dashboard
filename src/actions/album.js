import { FETCH_ALBUM, CLEAR_ALBUM } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchAlbum = id => dispatch => {
  axios
    .get(`${apiUrl}/albums/${id}`)
    .then(response => {
      dispatch(fetchAlbumSuccess(response.data));
    })
    .catch(error => {
      throw error;
    })
}

export const fetchAlbumSuccess = album => {
  return {
    type: FETCH_ALBUM,
    album: album
  }
}

export const clearAlbum = () => {
  return {
    type: CLEAR_ALBUM
  }
}
