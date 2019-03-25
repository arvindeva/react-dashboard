import React from 'react';

import Post from './Post';

const PostList = props => {
  const list = props.posts;
  return (
    <div className="ui list">
      {list.map(post => {
        return (
          <div className="item" key={`${post.id}`}>
            <Post post={post} user={props.user} />
          </div>
        );
      })}
    </div>
  );
};



export default PostList;
