import React from 'react';
//
import StyledLink from '../elements/StyledLink';
import H1 from '../elements/H1';

export default () => (
  <div>
    <H1>404</H1>
    <p>
      The page you are trying to access is not of this dimension. Please try another link or head <StyledLink exact to="/">Home</StyledLink>
    </p>
  </div>
);
