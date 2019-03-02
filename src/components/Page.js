import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';

const StyledPage = styled.div`
  margin-top: 80px;
  margin-left: 3%;
  margin-right: 3%;
  z-index: 0;
`;

class Page extends React.Component {
  render() {
    return (
      <StyledPage>
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route path="/users/:number" component={UserPage} />} />
        </Switch>
      </StyledPage>
    );
  }
}

export default Page;
