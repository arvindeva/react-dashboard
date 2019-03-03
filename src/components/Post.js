import React from 'react';
import { Link } from 'react-router-dom';

const Post = props => {
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
    </div>
  );
};

export default Post;
