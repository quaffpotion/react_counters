import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Coffee from './Coffee'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Coffee step={2} initial={5} />
          <Coffee step={1} />
          <Coffee />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
