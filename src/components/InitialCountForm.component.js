import React, { Component } from 'react'
import './../styles/counter.css'
class InitialCountForm extends Component {
  constructor(props) {
    super(props)
    this.setCount = this.setCount.bind(this)
  }

  setCount = event => {
    event.preventDefault()
    const data = new FormData(event.target)
    const count = parseInt(data.get('count'), 10)
    this.props.setCount(count)
  }

  render() {
    return (
      <div>
        <p>Set count:</p>
        <form onSubmit={this.setCount}>
          <input name="count" type="number" />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default InitialCountForm
