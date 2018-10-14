import React from 'react';
import { withRouteData, Link } from 'react-static';
import Show from '../components/Show';

export default withRouteData(({ shows }) => (
  <div>
    <h1>Shows</h1>
    <br />
    <section aria-labelledby="shows-upcoming">
      <h2 id="shows-upcoming">Upcoming shows</h2>
      <ul>
        <li><Show /></li>
        <li><Show /></li>
      </ul>
    </section>
    <section aria-labelledby="shows-previous">
      <h2 id="shows-previous">Previous shows</h2>
      <ul>
        <li><Show /></li>
        <li><Show /></li>
        <li><Show /></li>
      </ul>
    </section>
  </div>
));

// TODO: remove or adapt. The following code shows placeholder data
/*
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
*/
