import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
import { OlStyles, LiStyles, AStyles } from './Menu-styles';

const Ol = styled.ol`
  ${OlStyles}
`;

const Li = styled.li`
  ${LiStyles}
`;

const A = styled.a`
  ${AStyles}
`;

/**
 * Important:
 * <a> elements are used here to avoid
 * auto scroll to top when using <Link> or <NavLink>
 */

/**
 * Important:
 * className is included as a prop because
 * the styling of this component is determined by the parent.
 * This is so different styles can be applied when this component
 * appears in different locations (e.g. footer, nav drawer) */

/* TODO: Links + keys were added manually. Generate them from routes. */

const Menu = ({ className }) => (
  <Ol className={className}>
    <Li key="home">
      <A href="/#home">Home</A>
    </Li>
    {false && <Li key="shows">
      <A href="/#shows">Shows</A>
    </Li>}
    <Li key="demos">
      <A href="/#demos">Demos</A>
    </Li>
    <Li key="bio">
      <A href="/#bio">Bio</A>
    </Li>
    {false && <Li key="newsletter">
      <A href="/#newsletter">Newsletter</A>
    </Li>}
    <Li key="contact">
      <A href="/#contact">Contact</A>
    </Li>
  </Ol>
);

Menu.propTypes = {
  className: PropTypes.string
};

export default Menu;
