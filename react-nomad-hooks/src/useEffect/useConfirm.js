import React, { useEffect, useRef } from 'react'

const useConfirm = (message = '', callback) => {
  if (typeof callback !== 'function') {
    return
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback()
    }
  }
  return confirmAction
}

export default useConfirm