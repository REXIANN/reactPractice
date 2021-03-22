import React, { useState } from 'react'

const useInput = (initialValue, validator) => {
  const [ value, setValue ] = useState(initialValue)
  const onChange = event => {
    const { target: { value } } = event
    let willUpdate = true
    if (typeof validator === 'function') {
      willUpdate = validator(value)
    }
    if (willUpdate) {
      setValue(value)
    }
  } 
  
  return { value, onChange }
}

const UseInputComponentTwo = () => {
  const maxLen = (value) => value.length < 10
  const maxLenTwo = (value) => !value.includes('@')
  const name = useInput('Arrevalo', maxLenTwo)

  return (
    <div>
      <h1>Hello, </h1>
      <input placeholder='Name' value={name.value} onChange={name.onChange} />
      <input placeholder='Name' {...name} />
    </div>
  )
}

export default UseInputComponentTwo