import React from 'react';
import styled from 'styled-components';
//
import Menu from '../components/Menu';
import Socials from '../components/Socials';
//
import smWhiteLogo from '../images/logo-white-90x104.png';
//
const Wrapper = styled.footer`
  padding: 0 0 ${({ theme }) => theme.space.one} 0;
`;

const StyledMenu = styled(Menu)`
  border-bottom: 1px solid black;
  padding: ${({ theme }) => theme.space.one} 0 ${({ theme }) => theme.space.two} 0;
`;

const Logo = styled.img`
  margin: 0 auto;
  display: block;
  padding-top: ${({ theme }) => theme.space.two};
`;

const Socket = styled.p`
  text-align: center;
  padding-top: ${({ theme }) => theme.space.one};
`;
/* TODO: (C) current year */
const Footer = () => (
  <Wrapper>
    <Socials />
    <StyledMenu />
    <Logo
      src={smWhiteLogo}
      alt="Labrysinthe's logo, a maze-like labrys axe."
      height="104px"
      width="90px"
    />
    <Socket role="contentinfo">&copy; 2018 Labrysinthe</Socket>
  </Wrapper>
);

export default Footer;
