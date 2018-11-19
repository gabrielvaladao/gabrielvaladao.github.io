import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'styled-components';
//
import StyledLink from '../elements/StyledLink';

const Large = styled.p`
  font-size: ${props => props.theme.type.large.fontSize};
  text-align: center;
  margin-bottom: ${props => props.theme.type.large.marginBottom};
`;

const P = styled.p`
  margin-bottom: ${props => props.theme.space.one};

  &:last-child {
    margin-bottom: 0;
  }
`;

/* NB: The nav anchor #home is applied to the Header component */
export default withSiteData(() => (
  <div>
    <Large>
      New EP coming soon!
      <br />
      <strong>Fire Loves Sugar</strong>
      <br />
      <StyledLink to="./music">Listen to the teaser</StyledLink>
    </Large>
    <P>
      Labrysinthe is voluntarily committed to the institution of psytrance and stands for better
      machines, brighter knowledge, bolder music, and the blissful ecstacies of the beat.
    </P>
  </div>
));
