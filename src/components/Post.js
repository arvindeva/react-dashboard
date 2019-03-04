import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../actions/posts';

const Post = props => {
  const onDeleteClick = e => {
    e.preventDefault();
    console.log(props.post.id);
    props.deletePost(props.post.id);
  };

  const onEditClick = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Link
        to={{
          pathname: `/posts/${props.post.id}`,
          state: { id: props.post.id, userId: props.post.userId }
        }}
      >
        {props.post.title}
      </Link>
      <p>{props.post.body}</p>
      <button className="ui button teal" onClick={onEditClick}>
        Edit
      </button>
      <button className="ui button red" onClick={onDeleteClick}>
        Delete
      </button>
      <div className="ui item">{/* <EditPost /> */}</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Post);
