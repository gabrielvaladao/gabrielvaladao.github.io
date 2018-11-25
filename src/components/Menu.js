import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
//
import StyledNavLinkInner from '../elements/StyledNavLinkInner';
//
const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  text-align: center;
  list-style-type: none;

  font-size: ${props => props.theme.type.large.fontSize};
  font-family: ${props => props.theme.type.primary.fontFamily};
  font-weight: ${props => props.theme.type.primary.fontWeight};
  line-height: ${props => props.theme.type.primary.lineHeight};
  padding: ${props => props.theme.space.half} 0;

  &:hover {
    color: white;
    background-color: ${props => props.theme.color.overlayLight};
  }
`;

export default () => (
  <Ul>
    <Li>
      <StyledNavLinkInner>
        <NavLink exact to="/#home">
          Home
        </NavLink>
      </StyledNavLinkInner>
    </Li>
    <Li>
      <StyledNavLinkInner>
        <NavLink to="/#shows">Shows</NavLink>
      </StyledNavLinkInner>
    </Li>
    <Li>
      <StyledNavLinkInner>
        <NavLink to="/#music">Music</NavLink>
      </StyledNavLinkInner>
    </Li>
    <Li>
      <StyledNavLinkInner>
        <NavLink to="/#bio">Bio</NavLink>
      </StyledNavLinkInner>
    </Li>
    <Li>
      <StyledNavLinkInner>
        <NavLink to="/#newsletter">Newsletter</NavLink>
      </StyledNavLinkInner>
    </Li>
    <Li>
      <StyledNavLinkInner>
        <NavLink to="/#contact">Contact</NavLink>
      </StyledNavLinkInner>
    </Li>
  </Ul>
);
