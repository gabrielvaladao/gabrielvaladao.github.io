import React from 'react';
import styled from 'styled-components';
//
const H3 = styled.h3`
  font-family: ${props => props.theme.type.h3.fontFamily};
  font-weight: ${props => props.theme.type.h3.fontWeight};
  font-size: ${props => props.theme.type.h3.fontSize};
  line-height: ${props => props.theme.type.h3.lineHeight};
`;

export default props => <H3 {...props}>{props.children}</H3>;
