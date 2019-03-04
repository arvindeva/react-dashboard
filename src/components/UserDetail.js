import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserDetail);
