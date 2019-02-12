import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';
import styled from 'styled-components';
//
import H4 from '../common/H4';
import TextLink from '../common/TextLink';
import Button from '../common/Button';
import {
  ShowStyles,
  HostStyles,
  WhenStyles,
  WhereStyles,
  CtaListStyles,
  LiStyles,
  CtaStyles
} from './Show-styles';

const Wrapper = styled.article`
  ${ShowStyles}
`;

const Host = styled.p`
  ${HostStyles}
`;

const When = styled.p`
  ${WhenStyles}
`;

const Where = styled.div`
  ${WhereStyles}
`;

const CtaList = styled.ol`
  ${CtaListStyles}
`;

const Li = styled.li`
  ${LiStyles}
`;

const Cta = styled(Button)`
  ${CtaStyles}
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
      venueSecret,
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

        {hostName && (
          <Host>
            Hosted by{' '}
            {hostUrl ? (
              <TextLink>
                <Link to={hostUrl}>{hostName}</Link>
              </TextLink>
            ) : (
              <span>{hostName}</span>
            )}
          </Host>
        )}
        <Where>
          {venueSecret ? (
            <span>
              Contact{' '}
              <TextLink>
                <Link to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</Link>
              </TextLink>{' '}
              for details
            </span>
          ) : venueUrl ? (
            <TextLink>
              <Link to={venueUrl} id="venue-name">
                {venueName}
              </Link>
            </TextLink>
          ) : (
            <span>{venueName}</span>
          )}
          {venueAddress && (
            <React.Fragment>
              <br />
              <span>{venueAddress}</span>
              {venueAddress2 && (
                <React.Fragment>
                  <br />
                  <span>{venueAddress2}</span>
                </React.Fragment>
              )}
              <br />
              {venueGMapsUrl && (
                <TextLink>
                  <Link to={venueGMapsUrl} aria-labelledby="venue-name">
                    Google Maps
                  </Link>
                </TextLink>
              )}
            </React.Fragment>
          )}
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
