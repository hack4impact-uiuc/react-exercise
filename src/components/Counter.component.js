import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.onDecrement = this.onDecrement.bind(this)
    this.onIncrement = this.onIncrement.bind(this)
    this.state = {
      count: this.props.count
    }
  }

  onDecrement() {
    this.setState((state, props) => ({
      count: state.count - 1
    }))
  }

  onIncrement() {
    this.setState((state, props) => ({
      count: state.count + 1
    }))
  }

  renderButtons() {
    var decrementButton = (
      <button name="decrement" onClick={this.onDecrement}>
        -1
      </button>
    )
    var incrementButton = (
      <button name="increment" onClick={this.onIncrement}>
        +1
      </button>
    )

    return (
      <div>
        {decrementButton}
        {incrementButton}
      </div>
    )
  }

  renderCount() {
    return <div className="count">Current count: {this.state.count}</div>
  }

  render() {
    return (
      <div className="counter">
        {this.renderCount()}
        {this.renderButtons()}
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}

export default Counter
