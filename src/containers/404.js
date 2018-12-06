import React from 'react';
import { Link } from 'react-static';
//
import StyledLinkText from '../elements/StyledLinkText';
import H1 from '../elements/H1';
//
const NotFound = () => (
  <div>
    <H1>404</H1>
    <p>
      The page you are trying to access is not of this dimension.
      <br />
      Please try another link or head{' '}
      <StyledLinkText>
        <Link exact to="/">
          Home
        </Link>
      </StyledLinkText>
    </p>
  </div>
);

export default NotFound;
