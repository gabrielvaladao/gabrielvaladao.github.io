import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';

const Ul = styled.ul`
  padding-left: 0;
  max-width: 40rem;
`;

const Li = styled.li`
  font-size: 0.9em;
  padding-right: 1rem;
  text-align: right;
  display: inline;
`;

export default () => (
  <nav>
    <Ul>
      <Li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </Li>
      <Li>
        <NavLink to="/shows">
          Shows
        </NavLink>
      </Li>
      <Li>
        <NavLink to="/music">
          Music
        </NavLink>
      </Li>
      <Li>
        <NavLink to="/bio">
          Bio
        </NavLink>
      </Li>
      <Li>
        <NavLink to="/press">
          Press
        </NavLink>
      </Li>
      <Li>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </Li>
    </Ul>
  </nav>
);
