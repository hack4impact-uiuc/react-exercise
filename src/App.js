import React, { Component } from 'react'
import { Counter, Instructions } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.setCount = this.setCount.bind(this)
  }

  setCount(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const count = parseInt(data.get('count'), 10)
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
        <form onSubmit={this.setCount}>
          <input name="count" type="number" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default App
