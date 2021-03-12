import React, { Component } from 'react'

class Timer extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { count } = this.state
      this.setState({
        count: count + 1,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>THIS IS TIMER</h1>
        <h3>COUNT: {count}</h3>
      </div>
    )
  }
}

export default Timer