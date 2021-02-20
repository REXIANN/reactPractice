import React from 'react'
import BoilingVerdict from './BoilingVerdict'

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value 
    })
  }

  render() {
    const { temperature } = this.state
    const { scale } = this.props
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict temperature={temperature} scale={scale} />
      </fieldset>
    ) 
  }
}

const scaleName = {
  c: 'Celcius',
  f: 'Fahrenheit',
}

export default TemperatureInput