import React from 'react';
import { NavLink, Link } from 'react-static';
import styled from 'styled-components';
//
import Menu from './Menu';
//
const MainNav = styled.nav`
  font-size: ${props => props.theme.type.large.fontSize};

  /**
   * Ignore the base rem size change that otherwise
   * happens at this breakpoint (see App.js)
   */
  @media (min-width: 576px) {
    font-size: ${props => props.theme.type.primary.fontSize};
  }

  /* MiniNav items, drawer open + close buttons */
  a {
    color: ${props => props.theme.color.brandWhite};
    text-decoration: none;
    padding-bottom: ${props => props.theme.space.quarter};

    /* TODO: don't apply this to close link */
    &:hover {
      border-bottom: solid ${props => props.theme.border.size.base} ${props => props.theme.color.brandWhite};
    }

    &:active {
      color: ${props => props.theme.color.overlayLighter};
      border-color: ${props => props.theme.color.overlayLighter};
    }
  }
`;

const MiniMenu = styled.ol`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: ${props => props.theme.space.one} 0 0 0;
  z-index: 998;
  list-style-type: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Li = styled.li`
  font-size: 0.9em;
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
  background-color: ${props => props.theme.color.overlayDark};
  position: absolute;
  right: -60vw;
  /* hide box shadow while drawer is closed */
  box-shadow: 8px 0 8px rgba(0, 0, 0, 0.7);
  top: 0;
  height: 100%;
  z-index: 1000;
  overflow-x: visible;
  overflow-y: hidden;
  transition: right 0.25s ease;

  /** 
   * Close button override. This style doesn't work
   * in CloseLink below. Needs to be defined here instead.
   */
  & > a:hover {
    border: none;
  }

  & > a:active {
    color: ${props => props.theme.color.overlayLight};
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
  }
`;

const HeaderMenu = styled(Menu)`
  /* Drawer position */
  margin: 0;
  padding: ${props => props.theme.space.three} 0 0;
  min-height: 100%;
  width: 60vw;

  li {
    text-align: left;
    padding-left: ${props => props.theme.space.two};
  }

  a:hover {
    border: none;
  }

  /* Top position */
  @media (min-width: 768px) {
    display: flex;
    height: auto;
    width: auto;
    background: none;
    justify-content: flex-end;

    li {
      padding-left: 0;
      padding-right: 1ch;
    }

    li:hover {
      background: none;
    }

    a {
      color: ${props => props.theme.color.brandWhite};
      text-decoration: none;

      &:hover {
        border-style: solid;
        border-width: 0 0 ${props => props.theme.border.size.base} 0;
        border-color: ${props => props.theme.color.brandWhite};
      }

      &:active {
        color: ${props => props.theme.color.overlayLighter};
        border-color: ${props => props.theme.color.overlayLighter};
      }
    }
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
  font-size: ${props => props.theme.type.h1.fontSize};

  &:hover {
    color: ${props => props.theme.color.overlayLighter};
  }

  @media (min-width: 768px) {
    display: none;
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
      <ResponsiveLi>
        <NavLink to="#newsletter">Newsletter</NavLink>
      </ResponsiveLi>
      <Li>
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
        &#215;
      </CloseLink>
      <HeaderMenu />
    </Drawer>
    <Backdrop className="backdrop" to="#open" />
  </MainNav>
);
