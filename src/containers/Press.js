import React from 'react';
import { withRouteData, Link } from 'react-static';
import PressRelease from '../components/PressRelease';

/* TODO: aria-sort: date, descending */

export default withRouteData(({ pressReleases }) => (
  <div>
    <h1>Press</h1>
    <ul>
      <li><PressRelease /></li>
      <li><PressRelease /></li>
    </ul>
  </div>
));

// TODO: remove or adapt. The following code shows placeholder data
/* 
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
));
*/
