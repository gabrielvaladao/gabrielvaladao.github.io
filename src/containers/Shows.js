import React from 'react';
import { withRouteData, Link } from 'react-static';
// TODO: use <section>s for Upcoming / Previous
export default withRouteData(({ shows }) => (
  <div>
    <h1>Shows</h1>
    <br />
    All Shows:
    <ul>
      {shows.map(show => (
        <li key={show.id}>
          <Link to={`/shows/show/${show.id}/`}>{show.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
