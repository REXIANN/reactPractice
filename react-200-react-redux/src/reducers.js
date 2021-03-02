import { ADD } from './actions'
import { combineReducers } from 'redux'

const initState = {
  str: 'react',
}

const data = (state = initState, action) => {
  switch(action.type) {
    case ADD:
      return state, {
        str: state.str + '22',
      }

    default:
      return state
  }
}

const App = combineReducers({
  data
})

export default App