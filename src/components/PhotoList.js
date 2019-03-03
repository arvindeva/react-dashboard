import React from 'react';

import Photo from './Photo';

const PhotoList = props => {
  const list = props.photos;

  return (
    <div className="ui list">
      {list.map(photo => {
          return (
            <div className="item" key={photo.id}>
              <Photo photo={photo} />
            </div>
          );
        })}
    </div>
  )
}

export default PhotoList;