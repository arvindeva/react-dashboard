import React from 'react';
import styled from 'styled-components';

import UserEntry from './UserEntry';

const StyledUserTable = styled.table.attrs({
  className: 'ui single line table'
})`
  a {
    cursor: pointer;
  }
`;

const UserTable = props => {
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

export default UserTable;
