import React from 'react';
import Photo from './Photo';

const PhotoList = props => {
  return (
    <div className="ui items">
      {props.photos.map(photo => {
        return <Photo photo={photo} key={photo.id} user={props.user} />;
      })}
    </div>
  );
};

export default PhotoList;
