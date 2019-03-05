import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbum } from '../actions/album';
import { fetchUser } from '../actions/user';
import { fetchPhotos } from '../actions/photos';

import PhotoList from '../components/PhotoList';

class AlbumPage extends React.Component {
  componentDidMount() {
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
        <h1>{this.props.album.title}</h1>
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
          <PhotoList />
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPage);
