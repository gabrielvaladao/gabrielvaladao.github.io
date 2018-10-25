import React from 'react';
import styled from 'styled-components';
//
const Smaller = styled.p`
  font-size: ${props => props.theme.type.smaller.fontSize};
  margin-top: ${props => props.theme.type.smaller.marginTop};
  margin-bottom: ${props => props.theme.type.smaller.marginBottom};
`;

export default props => (
  <Smaller {...props}>{props.children}</Smaller>
);
