import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
//
import H4 from '../elements/H4';
import StyledLink from '../elements/StyledLink';
import Button from '../elements/Button';

/* TODO: Show logic
  A show has one of two states: Upcoming or Previous.
  A show's state is changed to Previous on the day after its end date. (currentDate.value === (show.endDate + 1).value).
  When a show's state is Previous, hide ticket link. Keep facebook link.
*/

const Wrapper = styled.article`
  display: grid;
  font-family: ${props => props.theme.type.secondary.fontFamily};

  grid-template-rows:
    fit-content(100%) minmax(min-content, max-content) minmax(min-content, max-content)
    min-content;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 576px) {
    grid-template-rows: max-content max-content;
    grid-template-columns: max-content 1fr minmax(min-content, max-content) minmax(
        min-content,
        max-content
      );
  }
`;

const Header = styled.header`
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  padding: 0;

  @media (min-width: 576px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    padding: 0 ${props => props.theme.space.half};
  }
`;

const Host = styled.p`
  font-size: ${props => props.theme.type.small.fontSize};
  font-family: ${props => props.theme.type.secondary.fontFamily};
  font-weight: ${props => props.theme.type.secondary.fontWeight};
  line-height: ${props => props.theme.type.secondary.lineHeight};
  margin-bottom: ${props => props.theme.space.half};
`;

const When = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  font-size: ${props => props.theme.type.primary.fontSize};

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
  margin-bottom: 0;

  &::after {
    content: ',\00a0';
  }

  @media (min-width: 576px) {
    &::after {
      content: '';
    }
  }
`;

const StartDate = styled.span`
  @media (min-width: 576px) {
    font-size: ${props => props.theme.type.large.fontSize};
  }
`;

const Where = styled.div`
  font-size: ${props => props.theme.type.small.fontSize};
  font-family: ${props => props.theme.type.secondary.fontFamily};
  font-weight: ${props => props.theme.type.secondary.fontWeight};
  line-height: ${props => props.theme.type.secondary.lineHeight};

  grid-row: 3 / 4;
  grid-column: 1 / 3;
  margin-bottom: ${props => props.theme.space.half};

  @media (min-width: 576px) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    padding: 0 ${props => props.theme.space.half};
    margin-bottom: 0;
  }
`;

const Cta = styled(StyledLink)`
  text-align: center;
  display: grid;
  align-items: center;

  grid-row: 4 / 5;

  &:only-of-type {
    grid-column: 1 / 3;
  }

  @media (min-width: 576px) {
    grid-row: 1 / 3;
    padding: 0 ${props => props.theme.space.half};

    &:only-of-type {
      grid-column: inherit;
    }
  }
`;

/* TODO: Refactor data structure */
export default ({
  title,
  hostUrl,
  hostName,
  startDay,
  startDate,
  startYear,
  venueUrl,
  venueName,
  venueAddress,
  venueAddress2,
  venueGMapsUrl,
  fbEventUrl,
  ctaText,
  ctaUrl,
  ...props
}) => (
  <Wrapper aria-labelledby="show-title">
    <Header>
      <H4 id="show-title">{title}</H4>
      <Host>
        Hosted by <StyledLink to={hostUrl}>{hostName}</StyledLink>
      </Host>
    </Header>
    <When>
      <Day>{startDay}</Day>
      <StartDate>{startDate}</StartDate>
    </When>
    <Where>
      <StyledLink to={venueUrl} id="venue-name">
        {venueName}
      </StyledLink>
      <p>{venueAddress}</p>
      {venueAddress2 && <p>{venueAddress2}</p>}
      <StyledLink to={venueGMapsUrl} aria-labelledby="venue-name">
        Google Maps
      </StyledLink>
    </Where>
    {fbEventUrl && (
      <Cta to={fbEventUrl} aria-labelledby="show-title">
        <Button>FACEBOOK</Button>
      </Cta>
    )}
    {ctaUrl && (
      <Cta to={ctaUrl} aria-labelledby="show-title">
        <Button>{ctaText}</Button>
      </Cta>
    )}
  </Wrapper>
);
