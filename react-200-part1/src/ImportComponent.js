import React, { Component } from 'react'

class ImportComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    console.log('1. constructor call')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps: ' + props.value) 
    return {valueState: props.value}
  }

  componentDidMount() {
    console.log('4. componentDidMount call')
    console.log('5. state.valueState: ', this.state.valueState)
    this.setState({
      hasValue: true
    })
  } 

  shouldComponentUpdate(props, state) {
    console.log('6. shouldComponentupdate call / hasValue :', state.hasValue)
    return state.hasValue
  }

  render() {
    console.log('3. render call')
    const ss = this.state.valueState
    return (
      <div>
        <h2>
          [THIS IS IMPORTED COMPONENT]
        </h2>
        <span>{ss}</span>
      </div>
    )
  }
}

export default ImportComponent