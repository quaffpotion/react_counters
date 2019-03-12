import React, { Component } from 'react';

class Coffee extends Component {

    //This is included to give a contrast to using arrow functions.
    //See the different versions of increment and decrement below
    constructor() {
        //console.log(this) will throw an error because `this` isn't initialized
        //until super is called. However in reactarmoury tutorial they don't seem
        //to need to do this (in Timer.js)
        super()

        //Coffee object with state.cups = 0 i.e. constructor runs after other object
        //variables are initialized
        console.log(this)
        this.increment = this.increment.bind(this)

    }

    state = {
        cups: 0
    }

    decrement = () => {
        this.setState( (prevState) => {
            return {
                cups: prevState.cups - this.props.step
            }
        })
    }

    //note: not an arrow function so we need to use the code in the `constructor` function
    //to force increment to always be called by the coffee object so it's `this` is correct.
    increment() {
        this.setState( (prevState) => {
            return {
                cups: prevState.cups + this.props.step
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.decrement}>
                    decrement
                </button>
                <span syle = {{margin: "auto 12px"}}>
                    I have had {this.state.cups} cups of coffee
                </span>
                <button onClick={this.increment}>
                    increment
                </button>
            </div>
        )
    }
}

export default Coffee;