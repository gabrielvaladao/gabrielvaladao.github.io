import React from 'react';
import styled from 'styled-components';
//
const H1 = styled.h1`
  font-family: ${props => props.theme.type.h1.fontFamily};
  font-weight: ${props => props.theme.type.h1.fontWeight};
  font-size: ${props => props.theme.type.h1.fontSize};
  line-height: ${props => props.theme.type.h1.lineHeight};
  margin-top: ${props => props.theme.type.h1.marginTop};
  margin-bottom: ${props => props.theme.type.h1.marginBottom};
`;

export default props => (
  <H1 {...props}>{props.children}</H1>
);
