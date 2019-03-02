import React from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';
import UsersPage from './UsersPage';

const StyledPage = styled.div`
  margin-top: 80px;
`;

class Page extends React.Component {
  render() {
    return (
      <StyledPage>
        <SideBar />
        <UsersPage />
      </StyledPage>
    );
  }
}

export default Page;
