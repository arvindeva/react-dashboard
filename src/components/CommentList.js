import React from 'react';

import Comment from './Comment';

const CommentList = props => {
  const list = props.comments;
  return (
    <div className="ui list">
      {list ? (
        list.map(comment => {
          return (
            <div className="item" key={comment.id}>
              <Comment comment={comment} />
            </div>
          );
        })
      ) : (
        <div>Loading Data</div>
      )}
    </div>
  );
};

export default CommentList;
