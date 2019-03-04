import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions/comments';

const Comment = props => {
  const onDeleteClick = e => {
    e.preventDefault();
    console.log(props.comment.id);
    props.deleteComment(props.comment.id);
  };

  return (
    <div className="item card">
      <h2>{props.comment.name}</h2>
      <p>Comment by {props.comment.email}</p>
      <p>{props.comment.body}</p>
      <button className="ui button teal">Edit</button>
      <button className="ui button red" onClick={onDeleteClick}>
        Delete
      </button>
      <div className="ui divider" />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: id => {
      dispatch(deleteComment(id));
    }
  };
}

export default connect(null, mapDispatchToProps)(Comment);
