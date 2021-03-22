import React, { Component, useState } from 'react'

const First = () => {
  const [item, setItem] = useState(0)
  const increment = () => setItem(item + 1)
  const decrement = () => setItem(item - 1)

  return (
    <div>
      <h1>Hello, item: {item}</h1>
      <hr />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default First

class FirstUgly extends Component {
  state = {
    item: 1
  }
  
  increment = () => {
    this.setState = state => ({ ...state, item: item + 1})
  }
  
  decrement = () => {
    this.setState = state => ({ ...state, item: item - 1})
  }

  render() {
    return (
      <div>
        <h1>Hello, item: {item}</h1>
        <hr />
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}
