import React from 'react';
import { Link } from 'react-static';
//
import TextLink from '../common/TextLink';
import H1 from '../common/H1';
//
const NotFound = () => (
  <div>
    <H1>404</H1>
    <p>
      The page you are trying to access is not of this dimension.
      <br />
      Please try another link or head{' '}
      <TextLink>
        <Link exact to="/">
          Home
        </Link>
      </TextLink>
    </p>
  </div>
);

export default NotFound;
