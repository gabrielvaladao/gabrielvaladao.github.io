import React from 'react';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';
//
import H4 from '../elements/H4';
import Button from '../elements/Button';
import StyledLink from '../elements/StyledLink';

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
`;

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
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
        Hosted by <StyledLink to={hostUrl}>{hostName}</StyledLink>
      </p>
    </Host>
    <Where>
      <StyledLink to={venueUrl} id="venue-name">
        {venueName}
      </StyledLink>
      <br />
      {venueAddress}
      {venueAddress2 && (
        <React.Fragment>
          <br />
          <span>{venueAddress2}</span>
        </React.Fragment>
      )}
      <br />
      <StyledLink to={venueGMapsUrl} aria-labelledby="venue-name">
        Google Maps
      </StyledLink>
    </Where>
    <CtaList>
      {fbEventUrl && (
        <Li>
          <Cta>
            <UnstyledLink to={fbEventUrl} aria-labelledby="show-title">
              FACEBOOK
            </UnstyledLink>
          </Cta>
        </Li>
      )}
      {ctaUrl && (
        <Li>
          <Cta>
            <UnstyledLink to={ctaUrl} aria-labelledby="show-title">
              {ctaText}
            </UnstyledLink>
          </Cta>
        </Li>
      )}
    </CtaList>
  </Wrapper>
);
