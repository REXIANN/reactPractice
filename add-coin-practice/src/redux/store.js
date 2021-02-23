import { configureStore } from '@reduxjs/toolkit'
import coinReducer from '../components/CoinSlice'

export default configureStore({
  reducer: {
    coin: coinReducer,
  }
})