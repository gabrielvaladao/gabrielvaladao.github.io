import React from 'react';
import { withRouteData, Link } from 'react-static';

/*
  TODO: Does Link support 'title' attributes?
  Should I use them here, or should I use
  aria-label and/or aria-tooltip?
*/

export default () => (
  // TODO: I want these attributes to be applied to the <li> element where they live (see Shows.js)
  <div className="show" aria-labelledby="show-title">
    <h3 id="show-title">Electronic Events Experience Exchange (EEEE Party!!!!)</h3>
    <p className="when">
      <span className="when-primary">4 NOV</span>
      <br />
      <span className="when-secondary">2017</span>
    </p>
    <p className="host">
      Hosted by <Link to="http://www.fractalportal.com/">Fractal Portal</Link>
    </p>

    <p className="where">
      <Link to="https://www.facebook.com/Velvet-Monkey-erlebnisgastronomie-1823655237858506/">Velvet Monkeys Club</Link>{' '}
      Herzbergstraße 53b, 10365 Berlin &mdash;{' '}
      <Link to="https://goo.gl/maps/CkDUTdspCkL2">Google Maps</Link>
    </p>
  </div>
);

// TODO: remove. The following code shows a list of placeholder posts
/*
export default withRouteData(({ show }) => (
  <div>
    <Link to="/shows/">{'<'} Back</Link>
    <br />
    <h3>{show.title}</h3>
    <p>{show.body}</p>
  </div>
)); */
