import React from 'react';
import styled from 'styled-components';
//
const H2 = styled.h2`
  font-family: ${({ theme }) => theme.type.h2.fontFamily};
  font-weight: ${({ theme }) => theme.type.h2.fontWeight};
  line-height: ${({ theme }) => theme.type.h2.lineHeight};
  font-size: ${({ theme }) => theme.type.h3.fontSize};
  margin-bottom: ${({ theme }) => theme.space.half};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h2.fontSize};
  }
`;

export default props => <H2 {...props}>{props.children}</H2>;
