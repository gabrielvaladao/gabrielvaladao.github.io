import React from 'react';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';
//
import StyledLinkText from '../elements/StyledLinkText';
import H3 from '../elements/H3';
//

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

const Background = styled.div`
  iframe {
    background-color: ${({ theme }) => theme.color.overlayLight};
  }
`;

const StyledH3 = styled(H3)`
  margin-bottom: ${({ theme }) => theme.type.h3.marginBottom};
`;

const Track = ({ title, soundCloudEmbed, cta }) => (
  <article aria-labelledby="track-title">
    <StyledH3 id="track-title">{title}</StyledH3>

    <Background>{soundCloudEmbed}</Background>

    {cta && (
      <StyledLinkText>
        <Link className="cta" to={cta.url} aria-labelledby="track-title">
          {cta.text}
        </Link>
      </StyledLinkText>
    )}
  </article>
);

export default Track;
