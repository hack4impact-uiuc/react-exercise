import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      report: true
    }
  }

  renderImage() {
    if (this.state.report === null) {
    } else {
      return (
        <img
          className="instructions__logo"
          src="https://uiuc.hack4impact.org/img/colored-logo.png"
          alt="h4i logo"
        />
      )
    }
  }

  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.renderImage()}
      </div>
    )
  }
}

export default Instructions
