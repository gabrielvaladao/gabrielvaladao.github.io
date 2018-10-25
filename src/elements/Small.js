import React from 'react';
import styled from 'styled-components';
//
const Small = styled.p`
  font-size: ${props => props.theme.type.small.fontSize};
  margin-top: ${props => props.theme.type.small.marginTop};
  margin-bottom: ${props => props.theme.type.small.marginBottom};
`;

export default props => (
  <Small {...props}>{props.children}</Small>
);
