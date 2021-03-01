import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import reducers from './reducers/index'

const store = createStore(reducers)

const listener = () => {
  ReactDOM.render(
    <App store={store} />, 
    document.getElementById('root')  
  )
}

store.subscribe(listener)
listener()