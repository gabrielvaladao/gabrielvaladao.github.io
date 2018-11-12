import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
//
import H4 from '../elements/H4';
import StyledLink from '../elements/StyledLink';

/* TODO: Show logic
  A show has one of two states: Upcoming or Previous.
  A show's state is changed to Previous on the day after its end date. (currentDate.value === (show.endDate + 1).value).
  When a show's state is Previous, hide ticket link. Keep facebook link.
*/

const Wrapper = styled.article`
  display: grid;

  grid-template-rows: fit-content(100%) minmax(min-content, max-content) minmax(min-content, max-content) min-content;
  grid-template-columns: 1fr;
  
  @media (min-width: 576px) {
    grid-template-rows: max-content max-content;
    grid-template-columns: max-content 1fr minmax(min-content, max-content);
  }
`;

const Header = styled.header`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  padding: 0;

  @media (min-width: 576px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    padding: 0 ${props => props.theme.space.half};
  }
`;

const When = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  
  * {
    display: inline-block;
  }

  @media (min-width: 576px) {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    padding: 0 ${props => props.theme.space.half};
    
    * {
      display: block;
    }
  }
`;

const Day = styled.span`
  font-size: ${props => props.theme.type.small.fontSize};
  margin-bottom: 0;
`;

// TODO: complete
// const StartDate = styled.strong`
//   font-family: ${props => props.theme.type....}
//   font-weight: ${ props => props.theme.type....}
// `;

const Where = styled.span`
  font-size: ${props => props.theme.type.small.fontSize};
  line-height: ${props => props.theme.type.small.lineHeight};

  grid-row: 3 / 4;
  grid-column: 1 / 2;

  @media (min-width: 576px) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    padding: 0 ${props => props.theme.space.half};
  }
`;

const Cta = styled(StyledLink)`
  grid-row: 4 / 5;
  grid-column: 1 / 2;

  @media (min-width: 576px) {
    grid-row: 1 / 3;
    grid-column: 3 / 4;
    padding: 0 ${props => props.theme.space.half};
  }
`;

const Small = styled.span`
  font-size: ${props => props.theme.type.small.fontSize};
`;

const Smaller = styled.span`
  font-size: ${props => props.theme.type.smaller.fontSize};
`;

export default ({ title, hostUrl, hostName, startDay, startDate, startYear, venueUrl, venueName, venueAddress, venueGMapsUrl, fbEventUrl, ...props }) => (
  <Wrapper aria-labelledby="show-title">
    <Header>
      <H4 id="show-title">{title}</H4>
      <Smaller>
        Hosted by <StyledLink to={hostUrl}>{hostName}</StyledLink>
      </Smaller>
    </Header>
    <When>
      <Day>{startDay}</Day>
      {/* TODO: <StartDate>{startDate}</StartDate> */}
      <strong>{startDate}</strong>
    </When>
    <Where>
      <StyledLink to={venueUrl} id="venue-name">{venueName}</StyledLink>
      <p>{venueAddress}</p>
      <StyledLink to={venueGMapsUrl} aria-labelledby="venue-name">Google Maps</StyledLink>
    </Where>
    <Cta to={fbEventUrl} aria-labelledby="show-title">
      <Small>Facebook event</Small>
    </Cta>
  </Wrapper>
);
