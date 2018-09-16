import React, { Component } from 'react'
import { Counter, InitialCountForm, Instructions } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.setCount = this.setCount.bind(this)
  }

  setCount(count) {
    this.setState({
      count
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          items={['i', 'iii', 'love', 'hack', 'for', 'impact', 'uiuc']}
          displayImage={true}
        />
        <Counter count={this.state.count} />
        <InitialCountForm setCount={this.setCount} />
      </div>
    )
  }
}

export default App
