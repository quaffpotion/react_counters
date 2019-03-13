import React, { Component } from 'react';

class Coffee extends Component {

    //This is included to give a contrast to using arrow functions.
    //See the different versions of increment and decrement below
    constructor(props) {
        //console.log(this) will throw an error because `this` isn't initialized
        //until super is called. However in reactarmoury tutorial they don't seem
        //to need to do this (in Timer.js)
        super(props)

        //Could also initialize state here however it isn't necessary (see below)
        // state = {
        //     cups: this.props.initial || 0
        // }

        //Coffee object with state.cups = the default i.e. constructor runs after other object
        //variables are initialized
        //console.log(this)


        this.increment = this.increment.bind(this)

    }

    state = {
        amount: this.props.amount ? this.props.amount : 0
    }

    decrement = () => {
        this.setState( prevState => (
            {
                amount: prevState.amount - (this.props.step ? this.props.step : 1)
            }
        ))
    }

    //note: not an arrow function so we need to use the code in the `constructor` function
    //to force increment to always be called by the coffee object so it's `this` is correct.
    increment() {
        this.setState( prevState => {
            return {
                amount: prevState.amount + (this.props.step ? this.props.step : 1)
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
                    I have {this.state.amount} {this.props.name}
                </span>
                <button onClick={this.increment}>
                    increment
                </button>
                <button onClick={this.props.delete}>
                    delete
                </button> 
            </div>
        )
    }
}

export default Coffee;