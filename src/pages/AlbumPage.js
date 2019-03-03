import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PhotoList from '../components/PhotoList';

class AlbumPage extends React.Component {
  state = {
    user: {},
    album: {},
    photos: [],
    isLoading: true
  };

  async componentDidMount() {
    let albumId = this.props.location.state ? this.props.location.state.id : 0;

    // Use params if user use URL directly
    if (!albumId) {
      albumId = this.props.match.params.albumId;
    }

    this.setState({ isLoading: true })
    let albumResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${albumId}`
    );
    const album = albumResponse.data;
    this.setState({ album: album });
    let photosResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    const photos = photosResponse.data;
    this.setState({ photos: photos });

    let userResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${this.state.album.userId}`
    );
    let user = userResponse.data;
    this.setState({ user: user, isLoading: false });
  }

  render() {

    return (
      <div>
        <h1>
          {!this.state.isLoading ? this.state.album.title : 'LOADING' }
        </h1>
        <p>
          Album By:{' '}
          <Link
            to={{
              pathname: `/users/${this.state.user.id}`,
              state: { id: this.state.user.id }
            }}
          >
            {this.state.user.name}
          </Link>
        </p>
        <div className="ui divider" />
        <div>
          <PhotoList photos={this.state.photos} user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default AlbumPage;
