import React, { Component } from 'react'

class Example extends Component { 
  handleClick() {
    // do sth..
  }
  
  handleButtonClick() {
    // do other..
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <span> hello </span>
        <span> world! </span>
        <button onClick={this.handleButtonClick}>one button</button>
      </div>
    )
  }
}