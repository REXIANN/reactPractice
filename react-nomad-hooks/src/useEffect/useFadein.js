import React, { useRef, useEffect } from 'react'

const useFadeIn = (duration = 1) => {
  const element = useRef()
  useEffect(() => {
  if (typeof duration !== 'number') {
    return
  }
  if (element.current) {
    const { current } = element
    current.style.transition = `opacity ${duration}s`
    current.style.opacity = 1
  }
  })
  return {ref: element, style: {opacity: 0}}
}

const App = () => {
  const fadeInH1 = useFadeIn()
  const fadeInP = useFadeIn(3)
  
  return (
      <div>
        <h1 {...fadeInH1}>hello</h1>
        <p {...fadeInP}>world</p>
      </div>
  )
}

export default useFadeIn
