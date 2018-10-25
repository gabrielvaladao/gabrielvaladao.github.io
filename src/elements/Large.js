import React from 'react';
import styled from 'styled-components';
//
const Large = styled.p`
  font-size: ${props => props.theme.type.large.fontSize};
  margin-top: ${props => props.theme.type.large.marginTop};
  margin-top: ${props => props.theme.type.large.marginTop};
  margin-bottom: ${props => props.theme.type.large.marginBottom};
`;

export default props => (
  <Large {...props}>{props.children}</Large>
);
