import React from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';
import UsersPage from '../pages/UsersPage';

const StyledPage = styled.div`
  margin-top: 80px;
  margin-left: 5%;
  margin-right: 5%;
  z-index: 0;
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
