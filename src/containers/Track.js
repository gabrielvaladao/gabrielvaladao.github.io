import React from 'react';
import { withRouteData, Link } from 'react-static';

export default withRouteData(({ track }) => (

  <div>
    <Link to="/music/">{'<'} Back</Link>
    <br />
    <h3>{track.title}</h3>

    <p>{track.body}</p>

  </div>
));
