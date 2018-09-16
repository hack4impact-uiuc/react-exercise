import React, { Component } from 'react'

class InitialCountForm extends Component {
  constructor(props) {
    super(props)
    this.setCount = this.setCount.bind(this)
  }

  setCount(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const count = parseInt(data.get('count'), 10)
    this.props.setCount(count)
  }

  render() {
    return (
      <form onSubmit={this.setCount}>
        <input name="count" type="number" />
        <input type="submit" />
      </form>
    )
  }
}

export default InitialCountForm
