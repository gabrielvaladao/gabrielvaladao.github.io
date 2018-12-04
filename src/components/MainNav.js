import React from 'react';
import { NavLink, Link } from 'react-static';
import styled from 'styled-components';
//
import Menu from './Menu';
//
const MainNav = styled.nav`
  /* MiniNav items, drawer open + close buttons */
  a {
    display: inline-block;
    color: ${({ theme }) => theme.color.brandWhite};
    text-decoration: none;
    line-height: ${({ theme }) => theme.type.primary.lineHeight};

    &:hover {
      border-bottom: solid ${({ theme }) => theme.border.size.base}
        ${({ theme }) => theme.color.brandWhite};
    }

    &:active {
      color: ${({ theme }) => theme.color.overlayLighter};
      border-color: ${({ theme }) => theme.color.overlayLighter};
    }
  }
`;

const MiniMenu = styled.ol`
  position: absolute;
  top: 0;
  right: 1rem;
  padding: ${({ theme }) => theme.space.one} 0 0 0;
  z-index: 998;
  list-style-type: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Li = styled.li`
  text-align: right;
  display: inline;
  padding-right: 1ch;

  &:last-child {
    padding-right: 0;
  }
`;

const ResponsiveLi = styled(Li)`
  display: none;

  @media (min-width: 576px) {
    display: inline;
  }
`;

const Drawer = styled.div`
  background-color: ${({ theme }) => theme.color.overlayDark};
  position: absolute;
  right: -75vw;
  /* hide box shadow while drawer is closed */
  box-shadow: 8px 0 8px rgba(0, 0, 0, 0.7);
  top: 0;
  height: 100%;
  z-index: 1000;
  overflow-x: visible;
  overflow-y: scroll;
  transition: right 0.25s ease;

  /** 
   * Close button override. This style doesn't work
   * in CloseLink below. Needs to be defined here instead.
   */

  & > a {
    @media (min-width: 768px) {
      display: none;
    }
  }

  & > a:hover {
    border: none;
  }

  & > a:active {
    color: ${({ theme }) => theme.color.overlayLight};
  }

  &:target {
    right: 0;
    outline: none;
    box-shadow: -5px 0 12px rgba(0, 0, 0, 0.7);

    & + .backdrop {
      position: absolute;
      display: block;
      content: '';
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      cursor: default;
      z-index: 999;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  @supports (position: fixed) {
    position: fixed;

    &:target + .backdrop {
      position: fixed;
    }
  }

  @media (min-width: 768px) {
    /* Undo positioning of off-canvas menu */
    background: none;
    position: relative;
    right: auto;
    top: auto;
    height: auto;
    box-shadow: none;
  }
`;

const HeaderMenu = styled(Menu)`
  /* Drawer position */
  margin: 0;
  min-height: 100%;
  width: 75vw;

  li {
    text-align: left;
    padding-left: ${({ theme }) => theme.space.two};
  }

  li:first-of-type {
    margin-top: ${({ theme }) => theme.space.four};
  }

  a:hover {
    border: none;
  }

  /* Top position */
  @media (min-width: 768px) {
    display: flex;
    top: 0;
    height: auto;
    width: auto;
    background: none;
    justify-content: flex-end;
    box-shadow: none;
    padding: ${({ theme }) => theme.space.half} 0;
    font-size: ${({ theme }) => theme.type.smaller.fontSize};

    li {
      padding-left: 0;
      padding-right: 1ch;

      &:last-child {
        padding-right: 0;
      }
    }

    li:first-of-type {
      margin-top: 0;
    }

    li:hover {
      background: none;
    }

    a {
      color: ${({ theme }) => theme.color.brandWhite};
      text-decoration: none;
      border-style: solid;
      border-width: 0 0 ${({ theme }) => theme.border.size.base} 0;
      border-color: rgba(0, 0, 0, 0);

      &:hover {
        border-style: solid;
        border-width: 0 0 ${({ theme }) => theme.border.size.base} 0;
        border-color: ${({ theme }) => theme.color.brandWhite};
      }

      &:active {
        color: ${({ theme }) => theme.color.overlayLighter};
        border-color: ${({ theme }) => theme.color.overlayLighter};
      }
    }
  }

  @media (min-width: 992px) {
    font-size: ${({ theme }) => theme.type.small.fontSize};
  }
`;

const OpenLink = styled(Link)`
  &:target + .drawer {
    transition: right 0.2s ease;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

/**
 * Define styles for CloseLink in Drawer > a above
 * if they don't work here
 */
const CloseLink = styled(Link)`
  position: absolute;
  right: 0.5ch;
  top: 0.5ch;
  z-index: 1001;
  font-size: ${({ theme }) => theme.type.h1.fontSize};

  &:hover {
    color: ${({ theme }) => theme.color.overlayLighter};
  }
`;

const Backdrop = styled(Link)`
  @media (min-width: 768px) {
    display: none;
  }
`;

/* TODO: add role aria-controls aria-expanded to Open Close and Drawer */
export default () => (
  <MainNav>
    <MiniMenu id="mini-menu">
      <ResponsiveLi key="newsletter">
        <NavLink to="#newsletter">Newsletter</NavLink>
      </ResponsiveLi>
      <Li key="open">
        <OpenLink
          to="#menu"
          id="open"
          role="button"
          aria-controls="menu"
          aria-label="Open the main menu"
        >
          Menu
        </OpenLink>
      </Li>
    </MiniMenu>

    <Drawer id="menu" className="drawer">
      <CloseLink to="#open" role="button" aria-controls="menu" aria-label="Close the main menu">
        <span role="img">&#215;</span>
      </CloseLink>
      <HeaderMenu />
    </Drawer>
    <Backdrop className="backdrop" to="#open" />
  </MainNav>
);
