import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
//
import StyledLink from '../elements/StyledLink';
import H3 from '../elements/H3';
import Small from '../elements/Small';
import Smaller from '../elements/Smaller';

/* TODO: Show logic
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
  padding: 0 ${props => props.theme.space.half};
  grid-row: 1;
  grid-column: 2;
`;

const When = styled.div`
  padding: 0 ${props => props.theme.space.half};
  grid-row: 1 / 3;
  grid-column: 1;
`;

const Day = styled(Small)`
  margin-bottom: 0;
  display: inline-block;
`;

// TODO: complete
// const StartDate = styled.strong`
//   font-family: ${props => props.theme.type....}
//   font-weight: ${ props => props.theme.type....}
// `;

const Where = styled(Small)`
  padding: 0 ${props => props.theme.space.half};
  grid-row: 2;
  grid-column: 2;
`;

const Cta = styled(StyledLink)`
  padding: 0 ${ props => props.theme.space.half};
  grid-row: 1 / 3;
  grid-column: 3;
`;

export default ({ title, host, when, venue, fbEventUrl }) => (
  // TODO: I want these attributes to be applied to the <li> element where they live (see Shows.js)
  <Wrapper aria-labelledby="show-title">
    <Header>
      <H3 id="show-title">{title}</H3>
      <Small>
        Hosted by <StyledLink to={host.url}>{host.name}</StyledLink>
      </Small>
    </Header>
    <When>
      <Day>{when.start.day}</Day>
      <br />
      {/* TODO: <StartDate>{when.start.date}</StartDate> */}
      <strong>{when.start.date}</strong>
      <br />
      <span className="year">{when.start.year}</span>
    </When>
    <Where>
      <StyledLink to={venue.url} id="venue-name">{venue.name}</StyledLink>
      <p>{venue.address}</p>
      <StyledLink to={venue.gMapsUrl} aria-labelledby="venue-name">Google Maps</StyledLink>
    </Where>
    <Cta to={fbEventUrl} aria-labelledby="show-title"><Small>Facebook event</Small></Cta>
  </Wrapper>
);
