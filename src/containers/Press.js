import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';

import PressRelease from '../components/PressRelease';

const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  list-style-type: none;
`;


/* TODO: aria-sort: date, descending */

export default withRouteData(() => (
  <div>
    <h1>Press</h1>
    <Ul>
      <Li><PressRelease /></Li>
      <Li><PressRelease /></Li>
    </Ul>
  </div>
));
