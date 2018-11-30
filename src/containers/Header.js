/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
//
import MainNav from '../components/MainNav';
//

const Header = styled.header`
  position: sticky;
  top: 0;
  background: ${props => props.theme.color.overlayDark};
  height: ${props => props.theme.space.three};
  z-index: 900;
`;

export default props => (
  <Header {...props}>
    <MainNav />
  </Header>
);
