import React from 'react';
import { Link } from 'react-router-dom';

const Album = props => {
  return (
    <div className="album">
      <h2>
        <Link
          to={{
            pathname: `/albums/${props.album.id}`,
            state: { id: props.album.id, userId: props.album.userId }
          }}
        >
          {props.album.title}
        </Link>
      </h2>
      <p>{props.album.body}</p>
    </div>
  );
};

export default Album;
