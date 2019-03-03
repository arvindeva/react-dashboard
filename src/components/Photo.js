import React from 'react';
// import styled from 'styled-components';

// const StyledPhoto = styled.div`

// `;

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
        <p>By: {props.user.name}</p>
      </div>
    </div>
  );
};

export default Photo;
