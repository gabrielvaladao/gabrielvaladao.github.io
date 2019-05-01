import React from 'react';
import styled from 'styled-components';
//
import Menu from '../components/Menu';
import Socials from '../components/Socials';
import { FooterStyles, FooterMenuStyles, LogoStyles, SocketStyles } from './Footer-styles';
//
import smWhiteLogo from '../images/logo-white-90x104.png';
//
const Wrapper = styled.footer`
  ${FooterStyles}
`;

const StyledMenu = styled(Menu)`
  ${FooterMenuStyles}
`;

const Logo = styled.img`
  ${LogoStyles}
`;

const Socket = styled.p`
  ${SocketStyles}
`;
/* TODO: (C) current year */
const Footer = () => (
  <Wrapper>
    <Socials />
    <StyledMenu />
    {false && <Logo
      src={smWhiteLogo}
      alt="Gabriel Valadão's logo."
      height="104px"
      width="90px"
    />}
    {/* TODO: Add year dynamically */}
    <Socket role="contentinfo">&copy; 2019 Gabriel Valadão</Socket>
  </Wrapper>
);

export default Footer;
