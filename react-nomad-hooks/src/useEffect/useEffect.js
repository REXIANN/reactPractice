import React, { useState, useEffect } from 'react'

const useEffectFirst = () => {
  const sayHello = () => console.log('hello')
  useEffect(() => {
    sayHello()
  }, [number, /* aNumber*/])

  const [ number, setNumber ] = useState(0)
  const [ aNumber, setANumber ] = useState(0)

  return (
    <div>
      <div>
        HI THERE
      </div>

      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>

  )
}

export default useEffectFirst