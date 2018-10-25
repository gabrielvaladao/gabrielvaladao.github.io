import React from 'react';
import { withSiteData } from 'react-static';
//
import Large from '../elements/Large';
import BodyText from '../elements/BodyText';
import StyledLink from '../elements/StyledLink';

export default withSiteData(() => (
  <div>
    <Large>
      New EP <strong>Fire Loves Sugar</strong> coming soon!<br />
      <StyledLink to="./music">Listen to the teaser</StyledLink>
    </Large>
    <BodyText>
      Labrysinthe is voluntarily committed to the institution of psytrance and stands for better machines, brighter knowledge, bolder music, and the blissful ecstacies of the beat.
    </BodyText>
  </div>
));
