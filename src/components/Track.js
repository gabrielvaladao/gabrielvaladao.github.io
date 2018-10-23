import React from 'react';
import { withRouteData } from 'react-static';
//
import StyledLink from '../elements/StyledLink';
import H3 from '../elements/H3';

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

/* TODO: reconsider conditional for rendering optional elements (e.g. cta) */

export default ({ title, soundCloudEmbed, cta }) => (
  <article aria-labelledby="track-title">

    <H3 id="track-title">{title}</H3>

    {soundCloudEmbed}

    {cta && cta.text && cta.url
      && <StyledLink className="cta" to={cta.url} aria-labelledby="track-title">{cta.text}</StyledLink>
    }
  </article>
);
