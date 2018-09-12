import React, { Component } from 'react'
// import './../styles/counter.css'

class InitialCountForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      count: ''
    }
  }

  handleSubmit(event) {
    this.props.handleSubmit(this.state.count)
    event.preventDefault()
  }

  handleChange(event) {
    var value = event.target.value === '' ? 0 : parseInt(event.target.value, 10)
    this.setState({ count: value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          label="Counter starts at..."
          value={this.state.count}
          onChange={this.handleChange}
        />
        <input name="submit" type="submit" />
      </form>
    )
  }
}

InitialCountForm.defaultProps = {
  handleSubmit: () => {}
}

export default InitialCountForm
