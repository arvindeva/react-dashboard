import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbum, clearAlbum } from '../actions/album';
import { fetchUser, clearUser } from '../actions/user';
import { fetchPhotos, clearPhotos } from '../actions/photos';

import PhotoList from '../components/PhotoList';
import PhotosPlaceholder from '../components/placeholders/PhotosPlaceholder';

class AlbumPage extends React.Component {
  componentDidMount() {
    // clear store state appropriately so the page does not render previous state.
    this.props.clearAlbum();
    this.props.clearPhotos();
    this.props.clearUser();

    let albumId = this.props.location.state
      ? this.props.location.state.id
      : this.props.match.params.albumId;

    this.props.fetchAlbum(albumId);
    this.props.fetchPhotos(albumId);
    this.props.fetchUser(this.props.album.userId);
  }

  render() {
    return (
      <div>
        {this.props.album.title ? (
          <h1>{this.props.album.title}</h1>
        ) : (
          <div className="ui placeholder">
            <div className="line" />
          </div>
        )}

        <p>
          Album By:{' '}
          <Link
            to={{
              pathname: `/users/${this.props.user.id}`,
              state: { id: this.props.user.id }
            }}
          >
            {this.props.user.name}
          </Link>
        </p>
        <div className="ui divider" />
        <div>
          {this.props.photos.length !== 0 ? (
            <PhotoList photos={this.props.photos} />
          ) : (
            <PhotosPlaceholder />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.album,
    user: state.user,
    photos: state.photos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: albumId => {
      dispatch(fetchAlbum(albumId));
    },
    fetchUser: userId => {
      dispatch(fetchUser(userId));
    },
    fetchPhotos: albumId => {
      dispatch(fetchPhotos(albumId));
    },
    clearAlbum: () => {
      dispatch(clearAlbum());
    },
    clearPhotos: () => {
      dispatch(clearPhotos());
    },
    clearUser: () => {
      dispatch(clearUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPage);
