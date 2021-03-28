import React from 'react'

const useNotification = (title, options) => {
  // you can check options' detail in MDN
  if(!('Notification' in window)) {
    return
  }

  const fireNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, options)
        } else {
          return
        }
      })
    } else {
      new Notification(title, options)
    }
  }
  
  return fireNotif
}