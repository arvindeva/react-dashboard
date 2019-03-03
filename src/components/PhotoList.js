import React from 'react';

import Photo from './Photo';

const PhotoList = props => {
  const list = props.photos;

  return (
    <div className="ui items">
      {list.map(photo => {
        return <Photo photo={photo} key={photo.id} user={props.user}/>;
      })}
    </div>
  );
};

export default PhotoList;
