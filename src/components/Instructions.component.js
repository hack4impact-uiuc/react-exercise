import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      report: true
    }
  }

  render() {
    if (this.state.report === null) {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
        </div>
      )
    } else {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        </div>
      )
    }
  }
}

export default Instructions
