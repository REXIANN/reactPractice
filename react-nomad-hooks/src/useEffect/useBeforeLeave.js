import React,  { useEffect } from 'react'

const useBeforeLeave = onBefore => {
  useEffect(() => {
    if (typeof onBefore !== 'function') {
      return
    }
    
    const handle = () => console.log('leaving?')
    document.addEventListener('mouseleave')
    return () => {
      document.removeEventListener('mouseleave')
    }
  }, [])
}

export default useBeforeLeave