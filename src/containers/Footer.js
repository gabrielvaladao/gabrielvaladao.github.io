import React from 'react';
import Nav from '../components/Nav';

export default () => (
  <footer role="contentinfo">
    <Nav />

    {/* signup form (large) */}
    <h2>Sign up</h2>
    <p>
      Show some love and be the first to hear about upcoming gigs. We'll respect your privacy and promise not to spam you.
    </p>
    <form id="signup-lg" action="" method="post">
      <label htmlFor="signup-lg-email">
        Email
        <input type="email" id="signup-lg-email" required />
      </label>
      <button type="submit">Sign up</button>
    </form>

    {/* socket */}
    &copy; 2018 Labrysinthe
  </footer>
);
