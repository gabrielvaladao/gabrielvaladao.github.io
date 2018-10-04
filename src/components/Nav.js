import React from 'react';
import { Link } from 'react-static';
import MainMenu from './MainMenu';

/*
  TODO: Does Link support 'title' attributes?
  Should I use them here, or should I use
  aria-label and/or aria-tooltip?
*/

/* TODO: use icons for nav buttons */
export default () => (
  <React.Fragment>
    <Link
      to="#main-menu"
      id="main-menu-toggle"
      role="button"
      className="menu-toggle"
      aria-expanded="false"
      aria-controls="main-menu"
      aria-label="Open the main menu"
    >
      <span className="sr-only">Open the main menu</span>
      <span aria-hidden="true">=</span>
    </Link>

    <nav aria-label="primary">

      <Link
        to="#main-menu-toggle"
        id="main-menu-close"
        role="button"
        className="menu-close"
        aria-expanded="false"
        aria-controls="main-menu"
        aria-label="Close the main menu"
      >
        <span className="sr-only">Close the main menu</span>
        <span aria-hidden="true">x</span>
      </Link>

      <MainMenu />

    </nav>

    <Link to="#main-menu-toggle" className="backdrop" tabIndex="-1" aria-hidden="true" hidden />
  </React.Fragment>
);
