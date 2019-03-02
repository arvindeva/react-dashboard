import React from 'react';
import axios from 'axios';

class AlbumPage extends React.Component {
  state = {
    album: {},
    photos: []
  };

  async componentDidMount() {
    let albumId = this.props.location.state ? this.props.location.state.id : 0;

    // Use params if user use URL directly
    if (!albumId) {
      albumId = this.props.match.params.albumId;
    }
    console.log(this.props);
    let albumResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${albumId}`
    );
    const album = albumResponse.data;
    console.log(albumResponse.data);
    this.setState({ album: album });
    let photosResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    const photos = photosResponse.data;
    console.log(photosResponse.data);
    this.setState({ photos: photos });
  }

  render() {
    return (
      <div>
        <h1>{this.state.album.title}</h1>
      </div>
    );
  }
}

export default AlbumPage;
