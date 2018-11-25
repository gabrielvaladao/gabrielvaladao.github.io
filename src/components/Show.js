import React from 'react';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';
//
import H4 from '../elements/H4';
import Button from '../elements/Button';
import StyledLinkText from '../elements/StyledLinkText';

/* TODO: Show logic
  A show has one of two states: Upcoming or Previous.
  A show's state is changed to Previous on the day after its end date. (currentDate.value === (show.endDate + 1).value).
  When a show's state is Previous, hide ticket link. Keep facebook link.
*/

const Wrapper = styled.article`
  font-family: ${props => props.theme.type.secondary.fontFamily};
`;

const Host = styled.p`
  font-size: ${props => props.theme.type.small.fontSize};
  font-family: ${props => props.theme.type.secondary.fontFamily};
  font-weight: ${props => props.theme.type.secondary.fontWeight};
  line-height: ${props => props.theme.type.secondary.lineHeight};
  margin-bottom: ${props => props.theme.space.half};
`;

const When = styled.p`
  font-size: ${props => props.theme.type.large.fontSize};
  margin-bottom: ${props => props.theme.space.quarter};

  * {
    display: inline-block;
  }
`;

const Where = styled.div`
  font-size: ${props => props.theme.type.small.fontSize};
  font-family: ${props => props.theme.type.secondary.fontFamily};
  font-weight: ${props => props.theme.type.secondary.fontWeight};
  line-height: ${props => props.theme.type.secondary.lineHeight};
  padding-bottom: ${props => props.theme.space.half};
`;

const CtaList = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Li = styled.li`
  text-align: center;
  display: inline-block;
  width: 50%;

  &:only-of-type {
    width: 100%;
  }

  &:first-of-type:not(:only-of-type) {
    button {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &:last-of-type:not(:only-of-type) {
    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

const Cta = styled(Button)`
  width: 100%;
  height: 100%;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

/* TODO: Refactor data structure */
export default ({
  title,
  hostUrl,
  hostName,
  startDate,
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
    <When>{startDate}</When>
    <H4 id="show-title">{title}</H4>
    <Host>
      <p>
        Hosted by{' '}
        <StyledLinkText>
          <Link to={hostUrl}>{hostName}</Link>
        </StyledLinkText>
      </p>
    </Host>
    <Where>
      <StyledLinkText>
        <Link to={venueUrl} id="venue-name">
          {venueName}
        </Link>
      </StyledLinkText>
      <br />
      {venueAddress}
      {venueAddress2 && (
        <React.Fragment>
          <br />
          <span>{venueAddress2}</span>
        </React.Fragment>
      )}
      <br />
      <StyledLinkText>
        <Link to={venueGMapsUrl} aria-labelledby="venue-name">
          Google Maps
        </Link>
      </StyledLinkText>
    </Where>
    <CtaList>
      {fbEventUrl && (
        <Li>
          <Cta>
            <Link to={fbEventUrl} aria-labelledby="show-title">
              FACEBOOK
            </Link>
          </Cta>
        </Li>
      )}
      {ctaUrl && (
        <Li>
          <Cta>
            <Link to={ctaUrl} aria-labelledby="show-title">
              {ctaText}
            </Link>
          </Cta>
        </Li>
      )}
    </CtaList>
  </Wrapper>
);
