import React, { Component } from 'react';

import Header from './Header';
import UserList from './UserList';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Page>
          <UserList />
        </Page>
      </div>
    );
  }
}

export default App;
