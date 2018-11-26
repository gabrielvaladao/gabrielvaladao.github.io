import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
//
import Menu from '../components/Menu';
import StyledNavLinkOuter from '../elements/StyledNavLinkOuter';
//
const Wrapper = styled.header`
  top: 0;
  font-size: ${props => props.theme.type.large.fontSize};

  /* Ignore the base rem size change that otherwise happens at this breakpoint (see App.js) */
  @media (min-width: 576px) {
    font-size: ${props => props.theme.type.primary.fontSize};
  }
`;

const MenuButton = styled(Menu)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: ${props => props.theme.space.one} 0 0 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

const FullMenu = styled(Menu)`
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

const HeaderNavLink = styled(StyledNavLinkOuter)`
  a {
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
  }
`;

export default () => (
  <Wrapper id="home">
    <MenuButton />
    <FullMenu full />
  </Wrapper>
);
/*  ORIGINAL WITH STYLES before refactor
export default () => (
  <Wrapper id="home">
    <MiniNav>
      <Ul>
        <ResponsiveLi>
          <StyledNavLinkOuter>
            <NavLink to="/#newsletter">Newsletter</NavLink>
          </StyledNavLinkOuter>
        </ResponsiveLi>
        <Li>
          <StyledNavLinkOuter>Menu</StyledNavLinkOuter>
        </Li>
      </Ul>
    </MiniNav>
    <FullNav>
      <Ul>
        <Li>
          <StyledNavLinkOuter>
            <NavLink to="/#home">Home</NavLink>
          </StyledNavLinkOuter>
        </Li>
        <Li>
          <StyledNavLinkOuter>
            <NavLink to="/#shows">Shows</NavLink>
          </StyledNavLinkOuter>
        </Li>
        <Li>
          <StyledNavLinkOuter>
            <NavLink to="/#music">Music</NavLink>
          </StyledNavLinkOuter>
        </Li>
        <Li>
          <StyledNavLinkOuter>
            <NavLink to="/#bio">Bio</NavLink>
          </StyledNavLinkOuter>
        </Li>
        <Li>
          <StyledNavLinkOuter>
            <NavLink to="/#newsletter">Newsletter</NavLink>
          </StyledNavLinkOuter>
        </Li>
        <Li>
          <StyledNavLinkOuter>
            <NavLink to="/#contact">Contact</NavLink>
          </StyledNavLinkOuter>
        </Li>
      </Ul>
    </FullNav>
  </Wrapper>
); */
