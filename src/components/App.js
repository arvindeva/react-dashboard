import React, { Component } from 'react';

import Header from './Header';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Page />
      </div>
    );
  }
}

export default App;
