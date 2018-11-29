/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
//

const StyledNavLinkInner = styled.span`
  a {
    color: ${props => props.theme.color.brandWhite};
    text-decoration: none;

    &:active {
      color: ${props => props.theme.color.overlayLighter};
      border-style: solid;
      border-width: 0 0 ${props => props.theme.border.size.base} 0;
      border-color: ${props => props.theme.color.overlayLighter};
    }
  }
`;

export default props => <StyledNavLinkInner {...props}>{props.children}</StyledNavLinkInner>;
