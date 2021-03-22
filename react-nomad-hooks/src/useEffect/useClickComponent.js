import React, { useState, useEffect, useRef } from 'react'

const useClick = (onClick) => {
  const elemnt = useRef()
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick)
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick)
      }
    }
  }, [])
  return element
}

const useClickComponent = () => {
  // const input = useRef(0)
  // setTimeout(() => console.log(potato), 5000) // object안에 current가 붙어있다
  const title = useClick(sayHello)
  const sayHello = () => console.log('say hello!')

  return (
    <div>
      <div>
        HI HERE
      </div>

      <h1 ref={title}>HiHi</h1>
    </div>
  )
}

export default useClickComponent