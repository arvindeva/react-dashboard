import React from 'react';

import { Link } from 'react-router-dom';

const Post = props => {
  return (
    <div className="item">
      <Link
        to={{
          pathname: `/posts/${props.post.id}`,
          state: { id: props.post.id }
        }}
      >
        <h2>{props.post.title}</h2>
      </Link>
      <p>{props.post.body}</p>
    </div>
  );
};

export default Post;
