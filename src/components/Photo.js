import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
  display: flex;
  align-items: center;
  .photo-detail {
    margin-left: 20px;
  }
`;

const Photo = props => {
  return (
    <StyledPhoto>
      <div>
        <img
          className="ui small image"
          src={props.photo.url}
          alt={props.photo.title}
        />
      </div>
      <div className="photo-detail">
        <h2>{props.photo.title}</h2>
        <p>{props.photo.url}</p>
      </div>
    </StyledPhoto>
  );
};

export default Photo;
