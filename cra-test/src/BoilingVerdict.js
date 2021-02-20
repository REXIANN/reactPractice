function BoilingVerdict(props) {
  const { scale, temperature } = props
  if (scale === 'c') {
    if ( temperature > 100) {
      return <p> The water would boil.</p>
    } else {
      return <p> The water would not boil.</p>
    }
  } else {
    if ( temperature > 212) {
      return <p> The water would boil.</p>
    } else {
      return <p> The water would not boil.</p>
    }
  }
}

export default BoilingVerdict