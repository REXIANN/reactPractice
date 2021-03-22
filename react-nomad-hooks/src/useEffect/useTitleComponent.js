import React, { useState, useEffect } from 'react'

const useTitle = (initialTitle ) => {
  const [ title, setTitle ] = useState(initialTitle)
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title')
    htmlTitle.innerText = title
  }
  
  useEffect(updateTitle, [title])
  return setTitle
}

const useTitleComponent = () => {
  const titleUpdater = useTitle("Loading...")
  setTimeout(() => titleUpdater('home'), 5000)
  
  return (
    <div>
      <div>
        HI THEREERERE
      </div>

    </div>
  )
}

export default useTitleComponent