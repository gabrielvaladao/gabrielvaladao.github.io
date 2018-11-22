import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import H2 from '../elements/H2';
import H3 from '../elements/H3';
import Show from '../components/Show';
//
const Section = styled.section`
  margin-top: ${props => props.theme.space.one};
`;

const Ul = styled.ul`
  padding-left: 0;
`;

/**
 * There's a production bug whereby the list discs
 * show up intermittently and mess with layout.
 * The following rule:
 *   list-style-position: outside
 * should ideally not be necessary but it might
 * help the layout in buggy cases.
 */
const Li = styled.li`
  list-style-type: none;
  list-style-position: outside;
`;

export default withRouteData(({ id, ...props }) => (
  <section id={id}>
    <H1>Shows</H1>
    {/* Show conditionally:
    ... */}
    <Section aria-labelledby="shows-upcoming">
      <H2 id="shows-upcoming">Upcoming</H2>
      <Ul>
        <Li>
          <Show
            title="PMS - The L-Night party"
            hostName="L-Night"
            hostUrl="https://www.meetup.com/en-AU/Lnightberlin/"
            startDay="Saturday"
            startDate="15 DEC"
            startYear="2018"
            venueName="Hausprojekt K9"
            venueUrl="http://www.kinzig9.de/"
            venueAddress="Kinzigstraße 9, 10247 Berlin"
            venueAddress2="Entrance through Café Liberación"
            venueGMapsUrl="https://www.google.com/maps/place/Kinzig9/@52.5137004,13.4663543,15z/data=!4m5!3m4!1s0x0:0x5eb804e91e785a6b!8m2!3d52.5137004!4d13.4663543"
            fbEventUrl="https://www.facebook.com/events/192580104960799/"
            ctaText="TICKETS (Free)"
            ctaUrl="https://www.eventbrite.com.au/e/pms-the-l-night-party-tickets-52068345824"
          />
        </Li>
      </Ul>
    </Section>

    {/* ...
    I only want H2#shows-previous to be visible if there are also upcoming ones to distinguish from(which means the aria-labelledby="shows-previous" attrib on its parent section should also change).
    */}
    <Section aria-labelledby="shows-previous">
      <H2 id="shows-previous">Previous</H2>
      <H3>2017</H3>
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
    </Section>
  </section>
));
