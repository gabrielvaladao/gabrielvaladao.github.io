import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';

const MainMenu = styled.ul`
  color: #cc0;
`;
export default () => (
  <MainMenu>
    <li><NavLink exact to="/">Home</NavLink></li>
    <li><NavLink to="/shows">Shows</NavLink></li>
    <li><NavLink to="/music">Music</NavLink></li>
    <li><NavLink to="/bio">Bio</NavLink></li>
    <li><NavLink to="/press">Press</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </MainMenu>
);
