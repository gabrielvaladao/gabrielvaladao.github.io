import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';

import SiteTitle from '../components/SiteTitle';
import Nav from '../components/Nav';
import logoImg from '../images/logo-header-90x104.png';

const Wrapper = styled.header`
  background-color: #08000f;
  color: #fefdff;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: inherit;
  &:hover { border: none; }
`;

/*
  margin-left on logo allows the curved left edge to spill over.
*/
const Logo = styled.img`
  margin-left: -0.25rem;
  padding: 3rem 2.5rem 2rem 0;
  display: inline-block;
`;

export default () => (
  <Wrapper>
    <StyledNavLink to="/">
      <Logo src={logoImg} alt="Labrysinthe's logo, a maze-like labrys axe." width="90px" height="104px" className="logo" />
      <SiteTitle />
    </StyledNavLink>
    <Nav />
  </Wrapper>
);
