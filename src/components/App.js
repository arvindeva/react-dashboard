import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';
import PostPage from '../pages/PostPage';
import AlbumPage from '../pages/AlbumPage';
import AboutPage from '../pages/AboutPage';

const StyledApp = styled.div`
  .page {
    margin-top: 80px;
    margin-left: 5%;
    margin-right: 5%;
    z-index: 0;
  }
`;
const App = () => {
  return (
    <StyledApp className="app">
      <Header />
      <div className="page">
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route exact path="/posts/:postId" component={PostPage} />
          <Route exact path="/albums/:albumId" component={AlbumPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
    </StyledApp>
  );
};

export default App;
