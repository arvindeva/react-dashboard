import { FETCH_PHOTOS, CLEAR_PHOTOS } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchPhotos = albumId => dispatch => {
  axios
    .get(`${apiUrl}/photos?albumId=${albumId}`)
    .then(response => {
      dispatch(fetchPhotosSuccess(response.data));
    })
    .catch(error => {
      throw error;
    })
}

export const fetchPhotosSuccess = photos => {
  return {
    type: FETCH_PHOTOS,
    photos: photos
  }
}

export const clearPhotos = () => {
  return {
    type: CLEAR_PHOTOS
  }
}
