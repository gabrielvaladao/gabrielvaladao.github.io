import React from 'react';
import styled from 'styled-components';
//
import Menu from '../components/Menu';
import Socials from '../components/Socials';

const Footer = styled.footer`
  padding: 0 2rem ${props => props.theme.space.one} 2rem;

  @media (min-width: 576px) {
    padding: 1.2rem 4rem 2rem 4rem;
  }
`;

const Socket = styled.p`
  text-align: center;
  padding-top: ${props => props.theme.space.one};
`;
/* TODO: (C) current year */
export default () => (
  <Footer>
    <Socials />
    <nav>
      <Menu />
    </nav>
    <Socket role="contentinfo">&copy; 2018 Labrysinthe</Socket>
  </Footer>
);
