import React from 'react';

const Comment = props => {
  return (
    <div className="item card">
      <h2>{props.comment.name}</h2>
      <p>{props.comment.body}</p>
      <div>Edit</div>
      <div>Delete</div>
    </div>
  );
};

export default Comment;