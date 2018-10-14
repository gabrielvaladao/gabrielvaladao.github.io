import React from 'react';
import { withRouteData, Link } from 'react-static';

/* TODO: Show logic:
  A show has one of two states: Upcoming or Previous.
  A show's state is changed to Previous on the day after its end date. (currentDate.value === (show.endDate + 1).value).
  When a show's state is Previous, hide ticket link. Keep facebook link.
*/

/* TODO: remove placeholder link to get tickets */


export default () => (
  // TODO: I want these attributes to be applied to the <li> element where they live (see Shows.js)
  <article aria-labelledby="show-title">
    <h3 id="show-title">Electronic Events Experience Exchange (EEEE&nbsp;Party!!!!)</h3>
    <p className="host">
      Hosted by <Link to="http://www.fractalportal.com/">Fractal Portal</Link>
    </p>
    <div className="when">
      <span className="day">Saturday</span>
      <br />
      <span className="date">4 NOV</span>
      <br />
      <span className="year">2017</span>
    </div>
    <div className="where">
      <Link to="https://www.facebook.com/Velvet-Monkey-erlebnisgastronomie-1823655237858506/" id="venue-name">Velvet Monkeys Club</Link>
      <br />
      Herzbergstraße 53b, 10365 Berlin
      <br />
      <Link to="https://goo.gl/maps/CkDUTdspCkL2" aria-labelledby="venue-name">Google Maps</Link>
    </div>
    <Link to="https://www.facebook.com/events/351769011903873/" aria-labelledby="show-title">Facebook event</Link>
    <br />
    <Link to="#hypothetical" aria-labelledby="show-title">Get tickets</Link>
  </article>
);

// TODO: remove or adapt. The following code shows placeholder data
/*
export default withRouteData(({ show }) => (
  <div>
    <Link to="/shows/">{'<'} Back</Link>
    <br />
    <h3>{show.title}</h3>
    <p>{show.body}</p>
  </div>
));
*/
