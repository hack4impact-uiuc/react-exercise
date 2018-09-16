import React, { Component } from 'react'
import './../styles/instructions.css'

class Counter extends Component {
  increment = () => {
    this.props.setCount(this.props.count + 1)
  }

  decrement = () => {
    this.props.setCount(this.props.count - 1)
  }

  render() {
    return (
      <div>
        {this.props.count}
        <br />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter
