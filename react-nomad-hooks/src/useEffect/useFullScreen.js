import React, { useRef } from 'react'

const useFullScreen = () => {
  const element = useRef()
  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen()
    }
  }
  const exitFullScreen = () => {
    document.exitFullscreen()
  }
  
  return {element, triggerFullScreen, exitFullScreen}
}

const App = () => {
  const { element, triggerFullScreen, exitFullScreen } = useFullScreen()
  return (
      <div>
        <img ref={{element}}/>
        <button onClick={triggerFullScreen}>make full screen</button>
        <button onClick={exitFullScreen}>exit full screen</button>
      </div>
  )
}
export default useFullScreen