import React from 'react';

const Photo = props => {
  return (
    <div className="item">
      <div className="ui image">
        <img
          src={props.photo.thumbnailUrl}
          alt={props.photo.title}
        />
      </div>
      <div className="content">
        <div className="header">
          <h2>{props.photo.title}</h2>
        </div>
        <p>Photo URL: <a href={props.photo.url} target="blank">{props.photo.url}</a></p>
      </div>
    </div>
  );
};

export default Photo;
