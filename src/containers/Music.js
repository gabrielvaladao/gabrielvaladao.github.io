import React from 'react';
import { withRouteData, Link } from 'react-static';
import Track from '../components/Track';

export default withRouteData(({ tracks }) => (
  <div>
    <h1>Music</h1>
    <p>High quality downloads are available on <Link to="https://www.beatport.com/artist/labrysinthe/640674/tracks">Labrysinthe's Beatport</Link></p>
    <ul>
      <li><Track /></li>
      <li><Track /></li>
      <li><Track /></li>
      <li><Track /></li>
    </ul>
  </div>
));

// TODO: remove or adapt. The following code shows placeholder data
/* 
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
*/
