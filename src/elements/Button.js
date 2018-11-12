import React from 'react';
//
import styled from 'styled-components';
//

/**
 * TODO: calculate padding based on Theme
 * Use same padding for Newsletter > Input
 * */
const Button = styled.button`
  font-size: ${props => props.theme.type.small.fontSize};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -0.1ch;
  padding: 0.2rem 0.5rem 0.3rem 0.5rem;

  &:active {
    background-color: #1f9f9f;
    color: #fff;
  }
`;

export default props => (
  <Button {...props}>
    {props.children}
  </Button>
);
