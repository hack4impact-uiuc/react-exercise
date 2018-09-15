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

  renderItems() {
    const items = this.props.items
      .filter(item => item.length >= 3)
      .map((item, i) => {
        if (i % 2) {
          return <li key={i}>{item.toUpperCase()}</li>
        } else {
          return <li key={i}>{item}</li>
        }
      })
    return <ul>{items}</ul>
  }

  render() {
    return (
      <div className="instructions">
        {this.renderImage()}
        {this.renderItems()}
      </div>
    )
  }
}

export default Instructions
