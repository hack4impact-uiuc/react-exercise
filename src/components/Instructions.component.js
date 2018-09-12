import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  // Renders items in a bullet point list
  // Removes items with length less than 3
  // Renders every other item in upper case
  // Does not account for changes to the list
  renderItems() {
    var items = this.props.items
    items = items.filter(i => i.length > 2)
    return (
      <ul>
        {items.map((s, idx) => (
          <li key={s}>{idx % 2 === 0 ? s : s.toUpperCase()}</li>
        ))}
      </ul>
    )
  }

  renderLogo() {
    if (!this.props.shouldDisplayImage) {
      return
    }
    return (
      <img
        className="instructions__logo"
        src="https://uiuc.hack4impact.org/img/colored-logo.png"
        alt="h4i logo"
      />
    )
  }

  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.props.shouldDisplayImage && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
        {this.renderItems()}
      </div>
    )
  }
}

Instructions.defaultProps = {
  shouldDisplayImage: true,
  items: []
}

export default Instructions
