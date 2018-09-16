import React, { Component } from 'react'
import './../styles/counter.css'

class Counter extends Component {
  increment = () => {
    this.props.setCount(this.props.count + 1)
  }

  decrement = () => {
    this.props.setCount(this.props.count - 1)
  }

  render() {
    return (
      <div className="counter">
        {this.props.count}
        <br />
        <div className="buttons">
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    )
  }
}

export default Counter
