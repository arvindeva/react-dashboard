import React from 'react';
import styled from 'styled-components';

import User from './User';

const StyledUserList = styled.div.attrs({
  className: "user-list ui cards"
})`
  margin-left: 200px;
`;

const UserList = props => {
  return (
    <StyledUserList >
      {props.users.map(user => {
        return <User key={user.id} user={user}/>
      })}
    </StyledUserList>
  );
};

export default UserList;
