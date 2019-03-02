import React from 'react';
import styled from 'styled-components';

import UserList from './UserList';

const StyledPage = styled.div`
  margin-top: 80px;
`;

class Page extends React.Component {
  render() {
    return (
      <StyledPage>
        <UserList />
      </StyledPage>
    )
  }
}

export default Page;
