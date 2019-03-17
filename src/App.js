import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Coffee from './Coffee'

class CoffeeContainer extends Component {
  render() {
    return(
      <div>
      {this.props.children}
      </div>
    )
  } 
}



class App extends Component {

  state = {
    counters: [
      {name: "Coffee", step: 2, amount: 5},
      {name: "Apples", step: 1, amount: 2},
      {name: "Oranges", amount: 1}

    ],
    total: 8,
    value: "Add a todo..."
  }

  deleteTodo = (name) => {
    this.setState(state => ({...state, counters: state.counters.filter(i => i.name !== name) }) )
  }

  onPress = (change) => {

    this.setState( state => ({...state, total: state.total+change}) )
    // this.state.counters.map( item => console.log(item.amount))
    // console.log("Total: " + this.state.total)

    // let newtotal = this.state.counters.reduce((total, item) => ( item.amount?item.amount:0 + total), 0)
    // this.setState(state => ({ ...state, total: newtotal }))
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

          <CoffeeContainer>
            {this.state.counters.map(data =>
              <Coffee
                key={data.name}
                delete={() => this.deleteTodo(data.name)} {...data}
                onPress={this.onPress}
              />)
            }
          </CoffeeContainer>
          
          <img src={logo} className="App-logo" alt="logo" />
          <span>Total: {this.state.total}</span>
        </header>
      </div>
    );
  }
}

export default App;
