import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
  display: grid;
`;

const Photo = props => {
  return (
    <StyledPhoto>
      <img className="ui small image" src={props.photo.url} alt={props.photo.title}/>
      <div className="">
        <h2>{props.photo.title}</h2>
        <div>Edit</div>
        <div>Delete</div>
      </div>
    </StyledPhoto>
  );
};

export default Photo;
