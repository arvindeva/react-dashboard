import React from 'react';

const User = props => {
  return (
    <div className="card">
      <div className="content">
        <div className="header">{props.user.name}</div>
        <div className="description">{props.user.email}</div>
      </div>
      <div className="content">
        <p className="center aligned floated">
          <i className="list icon" />
          Posts
        </p>
        <p className="center aligned floated">
          <i className="images icon" />
          Album
        </p>
      </div>
    </div>
  );
};

export default User;
