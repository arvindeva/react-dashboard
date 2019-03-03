import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';
import PostPage from '../pages/PostPage';
import AlbumPage from '../pages/AlbumPage';

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
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route exact path="/posts/:postId" component={PostPage} />
          <Route exact path="/albums/:albumId" component={AlbumPage} />
        </Switch>
      </StyledPage>
    );
  }
}

export default Page;
