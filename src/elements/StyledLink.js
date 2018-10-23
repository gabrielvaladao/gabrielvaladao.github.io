import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: red;
`;
/**
 * TODO: dynamically generate attributes
 * from an unknown number of props
 * */
export default ({ to, children }) => (
  <StyledLink to={to}>children</StyledLink>
);
