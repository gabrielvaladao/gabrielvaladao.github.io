import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';
import styled from 'styled-components';
//
import H3 from '../common/H3';
import Placeholder from '../common/Placeholder';
import TextLink from '../common/TextLink';
import { TrackH3Styles, StyledPlaceholderStyles } from './Track-styles';

/*
  TODO: I want to use the releaseDate info
  to sort the tracks, but not display it.
  Pass it to parent.
*/

/*
TODO: PARSE IFRAMES (a11y)
- Give each li a unique key generated from track title (Music) - a11y
- Give each iframe a unique title generated from track title (Track) - console warning
- JSX-ify attribs, eg. frameBorder - console warning
*/

const StyledPlaceholder = styled(Placeholder)`
  ${StyledPlaceholderStyles}
`;

const TrackH3 = styled(H3)`
  ${TrackH3Styles}
`;

const Track = ({ title, soundCloudEmbed, cta }) => (
  <article aria-labelledby="track-title">
    <TrackH3 id="track-title">{title}</TrackH3>

    <StyledPlaceholder>{soundCloudEmbed}</StyledPlaceholder>

    {cta && (
      <TextLink>
        <Link className="cta" to={cta.url} aria-labelledby="track-title">
          {cta.text}
        </Link>
      </TextLink>
    )}
  </article>
);

/* TODO: soundCloudEmbed is expected to be an array with exactly one object */
Track.propTypes = {
  title: PropTypes.string.isRequired,
  soundCloudEmbed: PropTypes.arrayOf(PropTypes.object).isRequired,
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string
  })
};

export default Track;
