import React from 'react';
import styled from 'styled-components';
//
import Menu from '../components/Menu';
import Socials from '../components/Socials';
//
import logo from '../images/logo-color-90x102.png';
//
const Footer = styled.footer`
  padding: 0 2rem ${props => props.theme.space.one} 2rem;

  @media (min-width: 576px) {
    padding: 1.2rem 4rem 2rem 4rem;
  }
`;

const Nav = styled.nav`
  li {
    padding-right: 0;
  }
`;

const Logo = styled.img`
  margin: 0 auto;
  display: block;
  padding-top: ${props => props.theme.space.one};
`;

const Socket = styled.p`
  text-align: center;
  padding-top: ${props => props.theme.space.one};
`;
/* TODO: (C) current year */
export default () => (
  <Footer>
    <Socials />
    <Nav>
      <Menu />
    </Nav>
    <Logo
      src={logo}
      alt="Labrysinthe's logo, a maze-like labrys axe."
      height="104px"
      width="90px"
    />
    <Socket role="contentinfo">&copy; 2018 Labrysinthe</Socket>
  </Footer>
);
