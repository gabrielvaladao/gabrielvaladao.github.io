import React from 'react';
import styled from 'styled-components';
//
const H3 = styled.h3`
  font-family: ${({ theme }) => theme.type.h3.fontFamily};
  font-weight: ${({ theme }) => theme.type.h3.fontWeight};
  line-height: ${({ theme }) => theme.type.h3.lineHeight};
  font-size: ${({ theme }) => theme.type.primary.fontSize};
  margin-bottom: ${({ theme }) => theme.space.quarter};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h3.fontSize};
  }
`;

export default props => <H3 {...props}>{props.children}</H3>;
