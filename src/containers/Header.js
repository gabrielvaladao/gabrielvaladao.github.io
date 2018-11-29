/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
//
import MainNav from '../components/MainNav';
//
const Header = styled.header`
  background: ${props => props.theme.color.overlayLight};
`;

export default () => (
  <Header>
    <MainNav />
  </Header>
);
