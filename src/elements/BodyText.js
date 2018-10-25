import React from 'react';
import styled from 'styled-components';
//
const BodyText = styled.div`
  & p {
    margin-bottom: ${props => props.theme.space.one};
  }
`;

export default props => (
  <BodyText {...props}>{props.children}</BodyText>
);
