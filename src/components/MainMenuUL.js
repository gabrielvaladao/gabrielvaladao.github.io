import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';

const MainMenuUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 2.5em 0 0;
  ${/* Hide shadow w/ -8px while 'closed' */''}
  box-shadow: -8px 0 8px rgba(0,0,0,0.5);
  min-height: 100%;
  width: 200px;
  background: #1a1a1a;

  ${/* Larger displays than tablet */''}
  @media (min-width: 768px) {
    display: flex;
    padding: 0;
    box-shadow: none;
    height: auto;
    width: auto;
    background: none;
  }
`;

const MainMenuLI = styled.li`
  &:first-child a {
    border-top: 1px solid #383838;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0.75em 15px;
  line-height: 1em;
  font-size: 1em;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #383838;
  &:hover,
  &:focus {
    background: #333;
    text-decoration: underline;
  }

  ${/* Larger displays than tablet */''}
  @media (min-width: 768px) {
    color: #06c;
    border: 0 !important;

    &:hover,
    &:focus {
      background: none;
      color: #639;
    }
  }
`;

export default () => (
  <MainMenuUL>
    <MainMenuLI>
      <StyledNavLink exact to="/">
        Home
      </StyledNavLink>
    </MainMenuLI>
    <MainMenuLI>
      <StyledNavLink to="/shows">
        Shows
      </StyledNavLink>
    </MainMenuLI>
    <MainMenuLI>
      <StyledNavLink to="/music">
        Music
      </StyledNavLink>
    </MainMenuLI>
    <MainMenuLI>
      <StyledNavLink to="/bio">
        Bio
      </StyledNavLink>
    </MainMenuLI>
    <MainMenuLI>
      <StyledNavLink to="/press">
        Press
      </StyledNavLink>
    </MainMenuLI>
    <MainMenuLI>
      <StyledNavLink to="/contact">
        Contact
      </StyledNavLink>
    </MainMenuLI>
  </MainMenuUL>
);
