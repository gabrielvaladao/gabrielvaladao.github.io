import React from 'react';
import Menu from '../components/Menu';
import Newsletter from '../components/Newsletter';
import Socials from '../components/Socials';

export default () => (
  <footer role="contentinfo">
    <Newsletter />
    <Socials />
    <nav>
      <Menu />
    </nav>
    &copy; 2018 Labrysinthe
  </footer>
);
