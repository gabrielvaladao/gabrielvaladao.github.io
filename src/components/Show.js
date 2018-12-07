import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';
import styled from 'styled-components';
//
import H4 from '../elements/H4';
import Button from '../elements/Button';
import StyledLinkText from '../elements/StyledLinkText';

const Wrapper = styled.article`
  font-family: ${({ theme }) => theme.type.secondary.fontFamily};
`;

const Host = styled.p`
  font-size: ${({ theme }) => theme.type.small.fontSize};
  font-family: ${({ theme }) => theme.type.secondary.fontFamily};
  font-weight: ${({ theme }) => theme.type.secondary.fontWeight};
  line-height: ${({ theme }) => theme.type.secondary.lineHeight};
  margin-bottom: ${({ theme }) => theme.space.half};
`;

const When = styled.p`
  font-size: ${({ theme }) => theme.type.large.fontSize};
  margin-bottom: ${({ theme }) => theme.space.quarter};

  * {
    display: inline-block;
  }
`;

const Where = styled.div`
  font-size: ${({ theme }) => theme.type.small.fontSize};
  font-family: ${({ theme }) => theme.type.secondary.fontFamily};
  font-weight: ${({ theme }) => theme.type.secondary.fontWeight};
  line-height: ${({ theme }) => theme.type.secondary.lineHeight};
  padding-bottom: ${({ theme }) => theme.space.half};
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

/* TODO: Show logic
  A show has one of two states: Upcoming or Previous.
  A show's state is changed to Previous on the day after its end date. (currentDate.value === (show.endDate + 1).value).
  When a show's state is Previous, hide ticket link. Keep facebook link.
*/

class Show extends Component {
  render() {
    /* TODO: Refactor data structure */
    const {
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
      ctaUrl
    } = this.props;
    return (
      <Wrapper aria-labelledby="show-title">
        <When>{startDate}</When>
        <H4 id="show-title">{title}</H4>
        {/* TODO: conditionally render Host */}
        <Host>
          Hosted by{' '}
          <StyledLinkText>
            <Link to={hostUrl}>{hostName}</Link>
          </StyledLinkText>
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
  }
}

/* TODO: Refactor data structure */
/* TODO: check this matches Contentful content model */
Show.propTypes = {
  title: PropTypes.string.isRequired,
  hostUrl: PropTypes.string,
  hostName: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  venueUrl: PropTypes.string,
  venueName: PropTypes.string.isRequired,
  venueAddress: PropTypes.string,
  venueAddress2: PropTypes.string,
  venueGMapsUrl: PropTypes.string,
  fbEventUrl: PropTypes.string,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string
};

export default Show;
