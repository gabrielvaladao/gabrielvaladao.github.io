/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
//
const StyledLinkText = styled.span`
  a {
    color: ${props => props.theme.color.primary};
    text-decoration: none;

    &:hover {
      border-bottom: solid ${props => props.theme.border.size.base} ${props => props.theme.color.primary};
    }

    &:active {
      color: ${props => props.theme.color.primaryDark};
      border-bottom: 2px solid ${props => props.theme.color.primaryDark};
    }
  }
`;

export default props => <StyledLinkText {...props}>{props.children}</StyledLinkText>;
