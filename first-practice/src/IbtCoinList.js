import React from 'react'
import IbtCoinInfo from './constants/IbtCoinInfo.json'
import { getCoinInfo } from './redux/actions'

class IbtCoinList extends React.Component {
  constructor(props) {
    super(props)
    this.handelCoinInfo = this.handleCoinInfo.bind(this)
    this.state = {
      IbtCoinInfo
    }
  }

  handleCoinInfo(coinInfo) {
    console.log('coinInfo', coinInfo)
    getCoinInfo(coinInfo)
  }

  render() {
    const { IbtCoinInfo } = this.state

    const coinList = IbtCoinInfo.map((coinInfo) => {
      const { name, symbol, guid } = coinInfo
      return (
        <div key={guid}>
          <h3>{name}</h3>
          <hr/>
          <div>
            <span>{symbol}</span>
            <span>{guid}</span>
          </div>
          <button onClick={this.handleCoinInfo(coinInfo)}>Click!</button>
        </div>
      )
    })
    return (
      <div>
        {coinList}
      </div>

    )
  }
}

export default IbtCoinList