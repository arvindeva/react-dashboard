import React from 'react';
//import styled from 'styled-components';

//const StyledPhoto = styled.div``;

const Photo = props => {
  return (
    <div className="item">
      <div className="image">
        <img
          className="ui small image"
          src={props.photo.url}
          alt={props.photo.title}
        />
      </div>
      <div className="content">
        <div className="header">
          <h2>{props.photo.title}</h2>
        </div>
        <p>{props.photo.url}</p>
        <p>By: {props.user.name}</p>
      </div>
    </div>
  );
};

export default Photo;
