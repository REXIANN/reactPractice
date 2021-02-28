import React, { Component } from 'react'

class ComponentClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateString: 'react',
      stateArrayObj: ['react', {react: '200'}]
    }
  }

  buttonClick = (type) => {
    if (type === 'String') {
      this.setState({
        stateString: 'react!!!'
      })
    } else {
      this.setState({
        stateArrayObj: [
          'react!!',
          {
            react: '200!'
          }
        ]
      })
    }
  }

  render() {
    return (
      <div>
        <h2>[THIS IS COMPNENT CLASS]</h2>
        <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
        <button onClick={e => this.buttonClick('ArrayObject')}>객체 배열  변경</button>
      </div>
    )
  }
}

export default ComponentClass