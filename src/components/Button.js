import React from 'react';
import { Link } from 'react-static';
//
import styled from 'styled-components';
//
import Small from '../elements/Small';

/* TODO: calculate padding based on Theme */
const Button = styled.button`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -0.1ch;
  padding: 0.2em 0.5em;
`;

export default props => (
  <Button {...props}>
    <Small>{props.value}</Small>
  </Button>
);
