import React from 'react';
import styled from 'styled-components';
//
const H1 = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.type.h1.fontFamily};
  font-weight: ${props => props.theme.type.h1.fontWeight};
  font-size: ${props => props.theme.type.h1.fontSize};
  line-height: ${props => props.theme.type.h1.lineHeight};
`;

export default props => <H1 {...props}>{props.children}</H1>;
