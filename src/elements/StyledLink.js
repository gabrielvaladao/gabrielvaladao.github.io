import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
//
const StyledLink = styled(Link)`
  color: #6fdfdf;
  text-decoration: none;

  &:hover {
    border-bottom: 2px #6fdfdf solid;
  }

  &:active {
    color: #1f9f9f;
    border-bottom: 2px #1f9f9f solid;
  }
`;

export default props => (
  <StyledLink {...props}>{props.children}</StyledLink>
);
