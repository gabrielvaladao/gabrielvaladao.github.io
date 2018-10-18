import React from 'react';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';

/* TODO: Show logic:
  A show has one of two states: Upcoming or Previous.
  A show's state is changed to Previous on the day after its end date. (currentDate.value === (show.endDate + 1).value).
  When a show's state is Previous, hide ticket link. Keep facebook link.
*/

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: max-content max-content;
`;

const Header = styled.header`
  padding: 0;
  grid-row: 1;
  grid-column: 2;
`;

const When = styled.div`
  grid-row: 1 / 3;
  grid-column: 1;
`;

const Where = styled.div`
  grid-row: 2;
  grid-column: 2;
`;

const Cta = styled(Link)`
  grid-row: 1 / 3;
  grid-column: 3;
`;

export default ({ title, host, when, venue, fbEventUrl }) => (
  // TODO: I want these attributes to be applied to the <li> element where they live (see Shows.js)
  <Wrapper aria-labelledby="show-title">
    <Header>
      <h3 id="show-title">{title}</h3>
      <p className="host">
        Hosted by <Link to={host.url}>{host.name}</Link>
      </p>
    </Header>
    <When>
      <span className="day">{when.start.day}</span>
      <br />
      <span className="date">{when.start.date}</span>
      <br />
      <span className="year">{when.start.year}</span>
    </When>
    <Where>
      <Link to={venue.url} id="venue-name">{venue.name}</Link>
      <br />
      {venue.address}
      <br />
      <Link to={venue.gMapsUrl} aria-labelledby="venue-name">Google Maps</Link>
    </Where>
    <Cta to={fbEventUrl} aria-labelledby="show-title">Facebook event</Cta>
  </Wrapper>
);
