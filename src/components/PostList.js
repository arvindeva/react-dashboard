import React from 'react';

import Post from './Post';

const PostList = props => {
  const list = props.posts;
  return (
    <div className="ui list">
      {list ? (
        props.posts.map(post => {
          return (
            <div className="item" key={post.id}>
              <Post post={post} />
            </div>
          );
        })
      ) : (
        <div>Loading Data</div>
      )}
    </div>
  );
};

export default PostList;
