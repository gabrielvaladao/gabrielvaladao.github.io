import React from 'react';
import { Link } from 'react-static';

export default () => (
  <nav aria-label="primary">
    <Link exact to="/">Home</Link>
    <Link to="/shows">Shows</Link>
    <Link to="/music">Music</Link>
    <Link to="/bio">Bio</Link>
    <Link to="/press">Press</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);
