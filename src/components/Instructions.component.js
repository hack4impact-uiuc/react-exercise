import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  renderImage() {
    if (this.props.displayImage) {
      return (
        <img
          className="instructions__logo"
          src="https://uiuc.hack4impact.org/img/colored-logo.png"
          alt="h4i logo"
        />
      )
    } else {
      return null
    }
  }

  render() {
    return <div className="instructions">{this.renderImage()}</div>
  }
}

export default Instructions
