/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
//
const StyledLinkText = styled.span`
  a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;

    &:hover {
      border-bottom: solid ${({ theme }) => theme.border.size.base} ${({ theme }) => theme.color.primary};
    }

    &:active {
      color: ${({ theme }) => theme.color.primaryDark};
      border-bottom: 2px solid ${({ theme }) => theme.color.primaryDark};
    }
  }
`;

export default props => <StyledLinkText {...props}>{props.children}</StyledLinkText>;
