import React from 'react';
import { withRouteData, Link } from 'react-static';

/* TODO: Show logic:
  A show has one of two states: Upcoming or Previous.
  A show's state is changed to Previous on the day after its end date. (currentDate.value === (show.endDate + 1).value).
  When a show's state is Previous, hide ticket link. Keep facebook link.
*/

/* TODO: remove placeholder link to get tickets */

export default ({ title, host, when, venue, fbEventUrl }) => (
  // TODO: I want these attributes to be applied to the <li> element where they live (see Shows.js)
  <article aria-labelledby="show-title">
    <h3 id="show-title">{title}</h3>
    <p className="host">
      Hosted by <Link to={host.url}>{host.name}</Link>
    </p>
    <div className="when">
      <span className="day">{when.start.day}</span>
      <br />
      <span className="date">{when.start.date}</span>
      <br />
      <span className="year">{when.start.year}</span>
    </div>
    <div className="where">
      <Link to={venue.url} id="venue-name">{venue.name}</Link>
      <br />
      {venue.address}
      <br />
      <Link to={venue.gMapsUrl} aria-labelledby="venue-name">Google Maps</Link>
    </div>
    <Link to={fbEventUrl} aria-labelledby="show-title">Facebook event</Link>
  </article>
);
