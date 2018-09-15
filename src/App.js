import React, { Component } from 'react'
import { Counter, Instructions } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialCount: 0
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          items={['i', 'iii', 'love', 'hack', 'for', 'impact', 'uiuc']}
          displayImage={true}
        />
        <Counter count={this.state.initialCount} />
      </div>
    )
  }
}

export default App
