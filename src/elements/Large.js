import React from 'react';
import styled from 'styled-components';
//
const Large = styled.span`
  font-size: ${props => props.theme.type.large.fontSize};
`;

export default props => (
  <Large {...props}>{props.children}</Large>
);
