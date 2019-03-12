import React, { Component } from 'react';

class Coffee extends Component {
    state = {
        cups: 1
    }

    decrement = () => {
        this.setState( function(prevState) {
            return {
                cups: prevState.cups - 1
            }
        })
    }

    increment = () => {
        this.setState(function(prevState) {
            return {
                cups: prevState.cups + 1
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