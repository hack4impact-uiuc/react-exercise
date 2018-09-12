import React, { Component } from 'react'
import { Instructions, Counter, InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      initialCount: undefined
    }
  }

  handleSubmit(initialCount) {
    this.setState({
      initialCount: initialCount
    })
  }

  renderForm() {
    if (this.state.initialCount !== undefined) {
      return
    }

    return (
      <InitialCountForm
        count={this.state.initialCount}
        handleSubmit={this.handleSubmit}
      />
    )
  }

  renderCounter() {
    if (this.state.initialCount === undefined) {
      return
    }

    return <Counter count={this.state.initialCount} />
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions shouldDisplayImage={true} items={this.props.items} />
        {this.renderForm()}
        {this.renderCounter()}
      </div>
    )
  }
}

App.defaultProps = {
  items: [
    'Adams County',
    'Alexander County',
    'Bond County',
    'Boone County',
    'Brown County',
    'Bureau County',
    'Calhoun County',
    'Carroll County',
    'Cass County',
    'Champaign County'
  ]
}

export default App
