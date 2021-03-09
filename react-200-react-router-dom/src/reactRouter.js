import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class reactRouter extends Component {

  render() {
    return (
      <>
        <h1>This is Path='/'</h1>
        <hr />
        <Link to={'/reactrouter2'}>go to reactRouterTwo</Link>

      </>
    )
  }
}

export default reactRouter