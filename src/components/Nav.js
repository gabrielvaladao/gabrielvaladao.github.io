import React from 'react';
import { Link, NavLink } from 'react-static';

/* TODO: use icons for nav buttons */
export default () => (
  <React.Fragment>
    <a
      href="#main-menu"
      id="main-menu-toggle"
      role="button"
      className="menu-toggle"
      aria-expanded="false"
      aria-controls="main-menu"
      aria-label="Open the main menu"
    >
      <span className="sr-only">Open the main menu</span>
      <span aria-hidden="true">=</span>
    </a>

    <nav aria-label="primary">

      <a
        href="#main-menu-toggle"
        id="main-menu-close"
        role="button"
        className="menu-close"
        aria-expanded="false"
        aria-controls="main-menu"
        aria-label="Close the main menu"
      >
        <span className="sr-only">Close the main menu</span>
        <span aria-hidden="true">x</span>
      </a>

      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/shows">Shows</NavLink></li>
        <li><NavLink to="/music">Music</NavLink></li>
        <li><NavLink to="/bio">Bio</NavLink></li>
        <li><NavLink to="/press">Press</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

    </nav>

    <a href="#main-menu-toggle" className="backdrop" tabIndex="-1" aria-hidden="true" hidden />
  </React.Fragment>
);
