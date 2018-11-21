import React from 'react';
import styled from 'styled-components';
//
const H1 = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.type.h1.fontFamily};
  font-weight: ${props => props.theme.type.h1.fontWeight};
  line-height: ${props => props.theme.type.h1.lineHeight};
  font-size: ${props => props.theme.type.h2.fontSize};
  padding-top: ${props => props.theme.space.three};

  @media (min-width: 768px) {
    font-size: ${props => props.theme.type.h1.fontSize};
  }
`;

export default props => <H1 {...props}>{props.children}</H1>;
