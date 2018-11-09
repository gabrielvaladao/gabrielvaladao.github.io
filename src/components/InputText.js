import React from 'react';
import { Link } from 'react-static';
//
import styled from 'styled-components';
//

/* TODO: calculate padding based on Theme */
const Input = styled.input`
  text-align: left;
  letter-spacing: -0.1ch;
  padding: 0.2em 0.5em;
`;

export default props => (
  <Input {...props}>
    {props.children}
  </Input>
);
