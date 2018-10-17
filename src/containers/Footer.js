import React from 'react';
import Menu from '../components/Menu';
import SignUpForm from '../components/SignUpForm';

export default () => (
  <footer role="contentinfo">

    <SignUpForm />

    <nav><Menu /></nav>

    {/* socket */}
    &copy; 2018 Labrysinthe
  </footer>
);
