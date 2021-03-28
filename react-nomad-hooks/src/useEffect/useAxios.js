import React, { useState, useEffect } from 'react'
import defaultAxios from 'axios'
// Need to install axios library

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState ] = useState({
    loading: true,
    error: null,
    data: null
  })
  const [trigger, setTrigger] = useState(0)
  
  const refetch = () => {
    setState({
      ...state,
      loading: true
    })
    setTrigger(Date.now())
  }
  useEffect(() => {
    if (!opts.url) {
      return
    }
    axiosInstance(opts)
      .then(res => {
        setState({
          ...state,
          loading: false,
          data: res
        })
      })
        .catch(err => {
          
          setState({ ...state, loadinf: false, error: err})
        })
  }, [trigger])
  return {...state, refetch}
}

const App = () => {
  const {loading, error, data, refetch } = useAxios({
    url: 'http;//127.0.0.1'
  })
  
  return (
      <div>
        <button onClick={refetch}>요청 다시 보내기</button>
      </div>
  )
}