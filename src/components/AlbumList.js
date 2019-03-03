import React from 'react';

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

export default AlbumList;
