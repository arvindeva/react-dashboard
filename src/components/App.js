import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './Header';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';
import PostPage from '../pages/PostPage';
import AlbumPage from '../pages/AlbumPage';
import AboutPage from '../pages/AboutPage';

const StyledPage = styled.div`
  margin-top: 80px;
  margin-left: 5%;
  margin-right: 5%;
  z-index: 0;
`;

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <StyledPage>
          <Switch>
            <Route exact path="/" component={UsersPage} />
            <Route exact path="/users/:userId" component={UserPage} />
            <Route exact path="/posts/:postId" component={PostPage} />
            <Route exact path="/albums/:albumId" component={AlbumPage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </StyledPage>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default withRouter(connect(mapStateToProps)(App));
