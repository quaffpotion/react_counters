import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Coffee from './Coffee'

class App extends Component {

  state = {
    counters: [
      {name: "Coffee", step: 2, initial: 5},
      {name: "Apples", step: 1},
      {name: "Oranges"}

    ]
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Coffee step={2} initial={5} />
          <Coffee step={1} />
          <Coffee />

          {this.state.counters.map(data => <Coffee {...data}/>)}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
