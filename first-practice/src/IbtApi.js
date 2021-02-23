import React from 'react'
class IbtApi extends React.Component {
  constructor(props) {
    super(props)
    this.handleAPI = this.handleAPI.bind(this)
  }

  state = {
    content: [{'name': 'testname', 'symbol': 'act'}] 
  }

  handleAPI() {
    console.log('clicked handleAPI')
    const URL = "https://api.intotheblock.com/assets"
    const API_KEY = "qF3NHH8aqG4ePiLGNqbjF1Wu3xVq2eF010Mwdtx3"
    const reqHeaders = new Headers({
      "accept": "application/json",
      "X-Api-Key": API_KEY,
    })

    const req = new Request(URL, {
      method: "GET",
      headers: reqHeaders
    })

    fetch(req)
    .then(res => res.json())
    .then(res => {
      this.setState({
        content: res,
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    const { content } = this.state
    
  
    return (
      <div>
        <button onClick={this.handleAPI}>정보 가져오기</button>
        <hr />

        <div>
          {content[0].name}
          <br></br>
          {content[0].symbol}
        </div>

      </div>
    )
  }
}

export default IbtApi