import React from 'react';
import Menu from '../components/Menu';
import Newsletter from '../components/Newsletter';
import Socials from '../components/Socials';

export default () => (
  <footer id="newsletter">
    <Newsletter />
    <Socials />
    <nav>
      <Menu />
    </nav>
    <div role="contentinfo">&copy; 2018 Labrysinthe</div>
  </footer>
);
