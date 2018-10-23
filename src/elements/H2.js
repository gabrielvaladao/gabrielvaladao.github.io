import React from 'react';
import styled from 'styled-components';
//
const H2 = styled.h2`
  font-family: ${props => props.theme.type.calc.h2.fontFamily};
  font-weight: ${props => props.theme.type.calc.h2.fontWeight};
  font-size: ${props => props.theme.type.calc.h2.fontSize};
  line-height: ${props => props.theme.type.calc.h2.lineHeight};
  margin-top: ${props => props.theme.type.calc.h2.marginTop};
  margin-bottom: ${props => props.theme.type.calc.h2.marginBottom};
`;

export default props => (
  <H2 {...props}>{props.children}</H2>
);
