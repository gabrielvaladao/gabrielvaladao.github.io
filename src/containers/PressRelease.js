import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ pressRelease }) => (

  <div>
    <Link to="/press/">{'<'} Back</Link>
    <br />
    <h3>{pressRelease.title}</h3>

    <p>{pressRelease.body}</p>

  </div>
))
