import React, { Component } from 'react';

class Coffee extends Component {
    state = {
        cups: 1
    }

    render() {
        return(
            <div>
                <button>
                    decrement
                </button>
                <span syle = {{margin: "auto 12px"}}>
                    I have had {this.state.cups} cups of coffee
                </span>
                <button>
                    increment
                </button>
            </div>
        )
    }
}

export default Coffee;