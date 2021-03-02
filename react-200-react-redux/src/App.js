import React, { Component } from 'react'
import { connect } from 'react-redux'
import StrAddButton from './StrAddButton'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.str}</span>
        <br />
        <StrAddButton AppProp='200' />
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  console.log('Props from index.js : ' + props.indexProp)
  return {
    str: state.data.str,
  }
}

App = connect(mapStateToProps, null)(App)

export default App;
