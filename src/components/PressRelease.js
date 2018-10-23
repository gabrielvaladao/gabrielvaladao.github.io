import React from 'react';
import { withRouteData } from 'react-static';
//
import StyledLink from '../elements/StyledLink';
import H2 from '../elements/H2';

export default withRouteData(({ pressRelease }) => (
  <article aria-labelledby="#headline">
    <img src="https://i1.sndcdn.com/artworks-000268886459-ilgws3-t500x500.jpg" max-height="500px" width="500px" max-width="100%" alt="Cover art showing a swirling psychedelic vortex behind Labrysinthe's logo, a maze-like labrys axe." />
    <H2 id="headline">Labrysinthe launches psytrance EP (title) on (date) at (party) at (venue)</H2>
    <span className="release-date">Date</span>
    <p className="callout">Psy-sorceress Labrysinthe will play (date) at (party) at (venue), (part of town) to conincide with the release of (EP).</p>

    {/* Commented out to test list view that'll have a 'Read more' link
    
    <div className="pr-body">
      <p>The gig is (people)-hosted gig also features (artist) and (another artist).
      </p>
      <p>Labrysinthe will be live-producing (description of new stuff) and (description of old stuff) as well as a dj set of (these kinds of music).
      </p>
      <p>This is in a series of (events) that has to do with some artful description of the vibe of the events and what people can expect from the night. Probably similar to the event info on Facebook.
      </p>
    </div> */}
    {/* TODO: This link only to appear on Press list page */}
    <StyledLink to="" className="read-more" aria-labelledby="headline">Read more</StyledLink>{' / '}
    <StyledLink to="" className="cta">Buy the EP</StyledLink>
  </article>
));
