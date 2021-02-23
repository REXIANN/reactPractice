import CoinInfoList from '../constants/IbtCoinInfo.json'
import { useSelector, useDispatch } from 'react-redux'

import { setCoin, selectCoin } from './CoinSlice'

function CoinList() {
  const thisCoin = useSelector(selectCoin)
  const dispatch = useDispatch()
  
  const showCoin = (coin => (
    <div key={coin.guid}>
      <h3>{coin.name}</h3>
      <br/>
        <p>coinid = {coin.id}</p>
        <p>coin-guid = {coin.guid}</p>
        <p>coin-symbol = {coin.symbol}</p>
      <button onClick={() => dispatch(setCoin(coin))}>{coin.name} 선택하기</button>
      <hr/>
    </div>
  ))
  const coins = CoinInfoList.map(coin => showCoin(coin))

  return(
    <div className="coinlist">
      <div>
        {thisCoin.name}
      </div>
      <hr/>
      <div>
        {coins}
      </div>
    </div>
  )
}

export default CoinList