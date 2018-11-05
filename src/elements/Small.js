import React from 'react';
import styled from 'styled-components';
//
const Small = styled.span`
  font-size: ${props => props.theme.type.small.fontSize};
`;

export default props => (
  <Small {...props}>{props.children}</Small>
);
