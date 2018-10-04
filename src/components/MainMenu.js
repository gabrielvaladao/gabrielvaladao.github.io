import React from 'react';
import { NavLink } from 'react-static';

export default () => (
  <ul>
    <li><NavLink exact to="/">Home</NavLink></li>
    <li><NavLink to="/shows">Shows</NavLink></li>
    <li><NavLink to="/music">Music</NavLink></li>
    <li><NavLink to="/bio">Bio</NavLink></li>
    <li><NavLink to="/press">Press</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </ul>
);
