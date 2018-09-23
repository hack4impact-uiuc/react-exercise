import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  renderImage() {
    return this.props.displayImage ? (
      <img
        className="instructions__logo"
        src="https://uiuc.hack4impact.org/img/colored-logo.png"
        alt="h4i logo"
      />
    ) : null
  }

  renderItems() {
    const items = this.props.items
      .filter(item => item.length >= 3)
      .map(
        (item, i) =>
          i % 2 ? (
            <li key={i}>{item}</li>
          ) : (
            <li key={i}>{item.toUpperCase()}</li>
          )
      )
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
