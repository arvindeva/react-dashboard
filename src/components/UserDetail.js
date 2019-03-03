import React from 'react';

const UserDetail = props => {
  return (
    <div>
      <p>User Name: {props.user.username}</p>
      <p>Email: {props.user.email}</p>
      <p>Phone: {props.user.phone}</p>
      <p>Website: {props.user.website}</p>
    </div>
  );
};

export default UserDetail;
