import { createSlice } from '@reduxjs/toolkit'
import IbtCoinInfo from '../constants/IbtCoinInfo.json'

const initialState = {}

const coinSlice = createSlice({
  name: 'coinInfo',
  initialState,
  reducers: {
    coinAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export default coinSlice.reducers