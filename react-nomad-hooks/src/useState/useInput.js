import React, { useState } from 'react'

const useInput = (initialValue) => {
  const [ value, setValue ] = useState(initialValue)
  const onChange = event => {
    console.log('event-target', event.target)
  }
  return { value, onChange }
}

const useInputComponent = () => {
  const name = useInput('Arrevalo')

  return (
    <div>
      <h1>Hello, </h1>
      <input placeholder='Name' value={name.value} onChange={name.onChange} />
      <input placeholder='Name' {...name} />
    </div>
  )
}

export default useInputComponent