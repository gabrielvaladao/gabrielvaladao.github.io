import React from 'react';
import { withRouteData, Link } from 'react-static';

export default withRouteData(({ show }) => (
  <div>
    <Link to="/shows/">{'<'} Back</Link>
    <br />
    <h3>{show.title}</h3>
    <p>{show.body}</p>
  </div>
));
