import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
//
const StyledLink = styled(Link)`
  color: ${props => props.theme.color.primary};
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid ${props => props.theme.color.primary};
  }

  &:active {
    color: ${props => props.theme.color.primaryDark};
    border-bottom: 2px solid ${props => props.theme.color.primaryDark};
  }
`;

export default props => <StyledLink {...props}>{props.children}</StyledLink>;
