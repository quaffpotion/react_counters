import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Coffee from './Coffee'

class App extends Component {

  state = {
    counters: [
      {name: "Coffee", step: 2, amount: 5},
      {name: "Apples", step: 1},
      {name: "Oranges"}

    ],
    total: 0,
    value: "Add a todo..."
  }


  submitTodo = (name) => {
    this.setState(
      state => {
        state.counters.push({name: name})
        return state
      }
    )
  }

  handleChange(event) {
    this.setState(state => {
      state.value = event.target.value
      return state
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form
            onSubmit={(event) => {
              event.preventDefault()
              this.submitTodo(this.state.value)
            }}
          >
            <input type="text" value={this.state.value} onChange={event => 
              {
                event.persist()
                this.handleChange(event)}
              }
            />
            <button type="submit">Add</button>
          </form>

          {this.state.counters.map(data => <Coffee key={data.name} {...data}/>)}
          <img src={logo} className="App-logo" alt="logo" />
          <span>Total: {this.state.total}</span>
        </header>
      </div>
    );
  }
}

export default App;
