import React from 'react';
import styled from 'styled-components';
//
const H4 = styled.h4`
  font-family: ${({ theme }) => theme.type.h4.fontFamily};
  font-weight: ${({ theme }) => theme.type.h4.fontWeight};
  line-height: ${({ theme }) => theme.type.h4.lineHeight};
  font-size: ${({ theme }) => theme.type.primary.fontSize};
  margin-bottom: ${({ theme }) => theme.space.quarter};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h4.fontSize};
  }
`;

export default props => <H4 {...props}>{props.children}</H4>;
