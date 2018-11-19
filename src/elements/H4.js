import React from 'react';
import styled from 'styled-components';
//
const H4 = styled.h4`
  font-family: ${props => props.theme.type.h4.fontFamily};
  font-weight: ${props => props.theme.type.h4.fontWeight};
  line-height: ${props => props.theme.type.h4.lineHeight};
  font-size: ${props => props.theme.type.primary.fontSize};

  @media (min-width: 768px) {
    font-size: ${props => props.theme.type.h4.fontSize};
  }
`;

export default props => <H4 {...props}>{props.children}</H4>;
