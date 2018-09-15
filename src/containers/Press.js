import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ pressReleases }) => (
  <div>
    <h1>Press</h1>
    <br />
    All Press Releases:
    <ul>
      {pressReleases.map(pressRelease => (
        <li key={pressRelease.id}>
          <Link to={`/press/pressRelease/${pressRelease.id}/`}>{pressRelease.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
