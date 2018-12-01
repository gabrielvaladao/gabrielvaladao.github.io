/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
//
import MainNav from '../components/MainNav';
//
const Header = styled.header`
  position: sticky;
  z-index: 900;
  top: 0;
  height: ${props => props.theme.space.three};
  background: ${props => props.theme.color.overlayDark};
  border-bottom: 1px solid ${props => props.theme.color.overlayLight};
`;

export default props => (
  <Header {...props}>
    <MainNav />
  </Header>
);
