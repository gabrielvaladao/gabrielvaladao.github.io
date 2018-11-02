import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import H2 from '../elements/H2';
import Show from '../components/Show';
//
const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  list-style-type: none;
`;

export default withRouteData(() => (
  <div>
    <H1>Shows</H1>
    <br />
    {/* Show conditionally:
    ...
    <section aria-labelledby="shows-upcoming">
      <H2 id="shows-upcoming">Upcoming shows</H2>
      <Ul>
        <Li></Li>
      </Ul>
    </section>
    ...
    I only want H2#shows-previous to be visible if there are also upcoming ones to distinguish from(which means the aria-labelledby="shows-previous" attrib on its parent section should also change).
    */}
    <section aria-labelledby="shows-previous">
      <H2 id="shows-previous">Previous shows</H2>
      <Ul>
        <Li>
          <Show
            title="Electronic Events Experience Exchange (EEEE&nbsp;Party!!!!)"
            hostName="Fractal Portal"
            hostUrl="http://www.fractalportal.com/"
            startDay="Saturday"
            startDate="4 NOV"
            startYear="2017"
            venueName="Velvet Monkeys Club"
            venueUrl="https://www.facebook.com/Velvet-Monkey-erlebnisgastronomie-1823655237858506/"
            venueAddress="Herzbergstraße 53b, 10365 Berlin"
            venueGMapsUrl="https://goo.gl/maps/CkDUTdspCkL2"
            fbEventUrl="https://www.facebook.com/events/351769011903873/"
          />
        </Li>
      </Ul>
    </section>
  </div>
));
