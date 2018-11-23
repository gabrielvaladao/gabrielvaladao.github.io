import React from 'react';
import styled from 'styled-components';
//
const H2 = styled.h2`
  font-family: ${props => props.theme.type.h2.fontFamily};
  font-weight: ${props => props.theme.type.h2.fontWeight};
  line-height: ${props => props.theme.type.h2.lineHeight};
  font-size: ${props => props.theme.type.h3.fontSize};
  margin-bottom: ${props => props.theme.space.half};

  @media (min-width: 768px) {
    font-size: ${props => props.theme.type.h2.fontSize};
  }
`;

export default props => <H2 {...props}>{props.children}</H2>;
