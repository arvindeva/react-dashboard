import React from 'react';
import styled from 'styled-components';


const Comment = props => {
  return (
    <div className="item card">
      <h2>{props.comment.name}</h2>
      <p>{props.comment.body}</p>
    </div>
  );
};

export default Comment;
