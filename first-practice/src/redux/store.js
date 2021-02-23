import { configureStore } from '@reduxjs/toolkitredux'
import coinInfoReducer from './coinSlice'

export default configureStore({
  reducer: {
    coinInfo: coinInfoReducer
  }
})