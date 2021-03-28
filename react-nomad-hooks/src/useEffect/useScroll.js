import React, { useState } from 'react'

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  })
  const onScroll = event => {
    setState({x: window.scrollX, y: window.scrollY})
    console.log(window.scrollY, window.scrollX)
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })
  return state
}

export default useScroll