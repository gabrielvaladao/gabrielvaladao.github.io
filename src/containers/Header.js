/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link, NavLink } from 'react-static';
import styled from 'styled-components';
//
import Menu from '../components/Menu';
import StyledNavLink from '../elements/StyledNavLink';
//
const Wrapper = styled.header`
  top: 0;
  font-size: ${props => props.theme.type.large.fontSize};

  /* Ignore the base rem size change that otherwise happens at this breakpoint (see App.js) */
  @media (min-width: 576px) {
    font-size: ${props => props.theme.type.primary.fontSize};
  }
`;

const MiniNav = styled.nav`
  /*
  ORIGINAL BEFORE DRAWER
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: ${props => props.theme.space.one} 0 0 0;
  */

  position: absolute;
  left: 200px;
  top: 0;
  height: 100%;
  overflow-x: visible;
  overflow-y: scroll;
  transition: left 0.3s ease,
              box-shadow 0.3s ease;
  z-index: 999;

  & li {
    display: block;
  }

  /* 
   * :target for non-JS
   * aria-expanded="true/false" for JS
  */
  &:target,
  &[aria-expanded="true"] {
    left: 0;
    outline: none;
    box-shadow: 3px 0 12px, rgba(0,0,0,0.25);

    .menu-close {
      z-index: 1001;
    }

    ul {
      position: relative;
      z-index: 1000;
    }
  }



  @media (min-width: 768px) {
    display: none;
  }
`;

const FullNav = styled(MiniNav)`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Ul = styled.ul`
  /*
  ORIGINAL BEFORE DRAWER
  padding-left: 0;
  */
  margin: 0;
  padding: 2.5em 0 0;
  /* Hide shadow w/ -8px while 'closed' */
  box-shadow: -8px 0 8px rgba(0,0,0,0.5);
  min-height: 100%;
  width: 200px;
  
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

const HeaderNavLink = styled(StyledNavLink)`
  color: ${props => props.theme.color.brandWhite};
  text-decoration: none;
  padding-bottom: ${props => props.theme.space.quarter};

  &:hover {
    border-bottom: solid ${props => props.theme.border.size.base} ${props => props.theme.color.brandWhite};
  }

  &:active {
    color: ${props => props.theme.color.primaryOverlay};
    border-color: ${props => props.theme.color.primaryOverlay};
  }
`;

/* TODO: should this button be a navlink, semantically? */
const MenuToggle = styled(HeaderNavLink)`
  display: inline-block;
`;

const MenuClose = styled(HeaderNavLink)`
  position: absolute;
  right: 0;
  top: 0;
`;

export default () => (
  <Wrapper id="home">

    {/**
      * TODO:
      * I want to add menu toggle styles. they are functional. so is navlink.
      * Apply pretty styles after.
      * 
      * I will have to revise the HeaderNavLink definition above for this to work.
      * Please do this before continuing past --Buttons-- from the original css. 
      */}

    <MenuToggle
      to="#main-menu"
      id="main-menu-toggle"
      className="menu-toggle"
      role="button"
      aria-controls="main-menu"
      aria-expanded="false"
      aria-label="Open the main menu"
    >
      <span>Menu</span>
    </MenuToggle>

    <MiniNav
      id="main-menu"
      /* className="main-menu" */
      role="navigation"
      aria-expanded="false"
      aria-label="Main menu"
    >

      <MenuClose
        to="#main-menu-toggle"
        id="main-menu-close"
        className="menu-close"
        aria-expanded="false"
        role="button"
        aria-controls="main-menu"
        aria-label="Close the main menu"
      >
        <span>Close</span>
      </MenuClose>


      <Ul>
        <Li><Link to="#home">Home</Link></Li>
        <Li><Link to="#shows">Shows</Link></Li>
        <Li><Link to="#music">Music</Link></Li>
        <Li><Link to="#bio">Bio</Link></Li>
        <Li><Link to="#press">Press</Link></Li>
        <Li><Link to="#contact">Contact</Link></Li>
      </Ul>

      <Link
        to="#main-menu-toggle"
        className="backdrop"
        tabindex="-1"
        hidden
      />

    </MiniNav>
  </Wrapper>
);

/* original before drawer */

/* export default () => (
  <Wrapper id="home">
    <MiniNav>
      <Ul>
        <ResponsiveLi>
          <HeaderNavLink to="/#newsletter">Newsletter</HeaderNavLink>
        </ResponsiveLi>
        <Li>
          <HeaderNavLink>Menu</HeaderNavLink>
        </Li>
      </Ul>
    </MiniNav>
    <FullNav>
      <Ul>
        <Li>
          <HeaderNavLink to="/#home">Home</HeaderNavLink>
        </Li>
        <Li>
          <HeaderNavLink to="/#shows">Shows</HeaderNavLink>
        </Li>
        <Li>
          <HeaderNavLink to="/#music">Music</HeaderNavLink>
        </Li>
        <Li>
          <HeaderNavLink to="/#bio">Bio</HeaderNavLink>
        </Li>
        <Li>
          <HeaderNavLink to="/#newsletter">Newsletter</HeaderNavLink>
        </Li>
        <Li>
          <HeaderNavLink to="/#contact">Contact</HeaderNavLink>
        </Li>
      </Ul>
    </FullNav>
  </Wrapper>
); */
