import React from 'react';

import UserEntry from './UserEntry';
import { connect } from 'react-redux';

const UserTable = props => {
  return (
    <div>
      {props.users.length ? (
        <table className="ui celled table">
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
              <th>Name</th>
              <th>E-mail Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map(user => {
              return <UserEntry key={user.id} user={user} />;
            })}
          </tbody>
        </table>
      ) : (
        <div className="ui active inline loader" />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserTable);
