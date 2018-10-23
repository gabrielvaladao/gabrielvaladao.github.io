import React from 'react';
import styled from 'styled-components';
//
const H3 = styled.h3`
  font-family: ${props => props.theme.type.calc.h3.fontFamily};
  font-weight: ${props => props.theme.type.calc.h3.fontWeight};
  font-size: ${props => props.theme.type.calc.h3.fontSize};
  line-height: ${props => props.theme.type.calc.h3.lineHeight};
  margin-top: ${props => props.theme.type.calc.h3.marginTop};
  margin-bottom: ${props => props.theme.type.calc.h3.marginBottom};
`;

export default props => (
  <H3 {...props}>{props.children}</H3>
);
