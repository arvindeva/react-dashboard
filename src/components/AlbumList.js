import React from 'react';
import { connect } from 'react-redux';

import Album from './Album';

const AlbumList = props => {
  const list = props.albums;
  return (
    <div className="ui items">
      {list ? (
        list.map(album => {
          return (
            <div className="item" key={album.id}>
              <Album album={album} user={props.user} />
            </div>
          );
        })
      ) : (
        <div>Loading Data</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(AlbumList);
