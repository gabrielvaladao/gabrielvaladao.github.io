import React from 'react';
import { withRouteData, Link } from 'react-static';

export default () => (
  <div className="show">
    <h3>Electronic Events Experience Exchange (EEEE Party!!!!)</h3>
    <p className="when">
      <span className="when-primary">4 NOV</span>
      <br />
      <span className="when-secondary">2017</span>
    </p>
    <p className="host">
      Hosted by <a href="http://www.fractalportal.com/">Fractal Portal</a>
    </p>

    <p className="where">
      <a href="https://www.facebook.com/Velvet-Monkey-erlebnisgastronomie-1823655237858506/">Velvet Monkeys Club</a>{' '}
      Herzbergstraße 53b, 10365 Berlin &mdash;{' '}
      <a href="https://goo.gl/maps/CkDUTdspCkL2">Google Maps</a>
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
