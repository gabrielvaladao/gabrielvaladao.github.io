import React from 'react';
import styled from 'styled-components';
//
const H1 = styled.h1`
  margin-top: 0;
  padding-top: ${({ theme }) => theme.space.four};
  text-align: center;
  font-family: ${({ theme }) => theme.type.h1.fontFamily};
  font-weight: ${({ theme }) => theme.type.h1.fontWeight};
  line-height: ${({ theme }) => theme.type.h1.lineHeight};
  font-size: ${({ theme }) => theme.type.h2.fontSize};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h1.fontSize};
  }
`;

export default props => <H1 {...props}>{props.children}</H1>;
