import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
//
const Ol = styled.ol`
  padding: ${props => props.theme.space.one} 0 ${props => props.theme.space.two} 0;
  background-color: ${props => props.theme.color.overlayMedium};
  border-top: solid 1px ${props => props.theme.color.overlayLight};
  border-bottom: solid 1px black;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
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

const A = styled.a`
  color: ${props => props.theme.color.brandWhite};
  text-decoration: none;

  &:active {
    color: ${props => props.theme.color.overlayLighter};
    /* border-style: solid;
    border-width: 0 0 ${props => props.theme.border.size.base} 0;
    border-color: ${props => props.theme.color.overlayLighter}; */
  }
`;

/**
 * These need to be <a> elements to avoid
 * auto scroll to top when using <Link> or <NavLink>
 */

export default ({ className, ...props }) => (
  <Ol className={className}>
    <Li>
      <A href="/#home">Home</A>
    </Li>
    <Li>
      <A href="/#shows">Shows</A>
    </Li>
    <Li>
      <A href="/#music">Music</A>
    </Li>
    <Li>
      <A href="/#bio">Bio</A>
    </Li>
    <Li>
      <A href="/#newsletter">Newsletter</A>
    </Li>
    <Li>
      <A href="/#contact">Contact</A>
    </Li>
  </Ol>
);
