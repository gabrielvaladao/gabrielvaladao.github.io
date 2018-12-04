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

  font-size: ${({ theme }) => theme.type.large.fontSize};
  font-family: ${({ theme }) => theme.type.primary.fontFamily};
  font-weight: ${({ theme }) => theme.type.primary.fontWeight};
  line-height: ${({ theme }) => theme.type.primary.lineHeight};
  padding: ${({ theme }) => theme.space.half} 0;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.color.overlayLight};
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
