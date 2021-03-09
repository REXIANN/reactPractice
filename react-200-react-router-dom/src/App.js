import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import reactRouter from './reactRouter'
import reactRouterTwo from './reactRouterTwo'
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={reactRouter} />
        <Route exact path='/reactrouter2' component={reactRouterTwo} />
      </div>
    )
  }
}

export default App;
