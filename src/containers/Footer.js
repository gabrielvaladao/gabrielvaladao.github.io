import React from 'react';
import styled from 'styled-components';
//
import Menu from '../components/Menu';
import Socials from '../components/Socials';
//
import smWhiteLogo from '../images/logo-white-90x104.png';
//
const Footer = styled.footer`
  padding: 0 0 ${props => props.theme.space.one} 0;
`;

const Logo = styled.img`
  margin: 0 auto;
  display: block;
  padding-top: ${props => props.theme.space.two};
`;

const Socket = styled.p`
  text-align: center;
  padding-top: ${props => props.theme.space.one};
`;
/* TODO: (C) current year */
export default () => (
  <Footer>
    <Socials />
    <Menu />
    <Logo
      src={smWhiteLogo}
      alt="Labrysinthe's logo, a maze-like labrys axe."
      height="104px"
      width="90px"
    />
    <Socket role="contentinfo">&copy; 2018 Labrysinthe</Socket>
  </Footer>
);
