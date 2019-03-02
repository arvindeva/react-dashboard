import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
