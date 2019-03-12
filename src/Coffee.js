import React, { Component } from 'react';

class Coffee extends Component {
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

    increment = () => {
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