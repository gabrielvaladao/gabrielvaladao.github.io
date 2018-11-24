import React from 'react';
import { NavLink } from 'react-static';
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
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: ${props => props.theme.space.one} 0 0 0;

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
  padding-left: 0;
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

export default () => (
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
);
