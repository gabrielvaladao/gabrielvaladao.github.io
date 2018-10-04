import React from 'react';
import { withRouteData, Link } from 'react-static';

export default withRouteData(({ tracks }) => (
  <div>
    <h1>Music</h1>
    <br />
    All Tracks:
    <ul>
      {tracks.map(track => (
        <li key={track.id}>
          <Link to={`/music/track/${track.id}/`}>{track.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
