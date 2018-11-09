import React from 'react';
import { Link } from 'react-static';
//
import styled from 'styled-components';
//
/* TODO: calculate padding based on Theme */
const Button = styled.button`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -0.1ch;
  padding: 0.2em 0.5em;
  &:active {
    background-color: #1f9f9f;
    color: #fff;
  }
`;

const Small = styled.span`
  font-size: ${props => props.theme.type.small.fontSize};
`;

export default props => (
  <Button {...props}>
    <Small>{props.children}</Small>
  </Button>
);
