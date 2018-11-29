import React from 'react';
import styled from 'styled-components';
//
import StyledNavLink from '../elements/StyledNavLink';
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
      <StyledNavLink exact to="/#home">
        Home
      </StyledNavLink>
    </Li>
    <Li>
      <StyledNavLink to="/#shows">Shows</StyledNavLink>
    </Li>
    <Li>
      <StyledNavLink to="/#music">Music</StyledNavLink>
    </Li>
    <Li>
      <StyledNavLink to="/#bio">Bio</StyledNavLink>
    </Li>
    <Li>
      <StyledNavLink to="/#newsletter">Newsletter</StyledNavLink>
    </Li>
    <Li>
      <StyledNavLink to="/#contact">Contact</StyledNavLink>
    </Li>
  </Ul>
);