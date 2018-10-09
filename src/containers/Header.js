import React from 'react';
import Nav from '../components/Nav';
import logoImg from '../logo-header-90x104.png';

export default () => (
  <header>
    <img src={logoImg} alt="Labrysinthe's logo, a maze-like labrys axe." width="90px" height="104px" />
    <h1 id="site-title">Labrysinthe</h1>
    <Nav />
  </header>
);
