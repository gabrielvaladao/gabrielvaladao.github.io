import React from 'react';
import styled from 'styled-components';
//
/* P is suitable for body text */
const P = styled.p`
  {
    margin-bottom: ${props => props.theme.space.one};
  }
`;

export default props => (
  <P {...props}>{props.children}</P>
);
