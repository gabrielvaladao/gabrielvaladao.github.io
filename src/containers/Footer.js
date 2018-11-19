import React from 'react';
import styled from 'styled-components';
//
import Menu from '../components/Menu';
import Newsletter from '../components/Newsletter';
import Socials from '../components/Socials';

const Footer = styled.footer`
  padding: 1.2rem 2rem 2rem 2rem;

  @media (min-width: 576px) {
    padding: 1.2rem 4rem 2rem 4rem;
  }
`;

export default () => (
  <Footer id="newsletter">
    <Newsletter />
    <Socials />
    <nav>
      <Menu />
    </nav>
    <div role="contentinfo">&copy; 2018 Labrysinthe</div>
  </Footer>
);
