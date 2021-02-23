import { createSlice } from '@reduxjs/toolkit'

export const coinSlice = createSlice({
  name: 'coin',
  initialState: {
    coin: {
      name: 'test-name',
      id: 1,
      symbol: 'test-symbol',
      guid: 'test-guid',
    }
  },
  reducers: {
    setCoin: (state, action) => action.payload
  }
})

export const { setCoin } = coinSlice.actions

export const selectCoin = state => state.coin

export default coinSlice.reducer