import React from 'react';
import Nav from '../components/Nav';
import logoImg from '../images/logo-header-90x104.png';

export default () => (
  <header>
    <img src={logoImg} alt="Labrysinthe's logo, a maze-like labrys axe." width="90px" height="104px" className="logo" />
    <h1 className="site-title">Labrysinthe</h1>
    <Nav />
  </header>
);
