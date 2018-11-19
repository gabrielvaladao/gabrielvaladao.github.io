import React from 'react';
import styled from 'styled-components';
//
const H3 = styled.h3`
  font-family: ${props => props.theme.type.h3.fontFamily};
  font-weight: ${props => props.theme.type.h3.fontWeight};
  line-height: ${props => props.theme.type.h3.lineHeight};
  font-size: ${props => props.theme.type.primary.fontSize};

  @media (min-width: 768px) {
    font-size: ${props => props.theme.type.h3.fontSize};
  }
`;

export default props => <H3 {...props}>{props.children}</H3>;
