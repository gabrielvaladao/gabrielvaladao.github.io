import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
import MainMenuUL from './MainMenuUL';

/* TODO: use icons for nav buttons */

const MenuToggle = styled(Link)`
  display: inline-block;
  padding: 0.75em 15px;
  color: #ccc;
  &:hover,
  &:focus {
    color: #639;
  }

  ${/* Larger displays than tablet */''}
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuClose = styled(Link)`
  position: absolute;
  right: 0;
  top: 0;

  ${/* Larger displays than tablet */''}
  @media (min-width: 768px) {
    display: none;
  }
`;

const MainMenu = styled.nav`
  position: absolute;
  left: -200px;
  top: 0;
  height: 100%;
  overflow-x: visible;
  overflow-y: scroll;
  transition: left 0.3s ease,
              box-shadow 0.3s ease;
  z-index: 999;

  &:target,
  &[aria-expanded="true"] {
    left: 0;
    outline: none;
    box-shadow: 3px 0 12px rgba(0,0,0,0.25);
  }

  &:target .menu-close,
  &[aria-expanded="true"] .menu-close {
    z-index: 1001;
  }

  &:target ul,
  &[aria-expanded="true"] ul {
    position: relative;
    z-index: 1000;
  }

  &:target + .backdrop,
  &:[aria-expanded="true"] + .backdrop {
    position: absolute;
    display: block;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background: #000;
    background: rgba(0,0,0,0.85);
    cursor: default;
  }

  @supports (position: fixed) {
    position: fixed;

    &:target + .backdrop,
    &[aria-expanded="true"] + .backdrop {
      position: fixed;
    }
  }

  ${/* Larger displays than tablet */''}
  @media (min-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
    height: auto;
  }
`;

export default () => (
  <React.Fragment>
    <MenuToggle
      to="#main-menu"
      id="main-menu-toggle"
      role="button"
      className="menu-toggle"
      aria-expanded="false"
      aria-controls="main-menu"
      aria-label="Open the main menu"
    >
      <span className="sr-only">Open the main menu</span>
      <span aria-hidden="true">Menu</span>
    </MenuToggle>

    <MainMenu
      id="main-menu"
      className="main-menu"
      aria-label="primary"
      aria-expanded="false"
    >

      <MenuClose
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
      </MenuClose>

      <MainMenuUL />

    </MainMenu>

    <Link to="#main-menu-toggle" className="backdrop" tabIndex="-1" aria-hidden="true" hidden />
  </React.Fragment>
);
