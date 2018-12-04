import React from 'react';
import styled from 'styled-components';
//
const Ol = styled.ol`
  background-color: ${({ theme }) => theme.color.overlayMedium};
  border-top: solid 1px ${({ theme }) => theme.color.overlayLight};
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
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

const A = styled.a`
  color: ${({ theme }) => theme.color.brandWhite};
  text-decoration: none;

  &:active {
    color: ${({ theme }) => theme.color.overlayLighter};
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
