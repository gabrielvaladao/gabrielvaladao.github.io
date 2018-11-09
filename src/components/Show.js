import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
//
import H3 from '../elements/H3';
import StyledLink from '../elements/StyledLink';
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
  padding: 0 ${props => props.theme.space.half};
  grid-row: 1 / 3;
  grid-column: 3;
`;

const Small = styled.span`
  font-size: ${props => props.theme.type.small.fontSize};
`;

export default ({ title, hostUrl, hostName, startDay, startDate, startYear, venueUrl, venueName, venueAddress, venueGMapsUrl, fbEventUrl, ...props }) => (
  <Wrapper aria-labelledby="show-title">
    <Header>
      <H3 id="show-title">{title}</H3>
      <Small>
        Hosted by <StyledLink to={hostUrl}>{hostName}</StyledLink>
      </Small>
    </Header>
    <When>
      <Day>{startDay}</Day>
      <br />
      {/* TODO: <StartDate>{startDate}</StartDate> */}
      <strong>{startDate}</strong>
      <br />
      <span className="year">{startYear}</span>
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
