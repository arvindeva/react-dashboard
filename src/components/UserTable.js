import React from 'react';
import styled from 'styled-components';

import UserEntry from './UserEntry';
import { connect } from 'react-redux';

const StyledUserTable = styled.table.attrs({
  className: 'ui single line table'
})`
  a {
    cursor: pointer;
  }
`;

const UserTable = props => {
  console.log(props.users);
  return (
    <StyledUserTable>
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
    </StyledUserTable>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserTable);
