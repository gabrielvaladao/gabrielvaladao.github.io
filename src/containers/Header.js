import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
//
import Menu from '../components/Menu';
import StyledNavLink from '../elements/StyledNavLink';
//
const Wrapper = styled.header`
  top: 0;
`;

const Nav = styled.nav`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: ${props => props.theme.space.one} 0 0 0;
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
  padding-bottom: ${props => props.theme.space.quarter}
  border-bottom: solid ${props => props.theme.border.size.base} ${props => props.theme.color.brandWhite};

  &:hover {
    color: ${props => props.theme.color.primaryLight};
    border-color: ${props => props.theme.color.primaryLight};
  }

  &:active {
    color: ${props => props.theme.color.primaryDark};
    border-color: ${props => props.theme.color.primaryDark};
  }
`;

export default () => (
  <Wrapper id="home">
    <Nav>
      <Ul>
        <Li>
          <HeaderNavLink>Menu</HeaderNavLink>
        </Li>
        <ResponsiveLi>
          <HeaderNavLink to="/#newsletter">Newsletter</HeaderNavLink>
        </ResponsiveLi>
      </Ul>
    </Nav>
  </Wrapper>
);
