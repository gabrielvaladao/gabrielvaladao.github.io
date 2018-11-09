import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'styled-components';
//
import P from '../elements/P';
import StyledLink from '../elements/StyledLink';

const Large = styled.span`
  font-size: ${props => props.theme.type.large.fontSize};
`;

export default withSiteData(() => (
  <div>
    <Large>
      New EP <strong>Fire Loves Sugar</strong> coming soon!<br />
      <StyledLink to="./music">Listen to the teaser</StyledLink>
    </Large>
    <P>
      Labrysinthe is voluntarily committed to the institution of psytrance and stands for better machines, brighter knowledge, bolder music, and the blissful ecstacies of the beat.
    </P>
  </div>
));
