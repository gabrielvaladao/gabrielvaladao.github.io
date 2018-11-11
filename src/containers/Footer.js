import React from 'react';
import Menu from '../components/Menu';
import Newsletter from '../components/Newsletter';

export default () => (
  <footer role="contentinfo">

    <Newsletter />

    <nav><Menu /></nav>

    {/* socket */}
    &copy; 2018 Labrysinthe
  </footer>
);
