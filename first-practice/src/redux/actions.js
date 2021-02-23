export const GET_COIN = 'GET_COIN'

export function getCoinInfo(coin) {
  return {
    type: GET_COIN,
    payload: coin
  }
}